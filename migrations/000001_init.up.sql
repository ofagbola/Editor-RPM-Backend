
CREATE TABLE chat (
   id SERIAL PRIMARY KEY,
   user_id INTEGER NOT NULL,
   recipient_id INTEGER NOT NULL,
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