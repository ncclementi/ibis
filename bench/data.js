window.BENCHMARK_DATA = {
  "lastUpdate": 1684445454588,
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
          "id": "d94610026c639d89b7b1ca77c87367b68cf8a0fb",
          "message": "chore(deps): relock",
          "timestamp": "2023-05-18T16:24:05-05:00",
          "tree_id": "7884609d74a85281a05baa0bf06c3c629e152e6e",
          "url": "https://github.com/ibis-project/ibis/commit/d94610026c639d89b7b1ca77c87367b68cf8a0fb"
        },
        "date": 1684445371866,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.37629380358598,
            "unit": "iter/sec",
            "range": "stddev: 0.0001031510628115008",
            "extra": "mean: 6.083602305785679 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 206.94114799559853,
            "unit": "iter/sec",
            "range": "stddev: 0.004150160333471066",
            "extra": "mean: 4.832291739394763 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.174407158456283,
            "unit": "iter/sec",
            "range": "stddev: 0.021016007061241557",
            "extra": "mean: 32.07759476923181 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9154381370301902,
            "unit": "iter/sec",
            "range": "stddev: 0.017929515787361874",
            "extra": "mean: 1.0923731048000036 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.15864431316758,
            "unit": "iter/sec",
            "range": "stddev: 0.018792209245416067",
            "extra": "mean: 12.632859098038592 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2744412.904190903,
            "unit": "iter/sec",
            "range": "stddev: 2.034950801204702e-8",
            "extra": "mean: 364.3766571978206 nsec\nrounds: 105253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.6815193559768,
            "unit": "iter/sec",
            "range": "stddev: 0.0003047485144614877",
            "extra": "mean: 3.5883254918049996 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 82.99385618614268,
            "unit": "iter/sec",
            "range": "stddev: 0.019920340450472404",
            "extra": "mean: 12.049084666666785 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.33117257181213,
            "unit": "iter/sec",
            "range": "stddev: 0.0007778327261241984",
            "extra": "mean: 10.60094953488173 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2198.256683708509,
            "unit": "iter/sec",
            "range": "stddev: 0.00008798557356073151",
            "extra": "mean: 454.9059295081852 usec\nrounds: 1220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.889576385515443,
            "unit": "iter/sec",
            "range": "stddev: 0.00017521503910345444",
            "extra": "mean: 52.93924964705939 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.13350418866077,
            "unit": "iter/sec",
            "range": "stddev: 0.00008106150344181348",
            "extra": "mean: 9.603057227271254 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147846.67877697255,
            "unit": "iter/sec",
            "range": "stddev: 4.301615031440666e-7",
            "extra": "mean: 6.7637637062412805 usec\nrounds: 34601"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 141.3497841779046,
            "unit": "iter/sec",
            "range": "stddev: 0.004539101630366334",
            "extra": "mean: 7.07464822685111 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 70.41017452586934,
            "unit": "iter/sec",
            "range": "stddev: 0.019344100819702736",
            "extra": "mean: 14.202492846152381 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.69083242199015,
            "unit": "iter/sec",
            "range": "stddev: 0.0003986550383780139",
            "extra": "mean: 10.45032188235198 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.514126432819555,
            "unit": "iter/sec",
            "range": "stddev: 0.00023829524922696255",
            "extra": "mean: 117.45186166666282 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7764284600601151,
            "unit": "iter/sec",
            "range": "stddev: 0.005567060948859177",
            "extra": "mean: 1.287948666799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2107.6735344245253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000931977657962659",
            "extra": "mean: 474.4567807428668 usec\nrounds: 1049"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 49.77357868695934,
            "unit": "iter/sec",
            "range": "stddev: 0.0002606355202743799",
            "extra": "mean: 20.090980523809503 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.45093740556808,
            "unit": "iter/sec",
            "range": "stddev: 0.00006981301049402036",
            "extra": "mean: 5.699599071895664 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2101.2326261721273,
            "unit": "iter/sec",
            "range": "stddev: 0.00008897261424636238",
            "extra": "mean: 475.911133086548 usec\nrounds: 1082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.08647996815084,
            "unit": "iter/sec",
            "range": "stddev: 0.00014272513219118642",
            "extra": "mean: 7.9310644587159365 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.26282684475157,
            "unit": "iter/sec",
            "range": "stddev: 0.0008738048920146424",
            "extra": "mean: 9.684026968421366 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 423.8420799297483,
            "unit": "iter/sec",
            "range": "stddev: 0.00014399317963952139",
            "extra": "mean: 2.359369320209427 msec\nrounds: 381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 263.3808467135065,
            "unit": "iter/sec",
            "range": "stddev: 0.0003444023930648473",
            "extra": "mean: 3.796783298702634 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.3723065286263,
            "unit": "iter/sec",
            "range": "stddev: 0.0009010237392796369",
            "extra": "mean: 10.269860452633027 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12527.375549871644,
            "unit": "iter/sec",
            "range": "stddev: 0.000013467180567680237",
            "extra": "mean: 79.82517934574462 usec\nrounds: 5258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1157.5607964474214,
            "unit": "iter/sec",
            "range": "stddev: 0.00001085614738834368",
            "extra": "mean: 863.8855108682163 usec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 82.37752148445789,
            "unit": "iter/sec",
            "range": "stddev: 0.019317519489115417",
            "extra": "mean: 12.139233882979465 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 244.64754938013985,
            "unit": "iter/sec",
            "range": "stddev: 0.0005331214372670974",
            "extra": "mean: 4.087512842592073 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1041400.7340615686,
            "unit": "iter/sec",
            "range": "stddev: 1.3441312862531976e-7",
            "extra": "mean: 960.245146073499 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 315.4658508231749,
            "unit": "iter/sec",
            "range": "stddev: 0.0001554424761509031",
            "extra": "mean: 3.16991521393078 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 77.4851610275492,
            "unit": "iter/sec",
            "range": "stddev: 0.020146409882391077",
            "extra": "mean: 12.905696868132706 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1786.6325839412875,
            "unit": "iter/sec",
            "range": "stddev: 0.000008529189316887338",
            "extra": "mean: 559.7121696918867 usec\nrounds: 1267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2178.8769891748907,
            "unit": "iter/sec",
            "range": "stddev: 0.00009226978647000557",
            "extra": "mean: 458.95202205916434 usec\nrounds: 408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8526.267901264326,
            "unit": "iter/sec",
            "range": "stddev: 0.000016393688813760815",
            "extra": "mean: 117.28460934844823 usec\nrounds: 4129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 97.2349212267274,
            "unit": "iter/sec",
            "range": "stddev: 0.0010205998284183216",
            "extra": "mean: 10.284370958333492 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.70383000372412,
            "unit": "iter/sec",
            "range": "stddev: 0.0004454691446334368",
            "extra": "mean: 20.962677418604173 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.939737933035026,
            "unit": "iter/sec",
            "range": "stddev: 0.00042523916479182423",
            "extra": "mean: 47.75608955556107 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.61250236917304,
            "unit": "iter/sec",
            "range": "stddev: 0.0008448894015264184",
            "extra": "mean: 10.14070199999921 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.47095386041581,
            "unit": "iter/sec",
            "range": "stddev: 0.0014515317955074844",
            "extra": "mean: 19.813376279070017 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 75.96214334418684,
            "unit": "iter/sec",
            "range": "stddev: 0.02616116290924143",
            "extra": "mean: 13.164452133333953 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 272.20565948803306,
            "unit": "iter/sec",
            "range": "stddev: 0.00038246072460273377",
            "extra": "mean: 3.6736929051394793 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 268.6111965530554,
            "unit": "iter/sec",
            "range": "stddev: 0.00036076832095183843",
            "extra": "mean: 3.722853004016468 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14169.363737250847,
            "unit": "iter/sec",
            "range": "stddev: 0.000001471191332977852",
            "extra": "mean: 70.57479916130806 usec\nrounds: 5721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1972054.3796681073,
            "unit": "iter/sec",
            "range": "stddev: 6.229956947356723e-8",
            "extra": "mean: 507.0854081459447 nsec\nrounds: 32573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4512688.1196899535,
            "unit": "iter/sec",
            "range": "stddev: 1.2598134536520899e-8",
            "extra": "mean: 221.59741011965218 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 676.3111080709998,
            "unit": "iter/sec",
            "range": "stddev: 0.00013330956660693134",
            "extra": "mean: 1.478609456603837 msec\nrounds: 530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 96.83963968407733,
            "unit": "iter/sec",
            "range": "stddev: 0.001144387392537155",
            "extra": "mean: 10.326349863158601 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2116.15746317709,
            "unit": "iter/sec",
            "range": "stddev: 0.00010158614271433499",
            "extra": "mean: 472.55462667633975 usec\nrounds: 1342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11172018.554886298,
            "unit": "iter/sec",
            "range": "stddev: 3.446787701882712e-9",
            "extra": "mean: 89.5093393452952 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 101.8810034973019,
            "unit": "iter/sec",
            "range": "stddev: 0.0009963358537783153",
            "extra": "mean: 9.815372500001757 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2109.012713538721,
            "unit": "iter/sec",
            "range": "stddev: 0.00009840928148936885",
            "extra": "mean: 474.1555105763662 usec\nrounds: 1371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 275.7676496782257,
            "unit": "iter/sec",
            "range": "stddev: 0.0003450473057209942",
            "extra": "mean: 3.6262411532564864 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2171.3623050396386,
            "unit": "iter/sec",
            "range": "stddev: 0.00009871915994731093",
            "extra": "mean: 460.54037029151834 usec\nrounds: 1885"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4530.729907408921,
            "unit": "iter/sec",
            "range": "stddev: 0.00002723497673105284",
            "extra": "mean: 220.71498863014108 usec\nrounds: 1847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.90575864672405,
            "unit": "iter/sec",
            "range": "stddev: 0.001000140180670686",
            "extra": "mean: 10.213903797102748 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.31059800601594,
            "unit": "iter/sec",
            "range": "stddev: 0.00019711497014017555",
            "extra": "mean: 6.397518867924188 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.478358600942812,
            "unit": "iter/sec",
            "range": "stddev: 0.0021878879024702217",
            "extra": "mean: 403.4928599999944 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 228.46253693077287,
            "unit": "iter/sec",
            "range": "stddev: 0.0003755688935723879",
            "extra": "mean: 4.377085247473256 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.10109385912506,
            "unit": "iter/sec",
            "range": "stddev: 0.0004140090001672296",
            "extra": "mean: 3.7864288458169466 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 111.08538066432743,
            "unit": "iter/sec",
            "range": "stddev: 0.000027104532764050348",
            "extra": "mean: 9.002084648940015 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5906576537738815,
            "unit": "iter/sec",
            "range": "stddev: 0.002752788577219683",
            "extra": "mean: 628.6707876000037 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7137264.330102188,
            "unit": "iter/sec",
            "range": "stddev: 4.926499826059605e-9",
            "extra": "mean: 140.10970502839675 nsec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.64056873790076,
            "unit": "iter/sec",
            "range": "stddev: 0.000979180392670758",
            "extra": "mean: 10.347621222222974 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 45.335826723206324,
            "unit": "iter/sec",
            "range": "stddev: 0.0006905070852125733",
            "extra": "mean: 22.057610333333216 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.7872397466079,
            "unit": "iter/sec",
            "range": "stddev: 0.042567312434922344",
            "extra": "mean: 29.596972333331724 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 268.0335627111824,
            "unit": "iter/sec",
            "range": "stddev: 0.0003864351547839893",
            "extra": "mean: 3.7308760510620926 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 92.32568526479665,
            "unit": "iter/sec",
            "range": "stddev: 0.00117851749889857",
            "extra": "mean: 10.83122207143038 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2094.325838599673,
            "unit": "iter/sec",
            "range": "stddev: 0.00011232654000024157",
            "extra": "mean: 477.4806200493755 usec\nrounds: 1237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 739.234118339962,
            "unit": "iter/sec",
            "range": "stddev: 0.000018868328964111742",
            "extra": "mean: 1.3527514155402063 msec\nrounds: 592"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2723806.648264009,
            "unit": "iter/sec",
            "range": "stddev: 1.6567488921627865e-8",
            "extra": "mean: 367.1332547178605 nsec\nrounds: 126567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6092088.284499285,
            "unit": "iter/sec",
            "range": "stddev: 1.0818540796220963e-8",
            "extra": "mean: 164.1473257278514 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5601341.017295444,
            "unit": "iter/sec",
            "range": "stddev: 9.8350980146662e-9",
            "extra": "mean: 178.52867677794092 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.344086753526789,
            "unit": "iter/sec",
            "range": "stddev: 0.0008711691577527333",
            "extra": "mean: 743.999594800016 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 528.896007112241,
            "unit": "iter/sec",
            "range": "stddev: 0.00005901940999805273",
            "extra": "mean: 1.8907308555040432 msec\nrounds: 436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6183478.631537764,
            "unit": "iter/sec",
            "range": "stddev: 4.802669322971369e-9",
            "extra": "mean: 161.7212672005553 nsec\nrounds: 62500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 24.076634579573938,
            "unit": "iter/sec",
            "range": "stddev: 0.04275430670232186",
            "extra": "mean: 41.53404400000227 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 93.19222385316016,
            "unit": "iter/sec",
            "range": "stddev: 0.0009705394962810957",
            "extra": "mean: 10.730509034484102 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.04138980528228,
            "unit": "iter/sec",
            "range": "stddev: 0.001097108999963594",
            "extra": "mean: 10.412177520831753 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10078.056439142792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019471220253796437",
            "extra": "mean: 99.22548122632432 usec\nrounds: 5087"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2102.7877747856605,
            "unit": "iter/sec",
            "range": "stddev: 0.00012049820678430574",
            "extra": "mean: 475.5591657850166 usec\nrounds: 1134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.49130936462794,
            "unit": "iter/sec",
            "range": "stddev: 0.00005966223956488716",
            "extra": "mean: 5.089283608692866 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 29.191495304260254,
            "unit": "iter/sec",
            "range": "stddev: 0.0010279745142490377",
            "extra": "mean: 34.25655279310267 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1651039087110889,
            "unit": "iter/sec",
            "range": "stddev: 0.11668985455250007",
            "extra": "mean: 6.05679179739999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.88750537888458,
            "unit": "iter/sec",
            "range": "stddev: 0.000053484855700616015",
            "extra": "mean: 5.238687561111671 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.0827282861891,
            "unit": "iter/sec",
            "range": "stddev: 0.0010159933073534695",
            "extra": "mean: 10.195474957447821 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.899831075198174,
            "unit": "iter/sec",
            "range": "stddev: 0.023163549775752645",
            "extra": "mean: 1.111319699399985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.13803029731281,
            "unit": "iter/sec",
            "range": "stddev: 0.00038351923774520105",
            "extra": "mean: 11.094096428572746 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1764522.1085527614,
            "unit": "iter/sec",
            "range": "stddev: 1.2674639425385388e-7",
            "extra": "mean: 566.7256846218761 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.24969006136456,
            "unit": "iter/sec",
            "range": "stddev: 0.0010356061066252827",
            "extra": "mean: 10.178149156251001 msec\nrounds: 96"
          }
        ]
      }
    ]
  }
}