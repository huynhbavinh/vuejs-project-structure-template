export default {
    Plus(state) {
        state.numberStore++;
    },
    Login(state, user) {
        state.userCurrent = user;
    }
}