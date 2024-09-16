import { expect, browser } from '@wdio/globals'
import entry from '../pageobjects/entry.page.js'
import { page } from "../pageobjects/page.js"
import initial from '../pageobjects/initial.page.js'
import allNotes from '../pageobjects/all.notes.page.js'
import creatingNote from '../pageobjects/creating.note.page.js'
import creatingSharedNote from '../pageobjects/creating.shared.note.page.js'
import navBar from '../pageobjects/nav.bar.page.js'
import sharedNotes from '../pageobjects/shared.notes.page.js'

// const signUpBtnIos = "~just-example";
// const entryTitleIos = "~just-example-label";


describe('My Login application', () => {
    // it('should sign up with valid credentials', async () => {
    //     await browser.pause(5000)
    //     expect(await entry.isEntryTitleDisplayed(entryTitleIos)).true;
    //     expect(await entry.isSignUpButtonDisplayed(signUpBtnIos)).true;
    //     // expect(await entry.getSignUpButtonText(signUpBtnIos)).toEqual("Sign up"); // element has no text
    //     await entry.clickSignUpButton(signUpBtnIos);
    //     await browser.pause(5000)


    // })


    it('Create new note', async () => {
        await browser.pause(5000);

        // // const sideMenuPath = "//android.widget.Button[@resource-id='com.samsung.android.app.notes:id/sign_in_button']";
        // // const sideMenuButton = await page.getElement(sideMenuPath)

        // // await sideMenuButton.waitForDisplayed({ timeout: 10000 });

        // // await sideMenuButton.click();

        // // // // await browser.pause(5000);



        await initial.clickStartButton()

        // // await browser.pause(2000);

        // // const penCreateIcon = await page.getElement("~Створити нотатку")

        // // await penCreateIcon.click()

        // // const continueStylePageBtn = await page.getElement('//android.widget.Button[@resource-id="com.samsung.android.app.notes:id/pager_next_button"]')

        // // await continueStylePageBtn.click()

        // // // // await browser.pause(2000);

        // // const doneSettingPageBtn = await page.getElement('//android.widget.Button[@resource-id="com.samsung.android.app.notes:id/pager_next_button"]')

        // // await doneSettingPageBtn.click()

        await allNotes.createDefaultNote()

        // // await browser.pause(2000);
        // // const nameNote = await page.getElement('//android.widget.FrameLayout[@resource-id="com.samsung.android.app.notes:id/appbar_layout"]')

        // // await nameNote.click()
        // // await browser.pause(2000);
        await creatingNote.clickNameNote()

        // // await page.setElementInputValue('//android.widget.EditText[@resource-id="com.samsung.android.app.notes:id/comp_title_text"]', "qweqwe")
        await creatingNote.setNameNote('qweqwe')

        await browser.pause(2000);

        // // const moveToTop = await page.getElement('~Перехід вгору')

        // // await moveToTop.click()

        // // // // await browser.pause(2000);

        // // await moveToTop.click()

        // // // // await browser.pause(2000);

        // // await moveToTop.click()

        // // // // await browser.pause(2000);
        await creatingNote.goToBack()

        // // const savedFolderName = await page.getElement('//android.widget.TextView[@resource-id="com.samsung.android.app.notes:id/title"]')


        // // const savedFolderNameText = (await savedFolderName.getAttribute('text')).replace(/\u200E/g, '').trim();
        // // expect(savedFolderNameText).toEqual('qweqwe');
        await allNotes.checkSavedFolderNoteName()

        await browser.pause(5000);
    });

    xit('Delete note', async () => {
        await browser.pause(5000);

        // // Замість пошуку з accessibility ID, тепер використовуємо XPath
        // const sideMenuPath = "//android.widget.Button[@resource-id='com.samsung.android.app.notes:id/sign_in_button']";
        // const sideMenuButton = await page.getElement(sideMenuPath)


        // console.log("sideMenuButton", sideMenuButton)


        // await sideMenuButton.waitForDisplayed({ timeout: 10000 });

        // await sideMenuButton.click();

        // await browser.pause(5000);

        // // const penCreateIcon = await page.getElement("~Створити нотатку")

        // // await penCreateIcon.click()
        await allNotes.clickPenCreateIcon()

        // await browser.pause(2000);

        // const continueStylePageBtn = await page.getElement('//android.widget.Button[@resource-id="com.samsung.android.app.notes:id/pager_next_button"]')

        // await continueStylePageBtn.click()

        // await browser.pause(2000);

        // const doneSettingPageBtn = await page.getElement('//android.widget.Button[@resource-id="com.samsung.android.app.notes:id/pager_next_button"]')

        // await doneSettingPageBtn.click()

        // // await browser.pause(2000);
        // // const nameNote = await page.getElement('//android.widget.FrameLayout[@resource-id="com.samsung.android.app.notes:id/appbar_layout"]')

        // // await nameNote.click()
        // // await browser.pause(2000);
        await creatingNote.clickNameNote()

        // await page.setElementInputValue('//android.widget.EditText[@resource-id="com.samsung.android.app.notes:id/comp_title_text"]', "qweqwe12")
        await creatingNote.setNameNote('qweqwe12')

        // // await browser.pause(2000);

        // // const moveToTop = await page.getElement('~Перехід вгору')

        // // await moveToTop.click()

        // // // // await browser.pause(2000);

        // // await moveToTop.click()

        // // // // await browser.pause(2000);

        // // await moveToTop.click()

        // // // // await browser.pause(2000);
        await creatingNote.goToBack()
        /*
        ДОПИЛЯТИ ФУНКЦІЮ ТАК, ЩОБ ВОНА ПРИЙМАЛА ПАРАМЕТР EXPECTED_VALUE І ПОТІМ ЙОГО ПІДСТАВЛЯЛА(ДЛЯ НАСТУПНОЇ СТРОЧКИ У ЦЬОМУ ФАЙЛІ)
         */

        // const savedFolderName = await page.getElement('//android.widget.TextView[@resource-id="com.samsung.android.app.notes:id/title"]')


        // const savedFolderNameText = (await savedFolderName.getAttribute('text')).replace(/\u200E/g, '').trim();
        // expect(savedFolderNameText).toEqual('qweqwe12');
        await allNotes.checkSavedFolderNoteName2('qweqwe12')

        // await savedFolderName.click()
        await allNotes.clickSavedFolderName()

        // // await browser.pause(5000);

        // const otherOptionsBtn = await page.getElement('~Інші опції')

        // await otherOptionsBtn.click()

        // // // await browser.pause(2000);

        // const deleteIcon = await page.getElement('(//android.widget.ImageView[@resource-id="com.samsung.android.app.notes:id/item_button"])[6]')

        // await deleteIcon.click()

        // // // await browser.pause(2000);

        // const delCartLink = await page.getElement('//android.widget.Button[@resource-id="android:id/button1"]')

        // await delCartLink.click()

        // // await browser.pause(2000);
        await creatingNote.deleteNote()

        // await page.isElementDisplayed('//android.widget.TextView[@text="Усі нотатки"]')

        await allNotes.isTitlePageDisplayed()

        await browser.pause(2000);
    });

    it('Create a shared note', async () => {

        // // // Замість пошуку з accessibility ID, тепер використовуємо XPath
        // // const sideMenuPath = "//android.widget.Button[@resource-id='com.samsung.android.app.notes:id/sign_in_button']";
        // // const sideMenuButton = await page.getElement(sideMenuPath)


        // // console.log("sideMenuButton", sideMenuButton)


        // // await sideMenuButton.waitForDisplayed({ timeout: 10000 });

        // // await sideMenuButton.click();

        // // await browser.pause(5000);
        // // //-----------------------------------------------//

        // const shareNoteLink = await page.getElement('~Спільні нотатки')

        // await shareNoteLink.click()

        await navBar.clickShareNoteLink()

        // // await browser.pause(2000);

        // const penCreateIcon = await page.getElement("~Створити нотатку")

        // await penCreateIcon.click()

        await allNotes.clickPenCreateIcon()

        // // await browser.pause(2000);

        // // const sendLinkBtn = await page.getElement('//android.view.ViewGroup[@resource-id="com.samsung.android.mobileservice:id/link_container"]')

        // // await sendLinkBtn.click()

        // // // // await browser.pause(2000);

        // // const copyBtn = await page.getElement('(//android.widget.LinearLayout[@resource-id="android:id/sem_chooser_grid_item_view"])[5]')

        // // await copyBtn.click()

        // // await browser.pause(2000);
        // // /////
        // // await page.clickAndroidBackBtn()

        // // /////

        await creatingSharedNote.skipSettings()

        // const sharedNoteHeader = await page.getElement('//android.widget.TextView[@resource-id="com.samsung.android.app.notes:id/composer_toolbar_title"]')

        // await sharedNoteHeader.click()

        await creatingSharedNote.clickSharedNoteHeader()
        // await sharedNoteHeader.click()

        // // await browser.pause(2000);

        // // await page.setElementInputValue('//android.widget.EditText[@resource-id="com.samsung.android.app.notes:id/comp_title_text"]', "My Shared Note")

        // // await browser.pause(2000);
        await creatingSharedNote.setNameSharedNote("My Shared Note")

        // // const moveToTop = await page.getElement('~Перехід вгору')

        // // await moveToTop.click()

        // // // // await browser.pause(2000);

        // // await moveToTop.click()

        // // // // await browser.pause(2000);

        // // await moveToTop.click()

        // // // // await browser.pause(2000);

        await creatingNote.goToBack()

        // // const savedSharedName = await page.getElement('//android.widget.TextView[@resource-id="com.samsung.android.app.notes:id/title"]')


        // // const savedFolderNameText = (await savedSharedName.getAttribute('text')).replace(/\u200E/g, '').trim();
        // // expect(savedFolderNameText).toEqual("My Shared Note");

        await sharedNotes.checkSavedFolderSharedNoteName("My Shared Note")

        await browser.pause(5000);
    })

    xit('Delete a shared note', async () => {

        // // Замість пошуку з accessibility ID, тепер використовуємо XPath
        // const sideMenuPath = "//android.widget.Button[@resource-id='com.samsung.android.app.notes:id/sign_in_button']";
        // const sideMenuButton = await page.getElement(sideMenuPath)


        // console.log("sideMenuButton", sideMenuButton)


        // await sideMenuButton.waitForDisplayed({ timeout: 10000 });

        // await sideMenuButton.click();

        // await browser.pause(5000);
        // ///////////////////////////////////

        // const shareNoteLink = await page.getElement('~Спільні нотатки')

        // await shareNoteLink.click()

        // await browser.pause(2000);
        // //-----------------------------------------------//

        const noteForDeleteLink = await page.getElement('//android.widget.TextView[@resource-id="com.samsung.android.app.notes:id/title" and @text="‎My Shared Note"]')

        await noteForDeleteLink.click()

        // // await browser.pause(2000)

        const otherOptionsBtn = await page.getElement('~Інші опції')

        await otherOptionsBtn.click()

        // // await browser.pause(2000);

        const delIcon = await page.getElement('(//android.widget.ImageView[@resource-id="com.samsung.android.app.notes:id/item_button"])[3]')

        await delIcon.click()

        // // await browser.pause(2000);

        const delCartLink = await page.getElement('//android.widget.Button[@resource-id="android:id/button1"]')

        await delCartLink.click()

        // // await browser.pause(2000);

        await page.isElementDisplayed('//android.widget.TextView[@text="Спільні нотатки"]')

        await browser.pause(2000);

    })

    xit('Check deleted notes', async () => {


        const cartIcon = await page.getElement('~Кошик')

        await cartIcon.click()

        // // await browser.pause(2000);

        const countOfDeletedNotes = await page.getElement('//android.widget.TextView[@text="1 нотатка"]')

        const countOfDeletedNotesText = (await countOfDeletedNotes.getAttribute('text')).trim();
        expect(countOfDeletedNotesText).toEqual('1 нотатка');

        await browser.pause(2000);
    });


})

