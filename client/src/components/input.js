import React,{Component} from 'react';
import axios from 'axios';

class Input extends Component{
    state={
        name:'',
    }

    handleChange = event =>{
        this.setState({name:event.target.value});
    };
    handleSubmit= event=>{
        event.preventDefault();
       // const item={
         // name:this.state.name,
       //}
        axios.post('https://mern-list-app.herokuapp.com/api/items',this.state)
        .then(res => {
            console.log(res);
            console.log(res.data);
        console.log("Item added successfully");})
        .catch(err => {console.log(err);
        });
        
    };
     
render()
{
    return(
        <form onSubmit={this.handleSubmit} className="form">
            <label>
                Item Name:
                <input type="text" placeholder="Enter Item" className="input" onChange={this.handleChange}/>
            </label>
            <button type="submit" className="button">Add</button>
        </form>
        
    )
}
}
export default Input;
