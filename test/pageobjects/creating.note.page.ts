import Page from './page.js';

const nameNote = '//android.widget.FrameLayout[@resource-id="com.samsung.android.app.notes:id/appbar_layout"]'
const moveToTop = '~Перехід вгору'
const headerNote = '//android.widget.EditText[@resource-id="com.samsung.android.app.notes:id/comp_title_text"]'
const otherOptionsBtn = '~Інші опції'
const deleteIcon = '(//android.widget.ImageView[@resource-id="com.samsung.android.app.notes:id/item_button"])[6]'
const delCartLink = '//android.widget.Button[@resource-id="android:id/button1"]'



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

    public async clickOtherOptionBtn(): Promise<void> {
        await this.clickElement(otherOptionsBtn)
    }

    public async clickDeleteIcon(): Promise<void> {
        await this.clickElement(deleteIcon)
    }

    public async clickDelCartLink(): Promise<void> {
        await this.clickElement(delCartLink)
    }

    public async deleteNote(): Promise<void> {
        await this.clickOtherOptionBtn()
        await this.clickDeleteIcon()
        await this.clickDelCartLink()
    }
}

export default new CreatingNote()