import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Service from "../components/Service";
import { useState } from "react";

const Home = () => {

    const loadedCoffees = useLoaderData();

    const [coffees, setCoffees] = useState(loadedCoffees);

    const handleDeleteCoffee = (id) => {
        console.log(id);
    }

    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Products coffees={coffees} handleDeleteCoffee={handleDeleteCoffee}></Products>
        </div>
    );
};

export default Home;