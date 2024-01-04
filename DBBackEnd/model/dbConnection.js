const mysql = require("mysql");

const sqlConnection = mysql.createConnection({
  user:"abhi",
  password:"9000abhi9AJ",
  host:"127.0.0.1",
  port:3306,
  database:"nodePrac",
  multipleStatements:true,

});

sqlConnection.connect(()=>{
  try{
   console.log("Connected to the database successfully!!");
  }catch(error)
  {
   console.log(`some error in creating db Connection : ${error}`);
  }
});

module.exports=sqlConnection;