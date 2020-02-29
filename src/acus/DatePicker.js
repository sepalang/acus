import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'sizzle'

export default function DatePicker(selector, option) {
  const [el] = $(selector)
  var DatePciker = React.createClass({
    getInitialState (){
      return {
        dateView: "year"
      }
    },
    render () {
      return <div>Hello {this.props.name}</div>;
    }
  })
  ReactDOM.render(<DatePciker name="John" />, el);
}