import React, { useState } from 'react'

import MainContainer from '../../containers/Main'
import services from '../../services'
import config from '../../config.json'
import errorList from './errors.json'

function getAnticipationDays () {
  const noExist = !config.anticipation_days
  const isEmpty = config.anticipation_days
    && config.anticipation_days.length === 0

  if (noExist || isEmpty) {
    return {}
  }

  return {
    days: config.anticipation_days,
  }
}

const Main = () => {
  const [alert, setAlert] = useState({})
  const [anticipationValues, setAnticipationValues] = useState({})

  function handleOnClick (values) {
    const days = getAnticipationDays()

    setAlert({
      text: 'Simulando antecipação...',
      type: 'info',
    })

    const payload = {
      ...values,
      ...days,
    }

    services.simulation(payload)
      .then((response) => {
        if (response.status && response.status !== 200) {
          let error = errorList.others

          if (errorList[response.status]) {
            error = errorList[response.status]
          }

          setAlert(error)

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
