import { ChainablePromiseElement } from "webdriverio";
import { data } from "../data/data";
import Page from "./page";

class SystemPage extends Page {
  urlInputXpath = `//android.widget.EditText[1]`;
  simPortXpath = `//android.widget.EditText[2]`;
  proceedButtonXpath = `//android.widget.Button[@content-desc="P​R​O​C​E​E​D"]`;
  // import data
  private sytems = data.systems;
  private users = data.users;

  public get urlInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.urlInputXpath);
  }

  public get simInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.simPortXpath);
  }

  public get proceedButton(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.proceedButtonXpath);
  }

  /**
   * Fill url input with the given url.
   * @param url
   */
  public async fillUrlInput(url: string) {
    (await this.urlInput).setValue(url);
  }

  /**
   * Fill sim input with the given sim number.
   * @param simNumber
   */
  public async fillSimInput(simNumber: string) {
    await super.sendKeys(this.simInput, simNumber);
    // console.log(`This is `);
  }

  /**
   * Go to the next step by clicking on the proceed button.
   */
  public async hintProceedButton() {
    // await this.fillSimInput(this.sytems.testSystem.sim);
    await (await this.proceedButton).click();
  }

  /**
   * Set user sim for a given user before test.
   * @param user
   */
  public async setUserSim(user: string) {
    switch (user) {
      case "guard":
        await this.fillSimInput(this.users.guardUser.simSerialNumber);
        break;

      default:
        break;
    }
  }

  public async fillSystemPropertyForUser(user: string) {
    await this.setUserSim(user);
    // await driver.setImplicitTimeout(10000000000000000);
    await this.hintProceedButton();
    // await driver.waitUntil();
  }
}

export default new SystemPage();
