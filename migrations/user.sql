-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    phone_number character varying(11) COLLATE pg_catalog."default",
    first_name character varying(255) COLLATE pg_catalog."default",
    last_name character varying(255) COLLATE pg_catalog."default",
    dob date,
    password character varying(255) COLLATE pg_catalog."default",
    user_email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    user_id character varying(255) COLLATE pg_catalog."default" NOT NULL,
    user_type character varying(255) COLLATE pg_catalog."default",
    location character varying(255) COLLATE pg_catalog."default",
    ethnicity character varying(255) COLLATE pg_catalog."default",
    gender character varying(255) COLLATE pg_catalog."default",
    language character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (user_id),
    CONSTRAINT user_key UNIQUE NULLS NOT DISTINCT (user_id)
        INCLUDE(user_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to admin;