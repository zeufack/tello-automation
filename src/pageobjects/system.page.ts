import { ChainablePromiseElement } from "webdriverio";

import Page from "./page";

class SystemPage extends Page {
  urlInputXpath = `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]`;
  simPortXpath = `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]`;
  proceedButtonXpath = `//android.widget.Button[@content-desc="P​R​O​C​E​E​D"]`;

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
    const elemt = await this.simInput;
    const value = await elemt.getValue();
    await elemt.clearValue();
    // console.log(`This is `);
  }

  /**
   * Go to the next step by clicking on the proceed button.
   */
  public async hintProceedButton() {
    (await this.proceedButton).click();
  }
}

export default new SystemPage();
