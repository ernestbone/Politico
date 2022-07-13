const officeForm = document.querySelector('.office-form')
const officeName = document.querySelector('.office-name')
const officeDesc = document.querySelector('.office-desc')


//office form

officeForm.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const name = officeName.value
    const desc = officeDesc.value

    try {
        await axios.post('/api/v1/office', {name, desc})
        officeForm.innerHTML = `<h1>Successfully created ${name} office</h1><a class="button" href="admindashboard.html">Back</a>`
    } catch (error) {
        officeForm.innerHTML = `<h1>Office could not be created due to an error/h1>`
    }
})

