const partyList = document.getElementById('party-list')
const officeList = document.getElementById('office-list')

//Load parties from api/party

const showParties = async ()=>{
    let list =""
    try {
        const { data: {parties} }= await axios.get('/api/v1/party')
        for(let i=0; i<parties.length; i++ ){
            list += `<tr>
                 <td>${i+1}</td>
                 <td>${parties[i].name}</td>
                 <td><button><a class="editanchor"href="editparty.html?id=${parties[i]._id}">Edit</a></button></td>
              </tr>`
        }  
    } catch (error) {
        list += `<tr>
        <td>${i+1}</td>
        <td>Unable to get party name</td>
     </tr>`
    }
   
partyList.innerHTML = list
}

showParties()

// Load offices from api

const showOffices = async ()=>{
    let list =""
    try {
        const { data: {offices} }= await axios.get('/api/v1/office')
        for(let i=0; i<offices.length; i++ ){
            list += `<tr>
                 <td>${i+1}</td>
                 <td>${offices[i].name}</td>
                 <td><button><a class="editanchor"href="editoffice.html?id=${offices[i]._id}">Edit</a></button></td>
              </tr>`
        }  
    } catch (error) {
        list += `<tr>
        <td>${i+1}</td>
        <td>Unable to get office name</td>
     </tr>`
    }
   
officeList.innerHTML = list
}

showOffices()

// async function getParty(url){
//     const response = await fetch('/api/v1/party');
//     const data = await response.json();
//     let list =""
//     console.log(data.parties.length);
//     for (let i=0; i<data.parties.length; i++){
//     list += `<tr>
//     <td>${i+1}</td>
//     <td>${data.parties[i].name}</td>
//     <td><button>Edit</button></td>
//   </tr>`
  
//     }
//     partyList.innerHTML = list
   
//     }

    //getParty()