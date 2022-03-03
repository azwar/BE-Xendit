# Readme
## How to run the project
Here is the step to run the project.

- Get the source from Git repository ```git clone https://github.com/azwar/BE-Xendit.git```
- Enter to directory ```cd BE-Xendit ```
- Install dependencies ```npm install```
- Run Docker build ```docker build -t getting-started .```
- Run Docker compose ``` cd docker && docker-compose up```
- Open new terminal with same working directory, then you can run this NodeJS project using development mode ```npm run dev```
- We must create data seed to database, press CTR+C to stop current Nodejs running process, after that run ```npx sequelize-cli db:seed:all``` This will fill tables with some dumy datas Organization and Member
- When table Organizations and Members have dumy data then we can run Test Driven Development of this project using ```npm run test```

## Environtment variable _.env File_
This project using environtment variables inside project with following values
```
name="Server Development"
DATABASE_URL="postgresql://postgres:secret@localhost:5432/xendit?schema=public"
port=3000
```
## Stack of this project

- ExpressJS, as web framework
- Sequelize, as database ORM
- Chai, as TDD library
- PostgreSQL, as database management system
- Docker, as containerization

## Endpoints

This projct contains Restul API following endpoints:

| Name | Method | URL | body parameters 
| ------ | ------ | ------ | ------ |
| Post comment | POST | /org/:orgname/comments | { "comment": "That's cool brooo", "user": 1 }
| List comment | GET | /org/:orgname/comments | 
| Delete comment | DELETE | /org/:orgname/comments | 
| List organization members | GET | /org/:orgname/members | 

