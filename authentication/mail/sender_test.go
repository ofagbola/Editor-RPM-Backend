package mail

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/util"
)

func TestSendEmailWithGmail(t *testing.T) {
	if testing.Short() {
		t.Skip()
	}

	config, err :=  util.LoadConfig("..")
	require.NoError(t, err)

	sender := NewGmailSender(config.EmailSenderName, config.EmailSenderAddress, config.EmailSenderPassword)

	subject := "A test email"
	content := `
	<h1>Hello world</h1>
	<p>This is a test message from <a href="http://localhost:9098">Editor RPM</a></p>
	`
	to := []string{"ofagbola@evonmedics.org"}
	attachFiles := []string{"../README.md"}

	err = sender.SendEmail(subject, content, to, nil, nil, attachFiles)
	require.NoError(t, err)
}