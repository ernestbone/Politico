const partyForm = document.querySelector('.party-form')
const partyName = document.querySelector('.party-name')
const partyDesc = document.querySelector('.party-desc')






//party form

partyForm.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const name = partyName.value
    const desc = partyDesc.value

    try {
        await axios.post('/api/v1/party', {name, desc})
        partyForm.innerHTML = `<h1>Successfully created ${name} party</h1><a class="button" href="admindashboard.html">Back</a>`
    } catch (error) {
        partyForm.innerHTML = `<h1>Party could not be created due to an error</h1>`
    }
})
