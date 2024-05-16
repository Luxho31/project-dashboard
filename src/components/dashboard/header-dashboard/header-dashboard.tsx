import Profile from "../../../assets/image/profile.jpg";

import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";

import "./header-dashboard.css";
import { AiOutlineMessage } from "react-icons/ai";

const HeaderDashboard = () => {
    return (
        <div className="container--header">
            <div className="header">
                <div className="title">
                    <h1>Bienvenido a Planta</h1>
                    <p>Hola Luis, ¡Bienvenido de nuevo!</p>
                </div>

                <div className="search">
                    <input type="text" placeholder="Buscar..." />
                    <BiSearchAlt className="icon" />
                </div>

                <div className="section--admin">
                    {/* <TbMessageCircle className='icon'/> */}
                    <AiOutlineMessage className="icon" />
                    <MdOutlineNotificationsNone className="icon" />
                    <div className="image--admin">
                        <img src={Profile} alt="Imagen del administrador" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderDashboard;
