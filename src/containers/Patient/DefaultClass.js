import React, { Component } from 'react';
import { connect } from "react-redux";
import './Footer.scss'
class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    async componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }
    render() {

        return (
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-links">
                        <Link to="/" className="footer-link">
                            Home
                        </Link>
                        <Link to="/about" className="footer-link">
                            About
                        </Link>
                        <Link to="/services" className="footer-link">
                            Services
                        </Link>
                        <Link to="/contact" className="footer-link">
                            Contact
                        </Link>
                    </div>
                    <div className="footer-social">
                        <a href="#" className="footer-social-link">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="footer-social-link">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="footer-social-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-text">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
