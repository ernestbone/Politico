const partyForm = document.querySelector('.party-form')
const partyName = document.querySelector('.party-name')
const partyDesc = document.querySelector('.party-desc')
const partyDOM = document.getElementById('party')
const params = window.location.search
const id = new URLSearchParams(params).get('id')





const getParty = async ()=>{
    
   try {
    
    const {data:{party}} = await axios.get(`/api/v1/party/${id}`)
     partyDOM.textContent = `Edit ${party.name}`
     partyName.value = party.name
     partyDesc.value = party.desc
console.log(party);
   } catch (error) {
    console.log(error);
    partyForm.innerHTML = "<h1>Error getting party</h1>"
   }
   
}

getParty()



partyForm.addEventListener('submit', async(e)=>{
    e.preventDefault();
    
    try {
        const name = partyName.value
        const desc = partyDesc.value
        const{data: {party}} = await axios.patch(`/api/v1/party/${id}`, {
            name : name,
            desc : desc
        })
        partyForm.innerHTML = '<h1>Done</h1><a class="button" href="admindashboard.html">Back</a>`'
    } catch (error) {
        console.log(error);
        partyForm.innerHTML = "<h1>could not edit party due to an error</h1>"
    }
})