import { Router } from "express";

const user_routes = Router();

let users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Boris" },
];

user_routes
  .route("/")
  .get((req, res) => {
    res.json({ users });
  })
  .post((req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
  })
  .delete((req, res) => {
    users = [];
    res.status(204).send();
  });

user_routes
  .route("/:id")
  .get((req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  })
  .delete((req, res) => {
    users = users.filter((u) => u.id !== parseInt(req.params.id));
    res.status(204).send();
  })
  .put((req, res) => {
    const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...req.body };
      res.json(users[userIndex]);
    } else {
      res.status(404).send("User not found");
    }
  });

export default user_routes;
