import img1 from "../assets/images/icons/1.png";
import img2 from "../assets/images/icons/2.png";
import img3 from "../assets/images/icons/3.png";
import img4 from "../assets/images/icons/4.png";

const Service = () => {
    return (
        <div className="bg-[#ECEAE3] p-6 lg:py-14">
            <div className="lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
                <div>
                    <img src={img1} alt="" />
                    <h3 className="text-3xl font-rancho mt-4 mb-2">Awesome Aroma</h3>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <h3 className="text-3xl font-rancho mt-4 mb-2">High Quality</h3>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <h3 className="text-3xl font-rancho mt-4 mb-2">Pure Grades</h3>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <img src={img4} alt="" />
                    <h3 className="text-3xl font-rancho mt-4 mb-2">Proper Roasting</h3>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Service;