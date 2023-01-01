import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../src/pageobjects/login.page";
import SecurePage from "../../src/pageobjects/secure.page";
import positionPage from "../../src/pageobjects/position.page";

const pages = {
  login: LoginPage,
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
