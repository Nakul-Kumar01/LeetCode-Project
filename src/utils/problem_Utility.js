const axios = require('axios');


const getIdByLanguage = (language)=>{

    const languageId = {
        "c++": 54,
        "java": 62,
        "javascript": 63
    }

    return languageId[language.toLowerCase()];
}

const submitBatch = async (Submission)=>{

const options = {
  method: 'POST',
  url: 'https://judge0-extra-ce.p.rapidapi.com/submissions/batch',
  params: {
    base64_encoded: 'true'
  },
  headers: {
    'x-rapidapi-key': process.env.JUDGE0_RAPIDAPIKEY,
    'x-rapidapi-host': 'judge0-extra-ce.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    Submission
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		return response.data;   // what will this return?? // it will return array of tokens // now, we will make GET request with each token and fetch actual result
	} catch (error) {
		console.error(error);
	}
}

return await fetchData();

}


module.exports = {getIdByLanguage,submitBatch};