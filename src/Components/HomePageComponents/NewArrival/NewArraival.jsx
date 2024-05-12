import SectionHeader from "../../SectionHeader/SectionHeader.jsx";
import './NewArraival.css';
import playStation from '../../../assets/images/playStation.png'
import womensProduct from '../../../assets/images/womensCollection.png'
import music from '../../../assets/images/speaker.png';
import perfume from '../../../assets/images/perfume.png'

const NewArraival = () => {
    return (
        <div className="mt-5">
            <SectionHeader categories="Featured" header="New Arrival" />
            <div className="mt-5">
                <div className="row gap-3">
                    <div className="col-sm">
                        <div className="rounded bg-black text-white p-2">
                            <div className="position-relative">
                                <img src={playStation} className="w-100"/>
                                <div className="position-absolute bottom-0 ms-3 mb-3"><h3>PlayStation 5</h3>
                                    <p>Black and White version of the PS5 <br/> coming out on sale.</p>
                                    <button className="shopNowButton border-b-white bg-transparent text-white ">Shop Now
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="rounded bg-black text-white womensCollection">
                            <div className="position-relative">
                                <img src={womensProduct} className="w-100 imgWomens rounded"/>
                                <div className="position-absolute bottom-0 ms-3 mb-4">
                                    <h3>Women’s Collections</h3>
                                    <p>Featured woman collections that <br/> give you another vibe.</p>
                                    <button className="shopNowButton border-b-white bg-transparent text-white ">Shop Now
                                    </button>
                                </div>
                            </div>

                        </div>

                            <div className=" mt-3 mx-0">
                                <div className="row gap-3">
                                    <div className="col-sm">
                                        <div className="rounded bg-black text-white ">
                                            <div className="position-relative py-3">
                                                <div className="d-flex justify-content-center">
                                                    <img src={music} className="w-75 imgSp"/>
                                                </div>
                                                <div className="position-absolute bottom-0 ms-3 mb-3">
                                                    <h3>Speakers</h3>
                                                    <p>Amazon wireless speakers</p>
                                                    <button
                                                        className="shopNowButton border-b-white bg-transparent text-white ">Shop
                                                        Now
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="rounded bg-black text-white">
                                            <div className="position-relative py-3">
                                                <div className="d-flex justify-content-center">
                                                    <img src={perfume} className="w-75"/>
                                                </div>
                                                <div className="position-absolute bottom-0 ms-3 mb-3">
                                                    <h3>Perfume</h3>
                                                    <p>GUCCI INTENSE OUD EDP</p>
                                                    <button
                                                        className="shopNowButton border-b-white bg-transparent text-white ">Shop
                                                        Now
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArraival;