window.BENCHMARK_DATA = {
  "lastUpdate": 1682772038426,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "7300e08ee5b85c96c1b6c5dbd1021d571ee52092",
          "message": "chore(deps): update trinodb/trino docker tag to v415",
          "timestamp": "2023-04-29T08:32:06-04:00",
          "tree_id": "d8ffc6a459d3e77d4970e84a69e1212b8e8f88e7",
          "url": "https://github.com/ibis-project/ibis/commit/7300e08ee5b85c96c1b6c5dbd1021d571ee52092"
        },
        "date": 1682771950727,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 75.99435268978353,
            "unit": "iter/sec",
            "range": "stddev: 0.01086616401678642",
            "extra": "mean: 13.158872529411484 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9815.433825559045,
            "unit": "iter/sec",
            "range": "stddev: 0.000122779141926255",
            "extra": "mean: 101.88036695800803 usec\nrounds: 3777"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1849.6542356868754,
            "unit": "iter/sec",
            "range": "stddev: 0.00020305629011580604",
            "extra": "mean: 540.6415862522796 usec\nrounds: 1513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1635.6687320590297,
            "unit": "iter/sec",
            "range": "stddev: 0.00043834655077980576",
            "extra": "mean: 611.3707380963195 usec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 159.9794282098396,
            "unit": "iter/sec",
            "range": "stddev: 0.0006574442863249738",
            "extra": "mean: 6.250803688886385 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5558681681546982,
            "unit": "iter/sec",
            "range": "stddev: 0.018444631689023955",
            "extra": "mean: 1.7989877047999983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.38876106429372,
            "unit": "iter/sec",
            "range": "stddev: 0.0005999767917569131",
            "extra": "mean: 11.849919200000159 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 78.21483758282075,
            "unit": "iter/sec",
            "range": "stddev: 0.0015817785804890217",
            "extra": "mean: 12.785297916665902 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5550534786011672,
            "unit": "iter/sec",
            "range": "stddev: 0.09966078320346983",
            "extra": "mean: 1.8016282007999962 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.814165425648458,
            "unit": "iter/sec",
            "range": "stddev: 0.0031047965491977072",
            "extra": "mean: 43.83241645454916 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.16200851232294,
            "unit": "iter/sec",
            "range": "stddev: 0.001616757917035936",
            "extra": "mean: 29.272283555554978 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 83.89919434612473,
            "unit": "iter/sec",
            "range": "stddev: 0.0015790544221047458",
            "extra": "mean: 11.919065585713692 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.21742053152146,
            "unit": "iter/sec",
            "range": "stddev: 0.000334389923547384",
            "extra": "mean: 8.531155142857674 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.20391749810788,
            "unit": "iter/sec",
            "range": "stddev: 0.0023775648112030474",
            "extra": "mean: 26.87888983870739 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1684.7762460724086,
            "unit": "iter/sec",
            "range": "stddev: 0.0002059574943204356",
            "extra": "mean: 593.550628655422 usec\nrounds: 342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 81.59187412350875,
            "unit": "iter/sec",
            "range": "stddev: 0.0011765204399848434",
            "extra": "mean: 12.256122447760688 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5246278.559493899,
            "unit": "iter/sec",
            "range": "stddev: 5.127606066450281e-7",
            "extra": "mean: 190.61130450062555 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.514745395127704,
            "unit": "iter/sec",
            "range": "stddev: 0.0015995430412241122",
            "extra": "mean: 17.386845636366388 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.62153327350376,
            "unit": "iter/sec",
            "range": "stddev: 0.0019060847866451732",
            "extra": "mean: 22.41070457777836 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6086889.478010306,
            "unit": "iter/sec",
            "range": "stddev: 3.1668259838250457e-7",
            "extra": "mean: 164.28752380222576 nsec\nrounds: 67115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 540.6546141594673,
            "unit": "iter/sec",
            "range": "stddev: 0.0006242010008976651",
            "extra": "mean: 1.849609665413949 msec\nrounds: 532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 173.12818461509568,
            "unit": "iter/sec",
            "range": "stddev: 0.00044662924440484926",
            "extra": "mean: 5.776067035088673 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.87951539477771,
            "unit": "iter/sec",
            "range": "stddev: 0.0018857356934265626",
            "extra": "mean: 11.510193115788368 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4885007.449857334,
            "unit": "iter/sec",
            "range": "stddev: 7.230641006409024e-7",
            "extra": "mean: 204.70797849632783 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.8652987561195,
            "unit": "iter/sec",
            "range": "stddev: 0.001816919795494826",
            "extra": "mean: 12.366243807691673 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 75.53534547466484,
            "unit": "iter/sec",
            "range": "stddev: 0.017134013807068065",
            "extra": "mean: 13.23883532558156 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.68155040415874,
            "unit": "iter/sec",
            "range": "stddev: 0.001095714379617296",
            "extra": "mean: 10.237347747476228 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1727061.9722325827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028706839467958424",
            "extra": "mean: 579.01801792746 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8943.839896096579,
            "unit": "iter/sec",
            "range": "stddev: 0.00010035449896129145",
            "extra": "mean: 111.80879930961609 usec\nrounds: 4345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.936918274035,
            "unit": "iter/sec",
            "range": "stddev: 0.0013690373991269635",
            "extra": "mean: 11.502593142856606 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.03049353891514,
            "unit": "iter/sec",
            "range": "stddev: 0.000855444691733736",
            "extra": "mean: 10.634847934581385 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1660.9326026736178,
            "unit": "iter/sec",
            "range": "stddev: 0.00017388919826567798",
            "extra": "mean: 602.071389525554 usec\nrounds: 1222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 428.59368475621983,
            "unit": "iter/sec",
            "range": "stddev: 0.0005241448816121962",
            "extra": "mean: 2.3332121670639894 msec\nrounds: 419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1351.5774233426575,
            "unit": "iter/sec",
            "range": "stddev: 0.004583491794562689",
            "extra": "mean: 739.8762236845058 usec\nrounds: 988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2172725.894912925,
            "unit": "iter/sec",
            "range": "stddev: 9.783404368841365e-7",
            "extra": "mean: 460.2513378892194 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1444008.143055898,
            "unit": "iter/sec",
            "range": "stddev: 0.000002618526785701299",
            "extra": "mean: 692.5168703576277 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 157.12532778155054,
            "unit": "iter/sec",
            "range": "stddev: 0.000700571733459248",
            "extra": "mean: 6.364346309528709 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1584.3447596274132,
            "unit": "iter/sec",
            "range": "stddev: 0.00029891531310854156",
            "extra": "mean: 631.175755102171 usec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 207.53453953212903,
            "unit": "iter/sec",
            "range": "stddev: 0.0008135313321672053",
            "extra": "mean: 4.818475046391915 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.09056456403496,
            "unit": "iter/sec",
            "range": "stddev: 0.01310076776950684",
            "extra": "mean: 916.9562564000046 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.512851262961796,
            "unit": "iter/sec",
            "range": "stddev: 0.001456594469722482",
            "extra": "mean: 23.522299029404873 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 72.40575872381847,
            "unit": "iter/sec",
            "range": "stddev: 0.002252850108027141",
            "extra": "mean: 13.811056159419014 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 28.445526486984818,
            "unit": "iter/sec",
            "range": "stddev: 0.03832691573760337",
            "extra": "mean: 35.154912687502815 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6141.739330574282,
            "unit": "iter/sec",
            "range": "stddev: 0.00009067387095270013",
            "extra": "mean: 162.82032599818842 usec\nrounds: 3408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 190.40217167130496,
            "unit": "iter/sec",
            "range": "stddev: 0.0006563129794874102",
            "extra": "mean: 5.252040936414947 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 123766.78428987222,
            "unit": "iter/sec",
            "range": "stddev: 0.000005733986023320353",
            "extra": "mean: 8.079712224387407 usec\nrounds: 32574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3482510.9273250788,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010657333923110547",
            "extra": "mean: 287.1491348823544 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1640.015221033313,
            "unit": "iter/sec",
            "range": "stddev: 0.00017123829865482544",
            "extra": "mean: 609.7504383952833 usec\nrounds: 349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 858953.6497306151,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033230315134015644",
            "extra": "mean: 1.1642071726613186 usec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.760922189632428,
            "unit": "iter/sec",
            "range": "stddev: 0.004267668661226139",
            "extra": "mean: 147.90881657142205 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 205.5561841353116,
            "unit": "iter/sec",
            "range": "stddev: 0.000913984339615253",
            "extra": "mean: 4.864849988369746 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 81.11398522030913,
            "unit": "iter/sec",
            "range": "stddev: 0.001622767822846639",
            "extra": "mean: 12.328330278483497 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10819.102704485369,
            "unit": "iter/sec",
            "range": "stddev: 0.00015596764340439017",
            "extra": "mean: 92.42910685979727 usec\nrounds: 6298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.434960648502189,
            "unit": "iter/sec",
            "range": "stddev: 0.00406984069029773",
            "extra": "mean: 64.78798506668302 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.69032775220856,
            "unit": "iter/sec",
            "range": "stddev: 0.0010004548596578007",
            "extra": "mean: 7.057644765624538 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 68.31621004605667,
            "unit": "iter/sec",
            "range": "stddev: 0.02265505722240909",
            "extra": "mean: 14.63781435366264 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 89.04372763079613,
            "unit": "iter/sec",
            "range": "stddev: 0.0011125762889540496",
            "extra": "mean: 11.230437298698016 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 24.1578590711012,
            "unit": "iter/sec",
            "range": "stddev: 0.0032984178898700475",
            "extra": "mean: 41.394396624999295 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 87.7781562570105,
            "unit": "iter/sec",
            "range": "stddev: 0.0015580000711000793",
            "extra": "mean: 11.392355941859213 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2334114.505664029,
            "unit": "iter/sec",
            "range": "stddev: 0.000001118699728217393",
            "extra": "mean: 428.4279959590004 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 209.04755191599995,
            "unit": "iter/sec",
            "range": "stddev: 0.0007714900406634954",
            "extra": "mean: 4.783600624999535 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1677.0277786042,
            "unit": "iter/sec",
            "range": "stddev: 0.00021551982295853835",
            "extra": "mean: 596.2930446103319 usec\nrounds: 1345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 217.049066217132,
            "unit": "iter/sec",
            "range": "stddev: 0.0008092186514830488",
            "extra": "mean: 4.6072531774894525 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 83.02060677797763,
            "unit": "iter/sec",
            "range": "stddev: 0.0017979478182387524",
            "extra": "mean: 12.04520225531842 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.86248722188702,
            "unit": "iter/sec",
            "range": "stddev: 0.0005608640072584924",
            "extra": "mean: 6.999738135924015 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.30491646981888,
            "unit": "iter/sec",
            "range": "stddev: 0.0019474076215598452",
            "extra": "mean: 12.770590214286617 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.41141761660101,
            "unit": "iter/sec",
            "range": "stddev: 0.0016383996342965229",
            "extra": "mean: 11.846738607590119 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5766657364890708,
            "unit": "iter/sec",
            "range": "stddev: 0.027046456278633974",
            "extra": "mean: 1.7341068434000022 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5210401.188532634,
            "unit": "iter/sec",
            "range": "stddev: 4.5010825440340946e-7",
            "extra": "mean: 191.92380083920324 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1413.8594286675545,
            "unit": "iter/sec",
            "range": "stddev: 0.0003309771543615823",
            "extra": "mean: 707.2838923897951 usec\nrounds: 1143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10299476772323415,
            "unit": "iter/sec",
            "range": "stddev: 0.06587754101379573",
            "extra": "mean: 9.709231081400015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 217.64050410498135,
            "unit": "iter/sec",
            "range": "stddev: 0.0006432742282938775",
            "extra": "mean: 4.594732970833586 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 208.67988816299382,
            "unit": "iter/sec",
            "range": "stddev: 0.0008378855641976658",
            "extra": "mean: 4.7920286367938285 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3142.90011417349,
            "unit": "iter/sec",
            "range": "stddev: 0.0002292359333524454",
            "extra": "mean: 318.1774678394375 usec\nrounds: 1648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 644.6792106933275,
            "unit": "iter/sec",
            "range": "stddev: 0.0004788391255065395",
            "extra": "mean: 1.5511590623878482 msec\nrounds: 561"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.172466022422793,
            "unit": "iter/sec",
            "range": "stddev: 0.026198150060379146",
            "extra": "mean: 460.3063936000126 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 362.86628127421596,
            "unit": "iter/sec",
            "range": "stddev: 0.00034373071275076763",
            "extra": "mean: 2.75583610714247 msec\nrounds: 308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 185.05650403907174,
            "unit": "iter/sec",
            "range": "stddev: 0.003948797600999168",
            "extra": "mean: 5.403754951454535 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.313115492495704,
            "unit": "iter/sec",
            "range": "stddev: 0.003837990271986899",
            "extra": "mean: 30.018207100001366 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 884.2317914861528,
            "unit": "iter/sec",
            "range": "stddev: 0.00013814715367376472",
            "extra": "mean: 1.1309251823204325 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 282.5384861866685,
            "unit": "iter/sec",
            "range": "stddev: 0.00043642273333287343",
            "extra": "mean: 3.539340829267828 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9723891.326766124,
            "unit": "iter/sec",
            "range": "stddev: 1.7139924520663551e-7",
            "extra": "mean: 102.83948744337712 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 75.94033257130084,
            "unit": "iter/sec",
            "range": "stddev: 0.0018161113406989138",
            "extra": "mean: 13.168233086958026 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 111.92462050722006,
            "unit": "iter/sec",
            "range": "stddev: 0.0008741448709717364",
            "extra": "mean: 8.934584682692686 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 141.42092282077826,
            "unit": "iter/sec",
            "range": "stddev: 0.0009496093433005793",
            "extra": "mean: 7.0710894827584525 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1163815194867732,
            "unit": "iter/sec",
            "range": "stddev: 0.08342459305482955",
            "extra": "mean: 895.7511232000002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 78.86011295604008,
            "unit": "iter/sec",
            "range": "stddev: 0.002380189910815176",
            "extra": "mean: 12.680681811316218 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 209.1252725406475,
            "unit": "iter/sec",
            "range": "stddev: 0.0010457959965646006",
            "extra": "mean: 4.781822817735388 msec\nrounds: 203"
          }
        ]
      }
    ]
  }
}