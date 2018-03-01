import {login, logout} from '../../actions/auth';
test('authentication for login', () => {
    const id='123abc';
    const action = login(id);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123abc'
    })
});
test('authentication for logout', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
});