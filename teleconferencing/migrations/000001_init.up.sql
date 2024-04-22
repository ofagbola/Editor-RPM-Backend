
CREATE TABLE chat (
   id SERIAL PRIMARY KEY,
   user_id_1 INTEGER NOT NULL,
   user_id_2 INTEGER NOT NULL,
   message_array JSONB NOT NULL,
   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create file table
CREATE TABLE file (
   id SERIAL PRIMARY KEY,
   file_url VARCHAR(255) NOT NULL,
   file_location VARCHAR(255) NOT NULL,
   file_type VARCHAR(50) NOT NULL,
   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   deleted BOOLEAN NOT NULL DEFAULT FALSE,
   deleted_at TIMESTAMPTZ
);

CREATE TABLE clinicians (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    credentials VARCHAR(255)[] NOT NULL,
    ethnicity VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    language VARCHAR(255) NOT NULL,
    specialties VARCHAR(255)[] NOT NULL,
    image TEXT NOT NULL, -- Assuming base64-encoded image will be stored as text
    clinic_name VARCHAR(255) NOT NULL,
    clinic_id VARCHAR(255) NOT NULL,
    accept_patient BOOLEAN NOT NULL,
    phone_number VARCHAR(20) NOT NULL -- Assuming 20 characters is enough for phone number
);

CREATE INDEX idx_user_id_1 ON chat (user_id_1);
CREATE INDEX idx_user_id_2 ON chat (user_id_2);
