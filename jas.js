fetch ("localhost:5000/api/produtos?api_key=sua_chave_secreta")

.then(response => response.json())
.then(data => showInfo(data));

function showInfo(data){
    console.table(data.produtos);
}