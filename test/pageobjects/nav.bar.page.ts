import Page from './page.js';

const shareNoteLink = '~Спільні нотатки'
const cartIcon = '~Кошик'


class NavBar extends Page {
    public async clickShareNoteLink(): Promise<void> {
        await this.clickElement(shareNoteLink)
    }

    public async clickCartIcon(): Promise<void> {
        await this.clickElement(cartIcon)
    }
}

export default new NavBar()