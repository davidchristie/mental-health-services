import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Highlight } from 'react-instantsearch/dom'

export default class Result extends Component {
  static propTypes = {
    hit: PropTypes.shape({
      address: PropTypes.string,
      name: PropTypes.string.isRequired
    }).isRequired
  }

  render () {
    const { hit } = this.props
    const { address } = hit
    return (
      <div
        style={{
          borderStyle: 'solid',
          borderWidth: 'thin',
          marginTop: 10,
          paddingBottom: 20,
          paddingLeft: 20
        }}
      >
        <h4>
          <Highlight attributeName='name' hit={hit} />
        </h4>
        {
          address
            ? (
              <div
                style={{
                  whiteSpace: 'pre-line'
                }}
              >
                {address.replace(/([!,?])/g, '\n')}
              </div>
            )
            : null
        }
      </div>
    )
  }
}
