import React, { Component } from 'react'

import axios from 'axios'

class EmpList extends Component {  

    constructor() {
        super()
        this.state = {
            // counter: 0
            employees: []
        }
        
        this.handleClick = this.handleClick.bind(this);

        this.componentDidMount() {
            axios.get('https://localhost:3000/api/employees')
                .then(res => {
                    this.setState({  employees: res.data  })
                }).catch(err => {

                })
        };

    // handleClick() {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }

    render() {
        return (
            <div>
                {/* <h3>List of Employees</h3> */}
                Counter: {this.state.counter} 
                <br></br>
                <input type="submit" onClick={this.handleClick} value="Increment"/>
                <b> List of Employees : </b>
                <u1>
                    { this.state.employees.map(e => <li key={e._id}>{e.firstName}</li> )}
                </u1>
            </div>
        )
    }
}  

export default EmpList