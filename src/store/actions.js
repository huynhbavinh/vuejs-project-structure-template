export default {
    plusNumberStore(context) {
        context.commit('Plus');
    },
    loginUser(context, user) {
        context.commit('Login', user);
    },

}