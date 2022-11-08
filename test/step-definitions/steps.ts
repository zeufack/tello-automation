import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../../src/pageobjects/login.page";
import SecurePage from "../../src/pageobjects/secure.page";

const pages = {
  login: LoginPage,
};

const simPortXpath = `//android.view.View[@content-desc="Define System Domain"]`;

Given(/^I am on the login page$/, async () => {
  const selectSimPort = await $(simPortXpath);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  // await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  // await expect(SecurePage.flashAlert).toBeExisting();
  // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
