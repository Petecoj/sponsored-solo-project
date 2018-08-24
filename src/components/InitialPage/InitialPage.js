import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'


class InitialPage extends Component {


    render() {

        return (
            <div >
                <NavBar />
                <div style={{margin: '50px', color: 'lightGrey',marginTop: '100px', marginBottom: '200px', textAlign: 'center'}}>
                    <h2>Sponsored is dedicated to helping addicts find the resources needed to help them live in recovery. 
                     It connects people struggling with addiction to people who are willing to help support them . 
                     Our main goal is to make Sponsors easily available, provide resources to assist those in need, 
                     and promote sober events our communities.  </h2>
                </div>
            </div>
        );
    }
}

export default InitialPage;
