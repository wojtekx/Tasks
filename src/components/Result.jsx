import React from 'react';
import axios from 'axios';
import { FixedSizeList as List } from "react-window";
import "./Result.css";

class Result extends React.Component{

    state = {
        tasks: null,
    }
      
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(res => {
        this.setState({ tasks: res.data });
        })
      };

      row = ({ index, style }) => {
          return(
            <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
                   <p> {this.state.tasks[index].title} </p> 
                   <span>
                    {this.state.tasks[index].completed ? 
                    <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-128.png" alt="foto" /> 
                    : <img src="https://image.flaticon.com/icons/png/128/291/291202.png" alt="foto"/>}
                   </span>
            </div>
        )
      }

    render(){
        return(
            <>{
              this.state.tasks && (
                <List
                className="List"
                height={500}
                itemCount={this.state.tasks.length}
                itemSize={100}
                width={600}
                >
                {this.row}
                </List>
              )
            }
            </>
        )
    }

}
export default Result