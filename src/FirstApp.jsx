import { Fragment, ReactComponentElement } from "react"
import PropTypes from 'prop-types';

//con fragment
export const FirstApp = ({title, subTitle, name}) => {

  return (
    <Fragment>
        <h1 data-testid="test-title">{ title }</h1>
        <h2>{ subTitle }</h2>
        <h2>{ subTitle }</h2>
        <h3>{ name }</h3>
    </Fragment>
    
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    name: PropTypes.string
}

FirstApp.defaultProps = {
    subTitle: 'Desempleado',
    name: 'Jcgl Juan Carlos'
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