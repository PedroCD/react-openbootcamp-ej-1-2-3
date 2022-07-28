import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactData from '../ContactData';

const ContactList = () => {
    
    const defaultContact = new Contact('Pedro', 'Camejo', 'email@email.com', false);

  return (
    <div>
        <ContactData contact={defaultContact}></ContactData>
    </div>
  )
}

export default ContactList