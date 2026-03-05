const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    first_name: { type: String, nullable: false },
    last_name: { type: String, nullable: false },
    user_name: { type: String, nullable: false, unique: true },
    email: { type: String, nullable: false, unique: true },
    password: { type: String, nullable: false },
    phone: { type: String, nullable: true },
    city: { type: String, nullable: true },
    country: { type: String, nullable: true },
    age: { type: Number, nullable: true }
  }
});