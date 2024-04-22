import { Link } from "react-router-dom";
import bg from "../assets/images/more/1.png";
import { BsCup } from "react-icons/bs";

const Products = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="w-full h-full my-14 lg:my-28">
            <div className="text-center mb-6 lg:mb-12">
                <p className="text-2xl mb-2">--- Sip & Savor ---</p>
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold font-rancho">Our Popular Products</h1>
                <Link to="/add-coffee">
                    <button className="btn text-white font-rancho text-2xl bg-[#E3B577]">Add Coffee <BsCup /></button>
                </Link>
            </div>
            <div className="lg:w-[75%] grid grid-cols-1 lg:grid-cols-2 gap-6">
                
            </div>
        </div>
    );
};

export default Products;