// Create a new user and save it to the database and save in cookie

import { User } from "../models/user.js";


const newUser = async(req, res) => {
  const { name, username, password, avatar } = req.body;
  const user = new User({ name, username, password, avatar });
  user
    .save()
    .then((user) => {
      res.status(201).json({ user });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const login = (req, res) => {
  res.send("Hello World");
};

export { login, newUser };
