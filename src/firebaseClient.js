import fire from './config/fire';
import isEmpty from 'lodash/isEmpty'


export const isSignedInUser = () => {
    const userId = fire.auth().currentUser;
    console.log('user id', userId);
    return true;
}

export const onSignIn = (callbackFn) => {
    fire.auth().onAuthStateChanged((user)=>{
        if(user){
            callbackFn(user);
        }
    });
}

export const addUser = (profile)=>{
    fire.auth().createUserWithEmailAndPassword(profile.email,profile.password)
    .then((user)=>{
        console.log("signup success")
        const userId = fire.auth().currentUser.uid;
            fire.database().ref('users')
            .child(userId)
            .child("profile")
            .set({
                 name: profile.fullName
             }).then(() => {
                 console.log("profile success")
                window.location.assign('/mobiles');
             })
            })
    .catch((err)=>{
        console.log('signup failed', err);
    })
}

export const signInUser=(email,password)=>{
    fire.auth().signInWithEmailAndPassword(email,password).then((user)=>{
        const userId = fire.auth().currentUser.uid;
        console.log("abcd-login",userId)
        window.location.assign('/mobiles');

    }).catch((err)=>{
        console.log(err)
    })
}

export const signOutUser=()=>{
    fire.auth().signOut()
    .then(() => {
        window.location.assign('/');
    });
}

export const fetchMobiles = () => {
    return fire.database().ref('mobiles').once('value').then(function(snapshot) {
        return snapshot.val();
    })
}

export const fetchMobilesFromCart = (updateMobiles) => {
    const userId = fire.auth().currentUser.uid;    
    return fire.database().ref('users')
    .child(userId)
    .child("cart")
    .on('value', function(snapshot) {
        console.log('snapshot total', snapshot.val());
        const mobilesInCart = isEmpty(snapshot.val()) ? [] : Object.values(snapshot.val());
        updateMobiles(mobilesInCart);
    })
}

export const addToCart = (mobile) => {
    const userId = fire.auth().currentUser.uid;    
    return fire.database().ref('users')
    .child(userId)
    .child("cart")
    .child(mobile.id)
    .set(mobile)
    .then(() => {console.log("success adding")})
    .catch((err) => {
        console.log(err)
    })
}

export const removeFromCart = (mobileId) => {
    const userId = fire.auth().currentUser.uid;    
    return fire.database().ref('users')
    .child(userId)
    .child("cart")
    .child(mobileId)
    .remove()
    .then(() => {console.log("success removing")})
    .catch((err) => {
        console.log(err)
    })
}