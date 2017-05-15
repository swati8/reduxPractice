/**
 * Created by swati on 11/5/17.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';

console.log("This is a react");

const newsFeed = {
    feed: [],
    count: 0,
    freindsPost: []
};
// reducers are sync ()
function Feeds(state = newsFeed, action) {
    let count = state.count;
    switch (action.type) {
        case 'addFeed' :
            let feed = state.feed;
            feed.push(action.data);
            count++;
            return {...state, feed, count};
        case 'addFreindsPost' :
            let freindsPost = state.freindsPost;
            freindsPost.push(action.data);
            count++;
            return {...state, freindsPost, count};
    }
    return state;
}

const profileInfo = {
    name: null,
    dob: null,
    myPostCount: 0,
    myPost: []
};
// reducers are sync ()
function profile(state = profileInfo, action) {
    switch (action.type) {
        case 'updateName' :
            let name = action.data;
            return {...state, name};
        case 'updateDOB' :
            let dob = action.data;
            return {...state, dob};
        case 'updateMyPost' :
            let myPost = state.myPost;
            myPost.push(action.data);
            let myPostCount = state.myPostCount + 1;
            return {...state, myPost, myPostCount};
    }
    return state;
}

const reducers = combineReducers({
    timeline: Feeds,
    MyProfile: profile
});

const aMiddleware = (store) => (next) => (action) => {
    console.log("hi, I am a middleware");

    // manipulate action here...
    // forward action to next middleware(s) or to a reducernext(action)};
    if (typeof action === 'function') {
        action(store.dispatch);
    } else {
        next(action);
    }
};

const checkDob = (store) => (next) => (action) => {
    // manipulate action here...
    if (action.type === "updateDOB") {
        console.log("Now will check dob");
        let currentState = store.getState();
        if (currentState.MyProfile.dob) {
            if (action.data < currentState.MyProfile.dob) {
                console.log("You cannot decrease your DOB :P");
                store.dispatch({type: "DO_NOT_PERFORM_ANY_ACTION", data: action.data});
            } else {
                next(action);
            }
        } else {
            next(action);
        }
    } else {
        next(action);
    }
};
const middlewares = applyMiddleware(aMiddleware, checkDob);


// instance of application state
const store = createStore(reducers, middlewares);
// will be caaled everytime
store.subscribe(() => console.log("current state :", store.getState()));

const asyncAction = () => {
    return (dispatch) => {
        // this is store's dispatch method
        dispatch({
            type: 'addFeed',
            data: "Sacked AAP Minister Kapil Mishra Faints Moments After Fresh 'Expose' On Arvind Kejriwal"
        }); // call started
        fetch('http://rest.learncode.academy/api/ttn/users')
            .then(response => response.json())
            .then(data => {
                console.log("data :", data);
                data.map(function (detail) {
                    dispatch({type: 'addFreindsPost', data: `@ ${detail.name}: Happy Mother's Day`}); // success
                });
                dispatch({type: 'updateName', data: "Swati"});
                dispatch({type: 'updateDOB', data: new Date("09-08-1992").getTime()});
                dispatch({type: 'updateMyPost', data: "Enjoying working on React"});
                dispatch({type: 'updateDOB', data: new Date("08-08-1992").getTime()});
                dispatch({type: 'updateMyPost', data: "gfghd"});
            })
            .catch(err => {
                dispatch({type: 'DO_NOT_PERFORM_ANY_ACTION', data: err});// failure
            });

    }
};


store.dispatch(asyncAction());
