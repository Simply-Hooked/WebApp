<?php
namespace Application\Theme\Lpcustomtheme;
use Concrete\Core\Area\Layout\Preset\Provider\ThemeProviderInterface;
class PageTheme extends \Concrete\Core\Page\Theme\Theme {
    public function registerAssets()
    {
        //$this->Asset('javascript', 'bootstrap/*');
        //$this->requireAsset('javascript', 'jquery');

        //$this->providesAsset('javascript', 'jquery');
        // $this->requireAsset('javascript', 'page/*');
        //$this->providesAsset('javascript', 'bootstrap/*');
    }

    public function getThemeDescription()
    {
        return t('Simply Hooked custom theme');
    }

    public function getThemeName()
    {
        return t('simplyhooked');
    }
    public function getThemeEditorClasses()
    {
        return array(
            array('title' => t('Title Thin'), 'menuClass' => 'title-thin', 'spanClass' => 'title-thin'),
            array('title' => t('Title Caps Bold'), 'menuClass' => 'title-caps-bold', 'spanClass' => 'title-caps-bold'),
            array('title' => t('Title Caps'), 'menuClass' => 'title-caps', 'spanClass' => 'title-caps'),
            array('title' => t('Image Caption'), 'menuClass' => 'image-caption', 'spanClass' => 'image-caption'),
            array('title' => t('Standard Button'), 'menuClass' => '', 'spanClass' => 'btn btn-default'),
            array('title' => t('Success Button'), 'menuClass' => '', 'spanClass' => 'btn btn-success'),
            array('title' => t('Primary Button'), 'menuClass' => '', 'spanClass' => 'btn btn-primary'),
            array('title' => t('Pina Colada Button'), 'menuClass' => '', 'spanClass' => 'pina-colada'),
            array('title' => t('col-md-6'), 'menuClass' => '', 'divClass' => 'col-md-6'),
            array('title' => t('Fußnote'), 'element' => 'small', 'attributes' => array('class' => 'small-2')),
            array('title' => t('Hochgestellt'), 'element' => 'sup', 'attributes' => array('class' => 'small-2')),
            //array('title' => t('Circle Bullet Number'), 'menuClass' => 'bullet-number', 'olClass' => 'bullet-number')
            array('title' => t('Circle Bullet Number Start'), 'element' => array('ol'), 'attributes' => array('class' => 'bullet-number-start')),
            array('title' => t('Circle Bullet Number Continue'), 'element' => array('ol'), 'attributes' => array('class' => 'bullet-number-continue')),
            array('title' => t('Orange Button'), 'element' => array('a'), 'attributes' => array('class' => 'btn btn-primary'))


        );
    }

    public function getThemeAreaLayoutPresets()
    {
        $presets = array(
            array(
                'handle' => 'product_detail_v1',
                'name' => 'Product Detail V1',
                'container' => '<div class="row"></div>',
                'columns' => array(
                    '<div class="col-md-6 col-lg-3"></div>',
                    '<div class="col-md-6 col-lg-3"></div>',
                    '<div class="col-md-6 col-lg-3"></div>',
                    '<div class="col-md-6 col-lg-3"></div>'
                ),
            )
        );
        return $presets;
    }
}