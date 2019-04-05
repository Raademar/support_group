import React, { Component, Fragment } from 'react'
import qs from 'querystring'
import fetch from 'isomorphic-unfetch'

const fbdata = ({ events }) => {
    console.log(events)
    return (
        <div>
            <h1>FB Data</h1>

            <ul>
                {events.map(event => (
                    <li key={event.id}>{event.message}</li>
                ))}
            </ul>
        </div>
    );
};


fbdata.getInitialProps = async ({ props }) => {
    const query = {

        access_token: 'your token here'
    }

    const res = await fetch(`https://graph.facebook.com/v3.2/SupportRestadGard/posts?${qs.stringify(
        query
    )}`)

    const json = await res.json();

    return { events: json.data };

}
export default fbdata;

