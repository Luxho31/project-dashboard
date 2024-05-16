import { Outlet } from "react-router-dom";
import "./content-dashboard.css";

const ContentDashboard = () => {
    return (
        <div className="body">
            <Outlet />
        </div>
    );
};

export default ContentDashboard;
