import { useState, useEffect } from 'react';


function NavMenuHamburguer() {

    const menuClick = (el, intialState) => {
        const [isActive, setActive] = useState(intialState)
    
        useEffect(() =>{
            const onClick = e => {
                if(isActive.current !== null && !isActive.current.contains(e.target)) {
                    setActive(!isActive);
                }
            }
                
            if(isActive) {
                window.addEventListener('click', onClick)
            }
    
            return () => {
                window.removeEventListener('click', onClick)
            }
            
        }, [isActive, setActive])
    
        retrun [isActive, setActive]
    }

    return(
        <div></div>
    )
}

export default NavMenuHamburguer