import { ChainablePromiseElement } from "webdriverio";
import { User } from "../data";
import { users } from "../data/data";

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  userNameInputXpath =
    "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]";
  passwordInputXpath =
    "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]";
  btnSubmitXpath = `//android.widget.Button[@content-desc="L​O​G​I​N"]`;
  loginErrorXpath = `//android.view.View[@content-desc="Login or password is incorrect"]`;

  /**
   * define selectors using getter methods
   */
  public get inputUsername() {
    return $(this.userNameInputXpath);
  }

  public get inputPassword() {
    return $(this.passwordInputXpath);
  }

  public get btnSubmit() {
    return $(this.btnSubmitXpath);
  }

  public get loginError() {
    return $(this.loginErrorXpath);
  }

  /**
   * Login with a given username and and password.
   * @param username
   * @param password
   */
  public async login(user: string) {
    switch (user) {
      case "userWithFakeCredentials":
        await this.fillLoginFormAndSubmit(users.userWithFakeCredentials);
        break;
      case "userWithFakePassword":
        await this.fillLoginFormAndSubmit(users.userWithFakePassword);
        break;
      case "userWithFakeUserName":
        await this.fillLoginFormAndSubmit(users.userWithFakeUserName);
        break;
      case "userWithEmptyCredentials":
        await this.fillLoginFormAndSubmit(users.userWithEmptyCredentials);
        break;
      case "userWithEmptyPasswsord":
        await this.fillLoginFormAndSubmit(users.userWithEmptyPasswsord);
        break;
      case "userWithEmptyUserName":
        await this.fillLoginFormAndSubmit(users.userWithEmptyUserName);
        break;
      case "admin":
        await this.fillLoginFormAndSubmit(users.adminUser);
        break;
      case "operator":
        await this.fillLoginFormAndSubmit(users.operatorUser);
        break;
      case "supervisor":
        await this.fillLoginFormAndSubmit(users.supervisorUser);
        break;
      case "dispatcher":
        await this.fillLoginFormAndSubmit(users.dispatcherUser);
        break;
      case "customerManager":
        await this.fillLoginFormAndSubmit(users.customerManager);
        break;
      case "guard":
        await this.fillLoginFormAndSubmit(users.guardUser);
        break;
      default:
        break;
    }
  }

  /**
   * Utility function.
   * @param user
   */
  private async fillLoginFormAndSubmit(user: User) {
    await super.sendKeys(this.inputUsername, user.userName);
    await super.sendKeys(this.inputPassword, user.password);

    await this.btnSubmit.click();
  }
}

export default new LoginPage();
