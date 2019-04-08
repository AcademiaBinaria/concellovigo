import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public header = 'Contacts';
  public description = 'Manage your contact list';
  public numContacts = 0;
  public counterClass = 'tag secondary';
  public formHidden = false;
  public workStatuses: Option[] = [
    { id: 0, description: 'unknow' },
    { id: 1, description: 'student' },
    { id: 2, description: 'unemployed' },
    { id: 3, description: 'employed' }
  ];
  public contact: Contact = { name: '', isVIP: false, gender: '', workStatus: 0, education: 7, company: '' };
  public contacts: Contact[] = [];

  constructor() {}

  ngOnInit() {}

  public onWorkStatusChanged() {
    if (this.contact.workStatus.toString() === '3') {
      this.contact.education = null;
    } else {
      this.contact.company = '';
    }
  }

  public saveContact() {
    this.contacts.push({ ...this.contact });
    this.numContacts = this.contacts.length;
  }
  public deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter(c => c.name !== contact.name);
    // this.contacts = this.contacts.filter(function filtro(c) {
    //   if (c.name !== contact.name) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    // this.contacts = this.contacts.filter(c => {
    //   if (c.name !== contact.name) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    // this.contacts = this.contacts.filter((c: Contact) => c.name !== contact.name);

    this.numContacts = this.contacts.length;
  }
}

export interface Option {
  id: number;
  description: string;
}
export interface Contact {
  name: amigos;
  isVIP: boolean;
  gender: numberString;
  workStatus: numberString;
  company?: string;
  education?: siete;
}

type numberString = number | string;

type amigos = '' | 'Hugo' | 'Maria' | 5 | { p: 0 };

type siete = 7;
