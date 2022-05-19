import BasePage from "../pageObject/basePage";
import FormPage from "../pageObject/formPage";

context("Elements Page", () => {
    context("Text box scenarios", () => {
      beforeEach(() => {
        FormPage.visit();
      });

      //TODO Finish fixture?
      it("Filling in Text Boxes with fixture",() => {
        cy.fixture('formPageData').then((data) => {
            FormPage.firstNameInput.type(data.firstName);
            FormPage.lastNameInput.type(data.lastName);
            FormPage.emailInput.type(data.email);
            FormPage.addressInput.type(data.currentAddress);
            
        });
      });

      it("Filling in Text Boxes", () => {

        //Texts
        FormPage.firstNameInput.type("Maksims");
        FormPage.lastNameInput.type("Jankovskis");
        FormPage.emailInput.type("ayy@lmao.com");

        //RadioButtons
        FormPage.radio1.check({force: true});
        FormPage.radio2.check({force: true});
        FormPage.radio3.check({force: true});

        //Number
        FormPage.numberInput.type("5355252676")

        //Date
        FormPage.datePicker.click().wait(500);
        FormPage.monthInput.select("February");
        FormPage.yearInput.select("1930");
        FormPage.dateInput.click();
        
        //SubjectInput
        FormPage.subjectInput.type("Economics");
        FormPage.subjectSelect.click();

        //HobbySelect
        FormPage.hobbyInput.click({force: true});

        //Image upload
        FormPage.imageInput.selectFile({
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'png.png',
            mimeType: 'text/plain',
        })
        //Address text
        FormPage.addressInput.type("Street street 5");
        //State ch
        FormPage.stateInput.click();
        FormPage.stateChoice.click();
        //City ch
        FormPage.cityInput.click();
        FormPage.cityChoice.click();
        //Sub mit
        FormPage.submitButton.click();

        //TODO See if there is a better way to validate.
        //Valid?
        FormPage.table.should('contain','Maksims Jankovskis');
        FormPage.table.should('contain',"ayy@lmao.com");
        FormPage.table.should('contain',"Economics");
        FormPage.table.should('contain',"5355252676");

      });


    });
});