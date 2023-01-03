import { ChainablePromiseElement } from "webdriverio";

import Screens from "./ screen";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecureScreen extends Screens {
  /**
   * define selectors using getter methods
   */
  public get flashAlert() {
    return $("#flash");
  }
}

export default new SecureScreen();
