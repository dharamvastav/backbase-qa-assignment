## Introduction
### This project is a sample automated suite created as an assignment for backbase.
### It comprises of API and Functional automated use cases that are considered critical/high priority.

## Prerequisite
## The host must have npm package manager installed

## How to setup the project ?

### 1. Clone the repo
    git clone https://github.com/dharamvastav/backbase-qa-assignment

### 2. Run this command. This command should install all project dependecies listed in 'Package.json'
    npm install package.json

## How to execute the tests ?

### In order to run the functional tests
    1. Update the 'Cypress.json' and modify the key 'testFiles' to '../functional/*'
    2. Run this in CLI (npx cypress run)
    3. Refer the location for report: '/reports/'
         
### In order to run the api tests
    1. Update the 'Cypress.json' and modify the key 'testFiles' to '../api/*'
    2. Run this in CLI (npx cypress run)
    3. Refer the location for report: '/reports/'