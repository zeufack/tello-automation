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
   */
  public loadingWait() {}

  /**
   * Wait for x second befor the next action.
   */
  public longWait() {}

  /**
   * Wait for  1 second befor the next action.
   */
  public shortWait() {}
}
