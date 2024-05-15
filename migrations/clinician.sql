-- Table: public.clinicians

-- DROP TABLE IF EXISTS public.clinicians;

CREATE TABLE IF NOT EXISTS public.clinicians
(
    credentials character varying(255)[] COLLATE pg_catalog."default",
    specialties character varying(255)[] COLLATE pg_catalog."default",
    image character varying(255) COLLATE pg_catalog."default",
    clinic_name character varying(255) COLLATE pg_catalog."default",
    clinic_id character varying(255) COLLATE pg_catalog."default",
    accept_patient boolean NOT NULL DEFAULT false,
    user_id character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT " clinician_pkey" PRIMARY KEY (user_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.clinicians
    OWNER to admin;