import { config } from "../wdio.conf";
import { join } from "path";

config.capabilities = [
  {
    // path: "/wd/hub",
    // The defaults you need to have in your config
    platformName: "Android",
    maxInstances: 1,
    "appium:autoGrantPermissions": "true",
    "appium:deviceName": "26719008c51c7ece",
    "appium:platformVersion": "10",
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "Flutter",
    // The path to the app
    "appium:app": join(process.cwd(), "./assets/app/tello-app-debug-v2.apk"),
    // @ts-ignore
    "appium:appActivity": "com.bazzptt.bazz_flutter.MainActivity",
    "appium:appPackage": "com.bazzptt.bazz_flutter",
    "appium:newCommandTimeout": 15000,
  },
];

exports.config = config;
