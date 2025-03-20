import { useState } from "react";

const useToggle = (initialValue = false) => {
    const [toggle, setToggle] = useState(initialValue);
    
    const toggleActive = () => {
        setToggle(!toggle)
    }
    return [toggle, toggleActive];
}

export default useToggle;