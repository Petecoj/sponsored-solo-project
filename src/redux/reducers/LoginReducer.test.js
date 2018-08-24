import loginReducers from './loginReducer'

describe('testing login reducers', ()=>{
test('the initial state should be what i expect',()=>{
let action = {}
let returnedState =  loginReducers(undefined, action)
console.log(returnedState);

//assert that it is what i want
expect(returnedState).toEqual({"isLoading": false, "message": ""})

})
})
