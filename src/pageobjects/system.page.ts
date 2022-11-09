import { ChainablePromiseElement } from "webdriverio";
import Page from "./page";

class StystemPage extends Page {
	public get title(): any {
		return $(
			`//android.view.View[@content-desc="Define System Domain"]`
		);
	}

	public get inputUrl(): any {
		return $(
			`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]`
		);
	}

	public get inputSim(): any {
		return $(
			`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]`
		);
	}

	public get proceedButton(): ChainablePromiseElement<WebdriverIO.Element> {
		return $(
			`//android.widget.Button[@content-desc="P​R​O​C​E​E​D"]`
		);
	}

	public hitPorceedButton() {
		this.proceedButton.click();
		expect(this.inputSim).toBeDisplayed();
	}
}

export default new StystemPage();
