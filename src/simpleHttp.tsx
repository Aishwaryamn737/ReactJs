import React, {Component} from 'react';
export class WithHttp extends Component<{},{data:any}>{
    constructor(props:any){
        super(props)
        this.state = {data:{}}
    }
    
    public getData(){
        let url = 'https://jsonplaceholder.typicode.com/posts/3'
        fetch(url).then((data)=>data.json())
                  .then((subdata)=>{
                            console.log(subdata)
                            this.setState({data:subdata})
                    })
    }

    render(): React.ReactNode{
        return(
            <>
            <button onClick={() => this.getData()}>See data in Console</button>
            <table className="border">
                <tr className="border">
                    <td className="border">UserID: {this.state.data.userId}</td>
                    <td className="border">Title: {this.state.data.title}</td>
                    <td className="border">Content: {this.state.data.body}</td>
                </tr>
            </table>
            </>
        )
    }
}