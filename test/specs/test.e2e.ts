import { expect, browser } from '@wdio/globals'
import entry from '../pageobjects/entry.page.js'
import { page } from "../pageobjects/page.js"


const signUpBtnIos = "~just-example";
const entryTitleIos = "~just-example-label";


describe('My Login application', () => {
    // it('should sign up with valid credentials', async () => {
    //     await browser.pause(5000)
    //     expect(await entry.isEntryTitleDisplayed(entryTitleIos)).true;
    //     expect(await entry.isSignUpButtonDisplayed(signUpBtnIos)).true;
    //     // expect(await entry.getSignUpButtonText(signUpBtnIos)).toEqual("Sign up"); // element has no text
    //     await entry.clickSignUpButton(signUpBtnIos);
    //     await browser.pause(5000)


    // })

    it('повинно перевірити видимість та натиснути на елемент з accessibility id', async () => {
        await browser.pause(5000);

        // Замість пошуку з accessibility ID, тепер використовуємо XPath
        const sideMenuPath = "//android.widget.Button[@resource-id='com.samsung.android.app.notes:id/sign_in_button']";
        const sideMenuButton = await page.getElement(sideMenuPath)

        // const sideMenuButton = await $("//android.widget.Button[@resource-id='com.samsung.android.app.notes:id/sign_in_button']");

        console.log("sideMenuButton", sideMenuButton)

        // Явне очікування
        await sideMenuButton.waitForDisplayed({ timeout: 10000 });

        // Перевірка видимості кнопки
        // expect(await sideMenuButton.isDisplayed()).to.be.true;

        // Клік на кнопку
        await sideMenuButton.click();

        await browser.pause(5000);

        const penCreateIcon = await page.getElement("~Створити нотатку")

        await penCreateIcon.click()

        await browser.pause(2000);

        const continueStylePageBtn = await page.getElement('//android.widget.Button[@resource-id="com.samsung.android.app.notes:id/pager_next_button"]')

        await continueStylePageBtn.click()

        await browser.pause(2000);

        const doneSettingPageBtn = await page.getElement('//android.widget.Button[@resource-id="com.samsung.android.app.notes:id/pager_next_button"]')

        await doneSettingPageBtn.click()

        await browser.pause(2000);
        // const textarea = await page.getElement('//android.view.ViewGroup[@resource-id="com.samsung.android.app.notes:id/zoom_lock_tip"]')

        // await textarea.click()
        const nameNote = await page.getElement('//android.widget.FrameLayout[@resource-id="com.samsung.android.app.notes:id/appbar_layout"]')

        await nameNote.click()
        await browser.pause(2000);

        // await page.setElementInputValue('//android.view.ViewGroup[@resource-id="com.samsung.android.app.notes:id/zoom_lock_tip"]', "qweqweqwe")

        await page.setElementInputValue('//android.widget.EditText[@resource-id="com.samsung.android.app.notes:id/comp_title_text"]', "qweqwe")
        // await page.setElementInputValue('//android.widget.EditText[@resource-id="com.samsung.android.app.notes:id/comp_title_text"]', "‎qweqwe")


        await browser.pause(2000);

        const moveToTop = await page.getElement('~Перехід вгору')

        await moveToTop.click()

        // // const backBtn = await page.getElement('//android.widget.ImageButton[@content-desc="Перехід вгору"]')
        // // await backBtn.click()
        // // await browser.pause(2000);

        // // await backBtn.click()
        // // await browser.pause(2000);


        await browser.pause(2000);

        await moveToTop.click()

        await browser.pause(2000);

        await moveToTop.click()

        await browser.pause(2000);

        const savedFolderName = await page.getElement('//android.widget.TextView[@resource-id="com.samsung.android.app.notes:id/title"]')

        // const savedFolderNameText = (await savedFolderName.getAttribute('text')).trim();

        const savedFolderNameText = (await savedFolderName.getAttribute('text')).replace(/\u200E/g, '').trim();
        expect(savedFolderNameText).toEqual('qweqwe');

    });


})

