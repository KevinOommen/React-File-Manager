import React from "react";
import LoginForm from "../../components/AuthComponents/LoginForm";
const Login= () => {    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
}

export default Login;