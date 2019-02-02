#Continuous Integration workflow: 
1. push change to Github, 
2. Travis CI will automatically detect pushed code, 
3. Travis CI will clone project in a linux VM, 
4. Travis CI will execute E2E tests using npm command in .travis.yml file, 
5. Travis CI will send email with results of test execution

# to run tests locally
1. npm install
2. npm run test