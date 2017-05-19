# WeatherForecastApp
Steps: 
1. Download and install node.js from https://nodejs.org/en/download/
2. Install/Update npm by typing npm install npm -g
3. Install http-server for local server by command : npm install http-server -g
4. Download the project
5. Go to project Directory(index.html) in command promt and type http-server
6. Open Chrome and type localhost:8080. index.html page should get open

For Running End to End Test Cases:
1. Open command promt and type : npm install -g protractor
2. Update Selenium webDriver by typing in command promt : webdriver-manager update
3. In a new command prompt type :webdriver-manager start
4. Above should start the selenium webdriver
5. Type "protractor conf.js" while in the directory and while the http-server and selenium webdriver are running
6. Above should run all the end to end test cases for the application
