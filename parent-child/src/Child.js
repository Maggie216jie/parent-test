import React, { Component } from 'react';
import WithContext from './WithContext'

class Child extends Component {

    constructor(props){

        super(props);
        this.state = {
            value:"",
            showList:true,
            renderList:[]
        }
    }

    handleChange=(event) =>{
        this.setState({value: event.target.value});
        this.getList(event.target.value)
    }

    submitValue = ()=>{
        this.props.changeText(this.state.value)
    }

    getList=(value)=>{

        let allterms = JSON.parse(JSON.stringify(this.props.data.items))
        let filterterms = allterms.filter(item=>{
            if(item.indexOf(value)>-1&&value){
                return item
            }
            
        })

        this.setState({
            renderList:[...filterterms]
        })

    }
    renderList=()=>{
        return this.state.renderList.map(item=>{
             return <li onClick={()=>this.setState({value:item,  renderList:[]})}>{item}</li>     
        })

    }

    render() {
        return (
            <div className="typeahead">
                <div>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.submitValue}>Submit</button>
                </div>
                <ul className="dropdown">
                    {this.renderList()}
                
                </ul>
            </div>
        );
    }

}

export default WithContext(Child);