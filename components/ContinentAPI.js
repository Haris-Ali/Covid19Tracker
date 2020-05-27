async function apiCall(continentName) {
    const response = await fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/' + continentName)
    const responseJSON = await response.json()
    return responseJSON
}

export default apiCall;