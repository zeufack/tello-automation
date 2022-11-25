import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../../src/pageobjects/login.page";
import SecurePage from "../../src/pageobjects/secure.page";

const pages = {
  login: LoginPage,
};

When(/^The (\w+) login$/, async (user) => {
  await pages.login.login(user);
});

Then(/^System should not allow access to (.*)$/, async (user) => {
  expect(await pages.login.loginError).toBeDisplayed();
});
