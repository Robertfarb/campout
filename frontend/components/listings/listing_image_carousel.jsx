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
      arrows: true,
      className: 'image-slider-css',
      slidesToShow: 2,
      slidesToScroll: 1
    };
    const { photos } = this.props;
    debugger;
    
    return (
      <div className="listing-image-carousel">
        <Slider {...settings}>
          {photos.map(photo => 
            <div key={photo.id}>
              <img src={photo.img_url} alt="Listing Photo"/>
            </div>
          )}
        </Slider>
      </div>
    );
  }
}

export default ListingImageCarousel;