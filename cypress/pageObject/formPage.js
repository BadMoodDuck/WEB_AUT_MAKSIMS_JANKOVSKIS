import BasePage from"./basePage";

class FormPage extends BasePage{
    
    static get url(){
        return'/automation-practice-form'    
    }
    static get firstNameInput () {
     return cy.get('input#firstName');
    }
    static get lastNameInput () {
     return cy.get('input#lastName');
    }
    static get emailInput () {
        return cy.get('input#userEmail');
    }
    static get radio1 () {
        return cy.get('input#gender-radio-1');
    }
    static get radio2 () {
        return cy.get('input#gender-radio-2');
    }
    static get radio3 () {
        return cy.get('input#gender-radio-3');
    }
    static get numberInput () {
        return cy.get('input#userNumber');
    }
    static get monthInput () {
        return cy.get('select.react-datepicker__month-select');
    }
    static get yearInput () {
        return cy.get('select.react-datepicker__year-select');
    }
    static get dateInput () {
        return cy.get('div[aria-label="Choose Friday, February 28th, 1930"]');
    }
    static get datePicker () {
        return cy.get('input#dateOfBirthInput');
    }
    static get subjectInput () {
        return cy.get('input#subjectsInput');
    }
    static get subjectSelect () {
        return cy.get('div#react-select-2-option-0');
    }
    static get hobbyInput () {
        return cy.get('input#hobbies-checkbox-3');
    }
    static get imageInput () {
        return cy.get('input#uploadPicture');
    }
    static get addressInput () {
        return cy.get('textarea#currentAddress');
    }
    static get stateInput () {
        return cy.get('div#state');
    }
    static get stateChoice() {
        return cy.get('div#react-select-3-option-0');
    }
    static get cityInput () {
        return cy.get('div#city');
    }
    static get cityChoice() {
        return cy.get('div#react-select-4-option-0');
    }
    static get submitButton() {
        return cy.get('button#submit');
    }
    static get table() {
        return cy.get('table.table');
    }


}

export default FormPage;