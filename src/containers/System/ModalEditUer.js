import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from 'lodash';
class ModalEditUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
            })
        })
    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'hasdcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
        console.log('Check didmount:', this.props.currentUser)
    }

    toggle = () => {
        this.props.toggleFromParent();
    }
    handleOnchageInput = (event, id) => {
        // console.log('Event:', event.target.value, id)

        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            // console.log('check loop:', this.state[arrInput[i]], arrInput[i])
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveUser = () => {
        let isValid = this.checkValidInput();
        if (isValid === true) {
            //call api edit user
            this.props.editUser(this.state);
            // console.log('Check add new:', this.state)
        }
    }
    render() {

        // console.log('check props:', this.props)
        // console.log('check open modal:', this.props.isOpen)

        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
            >
                <ModalHeader
                    toggle={() => { this.toggle() }}>Edit a new User</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchageInput(event, 'email') }}
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className='input-container'>
                            <label>PassWord</label>
                            <input
                                type='password'
                                onChange={(event) => { this.handleOnchageInput(event, 'password') }}
                                value={this.state.password}
                                disabled
                            />

                        </div>
                        <div className='input-container'>
                            <label>First name</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchageInput(event, 'firstName') }}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Last name</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchageInput(event, 'lastName') }}
                                value={this.state.lastName}
                            />
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchageInput(event, 'address') }}
                                value={this.state.address} />
                        </div>
                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                        className='px-3'
                        onClick={() => { this.handleSaveUser() }}>Save changes</Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);




