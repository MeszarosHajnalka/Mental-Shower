'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mental-shower documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4e4e17b8c848982f5aff564588d6b2b0"' : 'data-target="#xs-components-links-module-AppModule-4e4e17b8c848982f5aff564588d6b2b0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4e4e17b8c848982f5aff564588d6b2b0"' :
                                            'id="xs-components-links-module-AppModule-4e4e17b8c848982f5aff564588d6b2b0"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CreateAccountPageModule.html" data-type="entity-link">CreateAccountPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CreateAccountPageModule-7819df73339d438b99246db0f794dc09"' : 'data-target="#xs-components-links-module-CreateAccountPageModule-7819df73339d438b99246db0f794dc09"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreateAccountPageModule-7819df73339d438b99246db0f794dc09"' :
                                            'id="xs-components-links-module-CreateAccountPageModule-7819df73339d438b99246db0f794dc09"' }>
                                            <li class="link">
                                                <a href="components/CreateAccountPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateAccountPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreateAccountPageRoutingModule.html" data-type="entity-link">CreateAccountPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EnjoyYourDayPageModule.html" data-type="entity-link">EnjoyYourDayPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EnjoyYourDayPageModule-7a8abc92ca0c9a9dc245dc0e34af50ea"' : 'data-target="#xs-components-links-module-EnjoyYourDayPageModule-7a8abc92ca0c9a9dc245dc0e34af50ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EnjoyYourDayPageModule-7a8abc92ca0c9a9dc245dc0e34af50ea"' :
                                            'id="xs-components-links-module-EnjoyYourDayPageModule-7a8abc92ca0c9a9dc245dc0e34af50ea"' }>
                                            <li class="link">
                                                <a href="components/EnjoyYourDayPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EnjoyYourDayPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EnjoyYourDayPageRoutingModule.html" data-type="entity-link">EnjoyYourDayPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreContainerComponentModule.html" data-type="entity-link">ExploreContainerComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExploreContainerComponentModule-6099e2634df78101d8aa570c1ca6f723"' : 'data-target="#xs-components-links-module-ExploreContainerComponentModule-6099e2634df78101d8aa570c1ca6f723"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-6099e2634df78101d8aa570c1ca6f723"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-6099e2634df78101d8aa570c1ca6f723"' }>
                                            <li class="link">
                                                <a href="components/ExploreContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExploreContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FanSpeedPageModule.html" data-type="entity-link">FanSpeedPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FanSpeedPageModule-b7af4703babbf751d609d16815236895"' : 'data-target="#xs-components-links-module-FanSpeedPageModule-b7af4703babbf751d609d16815236895"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FanSpeedPageModule-b7af4703babbf751d609d16815236895"' :
                                            'id="xs-components-links-module-FanSpeedPageModule-b7af4703babbf751d609d16815236895"' }>
                                            <li class="link">
                                                <a href="components/FanSpeedPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FanSpeedPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FanSpeedPageRoutingModule.html" data-type="entity-link">FanSpeedPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ForgetPasswordPageModule.html" data-type="entity-link">ForgetPasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ForgetPasswordPageModule-b1b73079c1435aef46def966044e8f45"' : 'data-target="#xs-components-links-module-ForgetPasswordPageModule-b1b73079c1435aef46def966044e8f45"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ForgetPasswordPageModule-b1b73079c1435aef46def966044e8f45"' :
                                            'id="xs-components-links-module-ForgetPasswordPageModule-b1b73079c1435aef46def966044e8f45"' }>
                                            <li class="link">
                                                <a href="components/ForgetPasswordPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgetPasswordPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ForgetPasswordPageRoutingModule.html" data-type="entity-link">ForgetPasswordPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-d84865d8ebad41fb3c81764d7dcd91c9"' : 'data-target="#xs-components-links-module-HomePageModule-d84865d8ebad41fb3c81764d7dcd91c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-d84865d8ebad41fb3c81764d7dcd91c9"' :
                                            'id="xs-components-links-module-HomePageModule-d84865d8ebad41fb3c81764d7dcd91c9"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link">HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HowDoYouFeelPageModule.html" data-type="entity-link">HowDoYouFeelPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HowDoYouFeelPageModule-2469a09dc6b2d7f7ff83e1c6d974c8e5"' : 'data-target="#xs-components-links-module-HowDoYouFeelPageModule-2469a09dc6b2d7f7ff83e1c6d974c8e5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HowDoYouFeelPageModule-2469a09dc6b2d7f7ff83e1c6d974c8e5"' :
                                            'id="xs-components-links-module-HowDoYouFeelPageModule-2469a09dc6b2d7f7ff83e1c6d974c8e5"' }>
                                            <li class="link">
                                                <a href="components/HowDoYouFeelPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HowDoYouFeelPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HowDoYouFeelPageRoutingModule.html" data-type="entity-link">HowDoYouFeelPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IntroduceStepPageModule.html" data-type="entity-link">IntroduceStepPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IntroduceStepPageModule-a200b0b12da7621d440dee5d2a92d875"' : 'data-target="#xs-components-links-module-IntroduceStepPageModule-a200b0b12da7621d440dee5d2a92d875"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IntroduceStepPageModule-a200b0b12da7621d440dee5d2a92d875"' :
                                            'id="xs-components-links-module-IntroduceStepPageModule-a200b0b12da7621d440dee5d2a92d875"' }>
                                            <li class="link">
                                                <a href="components/IntroduceStepPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntroduceStepPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntroduceStepPageRoutingModule.html" data-type="entity-link">IntroduceStepPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IsThisBetterPageModule.html" data-type="entity-link">IsThisBetterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IsThisBetterPageModule-ff52f9e4bc8ce67842303bec770f0ebb"' : 'data-target="#xs-components-links-module-IsThisBetterPageModule-ff52f9e4bc8ce67842303bec770f0ebb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IsThisBetterPageModule-ff52f9e4bc8ce67842303bec770f0ebb"' :
                                            'id="xs-components-links-module-IsThisBetterPageModule-ff52f9e4bc8ce67842303bec770f0ebb"' }>
                                            <li class="link">
                                                <a href="components/IsThisBetterPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IsThisBetterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IsThisBetterPageRoutingModule.html" data-type="entity-link">IsThisBetterPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SetNewPasswordPageModule.html" data-type="entity-link">SetNewPasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SetNewPasswordPageModule-13803deca1b95a99c78f26713cc90799"' : 'data-target="#xs-components-links-module-SetNewPasswordPageModule-13803deca1b95a99c78f26713cc90799"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SetNewPasswordPageModule-13803deca1b95a99c78f26713cc90799"' :
                                            'id="xs-components-links-module-SetNewPasswordPageModule-13803deca1b95a99c78f26713cc90799"' }>
                                            <li class="link">
                                                <a href="components/SetNewPasswordPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SetNewPasswordPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SetNewPasswordPageRoutingModule.html" data-type="entity-link">SetNewPasswordPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SignInPageModule.html" data-type="entity-link">SignInPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignInPageModule-ea2cca22a2d050e4a02041d686d7497e"' : 'data-target="#xs-components-links-module-SignInPageModule-ea2cca22a2d050e4a02041d686d7497e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignInPageModule-ea2cca22a2d050e4a02041d686d7497e"' :
                                            'id="xs-components-links-module-SignInPageModule-ea2cca22a2d050e4a02041d686d7497e"' }>
                                            <li class="link">
                                                <a href="components/SignInPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignInPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignInPageRoutingModule.html" data-type="entity-link">SignInPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link">Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab1PageModule-e4dd7b03c3bd0b782a78e1b942475857"' : 'data-target="#xs-components-links-module-Tab1PageModule-e4dd7b03c3bd0b782a78e1b942475857"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-e4dd7b03c3bd0b782a78e1b942475857"' :
                                            'id="xs-components-links-module-Tab1PageModule-e4dd7b03c3bd0b782a78e1b942475857"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageRoutingModule.html" data-type="entity-link">Tab1PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link">Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab2PageModule-aaef6f07d89113d09cd5bc8036a5d8a1"' : 'data-target="#xs-components-links-module-Tab2PageModule-aaef6f07d89113d09cd5bc8036a5d8a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-aaef6f07d89113d09cd5bc8036a5d8a1"' :
                                            'id="xs-components-links-module-Tab2PageModule-aaef6f07d89113d09cd5bc8036a5d8a1"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageRoutingModule.html" data-type="entity-link">Tab2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link">Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab3PageModule-9b90f2b7fcd3702215c9f82c00cd642e"' : 'data-target="#xs-components-links-module-Tab3PageModule-9b90f2b7fcd3702215c9f82c00cd642e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-9b90f2b7fcd3702215c9f82c00cd642e"' :
                                            'id="xs-components-links-module-Tab3PageModule-9b90f2b7fcd3702215c9f82c00cd642e"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageRoutingModule.html" data-type="entity-link">Tab3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link">TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-cc5603276d6de4e35729f53a355751b1"' : 'data-target="#xs-components-links-module-TabsPageModule-cc5603276d6de4e35729f53a355751b1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-cc5603276d6de4e35729f53a355751b1"' :
                                            'id="xs-components-links-module-TabsPageModule-cc5603276d6de4e35729f53a355751b1"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link">TabsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VerifyCodePageModule.html" data-type="entity-link">VerifyCodePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VerifyCodePageModule-9ba7b8a89930b27595417813a6e35416"' : 'data-target="#xs-components-links-module-VerifyCodePageModule-9ba7b8a89930b27595417813a6e35416"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerifyCodePageModule-9ba7b8a89930b27595417813a6e35416"' :
                                            'id="xs-components-links-module-VerifyCodePageModule-9ba7b8a89930b27595417813a6e35416"' }>
                                            <li class="link">
                                                <a href="components/VerifyCodePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerifyCodePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VerifyCodePageRoutingModule.html" data-type="entity-link">VerifyCodePageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});