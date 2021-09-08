const axios = require('axios')

exports.skillate = async (company) => {
    let jobs = await axios.get('https://'+company+'.skillate.com/api/jobs')
    return jobs.data;
}

exports.lever = async (company) => {
    let jobs = await axios.get('https://api.lever.co/v0/postings/'+company+'?mode=json')
    return jobs.data;
}

exports.greenhouse = async (company) => {
    let jobs = await axios.get('https://boards-api.greenhouse.io/v1/boards/'+company+'/jobs')
    return jobs.data;
}

exports.workable = async (company) => {
    let jobs = await axios.get('https://apply.workable.com/api/v1/accounts/'+company+'?full=true')
    return jobs.data;
}