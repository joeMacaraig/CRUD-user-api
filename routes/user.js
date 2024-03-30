import express from "express";

const router = express.Router();

let users = [
  {
    firstName: "Mark",
    lastName: "Cuban",
    email: "markcuban@gmail.com",
    DOB: "01-01-2000",
  },
  {
    firstName: "Lebron",
    lastName: "James",
    email: "lebronjames@gmail.com",
    DOB: "01-01-2000",
  },
  {
    firstName: "Anthony",
    lastName: "Davis",
    email: "anthonydavis@gmail.com",
    DOB: "01-01-2000",
  },
];

//get all users
router.get("/", (req, res) => {
  res.send(users);
});

//get one user
router.get("/:email", (req, res) => {
  const email = req.params.email;
  users.filter((user) => {
    if (email === user.email) {
      res.send(user);
    }
  });
});

//create a user
router.post("/new", (req, res) => {
  users.push({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    DOB: req.body.DOB,
  });
  res.send("The user" + " " + req.body.firstName + " Has been added!");
});

//update a user by email
router.put("/:email", (req, res) => {
  const email = req.params.email;
  let filtered_users = users.filter((user) => user.email === email);
  if (filtered_users.length > 0) {
    let filtered_user = filtered_users[0];
    let DOB = req.body.DOB;
    if (DOB) {
      filtered_user.DOB = DOB;
    }
    if (firstName) {
      filtered_user.firstName = firstName;
    }
    if (lastName) {
      filtered_user.lastName = lastName;
    }
    users = users.filter((user) => user.email != email);
    users.push(filtered_user);
    res.send(`User with the email  ${email} updated.`);
  } else {
    res.send("Unable to find user!");
  }
});

//delete a user by email
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  users = users.filter((user) => user.email != email);
  res.send(`user with email: '${email}' DELETED`);
});

export { router as routes };
