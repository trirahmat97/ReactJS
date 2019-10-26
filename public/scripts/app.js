'use strict';

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility!'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'hide detail' : 'show detail'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey. These are some detail you can now see!'
            )
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
