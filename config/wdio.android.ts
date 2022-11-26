import { config } from "../wdio.conf";
import { join } from "path";

config.capabilities = [
  {
    // path: "/wd/hub",
    // The defaults you need to have in your config
    platformName: "Android",
    maxInstances: 1,
    "appium:autoGrantPermissions": "true",
    //"appium:deviceName": "emulator-5554",
    "appium:deviceName": "26719008c51c7ece",
    "appium:platformVersion": "10",
    // "appium:orientation": "PORTRAIT",
    "appium:automationName": "UiAutomator2",
    // The path to the app
    "appium:app": join(process.cwd(), "./assets/app/app-debug.apk"),
    // @ts-ignore
    "appium:appActivity": "com.bazzptt.bazz_flutter.MainActivity",
    "appium:appPackage": "com.bazzptt.bazz_flutter",
    "appium:newCommandTimeout": 15000,
  },
];

exports.config = config;
