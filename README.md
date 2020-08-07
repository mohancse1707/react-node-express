## Node Express Server and React Redux web application

Sample web application for data list, search and sorting data without any database using react redux node express 

### Getting Started

This application is developed with decoupled architecture design where server and client deployed separately.


### Technologies

**Front End**

* [Node] v12.x.x 
* Npm v6.x.x
* Typescript

**Back End**

* [Node] v12.x.x 
* Npm v6.x.x
* React Redux
* Typescript
* Webpack

```Make sure node is installed and set the path in the system before proceeding to deployment steps.```

### App Structure

```Note: I am mentioning only high level files/folders ```

```bash

├── public
│   ├── client
│   │   ├── src
│   │   │   ├── test
│   │   │   │   ├── app
│   │   │   ├── webapp
│   ├── server
│   │   ├── src
│   │   │   ├── test
│   │   │   │   ├── routes.test.ts
│   │   │   ├── cache
│   │   │   ├── model
│   │   │   ├── routes
│   │   │── index.ts
│   │   │── server.ts

```

Let's get into build and deployment steps. 

Open two terminal or command-line shell then navigate to the application path and execute the below script. 

**Run the express server**

In Terminal#1 Navigate to ```react-node-express\server``` and execute below command 

> Terminal#1: npm install && && npm run start

**Run the react client**

In Terminal#2 Navigate to ```react-node-express\client``` and execute below command 

> Terminal#2: npm install && && npm run start

### Test cases execution

**Server**

Execute below command 

> Terminal#1: npm run test

**Client**

> npm run test

### Test Results Screen

Server

![alt text](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)

Client 

![alt text](https://github.com/mohancse1707/mk-scheduler-webapp/tree/master/src/main/webapp/static/images/hipster2x.png?raw=true)

[Node]:https://nodejs.org/download/release/v12.13.0/

