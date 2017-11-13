import css from './assets/scss/style.scss'

/** COMPONENTES **/
import nav from './components/nav/nav'
import header from './components/header/header'
import main from './components/main/main'
import footer from './components/footer/footer'


/** APP **/
const page = `
    ${nav()}
    ${header()}
    ${main()}
    ${footer()}
`
document.getElementById('root').innerHTML = page