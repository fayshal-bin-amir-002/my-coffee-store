import bg from "../assets/images/more/15.jpg";
import logo from "../assets/images/more/logo1.png"

const Header = () => {
    return (
        <div style={{backgroundImage:`url(${bg})`}} className="w-full lg:h-[120px] h-[80px] bg-cover object-cover flex justify-center items-center gap-4">
            <img src={logo} alt="logo" className="w-[60px] lg:w-[90px]" />
            <h3 className="text-white text-3xl lg:text-6xl font-rancho">Espresso Emporium</h3>
        </div>
    );
};

export default Header;