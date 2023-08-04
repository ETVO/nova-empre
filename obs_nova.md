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