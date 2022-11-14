import { Given } from "@wdio/cucumber-framework";
import systemPage from "../../../src/pageobjects/system.page";

const pages = {
  system: systemPage,
};

Given(/^The (\w+) navigate to the login page$/, async (user) => {
  console.log(user);
  await pages.system.hintProceedButton();
});
