# Use the official golang image as a base image
FROM golang:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the Go application source code into the container
COPY . .


# Build the Go application


RUN go build -o main .

RUN chmod +x /app/main

# Expose port 8080 to the outside world
EXPOSE 8084
EXPOSE 8092
EXPOSE 50051
EXPOSE 5432


# Command to run the executable
CMD ["./main"]

