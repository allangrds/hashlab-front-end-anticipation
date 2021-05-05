import React, { useState } from 'react'

import MainContainer from '../../containers/Main'
import services from '../../services'
import config from '../../config.json'
import errorList from './errors.json'

const Main = () => {
  const [alert, setAlert] = useState({})
  const [anticipationValues, setAnticipationValues] = useState({})

  function handleOnClick (values) {
    setAlert({
      text: 'Simulando antecipação...',
      type: 'info',
    })
    const payload = {
      ...values,
      days: config.anticipation_days,
    }

    services.simulation(payload, {})
      .then((response) => {
        if (response.status && response.status !== 200) {
          if (errorList[response.status].text) {
            setAlert({
              text: errorList[response.status].text,
              type: errorList[response.status].type,
            })

            return true
          }

          setAlert({
            text: errorList.others.text,
            type: errorList.others.type,
          })

          return true
        }

        setAnticipationValues(response)
        setAlert({})

        return true
      })
  }

  return (
    <MainContainer
      alert={alert}
      anticipationValues={anticipationValues}
      onClick={handleOnClick}
    />
  )
}

export default Main
