import React from "react";
import RegisterForm from "../../components/AuthComponents/RegisterForm";
const Register= () => {    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <RegisterForm/>
                </div>
            </div>
        </div>
    );
}

export default Register;