import React, { useState } from 'react'

const withAuth = (Component) => {

    return (props) => {

        const [isAuthenticated, setIsAuthenticated] = useState(`false`)
        const [btnText, setBtnText] = useState(`Log In`)

        function handleLogIn(){

            if(isAuthenticated){
                setIsAuthenticated(false)
                setBtnText((t) => t = `Log In`)
            }else{
                setIsAuthenticated(true)
                setBtnText((t) => t = 'Log Out')
            }

        }

        return <>
        <button onClick={handleLogIn}>{btnText}</button>
        {isAuthenticated ? <Component/> : <p>Please log in!</p>}
        </>
  }
}

export default withAuth
