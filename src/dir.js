const fetch = require("node-fetch").default

const url = require("../data/url.json")

module.exports = async function(term){

    const f = await(await fetch(url.baseDir + term)).json()

    return await f

}
