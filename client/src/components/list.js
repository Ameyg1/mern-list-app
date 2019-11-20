import React ,{Component} from 'react';
import axios from 'axios';
import {Button} from 'reactstrap';

class List extends Component{
    state={
        items:[]

    }
     componentDidMount(){
        axios.get('https://mern-list-app.herokuapp.com/api/items')
        .then(res => {
            console.log(res);
            this.setState({items:res.data});
        });
     }
     componentDidUpdate(){
        axios.get('https://mern-list-app.herokuapp.com/api/items')
        .then(res => {
            console.log(res);
            this.setState({items:res.data});
        });
     }

    
     del(id) {
        axios.delete('https://mern-list-app.herokuapp.com/api/items/'+id)
        .then(res => {
            console.log(res);
           console.log(res.data);
        console.log("Item added deleted");})
        .catch(err => {console.log(err);
        });
        
    };
render()
{
    return(
        <div className="list">
            <ol>
            {this.state.items.map(item => (<li key={item._id}> <div className="comp">{item.name} <Button className="mr-2" size="sm" color="danger" onClick={()=>this.del(item._id)}>&times;</Button></div> </li>))}
            </ol>

        </div>  
    )
}
}
export default List;