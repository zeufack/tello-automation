import { Given } from "@wdio/cucumber-framework";
import loginPage from "../../../src/pageobjects/login.page";
import systemPage from "../../../src/pageobjects/system.page";

const pages = {
  system: systemPage,
  login: loginPage,
};

Given(/^The (\w+) navigate to the login page$/, async (user) => {
  await pages.system.fillSystemPropertyForUser(user);
  // await pages.system.setUserSim(user);
  // await pages.system.hintProceedButton();
  // await browser.waitUntil((await pages.login.inputUsername).isDisplayed);
});
