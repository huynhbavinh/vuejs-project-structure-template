import HelloWorld from './components/HelloWorld'
import Spam from './components/spam'


const routes = [{
        path: '/hello',
        component: HelloWorld,
        props: true,
        name: 'hello'
    },
    {
        path: '/spam',
        component: Spam,
        props: true,
        name: 'spam'
    },


]
export default routes;