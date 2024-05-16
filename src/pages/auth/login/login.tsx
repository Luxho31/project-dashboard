import { NavLink } from "react-router-dom";
import video from "../../../assets/video/video.mp4";
import logo from "../../../assets/image/logo-planta.png";

import "./login.css";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import {
    AiFillEye,
    AiFillEyeInvisible,
    AiOutlineSwapRight,
} from "react-icons/ai";
import { useState } from "react";

const login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
        if (e.target.value === "") setShowPassword(false);
    };

    return (
        <div className="login--card">
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
                        ¿No tienes una cuenta?
                    </span>
                    <NavLink to={"register"} className="btn">
                        Crear cuenta
                    </NavLink>
                </div>
            </div>

            <div className="card--body__form">
                <div className="title--form">
                    <img src={logo} alt="" />
                    <h3>¡Bienvenido de Nuevo!</h3>
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
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Ingrese contraseña"
                                onChange={handlePasswordChange}
                            />
                            {password.length > 0 &&
                                (showPassword ? (
                                    <AiFillEye
                                        className="icon icon--password"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <AiFillEyeInvisible
                                        className="icon icon--password"
                                        onClick={togglePasswordVisibility}
                                    />
                                ))}
                        </div>
                    </div>

                    <div className="input--container__remember">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Recordar cuenta</label>
                    </div>

                    <button type="submit" className="btn">
                        <span>Ingresar</span>
                        <AiOutlineSwapRight className="icon" />
                    </button>

                    <span className="text--footer__form">
                        ¿Olvidaste la contraseña?{" "}
                        <NavLink to={"forgot-password"} className="link">
                            Click aquí
                        </NavLink>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default login;
