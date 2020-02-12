var inputName = document.querySelector('#app input');
var listaElement = document.querySelector('#app ul');
var buttonElement = document.querySelector('#app button');





function chamaAxios(){
    var users = inputName.value;
axios
    .get(`https://api.github.com/users/${users}/repos`)
    .then(response=>{
    fillList(response.data);
    
    })
    .catch(error=>{
    alert('erro ao tentar efetuar a busca!')
    renderError();
    })
    renderLoading();
}

buttonElement.onclick = chamaAxios;

function renderLoading(){
    
    listaElement.innerHTML = '';
    var texteElement = document.createTextNode('loading...');
    var loadingElement = document.createElement('li'); // cria elemento lista
    loadingElement.appendChild(texteElement);
    listaElement.appendChild(loadingElement);
}
const fillList = repositorios=>{
    console.log("TCL: repositorios",repositorios);
    listaElement.innerHTML = '';

    for(repo of repositorios){
        
        const repoItem = document.createElement('li');
        const linkRepos = document.createElement('a');
        linkRepos.setAttribute('href',repo.html_url);
        
        var textLink = document.createTextNode(repo.name);
        linkRepos.appendChild(textLink);
        repoItem.appendChild(linkRepos);
        listaElement.appendChild(repoItem);
    }

}
function renderError(){
    listaElement.innerHTML = '';
    var user = inputName.value;
    var msgUserEpmty = ! user ? 'preencha o usário' : 'erro ao efetuar busca!';

    var texteElement =  document.createTextNode(msgUserEpmty);
    var errorElement = document.createElement('li');
    errorElement.style.color = '#f00';
    errorElement.appendChild(texteElement);
    listaElement.appendChild(errorElement);

}


