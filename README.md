# space-connect
Website for easy project-sharing and connecting students and educators interested in space exploration
## To Register ##
1. clone repository
2. install mongodb and run on default port
3. run npm start
4. open url: 
```
post localhost:3001/spaceconnect/users/register
```
5. request payload
```
{
    "name":"hello",
    "password":"strongpass",
    "userid":"helloid",
    "email":"hello@gmail.com"
}
```

sample response: 
```
{
    "newUser": {
        "_id": "5f7916226dacb1c03b63ec11",
        "name": "hello",
        "userid": "helloid",
        "email": "hello@gmail.com",
        "createdAt": "2020-10-04T00:24:13.498Z",
        "updatedAt": "2020-10-04T00:24:31.458Z",
        "__v": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc5MTYyyEAmrLqBJoPlcIEgItE"
}
```
## To Login ##
4. open url: 
```
post localhost:3001/spaceconnect/users/login
```
5. request payload
```
{
    "password":"strongpass",
    "userid":"helloid"
}
```

sample response: 
```
{
    "userFound": {
        "_id": "5f7916226dacb1c03b63ec11",
        "name": "hello",
        "userid": "helloid",
        "email": "hello@gmail.com",
        "createdAt": "2020-10-04T00:24:13.498Z",
        "updatedAt": "2020-10-04T01:42:16.556Z",
        "__v": 3
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc5MTYyMjZkYWN_lWxJTIQK6zg"
}
```
