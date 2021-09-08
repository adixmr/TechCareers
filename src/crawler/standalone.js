const axios = require('axios')

exports.urbancompany = async () => {
    let jobs = await axios.post('https://www.urbanclap.com/api/v2/org-operations/getAlljobs')
    return jobs.data;
}

exports.tata1mg = async () => {
    let jobs = await axios.get('https://www.1mg.com/pharmacy_api/get-all-jobs')
    return jobs.data;
}

