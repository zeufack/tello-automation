import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginScreen from "../../src/ screen_object/login.screen";
import PositionScreen from "../../src/ screen_object/position.screen";
import LogoutScreen from "../../src/ screen_object/logout.screen";

const pages = {
  login: LoginScreen,
  position: PositionScreen,
  logOut: LogoutScreen,
};

When(/^The (\w+) login$/, async (user) => {
  await pages.login.login(user);
  await pages.position.hintUserButton();
  await pages.position.hintAttentionAcceptButton();
});

Then(/^System should allow access to(.*)$/, async (user) => {
  // expect(await pages.login.loginError)toBeDisplayed();
});

Then(/^The (\w+) log out$/, async (user: string) => {
  await pages.logOut.hitMenuButton();
  await pages.logOut.hintLogOutButton();
});
