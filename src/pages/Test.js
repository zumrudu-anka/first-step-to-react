import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props);
        this.state={
            a:10
        }
        console.log("constructor");
    }
    componentDidMount() {
        console.log("componentdidmount");
        this.setState({
            a:20

        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component Did Update")
    }
    
    shouldComponentUpdate(){
        console.log("Should Component Update");
        return false;
    }
    
    render() {
        console.log("Render");
        return (
            <div>
                
            </div>
        )
    }
}
export default Test;