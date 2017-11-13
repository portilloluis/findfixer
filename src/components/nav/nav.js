const nav = () => {

    const logo = `./src/components/nav/img/logo.svg`,
          nombre = `Find<span>Fixer</span>`  

    return `
        <nav class="mainNav">
            <div class="mainNav-logo">
                <img src="${logo}"/>
                <h1>${nombre}</h1>
            </div>
          
        </nav>
    `
}

export default nav;