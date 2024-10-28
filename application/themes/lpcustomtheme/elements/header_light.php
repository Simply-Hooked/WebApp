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
<nav class="navbar navbar-expand-lg <?php echo $nav_typ ?> bg-transparent pt-1 pt-md-6 pb-md-4 text-lowercase" data-navbar="fixed">
    <div class="container-fluid mx-lg-9">
        <div class="navbar-left ml-5 ml-lg-0">
            <a class="navbar-brand" href="/">
                <img class="logo-light w-logo" src="<?php echo $view->getThemePath() ?>/assets/my-images/logo-dark.svg" alt="SKOUZ - Dark Logo">
                <img class="logo-dark w-logo" src="<?php echo $view->getThemePath() ?>/assets/my-images/logo-light.svg" alt="SKOUZ Light Logo">
            </a>
        </div>
        <nav class="nav nav-navbar">
            <a class="nav-link lead-3 pt-3 p-0 py-lg-2 pr-lg-1 text-right" href="#" data-toggle="offcanvas" data-target="#skz-offcanvas-menu">
                <div class="btn <?php echo $bg_buttons ?> py-1 px-2">
                    <span class="navbar-toggler-icon"></span>
                </div>
            </a>
            <a class="nav-link lead-3 py-1 py-lg-2 px-0 p text-right" href="#to-top">
                <div class="btn <?php echo $bg_buttons ?> py-1 px-2 scroll-top">
                    <img class="w-40px p-1 logo-dark" src="<?php echo $view->getThemePath() ?>/assets/my-images/arrow-up-dark.svg" alt="To Top icon">
                    <img class="w-40px p-1 logo-light" src="<?php echo $view->getThemePath() ?>/assets/my-images/arrow-up.svg" alt="To Top icon">
                </div>
            </a>
        </nav>
        <div id="skz-offcanvas-menu" class="offcanvas text-white" data-animation="fade" style="background-color: rgba(0,0,0,0.9)">
            <div class="row align-items-center text-center h-100">
                <div class="col-auto mx-auto">
                    <button type="button" class="close position-static" data-dismiss="offcanvas" aria-label="Close">
                        <span class="text-white lead-9" aria-hidden="true">×</span>
                    </button>
                    <ul id="skz-menu" class="nav nav-bold nav-lead flex-column my-7">
                        <li class="nav-item">
                            <a class="nav-link lead-6 fw-800 width-fit-content mx-auto" href="/projekte" data-animation="fade">Projekte</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link has-dropdown lead-6 fw-800 width-fit-content mx-auto" href="/web-solutions">Web Solutions <i aria-hidden="true" class="fa fa-caret-down"></i></a>
                            <nav class="nav nav-center" data-animation="fade">
                                <a class="nav-link lead-2 px-3" href="/web-solutions/websites-und-webanwendungen">Web-Entwicklung</a>
                                <a class="nav-link lead-2 px-3" href="/web-solutions/e-commerce">E-Commerce</a>
                                <a class="nav-link lead-2 px-3" href="/web-solutions/digitales-marketing">Digitales Marketing</a>
                                <a class="nav-link lead-2 px-3" href="/web-solutions/schnittstellenentwicklung">Schnittstellen Entwicklung</a>
                                <a class="nav-link lead-2 px-3" href="/web-solutions/managed-services">Managed Services</a>
                                <a class="nav-link lead-2 px-3" href="/web-solutions/webseitenoptimierung">Webseitenoptimierung</a>
                                <a class="nav-link lead-2 px-3" href="/web-solutions/premium-website-pakete">Premium Website Pakete</a>
                            </nav>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link has-dropdown lead-6 fw-800 width-fit-content mx-auto" href="/enterprise-solutions">Enterprise Solutions <i aria-hidden="true" class="fa fa-caret-down"></i></a>
                            <nav class="nav nav-center" data-animation="fade">
                                <a class="nav-link lead-2 px-3" href="/enterprise-solutions/microsoft-365">Microsoft 365</a>
                                <a class="nav-link lead-2 px-3" href="/enterprise-solutions/prozessdigitalisierung">Prozess Digitalisierung</a>
                                <a class="nav-link lead-2 px-3" href="/enterprise-solutions/collaboration-tools">Collaboration Tools</a>
                            </nav>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link lead-6 fw-800 width-fit-content mx-auto" href="/ueber-uns">Über uns</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link lead-6 fw-800 width-fit-content mx-auto" href="/karriere">Karriere</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link lead-6 fw-800 width-fit-content mx-auto" href="/kontakt">Kontakt</a>
                        </li>
                    </ul>
                    <div class="">
                        <a href="/fuer-agenturen" class="btn btn-round btn-outline-skouz-light btn-outline-skouz-light-icon fs-16">Für Agenturen</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
<!-- /.navbar -->
<div class="shadow-chat"></div>