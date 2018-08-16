import React, { Component } from 'react';
import { connect } from 'react-redux';


import NavBar from '../../components/NavBar/NavBar';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class InfoPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div style={{color: 'lightGrey'}}>
          <p>
           EVENTS AND RESOURCES
          </p>
          <ul>
            <li>https://www.aa.org/</li>
            <br></br>
            <p>Alcoholics Anonymous is an international fellowship of men
               and women who have had a drinking problem. It is nonprofessional, 
               self-supporting, multiracial, apolitical, and available almost everywhere.
                There are no age or education requirements. Membership is open to anyone who
                 wants to do something about his or her drinking problem.</p>
          </ul>
          <ul>
            <li>https://www.smartrecovery.org/</li>
            <br></br>
            <p>SMART Recovery aims to support individuals who have chosen to abstain, 
              or are considering abstinence from any type of addictive behaviors (substances or activities),
               by teaching how to change self-defeating thinking, emotions, and actions; and to work towards 
               long-term satisfactions and quality of life.
               </p>
          </ul>
          <ul>
            <li>https://www.celebraterecovery.com/</li>
            <br></br>
            <p>Celebrate Recovery is a Christ-centered, 12 step recovery program for anyone struggling
             with hurt, pain or addiction of any kind. Celebrate Recovery is a safe place to find community 
             and freedom from the issues that are controlling our life.
             </p>
          </ul>
          <ul>
            <li>https://al-anon.org/</li>
            <br></br>
            <p>Al‑Anon is a mutual support program for people whose lives have been affected by someone else’s drinking.
             By sharing common experiences and applying the Al-Anon principles, families and friends of alcoholics can 
             bring positive changes to their individual situations, whether or not the alcoholic admits the existence 
             of a drinking problem or seeks help.
             </p>
              </ul>
                 <ul>
            <li>https://lifering.org/</li>
            <br></br>
            <p>LifeRing Secular Recovery is an abstinence-based, worldwide network of individuals seeking to live in
             recovery from addiction to alcohol or to other non-medically indicated drugs. In LifeRing, we offer 
             each other peer-to-peer support in ways that encourage personal growth and continued learning through 
             personal empowerment.
             </p>
                 </ul>
                 <ul>
            <li>https://www.samhsa.gov/find-help/national-helpline</li>
            <br></br>
            <p>SAMHSA’s National Helpline, 1-800-662-HELP (4357), (also known as the Treatment Referral Routing Service) 
             or TTY: 1-800-487-4889 is a confidential, free, 24-hour-a-day, 365-day-a-year, information service, in 
             English and Spanish, for individuals and family members facing mental and/or substance use disorders.
              This service provides referrals to local treatment facilities, support groups, and community-based organizations. 
              </p>
                 </ul>
        
        </div>
      );
    }

    return (
      <div>
        <NavBar />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
