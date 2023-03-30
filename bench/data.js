window.BENCHMARK_DATA = {
  "lastUpdate": 1680200298104,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "679848d0c28d1c18156a929344330902e585fb10",
          "message": "docs(penguins): add citation for palmer penguins data\n\nAdded to examples citations and also to getting started page.",
          "timestamp": "2023-03-30T13:13:13-05:00",
          "tree_id": "aeb6ef4bded7b9a858bd8f68b845cb86d7bb2877",
          "url": "https://github.com/ibis-project/ibis/commit/679848d0c28d1c18156a929344330902e585fb10"
        },
        "date": 1680200211864,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.22746450358774,
            "unit": "iter/sec",
            "range": "stddev: 0.0008196210932390311",
            "extra": "mean: 22.61038500000107 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 93.19184549731659,
            "unit": "iter/sec",
            "range": "stddev: 0.007689494833965831",
            "extra": "mean: 10.73055259999969 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9237762261142146,
            "unit": "iter/sec",
            "range": "stddev: 0.003417414896323477",
            "extra": "mean: 1.0825132448000034 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.00351196316552,
            "unit": "iter/sec",
            "range": "stddev: 0.00007408545248343483",
            "extra": "mean: 10.525926666665933 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9216426412463605,
            "unit": "iter/sec",
            "range": "stddev: 0.00395884934770474",
            "extra": "mean: 1.0850192419999956 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1816967.1392338765,
            "unit": "iter/sec",
            "range": "stddev: 1.0517870052809757e-7",
            "extra": "mean: 550.3676860230117 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.555543817204502,
            "unit": "iter/sec",
            "range": "stddev: 0.0031092473855105066",
            "extra": "mean: 391.30614520000506 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 40.314397472707505,
            "unit": "iter/sec",
            "range": "stddev: 0.011742725485167596",
            "extra": "mean: 24.805033999999413 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.9335525959866,
            "unit": "iter/sec",
            "range": "stddev: 0.00019334129758043106",
            "extra": "mean: 9.907508200001303 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 171.0300580521803,
            "unit": "iter/sec",
            "range": "stddev: 0.003689028234563968",
            "extra": "mean: 5.846925455026775 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 720525.6264344591,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010607449852792944",
            "extra": "mean: 1.387875688680953 usec\nrounds: 21599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.19459236010556,
            "unit": "iter/sec",
            "range": "stddev: 0.006702082554506602",
            "extra": "mean: 3.620635695488885 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.63308407867646,
            "unit": "iter/sec",
            "range": "stddev: 0.0007154604358496846",
            "extra": "mean: 8.429351793103589 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5503241.489841666,
            "unit": "iter/sec",
            "range": "stddev: 1.3294844145050209e-8",
            "extra": "mean: 181.71108824611272 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 300.5986989663813,
            "unit": "iter/sec",
            "range": "stddev: 0.00029551885072731806",
            "extra": "mean: 3.3266943717272683 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.452995603375763,
            "unit": "iter/sec",
            "range": "stddev: 0.00021807272132997756",
            "extra": "mean: 64.71237199999891 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 695.018244311085,
            "unit": "iter/sec",
            "range": "stddev: 0.000041346114721459065",
            "extra": "mean: 1.438811150909022 msec\nrounds: 550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.55012903587787,
            "unit": "iter/sec",
            "range": "stddev: 0.0003094915368697846",
            "extra": "mean: 10.46571061797847 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.36619888586347,
            "unit": "iter/sec",
            "range": "stddev: 0.0006354319194573659",
            "extra": "mean: 8.668050171171377 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1757.5297138582123,
            "unit": "iter/sec",
            "range": "stddev: 0.000006716418211971329",
            "extra": "mean: 568.9804229851413 usec\nrounds: 1253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5783.6114143412005,
            "unit": "iter/sec",
            "range": "stddev: 0.000046022134186715505",
            "extra": "mean: 172.90234913092067 usec\nrounds: 633"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.46979183781363,
            "unit": "iter/sec",
            "range": "stddev: 0.00010651508123829923",
            "extra": "mean: 13.428263666667435 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5600.202342292053,
            "unit": "iter/sec",
            "range": "stddev: 0.00004357766503349063",
            "extra": "mean: 178.56497656310034 usec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.00896044598576,
            "unit": "iter/sec",
            "range": "stddev: 0.00008132616199815557",
            "extra": "mean: 6.578559560344707 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.88183130987346,
            "unit": "iter/sec",
            "range": "stddev: 0.00005345562287108224",
            "extra": "mean: 3.4378221406847174 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6536.370654058105,
            "unit": "iter/sec",
            "range": "stddev: 0.00003272727374627417",
            "extra": "mean: 152.99009999978352 usec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11931.591174469506,
            "unit": "iter/sec",
            "range": "stddev: 0.000002713483020354037",
            "extra": "mean: 83.8111183477137 usec\nrounds: 2687"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1187.9288651313939,
            "unit": "iter/sec",
            "range": "stddev: 0.00004495718192267417",
            "extra": "mean: 841.8012469874553 usec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.19264456153022,
            "unit": "iter/sec",
            "range": "stddev: 0.0003456762644999075",
            "extra": "mean: 7.236275151784583 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.89955971934286,
            "unit": "iter/sec",
            "range": "stddev: 0.0006270931812048175",
            "extra": "mean: 8.271328715517305 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5625.768228237271,
            "unit": "iter/sec",
            "range": "stddev: 0.00006165570890264445",
            "extra": "mean: 177.75350128729553 usec\nrounds: 2719"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.94017081967912,
            "unit": "iter/sec",
            "range": "stddev: 0.00021862526683299698",
            "extra": "mean: 14.505331044444524 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.6688213073258,
            "unit": "iter/sec",
            "range": "stddev: 0.00008860433357417033",
            "extra": "mean: 6.302435423422595 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5799.748207080482,
            "unit": "iter/sec",
            "range": "stddev: 0.00004706844450579244",
            "extra": "mean: 172.4212783546662 usec\nrounds: 2407"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 355.6811601007113,
            "unit": "iter/sec",
            "range": "stddev: 0.000027739431029376914",
            "extra": "mean: 2.8115067992829577 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.8096985603978,
            "unit": "iter/sec",
            "range": "stddev: 0.00022085335856163548",
            "extra": "mean: 3.166463869090938 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.88073909813692,
            "unit": "iter/sec",
            "range": "stddev: 0.0003795090245819539",
            "extra": "mean: 17.89525364444115 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5602.610112140643,
            "unit": "iter/sec",
            "range": "stddev: 0.00002950940464671256",
            "extra": "mean: 178.48823672970533 usec\nrounds: 2336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6362973.593653132,
            "unit": "iter/sec",
            "range": "stddev: 1.078138981483181e-8",
            "extra": "mean: 157.15922520839453 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.7225978474857,
            "unit": "iter/sec",
            "range": "stddev: 0.0002992608142714692",
            "extra": "mean: 3.5495910077521127 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5552.171943625511,
            "unit": "iter/sec",
            "range": "stddev: 0.00004563763371048604",
            "extra": "mean: 180.109695836799 usec\nrounds: 2354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.9475984908724,
            "unit": "iter/sec",
            "range": "stddev: 0.0006570676843859024",
            "extra": "mean: 9.350373585857998 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8447121828110791,
            "unit": "iter/sec",
            "range": "stddev: 0.002568380516123813",
            "extra": "mean: 1.1838351811999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 486831.93941194384,
            "unit": "iter/sec",
            "range": "stddev: 4.1466946329333254e-7",
            "extra": "mean: 2.0540969460794303 usec\nrounds: 2063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.294807108109644,
            "unit": "iter/sec",
            "range": "stddev: 0.00030438065265387174",
            "extra": "mean: 20.70615993478273 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1889551.7921196895,
            "unit": "iter/sec",
            "range": "stddev: 1.0598077121489206e-7",
            "extra": "mean: 529.2260334807786 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.3075454202358,
            "unit": "iter/sec",
            "range": "stddev: 0.0004421676180541089",
            "extra": "mean: 9.679835058825441 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6647471744563016,
            "unit": "iter/sec",
            "range": "stddev: 0.053543272677248635",
            "extra": "mean: 1.5043313284000077 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.165464583990538,
            "unit": "iter/sec",
            "range": "stddev: 0.0004218266951765013",
            "extra": "mean: 36.811444800002846 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.13645219949586,
            "unit": "iter/sec",
            "range": "stddev: 0.0005729331044334337",
            "extra": "mean: 10.622877500001593 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.12777720766174,
            "unit": "iter/sec",
            "range": "stddev: 0.0006235152802548652",
            "extra": "mean: 8.255744661157266 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.10378928355624,
            "unit": "iter/sec",
            "range": "stddev: 0.0004901108240549304",
            "extra": "mean: 15.3600890363624 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.336848265193401,
            "unit": "iter/sec",
            "range": "stddev: 0.00026025629457234985",
            "extra": "mean: 96.74128654545845 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2520133.6773715466,
            "unit": "iter/sec",
            "range": "stddev: 2.0448491136754273e-8",
            "extra": "mean: 396.8043477134392 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5827.64732238537,
            "unit": "iter/sec",
            "range": "stddev: 0.000056498618654643546",
            "extra": "mean: 171.5958335637031 usec\nrounds: 2169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7546987298020782,
            "unit": "iter/sec",
            "range": "stddev: 0.0013377893608525553",
            "extra": "mean: 569.8984008000025 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 306.226970918392,
            "unit": "iter/sec",
            "range": "stddev: 0.0001938415386207302",
            "extra": "mean: 3.265551682142639 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.51757751119321,
            "unit": "iter/sec",
            "range": "stddev: 0.0005519414596780311",
            "extra": "mean: 9.30080479069475 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141390.86511953492,
            "unit": "iter/sec",
            "range": "stddev: 3.58370913737019e-7",
            "extra": "mean: 7.072592696526598 usec\nrounds: 41323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1790367495081655,
            "unit": "iter/sec",
            "range": "stddev: 0.13660219905201987",
            "extra": "mean: 5.585445461600005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5364.300961855029,
            "unit": "iter/sec",
            "range": "stddev: 0.00004430980812142906",
            "extra": "mean: 186.41757931012694 usec\nrounds: 2465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11691.108711718429,
            "unit": "iter/sec",
            "range": "stddev: 0.000011445557967662968",
            "extra": "mean: 85.53508693300091 usec\nrounds: 5556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13375.929942341923,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024829179471608303",
            "extra": "mean: 74.7611571165956 usec\nrounds: 6021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.9618477702245,
            "unit": "iter/sec",
            "range": "stddev: 0.0006467760997359329",
            "extra": "mean: 9.527271301369748 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.476266837950654,
            "unit": "iter/sec",
            "range": "stddev: 0.0004632456880776168",
            "extra": "mean: 182.60614933333366 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.24027447926045,
            "unit": "iter/sec",
            "range": "stddev: 0.00008048067608599558",
            "extra": "mean: 8.989549915093379 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.76161940779167,
            "unit": "iter/sec",
            "range": "stddev: 0.000705179250491185",
            "extra": "mean: 8.868265685184914 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12450131.363176284,
            "unit": "iter/sec",
            "range": "stddev: 4.7140124122743394e-9",
            "extra": "mean: 80.32043765870321 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.46284499809805,
            "unit": "iter/sec",
            "range": "stddev: 0.0007026158722436105",
            "extra": "mean: 8.370803491377766 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.72468011102539,
            "unit": "iter/sec",
            "range": "stddev: 0.0007161949816236008",
            "extra": "mean: 8.35249673728642 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7368445.362159242,
            "unit": "iter/sec",
            "range": "stddev: 6.214002173992504e-9",
            "extra": "mean: 135.71383797402137 nsec\nrounds: 65360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1686247.0452858154,
            "unit": "iter/sec",
            "range": "stddev: 1.16873147347941e-7",
            "extra": "mean: 593.0329145991192 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.90939860466041,
            "unit": "iter/sec",
            "range": "stddev: 0.0007726813143806258",
            "extra": "mean: 9.623768527471288 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5443.283019227468,
            "unit": "iter/sec",
            "range": "stddev: 0.00005744977331095236",
            "extra": "mean: 183.71265952324558 usec\nrounds: 3313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 327.0179394503046,
            "unit": "iter/sec",
            "range": "stddev: 0.000026287368836035598",
            "extra": "mean: 3.0579362150007228 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.2198068807941,
            "unit": "iter/sec",
            "range": "stddev: 0.00003456041090458031",
            "extra": "mean: 5.202377508474733 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 307.0618822154994,
            "unit": "iter/sec",
            "range": "stddev: 0.00023509613897563933",
            "extra": "mean: 3.2566725403519445 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.81642174082003,
            "unit": "iter/sec",
            "range": "stddev: 0.0006824737910680552",
            "extra": "mean: 22.31324949999684 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.7659856703647,
            "unit": "iter/sec",
            "range": "stddev: 0.00003514624821433084",
            "extra": "mean: 1.3249139719933518 msec\nrounds: 607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.42392774048615,
            "unit": "iter/sec",
            "range": "stddev: 0.0006578822705046453",
            "extra": "mean: 8.303997542373825 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70276.30204220342,
            "unit": "iter/sec",
            "range": "stddev: 5.350682529000806e-7",
            "extra": "mean: 14.229547812567946 usec\nrounds: 13532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 313.3227386042308,
            "unit": "iter/sec",
            "range": "stddev: 0.0002400738085717478",
            "extra": "mean: 3.1915972790699243 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.49560466491317,
            "unit": "iter/sec",
            "range": "stddev: 0.00007886272385410703",
            "extra": "mean: 8.439131584904281 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 545.7670834880225,
            "unit": "iter/sec",
            "range": "stddev: 0.00002228470422918226",
            "extra": "mean: 1.8322834598395965 msec\nrounds: 498"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 249.4234181741223,
            "unit": "iter/sec",
            "range": "stddev: 0.003852170122934543",
            "extra": "mean: 4.009246634980764 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.07161986624641,
            "unit": "iter/sec",
            "range": "stddev: 0.000655052891322391",
            "extra": "mean: 9.797042520833799 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.9720608846028,
            "unit": "iter/sec",
            "range": "stddev: 0.0000986639822025843",
            "extra": "mean: 6.0985999358986005 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 315.9567666465388,
            "unit": "iter/sec",
            "range": "stddev: 0.00021722530813622352",
            "extra": "mean: 3.164989978260859 msec\nrounds: 276"
          }
        ]
      }
    ]
  }
}