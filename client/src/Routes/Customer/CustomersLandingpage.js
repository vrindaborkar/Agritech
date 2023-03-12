import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Customer.css";
// Added
import { Divider } from "@mui/material";
import ProductCategory from "./ProductCategory";
import OffersCarousel from "./OffersCarousel";
import BannerCarousel from "./BannerCarousel";
import Feedback from "./Feedback";
import ViewOffers from "../../components/ViewOffers"
import $ from 'jquery';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css'; // import Flickity CSS


const CustomersLandingpage = () => {


  const [open, setOpen] = useState()

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="customers_landing_page">

      <div className="offerCarousel-container">
        <OffersCarousel />
      </div>
      <div data-aos="fade-left" className="transimgr">
        <img src="./images/apples.png" alt="Skytsunami" />
      </div>
      <div className="first_header">
        <h1 className="divider" textAlign="left" data-aos="fade-right">
          Live markets
        </h1>
        <i data-aos="fade-right" class="fa-sharp fa-solid fa-location-dot fa-4x"></i>
      </div>

      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="cards-wrapper">
              <div class="card">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="cards-wrapper">
              <div class="card">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="cards-wrapper">
              <div class="card">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="Market Place">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="Market Place">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="Market Place">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className='line1'>
        <h1>
          We got the perfect products for your needs
        </h1>
      </div>

      <div  data-aos="fade-left" className="transimgr">
        <img src="./images/raspberry.png" alt="Skytsunami" />
      </div>
      <div className="first_header">
        <h1 className="divider" textAlign="left" data-aos="fade-right">
          Product Categories
        </h1>
        <i data-aos="fade-right" class="fa-sharp fa-solid fa-cart-shopping fa-4x"></i>
      </div>
      <div className="product-categories">
        <div className="categories-holder">
          <ProductCategory
            link="./customerhome"
            imgsrc="https://post.healthline.com/wp-content/uploads/2020/08/fruits-and-vegetables-thumb.jpg"
            firstHalfTitle="Fruits And"
            secHalfTitle="Vegetables"
          />
          <ProductCategory
            link="./customersnacks"
            imgsrc="https://cdn.shopify.com/s/files/1/0405/5164/5352/files/banner_300x.jpg?v=1647631081"
            firstHalfTitle="Snacks"
          />
          <ProductCategory
            imgsrc="https://pibindia.files.wordpress.com/2016/12/istock_000020447381_medium.jpg?w=1400"
            firstHalfTitle="Pulses &"
            secHalfTitle="Grains"
          />
          <ProductCategory
            imgsrc="https://static.vecteezy.com/system/resources/thumbnails/007/558/975/small/nature-organic-product-logo-with-hand-and-leaf-design-template-free-vector.jpg"
            firstHalfTitle="Organic"
            secHalfTitle="Products"
          />
          <ProductCategory
            imgsrc="https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg"
            firstHalfTitle="Dairy"
            secHalfTitle="Products"
          />
          <ProductCategory
            imgsrc="https://m.media-amazon.com/images/I/71RySHlAMbL._UY550_.jpg"
            firstHalfTitle="Fashion"
          />
          <ProductCategory
            imgsrc="https://m.media-amazon.com/images/I/91gbfULvW0L._AC_SL1500_.jpg"
            firstHalfTitle="Toys & "
            secHalfTitle="Baby Products"
          />
          <ProductCategory
            imgsrc="https://imgmedia.lbb.in/media/2019/08/5d596136e2f8fb4ec61e9405_1566138678272.jpg"
            firstHalfTitle="Furniture"
          />
          <ProductCategory
            imgsrc="https://www.popoptiq.com/wp-content/uploads/2019/01/13-26-1.jpg.webp"
            firstHalfTitle="Fun & "
            secHalfTitle="Entertaimentniture"
          />
        </div>
      </div>
      <div  data-aos="fade-left" className="transimgr">
        <img src="./images/cherryright.png" alt="Skytsunami" />
      </div>


      <div className="first_header">
        <h1 className="divider" textAlign="left" data-aos="fade-right">
          Top Sellers
        </h1>
        <i data-aos="fade-right" class="fa-solid fa-bag-shopping fa-4x"></i>
      </div>
      {/* <div className="top-product">
        <div className="product">
          <img src="https://images.immediate.co.uk/production/volatile/sites/30/2021/11/carrots-953655d.jpg" />
          <h5>Carrots</h5>
        </div>
        <div className="product">
          <img src="https://images.immediate.co.uk/production/volatile/sites/30/2021/11/carrots-953655d.jpg" />
          <h5>Carrots</h5>
        </div>
        <div className="product">
          <img src="https://images.immediate.co.uk/production/volatile/sites/30/2021/11/carrots-953655d.jpg" />
          <h5>Carrots</h5>
        </div>
        <div className="product">
          <img src="https://images.immediate.co.uk/production/volatile/sites/30/2021/11/carrots-953655d.jpg" />
          <h5>Carrots</h5>
        </div>
      </div> */}
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="cards-wrapper">
              <div class="card">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="cards-wrapper">
              <div class="card">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="cards-wrapper">
              <div class="card">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="Market Place">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="Market Place">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src="https://media.timeout.com/images/105263065/750/422/image.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="Market Place">Card title</h5>
                  <p class="card-text">00:00 am - 00:00 pm</p>
                  <a href="#" class="btn btn-primary">View Offers</a>
                  <a href="#" class="btn btn-primary">Get Direction</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      {/* <div className="banner-carousel-container">
        <BannerCarousel />
      </div> */}
      {/* <Divider className="divider" textAlign="left">
        Feedback
      </Divider>
      <div className="feedback-container">
        <Feedback />
      </div> */}
      <div className="first_header">
        <h1 className="divider" textAlign="left" data-aos="fade-right">
          Feedback
        </h1>
        <i data-aos="fade-right" class="fa-solid fa-comments fa-4x"></i>
      </div>
      <div className='feedback'>
        <div className="feedback-container">
          <Feedback />
        </div>
        <img src="././images/kiwi3.png"></img>
      </div>
    </div>
  );
};

export default CustomersLandingpage;
