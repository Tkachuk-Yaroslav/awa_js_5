import { browser, expect } from '@wdio/globals'
import Page from './page.js';

const countOfDeletedNotes = '//android.widget.TextView[@text="1 нотатка"]'



class Cart extends Page {
    public async checkCountOfDeletedNotesText(expectedValue: string): Promise<void> {
        const elem = await this.getElement(countOfDeletedNotes)
        const countOfDeletedNotesText = (await elem.getAttribute('text')).trim();
        expect(countOfDeletedNotesText).toEqual(expectedValue);
    }
}

export default new Cart()

