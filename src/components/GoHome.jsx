import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const GoHome = () => {
    return (
        <div className="py-6 lg:py-12">
            <Link to="/"><button className="btn font-rancho text-2xl"><FiArrowLeft /> Back to Home</button></Link>
        </div>
    );
};

export default GoHome;