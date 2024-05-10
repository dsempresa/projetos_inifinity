document.addEventListener('DOMContentLoaded', function() {
    const notaInput = document.getElementById('notaInput');
    const adicionarNotaBtn = document.getElementById('adicionarNota');
    const listaNotas = document.getElementById('listaNotas');

    // Adicionar nota ao clicar no botão
    adicionarNotaBtn.addEventListener('click', function() {
        const notaTexto = notaInput.value.trim();
        if (notaTexto !== '') {
            adicionarNota(notaTexto);
            notaInput.value = '';
        } else {
            alert('Por favor, digite uma nota.');
        }
    });

    // Adicionar nota ao pressionar Enter
    notaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            adicionarNotaBtn.click();
        }
    });

    // Função para adicionar nota à lista
    function adicionarNota(notaTexto) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${notaTexto}</span>
            <button class="excluirNota">Excluir</button>
        `;
        listaNotas.appendChild(li);
    }

    // Excluir nota ao clicar no botão "Excluir"
    listaNotas.addEventListener('click', function(e) {
        if (e.target.classList.contains('excluirNota')) {
            e.target.parentElement.remove();
        }
    });
});
