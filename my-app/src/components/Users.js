import axios from "axios"
import React from "react"

export class Users extends React.Component {

  state = {
    loading: true,
    persons: []
  }

  async componentDidMount() {
    const respone = await axios('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5')
    this.setState({ persons: respone.data.users, loading: false })
    console.log(this.state.persons)
  }

  render() {
    return <div>
      {this.state.persons.map(person => (
        <div className="card border py-2 px-4 rounded-md mb-2 bg-white w-[300px] h-[282px] text-center text-lg" key={person.id}>
        <div className="flex justify-center"><img src={person.photo} alt="Photo" className="h-[100px] w-[100px] rounded-full"></img></div>
        <div>{person.name}</div>
        <div>{person.position}</div>
        <div>{person.email}</div>
        <div>{person.phone}</div>
        <br></br>
        </div>
      ))}
      {this.state.loading || !this.state.persons ? <div>Loading...</div> : <div></div>}
    </div>
  }
}