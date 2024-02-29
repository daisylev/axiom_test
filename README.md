# Cypress
The project applies Page object model(POM) and uses the following:
- cypress-cucumber-preprocessor for Behavior Driven Development (BDD)
- allure report for reporting

## How to install
- Clone the repo
- Run `npm install` to install plugin into your local
 
## Usage
### Run test
- Run test, use `npm run test`

### Open report
- Run `npm run generate-report`

### Note
- Currently I write flow for approver both create and approve request and you can run it to see pass.
- For flow requester creates request, then approver approve request, there is a problem when running automation at step "I log out from requester account, then login with approver, error displays on url and cannot navigate to Home page, still park on Login page. I guess script is too fast, or something on web is wrong when switching account is too fast. However I don't have enough time on 1 day to investigate. You can see the issue when run .feature file on archive folder by drag feature file to e2e folder.