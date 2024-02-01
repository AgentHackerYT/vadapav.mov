const fetch = require("node-fetch").default

const url = require("../data/url.json")

module.exports = async function(term){

    if(!term) throw new Error("Term Required")

    const f = await(await fetch(url.search + term)).json()

    return await f

}