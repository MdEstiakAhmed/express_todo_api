# Express TO-DO Application API

### Steps to run project

1. install node from [nodejs](https://nodejs.org/en/) (prefer to install LTS version)
2. clone this repository via `git clone https://github.com/MdEstiakAhmed/express_todo_api.git`
3. install all dependencies via `npm install`
4. install mongoDB from [MongoDB](https://www.mongodb.com/try/download/community)
5. install Compass from [Compass](https://www.mongodb.com/try/download/compass)
6. connect mongodb with compass [^1].
7. create a database in compass named `todo_app`
8. create one collection named `users`
9. run the application via `npm start`
10. Check postman documentation for API information. ([documentation](https://documenter.getpostman.com/view/14015825/UVyq1HZw))

### Features:

1. register user
2. login user
3. view user profile
4. update user profile
5. add todo
6. get todo (get by status, get between date range)
7. update todo
8. delete todo

##### Process to connect MongoDB with Compass

[^1]: execute the mongo.exe from` C:\Program Files\MongoDB\Server\{version}\bin`. and collect the connection string (only the IP address and port exp: mongodb://127.0.0.1:27017)
