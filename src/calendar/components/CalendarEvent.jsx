import PropTypes from 'prop-types'

export default function CalendarEvent({event}) {
    const {title, user} = event

 


  return (
    <>
        <strong>
            {
                title
            }
        </strong>
        <span> - {user?.name}</span>
    </>
  )
}


CalendarEvent.propTypes = {
    event: PropTypes.object.isRequired
}