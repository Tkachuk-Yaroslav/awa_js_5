import { expect } from '@wdio/globals'
import Page from './page.js';

const pageTitle = '//android.widget.TextView[@text="Спільні нотатки"]'
const savedSharedName = '//android.widget.TextView[@resource-id="com.samsung.android.app.notes:id/title"]'
const noteForDeleteLink = '//android.widget.TextView[@resource-id="com.samsung.android.app.notes:id/title" and @text="‎My Shared Note"]'


class SharedNote extends Page {
    public async checkSavedFolderSharedNoteName(expectedValue: string): Promise<void> {
        const elem = await this.getElement(savedSharedName)

        const savedFolderNameText = (await elem.getAttribute('text')).replace(/\u200E/g, '').trim();
        expect(savedFolderNameText).toEqual(expectedValue);
    }

    public async clickNoteForDeleteLink(): Promise<void> {
        await this.clickElement(noteForDeleteLink)
    }

    public async isPageTitleDisplayed(): Promise<void> {
        await this.isElementDisplayed(pageTitle)
    }
}

export default new SharedNote()