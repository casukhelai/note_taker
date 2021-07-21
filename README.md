# note_taker

## Description 
The daily work flow of a manager or business owner can be stressful especially when you need to keep a whole slew of tasks organized. Hence why, the Note Taker is a streamlined app to write and save notes organize tasks that are needed to complete. This app utilizes Express.js and Node.js to build a server that is deployed on [Heroku](https://rocky-brushlands-37065.herokuapp.com/).
###### Items learned
- The file destination matters!! If the files are too nested it's likely that there will be difficulties for the server.js file to dig out what files are meant to be used.
- I found that creating separate route.js files was far more effective than nesting them within a single server js file. While it would have been possible, I quickly saw how hard it was to read. Once I separated them, I was able to track what my app was doing and how to find errors in my code quicker!

## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
1. To view app locally: install npm packages express and uuid
2. Type node server.js in the terminal and then go to the PORT address => localhost:3001
3. Engage with the app!

## Usage
###### TO INITIALIZE LOCALLY
1. Initialize to create a package.json file using:
```
npm init -y
```
2. Install the following npm packages; express, uuid; 
```
npm i express uuid
```
3. Type:
```
node server.js
```
4. Open the app locally in Chrome (or other browser of choice) with: localhost:3001

###### TO OPEN IN HEROKU
1. Go to [https://rocky-brushlands-37065.herokuapp.com/](https://rocky-brushlands-37065.herokuapp.com/).
    
![note_taker_demo](assets/note_taker_demo.gif)
  
## Credits
Here are the following links I found useful in doing this project!
- [Stack Overflow](https://stackoverflow.com/questions/5924072/express-js-cant-get-my-static-files-why)
- [Express.js](https://expressjs.com/en/starter/static-files.html)
- [MIME Type Error Exploration](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Configuring_server_MIME_types)
- [Unique ID: uuid](https://www.npmjs.com/package/uuid)
- [Array.prototype.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)


## License
MIT License

Copyright (c) [2021] [Ishya Casukhela]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
