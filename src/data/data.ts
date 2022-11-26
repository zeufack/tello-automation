import { Role } from "./role";
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

const adminUser: User = {
  role: Role.Admin,
  userName: "leoadmin",
  password: "leo123",
};

const operatorUser: User = {
  role: Role.Operator,
  userName: "loper",
  password: "loper123",
};

const guardUser: User = {
  role: Role.Guard,
  userName: "lgard",
  password: "lgard123",
};

const supervisorUser: User = {
  role: Role.Supervisor,
  userName: "test12",
  password: "test15963",
  phone: "0123456789",
  simSerialNumber: "9319c5703fdf11ed8852b",
};

const dispatcherUser: User = {
  role: Role.Dispatcher,
  userName: "ldispa",
  password: "ldispa123",
};

const customerManager: User = {
  role: Role.CustomerManager,
  userName: "ldispa",
  password: "ldispa123",
};
// create and object with all us  er
const users = {
  firstUser,
  secondUser,
  userWithFakeCredentials,
  userWithFakePassword,
  userWithFakeUserName,
  userWithEmptyCredentials,
  userWithEmptyPasswsord,
  userWithEmptyUserName,
  adminUser,
  operatorUser,
  guardUser,
  dispatcherUser,
  customerManager,
  supervisorUser,
};

export { users };
