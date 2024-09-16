import { browser, expect } from '@wdio/globals'
import Page from './page.js';

const penCreateIcon = "~Створити нотатку"
const continueStylePageBtn = '//android.widget.Button[@resource-id="com.samsung.android.app.notes:id/pager_next_button"]'
const doneSettingPageBtn = '//android.widget.Button[@resource-id="com.samsung.android.app.notes:id/pager_next_button"]'
const pageTitle = '//android.widget.TextView[@text="Усі нотатки"]'

const savedFolderName = '//android.widget.TextView[@resource-id="com.samsung.android.app.notes:id/title"]'





class AllNotes extends Page {
    public async clickPenCreateIcon(): Promise<void> {
        await this.clickElement(penCreateIcon)
    }

    public async clickContinueStylePageBtn(): Promise<void> {
        await this.clickElement(continueStylePageBtn)
    }

    public async clickDoneSettingPageBtn(): Promise<void> {
        await this.clickElement(doneSettingPageBtn)
    }

    // Метод для створення нотатки з дефолтними налаштуваннями
    public async createDefaultNote(): Promise<void> {
        await this.clickPenCreateIcon();
        await this.clickContinueStylePageBtn();
        await this.clickDoneSettingPageBtn();
    }

    public async checkSavedFolderNoteName(): Promise<void> {
        const elem = await this.getElement(savedFolderName)

        const savedFolderNameText = (await elem.getAttribute('text')).replace(/\u200E/g, '').trim();
        expect(savedFolderNameText).toEqual('qweqwe');
    }

    public async checkSavedFolderNoteName2(expectedValue: string): Promise<void> {
        const elem = await this.getElement(savedFolderName)

        const savedFolderNameText = (await elem.getAttribute('text')).replace(/\u200E/g, '').trim();
        expect(savedFolderNameText).toEqual(expectedValue);
    }

    //спробувати для 2 тест кесу
    public async clickSavedFolderName(): Promise<void> {
        await this.clickElement(savedFolderName)
    }

    public async isTitlePageDisplayed(): Promise<void> {
        await this.isElementDisplayed(pageTitle)
    }
}

export default new AllNotes()