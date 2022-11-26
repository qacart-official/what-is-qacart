#!/usr/bin/env node
const packageJson = require("./package.json");
const welcome = require("cli-welcome");

// console.log(`
// NAME: ${packageJson.name}
// VERSION: ${packageJson.version}
// DESCRIPTION: ${packageJson.description}
// `);

welcome({
   title: `QAcart`,
   description: packageJson.description,
   version: packageJson.version,
   bgColor: `#FADC00`,
   color: `#000000`,
   bold: true,
   clear: true,
});

console.log(`

Top Projects:
- Selenium: https://qacart.com/course/complete-selenium-framework-for-todo-application
- Cypress: https://qacart.com/course/cypress-todo-project
- RestAssured: https://qacart.com/course/rest-assured-todo-project

Free Courses:
- Manual testing: https://qacart.com/course/manual-testing-bootcamp-2022
- ISTQB foundation level: https://qacart.com/course/istqb-foundation-level
- Postman: https://qacart.com/course/postman
- SQL: https://qacart.com/course/complete-sql-course
- Programming languages: https://qacart.com/course/programming-languages-for-testers
- Testing tools: https://qacart.com/course/testing-tools
- Selenium: https://qacart.com/course/selenium-webdriver
- Cypress: https://qacart.com/course/cypressio
- Playwright: https://qacart.com/course/playwright-javascript
- RestAssured: https://qacart.com/course/rest-assured-101

Follow us:
- Facebook: https://www.facebook.com/QAcartAcademy
- LinkedIn: https://www.linkedin.com/company/qacart-official/
- Youtube: https://www.youtube.com/channel/UCaGo8x7uqxMK5A08AI8s6IQ

Software testing is easier in Arabic ... Software testing is easier with QAcart

`);
