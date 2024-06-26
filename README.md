# Movie Web App

This repository contains the source code for a Movie Web App built with Docker, React, and NodeJs with MongoDb as database.

## Prerequisites

Before running the application, ensure you have Docker Desktop installed on your machine. You can download and install Docker Desktop from [here](https://www.docker.com/products/docker-desktop).


## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Afraz33/movie-webapp.git
    ```
2. Configure your .env files for backend and frontend.
   


## Usage

### With Docker
1. Navigate to the project directory:

    ```bash
    cd movie-webapp
    ```

2. Start Docker Desktop.

3. To run the containers, use the following command inside project directory:

```bash
docker-compose up -d
```

### Running Locally
#### Backend
1. Go to backend folder:
 ```bash
cd backend
 ```
2. Install Dependencies
  ```bash
npm i
 ```
3. Start the server:
  ```bash
npm start
 ```

#### Frontend
1. Go to frontend folder:
 ```bash
cd frontend
 ```
2. Install Dependencies
  ```bash
npm i
 ```
3. Run the following command on terminal:
  ```bash
npm run dev
 ```

## Access the app
You can access the app with this url on your device.
```bash
http://localhost:5000/
```

# Testing

### Frontend
1. To test frontend, navigate to frontend folder:
```bash
cd frontend
```
2. Insatll dependencies by running the following command in terminal
```bash
npm i
```

3. Run the command in your terminal:
```bash
npm run test
```


### Backend
1. To test backend, navigate to backend folder:
```bash
cd backend
```
2. Insatll dependencies by running the following command in terminal
```bash
npm i
```
3. Run the command in your terminal:
```bash
npm run test
```


### Troubleshooting
The docker container for frontend runs on port 5000 and docker container for backend runs on 8000. Make sure that no other services are utilizing these ports. If so, the app containers won't run and app won't be accessible or will be accessible with limited functionality.

You can verify if both containers are running succesfully before accessing the app by opeing docker desktop and viewing movie-webapp container. 
![image](https://github.com/Afraz33/movie-webapp/assets/95544278/d07533ca-074a-4e78-af32-47dd58ad382f)




### Test Account
To test the existing functionality and reviews, you can use the following test account:

```bash
Email: test1@gmail.com
Password: test1234
```
