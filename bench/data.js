window.BENCHMARK_DATA = {
  "lastUpdate": 1680395800511,
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
          "id": "7a7e13ff7638f7ff022d99020beac84e2c4ef821",
          "message": "chore(flake/nixpkgs): `3364b5b1` -> `45c67117`",
          "timestamp": "2023-04-02T00:27:50Z",
          "tree_id": "768c20e8804b107677d1c095c86b6baa8594be81",
          "url": "https://github.com/ibis-project/ibis/commit/7a7e13ff7638f7ff022d99020beac84e2c4ef821"
        },
        "date": 1680395708834,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 56.59311835297867,
            "unit": "iter/sec",
            "range": "stddev: 0.0009706234887839907",
            "extra": "mean: 17.669992909082502 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 242.56318003225704,
            "unit": "iter/sec",
            "range": "stddev: 0.00042035574988752883",
            "extra": "mean: 4.12263724390081 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2843867371241586,
            "unit": "iter/sec",
            "range": "stddev: 0.013615624679461709",
            "extra": "mean: 778.5816928000031 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.06015218843817,
            "unit": "iter/sec",
            "range": "stddev: 0.0007615721338834189",
            "extra": "mean: 12.810633491797295 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8892.49671090844,
            "unit": "iter/sec",
            "range": "stddev: 0.000033074971016379515",
            "extra": "mean: 112.45435702813343 usec\nrounds: 619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 130.36714889428447,
            "unit": "iter/sec",
            "range": "stddev: 0.0005561001187789162",
            "extra": "mean: 7.670644088495839 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.715650784391066,
            "unit": "iter/sec",
            "range": "stddev: 0.0021873887126046855",
            "extra": "mean: 28.80545164515891 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.45066546300745,
            "unit": "iter/sec",
            "range": "stddev: 0.0012496884422781081",
            "extra": "mean: 29.894771483870294 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 448444.4224166854,
            "unit": "iter/sec",
            "range": "stddev: 0.000002686150322158287",
            "extra": "mean: 2.2299307339156074 usec\nrounds: 2411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 94.38612852212582,
            "unit": "iter/sec",
            "range": "stddev: 0.0006769941483907129",
            "extra": "mean: 10.594777173910485 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 61096.48308478039,
            "unit": "iter/sec",
            "range": "stddev: 0.000009787901118164412",
            "extra": "mean: 16.367554227505245 usec\nrounds: 8197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 49.568660873279846,
            "unit": "iter/sec",
            "range": "stddev: 0.0012184804694819473",
            "extra": "mean: 20.174037030301406 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.940287534758795,
            "unit": "iter/sec",
            "range": "stddev: 0.020129386189379064",
            "extra": "mean: 31.30842197058361 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 79.01022001147909,
            "unit": "iter/sec",
            "range": "stddev: 0.0008954973310820229",
            "extra": "mean: 12.656590499997519 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1635964.8486461667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036859094645012277",
            "extra": "mean: 611.2600773956385 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 85.01827085149311,
            "unit": "iter/sec",
            "range": "stddev: 0.0009463201643270914",
            "extra": "mean: 11.762177588235879 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 574033.9641682178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000346055789299188",
            "extra": "mean: 1.7420571994359464 usec\nrounds: 18182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.424108605554753,
            "unit": "iter/sec",
            "range": "stddev: 0.004135878410146892",
            "extra": "mean: 118.70692162499097 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4511372.419910107,
            "unit": "iter/sec",
            "range": "stddev: 2.3468839569131242e-7",
            "extra": "mean: 221.66203694188553 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 78.53531635009824,
            "unit": "iter/sec",
            "range": "stddev: 0.001354442506928717",
            "extra": "mean: 12.73312499999561 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 93.13556652560806,
            "unit": "iter/sec",
            "range": "stddev: 0.01327737047045813",
            "extra": "mean: 10.737036744443332 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 436.97635464545823,
            "unit": "iter/sec",
            "range": "stddev: 0.00026693520485526333",
            "extra": "mean: 2.288453343914575 msec\nrounds: 378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 214.76056398892027,
            "unit": "iter/sec",
            "range": "stddev: 0.0005432225924665194",
            "extra": "mean: 4.6563483603609415 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 221.91022327620365,
            "unit": "iter/sec",
            "range": "stddev: 0.0005128491881751531",
            "extra": "mean: 4.5063268615404715 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 82.86100916235031,
            "unit": "iter/sec",
            "range": "stddev: 0.0010776905896791858",
            "extra": "mean: 12.068402377778082 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4144.613663997459,
            "unit": "iter/sec",
            "range": "stddev: 0.00005659370813128498",
            "extra": "mean: 241.27701182056737 usec\nrounds: 2115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 223.71735374003026,
            "unit": "iter/sec",
            "range": "stddev: 0.0003187579095736028",
            "extra": "mean: 4.469925927883294 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 543.4607199750789,
            "unit": "iter/sec",
            "range": "stddev: 0.00023422276109606545",
            "extra": "mean: 1.8400593883691472 msec\nrounds: 533"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 94.35854970917673,
            "unit": "iter/sec",
            "range": "stddev: 0.0011264155520710707",
            "extra": "mean: 10.597873781253616 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.301073182102891,
            "unit": "iter/sec",
            "range": "stddev: 0.006156402900129506",
            "extra": "mean: 232.50011280000535 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 141.52693162583333,
            "unit": "iter/sec",
            "range": "stddev: 0.0034847555825186704",
            "extra": "mean: 7.065792980263178 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.07917696641348,
            "unit": "iter/sec",
            "range": "stddev: 0.0009810547699487247",
            "extra": "mean: 17.217874843135064 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 10.782720202418158,
            "unit": "iter/sec",
            "range": "stddev: 0.04207954004782738",
            "extra": "mean: 92.74097641666874 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 234.45223266595593,
            "unit": "iter/sec",
            "range": "stddev: 0.0004117301182617194",
            "extra": "mean: 4.265261152043645 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6321.232487241682,
            "unit": "iter/sec",
            "range": "stddev: 0.000058392261048730524",
            "extra": "mean: 158.19699750299134 usec\nrounds: 3204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7971630060985813,
            "unit": "iter/sec",
            "range": "stddev: 0.011409787026592505",
            "extra": "mean: 556.4325531999884 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 72.50503101352109,
            "unit": "iter/sec",
            "range": "stddev: 0.0009642013544935472",
            "extra": "mean: 13.792146365864117 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5330158440803867,
            "unit": "iter/sec",
            "range": "stddev: 0.027339401356698767",
            "extra": "mean: 1.8761168380000073 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3620.2297335340254,
            "unit": "iter/sec",
            "range": "stddev: 0.000091857286105904",
            "extra": "mean: 276.2255640124285 usec\nrounds: 1695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3943.8952263736187,
            "unit": "iter/sec",
            "range": "stddev: 0.00010716898980302194",
            "extra": "mean: 253.55643154838378 usec\nrounds: 2352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 89.64200494358697,
            "unit": "iter/sec",
            "range": "stddev: 0.0006310834231437111",
            "extra": "mean: 11.155484536845362 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3752.9823872917773,
            "unit": "iter/sec",
            "range": "stddev: 0.00008204092796266181",
            "extra": "mean: 266.45475432716296 usec\nrounds: 1502"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 571.9178381557654,
            "unit": "iter/sec",
            "range": "stddev: 0.00025588783342946455",
            "extra": "mean: 1.7485029024879686 msec\nrounds: 482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 138.59001756994292,
            "unit": "iter/sec",
            "range": "stddev: 0.0007359980039332171",
            "extra": "mean: 7.21552690110112 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10565.930992023708,
            "unit": "iter/sec",
            "range": "stddev: 0.00006350063988938676",
            "extra": "mean: 94.64381328582466 usec\nrounds: 4697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 132.83886174762767,
            "unit": "iter/sec",
            "range": "stddev: 0.0005374873254340365",
            "extra": "mean: 7.5279175599971495 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 94.12616639971291,
            "unit": "iter/sec",
            "range": "stddev: 0.0010107799124277098",
            "extra": "mean: 10.624038333330551 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09977759744747287,
            "unit": "iter/sec",
            "range": "stddev: 0.13348186348256494",
            "extra": "mean: 10.022289828400028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 86.91383961350604,
            "unit": "iter/sec",
            "range": "stddev: 0.0012498705528988755",
            "extra": "mean: 11.505647483149557 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1385.557673423092,
            "unit": "iter/sec",
            "range": "stddev: 0.00010637463736162453",
            "extra": "mean: 721.731053987416 usec\nrounds: 1204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 127.24077565324961,
            "unit": "iter/sec",
            "range": "stddev: 0.0012238297379603403",
            "extra": "mean: 7.859115875913484 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1300587.684226321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013913071765359566",
            "extra": "mean: 768.8831842159638 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120383.94512328951,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054098752540746345",
            "extra": "mean: 8.306755514415682 usec\nrounds: 26386"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3514.086702660376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000943748669536205",
            "extra": "mean: 284.56896047639907 usec\nrounds: 1594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3566.445395391851,
            "unit": "iter/sec",
            "range": "stddev: 0.00009155034816234591",
            "extra": "mean: 280.391226875949 usec\nrounds: 1600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 233.6580286674421,
            "unit": "iter/sec",
            "range": "stddev: 0.000442891552941563",
            "extra": "mean: 4.279758781254068 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.056278736512155,
            "unit": "iter/sec",
            "range": "stddev: 0.0014598189187539942",
            "extra": "mean: 23.777662457135712 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 86.17614440994998,
            "unit": "iter/sec",
            "range": "stddev: 0.0010413198331843013",
            "extra": "mean: 11.60413948485422 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 91.403711540155,
            "unit": "iter/sec",
            "range": "stddev: 0.001179446943370127",
            "extra": "mean: 10.94047477011571 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 75.57236736623769,
            "unit": "iter/sec",
            "range": "stddev: 0.001233578167673973",
            "extra": "mean: 13.232349797298461 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1587252.41782598,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020713933068337306",
            "extra": "mean: 630.0195159694101 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 213.78872821695285,
            "unit": "iter/sec",
            "range": "stddev: 0.0007940745326068185",
            "extra": "mean: 4.677515079210349 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 224.4942293055484,
            "unit": "iter/sec",
            "range": "stddev: 0.0005296810670342263",
            "extra": "mean: 4.454457484690832 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5905314024154973,
            "unit": "iter/sec",
            "range": "stddev: 0.03236903822557826",
            "extra": "mean: 1.6933900482000126 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9832.857257745478,
            "unit": "iter/sec",
            "range": "stddev: 0.000030093823661458826",
            "extra": "mean: 101.69983899769176 usec\nrounds: 4944"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 97.41898624924929,
            "unit": "iter/sec",
            "range": "stddev: 0.0010338200348652981",
            "extra": "mean: 10.264939500001274 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 194.27156696534564,
            "unit": "iter/sec",
            "range": "stddev: 0.0037754088173932044",
            "extra": "mean: 5.147433644669068 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 90.82392191165017,
            "unit": "iter/sec",
            "range": "stddev: 0.001287341602004035",
            "extra": "mean: 11.010315112496016 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5123891.493569374,
            "unit": "iter/sec",
            "range": "stddev: 1.4815866721424074e-7",
            "extra": "mean: 195.1641640450746 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9882871.375072528,
            "unit": "iter/sec",
            "range": "stddev: 6.947419351648912e-8",
            "extra": "mean: 101.1851679586131 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3521.4599604892983,
            "unit": "iter/sec",
            "range": "stddev: 0.00020364035393622676",
            "extra": "mean: 283.9731279696426 usec\nrounds: 1305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1621976.907662811,
            "unit": "iter/sec",
            "range": "stddev: 0.000001385723949120787",
            "extra": "mean: 616.5315888750542 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 278.7446698322081,
            "unit": "iter/sec",
            "range": "stddev: 0.0005276969009039747",
            "extra": "mean: 3.587512545448692 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3513.852619527538,
            "unit": "iter/sec",
            "range": "stddev: 0.00010617144819796494",
            "extra": "mean: 284.5879176726703 usec\nrounds: 1409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5420954040716293,
            "unit": "iter/sec",
            "range": "stddev: 0.019552100743428075",
            "extra": "mean: 1.844693743000016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 188.47800310247666,
            "unit": "iter/sec",
            "range": "stddev: 0.0005612408297248944",
            "extra": "mean: 5.305658928571594 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4985283112232807,
            "unit": "iter/sec",
            "range": "stddev: 0.0943307190437219",
            "extra": "mean: 2.0059041332000107 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 71.08570689190837,
            "unit": "iter/sec",
            "range": "stddev: 0.0005630093840912348",
            "extra": "mean: 14.067525578954738 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 229.45185280280376,
            "unit": "iter/sec",
            "range": "stddev: 0.0004983060331614956",
            "extra": "mean: 4.358212791854957 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5508926.436997114,
            "unit": "iter/sec",
            "range": "stddev: 1.2966524927639915e-7",
            "extra": "mean: 181.5235711415884 nsec\nrounds: 54946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.23707533883034,
            "unit": "iter/sec",
            "range": "stddev: 0.0008159004765826827",
            "extra": "mean: 10.960456549996422 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 83.87487532859839,
            "unit": "iter/sec",
            "range": "stddev: 0.0014086357714378273",
            "extra": "mean: 11.922521447361664 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 92.93225844833512,
            "unit": "iter/sec",
            "range": "stddev: 0.0012284891913305525",
            "extra": "mean: 10.760526180001762 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 882.0346240022378,
            "unit": "iter/sec",
            "range": "stddev: 0.000282069060022473",
            "extra": "mean: 1.1337423416129557 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.30858455565891,
            "unit": "iter/sec",
            "range": "stddev: 0.0033697558440475986",
            "extra": "mean: 49.24026080002477 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.07428170375816,
            "unit": "iter/sec",
            "range": "stddev: 0.004338187437539116",
            "extra": "mean: 31.177627272720173 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3697.004032445818,
            "unit": "iter/sec",
            "range": "stddev: 0.00019156764968905434",
            "extra": "mean: 270.4892911189043 usec\nrounds: 1824"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 78.48392646014824,
            "unit": "iter/sec",
            "range": "stddev: 0.018568086024987173",
            "extra": "mean: 12.741462425529509 msec\nrounds: 94"
          }
        ]
      }
    ]
  }
}