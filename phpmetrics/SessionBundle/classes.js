var classes = [
    {
        "name": "Snicco\\Bundle\\Session\\Event\\WPLogout",
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
                "name": "shouldDispatch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "name",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "payload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 3,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Snicco\\Component\\BetterWPHooks\\EventMapping\\MappedHook"
        ],
        "parents": [],
        "implements": [
            "Snicco\\Component\\BetterWPHooks\\EventMapping\\MappedHook"
        ],
        "lcom": 3,
        "length": 8,
        "vocabulary": 4,
        "volume": 16,
        "difficulty": 2,
        "effort": 32,
        "level": 0.5,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 8,
        "number_operators": 4,
        "number_operands": 4,
        "number_operators_unique": 2,
        "number_operands_unique": 2,
        "cloc": 4,
        "loc": 25,
        "lloc": 21,
        "mi": 91.63,
        "mIwoC": 62.59,
        "commentWeight": 29.04,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3.25,
        "relativeSystemComplexity": 3.25,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 13,
        "totalSystemComplexity": 13,
        "package": "Snicco\\Bundle\\Session\\Event\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Session\\Event\\WPLogin",
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
                "name": "shouldDispatch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "name",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "payload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Snicco\\Component\\BetterWPHooks\\EventMapping\\MappedHook",
            "WP_User"
        ],
        "parents": [],
        "implements": [
            "Snicco\\Component\\BetterWPHooks\\EventMapping\\MappedHook"
        ],
        "lcom": 4,
        "length": 12,
        "vocabulary": 5,
        "volume": 27.86,
        "difficulty": 2.33,
        "effort": 65.01,
        "level": 0.43,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 11.94,
        "number_operators": 5,
        "number_operands": 7,
        "number_operators_unique": 2,
        "number_operands_unique": 3,
        "cloc": 4,
        "loc": 27,
        "lloc": 23,
        "mi": 88.12,
        "mIwoC": 60.04,
        "commentWeight": 28.08,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3.5,
        "relativeSystemComplexity": 3.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 14,
        "totalSystemComplexity": 14,
        "package": "Snicco\\Bundle\\Session\\Event\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Session\\DefuseSessionEncryptor",
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
                "name": "encrypt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decrypt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Snicco\\Component\\Session\\SessionEncryptor",
            "Snicco\\Bundle\\Encryption\\DefuseEncryptor"
        ],
        "parents": [],
        "implements": [
            "Snicco\\Component\\Session\\SessionEncryptor"
        ],
        "lcom": 1,
        "length": 12,
        "vocabulary": 5,
        "volume": 27.86,
        "difficulty": 3,
        "effort": 83.59,
        "level": 0.33,
        "bugs": 0.01,
        "time": 5,
        "intelligentContent": 9.29,
        "number_operators": 3,
        "number_operands": 9,
        "number_operators_unique": 2,
        "number_operands_unique": 3,
        "cloc": 0,
        "loc": 17,
        "lloc": 17,
        "mi": 62.91,
        "mIwoC": 62.91,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 5,
        "totalStructuralComplexity": 12,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 15,
        "package": "Snicco\\Bundle\\Session\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Session\\SessionBundle",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "shouldRun",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "configure",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "register",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bootstrap",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "alias",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bindSessionDriver",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bindSessionManager",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateConfig",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bindWPDBSessionDriver",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bindObjectCacheDriver",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bindSessionConfig",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolveSerializer",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "copyConfig",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bindMiddleware",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 14,
        "nbMethods": 14,
        "nbMethodsPrivate": 9,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 33,
        "ccn": 20,
        "ccnMethodMax": 12,
        "externals": [
            "Snicco\\Component\\Kernel\\Bundle",
            "Snicco\\Component\\Kernel\\ValueObject\\Environment",
            "Snicco\\Component\\Kernel\\Configuration\\WritableConfig",
            "Snicco\\Component\\Kernel\\Kernel",
            "Snicco\\Component\\Kernel\\Kernel",
            "InvalidArgumentException",
            "Snicco\\Component\\Kernel\\Kernel",
            "Snicco\\Component\\Kernel\\Kernel",
            "Snicco\\Component\\Session\\Driver\\InMemoryDriver",
            "Snicco\\Bundle\\Session\\DefuseSessionEncryptor",
            "Snicco\\Component\\Session\\Driver\\EncryptedDriver",
            "Snicco\\Component\\Kernel\\Kernel",
            "Snicco\\Component\\Session\\SessionManager\\SessionManger",
            "Snicco\\Component\\Kernel\\Kernel",
            "Snicco\\Component\\Kernel\\Configuration\\WritableConfig",
            "Snicco\\Component\\Session\\ValueObject\\SessionConfig",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "Snicco\\Component\\Kernel\\Kernel",
            "Snicco\\Component\\Kernel\\Configuration\\ReadOnlyConfig",
            "Snicco\\Bridge\\SessionWP\\WPDBSessionDriver",
            "Snicco\\Component\\Kernel\\Kernel",
            "Snicco\\Component\\Kernel\\Configuration\\ReadOnlyConfig",
            "Snicco\\Bridge\\SessionWP\\WPObjectCacheDriver",
            "Snicco\\Component\\Kernel\\Kernel",
            "Snicco\\Component\\Session\\ValueObject\\SessionConfig",
            "Snicco\\Component\\Session\\Serializer\\Serializer",
            "Snicco\\Component\\Kernel\\Kernel",
            "Snicco\\Component\\Session\\Serializer\\JsonSerializer",
            "Snicco\\Component\\Session\\Serializer\\PHPSerializer",
            "Snicco\\Component\\Kernel\\Kernel",
            "RuntimeException",
            "Snicco\\Component\\Kernel\\Kernel",
            "Snicco\\Bundle\\Session\\Middleware\\StatefulRequest"
        ],
        "parents": [],
        "implements": [
            "Snicco\\Component\\Kernel\\Bundle"
        ],
        "lcom": 5,
        "length": 243,
        "vocabulary": 40,
        "volume": 1293.23,
        "difficulty": 20.75,
        "effort": 26834.49,
        "level": 0.05,
        "bugs": 0.43,
        "time": 1491,
        "intelligentContent": 62.32,
        "number_operators": 77,
        "number_operands": 166,
        "number_operators_unique": 8,
        "number_operands_unique": 32,
        "cloc": 11,
        "loc": 151,
        "lloc": 140,
        "mi": 49.01,
        "mIwoC": 28.71,
        "commentWeight": 20.3,
        "kanDefect": 1.2,
        "relativeStructuralComplexity": 841,
        "relativeDataComplexity": 0.51,
        "relativeSystemComplexity": 841.51,
        "totalStructuralComplexity": 11774,
        "totalDataComplexity": 7.1,
        "totalSystemComplexity": 11781.1,
        "package": "Snicco\\Bundle\\Session\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 18,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Session\\Middleware\\ShareSessionWithViews",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "handle",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "Snicco\\Component\\HttpRouting\\Middleware\\Middleware",
            "Psr\\Http\\Message\\ResponseInterface",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Request",
            "Snicco\\Component\\HttpRouting\\Middleware\\NextMiddleware",
            "LogicException",
            "Snicco\\Bundle\\Session\\ValueObject\\SessionErrors"
        ],
        "parents": [
            "Snicco\\Component\\HttpRouting\\Middleware\\Middleware"
        ],
        "implements": [],
        "lcom": 1,
        "length": 26,
        "vocabulary": 10,
        "volume": 86.37,
        "difficulty": 4.07,
        "effort": 351.65,
        "level": 0.25,
        "bugs": 0.03,
        "time": 20,
        "intelligentContent": 21.21,
        "number_operators": 7,
        "number_operands": 19,
        "number_operators_unique": 3,
        "number_operands_unique": 7,
        "cloc": 0,
        "loc": 17,
        "lloc": 17,
        "mi": 59.2,
        "mIwoC": 59.2,
        "commentWeight": 0,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 10,
        "totalStructuralComplexity": 9,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 10,
        "package": "Snicco\\Bundle\\Session\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 6,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Session\\Middleware\\SessionNoCache",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "process",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Psr\\Http\\Server\\MiddlewareInterface",
            "Psr\\Http\\Message\\ResponseInterface",
            "Psr\\Http\\Message\\ServerRequestInterface",
            "Psr\\Http\\Server\\RequestHandlerInterface"
        ],
        "parents": [],
        "implements": [
            "Psr\\Http\\Server\\MiddlewareInterface"
        ],
        "lcom": 1,
        "length": 10,
        "vocabulary": 7,
        "volume": 28.07,
        "difficulty": 1.6,
        "effort": 44.92,
        "level": 0.63,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 17.55,
        "number_operators": 2,
        "number_operands": 8,
        "number_operators_unique": 2,
        "number_operands_unique": 5,
        "cloc": 0,
        "loc": 9,
        "lloc": 9,
        "mi": 68.91,
        "mIwoC": 68.91,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 5,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 5,
        "package": "Snicco\\Bundle\\Session\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Session\\Middleware\\AllowMutableSessionForReadVerbs",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "process",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Psr\\Http\\Server\\MiddlewareInterface",
            "Psr\\Http\\Message\\ResponseInterface",
            "Psr\\Http\\Message\\ServerRequestInterface",
            "Psr\\Http\\Server\\RequestHandlerInterface",
            "LogicException"
        ],
        "parents": [],
        "implements": [
            "Psr\\Http\\Server\\MiddlewareInterface"
        ],
        "lcom": 1,
        "length": 8,
        "vocabulary": 5,
        "volume": 18.58,
        "difficulty": 2,
        "effort": 37.15,
        "level": 0.5,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 9.29,
        "number_operators": 2,
        "number_operands": 6,
        "number_operators_unique": 2,
        "number_operands_unique": 3,
        "cloc": 4,
        "loc": 15,
        "lloc": 11,
        "mi": 104,
        "mIwoC": 68.13,
        "commentWeight": 35.87,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 9.75,
        "totalStructuralComplexity": 9,
        "totalDataComplexity": 0.75,
        "totalSystemComplexity": 9.75,
        "package": "Snicco\\Bundle\\Session\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Session\\Middleware\\StatefulRequest",
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
                "name": "wpLogoutEvent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "wpLoginEvent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "handle",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "maybeInvalidateOrRotate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "withSession",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "emitCookie",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startSession",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateCookiePath",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addSessionCookie",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteStaleSessions",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 11,
        "nbMethodsPrivate": 8,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 27,
        "ccn": 17,
        "ccnMethodMax": 4,
        "externals": [
            "Snicco\\Component\\HttpRouting\\Middleware\\Middleware",
            "Snicco\\Component\\Session\\SessionManager\\SessionManagerInterface",
            "Psr\\Log\\LoggerInterface",
            "Snicco\\Component\\Session\\ValueObject\\CookiePool",
            "Snicco\\Bundle\\Session\\Event\\WPLogin",
            "Snicco\\Component\\Session\\ValueObject\\CookiePool",
            "Psr\\Http\\Message\\ResponseInterface",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Request",
            "Snicco\\Component\\HttpRouting\\Middleware\\NextMiddleware",
            "Snicco\\Component\\Session\\Session",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Request",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Request",
            "Snicco\\Component\\Session\\Session",
            "Snicco\\Component\\Session\\ValueObject\\ReadOnlySession",
            "Snicco\\Component\\Session\\ValueObject\\SessionCookie",
            "Snicco\\Component\\Session\\Session",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Request",
            "Snicco\\Component\\Session\\ValueObject\\CookiePool",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Request",
            "InvalidArgumentException",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Response",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Response",
            "Snicco\\Component\\Session\\ValueObject\\SessionCookie",
            "Snicco\\Component\\HttpRouting\\Http\\Cookie"
        ],
        "parents": [
            "Snicco\\Component\\HttpRouting\\Middleware\\Middleware"
        ],
        "implements": [],
        "lcom": 1,
        "length": 212,
        "vocabulary": 39,
        "volume": 1120.51,
        "difficulty": 20.13,
        "effort": 22554.69,
        "level": 0.05,
        "bugs": 0.37,
        "time": 1253,
        "intelligentContent": 55.67,
        "number_operators": 56,
        "number_operands": 156,
        "number_operators_unique": 8,
        "number_operands_unique": 31,
        "cloc": 20,
        "loc": 148,
        "lloc": 128,
        "mi": 57.36,
        "mIwoC": 30.39,
        "commentWeight": 26.96,
        "kanDefect": 0.99,
        "relativeStructuralComplexity": 1521,
        "relativeDataComplexity": 0.28,
        "relativeSystemComplexity": 1521.28,
        "totalStructuralComplexity": 16731,
        "totalDataComplexity": 3.1,
        "totalSystemComplexity": 16734.1,
        "package": "Snicco\\Bundle\\Session\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 14,
        "instability": 0.93,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Session\\Middleware\\SaveResponseAttributes",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "handle",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "Snicco\\Component\\HttpRouting\\Middleware\\Middleware",
            "Psr\\Http\\Message\\ResponseInterface",
            "Snicco\\Component\\HttpRouting\\Http\\Psr7\\Request",
            "Snicco\\Component\\HttpRouting\\Middleware\\NextMiddleware",
            "LogicException"
        ],
        "parents": [
            "Snicco\\Component\\HttpRouting\\Middleware\\Middleware"
        ],
        "implements": [],
        "lcom": 1,
        "length": 24,
        "vocabulary": 10,
        "volume": 79.73,
        "difficulty": 4.29,
        "effort": 341.68,
        "level": 0.23,
        "bugs": 0.03,
        "time": 19,
        "intelligentContent": 18.6,
        "number_operators": 4,
        "number_operands": 20,
        "number_operators_unique": 3,
        "number_operands_unique": 7,
        "cloc": 0,
        "loc": 18,
        "lloc": 18,
        "mi": 58.9,
        "mIwoC": 58.9,
        "commentWeight": 0,
        "kanDefect": 0.45,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 0.43,
        "relativeSystemComplexity": 36.43,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 0.43,
        "totalSystemComplexity": 36.43,
        "package": "Snicco\\Bundle\\Session\\Middleware\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Session\\Option\\SessionOption",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 0,
        "length": 6,
        "vocabulary": 6,
        "volume": 15.51,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 31.02,
        "number_operators": 0,
        "number_operands": 6,
        "number_operators_unique": 0,
        "number_operands_unique": 6,
        "cloc": 23,
        "loc": 34,
        "lloc": 11,
        "mi": 116.63,
        "mIwoC": 68.81,
        "commentWeight": 47.82,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Snicco\\Bundle\\Session\\Option\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Snicco\\Bundle\\Session\\ValueObject\\SessionErrors",
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
                "name": "hasKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "all",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "count",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 15,
        "ccn": 11,
        "ccnMethodMax": 7,
        "externals": [
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 62,
        "vocabulary": 17,
        "volume": 253.42,
        "difficulty": 9.79,
        "effort": 2481.43,
        "level": 0.1,
        "bugs": 0.08,
        "time": 138,
        "intelligentContent": 25.88,
        "number_operators": 15,
        "number_operands": 47,
        "number_operators_unique": 5,
        "number_operands_unique": 12,
        "cloc": 21,
        "loc": 66,
        "lloc": 45,
        "mi": 83.97,
        "mIwoC": 45.63,
        "commentWeight": 38.34,
        "kanDefect": 1.28,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2.7,
        "relativeSystemComplexity": 3.7,
        "totalStructuralComplexity": 5,
        "totalDataComplexity": 13.5,
        "totalSystemComplexity": 18.5,
        "package": "Snicco\\Bundle\\Session\\ValueObject\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    }
]