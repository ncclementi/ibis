window.BENCHMARK_DATA = {
  "lastUpdate": 1682775093834,
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
      },
      {
        "commit": {
          "author": {
            "email": "petridish@gmail.com",
            "name": "Bryce Mecum",
            "username": "amoeba"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "e02a6f28dc6be2cfe04d8179839e8e77215f33a6",
          "message": "docs(intro): create Ibis for dplyr users document\n\nCo-authored-by: François Michonneau <francois.michonneau@gmail.com>\nCo-authored-by: Phillip Cloud <417981+cpcloud@users.noreply.github.com>\nCo-authored-by: Ian Cook <ianmcook@gmail.com>\nCo-authored-by: Gil Forsyth <gil@forsyth.dev>",
          "timestamp": "2023-04-29T09:19:13-04:00",
          "tree_id": "fa2a69cda57cf5f17e1f37bb1bdea6644ff9a4ab",
          "url": "https://github.com/ibis-project/ibis/commit/e02a6f28dc6be2cfe04d8179839e8e77215f33a6"
        },
        "date": 1682775007149,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 96.47611877725477,
            "unit": "iter/sec",
            "range": "stddev: 0.006460635078105657",
            "extra": "mean: 10.365259430769724 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 41.11553772410963,
            "unit": "iter/sec",
            "range": "stddev: 0.011123976654249487",
            "extra": "mean: 24.32170550000159 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.21959180148326,
            "unit": "iter/sec",
            "range": "stddev: 0.011378360032396543",
            "extra": "mean: 11.59829197872399 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 742.3363163718528,
            "unit": "iter/sec",
            "range": "stddev: 0.00003090255601518377",
            "extra": "mean: 1.3470983137231802 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.96654907970046,
            "unit": "iter/sec",
            "range": "stddev: 0.0007301312495970955",
            "extra": "mean: 9.807137821427757 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17827093699643962,
            "unit": "iter/sec",
            "range": "stddev: 0.009278360476486877",
            "extra": "mean: 5.609439299800011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.24076504717712,
            "unit": "iter/sec",
            "range": "stddev: 0.00022018023101340878",
            "extra": "mean: 16.880268160001606 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1838476.9316988857,
            "unit": "iter/sec",
            "range": "stddev: 1.0305200386479254e-7",
            "extra": "mean: 543.9285001394757 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 426.28270056390625,
            "unit": "iter/sec",
            "range": "stddev: 0.00015309704026359743",
            "extra": "mean: 2.3458610886089306 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9763.47419480998,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018300865041282702",
            "extra": "mean: 102.42255779521341 usec\nrounds: 5606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.96984006056405,
            "unit": "iter/sec",
            "range": "stddev: 0.0006465132717396342",
            "extra": "mean: 9.806821305261039 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.2248425199319,
            "unit": "iter/sec",
            "range": "stddev: 0.00030236345413451205",
            "extra": "mean: 3.6734340288094076 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.3751847749809,
            "unit": "iter/sec",
            "range": "stddev: 0.00031299567268585466",
            "extra": "mean: 36.52943379998419 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.62865824662073,
            "unit": "iter/sec",
            "range": "stddev: 0.0007892541678591704",
            "extra": "mean: 9.937526917522838 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 416.6950462336847,
            "unit": "iter/sec",
            "range": "stddev: 0.000031283056272671776",
            "extra": "mean: 2.3998365448270653 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.89816323785624,
            "unit": "iter/sec",
            "range": "stddev: 0.00026084441128579956",
            "extra": "mean: 3.598440480313965 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1596240.0118474185,
            "unit": "iter/sec",
            "range": "stddev: 8.791376399206082e-8",
            "extra": "mean: 626.4722050430522 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7963958683207935,
            "unit": "iter/sec",
            "range": "stddev: 0.0030001816051650507",
            "extra": "mean: 1.2556569411999932 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 200.03838033081587,
            "unit": "iter/sec",
            "range": "stddev: 0.000021145062295671553",
            "extra": "mean: 4.9990406758254995 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6437278.132882663,
            "unit": "iter/sec",
            "range": "stddev: 3.775889099605375e-9",
            "extra": "mean: 155.34515976430478 nsec\nrounds: 48781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9198832249456654,
            "unit": "iter/sec",
            "range": "stddev: 0.005353153155564204",
            "extra": "mean: 1.0870945060000055 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.80914947705233,
            "unit": "iter/sec",
            "range": "stddev: 0.0006970888800757326",
            "extra": "mean: 9.822299912498522 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.237371256115715,
            "unit": "iter/sec",
            "range": "stddev: 0.00013164739551229404",
            "extra": "mean: 51.98215425000399 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2414.1761310403326,
            "unit": "iter/sec",
            "range": "stddev: 0.00007486695905216385",
            "extra": "mean: 414.21998467405666 usec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.93962279934621,
            "unit": "iter/sec",
            "range": "stddev: 0.00008451893197502334",
            "extra": "mean: 9.013912025000081 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 271.03456485171495,
            "unit": "iter/sec",
            "range": "stddev: 0.00026767124043616634",
            "extra": "mean: 3.689566312500059 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2253.619161029274,
            "unit": "iter/sec",
            "range": "stddev: 0.0001304264173906821",
            "extra": "mean: 443.73069651363795 usec\nrounds: 1262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4906975485212604,
            "unit": "iter/sec",
            "range": "stddev: 0.0023572075085913804",
            "extra": "mean: 401.4939512000183 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1720757.1832745364,
            "unit": "iter/sec",
            "range": "stddev: 1.3005287172941164e-7",
            "extra": "mean: 581.1395179516483 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2379.5047910558337,
            "unit": "iter/sec",
            "range": "stddev: 0.00008008539115989011",
            "extra": "mean: 420.25551020482715 usec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.01258865805764,
            "unit": "iter/sec",
            "range": "stddev: 0.00002559020838470788",
            "extra": "mean: 9.432842011107647 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.27543359835275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000643354474463192",
            "extra": "mean: 9.972532295451748 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.8034317593601,
            "unit": "iter/sec",
            "range": "stddev: 0.0008049686248487458",
            "extra": "mean: 9.920297181818368 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 174.68186604052153,
            "unit": "iter/sec",
            "range": "stddev: 0.00009654084562644735",
            "extra": "mean: 5.724692680853471 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.634005069065173,
            "unit": "iter/sec",
            "range": "stddev: 0.00022671730752745872",
            "extra": "mean: 115.82110411110433 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4735053.892298188,
            "unit": "iter/sec",
            "range": "stddev: 1.1300244637751e-8",
            "extra": "mean: 211.19083810820638 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9239237214555212,
            "unit": "iter/sec",
            "range": "stddev: 0.001952246202816872",
            "extra": "mean: 1.0823404321999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 115.74385671546301,
            "unit": "iter/sec",
            "range": "stddev: 0.00021230694540216318",
            "extra": "mean: 8.639767399995435 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.4955181363128,
            "unit": "iter/sec",
            "range": "stddev: 0.000029578043982434174",
            "extra": "mean: 6.269768653595334 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 244.09572287001237,
            "unit": "iter/sec",
            "range": "stddev: 0.007427786682934364",
            "extra": "mean: 4.096753471311446 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 252.07654244149796,
            "unit": "iter/sec",
            "range": "stddev: 0.004111239415846683",
            "extra": "mean: 3.9670490173915347 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.0283835934654,
            "unit": "iter/sec",
            "range": "stddev: 0.00030447455461985617",
            "extra": "mean: 3.730948142853257 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2378.9879409849177,
            "unit": "iter/sec",
            "range": "stddev: 0.0000776742033743284",
            "extra": "mean: 420.34681335374614 usec\nrounds: 1318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2425.7550082211906,
            "unit": "iter/sec",
            "range": "stddev: 0.00008132135758138913",
            "extra": "mean: 412.2427848694009 usec\nrounds: 1692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1011860.848303832,
            "unit": "iter/sec",
            "range": "stddev: 1.7375431137910344e-7",
            "extra": "mean: 988.278182396607 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.03691142153902,
            "unit": "iter/sec",
            "range": "stddev: 0.00025598830423090313",
            "extra": "mean: 15.14304619149456 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.52962628688961,
            "unit": "iter/sec",
            "range": "stddev: 0.0007779285269781395",
            "extra": "mean: 9.849341877555286 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 266.4420182904297,
            "unit": "iter/sec",
            "range": "stddev: 0.0003642355847309447",
            "extra": "mean: 3.7531617813747764 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.0437435663152,
            "unit": "iter/sec",
            "range": "stddev: 0.00006443563733008027",
            "extra": "mean: 33.284800137929274 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13731.08046700095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015653642382905731",
            "extra": "mean: 72.82748086745524 usec\nrounds: 6873"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.3968677668016,
            "unit": "iter/sec",
            "range": "stddev: 0.00025446273509738894",
            "extra": "mean: 3.604943372470474 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.84505472852884,
            "unit": "iter/sec",
            "range": "stddev: 0.029280820852784915",
            "extra": "mean: 27.897851114287928 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1873190.6733968665,
            "unit": "iter/sec",
            "range": "stddev: 7.692451800682068e-7",
            "extra": "mean: 533.84848334024 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.938440531667,
            "unit": "iter/sec",
            "range": "stddev: 0.000019002982398085338",
            "extra": "mean: 1.4515084965041012 msec\nrounds: 572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.27198136009989,
            "unit": "iter/sec",
            "range": "stddev: 0.00067463549571842",
            "extra": "mean: 9.683168530611338 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.98515360677014,
            "unit": "iter/sec",
            "range": "stddev: 0.0007985262042725715",
            "extra": "mean: 10.31085648484444 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 87.34178299768675,
            "unit": "iter/sec",
            "range": "stddev: 0.015963688053695656",
            "extra": "mean: 11.449273940589064 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2311.5194435327535,
            "unit": "iter/sec",
            "range": "stddev: 0.00009073875519020403",
            "extra": "mean: 432.61587212594446 usec\nrounds: 1392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5842324.92083143,
            "unit": "iter/sec",
            "range": "stddev: 8.738240748869145e-9",
            "extra": "mean: 171.164735538168 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4688.665771252478,
            "unit": "iter/sec",
            "range": "stddev: 0.00006303886618117853",
            "extra": "mean: 213.28029097985183 usec\nrounds: 2062"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2356.5576120873175,
            "unit": "iter/sec",
            "range": "stddev: 0.00008263045069025022",
            "extra": "mean: 424.34778376339017 usec\nrounds: 1281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.68114357667985,
            "unit": "iter/sec",
            "range": "stddev: 0.0005500799909201867",
            "extra": "mean: 21.890870536579524 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1765.322807634978,
            "unit": "iter/sec",
            "range": "stddev: 0.000010538227684932916",
            "extra": "mean: 566.4686343341991 usec\nrounds: 1299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 259.62160561372474,
            "unit": "iter/sec",
            "range": "stddev: 0.00016735431356429948",
            "extra": "mean: 3.8517595545874532 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.509022361726934,
            "unit": "iter/sec",
            "range": "stddev: 0.00012582675783030044",
            "extra": "mean: 20.19833865216964 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 547.4979788845386,
            "unit": "iter/sec",
            "range": "stddev: 0.000021519379718076896",
            "extra": "mean: 1.8264907608195742 msec\nrounds: 439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.169874757351856,
            "unit": "iter/sec",
            "range": "stddev: 0.0001497667869185575",
            "extra": "mean: 17.803137434788635 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 142431.70801366048,
            "unit": "iter/sec",
            "range": "stddev: 3.571923316563643e-7",
            "extra": "mean: 7.020908573981933 usec\nrounds: 40984"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8140.811259838682,
            "unit": "iter/sec",
            "range": "stddev: 0.000011388559317592036",
            "extra": "mean: 122.83788041289337 usec\nrounds: 4064"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 106.28371460704722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000695685985269309",
            "extra": "mean: 9.408779169011979 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.12669105931948,
            "unit": "iter/sec",
            "range": "stddev: 0.0007693354210035219",
            "extra": "mean: 10.402937924732091 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12774480.99885274,
            "unit": "iter/sec",
            "range": "stddev: 3.4086159866009435e-9",
            "extra": "mean: 78.28106676814765 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 180.7439289021712,
            "unit": "iter/sec",
            "range": "stddev: 0.0037516116859715467",
            "extra": "mean: 5.532689291828199 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.94832444874974,
            "unit": "iter/sec",
            "range": "stddev: 0.020296489927698887",
            "extra": "mean: 12.055698612909989 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.5670040475233,
            "unit": "iter/sec",
            "range": "stddev: 0.0001896144803228695",
            "extra": "mean: 6.113702490445179 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.53579704335908,
            "unit": "iter/sec",
            "range": "stddev: 0.00005378122154512907",
            "extra": "mean: 5.248357607953513 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11915.59470650216,
            "unit": "iter/sec",
            "range": "stddev: 0.000011435641684757069",
            "extra": "mean: 83.92363324126114 usec\nrounds: 5415"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2426.2335884447357,
            "unit": "iter/sec",
            "range": "stddev: 0.00007901641563083413",
            "extra": "mean: 412.1614690203922 usec\nrounds: 1388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.6235375260022,
            "unit": "iter/sec",
            "range": "stddev: 0.00003775672356687043",
            "extra": "mean: 7.483711466667367 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6628140.056052427,
            "unit": "iter/sec",
            "range": "stddev: 7.0551814435999325e-9",
            "extra": "mean: 150.87188736863277 nsec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.3561924648448,
            "unit": "iter/sec",
            "range": "stddev: 0.0006506086830821358",
            "extra": "mean: 9.491611044445058 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1199.6376873566026,
            "unit": "iter/sec",
            "range": "stddev: 0.000012648387158777158",
            "extra": "mean: 833.5850153253325 usec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6319831.012864143,
            "unit": "iter/sec",
            "range": "stddev: 8.02898127752256e-9",
            "extra": "mean: 158.2320789852296 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6741441735809743,
            "unit": "iter/sec",
            "range": "stddev: 0.001293224597868567",
            "extra": "mean: 597.3201207999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.30435569978921,
            "unit": "iter/sec",
            "range": "stddev: 0.0003229107338577603",
            "extra": "mean: 7.917383327435547 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.26838315444046,
            "unit": "iter/sec",
            "range": "stddev: 0.0006431384830758316",
            "extra": "mean: 9.973233521275887 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.43614872702983,
            "unit": "iter/sec",
            "range": "stddev: 0.0008116889317952941",
            "extra": "mean: 10.478209916666259 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3619622457108842,
            "unit": "iter/sec",
            "range": "stddev: 0.00021768109265918252",
            "extra": "mean: 734.2347433999862 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}