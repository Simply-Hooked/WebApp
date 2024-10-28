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
        <section class="section overflow-hidden">
            <div class="container px-xl-12">
                <div class="">
                    <?php $a = new GlobalArea('Support Content 1'); $a->display($c); ?>
                </div>
            </div>
            <div class="container px-xl-12">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card shadow-3 hover border-radius-18 bg-white zoom h-100">
                            <div class="card-body pr-7 pt-7 pl-7 pb-0">
                                <?php $a = new GlobalArea('Support Content 2'); $a->display($c); ?>
                            </div>
                            <div class="p-0 text-left">
                                <?php $a = new GlobalArea('Support Content 3'); $a->display($c); ?>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-5 mt-sm-0">
                        <div class="card shadow-3 hover border-radius-18 bg-white zoom">
                            <div class="card-body p-7">
                                <?php $a = new GlobalArea('Support Content 4'); $a->display($c); ?>
                            </div>
                        </div>
                        <div class="card shadow-3 hover border-radius-18 bg-white zoom mt-5" style="background-image: url(<?php echo $view->getThemePath() ?>/assets/images/bg-service.jpg)">
                            <div class="card-body p-7">
                                <div class="row">
                                    <div class="col-lg-6 text-center text-lg-left">
                                        <?php $a = new GlobalArea('Support Content 5'); $a->display($c); ?>
                                    </div>
                                    <div class="col-lg-6 text-center text-lg-left text-center">
                                        <?php $a = new GlobalArea('Support Content 6'); $a->display($c); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
<?php $this->inc('elements/footer.php'); ?>