-- Table: public.patient_insurance

-- DROP TABLE IF EXISTS public.patient_insurance;

CREATE TABLE IF NOT EXISTS public.patient_insurance
(
    medical_history character varying(255)[] COLLATE pg_catalog."default",
    provider character varying(255) COLLATE pg_catalog."default",
    out_of_network_expenses character varying(255) COLLATE pg_catalog."default",
    co_pay character varying(255) COLLATE pg_catalog."default",
    out_of_pocket_expenses character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default" NOT NULL,
    user_id character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT patient_insurance_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.patient_insurance
    OWNER to admin;