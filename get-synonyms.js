// Creating the program:
// Create a file get-synonyms.js at the root of your project
// Import your module and create an instance using your API key
// Prompt the user for a word
// Using your API, retrieve the synonyms/antonyms/etc. for the input word
// If everything goes well, display all the results to the user in a nice way
// Hint: to display the results in a nice way, a few NPM modules could be useful, including but not limited to:
// colors

// cli-table

// node-emoji

// Add/commit/push
var colors = require('colors');
var emoji = require('node-emoji');
var prompt = require('prompt')
var request = require('request');
var getSyns = require('./library/synonyms.js');

var api = "591209d8c9a08977a6a17cf124c585de";



prompt.get('synonymsofword', function(err, answers) {
    if (err) {
        console.log('there was an error');
    }
    else {
        var synKey = new getSyns.SynonymApi(api);
        synKey.getSynonyms(answers.synonymsofword, function(err, res) {
            if (err) {
                console.log(colors.rainbow("The word is not our the dictionnary, this is not urban dictionnary!"));
            }
            else {
                 if (res.noun){
                    console.log("Nouns :" + emoji.get('smile'));
                    console.log(colors.green(res.noun.syn));
                }
                if (res.verb){
                    console.log("Verbs :" + emoji.get('smile'));
                    console.log(colors.yellow(res.verb.syn));
                }
                if (res.adjective){
                    console.log("Adjectives :" + emoji.get('smile'));
                    console.log(colors.blue(res.adjective.syn));
                }
            }
        });

    }
});
