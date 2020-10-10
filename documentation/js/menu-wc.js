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
                    <a href="index.html" data-type="index-link">flight-search documentation</a>
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
                                <a href="modules/ApiModule.html" data-type="entity-link">ApiModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ApiModule-5d5f2df6bb198f453637f708afb34c34"' : 'data-target="#xs-injectables-links-module-ApiModule-5d5f2df6bb198f453637f708afb34c34"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ApiModule-5d5f2df6bb198f453637f708afb34c34"' :
                                        'id="xs-injectables-links-module-ApiModule-5d5f2df6bb198f453637f708afb34c34"' }>
                                        <li class="link">
                                            <a href="injectables/FlightDestinationsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FlightDestinationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-52d0241775e5a9103aad17577e52b4c1"' : 'data-target="#xs-components-links-module-AppModule-52d0241775e5a9103aad17577e52b4c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-52d0241775e5a9103aad17577e52b4c1"' :
                                            'id="xs-components-links-module-AppModule-52d0241775e5a9103aad17577e52b4c1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedSearchModule.html" data-type="entity-link">SharedSearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedSearchModule-0ae22ae46bf5d59a1e534f9bc1de6142"' : 'data-target="#xs-components-links-module-SharedSearchModule-0ae22ae46bf5d59a1e534f9bc1de6142"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedSearchModule-0ae22ae46bf5d59a1e534f9bc1de6142"' :
                                            'id="xs-components-links-module-SharedSearchModule-0ae22ae46bf5d59a1e534f9bc1de6142"' }>
                                            <li class="link">
                                                <a href="components/FlightListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FlightListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchResultsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchResultsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchSummaryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchSummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedSearchModule-0ae22ae46bf5d59a1e534f9bc1de6142"' : 'data-target="#xs-injectables-links-module-SharedSearchModule-0ae22ae46bf5d59a1e534f9bc1de6142"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedSearchModule-0ae22ae46bf5d59a1e534f9bc1de6142"' :
                                        'id="xs-injectables-links-module-SharedSearchModule-0ae22ae46bf5d59a1e534f9bc1de6142"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationServiceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthenticationServiceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FlightDestinationsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FlightDestinationsService</a>
                                        </li>
                                    </ul>
                                </li>
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
                                <a href="classes/Configuration.html" data-type="entity-link">Configuration</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomHttpUrlEncodingCodec.html" data-type="entity-link">CustomHttpUrlEncodingCodec</a>
                            </li>
                            <li class="link">
                                <a href="classes/FlightSearchStateModel.html" data-type="entity-link">FlightSearchStateModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetFlightList.html" data-type="entity-link">GetFlightList</a>
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
                                    <a href="injectables/AuthenticationServiceService.html" data-type="entity-link">AuthenticationServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FlightDestinationsService.html" data-type="entity-link">FlightDestinationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FlightSearchState.html" data-type="entity-link">FlightSearchState</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link">TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link">Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationParameters.html" data-type="entity-link">ConfigurationParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CurrencyDictionary.html" data-type="entity-link">CurrencyDictionary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Dictionaries.html" data-type="entity-link">Dictionaries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Error400.html" data-type="entity-link">Error400</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Error404.html" data-type="entity-link">Error404</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Error500.html" data-type="entity-link">Error500</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FlightDestination.html" data-type="entity-link">FlightDestination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FlightDestinationLinks.html" data-type="entity-link">FlightDestinationLinks</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FlightDestinations.html" data-type="entity-link">FlightDestinations</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISearchFilter.html" data-type="entity-link">ISearchFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Issue.html" data-type="entity-link">Issue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IssueSource.html" data-type="entity-link">IssueSource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Links.html" data-type="entity-link">Links</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocationDictionary.html" data-type="entity-link">LocationDictionary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meta.html" data-type="entity-link">Meta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Price.html" data-type="entity-link">Price</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
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