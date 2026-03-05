require("reflect-metadata");
const { DataSource } = require("typeorm");
const User = require("../models/User"); // relative path from db.js

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "vinesh212",
  database: "node_app_db",
  synchronize: true,
  logging: true,
  entities: [User]
});

module.exports = AppDataSource;