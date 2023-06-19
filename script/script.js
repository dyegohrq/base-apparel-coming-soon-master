const email = document.getElementById("txt_email")
const bnt = document.getElementById("submit-bnt")



bnt.addEventListener("click", () => {
        const emailValue = email.value 

        if (emailValue === "") {
        
        } else {
            alert("Muito bom")
        }
})
