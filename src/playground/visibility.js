
let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}


const render = () => {
    const jsx = (
        <div>
            <h1>Visibility!</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'hide detail' : 'show detail'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some detail you can now see!</p>
                </div>
            )}
        </div>
    )

    ReactDOM.render(jsx, document.getElementById('app'));
}

render();