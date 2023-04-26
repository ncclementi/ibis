window.BENCHMARK_DATA = {
  "lastUpdate": 1682512890883,
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
          "id": "6e2b93445c7ad894547a9d1decf52b8836d3a24b",
          "message": "test(bigquery): fix snapshot",
          "timestamp": "2023-04-26T08:35:12-04:00",
          "tree_id": "eaca8060525b8c830d420cae37a4e37c919e604a",
          "url": "https://github.com/ibis-project/ibis/commit/6e2b93445c7ad894547a9d1decf52b8836d3a24b"
        },
        "date": 1682512793372,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.035739241181638,
            "unit": "iter/sec",
            "range": "stddev: 0.0025893514845178665",
            "extra": "mean: 62.36070473332991 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1633856.0666324974,
            "unit": "iter/sec",
            "range": "stddev: 2.2428875792982626e-7",
            "extra": "mean: 612.0490173048576 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 47.5229728120112,
            "unit": "iter/sec",
            "range": "stddev: 0.0009598456224725497",
            "extra": "mean: 21.04245464516174 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1470855.748598113,
            "unit": "iter/sec",
            "range": "stddev: 1.1204846145991552e-7",
            "extra": "mean: 679.876324345953 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4594931.055815833,
            "unit": "iter/sec",
            "range": "stddev: 2.382391365152147e-8",
            "extra": "mean: 217.6311217409838 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 57.31801882484871,
            "unit": "iter/sec",
            "range": "stddev: 0.02327983302468189",
            "extra": "mean: 17.446520666664714 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.8628977439859,
            "unit": "iter/sec",
            "range": "stddev: 0.0008338723461255193",
            "extra": "mean: 32.40136452173759 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6572483477072641,
            "unit": "iter/sec",
            "range": "stddev: 0.0034410937762209717",
            "extra": "mean: 1.521494886199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 243.19375522485686,
            "unit": "iter/sec",
            "range": "stddev: 0.0003157776404993687",
            "extra": "mean: 4.11194768992074 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 231.5641009154823,
            "unit": "iter/sec",
            "range": "stddev: 0.0004485128789356534",
            "extra": "mean: 4.31845867319903 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3747885.2124898806,
            "unit": "iter/sec",
            "range": "stddev: 2.581463620922584e-8",
            "extra": "mean: 266.81713641277463 nsec\nrounds: 128189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 149.8073612161428,
            "unit": "iter/sec",
            "range": "stddev: 0.00012129971238782392",
            "extra": "mean: 6.6752393999998105 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1449407948108232,
            "unit": "iter/sec",
            "range": "stddev: 0.08170620471193665",
            "extra": "mean: 6.899368816799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 88.27066710395077,
            "unit": "iter/sec",
            "range": "stddev: 0.0009724053154809112",
            "extra": "mean: 11.32879169047588 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 83.81090427466755,
            "unit": "iter/sec",
            "range": "stddev: 0.0011389983470120135",
            "extra": "mean: 11.93162165060015 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1670230.0729948294,
            "unit": "iter/sec",
            "range": "stddev: 2.0285739023386105e-7",
            "extra": "mean: 598.7199106090432 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12089.256122172288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027953088031599884",
            "extra": "mean: 82.71807544601118 usec\nrounds: 4427"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 79.99755063497332,
            "unit": "iter/sec",
            "range": "stddev: 0.0011674371337995928",
            "extra": "mean: 12.500382725003334 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3722254953840776,
            "unit": "iter/sec",
            "range": "stddev: 0.002104684966711628",
            "extra": "mean: 728.7432009999975 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1005.1297687713834,
            "unit": "iter/sec",
            "range": "stddev: 0.000021404217170879143",
            "extra": "mean: 994.8964114577426 usec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.3524365610801,
            "unit": "iter/sec",
            "range": "stddev: 0.0005403836541232666",
            "extra": "mean: 23.066754243237988 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.85117240467302,
            "unit": "iter/sec",
            "range": "stddev: 0.0014766258913971103",
            "extra": "mean: 27.893090600006566 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7092790175594869,
            "unit": "iter/sec",
            "range": "stddev: 0.0159010502653623",
            "extra": "mean: 1.4098823949999768 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9018.88745690565,
            "unit": "iter/sec",
            "range": "stddev: 0.000004144002206022563",
            "extra": "mean: 110.87842095582558 usec\nrounds: 4371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 230.38950916379667,
            "unit": "iter/sec",
            "range": "stddev: 0.00035743647206775857",
            "extra": "mean: 4.340475413266516 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1892.4634692491688,
            "unit": "iter/sec",
            "range": "stddev: 0.0001084959082861634",
            "extra": "mean: 528.4117850881148 usec\nrounds: 1596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.57883938347393,
            "unit": "iter/sec",
            "range": "stddev: 0.0009038137524964144",
            "extra": "mean: 11.418283309526243 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3838.493391569328,
            "unit": "iter/sec",
            "range": "stddev: 0.00005307777339204999",
            "extra": "mean: 260.51888019303334 usec\nrounds: 1878"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1702.2047202765648,
            "unit": "iter/sec",
            "range": "stddev: 0.00015223873156018354",
            "extra": "mean: 587.4734032211622 usec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.60444483137839,
            "unit": "iter/sec",
            "range": "stddev: 0.00040039507426919643",
            "extra": "mean: 12.721926885244109 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.592385710928944,
            "unit": "iter/sec",
            "range": "stddev: 0.0005710557908638282",
            "extra": "mean: 25.911847157891845 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 223.53357742054706,
            "unit": "iter/sec",
            "range": "stddev: 0.00022072874356736068",
            "extra": "mean: 4.473600841267083 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145597.0792821555,
            "unit": "iter/sec",
            "range": "stddev: 9.25727185141211e-7",
            "extra": "mean: 6.868269644764508 usec\nrounds: 33444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.64855390513199,
            "unit": "iter/sec",
            "range": "stddev: 0.0008848734321211238",
            "extra": "mean: 11.15466961194066 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.192501473080064,
            "unit": "iter/sec",
            "range": "stddev: 0.0007198430482525051",
            "extra": "mean: 27.630032722214537 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.15270580404895,
            "unit": "iter/sec",
            "range": "stddev: 0.00009107890863653867",
            "extra": "mean: 10.509422633333543 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.30249018922004,
            "unit": "iter/sec",
            "range": "stddev: 0.00010611906362058991",
            "extra": "mean: 10.492905253729804 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.78602201440373,
            "unit": "iter/sec",
            "range": "stddev: 0.00008604868917719138",
            "extra": "mean: 5.855280123075072 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 83.82003386102525,
            "unit": "iter/sec",
            "range": "stddev: 0.0010074207169053105",
            "extra": "mean: 11.93032207142762 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10707.622025292952,
            "unit": "iter/sec",
            "range": "stddev: 0.000014771257727209359",
            "extra": "mean: 93.3914175937342 usec\nrounds: 3149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1837.8665283087287,
            "unit": "iter/sec",
            "range": "stddev: 0.00009911642096546944",
            "extra": "mean: 544.1091529754536 usec\nrounds: 1059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1003359563394186,
            "unit": "iter/sec",
            "range": "stddev: 0.0018998523750328388",
            "extra": "mean: 476.1143078000032 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 268.96156617315677,
            "unit": "iter/sec",
            "range": "stddev: 0.00009036370917811169",
            "extra": "mean: 3.71800333493077 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7386.995369329015,
            "unit": "iter/sec",
            "range": "stddev: 0.000014462968310770896",
            "extra": "mean: 135.37303734506514 usec\nrounds: 2892"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.59966461839937,
            "unit": "iter/sec",
            "range": "stddev: 0.0009505009596744272",
            "extra": "mean: 12.886653633331472 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4977134.044113437,
            "unit": "iter/sec",
            "range": "stddev: 2.1031555436424554e-8",
            "extra": "mean: 200.91884026793403 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 451.1960966388129,
            "unit": "iter/sec",
            "range": "stddev: 0.0004203358082517855",
            "extra": "mean: 2.216331230366362 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.3266574378182,
            "unit": "iter/sec",
            "range": "stddev: 0.0009413434553413117",
            "extra": "mean: 11.858646249999794 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1861.3978403503609,
            "unit": "iter/sec",
            "range": "stddev: 0.00012595316451119448",
            "extra": "mean: 537.2306652143614 usec\nrounds: 1377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 135.74670051812197,
            "unit": "iter/sec",
            "range": "stddev: 0.000116645224255582",
            "extra": "mean: 7.366661555552886 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1503.846434591425,
            "unit": "iter/sec",
            "range": "stddev: 0.004992242803824214",
            "extra": "mean: 664.9615126904141 usec\nrounds: 1182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.54577125323087,
            "unit": "iter/sec",
            "range": "stddev: 0.0010486654434409082",
            "extra": "mean: 11.827912681815954 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.89336866836113,
            "unit": "iter/sec",
            "range": "stddev: 0.00045993835008357076",
            "extra": "mean: 23.31362704878008 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 163.75836538727995,
            "unit": "iter/sec",
            "range": "stddev: 0.00008644080224843014",
            "extra": "mean: 6.106558267329137 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 237.21085937063822,
            "unit": "iter/sec",
            "range": "stddev: 0.0003097140470354436",
            "extra": "mean: 4.215658602869929 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1524.1830392706295,
            "unit": "iter/sec",
            "range": "stddev: 0.000010937799649487057",
            "extra": "mean: 656.0891797343003 usec\nrounds: 1135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 574.0106764549736,
            "unit": "iter/sec",
            "range": "stddev: 0.00005134382577975626",
            "extra": "mean: 1.742127875000321 msec\nrounds: 480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5971069.875076987,
            "unit": "iter/sec",
            "range": "stddev: 1.3302589998932848e-8",
            "extra": "mean: 167.47417479964497 nsec\nrounds: 50000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1868.6637910290722,
            "unit": "iter/sec",
            "range": "stddev: 0.00009751550923590064",
            "extra": "mean: 535.1417439566807 usec\nrounds: 1117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1884.781868864561,
            "unit": "iter/sec",
            "range": "stddev: 0.00010106224624356054",
            "extra": "mean: 530.5653755054554 usec\nrounds: 988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5060015.854528276,
            "unit": "iter/sec",
            "range": "stddev: 2.694283154301773e-8",
            "extra": "mean: 197.62783926937544 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 84.1052480914474,
            "unit": "iter/sec",
            "range": "stddev: 0.0010512390652679057",
            "extra": "mean: 11.889864457836245 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.106982887551818,
            "unit": "iter/sec",
            "range": "stddev: 0.08218648100483693",
            "extra": "mean: 903.3563312000069 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 365.93708037928405,
            "unit": "iter/sec",
            "range": "stddev: 0.00003952955923787252",
            "extra": "mean: 2.7327102215591994 msec\nrounds: 334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 109.5622803838016,
            "unit": "iter/sec",
            "range": "stddev: 0.00007428947673798811",
            "extra": "mean: 9.127228791669495 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 238.6795818876658,
            "unit": "iter/sec",
            "range": "stddev: 0.0003638095285373472",
            "extra": "mean: 4.189717411482012 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 239.07859863068546,
            "unit": "iter/sec",
            "range": "stddev: 0.00036823808583405287",
            "extra": "mean: 4.182724868421791 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 851333.6926729012,
            "unit": "iter/sec",
            "range": "stddev: 2.3288941211498676e-7",
            "extra": "mean: 1.17462753865683 usec\nrounds: 84739"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 81.97870277657083,
            "unit": "iter/sec",
            "range": "stddev: 0.0002875292723496051",
            "extra": "mean: 12.198290118415924 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 177.3427910335014,
            "unit": "iter/sec",
            "range": "stddev: 0.004526482568830581",
            "extra": "mean: 5.638797010988128 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.88703823271393,
            "unit": "iter/sec",
            "range": "stddev: 0.00013164810294848063",
            "extra": "mean: 38.62937084615116 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1887.3377398334849,
            "unit": "iter/sec",
            "range": "stddev: 0.00010061704189147936",
            "extra": "mean: 529.8468731347615 usec\nrounds: 938"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 83.05611386790724,
            "unit": "iter/sec",
            "range": "stddev: 0.0011624388928663497",
            "extra": "mean: 12.04005284415791 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.415486882478324,
            "unit": "iter/sec",
            "range": "stddev: 0.0002882095157419772",
            "extra": "mean: 134.8529119999995 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 67.00006549468267,
            "unit": "iter/sec",
            "range": "stddev: 0.020933934359022095",
            "extra": "mean: 14.925358544304155 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 635.4813803967733,
            "unit": "iter/sec",
            "range": "stddev: 0.00015014751794311583",
            "extra": "mean: 1.5736102281637796 msec\nrounds: 561"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 140.29071557517784,
            "unit": "iter/sec",
            "range": "stddev: 0.00010904659692200365",
            "extra": "mean: 7.1280554518529655 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 88.57929097141354,
            "unit": "iter/sec",
            "range": "stddev: 0.00010496945878123194",
            "extra": "mean: 11.289320438596892 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 106.81068423781208,
            "unit": "iter/sec",
            "range": "stddev: 0.00010292010027380242",
            "extra": "mean: 9.36235927272517 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.26763108162597,
            "unit": "iter/sec",
            "range": "stddev: 0.0008830456252094688",
            "extra": "mean: 49.33975736841639 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1627772.5764715576,
            "unit": "iter/sec",
            "range": "stddev: 1.3694005486604454e-7",
            "extra": "mean: 614.3364340045897 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 84.79581346325183,
            "unit": "iter/sec",
            "range": "stddev: 0.001003726388347542",
            "extra": "mean: 11.793035046870237 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7027064696955829,
            "unit": "iter/sec",
            "range": "stddev: 0.006870418089835005",
            "extra": "mean: 1.4230692943999883 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 128.04990532763,
            "unit": "iter/sec",
            "range": "stddev: 0.004382096417229524",
            "extra": "mean: 7.8094552076503945 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 75.66949199132546,
            "unit": "iter/sec",
            "range": "stddev: 0.0016535720336884711",
            "extra": "mean: 13.215365581080382 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 232.46731855623798,
            "unit": "iter/sec",
            "range": "stddev: 0.0004350809269650103",
            "extra": "mean: 4.3016799359609 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.53163006420093,
            "unit": "iter/sec",
            "range": "stddev: 0.026726216539652983",
            "extra": "mean: 14.807875939753279 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9300879.021484694,
            "unit": "iter/sec",
            "range": "stddev: 8.890983637283425e-9",
            "extra": "mean: 107.51671940792271 nsec\nrounds: 92593"
          }
        ]
      }
    ]
  }
}