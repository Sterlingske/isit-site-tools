/**
 * Created by charlie on 2/18/16.
 *
 * How to create markdown files
 */

const createMarkdown = require('../private/create-markdown');
const config = require('isit-code-sespinoza').elfConfig;
config.useLocalConfig = true;

function runConfig(user, siteDirsOffset, useLocalConfig) {
    'use strict';
    return new Promise(function(resolve, reject) {
        if (typeof useLocalConfig !== 'undefined') {
            config.useLocalConfig = useLocalConfig;
        }
        config.loadAsync()
            .then(function(configuration) {
<<<<<<< HEAD
                createMarkdown(configuration[user], siteDirsOffset)
                    .then(resolve);
=======
                createMarkdown(configuration['users'][user], siteDirsOffset)
                    .then(resolve)
                    .catch(reject)
>>>>>>> 9eab0f559a25909fcc4236059a98c6408f8e9399
            })
            .catch(function(err) {
                throw err
            })
    });
}

module.exports = runConfig;
