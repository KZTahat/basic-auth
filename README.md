# LAB - 06

## basic-auth

### `Author: Khaled Tahat`

[tests report]()

### Setup

`.env` requirements

- PORT - 3001.
- POSTGRES_URI - postgres://postgres:0000@localhost:5432/users

- Running the app - `npm start` 

- Endpoints: 
    - `/signup` 
        - returns Object with `201` status if exists:<br />
        
        ```
        {
            "id": 9, 
            "username": "test3",
            "password": "$2b$10$osNWY4ifHFgRTf8BE8oWRuhGDeYTL4trVVLlChRWyo7Okel8sckQi",
            "updatedAt": "2021-08-22T12:20:40.881Z",
            "createdAt": "2021-08-22T12:20:40.881Z" 
            }
        ```

    - `/signin`
        - returns Object with `200` status if exists:<br />
        
        ```
        {
            "id": 9, 
            "username": "test3",
            "password": "$2b$10$osNWY4ifHFgRTf8BE8oWRuhGDeYTL4trVVLlChRWyo7Okel8sckQi",
            "updatedAt": "2021-08-22T12:20:40.881Z",
            "createdAt": "2021-08-22T12:20:40.881Z" 
            }
        ```

- Tests: <br />
Unit Tests: `npm run test` <br />

- UML

<img src="/home/kztahat/401-course/week2/basic-auth/src/auth/basicAuthentication.png"
     alt="code-challenge-1 whiteBoard"
     style="float: left; margin-right: 10px;" />