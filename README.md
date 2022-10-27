# es-clientjs-tester
## ABOUT
extremely minimal ES6+ tester for client Javascript modules

## DESCRIPTION
This module has been made because I wanted to keep everything simple, develop frontend packages in js and publish them in npm without having to use any extra tools such as webpack, rolljs etc. to preview and test the work in browser.


## HOW TO USE

### As a standalone server
1. Just select any js module that is supposed to be executed/used in the browser and put it inside static/modules/extras folder
2. Put any CSS required in static/CSS
3. Run the CORS server using `npm run serve`


### As a module
1. Install it in your frontend project using `npm install es-clientjs-tester`
2. Import in your test/preview js file using `import ClientJsPreview from 'es-clientjs-tester`
3. Call the server using `ClientJsPreview(<main js path>)`
