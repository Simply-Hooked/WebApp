<?php namespace Application\Block\LogoSlideItem;

defined("C5_EXECUTE") or die("Access Denied.");

use Concrete\Core\Block\BlockController;
use Core;
use File;
use Page;

class Controller extends BlockController
{
    public $btFieldsRequired = ['img'];
    protected $btExportFileColumns = ['img'];
    protected $btTable = 'btLogoSlideItem';
    protected $btInterfaceWidth = 400;
    protected $btInterfaceHeight = 500;
    protected $btIgnorePageThemeGridFrameworkContainer = false;
    protected $btCacheBlockRecord = true;
    protected $btCacheBlockOutput = true;
    protected $btCacheBlockOutputOnPost = true;
    protected $btCacheBlockOutputForRegisteredUsers = true;
    protected $pkg = false;
    
    public function getBlockTypeName()
    {
        return t("Logo Slide Item");
    }

    public function getSearchableContent()
    {
        $content = [];
        $content[] = $this->class;
        return implode(" ", $content);
    }

    public function view()
    {
        
        if ($this->img && ($f = File::getByID($this->img)) && is_object($f)) {
            $this->set("img", $f);
        } else {
            $this->set("img", false);
        }
    }

    public function add()
    {
        $this->addEdit();
    }

    public function edit()
    {
        $this->addEdit();
    }

    protected function addEdit()
    {
        $this->set('btFieldsRequired', $this->btFieldsRequired);
        $this->set('identifier_getString', Core::make('helper/validation/identifier')->getString(18));
    }

    public function save($args)
    {
        $args['img'] = isset($args['img']) && is_numeric($args['img']) ? $args['img'] : 0;
        parent::save($args);
    }

    public function validate($args)
    {
        $e = Core::make("helper/validation/error");
        if (in_array("img", $this->btFieldsRequired) && (trim($args["img"]) == "" || !is_object(File::getByID($args["img"])))) {
            $e->add(t("The %s field is required.", t("Image")));
        }
        if (in_array("class", $this->btFieldsRequired) && (trim($args["class"]) == "")) {
            $e->add(t("The %s field is required.", t("Klasse")));
        }
        return $e;
    }

    public function composer()
    {
        $this->edit();
    }
}