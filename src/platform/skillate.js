const axios = require('axios')

module.exports = async (company) => {
    let jobs = await axios.get('https://'+company+'.skillate.com/api/jobs')
    return jobs.data;
}