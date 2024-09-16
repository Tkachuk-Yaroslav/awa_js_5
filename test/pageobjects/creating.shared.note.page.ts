import { browser } from '@wdio/globals'
import Page from './page.js';
import { page } from './page.js'

const nameSharedNote = '//android.widget.EditText[@resource-id="com.samsung.android.app.notes:id/comp_title_text"]'

// await nameNote.click()
// // await browser.pause(2000);


// await page.setElementInputValue('//android.widget.EditText[@resource-id="com.samsung.android.app.notes:id/comp_title_text"]', "qweqwe")



// const moveToTop = '~Перехід вгору'
// const headerNote = '//android.widget.EditText[@resource-id="com.samsung.android.app.notes:id/comp_title_text"]'
// const otherOptionsBtn = '~Інші опції'
// const deleteIcon = '(//android.widget.ImageView[@resource-id="com.samsung.android.app.notes:id/item_button"])[6]'
// const delCartLink = '//android.widget.Button[@resource-id="android:id/button1"]'


const sendLinkBtn = '//android.view.ViewGroup[@resource-id="com.samsung.android.mobileservice:id/link_container"]'
const sharedNoteHeader = '//android.widget.TextView[@resource-id="com.samsung.android.app.notes:id/composer_toolbar_title"]'


const copyBtn = '(//android.widget.LinearLayout[@resource-id="android:id/sem_chooser_grid_item_view"])[5]'




class CreatingSharedNote extends Page {
    public async skipSettings(): Promise<void> {
        await this.clickElement(sendLinkBtn)
        await this.clickElement(copyBtn)
        await page.clickAndroidBackBtn()
    }

    public async clickSharedNoteHeader(): Promise<void> {
        await this.clickElement(sharedNoteHeader)
    }

    // public async clickMoveToTop(): Promise<void> {
    //     await this.clickElement(moveToTop)
    // }

    // public async goToBack(): Promise<void> {
    //     await this.clickElement(moveToTop)
    //     await this.clickElement(moveToTop)
    //     await this.clickElement(moveToTop)
    // }

    public async setNameSharedNote(value: string): Promise<void> {
        await this.setElementInputValue(nameSharedNote, value)
    }

    // public async clickOtherOptionBtn(): Promise<void> {
    //     await this.clickElement(otherOptionsBtn)
    // }

    // public async clickDeleteIcon(): Promise<void> {
    //     await this.clickElement(deleteIcon)
    // }

    // public async clickDelCartLink(): Promise<void> {
    //     await this.clickElement(delCartLink)
    // }

    // public async deleteNote(): Promise<void> {
    //     await this.clickOtherOptionBtn()
    //     await this.clickDeleteIcon()
    //     await this.clickDelCartLink()
    // }
}

export default new CreatingSharedNote()