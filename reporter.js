const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "json-logs/",  //path-of-json-output
    reportPath: "./cucumber-report/", //path-where-the-report-needs-to-be
    metadata: {
        browser: {
            name: "chrome",
            version: "123.0.6312.60",
        },
        device: "Local test machine",
        platform: {
            name: "windows",
            version: 11
        },
    },
    reportName: "WebTables Report",
    customData: {
        title: "Run info",
        data: [
            { label: "Project", value: "WebTables-Cypress-Cucumber" },
            { label: "Environment", value: "Production" }
        ],
    },
});