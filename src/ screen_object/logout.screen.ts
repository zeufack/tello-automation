import { ChainablePromiseElement } from "webdriverio";
import Screens from "./ screen";

class LogoutScreen extends Screens {
  private menuButtonXpath: string = `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button`;
  private logOutButtonXpath: string = `//android.view.View[@content-desc="Logout"]`;

  public get logoutButton(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.logOutButtonXpath);
  }

  public get menuButton(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.menuButtonXpath);
  }

  public async hitMenuButton() {
    await (await this.menuButton).click();
  }

  public async hintLogOutButton() {
    await (await this.logoutButton).click();
  }
}

export default new LogoutScreen();
