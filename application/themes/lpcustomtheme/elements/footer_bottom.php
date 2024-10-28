<?php defined('C5_EXECUTE') or die("Access Denied.");

$c = Page::getCurrentPage();

if (!$c->isEditMode()) { ?>

<?php } ?>

<script src="<?php echo $view->getThemePath() ?>/assets/js/gsap.min.js"></script>
<script src="<?php echo $view->getThemePath() ?>/assets/js/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js"></script>


<script src="<?php echo $view->getThemePath() ?>/assets/js/page.min.js"></script>
<script src="<?php echo $view->getThemePath() ?>/assets/js/script.js"></script>

<!--<script src="<?php /*echo $view->getThemePath() */?>/assets/js/custom.js"></script>
-->
<?php Loader::element('footer_required'); ?>


</div>
</body>
</html>
