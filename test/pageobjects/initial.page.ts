import { browser } from '@wdio/globals'
import Page from './page.js';

const startButton = "//android.widget.Button[@resource-id='com.samsung.android.app.notes:id/sign_in_button']";


class Initial extends Page {
    public async clickStartButton(): Promise<void> {
        await this.clickElement(startButton)
    }
}

export default new Initial()