// Your first module!

// Create a library directory at the root of your project

// Inside this directory, create a file called request-json.js

// In this file, copy your function requestJson from the previous exercise

// Export your function from the module as the default export

// Add/commit/push

function requestJson(url, callBack) {
    request(url, function(err, response) {
        if (err) {
            callBack(err);
        }
        else {
            try {
                var result = JSON.parse(response.body);
            }
            
            catch (err) {
                callBack(err);
            }
            callBack(null, result);
        }
    });

}

module.exports = {
    requestJson : requestJson
}