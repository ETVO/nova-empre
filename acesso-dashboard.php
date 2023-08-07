<!-- ÁREA DO CLIENTE PAGE -->
<?php
include 'partials/header-acesso.html';

include 'pages/acesso/dashboard-heading.html';

if(isset($_GET['page']))
  $active_item = $_GET['page'];

?>

<div class="acesso-dashboard">
  <div class="sidebar">
    <?php include 'pages/acesso/dashboard-menu.php'; ?>
  </div>
  <div class="content">
    <?php 
      if(isset($active_item)){
        include 'pages/acesso/dashboard-content-'.$active_item.'.html';} 
    else
      include 'pages/acesso/dashboard-content-dashboard.html'; 
      ?>
  </div>
</div>

<?php

include 'partials/footer.html';
?>
