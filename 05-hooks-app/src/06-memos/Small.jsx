
import { memo } from 'react'
// import React from 'react'

//export const Small = React.memo(
export const Small = memo(
    ({value}) => {
        console.log('small me generé')
        return (
            <small>{ value }</small>
        )
    }
)
