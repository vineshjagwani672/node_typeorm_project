// controllers/userController.js
const { AppDataSource } = require("../config/data-source");
const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    const users = await AppDataSource.getRepository(User).find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userRepo = AppDataSource.getRepository(User);

    const user = userRepo.create({ name, email, password });
    await userRepo.save(user);

    res.status(201).json({ message: "User created", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await AppDataSource.getRepository(User).update({ id }, req.body);
    res.json({ message: "User updated" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await AppDataSource.getRepository(User).delete({ id });
    if (result.affected === 0) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};