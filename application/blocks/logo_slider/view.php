<?php defined("C5_EXECUTE") or die("Access Denied."); ?>

<?php if (trim($autoplay) != "") { ?>
    
<?php switch($autoplay) {
case "1":
    $autoplay = "true"; // ENTER MARKUP HERE FOR FIELD "Autoplay" : CHOICE "Ja"
    break;
case "2":
    $autoplay = "false"; // ENTER MARKUP HERE FOR FIELD "Autoplay" : CHOICE "Nein"
    break;
                                } ?><?php } ?>

<?php if (trim($datadots) != "") { ?>
    
<?php switch($datadots) {
case "1":
    $datadots = "true"; // ENTER MARKUP HERE FOR FIELD "Navigationspunkte anzeigen" : CHOICE "Ja"
    break;
case "2":
    $datadots = "false"; // ENTER MARKUP HERE FOR FIELD "Navigationspunkte anzeigen" : CHOICE "Nein"
    break;
                                } ?><?php } ?>
<?php if (trim($navigationarrows) != "") { ?>
    
<?php switch($navigationarrows) {
case "1":
    $navigationarrows = "true"; // ENTER MARKUP HERE FOR FIELD "Navigationspfeile anzeigen" : CHOICE "Ja"
    break;
case "2":
    $navigationarrows = "false"; // ENTER MARKUP HERE FOR FIELD "Navigationspfeile anzeigen" : CHOICE "Nein"
    break;
} ?>

<?php } ?>


<?php
if (isset($stack) && !empty($stack)) { ?>
    <div class="slider-arrows-flash-dark px-8 slick-slider mt-7<?php if (isset($class) && trim($class) != "") { ?> <?php echo h($class); ?><?php } ?>" data-provide="slider" <?php if (trim($autoplay) != "") { ?>data-autoplay="<?php echo $autoplay; ?>"<?php } ?> <?php if (trim($slidescount) != "") { ?>data-slides-to-show="<?php echo $slidescount; ?>"<?php } ?> <?php if (trim($datadots) != "") { ?>data-dots="<?php echo $datadots; ?>"<?php } ?> <?php if (trim($navigationarrows) != "") { ?>data-arrows="<?php echo $navigationarrows; ?><?php } ?>">
        <?php foreach ($stack as $stack_stack) {
            $stack_stack->display();
        } ?>
    </div>
    <?php
} ?>
