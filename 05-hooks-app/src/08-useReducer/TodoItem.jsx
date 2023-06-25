import React from 'react'

export const TodoItem = ({todo}) => {
    return (
    <>
        <li className='list-group-item d-flex justify-content-between'>
            <span className='align-self-center'>{ todo.description }</span>
            
            <div>
                <button className='btn btn-success'>
                    <i className='fa fa-check'></i>
                </button>

                <button className='btn btn-danger'>
                    <i className='fa fa-trash'></i>
                </button>
            </div>
        </li>
    </>
    )
}

