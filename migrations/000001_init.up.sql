
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

CREATE INDEX idx_user_id_1 ON chat (user_id_1);
CREATE INDEX idx_user_id_2 ON chat (user_id_2);
