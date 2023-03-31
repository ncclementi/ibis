window.BENCHMARK_DATA = {
  "lastUpdate": 1680295725527,
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
          "id": "5b9d8c0db244e2742f2eddeca0787661aa516642",
          "message": "feat(sql): use temp views where possible",
          "timestamp": "2023-03-31T16:43:38-04:00",
          "tree_id": "a9713208565bc90d431d4d127281c21a7661180f",
          "url": "https://github.com/ibis-project/ibis/commit/5b9d8c0db244e2742f2eddeca0787661aa516642"
        },
        "date": 1680295639484,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.28534648517778,
            "unit": "iter/sec",
            "range": "stddev: 0.00011935805635241276",
            "extra": "mean: 10.494793133334055 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.07644562800571,
            "unit": "iter/sec",
            "range": "stddev: 0.00009794519775024183",
            "extra": "mean: 8.397966488888956 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4562.805715916248,
            "unit": "iter/sec",
            "range": "stddev: 0.0015613310821447899",
            "extra": "mean: 219.16339687919233 usec\nrounds: 1474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6343174.304494776,
            "unit": "iter/sec",
            "range": "stddev: 1.162307962019798e-8",
            "extra": "mean: 157.64977470241212 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 312.53908122481846,
            "unit": "iter/sec",
            "range": "stddev: 0.00019078542780355954",
            "extra": "mean: 3.199599858299548 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.25842012510799,
            "unit": "iter/sec",
            "range": "stddev: 0.000564873193170205",
            "extra": "mean: 9.591551443039519 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18133256568362818,
            "unit": "iter/sec",
            "range": "stddev: 0.09623963722061947",
            "extra": "mean: 5.514729228199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.9621362677317,
            "unit": "iter/sec",
            "range": "stddev: 0.00019590386940343757",
            "extra": "mean: 3.268378277777978 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 102.31603602293735,
            "unit": "iter/sec",
            "range": "stddev: 0.0004972839587325239",
            "extra": "mean: 9.773639000007961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.70910467941724,
            "unit": "iter/sec",
            "range": "stddev: 0.0005819326538548026",
            "extra": "mean: 17.328288240740356 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2534874.497050618,
            "unit": "iter/sec",
            "range": "stddev: 1.778787091351914e-8",
            "extra": "mean: 394.49684833073894 nsec\nrounds: 89286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 176.07341938514702,
            "unit": "iter/sec",
            "range": "stddev: 0.00414709300357068",
            "extra": "mean: 5.67944896789093 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1664393.3945203824,
            "unit": "iter/sec",
            "range": "stddev: 9.403159244926821e-8",
            "extra": "mean: 600.819495734759 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.336090734636537,
            "unit": "iter/sec",
            "range": "stddev: 0.0010097390319924592",
            "extra": "mean: 96.74837670000045 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1196.8050217472428,
            "unit": "iter/sec",
            "range": "stddev: 0.000015253594738274396",
            "extra": "mean: 835.5579913427146 usec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 504442.72500628576,
            "unit": "iter/sec",
            "range": "stddev: 1.205858223428883e-7",
            "extra": "mean: 1.982385611741232 usec\nrounds: 2085"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.38586208993664,
            "unit": "iter/sec",
            "range": "stddev: 0.0005030622872247724",
            "extra": "mean: 9.863308151514529 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1744.911494898023,
            "unit": "iter/sec",
            "range": "stddev: 0.000006848598952169418",
            "extra": "mean: 573.0949695293529 usec\nrounds: 1444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.17832045142157,
            "unit": "iter/sec",
            "range": "stddev: 0.00017685822982726603",
            "extra": "mean: 13.854575636364851 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1889531.5561238036,
            "unit": "iter/sec",
            "range": "stddev: 8.93901031292301e-8",
            "extra": "mean: 529.231701243141 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8585269124662496,
            "unit": "iter/sec",
            "range": "stddev: 0.002433175118927885",
            "extra": "mean: 1.164785850600009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 115.09054122591506,
            "unit": "iter/sec",
            "range": "stddev: 0.0005758732596466958",
            "extra": "mean: 8.68881134234191 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.7917953347041,
            "unit": "iter/sec",
            "range": "stddev: 0.00010382772269337663",
            "extra": "mean: 13.370450535715252 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 145.28891312387597,
            "unit": "iter/sec",
            "range": "stddev: 0.009622826611986834",
            "extra": "mean: 6.882837640525136 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.254776079946,
            "unit": "iter/sec",
            "range": "stddev: 0.00006825348168225776",
            "extra": "mean: 10.177622298852322 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.028388378780136,
            "unit": "iter/sec",
            "range": "stddev: 0.001256293542632084",
            "extra": "mean: 23.24047071428684 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.9204449148478,
            "unit": "iter/sec",
            "range": "stddev: 0.00006739348080249108",
            "extra": "mean: 3.4492220798492115 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.793129517312204,
            "unit": "iter/sec",
            "range": "stddev: 0.0005781667566469044",
            "extra": "mean: 557.6841997999907 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.97159518711587,
            "unit": "iter/sec",
            "range": "stddev: 0.0006005489480612147",
            "extra": "mean: 9.436490960000015 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.56711926993178,
            "unit": "iter/sec",
            "range": "stddev: 0.015349275983318023",
            "extra": "mean: 11.290871919998153 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.75187720744606,
            "unit": "iter/sec",
            "range": "stddev: 0.0006992744859382755",
            "extra": "mean: 8.350599784483553 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 742892.0322581384,
            "unit": "iter/sec",
            "range": "stddev: 9.007889200844297e-7",
            "extra": "mean: 1.3460906249867035 usec\nrounds: 24331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.3984799879889,
            "unit": "iter/sec",
            "range": "stddev: 0.00007492489412653162",
            "extra": "mean: 6.56174523577147 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.636487611321314,
            "unit": "iter/sec",
            "range": "stddev: 0.0003577982319625634",
            "extra": "mean: 63.95298131250193 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11684.825352970687,
            "unit": "iter/sec",
            "range": "stddev: 0.000012224446460113705",
            "extra": "mean: 85.58108228342199 usec\nrounds: 4922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.869469874943576,
            "unit": "iter/sec",
            "range": "stddev: 0.0007554801822302788",
            "extra": "mean: 22.794895923079267 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.31264051019748,
            "unit": "iter/sec",
            "range": "stddev: 0.0006072037681839717",
            "extra": "mean: 9.870436649998737 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 236.48752287047785,
            "unit": "iter/sec",
            "range": "stddev: 0.012180939156995271",
            "extra": "mean: 4.2285528972608475 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.2925854649514,
            "unit": "iter/sec",
            "range": "stddev: 0.0002418450031205703",
            "extra": "mean: 3.542423894531077 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.61297627377247,
            "unit": "iter/sec",
            "range": "stddev: 0.0006040216921622292",
            "extra": "mean: 9.379721258621375 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5847.793738042095,
            "unit": "iter/sec",
            "range": "stddev: 0.000046769596145714864",
            "extra": "mean: 171.00466343308662 usec\nrounds: 3402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5818.619820280495,
            "unit": "iter/sec",
            "range": "stddev: 0.00004522124944003831",
            "extra": "mean: 171.86206194715666 usec\nrounds: 1695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 309.3485781016946,
            "unit": "iter/sec",
            "range": "stddev: 0.0002061401935174638",
            "extra": "mean: 3.2325993096087937 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 295.0784042195725,
            "unit": "iter/sec",
            "range": "stddev: 0.00020548749378867883",
            "extra": "mean: 3.388929808824247 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 319.57955867446714,
            "unit": "iter/sec",
            "range": "stddev: 0.00001840351973785559",
            "extra": "mean: 3.129111274036862 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 740.7895485157577,
            "unit": "iter/sec",
            "range": "stddev: 0.00005670156633684033",
            "extra": "mean: 1.3499110536907482 msec\nrounds: 596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5800.303471452152,
            "unit": "iter/sec",
            "range": "stddev: 0.000046568252743825176",
            "extra": "mean: 172.40477242644033 usec\nrounds: 2720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6663667953893202,
            "unit": "iter/sec",
            "range": "stddev: 0.060404798400361025",
            "extra": "mean: 1.5006750139999951 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.43634794048808,
            "unit": "iter/sec",
            "range": "stddev: 0.00022832552762983946",
            "extra": "mean: 14.612118122808003 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 122.16426826408441,
            "unit": "iter/sec",
            "range": "stddev: 0.0006008370917098443",
            "extra": "mean: 8.18569958474506 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.17098602821756,
            "unit": "iter/sec",
            "range": "stddev: 0.0006387528223263081",
            "extra": "mean: 8.682742368420762 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.85889421634132,
            "unit": "iter/sec",
            "range": "stddev: 0.0009324330016056965",
            "extra": "mean: 21.806020774998558 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139522.0907327246,
            "unit": "iter/sec",
            "range": "stddev: 3.1987843215422597e-7",
            "extra": "mean: 7.16732378900234 usec\nrounds: 35588"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8058.77582082602,
            "unit": "iter/sec",
            "range": "stddev: 0.000018476526507667262",
            "extra": "mean: 124.08832584916111 usec\nrounds: 3563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7436849.05549809,
            "unit": "iter/sec",
            "range": "stddev: 4.299276132502571e-9",
            "extra": "mean: 134.46555019976424 nsec\nrounds: 64940"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5360.203297134578,
            "unit": "iter/sec",
            "range": "stddev: 0.00004953433234372447",
            "extra": "mean: 186.5600882217608 usec\nrounds: 2131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 260.87275043120854,
            "unit": "iter/sec",
            "range": "stddev: 0.003863769403596459",
            "extra": "mean: 3.833286528957333 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5669.053017228493,
            "unit": "iter/sec",
            "range": "stddev: 0.00004357616646134652",
            "extra": "mean: 176.39630410245897 usec\nrounds: 2657"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13037128.928929556,
            "unit": "iter/sec",
            "range": "stddev: 3.3851057367798795e-9",
            "extra": "mean: 76.7040048043261 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.43080423813875,
            "unit": "iter/sec",
            "range": "stddev: 0.016320232236954044",
            "extra": "mean: 9.762688162392298 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.36770081800387,
            "unit": "iter/sec",
            "range": "stddev: 0.00011583389784132844",
            "extra": "mean: 8.979264119263728 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.82033439390568,
            "unit": "iter/sec",
            "range": "stddev: 0.0006319787073929738",
            "extra": "mean: 8.20881017093996 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2430485.7867320715,
            "unit": "iter/sec",
            "range": "stddev: 1.710052601708206e-8",
            "extra": "mean: 411.4403817783304 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5833063855297325,
            "unit": "iter/sec",
            "range": "stddev: 0.0009973690020514915",
            "extra": "mean: 387.1008121999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.95737993202651,
            "unit": "iter/sec",
            "range": "stddev: 0.000660244350105204",
            "extra": "mean: 9.437756960784773 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.51471114235838,
            "unit": "iter/sec",
            "range": "stddev: 0.00002715905772480829",
            "extra": "mean: 5.167565784000544 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5599.923367168014,
            "unit": "iter/sec",
            "range": "stddev: 0.00004408301803463622",
            "extra": "mean: 178.57387225384812 usec\nrounds: 2458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.65959704451613,
            "unit": "iter/sec",
            "range": "stddev: 0.0005730667629463127",
            "extra": "mean: 8.219655697479359 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.84944538313789,
            "unit": "iter/sec",
            "range": "stddev: 0.0006250060033416456",
            "extra": "mean: 8.206849008262987 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9187029870880198,
            "unit": "iter/sec",
            "range": "stddev: 0.005200742646992262",
            "extra": "mean: 1.0884910727999966 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 684.8896715108692,
            "unit": "iter/sec",
            "range": "stddev: 0.000021332924693478128",
            "extra": "mean: 1.4600891816546104 msec\nrounds: 556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 296.8656550736985,
            "unit": "iter/sec",
            "range": "stddev: 0.0002089303351693512",
            "extra": "mean: 3.368527085936379 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.9362834222441,
            "unit": "iter/sec",
            "range": "stddev: 0.00007963644775445962",
            "extra": "mean: 7.1975439055101225 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.465711441481226,
            "unit": "iter/sec",
            "range": "stddev: 0.00021221493896463408",
            "extra": "mean: 20.216023804348126 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 357.56584468811104,
            "unit": "iter/sec",
            "range": "stddev: 0.000028652973667913856",
            "extra": "mean: 2.796687700617088 msec\nrounds: 324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4273.01417064349,
            "unit": "iter/sec",
            "range": "stddev: 0.002965679185612252",
            "extra": "mean: 234.02683915026805 usec\nrounds: 2636"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9184319413818236,
            "unit": "iter/sec",
            "range": "stddev: 0.002568512604000816",
            "extra": "mean: 1.088812306 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.68337021832806,
            "unit": "iter/sec",
            "range": "stddev: 0.00004884748667294515",
            "extra": "mean: 6.223419378379062 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69685.72138132791,
            "unit": "iter/sec",
            "range": "stddev: 5.026669097536152e-7",
            "extra": "mean: 14.350142040259444 usec\nrounds: 14165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5820488.532977295,
            "unit": "iter/sec",
            "range": "stddev: 8.930002408953683e-9",
            "extra": "mean: 171.80688430735952 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11964.6973185238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015154333748560389",
            "extra": "mean: 83.57921419807212 usec\nrounds: 5705"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.436748694036076,
            "unit": "iter/sec",
            "range": "stddev: 0.000813434422607574",
            "extra": "mean: 36.44746726923113 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.550749115640075,
            "unit": "iter/sec",
            "range": "stddev: 0.00028204948249983694",
            "extra": "mean: 180.15586350000015 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 308.53010253832684,
            "unit": "iter/sec",
            "range": "stddev: 0.00018909790887423599",
            "extra": "mean: 3.2411748214285705 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13519.693083064056,
            "unit": "iter/sec",
            "range": "stddev: 0.000001655432799446296",
            "extra": "mean: 73.96617614438948 usec\nrounds: 7210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.68011794928968,
            "unit": "iter/sec",
            "range": "stddev: 0.000651321992732991",
            "extra": "mean: 10.78980068354201 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.3998410267695,
            "unit": "iter/sec",
            "range": "stddev: 0.00007068184764706889",
            "extra": "mean: 1.8402655365347023 msec\nrounds: 479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5488.8268992248495,
            "unit": "iter/sec",
            "range": "stddev: 0.00004406897696890203",
            "extra": "mean: 182.18829239107964 usec\nrounds: 2760"
          }
        ]
      }
    ]
  }
}