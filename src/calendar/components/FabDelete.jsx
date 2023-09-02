import { useCalendarStore, useUiStore } from "../../hooks"

export default function FabDelete() {
    const {StartDeleteEvent, hasEventSelected} = useCalendarStore()

    const {isDateModalOpen} = useUiStore()

    const handleClicDelete = ()=>{
        StartDeleteEvent()
    }

  return (
    <button 
        className="btn btn-danger fab-danger"
        onClick={handleClicDelete}
        disabled={isDateModalOpen}
        style={{display: hasEventSelected ? '' : 'none'}}
    >
        <i className="fas fa-trash-alt"></i>

    </button>
  )
}
