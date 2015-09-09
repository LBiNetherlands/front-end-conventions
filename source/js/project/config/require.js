// Configure RequireJS.
require.config({
    paths: {
        'jquery': 'node_modules/jquery/dist/jquery.min',
        'prism': 'node_modules/prismjs/prism',
        'text': 'node_modules/requirejs-text/text'
    },
    shim: {
        'jquery': {
            export: 'jQuery'
        },
        'prism': {
            export: 'Prism'
        }
    }
});
