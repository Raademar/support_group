import About from "../components/About";
import News from "../components/News";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import React, { Component } from "react";
import axios from "axios";
import Volunteer from "../components/Volunteer";
import Member from "../components/Member";
import Activities from "../components/Activities";
import Section from "../components/Section";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

export default class extends Component {
    // Resolve promise and get initial props
    static async getInitialProps({ req }) {
        // Make request for props

        // const aboutData = await axios.get(
        //     `http://${process.env.HOSTNAME}/wp-json/wp/v2/about`
        // );
        // const whatWeDo = await axios.get(
        //     `http://${process.env.HOSTNAME}/wp-json/wp/v2/about?slug=what-we-do`
        // );
        // const background = await axios.get(
        //     `http://${process.env.HOSTNAME}/wp-json/wp/v2/about?slug=background`
        // );
        // const ourVision = await axios.get(
        //     `http://${process.env.HOSTNAME}/wp-json/wp/v2/about?slug=our-vision`
        // );
        const pages = await axios.get(
            `http://${process.env.HOSTNAME}/wp-json/menus/v2/header`
        );

        // Return the data

        return {
            // aboutData: aboutData.data,
            // whatWeDo: whatWeDo.data,
            // background: background.data,
            // ourVision: ourVision.data,
            pages: pages.data
        };

    }


    render() {


        // const correctHeroImagePath = this.props.heroImage.media_details.sizes.full
        //   .source_url;
        return (
          <div>
            <Navigation />
            <Contact
              // missionData={missionData}
              // whatWeDo={this.props.whatWeDo}
              // background={this.props.background}
              // ourVision={this.props.ourVision}
            //   pages={this.props.pages}
            />
          </div>
        );
    }
}