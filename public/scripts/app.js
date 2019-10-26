'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'this is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'List one'
        ),
        React.createElement(
            'li',
            null,
            'List two '
        )
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
