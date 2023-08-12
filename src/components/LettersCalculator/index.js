import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChangeInput = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="theory">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="inputId" className="enter">
            Enter the phrase
          </label>
          <br />
          <input
            id="inputId"
            type="text"
            className="input-decor"
            placeholder="Enter the Phrase"
            onChange={this.onChangeInput}
            value={count}
          />
          <p className="count-number">No.of letters: {count.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt=" letters calculator"
          className="calci-img"
        />
      </div>
    )
  }
}

export default LettersCalculator
