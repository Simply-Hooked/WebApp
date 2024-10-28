<?php defined("C5_EXECUTE") or die("Access Denied."); ?>

<div class="form-group">
    <?php echo $form->label($view->field('stack'), t("Stapel")); ?>
    <?php echo isset($btFieldsRequired) && in_array('stack', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo $form->selectMultiple($view->field('stack'), $stack_options, isset($stack_selected) ? $stack_selected : [], []); ?>
</div>

<script type="text/javascript">
    Concrete.event.publish('accordion_container.stack.stacks');
</script>



<div class="form-group">
    <?php echo $form->label($view->field('accordioncontainerid'), t("Akkordion Container ID")); ?>
    <?php echo isset($btFieldsRequired) && in_array('accordioncontainerid', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo $form->text($view->field('accordioncontainerid'), isset($accordioncontainerid) ? $accordioncontainerid : null, array (
  'maxlength' => 255,
)); ?>
</div>

<div class="form-group">
    <?php echo $form->label($view->field('class'), t("Klasse")); ?>
    <?php echo isset($btFieldsRequired) && in_array('class', $btFieldsRequired) ? '<small class="required">' . t('Required') . '</small>' : null; ?>
    <?php echo $form->text($view->field('class'), isset($class) ? $class : null, array (
  'maxlength' => 255,
)); ?>
</div>