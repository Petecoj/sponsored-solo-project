import loginReducers from './loginReducer';

describe('testing login reducers', () => {
test('the initial state should be what i expect',() => {
const action = {};
const returnedState = loginReducers(undefined, action);
console.log(returnedState);

// assert that it is what i want
expect(returnedState).toEqual({ isLoading: false, message: '' });
});
});
