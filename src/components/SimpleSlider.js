import React, { Component } from "react";
import Slider from "react-slick";
import ImageLink from "./ImageButton.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      focus: true,
      infinite: true,
      autoplay: true,
      dots: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      draggable: true,
      centerPadding: "1px",
      slidesToShow: 1,
      speed: 750,
      arrows: true,
    };
    return (
      <div
        style={{
          overflow: "visible",
        }}
      >
        <Slider
          style={{
            width: "100%",
          }}
          {...settings}
        >
          <div style={{ width: "20em" }}>
            <ImageLink
              to="/"
              src="/images/gallery_1.png"
              alt="Image 1"
              classNameLink="rounded-Link"
              classNameImg="rounded-image"
            />{" "}
          </div>
          <div>
            <ImageLink
              to="/"
              src="/images/gallery_2.png"
              alt="Image 1"
              classNameLink="rounded-Link"
              classNameImg="rounded-image"
            />{" "}
          </div>
          <div>
            <ImageLink
              to="/"
              src="/images/gallery_3.png"
              alt="Image 1"
              classNameLink="rounded-Link"
              classNameImg="rounded-image"
            />{" "}
          </div>
          <div>
            <ImageLink
              to="/"
              src="/images/gallery_4.png"
              alt="Image 1"
              classNameLink="rounded-Link"
              classNameImg="rounded-image"
            />{" "}
          </div>
          <div>
            <ImageLink
              to="/"
              src="/images/gallery_3.png"
              alt="Image 1"
              classNameLink="rounded-Link"
              classNameImg="rounded-image"
            />{" "}
          </div>
          <div>
            <ImageLink
              to="/"
              src="/images/gallery_4.png"
              alt="Image 1"
              classNameLink="rounded-Link"
              classNameImg="rounded-image"
            />{" "}
          </div>
        </Slider>
      </div>
    );
  }
}
