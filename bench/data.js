window.BENCHMARK_DATA = {
  "lastUpdate": 1682426120697,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "d2c32bf916928e4f6455bdd8c5f3ec7568d7a65b",
          "message": "chore(ir): remove unused time unit mappings",
          "timestamp": "2023-04-25T08:18:20-04:00",
          "tree_id": "0f7b28fe8a35b562e27c70945a31e5b4a049575c",
          "url": "https://github.com/ibis-project/ibis/commit/d2c32bf916928e4f6455bdd8c5f3ec7568d7a65b"
        },
        "date": 1682426012452,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4006609.8870047284,
            "unit": "iter/sec",
            "range": "stddev: 8.287977420198435e-7",
            "extra": "mean: 249.58756360148382 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0058763216251028,
            "unit": "iter/sec",
            "range": "stddev: 0.03878331095798514",
            "extra": "mean: 994.1580077999959 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2860.7421457094338,
            "unit": "iter/sec",
            "range": "stddev: 0.00018962102684777997",
            "extra": "mean: 349.55964189216036 usec\nrounds: 592"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 140.6143004685837,
            "unit": "iter/sec",
            "range": "stddev: 0.000463167465524667",
            "extra": "mean: 7.1116522051284665 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56586.29497085315,
            "unit": "iter/sec",
            "range": "stddev: 0.000024324789019168872",
            "extra": "mean: 17.672123621366037 usec\nrounds: 8704"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8738017248771837,
            "unit": "iter/sec",
            "range": "stddev: 0.014635361747756726",
            "extra": "mean: 533.6743940000076 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 120.6679554678396,
            "unit": "iter/sec",
            "range": "stddev: 0.0007745551820204016",
            "extra": "mean: 8.28720430476275 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10028.710628530025,
            "unit": "iter/sec",
            "range": "stddev: 0.00005993287802062119",
            "extra": "mean: 99.71371565504795 usec\nrounds: 4695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09714591820330115,
            "unit": "iter/sec",
            "range": "stddev: 0.2801485816952375",
            "extra": "mean: 10.293793280199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 21.977238306149857,
            "unit": "iter/sec",
            "range": "stddev: 0.0020194501390170603",
            "extra": "mean: 45.501622454545235 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 474.4032192817161,
            "unit": "iter/sec",
            "range": "stddev: 0.00046167015123295093",
            "extra": "mean: 2.107911496709653 msec\nrounds: 304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 83.5976980251534,
            "unit": "iter/sec",
            "range": "stddev: 0.0014979830615420144",
            "extra": "mean: 11.962051870125821 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1216.5007334815064,
            "unit": "iter/sec",
            "range": "stddev: 0.000358848464760311",
            "extra": "mean: 822.0299194872638 usec\nrounds: 1093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1480563.0446807367,
            "unit": "iter/sec",
            "range": "stddev: 0.000004521452736952391",
            "extra": "mean: 675.4187223521012 nsec\nrounds: 135154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 58.0020887658666,
            "unit": "iter/sec",
            "range": "stddev: 0.02459678005133412",
            "extra": "mean: 17.240758415384615 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 73.42805831567048,
            "unit": "iter/sec",
            "range": "stddev: 0.0014506947292460507",
            "extra": "mean: 13.618772209677063 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1504876.5523782778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015212022038358277",
            "extra": "mean: 664.5063333730725 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 85.32873188114259,
            "unit": "iter/sec",
            "range": "stddev: 0.0009704987080705799",
            "extra": "mean: 11.719381947371906 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 175.73909956063082,
            "unit": "iter/sec",
            "range": "stddev: 0.0006273656056595821",
            "extra": "mean: 5.690253349995089 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 6688.90066972458,
            "unit": "iter/sec",
            "range": "stddev: 0.00015675727503187986",
            "extra": "mean: 149.50139781955764 usec\nrounds: 3577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 116726.49756959616,
            "unit": "iter/sec",
            "range": "stddev: 0.00001341699260521409",
            "extra": "mean: 8.567035084761 usec\nrounds: 31153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.97181991349318,
            "unit": "iter/sec",
            "range": "stddev: 0.0009074489299913604",
            "extra": "mean: 13.16277537037641 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 301.71356280383884,
            "unit": "iter/sec",
            "range": "stddev: 0.00031059192083039835",
            "extra": "mean: 3.3144018807340023 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 72.23682759619476,
            "unit": "iter/sec",
            "range": "stddev: 0.0014422654817647605",
            "extra": "mean: 13.843354328764534 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 67.2827246922863,
            "unit": "iter/sec",
            "range": "stddev: 0.0014756015953920935",
            "extra": "mean: 14.862656121217489 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 90.27342443591264,
            "unit": "iter/sec",
            "range": "stddev: 0.001191745550482269",
            "extra": "mean: 11.077457250000801 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.9375696319199465,
            "unit": "iter/sec",
            "range": "stddev: 0.005019752083584328",
            "extra": "mean: 168.41907750000473 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5453286386498325,
            "unit": "iter/sec",
            "range": "stddev: 0.02080155915361601",
            "extra": "mean: 1.8337566178000089 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 625190.5327478858,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022555575961626964",
            "extra": "mean: 1.59951238481607 usec\nrounds: 22124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.91661683712511,
            "unit": "iter/sec",
            "range": "stddev: 0.0035900503164390967",
            "extra": "mean: 20.442950977775986 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 68.13651744925946,
            "unit": "iter/sec",
            "range": "stddev: 0.0017973604291200045",
            "extra": "mean: 14.676417836363436 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 179.4375466300519,
            "unit": "iter/sec",
            "range": "stddev: 0.000726894472364767",
            "extra": "mean: 5.572969641976378 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 118.98829699212666,
            "unit": "iter/sec",
            "range": "stddev: 0.00458527833821963",
            "extra": "mean: 8.404187851063782 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 181.04523226432667,
            "unit": "iter/sec",
            "range": "stddev: 0.0010612570564586907",
            "extra": "mean: 5.523481549295904 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4874230.302469952,
            "unit": "iter/sec",
            "range": "stddev: 8.780175893373703e-7",
            "extra": "mean: 205.16059725249343 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.83514260451271,
            "unit": "iter/sec",
            "range": "stddev: 0.002356079456690676",
            "extra": "mean: 33.517520370381774 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 108.68346544977962,
            "unit": "iter/sec",
            "range": "stddev: 0.0008703421253241529",
            "extra": "mean: 9.201031599991438 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.358231955215818,
            "unit": "iter/sec",
            "range": "stddev: 0.0018274148101890808",
            "extra": "mean: 32.939994709678444 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 160.8479694029646,
            "unit": "iter/sec",
            "range": "stddev: 0.0008981769623797916",
            "extra": "mean: 6.217050819552149 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 7922.633400750721,
            "unit": "iter/sec",
            "range": "stddev: 0.000059176227086317257",
            "extra": "mean: 126.22065788191631 usec\nrounds: 3832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1341.3375972618553,
            "unit": "iter/sec",
            "range": "stddev: 0.0003935333218122079",
            "extra": "mean: 745.5244690384836 usec\nrounds: 759"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.9598280684091994,
            "unit": "iter/sec",
            "range": "stddev: 0.04007490743989201",
            "extra": "mean: 1.041853257799994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 542.6840958240693,
            "unit": "iter/sec",
            "range": "stddev: 0.0002512908899316142",
            "extra": "mean: 1.842692659864103 msec\nrounds: 441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 67.54320476583787,
            "unit": "iter/sec",
            "range": "stddev: 0.0016817181060342606",
            "extra": "mean: 14.80533835293794 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.64453614355658,
            "unit": "iter/sec",
            "range": "stddev: 0.0024797605269780776",
            "extra": "mean: 33.73302908695895 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 65.18715188984002,
            "unit": "iter/sec",
            "range": "stddev: 0.0022887757758966423",
            "extra": "mean: 15.340446253732685 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 347.2707114059871,
            "unit": "iter/sec",
            "range": "stddev: 0.0007427466075576761",
            "extra": "mean: 2.8795978674715257 msec\nrounds: 332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 174.8005292261558,
            "unit": "iter/sec",
            "range": "stddev: 0.0010395807598039392",
            "extra": "mean: 5.720806478258464 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 854.649623203372,
            "unit": "iter/sec",
            "range": "stddev: 0.00013469003712628563",
            "extra": "mean: 1.1700701350008558 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 185.14234753903312,
            "unit": "iter/sec",
            "range": "stddev: 0.000838121324244753",
            "extra": "mean: 5.401249434785158 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1525.8139777872173,
            "unit": "iter/sec",
            "range": "stddev: 0.0001896798026349531",
            "extra": "mean: 655.3878877490891 usec\nrounds: 1559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 73.78871591868963,
            "unit": "iter/sec",
            "range": "stddev: 0.0017588966011489625",
            "extra": "mean: 13.552207645162643 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.676453139265998,
            "unit": "iter/sec",
            "range": "stddev: 0.003537352687714106",
            "extra": "mean: 73.11837285713604 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 121.21891962054194,
            "unit": "iter/sec",
            "range": "stddev: 0.0011178675017363602",
            "extra": "mean: 8.249537309277738 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 68.89890181652373,
            "unit": "iter/sec",
            "range": "stddev: 0.00177120615651402",
            "extra": "mean: 14.514019434779645 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 63.203925371134936,
            "unit": "iter/sec",
            "range": "stddev: 0.0017586886815010615",
            "extra": "mean: 15.821802113206996 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 459027.4445071783,
            "unit": "iter/sec",
            "range": "stddev: 5.718652141789425e-7",
            "extra": "mean: 2.1785189795647653 usec\nrounds: 1607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1440.55314974432,
            "unit": "iter/sec",
            "range": "stddev: 0.00025264939378696525",
            "extra": "mean: 694.1777887039345 usec\nrounds: 1027"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 31.798452865583137,
            "unit": "iter/sec",
            "range": "stddev: 0.0016915948802147442",
            "extra": "mean: 31.448070892856048 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8736858.657293174,
            "unit": "iter/sec",
            "range": "stddev: 2.5463593677205797e-7",
            "extra": "mean: 114.45761448425456 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 645.1826293227402,
            "unit": "iter/sec",
            "range": "stddev: 0.015901615258876525",
            "extra": "mean: 1.5499487347477379 msec\nrounds: 377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 66.6205698613372,
            "unit": "iter/sec",
            "range": "stddev: 0.002028375578475054",
            "extra": "mean: 15.010378957751053 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1516.3962974830135,
            "unit": "iter/sec",
            "range": "stddev: 0.00019531038417595342",
            "extra": "mean: 659.4582179209006 usec\nrounds: 1395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1455.7699930727306,
            "unit": "iter/sec",
            "range": "stddev: 0.0003307841732706719",
            "extra": "mean: 686.9217010643795 usec\nrounds: 940"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.557723706899913,
            "unit": "iter/sec",
            "range": "stddev: 0.013082356464156966",
            "extra": "mean: 1.7930024986000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 69.86217178370018,
            "unit": "iter/sec",
            "range": "stddev: 0.0018701496859718958",
            "extra": "mean: 14.313897986110332 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4424230.776331453,
            "unit": "iter/sec",
            "range": "stddev: 4.4932458060279687e-7",
            "extra": "mean: 226.02799233480323 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1246815.2548287334,
            "unit": "iter/sec",
            "range": "stddev: 0.000019652693509993472",
            "extra": "mean: 802.0434431862668 nsec\nrounds: 78125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 175.51589443304695,
            "unit": "iter/sec",
            "range": "stddev: 0.004627681642921598",
            "extra": "mean: 5.697489695905942 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1470.217891861129,
            "unit": "iter/sec",
            "range": "stddev: 0.0001906330470512774",
            "extra": "mean: 680.1712899399649 usec\nrounds: 1014"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1448.255797224389,
            "unit": "iter/sec",
            "range": "stddev: 0.00024076055382954054",
            "extra": "mean: 690.4857566712454 usec\nrounds: 1274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1455272.695083824,
            "unit": "iter/sec",
            "range": "stddev: 0.000009158284444833607",
            "extra": "mean: 687.1564369881892 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5749.836942760404,
            "unit": "iter/sec",
            "range": "stddev: 0.0000749707064628879",
            "extra": "mean: 173.9179754060845 usec\nrounds: 2399"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.61483941168641,
            "unit": "iter/sec",
            "range": "stddev: 0.006101603082005865",
            "extra": "mean: 60.187160117637255 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 69.43315588394735,
            "unit": "iter/sec",
            "range": "stddev: 0.0015530224721811098",
            "extra": "mean: 14.402341176475254 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 230.9552836505105,
            "unit": "iter/sec",
            "range": "stddev: 0.000505377334480769",
            "extra": "mean: 4.329842488094944 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 69.94932406581437,
            "unit": "iter/sec",
            "range": "stddev: 0.0015991497509132292",
            "extra": "mean: 14.296063805550338 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 70.9883494134855,
            "unit": "iter/sec",
            "range": "stddev: 0.0016798193048483943",
            "extra": "mean: 14.086818587305146 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.915503488265394,
            "unit": "iter/sec",
            "range": "stddev: 0.0024795447483298826",
            "extra": "mean: 32.34623043999818 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 48.60192172591877,
            "unit": "iter/sec",
            "range": "stddev: 0.04469260039783019",
            "extra": "mean: 20.575318104483777 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 77.25828017184455,
            "unit": "iter/sec",
            "range": "stddev: 0.00181683586605376",
            "extra": "mean: 12.943596437504349 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 77.20882541535566,
            "unit": "iter/sec",
            "range": "stddev: 0.0011990562644682875",
            "extra": "mean: 12.951887230771355 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.01003565875197,
            "unit": "iter/sec",
            "range": "stddev: 0.001134538082748501",
            "extra": "mean: 12.498432125003234 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 176.17073742560783,
            "unit": "iter/sec",
            "range": "stddev: 0.0007201010914226763",
            "extra": "mean: 5.676311597561843 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 182.93203508481787,
            "unit": "iter/sec",
            "range": "stddev: 0.000703876911907291",
            "extra": "mean: 5.466511098159173 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 33.81649601611006,
            "unit": "iter/sec",
            "range": "stddev: 0.004082865888328105",
            "extra": "mean: 29.571366575756503 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4928215623062226,
            "unit": "iter/sec",
            "range": "stddev: 0.03868951343354506",
            "extra": "mean: 2.029131995199987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 132.99823259859602,
            "unit": "iter/sec",
            "range": "stddev: 0.0005934378730304974",
            "extra": "mean: 7.518896909089875 msec\nrounds: 77"
          }
        ]
      }
    ]
  }
}