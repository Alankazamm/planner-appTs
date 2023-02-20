#Planner App
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Second and third projects ftom Compasso Uol PB

## Table of contents
* [General info](#general-info)
* [Features](#features)
* [Run](#run)
* [Technologies](#technologies)


## General info
This project it's a weeokly planner in which the user can sign-up and log-in to see his tasks, delete, create news or delete all from a selected day of the week.

## Features
### Login
![image](https://user-images.githubusercontent.com/61434161/220146026-7cf2f06b-df25-4abc-8c60-d96e38684a58.png)
* The user can access his created account with email and password
* Icons move inside/outside inputs, giving dynamism to form
![image](https://user-images.githubusercontent.com/61434161/220146948-67e5dd3a-91da-4273-b051-5f072c8aca39.png)
* Error's treatment
* UI sinalizing
* User must send incorrect values, and the credentials must match with API's storage
![image](https://user-images.githubusercontent.com/61434161/220147982-a701a98a-5828-41f2-89ee-8dd290108e39.png)
* Sistem's validation
* Logo redirects to Compasso's website
* Redirect link at footer in case of interest in login/sign-up
![image](https://user-images.githubusercontent.com/61434161/220149212-893c723a-4549-43a0-9099-c1efc7a76fc1.png)
The dashboard header includes:
* Clock
* Weather Forecast, that's fetchs the user signed city
* Logout button and logo that redirects to Compasso's website
![image](https://user-images.githubusercontent.com/61434161/220149454-03b265d6-a745-4808-bd5d-a4d1ddece588.png)
The button's section:
* Inputs to set the description, day of the week and hour(currently disabled) for a new task
* Add task/Delete weekly tasks
* Week Navigation to filter tasks by the wished day of the week
![image](https://user-images.githubusercontent.com/61434161/220150151-7c2f7c33-ce45-4d68-804b-bfc78394f0fc.png)
* The tasks are displayed with their respective week color palette
* They have each, a individual delete button
* Tasks with same hour anters in conflict, and it's ddisplayed grey
![image](https://user-images.githubusercontent.com/61434161/220150736-454fc33e-b6a4-4e57-9577-2e905e2e7b30.png)
![image](https://user-images.githubusercontent.com/61434161/220150896-743be364-7f22-42ed-87fe-92b359aab4a3.png)
There's some modals too:
* For server errors
* Confirm Delete
* Confirm Weekly delete
* Loading UI
## Run

In the project directory, you can run:
### `npm start`

## Technologies
Project was developed with:
* React
* Styled components
* React-router
* Rest Api's
* Typescript (feature2)
	

