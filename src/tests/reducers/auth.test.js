import filterAuth from '../../reducers/auth';
test('should login', () => {
    const uid = '123'
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = filterAuth(undefined, action);
    expect(state.uid).toBe(action.uid);
});
test('should logout', () => {
    const action = {
        type: 'LOGOUT',
    }
    const state = filterAuth(undefined, action);
    expect().toBe();
});
