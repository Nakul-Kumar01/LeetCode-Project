
const {getIdByLanguage,submitBatch} = require('../utils/problem_Utility');

const createProblem = async (req, res) => {

    const {
        title, discription, difficulty, tags, visibleTestCases, hiddenTestCases, startCode, referenceSolution, problemCreator
    } = req.body;

    // as admin send the problem, before saving it in database first verify its solution on visible test cases
    // verify by Judge0
    // AXIOS : it is updation on Fetch 
    // since, we have limited API, therefore we will send complete batch of visible test cases // and it will verify all of them at once

    try {

        for (const { language, completeCode } of referenceSolution) {

            const languageId = getIdByLanguage(language);

            // Create Submission Batch // for one language , one Submission Batch will be made // let we hv 2 test cases, then we recieve 2 tokens in array
            const Submission = visibleTestCases.map(({ input, output }) => ({
                source_code: completeCode,
                language_id: languageId,
                stdin: input,
                expected_output: output
            }));

          const submitResult =  await submitBatch(Submission);       
          /*
          Judge0 : 2 step process 
          1) first it submit BatchSubmission, and it will return array of tokens
          2) now, we will make GET request with each token and fetch actual result
             - In final result, we hv status ID: 1- in queue, 2-processing , 3- Accepted , 4- wrong ans , 5- tle, 6- compilation error , 7- Runtime error


           // when we submit BatchSubmission, then it takes some time to run code, now if we wait over there server then there resourses will be used
           // therefore, it gave us token(to identify our submission) // ki thodi derr baad aana
          */

          const resultToken = submitResult.map(value=>value.token); // it is format for Judge0: make GET request with array of each Token

          const testResult = await submitToken(resultToken);
        }

    } 
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
}