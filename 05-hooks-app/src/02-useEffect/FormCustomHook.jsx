import { useEffect } from "react"
import { useForm } from "../hooks/useForm"

export const FormCustomHook = () => {

    const dataForm =  {
        username: 'juan',
        email: 'juan@jcgljuancarlos.com',
        password: '12345',
    }

    const { formState, username, email, password, onInputChange, onResetForm } = useForm( dataForm )
    
    useEffect( () => {
        // console.log('component mounted')
    }, [] )

    useEffect( () => {
        // console.log('form state change')
    }, [formState] )

    useEffect( () => {
        // console.log('email state change')
    }, [email] )
  return (
    <>
    <h2>Formulario Custom Hook</h2>

    <input
        type="text"
        className="form-control"
        name="username"
        placeholder="your username"
        value={username}
        onChange={ onInputChange }
        />


    <input
        type="text"
        className="form-control mt-2"
        placeholder="your email"
        name="email"
        value={email}
        onChange={ onInputChange }
        />


    <input
        type="text"
        className="form-control mt-2"
        placeholder="your pass"
        name="password"
        value={password}
        onChange={ onInputChange }
        />

    <button type="button" className="btn btn-primary">Guardar</button>

    <button type="reset" className="btn btn-warning" onClick={ onResetForm }>Reset</button>
    </>
  )
}

