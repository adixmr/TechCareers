const axios = require('axios')

module.exports = async (company) => {
    let jobs = await axios.get('https://api.lever.co/v0/postings/'+company+'?mode=json')
    return jobs.data;
}