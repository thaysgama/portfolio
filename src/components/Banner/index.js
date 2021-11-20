import './style.scss'

function Banner(){

    return(
        <div className="banner d-flex justify-content-around ">
            <div className="text" data-aos="fade-right" data-aos-duration="1500">
                <div className="hello">Hello!</div>
                <p>My name is Thays Gama,</p>
                <p>I’m a Full Stack Developer.</p>
                <a href="#projects">
                    <button type="button" class="btn btn-outline-primary">Check my work!</button>
                </a>
            </div>
            <div className="img-shadow" data-aos="fade-left" data-aos-duration="1500">
                <div className="image"></div>
            </div>
        </div>
    )
}

export default Banner;