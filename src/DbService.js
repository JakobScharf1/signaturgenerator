import axios from "axios";

async function getPortrait(email) {

    //let requestURI = "https://signatur.wematch-intern.de/db/getportrait"
    let requestURI = "https://signatur.wematch-intern.de/db/getportrait"
    const params = {
        email: email
    }

    try {
        const response = await axios.get(requestURI, { params })
        return response.data.portrait
    } catch(error) {
        throw new Error(error)
    }

}

export { getPortrait }