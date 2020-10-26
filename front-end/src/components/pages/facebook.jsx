import React, {Component} from 'react';
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {

   
    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            password: "", 
            
        };
        
      
    }

  
    componentClicked = data => {
        console.log("data", data);
      };
    
       responseFacebook = response => {
           console.log(response)
            window.location = `${process.env.PUBLIC_URL}/`
        // setAccessToken(response.accessToken);
      };    
    
    render (){

       
        return (
            <div>
                                        <FacebookLogin
                                            appId="3610508432327087"
                                            autoLoad={true}
                                            fields="name,email,picture"
                                            onClick={this.componentClicked}
                                            onFailure={this.responseFailure}
                                            callback={this.responseFacebook}
                                        />
               
            </div>
        )
    }
}


export default Facebook;