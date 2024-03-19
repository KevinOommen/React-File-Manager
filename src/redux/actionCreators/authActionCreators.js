import * as types from '../actionTypes/authActionTypes';
import fire from '../../config/firebase';
const loginUser = (payload) => {
    return {
        type: types.LOGIN_USER,
        payload
    }
}
const logOutUser = () => {
    return {
        type: types.REGISTER_USER,

    }
}

export const siginUser = (email, password, setSuccess) => (dispatch) => {
    fire.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            dispatch(loginUser({uid: user.uid, email: user.email, displayName: user.displayName}));
            setSuccess(true);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}

export const signUpUser = (name, email, password, setSuccess) => (dispatch) => {
    fire.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        // Signed in 
        fire.auth().currentUser.updateProfile({
            displayName: name
        }).then(() => {
            const currentUser = fire.auth().currentUser;
            dispatch(loginUser({ uid: currentUser.uid, email: currentUser.email, name: currentUser.displayName }));
            setSuccess(true);
        }).catch((error) => {
            console.log(error);
        });

    })
        .catch((error) => {
            if (errorCode === 'auth/email-already-in-use') {
                alert('Email already in use')
            }
            if (errorCode === 'auth/invalid-email') {
                alert('Invalid Email')
            }
            if (errorCode === 'auth/weak-password') {
                alert('Password should be at least 6 characters')
            }
        });
}

export const signOutUser = () => (dispatch) => {
    fire.auth().signOut().then(() => {
    dispatch(logOutUser());
    });
}

export const checkIsLoggedIn = () => (dispatch) => {
    fire.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch(
                loginUser(
                    { uid: user.uid, 
                        email: user.email, 
                        displayName: user.displayName }));
        } else {
            dispatch(logOutUser());
        }
    });
}