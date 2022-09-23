import { config } from "../../wdio.conf";
import { join } from "path";

config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: "Android",
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    "appium:deviceName": "Pixel_3_10.0",
    "appium:platformVersion": "10.0",
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "UiAutomator2",
    // The path to the app
    "appium:app": join(process.cwd(), "./apps/Android-NativeDemoApp-0.4.0.apk"),
    // @ts-ignore
    "appium:appWaitActivity": "com.wdiodemoapp.MainActivity",
    "appium:newCommandTimeout": 240,
  },
];
