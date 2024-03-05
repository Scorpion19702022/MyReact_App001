import { createContext } from 'react'

const Task03calculateContext = createContext()

export const AddFunctionContent = ({children}) => {
    



    return (
        <Task03calculateContext.Provider value={}>
            {children}
        </Task03calculateContext.Provider>
    )
}