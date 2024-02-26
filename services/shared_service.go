package services

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"time"
	"websocket-chat/constants"
	"websocket-chat/dboperations"
	"websocket-chat/models"
)

func UploadGeneralFile(ucm *UserConnectionManager, w http.ResponseWriter, r *http.Request, db *sql.DB) {
	fmt.Println("File Upload Endpoint Hit")

	// Parse our multipart form, 10 << 20 specifies a maximum
	// upload of 10 MB files.
	r.ParseMultipartForm(10 << 20)
	// FormFile returns the first file for the given key `myFile`
	// it also returns the FileHeader so we can get the Filename,
	// the Header and the size of the file
	file, handler, err := r.FormFile("myFile")
	if err != nil {
		fmt.Println("Error Retrieving the File")
		fmt.Println(err)
		return
	}
	defer file.Close()
	fmt.Printf("Uploaded File: %+v\n", handler.Filename)
	fmt.Printf("File Size: %+v\n", handler.Size)
	fmt.Printf("MIME Header: %+v\n", handler.Header)

	// Create a folder for file uploads if it doesn't exist
	uploadsDir := "./uploads"
	err = os.MkdirAll(uploadsDir, os.ModePerm)
	if err != nil {
		http.Error(w, "Failed to create uploads directory", http.StatusInternalServerError)
		return
	}

	// Save the file to the uploads directory
	fileName := handler.Filename
	filePath := filepath.Join(uploadsDir, fileName)
	newFile, err := os.Create(filePath)
	if err != nil {
		http.Error(w, "Failed to save file", http.StatusInternalServerError)
		return
	}
	defer newFile.Close()

	// Copy the file content to the newly created file
	_, err = io.Copy(newFile, file)
	if err != nil {
		http.Error(w, "Failed to copy file content", http.StatusInternalServerError)
		return
	}

	// Respond with the URL to access the uploaded file
	// fileURL := fmt.Sprintf("http://localhost:8009/uploads/%s", fileName)
	fileURL := fmt.Sprintf("%s/uploads/%s", constants.BaseURL, fileName)
	// fmt.Fprintf(w, "File uploaded successfully. You can access it at: %s", fileURL)

	// Write the file details to the table
	fileDetails := models.FileDetails{
		FileURL:      fileURL,
		FileLocation: filePath,
		FileType:     handler.Header.Get("Content-Type"),
		CreatedAt:    time.Now().UTC(),
		Deleted:      false,
	}

	// Call the function to save the file details to the table
	fileId, err := dboperations.WriteToFileTable(fileDetails, db)
	if err != nil {
		http.Error(w, "Failed to write file details to table", http.StatusInternalServerError)
		return
	}
	// Simulated file ID, success message, and file URL
	successMsg := "File uploaded successfully"

	// Create a response struct
	response := models.FileUploadResponse{
		FileID:     fileId,
		SuccessMsg: successMsg,
		FileURL:    fileURL,
	}

	// Marshal the response struct into JSON
	responseJSON, err := json.Marshal(response)
	if err != nil {
		http.Error(w, "Failed to marshal JSON response", http.StatusInternalServerError)
		return
	}

	// Write the JSON response with appropriate headers
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(responseJSON)

}
