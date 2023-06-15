import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log('me renderizo!!!')

    return (
        <button
            className='btn btn-secondary'
            onClick={ () => {
                increment()
            }}>
                +1
        </button>
    )
    }
)

