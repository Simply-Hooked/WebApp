<?php defined('C5_EXECUTE') or die("Access Denied.");
$nav = Loader::helper('navigation');
$ih = Loader::helper('image');
$c = Page::getCurrentPage();
$id = $c->getCollectionID();
$url = $nav->getCollectionURL($c);
$title = $c->getCollectionName();
$site = Site::getSite();
?>

    <footer class="footer py-7 h-400">
        <div class="container">
            <div class="row gap-y">

                <div class="col-md-6 col-xl-4">
                    <?php $a = new GlobalArea('Footer Column 1 Content 1'); $a->display($c); ?>
                </div>

                <div class="col-6 col-md-3 col-xl-2">
                    <div class="nav flex-column">
                        <?php $a = new GlobalArea('Footer Column 2 Content 1'); $a->display($c); ?>
                    </div>
                </div>

                <div class="col-6 col-md-3 col-xl-2">
                    <div class="nav flex-column">
                        <?php $a = new GlobalArea('Footer Column 3 Content 1'); $a->display($c); ?>
                    </div>
                </div>

                <div class="col-6 col-md-6 col-xl-2">
                    <div class="nav flex-column">
                        <?php $a = new GlobalArea('Footer Column 4 Content 1'); $a->display($c); ?>
                    </div>
                </div>

                <div class="col-6 col-md-6 col-xl-2 text-center">
                    <?php $a = new GlobalArea('Footer Column 4 Content 2'); $a->display($c); ?>
                </div>

            </div>
        </div>
    </footer>
<?php if ($id == "1" || $id == "0") { ?>
    <?php $a = new GlobalArea('Info Modal');
    $a->display($c); ?>
<?php } ?>
<!-- /.footer -->
<?php $this->inc('elements/footer_bottom.php'); ?>