import './style.scss';

function About(){

    return(
        <div className="about-container d-flex align-items-center" >
            <div id="about"></div>
            <div className="about-text">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quidem consequuntur ducimus eligendi dolorem itaque voluptatibus maxime vel hic eos libero asperiores optio laboriosam atque earum ipsa, molestias vero doloremque?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quidem consequuntur ducimus eligendi dolorem itaque voluptatibus maxime vel hic eos libero asperiores optio laboriosam atque earum ipsa, molestias vero doloremque?</p>
                
                <div className="icons d-flex align-items-center justify-content-around">
                    <a title="linkedin" href="https://www.linkedin.com/in/thaysgama/"><i class="devicon-linkedin-plain"></i></a>
                    <a title="github" href="https://github.com/thaysgama"><i class="devicon-github-original"></i></a>
                </div>
                
                
            </div>
            </div>
    )
}

export default About;