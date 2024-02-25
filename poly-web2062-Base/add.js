const prdName = document.querySelector('#prdName')
const prdimage = document.querySelector('#image')
const prdDesc = document.querySelector('#desc')
const formAdd = document.querySelector('#formAdd')
formAdd.addEventListener('submit', () => {
    let prdnew = {
        'name': prdName.value,
        'image': prdimage.value,
        'desc': prdDesc.value
    }
    fetch('http://localhost:3000/products',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(prdnew)
    }).then(()=>(window.location='index.html'))
})
