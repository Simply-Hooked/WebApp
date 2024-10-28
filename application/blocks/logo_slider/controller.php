<?php namespace Application\Block\LogoSlider;

defined("C5_EXECUTE") or die("Access Denied.");

use AssetList;
use CollectionVersion;
use Concrete\Core\Block\BlockController;
use Core;
use Database;
use Stack;
use StackList;

class Controller extends BlockController
{
    public $btFieldsRequired = ['stack'];
    protected $btTable = 'btLogoSlider';
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
        return t("Logo Slider");
    }

    public function getSearchableContent()
    {
        $content = [];
        $content[] = $this->class;
        return implode(" ", $content);
    }

    public function view()
    {
        $db = Database::connection();
        $stack = [];
        if ($stack_entries = $db->fetchAll('SELECT * FROM btLogoSliderStackEntries WHERE bID = ? ORDER BY sortOrder ASC', [$this->bID])) {
            foreach ($stack_entries as $stack_entry) {
                $stack[$stack_entry['stID']] = Stack::getByID($stack_entry['stID']);
            }
        }
        $this->set('stack', $stack);
        $autoplay_options = [
            '' => "-- " . t("None") . " --",
            '1' => "Ja",
            '2' => "Nein"
        ];
        $this->set("autoplay_options", $autoplay_options);
        $slidescount_options = [
            '' => "-- " . t("None") . " --",
            '1' => "1",
            '2' => "2",
            '3' => "3",
            '4' => "4",
            '5' => "5",
            '6' => "6",
            '7' => "7",
            '8' => "8",
            '9' => "9",
            '10' => "10"
        ];
        $this->set("slidescount_options", $slidescount_options);
        $datadots_options = [
            '' => "-- " . t("None") . " --",
            '1' => "Ja",
            '2' => "Nein"
        ];
        $this->set("datadots_options", $datadots_options);
        $navigationarrows_options = [
            '' => "-- " . t("None") . " --",
            '1' => "Ja",
            '2' => "Nein"
        ];
        $this->set("navigationarrows_options", $navigationarrows_options);
    }

    public function delete()
    {
        $db = Database::connection();
        $db->delete('btLogoSliderStackEntries', ['bID' => $this->bID]);
        parent::delete();
    }

    public function duplicate($newBID)
    {
        $db = Database::connection();
        $stack_entries = $db->fetchAll('SELECT * FROM btLogoSliderStackEntries WHERE bID = ? ORDER BY sortOrder ASC', [$this->bID]);
        foreach ($stack_entries as $stack_entry) {
            unset($stack_entry['id']);
            $db->insert('btLogoSliderStackEntries', $stack_entry);
        }
        parent::duplicate($newBID);
    }

    public function add()
    {
        $this->addEdit();
        $stack_selected = [];
        $stack_options = $this->getStacks();
        $this->set('stack_options', $stack_options);
        $this->set('stack_selected', $stack_selected);
    }

    public function edit()
    {
        $db = Database::connection();
        $this->addEdit();
        $stack_selected = [];
        $stack_ordered = [];
        $stack_options = $this->getStacks();
        if ($stack_entries = $db->fetchAll('SELECT * FROM btLogoSliderStackEntries WHERE bID = ? ORDER BY sortOrder ASC', [$this->bID])) {
            foreach ($stack_entries as $stack_entry) {
                $stack_selected[] = $stack_entry['stID'];
            }
            foreach ($stack_selected as $key) {
                if (array_key_exists($key, $stack_options)) {
                    $stack_ordered[$key] = $stack_options[$key];
                    unset($stack_options[$key]);
                }
            }
            $stack_options = $stack_ordered + $stack_options;
        }
        $this->set('stack_options', $stack_options);
        $this->set('stack_selected', $stack_selected);
    }

    protected function addEdit()
    {
        $this->set("autoplay_options", [
                '' => "-- " . t("None") . " --",
                '1' => "Ja",
                '2' => "Nein"
            ]
        );
        $this->set("slidescount_options", [
                '' => "-- " . t("None") . " --",
                '1' => "1",
                '2' => "2",
                '3' => "3",
                '4' => "4",
                '5' => "5",
                '6' => "6",
                '7' => "7",
                '8' => "8",
                '9' => "9",
                '10' => "10"
            ]
        );
        $this->set("datadots_options", [
                '' => "-- " . t("None") . " --",
                '1' => "Ja",
                '2' => "Nein"
            ]
        );
        $this->set("navigationarrows_options", [
                '' => "-- " . t("None") . " --",
                '1' => "Ja",
                '2' => "Nein"
            ]
        );
        $al = AssetList::getInstance();
        $al->register('javascript', 'select2sortable', 'blocks/logo_slider/js_form/select2.sortable.js', [], $this->pkg);
        $al->register('css', 'auto-css-' . $this->btHandle, 'blocks/' . $this->btHandle . '/auto.css', [], $this->pkg);
        $this->requireAsset('css', 'select2');
        $this->requireAsset('javascript', 'select2');
        $this->requireAsset('javascript', 'select2sortable');
        $this->requireAsset('css', 'auto-css-' . $this->btHandle);
        $this->set('btFieldsRequired', $this->btFieldsRequired);
        $this->set('identifier_getString', Core::make('helper/validation/identifier')->getString(18));
    }

    public function save($args)
    {
        $db = Database::connection();
        $stack_entries_db = [];
        $stack_queries = [];
        if ($stack_entries = $db->fetchAll('SELECT * FROM btLogoSliderStackEntries WHERE bID = ? ORDER BY sortOrder ASC', [$this->bID])) {
            foreach ($stack_entries as $stack_entry) {
                $stack_entries_db[] = $stack_entry['id'];
            }
        }
        if (isset($args['stack']) && is_array($args['stack'])) {
            $stack_options = $this->getStacks();
            $i = 0;
            foreach ($args['stack'] as $stackID) {
                if ($stackID > 0 && array_key_exists($stackID, $stack_options)) {
                    $stack_data = [
                        'stID'      => $stackID,
                        'sortOrder' => $i,
                    ];
                    if (!empty($stack_entries_db)) {
                        $stack_entry_db_key = key($stack_entries_db);
                        $stack_entry_db_value = $stack_entries_db[$stack_entry_db_key];
                        $stack_queries['update'][$stack_entry_db_value] = $stack_data;
                        unset($stack_entries_db[$stack_entry_db_key]);
                    } else {
                        $stack_data['bID'] = $this->bID;
                        $stack_queries['insert'][] = $stack_data;
                    }
                    $i++;
                }
            }
        }
        if (!empty($stack_entries_db)) {
            foreach ($stack_entries_db as $stack_entry_db) {
                $stack_queries['delete'][] = $stack_entry_db;
            }
        }
        if (!empty($stack_queries)) {
            foreach ($stack_queries as $type => $values) {
                if (!empty($values)) {
                    switch ($type) {
                        case 'update':
                            foreach ($values as $id => $data) {
                                $db->update('btLogoSliderStackEntries', $data, ['id' => $id]);
                            }
                            break;
                        case 'insert':
                            foreach ($values as $data) {
                                $db->insert('btLogoSliderStackEntries', $data);
                            }
                            break;
                        case 'delete':
                            foreach ($values as $value) {
                                $db->delete('btLogoSliderStackEntries', ['id' => $value]);
                            }
                            break;
                    }
                }
            }
        }
        parent::save($args);
    }

    public function validate($args)
    {
        $e = Core::make("helper/validation/error");
        if (in_array("stack", $this->btFieldsRequired) && (!isset($args['stack']) || (!is_array($args['stack']) || empty($args['stack'])))) {
            $e->add(t("The %s field is required.", t("Stapel")));
        } else {
            $stacksPosted = 0;
            $stacksMin = null;
            $stacksMax = null;
            if (isset($args['stack']) && is_array($args['stack'])) {
                $args['stack'] = array_unique($args['stack']);
                foreach ($args['stack'] as $stID) {
                    if ($st = Stack::getByID($stID)) {
                        $stacksPosted++;
                    }
                }
            }
            if ($stacksMin != null && $stacksMin >= 1 && $stacksPosted < $stacksMin) {
                $e->add(t("The %s field needs a minimum of %s stacks.", t("Stapel"), $stacksMin));
            } elseif ($stacksMax != null && $stacksMax >= 1 && $stacksMax > $stacksMin && $stacksPosted > $stacksMax) {
                $e->add(t("The %s field has a maximum of %s stacks.", t("Stapel"), $stacksMax));
            }
        }
        if ((in_array("autoplay", $this->btFieldsRequired) && (!isset($args["autoplay"]) || trim($args["autoplay"]) == "")) || (isset($args["autoplay"]) && trim($args["autoplay"]) != "" && !in_array($args["autoplay"], ["1", "2"]))) {
            $e->add(t("The %s field has an invalid value.", t("Autoplay")));
        }
        if ((in_array("slidescount", $this->btFieldsRequired) && (!isset($args["slidescount"]) || trim($args["slidescount"]) == "")) || (isset($args["slidescount"]) && trim($args["slidescount"]) != "" && !in_array($args["slidescount"], ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]))) {
            $e->add(t("The %s field has an invalid value.", t("Anzahl der Slides")));
        }
        if ((in_array("datadots", $this->btFieldsRequired) && (!isset($args["datadots"]) || trim($args["datadots"]) == "")) || (isset($args["datadots"]) && trim($args["datadots"]) != "" && !in_array($args["datadots"], ["1", "2"]))) {
            $e->add(t("The %s field has an invalid value.", t("Navigationspunkte anzeigen")));
        }
        if ((in_array("navigationarrows", $this->btFieldsRequired) && (!isset($args["navigationarrows"]) || trim($args["navigationarrows"]) == "")) || (isset($args["navigationarrows"]) && trim($args["navigationarrows"]) != "" && !in_array($args["navigationarrows"], ["1", "2"]))) {
            $e->add(t("The %s field has an invalid value.", t("Navigationspfeile anzeigen")));
        }
        if (in_array("class", $this->btFieldsRequired) && (trim($args["class"]) == "")) {
            $e->add(t("The %s field is required.", t("Klasse")));
        }
        return $e;
    }

    public function composer()
    {
        $al = AssetList::getInstance();
        $al->register('javascript', 'auto-js-' . $this->btHandle, 'blocks/' . $this->btHandle . '/auto.js', [], $this->pkg);
        $this->requireAsset('javascript', 'auto-js-' . $this->btHandle);
        $this->edit();
    }

    private function getStacks()
    {
        $stacksOptions = [];
        $stm = new StackList();
        $stm->filterByUserAdded();
        $stacks = $stm->get();
        foreach ($stacks as $st) {
            $sv = CollectionVersion::get($st, 'ACTIVE');
            $stacksOptions[$st->getCollectionID()] = $sv->getVersionName();
        }
        return $stacksOptions;
    }
}