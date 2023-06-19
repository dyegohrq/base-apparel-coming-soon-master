const email = document.getElementsByClassName("txt_email")
const bnt = document.getElementById("submit-bnt")



bnt.addEventListener("click", () => {
    const emailValue = email.value 

    if (emailValue === "") {
        alert("Coloca um email valido animal")
    } else {
        alert("Muito bom")
    }
})
