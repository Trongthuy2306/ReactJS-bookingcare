import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AllClinic.scss';
import { FormattedMessage } from 'react-intl';
import { getAllClinic } from '../../../services/userService';
import { withRouter } from 'react-router';
import HomeHeader from '../HomeHeader';
import HomeFooter from './HomeFooter';

class AllClinic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataClinics: [],
            filteredClinics: [],
            searchTerm: ''
        };
    }

    async componentDidMount() {
        let res = await getAllClinic();
        console.log('check res clinic: ', res);
        if (res && res.errCode === 0) {
            this.setState({
                dataClinics: res.data ? res.data : []
            });
        }
    }

    handleViewDetailClinic = (clinic) => {
        if (this.props.history) {
            this.props.history.push(`/detail-clinic/${clinic.id}`);
        }
    }

    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    handleSearchSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        this.searchClinics(searchTerm);
    }

    searchClinics = (searchTerm) => {
        const { dataClinics } = this.state;
        const filteredClinics = dataClinics.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.setState({ filteredClinics });
    }
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleSearchChange();
        }
    }
    render() {
        const { dataClinics, filteredClinics, searchTerm } = this.state;
        const clinicsToDisplay = filteredClinics.length > 0 ? filteredClinics : dataClinics;

        return (
            <>
                <HomeHeader />
                <div className='custom-section-share-clinic section-medical-facility'>
                    <div className='custom-section-container-clinic'>
                        <div className='custom-section-header-clinic'>
                            <span className='custom-title-section-clinic'><FormattedMessage id='homepage.outstanding-facilities' /></span>
                        </div>
                        <form className='search-container' onSubmit={this.handleSearchSubmit}>
                            <input
                                type='text'
                                className='custom-search-input'
                                placeholder='Tìm kiếm phòng khám'
                                value={searchTerm}
                                onChange={this.handleSearchChange}
                            />
                            <button type='submit' className='custom-search-button' onClick={this.handleKeyPress}>
                                Tìm kiếm
                            </button>
                        </form>
                        <div className='custom-section-body-clinic'>
                            {clinicsToDisplay.length > 0 &&
                                clinicsToDisplay.map((item, index) => (
                                    <div
                                        className="custom-section-customize-clinic custom-clinic-child-clinic"
                                        key={index}
                                        onClick={() => this.handleViewDetailClinic(item)}
                                    >
                                        <div
                                            className="custom-bg-img-clinic custom-section-medical-facility-clinic"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        />
                                        <div className='custom-clinic-name-clinic'>{item.name}</div>
                                        <hr />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <HomeFooter />
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllClinic));