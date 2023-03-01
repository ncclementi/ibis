window.BENCHMARK_DATA = {
  "lastUpdate": 1677630987244,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "04d46364148ef2a9d55c19d427e5ec5c8ca2f87c",
          "message": "chore(flake/poetry2nix): `86053059` -> `45babaf3`",
          "timestamp": "2023-03-01T00:31:20Z",
          "tree_id": "5afc58310553fa4b0ac3888188c69ac89674de7a",
          "url": "https://github.com/ibis-project/ibis/commit/04d46364148ef2a9d55c19d427e5ec5c8ca2f87c"
        },
        "date": 1677630902075,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.17779406684222,
            "unit": "iter/sec",
            "range": "stddev: 0.0005800365874886189",
            "extra": "mean: 17.800627749999702 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.015766074550825,
            "unit": "iter/sec",
            "range": "stddev: 0.0011953219982042806",
            "extra": "mean: 38.43823000000839 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5299.701189446041,
            "unit": "iter/sec",
            "range": "stddev: 0.0000774209721449427",
            "extra": "mean: 188.6898834959649 usec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1710673.0888369654,
            "unit": "iter/sec",
            "range": "stddev: 9.49129628397636e-8",
            "extra": "mean: 584.5652255393048 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.3154620575189,
            "unit": "iter/sec",
            "range": "stddev: 0.000586911063982926",
            "extra": "mean: 9.318321710845547 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.35340586749336,
            "unit": "iter/sec",
            "range": "stddev: 0.00007243263285087457",
            "extra": "mean: 7.443056568184467 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7891519610141982,
            "unit": "iter/sec",
            "range": "stddev: 0.0020550562654030723",
            "extra": "mean: 558.9240164000046 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 139.50610616730285,
            "unit": "iter/sec",
            "range": "stddev: 0.0006072598427474661",
            "extra": "mean: 7.168145018690071 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 308.57349795607166,
            "unit": "iter/sec",
            "range": "stddev: 0.0002060850110616129",
            "extra": "mean: 3.240719007380081 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.93931621631495,
            "unit": "iter/sec",
            "range": "stddev: 0.0005746705703717988",
            "extra": "mean: 9.43936619298282 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.5381986086342,
            "unit": "iter/sec",
            "range": "stddev: 0.00007578135197176281",
            "extra": "mean: 1.8431881894483175 msec\nrounds: 417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 298.7118018022892,
            "unit": "iter/sec",
            "range": "stddev: 0.0002306942841332984",
            "extra": "mean: 3.347708372975093 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.271235336110351,
            "unit": "iter/sec",
            "range": "stddev: 0.0009639473827695125",
            "extra": "mean: 97.35927250000032 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11680.43484956358,
            "unit": "iter/sec",
            "range": "stddev: 0.000017183910018744277",
            "extra": "mean: 85.61325095164273 usec\nrounds: 4467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5856.128376023876,
            "unit": "iter/sec",
            "range": "stddev: 0.00004371378160073107",
            "extra": "mean: 170.7612838704482 usec\nrounds: 2015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.95018298021182,
            "unit": "iter/sec",
            "range": "stddev: 0.00010378784837096488",
            "extra": "mean: 13.342195578948989 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69974.64334676553,
            "unit": "iter/sec",
            "range": "stddev: 5.427586016337331e-7",
            "extra": "mean: 14.290890988102811 usec\nrounds: 14026"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1817443.0387580597,
            "unit": "iter/sec",
            "range": "stddev: 1.0238761263134352e-7",
            "extra": "mean: 550.2235716192486 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12815246.490263723,
            "unit": "iter/sec",
            "range": "stddev: 3.83326783647685e-9",
            "extra": "mean: 78.03205351995302 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9239057213747872,
            "unit": "iter/sec",
            "range": "stddev: 0.00418471704425775",
            "extra": "mean: 1.0823615189999942 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.60763342636085,
            "unit": "iter/sec",
            "range": "stddev: 0.0006081355344182548",
            "extra": "mean: 9.380191341464768 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5055.640247883632,
            "unit": "iter/sec",
            "range": "stddev: 0.00012513445430661546",
            "extra": "mean: 197.79888421028676 usec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.631895585046264,
            "unit": "iter/sec",
            "range": "stddev: 0.00013331093107947533",
            "extra": "mean: 63.971768142861514 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.84494460906517,
            "unit": "iter/sec",
            "range": "stddev: 0.00006994935516956818",
            "extra": "mean: 8.485726760001171 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.3862015296715,
            "unit": "iter/sec",
            "range": "stddev: 0.000025426053318359063",
            "extra": "mean: 3.0638550138250586 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1881856.7403520646,
            "unit": "iter/sec",
            "range": "stddev: 1.0990180101955924e-7",
            "extra": "mean: 531.3900779784738 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11852.117812480637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018595425601991749",
            "extra": "mean: 84.37310663137096 usec\nrounds: 5308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5867552.140515048,
            "unit": "iter/sec",
            "range": "stddev: 1.2770891864364144e-8",
            "extra": "mean: 170.42882211357133 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.27193301486906,
            "unit": "iter/sec",
            "range": "stddev: 0.000030332135119718213",
            "extra": "mean: 5.2009671111106295 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.876377126419186,
            "unit": "iter/sec",
            "range": "stddev: 0.0005606485164144506",
            "extra": "mean: 24.464007583335484 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.584189360700606,
            "unit": "iter/sec",
            "range": "stddev: 0.00041212119544251145",
            "extra": "mean: 22.429475882350904 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4716.880267939088,
            "unit": "iter/sec",
            "range": "stddev: 0.00017932471260253305",
            "extra": "mean: 212.0045333346828 usec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.799058964497586,
            "unit": "iter/sec",
            "range": "stddev: 0.027042041342169844",
            "extra": "mean: 31.447471483871933 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.25880862311544,
            "unit": "iter/sec",
            "range": "stddev: 0.0006407520362786303",
            "extra": "mean: 10.83907341666506 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.530607538392,
            "unit": "iter/sec",
            "range": "stddev: 0.00022631367614231728",
            "extra": "mean: 3.2837421764704904 msec\nrounds: 306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1748.7670962042585,
            "unit": "iter/sec",
            "range": "stddev: 0.000008711775178074969",
            "extra": "mean: 571.8314360846132 usec\nrounds: 1369"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6380959.094185622,
            "unit": "iter/sec",
            "range": "stddev: 1.0499536203128557e-8",
            "extra": "mean: 156.71625303317126 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 140.37047512523424,
            "unit": "iter/sec",
            "range": "stddev: 0.0006734898543438569",
            "extra": "mean: 7.1240052376244405 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 139.89003232029944,
            "unit": "iter/sec",
            "range": "stddev: 0.0006782638963197038",
            "extra": "mean: 7.1484721492546965 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7165322.020624421,
            "unit": "iter/sec",
            "range": "stddev: 6.611728848422725e-9",
            "extra": "mean: 139.56106887051016 nsec\nrounds: 53767"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8021.133796097541,
            "unit": "iter/sec",
            "range": "stddev: 0.00004257334719990529",
            "extra": "mean: 124.67065447611937 usec\nrounds: 3418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 348.4962318950343,
            "unit": "iter/sec",
            "range": "stddev: 0.00007009639216644283",
            "extra": "mean: 2.86947148484864 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5758.159718214225,
            "unit": "iter/sec",
            "range": "stddev: 0.00004656784417921043",
            "extra": "mean: 173.66659643649646 usec\nrounds: 2245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5550.278976274725,
            "unit": "iter/sec",
            "range": "stddev: 0.00004850574587071729",
            "extra": "mean: 180.1711236992968 usec\nrounds: 2595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 140.58670754689132,
            "unit": "iter/sec",
            "range": "stddev: 0.0006391306943309629",
            "extra": "mean: 7.113048007518491 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18022630043467736,
            "unit": "iter/sec",
            "range": "stddev: 0.14447455015925612",
            "extra": "mean: 5.548579744400001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 314.56253370116366,
            "unit": "iter/sec",
            "range": "stddev: 0.00020310283803916777",
            "extra": "mean: 3.179018137455639 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.0033144565685,
            "unit": "iter/sec",
            "range": "stddev: 0.000021200986094466282",
            "extra": "mean: 1.4534813699115208 msec\nrounds: 565"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.5041175932374,
            "unit": "iter/sec",
            "range": "stddev: 0.00026137783956711594",
            "extra": "mean: 3.5397714147297723 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.87446468371411,
            "unit": "iter/sec",
            "range": "stddev: 0.00027224770385135284",
            "extra": "mean: 13.913147101693655 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.6706209030474,
            "unit": "iter/sec",
            "range": "stddev: 0.0002011172728480698",
            "extra": "mean: 3.218843149999933 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.51521829921766,
            "unit": "iter/sec",
            "range": "stddev: 0.0006517538039399034",
            "extra": "mean: 9.660415313132347 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.68912948523933,
            "unit": "iter/sec",
            "range": "stddev: 0.00016853395543634864",
            "extra": "mean: 10.342424275860928 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.86366794821861,
            "unit": "iter/sec",
            "range": "stddev: 0.0005424889336979643",
            "extra": "mean: 15.65835524528299 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.2887900071207,
            "unit": "iter/sec",
            "range": "stddev: 0.00002992408182621117",
            "extra": "mean: 7.2839158969070485 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 131.87634115006887,
            "unit": "iter/sec",
            "range": "stddev: 0.0006035538496904073",
            "extra": "mean: 7.582861272000628 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.57893270475813,
            "unit": "iter/sec",
            "range": "stddev: 0.00008796934938542464",
            "extra": "mean: 6.6410352500021474 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.582838089226083,
            "unit": "iter/sec",
            "range": "stddev: 0.0001690076874302875",
            "extra": "mean: 179.12036566667192 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5314.095087105587,
            "unit": "iter/sec",
            "range": "stddev: 0.000044647311360658123",
            "extra": "mean: 188.17879311690436 usec\nrounds: 2499"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5246.390982315765,
            "unit": "iter/sec",
            "range": "stddev: 0.000023563629279467135",
            "extra": "mean: 190.60721996716273 usec\nrounds: 2414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.6553943519835,
            "unit": "iter/sec",
            "range": "stddev: 0.00006641176437323494",
            "extra": "mean: 10.564638252748932 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1182.146295959496,
            "unit": "iter/sec",
            "range": "stddev: 0.000010995180196979668",
            "extra": "mean: 845.9189893991455 usec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6768819697186073,
            "unit": "iter/sec",
            "range": "stddev: 0.0024524284271707753",
            "extra": "mean: 1.4773624423999934 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 104.4151499350384,
            "unit": "iter/sec",
            "range": "stddev: 0.000279209803214319",
            "extra": "mean: 9.57715427906915 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 482836.00385849044,
            "unit": "iter/sec",
            "range": "stddev: 3.498601366994776e-7",
            "extra": "mean: 2.07109658767924 usec\nrounds: 1729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 196.08875089482325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000583604582290171",
            "extra": "mean: 5.099731603351246 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5793.710744244455,
            "unit": "iter/sec",
            "range": "stddev: 0.00004456675810093771",
            "extra": "mean: 172.60095371406186 usec\nrounds: 2679"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141053.75040040596,
            "unit": "iter/sec",
            "range": "stddev: 4.973324196328726e-7",
            "extra": "mean: 7.089496005326505 usec\nrounds: 42556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.4214745704257,
            "unit": "iter/sec",
            "range": "stddev: 0.0006695734894490613",
            "extra": "mean: 9.958029438202471 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 140.3491216442844,
            "unit": "iter/sec",
            "range": "stddev: 0.0006658419818989492",
            "extra": "mean: 7.125089122641646 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.97440961611952,
            "unit": "iter/sec",
            "range": "stddev: 0.0006609315419512217",
            "extra": "mean: 9.903499350001255 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.3973334504892,
            "unit": "iter/sec",
            "range": "stddev: 0.00002653117482970647",
            "extra": "mean: 1.322056485099251 msec\nrounds: 604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1878403.6301794823,
            "unit": "iter/sec",
            "range": "stddev: 8.504297839494754e-8",
            "extra": "mean: 532.3669438950401 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13636.637318255694,
            "unit": "iter/sec",
            "range": "stddev: 0.000001946551100696422",
            "extra": "mean: 73.3318615624745 usec\nrounds: 6465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.1275531666972,
            "unit": "iter/sec",
            "range": "stddev: 0.0003946157377177631",
            "extra": "mean: 21.219009534886112 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 132.99540102309527,
            "unit": "iter/sec",
            "range": "stddev: 0.0006282776073719744",
            "extra": "mean: 7.5190569922515245 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5084571353002425,
            "unit": "iter/sec",
            "range": "stddev: 0.002220620489432772",
            "extra": "mean: 398.6514204000173 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8527974950968924,
            "unit": "iter/sec",
            "range": "stddev: 0.0028628747885048036",
            "extra": "mean: 1.1726113241999883 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 298.25644414048537,
            "unit": "iter/sec",
            "range": "stddev: 0.00021439325301329383",
            "extra": "mean: 3.3528194265233644 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9229502411986904,
            "unit": "iter/sec",
            "range": "stddev: 0.005907557743798704",
            "extra": "mean: 1.0834820290000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.3759312624142,
            "unit": "iter/sec",
            "range": "stddev: 0.000046152601064460304",
            "extra": "mean: 3.4202541764714436 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.38669332386705,
            "unit": "iter/sec",
            "range": "stddev: 0.0006509716943618324",
            "extra": "mean: 9.863227285711208 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 764909.3760999292,
            "unit": "iter/sec",
            "range": "stddev: 2.312413197504385e-7",
            "extra": "mean: 1.307344413920948 usec\nrounds: 25841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 140.26495355786304,
            "unit": "iter/sec",
            "range": "stddev: 0.0006854306329687738",
            "extra": "mean: 7.129364639096916 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 314.17758282087,
            "unit": "iter/sec",
            "range": "stddev: 0.00020479350679717109",
            "extra": "mean: 3.182913277966606 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.6673874530181,
            "unit": "iter/sec",
            "range": "stddev: 0.0000696690119596523",
            "extra": "mean: 6.302492377622988 msec\nrounds: 143"
          }
        ]
      }
    ]
  }
}