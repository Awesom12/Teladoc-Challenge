# Teladoc-Challenge

## Project Overview
This project aims to automate end-to-end tests for Protractor practice website - WebTables application. 

## Getting Started
To get started with the project, follow these steps:

**Clone the Repository:**  Clone this repository to your local machine using **'git clone'**.

**Install Dependencies:** Run **'npm install'** to install all the necessary dependencies.

## Test Environment
**AUT:** http://www.way2automation.com/angularjs-protractor/webtables/

**Automation Framework:** Cypress

**Programming Language:** JavaScript

**BDD Framework:** Cucumber

**GitHub URL:** https://github.com/Awesom12/sujana_kotike_teladoc_Challenge

**IDE:** Visual Studio Code

## Feature Files, Test Data and Step Definitions Files
The cypress -> e2e folder consists of 3 feature files viz., webTables.feature, webTables_DT.feature and WT_invalid.feature.

**webTables.feature:** This feature file includes Gherkin Given, When and Then style for representing the tests. The corresponding Step definitions, **webTablesSteps.js** file gets the data from the fixture file **user.json** located at cypress -> fixtures.	

**webTables_DT.feature:** This feature file includes the data in **Data Table** format for adding the user and **Examples Table** for deleting the user. The corresponding Step definitions file is **webTables_DTSteps.js** that can be found at support -> step_definitions.

**WT_invalid.feature:** This feature file includes the data in  **Examples Table** format for testing the scenario to **add the user** with different invalid data sets. The corresponding Step definitions file is **WT_invalidSteps.js**.

## Running the Tests

**Run Tests on GUI:** Execute **'npx cypress open'** to run the Cypress tests in GUI mode.

**Run Tests in Headless mode:** Execute **'npx cypress run'** to run the Cypress tests in headless mode.

## Generating the Report
**Run the command:** 'node reporter.js' in order to find the output in cucumber-report -> index.html

