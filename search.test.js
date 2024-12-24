// search.test.js

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let document;
let window;

describe('Search.js tests', () => {
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
    const scriptContent = fs.readFileSync(path.resolve(__dirname, './search.js'), 'utf8');
    const script = document.createElement('script');
    script.textContent = scriptContent;
    document.body.appendChild(script);
  });

  test('fetchTrainLines populates trainLines array', async () => {
    await window.fetchTrainLines();
    expect(window.trainLines).toEqual([{ line: 'Test Line', route: 'Test Route' }]);
  });

  test('performSearch filters correctly', async () => {
    await window.fetchTrainLines();
    document.getElementById('lineNameInput').value = 'Test';
    document.getElementById('routeInput').value = '';
    document.getElementById('searchType').value = 'AND';
    
    window.performSearch();
    
    const resultsContainer = document.getElementById('searchResults');
    expect(resultsContainer.innerHTML).toContain('Test Line');
    expect(resultsContainer.innerHTML).toContain('Test Route');
  });

  test('performSearch handles no results', async () => {
    await window.fetchTrainLines();
    document.getElementById('lineNameInput').value = 'Nonexistent';
    document.getElementById('routeInput').value = '';
    document.getElementById('searchType').value = 'AND';
    
    window.performSearch();
    
    const resultsContainer = document.getElementById('searchResults');
    expect(resultsContainer.innerHTML).toContain('No results found.');
  });
});
