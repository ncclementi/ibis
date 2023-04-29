window.BENCHMARK_DATA = {
  "lastUpdate": 1682774723656,
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
          "id": "9d582f2bfd20774df5a1e7be106b427b852b2070",
          "message": "chore(deps): update dependency mkdocs-gen-files to >=0.3.4,<0.6.0",
          "timestamp": "2023-04-29T09:16:23-04:00",
          "tree_id": "2672c18c50149dbfedb97f61e1cf87ddeeb4419a",
          "url": "https://github.com/ibis-project/ibis/commit/9d582f2bfd20774df5a1e7be106b427b852b2070"
        },
        "date": 1682774637238,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1067069.6553725968,
            "unit": "iter/sec",
            "range": "stddev: 1.1310138655291189e-7",
            "extra": "mean: 937.1459444705347 nsec\nrounds: 51547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.67634843245094,
            "unit": "iter/sec",
            "range": "stddev: 0.0006035498606782135",
            "extra": "mean: 9.462855358209193 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.758062941279604,
            "unit": "iter/sec",
            "range": "stddev: 0.000749254503963442",
            "extra": "mean: 22.852931157897302 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.09148463298534,
            "unit": "iter/sec",
            "range": "stddev: 0.00037529218017065297",
            "extra": "mean: 21.695981545457762 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.64123038224729,
            "unit": "iter/sec",
            "range": "stddev: 0.00837299769820217",
            "extra": "mean: 10.7943298666684 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 89.83483806890735,
            "unit": "iter/sec",
            "range": "stddev: 0.00928320574963205",
            "extra": "mean: 11.13153896078663 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 406.6417005031784,
            "unit": "iter/sec",
            "range": "stddev: 0.00013805911726634168",
            "extra": "mean: 2.4591673671504912 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.10559675634335,
            "unit": "iter/sec",
            "range": "stddev: 0.0006535723404810556",
            "extra": "mean: 9.698794551019144 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.353418065612264,
            "unit": "iter/sec",
            "range": "stddev: 0.0006089397501805413",
            "extra": "mean: 36.558502400004045 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2334.990118804673,
            "unit": "iter/sec",
            "range": "stddev: 0.00009025857024747218",
            "extra": "mean: 428.2673369564063 usec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.84347937223852,
            "unit": "iter/sec",
            "range": "stddev: 0.0006812435423352935",
            "extra": "mean: 10.32594043999893 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6437944.07223355,
            "unit": "iter/sec",
            "range": "stddev: 9.052821259134018e-9",
            "extra": "mean: 155.32909089921074 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.95001429726229,
            "unit": "iter/sec",
            "range": "stddev: 0.0007090810211975675",
            "extra": "mean: 9.808728393938575 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5861030.509353712,
            "unit": "iter/sec",
            "range": "stddev: 9.38176184569068e-9",
            "extra": "mean: 170.61846008220692 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1989.1131324608514,
            "unit": "iter/sec",
            "range": "stddev: 0.0026812961654575163",
            "extra": "mean: 502.7366134589036 usec\nrounds: 1278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.97033351815553,
            "unit": "iter/sec",
            "range": "stddev: 0.0005850748485730844",
            "extra": "mean: 9.806773847826564 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.20935201267804,
            "unit": "iter/sec",
            "range": "stddev: 0.0002623348502219594",
            "extra": "mean: 3.6335974511285256 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.47176738628913,
            "unit": "iter/sec",
            "range": "stddev: 0.0006866530076625669",
            "extra": "mean: 9.481210230767363 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4594649.6148646595,
            "unit": "iter/sec",
            "range": "stddev: 1.4154560471295114e-8",
            "extra": "mean: 217.64445253133832 nsec\nrounds: 144949"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1880719.1059500745,
            "unit": "iter/sec",
            "range": "stddev: 9.876422374837042e-8",
            "extra": "mean: 531.7115122807425 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.71001898206063,
            "unit": "iter/sec",
            "range": "stddev: 0.0007632766268787596",
            "extra": "mean: 33.6586792692329 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.37052061843012,
            "unit": "iter/sec",
            "range": "stddev: 0.0006574148275921265",
            "extra": "mean: 9.673937927538194 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7937677575977835,
            "unit": "iter/sec",
            "range": "stddev: 0.0012787733862959538",
            "extra": "mean: 1.2598143354000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.20687711399939,
            "unit": "iter/sec",
            "range": "stddev: 0.00013843413242399437",
            "extra": "mean: 17.791417195653644 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.03538983175991,
            "unit": "iter/sec",
            "range": "stddev: 0.0000943115276024348",
            "extra": "mean: 9.996462268821121 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2411.6888523653115,
            "unit": "iter/sec",
            "range": "stddev: 0.00007987298197877344",
            "extra": "mean: 414.6471876001874 usec\nrounds: 1242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6323049.880337209,
            "unit": "iter/sec",
            "range": "stddev: 4.869609746819931e-9",
            "extra": "mean: 158.15152796909277 nsec\nrounds: 61729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3160960191152933,
            "unit": "iter/sec",
            "range": "stddev: 0.05692819322088526",
            "extra": "mean: 759.8229806000177 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 236.91328121030602,
            "unit": "iter/sec",
            "range": "stddev: 0.004124962399638565",
            "extra": "mean: 4.220953738394717 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.98394083308597,
            "unit": "iter/sec",
            "range": "stddev: 0.00030224148511289774",
            "extra": "mean: 3.6766876637532464 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 191.27296623159503,
            "unit": "iter/sec",
            "range": "stddev: 0.00005196114633297213",
            "extra": "mean: 5.2281303505754755 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.23843614884184,
            "unit": "iter/sec",
            "range": "stddev: 0.0006407248981282875",
            "extra": "mean: 9.877671347370372 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.2942377132358,
            "unit": "iter/sec",
            "range": "stddev: 0.0006861105313585416",
            "extra": "mean: 9.775721705882662 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2389.7232434057605,
            "unit": "iter/sec",
            "range": "stddev: 0.00008716777219904852",
            "extra": "mean: 418.4584983886379 usec\nrounds: 1862"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.492606932822514,
            "unit": "iter/sec",
            "range": "stddev: 0.003449742600453608",
            "extra": "mean: 401.1863991999917 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7733.167826295332,
            "unit": "iter/sec",
            "range": "stddev: 0.000014862437681690259",
            "extra": "mean: 129.3131123573536 usec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.38325600604136,
            "unit": "iter/sec",
            "range": "stddev: 0.00005987669178758925",
            "extra": "mean: 5.701798579709076 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2368.2540763692305,
            "unit": "iter/sec",
            "range": "stddev: 0.00007619920030108059",
            "extra": "mean: 422.2519914472604 usec\nrounds: 1403"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.73386422333306,
            "unit": "iter/sec",
            "range": "stddev: 0.0003233455274941017",
            "extra": "mean: 7.477537614033337 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.90011502305586,
            "unit": "iter/sec",
            "range": "stddev: 0.00010411399930903729",
            "extra": "mean: 6.1012769872634305 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1619932.0711548817,
            "unit": "iter/sec",
            "range": "stddev: 8.963479884792732e-8",
            "extra": "mean: 617.3098352741915 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6614915839388287,
            "unit": "iter/sec",
            "range": "stddev: 0.0012128309615727147",
            "extra": "mean: 601.8688326000074 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 248.88649570037177,
            "unit": "iter/sec",
            "range": "stddev: 0.007380360664260429",
            "extra": "mean: 4.01789577689211 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 690.0406910896083,
            "unit": "iter/sec",
            "range": "stddev: 0.00005180835159451901",
            "extra": "mean: 1.4491898998317774 msec\nrounds: 599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12525920.19218004,
            "unit": "iter/sec",
            "range": "stddev: 3.2600795328339398e-9",
            "extra": "mean: 79.83445404859098 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4576.395391666737,
            "unit": "iter/sec",
            "range": "stddev: 0.0000926639372123914",
            "extra": "mean: 218.51258783734525 usec\nrounds: 2072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.954309124647715,
            "unit": "iter/sec",
            "range": "stddev: 0.00011970381209725025",
            "extra": "mean: 20.018293066665493 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.59370422354294,
            "unit": "iter/sec",
            "range": "stddev: 0.00007281282670523998",
            "extra": "mean: 9.470261578123917 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 280.82709322824127,
            "unit": "iter/sec",
            "range": "stddev: 0.00023950827591211194",
            "extra": "mean: 3.5609099838072016 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 115.17717597490433,
            "unit": "iter/sec",
            "range": "stddev: 0.00013992965174731715",
            "extra": "mean: 8.682275733326605 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.143076097330084,
            "unit": "iter/sec",
            "range": "stddev: 0.00007061605185411585",
            "extra": "mean: 52.23820847368786 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13332.595020006987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018363672719202266",
            "extra": "mean: 75.00415324244027 usec\nrounds: 6878"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.37610466507333,
            "unit": "iter/sec",
            "range": "stddev: 0.0002716506154946697",
            "extra": "mean: 15.065662636364282 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 425.5993068803966,
            "unit": "iter/sec",
            "range": "stddev: 0.00003343821681302356",
            "extra": "mean: 2.3496278866850306 msec\nrounds: 353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.6441087678096,
            "unit": "iter/sec",
            "range": "stddev: 0.0007870957600097968",
            "extra": "mean: 10.347242193546741 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.71113283759763,
            "unit": "iter/sec",
            "range": "stddev: 0.000040181046714699987",
            "extra": "mean: 6.340706467626136 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9804.334150629691,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016805619268072222",
            "extra": "mean: 101.99570767748406 usec\nrounds: 5145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.26803429717998,
            "unit": "iter/sec",
            "range": "stddev: 0.0006829924727837785",
            "extra": "mean: 9.77822647000437 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.0023082404602,
            "unit": "iter/sec",
            "range": "stddev: 0.00007372218111180342",
            "extra": "mean: 5.076082655739262 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.512990032500566,
            "unit": "iter/sec",
            "range": "stddev: 0.00015405834886012356",
            "extra": "mean: 117.46754033333042 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.7877266066926,
            "unit": "iter/sec",
            "range": "stddev: 0.00002285389405182714",
            "extra": "mean: 1.8355773288592205 msec\nrounds: 447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.06707324150543,
            "unit": "iter/sec",
            "range": "stddev: 0.0005178956801786406",
            "extra": "mean: 22.692680190481326 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1177.6440415351783,
            "unit": "iter/sec",
            "range": "stddev: 0.000013924168426066072",
            "extra": "mean: 849.1530247938067 usec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 90.14522337323567,
            "unit": "iter/sec",
            "range": "stddev: 0.016984162274923654",
            "extra": "mean: 11.0932111828002 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2379.550614220467,
            "unit": "iter/sec",
            "range": "stddev: 0.00007720558040619983",
            "extra": "mean: 420.2474173164821 usec\nrounds: 1155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.33898467713998,
            "unit": "iter/sec",
            "range": "stddev: 0.0002254624052511641",
            "extra": "mean: 16.852327444443866 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 272.1501727764361,
            "unit": "iter/sec",
            "range": "stddev: 0.00022852517429181417",
            "extra": "mean: 3.6744419075620893 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2412.972468372171,
            "unit": "iter/sec",
            "range": "stddev: 0.00008392690028730569",
            "extra": "mean: 414.42660996236555 usec\nrounds: 1305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1893263.1081544387,
            "unit": "iter/sec",
            "range": "stddev: 8.252233344422172e-8",
            "extra": "mean: 528.1886050031391 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137088.64990751454,
            "unit": "iter/sec",
            "range": "stddev: 3.078279361733444e-7",
            "extra": "mean: 7.294549918426068 usec\nrounds: 40486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1804799.002536159,
            "unit": "iter/sec",
            "range": "stddev: 9.656990025727569e-8",
            "extra": "mean: 554.0783204084051 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 273.87375585140103,
            "unit": "iter/sec",
            "range": "stddev: 0.0004206877596929843",
            "extra": "mean: 3.651317362962598 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1785.7766793720298,
            "unit": "iter/sec",
            "range": "stddev: 0.000006187516977419917",
            "extra": "mean: 559.9804340325751 usec\nrounds: 1334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7476827.938277379,
            "unit": "iter/sec",
            "range": "stddev: 4.696963815294376e-9",
            "extra": "mean: 133.74655779908198 nsec\nrounds: 68494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.98103289131095,
            "unit": "iter/sec",
            "range": "stddev: 0.00011421579681037818",
            "extra": "mean: 9.010548685191532 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 171.9714227879097,
            "unit": "iter/sec",
            "range": "stddev: 0.0040967277739817004",
            "extra": "mean: 5.8149196173906645 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9223405053596984,
            "unit": "iter/sec",
            "range": "stddev: 0.0008214628135439537",
            "extra": "mean: 1.0841982914000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9260959919644073,
            "unit": "iter/sec",
            "range": "stddev: 0.004925039260186807",
            "extra": "mean: 1.0798016713999914 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 86.43690555278862,
            "unit": "iter/sec",
            "range": "stddev: 0.017115501674193966",
            "extra": "mean: 11.569132346938098 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11730.465660814363,
            "unit": "iter/sec",
            "range": "stddev: 0.000018489968673836068",
            "extra": "mean: 85.24810769793235 usec\nrounds: 5794"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17676746114440597,
            "unit": "iter/sec",
            "range": "stddev: 0.06927632233082746",
            "extra": "mean: 5.657149757800016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 762.2549570217059,
            "unit": "iter/sec",
            "range": "stddev: 0.000014036669601993648",
            "extra": "mean: 1.31189701134541 msec\nrounds: 617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.4553258619997,
            "unit": "iter/sec",
            "range": "stddev: 0.0002292089772746558",
            "extra": "mean: 3.5529617246976866 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.37298383239957,
            "unit": "iter/sec",
            "range": "stddev: 0.0007813261382953723",
            "extra": "mean: 9.864561169998751 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2452.092737457175,
            "unit": "iter/sec",
            "range": "stddev: 0.00007506826116666947",
            "extra": "mean: 407.8149185487177 usec\nrounds: 1461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.62677414083605,
            "unit": "iter/sec",
            "range": "stddev: 0.0007248253766023331",
            "extra": "mean: 10.243091701026641 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 127.71285317501481,
            "unit": "iter/sec",
            "range": "stddev: 0.00007021957746756298",
            "extra": "mean: 7.830065456525526 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.33586583542902,
            "unit": "iter/sec",
            "range": "stddev: 0.0003931989189305177",
            "extra": "mean: 3.9787397499996486 msec\nrounds: 228"
          }
        ]
      }
    ]
  }
}