import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="List-item">
      <div className="row-container">
        <div className="row">
          <p className="time">{timeAccessed}</p>
          <img className="icon" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <button
        className="btn"
        data-testid="delete"
        onClick={onClickDelete}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
