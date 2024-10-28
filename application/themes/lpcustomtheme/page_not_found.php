<?php
defined('C5_EXECUTE') or die("Access Denied.");
$this->inc('elements/header.php'); ?>





<main class="main-content text-center m-10">
    <div class="container">

        <h1 class="display-1 text-muted mb-7"><?php echo t('404 Error')?></h1>
        <p class="lead"><?php echo t('Page not found.')?></p>
        <br>
        <button class="btn btn-secondary w-150 mr-2" type="button" onclick="window.history.back();">Zurück</button>
        <a class="btn btn-primary w-150" href="/de">Home</a>

    </div>
</main>

<?php  $this->inc('elements/footer.php'); ?>
