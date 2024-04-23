import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Service from "../components/Service";
import { useState } from "react";
import { toast } from "react-toastify";

const Home = () => {

    const loadedCoffees = useLoaderData();

    const [coffees, setCoffees] = useState(loadedCoffees);

    const handleDeleteCoffee = (id) => {
        fetch(`http://localhost:5001/coffees/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount === 1) {
                    const remaining = coffees.filter((coffee) => coffee._id !== id);
                    setCoffees(remaining);
                    toast.success('Coffee deleted successfully');
                }
            })
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