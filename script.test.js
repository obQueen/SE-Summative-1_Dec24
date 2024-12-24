// script.test.js

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let document;
let window;

describe('Script.js tests', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    document = dom.window.document;
    window = dom.window;

    // Mock fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          contents: '<table><tr><td>Line Name</td><td>Route</td></tr><tr><td>Test Line</td><td>Test Route</td></tr></table>'
        })
      })
    );

    // Load the script
    const scriptContent = fs.readFileSync(path.resolve(__dirname, './script.js'), 'utf8');
    const script = document.createElement('script');
    script.textContent = scriptContent;
    document.body.appendChild(script);
  });

  test('createAlphabetButtons creates 26 buttons', () => {
    const buttons = document.querySelectorAll('.alphabet-links button');
    expect(buttons.length).toBe(26);
  });

  test('fetchTrainLines returns correct data', async () => {
    const trainLines = await window.fetchTrainLines();
    expect(trainLines).toEqual([{ line: 'Test Line', route: 'Test Route' }]);
  });

  test('displayResults shows loading message', async () => {
    await window.displayResults('A');
    const resultsContainer = document.getElementById('results');
    expect(resultsContainer.innerHTML).toContain('Loading...');
  });
});
