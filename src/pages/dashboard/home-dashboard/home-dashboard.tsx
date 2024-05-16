import { BsArrowRightShort } from "react-icons/bs";
import video from "../../../assets/video/video.mp4";
import PlantaDecoration from "../../../assets/image/planta-decoration.png";

import "./home-dashboard.css";

const HomeDashboard = () => {
    return (
        <div className="home--card flex">
            <div className="card--right flex">
                <div className="card--body__video">
                    <video src={video} autoPlay loop muted></video>
                </div>

                <h1>Crea y vende extraordinarios productos</h1>
                <p>
                    ¡La industria de rápido crecimiento en el mundo hoy en día
                    son los productos hechos de forma natural!
                </p>

                <div className="buttons flex">
                    <button className="btn">Explore More</button>
                    <button className="btn btn--transparent">
                        Top Sellers
                    </button>
                </div>
            </div>

            <div className="card--left flex">
                <div className="main flex">
                    <div className="text">
                        <h1>My Stat</h1>

                        <div className="content--text">
                            <span>
                                Hoy <br />
                                <small>4 Ordenes</small>
                            </span>
                            <span>
                                Este mes <br /> <small>127 Ordenes</small>
                            </span>
                        </div>

						<span className="content--text link">
							Go to my orders <BsArrowRightShort className="icon" />
						</span>
                    </div>

					<div className="img">
						<img src={PlantaDecoration} alt="" />
					</div>
                </div>
            </div>
        </div>
    );
};

export default HomeDashboard;
