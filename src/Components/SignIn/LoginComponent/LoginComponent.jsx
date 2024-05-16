import "./LoginComponent.css"
import signin from '../../../assets/images/signin.png'
import { useNavigate} from "react-router-dom";
import Swal from "sweetalert2";



const LoginComponent = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const loginEmail = e.target.email.value;
        const loginPassword = e.target.password.value;
        const {email,password} = JSON.parse(localStorage.getItem("signup"));
        if(email === loginEmail && password === loginPassword){
            const logInData =  {
                email,
                password
            }
            localStorage.setItem("login", JSON.stringify(logInData));
            Swal.fire({
                title: "Congratulations!",
                text: "Login Successful",
                icon: "success"
            });
            navigate('/');
        }
        else{
            Swal.fire({
                title: "Sorry!",
                text: "Enter Correct email and password",
                icon: "error"
            });
            form.reset();
        }

    }
    return (
        <div className="d-flex flex-column flex-md-row" style={{height: "700px", overflow: "hidden"}}>
            <div className="col-sm-6">
                <img src={signin} className="w-100" style={{objectFit: "cover", height: "100%"}} />
            </div>
            <div className="col-sm-6 d-flex justify-content-center  mt-5 mt-md-0 align-items-center">
                <div>
                    <h2>Log in to Exclusive</h2>
                    <p>Enter your details below</p>
                    <form onSubmit={handleFormSubmit}>


                        <div className="form-floating mb-3">
                            <input type="email" name="email" className="form-control" style={{
                                borderTop: "none",
                                borderRight: "none",
                                borderLeft: "none",
                                borderBottom: "1px solid black"
                            }} id="floatingInput"
                                   placeholder="name@example.com" required/>
                            <label htmlFor="floatingInput" style={{marginLeft: "-10px"}}>Email or Phone Number</label>
                        </div>


                        <div className="form-floating mb-3">
                            <input type="password" name="password" className="form-control" style={{
                                borderTop: "none",
                                borderRight: "none",
                                borderLeft: "none",
                                borderBottom: "1px solid black"
                            }} id="floatingInput"
                                   placeholder="name@example.com" required/>
                            <label htmlFor="floatingInput" style={{marginLeft: "-10px"}}>Password</label>
                        </div>

                        <div className="w-full d-flex justify-content-between align-items-center">
                            <input className="btn btn-danger" type="submit" value="Log in"/>
                            <p className="text-danger" style={{cursor: "pointer"}}>Forget Password</p>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default LoginComponent;