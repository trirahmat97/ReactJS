class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    toggleVisibility(){
        this.setState(prevent => {
            return {
                visibility: !prevent.visibility
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility!</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? 'hide detail' : 'show detail'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some detail you can now see!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));


// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// }


// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility!</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'hide detail' : 'show detail'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some detail you can now see!</p>
//                 </div>
//             )}
//         </div>
//     )

//     ReactDOM.render(jsx, document.getElementById('app'));
// }

// render();