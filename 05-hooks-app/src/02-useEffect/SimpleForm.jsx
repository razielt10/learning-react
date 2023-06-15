import { useEffect } from "react"
import { useState } from "react"
import Message from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
            username: 'juan',
            email: 'juan@jcgljuancarlos.com',
        }
    )

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
       setFormState({
            ...formState,
            [name]: value,
        })
    }

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
      <h2>Formulario Simple</h2>

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

      { 
        username == 'juan' && <Message />
      }
    </>
  )
}

