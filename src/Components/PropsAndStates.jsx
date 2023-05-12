import React from "react";


class Props extends React.Component {

render(){
return(
<div>
    <Child1  name="Hassan" age="25"/>
    <Child2  name="Ali" age="32"/>
</div>
)
}}



class Child1 extends React.Component{
state = {
title: "This is State 1"
}
render(){
return(
    
    <p>Props and State: <br/><br/>Hello {this.props.name}, your age is {this.props.age} <br/>
    and {this.state.title}</p>
)
}
}

class Child2 extends React.Component{
state = {
title: "This is State 2"
}
render(){
return(
    <span>Hello {this.props.name}, your age is {this.props.age} <br/>
    and {this.state.title}<hr/></span>
)
}
}

export default Props;

