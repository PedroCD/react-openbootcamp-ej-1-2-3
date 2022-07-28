import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { STATUS } from '../models/status.enum';
import { BUTTON_STATUS } from '../models/buttonStatus.enum';

const ButtonAndStatus = (status) => {
    const [connected, setConnected] = useState(status);

    const changeStatus = () => {
        setConnected(!connected)
    }

  return (
    <div>
        <h3>Status: {connected === false ? STATUS.DISCONNECTED : STATUS.CONNECTED}</h3>
        <button onClick={changeStatus}>{connected === false ? BUTTON_STATUS.NOT_CONNECTED : BUTTON_STATUS.IS_CONNECTED}</button>
    </div>
  )
}

ButtonAndStatus.propTypes = {
    status: PropTypes.bool,
}

export default ButtonAndStatus