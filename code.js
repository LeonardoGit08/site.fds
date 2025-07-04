const paragrafo = document.getElementById('paragrafo');

const botao = document.createElement('button');
botao.textContent = 'Clique aqui para ver uma mensagem!';

const mensagem = document.createElement('p');

paragrafo.after(botao, mensagem);

botao.onclick = () => {
  mensagem.textContent = 'Honra e Fé 💪';
};
