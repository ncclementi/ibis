window.BENCHMARK_DATA = {
  "lastUpdate": 1681726095093,
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
          "id": "6fcac4412683d0fc883066518d732a1863f9e86f",
          "message": "feat(sqlite): add arithmetic mode aggregation",
          "timestamp": "2023-04-17T06:02:49-04:00",
          "tree_id": "9024bcd66c004b0543e857cc15cbf84c107ae167",
          "url": "https://github.com/ibis-project/ibis/commit/6fcac4412683d0fc883066518d732a1863f9e86f"
        },
        "date": 1681726015512,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.23061484261626,
            "unit": "iter/sec",
            "range": "stddev: 0.009249548679258332",
            "extra": "mean: 12.310629458332834 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 288.77886113469,
            "unit": "iter/sec",
            "range": "stddev: 0.00005936232960511659",
            "extra": "mean: 3.462857343749922 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.16746007664709,
            "unit": "iter/sec",
            "range": "stddev: 0.00007904904395843139",
            "extra": "mean: 13.128966083334051 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2148.9782841662864,
            "unit": "iter/sec",
            "range": "stddev: 0.00008229964126962228",
            "extra": "mean: 465.33741516515977 usec\nrounds: 1332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.16688999501454,
            "unit": "iter/sec",
            "range": "stddev: 0.0006964193365104854",
            "extra": "mean: 9.884656927274126 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7217458209658236,
            "unit": "iter/sec",
            "range": "stddev: 0.0025566917865722373",
            "extra": "mean: 1.385529324800001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.825096214449079,
            "unit": "iter/sec",
            "range": "stddev: 0.0002268725091414439",
            "extra": "mean: 171.67098416666704 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 90.33657437012089,
            "unit": "iter/sec",
            "range": "stddev: 0.010913148759856921",
            "extra": "mean: 11.069713534884196 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2197.862030465499,
            "unit": "iter/sec",
            "range": "stddev: 0.00010182843227134264",
            "extra": "mean: 454.9876134800889 usec\nrounds: 1454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.02439175133601,
            "unit": "iter/sec",
            "range": "stddev: 0.00011806077030904835",
            "extra": "mean: 8.262797156251445 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.53818822654569,
            "unit": "iter/sec",
            "range": "stddev: 0.000048091245356912526",
            "extra": "mean: 7.432833853211428 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.66939803593856,
            "unit": "iter/sec",
            "range": "stddev: 0.01204784944711796",
            "extra": "mean: 11.672779579710566 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.09340469725748,
            "unit": "iter/sec",
            "range": "stddev: 0.000020056456736333344",
            "extra": "mean: 5.1257499019599475 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 299.7426973422314,
            "unit": "iter/sec",
            "range": "stddev: 0.000043190404148208557",
            "extra": "mean: 3.3361947058821904 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.33017506763383,
            "unit": "iter/sec",
            "range": "stddev: 0.0006453439433353828",
            "extra": "mean: 88.25988954545235 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1730003853968683,
            "unit": "iter/sec",
            "range": "stddev: 0.06064280544889211",
            "extra": "mean: 5.780333943800002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1950754.217171805,
            "unit": "iter/sec",
            "range": "stddev: 1.675048720274334e-7",
            "extra": "mean: 512.6222417961991 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8586315507592387,
            "unit": "iter/sec",
            "range": "stddev: 0.0024783493127405886",
            "extra": "mean: 1.164643902399996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1793.420548778973,
            "unit": "iter/sec",
            "range": "stddev: 0.000008390299896496441",
            "extra": "mean: 557.593700306845 usec\nrounds: 327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.5573156035824,
            "unit": "iter/sec",
            "range": "stddev: 0.00021722006984152645",
            "extra": "mean: 9.04508213265262 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14046.842069783706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018022150743131865",
            "extra": "mean: 71.19037823818846 usec\nrounds: 6562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.825972420480429,
            "unit": "iter/sec",
            "range": "stddev: 0.0017020084895141665",
            "extra": "mean: 547.6533975999985 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 783299.4834351538,
            "unit": "iter/sec",
            "range": "stddev: 3.5693077338025104e-7",
            "extra": "mean: 1.2766509121319827 usec\nrounds: 25707"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 259.5602182810171,
            "unit": "iter/sec",
            "range": "stddev: 0.0003357268292370236",
            "extra": "mean: 3.8526705156232133 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 279.1146707554439,
            "unit": "iter/sec",
            "range": "stddev: 0.00025934033224282315",
            "extra": "mean: 3.582756855071173 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 757.8700972960708,
            "unit": "iter/sec",
            "range": "stddev: 0.00003402913086566492",
            "extra": "mean: 1.3194873416536692 msec\nrounds: 641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.57310981587219,
            "unit": "iter/sec",
            "range": "stddev: 0.0006773073436957037",
            "extra": "mean: 10.248725308510464 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.05583423876291,
            "unit": "iter/sec",
            "range": "stddev: 0.014942140402386155",
            "extra": "mean: 11.756983032967128 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.538781057376455,
            "unit": "iter/sec",
            "range": "stddev: 0.0026140761584454815",
            "extra": "mean: 393.88981459999854 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.08591005758467,
            "unit": "iter/sec",
            "range": "stddev: 0.0008085779452040466",
            "extra": "mean: 10.300155804347602 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9347700222611548,
            "unit": "iter/sec",
            "range": "stddev: 0.003495346191651214",
            "extra": "mean: 1.0697818460000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1902785.1985659525,
            "unit": "iter/sec",
            "range": "stddev: 9.362733546478455e-8",
            "extra": "mean: 525.5453956409042 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 99.80065210265765,
            "unit": "iter/sec",
            "range": "stddev: 0.0006206047869918159",
            "extra": "mean: 10.019974608696673 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 692.1676780542363,
            "unit": "iter/sec",
            "range": "stddev: 0.00003850011552574392",
            "extra": "mean: 1.4447366320414095 msec\nrounds: 568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11430748.300157044,
            "unit": "iter/sec",
            "range": "stddev: 3.1143343182173825e-9",
            "extra": "mean: 87.48333650098947 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.34890760530773,
            "unit": "iter/sec",
            "range": "stddev: 0.00044211478709830983",
            "extra": "mean: 22.548469714287137 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.78478840526769,
            "unit": "iter/sec",
            "range": "stddev: 0.00021506487629810493",
            "extra": "mean: 10.44007108695565 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8387.656533710888,
            "unit": "iter/sec",
            "range": "stddev: 0.000020376172613976223",
            "extra": "mean: 119.2228122337739 usec\nrounds: 3989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.37158030158929,
            "unit": "iter/sec",
            "range": "stddev: 0.0007991861715561479",
            "extra": "mean: 9.96297953061287 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 167.89817189947036,
            "unit": "iter/sec",
            "range": "stddev: 0.003955095511183072",
            "extra": "mean: 5.955990995534804 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 282.4533927158776,
            "unit": "iter/sec",
            "range": "stddev: 0.0002367557554673353",
            "extra": "mean: 3.5404071106552752 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.43389745222122,
            "unit": "iter/sec",
            "range": "stddev: 0.0006991278189621263",
            "extra": "mean: 10.369797617020055 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2162.74994032446,
            "unit": "iter/sec",
            "range": "stddev: 0.00009313937935921734",
            "extra": "mean: 462.37430474739864 usec\nrounds: 1306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.60301862947213,
            "unit": "iter/sec",
            "range": "stddev: 0.000047330005120451266",
            "extra": "mean: 6.188003222222151 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.61768907386279,
            "unit": "iter/sec",
            "range": "stddev: 0.00006407370055214121",
            "extra": "mean: 8.95915341284527 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9413774552508312,
            "unit": "iter/sec",
            "range": "stddev: 0.004332179765084734",
            "extra": "mean: 1.062273155600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.40295695840321,
            "unit": "iter/sec",
            "range": "stddev: 0.0008749899946020234",
            "extra": "mean: 24.152864275000496 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4598.250171561132,
            "unit": "iter/sec",
            "range": "stddev: 0.0000234265297799701",
            "extra": "mean: 217.47403092261382 usec\nrounds: 2005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5987777.892269449,
            "unit": "iter/sec",
            "range": "stddev: 2.5593097804236473e-8",
            "extra": "mean: 167.00686264449706 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2153.593674220709,
            "unit": "iter/sec",
            "range": "stddev: 0.00008374440647768094",
            "extra": "mean: 464.3401454835049 usec\nrounds: 1251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.91701668296903,
            "unit": "iter/sec",
            "range": "stddev: 0.000767051147255362",
            "extra": "mean: 9.909131609998951 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.0936334021498,
            "unit": "iter/sec",
            "range": "stddev: 0.0006699076076610537",
            "extra": "mean: 9.794930072289334 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 545.5660608646156,
            "unit": "iter/sec",
            "range": "stddev: 0.00002215610864849939",
            "extra": "mean: 1.8329585942629851 msec\nrounds: 488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12080.575362788104,
            "unit": "iter/sec",
            "range": "stddev: 0.000012901525250481824",
            "extra": "mean: 82.77751431279574 usec\nrounds: 6358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 247.531691095625,
            "unit": "iter/sec",
            "range": "stddev: 0.0036122911468650662",
            "extra": "mean: 4.039886753788168 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 285.107341781815,
            "unit": "iter/sec",
            "range": "stddev: 0.0002670770908117799",
            "extra": "mean: 3.5074508911288333 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2214.105780422578,
            "unit": "iter/sec",
            "range": "stddev: 0.00008734706339936391",
            "extra": "mean: 451.64960447785955 usec\nrounds: 1876"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 284.35650687874767,
            "unit": "iter/sec",
            "range": "stddev: 0.0002229208189424995",
            "extra": "mean: 3.5167122109374116 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 82.57238388271071,
            "unit": "iter/sec",
            "range": "stddev: 0.022197414471644163",
            "extra": "mean: 12.11058653000066 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.945817213370887,
            "unit": "iter/sec",
            "range": "stddev: 0.00009280577123087542",
            "extra": "mean: 62.71237068749791 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 102.80784849653541,
            "unit": "iter/sec",
            "range": "stddev: 0.0006532781331517809",
            "extra": "mean: 9.726883838384184 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1172.5979009323664,
            "unit": "iter/sec",
            "range": "stddev: 0.000008468877461225196",
            "extra": "mean: 852.8072574621455 usec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7137454.44513476,
            "unit": "iter/sec",
            "range": "stddev: 4.667889101774171e-9",
            "extra": "mean: 140.10597303100113 nsec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2146.870539201736,
            "unit": "iter/sec",
            "range": "stddev: 0.00009045355630580743",
            "extra": "mean: 465.79427205323094 usec\nrounds: 1213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.60285977373594,
            "unit": "iter/sec",
            "range": "stddev: 0.0001496653301092931",
            "extra": "mean: 20.16012795555563 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.74735143367759,
            "unit": "iter/sec",
            "range": "stddev: 0.026869577406148693",
            "extra": "mean: 27.212845578947952 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 103.88476774166617,
            "unit": "iter/sec",
            "range": "stddev: 0.00015095623699491848",
            "extra": "mean: 9.626050303031283 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149951.3926505238,
            "unit": "iter/sec",
            "range": "stddev: 4.735005909660575e-7",
            "extra": "mean: 6.668827693588659 usec\nrounds: 40161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 100.92648816319038,
            "unit": "iter/sec",
            "range": "stddev: 0.0006363005021751569",
            "extra": "mean: 9.908201684210756 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 164.397850500837,
            "unit": "iter/sec",
            "range": "stddev: 0.0001719908559314203",
            "extra": "mean: 6.082804592356326 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 288.07022911256564,
            "unit": "iter/sec",
            "range": "stddev: 0.0002454186162652821",
            "extra": "mean: 3.471375723484576 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72488.74236950438,
            "unit": "iter/sec",
            "range": "stddev: 5.405921240207879e-7",
            "extra": "mean: 13.795245541750418 usec\nrounds: 13851"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.44548635297493,
            "unit": "iter/sec",
            "range": "stddev: 0.00020175067480247868",
            "extra": "mean: 16.82213505769316 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2521547.6367946346,
            "unit": "iter/sec",
            "range": "stddev: 1.5901462849598037e-8",
            "extra": "mean: 396.58183942601573 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.634221355383822,
            "unit": "iter/sec",
            "range": "stddev: 0.0004876592218669168",
            "extra": "mean: 37.545681799999784 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 77.92149224969091,
            "unit": "iter/sec",
            "range": "stddev: 0.00004174311316093031",
            "extra": "mean: 12.833429791046727 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5352472.937134262,
            "unit": "iter/sec",
            "range": "stddev: 1.0250822339757455e-8",
            "extra": "mean: 186.82952940553483 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.83053087429015,
            "unit": "iter/sec",
            "range": "stddev: 0.000728456426431769",
            "extra": "mean: 10.435087762498085 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 509837.37269545323,
            "unit": "iter/sec",
            "range": "stddev: 3.450565052482582e-7",
            "extra": "mean: 1.9614097623191324 usec\nrounds: 2233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.50419049401675,
            "unit": "iter/sec",
            "range": "stddev: 0.0004230684368819937",
            "extra": "mean: 15.266198886792463 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 237.62441761260877,
            "unit": "iter/sec",
            "range": "stddev: 0.01096179480337163",
            "extra": "mean: 4.208321729083695 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.67524054686692,
            "unit": "iter/sec",
            "range": "stddev: 0.00013298168489535116",
            "extra": "mean: 9.83523613636353 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.1874562592859,
            "unit": "iter/sec",
            "range": "stddev: 0.00009968454579084065",
            "extra": "mean: 6.053728428569984 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2187.283462986184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000821737317365766",
            "extra": "mean: 457.188113439468 usec\nrounds: 1384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10237.023649682917,
            "unit": "iter/sec",
            "range": "stddev: 0.000002150881089237236",
            "extra": "mean: 97.68464294121019 usec\nrounds: 5100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1846837.1160026717,
            "unit": "iter/sec",
            "range": "stddev: 1.3440565509634752e-7",
            "extra": "mean: 541.4662675636596 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 274.7464983530772,
            "unit": "iter/sec",
            "range": "stddev: 0.00040602286625119927",
            "extra": "mean: 3.6397188171435704 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2156.071110030112,
            "unit": "iter/sec",
            "range": "stddev: 0.000090878971463315",
            "extra": "mean: 463.8065949439088 usec\nrounds: 1780"
          }
        ]
      }
    ]
  }
}