import { ChainablePromiseElement } from "webdriverio";

import Page from "./page";

class SystemPage extends Page {
  urlInputXpath = `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]`;
  simPortXpath = `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]`;
  proceedButtonXpath = `//android.widget.Button[@content-desc="P​R​O​C​E​E​D"]`;

  public get urlInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(``);
  }

  public get simInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.simPortXpath);
  }

  public get proceedButton(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.proceedButtonXpath);
  }

  public async filUrlInput(url: string) {
    (await this.urlInput).setValue(url);
  }

  public async hintProceedButton() {
    (await this.proceedButton).click();
  }

  public async filSimInput(simNumber: string) {
    await this.simInput.click();
  }
}

export default new SystemPage();
