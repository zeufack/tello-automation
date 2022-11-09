import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../../src/pageobjects/login.page";
import SecurePage from "../../src/pageobjects/secure.page";

const pages = {
  login: LoginPage,
};

When(
  /^The (\w+) fill username and password input and click Login button$/,
  async (user) => {
    // await LoginPage.login(username, password);
  }
);

Then(/^System should not allow access to (.*)$/, async (user) => {
  // await expect(SecurePage.flashAlert).toBeExisting();
  // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
