import React from 'react'

class CreateCards extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {name='', type='', image='', description, price, id} = this.props
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
}

export default CreateCards
export {CreateCards}