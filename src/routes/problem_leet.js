
const express = require('express');
const problemRouter = express.Router();



problemRouter.post('/create', createProblem);
problemRouter.delete('/:id', deleteProblem);
problemRouter.patch('/:id', updateProblem);

problemRouter.get('/', getAllProblems);
problemRouter.get('/:id', getProblemById);
problemRouter.get('/user', solvedProblems);