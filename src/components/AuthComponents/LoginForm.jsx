import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { siginUser } from "../../redux/actionCreators/authActionCreators";  

const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            alert('Please fill all the fields')
            return;
        }
        dispatch(siginUser(email, password, setSuccess));
    }
    React.useEffect(() => {
        if(success)
            navigate('/dashboard');
    }, [success])

    return (
       <>
       <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Login</h1>
            <div className="form-group my-2">
                <input type="email" name="email" className="form-control" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group my-2">
                <input type="password" name="password" className="form-control" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary my-2 form-control">Login</button>
        </form>
        <Link to="/register">Dont' have an account?Register here</Link>
        </>
    )
}

export default LoginForm; 