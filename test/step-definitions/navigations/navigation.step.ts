import { Given } from "@wdio/cucumber-framework";
import LoginScreen from "../../../src/ screen_object/login.screen";
import SystemScreen from "../../../src/ screen_object/system.screen";

const pages = {
  system: SystemScreen,
  login: LoginScreen,
};

Given(/^The (\w+) navigate to the login page$/, async (user) => {
  await pages.system.fillSystemPropertyForUser(user);
  // await pages.system.setUserSim(user);
  // await pages.system.hintProceedButton();
  // await browser.waitUntil((await pages.login.inputUsername).isDisplayed);
});
