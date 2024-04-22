import bg from "../assets/images/more/3.png"

const Banner = () => {
    return (
        <div className="hero min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-120px)] bg-cover bg-center object-cover" style={{ backgroundImage: `url(${bg})` }}>
            <div className="lg:w-1/2 ms-auto p-6">
                <div className="max-w-xl text-white">
                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold font-rancho">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="mb-5">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="py-2 px-5 bg-[#E3B577] text-2xl text-black font-rancho">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;