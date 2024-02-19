const admin_btn=document.querySelector("#admin-btn");
const patient_btn=document.querySelector("#patient-btn");

const container = document.querySelector(".container");

admin_btn.addEventListener("click", () => {
    container.classList.add("patient-mode");
})

patient_btn.addEventListener("click", () => {
    container.classList.remove("patient-mode");
})