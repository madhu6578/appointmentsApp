import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, isFavourateAppointmentItem, dateFormat} = props
  const {title, id, isFavourate} = appointmentDetails

  const imageUrl = isFavourate
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const isFavourateItem = () => {
    isFavourateAppointmentItem(id)
  }

  return (
    <li className="item-container">
      <div className="title-card">
        <h1 className="item-title">{title}</h1>
        <img
          className="img-fav"
          src={imageUrl}
          onClick={isFavourateItem}
          alt="start"
          data-testid="star"
        />
      </div>

      <p className="date-para">{dateFormat}</p>
    </li>
  )
}
export default AppointmentItem
