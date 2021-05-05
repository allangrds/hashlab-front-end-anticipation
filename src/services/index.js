const baseUrl = 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app/'

function getUrl (params) {
  const url = new URL(baseUrl)
  url.search = new URLSearchParams(params).toString()

  return url.href
}

function simulation (body, params) {
  const url = getUrl(params)

  return fetch(url, {
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    method: 'POST',
  })
    .then(res => (
      res.status === 200 && res.json ? res.json() : res
    ))
}

function simulationWithTimeout (body) {
  const params = {
    timeout: null,
  }

  return simulation(body, params)
}

function simulationWithInternalError (body) {
  const params = {
    internalError: null,
  }

  return simulation(body, params)
}

function simulationWithDelay (body) {
  const params = {
    delay: 3500,
  }

  return simulation(body, params)
}

const services = {
  simulation,
  simulationWithDelay,
  simulationWithInternalError,
  simulationWithTimeout,
}

export default services
