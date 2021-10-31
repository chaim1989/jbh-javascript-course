const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'myclass_user',
    password: 'Cs12345678',
    database: 'my_class'
});
connection.on("error", (event) => {
    console.log("connection error", event.sqlMessage)
})
connection.on("connect", () => {
    console.log("connection success");