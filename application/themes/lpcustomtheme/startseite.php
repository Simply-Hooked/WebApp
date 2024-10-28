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
                    <?php /*$a = new Area('Logo Slider Content 2'); $a->display($c); */?>

                </div>
            </div>
        </section>
        <section class="section d-none d-sm-block">
            <div class="container">
                <div class="section-header">
                    <?php $a = new Area('Testimonials Content 1'); $a->display($c); ?>
                </div>
                <div class="row align-items-center">

                    <div class="col-sm-5 col-md-6 col-xl-4">
                        <div class="video-wrapper rounded-lg">
                            <?php $a = new Area('Testimonials Content 2'); $a->display($c); ?>
                        </div>
                    </div>
                    <div class="col-sm-7 col-md-6 col-xl-5">
                        <?php $a = new Area('Testimonials Content 3'); $a->display($c); ?>
                    </div>
                    <div class="d-none d-xl-block col-xl-3">
                        <?php $a = new Area('Testimonials Content 3 d-xl'); $a->display($c); ?>
                    </div>
                </div>
                <div class="row mt-5 mt-lg-n9 mt-xl-n9 align-items-center">
                    <div class="d-none d-xl-block col-xl-3 text-right">
                        <?php $a = new Area('Testimonials Content 4 d-xl'); $a->display($c); ?>
                    </div>
                    <div class="col-sm-7 col-md-6 col-xl-5">
                        <?php $a = new Area('Testimonials Content 5'); $a->display($c); ?>
                    </div>
                    <div class="col-sm-5 col-md-6 col-xl-4">
                        <div class="video-wrapper rounded-lg">
                            <?php $a = new Area('Testimonials Content 6'); $a->display($c); ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section d-sm-none">
            <div class="container">
                <div class="section-header">
                    <?php $a = new Area('Testimonials Content 1'); $a->display($c); ?>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="video-wrapper rounded-lg">
                            <?php $a = new Area('Testimonials Content 2'); $a->display($c); ?>
                        </div>
                        <div class="ml-3 mt-5">
                            <?php $a = new Area('Testimonials Content 3'); $a->display($c); ?>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="video-wrapper rounded-lg">
                            <?php $a = new Area('Testimonials Content 6'); $a->display($c); ?>
                        </div>
                        <div class="ml-3 mt-6">
                            <?php $a = new Area('Testimonials Content 5'); $a->display($c); ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <div class="clearfix"></div>

        <section id="unternehmen-schritte" class="section overflow-hidden pt-0">
            <div class="side-scroll section-c">
                <div class="container-fluid z-index-10">
                    <div class="row gap-y">
                        <div class="col-12 col-md-12 mx-auto text-center">
                            <div class="side-scroll-container">
                                <div class="container-fluid text-left">
                                    <?php $a = new Area('Simply zur Kampagne Content 1'); $a->display($c); ?>
                                </div>
                                <div class="side-scroll-list-wrapper trigger mt-8 mh-400">
                                    <ul class="list-unstyled side-scroll-list cards px-lg-9 mh-400">
                                        <li class="side-scroll-item card-c text-left">
                                            <div class="card shadow-3 h-100">
                                                <div class="card-body p-5 p-md-7">
                                                    <div class="row h-100 align-items-center">
                                                        <div class="col-7 col-md-6">
                                                            <?php $a = new Area('Simply zur Kampagne Card 1 Content 1'); $a->display($c); ?>
                                                        </div>
                                                        <div class="col-5 col-md-6 text-center">
                                                            <?php $a = new Area('Simply zur Kampagne Card 1 Content 2'); $a->display($c); ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="side-scroll-item card-c text-left">
                                            <div class="card shadow-3 h-100">
                                                <div class="card-body p-5 p-md-7">
                                                    <div class="row h-100 align-items-center">
                                                        <div class="col-7 col-md-6">
                                                            <?php $a = new Area('Simply zur Kampagne Card 2 Content 1'); $a->display($c); ?>
                                                        </div>
                                                        <div class="col-5 col-md-6 text-center">
                                                            <?php $a = new Area('Simply zur Kampagne Card 2 Content 2'); $a->display($c); ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="side-scroll-item card-c text-left">
                                            <div class="card shadow-3 h-100">
                                                <div class="card-body p-5 p-md-7">
                                                    <div class="row h-100 align-items-center">
                                                        <div class="col-7 col-md-6">
                                                            <?php $a = new Area('Simply zur Kampagne Card 3 Content 1'); $a->display($c); ?>
                                                        </div>
                                                        <div class="col-5 col-md-6 text-center">
                                                            <?php $a = new Area('Simply zur Kampagne Card 3 Content 2'); $a->display($c); ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="side-scroll-item card-c text-left">
                                            <div class="card shadow-3 h-100">
                                                <div class="card-body p-5 p-md-7">
                                                    <div class="row h-100 align-items-center">
                                                        <div class="col-7 col-md-6">
                                                            <?php $a = new Area('Simply zur Kampagne Card 4 Content 1'); $a->display($c); ?>
                                                        </div>
                                                        <div class="col-5 col-md-6 text-center">
                                                            <?php $a = new Area('Simply zur Kampagne Card 4 Content 2'); $a->display($c); ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="side-scroll-item card-c text-left">
                                            <div class="card shadow-3 h-100">
                                                <div class="card-body p-5 p-md-7">
                                                    <div class="row h-100 align-items-center">
                                                        <div class="col-7 col-md-6">
                                                            <?php $a = new Area('Simply zur Kampagne Card 5 Content 1'); $a->display($c); ?>
                                                        </div>
                                                        <div class="col-5 col-md-6 text-center">
                                                            <?php $a = new Area('Simply zur Kampagne Card 5 Content 2'); $a->display($c); ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="side-scroll-item card-c text-left lastscrollcard">
                                            <div class="row h-100 align-items-center">
                                                <div class="col-md-12 text-center">
                                                    <div class="card h-100">
                                                        <div class="card-body px-7 px-sm-0">
                                                            <?php $a = new Area('Simply zur Kampagne Card 6 Content 1'); $a->display($c); ?>
                                                        </div>
                                                    </div>
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
        <div class="clearfix"></div>
        <section class="section overflow-hidden">
            <div class="container px-5 px-xl-12">
                <div class="p-7" style="background-image: linear-gradient(-90deg, #8e6ff6 50%, #5895f4 100%); border-radius: 50px;">
                    <div class="row align-items-center h-100">
                        <div class="col-md-8 mx-auto text-white text-center">
                            <?php $a = new Area('CTA Content 1'); $a->display($c); ?>
                        </div>
                        <!--<div class="col-md-4 d-none d-md-block">
                            <?php /*$a = new Area('CTA Content 2'); $a->display($c); */?>
                        </div>-->
                    </div>
                </div>
            </div>
        </section>

        <section class="section overflow-hidden bg-gray">
            <div class="container-wide">
                <div class="text-center">
                    <?php $a = new Area('Vorteile Content 1'); $a->display($c); ?>
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