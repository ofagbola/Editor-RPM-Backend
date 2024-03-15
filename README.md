
## Scheduler-Backend

  

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

  

#### 1. Test Subscription Client:

- The subscription service is used in creating subscription packages users can opt into.

- To test for subscription, you'll first need to go to the `./src/client.tests/subscription.client.tests.ts` file, and manually select the operation you'd like to perform.

- Next, you'll need to go to the `./src/constants/subscription.constant.ts` file, and manually select or input the data you'd like to used in performing your selected operation.

- Finally, you run command `yarn run test:subscription` to start test.

	>***Note:***  you may need to maually change subscription test folder from `./src/client.tests/subscription.client.tests.ts` to `./dist/client.tests/subscription.client.tests.ts` in the `package.json` file, if you initially ran command `yarn run build:clean` after selecting input data. 
	
	>But it is advisable to run test on `./src/client.tests/subscription.client.tests.ts`, due to the constant changes that will be made to data inputs.


#### 2. Test User Subscription Client:

- The user subscription service is used in recording subscriptions made by users.

- To test for user subscription, you'll first need to go to the `./src/client.tests/user.subscription.client.tests.ts` file, and manually select the operation you'd like to perform.

- Next, you'll need to go to the `./src/constants/user.subscription.constant.ts` file, and manually select or input the data you'd like to used in performing your selected operation.

- Finally, you run command `yarn run test:user:subscription` to start test.

	>***Note:***  you may need to maually change user subscription test folder from `./src/client.tests/user.subscription.client.tests.ts` to `./dist/client.tests/user.subscription.client.tests.ts` in the `package.json` file, if you initially ran command `yarn run build:clean` after selecting input data. 
	
	>But it is advisable to run test on `./src/client.tests/user.subscription.client.tests.ts`, due to the constant changes that will be made to data inputs.
 successful and efficient development process.

#### 3. Test Schedule Client:

- The schedule service is used in scheduling teleconferencing meetings, and questionnaires.

- To test for schedule, you'll first need to go to the `./src/client.tests/schedule.client.tests.ts` file, and manually select the operation you'd like to perform.

- Next, you'll need to go to the `./src/constants/schedule.constant.ts` file, and manually select or input the data you'd like to used in performing your selected operation.

- Finally, you run command `yarn run test:schedule` to start test.

	>***Note:***  you may need to maually change schedule test folder from `./src/client.tests/schedule.client.tests.ts` to `./dist/client.tests/schedule.client.tests.ts` in the `package.json` file, if you initially ran command `yarn run build:clean` after selecting input data. 
	
	>But it is advisable to run test on `./src/client.tests/schedule.client.tests.ts`, due to the constant changes that will be made to data inputs.
 successful and efficient development process.

#### 4. Test Review Client:

- The review service is used in recording patient reviews on doctors and sessions.

- To test for review, you'll first need to go to the `./src/client.tests/review.client.tests.ts` file, and manually select the operation you'd like to perform.

- Next, you'll need to go to the `./src/constants/review.constant.ts` file, and manually select or input the data you'd like to used in performing your selected operation.

- Finally, you run command `yarn run test:review` to start test.

	>***Note:***  you may need to maually change review test folder from `./src/client.tests/review.client.tests.ts` to `./dist/client.tests/review.client.tests.ts` in the `package.json` file, if you initially ran command `yarn run build:clean` after selecting input data. 
	
	>But it is advisable to run test on `./src/client.tests/review.client.tests.ts`, due to the constant changes that will be made to data inputs.
 successful and efficient development process.

### Ports and Urls: 

####  1. Redis Port:
- Redis runs on the designated port `:6379`, this could be changed in `./schedule/docker-compose.yml`.

- Redis does not have any designated urls, it automatically select custom url provided by local machine.
- 
####  2. Postgres Port:
- Postgres runs on the designated port `:6500` or `:5432`, this could be changed in `./schedule/docker-compose.yml`.

- Postgres does not have any designated urls, it automatically select custom url provided by local machine.

####  3. Server Port:
- Server runs on the designated port `:3003` , this could be changed in the `./scheduler.docker-compose.yaml` and `.env` file. you could also try to change it in `./src/config/default.ts` file, if any issues arise.

- Server has a designated url of `0.0.0.0`, this could be changed in the `.env` file. you could also try to change it in `./src/config/default.ts` file, if any issues arise