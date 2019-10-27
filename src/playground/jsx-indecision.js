const app = {
    title: 'Indecision App',
    subtitle: 'this is some info',
    option: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.option.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const removeAll = () => {
    app.option = [];
    render();
}

const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.option.length);
    const option = app.option[random];
    console.log(option);
}

const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.option.length > 0 ? 'here are you option':'no options'}
            <p>
                <button disabled={app.option.length === 0} onClick={onMakeDecision}>What should i do ?</button>
                <button onClick={removeAll}>Remove All</button>
            </p>
            <ol>
               {
                   app.option.map(option => {
                       return <li key={option }>{option}</li>
                   })
               }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
render();
