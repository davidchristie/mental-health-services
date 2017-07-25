import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Highlight } from 'react-instantsearch/dom'

export default class Result extends Component {
  static propTypes = {
    hit: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }

  render () {
    const { hit } = this.props
    return (
      <div style={{marginTop: '10px'}}>
        <Highlight attributeName='name' hit={hit} />
      </div>
    )
  }
}
