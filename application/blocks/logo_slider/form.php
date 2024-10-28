<?php defined("C5_EXECUTE") or die("Access Denied."); ?>

<div class="form-group">
    <?php echo $form->label($view->field('stack'), t("Stapel")); ?>
    <?php echo isset($btFieldsRequired) && in_array('stack', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo $form->selectMultiple($view->field('stack'), $stack_options, isset($stack_selected) ? $stack_selected : [], []); ?>
</div>

<script type="text/javascript">
    Concrete.event.publish('logo_slider.stack.stacks');
</script>



<div class="form-group">
    <?php echo $form->label($view->field('autoplay'), t("Autoplay")); ?>
    <?php echo isset($btFieldsRequired) && in_array('autoplay', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo $form->select($view->field('autoplay'), $autoplay_options, isset($autoplay) ? $autoplay : null, []); ?>
</div>

<div class="form-group">
    <?php echo $form->label($view->field('slidescount'), t("Anzahl der Slides")); ?>
    <?php echo isset($btFieldsRequired) && in_array('slidescount', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo $form->select($view->field('slidescount'), $slidescount_options, isset($slidescount) ? $slidescount : null, []); ?>
</div>

<div class="form-group">
    <?php echo $form->label($view->field('datadots'), t("Navigationspunkte anzeigen")); ?>
    <?php echo isset($btFieldsRequired) && in_array('datadots', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo $form->select($view->field('datadots'), $datadots_options, isset($datadots) ? $datadots : null, []); ?>
</div>

<div class="form-group">
    <?php echo $form->label($view->field('navigationarrows'), t("Navigationspfeile anzeigen")); ?>
    <?php echo isset($btFieldsRequired) && in_array('navigationarrows', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo $form->select($view->field('navigationarrows'), $navigationarrows_options, isset($navigationarrows) ? $navigationarrows : null, []); ?>
</div>

<div class="form-group">
    <?php echo $form->label($view->field('class'), t("Klasse")); ?>
    <?php echo isset($btFieldsRequired) && in_array('class', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo $form->text($view->field('class'), isset($class) ? $class : null, array (
  'maxlength' => 255,
)); ?>
</div>