import { browser, expect } from '@wdio/globals'
import Page from './page.js';
import { page } from './page.js'

const savedSharedName = '//android.widget.TextView[@resource-id="com.samsung.android.app.notes:id/title"]'

// await sharedNoteHeader.click()


class SharedNote extends Page {
    public async checkSavedFolderSharedNoteName(expectedValue: string): Promise<void> {
        const elem = await this.getElement(savedSharedName)

        const savedFolderNameText = (await elem.getAttribute('text')).replace(/\u200E/g, '').trim();
        expect(savedFolderNameText).toEqual(expectedValue);
    }

    // public async clickMoveToTop(): Promise<void> {
    //     await this.clickElement(moveToTop)
    // }

    // public async goToBack(): Promise<void> {
    //     await this.clickElement(moveToTop)
    //     await this.clickElement(moveToTop)
    //     await this.clickElement(moveToTop)
    // }

    // public async setNameNote(value: string): Promise<void> {
    //     await this.setElementInputValue(headerNote, value)
    // }

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

export default new SharedNote()