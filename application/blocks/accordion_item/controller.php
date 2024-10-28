<?php namespace Application\Block\AccordionItem;

defined("C5_EXECUTE") or die("Access Denied.");

use Concrete\Core\Block\BlockController;
use Concrete\Core\Editor\LinkAbstractor;
use Core;

class Controller extends BlockController
{
    public $btFieldsRequired = ['accordionid', 'header', 'description_1'];
    protected $btTable = 'btAccordionItem';
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
        return t("Akkordion Element");
    }

    public function getSearchableContent()
    {
        $content = [];
        $content[] = $this->accordionid;
        $content[] = $this->header;
        $content[] = $this->description_1;
        $content[] = $this->headerwysiwyg;
        $content[] = $this->class;
        return implode(" ", $content);
    }

    public function view()
    {
        $this->set('description_1', LinkAbstractor::translateFrom($this->description_1));
        $this->set('headerwysiwyg', LinkAbstractor::translateFrom($this->headerwysiwyg));
    }

    public function add()
    {
        $this->addEdit();
    }

    public function edit()
    {
        $this->addEdit();
        
        $this->set('description_1', LinkAbstractor::translateFromEditMode($this->description_1));
        
        $this->set('headerwysiwyg', LinkAbstractor::translateFromEditMode($this->headerwysiwyg));
    }

    protected function addEdit()
    {
        $this->set('btFieldsRequired', $this->btFieldsRequired);
        $this->set('identifier_getString', Core::make('helper/validation/identifier')->getString(18));
    }

    public function save($args)
    {
        $args['description_1'] = LinkAbstractor::translateTo($args['description_1']);
        $args['headerwysiwyg'] = LinkAbstractor::translateTo($args['headerwysiwyg']);
        parent::save($args);
    }

    public function validate($args)
    {
        $e = Core::make("helper/validation/error");
        if (in_array("accordionid", $this->btFieldsRequired) && (trim($args["accordionid"]) == "")) {
            $e->add(t("The %s field is required.", t("Akkordion ID")));
        }
        if (in_array("header", $this->btFieldsRequired) && (trim($args["header"]) == "")) {
            $e->add(t("The %s field is required.", t("Überschrift")));
        }
        if (in_array("description_1", $this->btFieldsRequired) && (trim($args["description_1"]) == "")) {
            $e->add(t("The %s field is required.", t("Beschreibung")));
        }
        if (in_array("headerwysiwyg", $this->btFieldsRequired) && (trim($args["headerwysiwyg"]) == "")) {
            $e->add(t("The %s field is required.", t("Überschrift WYSIWYG")));
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