import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  countNumber = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked
          <span className="number"> {count} </span>
          times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button className="btn" type="button" onClick={this.countNumber}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
