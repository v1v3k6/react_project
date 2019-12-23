import React from  'react'
class Foodlist extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        return (
            <div>
                Food list
            </div>
        )
    }
}

export default Foodlist
export {Foodlist}