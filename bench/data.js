window.BENCHMARK_DATA = {
  "lastUpdate": 1681744663881,
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
          "id": "ce3bdad86ba47e8447842436c16c7eb6417bb895",
          "message": "fix(polars): avoid `implode` deprecation warning",
          "timestamp": "2023-04-17T11:10:57-04:00",
          "tree_id": "f2ef32d66bc7e830cf8f0b401ebfa1c0bb2543e5",
          "url": "https://github.com/ibis-project/ibis/commit/ce3bdad86ba47e8447842436c16c7eb6417bb895"
        },
        "date": 1681744583589,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 766.7179205119977,
            "unit": "iter/sec",
            "range": "stddev: 0.000011730979873223422",
            "extra": "mean: 1.3042606325573054 msec\nrounds: 645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 290.7127171116394,
            "unit": "iter/sec",
            "range": "stddev: 0.00026503982085835764",
            "extra": "mean: 3.439821999998646 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 284.3543586245437,
            "unit": "iter/sec",
            "range": "stddev: 0.0002726061197760461",
            "extra": "mean: 3.5167387791666727 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.25563848016137,
            "unit": "iter/sec",
            "range": "stddev: 0.0036284436650554017",
            "extra": "mean: 6.201333543589708 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1646428.2397261683,
            "unit": "iter/sec",
            "range": "stddev: 8.623241833091476e-8",
            "extra": "mean: 607.3753935162814 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.92754730852901,
            "unit": "iter/sec",
            "range": "stddev: 0.0007215454458881628",
            "extra": "mean: 10.211631226190272 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.22743284036125,
            "unit": "iter/sec",
            "range": "stddev: 0.00020091255570980166",
            "extra": "mean: 19.14702572222164 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 230.11451899984266,
            "unit": "iter/sec",
            "range": "stddev: 0.004157039433195609",
            "extra": "mean: 4.345662343890103 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6172849.103618112,
            "unit": "iter/sec",
            "range": "stddev: 1.3999263257274505e-8",
            "extra": "mean: 161.99974812503788 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 254.9556275400745,
            "unit": "iter/sec",
            "range": "stddev: 0.0005013256385203874",
            "extra": "mean: 3.9222511369858584 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4457.682091263033,
            "unit": "iter/sec",
            "range": "stddev: 0.00006833308280857122",
            "extra": "mean: 224.33183424183161 usec\nrounds: 917"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 302.8721364700619,
            "unit": "iter/sec",
            "range": "stddev: 0.000044576878483882204",
            "extra": "mean: 3.3017233333342553 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2164.855741307344,
            "unit": "iter/sec",
            "range": "stddev: 0.00008379911126459109",
            "extra": "mean: 461.9245434784055 usec\nrounds: 1288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2682958.1419321056,
            "unit": "iter/sec",
            "range": "stddev: 4.0964657897114164e-8",
            "extra": "mean: 372.72292264694244 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.736504134992,
            "unit": "iter/sec",
            "range": "stddev: 0.0009138861613008423",
            "extra": "mean: 10.026419200000369 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.78042364905265,
            "unit": "iter/sec",
            "range": "stddev: 0.00007933436815771927",
            "extra": "mean: 13.196020183670498 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.81298536720268,
            "unit": "iter/sec",
            "range": "stddev: 0.0016506793625436368",
            "extra": "mean: 172.02864566666184 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 103.93518956180579,
            "unit": "iter/sec",
            "range": "stddev: 0.00006317119105430146",
            "extra": "mean: 9.621380441177173 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 83.64465755869789,
            "unit": "iter/sec",
            "range": "stddev: 0.014021095241723538",
            "extra": "mean: 11.955336170732089 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.9048456297835,
            "unit": "iter/sec",
            "range": "stddev: 0.00016878710142651405",
            "extra": "mean: 10.00952449999964 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11540592.67558818,
            "unit": "iter/sec",
            "range": "stddev: 3.2155109032919436e-9",
            "extra": "mean: 86.6506624149097 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2174.157325848249,
            "unit": "iter/sec",
            "range": "stddev: 0.0001059139846308709",
            "extra": "mean: 459.9483156582744 usec\nrounds: 1207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 288.6199796043128,
            "unit": "iter/sec",
            "range": "stddev: 0.000267046834323842",
            "extra": "mean: 3.464763601504521 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2692265.1961534605,
            "unit": "iter/sec",
            "range": "stddev: 2.8771868936367063e-8",
            "extra": "mean: 371.4344342561488 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.9695331747981,
            "unit": "iter/sec",
            "range": "stddev: 0.00016644161066269608",
            "extra": "mean: 5.182165202701545 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5584724.15035322,
            "unit": "iter/sec",
            "range": "stddev: 1.0188025864510324e-8",
            "extra": "mean: 179.05987351907822 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2120.47716099465,
            "unit": "iter/sec",
            "range": "stddev: 0.00011647740019997657",
            "extra": "mean: 471.59196920137117 usec\nrounds: 1039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9472193892032368,
            "unit": "iter/sec",
            "range": "stddev: 0.006045411866879746",
            "extra": "mean: 1.0557216325999832 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.8945756500685,
            "unit": "iter/sec",
            "range": "stddev: 0.00003391682060994213",
            "extra": "mean: 1.8522134599999163 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.52735194670717,
            "unit": "iter/sec",
            "range": "stddev: 0.00007600519633032112",
            "extra": "mean: 8.88672827272785 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.794006465352846,
            "unit": "iter/sec",
            "range": "stddev: 0.001858485525090656",
            "extra": "mean: 63.31515706250279 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 792716.9483407328,
            "unit": "iter/sec",
            "range": "stddev: 2.1004314890347235e-7",
            "extra": "mean: 1.2614843193313066 usec\nrounds: 26179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.68902447970102,
            "unit": "iter/sec",
            "range": "stddev: 0.0008529740553570092",
            "extra": "mean: 9.93156905797216 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 235.06137966758226,
            "unit": "iter/sec",
            "range": "stddev: 0.00858174812513751",
            "extra": "mean: 4.254207992032439 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2122.2148328977914,
            "unit": "iter/sec",
            "range": "stddev: 0.000092790252171217",
            "extra": "mean: 471.20582916412087 usec\nrounds: 1639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.28297822240952,
            "unit": "iter/sec",
            "range": "stddev: 0.00020249723729424715",
            "extra": "mean: 21.149259999998375 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.45495145578349,
            "unit": "iter/sec",
            "range": "stddev: 0.000038631950822015736",
            "extra": "mean: 9.136178735632349 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.698222427667563,
            "unit": "iter/sec",
            "range": "stddev: 0.05820063829000233",
            "extra": "mean: 1.4322083627999973 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7061276.454272264,
            "unit": "iter/sec",
            "range": "stddev: 3.909476860610764e-9",
            "extra": "mean: 141.61745492846129 nsec\nrounds: 60238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1190.5048324671984,
            "unit": "iter/sec",
            "range": "stddev: 0.000012090384294887707",
            "extra": "mean: 839.979790697366 usec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2170.73263582734,
            "unit": "iter/sec",
            "range": "stddev: 0.00008599964602864861",
            "extra": "mean: 460.67396025437563 usec\nrounds: 1258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2182.4108500653547,
            "unit": "iter/sec",
            "range": "stddev: 0.00008819108326111389",
            "extra": "mean: 458.2088656542621 usec\nrounds: 1712"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.300283541162855,
            "unit": "iter/sec",
            "range": "stddev: 0.0008388844007296328",
            "extra": "mean: 30.959480548386498 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 130.52485809425482,
            "unit": "iter/sec",
            "range": "stddev: 0.0004311174356836137",
            "extra": "mean: 7.661375883495528 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2158.576009888826,
            "unit": "iter/sec",
            "range": "stddev: 0.00009622515982888978",
            "extra": "mean: 463.26837480766017 usec\nrounds: 1302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.50592646437029,
            "unit": "iter/sec",
            "range": "stddev: 0.00010317193026348986",
            "extra": "mean: 8.367785846153343 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5334169629811143,
            "unit": "iter/sec",
            "range": "stddev: 0.003757322431414926",
            "extra": "mean: 394.7238115999994 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.603568583146085,
            "unit": "iter/sec",
            "range": "stddev: 0.00033316893826636223",
            "extra": "mean: 21.457584266661595 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 87.51985525551457,
            "unit": "iter/sec",
            "range": "stddev: 0.014293873336283121",
            "extra": "mean: 11.425978677415495 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.35167199262487,
            "unit": "iter/sec",
            "range": "stddev: 0.0006537564229010062",
            "extra": "mean: 10.272037239131935 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.361167233414,
            "unit": "iter/sec",
            "range": "stddev: 0.00033250939216272394",
            "extra": "mean: 88.01912510000989 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.20961892397135,
            "unit": "iter/sec",
            "range": "stddev: 0.0008963431060114859",
            "extra": "mean: 10.503140452631573 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10148.789019963675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030729883884938616",
            "extra": "mean: 98.53392341026114 usec\nrounds: 5079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.8190632719103,
            "unit": "iter/sec",
            "range": "stddev: 0.00004872721674515113",
            "extra": "mean: 1.4517600532859405 msec\nrounds: 563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.57567938006333,
            "unit": "iter/sec",
            "range": "stddev: 0.026268424920808248",
            "extra": "mean: 27.340572121951617 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 69.27026148577248,
            "unit": "iter/sec",
            "range": "stddev: 0.00017911177125020818",
            "extra": "mean: 14.436209399980271 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 82.15298231122536,
            "unit": "iter/sec",
            "range": "stddev: 0.016674021220738293",
            "extra": "mean: 12.172412636362202 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.27367175542435,
            "unit": "iter/sec",
            "range": "stddev: 0.0010081360098522156",
            "extra": "mean: 10.607415425531695 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.650781862921537,
            "unit": "iter/sec",
            "range": "stddev: 0.0007360016799592808",
            "extra": "mean: 48.42431664999083 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 164.30017643212904,
            "unit": "iter/sec",
            "range": "stddev: 0.000039444497208900636",
            "extra": "mean: 6.086420731344078 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2688012.0095807603,
            "unit": "iter/sec",
            "range": "stddev: 1.5056904507140264e-8",
            "extra": "mean: 372.02214738489283 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.21583705247443,
            "unit": "iter/sec",
            "range": "stddev: 0.0009073853348988436",
            "extra": "mean: 10.181657358025909 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150496.735531724,
            "unit": "iter/sec",
            "range": "stddev: 3.4591817858236345e-7",
            "extra": "mean: 6.644662400595426 usec\nrounds: 40160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.26775449481075,
            "unit": "iter/sec",
            "range": "stddev: 0.0007978653800902828",
            "extra": "mean: 9.973296051541215 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13837.231164598987,
            "unit": "iter/sec",
            "range": "stddev: 0.00002892801985816761",
            "extra": "mean: 72.26879338103338 usec\nrounds: 7463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 493430.4757945893,
            "unit": "iter/sec",
            "range": "stddev: 1.5627971039474832e-7",
            "extra": "mean: 2.026627962915471 usec\nrounds: 2067"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.39578663629476,
            "unit": "iter/sec",
            "range": "stddev: 0.00021738096095368385",
            "extra": "mean: 6.273691551720715 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 294.98804520840497,
            "unit": "iter/sec",
            "range": "stddev: 0.00005088197483362112",
            "extra": "mean: 3.389967885964713 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 285.7982875470933,
            "unit": "iter/sec",
            "range": "stddev: 0.00029342039999698895",
            "extra": "mean: 3.4989712799983863 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 45.97405662310771,
            "unit": "iter/sec",
            "range": "stddev: 0.00045935026670549235",
            "extra": "mean: 21.751397928573805 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.18290054456786,
            "unit": "iter/sec",
            "range": "stddev: 0.0008845364839272285",
            "extra": "mean: 9.981743337079116 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.85801629131386,
            "unit": "iter/sec",
            "range": "stddev: 0.0008095865809678435",
            "extra": "mean: 11.382000666669567 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.53694111551353,
            "unit": "iter/sec",
            "range": "stddev: 0.001023248551592352",
            "extra": "mean: 10.148478212122635 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2050.1349697017117,
            "unit": "iter/sec",
            "range": "stddev: 0.00010928191189361238",
            "extra": "mean: 487.7727636368726 usec\nrounds: 1265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.01899620352125,
            "unit": "iter/sec",
            "range": "stddev: 0.00011868290256905885",
            "extra": "mean: 6.059908392405198 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 273.1544611696172,
            "unit": "iter/sec",
            "range": "stddev: 0.0003125420405689209",
            "extra": "mean: 3.6609323373966163 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.616099414813183,
            "unit": "iter/sec",
            "range": "stddev: 0.003042614205314587",
            "extra": "mean: 618.7738147999994 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12205.360352317508,
            "unit": "iter/sec",
            "range": "stddev: 0.00002023684498200548",
            "extra": "mean: 81.9312147396061 usec\nrounds: 4247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9386078612091799,
            "unit": "iter/sec",
            "range": "stddev: 0.004773715882198351",
            "extra": "mean: 1.0654076546000055 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1697435539203877,
            "unit": "iter/sec",
            "range": "stddev: 0.14986136906528133",
            "extra": "mean: 5.891239914000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 278.85632925723695,
            "unit": "iter/sec",
            "range": "stddev: 0.00026958706017797817",
            "extra": "mean: 3.5860760365870292 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.14204365725442,
            "unit": "iter/sec",
            "range": "stddev: 0.02883621246532182",
            "extra": "mean: 28.45594325000415 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.9433179573234,
            "unit": "iter/sec",
            "range": "stddev: 0.00081773629476769",
            "extra": "mean: 9.906549737376157 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7870218692236525,
            "unit": "iter/sec",
            "range": "stddev: 0.004229823186680263",
            "extra": "mean: 1.2706127225999921 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1786.1206027935489,
            "unit": "iter/sec",
            "range": "stddev: 0.000004939345043414458",
            "extra": "mean: 559.8726079504198 usec\nrounds: 1283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8489.122079925397,
            "unit": "iter/sec",
            "range": "stddev: 0.00004039396064791899",
            "extra": "mean: 117.79781119707823 usec\nrounds: 3358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 75890.58659818927,
            "unit": "iter/sec",
            "range": "stddev: 3.5871168017542176e-7",
            "extra": "mean: 13.176864810580602 usec\nrounds: 13004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.8576946533827,
            "unit": "iter/sec",
            "range": "stddev: 0.00074318158901938",
            "extra": "mean: 10.324424957445293 msec\nrounds: 94"
          }
        ]
      }
    ]
  }
}