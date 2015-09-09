define([
    'node_modules/handlebars/dist/handlebars.min',
    'text!source/templates/css-convention-template.html',
    'text!source/data/css-conventions.json'
], function (
    Handlebars,
    Template,
    Data
) {

    'use strict';

    // Return the singleton's public interface
    var module = {
        init: function () {
            var compiledTemplate, result, handlebarsObject;
            // Create JavaScript object from JSON.
            handlebarsObject = JSON.parse(Data);
            // Compile the Handlebars template.
            compiledTemplate = Handlebars.compile(Template);
            // Render the JavaScript object to the template.
            result = compiledTemplate(handlebarsObject);
            // Render the result to the DOM.
            $('.main').append(result);
            // Log the handlebars object to the console for reference.
            console.log(handlebarsObject);
            // Instantiate Prism.
            Prism.highlightAll();
        },
    };

    module.init();

    return module;

});
