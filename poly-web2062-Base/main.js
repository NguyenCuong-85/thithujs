const app = document.querySelector('#app');
const show = ()=>{
    fetch('http://localhost:3000/products')
    .then((response)=>response.json())
    .then((data)=>{
        app.innerHTML = data.map((item,i)=>{
            return `
            <tr>
            <td>${i+1}</td>
            <td>${item.name}</td>
            <td>${item.desc}</td>
            <td><img src="${item.image}" height="100" width="100" alt=""></td>
            <td>
            <button data-id="${item.id}" class="btn-xoa" onclick=" return confirm(\`Có muốn xóa\`)">Xóa</button>
                
                <a href="update.html?id=${item.id}"><button data-id="${item.id}" class="btn-xoa">update</button></a>
            </td>
        </tr>
            `
        }).join('')
    })
    .then(()=>{
        const btnXoa = document.querySelectorAll('.btn-xoa');
        for(let btn of btnXoa){
            btn.addEventListener('click',()=>{
                const id = btn.dataset.id;
                fetch(`http://localhost:3000/products/${id}`,{
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            })
        }
    })
}
show();