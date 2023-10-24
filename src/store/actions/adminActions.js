import actionTypes from "./actionTypes";
import { getAllCodeService, createNewUserService, getAllUsers, deleteUserService, editUserService, getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService } from "../../services/userService";
import { toast } from 'react-toastify';


export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {

            dispatch({
                type: actionTypes.FETCH_GENDER_START,
            })

            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fecthGenderSuccess(res.data))
            } else (
                dispatch(fecthGenderFailed())
            )
        } catch (e) {
            dispatch(fecthGenderFailed());
            console.log('fecthGenderStart error', e)
        }
    }
}

export const fecthGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fecthGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED,

})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {

            // dispatch({
            //     type: actionTypes.FETCH_POSITION_SUCCESS,
            // })

            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fecthPositionSuccess(res.data))
            } else (
                dispatch(fecthPositionFailed())
            )
        } catch (e) {
            dispatch(fecthPositionFailed());
            console.log('fecthPositionStart error', e)
        }
    }
}

export const fecthPositionSuccess = (positonData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positonData
})

export const fecthPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILDED,

})

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {

            // dispatch({
            //     type: actionTypes.FETCH_ROLE_SUCCESS,
            // })

            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fecthRoleSuccess(res.data))
            } else (
                dispatch(fecthRoleFailed())
            )
        } catch (e) {
            dispatch(fecthRoleFailed());
            console.log('fecthRoleStart error', e)
        }
    }
}

export const fecthRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fecthRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILDED,

})

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Create a new user success")
                dispatch(saveUserSuccess())
                dispatch(fecthAllUserStart())
            } else (
                dispatch(saveUserFailed())
            )
        } catch (e) {
            dispatch(saveUserFailed());
            console.log('fecthRoleStart error', e)
        }
    }
}

export const saveUserSuccess = (roleData) => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILDED,
})


export const fecthAllUserStart = () => {
    return async (dispatch, getState) => {
        try {

            // dispatch({
            //     type: actionTypes.FETCH_ROLE_SUCCESS,
            // })

            let res = await getAllUsers('ALL');
            console.log('check create new user redux', res)
            if (res && res.errCode === 0) {
                dispatch(fecthAllUserSuccess(res.users.reverse()))
            } else (
                dispatch(fecthAllUserFailed())
            )
        } catch (e) {
            dispatch(fecthAllUserFailed());
            console.log('fecthRoleStart error', e)
        }
    }
}

export const fecthAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data
})

export const fecthAllUserFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILDED,
})


export const daleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.success("Delete the user success!");
                dispatch(deleteUserSuccess())
                dispatch(fecthAllUserStart());
            } else {
                toast.error("Delete the user error!");
                dispatch(deleteUserFailed())
            }
        } catch (e) {
            toast.error("Delete the user error!");
            dispatch(deleteUserFailed());
            console.log('Delete User  error', e)
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILDED,
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Update the user success!");
                dispatch(editUserSuccess())
                dispatch(fecthAllUserStart());
            } else {
                toast.success("Update the user succsess!");
                dispatch(editUserFailed())
            }
        } catch (e) {
            toast.error(" The user error!");
            dispatch(editUserFailed());
            console.log('Edit User  error', e)
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILDED,
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            console.log('chekc res redux top doctor', res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_FAILDED
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTOR_FAILDED:', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTOR_FAILDED
            })

        }
    }
}


export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors('');
            console.log('chekc res redux all doctor', res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_FAILDED
                })
            }
        } catch (e) {
            console.log('FETCH_ALL_DOCTOR_FAILDED:', e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTOR_FAILDED
            })

        }
    }
}

export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data);
            console.log('chech res redux save doctor', res)
            if (res && res.errCode === 0) {
                toast.success("Save detail infor doctor success!");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                toast.error("Save detail infor doctor error!");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED
                })
            }
        } catch (e) {
            console.log('SAVE_DETAIL_DOCTOR_FAILDED:', e)
            toast.error("Save detail infor doctor error!");
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED
            })

        }
    }
}
