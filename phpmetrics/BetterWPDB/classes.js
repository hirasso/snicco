var classes = [
    {
        "name": "Snicco\\Component\\BetterWPDB\\Exception\\QueryException",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromMysqliE",
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
            "RuntimeException",
            "mysqli_sql_exception"
        ],
        "parents": [
            "RuntimeException"
        ],
        "implements": [],
        "lcom": 2,
        "length": 50,
        "vocabulary": 23,
        "volume": 226.18,
        "difficulty": 8.09,
        "effort": 1830.63,
        "level": 0.12,
        "bugs": 0.08,
        "time": 102,
        "intelligentContent": 27.94,
        "number_operators": 13,
        "number_operands": 37,
        "number_operators_unique": 7,
        "number_operands_unique": 16,
        "cloc": 8,
        "loc": 31,
        "lloc": 23,
        "mi": 88.68,
        "mIwoC": 53.27,
        "commentWeight": 35.41,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.88,
        "relativeSystemComplexity": 10.88,
        "totalStructuralComplexity": 18,
        "totalDataComplexity": 3.75,
        "totalSystemComplexity": 21.75,
        "package": "Snicco\\Component\\BetterWPDB\\Exception\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 2,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\BetterWPDB\\Exception\\NoMatchingRowFound",
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
            "Snicco\\Component\\BetterWPDB\\Exception\\QueryException"
        ],
        "parents": [
            "Snicco\\Component\\BetterWPDB\\Exception\\QueryException"
        ],
        "implements": [],
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
        "package": "Snicco\\Component\\BetterWPDB\\Exception\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\BetterWPDB\\KeysetPagination\\ResultSet",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "empty",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fromRecords",
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
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 4,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Countable",
            "Snicco\\Component\\BetterWPDB\\KeysetPagination\\LeftOff",
            "Snicco\\Component\\BetterWPDB\\KeysetPagination\\LeftOff",
            "Snicco\\Component\\BetterWPDB\\KeysetPagination\\LeftOff"
        ],
        "parents": [],
        "implements": [
            "Countable"
        ],
        "lcom": 3,
        "length": 22,
        "vocabulary": 6,
        "volume": 56.87,
        "difficulty": 4,
        "effort": 227.48,
        "level": 0.25,
        "bugs": 0.02,
        "time": 13,
        "intelligentContent": 14.22,
        "number_operators": 6,
        "number_operands": 16,
        "number_operators_unique": 2,
        "number_operands_unique": 4,
        "cloc": 12,
        "loc": 37,
        "lloc": 25,
        "mi": 95.69,
        "mIwoC": 57.08,
        "commentWeight": 38.61,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 4.5,
        "relativeSystemComplexity": 4.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 18,
        "totalSystemComplexity": 18,
        "package": "Snicco\\Component\\BetterWPDB\\KeysetPagination\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 2,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\BetterWPDB\\KeysetPagination\\Lock",
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
                "name": "forRead",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forReadWrite",
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
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 2,
        "length": 8,
        "vocabulary": 6,
        "volume": 20.68,
        "difficulty": 1.25,
        "effort": 25.85,
        "level": 0.8,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 16.54,
        "number_operators": 3,
        "number_operands": 5,
        "number_operators_unique": 2,
        "number_operands_unique": 4,
        "cloc": 9,
        "loc": 26,
        "lloc": 17,
        "mi": 103.33,
        "mIwoC": 63.81,
        "commentWeight": 39.52,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2.33,
        "relativeSystemComplexity": 2.33,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 7,
        "totalSystemComplexity": 7,
        "package": "Snicco\\Component\\BetterWPDB\\KeysetPagination\\",
        "pageRank": 0,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\BetterWPDB\\KeysetPagination\\Query",
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
                "name": "createResult",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildPlaceholderSQLAndBindings",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "applyCursorQuery",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "escIdentifier",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 2,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 14,
        "ccn": 10,
        "ccnMethodMax": 4,
        "externals": [
            "InvalidArgumentException",
            "Snicco\\Component\\BetterWPDB\\KeysetPagination\\ResultSet",
            "Snicco\\Component\\BetterWPDB\\KeysetPagination\\ResultSet",
            "Snicco\\Component\\BetterWPDB\\KeysetPagination\\LeftOff",
            "Snicco\\Component\\BetterWPDB\\KeysetPagination\\ResultSet",
            "InvalidArgumentException"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 210,
        "vocabulary": 58,
        "volume": 1230.18,
        "difficulty": 12.32,
        "effort": 15155.77,
        "level": 0.08,
        "bugs": 0.41,
        "time": 842,
        "intelligentContent": 99.85,
        "number_operators": 56,
        "number_operands": 154,
        "number_operators_unique": 8,
        "number_operands_unique": 50,
        "cloc": 91,
        "loc": 175,
        "lloc": 84,
        "mi": 79.99,
        "mIwoC": 35.04,
        "commentWeight": 44.94,
        "kanDefect": 0.8,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.9,
        "relativeSystemComplexity": 10.9,
        "totalStructuralComplexity": 45,
        "totalDataComplexity": 9.5,
        "totalSystemComplexity": 54.5,
        "package": "Snicco\\Component\\BetterWPDB\\KeysetPagination\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\BetterWPDB\\KeysetPagination\\LeftOff",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 0,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.75,
        "effort": 4.75,
        "level": 1.33,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 8.45,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 9,
        "loc": 18,
        "lloc": 9,
        "mi": 117.89,
        "mIwoC": 73.43,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 1,
        "package": "Snicco\\Component\\BetterWPDB\\KeysetPagination\\",
        "pageRank": 0,
        "afferentCoupling": 2,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\BetterWPDB\\QueryInfo",
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
                "name": "replacePlaceholders",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 64,
        "vocabulary": 17,
        "volume": 261.6,
        "difficulty": 12,
        "effort": 3139.17,
        "level": 0.08,
        "bugs": 0.09,
        "time": 174,
        "intelligentContent": 21.8,
        "number_operators": 20,
        "number_operands": 44,
        "number_operators_unique": 6,
        "number_operands_unique": 11,
        "cloc": 29,
        "loc": 67,
        "lloc": 38,
        "mi": 90.66,
        "mIwoC": 48.07,
        "commentWeight": 42.58,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 4.5,
        "relativeSystemComplexity": 5.5,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 9,
        "totalSystemComplexity": 11,
        "package": "Snicco\\Component\\BetterWPDB\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\BetterWPDB\\MysqliFactory",
        "interface": false,
        "abstract": false,
        "final": true,
        "methods": [
            {
                "name": "fromWpdbConnection",
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
            "mysqli",
            "ReflectionProperty"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 16,
        "vocabulary": 6,
        "volume": 41.36,
        "difficulty": 3,
        "effort": 124.08,
        "level": 0.33,
        "bugs": 0.01,
        "time": 7,
        "intelligentContent": 13.79,
        "number_operators": 4,
        "number_operands": 12,
        "number_operators_unique": 2,
        "number_operands_unique": 4,
        "cloc": 4,
        "loc": 17,
        "lloc": 13,
        "mi": 98.38,
        "mIwoC": 64.25,
        "commentWeight": 34.14,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0.33,
        "relativeSystemComplexity": 4.33,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0.33,
        "totalSystemComplexity": 4.33,
        "package": "Snicco\\Component\\BetterWPDB\\",
        "pageRank": 0,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Snicco\\Component\\BetterWPDB\\BetterWPDB",
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
                "name": "fromWpdb",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "preparedQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unprepared",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "transactional",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateByPrimary",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "select",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "selectAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "selectRow",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "selectValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "exists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "selectLazy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "batchProcess",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "keysetPaginate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "bulkInsert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "restoreErrorHandling",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "internalPaginate",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "runWithErrorHandling",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queryOriginalSqlMode",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildInsertSql",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createPreparedStatement",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "escIdentifier",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "paramTypes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "log",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "convertBindings",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildWhereArray",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateProvidedColumnNames",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "assertStringNotEmpty",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 31,
        "nbMethods": 31,
        "nbMethodsPrivate": 12,
        "nbMethodsPublic": 19,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 92,
        "ccn": 62,
        "ccnMethodMax": 7,
        "externals": [
            "mysqli",
            "",
            "Snicco\\Component\\BetterWPDB\\MysqliFactory",
            "mysqli_stmt",
            "Snicco\\Component\\BetterWPDB\\Exception\\QueryException",
            "Snicco\\Component\\BetterWPDB\\Exception\\QueryException",
            "Snicco\\Component\\BetterWPDB\\QueryInfo",
            "Snicco\\Component\\BetterWPDB\\Exception\\QueryException",
            "Snicco\\Component\\BetterWPDB\\QueryInfo",
            "Closure",
            "LogicException",
            "Snicco\\Component\\BetterWPDB\\Exception\\QueryException",
            "Snicco\\Component\\BetterWPDB\\QueryInfo",
            "Snicco\\Component\\BetterWPDB\\Exception\\QueryException",
            "Snicco\\Component\\BetterWPDB\\QueryInfo",
            "InvalidArgumentException",
            "mysqli_result",
            "Snicco\\Component\\BetterWPDB\\Exception\\NoMatchingRowFound",
            "Generator",
            "Snicco\\Component\\BetterWPDB\\KeysetPagination\\Query",
            "Snicco\\Component\\BetterWPDB\\KeysetPagination\\ResultSet",
            "Snicco\\Component\\BetterWPDB\\KeysetPagination\\Query",
            "mysqli_stmt",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "Snicco\\Component\\BetterWPDB\\QueryInfo",
            "Snicco\\Component\\BetterWPDB\\Exception\\QueryException",
            "Snicco\\Component\\BetterWPDB\\KeysetPagination\\ResultSet",
            "Snicco\\Component\\BetterWPDB\\KeysetPagination\\Query",
            "Closure",
            "RuntimeException",
            "RuntimeException",
            "RuntimeException",
            "mysqli_stmt",
            "Snicco\\Component\\BetterWPDB\\QueryInfo",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException",
            "InvalidArgumentException"
        ],
        "parents": [],
        "implements": [],
        "lcom": 2,
        "length": 798,
        "vocabulary": 128,
        "volume": 5586,
        "difficulty": 48.52,
        "effort": 271022.56,
        "level": 0.02,
        "bugs": 1.86,
        "time": 15057,
        "intelligentContent": 115.13,
        "number_operators": 205,
        "number_operands": 593,
        "number_operators_unique": 18,
        "number_operands_unique": 110,
        "cloc": 244,
        "loc": 676,
        "lloc": 432,
        "mi": 48.04,
        "mIwoC": 7.93,
        "commentWeight": 40.1,
        "kanDefect": 4.62,
        "relativeStructuralComplexity": 1600,
        "relativeDataComplexity": 0.85,
        "relativeSystemComplexity": 1600.85,
        "totalStructuralComplexity": 49600,
        "totalDataComplexity": 26.27,
        "totalSystemComplexity": 49626.27,
        "package": "Snicco\\Component\\BetterWPDB\\",
        "pageRank": 0,
        "afferentCoupling": 3,
        "efferentCoupling": 15,
        "instability": 0.83,
        "violations": {}
    }
]