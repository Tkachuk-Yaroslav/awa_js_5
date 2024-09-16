import { browser } from '@wdio/globals'
import initial from '../pageobjects/initial.page.js'
import allNotes from '../pageobjects/all.notes.page.js'
import creatingNote from '../pageobjects/creating.note.page.js'
import creatingSharedNote from '../pageobjects/creating.shared.note.page.js'
import navBar from '../pageobjects/nav.bar.page.js'
import sharedNotes from '../pageobjects/shared.notes.page.js'
import cart from '../pageobjects/cart.page.js'


describe('My Login application', () => {

    it('Create new note', async () => {
        await browser.pause(5000);

        await initial.clickStartButton()
        await allNotes.createDefaultNote()
        await creatingNote.clickNameNote()
        await creatingNote.setNameNote('qweqwe')
        await browser.pause(2000);
        await creatingNote.goToBack()
        await allNotes.checkSavedFolderNoteName()

        await browser.pause(5000);
    });

    it('Delete note', async () => {
        await browser.pause(5000);

        await allNotes.clickPenCreateIcon()
        await creatingNote.clickNameNote()
        await creatingNote.setNameNote('qweqwe12')
        await creatingNote.goToBack()
        await allNotes.checkSavedFolderNoteName2('qweqwe12')
        await allNotes.clickSavedFolderName()
        await creatingNote.deleteNote()
        await allNotes.isTitlePageDisplayed()

        await browser.pause(2000);
    });

    it('Create a shared note', async () => {

        await navBar.clickShareNoteLink()
        await allNotes.clickPenCreateIcon()
        await creatingSharedNote.skipSettings()
        await creatingSharedNote.clickSharedNoteHeader()
        await creatingSharedNote.setNameSharedNote("My Shared Note")
        await creatingNote.goToBack()
        await sharedNotes.checkSavedFolderSharedNoteName("My Shared Note")

        await browser.pause(5000);
    })

    it('Delete a shared note', async () => {

        await sharedNotes.clickNoteForDeleteLink()
        await creatingSharedNote.deleteSharedNote()
        await sharedNotes.isPageTitleDisplayed()

        await browser.pause(2000);
    })

    it('Check deleted notes', async () => {
        await navBar.clickCartIcon()
        await cart.checkCountOfDeletedNotesText('1 нотатка')

        await browser.pause(2000);
    });


})

