# SE-Summative-1_Dec24
System Engineering Summative 1 2024/2025
## **Train Line Information Search Application**
The Train Line Information Search Application is designed to provide users with a seamless way to search for train lines and routes using flexible and advanced search criteria. By integrating features like wildcard searches and logical operators, the app ensures that users can quickly and efficiently find the information they need. Below are the key highlights and benefits of this application:

### Key Features
*  Search Functionality:
  *  Wildcard Support: Allows users to include * or % in their search to match any sequence of characters in line names or routes.
  *  Logical Operators: Enables users to combine search criteria with AND/OR logic for more refined results.
  *  Real-Time Updates: Incorporates live data from train schedules and disruption APIs to ensure up-to-date and accurate information.
*  Dynamic Results Display:
  *  Results are shown in a user-friendly table format, clearly listing train line names and their corresponding routes.
  *  Includes a "No Results Found" message for unmatched queries, ensuring clarity and user feedback.

<img width="814" alt="Fig: HomePage" src="https://github.com/user-attachments/assets/2ccddf9d-6ac6-43a1-8f5d-dfb6d9e7fc44" />

## Prototype 
Figma was use to create the prototype. There were main two(2) desig options. Option 1 was approved during the option selection review sprint.

**Reason for Creating the App**

Enhancing search capabilities for train line information addresses the shortcomings of current tools, which often lack flexibility and comprehensive functionality. This application provides a modern and intuitive solution to these challenges, offering the following benefits:
*  Improved Efficiency: By using advanced search capabilities and real-time data, users can access relevant train line information in seconds.
*  Increased Accuracy: With live updates from trusted APIs, the data is always current, eliminating outdated or incomplete results.
*  User-Friendly Design: By introducing a search function and organising train line data alphabetically (A-Z), the application offers a more intuitive and user-friendly experience. Users can easily navigate and locate specific information without scrolling through long, cumbersome tables, making the process faster and more efficient.



## Deployed App

## User Documentation
This web-based tool allows you to search for UK train line information quickly and easily. You can search by line name or route, and even use wildcard searches for more flexible queries.

#### System Requirements
* A modern web browser (Chrome, Firefox, Safari, or Edge)
* Internet connection

#### Accessing the Application
Open your web browser.
Navigate to **[insert your application's URL here].**
The application should load automatically.

##### Using the Application

##### Basic Search
* In the search box, type the name of a train line or a route you want to find.
* Click the "Search" button or press Enter.
* Results will appear below the search box.

##### Wildcard Search
You can use '*' as a wildcard in your search. To find line name or route:
* starting with "London": Type "London*" and search.
* starting with "A": Type "A*" and search.
* ending with "Express": Type "*Express" and search.
* containing "West": Type "*West*" and search.

 
##### Wildcard Search
You can select 'OR' or 'AND' in your search. 
* Use any of the options listed under wildcard search
* select OR for records that meet atleast one of the entry criteria in the user input fields
* select AND for records that meet both of the entry criteria  user input fields

##### Reading Search Results
Results are displayed on screen in table format
Each record shows the line name and its route.
If no results are found, you'll see a message indicating "No Results Found".

##### Mobile Use
* The application is works on smartphones and tablets.
* Simply access the same URL on your mobile device's browser.

###### Troubleshooting

* No Results Found
 * Check your spelling.
 * Try using wildcards for a broader search.
 * Ensure you're connected to the internet.

* Page Not Loading
 * Check your internet connection.
 * Try refreshing the page.
 * Clear your browser cache and try again.

## Feedback and Support
If you encounter any issues or have suggestions for improvement, please contact us page **[insert contact email/form here].**

## Privacy Notice
This application does not collect or store any personal data. All searches are performed client-side and no information is sent to our servers.

## Updates and Maintenance
We regularly update our train line database. If you notice any outdated information, please use the email us at **let us know.**


### Project Management
For the Train Line Information Search Application, an incremental linear approach was employed using GitHub Projects to streamline development and gradually add features to the prototype. This structured methodology involved upfront requirements gathering, incremental feature development, and rigorous testing of each component before progression. Visual task tracking through a Kanban board facilitated risk management and error detection, enabling quicker delivery of functional prototypes and simplified testing of smaller, manageable increments. The combination of structured workflows and iterative refinement ensured the effective and collaborative development of the application while maintaining flexibility for enhancements.

#### Project Scheduling and Review
To capture and manage requirements for the Train Line Information Search Application, I utilised GitHub Issues and a comprehensive feature branching strategy within the project repository. Each requirement was documented as a separate issue with descriptive titles, detailed descriptions, and relevant labels for easy categorisation. I created dedicated feature branches for each new functionality or task, allowing for isolated development and testing. As work progressed, these branches were managed through pull requests, which facilitated code review and simulated would-be discussion before merging changes into the main branch.

The GitHub Projects Kanban board was used to visualise these issues and track their progress, with columns representing different stages of development (e.g., "To Do", "In Progress", "In Review", and "Done"). When a feature was completed and tested, the corresponding pull request was created to merge the branch into the main branch. This approach enabled systematic requirement tracking, facilitated collaborative development, and provided a transparent view of the project's status.

By leveraging GitHub's issue tracking, feature branching, and pull request features, I could incrementally add and refine features to the prototype. This method ensured visibility into the project's scope and progress, supporting effective communication, development, and delivery of the Train Line Information Search Application.

# **INSERT KANBAN BOARD**

# Code and Design

## Technical Documentation

### Technical Stack
* [HMTL](https://devdocs.io/html/)
* [CSS](https://devdocs.io/css/)
* [JS](https://devdocs.io/javascript/)
* [JS](https://www.w3schools.com/js/)


### Code Layout for Application

* Tindex.html: main html file for the application
* TContactUs.html: Contact Us page
* TSearch.html: Search Page* 
* TStyles.css: CSS file for styling
* Script.js: JavaScript file containing core functionality


### Files used in testing

* App Test.docx   //  for manual testing but uploaded here as .pdf 


### **User End Links**

* **Repo name: dan-m-dec22**
* **Repo link: https://github.com/EDGENortheastern/dan-m-dec22**
* **Exchange rate API link: https://www.exchangerate-api.com/**
* **Country flags API link: https://countryflagsapi.com/**

**After cloning the project, open the JavaScript file and pass your API key in the API URL. You can get this key from the official ExchageRateAPI site for free. You can also use any other site API for this project. If you do so then you have to modify the JavaScript codes accordingly.**

## Code Implementation

Below is a step-by-step guide on how I produced the Train Line Information Search Application MVP:

1. I created the main HTML files (Tindex.html, TContactUs.html, TSearch.html) to structure the application's pages.

2. In the TStyles.css file, I implemented the styling for the application to ensure a user-friendly interface.

3. In the script.js file, I implemented the core functionality:
   - Created the createAlphabetButtons() function to generate clickable alphabet buttons for searching.
   - Implemented the fetchTrainLines() function to asynchronously retrieve train line data from an external source (railwaycodes.org.uk).
   - Developed the displayResults(letter) function to filter and display train lines based on the selected letter.

4. I used the Fetch API with the All Origins service to bypass CORS restrictions when fetching data from the external source.

5. Implemented error handling in the fetchTrainLines() and displayResults() functions to manage cases where data retrieval fails or no results are found.

6. Created a function to parse the HTML content received from the API and extract relevant train line information.

7. Implemented a tabular display for search results, showing line names and routes.

8. Added navigation functions (goBack() and goHome()) to improve user experience.

9. Finally, I called the createAlphabetButtons() function to initialize the application's search functionality.



## Code Style and Conventions

Throughout the development of the Train Line Information Search Application, I adhered to best coding practices to ensure maintainability and readability. In the JavaScript file (script.js), I consistently used camelCase naming conventions for variables and functions, enhancing code clarity. Proper indentation was maintained across all files (HTML, CSS, and JavaScript) to improve code structure and readability. To aid understanding, I included concise yet informative comments throughout the script.js file, explaining the purpose and functionality of key code blocks. For instance, the fetchTrainLines() function is accompanied by comments detailing the API call process and data parsing steps. This approach not only facilitates my own code management but also makes it easier for potential collaborators to understand and contribute to the project. Additionally, I structured the code into logical functions (e.g., createAlphabetButtons(), displayResults()) to promote modularity and ease of maintenance.

### Graphical User Interface Design

** Figma Prototype**
In my organisation, more than one project designs option go through the option selection review. Green is the best and orange is alternative. Any other option will be categorised as red. In the light of this, I  used Figma to create two design options. The design process involved creating interactive prototypes for each concept, allowing for a more realistic representation of the user experience. These prototypes simulated key functionalities such as the alphabet-based search and result display, providing a clearer vision of how users would interact with the application. While ideally, a user survey would be conducted to gather quantitative feedback, the current busy period in train infrastructure management and timetabling necessitated a more expedient approach. Instead, I opted for a visual check with colleagues, for a quick response turnaround to make a timely decision. 

### **Tesing**
For the Train Line Information Search Application, I employed a manual testing strategy to ensure that all functionalities operated as intended. This process involved creating a structured form that listed various actions and their expected results, allowing users to respond with "pass" or "fail" for each function tested.

#### Manual Testing Process

### Testing

For the Train Line Information Search Application, I employed a manual testing strategy to ensure that all functionalities operated as intended. This process involved creating a structured form that listed various actions and their expected results, allowing users to respond with "pass" or "fail" for each function tested.

#### Manual Testing Process

1. **Test Plan Creation**: I created a test plan that included specific actions associated with key functionalities of the application. Each action was paired with an expected outcome to provide clear criteria for evaluation.

2. **Testing Actions**: The following functionalities were tested:
   - **Application Launch**: Users ran `TIndex.html` in a browser (e.g., Chrome) to ensure the application loaded correctly.
   - **Contact Us Navigation**: Users clicked on the “Contact Us” menu to verify that it navigated correctly to the contact page.
   - **Search Navigation**: Users clicked on the “Search” menu to confirm proper navigation to the search functionality.
   - **Back Button Functionality**: Users clicked the “Back” button on both the “Contact Us” and “Search” pages to ensure it returned them to the previous page.
   - **Home Button Functionality**: Users clicked the “Home” button on both pages to verify that it refreshed the application as intended.
   - **Alphabet Button Filtering**: Users clicked any of the alphabet buttons to check if the application filtered train lines starting with the selected letter.
   - **Single Character Search**: Users searched using one character only (e.g., ‘A’) and clicked on the search button to verify that results displayed correctly.
   - **Special Character Search**: Users searched using at least one character combined with special characters (e.g., ‘A*’) in the Line Name input field and clicked on the search button.
   - **Combined Search Criteria**: Users searched using at least one character combined with * or % in both the Name input and Route fields while checking different “Search Type” options.

3. **User Feedback**: Participants in the testing process used a structured form to indicate whether each action passed or failed based on the expected results. This feedback provided valuable insights into the application's performance and usability.

4. **Issue Identification**: Any failures reported were documented, allowing for prompt investigation and resolution of issues.

#### Results

The manual testing approach allowed for direct user interaction with the application, providing immediate feedback on functionality and user experience. This method ensured that any issues were identified early in the development process, leading to a more reliable and user-friendly Train Line Information Search Application.

By focusing on manual testing and user feedback, I was able to create an effective validation process that ensured all critical features met user expectations before deployment.
