import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../HomeHeader';
import HomeFooter from './HomeFooter';
import { getAllSpecialty } from '../../../services/userService';
import './AllSpecialty.scss';

class Specialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSpecialty: [],
            filteredSpecialties: [],
            searchTerm: ''
        };
    }

    async componentDidMount() {
        let res = await getAllSpecialty();
        if (res && res.errCode === 0) {
            this.setState({
                dataSpecialty: res.data ? res.data : []
            });
        }
    }

    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    handleSearchSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        this.searchSpecialties(searchTerm);
    }

    searchSpecialties = (searchTerm) => {
        const { dataSpecialty } = this.state;
        const filteredSpecialties = dataSpecialty.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.setState({ filteredSpecialties });
    }

    handleViewDetailSpecialty = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail-specialty/${item.id}`);
        }
    }
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleSearchChange();
        }
    }
    render() {
        const { dataSpecialty, filteredSpecialties, searchTerm } = this.state;
        const specialtiesToDisplay = filteredSpecialties.length > 0 ? filteredSpecialties : dataSpecialty;

        return (
            <>
                <HomeHeader />
                <div className='section-share-specialty'>
                    <div className='section-container-specialty'>
                        <div className='section-header-specialty'>
                            <span className='title-section-specialty'>
                                <FormattedMessage id='homepage.specialty-popular' />
                            </span>
                        </div>
                        <form className='search-container' onSubmit={this.handleSearchSubmit}>
                            <input
                                type='text'
                                className='search-input'
                                placeholder='Tìm chuyên khoa'
                                value={searchTerm}
                                onChange={this.handleSearchChange}
                            />
                            <button type='submit' className='search-button' onClick={this.handleKeyPress}>
                                Tìm kiếm
                            </button>
                        </form>
                        <div className='section-body-specialty'>
                            {specialtiesToDisplay.length > 0 &&
                                specialtiesToDisplay.map((item, index) => (
                                    <div
                                        className="section-customize-specialty"
                                        key={index}
                                        onClick={() => this.handleViewDetailSpecialty(item)}
                                    >
                                        <div
                                            className="bg-img-specialty"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        />
                                        <div className='specialty-name'>{item.name}</div>
                                        <hr />
                                    </div>
                                ))}
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
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));