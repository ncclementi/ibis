window.BENCHMARK_DATA = {
  "lastUpdate": 1682162037019,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "667435355365102aab9eab1d8655b73530ba69eb",
          "message": "refactor(common): use an enum as a sentinel value instead of NoMatch class\n\nfixes #6049",
          "timestamp": "2023-04-22T07:07:08-04:00",
          "tree_id": "0f5442ac1e3a1aa94df133e91ff1596602dbe76b",
          "url": "https://github.com/ibis-project/ibis/commit/667435355365102aab9eab1d8655b73530ba69eb"
        },
        "date": 1682161937742,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 598.5284181294242,
            "unit": "iter/sec",
            "range": "stddev: 0.00017757614330461775",
            "extra": "mean: 1.670764444444078 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10533342722996603,
            "unit": "iter/sec",
            "range": "stddev: 0.1607012853794591",
            "extra": "mean: 9.493662423199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 120.17008551628471,
            "unit": "iter/sec",
            "range": "stddev: 0.0008699116775162915",
            "extra": "mean: 8.321538556819002 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 72.93175533521027,
            "unit": "iter/sec",
            "range": "stddev: 0.001073126742192699",
            "extra": "mean: 13.711448399997801 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 73.33765949173957,
            "unit": "iter/sec",
            "range": "stddev: 0.001134938592872576",
            "extra": "mean: 13.63555923287456 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 209.9966279312338,
            "unit": "iter/sec",
            "range": "stddev: 0.000499108909702989",
            "extra": "mean: 4.76198122727696 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 234.73452046374558,
            "unit": "iter/sec",
            "range": "stddev: 0.00040253077059949834",
            "extra": "mean: 4.26013182051103 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 76.35639816583294,
            "unit": "iter/sec",
            "range": "stddev: 0.0012018783198519576",
            "extra": "mean: 13.096479457139562 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1569032.2359441852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014810913315049023",
            "extra": "mean: 637.3355353009922 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 86.59509136343094,
            "unit": "iter/sec",
            "range": "stddev: 0.00036776886347402495",
            "extra": "mean: 11.547998671230681 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 123.68620007294211,
            "unit": "iter/sec",
            "range": "stddev: 0.00043671244213887555",
            "extra": "mean: 8.08497633050627 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 69.04516202623617,
            "unit": "iter/sec",
            "range": "stddev: 0.0013503278204368143",
            "extra": "mean: 14.483273999994589 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 229.65323232477036,
            "unit": "iter/sec",
            "range": "stddev: 0.00026674247220276906",
            "extra": "mean: 4.354391139532592 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.21141028466745,
            "unit": "iter/sec",
            "range": "stddev: 0.0012703012369238832",
            "extra": "mean: 13.475016795451015 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1371.478262522214,
            "unit": "iter/sec",
            "range": "stddev: 0.0000976951610166708",
            "extra": "mean: 729.1402476630963 usec\nrounds: 1070"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.246470909131567,
            "unit": "iter/sec",
            "range": "stddev: 0.029492750946359395",
            "extra": "mean: 35.40265271428008 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1596.8250704576008,
            "unit": "iter/sec",
            "range": "stddev: 0.00015437851784762152",
            "extra": "mean: 626.242672726469 usec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 179.65829526081413,
            "unit": "iter/sec",
            "range": "stddev: 0.0046859340839538665",
            "extra": "mean: 5.566122057143406 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1622.5198520629008,
            "unit": "iter/sec",
            "range": "stddev: 0.0001355660627061182",
            "extra": "mean: 616.3252786883206 usec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10452.625351328299,
            "unit": "iter/sec",
            "range": "stddev: 0.00005144983645212145",
            "extra": "mean: 95.66974481419845 usec\nrounds: 6219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 58.67095057378741,
            "unit": "iter/sec",
            "range": "stddev: 0.0225526496117854",
            "extra": "mean: 17.044209957743092 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8531.91471181319,
            "unit": "iter/sec",
            "range": "stddev: 0.00011234877607971295",
            "extra": "mean: 117.20698504116686 usec\nrounds: 2607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1568.8187504766745,
            "unit": "iter/sec",
            "range": "stddev: 0.00015795252883188756",
            "extra": "mean: 637.4222641692402 usec\nrounds: 1041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 76.40803854743957,
            "unit": "iter/sec",
            "range": "stddev: 0.001432062576068353",
            "extra": "mean: 13.087628199997942 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 56.022224969034774,
            "unit": "iter/sec",
            "range": "stddev: 0.0007420044657980621",
            "extra": "mean: 17.85005862499626 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8400709461875366,
            "unit": "iter/sec",
            "range": "stddev: 0.04275049866159061",
            "extra": "mean: 543.4573064000119 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1027124040254925,
            "unit": "iter/sec",
            "range": "stddev: 0.027307448013230602",
            "extra": "mean: 906.8547667999951 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3152.0762469182473,
            "unit": "iter/sec",
            "range": "stddev: 0.00006915813164446228",
            "extra": "mean: 317.25120893813715 usec\nrounds: 1723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1496660.410013439,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023827628398985163",
            "extra": "mean: 668.154240808054 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 386.83544397385015,
            "unit": "iter/sec",
            "range": "stddev: 0.00018832413949641466",
            "extra": "mean: 2.5850785277773034 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1597.7083146987288,
            "unit": "iter/sec",
            "range": "stddev: 0.00016191373416843107",
            "extra": "mean: 625.8964735929064 usec\nrounds: 1136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.6809689860559,
            "unit": "iter/sec",
            "range": "stddev: 0.0006103398966109901",
            "extra": "mean: 11.671203206895855 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 188.3400316284814,
            "unit": "iter/sec",
            "range": "stddev: 0.0008793621750151598",
            "extra": "mean: 5.309545673075998 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1531.074295354432,
            "unit": "iter/sec",
            "range": "stddev: 0.00023084478512083547",
            "extra": "mean: 653.1361691814619 usec\nrounds: 1259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 61.0438048571673,
            "unit": "iter/sec",
            "range": "stddev: 0.021069996443248203",
            "extra": "mean: 16.38167873611154 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 193.78518874163774,
            "unit": "iter/sec",
            "range": "stddev: 0.00047839717349438843",
            "extra": "mean: 5.1603531028020955 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.49075462027156,
            "unit": "iter/sec",
            "range": "stddev: 0.0015017859413837653",
            "extra": "mean: 35.09910542307947 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 72.22135820871335,
            "unit": "iter/sec",
            "range": "stddev: 0.001705957111841",
            "extra": "mean: 13.846319493328945 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5752310313046183,
            "unit": "iter/sec",
            "range": "stddev: 0.05636125654124294",
            "extra": "mean: 1.7384319439999785 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 69.55529444737341,
            "unit": "iter/sec",
            "range": "stddev: 0.0013915688460279106",
            "extra": "mean: 14.377050775863154 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 144.14592577225721,
            "unit": "iter/sec",
            "range": "stddev: 0.016501997854587662",
            "extra": "mean: 6.9374142532474075 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 69.12472059874773,
            "unit": "iter/sec",
            "range": "stddev: 0.0012749404205486942",
            "extra": "mean: 14.46660458571338 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 123.31648850382263,
            "unit": "iter/sec",
            "range": "stddev: 0.0007037638091646977",
            "extra": "mean: 8.109215662340251 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5139962.559903494,
            "unit": "iter/sec",
            "range": "stddev: 3.1700806128311675e-7",
            "extra": "mean: 194.55394632669433 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 71.43739520405647,
            "unit": "iter/sec",
            "range": "stddev: 0.0019876041669186326",
            "extra": "mean: 13.998270753623675 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 598791.1086509121,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016076991610918987",
            "extra": "mean: 1.6700314776767797 usec\nrounds: 14772"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 196.37621218534306,
            "unit": "iter/sec",
            "range": "stddev: 0.0005939868290662136",
            "extra": "mean: 5.092266465839476 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 88.20171131605855,
            "unit": "iter/sec",
            "range": "stddev: 0.0005985104256102362",
            "extra": "mean: 11.337648500000633 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.26058075668719,
            "unit": "iter/sec",
            "range": "stddev: 0.005229908192004504",
            "extra": "mean: 61.49841847369125 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 10.715087724686747,
            "unit": "iter/sec",
            "range": "stddev: 0.007008785884036707",
            "extra": "mean: 93.32634745454077 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5158365456151518,
            "unit": "iter/sec",
            "range": "stddev: 0.06836015786729789",
            "extra": "mean: 1.9385985899999922 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 73.8151175498107,
            "unit": "iter/sec",
            "range": "stddev: 0.0011489818658561722",
            "extra": "mean: 13.547360394369033 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 419094.35521282966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010858627475625632",
            "extra": "mean: 2.3860975161361164 usec\nrounds: 1651"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 116216.9202545783,
            "unit": "iter/sec",
            "range": "stddev: 0.000005647339000568518",
            "extra": "mean: 8.60459903609092 usec\nrounds: 31746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.53994059690457,
            "unit": "iter/sec",
            "range": "stddev: 0.002010024820245772",
            "extra": "mean: 30.731463600001995 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.55320104936393,
            "unit": "iter/sec",
            "range": "stddev: 0.0011346136471342514",
            "extra": "mean: 24.065534657896286 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1602969.1758346704,
            "unit": "iter/sec",
            "range": "stddev: 0.000001249096637259819",
            "extra": "mean: 623.8423140478028 nsec\nrounds: 163908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 885.7758864949639,
            "unit": "iter/sec",
            "range": "stddev: 0.00013099146225077404",
            "extra": "mean: 1.1289537401577092 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1349042.3689102402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013497206388431653",
            "extra": "mean: 741.266562893649 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 61271.024426050506,
            "unit": "iter/sec",
            "range": "stddev: 0.000009559562329177012",
            "extra": "mean: 16.320928356713285 usec\nrounds: 11962"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 40.2942843089453,
            "unit": "iter/sec",
            "range": "stddev: 0.0016214117471638227",
            "extra": "mean: 24.81741560000858 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 203.0953006282656,
            "unit": "iter/sec",
            "range": "stddev: 0.0006264798813706751",
            "extra": "mean: 4.923796842696744 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4748553.977950731,
            "unit": "iter/sec",
            "range": "stddev: 1.7153463118315766e-7",
            "extra": "mean: 210.5904249258357 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8446932.691980416,
            "unit": "iter/sec",
            "range": "stddev: 1.5044693254731808e-7",
            "extra": "mean: 118.38616885737278 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5352927659081345,
            "unit": "iter/sec",
            "range": "stddev: 0.011887512482819884",
            "extra": "mean: 1.8681365855999956 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.85966569913377,
            "unit": "iter/sec",
            "range": "stddev: 0.0005894889773346934",
            "extra": "mean: 13.010725338235114 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5915668116046806,
            "unit": "iter/sec",
            "range": "stddev: 0.04743931220942703",
            "extra": "mean: 1.6904261368000106 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1509.815760710944,
            "unit": "iter/sec",
            "range": "stddev: 0.00019515157623660332",
            "extra": "mean: 662.3324686510881 usec\nrounds: 941"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 75.81472413721758,
            "unit": "iter/sec",
            "range": "stddev: 0.0008779154487664979",
            "extra": "mean: 13.190049972220349 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.839455291959325,
            "unit": "iter/sec",
            "range": "stddev: 0.0011773860718653733",
            "extra": "mean: 30.451174999996056 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 71.883696559626,
            "unit": "iter/sec",
            "range": "stddev: 0.001600263648175914",
            "extra": "mean: 13.911360264709275 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 128.561226319772,
            "unit": "iter/sec",
            "range": "stddev: 0.004563073843119114",
            "extra": "mean: 7.778395000003244 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5984.030967646934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000791830310481014",
            "extra": "mean: 167.11143465108506 usec\nrounds: 2632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.55105593718963,
            "unit": "iter/sec",
            "range": "stddev: 0.0021943300277758315",
            "extra": "mean: 116.94462150000362 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 150.47763588258576,
            "unit": "iter/sec",
            "range": "stddev: 0.0004377090713312839",
            "extra": "mean: 6.645505786522836 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1599.2901873188102,
            "unit": "iter/sec",
            "range": "stddev: 0.0001672125810241428",
            "extra": "mean: 625.2773936395416 usec\nrounds: 1006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 57.507526591827805,
            "unit": "iter/sec",
            "range": "stddev: 0.028063255871482843",
            "extra": "mean: 17.38902817187249 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.19981591136982,
            "unit": "iter/sec",
            "range": "stddev: 0.0019109990178106226",
            "extra": "mean: 19.53132022449191 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.375336314601441,
            "unit": "iter/sec",
            "range": "stddev: 0.018578445105899705",
            "extra": "mean: 228.55385919998525 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 86.51856016473388,
            "unit": "iter/sec",
            "range": "stddev: 0.0004681240936624144",
            "extra": "mean: 11.558213614465737 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 100.02833623763526,
            "unit": "iter/sec",
            "range": "stddev: 0.0008449793887767794",
            "extra": "mean: 9.997167178951377 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4190474.2165859984,
            "unit": "iter/sec",
            "range": "stddev: 4.287904411527694e-7",
            "extra": "mean: 238.6364760441377 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 193.23043504098578,
            "unit": "iter/sec",
            "range": "stddev: 0.0011735825523662797",
            "extra": "mean: 5.175168186046322 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 6831.429600550297,
            "unit": "iter/sec",
            "range": "stddev: 0.0001192931047488631",
            "extra": "mean: 146.38224478218237 usec\nrounds: 4408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 491.84878287316906,
            "unit": "iter/sec",
            "range": "stddev: 0.0003693965922582761",
            "extra": "mean: 2.0331452162155004 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1687.0388072614041,
            "unit": "iter/sec",
            "range": "stddev: 0.0001313559118024509",
            "extra": "mean: 592.7545920673367 usec\nrounds: 1059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 65.44831964108542,
            "unit": "iter/sec",
            "range": "stddev: 0.0014798497385993636",
            "extra": "mean: 15.279231086205709 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 206.65236491835768,
            "unit": "iter/sec",
            "range": "stddev: 0.0005507193352204516",
            "extra": "mean: 4.83904454901869 msec\nrounds: 204"
          }
        ]
      }
    ]
  }
}