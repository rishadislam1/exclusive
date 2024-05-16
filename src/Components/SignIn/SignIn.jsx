import signin from '../../assets/images/signin.png'
import './SignIn.css'
import {FcGoogle} from "react-icons/fc";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
const SignIn = () => {
const handleSignUp = (e)=>{

    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const signUpData =  {
        name,
        email,
        password,
    }
    localStorage.setItem("signup", JSON.stringify(signUpData));
    Swal.fire({
        title: "Congratulations!",
        text: "Account Created Successfully",
        icon: "success"
    });
    form.reset();

}
    return (
        <div className="d-flex flex-column flex-md-row " style={{height: "700px", overflow: "hidden"}}>
            <div className="col-sm-6">
                <img src={signin} className="w-100" style={{objectFit: "cover", height: "100%"}}  />
            </div>
            <div className="col-sm-6 d-flex justify-content-center  mt-5 mt-md-0 align-items-center">
                <div>
                    <h2>Create An Account</h2>
                    <p>Enter your details below</p>
                    <form onSubmit={handleSignUp}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" style={{
                                borderTop: "none",
                                borderRight: "none",
                                borderLeft: "none",
                                borderBottom: "1px solid black"
                            }} id="floatingInput"
                                   placeholder="name@example.com" required name="name"/>
                            <label htmlFor="floatingInput" style={{marginLeft: "-10px"}}>Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" style={{
                                borderTop: "none",
                                borderRight: "none",
                                borderLeft: "none",
                                borderBottom: "1px solid black"
                            }} id="floatingInput"
                                   placeholder="name@example.com" required name="email"/>
                            <label htmlFor="floatingInput" style={{marginLeft: "-10px"}}>Email or Phone Number</label>
                        </div>


                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" style={{
                                borderTop: "none",
                                borderRight: "none",
                                borderLeft: "none",
                                borderBottom: "1px solid black"
                            }} id="floatingInput"
                                   placeholder="name@example.com" required name="password"/>
                            <label htmlFor="floatingInput" style={{marginLeft: "-10px"}}>Password</label>
                        </div>

            <div className="w-full d-flex justify-content-center align-items-center bg-danger py-2 rounded" style={{color: "white"}}>
                <input className="bg-transparent border-0" type="submit" value="Create Account" />
            </div>
                    </form>
                    <div className="border border-black mt-2 rounded d-flex justify-content-center align-items-center">
                        <div className="py-2 pointer-event pe-auto" style={{cursor: "pointer"}}><FcGoogle className="me-3" />
                             Signup With Google </div>
                    </div>

                    <p className="mt-4 text-center">Already have an account? <Link to={'/login'}>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;