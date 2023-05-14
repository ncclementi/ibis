window.BENCHMARK_DATA = {
  "lastUpdate": 1684024325532,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "f2e27689ad967fb3a0111a423ebaef1a71ade8a5",
          "message": "chore(flake/nixpkgs): `a56161ab` -> `78563313`",
          "timestamp": "2023-05-14T00:23:47Z",
          "tree_id": "9bfa4d9e50ed6da25c029451c272b32ec0681cc7",
          "url": "https://github.com/ibis-project/ibis/commit/f2e27689ad967fb3a0111a423ebaef1a71ade8a5"
        },
        "date": 1684024225711,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 576.8370141102482,
            "unit": "iter/sec",
            "range": "stddev: 0.00022310809857178088",
            "extra": "mean: 1.733591942851425 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.38731948566985,
            "unit": "iter/sec",
            "range": "stddev: 0.0011675696629373429",
            "extra": "mean: 18.73103968571448 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5199715454390453,
            "unit": "iter/sec",
            "range": "stddev: 0.00919482239254296",
            "extra": "mean: 1.923182160200008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.497022709438436,
            "unit": "iter/sec",
            "range": "stddev: 0.0012087429511335862",
            "extra": "mean: 35.09138516666136 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 76.55588299413628,
            "unit": "iter/sec",
            "range": "stddev: 0.0010851132533903941",
            "extra": "mean: 13.062353419352421 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1544.5567591814827,
            "unit": "iter/sec",
            "range": "stddev: 0.00013485191245871667",
            "extra": "mean: 647.4349317728775 usec\nrounds: 982"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 135.4908082794837,
            "unit": "iter/sec",
            "range": "stddev: 0.004758765766023203",
            "extra": "mean: 7.38057446625641 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 66.90323496748655,
            "unit": "iter/sec",
            "range": "stddev: 0.0027817654888219025",
            "extra": "mean: 14.946960344832013 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.78247849768188,
            "unit": "iter/sec",
            "range": "stddev: 0.0008204171562070767",
            "extra": "mean: 12.53408039998476 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 75.33063547222386,
            "unit": "iter/sec",
            "range": "stddev: 0.0012125119500539696",
            "extra": "mean: 13.2748116849316 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.782539518798217,
            "unit": "iter/sec",
            "range": "stddev: 0.0027634160704020027",
            "extra": "mean: 56.23493758823837 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6189857484741597,
            "unit": "iter/sec",
            "range": "stddev: 0.008277167588941228",
            "extra": "mean: 617.6706626000055 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.142937497763688,
            "unit": "iter/sec",
            "range": "stddev: 0.007968029220679934",
            "extra": "mean: 874.9384825999982 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 71.84272300280189,
            "unit": "iter/sec",
            "range": "stddev: 0.001064845149255126",
            "extra": "mean: 13.919294233335222 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.563095321968358,
            "unit": "iter/sec",
            "range": "stddev: 0.004678576648839487",
            "extra": "mean: 152.36713028572726 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 195.11666174258752,
            "unit": "iter/sec",
            "range": "stddev: 0.0006093128555573553",
            "extra": "mean: 5.125138935183683 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.56533600342481,
            "unit": "iter/sec",
            "range": "stddev: 0.001539245748989598",
            "extra": "mean: 29.792640833327745 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 122.16129496682677,
            "unit": "iter/sec",
            "range": "stddev: 0.000691311047252205",
            "extra": "mean: 8.185898817391816 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8870.077521315023,
            "unit": "iter/sec",
            "range": "stddev: 0.00002767454537017246",
            "extra": "mean: 112.73858628596811 usec\nrounds: 4346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1534.1039164514505,
            "unit": "iter/sec",
            "range": "stddev: 0.00014956614013563209",
            "extra": "mean: 651.8463249302622 usec\nrounds: 714"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1512787.130400613,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035559947262656084",
            "extra": "mean: 661.0315357027015 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 79.3106765019154,
            "unit": "iter/sec",
            "range": "stddev: 0.0007348303499290872",
            "extra": "mean: 12.608642923072903 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 73.77260509471144,
            "unit": "iter/sec",
            "range": "stddev: 0.0011876377190930601",
            "extra": "mean: 13.555167242856214 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 201.55702824575204,
            "unit": "iter/sec",
            "range": "stddev: 0.0004859564960471148",
            "extra": "mean: 4.961374994975278 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5209711381224678,
            "unit": "iter/sec",
            "range": "stddev: 0.020298833566509716",
            "extra": "mean: 1.9194921308000061 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1300.1142826211349,
            "unit": "iter/sec",
            "range": "stddev: 0.0002741652141634484",
            "extra": "mean: 769.1631523222094 usec\nrounds: 1162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 164.26616366639766,
            "unit": "iter/sec",
            "range": "stddev: 0.013461335126535514",
            "extra": "mean: 6.087680978724654 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1443436.7382158153,
            "unit": "iter/sec",
            "range": "stddev: 0.000006400819110341467",
            "extra": "mean: 692.791012951539 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 74.42318081140047,
            "unit": "iter/sec",
            "range": "stddev: 0.0011915538258688348",
            "extra": "mean: 13.43667374999935 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.0582811572061108,
            "unit": "iter/sec",
            "range": "stddev: 0.006248803651577508",
            "extra": "mean: 944.9284749999947 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 181.65319879375954,
            "unit": "iter/sec",
            "range": "stddev: 0.0009322028284594164",
            "extra": "mean: 5.504995269229213 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 72.30139124146164,
            "unit": "iter/sec",
            "range": "stddev: 0.0014691865414866612",
            "extra": "mean: 13.830992499996933 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1467.932957875547,
            "unit": "iter/sec",
            "range": "stddev: 0.00021898071395089834",
            "extra": "mean: 681.2300211906415 usec\nrounds: 1227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 309.54321225262555,
            "unit": "iter/sec",
            "range": "stddev: 0.0002893151805361682",
            "extra": "mean: 3.2305667203061663 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4638190.036636467,
            "unit": "iter/sec",
            "range": "stddev: 4.94651673000801e-7",
            "extra": "mean: 215.60134278689418 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 165.3502587490508,
            "unit": "iter/sec",
            "range": "stddev: 0.01455078133326301",
            "extra": "mean: 6.047767977900069 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3369320.5828736825,
            "unit": "iter/sec",
            "range": "stddev: 7.065394476448818e-7",
            "extra": "mean: 296.7957412788403 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1009361565113435,
            "unit": "iter/sec",
            "range": "stddev: 0.20473648086809418",
            "extra": "mean: 9.907252609599983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 184.65252458262677,
            "unit": "iter/sec",
            "range": "stddev: 0.000704971444165669",
            "extra": "mean: 5.4155771888866235 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4079047.7998787714,
            "unit": "iter/sec",
            "range": "stddev: 2.4708288005896353e-7",
            "extra": "mean: 245.15525413309027 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 185.45241963146427,
            "unit": "iter/sec",
            "range": "stddev: 0.004425146224914745",
            "extra": "mean: 5.392218672515706 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1528.2692311286473,
            "unit": "iter/sec",
            "range": "stddev: 0.00014297318469772894",
            "extra": "mean: 654.3349690168706 usec\nrounds: 936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 74.6070681041598,
            "unit": "iter/sec",
            "range": "stddev: 0.0015158737934717228",
            "extra": "mean: 13.403555794524568 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.694973779272402,
            "unit": "iter/sec",
            "range": "stddev: 0.003593363161064804",
            "extra": "mean: 32.578623692302244 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 72.0450535413716,
            "unit": "iter/sec",
            "range": "stddev: 0.001615820433430262",
            "extra": "mean: 13.880203440000969 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 57.88044536272439,
            "unit": "iter/sec",
            "range": "stddev: 0.02930167673848973",
            "extra": "mean: 17.276992147057847 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 888.0298781930663,
            "unit": "iter/sec",
            "range": "stddev: 0.0001800854255605122",
            "extra": "mean: 1.1260882370700938 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 75.39717825352514,
            "unit": "iter/sec",
            "range": "stddev: 0.0016063314151183567",
            "extra": "mean: 13.263095823526337 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 75.9010885856096,
            "unit": "iter/sec",
            "range": "stddev: 0.0016625599074896749",
            "extra": "mean: 13.175041605260905 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.87767657155985,
            "unit": "iter/sec",
            "range": "stddev: 0.002453083585341673",
            "extra": "mean: 25.076686657145533 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.999304187918728,
            "unit": "iter/sec",
            "range": "stddev: 0.003852148746771764",
            "extra": "mean: 71.43212166666046 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8353326.994361109,
            "unit": "iter/sec",
            "range": "stddev: 1.4031830116774313e-7",
            "extra": "mean: 119.71278038975571 nsec\nrounds: 89286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1540.4345348845015,
            "unit": "iter/sec",
            "range": "stddev: 0.00017246522705975285",
            "extra": "mean: 649.1674766788957 usec\nrounds: 1072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 76.03325490928529,
            "unit": "iter/sec",
            "range": "stddev: 0.0013101263052160456",
            "extra": "mean: 13.152139826094418 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 74.44764234805095,
            "unit": "iter/sec",
            "range": "stddev: 0.0015409363963249155",
            "extra": "mean: 13.432258812507314 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 94.42251693612121,
            "unit": "iter/sec",
            "range": "stddev: 0.001168960614583839",
            "extra": "mean: 10.590694173896262 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 84.79656386482054,
            "unit": "iter/sec",
            "range": "stddev: 0.0004970234917908493",
            "extra": "mean: 11.792930685188637 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 119.57280272561374,
            "unit": "iter/sec",
            "range": "stddev: 0.00027668668931036904",
            "extra": "mean: 8.36310580002646 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 823871.8166992267,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025149681802435387",
            "extra": "mean: 1.2137810515310694 usec\nrounds: 82645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5002319.243985459,
            "unit": "iter/sec",
            "range": "stddev: 4.1696810133195825e-7",
            "extra": "mean: 199.90727325181516 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 23.03058903951018,
            "unit": "iter/sec",
            "range": "stddev: 0.0016310229819750236",
            "extra": "mean: 43.42051340000239 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 85.83750997532614,
            "unit": "iter/sec",
            "range": "stddev: 0.0005562716063064223",
            "extra": "mean: 11.64991855294321 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6325.332690826166,
            "unit": "iter/sec",
            "range": "stddev: 0.000037046118060707346",
            "extra": "mean: 158.09445113461496 usec\nrounds: 5198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 75.47924206483981,
            "unit": "iter/sec",
            "range": "stddev: 0.0014167682266253937",
            "extra": "mean: 13.248675697365355 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1501.0386171568846,
            "unit": "iter/sec",
            "range": "stddev: 0.0001518621305635545",
            "extra": "mean: 666.2053784426272 usec\nrounds: 1271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 134.28086773306129,
            "unit": "iter/sec",
            "range": "stddev: 0.001103232872990885",
            "extra": "mean: 7.447077285707694 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 513.645926443887,
            "unit": "iter/sec",
            "range": "stddev: 0.0001619443075893476",
            "extra": "mean: 1.946866408390069 msec\nrounds: 453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1578.6056577664012,
            "unit": "iter/sec",
            "range": "stddev: 0.0001442725808273039",
            "extra": "mean: 633.4704269430522 usec\nrounds: 876"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 79.99542981896562,
            "unit": "iter/sec",
            "range": "stddev: 0.0011154768758946294",
            "extra": "mean: 12.500714131583004 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1559.2263184289382,
            "unit": "iter/sec",
            "range": "stddev: 0.00020240114059195507",
            "extra": "mean: 641.3437152648826 usec\nrounds: 1166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 142.12648159425453,
            "unit": "iter/sec",
            "range": "stddev: 0.00039475887345480224",
            "extra": "mean: 7.035986459263936 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.063605573622816,
            "unit": "iter/sec",
            "range": "stddev: 0.0028849714462549875",
            "extra": "mean: 32.19201317857109 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 60.96569792524972,
            "unit": "iter/sec",
            "range": "stddev: 0.03010617318218095",
            "extra": "mean: 16.402666319445796 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.82175207935983,
            "unit": "iter/sec",
            "range": "stddev: 0.0009798404133473508",
            "extra": "mean: 11.258503425000299 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 144.1207285194773,
            "unit": "iter/sec",
            "range": "stddev: 0.00036442313043517753",
            "extra": "mean: 6.9386271515055125 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1512.7768106926942,
            "unit": "iter/sec",
            "range": "stddev: 0.0001438289284816725",
            "extra": "mean: 661.0360450608072 usec\nrounds: 932"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 63.964970248887745,
            "unit": "iter/sec",
            "range": "stddev: 0.0011164582296064106",
            "extra": "mean: 15.633556868845547 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 249.5182311939749,
            "unit": "iter/sec",
            "range": "stddev: 0.0002530644199310661",
            "extra": "mean: 4.007723184053042 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.12500827047729,
            "unit": "iter/sec",
            "range": "stddev: 0.001047952795368147",
            "extra": "mean: 23.738867742866073 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 72.87270598675599,
            "unit": "iter/sec",
            "range": "stddev: 0.0016365026908818016",
            "extra": "mean: 13.722558898550325 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 163.39929285850337,
            "unit": "iter/sec",
            "range": "stddev: 0.0006727223066806099",
            "extra": "mean: 6.119977525643003 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3144.1155926300653,
            "unit": "iter/sec",
            "range": "stddev: 0.0000834641811577299",
            "extra": "mean: 318.05446413740026 usec\nrounds: 1687"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 393.0125625759542,
            "unit": "iter/sec",
            "range": "stddev: 0.00032200756768722657",
            "extra": "mean: 2.544447926665801 msec\nrounds: 300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 192.3399014652148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005682372111337202",
            "extra": "mean: 5.199129210227097 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.514892830247492,
            "unit": "iter/sec",
            "range": "stddev: 0.02006647152032261",
            "extra": "mean: 1.9421517280000444 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4547901.385007057,
            "unit": "iter/sec",
            "range": "stddev: 1.2345246976306664e-7",
            "extra": "mean: 219.88163668116513 nsec\nrounds: 52087"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7767.38919324131,
            "unit": "iter/sec",
            "range": "stddev: 0.000052369039146011315",
            "extra": "mean: 128.74338791599843 usec\nrounds: 3542"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1430784.812757251,
            "unit": "iter/sec",
            "range": "stddev: 8.680360508053544e-7",
            "extra": "mean: 698.9171195303018 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1481388.9997403426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022867489160894616",
            "extra": "mean: 675.0421396238798 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120259.92037766382,
            "unit": "iter/sec",
            "range": "stddev: 0.000006182232787915023",
            "extra": "mean: 8.315322319020366 usec\nrounds: 30960"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10617.11269370758,
            "unit": "iter/sec",
            "range": "stddev: 0.00002299395735344963",
            "extra": "mean: 94.1875657581244 usec\nrounds: 5391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 207.1052942699246,
            "unit": "iter/sec",
            "range": "stddev: 0.0005283347571656857",
            "extra": "mean: 4.828461790535781 msec\nrounds: 148"
          }
        ]
      }
    ]
  }
}