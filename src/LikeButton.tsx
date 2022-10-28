import React, {Component} from "react";

//To use state, you must create the component using class syntax
//The function syntax does not support states
export class LikeButton extends Component<{}, {likes:number, msg:string}>{
    //create the state inside the constructor 
    constructor(props:any){
        super(props)
        this.state = {likes:0, msg:'You have '}
    }

    public updateLikes(){
        this.setState((prevstate)=>{return {likes: prevstate.likes+1}})
    }

    render(): React.ReactNode{
        return(
            <button onClick = {() =>this.updateLikes()}>
                {this.state.msg} {this.state.likes}👍
            </button>
        )
    }
}
