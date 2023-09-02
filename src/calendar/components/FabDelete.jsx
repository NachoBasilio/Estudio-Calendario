import { useCalendarStore } from "../../hooks"

export default function FabDelete() {
    const {StartDeleteEvent, hasEventSelected} = useCalendarStore()

    const handleClicDelete = ()=>{
        StartDeleteEvent()
    }

  return (
    <button 
        className="btn btn-danger fab-danger"
        onClick={handleClicDelete}
        style={{display: hasEventSelected ? '' : 'none'}}
    >
        <i className="fas fa-trash-alt"></i>

    </button>
  )
}
