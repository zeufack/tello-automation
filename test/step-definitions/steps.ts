import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../../src/pageobjects/login.page";
import SecurePage from "../../src/pageobjects/secure.page";

const pages = {
  login: LoginPage,
};

Given(/^I am on the login page$/, async () => {
  //   $(
  //     "WEB_VIEW_SCREEN: browser.isAndroid? '*//android.webkit.WebView': '*//XCUIElementTypeWebView',"
  //   ).click();
  //   const usermane = await driver.$(
  //     "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]"
  //   );
  driver.findElement(
    "xpath",
    '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]'
  );
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
