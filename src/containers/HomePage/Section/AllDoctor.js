import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils';
import { withRouter } from 'react-router'
import HomeHeader from '../HomeHeader';
import HomeFooter from './HomeFooter';
import './AllDoctor.scss';

class AllDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctors: [],
            filteredDoctors: [],
            searchTerm: ''
        };
    }

    componentDidMount() {
        this.props.loadTopDoctors();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux,
                filteredDoctors: []
            });
        }
    }

    handleViewDetailDoctor = (doctor) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${doctor.id}`);
        }
    }

    handleSearchTermChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    handleSearch = () => {
        const { arrDoctors, searchTerm } = this.state;
        const filteredDoctors = arrDoctors.filter(item => {
            const fullName = `${item.lastName} ${item.firstName}`.toLowerCase();
            return fullName.includes(searchTerm.toLowerCase());
        });
        this.setState({
            filteredDoctors: filteredDoctors
        });
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleSearch();
        }
    }

    render() {
        const { arrDoctors, filteredDoctors, searchTerm } = this.state;
        const doctorsToDisplay = filteredDoctors.length > 0 ? filteredDoctors : arrDoctors;

        return (
            <>
                <HomeHeader />
                <div className='custom-section-share custom-section-medical-facility'>
                    <div className='custom-section-container'>
                        <div className='custom-section-header'>
                        </div>
                        <span className='custom-title-section'>
                            <FormattedMessage id='homepage.outstanding-doctor' />
                        </span>
                        <div className='search-bar'>
                            <input
                                type='text'
                                placeholder='Tìm bác sĩ'
                                value={searchTerm}
                                onChange={this.handleSearchTermChange}
                                onKeyPress={this.handleKeyPress}
                            />
                            <button onClick={this.handleSearch}>Tìm kiếm</button>
                        </div>
                        <div className='custom-section-body'>
                            {doctorsToDisplay && doctorsToDisplay.length > 0 &&
                                doctorsToDisplay.map((item, index) => {
                                    let imageBase64 = '';
                                    if (item.image) {
                                        imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                    }
                                    let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
                                    let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName} `;
                                    return (
                                        <div className="custom-section-customize" key={index} onClick={() => this.handleViewDetailDoctor(item)}>
                                            <div className='custom-img-container'>
                                                <div className='custom-bg-img'
                                                    style={{ backgroundImage: `url(${imageBase64})` }} />
                                            </div>
                                            <div>
                                                <div className='custom-position'>
                                                    <div>{this.props.language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                </div>
                                                <hr style={{ width: '90%', color: '#49bce2', border: '1px solid' }} />
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <HomeFooter />
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