
# Web application testing

The aim of end-to-end testing is to validate  application from start to finish, including all components and interactions. It ensures that the software meets all functional and non-functional requirements and works as intended in a real-world environment, without any issues or errors.

## Table of Contents

* Site reference
* Scenarios
* Installation
* Running Tests
* Git repo link
* Screenshot


## Link Reference

Web link with credentails

```
https://qa-task.backbasecloud.com.
```

Username: candidatex

Password: qa-is-cool




## Scenarios


**Web Test**

The test is divided into 3 parts like Home Page, Delete Article and Edit Article

**HomePage**

1. Invalid Login
2. No Feed verify message
3. Login Page successfully and create new article
4. Verify newly created article is visible on Global Feed


**Delete Article**
1. Login Page successfully and create new article and delete the article and verify article is not present
2. Delete the comment of the article and verify comment is deleted

**Edit Article**

1. Create new article and edit the article and verify article is updated






## Installation

Before you start installing Cypress and Node, make sure that you have the following installed on your computer:

```
Node.js
VS code
```
## Installing Node.js

Node.js is a JavaScript runtime environment that is used to run JavaScript code outside of a web browser. To install Node.js, follow these steps:

  1. Go to the Node.js official website: https://nodejs.org/
  2. Click on the “Download” button for the latest version of Node.js.
  3. Follow the instructions for your operating system to install Node.js.
  4. Verify that Node.js has been installed successfully by opening a terminal or command prompt and running the following command:

```
node -v
```
## Installing Cypress

Cypress is a JavaScript-based end-to-end testing framework. To install Cypress, follow these steps:

Open a terminal or command prompt and navigate to the root directory of your project.
Run the following command to install Cypress as a development dependency:

```
npm install --save-dev cypress
```
Verify that Cypress has been installed successfully by running the following command:
```
npx cypress open
```
This should open the Cypress Test Runner in your default web browser.

With these steps, you should have both Node.js and Cypress installed on your computer and ready to use. If you encounter any issues during the installation process, refer to the official documentation for Node.js and Cypress(https://docs.cypress.io/) for more information and support.


For APi test, the allure report was created since it is API testing. Well, the allure reporting is covered in Web testing.

## Install Allure report

Install Java for **windows**
```
https://www.oracle.com/java/technologies/downloads/#jdk19-windows
```

Install Java for **mac**

```
https://www.oracle.com/java/technologies/downloads/#jdk17-mac
```

**Run the below command:**

Link: https://www.npmjs.com/package/@shelex/cypress-allure-plugin

```
npm i -D @shelex/cypress-allure-plugin
```

https://www.npmjs.com/package/allure-commandline
```
npm i allure-commandline
```

## For mac users any issue with allure installation run the below command:
```
sudo npm install -g allure-commandline
```
Check version for allure:

```
allure --version
```







## How to run test

```
npm run reportTest
```

**Check allure-results and allure-report folder is created.**

To open the allure report, type below command.

```
allure open

## Git clone
```
git clone 
```
## Screenshot