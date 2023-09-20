var classes = [
    {
        "name": "Snicco\\Component\\BetterWPCache\\CacheFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "psr6",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "psr16",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "taggable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Snicco\\Component\\BetterWPCache\\WPObjectCachePsr6",
            "Snicco\\Component\\BetterWPCache\\WPObjectCachePsr6",
            "Psr\\SimpleCache\\CacheInterface",
            "Cache\\Bridge\\SimpleCache\\SimpleCacheBridge",
            "Cache\\TagInterop\\TaggableCacheItemPoolInterface",
            "Psr\\Cache\\CacheItemPoolInterface",
            "Cache\\Taggable\\TaggablePSR6PoolAdapter"
        ],
        "parents": [],
        "implements": [],
        "lcom": 3,
        "length": 9,
        "vocabulary": 3,
        "volume": 14.26,
        "difficulty": 1.5,
        "effort": 21.4,
        "level": 0.67,
        "bugs": 0,
        "time": 1,
        "intelligentContent": 9.51,
        "number_operators": 3,
        "number_operands": 6,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 6,
        "loc": 22,
        "lloc": 16,
        "mi": 101.7,
        "mIwoC": 65.52,
        "commentWeight": 36.18,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.33,
        "relativeSystemComplexity": 5.33,
        "totalStructuralComplexity": 12,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 16,
        "package": "Snicco\\Component\\BetterWPCache\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 6,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\BetterWPCache\\WPCacheAPI",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "cacheGetMultiple",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "cacheFlush",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "Snicco\\Component\\BetterWPAPI\\BetterWPAPI",
            "InvalidArgumentException"
        ],
        "parents": [
            "Snicco\\Component\\BetterWPAPI\\BetterWPAPI"
        ],
        "implements": [],
        "lcom": 2,
        "length": 29,
        "vocabulary": 12,
        "volume": 103.96,
        "difficulty": 3.67,
        "effort": 381.2,
        "level": 0.27,
        "bugs": 0.03,
        "time": 21,
        "intelligentContent": 28.35,
        "number_operators": 7,
        "number_operands": 22,
        "number_operators_unique": 3,
        "number_operands_unique": 9,
        "cloc": 18,
        "loc": 40,
        "lloc": 22,
        "mi": 99.16,
        "mIwoC": 56.06,
        "commentWeight": 43.1,
        "kanDefect": 0.52,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3.5,
        "relativeSystemComplexity": 3.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 7,
        "totalSystemComplexity": 7,
        "package": "Snicco\\Component\\BetterWPCache\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\BetterWPCache\\WPObjectCachePsr6",
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
                "name": "__destruct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getItem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getItems",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasItem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "clear",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteItem",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteItems",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "saveDeferred",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "commit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateKey",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "internalDelete",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "internalHas",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateCacheItem",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "internalGet",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "instantiateItem",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "internalGetDeferred",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 18,
        "nbMethods": 18,
        "nbMethodsPrivate": 7,
        "nbMethodsPublic": 11,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 43,
        "ccn": 26,
        "ccnMethodMax": 4,
        "externals": [
            "Psr\\Cache\\CacheItemPoolInterface",
            "Snicco\\Component\\BetterWPCache\\WPCacheAPI",
            "Snicco\\Component\\BetterWPCache\\WPCacheAPI",
            "Snicco\\Component\\BetterWPCache\\WPCacheItem",
            "Psr\\Cache\\CacheItemInterface",
            "Psr\\Cache\\CacheItemInterface",
            "Snicco\\Component\\BetterWPCache\\Exception\\Psr6InvalidArgumentException",
            "Snicco\\Component\\BetterWPCache\\Exception\\Psr6InvalidArgumentException",
            "Snicco\\Component\\BetterWPCache\\Exception\\Psr6InvalidArgumentException",
            "Psr\\Cache\\CacheItemInterface",
            "Snicco\\Component\\BetterWPCache\\Exception\\Psr6InvalidArgumentException",
            "Snicco\\Component\\BetterWPCache\\WPCacheItem",
            "Snicco\\Component\\BetterWPCache\\WPCacheItem",
            "Snicco\\Component\\BetterWPCache\\WPCacheItem",
            "Snicco\\Component\\BetterWPCache\\WPCacheItem",
            "Snicco\\Component\\BetterWPCache\\WPCacheItem",
            "Snicco\\Component\\BetterWPCache\\WPCacheItem"
        ],
        "parents": [],
        "implements": [
            "Psr\\Cache\\CacheItemPoolInterface"
        ],
        "lcom": 1,
        "length": 255,
        "vocabulary": 33,
        "volume": 1286.32,
        "difficulty": 28.16,
        "effort": 36222.79,
        "level": 0.04,
        "bugs": 0.43,
        "time": 2012,
        "intelligentContent": 45.68,
        "number_operators": 79,
        "number_operands": 176,
        "number_operators_unique": 8,
        "number_operands_unique": 25,
        "cloc": 54,
        "loc": 225,
        "lloc": 171,
        "mi": 60.43,
        "mIwoC": 26.02,
        "commentWeight": 34.41,
        "kanDefect": 2.19,
        "relativeStructuralComplexity": 361,
        "relativeDataComplexity": 1.2,
        "relativeSystemComplexity": 362.2,
        "totalStructuralComplexity": 6498,
        "totalDataComplexity": 21.55,
        "totalSystemComplexity": 6519.55,
        "package": "Snicco\\Component\\BetterWPCache\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 5,
        "instability": 0.83,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\BetterWPCache\\Exception\\Psr6InvalidArgumentException",
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
        "externals": [
            "InvalidArgumentException",
            "Psr\\Cache\\InvalidArgumentException"
        ],
        "parents": [
            "InvalidArgumentException"
        ],
        "implements": [
            "Psr\\Cache\\InvalidArgumentException"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Snicco\\Component\\BetterWPCache\\Exception\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 2,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\BetterWPCache\\WPCacheItem",
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
                "name": "getKey",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isHit",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "expiresAt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "expiresAfter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "expirationTimestamp",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "miss",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 4,
        "nbMethodsSetters": 0,
        "wmc": 10,
        "ccn": 6,
        "ccnMethodMax": 4,
        "externals": [
            "Psr\\Cache\\CacheItemInterface",
            "Snicco\\Component\\BetterWPCache\\Exception\\Psr6InvalidArgumentException",
            "DateTime",
            "Snicco\\Component\\BetterWPCache\\Exception\\Psr6InvalidArgumentException",
            "Snicco\\Component\\BetterWPCache\\WPCacheItem"
        ],
        "parents": [],
        "implements": [
            "Psr\\Cache\\CacheItemInterface"
        ],
        "lcom": 2,
        "length": 69,
        "vocabulary": 14,
        "volume": 262.71,
        "difficulty": 12.5,
        "effort": 3283.84,
        "level": 0.08,
        "bugs": 0.09,
        "time": 182,
        "intelligentContent": 21.02,
        "number_operators": 24,
        "number_operands": 45,
        "number_operators_unique": 5,
        "number_operands_unique": 9,
        "cloc": 21,
        "loc": 87,
        "lloc": 66,
        "mi": 77.05,
        "mIwoC": 42.56,
        "commentWeight": 34.49,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 2.93,
        "relativeSystemComplexity": 6.93,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 26.33,
        "totalSystemComplexity": 62.33,
        "package": "Snicco\\Component\\BetterWPCache\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 5,
        "instability": 0.63,
        "violations": {}
    }
]