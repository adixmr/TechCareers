const axios = require('axios');
const { param } = require('../routes/platform');

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

exports.mynexthire = async (company) => {
    let jobs = await axios.post('https://'+company+'.mynexthire.com/employer/careers/reqlist/get', {"source":"careers","code":"","filterByBuId":-1})
    return jobs.data;
}

exports.freshteam = async (company) => {
    let jobs = await axios.get('https://'+company+'.freshteam.com/hire/widgets/jobs.json')
    return jobs.data;
}

exports.paramai = async (company) => {
    let jobs = await axios.get('https://'+company+'.app.param.ai/api/career/get_job/')
    return jobs.data;
}

 

