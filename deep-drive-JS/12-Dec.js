// reducers - helps us manage app state
// const reducer = (state, action) => newState;

// function counterReducer(count, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {...state, count: state.count + 1};
//     case 'DECREMENT':
//       return {...state, count: state.count - 1};
//     default:
//       return count;
//   }
// }

// counterReducer(0, { type: 'INCREMENT' }); // 1
// const result = counterReducer(1, { type: 'DECREMENT' }); // 0
// console.log(result === 0);

const initialUser = {
  name: 'Fatima',
  email: 'fatima@gmail.com'
};

function userReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.payload.name };
    case 'CHANGE_EMAIL':
      return { ...state, email: action.payload.email };
    default:
      return state;
  }
}

const result = userReducer(initialUser, {type: 'CHANGE_EMAIL', payload: {email: 'lujain@gmail.com'}})
console.log (result.email === 'lujain@gmail.com');
// action.payload.name;
// { type: 'CHANGE_NAME', payload: { name: 'Fatima' }}
// {type: 'CHANGE_EMAIL', payload: {email: 'fatimaazahir@gmail.com'}}