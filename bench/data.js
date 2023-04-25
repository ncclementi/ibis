window.BENCHMARK_DATA = {
  "lastUpdate": 1682426576394,
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
      },
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
          "id": "e61c66b874d74b95d0f79c0255579ec595eb1a76",
          "message": "feat(common): implement copy protocol for Immutable base class",
          "timestamp": "2023-04-25T08:33:40-04:00",
          "tree_id": "52abd2697cd144db773bd7d4e95f8bbc94e9c356",
          "url": "https://github.com/ibis-project/ibis/commit/e61c66b874d74b95d0f79c0255579ec595eb1a76"
        },
        "date": 1682426487832,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 84.15840834232588,
            "unit": "iter/sec",
            "range": "stddev: 0.0008269505905812248",
            "extra": "mean: 11.882353999999177 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6194130.176859368,
            "unit": "iter/sec",
            "range": "stddev: 1.1862937379852348e-7",
            "extra": "mean: 161.44316820086595 nsec\nrounds: 54946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6736586978375689,
            "unit": "iter/sec",
            "range": "stddev: 0.014816502285230449",
            "extra": "mean: 1.4844312160000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.699411316547,
            "unit": "iter/sec",
            "range": "stddev: 0.0006787800264729053",
            "extra": "mean: 10.905195416664052 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 90.9369489814518,
            "unit": "iter/sec",
            "range": "stddev: 0.0008648834091731771",
            "extra": "mean: 10.996630205879983 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1779518.623407443,
            "unit": "iter/sec",
            "range": "stddev: 8.371615556205206e-7",
            "extra": "mean: 561.9497244064737 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 65.59599083656458,
            "unit": "iter/sec",
            "range": "stddev: 0.016810410359776023",
            "extra": "mean: 15.244834131578955 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1785.0560301547937,
            "unit": "iter/sec",
            "range": "stddev: 0.00023834987377757376",
            "extra": "mean: 560.206505065997 usec\nrounds: 1283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.204431735960598,
            "unit": "iter/sec",
            "range": "stddev: 0.005712110923652653",
            "extra": "mean: 830.2670630000023 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1668.09228995488,
            "unit": "iter/sec",
            "range": "stddev: 0.0022424938323033754",
            "extra": "mean: 599.487214239836 usec\nrounds: 1559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1805.826182704351,
            "unit": "iter/sec",
            "range": "stddev: 0.0001192482129617039",
            "extra": "mean: 553.763152609976 usec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.43848873595638,
            "unit": "iter/sec",
            "range": "stddev: 0.0003404182891718241",
            "extra": "mean: 9.57501407865276 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4968339.957465234,
            "unit": "iter/sec",
            "range": "stddev: 2.635052546963616e-7",
            "extra": "mean: 201.27447166684576 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.13462450752719,
            "unit": "iter/sec",
            "range": "stddev: 0.0008768869274680509",
            "extra": "mean: 11.476494053332544 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 928951.3898619453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014236146128455554",
            "extra": "mean: 1.0764825919993655 usec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1039.9124399590814,
            "unit": "iter/sec",
            "range": "stddev: 0.00010632995224168822",
            "extra": "mean: 961.6194225346011 usec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 72.055353746227,
            "unit": "iter/sec",
            "range": "stddev: 0.013639155756540294",
            "extra": "mean: 13.87821928571633 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1823.1103857946887,
            "unit": "iter/sec",
            "range": "stddev: 0.00015258787974550307",
            "extra": "mean: 548.5131387500174 usec\nrounds: 1600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 85.49079195021662,
            "unit": "iter/sec",
            "range": "stddev: 0.001037225357276337",
            "extra": "mean: 11.697166176473422 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9494877.050953597,
            "unit": "iter/sec",
            "range": "stddev: 1.0444806909124954e-7",
            "extra": "mean: 105.31995249993429 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 109.59519343975965,
            "unit": "iter/sec",
            "range": "stddev: 0.0002688576189839262",
            "extra": "mean: 9.124487750000299 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4484810.669386166,
            "unit": "iter/sec",
            "range": "stddev: 5.321107165086763e-7",
            "extra": "mean: 222.9748530581004 nsec\nrounds: 49505"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.522300610037813,
            "unit": "iter/sec",
            "range": "stddev: 0.0036632929989766925",
            "extra": "mean: 132.93805337499975 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.71966623460238,
            "unit": "iter/sec",
            "range": "stddev: 0.020670139234880182",
            "extra": "mean: 28.802120194444097 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 236.61561611598015,
            "unit": "iter/sec",
            "range": "stddev: 0.00038955546593637713",
            "extra": "mean: 4.226263745457262 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6983.875195829875,
            "unit": "iter/sec",
            "range": "stddev: 0.00004303485515295924",
            "extra": "mean: 143.1869802881225 usec\nrounds: 4515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 98.01863947874412,
            "unit": "iter/sec",
            "range": "stddev: 0.0007164067279113359",
            "extra": "mean: 10.202141198020357 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1818984.4291194056,
            "unit": "iter/sec",
            "range": "stddev: 0.000001026640725176232",
            "extra": "mean: 549.7573173202551 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 114.67153993607216,
            "unit": "iter/sec",
            "range": "stddev: 0.0004569785205331415",
            "extra": "mean: 8.72055961363636 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.59516988648997,
            "unit": "iter/sec",
            "range": "stddev: 0.00024005078282511274",
            "extra": "mean: 6.510621400002492 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 232.0285833842524,
            "unit": "iter/sec",
            "range": "stddev: 0.0008037423156245664",
            "extra": "mean: 4.3098138402368456 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 354.70637463180964,
            "unit": "iter/sec",
            "range": "stddev: 0.00038446434268352234",
            "extra": "mean: 2.8192332349200506 msec\nrounds: 315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1586.4297967816103,
            "unit": "iter/sec",
            "range": "stddev: 0.0035903555823385215",
            "extra": "mean: 630.3462038022103 usec\nrounds: 1315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 204.94792457684056,
            "unit": "iter/sec",
            "range": "stddev: 0.0037459500321497695",
            "extra": "mean: 4.879288248781815 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.74352210041488,
            "unit": "iter/sec",
            "range": "stddev: 0.0006444366159650053",
            "extra": "mean: 10.66740375861741 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 585.8639188465152,
            "unit": "iter/sec",
            "range": "stddev: 0.0003926960155375901",
            "extra": "mean: 1.706881014227436 msec\nrounds: 492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 99.56163571823767,
            "unit": "iter/sec",
            "range": "stddev: 0.0004061058564181766",
            "extra": "mean: 10.04402943750371 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 168.97935141678843,
            "unit": "iter/sec",
            "range": "stddev: 0.0004021681154871624",
            "extra": "mean: 5.917882815951252 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 22.718309800850324,
            "unit": "iter/sec",
            "range": "stddev: 0.03551433066014277",
            "extra": "mean: 44.01735907142929 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3637.046878117073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000578422016465878",
            "extra": "mean: 274.94833954895506 usec\nrounds: 2038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 144.5622502733827,
            "unit": "iter/sec",
            "range": "stddev: 0.00041219472064890313",
            "extra": "mean: 6.917435209460928 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1545057.386055513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038641008796156704",
            "extra": "mean: 647.2251510042428 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1824.6438304625042,
            "unit": "iter/sec",
            "range": "stddev: 0.00017755456330520076",
            "extra": "mean: 548.0521641018147 usec\nrounds: 1170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 221.75848171888492,
            "unit": "iter/sec",
            "range": "stddev: 0.0005342698159550427",
            "extra": "mean: 4.509410383083625 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 89.48991451858856,
            "unit": "iter/sec",
            "range": "stddev: 0.0006867962170956977",
            "extra": "mean: 11.174443571429304 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2255677465810633,
            "unit": "iter/sec",
            "range": "stddev: 0.020467745410166324",
            "extra": "mean: 815.9483657999942 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1554.616829848133,
            "unit": "iter/sec",
            "range": "stddev: 0.0001217599180117058",
            "extra": "mean: 643.2453198758228 usec\nrounds: 1288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.259530486172743,
            "unit": "iter/sec",
            "range": "stddev: 0.026945332534815493",
            "extra": "mean: 31.99024375757459 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.962621549780685,
            "unit": "iter/sec",
            "range": "stddev: 0.001943379071235973",
            "extra": "mean: 19.6222244772709 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 455.35647055940075,
            "unit": "iter/sec",
            "range": "stddev: 0.00030718477326258483",
            "extra": "mean: 2.1960816737083153 msec\nrounds: 426"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 293.64966246425234,
            "unit": "iter/sec",
            "range": "stddev: 0.00019380568719794684",
            "extra": "mean: 3.405418523584156 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.45922158715037,
            "unit": "iter/sec",
            "range": "stddev: 0.0014853551950027427",
            "extra": "mean: 16.01044608928857 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.21047398721553,
            "unit": "iter/sec",
            "range": "stddev: 0.011439757211346668",
            "extra": "mean: 452.39166159999513 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.040002150039165,
            "unit": "iter/sec",
            "range": "stddev: 0.009208907468149534",
            "extra": "mean: 62.34413129411946 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9856.987826536802,
            "unit": "iter/sec",
            "range": "stddev: 0.0000386787841411949",
            "extra": "mean: 101.45087095550817 usec\nrounds: 5006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 163.8098467027017,
            "unit": "iter/sec",
            "range": "stddev: 0.0003821756951325799",
            "extra": "mean: 6.104639129629972 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138709.37834575595,
            "unit": "iter/sec",
            "range": "stddev: 0.000011406408125073956",
            "extra": "mean: 7.2093178696781095 usec\nrounds: 37594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 225.36602460698634,
            "unit": "iter/sec",
            "range": "stddev: 0.0005942744305118572",
            "extra": "mean: 4.437226071427095 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 154.45542544227928,
            "unit": "iter/sec",
            "range": "stddev: 0.0006313793668376479",
            "extra": "mean: 6.474359816992668 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.04027944236313,
            "unit": "iter/sec",
            "range": "stddev: 0.0009246222987412023",
            "extra": "mean: 11.358437369052933 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3960982.0053788964,
            "unit": "iter/sec",
            "range": "stddev: 3.3435830723298735e-7",
            "extra": "mean: 252.46264654571215 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.668966777414,
            "unit": "iter/sec",
            "range": "stddev: 0.0014196717127111487",
            "extra": "mean: 42.24941499999253 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 72.6053669050895,
            "unit": "iter/sec",
            "range": "stddev: 0.019679539668923163",
            "extra": "mean: 13.773086517243422 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8659.36040386169,
            "unit": "iter/sec",
            "range": "stddev: 0.00006880097927699839",
            "extra": "mean: 115.48197018731827 usec\nrounds: 2717"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1782323.9946210284,
            "unit": "iter/sec",
            "range": "stddev: 0.000002089250763913763",
            "extra": "mean: 561.0652176697132 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.99812323319767,
            "unit": "iter/sec",
            "range": "stddev: 0.002992735346424992",
            "extra": "mean: 27.02839800000234 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 90.63237458096994,
            "unit": "iter/sec",
            "range": "stddev: 0.0009540480109529981",
            "extra": "mean: 11.033584904107432 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6534876029481387,
            "unit": "iter/sec",
            "range": "stddev: 0.06683046498206913",
            "extra": "mean: 1.5302509114000145 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.32130846650078,
            "unit": "iter/sec",
            "range": "stddev: 0.0012654519798296743",
            "extra": "mean: 11.584625137929597 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1709.3966852306905,
            "unit": "iter/sec",
            "range": "stddev: 0.00014890367987371107",
            "extra": "mean: 585.0017194019805 usec\nrounds: 1005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11340.922990704685,
            "unit": "iter/sec",
            "range": "stddev: 0.00004413965342685438",
            "extra": "mean: 88.176244633671 usec\nrounds: 7268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 92.72386594656605,
            "unit": "iter/sec",
            "range": "stddev: 0.0008496430639897016",
            "extra": "mean: 10.784709953489964 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 650.948455606728,
            "unit": "iter/sec",
            "range": "stddev: 0.00024178144153673078",
            "extra": "mean: 1.5362199439707287 msec\nrounds: 589"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 160.32352491562247,
            "unit": "iter/sec",
            "range": "stddev: 0.015967806837388267",
            "extra": "mean: 6.237387810218714 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1817.6668917264385,
            "unit": "iter/sec",
            "range": "stddev: 0.00012725929004502297",
            "extra": "mean: 550.1558093794566 usec\nrounds: 1322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5374512.823833786,
            "unit": "iter/sec",
            "range": "stddev: 3.559641441547301e-7",
            "extra": "mean: 186.0633759335552 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6057843749941628,
            "unit": "iter/sec",
            "range": "stddev: 0.02304083138879154",
            "extra": "mean: 1.6507523820000074 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11825213770841775,
            "unit": "iter/sec",
            "range": "stddev: 0.10698768534169925",
            "extra": "mean: 8.456506743799991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 233.99322393481785,
            "unit": "iter/sec",
            "range": "stddev: 0.0004001402281911891",
            "extra": "mean: 4.273628027273834 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 90.08482305478321,
            "unit": "iter/sec",
            "range": "stddev: 0.0011565803272417935",
            "extra": "mean: 11.100648989362734 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.24755818177323,
            "unit": "iter/sec",
            "range": "stddev: 0.0008583861027077205",
            "extra": "mean: 11.080632209304076 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 49.069517349515685,
            "unit": "iter/sec",
            "range": "stddev: 0.0006225733535968838",
            "extra": "mean: 20.37925078571962 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 149.3357620678789,
            "unit": "iter/sec",
            "range": "stddev: 0.004399738676182245",
            "extra": "mean: 6.696319663507399 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.98897701712646,
            "unit": "iter/sec",
            "range": "stddev: 0.002017427439412359",
            "extra": "mean: 26.323425333332164 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.80107018515663,
            "unit": "iter/sec",
            "range": "stddev: 0.0009022637177415328",
            "extra": "mean: 11.013086056814686 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 229.92522119931274,
            "unit": "iter/sec",
            "range": "stddev: 0.0004307461394372882",
            "extra": "mean: 4.349240134613771 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 218.47795702150518,
            "unit": "iter/sec",
            "range": "stddev: 0.0004542925471531548",
            "extra": "mean: 4.577120793479263 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 72.4137393054474,
            "unit": "iter/sec",
            "range": "stddev: 0.023269577636749802",
            "extra": "mean: 13.809534068968787 msec\nrounds: 87"
          }
        ]
      }
    ]
  }
}