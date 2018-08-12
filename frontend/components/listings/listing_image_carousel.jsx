import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

class ListingImageCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var settings = {
      infinite: true,
      arrows: false,
      className: 'image-slider-css',
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      variableWidth: true,
      horizontal: true,
      buttons: false,
      swipeToScroll: true
    };

    const { photos } = this.props;
    return (
      <div className="listing-image-carousel">
        <Slider {...settings}>
          {Object.values(photos).map(photo => 
            <div key={photo.id}>
              <img src={photo.imgUrl} className="slider-img" alt="Listing Photo"/>
            </div>
          )}
        </Slider>
      </div>
    );
  }
}

export default ListingImageCarousel;