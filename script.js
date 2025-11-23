const btnScheduleDesktop = document.getElementById("btnNewScheduleDesktop")
const btnScheduleMobile = document.getElementById("btnNewScheduleMobile")
const btnCloseModal = document.getElementById("btn-close-modal")
const btnSchedule = document.getElementById("btn-schedule")

const modalContainer = document.getElementById("modal-container")

/* EVENTOS */
btnScheduleDesktop.addEventListener("click", ShowModal)
btnScheduleMobile.addEventListener("click", ShowModal)
btnCloseModal.addEventListener("click", CloseModal)
btnSchedule.addEventListener("click", (event) => {
  event.preventDefault()

  alert("Agendamento criado com sucesso")
})

/* FUNÇÕES MODAL */
function ShowModal() {
  modalContainer.style.display = "flex"
}

function CloseModal() {
  modalContainer.style.display = "none"
}
