import React, { Component } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { TextInput} from "react-materialize";
import "materialize-css/dist/css/materialize.min.css";


class ControllerModifier extends Component {  
  
  render() {   
    return (            
        <div className= {this.props.wireFrameWidth > 1000 ? this.props.wireFrameWidth >= 3000 ? "control_container col s12" : "control_container col s5" : "control_container col s3"} id = "modifier_area">
            <div style ={{paddingTop: "15%", marginLeft: "20%"}} > Properties </div>
              
              <TextInput id = "text_input" onChange = {e => this.props.editText(e.target.value)}   />                     
              
              <div className = "row" style ={{paddingTop: "5%"}}>
                <div className = "col s8" style={{marginTop: "25px", fontSize: "12px"}}>Font Size:</div>
                <div className = "col s4">
                  <input id = "font_size_input"></input>
                </div>
                <div className = "col s8" style={{marginTop: "25px", fontSize: "12px"}}>Background:</div>
                <div className = "col s1">
                  <div className = "background_color" id = "background_color_input"></div>
                </div>
                <div className = "col s8" style={{marginTop: "25px", fontSize: "12px"}}>Border Color:</div>
                <div className = "col s1">
                  <div className = "border_color" id = "border_color_input"></div>
                </div>
                <div className = "col s8" style={{marginTop: "25px", fontSize: "12px" }}>Text Color:</div>
                <div className = "col s1">
                  <div className = "text_color" id = "text_color_input" ></div>
                </div>
                <div className = "col s9" style={{marginTop: "25px", fontSize: "12px"}}>Border Thickness:</div>
                <div className = "col s3 ">
                  <input id = "border_thickness_input"></input>
                </div>
                <div className = "col s9" style={{marginTop: "25px", fontSize: "12px", paddingBottom: "100%"}}>Border Radius:</div>
                <div className = "col s3 ">
                  <input id = "border_radius_input"></input>
                </div>                
             </div>   
          </div>
      
    );
  }
}

export default compose(  
  firestoreConnect([{ collection: "todoLists" }])
)(ControllerModifier);
