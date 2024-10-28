<?php
defined('C5_EXECUTE') or die("Access Denied.");
$this->inc('elements/header.php');
?>
    <header id="home" class="header text-center text-xl-left overflow-hidden mt-7 mt-lg-0">
        <div class="container-wide pr-none pl-none">
            <div class="row align-items-center h-100 py-7">
                <div class="col-xl-5 offset-xl-1">
                    <div class="px-3 px-lg-7 px-xl-0">
                        <?php $a = new Area('Zielgruppenansprache Content 1'); $a->display($c); ?>
                    </div>
                </div>
                <div class="col-xl-5 ml-auto">
                    <?php $a = new Area('Zielgruppenansprache Content 2'); $a->display($c); ?>
                </div>
            </div>
        </div>
    </header>
    <main>
        <section class="section bg-gray">
            <div class="container">
                <div class="text-center">
                    <?php $a = new Area('Logo Slider Content 1'); $a->display($c); ?>
                    <?php $a = new GlobalArea('Global Logo Slider'); $a->display($c); ?>
                </div>
            </div>
        </section>
        <section id="agenturen" class="section overflow-hidden pt-0">
            <div class="side-scroll section-c">
                <div class="container-fluid z-index-10">
                    <div class="row gap-y">
                        <div class="col-12 col-md-12 mx-auto text-center">
                            <div class="side-scroll-container">
                                <div class="side-scroll-list-wrapper trigger mt-11">
                                    <ul class="list-unstyled side-scroll-list cards px-lg-9 mh-400">
                                        <li class="side-scroll-item side-scroll-item-wide card-c text-left">
                                            <div class="card h-100">
                                                <div class="card-body p-7">
                                                    <?php $a = new Area('Was ist Simply Hooked Card 1 Content 1'); $a->display($c); ?>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="side-scroll-item side-scroll-item-wide card-c text-left lastscrollcard">
                                            <div class="card h-100">
                                                <div class="card-body p-7">
                                                    <?php $a = new Area('Was ist Simply Hooked Card 2 Content 1'); $a->display($c); ?>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--<div class="row mb-7">
                        <div class="col-md-12">
                            <div class="text-center">
                                <p class="ls-3 text-black">technische exzellenz</p>
                            </div>
                        </div>
                    </div>-->
                </div>
            </div>
        </section>

        <section class="section overflow-hidden bg-gray">
            <div class="container-wide">
                <div class="text-center">
                    <?php $a = new GlobalArea('Vorteile Content'); $a->display($c); ?>
                </div>
            </div>
            <div class="container mt-7">
                <div class="row mt-7 gap-y">
                    <div class="col-md-4 text-center">
                        <?php $a = new GlobalArea('Vorteile Unternehmen Content 2'); $a->display($c); ?>
                    </div>
                    <div class="col-md-4 text-center">
                        <?php $a = new GlobalArea('Vorteile Unternehmen Content 3'); $a->display($c); ?>
                    </div>
                    <div class="col-md-4 text-center">
                        <?php $a = new GlobalArea('Vorteile Unternehmen Content 4'); $a->display($c); ?>
                    </div>
                    <div class="col-md-4 text-center">
                        <?php $a = new GlobalArea('Vorteile Unternehmen Content 5'); $a->display($c); ?>
                    </div>
                    <div class="col-md-4 text-center">
                        <?php $a = new GlobalArea('Vorteile Unternehmen Content 6'); $a->display($c); ?>
                    </div>
                    <div class="col-md-4 text-center">
                        <?php $a = new GlobalArea('Vorteile Unternehmen Content 7'); $a->display($c); ?>
                    </div>
                    <!--<div class="col-md-12">
                        <img src="<?php /*echo $view->getThemePath() */?>/assets/images/heroshot-tmp.jpg" alt="...">
                    </div>-->
                </div>
            </div>
        </section>
    </main>
<?php $this->inc('elements/footer.php'); ?>