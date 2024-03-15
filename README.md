
## Questionnaire-Backend

  

### Setup:

1.  **Database Migration:**

- To migrate database you use the command `yarn run db:migrate` as this initializes your database migrations.

- Next, you enter command `yarn run db:push` to update your migrations with your database.

	>***Note:***  you will need  to  maually change values  like `DATABASE_PORT`, `POSTGRES_PASSWORD`, `POSTGRES_USER`,  `POSTGRES_DB`,  `POSTGRES_HOST`,  `POSTGRES_HOSTNAME`,  `DATABASE_URL`  in the  `.env`  file, to live.

2.  **Generation of Proto Files:**

- To generate proto files, you use command `yarn run proto:gen`.

  >***Note:*** you may need to maually change values like `del` to `rm` in the `package.json` file, depending on the hosted server operating system.

3.  **Build Service (Optional):**

- Although not required, but if you need to build a service, you just type in the command `yarn run build:clean`.
	>***Note:*** you may need to maually change values like `del` to `rm` in the `package.json` file, depending on the hosted server operating system.

4.  **Start Server:**

- To start server you run command `yarn run start:server`.

	>***Note:*** you may need to maually change start folder from `./src/server.ts` to `./dist/server.ts` in the `package.json` file, if you initially ran command `yarn run build:clean`.

  

### Services Client Endpoints Testing:

  

#### 1. Test Question Client:

- The question service is used in creating questions to be added to a questionnaire.

- To test for question, you'll first need to go to the `./src/client.tests/question.client.tests.ts` file, and manually select the operation you'd like to perform.

- Next, you'll need to go to the `./src/constants/question.constant.ts` file, and manually select or input the data you'd like to used in performing your selected operation.

- Finally, you run command `yarn run test:question` to start test.

	>***Note:***  you may need to maually change question test folder from `./src/client.tests/question.client.tests.ts` to `./dist/client.tests/question.client.tests.ts` in the `package.json` file, if you initially ran command `yarn run build:clean` after selecting input data. 
	
	>But it is advisable to run test on `./src/client.tests/question.client.tests.ts`, due to the constant changes that will be made to data inputs.


#### 2. Test Category Client:

- The category service is used in recording different questionnaire categories.

- To test for category, you'll first need to go to the `./src/client.tests/category.client.tests.ts` file, and manually select the operation you'd like to perform.

- Next, you'll need to go to the `./src/constants/category.constant.ts` file, and manually select or input the data you'd like to used in performing your selected operation.

- Finally, you run command `yarn run test:category` to start test.

	>***Note:***  you may need to maually change category test folder from `./src/client.tests/category.client.tests.ts` to `./dist/client.tests/category.client.tests.ts` in the `package.json` file, if you initially ran command `yarn run build:clean` after selecting input data. 
	
	>But it is advisable to run test on `./src/client.tests/category.client.tests.ts`, due to the constant changes that will be made to data inputs.
 successful and efficient development process.

#### 3. Test Questionnaire Client:

- The questionnaire service is used in recording questionnaires for users.

- To test for questionnaire, you'll first need to go to the `./src/client.tests/questionnaire.client.tests.ts` file, and manually select the operation you'd like to perform.

- Next, you'll need to go to the `./src/constants/questionnaire.constant.ts` file, and manually select or input the data you'd like to used in performing your selected operation.

- Finally, you run command `yarn run test:questionnaire` to start test.

	>***Note:***  you may need to maually change questionnaire test folder from `./src/client.tests/questionnaire.client.tests.ts` to `./dist/client.tests/questionnaire.client.tests.ts` in the `package.json` file, if you initially ran command `yarn run build:clean` after selecting input data. 
	
	>But it is advisable to run test on `./src/client.tests/questionnaire.client.tests.ts`, due to the constant changes that will be made to data inputs.
 successful and efficient development process.

#### 4. Test Answer Client:

- The answer service is used in recording patient answers to questions.

- To test for answer, you'll first need to go to the `./src/client.tests/answer.client.tests.ts` file, and manually select the operation you'd like to perform.

- Next, you'll need to go to the `./src/constants/answer.constant.ts` file, and manually select or input the data you'd like to used in performing your selected operation.

- Finally, you run command `yarn run test:answer` to start test.

	>***Note:***  you may need to maually change answer test folder from `./src/client.tests/answer.client.tests.ts` to `./dist/client.tests/answer.client.tests.ts` in the `package.json` file, if you initially ran command `yarn run build:clean` after selecting input data. 
	
	>But it is advisable to run test on `./src/client.tests/answer.client.tests.ts`, due to the constant changes that will be made to data inputs.
 successful and efficient development process.

### Ports and Urls: 

####  1. Redis Port:
- Redis runs on the designated port `:6379`, this could be changed in `./questionnaire/docker-compose.yml`.

- Redis does not have any designated urls, it automatically select custom url provided by local machine.
- 
####  2. Postgres Port:
- Postgres runs on the designated port `:6500` or `:5432`, this could be changed in `./questionnaire/docker-compose.yml`.

- Postgres does not have any designated urls, it automatically select custom url provided by local machine.

####  3. Server Port:
- Server runs on the designated port `:3004` , this could be changed in the `./questionnaire.docker-compose.yaml` and `.env` file. you could also try to change it in `./src/config/default.ts` file, if any issues arise.

- Server has a designated url of `0.0.0.0`, this could be changed in the `.env` file. you could also try to change it in `./src/config/default.ts` file, if any issues arise