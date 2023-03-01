window.BENCHMARK_DATA = {
  "lastUpdate": 1677679356240,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "cd27b99206dccbfd704cb720369fbd3bdef1547b",
          "message": "perf: fix duckdb insert-from-dataframe performance",
          "timestamp": "2023-03-01T14:57:40+01:00",
          "tree_id": "db964aedd641b6d283946b1b6c1a1a1b5cdd2c2b",
          "url": "https://github.com/ibis-project/ibis/commit/cd27b99206dccbfd704cb720369fbd3bdef1547b"
        },
        "date": 1677679275416,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8792510353279818,
            "unit": "iter/sec",
            "range": "stddev: 0.019546872487951717",
            "extra": "mean: 1.137331615000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 748.7370752245465,
            "unit": "iter/sec",
            "range": "stddev: 0.000026331361934538224",
            "extra": "mean: 1.3355823200021177 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 284.16635187250677,
            "unit": "iter/sec",
            "range": "stddev: 0.0047123275348230085",
            "extra": "mean: 3.519065481928195 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.9059648640698,
            "unit": "iter/sec",
            "range": "stddev: 0.0005572893143289455",
            "extra": "mean: 10.426880136364073 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8443801207602408,
            "unit": "iter/sec",
            "range": "stddev: 0.008385027727195706",
            "extra": "mean: 1.1843007377999926 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12625.073833410464,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014588030905955316",
            "extra": "mean: 79.20745757174441 usec\nrounds: 4867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.57382333296349,
            "unit": "iter/sec",
            "range": "stddev: 0.00004451498078089569",
            "extra": "mean: 5.010677168476286 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.736822071274033,
            "unit": "iter/sec",
            "range": "stddev: 0.00044405642895442197",
            "extra": "mean: 174.3125353333331 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 77.41771741232789,
            "unit": "iter/sec",
            "range": "stddev: 0.00032105164494817027",
            "extra": "mean: 12.91693986111713 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 314.12915126625023,
            "unit": "iter/sec",
            "range": "stddev: 0.0002365465818460666",
            "extra": "mean: 3.1834040106402544 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5258.177379897821,
            "unit": "iter/sec",
            "range": "stddev: 0.000035686785802428197",
            "extra": "mean: 190.17996688796228 usec\nrounds: 1510"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 142.92586814104382,
            "unit": "iter/sec",
            "range": "stddev: 0.0005671357351009762",
            "extra": "mean: 6.996634080355335 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4818.154212134568,
            "unit": "iter/sec",
            "range": "stddev: 0.00017349606812675468",
            "extra": "mean: 207.54835897146884 usec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.534041759508007,
            "unit": "iter/sec",
            "range": "stddev: 0.005080810367733232",
            "extra": "mean: 394.6264880000058 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.3348317497282,
            "unit": "iter/sec",
            "range": "stddev: 0.000044155507124782156",
            "extra": "mean: 7.3348827087395705 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.744759840344704,
            "unit": "iter/sec",
            "range": "stddev: 0.00014958753467504305",
            "extra": "mean: 63.51319487500717 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6120698.866888032,
            "unit": "iter/sec",
            "range": "stddev: 7.67873829296879e-9",
            "extra": "mean: 163.38003580085964 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 104.1877274519597,
            "unit": "iter/sec",
            "range": "stddev: 0.0007108116914959088",
            "extra": "mean: 9.598059430378628 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.38705157715816,
            "unit": "iter/sec",
            "range": "stddev: 0.00022338256059522464",
            "extra": "mean: 3.221783882152098 msec\nrounds: 297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 143.34276309002277,
            "unit": "iter/sec",
            "range": "stddev: 0.0005364135604399358",
            "extra": "mean: 6.976285223216853 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 117.34295912155662,
            "unit": "iter/sec",
            "range": "stddev: 0.011512574606374398",
            "extra": "mean: 8.522028142856795 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12190.54265213042,
            "unit": "iter/sec",
            "range": "stddev: 0.00002075409892776762",
            "extra": "mean: 82.03080277359433 usec\nrounds: 4254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 314.09856718001964,
            "unit": "iter/sec",
            "range": "stddev: 0.00023366432209286948",
            "extra": "mean: 3.183713981817908 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5538.403587128066,
            "unit": "iter/sec",
            "range": "stddev: 0.00004676318783728557",
            "extra": "mean: 180.55744480668105 usec\nrounds: 308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 109.9405281599059,
            "unit": "iter/sec",
            "range": "stddev: 0.0005256770030817707",
            "extra": "mean: 9.095826777778651 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 312.0458364731668,
            "unit": "iter/sec",
            "range": "stddev: 0.00020526580230807219",
            "extra": "mean: 3.204657403227334 msec\nrounds: 310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.92849345815182,
            "unit": "iter/sec",
            "range": "stddev: 0.01966962433333028",
            "extra": "mean: 27.079360849995737 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6947878892919207,
            "unit": "iter/sec",
            "range": "stddev: 0.010066971987797126",
            "extra": "mean: 1.4392881848000116 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 143.45780127832958,
            "unit": "iter/sec",
            "range": "stddev: 0.0006004697532717323",
            "extra": "mean: 6.970690970370099 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 142.19427616926095,
            "unit": "iter/sec",
            "range": "stddev: 0.0006132127572684379",
            "extra": "mean: 7.032631881818154 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 341.3790342770538,
            "unit": "iter/sec",
            "range": "stddev: 0.000012220087593388448",
            "extra": "mean: 2.9292952981653455 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5694.66706965438,
            "unit": "iter/sec",
            "range": "stddev: 0.00006223965203196172",
            "extra": "mean: 175.60289087465335 usec\nrounds: 2630"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.67465150499487,
            "unit": "iter/sec",
            "range": "stddev: 0.00035006856099045026",
            "extra": "mean: 9.932986954023734 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 198.4057529062445,
            "unit": "iter/sec",
            "range": "stddev: 0.00004433398065587325",
            "extra": "mean: 5.040176433152845 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.4293319006107,
            "unit": "iter/sec",
            "range": "stddev: 0.000018143130811547486",
            "extra": "mean: 1.45047498522178 msec\nrounds: 609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.4568188438463,
            "unit": "iter/sec",
            "range": "stddev: 0.0001759225542659298",
            "extra": "mean: 3.396083690390988 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5360.6019950249365,
            "unit": "iter/sec",
            "range": "stddev: 0.000046163821419906905",
            "extra": "mean: 186.54621270672197 usec\nrounds: 2487"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 304.803472651295,
            "unit": "iter/sec",
            "range": "stddev: 0.00019852092984664173",
            "extra": "mean: 3.280802516131541 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.076375473895,
            "unit": "iter/sec",
            "range": "stddev: 0.000022211178525763408",
            "extra": "mean: 1.8654058372111502 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.51157457559052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000681082314166606",
            "extra": "mean: 6.115774999999804 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5750.131840758427,
            "unit": "iter/sec",
            "range": "stddev: 0.00004875341347917439",
            "extra": "mean: 173.90905594750723 usec\nrounds: 2413"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8888587974236584,
            "unit": "iter/sec",
            "range": "stddev: 0.0047178590530649964",
            "extra": "mean: 1.125038085799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5277.6355871454125,
            "unit": "iter/sec",
            "range": "stddev: 0.000052761252419616966",
            "extra": "mean: 189.47878903114713 usec\nrounds: 2261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.90546530460637,
            "unit": "iter/sec",
            "range": "stddev: 0.00032240274570694856",
            "extra": "mean: 17.26952706000361 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.2043694508893,
            "unit": "iter/sec",
            "range": "stddev: 0.00014714536444334183",
            "extra": "mean: 6.203305799999725 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.24379305620349,
            "unit": "iter/sec",
            "range": "stddev: 0.0004500189243118743",
            "extra": "mean: 15.327128500002475 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146520.59906110127,
            "unit": "iter/sec",
            "range": "stddev: 3.847546361550278e-7",
            "extra": "mean: 6.824978920424596 usec\nrounds: 33445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.16744997630116,
            "unit": "iter/sec",
            "range": "stddev: 0.0006783337818571564",
            "extra": "mean: 9.244925346942116 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.28616233692925,
            "unit": "iter/sec",
            "range": "stddev: 0.00012972367154753277",
            "extra": "mean: 8.383202044638287 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.950202428354,
            "unit": "iter/sec",
            "range": "stddev: 0.00006311209295687755",
            "extra": "mean: 10.422072853329306 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7754240086880824,
            "unit": "iter/sec",
            "range": "stddev: 0.0029444680487151413",
            "extra": "mean: 563.2457346000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.8956173713694,
            "unit": "iter/sec",
            "range": "stddev: 0.0006355992659465089",
            "extra": "mean: 9.625045072166547 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.023744369323495,
            "unit": "iter/sec",
            "range": "stddev: 0.0005901281932296836",
            "extra": "mean: 21.265852250004194 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.64406825438664,
            "unit": "iter/sec",
            "range": "stddev: 0.0002723516866375106",
            "extra": "mean: 93.94904054545866 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 109.2003192135229,
            "unit": "iter/sec",
            "range": "stddev: 0.0006473142798771601",
            "extra": "mean: 9.157482388349687 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8492.013629651336,
            "unit": "iter/sec",
            "range": "stddev: 0.00001319086552415264",
            "extra": "mean: 117.75770077762557 usec\nrounds: 4632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 242.3242496219951,
            "unit": "iter/sec",
            "range": "stddev: 0.0035849400554786273",
            "extra": "mean: 4.1267021421088215 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.80473395370947,
            "unit": "iter/sec",
            "range": "stddev: 0.0007073375371194852",
            "extra": "mean: 9.72717852127584 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.71767683488301,
            "unit": "iter/sec",
            "range": "stddev: 0.00013721741911666346",
            "extra": "mean: 15.451728938777316 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 756839.0530284151,
            "unit": "iter/sec",
            "range": "stddev: 1.0947814308496031e-7",
            "extra": "mean: 1.321284883488241 usec\nrounds: 23041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13976.465636977238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014159489831869592",
            "extra": "mean: 71.54884689547845 usec\nrounds: 6120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.0060592006274,
            "unit": "iter/sec",
            "range": "stddev: 0.0007853154345735739",
            "extra": "mean: 9.61482444086265 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2689902.1840326837,
            "unit": "iter/sec",
            "range": "stddev: 2.7490600088320783e-8",
            "extra": "mean: 371.7607301620869 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.633636457210805,
            "unit": "iter/sec",
            "range": "stddev: 0.0012718843513546462",
            "extra": "mean: 24.610152750001802 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 277.7983987727952,
            "unit": "iter/sec",
            "range": "stddev: 0.0003746750748191594",
            "extra": "mean: 3.5997327717424192 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1145.8429371489285,
            "unit": "iter/sec",
            "range": "stddev: 0.000011717621110046443",
            "extra": "mean: 872.7199580146533 usec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.17298860169912,
            "unit": "iter/sec",
            "range": "stddev: 0.0004934323892091014",
            "extra": "mean: 11.341341785717011 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.649072014701,
            "unit": "iter/sec",
            "range": "stddev: 0.00006140152628428208",
            "extra": "mean: 7.426712899223099 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5639.825269934169,
            "unit": "iter/sec",
            "range": "stddev: 0.00005164552244598416",
            "extra": "mean: 177.3104577070829 usec\nrounds: 2530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5421.657030170277,
            "unit": "iter/sec",
            "range": "stddev: 0.000052769796945945145",
            "extra": "mean: 184.44545540878545 usec\nrounds: 3476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 174.49608602214306,
            "unit": "iter/sec",
            "range": "stddev: 0.003872787720239245",
            "extra": "mean: 5.7307875654764135 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.334023214977623,
            "unit": "iter/sec",
            "range": "stddev: 0.0006383266776958645",
            "extra": "mean: 39.472609285713226 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.441029406618032,
            "unit": "iter/sec",
            "range": "stddev: 0.039677014718693115",
            "extra": "mean: 33.96620363332848 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5632103.37791867,
            "unit": "iter/sec",
            "range": "stddev: 1.965766588816938e-8",
            "extra": "mean: 177.55355910569142 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 141.2169848113155,
            "unit": "iter/sec",
            "range": "stddev: 0.0007339104934318587",
            "extra": "mean: 7.081301171641158 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 131.2337251647854,
            "unit": "iter/sec",
            "range": "stddev: 0.0007235735415083962",
            "extra": "mean: 7.61999248854924 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7051526.664005241,
            "unit": "iter/sec",
            "range": "stddev: 4.499821018263348e-9",
            "extra": "mean: 141.81326224069818 nsec\nrounds: 65360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11835057.261885712,
            "unit": "iter/sec",
            "range": "stddev: 3.618399655497979e-9",
            "extra": "mean: 84.49473271413436 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1761.5918173770283,
            "unit": "iter/sec",
            "range": "stddev: 0.000006601958173394483",
            "extra": "mean: 567.6683952182397 usec\nrounds: 1255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16977572834125568,
            "unit": "iter/sec",
            "range": "stddev: 0.1860840732407008",
            "extra": "mean: 5.8901234574 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1948261.5286679137,
            "unit": "iter/sec",
            "range": "stddev: 1.195728809875886e-7",
            "extra": "mean: 513.2781124532755 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 305.02142338854395,
            "unit": "iter/sec",
            "range": "stddev: 0.00021692264915857274",
            "extra": "mean: 3.278458243656462 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73407.11723834631,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015484552259350288",
            "extra": "mean: 13.622657279308353 usec\nrounds: 13387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 293.7229301276406,
            "unit": "iter/sec",
            "range": "stddev: 0.000021008590356027108",
            "extra": "mean: 3.4045690595740643 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1838415.4550001353,
            "unit": "iter/sec",
            "range": "stddev: 1.551072611343089e-7",
            "extra": "mean: 543.9466891339457 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1857530.158584848,
            "unit": "iter/sec",
            "range": "stddev: 9.155485674936165e-8",
            "extra": "mean: 538.3492673743968 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 490587.12726872315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011122610212528502",
            "extra": "mean: 2.0383739083562253 usec\nrounds: 2177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 142.73615147883575,
            "unit": "iter/sec",
            "range": "stddev: 0.0006189861422971988",
            "extra": "mean: 7.005933602940636 msec\nrounds: 136"
          }
        ]
      }
    ]
  }
}