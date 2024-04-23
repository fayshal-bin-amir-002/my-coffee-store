import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import bg from "../assets/images/more/1.png";
import { BsCup } from "react-icons/bs";
import CoffeeCard from './CoffeeCard';

const Products = ({ coffees, handleDeleteCoffee }) => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="w-full h-full p-6 my-14 lg:my-28 bg-no-repeat bg-cover object-cover">
            <div className="text-center mb-6 lg:mb-12">
                <p className="text-2xl mb-2">--- Sip & Savor ---</p>
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold font-rancho">Our Popular Products</h1>
                <Link to="/add-coffee">
                    <button className="btn text-white font-rancho text-2xl bg-[#E3B577]">Add Coffee <BsCup /></button>
                </Link>
            </div>
            <div className="lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    coffees.map((coffee) => <CoffeeCard 
                    key={coffee._id} coffee={coffee} handleDeleteCoffee={handleDeleteCoffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

Products.propTypes = {
    coffees: PropTypes.array.isRequired,
    handleDeleteCoffee: PropTypes.func.isRequired
};

export default Products;