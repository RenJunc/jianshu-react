 import React, { Component } from 'react'

 class TodoItem extends Component {
   constructor(props){
    super(props)
    this.handelClick = this.handelClick.bind(this)
   }

   render(){
     const { content } = this.props
     return(
       <div onClick={this.handelClick}>
        {content}
      </div>
     )
   }

   handelClick() {
     const  { deleteItem, index } = this.props
     deleteItem(index)
   }
 }

 export default TodoItem;