const deleteText = document.querySelectorAll('.del')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteRapper)
})

async function deleteRapper(){
    //when the user clicks delete the "this.parentNode.childNodes"
    //grabs the stage name and birth name of the rappers and stores it 
    //in the sName and bName respectively.
    const sName = this.parentNode.any.dNodes[i].innerText
    const bName = this.parentNode.childNodes[3].innerText
    //the a fetch request is made for the deleteRapper api in the server
    //the sName and bName are passed to the stageNames and birthNameS properities
    //these name properties are compared with the names in our mongodb collection
    //if they match with any of the names in the database, the document with these
    //names will be deletd.
    try{
        const response = await fetch('deleteRapper', {
            method: 'delete',
            headers: {'COntent-Type': 'application/json'},
            body: JSON.stringify({
                'stageNameS': sName,
                'birthNameS': bName
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}