# Movie Web App

This repository contains the source code for a Movie Web App built with Docker, React, and NodeJs with MongoDb as database.

## Prerequisites

Before running the application, ensure you have Docker Desktop installed on your machine. You can download and install Docker Desktop from [here](https://www.docker.com/products/docker-desktop).


## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Afraz33/movie-webapp.git
    ```
2. Navigate to backend directory 
     ```bash
    cd backend
    ```
    Paste your .env file with variables SECRET_KEY and MONGO_URI
   


## Usage
1. Navigate to the project directory:

    ```bash
    cd movie-webapp
    ```

2. Start Docker Desktop.

3. To run the containers, use the following command inside project directory:

```bash
docker-compose up -d
```

## Access the app
After containers have successfully been created and are running, you can access the app with this url on your device
```bash
http://localhost:5000/
```

## Testing

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
1. To test fbackend, navigate to backend folder:
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


### Note

Images and Trailers: Please note that images and trailers are currently hardcoded since they are not provided by users. As a result, there might be a mismatch between the movie data and the associated images/trailers.

### Test Account
To test the existing functionality and reviews, you can use the following test account:

```bash
Email: test1@gmail.com
Password: test1234
```
