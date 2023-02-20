window.BENCHMARK_DATA = {
  "lastUpdate": 1676907660741,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "3587910a2cba5a61b05a3a713401b56b8e52d118",
          "message": "fix(ir): make `find_subqueries` return in topological order",
          "timestamp": "2023-02-20T16:35:36+01:00",
          "tree_id": "def2387446fe694d5278ee698a85bb76b0f51270",
          "url": "https://github.com/ibis-project/ibis/commit/3587910a2cba5a61b05a3a713401b56b8e52d118"
        },
        "date": 1676907577764,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 71.25714781722363,
            "unit": "iter/sec",
            "range": "stddev: 0.0005847039446586579",
            "extra": "mean: 14.033679857142545 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 240.43546710031728,
            "unit": "iter/sec",
            "range": "stddev: 0.00018850678301952334",
            "extra": "mean: 4.159120166671452 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 568891.2782533875,
            "unit": "iter/sec",
            "range": "stddev: 2.179185724610427e-7",
            "extra": "mean: 1.7578051171222104 usec\nrounds: 5824"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.849888916153093,
            "unit": "iter/sec",
            "range": "stddev: 0.008746746090608257",
            "extra": "mean: 1.176624357600008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15237296220982946,
            "unit": "iter/sec",
            "range": "stddev: 0.04074481370758219",
            "extra": "mean: 6.562844126000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1420.1270276212172,
            "unit": "iter/sec",
            "range": "stddev: 0.00001083239678535906",
            "extra": "mean: 704.1623605143614 usec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.899471814205039,
            "unit": "iter/sec",
            "range": "stddev: 0.0008861871376901277",
            "extra": "mean: 204.10363359999337 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.921793791181507,
            "unit": "iter/sec",
            "range": "stddev: 0.0006345667427688239",
            "extra": "mean: 40.12552259997619 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.701117477513414,
            "unit": "iter/sec",
            "range": "stddev: 0.0002932531692148802",
            "extra": "mean: 18.97492971428322 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 237.15077457913713,
            "unit": "iter/sec",
            "range": "stddev: 0.005339400021738766",
            "extra": "mean: 4.216726686955435 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 253.44662557737226,
            "unit": "iter/sec",
            "range": "stddev: 0.00022715024620705175",
            "extra": "mean: 3.9456039224113466 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4189.464536028998,
            "unit": "iter/sec",
            "range": "stddev: 0.00005660503385712422",
            "extra": "mean: 238.69398855154273 usec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.37654866107219,
            "unit": "iter/sec",
            "range": "stddev: 0.00024607643326919723",
            "extra": "mean: 11.06481730952323 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 69.50879966741634,
            "unit": "iter/sec",
            "range": "stddev: 0.00010401122020148552",
            "extra": "mean: 14.386667656250296 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 224.34184176314693,
            "unit": "iter/sec",
            "range": "stddev: 0.00033381776388094865",
            "extra": "mean: 4.4574832413820005 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 71.28458051483062,
            "unit": "iter/sec",
            "range": "stddev: 0.000580994101032009",
            "extra": "mean: 14.028279226416322 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 70.63507957667453,
            "unit": "iter/sec",
            "range": "stddev: 0.0005818973792561214",
            "extra": "mean: 14.157271514283464 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 68.6686348118014,
            "unit": "iter/sec",
            "range": "stddev: 0.0006349519865039021",
            "extra": "mean: 14.56268939583083 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10190.733981118176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021016965134744317",
            "extra": "mean: 98.12835874754873 usec\nrounds: 2715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.75254749228483,
            "unit": "iter/sec",
            "range": "stddev: 0.00018989816163305956",
            "extra": "mean: 14.75959262068888 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 327.9255795421254,
            "unit": "iter/sec",
            "range": "stddev: 0.000032157240663236576",
            "extra": "mean: 3.0494723875956122 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3930.324521746492,
            "unit": "iter/sec",
            "range": "stddev: 0.000052882679461879765",
            "extra": "mean: 254.4319163639029 usec\nrounds: 1662"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.62442861574803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000352222408081108",
            "extra": "mean: 5.895377264705843 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4424871.022011902,
            "unit": "iter/sec",
            "range": "stddev: 1.2476214841303566e-8",
            "extra": "mean: 225.99528777828118 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 68.90250443358032,
            "unit": "iter/sec",
            "range": "stddev: 0.0006162878469376503",
            "extra": "mean: 14.513260558822882 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6361.01100247222,
            "unit": "iter/sec",
            "range": "stddev: 0.00003582180609520901",
            "extra": "mean: 157.20771424720817 usec\nrounds: 3685"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4708034.369628024,
            "unit": "iter/sec",
            "range": "stddev: 3.860049962250105e-8",
            "extra": "mean: 212.40286741590242 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.82002860509493,
            "unit": "iter/sec",
            "range": "stddev: 0.00008685154686824565",
            "extra": "mean: 7.051190229163969 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 115.93609574576743,
            "unit": "iter/sec",
            "range": "stddev: 0.0004968915641745651",
            "extra": "mean: 8.625441400000808 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.736502914278375,
            "unit": "iter/sec",
            "range": "stddev: 0.0005611547336083062",
            "extra": "mean: 25.16577772727639 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1443285.3837229416,
            "unit": "iter/sec",
            "range": "stddev: 1.7186194962735115e-7",
            "extra": "mean: 692.863664579287 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 434.5439001333657,
            "unit": "iter/sec",
            "range": "stddev: 0.00013448876061094995",
            "extra": "mean: 2.3012634619726344 msec\nrounds: 355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 62.44581285498678,
            "unit": "iter/sec",
            "range": "stddev: 0.000518059895465219",
            "extra": "mean: 16.01388394642608 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 68.82859580373793,
            "unit": "iter/sec",
            "range": "stddev: 0.0006022986890125934",
            "extra": "mean: 14.528844999997695 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.53317646732121,
            "unit": "iter/sec",
            "range": "stddev: 0.0002524236691824449",
            "extra": "mean: 10.806934746838152 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5536049064766444,
            "unit": "iter/sec",
            "range": "stddev: 0.0011974643389420054",
            "extra": "mean: 643.6642906000202 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 257.073911149149,
            "unit": "iter/sec",
            "range": "stddev: 0.00022104987614810732",
            "extra": "mean: 3.889931870293211 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9105.334777862916,
            "unit": "iter/sec",
            "range": "stddev: 0.00001420578242835058",
            "extra": "mean: 109.82572573072451 usec\nrounds: 3657"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.6078165755133,
            "unit": "iter/sec",
            "range": "stddev: 0.0005915691193137069",
            "extra": "mean: 17.062570462961183 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 65.2487330482467,
            "unit": "iter/sec",
            "range": "stddev: 0.0005628763500931346",
            "extra": "mean: 15.32596808064568 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4370.344537907698,
            "unit": "iter/sec",
            "range": "stddev: 0.00003020765120789432",
            "extra": "mean: 228.8149118052715 usec\nrounds: 2177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 66.14684281394771,
            "unit": "iter/sec",
            "range": "stddev: 0.0005981283463080541",
            "extra": "mean: 15.117879515621269 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5724142253519844,
            "unit": "iter/sec",
            "range": "stddev: 0.061868567238804455",
            "extra": "mean: 1.7469866325999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56072.87721931795,
            "unit": "iter/sec",
            "range": "stddev: 5.992472597724363e-7",
            "extra": "mean: 17.833934151242108 usec\nrounds: 12225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121227.74932031173,
            "unit": "iter/sec",
            "range": "stddev: 4.2663009271527874e-7",
            "extra": "mean: 8.248936449011925 usec\nrounds: 33784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1600254.2545084816,
            "unit": "iter/sec",
            "range": "stddev: 9.994590904048965e-8",
            "extra": "mean: 624.9006976126742 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 70.25675973301156,
            "unit": "iter/sec",
            "range": "stddev: 0.0006829704778223411",
            "extra": "mean: 14.233505840579348 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3902.2038555389868,
            "unit": "iter/sec",
            "range": "stddev: 0.00005816179647216467",
            "extra": "mean: 256.2654430727777 usec\nrounds: 2512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 562.2671929581212,
            "unit": "iter/sec",
            "range": "stddev: 0.00002263781785935123",
            "extra": "mean: 1.7785138676488317 msec\nrounds: 476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4410.075420956761,
            "unit": "iter/sec",
            "range": "stddev: 0.000051556573315864197",
            "extra": "mean: 226.75349161784882 usec\nrounds: 2207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.85032303733073,
            "unit": "iter/sec",
            "range": "stddev: 0.004402138678937982",
            "extra": "mean: 1.1760236476000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 269.0185643083998,
            "unit": "iter/sec",
            "range": "stddev: 0.00004414188996702526",
            "extra": "mean: 3.7172155853661146 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 94.75915365807504,
            "unit": "iter/sec",
            "range": "stddev: 0.00009137145992785579",
            "extra": "mean: 10.553070193180051 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.552236281614597,
            "unit": "iter/sec",
            "range": "stddev: 0.0002475977234025724",
            "extra": "mean: 73.78855999999294 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4459.524434186171,
            "unit": "iter/sec",
            "range": "stddev: 0.00004960957296128018",
            "extra": "mean: 224.23915705767232 usec\nrounds: 2012"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 84.37799502330905,
            "unit": "iter/sec",
            "range": "stddev: 0.0004919919161299498",
            "extra": "mean: 11.851431166665602 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1894933.1257940636,
            "unit": "iter/sec",
            "range": "stddev: 5.238065450517086e-8",
            "extra": "mean: 527.7231087408726 nsec\nrounds: 75188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 381072.59909756214,
            "unit": "iter/sec",
            "range": "stddev: 4.846589053788743e-7",
            "extra": "mean: 2.6241718831743666 usec\nrounds: 1821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 221.37596511346953,
            "unit": "iter/sec",
            "range": "stddev: 0.008579919433780739",
            "extra": "mean: 4.517202215188243 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12669117.43249719,
            "unit": "iter/sec",
            "range": "stddev: 3.540463998200616e-9",
            "extra": "mean: 78.93209651958246 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 67.46285482945028,
            "unit": "iter/sec",
            "range": "stddev: 0.0006355220290526476",
            "extra": "mean: 14.822971878792467 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.31097871623452,
            "unit": "iter/sec",
            "range": "stddev: 0.00014561412675060282",
            "extra": "mean: 14.427728745457362 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 966.6683575167117,
            "unit": "iter/sec",
            "range": "stddev: 0.00010776149240067411",
            "extra": "mean: 1.0344809491529385 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 247.37551428374653,
            "unit": "iter/sec",
            "range": "stddev: 0.00025480001082405954",
            "extra": "mean: 4.04243727555417 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5458041.106761483,
            "unit": "iter/sec",
            "range": "stddev: 5.756037510270969e-9",
            "extra": "mean: 183.21591582761744 nsec\nrounds: 54055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.21854689599462,
            "unit": "iter/sec",
            "range": "stddev: 0.00027537337226078696",
            "extra": "mean: 23.68627235000531 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 267.60039302295985,
            "unit": "iter/sec",
            "range": "stddev: 0.000015994348573443875",
            "extra": "mean: 3.736915288888238 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 65.44908805459771,
            "unit": "iter/sec",
            "range": "stddev: 0.0006897704197816403",
            "extra": "mean: 15.279051698410202 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.840360777456445,
            "unit": "iter/sec",
            "range": "stddev: 0.004252047030105817",
            "extra": "mean: 113.11755540000945 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.807620437796654,
            "unit": "iter/sec",
            "range": "stddev: 0.02520029045876099",
            "extra": "mean: 32.45950144118043 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.95039342067539,
            "unit": "iter/sec",
            "range": "stddev: 0.0008008082757203326",
            "extra": "mean: 30.34865129630075 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4002.0792466389244,
            "unit": "iter/sec",
            "range": "stddev: 0.00005137770579655965",
            "extra": "mean: 249.87011460101206 usec\nrounds: 1815"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 87.25514472832438,
            "unit": "iter/sec",
            "range": "stddev: 0.00007559446162573514",
            "extra": "mean: 11.460642270591347 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.189331622749492,
            "unit": "iter/sec",
            "range": "stddev: 0.0013908268896522268",
            "extra": "mean: 456.7604056000164 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 74.97250755469155,
            "unit": "iter/sec",
            "range": "stddev: 0.00010913212883705384",
            "extra": "mean: 13.33822267143075 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 61.34451756994587,
            "unit": "iter/sec",
            "range": "stddev: 0.01924594262866719",
            "extra": "mean: 16.301375242861532 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1922806.6867871995,
            "unit": "iter/sec",
            "range": "stddev: 4.338399443082232e-8",
            "extra": "mean: 520.0730821625816 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10949.801563839146,
            "unit": "iter/sec",
            "range": "stddev: 0.000001744673450183349",
            "extra": "mean: 91.32585592257863 usec\nrounds: 5150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7320678351631628,
            "unit": "iter/sec",
            "range": "stddev: 0.0036578289071833503",
            "extra": "mean: 1.365993630599985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 67.38718129997213,
            "unit": "iter/sec",
            "range": "stddev: 0.0006433976245015024",
            "extra": "mean: 14.83961757576012 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 620.8120538780265,
            "unit": "iter/sec",
            "range": "stddev: 0.000036197953333425344",
            "extra": "mean: 1.6107934659987677 msec\nrounds: 500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4366.979300283869,
            "unit": "iter/sec",
            "range": "stddev: 0.00005485271282760998",
            "extra": "mean: 228.99123884901323 usec\nrounds: 2085"
          }
        ]
      }
    ]
  }
}