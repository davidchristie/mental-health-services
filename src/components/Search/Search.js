import React, { Component } from 'react'
import {
  Hits,
  InstantSearch,
  SearchBox
} from 'react-instantsearch/dom'

import Map from '../Map'
import Result from '../Result'

export default class Search extends Component {
  render () {
    return (
      <InstantSearch
        appId='C2QWYCQ3FR'
        apiKey='7c1a04b39c9c1324a97b2b6ad0431b52'
        indexName='Mental Health Services'
      >
        <Map />
        <SearchBox />
        <Hits hitComponent={Result} />
      </InstantSearch>
    )
  }
}
