import Rating from "react-rating";
import {CiStar} from "react-icons/ci";
import {FaStar} from "react-icons/fa";

const ReviewCard = ({name, rating, description}) => {
    return (
        <div className="border-1 rounded shadow p-3  w-100 gap-4 mt-5">
            <div className="d-flex justify-content-between mb-3">
                 <h4>{name}</h4>
                <Rating
                    readonly
                    placeholderRating={rating}
                    emptySymbol={<CiStar style={{color: "gold", fontSize:"20px"}} /> }
                    placeholderSymbol={<FaStar style={{color: "gold", fontSize:"20px"}}/>}

                />

            </div>
        {description==='No Review Found'?<h1 className="text-center">{description}</h1>:<p>{description}</p>}
        </div>
    );
};

export default ReviewCard;