# Jogo de Adivinhação por Voz
Este é um código JavaScript que implementa um jogo de adivinhação por voz. O jogo consiste em adivinhar um número secreto gerado aleatoriamente, utilizando o reconhecimento de fala do navegador.

## Funcionamento
O código utiliza a API SpeechRecognition para capturar a fala do usuário e processá-la. Ao iniciar o jogo, o reconhecimento de fala é ativado e aguarda a entrada do usuário. Quando uma frase é reconhecida, o evento result é acionado, e o texto reconhecido é capturado e tratado.

O número reconhecido é exibido na tela e comparado com o número secreto gerado aleatoriamente. Dependendo do resultado, mensagens adequadas são exibidas na tela. Se o número for igual ao número secreto, uma mensagem de acerto é exibida. Caso contrário, são exibidas mensagens indicando se o número secreto é maior ou menor do que o chute dado.

O jogo permite que o usuário encerre o jogo a qualquer momento dizendo "game over". Nesse caso, uma mensagem de "GAME OVER" é exibida na tela, e o usuário tem a opção de jogar novamente clicando em um botão.

## Requisitos
- O navegador deve suportar a API SpeechRecognition.
- A linguagem de reconhecimento de fala configurada é o português brasileiro (pt-BR).
## Uso
Para utilizar o jogo, é necessário incorporar o código JavaScript em uma página HTML. Além disso, a página HTML deve conter os seguintes elementos:

- Um elemento com o id "chute", que será utilizado para exibir o texto reconhecido.
- Elementos com os ids "menor-valor" e "maior-valor", que serão utilizados para exibir os limites do intervalo de números possíveis.
- Um botão com a classe "btn-jogar", que permite reiniciar o jogo.
Ao executar o código, o jogo será iniciado automaticamente, aguardando o input de voz do usuário. O número secreto é gerado aleatoriamente dentro de um intervalo predefinido.

## Personalização
O código pode ser personalizado de acordo com as necessidades do desenvolvedor. É possível modificar os valores menorValor e maiorValor para alterar o intervalo de números possíveis. Além disso, é possível alterar as mensagens exibidas na tela de acordo com a preferência.

## Limitações
- O funcionamento do jogo depende da compatibilidade do navegador com a API SpeechRecognition.
- A precisão do reconhecimento de fala pode variar dependendo das condições do ambiente e da qualidade do microfone.
- O jogo está configurado para o idioma português brasileiro (pt-BR) e pode não funcionar corretamente com outros idiomas.
- Não há suporte para dispositivos móveis neste código.
## Agradecimentos
Este código foi desenvolvido com base em recursos e documentação disponíveis sobre a API SpeechRecognition e tecnologias relacionadas. Agradecimentos especiais à comunidade de desenvolvedores por compartilhar conhecimento e recursos que tornaram possível a criação deste jogo de adivinhação por voz.
