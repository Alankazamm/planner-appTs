# Planner App
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
</br>
### Second and third projects from Compasso Uol PB

## Table of contents
* [General info](#general-info)
* [Deploy](#deploy)
* [Demo](#demo)
* [Technologies](#technologies)
* [Features](#features)
* [Run](#run)


## General info
This project is a weekly planner where users can sign up and log in to view their tasks, create new ones, delete them, or delete all tasks for a selected day of the week. The planner also includes real-time weather forecast and time/day clock. The repository has a custom branch named "AWS," in which all the backend has been third-partied with Lambda for serverless backend, which receives requests from a RESTful API in API Gateway, and retrieves data from a NoSQL DynamoDB database. User login, registration, confirmation code, password renewal, authorization, and session tokens are managed through Cognito. Unfortunately, I no longer have access to the AWS service, so for <strong>now</strong>, only the basic version is hosted.

## Deploy
### Page hosted in here, in [Vercel](https://planner-app-ts.vercel.app/).

## Demo
[![asciicast](Demo Video)
](https://user-images.githubusercontent.com/61434161/235721826-e87ec600-38a2-4f53-b992-a5784dcb9493.mp4)

## Technologies
Project was developed with:
* AWS Cognito for register, verification code, renew password, login and auth (aws branch)
* AWS Api Gateway for Rest Api's endpoints (aws branch)
* AWS Lambda for serverless backend (aws branch)
* AWS DynamoDB for NoSQL database (aws branch)
* React
* React-router
* Rest Api's
* Styled components
* Typescript

## Features
### Login

![image](https://user-images.githubusercontent.com/61434161/220146026-7cf2f06b-df25-4abc-8c60-d96e38684a58.png)

* The user can access his created account with email and password
* Icons move inside/outside inputs, giving dynamism to form

---
![image](https://user-images.githubusercontent.com/61434161/220146948-67e5dd3a-91da-4273-b051-5f072c8aca39.png)

* Error's treatment
* UI sinalizing
* User must send incorrect values, and the credentials must match with API's storage
---
![image](https://user-images.githubusercontent.com/61434161/220147982-a701a98a-5828-41f2-89ee-8dd290108e39.png)

* Sistem's validation
* Logo redirects to Compasso's website
* Redirect link at footer in case of interest in login/sign-up
---	
![image](https://user-images.githubusercontent.com/61434161/220149212-893c723a-4549-43a0-9099-c1efc7a76fc1.png)

The dashboard header includes:
<br />
* Clock<br />
* Weather Forecast, that's fetchs the user signed city<br />
* Logout button and logo that redirects to Compasso's website<br />
---	
![image](https://user-images.githubusercontent.com/61434161/220149454-03b265d6-a745-4808-bd5d-a4d1ddece588.png)<br />
The button's section:<br />
* Inputs to set the description, day of the week and hour(currently disabled) for a new task<br />
* Add task/Delete weekly tasks<br />
* Week Navigation to filter tasks by the wished day of the week<br />
---
![image](https://user-images.githubusercontent.com/61434161/220150151-7c2f7c33-ce45-4d68-804b-bfc78394f0fc.png)<br />
* The tasks are displayed with their respective week color palette<br />
* They have each, a individual delete button<br />
* Tasks with same hour anters in conflict, and it's ddisplayed grey<br />
---
![image](https://user-images.githubusercontent.com/61434161/220150736-454fc33e-b6a4-4e57-9577-2e905e2e7b30.png)<br />

---

![image](https://user-images.githubusercontent.com/61434161/220150896-743be364-7f22-42ed-87fe-92b359aab4a3.png)<br />
---
There's some modals too:<br />
* For server errors<br />
* Confirm Delete<br />
* Confirm Weekly delete<br />
* Loading UI<br />
---
## Run

In the project directory, you can run:
### `npm start`


	

