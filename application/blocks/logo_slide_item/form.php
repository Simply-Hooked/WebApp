<?php defined("C5_EXECUTE") or die("Access Denied."); ?>

<div class="form-group">
    <?php
    if (isset($img) && $img > 0) {
        $img_o = File::getByID($img);
        if (!is_object($img_o)) {
            unset($img_o);
        }
    } ?>
    <?php echo $form->label($view->field('img'), t("Image")); ?>
    <?php echo isset($btFieldsRequired) && in_array('img', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo Core::make("helper/concrete/asset_library")->image('ccm-b-logo_slide_item-img-' . $identifier_getString, $view->field('img'), t("Choose Image"), isset($img_o) ? $img_o : null); ?>
</div>

<div class="form-group">
    <?php echo $form->label($view->field('class'), t("Klasse")); ?>
    <?php echo isset($btFieldsRequired) && in_array('class', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo $form->text($view->field('class'), isset($class) ? $class : null, array (
  'maxlength' => 255,
)); ?>
</div>