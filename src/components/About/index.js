import './style.scss';
import pdf from "../../assets/CV-ThaysGama-FullStack.pdf";

function About(){

    return(
        <div className="about-container d-flex align-items-center" >
            <div id="about"></div>
            <div className="about-text" data-aos="fade-up" data-aos-duration="1500">
                <h2>About Me</h2>
                <p>Hi, I’m Thays. Nice to meet you! I’m a Full Stack developer based in Fortaleza, Brazil. I’ve been studying tech since 2020 focusing mostly in Java and Javascript. I am passionate about creating simple, beautiful and intuitive experiences. </p>
                <p>Before moving into development, I worked designing buildings, as an architect. My experience help me expand my creativity, close attention to detail and team collaboration. I am currently seeking job opportunities to continue growing. Visit my LinkedIn profile for more details or just contact me.</p>
                
                <div className="icons d-flex flex-wrap align-items-center justify-content-around">
                    <a className='d-flex align-items-center my-4' title="linkedin" href="https://www.linkedin.com/in/thaysgama/"><i class="devicon-linkedin-plain"></i>Linkedin</a>
                    <a className='d-flex align-items-center my-4' title="github" href="https://github.com/thaysgama"><i class="devicon-github-original"></i>GitHub</a>
                    <a className='d-flex align-items-center my-4' title="cv" href={pdf} download>
                        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
                        </svg>
                        Download CV
                    </a>
                </div>
                
                
            </div>
            </div>
    )
}

export default About;