import { browser } from '@wdio/globals'
import Page from './page.js';
import { page } from './page.js'

const nameSharedNote = '//android.widget.EditText[@resource-id="com.samsung.android.app.notes:id/comp_title_text"]'
const sendLinkBtn = '//android.view.ViewGroup[@resource-id="com.samsung.android.mobileservice:id/link_container"]'
const sharedNoteHeader = '//android.widget.TextView[@resource-id="com.samsung.android.app.notes:id/composer_toolbar_title"]'
const otherOptionsBtn = '~Інші опції'
const delIcon = '(//android.widget.ImageView[@resource-id="com.samsung.android.app.notes:id/item_button"])[3]'
const delCartLink = '//android.widget.Button[@resource-id="android:id/button1"]'
const copyBtn = '(//android.widget.LinearLayout[@resource-id="android:id/sem_chooser_grid_item_view"])[5]'


class CreatingSharedNote extends Page {
    public async skipSettings(): Promise<void> {
        await this.clickElement(sendLinkBtn)
        await this.clickElement(copyBtn)
        await browser.pause(2000)
        await page.clickAndroidBackBtn()
    }

    public async clickSharedNoteHeader(): Promise<void> {
        await this.clickElement(sharedNoteHeader)
    }

    public async deleteSharedNote(): Promise<void> {
        await this.clickElement(otherOptionsBtn)
        await this.clickElement(delIcon)
        await this.clickElement(delCartLink)
    }

    public async setNameSharedNote(value: string): Promise<void> {
        await this.setElementInputValue(nameSharedNote, value)
    }
}

export default new CreatingSharedNote()