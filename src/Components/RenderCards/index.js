import React from 'react'

const renderCards = (props) => {
    const {name='', type='', image='', description, price, id} = props
    return(
        <div key={id}>
            <div>{image}</div>
            <div>{name}</div>
            <div>{type}</div>
            {price?<div>{price}</div>:null}
            {description?<div>{description}</div>:null}
        </div>
    )
}

export default renderCards
export {renderCards}