window.BENCHMARK_DATA = {
  "lastUpdate": 1677780422291,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "3381dad4a30a6c86e963f952bb2c681a4d8c2736",
          "message": "test(pyspark): allow doctests to pass",
          "timestamp": "2023-03-02T12:52:51-05:00",
          "tree_id": "db98c77c557cfb3dac6fa6ee12a27390428f76dc",
          "url": "https://github.com/ibis-project/ibis/commit/3381dad4a30a6c86e963f952bb2c681a4d8c2736"
        },
        "date": 1677780285964,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.455824648698545,
            "unit": "iter/sec",
            "range": "stddev: 0.00047644578908203423",
            "extra": "mean: 24.718319517240882 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9243235145729578,
            "unit": "iter/sec",
            "range": "stddev: 0.002697228417771582",
            "extra": "mean: 1.0818722928 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.1230796450953,
            "unit": "iter/sec",
            "range": "stddev: 0.00006629083281591016",
            "extra": "mean: 7.455838343751964 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5384.6641145573,
            "unit": "iter/sec",
            "range": "stddev: 0.00004502518139146873",
            "extra": "mean: 185.71260504374374 usec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 177.5531569630086,
            "unit": "iter/sec",
            "range": "stddev: 0.003951468017226269",
            "extra": "mean: 5.632116134146463 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.89936113924995,
            "unit": "iter/sec",
            "range": "stddev: 0.005609560854685781",
            "extra": "mean: 3.5984249690265373 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 280.65402685002505,
            "unit": "iter/sec",
            "range": "stddev: 0.0002717186518468461",
            "extra": "mean: 3.563105832557238 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5508.602278786169,
            "unit": "iter/sec",
            "range": "stddev: 0.000049958224902888195",
            "extra": "mean: 181.53425304474004 usec\nrounds: 3695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 260.1862841844976,
            "unit": "iter/sec",
            "range": "stddev: 0.0035569322846434963",
            "extra": "mean: 3.8434001359230057 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6131777.348682727,
            "unit": "iter/sec",
            "range": "stddev: 1.4517311438370404e-8",
            "extra": "mean: 163.0848517703538 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 314.4092071227838,
            "unit": "iter/sec",
            "range": "stddev: 0.0002745738631471717",
            "extra": "mean: 3.180568435483117 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 552.578638857728,
            "unit": "iter/sec",
            "range": "stddev: 0.000029968426662563832",
            "extra": "mean: 1.809697171912339 msec\nrounds: 413"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.16216761329362,
            "unit": "iter/sec",
            "range": "stddev: 0.00022842484089780586",
            "extra": "mean: 8.535178380282344 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.610694018517245,
            "unit": "iter/sec",
            "range": "stddev: 0.0001967390598509394",
            "extra": "mean: 64.05865100000103 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 179.13607778084858,
            "unit": "iter/sec",
            "range": "stddev: 0.00578700475216823",
            "extra": "mean: 5.582348415729966 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.0060232368529,
            "unit": "iter/sec",
            "range": "stddev: 0.00022478839764574624",
            "extra": "mean: 3.311192238095644 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 132.59739482502223,
            "unit": "iter/sec",
            "range": "stddev: 0.0006044726766841871",
            "extra": "mean: 7.541626299065807 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8503730543135227,
            "unit": "iter/sec",
            "range": "stddev: 0.0018769227697271842",
            "extra": "mean: 1.1759544765999976 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.513606900825174,
            "unit": "iter/sec",
            "range": "stddev: 0.0008547935653252887",
            "extra": "mean: 16.802880081968862 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 303.637699829168,
            "unit": "iter/sec",
            "range": "stddev: 0.0002262892798580545",
            "extra": "mean: 3.293398680607243 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.02026302678058,
            "unit": "iter/sec",
            "range": "stddev: 0.00011969181250864847",
            "extra": "mean: 6.755831799995349 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.25142623531127,
            "unit": "iter/sec",
            "range": "stddev: 0.0004100342065728051",
            "extra": "mean: 10.075421965515535 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5690036.797972591,
            "unit": "iter/sec",
            "range": "stddev: 1.3125292042924628e-8",
            "extra": "mean: 175.74578785797203 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 314.5976752869986,
            "unit": "iter/sec",
            "range": "stddev: 0.0002524843546287445",
            "extra": "mean: 3.1786630307669252 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11654.031819293423,
            "unit": "iter/sec",
            "range": "stddev: 0.000017674869056392253",
            "extra": "mean: 85.80721380428061 usec\nrounds: 4303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.37361873088736,
            "unit": "iter/sec",
            "range": "stddev: 0.00012713333477900644",
            "extra": "mean: 14.414701413792155 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 196.56803299538305,
            "unit": "iter/sec",
            "range": "stddev: 0.00007895137962126769",
            "extra": "mean: 5.0872971803278295 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18053867131121548,
            "unit": "iter/sec",
            "range": "stddev: 0.01346969292006053",
            "extra": "mean: 5.538979503600001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.23644919362981,
            "unit": "iter/sec",
            "range": "stddev: 0.0006414940563832277",
            "extra": "mean: 10.84170096249828 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.10604121787232,
            "unit": "iter/sec",
            "range": "stddev: 0.0007329575246730974",
            "extra": "mean: 26.94978950000047 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5605.826959077439,
            "unit": "iter/sec",
            "range": "stddev: 0.00006736765252752941",
            "extra": "mean: 178.38581306558416 usec\nrounds: 1990"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 138.62032913166178,
            "unit": "iter/sec",
            "range": "stddev: 0.0006791941304899971",
            "extra": "mean: 7.213949110236195 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 103.24675856984175,
            "unit": "iter/sec",
            "range": "stddev: 0.0007059607156296691",
            "extra": "mean: 9.685534091838296 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7112203.323727488,
            "unit": "iter/sec",
            "range": "stddev: 7.299320461077172e-9",
            "extra": "mean: 140.60340438583563 nsec\nrounds: 68494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.548627277518316,
            "unit": "iter/sec",
            "range": "stddev: 0.0006751282710771623",
            "extra": "mean: 180.22475650000067 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 739.1193378530053,
            "unit": "iter/sec",
            "range": "stddev: 0.00001215160905640232",
            "extra": "mean: 1.3529614891484252 msec\nrounds: 599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140255.6808307839,
            "unit": "iter/sec",
            "range": "stddev: 3.694468092026554e-7",
            "extra": "mean: 7.129835982946622 usec\nrounds: 39063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.47555024515925,
            "unit": "iter/sec",
            "range": "stddev: 0.0006870365208382394",
            "extra": "mean: 10.052721473120604 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.5991382124843,
            "unit": "iter/sec",
            "range": "stddev: 0.00005303198994761825",
            "extra": "mean: 13.227664013699851 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.919111407238508,
            "unit": "iter/sec",
            "range": "stddev: 0.004390919781408033",
            "extra": "mean: 1.0880073864000053 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11989.647109168,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020396627316523697",
            "extra": "mean: 83.40529048893693 usec\nrounds: 5236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.87516563057893,
            "unit": "iter/sec",
            "range": "stddev: 0.0005868655406657374",
            "extra": "mean: 9.626940124999603 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.11284579335033,
            "unit": "iter/sec",
            "range": "stddev: 0.00027531344612800917",
            "extra": "mean: 21.225633543477084 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 139.69424364351607,
            "unit": "iter/sec",
            "range": "stddev: 0.0006503813621688857",
            "extra": "mean: 7.15849110112144 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 139.97047816779886,
            "unit": "iter/sec",
            "range": "stddev: 0.0006840649583186359",
            "extra": "mean: 7.144363676468861 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6808921041812355,
            "unit": "iter/sec",
            "range": "stddev: 0.000659365650788378",
            "extra": "mean: 1.4686614720000137 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 131.84640142859496,
            "unit": "iter/sec",
            "range": "stddev: 0.0006402378632338098",
            "extra": "mean: 7.584583190475453 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13093.427916570103,
            "unit": "iter/sec",
            "range": "stddev: 0.000002576134640422402",
            "extra": "mean: 76.37419370785796 usec\nrounds: 7088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1855537.7038655744,
            "unit": "iter/sec",
            "range": "stddev: 1.2128131671491433e-7",
            "extra": "mean: 538.9273405313921 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.587848425692545,
            "unit": "iter/sec",
            "range": "stddev: 0.0003900757454562832",
            "extra": "mean: 39.0810506363602 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5407.932539853784,
            "unit": "iter/sec",
            "range": "stddev: 0.00008568394739484182",
            "extra": "mean: 184.91354924095214 usec\nrounds: 2569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.90498539825688,
            "unit": "iter/sec",
            "range": "stddev: 0.0006343600771390167",
            "extra": "mean: 9.910313113402173 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5814.949692926274,
            "unit": "iter/sec",
            "range": "stddev: 0.00005222065968396165",
            "extra": "mean: 171.9705333334994 usec\nrounds: 3015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.850433929438466,
            "unit": "iter/sec",
            "range": "stddev: 0.00025719387971185654",
            "extra": "mean: 18.921320520000222 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 756084.6142760777,
            "unit": "iter/sec",
            "range": "stddev: 2.0239767335975182e-7",
            "extra": "mean: 1.3226032921691733 usec\nrounds: 22780"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.98823962749064,
            "unit": "iter/sec",
            "range": "stddev: 0.0007011470751250759",
            "extra": "mean: 9.524876343751506 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.83966890836221,
            "unit": "iter/sec",
            "range": "stddev: 0.012147149722033164",
            "extra": "mean: 8.207507529851528 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.0746626170652,
            "unit": "iter/sec",
            "range": "stddev: 0.000050933843930223835",
            "extra": "mean: 6.247084851849578 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.64946778057858,
            "unit": "iter/sec",
            "range": "stddev: 0.0007092539820443026",
            "extra": "mean: 9.935472308507933 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69034.701348385,
            "unit": "iter/sec",
            "range": "stddev: 5.002698995592536e-7",
            "extra": "mean: 14.485468618941074 usec\nrounds: 13352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 499145.45808730053,
            "unit": "iter/sec",
            "range": "stddev: 2.7613700440460887e-7",
            "extra": "mean: 2.0034240195872925 usec\nrounds: 408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.8541578041818,
            "unit": "iter/sec",
            "range": "stddev: 0.0003516925229344258",
            "extra": "mean: 7.307048730158809 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5338.647643883602,
            "unit": "iter/sec",
            "range": "stddev: 0.000023651670469424393",
            "extra": "mean: 187.31335474924683 usec\nrounds: 3253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8002.599168058864,
            "unit": "iter/sec",
            "range": "stddev: 0.000012263984280283893",
            "extra": "mean: 124.9594011894717 usec\nrounds: 3866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.35301155431912,
            "unit": "iter/sec",
            "range": "stddev: 0.00005981330029733537",
            "extra": "mean: 10.378502797873098 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2496353.835406484,
            "unit": "iter/sec",
            "range": "stddev: 1.8668604340151166e-8",
            "extra": "mean: 400.5842384267316 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1189.1136782654796,
            "unit": "iter/sec",
            "range": "stddev: 0.000015277367128029786",
            "extra": "mean: 840.962490195779 usec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.07173068912175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000260678843993607",
            "extra": "mean: 3.0668098638498793 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5776.073672628903,
            "unit": "iter/sec",
            "range": "stddev: 0.00005042169242207529",
            "extra": "mean: 173.12798566588629 usec\nrounds: 2372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1883048.0607523385,
            "unit": "iter/sec",
            "range": "stddev: 1.0796759893666815e-7",
            "extra": "mean: 531.053891211076 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.40739651475242,
            "unit": "iter/sec",
            "range": "stddev: 0.0006439996787958528",
            "extra": "mean: 96.08550981818614 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1733.8694820136702,
            "unit": "iter/sec",
            "range": "stddev: 0.000017377743755799248",
            "extra": "mean: 576.7446802504571 usec\nrounds: 1276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.57646845718173,
            "unit": "iter/sec",
            "range": "stddev: 0.012428277809647743",
            "extra": "mean: 8.225275932835572 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 354.0379472521394,
            "unit": "iter/sec",
            "range": "stddev: 0.00018993613879842293",
            "extra": "mean: 2.8245559770117468 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 316.487380046013,
            "unit": "iter/sec",
            "range": "stddev: 0.00020308640110617234",
            "extra": "mean: 3.159683649485845 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7833061256813907,
            "unit": "iter/sec",
            "range": "stddev: 0.0012893901849474496",
            "extra": "mean: 560.7562188000145 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.37825487146223,
            "unit": "iter/sec",
            "range": "stddev: 0.000678275716936629",
            "extra": "mean: 9.580539560001853 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.64198428773625,
            "unit": "iter/sec",
            "range": "stddev: 0.00022842751153596676",
            "extra": "mean: 3.2718018184916113 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.77358923423867,
            "unit": "iter/sec",
            "range": "stddev: 0.00007178266554106375",
            "extra": "mean: 3.403981966543139 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.26291978026511,
            "unit": "iter/sec",
            "range": "stddev: 0.00018190276880758761",
            "extra": "mean: 10.838590436782367 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1681418.9379011428,
            "unit": "iter/sec",
            "range": "stddev: 9.060782498304997e-8",
            "extra": "mean: 594.7357778949876 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11844068.607580004,
            "unit": "iter/sec",
            "range": "stddev: 6.99536840228124e-9",
            "extra": "mean: 84.43044642270875 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 140.5404536445937,
            "unit": "iter/sec",
            "range": "stddev: 0.000646826997111383",
            "extra": "mean: 7.115389014816005 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 690.8644136595054,
            "unit": "iter/sec",
            "range": "stddev: 0.00002201062563636146",
            "extra": "mean: 1.4474620203738746 msec\nrounds: 589"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5794.93656446529,
            "unit": "iter/sec",
            "range": "stddev: 0.0000465592817199997",
            "extra": "mean: 172.564442919363 usec\nrounds: 2768"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.483269432842736,
            "unit": "iter/sec",
            "range": "stddev: 0.0014860297134755194",
            "extra": "mean: 402.6949257999945 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.359305242016134,
            "unit": "iter/sec",
            "range": "stddev: 0.027242259693200425",
            "extra": "mean: 29.10419733333706 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5311.170609401389,
            "unit": "iter/sec",
            "range": "stddev: 0.000049119445627090894",
            "extra": "mean: 188.28240957462071 usec\nrounds: 2444"
          }
        ]
      }
    ]
  }
}