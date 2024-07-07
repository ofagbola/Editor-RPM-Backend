package val

import (
	"fmt"
	"net/mail"
	"regexp"
)

var (
	isValidUsername = regexp.MustCompile(`^[a-z0-9_]+$`).MatchString
	isValidName = regexp.MustCompile(`^[a-zA-Z\s]+$`).MatchString
	isValidPhoneNumber = regexp.MustCompile(`^\+(?:[0-9] ?){6,14}[0-9]$`).MatchString
)

func ValidateString(value string, minLength int, maxLength int) error {
	n := len(value)
	if n < minLength || n > maxLength {
		return fmt.Errorf("must contain from %d-%d characters", minLength, maxLength)
	}
	return nil
}

func ValidateUsername(value string) error {
	if err := ValidateString(value, 3, 100); err != nil {
		return err
	}
	if !isValidUsername(value) {
		return fmt.Errorf("must contain only lowercase letters, digits, or underscore")
	}
	return nil
}

func ValidateName(value string) error {
	if err := ValidateString(value, 3, 100); err != nil {
		return err
	}
	if !isValidName(value) {
		return fmt.Errorf("must contain only letters or spaces")
	}
	return nil
}

func ValidateAccountType(value string) error {
	if err := ValidateString(value, 3, 100); err != nil {
		return err
	}
	return nil
}


func ValidatePassword(value string) error {
	return ValidateString(value, 6, 100)
}

func ValidateEmail(value string) error {
	if err := ValidateString(value, 3, 200); err != nil {
		return err
	}
	if _, err := mail.ParseAddress(value); err != nil {
		return fmt.Errorf("is not a valid email address")
	}
	return nil
}

// ValidateUsernameOrEmail validates input as either a username or email
func ValidateUsernameOrEmail(value string) error {
	if err := ValidateUsername(value); err == nil {
		return nil
	}
	if err := ValidateEmail(value); err == nil {
		return nil
	}
	return fmt.Errorf("input is neither a valid username nor a valid email address")
}

func ValidateEmailId(value int64) error {
	if value <= 0 {
		return fmt.Errorf("must be a positive integer")
	}
	return nil
}

func ValidatePhoneNumber(value string) error {
	if !isValidPhoneNumber(value) {
		return fmt.Errorf("enter a valid phone number i.e +2348106284769")
	}
	return nil
}

func ValidateSecretCode(value int64) error {
	if value <= 0 {
		return fmt.Errorf("must be a positive integer")
	}
	return nil
}