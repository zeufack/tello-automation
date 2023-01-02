import { Role } from "./role";
import System from "./system";
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
  userName: "test12",
  password: "test15963",
};

const operatorUser: User = {
  role: Role.Operator,
  userName: "loper",
  password: "loper123",
};

const guardUser: User = {
  role: Role.Guard,
  userName: "patrick",
  password: "patrick123",
  simSerialNumber: "8923700076061417059G00",
};

const supervisorUser: User = {
  role: Role.Supervisor,
  userName: "lsuper",
  password: "lsuper123",
  simSerialNumber: "147896314789631",
};

const driverUser: User = {
  role: Role.Driver,
  userName: "ldrive",
  password: "ldrive123",
  simSerialNumber: "987456321478963",
};

const dispatcherUser: User = {
  role: Role.Dispatcher,
  userName: "ldispa",
  password: "ldispa123",
};

const customerManager: User = {
  role: Role.CustomerManager,
  userName: "lmana",
  password: "lmana123",
  simSerialNumber: "564565789547896",
};

const testSystem: System = {
  sim: "987456321478963",
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
  driverUser,
};

const systems = {
  testSystem,
};

const data = {
  systems,
  users,
};

export { data };
