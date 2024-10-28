<?php defined("C5_EXECUTE") or die("Access Denied."); ?>
<?php
if (isset($stack) && !empty($stack)) { ?>
    <div class="accordion accordion-connected accordion-arrow-right<?php if (isset($class) && trim($class) != "") { ?> <?php echo h($class); ?><?php } ?>" <?php if (isset($accordioncontainerid) && trim($accordioncontainerid) != "") { ?>id="<?php echo h($accordioncontainerid); ?>"<?php } ?>>
        <?php foreach ($stack as $stack_stack) {
            $stack_stack->display();
        } ?>
    </div>
<?php } ?>