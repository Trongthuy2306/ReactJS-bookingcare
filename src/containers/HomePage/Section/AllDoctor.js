import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils';
import { withRouter } from 'react-router'
import HomeHeader from '../HomeHeader';
class AllDoctor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: []
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux,
            })
        }
    }
    componentDidMount() {
        this.props.loadTopDoctors()
    }
    handleViewDetailDoctor = (doctor) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${doctor.id}`)
        }
    }
    render() {
        let arrDoctors = this.state.arrDoctors;
        let { language } = this.props;
        arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors);
        // console.log('arr Doctor: ', arrDoctors)
        return (
            <>
                <HomeHeader />
                <div className='section-share '>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'>
                                <FormattedMessage id='homepage.outstanding-doctor' />
                            </span>
                        </div>
                        <div className='section-body'>
                            {arrDoctors && arrDoctors.length > 0 &&
                                arrDoctors.map((item, index) => {
                                    let imageBase64 = '';
                                    if (item.image) {
                                        imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                    }
                                    let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
                                    let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName} `;
                                    return (
                                        <div className="section-customize" key={index} onClick={() => this.handleViewDetailDoctor(item)}>
                                            <div className=''>
                                                <div className=''>
                                                    <div className="bg-img "
                                                        style={{ backgroundImage: `url(${imageBase64})` }} />
                                                </div>
                                                <div className='position '>
                                                    <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                </div>
                                                <hr />
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>

                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        topDoctorsRedux: state.admin.topDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllDoctor));
