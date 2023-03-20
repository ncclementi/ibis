window.BENCHMARK_DATA = {
  "lastUpdate": 1679315801204,
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
          "id": "de6c962c1e1cc1a0e6db2577b5cfcfa34daf6585",
          "message": "build(docs): make `execute_ignore` a list",
          "timestamp": "2023-03-20T08:29:56-04:00",
          "tree_id": "e49752db29695d235770f85f8ec29d49a1636124",
          "url": "https://github.com/ibis-project/ibis/commit/de6c962c1e1cc1a0e6db2577b5cfcfa34daf6585"
        },
        "date": 1679315715549,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6648017.472452492,
            "unit": "iter/sec",
            "range": "stddev: 1.2624996587016472e-8",
            "extra": "mean: 150.42078396191226 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.88261999995387,
            "unit": "iter/sec",
            "range": "stddev: 0.0001845070920358402",
            "extra": "mean: 10.216318280001815 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2526551.704305022,
            "unit": "iter/sec",
            "range": "stddev: 1.9193824836289945e-8",
            "extra": "mean: 395.7963726988194 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.23442979667973,
            "unit": "iter/sec",
            "range": "stddev: 0.0001897717137053056",
            "extra": "mean: 14.238031160712492 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 322.8582014771829,
            "unit": "iter/sec",
            "range": "stddev: 0.00006141464477963301",
            "extra": "mean: 3.0973349768556897 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 248.3898930056298,
            "unit": "iter/sec",
            "range": "stddev: 0.004134804411328094",
            "extra": "mean: 4.025928703859681 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.532653387874543,
            "unit": "iter/sec",
            "range": "stddev: 0.0006000724431456962",
            "extra": "mean: 180.7451018333476 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 187.6487559602091,
            "unit": "iter/sec",
            "range": "stddev: 0.00002294170151949258",
            "extra": "mean: 5.329105406976692 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1742.9417083144706,
            "unit": "iter/sec",
            "range": "stddev: 0.000005667784566354409",
            "extra": "mean: 573.7426531418886 usec\nrounds: 1257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.362182321830627,
            "unit": "iter/sec",
            "range": "stddev: 0.0002989275137837293",
            "extra": "mean: 96.50476790909579 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.98002096399053,
            "unit": "iter/sec",
            "range": "stddev: 0.00004745108474785595",
            "extra": "mean: 13.517162971429084 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2946.1131153478022,
            "unit": "iter/sec",
            "range": "stddev: 0.0039453253809162",
            "extra": "mean: 339.43028011738284 usec\nrounds: 689"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5737687.149695197,
            "unit": "iter/sec",
            "range": "stddev: 2.6308698786072152e-8",
            "extra": "mean: 174.2862540097285 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6189510.718335768,
            "unit": "iter/sec",
            "range": "stddev: 2.5370225797718752e-8",
            "extra": "mean: 161.56365914953827 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.35728064167198,
            "unit": "iter/sec",
            "range": "stddev: 0.0004756105548109312",
            "extra": "mean: 10.711537366199044 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.62502396821143,
            "unit": "iter/sec",
            "range": "stddev: 0.0006125306045427492",
            "extra": "mean: 15.968057760865715 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 349.87735415204264,
            "unit": "iter/sec",
            "range": "stddev: 0.00003519097387282963",
            "extra": "mean: 2.8581443986953214 msec\nrounds: 306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.28433397116854,
            "unit": "iter/sec",
            "range": "stddev: 0.000493696984237589",
            "extra": "mean: 9.873195200006535 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.69546268603061,
            "unit": "iter/sec",
            "range": "stddev: 0.0003156519956691795",
            "extra": "mean: 9.833280400005151 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5367.224254370243,
            "unit": "iter/sec",
            "range": "stddev: 0.00006652213813815121",
            "extra": "mean: 186.31604580072346 usec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 107.85563173674454,
            "unit": "iter/sec",
            "range": "stddev: 0.009893480042429932",
            "extra": "mean: 9.27165307826311 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13492.468251885182,
            "unit": "iter/sec",
            "range": "stddev: 0.000001658391339809905",
            "extra": "mean: 74.11542360755816 usec\nrounds: 1813"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9210402613780567,
            "unit": "iter/sec",
            "range": "stddev: 0.005052736815610038",
            "extra": "mean: 1.0857288675999939 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.17814732836554,
            "unit": "iter/sec",
            "range": "stddev: 0.00014376983317240124",
            "extra": "mean: 8.461801294121122 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2520834.792630013,
            "unit": "iter/sec",
            "range": "stddev: 1.9329834720899857e-8",
            "extra": "mean: 396.69398523200726 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 295.785182538014,
            "unit": "iter/sec",
            "range": "stddev: 0.00021529398280070172",
            "extra": "mean: 3.3808319653452585 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 74.16006789149365,
            "unit": "iter/sec",
            "range": "stddev: 0.017304375741667724",
            "extra": "mean: 13.484345799994912 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5319.294061409505,
            "unit": "iter/sec",
            "range": "stddev: 0.00003190707875035439",
            "extra": "mean: 187.9948708334843 usec\nrounds: 1440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8496599410776028,
            "unit": "iter/sec",
            "range": "stddev: 0.0021745554710112607",
            "extra": "mean: 1.1769414463999852 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.92433089007861,
            "unit": "iter/sec",
            "range": "stddev: 0.000675902829817709",
            "extra": "mean: 8.338591448274075 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 741245.4266932475,
            "unit": "iter/sec",
            "range": "stddev: 2.1736387384741732e-7",
            "extra": "mean: 1.3490808361018514 usec\nrounds: 23257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.36132641025408,
            "unit": "iter/sec",
            "range": "stddev: 0.0006886059272821761",
            "extra": "mean: 8.821350558134833 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 491844.0214095159,
            "unit": "iter/sec",
            "range": "stddev: 3.0334809849513847e-7",
            "extra": "mean: 2.0331648987705937 usec\nrounds: 2074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.16073875027274,
            "unit": "iter/sec",
            "range": "stddev: 0.0005324601702382287",
            "extra": "mean: 28.44081312120448 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.26407790957747,
            "unit": "iter/sec",
            "range": "stddev: 0.000656345789154948",
            "extra": "mean: 9.499916969386332 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7615537512315624,
            "unit": "iter/sec",
            "range": "stddev: 0.001423680721941738",
            "extra": "mean: 567.6806621999845 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5784.706985250049,
            "unit": "iter/sec",
            "range": "stddev: 0.0000481840383158582",
            "extra": "mean: 172.86960299801152 usec\nrounds: 1801"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5355.425817217745,
            "unit": "iter/sec",
            "range": "stddev: 0.00004995785579741774",
            "extra": "mean: 186.72651515123044 usec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.03931342912983,
            "unit": "iter/sec",
            "range": "stddev: 0.0006920422445500048",
            "extra": "mean: 8.330604128208309 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.3070650915384,
            "unit": "iter/sec",
            "range": "stddev: 0.0007110516995685287",
            "extra": "mean: 8.452580572650199 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 306.2628431793803,
            "unit": "iter/sec",
            "range": "stddev: 0.0001955041439109072",
            "extra": "mean: 3.2651691913350813 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6721139044058817,
            "unit": "iter/sec",
            "range": "stddev: 0.002686571722951556",
            "extra": "mean: 1.4878430477999927 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5731.080371621956,
            "unit": "iter/sec",
            "range": "stddev: 0.000048898637437524895",
            "extra": "mean: 174.4871708572793 usec\nrounds: 2704"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9201482965393861,
            "unit": "iter/sec",
            "range": "stddev: 0.002902362163847626",
            "extra": "mean: 1.0867813414000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 308.0235775388826,
            "unit": "iter/sec",
            "range": "stddev: 0.0002011349847796286",
            "extra": "mean: 3.246504725352615 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 273.7886922253371,
            "unit": "iter/sec",
            "range": "stddev: 0.00031842254267066243",
            "extra": "mean: 3.652451793651752 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 296.514675572069,
            "unit": "iter/sec",
            "range": "stddev: 0.00004023867775221727",
            "extra": "mean: 3.372514355556565 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6016198867591354,
            "unit": "iter/sec",
            "range": "stddev: 0.0025476075551524864",
            "extra": "mean: 384.37590559999535 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.33287596409292,
            "unit": "iter/sec",
            "range": "stddev: 0.00036238530453188686",
            "extra": "mean: 7.389187533894751 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.65700572702154,
            "unit": "iter/sec",
            "range": "stddev: 0.0007237533418176232",
            "extra": "mean: 8.357220656861005 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.54925589662085,
            "unit": "iter/sec",
            "range": "stddev: 0.0007497811373275569",
            "extra": "mean: 9.751411565658678 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17883993840145782,
            "unit": "iter/sec",
            "range": "stddev: 0.1261229323864046",
            "extra": "mean: 5.591592174199991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.04497835483428,
            "unit": "iter/sec",
            "range": "stddev: 0.00048387362187448594",
            "extra": "mean: 17.842811780009242 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 296.6087688226475,
            "unit": "iter/sec",
            "range": "stddev: 0.00023167775548782924",
            "extra": "mean: 3.371444492249432 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139209.60846698954,
            "unit": "iter/sec",
            "range": "stddev: 3.813236217374826e-7",
            "extra": "mean: 7.183412201300227 usec\nrounds: 37455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5545.279334854067,
            "unit": "iter/sec",
            "range": "stddev: 0.00005722562018012933",
            "extra": "mean: 180.3335665553657 usec\nrounds: 2697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1660200.3362927472,
            "unit": "iter/sec",
            "range": "stddev: 1.0395146024466621e-7",
            "extra": "mean: 602.3369458128261 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.67994524419343,
            "unit": "iter/sec",
            "range": "stddev: 0.00037593879319756723",
            "extra": "mean: 38.94089300000019 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.29893792786984,
            "unit": "iter/sec",
            "range": "stddev: 0.0007783284575582653",
            "extra": "mean: 9.58782534000079 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.7767721777878,
            "unit": "iter/sec",
            "range": "stddev: 0.00007936428755169188",
            "extra": "mean: 6.1433826621637495 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.33380847071005,
            "unit": "iter/sec",
            "range": "stddev: 0.0006040580732322195",
            "extra": "mean: 9.868374781246322 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 301.00530732543615,
            "unit": "iter/sec",
            "range": "stddev: 0.000240419313851982",
            "extra": "mean: 3.322200558141109 msec\nrounds: 301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8027.715578362733,
            "unit": "iter/sec",
            "range": "stddev: 0.000019143341479926956",
            "extra": "mean: 124.56843920770196 usec\nrounds: 4392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.80503472675016,
            "unit": "iter/sec",
            "range": "stddev: 0.00007545568526722758",
            "extra": "mean: 6.257625122449334 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.59014220370068,
            "unit": "iter/sec",
            "range": "stddev: 0.000665616894126013",
            "extra": "mean: 8.361893226087787 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.2958443852,
            "unit": "iter/sec",
            "range": "stddev: 0.00003860882109727437",
            "extra": "mean: 1.465639880748615 msec\nrounds: 587"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 168.46485870551544,
            "unit": "iter/sec",
            "range": "stddev: 0.004291224535823328",
            "extra": "mean: 5.935956066351188 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.53373185631855,
            "unit": "iter/sec",
            "range": "stddev: 0.0006637569021472626",
            "extra": "mean: 9.475643307691175 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.318891639087946,
            "unit": "iter/sec",
            "range": "stddev: 0.00046293437197710984",
            "extra": "mean: 65.27887418750211 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 262.9316038085285,
            "unit": "iter/sec",
            "range": "stddev: 0.010077668424132324",
            "extra": "mean: 3.8032704532857067 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11350164.73528445,
            "unit": "iter/sec",
            "range": "stddev: 6.197453857832625e-9",
            "extra": "mean: 88.1044481135974 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5535.615870639668,
            "unit": "iter/sec",
            "range": "stddev: 0.00006102401904743118",
            "extra": "mean: 180.6483728944951 usec\nrounds: 2494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.90329492006913,
            "unit": "iter/sec",
            "range": "stddev: 0.00007235356461755951",
            "extra": "mean: 9.016864654208208 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.52892811609834,
            "unit": "iter/sec",
            "range": "stddev: 0.0006768060994751972",
            "extra": "mean: 8.886603798165392 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11919.817472284178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017469884569497664",
            "extra": "mean: 83.89390209415441 usec\nrounds: 5873"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.4122909708495,
            "unit": "iter/sec",
            "range": "stddev: 0.00002599766046314265",
            "extra": "mean: 1.8573127262693592 msec\nrounds: 453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.2628744776539,
            "unit": "iter/sec",
            "range": "stddev: 0.00005076812918633225",
            "extra": "mean: 6.567589134452864 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11584.626021892806,
            "unit": "iter/sec",
            "range": "stddev: 0.00001567379383931922",
            "extra": "mean: 86.32130187976585 usec\nrounds: 5320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 734.4966925337059,
            "unit": "iter/sec",
            "range": "stddev: 0.00001555733046728396",
            "extra": "mean: 1.36147651877154 msec\nrounds: 586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.80516440840929,
            "unit": "iter/sec",
            "range": "stddev: 0.0007190194622336011",
            "extra": "mean: 23.3616670750024 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1165.690940700166,
            "unit": "iter/sec",
            "range": "stddev: 0.000014219168507016235",
            "extra": "mean: 857.8603170745714 usec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71156.92328208445,
            "unit": "iter/sec",
            "range": "stddev: 5.406894744010318e-7",
            "extra": "mean: 14.053446296936439 usec\nrounds: 13072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.13328763221418,
            "unit": "iter/sec",
            "range": "stddev: 0.0007254129763992287",
            "extra": "mean: 9.986688978723665 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 303.85425598242057,
            "unit": "iter/sec",
            "range": "stddev: 0.00021808547594883522",
            "extra": "mean: 3.2910514837674505 msec\nrounds: 308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2499488.155286359,
            "unit": "iter/sec",
            "range": "stddev: 1.826197821219848e-8",
            "extra": "mean: 400.081911924696 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5671.437994315509,
            "unit": "iter/sec",
            "range": "stddev: 0.00006543298158065482",
            "extra": "mean: 176.32212518276697 usec\nrounds: 2740"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.590924102392925,
            "unit": "iter/sec",
            "range": "stddev: 0.00025211368520530796",
            "extra": "mean: 21.012409799996274 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.11981413386028,
            "unit": "iter/sec",
            "range": "stddev: 0.0007728907030451864",
            "extra": "mean: 26.93979006451466 msec\nrounds: 31"
          }
        ]
      }
    ]
  }
}