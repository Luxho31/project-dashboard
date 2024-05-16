import logo from "../../../assets/image/logo-planta.png";

import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { BsCreditCard2Front, BsQuestionCircle, BsTrophy } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import {
    MdDeliveryDining,
    MdOutlineExplore,
    MdOutlinePermContactCalendar,
} from "react-icons/md";

import "./sidebar-dashboard.css";
import { NavLink } from "react-router-dom";

const SidebarDashboard = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="" />
                <h2>Planta</h2>
            </div>

            <div className="menu">
                <h3 className="title">Quick Menu</h3>

                <ul className="menu--list">
                    <NavLink to={""} className="list--item" end>
                        <li className="menu--link">
                            <IoMdSpeedometer className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </NavLink>

                    <NavLink to={"my-orders"} className="list--item">
                        <li className="menu--link">
                            <MdDeliveryDining className="icon" />
                            <span>Mis ordenes</span>
                        </li>
                    </NavLink>

                    <NavLink to={"explore"} className="list--item">
                        <li className="menu--link">
                            <MdOutlineExplore className="icon" />
                            <span>Explorar</span>
                        </li>
                    </NavLink>

                    <NavLink to={"products"} className="list--item">
                        <li className="menu--link">
                            <BsTrophy className="icon" />
                            <span>Productos</span>
                        </li>
                    </NavLink>
                </ul>
            </div>

            <div className="menu">
                <h3 className="title">Configuración</h3>

                <ul className="menu--list">
                    <NavLink to={"charts"} className="list--item">
                        <li className="menu--link">
                            <AiOutlinePieChart className="icon" />
                            <span>Gráficos</span>
                        </li>
                    </NavLink>

                    <NavLink to={"trends"} className="list--item">
                        <li className="menu--link">
                            <BiTrendingUp className="icon" />
                            <span>Tendencias</span>
                        </li>
                    </NavLink>

                    <NavLink to={"contact"} className="list--item">
                        <li className="menu--link">
                            <MdOutlinePermContactCalendar className="icon" />
                            <span>Contacto</span>
                        </li>
                    </NavLink>

                    <NavLink to={"billing"} className="list--item">
                        <li className="menu--link">
                            <BsCreditCard2Front className="icon" />
                            <span>Facturación</span>
                        </li>
                    </NavLink>
                </ul>
            </div>

            <div className="sidebar--card">
                <BsQuestionCircle className="icon" />
                <div className="card--content">
                    <div className="circle1"></div>
                    <div className="circle2"></div>

                    <h3 className="">¿Necesitas ayuda?</h3>
                    <p className="">
                        Si tienes alguna duda o problema, no dudes en
                        contactarnos
                    </p>
                    <button className="btn">Contactar</button>
                </div>
            </div>
        </div>
    );
};

export default SidebarDashboard;
