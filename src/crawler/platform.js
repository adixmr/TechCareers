const axios = require('axios')

exports.skillate = async (company) => {
    let jobs = await axios.get('https://'+company+'.skillate.com/api/jobs')
    return jobs.data;
}

exports.lever = async (company) => {
    let jobs = await axios.get('https://api.lever.co/v0/postings/'+company+'?mode=json')
    return jobs.data;
}

