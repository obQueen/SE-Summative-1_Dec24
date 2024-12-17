# SE-Summative-1_Dec24
System Engineering Summative 1 2024/2025
## **Feasibility Study Overview**
<p> The Train Line Name and Route Search Tool aims to provide users with an accessible and searchable database of train line names and their corresponding routes extracted from railwaycodes.org.uk. This project simplifies navigation of line names for public users, freight and passenger operating companies, and NR staff.</p>

## **Feasibility Justification**
### *Current Problem*
*  The original website provides comprehensive railway line data but lacks search functionality and an API for integration.
*  This makes it difficult to filter specific line names and routes efficiently.

### *Proposed Solution*
*  Develop a simple web application using HTML, CSS, and JavaScript to:
*  Search train line names and routes using keywords (partial/full).
*  Display results alphabetically for better accessibility.
*  Use web scraping (Node.js with Cheerio) to gather and periodically update data.

### *Benefits:*
*  Improved Accessibility: Users can search line details instantly.
*  Efficiency: Freight/passenger companies can quickly locate specific line data.
*  Future-Proof: Recommendations to integrate with an API when available.

### *Tools and Technology*
*  Web Scraping: Node.js, Cheerio (to extract and structure data).
*  Front-End: HTML, CSS, JavaScript.
*  Version Control: GitHub (repository management).
*  Testing: Jest (for search logic).
*  Deployment: GitHub Pages.
