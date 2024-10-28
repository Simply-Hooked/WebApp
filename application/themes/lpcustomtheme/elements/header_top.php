<?php defined('C5_EXECUTE') or die("Access Denied.");
$nav = Loader::helper('navigation');
$c = Page::getCurrentPage();
$url = $nav->getCollectionURL($c);
$ih = Loader::helper('image');
$site = Site::getSite();
$og_image = '';
$ogimage = $site->getAttribute('og_image');
if($ogimage){
    $og_image = $ogimage->getRelativePath();
}
$ogtitle = $c->getAttribute('meta_title');
$ogurl = $site->getAttribute('og_url');
$ogsitename = $site->getAttribute('og_sitename');
$ogdescription = $site->getAttribute('og_description');

?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta property="og:image" content="<?php echo $og_image; ?>">
    <meta property="og:title" content="<?php echo $ogtitle ?>">
    <meta property="og:url" content="<?php echo $ogurl ?>">
    <meta property="og:site_name" content="<?php echo $ogsitename ?>">
    <meta property="og:description" content="<?php echo $ogdescription ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Styles -->
    <link href="<?php echo $view->getThemePath()?>/assets/css/page.min.css" rel="stylesheet">
    <link href="<?php echo $view->getThemePath()?>/assets/css/style.css" rel="stylesheet">
<!--    <link href="<?php /*echo $view->getThemePath()*/?>/assets/css/custom.css" rel="stylesheet">
-->    <?php  Loader::element('header_required'); ?>

</head>
<body id="body" class="<? $u = new User(); $username = $u->getUserName(); if($u->isLoggedIn()){?>loggedin<?}?>">
<div class="<?= $c->getPageWrapperClass() ?>">
