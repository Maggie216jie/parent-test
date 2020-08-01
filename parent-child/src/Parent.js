import React, { Component } from 'react';
import Child from'./Child';
import WithContext from './WithContext'

export class Parent extends Component {

    constructor(props){

        super(props);
        this.state = {
            text:""

        }

    }
    
    //主要想测试这个
    changeText = (text)=>{

        this.setState({
            text
        })

    }


    render() {

     
        return (
            <div>
                <div>User Name is:{this.props.data.state.userName}</div>
            
            Color is:
            {this.state.text}
            <Child changeText={this.changeText}/>
                
            </div>
        );
    }
}

export default WithContext(Parent);
