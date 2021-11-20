import './style.scss';

function About(){

    return(
        <div className="about-container d-flex align-items-center" >
            <div id="about"></div>
            <div className="about-text" data-aos="zoom-in-right" data-aos-duration="1500">
                <h2>About Me</h2>
                <p>Hi, I’m Thays. Nice to meet you! I’m a Full Stack developer based in Fortaleza, Brazil. I’ve been studying tech since 2020 focusing mostly in Java and Javascript. I am passionate about creating simple, beautiful and intuitive experiences. </p>
                <p>Before moving into development, I worked designing buildings, as an architect. My experience help me expand my creativity, close attention to detail and team collaboration. I am currently seeking job opportunities to continue growing. Visit my LinkedIn profile for more details or just contact me.</p>
                
                <div className="icons d-flex align-items-center justify-content-around">
                    <a title="linkedin" href="https://www.linkedin.com/in/thaysgama/"><i class="devicon-linkedin-plain"></i></a>
                    <a title="github" href="https://github.com/thaysgama"><i class="devicon-github-original"></i></a>
                </div>
                
                
            </div>
            </div>
    )
}

export default About;