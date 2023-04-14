window.BENCHMARK_DATA = {
  "lastUpdate": 1681490135810,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "5abd809e61d932c414c43f6abf2da9ddd29a9f09",
          "message": "chore(dev-deps): add nbstripout pre-commit hook",
          "timestamp": "2023-04-14T12:24:09-04:00",
          "tree_id": "7dab3c599abefe557bb0a5c952059418204ecb0f",
          "url": "https://github.com/ibis-project/ibis/commit/5abd809e61d932c414c43f6abf2da9ddd29a9f09"
        },
        "date": 1681489847285,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 551.2524800133959,
            "unit": "iter/sec",
            "range": "stddev: 0.00005169931974898513",
            "extra": "mean: 1.8140507957001826 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 299.1350778980784,
            "unit": "iter/sec",
            "range": "stddev: 0.005318932439018302",
            "extra": "mean: 3.3429713660686793 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.28213189115367,
            "unit": "iter/sec",
            "range": "stddev: 0.0004199948295769795",
            "extra": "mean: 15.087022270831104 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 87.41569887995396,
            "unit": "iter/sec",
            "range": "stddev: 0.000053743746022170705",
            "extra": "mean: 11.439592805558618 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68406.5426162582,
            "unit": "iter/sec",
            "range": "stddev: 5.216521854123902e-7",
            "extra": "mean: 14.6184847494738 usec\nrounds: 11934"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7184578219510636,
            "unit": "iter/sec",
            "range": "stddev: 0.0006390336529924833",
            "extra": "mean: 1.391870155000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.09551194879174,
            "unit": "iter/sec",
            "range": "stddev: 0.007509095657808914",
            "extra": "mean: 11.099332012990587 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.84674787556764,
            "unit": "iter/sec",
            "range": "stddev: 0.000635779717620933",
            "extra": "mean: 10.11667072000023 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.55767457997709,
            "unit": "iter/sec",
            "range": "stddev: 0.0006521458707776697",
            "extra": "mean: 9.944541818184792 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2139.641355300174,
            "unit": "iter/sec",
            "range": "stddev: 0.00017032491244922405",
            "extra": "mean: 467.36804629564114 usec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.291521869408793,
            "unit": "iter/sec",
            "range": "stddev: 0.00024264640837051075",
            "extra": "mean: 88.56202127272313 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 92.6352639471657,
            "unit": "iter/sec",
            "range": "stddev: 0.009261877665336196",
            "extra": "mean: 10.795025105885676 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.87525964519672,
            "unit": "iter/sec",
            "range": "stddev: 0.014594505438098754",
            "extra": "mean: 25.07820660975828 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 102.11810211971545,
            "unit": "iter/sec",
            "range": "stddev: 0.0007378849797515571",
            "extra": "mean: 9.792583089995901 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.760276436127108,
            "unit": "iter/sec",
            "range": "stddev: 0.0008203722455259819",
            "extra": "mean: 173.6027794999965 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9335319595093605,
            "unit": "iter/sec",
            "range": "stddev: 0.002601419821693464",
            "extra": "mean: 1.0712006052000334 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.21914842850579,
            "unit": "iter/sec",
            "range": "stddev: 0.000278594142181095",
            "extra": "mean: 20.31729584782575 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 241.9981414300773,
            "unit": "iter/sec",
            "range": "stddev: 0.004146736273718114",
            "extra": "mean: 4.132263140909034 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.66388491810713,
            "unit": "iter/sec",
            "range": "stddev: 0.000052068815292945145",
            "extra": "mean: 5.190386358216827 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.56752727225665,
            "unit": "iter/sec",
            "range": "stddev: 0.0005634824716212277",
            "extra": "mean: 11.164760605261767 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6313438.58698056,
            "unit": "iter/sec",
            "range": "stddev: 1.526907216216373e-8",
            "extra": "mean: 158.39229070227734 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.54424610285728,
            "unit": "iter/sec",
            "range": "stddev: 0.015727039631131996",
            "extra": "mean: 25.944209606057647 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.98245513438664,
            "unit": "iter/sec",
            "range": "stddev: 0.00039520232231859915",
            "extra": "mean: 3.9843422499973458 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.59624170835653,
            "unit": "iter/sec",
            "range": "stddev: 0.0006581165689435358",
            "extra": "mean: 10.35236964000319 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1189.7768464287187,
            "unit": "iter/sec",
            "range": "stddev: 0.000019971456501314393",
            "extra": "mean: 840.4937472112015 usec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1615014.050032376,
            "unit": "iter/sec",
            "range": "stddev: 3.8969727620892557e-7",
            "extra": "mean: 619.189659668876 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140046.20825837585,
            "unit": "iter/sec",
            "range": "stddev: 4.270032029916537e-7",
            "extra": "mean: 7.140500356532803 usec\nrounds: 40651"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5451527027457974,
            "unit": "iter/sec",
            "range": "stddev: 0.0023739299317001084",
            "extra": "mean: 392.90373380000574 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.06654788232887,
            "unit": "iter/sec",
            "range": "stddev: 0.00017067032803461763",
            "extra": "mean: 62.24112406249205 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12542233.401401062,
            "unit": "iter/sec",
            "range": "stddev: 3.5991271204387703e-9",
            "extra": "mean: 79.73061638983015 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7955.333971401685,
            "unit": "iter/sec",
            "range": "stddev: 0.000035901091831244134",
            "extra": "mean: 125.70182516470841 usec\nrounds: 3346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.49472582736726,
            "unit": "iter/sec",
            "range": "stddev: 0.00007911910722168666",
            "extra": "mean: 6.64475113331946 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5912938.993108082,
            "unit": "iter/sec",
            "range": "stddev: 8.790977703470511e-9",
            "extra": "mean: 169.12063546815324 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.75503868476747,
            "unit": "iter/sec",
            "range": "stddev: 0.0007836977582647035",
            "extra": "mean: 21.855516435896156 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 103.82578997920736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000590058404344119",
            "extra": "mean: 9.631518336631627 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 245.28082900571917,
            "unit": "iter/sec",
            "range": "stddev: 0.007115303272130193",
            "extra": "mean: 4.076959475608602 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2520866.0713903382,
            "unit": "iter/sec",
            "range": "stddev: 1.6762296086329403e-8",
            "extra": "mean: 396.6890630758772 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 690.3159688453195,
            "unit": "iter/sec",
            "range": "stddev: 0.00004880314484795864",
            "extra": "mean: 1.448612005416424 msec\nrounds: 554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.09237852473063,
            "unit": "iter/sec",
            "range": "stddev: 0.0007023273387086286",
            "extra": "mean: 9.795050467530857 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 178.0246679036336,
            "unit": "iter/sec",
            "range": "stddev: 0.0038247208050441166",
            "extra": "mean: 5.617199075699494 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.37948848745675,
            "unit": "iter/sec",
            "range": "stddev: 0.0001947234509187274",
            "extra": "mean: 9.226838158732724 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.928381705281903,
            "unit": "iter/sec",
            "range": "stddev: 0.001993505576547638",
            "extra": "mean: 1.0771431559999882 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.71711539344622,
            "unit": "iter/sec",
            "range": "stddev: 0.0007118640725352278",
            "extra": "mean: 9.831187171715955 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.32175323126953,
            "unit": "iter/sec",
            "range": "stddev: 0.00015426277645468338",
            "extra": "mean: 6.122883083332836 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 282.0176214345446,
            "unit": "iter/sec",
            "range": "stddev: 0.00023009832315440615",
            "extra": "mean: 3.54587771825491 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 745.7819880635647,
            "unit": "iter/sec",
            "range": "stddev: 0.000010071630923800084",
            "extra": "mean: 1.34087443248196 msec\nrounds: 548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.34569439124178,
            "unit": "iter/sec",
            "range": "stddev: 0.00011285814226997173",
            "extra": "mean: 8.379020333333328 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2361.2594472430665,
            "unit": "iter/sec",
            "range": "stddev: 0.00007961938498882364",
            "extra": "mean: 423.5028053217825 usec\nrounds: 1541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.54279780444409,
            "unit": "iter/sec",
            "range": "stddev: 0.00009808640514747752",
            "extra": "mean: 8.96516870370413 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.69458770273594,
            "unit": "iter/sec",
            "range": "stddev: 0.00006998011792004353",
            "extra": "mean: 13.38785085714278 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 283.33098608478144,
            "unit": "iter/sec",
            "range": "stddev: 0.00022143478158434093",
            "extra": "mean: 3.52944100403042 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2526458.730465394,
            "unit": "iter/sec",
            "range": "stddev: 1.463794359237231e-8",
            "extra": "mean: 395.8109380300731 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2274.7000032209503,
            "unit": "iter/sec",
            "range": "stddev: 0.00008762725319487721",
            "extra": "mean: 439.61841059656695 usec\nrounds: 1359"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2273.5895414864553,
            "unit": "iter/sec",
            "range": "stddev: 0.00008092064672187595",
            "extra": "mean: 439.8331280791377 usec\nrounds: 1624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7174311.83984074,
            "unit": "iter/sec",
            "range": "stddev: 4.100255474720974e-9",
            "extra": "mean: 139.38619094404706 nsec\nrounds: 59881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 88.65962490800241,
            "unit": "iter/sec",
            "range": "stddev: 0.018888714979209992",
            "extra": "mean: 11.27909125532224 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 102.58555286724896,
            "unit": "iter/sec",
            "range": "stddev: 0.000702742941132981",
            "extra": "mean: 9.747961306930343 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.06724357483927,
            "unit": "iter/sec",
            "range": "stddev: 0.00026326482776573636",
            "extra": "mean: 3.7304072913362836 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 269.3193252229708,
            "unit": "iter/sec",
            "range": "stddev: 0.0003139232364536507",
            "extra": "mean: 3.713064404762246 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.35994092868208,
            "unit": "iter/sec",
            "range": "stddev: 0.000052768306262962026",
            "extra": "mean: 6.159154741496598 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.05867549349652,
            "unit": "iter/sec",
            "range": "stddev: 0.014109887699049563",
            "extra": "mean: 11.896452021509289 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 488595.55356730416,
            "unit": "iter/sec",
            "range": "stddev: 3.223231823392603e-7",
            "extra": "mean: 2.046682563316143 usec\nrounds: 2013"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.55106426838694,
            "unit": "iter/sec",
            "range": "stddev: 0.0007466349116228975",
            "extra": "mean: 10.357213642101957 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18104737245876643,
            "unit": "iter/sec",
            "range": "stddev: 0.007499784460309435",
            "extra": "mean: 5.523416255200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2311.674189035799,
            "unit": "iter/sec",
            "range": "stddev: 0.00007864465488987707",
            "extra": "mean: 432.58691243903223 usec\nrounds: 1439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1791.501939990288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071096210865158356",
            "extra": "mean: 558.1908552135986 usec\nrounds: 1333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11588.667049368554,
            "unit": "iter/sec",
            "range": "stddev: 0.000012565211727430546",
            "extra": "mean: 86.2912012002699 usec\nrounds: 4831"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2331.6926652353177,
            "unit": "iter/sec",
            "range": "stddev: 0.00007751618005219861",
            "extra": "mean: 428.8729878125163 usec\nrounds: 1477"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7938609720607102,
            "unit": "iter/sec",
            "range": "stddev: 0.001332309800301117",
            "extra": "mean: 557.456801599983 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 281.873477391572,
            "unit": "iter/sec",
            "range": "stddev: 0.00023120551665726277",
            "extra": "mean: 3.547691003970634 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8508196661212957,
            "unit": "iter/sec",
            "range": "stddev: 0.001701452092035165",
            "extra": "mean: 1.1753371951999951 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2355.2569468021898,
            "unit": "iter/sec",
            "range": "stddev: 0.00008365369277476837",
            "extra": "mean: 424.58212525717545 usec\nrounds: 1461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.93062888134982,
            "unit": "iter/sec",
            "range": "stddev: 0.0007867538551017304",
            "extra": "mean: 10.316656474230381 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 87.26382829321606,
            "unit": "iter/sec",
            "range": "stddev: 0.01448474866916064",
            "extra": "mean: 11.45950182978324 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.30229797467907,
            "unit": "iter/sec",
            "range": "stddev: 0.0006308246722562217",
            "extra": "mean: 36.626953560005404 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.9988222096785,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940408882280944",
            "extra": "mean: 10.416794466663584 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13434.592813216519,
            "unit": "iter/sec",
            "range": "stddev: 0.000001872121613280985",
            "extra": "mean: 74.43470850982787 usec\nrounds: 7321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.04638412655532,
            "unit": "iter/sec",
            "range": "stddev: 0.00008135589856188357",
            "extra": "mean: 10.199254250001001 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.91091959139357,
            "unit": "iter/sec",
            "range": "stddev: 0.00034853993766808096",
            "extra": "mean: 17.267900545454555 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9693.780697559327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018334841655941372",
            "extra": "mean: 103.15892541820935 usec\nrounds: 4961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2303.947788465164,
            "unit": "iter/sec",
            "range": "stddev: 0.00009980753128122498",
            "extra": "mean: 434.0376136154441 usec\nrounds: 1087"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 724537.4541065531,
            "unit": "iter/sec",
            "range": "stddev: 3.518533127885353e-7",
            "extra": "mean: 1.38019089880333 usec\nrounds: 1692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4735.232067422245,
            "unit": "iter/sec",
            "range": "stddev: 0.000022387418761191123",
            "extra": "mean: 211.18289151652453 usec\nrounds: 2157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2519067.716873991,
            "unit": "iter/sec",
            "range": "stddev: 1.631323869639178e-8",
            "extra": "mean: 396.97225814976315 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.84148031673107,
            "unit": "iter/sec",
            "range": "stddev: 0.000031833425186108433",
            "extra": "mean: 7.527769169808418 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.1344263564648,
            "unit": "iter/sec",
            "range": "stddev: 0.00024164689096185343",
            "extra": "mean: 3.6345869662431762 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.75493212473437,
            "unit": "iter/sec",
            "range": "stddev: 0.0006247360075097961",
            "extra": "mean: 10.3353904347824 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 304.28137719866277,
            "unit": "iter/sec",
            "range": "stddev: 0.00010538800307343402",
            "extra": "mean: 3.28643181914846 msec\nrounds: 282"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "27a0d12a356bb4e9ac997a33d032755533ba7763",
          "message": "fix(impala): expose `hdfs_connect` function as `ibis.impala.hdfs_connect`",
          "timestamp": "2023-04-14T11:30:27-05:00",
          "tree_id": "b9c610e1de55415c55e1c874356c2ddfa9324194",
          "url": "https://github.com/ibis-project/ibis/commit/27a0d12a356bb4e9ac997a33d032755533ba7763"
        },
        "date": 1681490049776,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.03406454185468,
            "unit": "iter/sec",
            "range": "stddev: 0.005674901364233331",
            "extra": "mean: 10.984898949999433 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.052554103699716,
            "unit": "iter/sec",
            "range": "stddev: 0.0005600264597359673",
            "extra": "mean: 35.64737799999875 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 183.29720079219638,
            "unit": "iter/sec",
            "range": "stddev: 0.004250708755305246",
            "extra": "mean: 5.4556206842116355 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12883847.36319236,
            "unit": "iter/sec",
            "range": "stddev: 2.6088767775234534e-9",
            "extra": "mean: 77.61656683827849 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.68665023042966,
            "unit": "iter/sec",
            "range": "stddev: 0.0001843671817726773",
            "extra": "mean: 20.970229512197587 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7714.145908514462,
            "unit": "iter/sec",
            "range": "stddev: 0.00001450570669513654",
            "extra": "mean: 129.63197894614018 usec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.51110635504895,
            "unit": "iter/sec",
            "range": "stddev: 0.0002954093105197644",
            "extra": "mean: 3.975967560606794 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 102.48668832432293,
            "unit": "iter/sec",
            "range": "stddev: 0.000094852118623848",
            "extra": "mean: 9.757364750000145 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 269.1001276013273,
            "unit": "iter/sec",
            "range": "stddev: 0.0002746471077774998",
            "extra": "mean: 3.716088910524425 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 109.34643601996261,
            "unit": "iter/sec",
            "range": "stddev: 0.00013199958698772115",
            "extra": "mean: 9.145245482142984 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.33999999941062,
            "unit": "iter/sec",
            "range": "stddev: 0.00007575012166727796",
            "extra": "mean: 6.159911297299684 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.92011985167785,
            "unit": "iter/sec",
            "range": "stddev: 0.00004256856398460773",
            "extra": "mean: 10.109166886366628 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1742.472093377966,
            "unit": "iter/sec",
            "range": "stddev: 0.003635362234807858",
            "extra": "mean: 573.8972829466637 usec\nrounds: 516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5824890.6882785065,
            "unit": "iter/sec",
            "range": "stddev: 8.300612709302852e-9",
            "extra": "mean: 171.6770414274598 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 356.99254143946143,
            "unit": "iter/sec",
            "range": "stddev: 0.0001552909219317796",
            "extra": "mean: 2.8011789713247532 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.72964338359158,
            "unit": "iter/sec",
            "range": "stddev: 0.00009653751527942014",
            "extra": "mean: 13.381570615384074 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2390.695609812177,
            "unit": "iter/sec",
            "range": "stddev: 0.00007686169521905563",
            "extra": "mean: 418.288298976951 usec\nrounds: 1368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 267.5758365215153,
            "unit": "iter/sec",
            "range": "stddev: 0.0002675125097531134",
            "extra": "mean: 3.737258240504806 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.985410393013817,
            "unit": "iter/sec",
            "range": "stddev: 0.00019855718471734984",
            "extra": "mean: 62.5570426666703 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.48860543560413,
            "unit": "iter/sec",
            "range": "stddev: 0.00006693393520314629",
            "extra": "mean: 9.303311694736749 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11588.25573101863,
            "unit": "iter/sec",
            "range": "stddev: 0.000011671420176023292",
            "extra": "mean: 86.29426405591569 usec\nrounds: 4927"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1749.3959425382677,
            "unit": "iter/sec",
            "range": "stddev: 0.000005788955039755102",
            "extra": "mean: 571.6258827884672 usec\nrounds: 1348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.570481942687427,
            "unit": "iter/sec",
            "range": "stddev: 0.0019714878327413725",
            "extra": "mean: 389.03210460000537 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6384230.769334982,
            "unit": "iter/sec",
            "range": "stddev: 7.088182741332253e-9",
            "extra": "mean: 156.63594192165544 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.69299912169434,
            "unit": "iter/sec",
            "range": "stddev: 0.0000585789988231777",
            "extra": "mean: 8.569494378639982 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.44166336568195,
            "unit": "iter/sec",
            "range": "stddev: 0.000601237623996724",
            "extra": "mean: 10.262550591395085 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.89895927768902,
            "unit": "iter/sec",
            "range": "stddev: 0.0007116572583983395",
            "extra": "mean: 9.910904999999559 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.22665450148936,
            "unit": "iter/sec",
            "range": "stddev: 0.0004108934695604461",
            "extra": "mean: 20.31419786956566 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2348.923665616715,
            "unit": "iter/sec",
            "range": "stddev: 0.00008200281569276936",
            "extra": "mean: 425.7269040445586 usec\nrounds: 1459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141702.6657238649,
            "unit": "iter/sec",
            "range": "stddev: 2.974041642642621e-7",
            "extra": "mean: 7.057030260451796 usec\nrounds: 43291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 241.46280122790444,
            "unit": "iter/sec",
            "range": "stddev: 0.004401249795154533",
            "extra": "mean: 4.141424662162148 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 298.0726210400664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000590312865283006",
            "extra": "mean: 3.3548871295548537 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.68763750059733,
            "unit": "iter/sec",
            "range": "stddev: 0.0006849616023634048",
            "extra": "mean: 10.342583869564733 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 679.1082060752572,
            "unit": "iter/sec",
            "range": "stddev: 0.000015824343778702807",
            "extra": "mean: 1.472519388006309 msec\nrounds: 567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4697.648526409731,
            "unit": "iter/sec",
            "range": "stddev: 0.000020942850162888683",
            "extra": "mean: 212.87246041888739 usec\nrounds: 619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.74142378138696,
            "unit": "iter/sec",
            "range": "stddev: 0.0005951769624353589",
            "extra": "mean: 10.127461826092311 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.04378558101861,
            "unit": "iter/sec",
            "range": "stddev: 0.0007436011695129413",
            "extra": "mean: 10.52146643662005 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 95.09839117292148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005869812409398842",
            "extra": "mean: 10.51542500000507 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.751429426000579,
            "unit": "iter/sec",
            "range": "stddev: 0.0000799500039041908",
            "extra": "mean: 173.86982016666744 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.8268136936774,
            "unit": "iter/sec",
            "range": "stddev: 0.00007102105718337339",
            "extra": "mean: 6.543354375001087 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9379707052978009,
            "unit": "iter/sec",
            "range": "stddev: 0.003502864094474729",
            "extra": "mean: 1.0661313774000063 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.239103092359,
            "unit": "iter/sec",
            "range": "stddev: 0.00005690249061814031",
            "extra": "mean: 9.071191364485195 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 178.7001632153844,
            "unit": "iter/sec",
            "range": "stddev: 0.0036711647177317484",
            "extra": "mean: 5.595965789884121 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7160631.993623845,
            "unit": "iter/sec",
            "range": "stddev: 1.944745717435501e-8",
            "extra": "mean: 139.65247772693388 nsec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1850150.8266214535,
            "unit": "iter/sec",
            "range": "stddev: 1.0817584362915455e-7",
            "extra": "mean: 540.4964749960913 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 94.57858536806263,
            "unit": "iter/sec",
            "range": "stddev: 0.0006682480084512681",
            "extra": "mean: 10.573217987014644 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2501992.305472881,
            "unit": "iter/sec",
            "range": "stddev: 1.5375825386858683e-8",
            "extra": "mean: 399.68148495601963 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 275.41121245331436,
            "unit": "iter/sec",
            "range": "stddev: 0.0003163135601009498",
            "extra": "mean: 3.6309342350014617 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.96127839945585,
            "unit": "iter/sec",
            "range": "stddev: 0.000791671247896594",
            "extra": "mean: 10.003873659997566 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.05615261587232,
            "unit": "iter/sec",
            "range": "stddev: 0.03054918941054072",
            "extra": "mean: 27.73451761904815 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 741223.8779151418,
            "unit": "iter/sec",
            "range": "stddev: 6.51072035505544e-7",
            "extra": "mean: 1.3491200564298118 usec\nrounds: 24097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.78639914768418,
            "unit": "iter/sec",
            "range": "stddev: 0.0005914178633547178",
            "extra": "mean: 10.550036808993308 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.78634271960475,
            "unit": "iter/sec",
            "range": "stddev: 0.000697893833047501",
            "extra": "mean: 10.439901677082494 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.76423927824601,
            "unit": "iter/sec",
            "range": "stddev: 0.0007435765200407826",
            "extra": "mean: 23.384024055554658 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18193035419326606,
            "unit": "iter/sec",
            "range": "stddev: 0.11228412763194233",
            "extra": "mean: 5.496608877799974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.54791487432904,
            "unit": "iter/sec",
            "range": "stddev: 0.0005607058467267719",
            "extra": "mean: 11.422316584414986 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 67632.62273556813,
            "unit": "iter/sec",
            "range": "stddev: 4.6624301818000145e-7",
            "extra": "mean: 14.785764022634865 usec\nrounds: 13870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2328.865454162211,
            "unit": "iter/sec",
            "range": "stddev: 0.00009654285404752671",
            "extra": "mean: 429.3936338025768 usec\nrounds: 1562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2305.743555668797,
            "unit": "iter/sec",
            "range": "stddev: 0.00008248818676153927",
            "extra": "mean: 433.6995749338409 usec\nrounds: 1875"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 280.12592565382727,
            "unit": "iter/sec",
            "range": "stddev: 0.00023455289730491463",
            "extra": "mean: 3.5698230989007973 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.70910144424171,
            "unit": "iter/sec",
            "range": "stddev: 0.0007150333313313889",
            "extra": "mean: 9.929589140000985 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 276.45536939455263,
            "unit": "iter/sec",
            "range": "stddev: 0.0002549058089735553",
            "extra": "mean: 3.6172203932592684 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2245.3792266917267,
            "unit": "iter/sec",
            "range": "stddev: 0.00008579266518492176",
            "extra": "mean: 445.3590681309409 usec\nrounds: 1776"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.717405855362664,
            "unit": "iter/sec",
            "range": "stddev: 0.00007927166149424197",
            "extra": "mean: 16.74553650943964 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7135206442213069,
            "unit": "iter/sec",
            "range": "stddev: 0.0006709046928714407",
            "extra": "mean: 1.4015011451999952 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1175.9036045657915,
            "unit": "iter/sec",
            "range": "stddev: 0.000011690049268952367",
            "extra": "mean: 850.4098432194661 usec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.229383280417323,
            "unit": "iter/sec",
            "range": "stddev: 0.00030592077788020263",
            "extra": "mean: 89.05208550000054 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8001375956773267,
            "unit": "iter/sec",
            "range": "stddev: 0.0020885768571962363",
            "extra": "mean: 555.5130909999889 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8599816960842253,
            "unit": "iter/sec",
            "range": "stddev: 0.0027620436772979704",
            "extra": "mean: 1.1628154465999956 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 492630.0144096646,
            "unit": "iter/sec",
            "range": "stddev: 2.532770490524585e-7",
            "extra": "mean: 2.0299209766955313 usec\nrounds: 2088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2326.3245180540953,
            "unit": "iter/sec",
            "range": "stddev: 0.00007486677651614191",
            "extra": "mean: 429.86264050403065 usec\nrounds: 1427"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13722.452496002388,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017085058657412619",
            "extra": "mean: 72.87327103455588 usec\nrounds: 7571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 156.44183644510196,
            "unit": "iter/sec",
            "range": "stddev: 0.000059907958507775166",
            "extra": "mean: 6.392152014598196 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.64173837552832,
            "unit": "iter/sec",
            "range": "stddev: 0.0007019018331487392",
            "extra": "mean: 9.936235364582657 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9409238417909791,
            "unit": "iter/sec",
            "range": "stddev: 0.001982466100515076",
            "extra": "mean: 1.0627852707999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 271.6599205954345,
            "unit": "iter/sec",
            "range": "stddev: 0.0002497379718435184",
            "extra": "mean: 3.681073004100723 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9691.543186546345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016905258210734612",
            "extra": "mean: 103.18274197943884 usec\nrounds: 5174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.17945340812776,
            "unit": "iter/sec",
            "range": "stddev: 0.0005926613230667405",
            "extra": "mean: 10.08273352631776 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1840928.686472143,
            "unit": "iter/sec",
            "range": "stddev: 7.976616119207916e-8",
            "extra": "mean: 543.2040944053875 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2384.6466296847443,
            "unit": "iter/sec",
            "range": "stddev: 0.0000754131055360955",
            "extra": "mean: 419.3493440712439 usec\nrounds: 1459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1621460.907349995,
            "unit": "iter/sec",
            "range": "stddev: 7.957959569978085e-8",
            "extra": "mean: 616.7277887903765 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.6497677603539,
            "unit": "iter/sec",
            "range": "stddev: 0.00014933807835895143",
            "extra": "mean: 7.5959116146739465 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 529.4432736651421,
            "unit": "iter/sec",
            "range": "stddev: 0.000027253881356494268",
            "extra": "mean: 1.8887764747247913 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.11926374742325,
            "unit": "iter/sec",
            "range": "stddev: 0.0007093941756522985",
            "extra": "mean: 9.889312510203897 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 270.88689642009444,
            "unit": "iter/sec",
            "range": "stddev: 0.00024665547488376857",
            "extra": "mean: 3.6915776038468424 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 752.9566126932185,
            "unit": "iter/sec",
            "range": "stddev: 0.000011955572129654601",
            "extra": "mean: 1.328097772357882 msec\nrounds: 615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 87.72743095224416,
            "unit": "iter/sec",
            "range": "stddev: 0.000038952140963524974",
            "extra": "mean: 11.398943171427943 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.58940828726575,
            "unit": "iter/sec",
            "range": "stddev: 0.00009636696758909282",
            "extra": "mean: 14.579510524595952 msec\nrounds: 61"
          }
        ]
      }
    ]
  }
}