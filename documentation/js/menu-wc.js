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
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
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
                                            'data-target="#components-links-module-AppModule-77ab7018c97bc3ab00412f4714ada4cf"' : 'data-target="#xs-components-links-module-AppModule-77ab7018c97bc3ab00412f4714ada4cf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-77ab7018c97bc3ab00412f4714ada4cf"' :
                                            'id="xs-components-links-module-AppModule-77ab7018c97bc3ab00412f4714ada4cf"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-77ab7018c97bc3ab00412f4714ada4cf"' : 'data-target="#xs-injectables-links-module-AppModule-77ab7018c97bc3ab00412f4714ada4cf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-77ab7018c97bc3ab00412f4714ada4cf"' :
                                        'id="xs-injectables-links-module-AppModule-77ab7018c97bc3ab00412f4714ada4cf"' }>
                                        <li class="link">
                                            <a href="injectables/JwtService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BoardPageModule.html" data-type="entity-link">BoardPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BoardPageModule-593975a640bcf3854cf0a1f37b2e66a5"' : 'data-target="#xs-components-links-module-BoardPageModule-593975a640bcf3854cf0a1f37b2e66a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BoardPageModule-593975a640bcf3854cf0a1f37b2e66a5"' :
                                            'id="xs-components-links-module-BoardPageModule-593975a640bcf3854cf0a1f37b2e66a5"' }>
                                            <li class="link">
                                                <a href="components/BoardPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoardPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BoardPageRoutingModule.html" data-type="entity-link">BoardPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CreateAccountPageModule.html" data-type="entity-link">CreateAccountPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CreateAccountPageModule-69ef4a98eb7a6dc1f25cab2831b28875"' : 'data-target="#xs-components-links-module-CreateAccountPageModule-69ef4a98eb7a6dc1f25cab2831b28875"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreateAccountPageModule-69ef4a98eb7a6dc1f25cab2831b28875"' :
                                            'id="xs-components-links-module-CreateAccountPageModule-69ef4a98eb7a6dc1f25cab2831b28875"' }>
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
                                            'data-target="#components-links-module-EnjoyYourDayPageModule-2fbc60aa8a6fe1b3b9b22a08467b1aba"' : 'data-target="#xs-components-links-module-EnjoyYourDayPageModule-2fbc60aa8a6fe1b3b9b22a08467b1aba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EnjoyYourDayPageModule-2fbc60aa8a6fe1b3b9b22a08467b1aba"' :
                                            'id="xs-components-links-module-EnjoyYourDayPageModule-2fbc60aa8a6fe1b3b9b22a08467b1aba"' }>
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
                                            'data-target="#components-links-module-ExploreContainerComponentModule-780bcefa957524af940381ac7c704d29"' : 'data-target="#xs-components-links-module-ExploreContainerComponentModule-780bcefa957524af940381ac7c704d29"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-780bcefa957524af940381ac7c704d29"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-780bcefa957524af940381ac7c704d29"' }>
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
                                            'data-target="#components-links-module-FanSpeedPageModule-c8dd7fd634cee2a6bde1daf0a93dd6a8"' : 'data-target="#xs-components-links-module-FanSpeedPageModule-c8dd7fd634cee2a6bde1daf0a93dd6a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FanSpeedPageModule-c8dd7fd634cee2a6bde1daf0a93dd6a8"' :
                                            'id="xs-components-links-module-FanSpeedPageModule-c8dd7fd634cee2a6bde1daf0a93dd6a8"' }>
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
                                <a href="modules/FanSpeedUpdatePageModule.html" data-type="entity-link">FanSpeedUpdatePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FanSpeedUpdatePageModule-84e27cd5d6329d4b60a7e472e5f4cb49"' : 'data-target="#xs-components-links-module-FanSpeedUpdatePageModule-84e27cd5d6329d4b60a7e472e5f4cb49"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FanSpeedUpdatePageModule-84e27cd5d6329d4b60a7e472e5f4cb49"' :
                                            'id="xs-components-links-module-FanSpeedUpdatePageModule-84e27cd5d6329d4b60a7e472e5f4cb49"' }>
                                            <li class="link">
                                                <a href="components/FanSpeedUpdatePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FanSpeedUpdatePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FanSpeedUpdatePageRoutingModule.html" data-type="entity-link">FanSpeedUpdatePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FavouritesPageModule.html" data-type="entity-link">FavouritesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FavouritesPageModule-2fab0be621e85ea984249b339f600061"' : 'data-target="#xs-components-links-module-FavouritesPageModule-2fab0be621e85ea984249b339f600061"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FavouritesPageModule-2fab0be621e85ea984249b339f600061"' :
                                            'id="xs-components-links-module-FavouritesPageModule-2fab0be621e85ea984249b339f600061"' }>
                                            <li class="link">
                                                <a href="components/FavouritesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FavouritesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavouritesPageRoutingModule.html" data-type="entity-link">FavouritesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ForgetPasswordPageModule.html" data-type="entity-link">ForgetPasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ForgetPasswordPageModule-1e19abd45c75dc20fac0e9bc1847550d"' : 'data-target="#xs-components-links-module-ForgetPasswordPageModule-1e19abd45c75dc20fac0e9bc1847550d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ForgetPasswordPageModule-1e19abd45c75dc20fac0e9bc1847550d"' :
                                            'id="xs-components-links-module-ForgetPasswordPageModule-1e19abd45c75dc20fac0e9bc1847550d"' }>
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
                                            'data-target="#components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6"' : 'data-target="#xs-components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6"' :
                                            'id="xs-components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6-1"' : 'data-target="#xs-components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6-1"' :
                                            'id="xs-components-links-module-HomePageModule-c267e23fa1f0280b8e18aef635c8b0d6-1"' }>
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
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link">HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HowDoYouFeelPageModule.html" data-type="entity-link">HowDoYouFeelPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HowDoYouFeelPageModule-ef77fd940d4fca7f51355a4e19360174"' : 'data-target="#xs-components-links-module-HowDoYouFeelPageModule-ef77fd940d4fca7f51355a4e19360174"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HowDoYouFeelPageModule-ef77fd940d4fca7f51355a4e19360174"' :
                                            'id="xs-components-links-module-HowDoYouFeelPageModule-ef77fd940d4fca7f51355a4e19360174"' }>
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
                                            'data-target="#components-links-module-IntroduceStepPageModule-ed41c01bfc8dbfe306aca6609952efd3"' : 'data-target="#xs-components-links-module-IntroduceStepPageModule-ed41c01bfc8dbfe306aca6609952efd3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IntroduceStepPageModule-ed41c01bfc8dbfe306aca6609952efd3"' :
                                            'id="xs-components-links-module-IntroduceStepPageModule-ed41c01bfc8dbfe306aca6609952efd3"' }>
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
                                            'data-target="#components-links-module-IsThisBetterPageModule-42fb48786c7c590cf453a36c26cb953c"' : 'data-target="#xs-components-links-module-IsThisBetterPageModule-42fb48786c7c590cf453a36c26cb953c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IsThisBetterPageModule-42fb48786c7c590cf453a36c26cb953c"' :
                                            'id="xs-components-links-module-IsThisBetterPageModule-42fb48786c7c590cf453a36c26cb953c"' }>
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
                                            'data-target="#components-links-module-SetNewPasswordPageModule-1d7187893177123a47eb86e54fe27044"' : 'data-target="#xs-components-links-module-SetNewPasswordPageModule-1d7187893177123a47eb86e54fe27044"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SetNewPasswordPageModule-1d7187893177123a47eb86e54fe27044"' :
                                            'id="xs-components-links-module-SetNewPasswordPageModule-1d7187893177123a47eb86e54fe27044"' }>
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
                                            'data-target="#components-links-module-SignInPageModule-82d57ed97d3f1b44cd3f5bc719cbe8bf"' : 'data-target="#xs-components-links-module-SignInPageModule-82d57ed97d3f1b44cd3f5bc719cbe8bf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignInPageModule-82d57ed97d3f1b44cd3f5bc719cbe8bf"' :
                                            'id="xs-components-links-module-SignInPageModule-82d57ed97d3f1b44cd3f5bc719cbe8bf"' }>
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
                                            'data-target="#components-links-module-Tab1PageModule-26b3fbef498cd9590de792726e177d85"' : 'data-target="#xs-components-links-module-Tab1PageModule-26b3fbef498cd9590de792726e177d85"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-26b3fbef498cd9590de792726e177d85"' :
                                            'id="xs-components-links-module-Tab1PageModule-26b3fbef498cd9590de792726e177d85"' }>
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
                                            'data-target="#components-links-module-Tab2PageModule-125e6091418f26d4330d66c87e324948"' : 'data-target="#xs-components-links-module-Tab2PageModule-125e6091418f26d4330d66c87e324948"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-125e6091418f26d4330d66c87e324948"' :
                                            'id="xs-components-links-module-Tab2PageModule-125e6091418f26d4330d66c87e324948"' }>
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
                                            'data-target="#components-links-module-Tab3PageModule-9ffff3eea2f2c1189892511af453d2ed"' : 'data-target="#xs-components-links-module-Tab3PageModule-9ffff3eea2f2c1189892511af453d2ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-9ffff3eea2f2c1189892511af453d2ed"' :
                                            'id="xs-components-links-module-Tab3PageModule-9ffff3eea2f2c1189892511af453d2ed"' }>
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
                                            'data-target="#components-links-module-TabsPageModule-eb824eb5a0176a523fb06fbb41e0fad1"' : 'data-target="#xs-components-links-module-TabsPageModule-eb824eb5a0176a523fb06fbb41e0fad1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-eb824eb5a0176a523fb06fbb41e0fad1"' :
                                            'id="xs-components-links-module-TabsPageModule-eb824eb5a0176a523fb06fbb41e0fad1"' }>
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
                                            'data-target="#components-links-module-VerifyCodePageModule-c17b15940c94eac7a15f5f24bbdd35ee"' : 'data-target="#xs-components-links-module-VerifyCodePageModule-c17b15940c94eac7a15f5f24bbdd35ee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerifyCodePageModule-c17b15940c94eac7a15f5f24bbdd35ee"' :
                                            'id="xs-components-links-module-VerifyCodePageModule-c17b15940c94eac7a15f5f24bbdd35ee"' }>
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
                            <li class="link">
                                <a href="modules/WaitingPageModule.html" data-type="entity-link">WaitingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WaitingPageModule-14c7f2d382285b2695468150f87f81fd"' : 'data-target="#xs-components-links-module-WaitingPageModule-14c7f2d382285b2695468150f87f81fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WaitingPageModule-14c7f2d382285b2695468150f87f81fd"' :
                                            'id="xs-components-links-module-WaitingPageModule-14c7f2d382285b2695468150f87f81fd"' }>
                                            <li class="link">
                                                <a href="components/WaitingPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WaitingPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WaitingPageRoutingModule.html" data-type="entity-link">WaitingPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/HomePage-1.html" data-type="entity-link">HomePage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Constants.html" data-type="entity-link">Constants</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtService.html" data-type="entity-link">JwtService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
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