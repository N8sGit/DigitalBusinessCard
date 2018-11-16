import React from 'react'


class Modal extends React.Component {
   constuctor(props){
    super(props)
    this.state = {
        show: false,
        content: 'hello'
    }
   }

   render(){
       return <div> {this.state.content} </div>
   }



}
export default Modal 