// State Practice-1

import React from 'react'

// Class component called 'State'.
// State is mutable
// this.state works in Class component Only.
// Many web apps need their components to change their data, for example, after user interaction (clicking a button, submitting a form, etc.).However, props cannot be changed.
// In order to allow components to manage and change their data, React provides a feature called 'State'.
// State is an object that is added as a property in class components.

class State extends React.Component{
    constructor(){
        // Global method
        super()

        //Object = {Property : 'Value'} 
        this.state = {
            name : 'Subramanyam',
            age : 24
        }
    }

    render(){
        return(
            // Inline CSS Style
            <h1 style ={{
                color:'khaki',
                textAlign:'center',
                textTransform:'capitalize',
                backgroundColor:'lawngreen'
            }}>
                Hello,World My name is {this.state.name} and {this.state.age} year's old.
            </h1>
        )
    }
}
export default State

import State from '../src/components/State'
ReactDOM.render(<State/>,document.getElementById('root'))

// State Practice-2
import React from 'react'

// Class component called State

class State extends React.Component{
    constructor(){
        // Global method
        super()

        //Object = {Property : 'Value'} 
        this.state = {
            isLoggedIn : false,
            // isLoggedIn : true
        }
    }

    render(){

        // Local Variable
        let wordDisplay 

        // if..else Statement
        if (this.state.isLoggedIn) {
            wordDisplay = 'In'
        }else{
            wordDisplay = 'Out'
        }

        return(

            <div>
                <h1>
                    You are currently logged {wordDisplay}
                </h1>

                <button style = {
                    // Inline Style CSS
                    {
                        color :'whitesmoke',
                        backgroundColor:'blue',
                        padding:'3px',
                        margin:'2 5 3 3',
                        border:'2px solid black',
                        borderRadius:'5px',
                        textTransform:'capitalize'
                    }
                }>
                log {wordDisplay}
                </button>
            </div>
        )
    }
}
export default State

import State from '../src/components/State'
ReactDOM.render(<State/>,document.getElementById('root'))

// ReactJS Events
import React from 'react'

function handOver(){
    alert('Hello,World!')
}

// Function Component Called Event
function Event(){
    return(

        <div>
            <img onMouseOver = {
                () =>{
                    console.log('Hey Mouse is Overed');
                }
            } src ='https://i.ytimg.com/vi/C8NAYW-Z54o/maxresdefault.jpg' width ='30%' alt ='white-cat'/>
            <br/>
            <hr/>

            <button onClick = {
                function(){
                    alert('Button Is Clicked');
                }
            }>
                Click Here
            </button>
            <br/>
            <br/>

            <button onClick={handOver}>
                Log Out
            </button>
            <hr/>

            {/* Arrow Function */}

            <button onClick={()=>{
                alert('Hey,Man!');
            }
            }>
                Log Out
            </button>

        </div>
    )
}
export default Event

import Event from './components/Event'
ReactDOM.render(<Event/>,document.getElementById('root'))

// Changing State
import React from 'react'

// Class component called State
// State is mutable by using setState()
// this.setState() used to change the state values
// this.state works in Class component Only.
// For methods in React, the this keyword should represent the component that owns the method.

class State extends React.Component{
    // Built-In Function in JavaScript
    constructor(){

        // Global method
        super()

        //Object = {Property : 'Value'} 
        this.state = {
            // count : 0
            count : 2
        }

        // User-Defined Method() + Constructor() to be bind
        this.handleClick = this.handleClick.bind(this)
    }

    // Method
    handleClick(){
        // this.setState({}) = method() Object{Property : Value}

        // Arrow Function
        this.setState( (prevState) =>{
            return{
                // count : prevState.count + 1
                count : prevState.count + 3
                // count : prevState.count / 2
            }
        })
    }

    // Method
    // handleClick(){
    //     this.setState({}) = method() Object{Property : Value}
    //     this.setState({
    //         count   :   1
    //     })
    // }

    render(){
        return(
            <div>
                <h1>
                    {this.state.count}
                </h1>

                <button style = {
                    {
                        backgroundColor:'cadetblue',
                        borderRadius:'3px'
                    }
                } onClick ={this.handleClick}>
                    Click Me
                </button>
            </div>
        )
    }
}
export default State

import State from '../src/components/State'
ReactDOM.render(<State/>,document.getElementById('root'))

// Simplilearn Project
// Used rce snippet in Code Editor
// Used rconst snippet in Code Editor

import React, { Component } from 'react'

class NewComp extends Component {
    constructor(props) {
        // Global Method()
        super(props)

        // Object = {Property : 'value'}
    
        this.state = {
            message : 'Subscribe to Coding Addict',
            sub: 'subscribe',
            imageUrl:'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-bell-7.png&r=0&g=0&b=0'
        }
    }

    // Arrow Function
    btnchange = () =>{
        this.setState({
            message: 'Thanks for Subscribing and hit bell icon',
            sub:'subscribed',
        })
    }

    // Arrow Function
    bellchange = () =>{

        this.setState({
            message:'Thanks for hitting the bell and start learning',
            imageUrl:'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-bell-12.png&r=0&g=0&b=0'
        })
    }
    
    render() {
        return (
            <div>
                {/* Inline CSS Style */}

                <h1 style = {
                    {
                        textAlign:'center',
                        fontWeight:'bold',
                        color:'teal'
                    }
                }> Welcome</h1>

                <h2 style = {
                    {
                        textAlign:'center',
                        fontWeight:'lighter',
                        color:'purple'
                    }
                }>
                {this.state.message}
                </h2>

            <button onClick ={this.btnchange} style={{
                textTransform:'uppercase',
                backgroundColor:'red',
                color:'whitesmoke',
                border:'none'
            }}>{this.state.sub}</button>

            <br/>

            <img onClick ={this.bellchange}  style={{
                width:50,
                height:50
            }} src ={this.state.imageUrl} alt='bellA'/>

            </div>
        )
    }
}
export default NewComp

import NewComp from '../src/components/NewComp'
ReactDOM.render(<NewComp/>,document.getElementById('root'))

// Conditional Rendering Practice-1
// Path:index.js -> Rendering.js -> Conditional.js

// 1)index.js
import React from 'react'
import ReactDOM from 'react-dom'

import Rendering from '../src/components/Rendering'
ReactDOM.render(<Rendering/>,document.getElementById('root'))

// 2)Rendering.js
import React from 'react'
import Conditional from '../components/Conditional'

// Class Component called Rendering
class Rendering extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading : true
        }
    }

    // React LifeCycle Method
    componentDidMount(){
        setTimeout(() =>{
            this.setState({isLoading : false})
        },1500)
    }

    render(){
        return(
            <div>

                <Conditional isLoading = {this.state.isLoading}/>

            </div>
        )
    }
}
export default Rendering

// 3)Conditional.js
import React from 'react'

// Function Component called Conditional
function Conditional(props) {
    // if....else Statement
    if(props.isLoading)
    {
        return(
            <h1>
                Loading.......
            </h1>
        )
    }    
    else
    {
        return(
            <h2>
                Some thing to display
            </h2>
        )
    }

    {/* Ternary Operator */}

    {props.isLoading ? <h1> Hello</h1> : <h3> Hey</h3>}

}
export default Conditional

// Conditional Rendering Practice-2
// Path:index.js -> Rendering.js

// 1)index.js
import React from 'react'
import ReactDOM from 'react-dom'

import Rendering from '../src/components/Rendering'
ReactDOM.render(<Rendering/>,document.getElementById('root'))

// 2)Rendering.js
import React from 'react'
// import Conditional from '../components/Conditional'

// Class Component called Rendering
class Rendering extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState( (prevState) => {
            return{
                // isLoggedIn : !prevState.isLoggedIn
                isLoggedIn : false
            }
        })
    }

    render(){
        // Ternary Operator
        let wordDisplay = this.state.isLoggedIn ? <h1>LOG IN</h1> : <h2>LOG OUT</h2>
        let displayText = this.state.isLoggedIn ? <h1>LOGGED OUT</h1> : <h2>LOGGED IN</h2>
        return(

            <div>
                <button onClick={this.handleClick}> {wordDisplay} </button>
                <hr/>
                <h2>
                    {displayText}
                </h2>
            </div>
        )
    }

}
export default Rendering