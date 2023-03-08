import {Component} from 'react'
import './index.css'
// eslint-disable-next-line import/no-named-as-default-member
import HistoryItem from '../history_item/index'

class HistoryItemsList extends Component {
  state = {
    searchInput: '',
  }

  search = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state
    const searchResults = initialHistoryList.filter(each => {
      const lowerTitle = each.title.toLowerCase()
      const lowerSearchInput = searchInput.toLowerCase()
      return lowerTitle.includes(lowerSearchInput)
    })

    return (
      <div>
        <div className="cont-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <hr className="line" />
            <input
              type="search"
              className="search-bar"
              placeholder="Search history"
              onChange={this.search}
            />
          </div>
        </div>
        <ul className="cont-2">
          {searchResults.map(eachItem => (
            <HistoryItem historyDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default HistoryItemsList
