import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log('me renderizo!!!')

    return (
        <button
            className='btn btn-secondary'
            onClick={ () => {
                increment(5)
            }}>
                +1
        </button>
    )
    }
)

