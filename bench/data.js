window.BENCHMARK_DATA = {
  "lastUpdate": 1679514480696,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "e9f57eb19934c3e84a4a72246a6f2874ad88dcd8",
          "message": "refactor(duckdb): use native duckdb parquet reader unless auth required\n\nThis does two things:\n\nWe now support passing in a list of paths / S3 URIs to read parquet\nfiles using pyarrow.dataset.\n\nWe use the native DuckDB parquet reader unless we hit an auth error, at\nwhich point we fall back to using pyarrow.dataset.",
          "timestamp": "2023-03-22T15:36:36-04:00",
          "tree_id": "62361f79fae41f6843ea12a84e2f5d2df7541a1d",
          "url": "https://github.com/ibis-project/ibis/commit/e9f57eb19934c3e84a4a72246a6f2874ad88dcd8"
        },
        "date": 1679514380168,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4027.5394195182653,
            "unit": "iter/sec",
            "range": "stddev: 0.00013589630544615656",
            "extra": "mean: 248.290555557023 usec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 102.30595935605136,
            "unit": "iter/sec",
            "range": "stddev: 0.000737150909566094",
            "extra": "mean: 9.774601658538186 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 219.24536361594096,
            "unit": "iter/sec",
            "range": "stddev: 0.007829374484410382",
            "extra": "mean: 4.561099872340889 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 102.13930616546759,
            "unit": "iter/sec",
            "range": "stddev: 0.0007683734090635894",
            "extra": "mean: 9.790550156861075 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.94809263449773,
            "unit": "iter/sec",
            "range": "stddev: 0.0004328456057213771",
            "extra": "mean: 11.501114857156024 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1525888.6802394206,
            "unit": "iter/sec",
            "range": "stddev: 1.0994962520919819e-7",
            "extra": "mean: 655.355802130398 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.778459886361031,
            "unit": "iter/sec",
            "range": "stddev: 0.0005509291185245101",
            "extra": "mean: 209.27244840000867 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10406.554217117697,
            "unit": "iter/sec",
            "range": "stddev: 0.00001714710195467343",
            "extra": "mean: 96.0932868975116 usec\nrounds: 3259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10003909.034881199,
            "unit": "iter/sec",
            "range": "stddev: 7.415263711783826e-9",
            "extra": "mean: 99.9609249257894 nsec\nrounds: 97078"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.03975799741245,
            "unit": "iter/sec",
            "range": "stddev: 0.0008281268287415299",
            "extra": "mean: 11.1062048837219 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 69.8206097676284,
            "unit": "iter/sec",
            "range": "stddev: 0.00028730953772207414",
            "extra": "mean: 14.322418600011133 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1551675.3824967502,
            "unit": "iter/sec",
            "range": "stddev: 1.299163562908211e-7",
            "extra": "mean: 644.4646936338788 nsec\nrounds: 94331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 370263.7615832859,
            "unit": "iter/sec",
            "range": "stddev: 0.000009906698790693729",
            "extra": "mean: 2.700777401828084 usec\nrounds: 1770"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.788353735967462,
            "unit": "iter/sec",
            "range": "stddev: 0.0009347524158694619",
            "extra": "mean: 48.103857222220846 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.941026157612654,
            "unit": "iter/sec",
            "range": "stddev: 0.000474627041118632",
            "extra": "mean: 25.67985743242948 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1505.3329491788518,
            "unit": "iter/sec",
            "range": "stddev: 0.000009216585921371457",
            "extra": "mean: 664.3048639475359 usec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5838003586749863,
            "unit": "iter/sec",
            "range": "stddev: 0.0030472200356862706",
            "extra": "mean: 1.7129143295999938 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5564662.195093732,
            "unit": "iter/sec",
            "range": "stddev: 1.5415994624410148e-8",
            "extra": "mean: 179.70542774036295 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.7078615232691,
            "unit": "iter/sec",
            "range": "stddev: 0.0008758921641576526",
            "extra": "mean: 10.448462478256017 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6786.778506893656,
            "unit": "iter/sec",
            "range": "stddev: 0.000016289279153716208",
            "extra": "mean: 147.34531250493177 usec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.9003152640238,
            "unit": "iter/sec",
            "range": "stddev: 0.00036725845462555327",
            "extra": "mean: 21.78634273529249 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 93.66060805308211,
            "unit": "iter/sec",
            "range": "stddev: 0.00023789309760107176",
            "extra": "mean: 10.676847191011726 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.51116351406694,
            "unit": "iter/sec",
            "range": "stddev: 0.0010153043523273275",
            "extra": "mean: 29.840802142851025 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4488.44376705133,
            "unit": "iter/sec",
            "range": "stddev: 0.00006054519777171193",
            "extra": "mean: 222.79436969685977 usec\nrounds: 1485"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.247636084328,
            "unit": "iter/sec",
            "range": "stddev: 0.0007594107942909355",
            "extra": "mean: 11.461628588234344 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13988729922775642,
            "unit": "iter/sec",
            "range": "stddev: 0.05253265528502461",
            "extra": "mean: 7.148611814799983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.05469098518728,
            "unit": "iter/sec",
            "range": "stddev: 0.00026837654592594076",
            "extra": "mean: 19.210564525002383 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7069408321283803,
            "unit": "iter/sec",
            "range": "stddev: 0.003077430877431443",
            "extra": "mean: 1.414545538400023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 636.7986809417633,
            "unit": "iter/sec",
            "range": "stddev: 0.000025367630280614317",
            "extra": "mean: 1.5703550116044482 msec\nrounds: 517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.23120684742472,
            "unit": "iter/sec",
            "range": "stddev: 0.0008257243291284153",
            "extra": "mean: 10.50075950000462 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4631.245894118906,
            "unit": "iter/sec",
            "range": "stddev: 0.00010762496023640599",
            "extra": "mean: 215.92461788087584 usec\nrounds: 1510"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 254.0030100114303,
            "unit": "iter/sec",
            "range": "stddev: 0.00027555487491806856",
            "extra": "mean: 3.9369612192981465 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7079666745960858,
            "unit": "iter/sec",
            "range": "stddev: 0.013611843907897506",
            "extra": "mean: 1.4124958644000116 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.238274090037972,
            "unit": "iter/sec",
            "range": "stddev: 0.0006703699657197618",
            "extra": "mean: 33.070670535705304 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.96555103200687,
            "unit": "iter/sec",
            "range": "stddev: 0.0007672978156660159",
            "extra": "mean: 11.498805999998313 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.29214940501565,
            "unit": "iter/sec",
            "range": "stddev: 0.00010318401085164992",
            "extra": "mean: 15.553998571433459 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1546100.9904369102,
            "unit": "iter/sec",
            "range": "stddev: 1.2439374719063565e-7",
            "extra": "mean: 646.7882797988581 nsec\nrounds: 114930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4988193.510307562,
            "unit": "iter/sec",
            "range": "stddev: 1.6315345798580282e-8",
            "extra": "mean: 200.4733773726964 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1003.6212645888754,
            "unit": "iter/sec",
            "range": "stddev: 0.000019483670262934198",
            "extra": "mean: 996.3918016520317 usec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 642707.2225739086,
            "unit": "iter/sec",
            "range": "stddev: 4.7587949836736907e-7",
            "extra": "mean: 1.5559184102447274 usec\nrounds: 21412"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 451.0814370950623,
            "unit": "iter/sec",
            "range": "stddev: 0.00003231397690865055",
            "extra": "mean: 2.2168945954414365 msec\nrounds: 351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10948.039805957806,
            "unit": "iter/sec",
            "range": "stddev: 0.000002337555423372388",
            "extra": "mean: 91.34055207360596 usec\nrounds: 4148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 571.8084775773252,
            "unit": "iter/sec",
            "range": "stddev: 0.000031590602104112364",
            "extra": "mean: 1.7488373104170543 msec\nrounds: 480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 54.464783671761246,
            "unit": "iter/sec",
            "range": "stddev: 0.03209513868455727",
            "extra": "mean: 18.360487870963073 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4578.452029555887,
            "unit": "iter/sec",
            "range": "stddev: 0.00005706316999488459",
            "extra": "mean: 218.41443211473393 usec\nrounds: 2298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.77414834731778,
            "unit": "iter/sec",
            "range": "stddev: 0.0008030553443902935",
            "extra": "mean: 9.825677897960563 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1390970176453563,
            "unit": "iter/sec",
            "range": "stddev: 0.002459229069395721",
            "extra": "mean: 467.4869777999902 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 270.25488298199036,
            "unit": "iter/sec",
            "range": "stddev: 0.00022841295678917715",
            "extra": "mean: 3.700210663970277 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 81.03587251136943,
            "unit": "iter/sec",
            "range": "stddev: 0.00041763042097465276",
            "extra": "mean: 12.340213895515207 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 268.2319219840847,
            "unit": "iter/sec",
            "range": "stddev: 0.0002619594030195275",
            "extra": "mean: 3.72811704365051 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 89.90618823470273,
            "unit": "iter/sec",
            "range": "stddev: 0.0008867797564597365",
            "extra": "mean: 11.122704895345699 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.99852658944735,
            "unit": "iter/sec",
            "range": "stddev: 0.0002716640699580659",
            "extra": "mean: 7.194320864663892 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.7278813964643,
            "unit": "iter/sec",
            "range": "stddev: 0.0009111244309452877",
            "extra": "mean: 11.398884642850877 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 100.1419659514583,
            "unit": "iter/sec",
            "range": "stddev: 0.0008396269486586688",
            "extra": "mean: 9.985823530613818 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 261.2642582682419,
            "unit": "iter/sec",
            "range": "stddev: 0.0002797759350368539",
            "extra": "mean: 3.8275423000006867 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 238.92446880634873,
            "unit": "iter/sec",
            "range": "stddev: 0.0003347226018546455",
            "extra": "mean: 4.185423138098562 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.70067809483147,
            "unit": "iter/sec",
            "range": "stddev: 0.0008349868470878568",
            "extra": "mean: 11.025275896553461 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.18776964585069,
            "unit": "iter/sec",
            "range": "stddev: 0.001270840541410099",
            "extra": "mean: 75.82783342857624 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 113.385050128696,
            "unit": "iter/sec",
            "range": "stddev: 0.00042947718771246124",
            "extra": "mean: 8.819504854166974 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.98646817804043,
            "unit": "iter/sec",
            "range": "stddev: 0.0008365664247916238",
            "extra": "mean: 9.902316795919502 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12054.145631295642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017561138033805552",
            "extra": "mean: 82.95901099815357 usec\nrounds: 5910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 298.4875984549365,
            "unit": "iter/sec",
            "range": "stddev: 0.000015141269525214667",
            "extra": "mean: 3.3502229411751347 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 62811.609887195074,
            "unit": "iter/sec",
            "range": "stddev: 5.261501197277936e-7",
            "extra": "mean: 15.920623620313583 usec\nrounds: 11236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4539344.45893614,
            "unit": "iter/sec",
            "range": "stddev: 1.597489897731656e-8",
            "extra": "mean: 220.29612624597144 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.22546312433796,
            "unit": "iter/sec",
            "range": "stddev: 0.04499462150404365",
            "extra": "mean: 41.27888060869954 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144065.0707209921,
            "unit": "iter/sec",
            "range": "stddev: 3.958055770795703e-7",
            "extra": "mean: 6.9413078062251445 usec\nrounds: 39213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4338.536794798805,
            "unit": "iter/sec",
            "range": "stddev: 0.00007825669563867843",
            "extra": "mean: 230.4924557050746 usec\nrounds: 1490"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 135.5683709842715,
            "unit": "iter/sec",
            "range": "stddev: 0.00009327717979771771",
            "extra": "mean: 7.376351819673476 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 266.288935918006,
            "unit": "iter/sec",
            "range": "stddev: 0.00024920537107253344",
            "extra": "mean: 3.7553193734940367 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 83.02587392631222,
            "unit": "iter/sec",
            "range": "stddev: 0.00021137847860262186",
            "extra": "mean: 12.044438109588922 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.766104674231755,
            "unit": "iter/sec",
            "range": "stddev: 0.0011120552686093013",
            "extra": "mean: 19.69818260465408 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.1586182330658,
            "unit": "iter/sec",
            "range": "stddev: 0.00007752234540486735",
            "extra": "mean: 9.885465197794975 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4425.078487158061,
            "unit": "iter/sec",
            "range": "stddev: 0.000024902112447654706",
            "extra": "mean: 225.9846922268343 usec\nrounds: 1930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.27093373494075,
            "unit": "iter/sec",
            "range": "stddev: 0.000780916497049649",
            "extra": "mean: 9.874501627656835 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4327.032576420352,
            "unit": "iter/sec",
            "range": "stddev: 0.00006745839841983115",
            "extra": "mean: 231.1052626341158 usec\nrounds: 2612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 242.64494278072368,
            "unit": "iter/sec",
            "range": "stddev: 0.00003270082402686387",
            "extra": "mean: 4.121248061220432 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4468042922987805,
            "unit": "iter/sec",
            "range": "stddev: 0.0019242731714115503",
            "extra": "mean: 691.1784857999919 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.982141481752524,
            "unit": "iter/sec",
            "range": "stddev: 0.0003420822723477621",
            "extra": "mean: 111.332024999999 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 132.28716960768438,
            "unit": "iter/sec",
            "range": "stddev: 0.00044687379462841355",
            "extra": "mean: 7.559312085711986 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.2628883157809,
            "unit": "iter/sec",
            "range": "stddev: 0.000046849845397019944",
            "extra": "mean: 5.873270504758109 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4744.759452686677,
            "unit": "iter/sec",
            "range": "stddev: 0.00005673844982211931",
            "extra": "mean: 210.75884035254077 usec\nrounds: 2042"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7173436596139098,
            "unit": "iter/sec",
            "range": "stddev: 0.01048910923528002",
            "extra": "mean: 1.3940319770000087 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4714.024960773195,
            "unit": "iter/sec",
            "range": "stddev: 0.000057238557359554766",
            "extra": "mean: 212.13294548104807 usec\nrounds: 2036"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 132.50005062539432,
            "unit": "iter/sec",
            "range": "stddev: 0.0049492725362377445",
            "extra": "mean: 7.547166927710931 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1436037.644786973,
            "unit": "iter/sec",
            "range": "stddev: 1.3413869432954726e-7",
            "extra": "mean: 696.360574968314 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 190.94905382980397,
            "unit": "iter/sec",
            "range": "stddev: 0.004504394904147021",
            "extra": "mean: 5.236998979273898 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 262.3050236135211,
            "unit": "iter/sec",
            "range": "stddev: 0.0002492393368937358",
            "extra": "mean: 3.8123555020943667 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 242.45039377782305,
            "unit": "iter/sec",
            "range": "stddev: 0.00040670758383865057",
            "extra": "mean: 4.1245550663711485 msec\nrounds: 226"
          }
        ]
      }
    ]
  }
}