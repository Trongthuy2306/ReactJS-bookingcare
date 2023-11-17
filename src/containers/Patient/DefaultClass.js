import React, { Component } from 'react';
import { connect } from "react-redux";
import './DetailDoctor.scss'
class DetailDoctor extends Component {

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
            <>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
