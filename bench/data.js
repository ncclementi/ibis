window.BENCHMARK_DATA = {
  "lastUpdate": 1681988071613,
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
      },
      {
        "commit": {
          "author": {
            "email": "chelsealin@google.com",
            "name": "chelsealin",
            "username": "chelsea-lin"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "57a825bf7f60c488295703a085bf47509126dbfe",
          "message": "fix(bigquery): add srid=4326 to the geography dtype mapping",
          "timestamp": "2023-04-20T06:47:15-04:00",
          "tree_id": "c773053610f39f8cc3b3bd056a32b95cfc662d6c",
          "url": "https://github.com/ibis-project/ibis/commit/57a825bf7f60c488295703a085bf47509126dbfe"
        },
        "date": 1681987993773,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.0670395544971,
            "unit": "iter/sec",
            "range": "stddev: 0.008346185009759342",
            "extra": "mean: 11.102840783335921 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.84227328782592,
            "unit": "iter/sec",
            "range": "stddev: 0.00025089662579590573",
            "extra": "mean: 19.289277583335245 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.345488407764087,
            "unit": "iter/sec",
            "range": "stddev: 0.0006644112892382519",
            "extra": "mean: 39.45475360000046 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 88.72434485939196,
            "unit": "iter/sec",
            "range": "stddev: 0.009390287790718634",
            "extra": "mean: 11.270863724998748 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 167.34172516242273,
            "unit": "iter/sec",
            "range": "stddev: 0.00006707531828609733",
            "extra": "mean: 5.975795929134798 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.86773485004225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006934102838984844",
            "extra": "mean: 10.323354846152508 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 281.72088880745196,
            "unit": "iter/sec",
            "range": "stddev: 0.00024942735082005094",
            "extra": "mean: 3.5496125410972663 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 86.80941456326048,
            "unit": "iter/sec",
            "range": "stddev: 0.012620020376808278",
            "extra": "mean: 11.519487892310018 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.713249237815092,
            "unit": "iter/sec",
            "range": "stddev: 0.005305996265515871",
            "extra": "mean: 1.4020344459999934 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.44568062198425,
            "unit": "iter/sec",
            "range": "stddev: 0.00029773177515480544",
            "extra": "mean: 3.591364742186798 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 259.632447246258,
            "unit": "iter/sec",
            "range": "stddev: 0.00019274415444584672",
            "extra": "mean: 3.851598714283632 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4544.632589167159,
            "unit": "iter/sec",
            "range": "stddev: 0.0000318822812778437",
            "extra": "mean: 220.03978987952868 usec\nrounds: 909"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.13164886080488,
            "unit": "iter/sec",
            "range": "stddev: 0.00112302600193762",
            "extra": "mean: 23.184831241374873 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147650.61190412214,
            "unit": "iter/sec",
            "range": "stddev: 3.657598760183716e-7",
            "extra": "mean: 6.772745382520707 usec\nrounds: 33784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 285.45053833752513,
            "unit": "iter/sec",
            "range": "stddev: 0.00025990100025854404",
            "extra": "mean: 3.503233890620905 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6161749.09593577,
            "unit": "iter/sec",
            "range": "stddev: 9.473256601831587e-9",
            "extra": "mean: 162.2915805935023 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.74818036260873,
            "unit": "iter/sec",
            "range": "stddev: 0.000748060776641321",
            "extra": "mean: 15.936717116276638 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 300.4216330403843,
            "unit": "iter/sec",
            "range": "stddev: 0.00004621394687991145",
            "extra": "mean: 3.328655096770526 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.79032462731094,
            "unit": "iter/sec",
            "range": "stddev: 0.0007792672200560895",
            "extra": "mean: 9.824116424241113 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1158.9672527744715,
            "unit": "iter/sec",
            "range": "stddev: 0.00001092428803423813",
            "extra": "mean: 862.8371488547955 usec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74825.47847603055,
            "unit": "iter/sec",
            "range": "stddev: 5.01848055997381e-7",
            "extra": "mean: 13.364431746605375 usec\nrounds: 13948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.45447966894663,
            "unit": "iter/sec",
            "range": "stddev: 0.0005098999783289165",
            "extra": "mean: 17.405083220003235 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.19504022139029,
            "unit": "iter/sec",
            "range": "stddev: 0.00006740603116462573",
            "extra": "mean: 13.298749452833405 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 298.17804641009593,
            "unit": "iter/sec",
            "range": "stddev: 0.00004495983799833115",
            "extra": "mean: 3.3537009583350104 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 278.036819846451,
            "unit": "iter/sec",
            "range": "stddev: 0.00022554694504010119",
            "extra": "mean: 3.5966459426210577 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.42612359719828,
            "unit": "iter/sec",
            "range": "stddev: 0.0008113924615348088",
            "extra": "mean: 10.264187500001873 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 99.49471537001705,
            "unit": "iter/sec",
            "range": "stddev: 0.0007226292574126688",
            "extra": "mean: 10.050785072162256 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14022.942635214835,
            "unit": "iter/sec",
            "range": "stddev: 0.000001353331568789355",
            "extra": "mean: 71.31170867723368 usec\nrounds: 7617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1918.2527019813267,
            "unit": "iter/sec",
            "range": "stddev: 0.00010413606405583614",
            "extra": "mean: 521.3077499993192 usec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.31703607607176,
            "unit": "iter/sec",
            "range": "stddev: 0.0002635293647373595",
            "extra": "mean: 3.6993598868795794 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.33422526184276,
            "unit": "iter/sec",
            "range": "stddev: 0.0006890627776645896",
            "extra": "mean: 10.273878456522969 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9309698372339755,
            "unit": "iter/sec",
            "range": "stddev: 0.005937672205979771",
            "extra": "mean: 1.074148656600005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 140.16156865063877,
            "unit": "iter/sec",
            "range": "stddev: 0.013202252739603534",
            "extra": "mean: 7.134623346664739 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.21415345208035,
            "unit": "iter/sec",
            "range": "stddev: 0.00019449707468192286",
            "extra": "mean: 9.783380933334406 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.17320342785513,
            "unit": "iter/sec",
            "range": "stddev: 0.0007799706881835275",
            "extra": "mean: 23.162515648648977 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.62262376318142,
            "unit": "iter/sec",
            "range": "stddev: 0.0007596848054272066",
            "extra": "mean: 11.283800428570176 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 513746.9170690266,
            "unit": "iter/sec",
            "range": "stddev: 5.416076939789738e-7",
            "extra": "mean: 1.9464836999997819 usec\nrounds: 2270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.59535618834393,
            "unit": "iter/sec",
            "range": "stddev: 0.0008013777581919335",
            "extra": "mean: 9.842969575756362 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2133.823954218909,
            "unit": "iter/sec",
            "range": "stddev: 0.0000852512323472065",
            "extra": "mean: 468.6422223458693 usec\nrounds: 1808"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10329.810289505183,
            "unit": "iter/sec",
            "range": "stddev: 0.000002101966881055467",
            "extra": "mean: 96.80719896821086 usec\nrounds: 5041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.798474343121063,
            "unit": "iter/sec",
            "range": "stddev: 0.00018854173562665843",
            "extra": "mean: 172.45915749999577 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.782445460135564,
            "unit": "iter/sec",
            "range": "stddev: 0.00008859651361432512",
            "extra": "mean: 63.36153687499646 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2135.6224838284747,
            "unit": "iter/sec",
            "range": "stddev: 0.00008503908892925656",
            "extra": "mean: 468.2475519771294 usec\nrounds: 1366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8065750056096276,
            "unit": "iter/sec",
            "range": "stddev: 0.002407150462389552",
            "extra": "mean: 1.239810300399995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7173224.43928363,
            "unit": "iter/sec",
            "range": "stddev: 4.026737848530026e-9",
            "extra": "mean: 139.4073207195561 nsec\nrounds: 67115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 173.4209983416868,
            "unit": "iter/sec",
            "range": "stddev: 0.0033638183558882644",
            "extra": "mean: 5.766314399999741 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.99674948028141,
            "unit": "iter/sec",
            "range": "stddev: 0.00003809761217789006",
            "extra": "mean: 9.091177736840898 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.236415548121016,
            "unit": "iter/sec",
            "range": "stddev: 0.00035278091103672064",
            "extra": "mean: 20.731225333325032 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 261.3199750031773,
            "unit": "iter/sec",
            "range": "stddev: 0.00039959115780613364",
            "extra": "mean: 3.8267262194091414 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8012.579503149963,
            "unit": "iter/sec",
            "range": "stddev: 0.000013881646227343235",
            "extra": "mean: 124.80375384816747 usec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.71966492046479,
            "unit": "iter/sec",
            "range": "stddev: 0.02312048253895178",
            "extra": "mean: 26.511370186044534 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1766.9334696223448,
            "unit": "iter/sec",
            "range": "stddev: 0.000056052944127306654",
            "extra": "mean: 565.9522654317793 usec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.05723306225107,
            "unit": "iter/sec",
            "range": "stddev: 0.00006161307337458205",
            "extra": "mean: 6.132815951919322 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2727059.2116573863,
            "unit": "iter/sec",
            "range": "stddev: 1.5510633102171584e-8",
            "extra": "mean: 366.69537490220915 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.65249103294806,
            "unit": "iter/sec",
            "range": "stddev: 0.0001531913141625276",
            "extra": "mean: 8.956360854545602 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.5394242001171,
            "unit": "iter/sec",
            "range": "stddev: 0.000724970099971585",
            "extra": "mean: 9.848391478261375 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.25703277586645,
            "unit": "iter/sec",
            "range": "stddev: 0.0008115194858560157",
            "extra": "mean: 9.87585723762527 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 86.58021169037917,
            "unit": "iter/sec",
            "range": "stddev: 0.016138791894831438",
            "extra": "mean: 11.54998330999831 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.55458346788257,
            "unit": "iter/sec",
            "range": "stddev: 0.0007083551139208078",
            "extra": "mean: 10.356836144735015 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.62304614650122,
            "unit": "iter/sec",
            "range": "stddev: 0.0017544344245311095",
            "extra": "mean: 381.23614459999544 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1926018.8960340328,
            "unit": "iter/sec",
            "range": "stddev: 1.3038355331506675e-7",
            "extra": "mean: 519.2057056445047 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1706575.8737935985,
            "unit": "iter/sec",
            "range": "stddev: 9.494839927819798e-8",
            "extra": "mean: 585.9686729175833 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2191.4077358923055,
            "unit": "iter/sec",
            "range": "stddev: 0.00013040419690491997",
            "extra": "mean: 456.3276763248335 usec\nrounds: 1208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.53943129042241,
            "unit": "iter/sec",
            "range": "stddev: 0.00016241446195314335",
            "extra": "mean: 10.252264000007472 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.36814201983182,
            "unit": "iter/sec",
            "range": "stddev: 0.0007375238777927534",
            "extra": "mean: 10.37687330107711 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.354418870935,
            "unit": "iter/sec",
            "range": "stddev: 0.000022893872163256234",
            "extra": "mean: 1.8644388203327804 msec\nrounds: 423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 84.87693925771437,
            "unit": "iter/sec",
            "range": "stddev: 0.016944660838417842",
            "extra": "mean: 11.781763206183369 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17079508190197373,
            "unit": "iter/sec",
            "range": "stddev: 0.08408789000663408",
            "extra": "mean: 5.854969527599986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2254.0601711183317,
            "unit": "iter/sec",
            "range": "stddev: 0.00008058347335009757",
            "extra": "mean: 443.6438799696545 usec\nrounds: 1333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2173.252538246384,
            "unit": "iter/sec",
            "range": "stddev: 0.00008540090951083534",
            "extra": "mean: 460.1398053844715 usec\nrounds: 1634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.40898202033543,
            "unit": "iter/sec",
            "range": "stddev: 0.0002712187303145521",
            "extra": "mean: 3.540963863281066 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11909.336202881801,
            "unit": "iter/sec",
            "range": "stddev: 0.000019636515996354636",
            "extra": "mean: 83.96773614956153 usec\nrounds: 5397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6710629553486942,
            "unit": "iter/sec",
            "range": "stddev: 0.00242544896389353",
            "extra": "mean: 598.4214998000084 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2187.2356530954908,
            "unit": "iter/sec",
            "range": "stddev: 0.00008687252883051497",
            "extra": "mean: 457.1981069276863 usec\nrounds: 1328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2156.247459096875,
            "unit": "iter/sec",
            "range": "stddev: 0.00008599019985523198",
            "extra": "mean: 463.7686624423159 usec\nrounds: 1736"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.338083240523614,
            "unit": "iter/sec",
            "range": "stddev: 0.00036191784841000464",
            "extra": "mean: 88.19832936363396 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.5952946192146,
            "unit": "iter/sec",
            "range": "stddev: 0.00006270552167390925",
            "extra": "mean: 8.292197495412633 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11647309.512442801,
            "unit": "iter/sec",
            "range": "stddev: 3.290898851788301e-9",
            "extra": "mean: 85.85673789569996 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5595630.459487681,
            "unit": "iter/sec",
            "range": "stddev: 9.109942910303597e-9",
            "extra": "mean: 178.7108722135577 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 102.385467151673,
            "unit": "iter/sec",
            "range": "stddev: 0.0004392820450069501",
            "extra": "mean: 9.767011157146044 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 783218.7319967361,
            "unit": "iter/sec",
            "range": "stddev: 1.5184813610534653e-7",
            "extra": "mean: 1.276782537428085 usec\nrounds: 30488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 753.7765708416632,
            "unit": "iter/sec",
            "range": "stddev: 0.000010328070829194657",
            "extra": "mean: 1.3266530676104789 msec\nrounds: 636"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.0878711452997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000239158781337204",
            "extra": "mean: 1.4575392483337168 msec\nrounds: 600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9274405558904685,
            "unit": "iter/sec",
            "range": "stddev: 0.003519114267876566",
            "extra": "mean: 1.078236220800011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 129.20404820191757,
            "unit": "iter/sec",
            "range": "stddev: 0.000025605325756122553",
            "extra": "mean: 7.73969557391282 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 251.37636677106858,
            "unit": "iter/sec",
            "range": "stddev: 0.0037299232836003576",
            "extra": "mean: 3.9780987085023463 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1912651.5369535754,
            "unit": "iter/sec",
            "range": "stddev: 1.626511129803218e-7",
            "extra": "mean: 522.8343902061614 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.75615291577765,
            "unit": "iter/sec",
            "range": "stddev: 0.000043257387932825595",
            "extra": "mean: 5.134625967028883 msec\nrounds: 91"
          }
        ]
      }
    ]
  }
}