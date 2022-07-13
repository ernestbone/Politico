const officeForm = document.querySelector('.office-form')
const officeName = document.querySelector('.office-name')
const officeDesc = document.querySelector('.office-desc')
const officeDOM = document.getElementById('office')
const params = window.location.search
const id = new URLSearchParams(params).get('id')




const getOffice = async ()=>{
    
    try {
     const {data:{office}} = await axios.get(`/api/v1/office/${id}`)
      officeDOM.textContent = ` Edit ${office.name}`
      officeName.value = office.name
      officeDesc.value = office.desc
 console.log(office);
    } catch (error) {
     console.log(error);
     officeForm.innerHTML += "<h1>Error getting office</h1>"
    }
    
 }
 
 getOffice()
 


officeForm.addEventListener('submit', async(e)=>{
    e.preventDefault();
    
    try {
        const name = officeName.value
        const desc = officeDesc.value
        const{data: {office}} = await axios.patch(`/api/v1/office/${id}`, {
            name : name,
            desc : desc
        })
        officeForm.innerHTML = '<h1>Done</h1><a class="button" href="admindashboard.html">Back</a>`'
    } catch (error) {
        console.log(error);
        officeForm.innerHTML += "<h1>could not edit office due to an error</h1>"
    }
})


