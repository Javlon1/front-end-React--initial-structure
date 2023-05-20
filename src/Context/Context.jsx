import { createContext, useState } from 'react'

const Context = createContext()

function Provider({children}) {

    const [menu, setMenu] = useState(window.localStorage.getItem('menu') ? window.localStorage.getItem('menu') : 1)
    const [lan, setLan] = useState(window.localStorage.getItem('lan') ? window.localStorage.getItem('lan') : "ru")

    return (
        <Context.Provider value={{lan, setLan, menu, setMenu}}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider} 