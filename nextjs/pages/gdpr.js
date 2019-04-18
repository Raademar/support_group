import Layout from '../components/Layout'
import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GdprPage from '../components/GdprPage'

export default class extends Component {
    // Resolve promise and get initial props
    static async getInitialProps({ req }) {
        // Make request for props

        const aboutData = await axios.get(
            `http://${process.env.HOSTNAME}/wp-json/wp/v2/about`
        )
        const pages = await axios.get(
            `http://${process.env.HOSTNAME}/wp-json/menus/v2/header`
        )
        const gdprData = await axios.get(
            `http://${process.env.HOSTNAME}/wp-json/wp/v2/gdpr`
        );
        // Return the data
        return {
            aboutData: aboutData.data,
            gdprData: gdprData.data,
            pages: pages.data
        };
    }

    render() {
        return (
          <Layout navigationMenu={this.props.pages}>
                <GdprPage gdprData={this.props.gdprData}/>
          </Layout>
        );
    }
}
