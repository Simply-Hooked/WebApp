<?php defined('C5_EXECUTE') or die("Access Denied.");
$this->inc('elements/header_top.php');
$c = Page::getCurrentPage();
$ms = \Concrete\Core\Multilingual\Page\Section\Section::getBySectionOfSite($c);
$title = strtolower($c->getCollectionName());
$id = $c->getCollectionID();
if ($id == "247") {
    $nav_typ="navbar-dark navbar-stick-dark";
    $bg_buttons="bg-transparent";
}  else {
    $nav_typ="navbar-light navbar-stick-light";
    $bg_buttons="bg-dark";
}
?>
<nav class="navbar navbar-expand-lg navbar-dark d-none d-xl-block">
    <div class="container">

        <div class="navbar-left">
            <a class="navbar-brand" href="/">
                <img class="logo-dark w-250" src="<?php echo $view->getThemePath() ?>/assets/images/logo-simply-hooked-rgb.svg" alt="Simply Hooked logo">
                <img class="logo-light w-250" src="<?php echo $view->getThemePath() ?>/assets/images/logo-simply-hooked-rgb.svg" alt="Simply Hooked logo logo">
            </a>
        </div>
        <p class="m-0 p-0">|</p>
        <div class="navbar-mobile">
            <?php $a = new GlobalArea('Haupnavigation Desktop'); $a->display($c); ?>

            <div>
                <?php $a = new GlobalArea('Haupnavigation Buttonbar'); $a->display($c); ?>
            </div>
        </div>

    </div>
</nav>
<nav class="navbar navbar-expand-lg navbar-dark d-xl-none">
    <div class="container">
        <div class="navbar-left">
            <a class="navbar-brand" href="/">
                <img class="logo-dark" src="<?php echo $view->getThemePath() ?>/assets/images/logo-simply-hooked-rgb.svg" alt="Simply Hooked logo">
                <img class="logo-light" src="<?php echo $view->getThemePath() ?>/assets/images/logo-simply-hooked-rgb.svg" alt="Simply Hooked logo">
            </a>
        </div>
        <div class="d-block">

            <a class="nav-link lead-3 pt-3 p-0 py-lg-2 pr-lg-1 text-right ml-5 float-right" href="#" data-toggle="offcanvas" data-target="#ip-offcanvas-menu">
                <div class="btn py-1 px-2">
                    <span class="ti-menu lead-6 text-dark"></span>
                </div>
            </a>
            <div class="float-right d-none d-lg-block">
                <?php $a = new GlobalArea('Haupnavigation Buttonbar'); $a->display($c); ?>
            </div>
        </div>
        <div id="ip-offcanvas-menu" class="offcanvas text-white" data-animation="fade" style="background-image: linear-gradient(-90deg, #8e6ff6 50%, #5895f4 100%);">
            <div class="row align-items-center text-center h-100">
                <div class="col-auto mx-auto">
                    <button type="button" class="close position-static" data-dismiss="offcanvas" aria-label="Close">
                        <span class="text-white lead-9" aria-hidden="true">×</span>
                    </button>
                    <?php $a = new GlobalArea('Haupnavigation Mobile'); $a->display($c); ?>
                    <?php $a = new GlobalArea('Haupnavigation Mobile Buttonbar'); $a->display($c); ?>


                </div>
            </div>
        </div>

    </div>
</nav>



