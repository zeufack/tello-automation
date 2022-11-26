# Mobile Test automation for tello project

call appium from typescript with webdriverio.

first of all, clone this repo into you local machine,

```bash
    git clone https://github.com/zeufack/tello-automation.git
```

then install dependencies by running

```bash
    npm i
```

and modify the ./config/wdio.android.ts file and add your mobile device in the config object and apk file path

```bash
    "appium:deviceName": "your app device name",
    "appium:app": "path to your apk file"
```

You can run all test by running

```bash
    npm run test:android
```

if you have `allure` on your computer, you can diplay test running repport by running

```bash
    allure serve ./allure-report
```

Or generate html report by running

```bash
    npm run report
```
