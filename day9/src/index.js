/**
 * Created by swati on 11/5/17.
 */
import { createStore, combineReducers,applyMiddleware } from 'redux';

console.log("This is a react");

const newsFeed = {
   feed :[],
    count : 0,
    freindsPost : []
};
// reducers are sync ()
function Feeds(state = newsFeed,action) {
        let count = state.count;
    switch (action.type) {
        case 'addFeed' : let feed = state.feed;
                            feed.push(action.data);
                            count++;
            return {...state,feed,count};
        case 'addFreindsPost' : let freindsPost = state.freindsPost;
            freindsPost.push(action.data);
            count++;
            return {...state,freindsPost,count};
    }
    return state;
}

const profileInfo = {
    name : null,
    dob : null,
    myPostCount : 0,
    myPost :[]
};
// reducers are sync ()
function profile(state = profileInfo,action) {
    switch (action.type) {
        case 'updateName' : let name = action.data;
            return {...state,name};
        case 'updateDOB' : let dob = action.data;
            return {...state,dob};
        case 'updateMyPost' : let myPost = state.myPost;
                        myPost.push(action.data);
                        let myPostCount = state.myPostCount + 1;
            return {...state,myPost,myPostCount};
    }
    return state;
}

const reducers = combineReducers({
    timeline : Feeds,
    MyProfile : profile
});

const aMiddleware = (store) => (next) => (action) => {
    // manipulate action here...
    // forward action to next middleware(s) or to a reducernext(action)};
    console.log("hi, I am a middleware");
    next(action);
};

const checkDob = (store) => (next) => (action) => {
    // manipulate action here...
    if(action.type === "updateDOB") {
        console.log("Now will check dob");
        let currentState = store.getState();
        if(currentState.MyProfile.dob) {
            if(action.data < currentState.MyProfile.dob) {
                console.log("You cannot decrease your DOB :P");
                store.dispatch({type: "DO_NOT_PERFORM_ANY_ACTION",data: action.data});
            }
        }
    }
  next(action);
};
const middlewares = applyMiddleware(aMiddleware,checkDob);


// instance of application state
const store = createStore(reducers,middlewares);
// will be caaled everytime
store.subscribe(() => console.log("current state :",store.getState()));

store.dispatch({type:'addFeed',data:"Sacked AAP Minister Kapil Mishra Faints Moments After Fresh 'Expose' On Arvind Kejriwal"});
store.dispatch({type:'addFreindsPost',data:"@Vineeta : Happy Mother's Day"});
store.dispatch({type:'updateName',data:"Swati"});
store.dispatch({type:'updateDOB',data:new Date("09-08-1992").getTime()});
store.dispatch({type:'updateMyPost',data:"Enjoying working on React"});
store.dispatch({type:'updateDOB',data:new Date("08-08-1992").getTime()});

