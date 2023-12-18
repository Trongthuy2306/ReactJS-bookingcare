import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './HomeFooter.scss';



class HomeFooter extends Component {

    render() {

        return (
            <>
                <div className='home-footer'>
                    <p>&copy;2023 Booking by Booking Care. More infomation, please visit my FB.<a target='_blank' href='https://www.facebook.com/'>&#8594; Click here &#8592;.</a></p>
                </div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
