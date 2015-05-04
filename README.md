# BiMean - Angular, Node, Express, MongoDB boilerplate

## To set up:
1. clone package
2. Retrieve dependencies with npm: npm install
3. run by typing 'npm start' in project folder. (Set Sublime text to macro this when saving a file)
4. Surf to localhost:3000

Oh, you need to have node installed naturally. And Mongo running.

## Backend side:
Add routes (`config/routes.js`), create models (`app/models/`), views (`app/views/`) and controllers (`app/controllers/`).
Code should be self explanatory. 
Basis for the project is madhums awesome node-express-mongoose repository. Mocha is swapped out to Jasmine-Node-Karma since google, and Mocha uses make and we don't really want to pollute our windows with gnuwin or MinGW or other such things. 

## Frontend:
Basis for the project is angular-seed made by dem Angular guys. I have swapped the folder structure around a little bit and made it work in harmony with jade files provided by our Node server.


## Run Backend tests:
1. npm test
2. ???
3. Profit
All tests need to be names xxxx.spec.js since Jasmine/Karma looks for those files only.


## Run Frontend tests:
1. run test.bat or teste2e.bat from /public/scripts
2. This will open browser (which is set in /config/karma*.conf files)
3. Changing JS files should rerun all the tests

