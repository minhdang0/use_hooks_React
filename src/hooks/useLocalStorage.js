import { useState } from "react"

const useLocalStorage = (key, value) => {
    const [data, setData] = useState(() =>{
         const oldValue = localStorage.getItem(key);
         return oldValue !== null ? JSON.parse(oldValue) : value
    })

    const saveValue = (newValue)  => {
        setData(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }
    return [data, saveValue]
}

export default useLocalStorage;