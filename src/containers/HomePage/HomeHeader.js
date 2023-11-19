import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';
import { withRouter } from 'react-router';

class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push('/home')
        }
    }
    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <img className="header-logo" src={logo} onClick={() => { this.returnToHome() }} />
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
                            <div className={language === LANGUAGES.VI ? 'active language-vi ' : 'language-vi '}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'active language-en ' : 'language-en '}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                {this.props.isShowBanner === true &&
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
                }


            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
