import PropTypes from 'prop-types';

export const GifItem = ({id, title, url}) => {

    return (
        <div key={ id }>
            <img src={ url } alt="" />
            <h6>{ title }</h6>
        </div> 
    )
}

GifItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
