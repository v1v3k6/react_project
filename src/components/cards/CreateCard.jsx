import React from 'react'

class CreateCards extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {name='', type='', image='', description, price, id, isFood} = this.props
        return(
            <div key={id}>
                <img className="p-1 w-100 card-img-top" src={image} alt={name} />
                <div className="card-title">{name}</div>
                <div className="card-text">{type}</div>
                {isFood?<><div className="card-text">{price}</div><div className="card-text">{description}</div></>:''}
            </div>
        )
    }
}

export default CreateCards
export {CreateCards}