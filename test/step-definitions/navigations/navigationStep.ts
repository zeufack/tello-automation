import { Given } from "@wdio/cucumber-framework";
import define_domainPage from "../../../src/pageobjects/system.page";
import Page from "../../../src/pageobjects/page";
import systemPage from "../../../src/pageobjects/system.page";

const pages = {
  system: systemPage,
};

Given(/^The (\w+) navigate to the login page$/, async (user) => {
  pages.system.hitPorceedButton();
});
