import { routes } from './router/router.js'
import { activeSession } from './firebase.js';

const component = routes[window.location.pathname]

document.getElementById('root').appendChild(component());

//activeSession()