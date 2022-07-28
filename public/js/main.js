const deleteBtn = document.querySelectorAll('.fa-trash') //selecting ALL elements that have the .fa-trash class 
const item = document.querySelectorAll('.item span') //selecting ALL elements that have the .item class and span elements
const itemCompleted = document.querySelectorAll('.item span.completed') //selecting ALL elements that have the .item class and span elements with a .completed class

Array.from(deleteBtn).forEach((element)=>{ //creating an array from the deleteBtn variable which is all trash-can symbols 
    element.addEventListener('click', deleteItem) // within the array is a forEach method with a click event and async callback function 
})

Array.from(item).forEach((element)=>{ //creating an array from the item variable 
    element.addEventListener('click', markComplete) // within the array is a forEach method with a click event and async callback function
})

Array.from(itemCompleted).forEach((element)=>{ //creating an array from the itemCompleted variable 
    element.addEventListener('click', markUnComplete) // within the array is a forEach method with a click event and async callback function
})

async function deleteItem(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUnComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markUnComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}