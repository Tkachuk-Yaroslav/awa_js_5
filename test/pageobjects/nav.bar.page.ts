import { browser, expect } from '@wdio/globals'
import Page from './page.js';

const shareNoteLink = '~Спільні нотатки'


class NavBar extends Page {
    public async clickShareNoteLink(): Promise<void> {
        await this.clickElement(shareNoteLink)
    }
}

export default new NavBar()