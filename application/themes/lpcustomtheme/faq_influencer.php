<?php
defined('C5_EXECUTE') or die("Access Denied.");
$this->inc('elements/header.php');
?>
    <header id="home" class="header text-header text-center text-lg-left overflow-hidden mt-7 mt-lg-0 bg-gray">
        <div class="container">
            <div class="section-header">
                <?php $a = new Area('Zielgruppenansprache Content 1'); $a->display($c); ?>
            </div>
        </div>
    </header>

    <main>
        <section class="section overflow-hidden mt-md-7 mt-lg-0">
            <div class="section-header">
                <?php $a = new Area('Thema Preise Content 1'); $a->display($c); ?>
            </div>
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <?php $a = new Area('Thema Preise Content 2'); $a->display($c); ?>
                </div>
            </div>
        </section>
        <section class="section overflow-hidden mt-md-7 mt-lg-0 pt-0">
            <div class="section-header">
                <?php $a = new Area('Thema Leistungen Content 1'); $a->display($c); ?>
            </div>
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <?php $a = new Area('Thema Leistungen Content 2'); $a->display($c); ?>
                </div>
            </div>
        </section>
        <section class="section overflow-hidden mt-md-7 mt-lg-0 pt-0">
            <div class="section-header">
                <?php $a = new Area('Thema Steuern Content 1'); $a->display($c); ?>
            </div>
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <?php $a = new Area('Thema Steuern Content 2'); $a->display($c); ?>
                </div>
            </div>
        </section>

        <section id="simply-hooked-besser-nutzen" class="section">
            <div class="container px-xl-12">
                <div class="section-header">
                    <?php $a = new Area('Zielgruppenansprache 2 Content 1'); $a->display($c); ?>
                </div>
            </div>
            <div class="section overflow-hidden mt-md-7 mt-lg-0">
                <div class="section-header">
                    <?php $a = new Area('Thema Medikit Optimieren Content 1'); $a->display($c); ?>
                </div>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <?php $a = new Area('Thema Medikit Optimieren Content 2'); $a->display($c); ?>
                    </div>
                </div>
            </div>
            <section class="section overflow-hidden mt-md-7 mt-lg-0 pt-0">
                <div class="section-header">
                    <?php $a = new Area('Thema Kampagne finden Content 1'); $a->display($c); ?>
                </div>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <?php $a = new Area('Thema Kampagne finden Content 2'); $a->display($c); ?>

                    </div>
                </div>
            </section>
        </section>
    </main>
<?php $this->inc('elements/footer.php'); ?>