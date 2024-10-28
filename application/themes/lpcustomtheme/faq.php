<?php
defined('C5_EXECUTE') or die("Access Denied.");
$this->inc('elements/header.php');
?>
    <header id="home" class="header text-header text-center text-lg-left overflow-hidden mt-7 mt-lg-0">
        <div class="container">
            <div class="section-header">
                <h1 class="display-4 fw-900 lh-1">FAQ</h1>
            </div>
            <div class="row py-7">
                <div class="col-lg-4 br-1 border-black">
                    <div class="card h-100">
                        <div class="card-body">
                            <?php $a = new GlobalArea('FAQ Fork Column 1 Content 1'); $a->display($c); ?>
                        </div>
                        <div class="card-footer bt-0">
                            <?php $a = new GlobalArea('FAQ Fork Column 1 Content 2'); $a->display($c); ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 br-1 border-black">
                    <div class="card h-100">
                        <div class="card-body">
                            <?php $a = new GlobalArea('FAQ Fork Column 2 Content 1'); $a->display($c); ?>
                        </div>
                        <div class="card-footer bt-0">
                            <?php $a = new GlobalArea('FAQ Fork Column 2 Content 2'); $a->display($c); ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <?php $a = new GlobalArea('FAQ Fork Column 3 Content 1'); $a->display($c); ?>
                        </div>
                        <div class="card-footer bt-0">
                            <?php $a = new GlobalArea('FAQ Fork Column 3 Content 2'); $a->display($c); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

<?php $this->inc('elements/footer.php'); ?>