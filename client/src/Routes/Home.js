import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import Location from '../components/Location';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import useWindowDimensions from '../components/useWindowDimensions'
import { useNavigate, Link } from 'react-router-dom';
import Measures from '../components/Measures';
import { useTranslation } from "react-i18next";

const Home = ({ t, languages }) => {

  const [mobile, setmobile] = useState(false)
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, [])

  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const { width } = useWindowDimensions()

  useEffect(() => {
    if (width < 800) {
      setmobile(true)
    } else {
      setmobile(false)
    }
  }, [width])

  const navigate = useNavigate()
  return (
    <div className='home_container'>
      <select onChange={changeLanguage} value={i18n.language} style={{ margin: '10px 10px 10px 5px' }}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      {/* <div className='first_section'>
        <div className='first_section_component'>
          <img src="./images/imgbook.png" alt='stall_logo' className='first_image_section' />
          <h1 data-aos="fade-right" className="first_section_header">
            <span>{t('tagline1_home')} </span>
            <span>BOOKING FOR DIRECT SELL</span>
          </h1>
          <div data-aos="fade-up" className="first_section_btn">
            <button onClick={() => { navigate('/farmers/') }} className="bookstall_btn">
              Book Stall
            </button>
          </div>
          <div data-aos="fade-up" className="first_section_btn">
            <Link to="https://www.wingrowagritech.com/"><button className="knowmore_btn">
              Know More
            </button></Link>
          </div>
        </div>

        <div className="first_section_image">
          <img className="image_header" alt="hero" src="./images/centerimagenew.png" />
        </div>

      </div>  */}



      {/* corousal */}
      <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active carousel22">
            <img src="./images/7.png" alt="..." />
            <div className="carousel-caption cc">
              {/* <h3 className="Label">First slide label</h3>
         <p className="caption">Some representative placeholder content for the first slide.</p>
         <button className="navigate">Book Stall</button>
         <button className="navigate">Know More</button> */}
            </div>
          </div>
          <div className="carousel-item carousel22">
            <img src="./images/1.png" alt="..." />
            <div className="carousel-caption cc">
              {/* <h3 className="Label">Second slide label</h3>
         <p className="caption">Some representative placeholder content for the second slide.</p>
         <button className="navigate">Navigate</button> */}
            </div>
          </div>
          <div className="carousel-item carousel22">
            <img src="./images/6.png" alt="..." />
            <div className="carousel-caption cc">
              {/* <h3 className="Label">Third slide label</h3>
         <p className="caption">Some representative placeholder content for the third slide.</p>
         <button className="navigate">Navigate</button> */}
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div data-aos="fade-left" className="transimgr">
        <img src="./images/raspberry.png" alt="Skytsunami" />
      </div>

      {!mobile ?
        <div className='second_section_wrapper'>
          <div className='second_section_aboutus'>
            <h2 className='h2_style'>About Us</h2>
            <p className='p_style'>We at Wingrow Agritech facilitate direct interaction between consumers and farmers. Consumers get access to produce direct from farms which is much fresher and lasts longer, at reasonable prices.</p>
          </div>
          <div className='second_section'>
            <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" className='second_section_component'>
              <img src='./images/FPO.webp' alt='img' className='second_section_img' />

            </div>

            <div data-aos="fade-down" className='second_section_component_arrow'>
              <img src='https://cdn-icons-png.flaticon.com/512/664/664866.png' alt='img' className='second_section_img' />
            </div>

            <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" className='second_section_component'>
              <img src='./images/WIN.webp' alt='img' className='second_section_img' />
            </div>

            <div data-aos="fade-down" className='second_section_component_arrow'>
              <img src='https://cdn-icons-png.flaticon.com/512/3183/3183354.png' alt='img' className='second_section_img' />
            </div>

            <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" className='second_section_component'>
              <img src='./images/CONS.webp' alt='img' className='second_section_img' />
            </div>
          </div>
        </div>
        :
        <div className='second_section_wrapper'>
          <div className='second_section_aboutus'>
            <h2 className='h2_style'>About Us</h2>
            <p className='p_style'>We at Wingrow Agritech facilitate direct interaction between consumers and farmers. Consumers get access to produce direct from farms which is much fresher and lasts longer, at reasonable prices.</p>
          </div>
          <div className='second_section'>
            <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" className='second_section_component'>
              <img src='./images/FPO.webp' alt='img' className='second_section_img' />
            </div>

            <div data-aos="fade-down" className='second_section_component_arrow'>
              <img src='https://cdn-icons-png.flaticon.com/512/545/545678.png ' alt='img' className='second_section_img' />
            </div>

            <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" className='second_section_component'>
              <img src='./images/WIN.webp' alt='img' className='second_section_img' />
            </div>

            <div data-aos="fade-down" className='second_section_component_arrow'>
              <img src='https://cdn-icons-png.flaticon.com/512/2989/2989972.png' alt='img' className='second_section_img' />
            </div>

            <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" className='second_section_component'>
              <img src='./images/CONS.webp' alt='img' className='second_section_img' />
            </div>
          </div>
        </div>
      }
      <div data-aos="fade-right" className="transimg">
        <img src="./images/cherryleft.png" alt="Skytsunami" />
      </div>

      <div className='keyfeature_section'>
        <h2>Key Features</h2>
        <div className='keys'>
          <div className='keyfeature_container'>
            <ol className="listed">
              <li class="" data-aos="fade-left" className="h a">Market Visibility</li>
              <li class="" data-aos="fade-left" className="h a">3rd part integration</li>
              <li class="" data-aos="fade-left" className="h a">Analytics</li>
              <li class="" data-aos="fade-left" className="h a">Paperless documentation</li>
            </ol>
          </div>
          <img src='./images/pngwing.com.png' alt='img' className='keyfeature_container' />
          <div className='keyfeature_container'>
            <ol class="listed">
              <li class="" data-aos="fade-right" className="h a">Mobile & web applications</li>
              <li class="" data-aos="fade-right" className="h a">White labelled products</li>
              <li class="" data-aos="fade-right" className="h a">Resource management</li>
              <li class="" data-aos="fade-right" className="h a">On the go tracking</li>
            </ol>
          </div>
        </div>
      </div>


      <div className='fourth_section'>
        <div className='fourthsec_content'>
          <h2>From Farmer to Customer!</h2>
          <h3>Order a shipment</h3>
          <p>We offer nutrient rich, toxin free food to our customers, while enriching the lives of farmers and helping them to live in a better lifestyle. We strive to help farmers with helping them to use good agricultural practices for increasing productivity resulting in a better revenue.</p>
        </div>
        <img className="fourthsec_pic" src="./images/home_vegetables_pic4.webp"></img>
      </div>
      <div data-aos="fade-left" className="transimgr">
        <img src="./images/cherryright.png" alt="Skytsunami" />
      </div>

      <div className='fifth_section'>
        <h2>Our Response to Covid-19</h2>
        <p>During the lockdown situation, we started delivering fruits and vegetables at home following all the safety norms. We also set up fruit and vegetable stalls in collaboration with government to help farmers and citizens.</p>
        <div className="measure_container">
          <Measures />
        </div>
      </div>
      <div data-aos="fade-right" className="transimg">
        <img src="./images/transpic.png" alt="Skytsunami" />
      </div>

      <div className='third_section'>
        <div className="third_section_details">
          <h1 className="third_section_header">Our Markets</h1>
          <p className="third_section_p">We organize weekly markets at key locations in Pune, which allows farmers to sell fresh produce directly to the customers, cutting out middlemen in the process. This allows customers to buy farm fresh produce at affordable rates, while the farmers who grow the produce get a fair price for it.</p>
        </div>
        <div className='location_component'>
          <Location />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home