
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="mt-5">
            <h4><span style={{color: "gray"}}>Home</span>/404Error</h4>
            <div className="mt-5">
                <h1 className="w-100 text-center" style={{fontSize: "150px"}}>404 Not Found</h1>
                <p className="mt-3 text-center">Your visited page not found. You may go home page.</p>
                <div className="mt-5 d-flex justify-content-center">
                    <Link to={'/'}>
                        <button className="btn btn-danger mt-5">Back To Home Page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;