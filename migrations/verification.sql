-- Table: public.verifications

-- DROP TABLE IF EXISTS public.verifications;

CREATE TABLE IF NOT EXISTS public.verifications
(
    user_id character varying(255) COLLATE pg_catalog."default" NOT NULL,
    is_verified boolean NOT NULL DEFAULT false,
    otp character varying(6) COLLATE pg_catalog."default" NOT NULL,
    access_token character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT verifications_pkey PRIMARY KEY (user_id),
    CONSTRAINT user_id UNIQUE NULLS NOT DISTINCT (user_id)
        INCLUDE(user_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.verifications
    OWNER to admin;
-- Index: fki_verifications_fkey

-- DROP INDEX IF EXISTS public.fki_verifications_fkey;

CREATE INDEX IF NOT EXISTS fki_verifications_fkey
    ON public.verifications USING btree
    (user_id COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;