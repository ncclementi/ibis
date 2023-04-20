window.BENCHMARK_DATA = {
  "lastUpdate": 1681987847666,
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
          "id": "190cfd58ca6098f44fffea9106018f49c73c58a7",
          "message": "ci(bigquery): skip more failing tests",
          "timestamp": "2023-04-20T06:44:58-04:00",
          "tree_id": "a3674d4f61479314e23d548d524cef13d3fee855",
          "url": "https://github.com/ibis-project/ibis/commit/190cfd58ca6098f44fffea9106018f49c73c58a7"
        },
        "date": 1681987761703,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 92.7703110225591,
            "unit": "iter/sec",
            "range": "stddev: 0.007141371509975479",
            "extra": "mean: 10.779310632653033 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.734489285602418,
            "unit": "iter/sec",
            "range": "stddev: 0.0001903805926259012",
            "extra": "mean: 37.4048663999929 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.56591238026964,
            "unit": "iter/sec",
            "range": "stddev: 0.018248490045533538",
            "extra": "mean: 94.64398000000074 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 102.06864700960134,
            "unit": "iter/sec",
            "range": "stddev: 0.00009754818575318576",
            "extra": "mean: 9.79732786999648 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 690.3181464485084,
            "unit": "iter/sec",
            "range": "stddev: 0.00004335277279626858",
            "extra": "mean: 1.4486074357811933 msec\nrounds: 436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.52144345532614,
            "unit": "iter/sec",
            "range": "stddev: 0.00005522367932067726",
            "extra": "mean: 6.078235025159733 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 375.05833719877097,
            "unit": "iter/sec",
            "range": "stddev: 0.000041565501710795887",
            "extra": "mean: 2.6662518888895583 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1635705.1591122865,
            "unit": "iter/sec",
            "range": "stddev: 8.658021951270886e-8",
            "extra": "mean: 611.3571229075966 nsec\nrounds: 147081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.80988085539684,
            "unit": "iter/sec",
            "range": "stddev: 0.00033238814297230997",
            "extra": "mean: 3.7762941351348744 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 85.88132812925132,
            "unit": "iter/sec",
            "range": "stddev: 0.010784298649625875",
            "extra": "mean: 11.643974560977924 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5633371056342664,
            "unit": "iter/sec",
            "range": "stddev: 0.002830546083799522",
            "extra": "mean: 390.116460999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 116.69171156051038,
            "unit": "iter/sec",
            "range": "stddev: 0.00014256321921855798",
            "extra": "mean: 8.569588933327546 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.20423965663542,
            "unit": "iter/sec",
            "range": "stddev: 0.000042987857089332836",
            "extra": "mean: 5.149218172415077 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 173.3010358538504,
            "unit": "iter/sec",
            "range": "stddev: 0.004189935566063565",
            "extra": "mean: 5.77030595964428 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.60309199612263,
            "unit": "iter/sec",
            "range": "stddev: 0.00008051462957687002",
            "extra": "mean: 7.484856712964559 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 67543.34048797426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029121730612352277",
            "extra": "mean: 14.80530860297093 usec\nrounds: 13775"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.82414734727516,
            "unit": "iter/sec",
            "range": "stddev: 0.0006203838438836262",
            "extra": "mean: 10.435782917805799 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2286.52049838008,
            "unit": "iter/sec",
            "range": "stddev: 0.0000867846157180774",
            "extra": "mean: 437.34574026712863 usec\nrounds: 1644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 279.4118358890136,
            "unit": "iter/sec",
            "range": "stddev: 0.00025782774778431236",
            "extra": "mean: 3.578946456646219 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.22894587287148,
            "unit": "iter/sec",
            "range": "stddev: 0.019153075284473412",
            "extra": "mean: 25.491380860466695 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.54807262327343,
            "unit": "iter/sec",
            "range": "stddev: 0.0006149441420299592",
            "extra": "mean: 10.357534571424937 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.1361647319554,
            "unit": "iter/sec",
            "range": "stddev: 0.00005841917733369124",
            "extra": "mean: 1.844555049181091 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1787993115379138,
            "unit": "iter/sec",
            "range": "stddev: 0.05711386403866406",
            "extra": "mean: 5.5928626984000065 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.6532312577829,
            "unit": "iter/sec",
            "range": "stddev: 0.0002365222536802373",
            "extra": "mean: 3.588689768592337 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.873202083188445,
            "unit": "iter/sec",
            "range": "stddev: 0.0003216125573309055",
            "extra": "mean: 20.461110739130042 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1776352.432586794,
            "unit": "iter/sec",
            "range": "stddev: 1.5154338314659478e-7",
            "extra": "mean: 562.9513499997074 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.21757556350038,
            "unit": "iter/sec",
            "range": "stddev: 0.0006395883254631332",
            "extra": "mean: 10.39311159259083 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7924.618088306496,
            "unit": "iter/sec",
            "range": "stddev: 0.00005318863733820807",
            "extra": "mean: 126.18904644447058 usec\nrounds: 1378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 305.224725929553,
            "unit": "iter/sec",
            "range": "stddev: 0.00004281694902299159",
            "extra": "mean: 3.276274544778537 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9313406759394126,
            "unit": "iter/sec",
            "range": "stddev: 0.0015783137892760024",
            "extra": "mean: 1.0737209549999875 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.70009785615314,
            "unit": "iter/sec",
            "range": "stddev: 0.00009381318270572036",
            "extra": "mean: 9.033415682246536 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 87.32450023139967,
            "unit": "iter/sec",
            "range": "stddev: 0.013546611111221619",
            "extra": "mean: 11.451539915488981 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8013684029654758,
            "unit": "iter/sec",
            "range": "stddev: 0.003559193542621577",
            "extra": "mean: 1.2478655214000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1788847.112779356,
            "unit": "iter/sec",
            "range": "stddev: 1.0964220789521618e-7",
            "extra": "mean: 559.0192660155772 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7322304.853924484,
            "unit": "iter/sec",
            "range": "stddev: 4.193565492471178e-9",
            "extra": "mean: 136.56902026742537 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.10692474022413,
            "unit": "iter/sec",
            "range": "stddev: 0.00005594030621518417",
            "extra": "mean: 9.989318946666117 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.71012831581301,
            "unit": "iter/sec",
            "range": "stddev: 0.00008256732620262204",
            "extra": "mean: 13.385066021742354 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.3093990769038,
            "unit": "iter/sec",
            "range": "stddev: 0.0007603084033783554",
            "extra": "mean: 10.383202569891358 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.72748287935039,
            "unit": "iter/sec",
            "range": "stddev: 0.000638455016613491",
            "extra": "mean: 11.398936424236373 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.95820706826294,
            "unit": "iter/sec",
            "range": "stddev: 0.0001524641353719781",
            "extra": "mean: 6.411974200000259 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 501124.130845356,
            "unit": "iter/sec",
            "range": "stddev: 3.695692807640561e-7",
            "extra": "mean: 1.995513563302331 usec\nrounds: 2175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4722.60310503273,
            "unit": "iter/sec",
            "range": "stddev: 0.000022564397650595692",
            "extra": "mean: 211.74762684044552 usec\nrounds: 1155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11597.855113950127,
            "unit": "iter/sec",
            "range": "stddev: 0.000012389449060181038",
            "extra": "mean: 86.222839497036 usec\nrounds: 2542"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 85.5584125286884,
            "unit": "iter/sec",
            "range": "stddev: 0.01273210377098626",
            "extra": "mean: 11.68792139130319 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2291.0214943519254,
            "unit": "iter/sec",
            "range": "stddev: 0.00009897440475536722",
            "extra": "mean: 436.4865202990494 usec\nrounds: 1601"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.48536418629012,
            "unit": "iter/sec",
            "range": "stddev: 0.0009715613952420936",
            "extra": "mean: 22.47930343589698 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.75903969826503,
            "unit": "iter/sec",
            "range": "stddev: 0.000040094152782997204",
            "extra": "mean: 9.279963915789244 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.31684740521528,
            "unit": "iter/sec",
            "range": "stddev: 0.0007921857168950258",
            "extra": "mean: 9.870026808083697 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2513394.5510477573,
            "unit": "iter/sec",
            "range": "stddev: 1.5671896208877954e-8",
            "extra": "mean: 397.8682931348844 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5733271.177920098,
            "unit": "iter/sec",
            "range": "stddev: 9.104980138421935e-9",
            "extra": "mean: 174.42049555431484 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2345.3357047462805,
            "unit": "iter/sec",
            "range": "stddev: 0.00013290421270920142",
            "extra": "mean: 426.37819309887686 usec\nrounds: 1507"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.16639905654787,
            "unit": "iter/sec",
            "range": "stddev: 0.0000629050573399499",
            "extra": "mean: 6.32245537588852 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.35593415159852,
            "unit": "iter/sec",
            "range": "stddev: 0.0007201694855457169",
            "extra": "mean: 10.598167555559712 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9258716811616292,
            "unit": "iter/sec",
            "range": "stddev: 0.005091303237659753",
            "extra": "mean: 1.0800632747999885 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.15481817115729,
            "unit": "iter/sec",
            "range": "stddev: 0.00006135916878232386",
            "extra": "mean: 8.392442834863566 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6758698000812027,
            "unit": "iter/sec",
            "range": "stddev: 0.002547375748359019",
            "extra": "mean: 596.7050661999792 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6302909.136571761,
            "unit": "iter/sec",
            "range": "stddev: 8.058587268092337e-9",
            "extra": "mean: 158.65689609860277 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.48834838681452,
            "unit": "iter/sec",
            "range": "stddev: 0.0007633689985227657",
            "extra": "mean: 22.994664941177568 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1781.430859753038,
            "unit": "iter/sec",
            "range": "stddev: 0.000006054006238776683",
            "extra": "mean: 561.3465122854284 usec\nrounds: 1343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13628.429416578174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017191982776596942",
            "extra": "mean: 73.37602664497491 usec\nrounds: 7844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 252.9712649168998,
            "unit": "iter/sec",
            "range": "stddev: 0.0003708748581425873",
            "extra": "mean: 3.953018143497431 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.49040978528552,
            "unit": "iter/sec",
            "range": "stddev: 0.0007160388130152809",
            "extra": "mean: 10.257419188230067 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 257.2888218047812,
            "unit": "iter/sec",
            "range": "stddev: 0.0039050514915499905",
            "extra": "mean: 3.8866826509810575 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.56760526337843,
            "unit": "iter/sec",
            "range": "stddev: 0.0007817034225744608",
            "extra": "mean: 10.355439562497182 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 82.98513817588368,
            "unit": "iter/sec",
            "range": "stddev: 0.018091779955318098",
            "extra": "mean: 12.050350484210078 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7127942885659386,
            "unit": "iter/sec",
            "range": "stddev: 0.0014662600822795565",
            "extra": "mean: 1.402929310800016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 763.2351543345384,
            "unit": "iter/sec",
            "range": "stddev: 0.000011065861633702543",
            "extra": "mean: 1.3102121860095608 msec\nrounds: 629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2417.8076108295004,
            "unit": "iter/sec",
            "range": "stddev: 0.00007734350032984115",
            "extra": "mean: 413.5978377770597 usec\nrounds: 1350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12342955.76950213,
            "unit": "iter/sec",
            "range": "stddev: 3.4945118227726846e-9",
            "extra": "mean: 81.01787113824139 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.390986714403454,
            "unit": "iter/sec",
            "range": "stddev: 0.00028008558821271314",
            "extra": "mean: 18.385399133330793 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2340.2045829616673,
            "unit": "iter/sec",
            "range": "stddev: 0.00013556845110009806",
            "extra": "mean: 427.3130679602554 usec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2314.10347162102,
            "unit": "iter/sec",
            "range": "stddev: 0.00008111677067707813",
            "extra": "mean: 432.1327945199892 usec\nrounds: 1752"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.031004443521642,
            "unit": "iter/sec",
            "range": "stddev: 0.00009128655178495694",
            "extra": "mean: 62.37912312500882 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.8103149360814,
            "unit": "iter/sec",
            "range": "stddev: 0.00029175543264946496",
            "extra": "mean: 15.195186362065812 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9629.56320949428,
            "unit": "iter/sec",
            "range": "stddev: 0.000002515152353006551",
            "extra": "mean: 103.84687012740608 usec\nrounds: 4951"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.95011376379962,
            "unit": "iter/sec",
            "range": "stddev: 0.0003746545561541733",
            "extra": "mean: 17.87306464150591 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 726324.467505576,
            "unit": "iter/sec",
            "range": "stddev: 1.4887422000246695e-7",
            "extra": "mean: 1.3767951442339688 usec\nrounds: 24754"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.78727709070061,
            "unit": "iter/sec",
            "range": "stddev: 0.0001786085879426965",
            "extra": "mean: 172.79283233333823 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.89906447459708,
            "unit": "iter/sec",
            "range": "stddev: 0.01516442641692318",
            "extra": "mean: 11.507603747475633 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 263.4953942719482,
            "unit": "iter/sec",
            "range": "stddev: 0.0003902563239949558",
            "extra": "mean: 3.7951327489539355 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1168.7167766529817,
            "unit": "iter/sec",
            "range": "stddev: 0.00001287595616939891",
            "extra": "mean: 855.6392960010726 usec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.86794994781874,
            "unit": "iter/sec",
            "range": "stddev: 0.00079261296356241",
            "extra": "mean: 9.913951860004317 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139134.211347828,
            "unit": "iter/sec",
            "range": "stddev: 4.7152274425508384e-7",
            "extra": "mean: 7.18730490734629 usec\nrounds: 43669"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2332.7624569636246,
            "unit": "iter/sec",
            "range": "stddev: 0.00008806808522445717",
            "extra": "mean: 428.67630907504497 usec\nrounds: 1223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2319.5832480967833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000846461029898827",
            "extra": "mean: 431.11192530834984 usec\nrounds: 1861"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 232.0499192196153,
            "unit": "iter/sec",
            "range": "stddev: 0.010209829385228282",
            "extra": "mean: 4.309417574300407 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.09090830603606,
            "unit": "iter/sec",
            "range": "stddev: 0.00026911249358127796",
            "extra": "mean: 3.6089238947368827 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 270.03789422188197,
            "unit": "iter/sec",
            "range": "stddev: 0.000275694264121788",
            "extra": "mean: 3.703183965648652 msec\nrounds: 262"
          }
        ]
      }
    ]
  }
}