    const thunkMiddleware = (store) => (next) => (action) => {
    if(typeof action === 'function') {
        action(store.dispatch);
    } else if (typeof action === 'object' && action.type) {
        next(action);
    }
};

const logger = (store) => (next) => (action) => {
    console.log("Logger Middleware.");
    next(action);
};

export default [thunkMiddleware,logger];