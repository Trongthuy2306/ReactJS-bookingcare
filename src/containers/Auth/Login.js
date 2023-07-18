import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            isShowPassword: false
        }
    }

    handleOnchangeUsername = (event) => {
    this.setState({
        username: event.target.value
    })
    console.log(event.target.value)
   }
   handleOnchangePassword = (event) => {
    this.setState({
        password: event.target.value
    })
    console.log(event.target.value)
   }

   handleLogin = () => {
    console.log('username:' ,this.state.username, 'password:' ,this.state.password)
    console.log('All' ,this.state)
}

    handleShowhiPassword = () =>{
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>User Name:</label>
                            <input tyle="text" className="form-control" placeholder="Enter your username" 
                            value={this.state.username}
                            onChange={(event)=>this.handleOnchangeUsername(event)}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>PassWord:</label>
                            <div className="custom-input-password">
                            <input 
                            tyle="text" 
                            className="form-control" 
                            type={(this.state.isShowPassword ? 'text' : 'password')}
                            placeholder="Enter your password"
                            onChange={(event)=>this.handleOnchangePassword(event)}
                            /> 
                            <span onClick={() => this.handleShowhiPassword()}>
                                <i class= {this.state.isShowPassword ? 'far fa-eye' : 'fas fa-eye-slash'}></i>
                            </span>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn-login " onClick={()=>this.handleLogin()}>Login</button>
                            </div>
                        <div className="col-12">
                            <span className="forgot-password">Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className="text-other-login">Or Login with</span>
                        </div>
                        <div className="col-12 social-login">
                        <i className="fab fa-google-plus-g google"></i>
                        <i className="fab fa-facebook-f facebook"></i>
                        </div>                      
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
