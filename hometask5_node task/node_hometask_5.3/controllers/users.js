import {v4 as uuidv4} from "uuid";

let users = [];

export const getAllUsers = (req,res) => {
  //res.send(users);
  const userList = users.filter((user)=> user.isDeleted===false);
  res.send(userList);
}

export const getUserById = (req,res) =>{
  const {id} = req.params;
  const foundUser = users.find((user)=> user.id === id);
  res.send(foundUser);
}

export const getAutoSuggestedUser = (req,res) => {
  const {loginSubstring = "", limit = 10} = req.query;

  const list = users
    .filter((user) => (user.login).includes(loginSubstring) && !user.isDeleted)
    .sort((a,b) => (a.login).localCompare(b.login))
    .slice(0,limit);
  
  res.json(list);
}

export const createUser = (req,res)=>{
  const user = req.body;
  users.push({ ...user, id: uuidv4(), isDeleted:false});
  res.send(`a user is added`);
}

export const updateUser = (req,res)=>{
  const {id} = req.params;
  const {login , password, age} = req.body;

  const user = users.find((user)=> user.id === id);

  if(login) user.login = login;
  if(password) user.password = password;
  if(age)user.age = age;

  res.send(`User with the id ${id} has been updates`);
}

export const deleteUser = (req,res)=>{
  const {id} = req.params;
  const user = users.find((user)=> user.id === id);
  user.isDeleted = true;

  res.send("user is deleted from the database");
  
}


