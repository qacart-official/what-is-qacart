#!/usr/bin/env node
const packageJson = require("./package.json");
const chalk = require("chalk");
const log = console.log;

log(`
${chalk.bold.bgYellow(`   QAcart   `)} ${packageJson.version}

${chalk.italic(
   `Software testing is easier in Arabic ... Software testing is easier with QAcart`,
)}
 
${chalk.bgBlue(" Top Projects ")}

- Selenium: ${chalk.dim(
   `https://qacart.com/course/complete-selenium-framework-for-todo-application`,
)}
- Cypress: ${chalk.dim(`https://qacart.com/course/cypress-todo-project`)}
- RestAssured: ${chalk.dim(
   `https://qacart.com/course/rest-assured-todo-project`,
)}

${chalk.bgGreen(" Free courses ")}

- Manual testing: ${chalk.dim(
   `https://qacart.com/course/manual-testing-bootcamp-2022`,
)}
- ISTQB foundation level: ${chalk.dim(
   `https://qacart.com/course/istqb-foundation-level`,
)}
- Postman: ${chalk.dim(`https://qacart.com/course/postman`)}
- SQL: ${chalk.dim(`https://qacart.com/course/complete-sql-course`)}
- Programming languages: ${chalk.dim(
   `https://qacart.com/course/programming-languages-for-testers`,
)}
- Testing tools: ${chalk.dim(`https://qacart.com/course/testing-tools`)}
- Selenium: ${chalk.dim(`https://qacart.com/course/selenium-webdriver`)}
- Cypress: ${chalk.dim(`https://qacart.com/course/cypressio`)}
- Playwright: ${chalk.dim(`https://qacart.com/course/playwright-javascript`)}
- RestAssured: ${chalk.dim(`https://qacart.com/course/rest-assured-101`)}

${chalk.bgCyan(" Follow us ")}

- Facebook: ${chalk.dim(`https://www.facebook.com/QAcartAcademy`)}
- LinkedIn: ${chalk.dim(`https://www.linkedin.com/company/qacart-official/`)}
- Youtube: ${chalk.dim(
   `https://www.youtube.com/channel/UCaGo8x7uqxMK5A08AI8s6IQ`,
)}
`);
