import { ChainablePromiseElement } from "webdriverio";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public open(path: string) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }

  /**
   * Locate an element on the page an tap on it.
   * @param locator
   */
  public findAndClick(locator: string): void {}

  /**
   * Search element on screen and fill it with given text in parameter.
   * @param locator
   * @param text
   */
  public findAndFill(locator: string, text: string): void {}

  /**
   * Wait for 5 second befor the next action.
   * @param element
   * @returns
   */
  public loadingWait(element: string) {
    return $(element).waitForClickable({
      timeout: 100000,
      reverse: false,
    });
  }

  /**
   * Wait for x second befor the next action.
   * @param element
   * @returns
   */
  public longWait(element: string) {
    return $(element).waitForClickable({
      timeout: 5000000,
      reverse: false,
    });
  }

  /**
   * Wait for  1 second befor the next action.
   */
  public shortWait() {}

  /**
   * As it is not possible to send key directly, this function click on a given input, clear it and add value
   */
  protected async sendKeys(
    locator: ChainablePromiseElement<WebdriverIO.Element>,
    inputValue: string
  ) {
    await locator.click();
    await locator.clearValue();
    await locator.setValue(inputValue);
    // await input.click();
    // await input.clearValue();
    // await input.setValue(inputValue);
  }

  /**
   * Long wait for an element to be displayed on screen
   * @param isShown
   * @param element
   * @returns
   */
  protected async waitForIsShown(
    isShown = true,
    element: string
  ): Promise<boolean | void> {
    return await $(element).waitForDisplayed({
      timeout: 30000000,
      reverse: !isShown,
    });
  }
}
