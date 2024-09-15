import { browser } from '@wdio/globals'
import Page from './page.js';

const nameNote = '//android.widget.FrameLayout[@resource-id="com.samsung.android.app.notes:id/appbar_layout"]'

// await nameNote.click()
// // await browser.pause(2000);


// await page.setElementInputValue('//android.widget.EditText[@resource-id="com.samsung.android.app.notes:id/comp_title_text"]', "qweqwe")



const moveToTop = '~Перехід вгору'
const headerNote = '//android.widget.EditText[@resource-id="com.samsung.android.app.notes:id/comp_title_text"]'


class CreatingNote extends Page {
    public async clickNameNote(): Promise<void> {
        await this.clickElement(nameNote)
    }

    public async clickMoveToTop(): Promise<void> {
        await this.clickElement(moveToTop)
    }

    public async goToBack(): Promise<void> {
        await this.clickElement(moveToTop)
        await this.clickElement(moveToTop)
        await this.clickElement(moveToTop)
    }

    public async setNameNote(value: string): Promise<void> {
        await this.setElementInputValue(headerNote, value)
    }
}

export default new CreatingNote()