<?php
defined('C5_EXECUTE') or die("Access Denied.");
$this->inc('elements/header.php');

?>
    <header id="home" class="header text-center text-lg-left overflow-hidden">
        <div class="container">
            <div class="section-header">
                <?php $a = new Area('Zielgruppenansprache Content 1'); $a->display($c); ?>
            </div>
        </div>
    </header>

    <main>
        <section class="section bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto lead-3">
                        <?php $a = new Area('Inhalt'); $a->display($c); ?>
                    </div>
                </div>
            </div>
        </section>
    </main>
<?php $this->inc('elements/footer.php'); ?>