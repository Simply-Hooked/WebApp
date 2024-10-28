<?php defined("C5_EXECUTE") or die("Access Denied."); ?>

<div class="form-group">
    <?php echo $form->label($view->field('accordionid'), t("Akkordion ID") . ' <i class="fa fa-question-circle launch-tooltip" data-bs-original-title="' . t("Muss der Akkordion ID des Akkordion-Containers (STACK) übereinstimmen") . '"></i>'); ?>
    <?php echo isset($btFieldsRequired) && in_array('accordionid', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo $form->text($view->field('accordionid'), isset($accordionid) ? $accordionid : null, array (
  'maxlength' => 255,
)); ?>
</div>

<div class="form-group">
    <?php echo $form->label($view->field('header'), t("Überschrift")); ?>
    <?php echo isset($btFieldsRequired) && in_array('header', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo $form->text($view->field('header'), isset($header) ? $header : null, array (
  'maxlength' => 255,
)); ?>
</div>

<div class="form-group">
    <?php echo $form->label($view->field('description_1'), t("Beschreibung")); ?>
    <?php echo isset($btFieldsRequired) && in_array('description_1', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo Core::make('editor')->outputBlockEditModeEditor($view->field('description_1'), isset($description_1) ? $description_1 : null); ?>
</div>

<div class="form-group">
    <?php echo $form->label($view->field('headerwysiwyg'), t("Überschrift WYSIWYG")); ?>
    <?php echo isset($btFieldsRequired) && in_array('headerwysiwyg', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo Core::make('editor')->outputBlockEditModeEditor($view->field('headerwysiwyg'), isset($headerwysiwyg) ? $headerwysiwyg : null); ?>
</div>

<div class="form-group">
    <?php echo $form->label($view->field('class'), t("Klasse")); ?>
    <?php echo isset($btFieldsRequired) && in_array('class', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo $form->text($view->field('class'), isset($class) ? $class : null, array (
  'maxlength' => 255,
)); ?>
</div>