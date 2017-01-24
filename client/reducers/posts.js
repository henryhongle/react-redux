//a reducer takes in two things action and copy of current state

function posts (state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES' :
            console.log('Incremening likes!!');
            const i = action.index;
            return [
                ...state.slice(0,i), //before the one we are update
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i+1) //after the one we are update
            ]
        default:
            return state;
    }
}

export default posts;
