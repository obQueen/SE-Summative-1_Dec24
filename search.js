document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const lineNameInput = document.getElementById('lineNameInput');
    const routeInput = document.getElementById('routeInput');
    const searchTypeSelect = document.getElementById('searchType');
    const searchResultsContainer = document.getElementById('searchResults');

    // Event listener for the search button
    searchButton.onclick = async () => {
        const lineName = lineNameInput.value.trim();
        const route = routeInput.value.trim();
        const searchType = searchTypeSelect.value;

        // Validate input
        if (!lineName && !route) {
            searchResultsContainer.innerHTML = '<p>Please enter a line name or route to search.</p>';
            return;
        }

        // Fetch train lines and filter based on user input
        const trainLines = await fetchTrainLines(); // Fetch the train lines data
        const filteredData = filterTrainLines(trainLines, lineName, route, searchType);
        
        displayResults(filteredData);
    };

    // Function to fetch train lines (similar to what you have in script.js)
    async function fetchTrainLines() {
        try {
            const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('http://www.railwaycodes.org.uk/line/line_names.shtm'));
            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');
            const table = doc.querySelector('table');
            const rows = Array.from(table.querySelectorAll('tr')).slice(1); // Skip header row

            return rows.map(row => {
                const [line, route] = row.querySelectorAll('td');
                return {
                    line: line.textContent.trim(),
                    route: route.textContent.trim()
                };
            });
        } catch (error) {
            console.error('Error fetching train lines:', error);
            return [];
        }
    }

    // Function to filter train lines based on user input
    function filterTrainLines(trainLines, lineName, route, searchType) {
        return trainLines.filter(item => {
            const lineMatch = lineName ? item.line.toUpperCase().includes(lineName.toUpperCase()) : true;
            const routeMatch = route ? item.route.toUpperCase().includes(route.toUpperCase()) : true;

            if (searchType === "OR") {
                return lineMatch || routeMatch;
            } else { // AND
                return lineMatch && routeMatch;
            }
        });
    }

    // Function to display results in the results container
    function displayResults(filteredData) {
        searchResultsContainer.innerHTML = ''; // Clear previous results

        if (filteredData.length === 0) {
            searchResultsContainer.innerHTML = '<p>No results found.</p>';
        } else {
            const table = document.createElement('table');
            const headerRow = `<tr><th>Line Name</th><th>Route</th></tr>`;
            table.innerHTML = headerRow + filteredData.map(
                item => `<tr><td>${item.line}</td><td>${item.route}</td></tr>`
            ).join('');
            searchResultsContainer.appendChild(table);
        }
    }
});
