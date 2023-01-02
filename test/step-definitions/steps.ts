import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginScreen from "../../src/ screen_object/login. screen";
import positionPage from "../../src/ screen_object/position. screen";

const pages = {
  login: LoginScreen,
  position: positionPage,
};

When(/^The (\w+) login$/, async (user) => {
  await pages.login.login(user);
  await pages.position.hintUserButton();
  await pages.position.hintAttentionAcceptButton();
});

Then(/^System should not allow access to (.*)$/, async (user) => {
  expect(await pages.login.loginError).toBeDisplayed();
});

Then(/^The (\w+) log out$/, async (user: string) => {});
