# DMStudioApp

## Pull/Merge Request Merging Guidelines

- npm run lint - No warning or Errors
- npm run test:ci - All Tests should pass and coverage should be 100%
- test:cucumber - All tests should pass
- No console.log in code
- No Commented Code


## Photography Studio Application

### User Story

- I should be able to post my services as product on this application. I should be able to update my sales pitch for each service. Each service should have its own page. I should be able to upload sample Photos and video to each service. User should be able book service from this page
- User should be able to register his request, or should be provided with my Contact Detail to connect with me. Also, He should be able to email me from website contact us page.
- Home page should showcase a carosole of my Best photos and I should be able to update this collection.
- Gallary page should display my Completed Project with best photo Gallary when clicked on that project.
- Satisfied Customer should be able to upload their testimonial with Star rating, Profile Photo and Description

## Actor

- Admin
- Customer

## Entities

- Services
- Media
- CRM

## feature planning

1. Contact Us page with Owner Contact Details and option to send email to owner
2. About us Page with DM Studio Details, Logo, History and future plans
3. Home Page - carosole of Images display
4. Gallary - Frames of Completed Project with click option to display Sample media gallary
5. Services Page - Service List with 1 sample Profile photo for that service
6. Service Sales Page - Sales pitch with sample media (and Equipment setup demo or photo) for that service and Satified Customer Testimonials,
7. Service Order page - User details, Date range, city type requirements
8. Admin page to upload media and manage Services, Sales pitch, Carosole Content, Service sample contents etc.

# Installation Steps

## CRA

- npm config set legacy-peer-deps true
- npx create-react-app dm-studio --template typescript
- cd dm-studio
- npm start
- npm test
- npm test:ci

## Bootstrap 
 - npm install -D typed-scss-modules
 -  npx typed-scss-modules src
## React Componant lib
 -  npm i @material-tailwind/react  (tailwind)

## eslint

- npm run lint

## Cucumber with Playwrite

[ref:https://bugbug.io/blog/testing-frameworks/playwright-cheat-sheet/]

[ref: https://www.browserstack.com/guide/playwright-cucumber]

- npm init playwright@latest
- npm install --save-dev @cucumber/cucumber ts-node typescript

### Run Cucumber

- Configured in package.json
  "test:cucumber": "cucumber-js --require-module ts-node/register"
- npm run test:cucumber

## Behavior Driven Development (BDD)

1. Screnario story (Product owner)
2. Scenario Steps (User Journey) (BA/Product manager)
3. Scenario in Gherkin (BA/Product manager)
4. feature (tech)
5. step_definition code (tests will fail) (tech)
6. feature production Code (tech)
7. Code and test Refactor to pass the tests (tech)

# Test Driven Development (TDD by tech)

1. Unit tests (to fail)
2. Minimum code to pass the test
3. refactor code or test if required
4. repeat steps 1-3
