<?php $items = [
  'dashboard' => ['icon' => 'Gauge', 'title' => 'Dashboard'],
  'financeiro' => ['icon' => 'HandCoins', 'title' => 'Financeiro da Obra'],
  'arquivos' => ['title' => 'Arquivos'],
  'acompanhamento' => ['title' => 'Acompanhamento Fotográfico'],
];
$active_item = $active_item ?? 'dashboard'; ?>

<div class="dashboard-menu">
  <nav class="navbar navbar-expand-md">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggler" aria-controls="navToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span class="bi-list"></span>
    </button>
    <div class="collapse navbar-collapse" id="navToggler">
      <ul class="navbar-nav flex-column">
        <?php foreach ($items as $key => $item) :
          $is_active = $key == $active_item; ?>

          <li class="nav-item">
            <a class="nav-link <?= ($is_active) ? 'active' : ''; ?>" <?= ($is_active) ? 'aria-current="page"' : ''; ?> href="?page=<?=$key;?>">
              <?php if (isset($item['icon'])) echo "<img class='icon' src='/assets/img/icons/{$item['icon']}.svg'>"; ?>
              <?php echo $item['title']; ?>
            </a>
          </li>
        <?php endforeach; ?>
        <li class="nav-item">
          <a class="nav-link" href="#">Assembleias</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Boletos Bancários</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contratos</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#"> Declaração de Rendimento</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Livros Contábeis</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Projetos</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Relatórios Mensais</a>
        </li>
      </ul>
    </div>
  </nav>
</div>