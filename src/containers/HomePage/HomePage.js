import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import Medicalfacility from './Section/Medicalfacility';
import './HomePage.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OutStandingDoctor from './Section/OutStandingDoctor';
import HandBook from './Section/HandBook';
class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <div>
                <HomeHeader />
                <Specialty
                    settings={settings}
                />
                <Medicalfacility
                    settings={settings}
                />
                <OutStandingDoctor
                    settings={settings}
                />
                <HandBook
                    settings={settings}
                />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
