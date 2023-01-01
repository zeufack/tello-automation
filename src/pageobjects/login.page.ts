import { ChainablePromiseElement } from "webdriverio";
import { User } from "../data";
import { data } from "../data/data";

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  private users = data.users;

  userNameInputXpath = "//android.widget.EditText[1]";
  passwordInputXpath = "//android.widget.EditText[2]";
  btnSubmitXpath = `//android.widget.Button[@content-desc="L​O​G​I​N"]`;
  loginErrorXpath = `//android.view.View[@content-desc="Login or password is incorrect"]`;
  continueLoginXpath = `//android.widget.Button[@content-desc="C​o​n​t​i​n​u​e"]`;
  /**
   * define selectors using getter methods
   */
  public get inputUsername(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.userNameInputXpath);
  }

  public get continueLogin(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.continueLoginXpath);
  }

  public get inputPassword(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.passwordInputXpath);
  }

  public get btnSubmit(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.btnSubmitXpath);
  }

  public get loginError(): ChainablePromiseElement<WebdriverIO.Element> {
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
        await this.fillLoginFormAndSubmit(this.users.userWithFakeCredentials);
        break;
      case "userWithFakePassword":
        await this.fillLoginFormAndSubmit(this.users.userWithFakePassword);
        break;
      case "userWithFakeUserName":
        await this.fillLoginFormAndSubmit(this.users.userWithFakeUserName);
        break;
      case "userWithEmptyCredentials":
        await this.fillLoginFormAndSubmit(this.users.userWithEmptyCredentials);
        break;
      case "userWithEmptyPasswsord":
        await this.fillLoginFormAndSubmit(this.users.userWithEmptyPasswsord);
        break;
      case "userWithEmptyUserName":
        await this.fillLoginFormAndSubmit(this.users.userWithEmptyUserName);
        break;
      case "admin":
        await this.fillLoginFormAndSubmit(this.users.adminUser);
        break;
      case "operator":
        await this.fillLoginFormAndSubmit(this.users.operatorUser);
        break;
      case "supervisor":
        await this.fillLoginFormAndSubmit(this.users.supervisorUser);
        break;
      case "dispatcher":
        await this.fillLoginFormAndSubmit(this.users.dispatcherUser);
        break;
      case "customerManager":
        await this.fillLoginFormAndSubmit(this.users.customerManager);
        break;
      case "guard":
        await this.fillLoginFormAndSubmit(this.users.guardUser);
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
    // await super.sendKeys(this.inputUsername, user.userName);
    // await super.sendKeys(this.inputPassword, user.password);
    await (await this.inputUsername).click();
    await (await this.inputUsername).clearValue();
    await (await this.inputUsername).setValue(user.userName);
    await (await this.inputPassword).click();
    await (await this.inputPassword).clearValue();
    await (await this.inputPassword).setValue(user.password);
    await this.btnSubmit.click();
    this.clickContineLoginButton();
  }

  /**
   * clickContineLoginButton
   */
  private clickContineLoginButton() {
    if (this.continueLogin.isDisplayed) {
      this.continueLogin.click();
    }
  }
}

export default new LoginPage();
