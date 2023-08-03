# Observações Website Nova
- *ETVO*
- apagar vídeo pessoal!!!
- adicionar css e js separado por página

- *IMOBMARK*
- Número de whatsapp não parece ser válido - quando se clica no link ele não aparece o nome "Nova Empreendimentos"
- Links para download do aplicativo (Apple Store e Google Play)
- Favicon
  
- *IMPLEMENTAÇÃO*
- Na coluna com vídeos em "Modelo de Construção a preço de custo", basta adicionar um vídeo, preferencialmente com a seguinte sintaxe:  
`
    <video width="400" height="400">
      <source src="/path/to/video" type="video/mp4">   
      O seu navegador não oferece suporte a vídeos.  
    </video>
`
- Nas páginas que usam drag-gallery ou dashboard-gallery, o gallery-modal deve estar presente, como segue:
`
    <div class="gallery-modal">
    <div id="overlay"></div>
    <div class="modal-container">
      <button class="close" id="close">
        <span class="bi-x-lg"></span>
      </button>
      <img src="" alt="">
    </div>
  </div>
`