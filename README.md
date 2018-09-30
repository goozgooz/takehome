# Ashkaan Jaberi - Textio Take Home Assignment
### Set Up
`npm i` 
`npm run watch`

Go to http://localhost:8080/ in your browser

Enter in any text of your choosing and see it highlighted based on the hardcoded highlights rule!

##### OR 

See live deployed version @ www.blahblahblah.com 

### Testing
`npm test`

### Problem
Write a function that will highlight phrases in a document given a string and a set of highlight objects. If two highlights overlap, show the higher-priority highlights over the lower priority highlights. 

### Solution Explanation
The key part of my solution is the `createStyleGuide` function that is found in the `src/highlight/createStyleGuide.js` file. 

The function input is two arguments: the highlights rule array, and the string you want to apply the rules to.  If the highlights argument is `null` the function will default to one of the hardcoded highlight rules found in `src/highlight/data.js` .  The string argument is received via what is submitted in the `src/component/highlighter/text-form.js` React form.

The function then iterates through the highlights array, and will output the `styleGuide` array (which is returned). The `styleGuide` array will do the following:
* Will have an array item that accounts for every offset in the string - including the parts that are uncovered by any given rule and will be rendered normally
* Will handle any rule overlaps and will adjust each rule based on  priority rankings. 

The results of the `createStyleGuide` functions are then used in the `src/component/highlighter/index.js` React Component to render the given string with the given highlight rules.
