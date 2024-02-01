const fetch = require("node-fetch").default

const url = require("../data/url.json")

module.exports = async function(term){

    if(!term) throw new Error("Term Required")

    const f = await(await fetch(url.downloadMovie + term)).body

    return await f

}