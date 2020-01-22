# TAU-LAB8  
Implementation of LAB8 from TAU project.  
Link to main project:  
https://github.com/skaminskirepo/TAU  

Installing dependencies:  
`npm install karma --save-dev`  
`npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev`  
`npm install jasmine-jquery --save-dev`  
`npm install karma-cli --save`  

Running solution:  
`npm test`  

Workaround for windows Git Bash:  
Use CMD terminal with the Bash shell (execute `"C:\Program Files\Git\bin\bash.exe" --login -i` in cmd terminal)

# Plugin description
If you call `.validate(regex)` on some input element, each input change will be validated on it since this method call.  
That means that whenever input won't match regex, field background color will be changed to red.  
If input regex will be correct, red background color will be removed.
