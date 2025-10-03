/*
 * Frontend logic for the Personal Coding Mentor Agent.
 * This script adds event listeners to the buttons and makes
 * requests to the backend API endpoints.
 */

// Base URL for the backend API
const API_BASE = 'http://localhost:3001/api';

// Explain button event
document.getElementById('explain-btn').addEventListener('click', async () => {
  const problem = document.getElementById('problem-input').value;
  const language = document.getElementById('language-select').value;
  if (!problem) {
    alert('Please describe the problem.');
    return;
  }
  try {
    const response = await fetch(`${API_BASE}/explain`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ problem, language })
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'Failed to get explanation');
    }
    const data = await response.json();
    document.getElementById('explanation-output').textContent = data.explanation;
  } catch (err) {
    document.getElementById('explanation-output').textContent = err.message;
  }
});

// Review button event
document.getElementById('review-btn').addEventListener('click', async () => {
  const code = document.getElementById('code-input').value;
  const tests = document.getElementById('tests-input').value;
  if (!code) {
    alert('Please paste your code.');
    return;
  }
  try {
    const response = await fetch(`${API_BASE}/review`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, tests })
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'Failed to review code');
    }
    const data = await response.json();
    document.getElementById('review-output').textContent = data.feedback;
  } catch (err) {
    document.getElementById('review-output').textContent = err.message;
  }
});