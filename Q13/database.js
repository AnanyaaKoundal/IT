const mysql= require("mysql")

const mysqlConnection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "it_project"
})

mysqlConnection.connect(function(error){
    if(error){
        console.log("Error occured");
        return;
    }else{
        console.log("Database connected")
    }
})

module.exports =mysqlConnection;