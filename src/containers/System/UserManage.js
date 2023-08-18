import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }

    // lay data tat ca user
    async componentDidMount() {
        let response = await getAllUsers('ALL');

        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
        console.log('Get All user get NodeJs :', response)
    }

    /**
     * Life cycle
     * run constructor->>init state
     * did mount(set state)
     * render 
     * 
     */
    render() {
        let arrUsers = this.state.arrUsers
        return (
            <div className="user-container ">
                <div className='title text-center'>
                    Manage user with trongthuy
                </div>
                <div className='user-table mt-3 mx-1'>

                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>

                        {
                            arrUsers && arrUsers.map((itemp, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{itemp.email}</td>
                                        <td>{itemp.firstName}</td>
                                        <td>{itemp.lastName}</td>
                                        <td>{itemp.address}</td>
                                        <td>
                                            <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete'><i className="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
