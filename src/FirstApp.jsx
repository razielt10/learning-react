import { Fragment, ReactComponentElement } from "react"
import PropTypes from 'prop-types';

const myName = 'Jcgl Juan Carlos'

const getJobName = () => {
    return 'Engineer Manager'
}

const getEmail = () => {
    return 'jclgjuancarlos@gmail.com'
}

//con fragment
export const FirstApp = ({myName, myJob}) => {

  return (
    <Fragment>
        <h2>{ myName }</h2>
        <h3>{ myJob }</h3>
        <h3>{ getEmail() }</h3>
    </Fragment>
    
  )
}

FirstApp.propTypes = {
    myName: PropTypes.string.isRequired,
    myJob: PropTypes.string
}

FirstApp.defaultProps = {
    myJob: 'Desempleado'
}

//sin fragment
export const FirstAppSinFragment = () => {
    return (
        <>
            <h4>Yo mando</h4>
            <h5>Ambos sin fragment</h5>
        </>
    )
}