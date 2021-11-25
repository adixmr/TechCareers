const axios = require('axios')

exports.urbancompany = async () => {
    let jobs = await axios.post('https://www.urbanclap.com/api/v2/org-operations/getAlljobs')
    return jobs.data;
}

exports.tata1mg = async () => {
    let jobs = await axios.get('https://www.1mg.com/pharmacy_api/get-all-jobs')
    return jobs.data;
}

exports.unacademy = async () => {
    let jobs = await axios.get('https://0qv3y4glfd.execute-api.us-east-1.amazonaws.com/gamma/spi/v3/jobs?limit=100&state=published&include_fields=employment_type')
    return jobs.data;
}

