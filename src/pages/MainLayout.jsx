import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <div className="font-raleway">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;