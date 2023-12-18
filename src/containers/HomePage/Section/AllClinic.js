import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './AllClinic.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import { getAllClinic } from '../../../services/userService';
import { withRouter } from 'react-router';
import HomeHeader from '../HomeHeader';
class AllClinic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataClinics: []
        }
    }
    async componentDidMount() {
        let res = await getAllClinic();
        console.log('check res clinic: ', res)
        if (res && res.errCode === 0) {
            this.setState({
                dataClinics: res.data ? res.data : []
            })
        }

    }
    handleViewDetailClinic = (clinic) => {
        if (this.props.history) {
            this.props.history.push(`/detail-clinic/${clinic.id}`)
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }

    render() {
        let { dataClinics } = this.state;
        return (
            <>
                <HomeHeader />
                <div className='section-share section-medical-facility'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'><FormattedMessage id='homepage.outstanding-facilities' /></span>
                        </div>
                        <div className='section-body'>

                            {dataClinics && dataClinics.length > 0 &&
                                dataClinics.map((item, index) => {
                                    return (
                                        <div className="section-customize clinic-child"
                                            key={index}
                                            onClick={() => this.handleViewDetailClinic(item)}
                                        >
                                            <div className="bg-img section-medical-facility"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                            <div className='clinic-name'>{item.name}</div>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div></>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllClinic));
