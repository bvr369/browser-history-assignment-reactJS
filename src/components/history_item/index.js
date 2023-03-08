import './index.css'

const HistoryItem = props => {
  const {historyDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  return (
    <li className="list-item-cont">
      <p>{timeAccessed}</p>
      <div className="inner-cont">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p>{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
