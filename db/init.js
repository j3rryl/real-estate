var mysql = require("mysql2");
// Create a connection to the MySQL server
var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});
var createDbQuery = "CREATE DATABASE IF NOT EXISTS `".concat(
  process.env.MYSQL_DATABASE,
  "`;"
);
connection.connect(function (err) {
  if (err instanceof Error) {
    console.error("Error connecting to the MySQL server:", err);
    return;
  }
  console.log("Connected to MySQL server.");
  // Create the database
  connection.query(createDbQuery, function (err) {
    if (err instanceof Error) {
      console.error("Error creating database:", err);
    } else {
      console.log(
        `Database ${process.env.MYSQL_DATABASE} created or already exists.`
      );
    }
    connection.end();
  });
});
