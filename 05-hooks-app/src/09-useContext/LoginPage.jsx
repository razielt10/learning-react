import { useContext } from "react"
import { UserContext } from "./context/UserContext";

const userLogged = {
    id: 123,
    name: 'JC',
    email: 'jcgljuancarlos@gmail.com',
}

export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext );
    console.log(user)

    return (
        <>
            <h2>Login</h2>
            <hr />
            
            <button
              className="btn btn-primary"
              onClick={ () => { setUser(userLogged)} }>
              Setear usuario
            </button>

        </>
    )
}
