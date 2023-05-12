import React,{Component} from "react";
import '../index.css';
import Button from '@mui/material/Button';

export class Forms extends Component{
    
    state={
        name:''
    }

    handleChange = (e) => {
        this.setState({name : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name)
    }


    render(){
        return  (
            <div className="Forms">
                <hr/>
            <form onSubmit={this.handleSubmit}>
                <select onChange={this.handleChange}>
                    <option value="value 1">Option 1</option>
                    <option value="value 2">Option 2</option>
                    <option value="value 3">Option 3</option>
                    <option value="value 4">Option 4</option>
                </select> {" "}
                <Button variant="contained" type="Submit">Submit</Button>
            </form>
            {this.state.name}
            <hr/>
            </div>
        )
    }

}

