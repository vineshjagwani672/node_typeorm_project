// config/data-source.js
require("reflect-metadata");
const { DataSource } = require("typeorm");
const User = require("../models/User"); 

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "vinesh212", 
  database: "node_app_db",
  synchronize: true, 
  logging: true,
  entities: [User], // add entity here
});

module.exports = { AppDataSource };