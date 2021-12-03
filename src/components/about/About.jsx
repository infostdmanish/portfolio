import "./about.css";
import Me2 from "../../img/me2.png";

function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={Me2}
                        alt=""
                        className="a-img"
                    />
                </div>

            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                Hi, my name is Manish Shakya. I graduated from the James Cook University in 2019 with a Master's Degree in Information Technology. I am excited to begin my career in the field of Information Technology. I look forward to putting my education and acquired skills to use. I am excited to continue developing my skills and gaining valuable experience as a Software Developer.
                </p>
                
            </div>
        </div>
    )
}

export default About
