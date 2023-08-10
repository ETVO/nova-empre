# Website Nova Empreendimentos
<a href="https://etvo.me" style="color:white;">Desenvolvido por etvo</a>

## Estrutura do projeto
  
| Arquivo            | Descrição                                                                                                                           | Necessário em Production |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | :----------------------: |
| **arquivos.php**   | Home, Empreendimentos, etc. Incluem arquivos específicos de HTML, CSS e JS, para cada página.                                       |            ✅             |
| **pages/**         | Templates HTML específicos para cada página (no *pages/acesso/dashboard-menu.php* utilizo PHP apenas para que o menu seja dinâmico) |            ✅             |
| **partials/**      | Templates parciais *header* e *footer* e específicos para Acesso e Signature.                                                       |            ✅             |
| **src/**           | Pastas com código fonte JS e SCSS, organizado também por páginas.                                                                   |            ❌             |
| **webpack.mix.js** | Utilizado para compilar o código fonte JS e SCSS, e obter a fonte do Bootstrap Icons.                                               |            ❌             |
| **package.json**   | Informação de pacotes Node utilizados para desenvolvimento.                                                                         |            ❌             |
| **node_modules/**  | Pastas com recursos JS e CSS compilados e minificados, imagens, vídeos e fontes.                                                    |            ❌             |
| **assets/**        | Pastas com recursos JS e CSS compilados e minificados, imagens, vídeos e fontes.                                                    |            ✅             |

### Compilar o código JS e SCSS
Utilizando o terminal, execute os seguintes comandos:
```console
npm install
npx mix --production
```
O primeiro instala todas as dependências npm, o segundo chama o Laravel Mix para compilar o código JS e SCSS para produção (minificado e otimizado).

Caso queira realizar alterações no código JS ou SCSS e compilar os arquivos em tempo real, utilize: 
```console
npx mix watch
``` 

## Observações de Desenvolvimento

### Colunas de Vídeos
Na página **A Nova**, nas colunas de vídeos em "Modelo de Construção a Preço de Custo" 
- Para adicionar um vídeo, basta alterar o atributo `src` do elemento `source`. 
- Para adicionar uma thumbnail, basta alterar o atributo `poster` do elemento `video` 

### Lightbox para Imagens
O `gallery-modal` está presente em todas as páginas (no parcial footer.php)
```html
  <!-- Modal para visualização de imagem em Lightbox -->
<div class="gallery-modal">
  <div class="modal-container">
    <div id="overlay" title="Voltar à página"></div>
    <button class="close" id="close" title="Fechar">
      <span class="bi-x-lg"></span>
    </button>
    <div id="imgWrap">
      <img src="" alt="">
    </div>
  </div>
</div>
```
Para ativar o lightbox, basta adicionar em qualquer galeria a classe `gallery-has-modal` e, em torno de cada imagem, uma `<div class="gallery-image"></div>`

**Exemplo:**
```html
<div class="gallery-has-modal">
  <div class="row row-cols-2 g-3">
    <div class="col">
      <div class="gallery-image">
        <img src="/assets/img/empreendimento-galeria-1.jpg" alt="">
      </div>
    </div>
    <div class="col">
      <div class="gallery-image">
        <img src="/assets/img/empreendimento-galeria-1.jpg" alt="">
      </div>
    </div>
  </div>
</div>
```
Ao fazer hover sobre qualquer uma das imagens, aparecerá o overlay padrão, e ao clicar a imagem será aberta no `gallery-modal`.


### Responsividade de Títulos
Defini uma classe auxiliar *`responsive-br`* para que o conteúdo seja mais responsivo
- `<br class="responsive-br xs">` - Exibida apenas em largura menor que **375px** 
- `<br class="responsive-br sm">` - Exibida apenas em largura menor que **576px** 
- `<br class="responsive-br md">` - Exibida apenas em largura menor que **768px**
- `<br class="responsive-br lg">` - Exibida apenas em largura menor que **992px**
- `<br class="responsive-br xl">` - Exibida apenas em largura menor que **1200px**
- `<br class="responsive-br xxl">` - Exibida apenas em largura menor que **1600px**

A classe é utilizada em títulos que ficam partidos ao meio nas telas de dispositivos menores. 