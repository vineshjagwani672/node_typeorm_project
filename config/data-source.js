// config/data-source.js
require("reflect-metadata");
const { DataSource } = require("typeorm");
const User = require("../models/User"); // correct path

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",          // your MySQL username
  password: "vinesh212",     // your MySQL password
  database: "node_app_db",   // your database name
  synchronize: true,
  logging: true,
  entities: [User],           // array of entities
});

module.exports = { AppDataSource };