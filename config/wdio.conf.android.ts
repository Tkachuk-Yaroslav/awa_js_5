import { config as sharedConfig } from "./wdio.conf.js";
import { join } from "path"
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

export const config = {
  ...sharedConfig,
  port: 4723,
  services: ["appium"],
  appium: {
    // For options see
    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    args: ["--allow-insecure"],
  },
  // capabilities: [{
  //   // capabilities for local Appium web tests on an Android Emulator or Real device
  //   platformName: 'Android',
  //   'appium:deviceName': 'R52N40QW48V',
  //   "appium:app": join(process.cwd(), "./apps/android/app-staging-debug.apk"),
  //   'appium:platformVersion': '11.0',
  //   'appium:automationName': 'UiAutomator2'
  // }],

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'R52N40QW48V', // наприклад, 'R52N40QW48V'
    'appium:platformVersion': '11.0', // або інша версія, яку використовує ваш пристрій
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.samsung.android.app.notes',
    'appium:appActivity': 'com.samsung.android.app.notes.memolist.MemoListActivity',
  }]

}
