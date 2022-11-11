import { Given } from "@wdio/cucumber-framework";
import systemPage from "../../../src/pageobjects/system.page";

const pages = {
  system: systemPage,
};

Given(/^I am on the login page$/, async () => {
  pages.system.hintProceedButton();
});
