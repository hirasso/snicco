var classes = [
    {
        "name": "Snicco\\Bundle\\Testing\\Functional\\AssertableDOM",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertSelectorExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertSelectorNotExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertSelectorTextContains",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertSelectorTextSame",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertSelectorTextNotContains",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertPageTitleSame",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertPageTitleContains",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertInputValueSame",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertInputValueNotSame",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertCheckboxChecked",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertCheckboxNotChecked",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertFormValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertNoFormValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 13,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 13,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 15,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Symfony\\Component\\DomCrawler\\Crawler",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorExists",
            "PHPUnit\\Framework\\Assert",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorExists",
            "PHPUnit\\Framework\\Constraint\\LogicalNot",
            "PHPUnit\\Framework\\Assert",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorExists",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorTextContains",
            "PHPUnit\\Framework\\Constraint\\LogicalAnd",
            "PHPUnit\\Framework\\Assert",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorExists",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorTextSame",
            "PHPUnit\\Framework\\Constraint\\LogicalAnd",
            "PHPUnit\\Framework\\Assert",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorExists",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorTextContains",
            "PHPUnit\\Framework\\Constraint\\LogicalNot",
            "PHPUnit\\Framework\\Constraint\\LogicalAnd",
            "PHPUnit\\Framework\\Assert",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorExists",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorAttributeValueSame",
            "PHPUnit\\Framework\\Constraint\\LogicalAnd",
            "PHPUnit\\Framework\\Assert",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorExists",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorAttributeValueSame",
            "PHPUnit\\Framework\\Constraint\\LogicalNot",
            "PHPUnit\\Framework\\Constraint\\LogicalAnd",
            "PHPUnit\\Framework\\Assert",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorExists",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorAttributeValueSame",
            "PHPUnit\\Framework\\Constraint\\LogicalAnd",
            "PHPUnit\\Framework\\Assert",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorExists",
            "Symfony\\Component\\DomCrawler\\Test\\Constraint\\CrawlerSelectorAttributeValueSame",
            "PHPUnit\\Framework\\Constraint\\LogicalNot",
            "PHPUnit\\Framework\\Constraint\\LogicalAnd",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 147,
        "vocabulary": 20,
        "volume": 635.32,
        "difficulty": 3.74,
        "effort": 2374.1,
        "level": 0.27,
        "bugs": 0.21,
        "time": 132,
        "intelligentContent": 170.02,
        "number_operators": 5,
        "number_operands": 142,
        "number_operators_unique": 1,
        "number_operands_unique": 19,
        "cloc": 0,
        "loc": 68,
        "lloc": 68,
        "mi": 40,
        "mIwoC": 40,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.31,
        "relativeSystemComplexity": 49.31,
        "totalStructuralComplexity": 686,
        "totalDataComplexity": 4.38,
        "totalSystemComplexity": 690.38,
        "package": "Snicco\\Bundle\\Testing\\Functional\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 8,
        "instability": 0.89,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Testing\\Functional\\Concerns\\AuthenticateWithWordPress",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "loginAs",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "logout",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertIsGuest",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertIsAuthenticated",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert"
        ],
        "parents": [],
        "implements": [],
        "lcom": 4,
        "length": 29,
        "vocabulary": 9,
        "volume": 91.93,
        "difficulty": 1.56,
        "effort": 143.64,
        "level": 0.64,
        "bugs": 0.03,
        "time": 8,
        "intelligentContent": 58.83,
        "number_operators": 4,
        "number_operands": 25,
        "number_operators_unique": 1,
        "number_operands_unique": 8,
        "cloc": 6,
        "loc": 30,
        "lloc": 24,
        "mi": 87.68,
        "mIwoC": 55.74,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.25,
        "relativeSystemComplexity": 1.25,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 5,
        "package": "Snicco\\Bundle\\Testing\\Functional\\Concerns\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Testing\\Functional\\Concerns\\CreateWordPressUsers",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "userFactory",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createAdmin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createEditor",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createSubscriber",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createAuthor",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createContributor",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createUserWithRole",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertUserExists",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertUserDoesntExists",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 9,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 11,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "WP_UnitTest_Factory_For_User",
            "WP_User",
            "WP_User",
            "WP_User",
            "WP_User",
            "WP_User",
            "WP_User",
            "Webmozart\\Assert\\Assert",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert"
        ],
        "parents": [],
        "implements": [],
        "lcom": 3,
        "length": 56,
        "vocabulary": 15,
        "volume": 218.79,
        "difficulty": 3.62,
        "effort": 791,
        "level": 0.28,
        "bugs": 0.07,
        "time": 44,
        "intelligentContent": 60.52,
        "number_operators": 9,
        "number_operands": 47,
        "number_operators_unique": 2,
        "number_operands_unique": 13,
        "cloc": 6,
        "loc": 47,
        "lloc": 41,
        "mi": 74.31,
        "mIwoC": 48.03,
        "commentWeight": 26.28,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.17,
        "relativeSystemComplexity": 26.17,
        "totalStructuralComplexity": 225,
        "totalDataComplexity": 10.5,
        "totalSystemComplexity": 235.5,
        "package": "Snicco\\Bundle\\Testing\\Functional\\Concerns\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Testing\\Functional\\WebTestCase",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "setUp",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tearDown",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createKernel",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "extensions",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "withServerVariables",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "withCookies",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "withDataInSession",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "withoutMiddleware",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "withoutExceptionHandling",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEventDispatcher",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMailTransport",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getKernel",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "swapInstance",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBrowser",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "userFactory",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBootedKernel",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createBrowser",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUpExtensions",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tearDownExtensions",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNonBootedKernel",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertBrowserNotCreated",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 21,
        "nbMethods": 21,
        "nbMethodsPrivate": 21,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 31,
        "ccn": 11,
        "ccnMethodMax": 2,
        "externals": [
            "Codeception\\TestCase\\WPTestCase",
            "class",
            "Snicco\\Component\\Session\\ValueObject\\SessionId",
            "LogicException",
            "Snicco\\Component\\Session\\ValueObject\\CookiePool",
            "",
            "Snicco\\Component\\Psr7ErrorHandler\\TestErrorHandler",
            "Snicco\\Component\\EventDispatcher\\Testing\\TestableEventDispatcher",
            "Snicco\\Component\\BetterWPMail\\Testing\\FakeTransport",
            "Webmozart\\Assert\\Assert",
            "Snicco\\Component\\Kernel\\Kernel",
            "Snicco\\Component\\Kernel\\ValueObject\\Environment",
            "Snicco\\Bundle\\Testing\\Functional\\Browser",
            "WP_UnitTest_Factory_For_User",
            "Webmozart\\Assert\\Assert",
            "Snicco\\Component\\Kernel\\Kernel",
            "Snicco\\Bundle\\Testing\\Functional\\Browser",
            "Symfony\\Component\\BrowserKit\\CookieJar",
            "Symfony\\Component\\BrowserKit\\Cookie",
            "Snicco\\Component\\HttpRouting\\Routing\\Admin\\AdminAreaPrefix",
            "Snicco\\Bundle\\Testing\\Functional\\Browser",
            "Snicco\\Component\\Kernel\\Kernel",
            "LogicException",
            "LogicException"
        ],
        "parents": [
            "Codeception\\TestCase\\WPTestCase"
        ],
        "implements": [],
        "lcom": 2,
        "length": 175,
        "vocabulary": 32,
        "volume": 875,
        "difficulty": 9.79,
        "effort": 8562.5,
        "level": 0.1,
        "bugs": 0.29,
        "time": 476,
        "intelligentContent": 89.42,
        "number_operators": 38,
        "number_operands": 137,
        "number_operators_unique": 4,
        "number_operands_unique": 28,
        "cloc": 33,
        "loc": 186,
        "lloc": 153,
        "mi": 60.62,
        "mIwoC": 30.26,
        "commentWeight": 30.36,
        "kanDefect": 1.49,
        "relativeStructuralComplexity": 1225,
        "relativeDataComplexity": 0.29,
        "relativeSystemComplexity": 1225.29,
        "totalStructuralComplexity": 25725,
        "totalDataComplexity": 6.06,
        "totalSystemComplexity": 25731.06,
        "package": "Snicco\\Bundle\\Testing\\Functional\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 17,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Testing\\Functional\\Browser",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lastResponse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lastDOM",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRequest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getResponse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doRequest",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "filterResponse",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "filterRequest",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addHeadersFromServer",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addCookies",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addRequestBody",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addFiles",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 12,
        "nbMethodsPrivate": 7,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 27,
        "ccn": 16,
        "ccnMethodMax": 8,
        "externals": [
            "Symfony\\Component\\BrowserKit\\AbstractBrowser",
            "Snicco\\Bundle\\HttpRouting\\HttpKernel",
            "Snicco\\Bundle\\HttpRouting\\Psr17FactoryDiscovery",
            "Snicco\\Component\\HttpRouting\\Routing\\Admin\\AdminAreaPrefix",
            "Snicco\\Bundle\\HttpRouting\\ApiRequestDetector",
            "Symfony\\Component\\BrowserKit\\History",
            "Symfony\\Component\\BrowserKit\\CookieJar",
            "Snicco\\Component\\HttpRouting\\Testing\\AssertableResponse",
            "Snicco\\Bundle\\Testing\\Functional\\AssertableDOM",
            "LogicException",
            "Snicco\\Bundle\\Testing\\Functional\\AssertableDOM",
            "BadMethodCallException",
            "Snicco\\Component\\HttpRouting\\Testing\\AssertableResponse",
            "Webmozart\\Assert\\Assert",
            "Snicco\\Component\\HttpRouting\\Testing\\AssertableResponse",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Response",
            "Webmozart\\Assert\\Assert",
            "Symfony\\Component\\BrowserKit\\Response",
            "Webmozart\\Assert\\Assert",
            "Symfony\\Component\\BrowserKit\\Response",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Request",
            "Symfony\\Component\\BrowserKit\\Request",
            "Snicco\\Component\\StrArr\\Str",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Request",
            "Psr\\Http\\Message\\ServerRequestInterface",
            "Symfony\\Component\\BrowserKit\\Request",
            "Psr\\Http\\Message\\ServerRequestInterface",
            "Webmozart\\Assert\\Assert",
            "Snicco\\Component\\StrArr\\Str",
            "Snicco\\Component\\StrArr\\Str",
            "Webmozart\\Assert\\Assert",
            "Webmozart\\Assert\\Assert",
            "Snicco\\Component\\StrArr\\Str",
            "Snicco\\Component\\StrArr\\Str",
            "Snicco\\Component\\StrArr\\Str",
            "Snicco\\Component\\StrArr\\Str",
            "Snicco\\Component\\StrArr\\Str",
            "Psr\\Http\\Message\\ServerRequestInterface",
            "Symfony\\Component\\BrowserKit\\Request",
            "Psr\\Http\\Message\\ServerRequestInterface",
            "Webmozart\\Assert\\Assert",
            "Webmozart\\Assert\\Assert",
            "Psr\\Http\\Message\\ServerRequestInterface",
            "Symfony\\Component\\BrowserKit\\Request",
            "Psr\\Http\\Message\\ServerRequestInterface",
            "LogicException",
            "Psr\\Http\\Message\\ServerRequestInterface",
            "Symfony\\Component\\BrowserKit\\Request",
            "Psr\\Http\\Message\\ServerRequestInterface",
            "Webmozart\\Assert\\Assert",
            "Webmozart\\Assert\\Assert"
        ],
        "parents": [
            "Symfony\\Component\\BrowserKit\\AbstractBrowser"
        ],
        "implements": [],
        "lcom": 4,
        "length": 231,
        "vocabulary": 45,
        "volume": 1268.62,
        "difficulty": 13.31,
        "effort": 16882.38,
        "level": 0.08,
        "bugs": 0.42,
        "time": 938,
        "intelligentContent": 95.33,
        "number_operators": 58,
        "number_operands": 173,
        "number_operators_unique": 6,
        "number_operands_unique": 39,
        "cloc": 12,
        "loc": 145,
        "lloc": 133,
        "mi": 51.34,
        "mIwoC": 29.79,
        "commentWeight": 21.55,
        "kanDefect": 1.24,
        "relativeStructuralComplexity": 1764,
        "relativeDataComplexity": 0.27,
        "relativeSystemComplexity": 1764.27,
        "totalStructuralComplexity": 21168,
        "totalDataComplexity": 3.21,
        "totalSystemComplexity": 21171.21,
        "package": "Snicco\\Bundle\\Testing\\Functional\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 18,
        "instability": 0.95,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Testing\\Bundle\\BundleTestHelpers",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [
            {
                "name": "setUp",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tearDown",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fixturesDir",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "newContainer",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertCanBeResolved",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertNotBound",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 6,
        "nbMethodsPrivate": 6,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Snicco\\Bundle\\Testing\\Bundle\\BundleTest",
            "Snicco\\Component\\Kernel\\DIContainer",
            "Snicco\\Component\\Kernel\\Kernel",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert",
            "Snicco\\Component\\Kernel\\Kernel",
            "PHPUnit\\Framework\\Assert",
            "PHPUnit\\Framework\\Assert"
        ],
        "parents": [],
        "implements": [],
        "lcom": 3,
        "length": 35,
        "vocabulary": 14,
        "volume": 133.26,
        "difficulty": 5.6,
        "effort": 746.24,
        "level": 0.18,
        "bugs": 0.04,
        "time": 41,
        "intelligentContent": 23.8,
        "number_operators": 7,
        "number_operands": 28,
        "number_operators_unique": 4,
        "number_operands_unique": 10,
        "cloc": 9,
        "loc": 50,
        "lloc": 41,
        "mi": 80.09,
        "mIwoC": 49.54,
        "commentWeight": 30.55,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0.17,
        "relativeSystemComplexity": 81.17,
        "totalStructuralComplexity": 486,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 487,
        "package": "Snicco\\Bundle\\Testing\\Bundle\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Testing\\Bundle\\BundleTest",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "newContainer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "withoutHttpErrorHandling",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUpDirectories",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removePHPFilesRecursive",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeDirectoryRecursive",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "tearDownDirectories",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 6,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 31,
        "ccn": 26,
        "ccnMethodMax": 12,
        "externals": [
            "Snicco\\Bridge\\Pimple\\PimpleContainerAdapter",
            "Snicco\\Bridge\\Pimple\\PimpleContainerAdapter",
            "Snicco\\Component\\Kernel\\Kernel",
            "Snicco\\Component\\Psr7ErrorHandler\\TestErrorHandler",
            "Snicco\\Component\\Kernel\\ValueObject\\Directories",
            "RuntimeException",
            "RuntimeException",
            "RuntimeException",
            "RuntimeException",
            "Snicco\\Component\\Kernel\\ValueObject\\Directories",
            "RecursiveDirectoryIterator",
            "RecursiveDirectoryIterator",
            "RecursiveIteratorIterator",
            "RuntimeException",
            "RecursiveDirectoryIterator",
            "RecursiveIteratorIterator",
            "RuntimeException",
            "RuntimeException"
        ],
        "parents": [],
        "implements": [],
        "lcom": 4,
        "length": 174,
        "vocabulary": 37,
        "volume": 906.44,
        "difficulty": 11.81,
        "effort": 10701.9,
        "level": 0.08,
        "bugs": 0.3,
        "time": 595,
        "intelligentContent": 76.78,
        "number_operators": 52,
        "number_operands": 122,
        "number_operators_unique": 6,
        "number_operands_unique": 31,
        "cloc": 42,
        "loc": 157,
        "lloc": 115,
        "mi": 66.76,
        "mIwoC": 30.84,
        "commentWeight": 35.91,
        "kanDefect": 2.58,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.21,
        "relativeSystemComplexity": 144.21,
        "totalStructuralComplexity": 1008,
        "totalDataComplexity": 1.46,
        "totalSystemComplexity": 1009.46,
        "package": "Snicco\\Bundle\\Testing\\Bundle\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 7,
        "instability": 0.88,
        "violations": {}
    }
]