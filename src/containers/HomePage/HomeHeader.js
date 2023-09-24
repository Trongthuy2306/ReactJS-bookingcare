import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg';
import { FormattedMessage } from 'react-intl';

class HomeHeader extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <img className="header-logo" src={logo} />
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.speciality" /></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.searchdoctor" /></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.health-facility" /></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.select-room" /></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.doctor" /></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.select-doctor" /></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.fee" /></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.check-health" /></div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support"><i className="fas fa-question-circle"></i>
                                <FormattedMessage id="home-header.support" />
                            </div>
                            <div className="languge-vi">VN</div>
                            <div className="languge-en">EN</div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1"><FormattedMessage id="banner.title1" /></div>
                        <div className="title2"><b><FormattedMessage id="banner.title2" /></b></div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input tyle="text" placeholder="Tìm chuyên khoa" />
                        </div>
                    </div>
                    <div className="content-down">

                        <div className="options">
                            <div className="options-child">
                                <div className="icon-child">
                                    <i className="fas fa-hospital"></i></div>
                                <div className="text-child"><b><FormattedMessage id="banner.child1" /></b></div>
                            </div>

                            <div className="options-child">
                                <div className="icon-child">
                                    <i className="fas fa-mobile-alt"></i></div>
                                <div className="text-child"><b><FormattedMessage id="banner.child2" /></b></div>
                            </div>

                            <div className="options-child">
                                <div className="icon-child">
                                    <i className="fas fa-procedures"></i></div>
                                <div className="text-child"><b><FormattedMessage id="banner.child3" /></b></div>
                            </div>

                            <div className="options-child">
                                <div className="icon-child">
                                    <i className="fas fa-flask"></i></div>
                                <div className="text-child"><b><FormattedMessage id="banner.child4" /></b></div>
                            </div>

                            <div className="options-child">
                                <div className="icon-child">
                                    <i className="fas fa-user-md"></i></div>
                                <div className="text-child"><b><FormattedMessage id="banner.child5" /></b></div>
                            </div>

                            <div className="options-child">
                                <div className="icon-child">
                                    <i className="fas fa-briefcase-medical"></i></div>
                                <div className="text-child"><b><FormattedMessage id="banner.child1" /></b></div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        languge: state.app.languge,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
