import React from "react";

class SaludoClassComponent extends React.Component{
    render(){
        return <h1> HOLA!! 👍🙈 {this.props.username} Como estas? </h1>
    }
}


export default SaludoClassComponent;