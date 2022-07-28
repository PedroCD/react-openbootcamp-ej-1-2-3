import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'
import ButtonAndStatus from './ButtonAndStatus'

const ContactData = ({contact}) => {
  return (
    <div>
        <h2>Name: {contact.name}</h2>
        <h3>Surname: {contact.surname}</h3>
        <h3>Email: {contact.email}</h3>
        <ButtonAndStatus status={true}></ButtonAndStatus>
    </div>
  )
}

ContactData.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactData