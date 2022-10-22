const btn = document.querySelector('#sendBtn')
const lista = document.querySelector('#lista')
const txt = document.querySelector('#txt')
const formulario = document.querySelector('#form')

window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    console.log(todos)
    displayTodos()
    

})

btn.addEventListener('click',(e) => {
    e.preventDefault()
    if(txt.value != ''){
        const todo = txt.value 
        todos.push(todo)
        localStorage.setItem('todos',JSON.stringify(todos));
        
    let texto = txt.value 
    txt.value = ''
    let item = document.createElement('li')
    item.innerHTML = texto
    lista.appendChild(item)

  

    let x = document.createElement('span')
    x.innerHTML ='🗑️' + '<br>' + '<br>'
    item.appendChild(x)
    x.addEventListener('click', () => {
        const close = document.querySelectorAll('span');
        for(let i = 0;i < close.length;i++){
            close[i].addEventListener('click', () => {
                close[i].parentElement.style.display ='none'
            })
        }
    })   
}
})

function displayTodos(){
        todos.forEach(todo => {
            let texto = todo
            let item = document.createElement('li')
            item.innerHTML = texto
            lista.appendChild(item)
        
            let x = document.createElement('span')
            x.innerHTML ='🗑️' + '<br>' + '<br>'
            item.appendChild(x)
            x.addEventListener('click', () => {
            const close = document.querySelectorAll('span');
            for(let i = 0;i < close.length;i++){
                close[i].addEventListener('click', () => {
                    close[i].parentElement.style.display ='none'
                    todos.splice(i,1)
                    localStorage.setItem('todos',JSON.stringify(todos));
                    
            })
           }
         })   
        })
       }
    

