<?php defined("C5_EXECUTE") or die("Access Denied."); ?>

<div <?php if (isset($class) && trim($class) != "") { ?>class="<?php echo h($class); ?>"<?php } ?>><?php if ($img) { ?><img src="<?php echo $img->getURL(); ?>" alt="<?php echo $img->getTitle(); ?>"/><?php } ?></div>
