const form = document.getElementById('form-atividade')
let linhas = ''
const nomes = []

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
})

function adicionaLinha(){
    const inputNome = document.getElementById('nome')
    const inputTelefone = document.getElementById('telefone')

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha

    const corpoTabela = document.querySelector('tbody');
    corpoTabela. innerHTML = linhas;

    inputNome.value = ''
    inputTelefone.value = ''
}
