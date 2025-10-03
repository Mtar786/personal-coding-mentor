const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Path to the local progress file
const progressFile = path.join(__dirname, 'progress.json');

/**
 * Load the progress file from disk. If the file doesn't exist
 * or can't be read, return a default structure.
 * @returns {{completedProblems: string[]}}
 */
function loadProgress() {
  try {
    const data = fs.readFileSync(progressFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    // If the file is not found or invalid, start with a blank progress object
    return { completedProblems: [] };
  }
}

/**
 * Save the progress object back to disk. This overwrites the existing file.
 * @param {Object} progress
 */
function saveProgress(progress) {
  fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));
}

/**
 * POST /api/explain
 * Returns a beginner-friendly explanation of a coding problem. This
 * function currently returns a placeholder response. Integrate your
 * preferred AI model here to generate real explanations.
 */
app.post('/api/explain', (req, res) => {
  const { problem, language } = req.body;
  if (!problem) {
    return res.status(400).json({ error: 'Problem description is required.' });
  }
  // Placeholder explanation logic
  const explanation = `Here is a breakdown of the problem:\n${problem}\n\nThis is a stub explanation. Implement your AI integration here.`;
  res.json({ explanation });
});

/**
 * POST /api/review
 * Reviews the submitted code. This function currently returns a
 * placeholder response. You can run the code against test cases or
 * integrate an AI model to produce feedback.
 */
app.post('/api/review', (req, res) => {
  const { code, tests } = req.body;
  if (!code) {
    return res.status(400).json({ error: 'Code is required for review.' });
  }
  // Placeholder review logic
  const feedback = 'Your code looks correct based on the provided tests. Implement your evaluation logic here.';
  res.json({ feedback });
});

/**
 * GET /api/progress
 * Returns the list of completed problems.
 */
app.get('/api/progress', (_req, res) => {
  const progress = loadProgress();
  res.json(progress);
});

/**
 * POST /api/progress
 * Adds a problem ID to the completed problems list if it is not
 * already present.
 */
app.post('/api/progress', (req, res) => {
  const { problemId } = req.body;
  if (!problemId) {
    return res.status(400).json({ error: 'problemId is required.' });
  }
  const progress = loadProgress();
  if (!progress.completedProblems.includes(problemId)) {
    progress.completedProblems.push(problemId);
    saveProgress(progress);
  }
  res.json(progress);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Personal Coding Mentor Agent backend is listening on port ${PORT}`);
});