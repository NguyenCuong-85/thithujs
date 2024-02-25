const prdName = document.querySelector('#prdName')
const prdimage = document.querySelector('#image')
const prdDesc = document.querySelector('#desc')
const formUpdate = document.querySelector('#formUpdate')
const searchParam = new URLSearchParams(document.location.search)
const id = searchParam.get('id')
console.log(id)
fetch('http://localhost:3000/products/'+id)
.then(response => response.json())
.then(data => {
    // console.log(data)
    prdName.value = data.name
    prdimage.value = data.image
    prdDesc.value = data.desc
})
formUpdate.addEventListener('submit',()=>{
    let prdnew = {
        'name': prdName.value,
        'image': prdimage.value,
        'desc': prdDesc.value
    }
    fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(prdnew)
    }).then(()=>(window.location='index.html'))
})
