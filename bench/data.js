window.BENCHMARK_DATA = {
  "lastUpdate": 1676381711467,
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
          "id": "6101de23edec04077cc149099056a6e01e6e4a1d",
          "message": "refactor(sqlalchemy): use backend-specific startswith/endswith implementations",
          "timestamp": "2023-02-14T08:29:35-05:00",
          "tree_id": "199b594a49af37fbbdb34c93273aeacd211401de",
          "url": "https://github.com/ibis-project/ibis/commit/6101de23edec04077cc149099056a6e01e6e4a1d"
        },
        "date": 1676381621613,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1271780.1527821997,
            "unit": "iter/sec",
            "range": "stddev: 2.4949756763292977e-7",
            "extra": "mean: 786.299422751926 nsec\nrounds: 76918"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 334334.1176182241,
            "unit": "iter/sec",
            "range": "stddev: 5.765436499730522e-7",
            "extra": "mean: 2.991019902856278 usec\nrounds: 1859"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 59.21881081827245,
            "unit": "iter/sec",
            "range": "stddev: 0.00015903734327552566",
            "extra": "mean: 16.88652619298194 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7246540859626344,
            "unit": "iter/sec",
            "range": "stddev: 0.022582499161254623",
            "extra": "mean: 1.3799687594000034 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4109.317650132426,
            "unit": "iter/sec",
            "range": "stddev: 0.00006082137626538762",
            "extra": "mean: 243.3494037550916 usec\nrounds: 639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.26959362419622,
            "unit": "iter/sec",
            "range": "stddev: 0.0005646569099986166",
            "extra": "mean: 20.71697573809131 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 124.69214755683356,
            "unit": "iter/sec",
            "range": "stddev: 0.00014174047144984505",
            "extra": "mean: 8.019751200004066 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6321779335648513,
            "unit": "iter/sec",
            "range": "stddev: 0.006292613026311625",
            "extra": "mean: 1.581833131000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.92390609414784,
            "unit": "iter/sec",
            "range": "stddev: 0.00025582723835713034",
            "extra": "mean: 12.059248618421904 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 236.13182820519404,
            "unit": "iter/sec",
            "range": "stddev: 0.00007394867382882195",
            "extra": "mean: 4.2349225328955615 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 148.77142927302177,
            "unit": "iter/sec",
            "range": "stddev: 0.011025869651848328",
            "extra": "mean: 6.7217207288156375 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1291188.7682852102,
            "unit": "iter/sec",
            "range": "stddev: 4.3634390526427564e-7",
            "extra": "mean: 774.4800950585022 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9268.469830127593,
            "unit": "iter/sec",
            "range": "stddev: 0.00003296950330444782",
            "extra": "mean: 107.89267466237561 usec\nrounds: 3252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.772740298009033,
            "unit": "iter/sec",
            "range": "stddev: 0.0008928330173802043",
            "extra": "mean: 33.58777156521504 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 351.64602323633943,
            "unit": "iter/sec",
            "range": "stddev: 0.00005351192269447492",
            "extra": "mean: 2.843768829792525 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 135.35905790163494,
            "unit": "iter/sec",
            "range": "stddev: 0.0007148632940680937",
            "extra": "mean: 7.387758274194678 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.248771885476017,
            "unit": "iter/sec",
            "range": "stddev: 0.0006067224176848316",
            "extra": "mean: 235.36212980000073 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3901.8575854769097,
            "unit": "iter/sec",
            "range": "stddev: 0.0000633543871913248",
            "extra": "mean: 256.28818533051964 usec\nrounds: 1786"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.502156112319301,
            "unit": "iter/sec",
            "range": "stddev: 0.043515200961749316",
            "extra": "mean: 1.9914125816000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.728971519616254,
            "unit": "iter/sec",
            "range": "stddev: 0.0004839217513415066",
            "extra": "mean: 85.25896736363786 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9261819424440756,
            "unit": "iter/sec",
            "range": "stddev: 0.002479103050965649",
            "extra": "mean: 519.1617562000033 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 44860.65871505665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017137724237574844",
            "extra": "mean: 22.291246465009408 usec\nrounds: 10537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.842825187349562,
            "unit": "iter/sec",
            "range": "stddev: 0.000734572628262681",
            "extra": "mean: 127.50507325000626 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3626402.5207264833,
            "unit": "iter/sec",
            "range": "stddev: 1.5604446092368495e-7",
            "extra": "mean: 275.75537858369603 nsec\nrounds: 185151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8258.915821881765,
            "unit": "iter/sec",
            "range": "stddev: 0.00005804731266853154",
            "extra": "mean: 121.08126799773503 usec\nrounds: 3056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 71.39938438023462,
            "unit": "iter/sec",
            "range": "stddev: 0.0006733177433385525",
            "extra": "mean: 14.0057229999987 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3668.5624983024113,
            "unit": "iter/sec",
            "range": "stddev: 0.00018403340572554813",
            "extra": "mean: 272.5863333288555 usec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 212.60044910020852,
            "unit": "iter/sec",
            "range": "stddev: 0.0002516438452398757",
            "extra": "mean: 4.70365892561522 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 218.19164010841357,
            "unit": "iter/sec",
            "range": "stddev: 0.00022780387074884111",
            "extra": "mean: 4.58312701395492 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 87.78872406705847,
            "unit": "iter/sec",
            "range": "stddev: 0.00017652134517949383",
            "extra": "mean: 11.390984555557933 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4665.889972265271,
            "unit": "iter/sec",
            "range": "stddev: 0.00005795777747508661",
            "extra": "mean: 214.32138476135216 usec\nrounds: 2100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 221.42577244632793,
            "unit": "iter/sec",
            "range": "stddev: 0.0002330359915585052",
            "extra": "mean: 4.516186119402127 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4589170.863620886,
            "unit": "iter/sec",
            "range": "stddev: 1.8632080222099864e-8",
            "extra": "mean: 217.9042859194641 nsec\nrounds: 48776"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 71.32910801445261,
            "unit": "iter/sec",
            "range": "stddev: 0.01612299369128068",
            "extra": "mean: 14.019522013332638 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 78.09650599866146,
            "unit": "iter/sec",
            "range": "stddev: 0.0007556063962193492",
            "extra": "mean: 12.804670160495267 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 126.6885624873836,
            "unit": "iter/sec",
            "range": "stddev: 0.0007970680829801072",
            "extra": "mean: 7.893372380001438 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119188.54518617527,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011222013525124292",
            "extra": "mean: 8.390068008951506 usec\nrounds: 28408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 136.91162067085935,
            "unit": "iter/sec",
            "range": "stddev: 0.0007839165976783211",
            "extra": "mean: 7.303981905261623 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3488.727574104814,
            "unit": "iter/sec",
            "range": "stddev: 0.000042127355638552284",
            "extra": "mean: 286.6374569979411 usec\nrounds: 1186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.724142028295007,
            "unit": "iter/sec",
            "range": "stddev: 0.01523118282189969",
            "extra": "mean: 1.3809445673999903 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 82.96080738702634,
            "unit": "iter/sec",
            "range": "stddev: 0.0007498793913445269",
            "extra": "mean: 12.053884617284753 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 77.89115926017936,
            "unit": "iter/sec",
            "range": "stddev: 0.0003671402060327357",
            "extra": "mean: 12.838427486484134 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11330541563927463,
            "unit": "iter/sec",
            "range": "stddev: 0.15516106241961286",
            "extra": "mean: 8.825703470200006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9378.032895721535,
            "unit": "iter/sec",
            "range": "stddev: 0.000003433672525249569",
            "extra": "mean: 106.63217021303284 usec\nrounds: 4089"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 236.21279491499698,
            "unit": "iter/sec",
            "range": "stddev: 0.00004968598872135508",
            "extra": "mean: 4.233470927600928 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.635940175924123,
            "unit": "iter/sec",
            "range": "stddev: 0.00044318366937848985",
            "extra": "mean: 48.45914416667559 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 820.7653218165672,
            "unit": "iter/sec",
            "range": "stddev: 0.000029393647641868416",
            "extra": "mean: 1.2183750621757996 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.17421729867903,
            "unit": "iter/sec",
            "range": "stddev: 0.0002878148656739141",
            "extra": "mean: 13.666015666669145 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 209.4034024851121,
            "unit": "iter/sec",
            "range": "stddev: 0.0002339404490519772",
            "extra": "mean: 4.775471592784156 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 119.6850457945258,
            "unit": "iter/sec",
            "range": "stddev: 0.0002035124142944042",
            "extra": "mean: 8.355262709401398 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.14802468510463,
            "unit": "iter/sec",
            "range": "stddev: 0.02925179146140656",
            "extra": "mean: 36.835092482757034 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 148.11087795328987,
            "unit": "iter/sec",
            "range": "stddev: 0.000041016436114869066",
            "extra": "mean: 6.751698550564076 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 221.68752630895202,
            "unit": "iter/sec",
            "range": "stddev: 0.00025231403217304",
            "extra": "mean: 4.510853707692884 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 101.98802146741338,
            "unit": "iter/sec",
            "range": "stddev: 0.00008796451985080613",
            "extra": "mean: 9.805073043009411 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4289.526219088418,
            "unit": "iter/sec",
            "range": "stddev: 0.00006663169197584074",
            "extra": "mean: 233.1259791699125 usec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 534.3407609176669,
            "unit": "iter/sec",
            "range": "stddev: 0.00002971319081213044",
            "extra": "mean: 1.871464939868369 msec\nrounds: 449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 135.1614759672069,
            "unit": "iter/sec",
            "range": "stddev: 0.0008628860112240055",
            "extra": "mean: 7.398557857141347 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 122.09012821573246,
            "unit": "iter/sec",
            "range": "stddev: 0.00020457678253787018",
            "extra": "mean: 8.190670405661352 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.59205597659904,
            "unit": "iter/sec",
            "range": "stddev: 0.0009980663006510305",
            "extra": "mean: 31.65352710000017 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 210.51206421734756,
            "unit": "iter/sec",
            "range": "stddev: 0.0001305736583467441",
            "extra": "mean: 4.75032157286496 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4599.440828748406,
            "unit": "iter/sec",
            "range": "stddev: 0.00005808465288887353",
            "extra": "mean: 217.4177334230689 usec\nrounds: 2232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 216.8283646679134,
            "unit": "iter/sec",
            "range": "stddev: 0.0002579428848471197",
            "extra": "mean: 4.611942729594277 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.666484049443895,
            "unit": "iter/sec",
            "range": "stddev: 0.0005983800104876776",
            "extra": "mean: 30.612416031257084 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 237.30742889456414,
            "unit": "iter/sec",
            "range": "stddev: 0.00002196898709971463",
            "extra": "mean: 4.213943089174426 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 133.55776420498196,
            "unit": "iter/sec",
            "range": "stddev: 0.0008887001261093793",
            "extra": "mean: 7.487396977275081 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 512114.0625119804,
            "unit": "iter/sec",
            "range": "stddev: 4.669979640590401e-7",
            "extra": "mean: 1.9526899829598134 usec\nrounds: 19157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.14249470552956,
            "unit": "iter/sec",
            "range": "stddev: 0.00019591333257315245",
            "extra": "mean: 18.81733263636094 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3821090.6389429593,
            "unit": "iter/sec",
            "range": "stddev: 2.2589477425510016e-8",
            "extra": "mean: 261.7053858414686 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 43.21748361398057,
            "unit": "iter/sec",
            "range": "stddev: 0.002425493554683856",
            "extra": "mean: 23.138783574999877 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 73.2888352352421,
            "unit": "iter/sec",
            "range": "stddev: 0.0009228734311556427",
            "extra": "mean: 13.64464310000569 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1411783.093295546,
            "unit": "iter/sec",
            "range": "stddev: 1.556838563589064e-7",
            "extra": "mean: 708.3241078243013 nsec\nrounds: 103083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 134.63336104583183,
            "unit": "iter/sec",
            "range": "stddev: 0.0009325858746733232",
            "extra": "mean: 7.4275795555574105 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3260662470107751,
            "unit": "iter/sec",
            "range": "stddev: 0.005022153579477572",
            "extra": "mean: 754.1101375999915 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 443.71254477346645,
            "unit": "iter/sec",
            "range": "stddev: 0.0001281210671321816",
            "extra": "mean: 2.2537113538463087 msec\nrounds: 390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 99.82086105980441,
            "unit": "iter/sec",
            "range": "stddev: 0.017782939151833575",
            "extra": "mean: 10.017946042369667 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 74.8716087294681,
            "unit": "iter/sec",
            "range": "stddev: 0.000984355279224492",
            "extra": "mean: 13.356197589039093 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9021586.215278924,
            "unit": "iter/sec",
            "range": "stddev: 9.424181298783023e-9",
            "extra": "mean: 110.84525228015626 nsec\nrounds: 87720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4525.51701623652,
            "unit": "iter/sec",
            "range": "stddev: 0.0001185477465895139",
            "extra": "mean: 220.96922769536135 usec\nrounds: 1827"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.50041197220305,
            "unit": "iter/sec",
            "range": "stddev: 0.000984675823663238",
            "extra": "mean: 12.738786649350317 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1250.2484369161025,
            "unit": "iter/sec",
            "range": "stddev: 0.00001855571677278563",
            "extra": "mean: 799.8410319685164 usec\nrounds: 782"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1292495.6047602547,
            "unit": "iter/sec",
            "range": "stddev: 3.322944376843917e-7",
            "extra": "mean: 773.6970217283564 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16256.201340705498,
            "unit": "iter/sec",
            "range": "stddev: 0.000029801339727441513",
            "extra": "mean: 61.51498613000085 usec\nrounds: 4398"
          }
        ]
      }
    ]
  }
}