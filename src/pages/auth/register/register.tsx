import { NavLink } from "react-router-dom";
import video from "../../../assets/video/video.mp4";
import logo from "../../../assets/image/logo-planta.png";

import "./register.css";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const register = () => {
    return (
        <div className="register--card">
            <div className="card--body__video">
                <video src={video} autoPlay muted loop></video>
                <div className="text--body__video">
                    <h2 className="title">
                        Crear y vender productos extraordinarios
                    </h2>
                    <p>¡Adopta la paz de la naturaleza!</p>
                </div>
                <div className="card--footer__video">
                    <span className="text--footer__video">
                        ¿Tienes una cuenta?
                    </span>
                    <NavLink to={"/"} className="btn">
                        Inicia sesión
                    </NavLink>
                </div>
            </div>

            <div className="card--body__form">
                <div className="title--form">
                    <img src={logo} alt="" />
                    <h3>¡Déjanos conocerte!</h3>
                </div>

                <form action="">
                    {/* <span>El estado de inicio de sesión irá aquí</span> */}
                    <div className="input--container">
                        <label htmlFor="email">Correo electrónico</label>
                        <div className="input">
                            <FaUserShield className="icon" />
                            <input
                                type="text"
                                name="email"
                                placeholder="Ingrese correo electrónico"
                            />
                        </div>
                    </div>

                    <div className="input--container">
                        <label htmlFor="password">Contraseña</label>
                        <div className="input">
                            <BsFillShieldLockFill className="icon" />
                            <input
                                type="password"
                                name="password"
                                placeholder="Ingrese contraseña"
                            />
                        </div>
                    </div>
                    
                    <div className="input--container">
                        <label htmlFor="confirm-password">Confirmar contraseña</label>
                        <div className="input">
                            <BsFillShieldLockFill className="icon" />
                            <input
                                type="password"
                                name="confirm-password"
                                placeholder="Ingrese contraseña nuevamente"
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn">
                        <span>Crear Cuenta</span>
                        <AiOutlineSwapRight className="icon" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default register;
