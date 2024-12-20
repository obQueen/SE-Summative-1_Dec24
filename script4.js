const alphabetContainer = document.querySelector('.alphabet-links');
const resultsContainer = document.getElementById('results');

function createAlphabetButtons() {
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const button = document.createElement('button');
        button.textContent = letter;
        button.onclick = () => displayResults(letter);
        alphabetContainer.appendChild(button);
    }
}

async function fetchTrainLines() {
    try {
        const response = await fetch('http://www.railwaycodes.org.uk/line/line_names.shtm');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const table = doc.querySelector('table');
        const rows = Array.from(table.querySelectorAll('tr')).slice(1);
        
        // Extract line names and routes
        const trainLines = rows.map(row => {
            const [line, route] = row.querySelectorAll('td');
            return {
                line: line.textContent.trim(),
                route: route.textContent.trim()
            };
        });

        console.log("Fetched Train Lines:", trainLines); // Debugging line
        return trainLines;
    } catch (error) {
        console.error('Error fetching train lines:', error);
        return [];
    }
}

async function displayResults(letter) {
    resultsContainer.innerHTML = '<p>Loading...</p>';
    
    try {
        const trainLines = await fetchTrainLines();
        
        // Filter lines that start with the selected letter
        const filteredData = trainLines.filter(item => item.line.toUpperCase().startsWith(letter));
        
        console.log(`Filtered Data for "${letter}":`, filteredData); // Debugging line
        
        resultsContainer.innerHTML = '';
        
        if (filteredData.length === 0) {
            resultsContainer.innerHTML = `<p>No results found for "${letter}"</p>`;
        } else {
            const table = document.createElement('table');
            const headerRow = `<tr><th>Line Name</th><th>Route</th></tr>`;
            table.innerHTML = headerRow + filteredData.map(
                item => `<tr><td>${item.line}</td><td>${item.route}</td></tr>`
            ).join('');
            resultsContainer.appendChild(table);
        }
    } catch (error) {
        console.error('Error displaying results:', error);
        resultsContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    }
}

function goBack() {
    history.back();
}

function goHome() {
    location.reload();
}

createAlphabetButtons();
