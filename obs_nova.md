# Observações Website Nova
### ETVO
- ~~adicionar css e js separado por página~~
- fazer correção para touch screen no drag gallery

### IMOBMARK
- Número de whatsapp não parece ser válido - quando se clica no link ele não aparece o nome "Nova Empreendimentos"
- Links para download do aplicativo (Apple Store e Google Play)
- Favicon
- O cabeçalho responde ao scroll da página, e diminui um pouco de tamanho para dar espaço ao conteúdo
  
### IMPLEMENTAÇÃO
- Na página **A Nova**, nas colunas de vídeos em "Modelo de Construção a Preço de Custo" 
  - Para adicionar um vídeo, basta alterar o atributo `src` do elemento `source`. 
  - Para adicionar uma thumbnail, basta alterar o atributo `poster` do elemento `video` 
- Nas páginas que usam drag-gallery ou dashboard-gallery, o gallery-modal deve estar presente, como segue:
```
  <div class="gallery-modal">
    <div id="overlay"></div>
    <div class="modal-container">
      <button class="close" id="close">
        <span class="bi-x-lg"></span>
      </button>
      <img src="" alt="">
    </div>
  </div>
```
- Defini uma classe auxiliar *`responsive-br`* para que o conteúdo seja mais responsivo
  - `<br class="responsive-br xs">` - Exibida apenas em largura menor que **375px** 
  - `<br class="responsive-br sm">` - Exibida apenas em largura menor que **576px** 
  - `<br class="responsive-br md">` - Exibida apenas em largura menor que **768px**
  - `<br class="responsive-br lg">` - Exibida apenas em largura menor que **992px**
  - `<br class="responsive-br xl">` - Exibida apenas em largura menor que **1200px**
  - `<br class="responsive-br xxl">` - Exibida apenas em largura menor que **1600px**