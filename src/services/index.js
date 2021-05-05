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
    .then(response => response.json())
}

const services = {
  simulation,
}

export default services
