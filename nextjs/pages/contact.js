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

    static async getInitialProps() {
        // Make request for props

        const branches = await axios.get(
          `http://${process.env.HOSTNAME}/wp-json/wp/v2/branches`
        );


        // Return the data

        return {
            branches: branches.data
        }
    }


    render() {

        console.log()
        // const correctHeroImagePath = this.props.heroImage.media_details.sizes.full
        //   .source_url;
        return (
          <div>
            <Navigation />
            <Contact
                branchesData={this.props.branches}
                // missionData={missionData}
                // whatWeDo={this.props.whatWeDo}
                // background={this.props.background}
                // ourVision={this.props.ourVision}
                pages={this.props.pages}
            />
          </div>
        );
    }
}