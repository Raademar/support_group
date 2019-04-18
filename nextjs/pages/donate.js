import About from '../components/About'
import News from '../components/News'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Navigation from '../components/Navigation'
import DonatePage from '../components/DonatePage';

export default class extends Component {
    // Resolve promise and get initial props
    static async getInitialProps({ req }) {
        // Make request for props

        const aboutData = await axios.get(
            `http://${process.env.HOSTNAME}/wp-json/wp/v2/about`
        )

        // Return the data
        return {
            aboutData: aboutData.data,
        };
    }

    render() {
        const members = this.props.aboutData

        const missionData = members.filter(member => member.acf.is_of_type_mission)

        return (
            <Layout navigationMenu={this.props.pages}>
                <DonatePage />
            </Layout>
        );
    }
}
