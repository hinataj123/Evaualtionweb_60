import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';

class Google extends Component {

   
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
    
      responseGoogle = (response) => {
        console.log(response);
      } 
      
      responseSuccess = (response) =>{
        window.location = `${process.env.PUBLIC_URL}/`
    }

    
    render (){

       
        return (
            <div>
                <GoogleLogin
                    clientId="372796286338-urtumo0cravaq195lle1ee49pstusgfc.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.responseSuccess}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
               
            </div>
        )
    }
}


export default Google;