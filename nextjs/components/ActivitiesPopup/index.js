import Link from "next/link";
import styled from "styled-components";
import Button from "../Button";
import BodyText from "../BodyText";
import ActivitiesPopupBox from "../ActivitiesPopupBox";
import React, { Component } from "react";
import Heading from "../Heading";


  class ActivitiesPopup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showPopup: false
      };
    }
    togglePopup = () => {
      this.setState({
        showPopup: !this.state.showPopup
      });
    };

    render() {
      console.log(this.props.isDesktop);
      return (
        <div {...this.props}>
          <div>
            <img
              onClick={this.togglePopup}
              src={`${this.props.item.acf.image.sizes.thumbnail}`}
            />
            <Heading
              heroText={this.props.item.title.rendered}
              fontSize={this.props.isDesktop ? "24px" : "20px"}
              fontWeight={this.props.isDesktop ? "bold" : "bold"}
              color="#393939"
            />
            <BodyText
              bodyText={this.props.item.content.rendered}
              fontSize={this.props.isDesktop ? "24px" : "20px"}
              fontWeight={this.props.isDesktop ? "bold" : "bold"}
              width={this.props.isDesktop ? "50%" : ""}
              display={this.props.isDesktop ? "" : "none"}
            />
          </div>

          {this.state.showPopup ? (
            <ActivitiesPopupBox
              item={this.props.item}
              width="95vw"
              height="80vh"
              top="12.5vh"
              left="2vw"
              zIndex="4"
              backgroundColor="white"
              position="fixed"
              closePopup={this.togglePopup.bind(this)}
            />
          ) : null}
        </div>
      );
    }
  };

export default ActivitiesPopup;
