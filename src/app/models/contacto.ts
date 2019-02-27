export class Contacto {
    constructor(_id = '', contactFormName = '', contactFormEmail = '', contactFormSubjects = '', contactFormMessage = '', contactFormCopy = ''){
        this._id = _id;
        this.contactFormName = contactFormName;
        this.contactFormEmail = contactFormEmail;
        this.contactFormSubjects = contactFormSubjects;
        this.contactFormMessage = contactFormMessage;
        this.contactFormCopy = contactFormCopy;
    }

    _id: string;
    contactFormName:string;
    contactFormEmail:string;
    contactFormSubjects: string;
    contactFormMessage: string;
    contactFormCopy: string;
}