<?php defined("C5_EXECUTE") or die("Access Denied."); ?>
<?php
    $rand = rand(1,9999999999);
?>

    <div class="card<?php if (isset($class) && trim($class) != "") { ?> <?php echo h($class); ?><?php } ?>">
        <h3 class="h5 card-title">
            <?php if (isset($header) && trim($header) != "") { ?><a data-toggle="collapse" href="#collapse-<?php echo $rand; ?>"><?php echo h($header); ?><?php } ?></a>
        </h3>
        <div id="collapse-<?php echo $rand; ?>" class="collapse" data-parent="<?php if (isset($accordionid) && trim($accordionid) != "") { ?>#<?php echo h($accordionid); ?><?php } ?>">
            <div class="card-body">
                <?php if (isset($description_1) && trim($description_1) != "") { ?><?php echo $description_1; ?><?php } ?>
            </div>
        </div>
    </div>






<?php /*if (isset($headerwysiwyg) && trim($headerwysiwyg) != "") { */?><!--<?php /*echo $headerwysiwyg; */?>--><?php /*} */?>
