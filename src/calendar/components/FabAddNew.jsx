import { useCalendarStore, useUiStore } from "../../hooks"

export default function FabAddNew() {
    const {openDateModal} = useUiStore()
    const {setActiveEvent} = useCalendarStore()

    const handleClicNew = ()=>{
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: new Date(),
            bgcolor: '#fafafa'
        })
        openDateModal()
    }

  return (
    <button 
        className="btn btn-primary fab"
        onClick={handleClicNew}
    >
        <i className="fas fa-plus"></i>

    </button>
  )
}
