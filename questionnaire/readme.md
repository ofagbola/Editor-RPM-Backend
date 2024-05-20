## Questionnaire Service

Dependencies
- Makefile
- golang-migrate 

Run & Test Questionnaire Server
- run: `make postgres` 
- run: `make createdb`
- run: `make server`

Run Build & Test Containarized Questionnaire Server
- run: `make network`  (to create network)
- run: `make postgres` (create postgres container and add to created network)
- run: `make createdb` (create postgres db)
- run: `make createContainer`
- run: `make runContainer`

TODO
- Validator 
- form validator [...]
- prevent duplicate notifications
- integrate with auth & notification service

<!-- MIGRATION_URL=file://app/db/migration -->