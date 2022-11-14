import { User } from "./user";

// create some user data for test

const firstUser: User = { userName: "Igard", password: "Igard123" };
const secondUser: User = { userName: "Imana", password: "Imana123" };
const userWithFakeCredentials: User = {
  userName: "lgard",
  password: "Igard183",
};
const userWithFakePassword: User = {
  userName: "Imana",
  password: "Imana129",
};

const userWithFakeUserName: User = {
  userName: "Igard",
  password: "Igard125",
};

const userWithEmptyCredentials: User = {
  userName: "",
  password: "",
};

const userWithEmptyPasswsord: User = { userName: "Igard", password: "" };
const userWithEmptyUserName: User = { userName: "", password: "Igard125" };

// create and object with all user
const users = {
  firstUser,
  secondUser,
  userWithFakeCredentials,
  userWithFakePassword,
  userWithFakeUserName,
  userWithEmptyCredentials,
  userWithEmptyPasswsord,
  userWithEmptyUserName,
};

export { users };
