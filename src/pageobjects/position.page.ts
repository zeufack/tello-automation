import { ChainablePromiseElement } from "webdriverio";

class PositionPage {
  private positionButtonXpath: string = `(//android.widget.Button[@content-desc="P​O​S​I​T​I​O​N"])[2]`;
  private userButtonXpath: string = `//android.widget.Button[@content-desc="U​S​E​R"]`;
  private attentionAcceptButtonXpath: string = `//android.widget.Button[@content-desc="Y​e​s"]`;

  public get positionButton(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.positionButtonXpath);
  }

  public get userButton(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.userButtonXpath);
  }

  public get attentionAcceptButton(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.attentionAcceptButtonXpath);
  }

  public async hintUserButton() {
    await (await this.userButton).click();
  }

  public async hintPositionButton() {
    await (await this.positionButton).click();
  }

  public async hintAttentionAcceptButton() {
    driver.waitUntil(
      async () => await ((await this.attentionAcceptButton) != null),
      {
        timeout: 5000,
      }
    );
    await (await this.attentionAcceptButton).click();
  }
}

export default new PositionPage();
