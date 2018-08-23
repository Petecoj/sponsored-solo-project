import React, { Component } from 'react';
import { connect } from 'react-redux';


import NavBar from '../../components/NavBar/NavBar';

const mapStateToProps = state => ({
  user: state.user,
});

class InfoPage extends Component {


  render() {
    let content = (
      <div>
      
        <h1 style={{ color: 'white', textAlign: 'center', fontSize: '36px' }} >
          RESOURCES
          </h1>
          <h4 style={{ color: 'white', textAlign: 'center' }}>
            Here are some other website's that can help you, or someone you know.
          </h4>

     
        <div style={{ color: 'white' }}>

          <ul>
            <a href="https://www.aa.org/">https://www.aa.org/</a>
            <br></br>
            <p>Alcoholics Anonymous is an international fellowship of men
               and women who have had a drinking problem. It is nonprofessional,
               self-supporting, multiracial, apolitical, and available almost everywhere.
                There are no age or education requirements. Membership is open to anyone who
                 wants to do something about his or her drinking problem.</p>
          </ul>
          <ul>
            <a href="https://www.smartrecovery.org/">https://www.smartrecovery.org/</a>
            <br></br>
            <p>SMART Recovery aims to support individuals who have chosen to abstain,
              or are considering abstinence from any type of addictive behaviors (substances or activities),
               by teaching how to change self-defeating thinking, emotions, and actions; and to work towards
               long-term satisfactions and quality of life.
               </p>
          </ul>
          <ul>
            <a href="https://www.celebraterecovery.com/">https://www.celebraterecovery.com/</a>
            <br></br>
            <p>Celebrate Recovery is a Christ-centered, 12 step recovery program for anyone struggling
             with hurt, pain or addiction of any kind. Celebrate Recovery is a safe place to find community
             and freedom from the issues that are controlling our life.
             </p>
          </ul>
          <ul>
            <a href="https://al-anon.org/">https://al-anon.org/</a>
            <br></br>
            <p>Al‑Anon is a mutual support program for people whose lives have been affected by someone else’s drinking.
             By sharing common experiences and applying the Al-Anon principles, families and friends of alcoholics can
             bring positive changes to their individual situations, whether or not the alcoholic admits the existence
             of a drinking problem or seeks help.
             </p>
          </ul>
          <ul>
            <a href="https://lifering.org/">https://lifering.org/</a>
            <br></br>
            <p>LifeRing Secular Recovery is an abstinence-based, worldwide network of individuals seeking to live in
             recovery from addiction to alcohol or to other non-medically indicated drugs. In LifeRing, we offer
             each other peer-to-peer support in ways that encourage personal growth and continued learning through
             personal empowerment.
             </p>
          </ul>
          <ul>
            <a href="https://www.samhsa.gov/find-help/national-helpline">https://www.samhsa.gov/find-help/national-helpline</a>
            <br></br>
            <p>SAMHSA’s National Helpline, 1-800-662-HELP (4357), (also known as the Treatment Referral Routing Service)
             or TTY: 1-800-487-4889 is a confidential, free, 24-hour-a-day, 365-day-a-year, information service, in
             English and Spanish, for individuals and family members facing mental and/or substance use disorders.
              This service provides referrals to local treatment facilities, support groups, and community-based organizations.
              </p>
          </ul>
        </div>
      </div>
    );


    return (
      <div>
        <NavBar />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
