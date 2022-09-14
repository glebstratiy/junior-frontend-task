import axios from "axios"
import React from "react"

export class Positions extends React.Component {

  state = {
    loading: true,
    positions: []
  }

  async componentDidMount() {
    const respone = await axios('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    this.setState({ positions: respone.data.positions, loading: false })
    console.log(this.state.positions)
  }

  render() {
    return <div>
      {this.state.positions.map(position => (
        <div className="mb-[50px]">
        <div>{position.id}</div>
        <div>{position.name}</div>
        </div>
      ))}
      {this.state.loading || !this.state.positions ? <div>Loading...</div> : <div></div>}
    </div>
  }
}