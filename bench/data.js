window.BENCHMARK_DATA = {
  "lastUpdate": 1677602536741,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "91bef7143eae79faa3a4577bf2053646c974879d",
          "message": "test(common): add more complicated test case for generic type coercions",
          "timestamp": "2023-02-28T11:36:54-05:00",
          "tree_id": "e01a316fe54f347939cbba352d8bad4ea497ba9b",
          "url": "https://github.com/ibis-project/ibis/commit/91bef7143eae79faa3a4577bf2053646c974879d"
        },
        "date": 1677602451667,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 232.87351806151455,
            "unit": "iter/sec",
            "range": "stddev: 0.006081502907868882",
            "extra": "mean: 4.294176548386432 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1852009.9238502462,
            "unit": "iter/sec",
            "range": "stddev: 1.0084592394657773e-7",
            "extra": "mean: 539.9539101394471 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 128.992687925935,
            "unit": "iter/sec",
            "range": "stddev: 0.007027132555851142",
            "extra": "mean: 7.752377410525624 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6242515.043323449,
            "unit": "iter/sec",
            "range": "stddev: 1.2689702268681803e-8",
            "extra": "mean: 160.19184464286943 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.20899677834085,
            "unit": "iter/sec",
            "range": "stddev: 0.00007208444826718818",
            "extra": "mean: 10.39403832787004 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1667084.5603799212,
            "unit": "iter/sec",
            "range": "stddev: 1.424322237925954e-7",
            "extra": "mean: 599.8495959749663 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5474.119360043669,
            "unit": "iter/sec",
            "range": "stddev: 0.00007673148933962136",
            "extra": "mean: 182.67778508797855 usec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5292.635640757231,
            "unit": "iter/sec",
            "range": "stddev: 0.000044226248620457886",
            "extra": "mean: 188.94178021612825 usec\nrounds: 3053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5493.101540666556,
            "unit": "iter/sec",
            "range": "stddev: 0.00004388203546313084",
            "extra": "mean: 182.04651645282635 usec\nrounds: 2188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 102.86906374410944,
            "unit": "iter/sec",
            "range": "stddev: 0.00033640514232920383",
            "extra": "mean: 9.721095571429876 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5325.8993949393125,
            "unit": "iter/sec",
            "range": "stddev: 0.000019985813065696705",
            "extra": "mean: 187.761714190509 usec\nrounds: 1494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.488783279428194,
            "unit": "iter/sec",
            "range": "stddev: 0.0005551560743984609",
            "extra": "mean: 95.33994299999645 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1767.38359498096,
            "unit": "iter/sec",
            "range": "stddev: 0.000006503144773666202",
            "extra": "mean: 565.8081261135463 usec\nrounds: 1348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.579851393746,
            "unit": "iter/sec",
            "range": "stddev: 0.00008474568512665352",
            "extra": "mean: 7.430532799997359 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5711.921551096715,
            "unit": "iter/sec",
            "range": "stddev: 0.00004489627995534602",
            "extra": "mean: 175.07243246504243 usec\nrounds: 807"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11739.894769308416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037549210156084004",
            "extra": "mean: 85.17963914074409 usec\nrounds: 5074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139683.9006929787,
            "unit": "iter/sec",
            "range": "stddev: 3.428843382975947e-7",
            "extra": "mean: 7.159021154470564 usec\nrounds: 34130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.98085760296377,
            "unit": "iter/sec",
            "range": "stddev: 0.000475503711224434",
            "extra": "mean: 9.805761821431654 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69986.90802166756,
            "unit": "iter/sec",
            "range": "stddev: 7.384036306480076e-7",
            "extra": "mean: 14.28838661782866 usec\nrounds: 11642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 758.6657753483004,
            "unit": "iter/sec",
            "range": "stddev: 0.000010839395797919214",
            "extra": "mean: 1.3181034817880166 msec\nrounds: 604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.539036992993051,
            "unit": "iter/sec",
            "range": "stddev: 0.0019243452077739674",
            "extra": "mean: 393.8501104000011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8084.333371799394,
            "unit": "iter/sec",
            "range": "stddev: 0.000016650000134480038",
            "extra": "mean: 123.6960370150374 usec\nrounds: 1729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9237105874030057,
            "unit": "iter/sec",
            "range": "stddev: 0.001831850049638292",
            "extra": "mean: 1.0825901680000016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.80076821568964,
            "unit": "iter/sec",
            "range": "stddev: 0.0005691668049747508",
            "extra": "mean: 9.727553765958902 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.277862634539392,
            "unit": "iter/sec",
            "range": "stddev: 0.00046025234322186453",
            "extra": "mean: 38.05484540000634 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.9472255501292,
            "unit": "iter/sec",
            "range": "stddev: 0.00004615213759183068",
            "extra": "mean: 3.058597601852642 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.9314080038752,
            "unit": "iter/sec",
            "range": "stddev: 0.00020574178551956414",
            "extra": "mean: 3.3120105212345616 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 491605.89038459637,
            "unit": "iter/sec",
            "range": "stddev: 5.151171108499119e-7",
            "extra": "mean: 2.03414975198461 usec\nrounds: 2217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 314.43458874080073,
            "unit": "iter/sec",
            "range": "stddev: 0.00018141476791554031",
            "extra": "mean: 3.180311695366105 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 309.93502894778175,
            "unit": "iter/sec",
            "range": "stddev: 0.0001988751560022033",
            "extra": "mean: 3.226482670884166 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.2643534055836,
            "unit": "iter/sec",
            "range": "stddev: 0.0005993532758169352",
            "extra": "mean: 10.72221018518455 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7764536701640843,
            "unit": "iter/sec",
            "range": "stddev: 0.0019397801810341017",
            "extra": "mean: 562.9192682000166 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5748.390137291906,
            "unit": "iter/sec",
            "range": "stddev: 0.00005410707362512951",
            "extra": "mean: 173.96174861421372 usec\nrounds: 2526"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.94899843646007,
            "unit": "iter/sec",
            "range": "stddev: 0.00014192043086946052",
            "extra": "mean: 6.29132621052501 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 747181.4671538546,
            "unit": "iter/sec",
            "range": "stddev: 1.7687537345618953e-7",
            "extra": "mean: 1.3383629599502456 usec\nrounds: 25000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.04580477284784,
            "unit": "iter/sec",
            "range": "stddev: 0.0008406856249883135",
            "extra": "mean: 26.99360983333084 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.1625856712974,
            "unit": "iter/sec",
            "range": "stddev: 0.000016337377519179247",
            "extra": "mean: 1.451036403878372 msec\nrounds: 567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5596369.674453364,
            "unit": "iter/sec",
            "range": "stddev: 1.2381274404632195e-8",
            "extra": "mean: 178.6872665976252 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 130.91122921887174,
            "unit": "iter/sec",
            "range": "stddev: 0.0006707598692479681",
            "extra": "mean: 7.63876411494151 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 295.10215705980454,
            "unit": "iter/sec",
            "range": "stddev: 0.0002744672239527192",
            "extra": "mean: 3.388657033087504 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 193.87985498734346,
            "unit": "iter/sec",
            "range": "stddev: 0.0001082396175634787",
            "extra": "mean: 5.157833443114965 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.65178371995847,
            "unit": "iter/sec",
            "range": "stddev: 0.00009499637035063807",
            "extra": "mean: 10.240468344825697 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 131.99861082974255,
            "unit": "iter/sec",
            "range": "stddev: 0.0006721603091840291",
            "extra": "mean: 7.575837303998924 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 347.64041648932937,
            "unit": "iter/sec",
            "range": "stddev: 0.00016508445184321103",
            "extra": "mean: 2.876535502110395 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 140.61180431448733,
            "unit": "iter/sec",
            "range": "stddev: 0.0007043958881507306",
            "extra": "mean: 7.111778451853415 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.16184446053579,
            "unit": "iter/sec",
            "range": "stddev: 0.00020457051154102945",
            "extra": "mean: 13.668326808510272 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8471463205168847,
            "unit": "iter/sec",
            "range": "stddev: 0.0046060341123261945",
            "extra": "mean: 1.1804336225999918 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.887505520301865,
            "unit": "iter/sec",
            "range": "stddev: 0.00020530412318438024",
            "extra": "mean: 20.88227376086756 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13595.347664549037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018250040401756341",
            "extra": "mean: 73.55457356986761 usec\nrounds: 6606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.22559620770183,
            "unit": "iter/sec",
            "range": "stddev: 0.013983355502809096",
            "extra": "mean: 10.961835729998484 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2459039.4280604674,
            "unit": "iter/sec",
            "range": "stddev: 2.2028527330185837e-8",
            "extra": "mean: 406.6628572885894 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 141.58545422027072,
            "unit": "iter/sec",
            "range": "stddev: 0.0006354298090174418",
            "extra": "mean: 7.062872422221113 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.83981001012359,
            "unit": "iter/sec",
            "range": "stddev: 0.00042122519724667343",
            "extra": "mean: 15.664207018182257 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11469.515026761625,
            "unit": "iter/sec",
            "range": "stddev: 0.00003232628198084958",
            "extra": "mean: 87.18764460979536 usec\nrounds: 4443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 540.5190324844253,
            "unit": "iter/sec",
            "range": "stddev: 0.000023891167404902778",
            "extra": "mean: 1.8500736142511585 msec\nrounds: 407"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 139.54124866474135,
            "unit": "iter/sec",
            "range": "stddev: 0.000696635112260934",
            "extra": "mean: 7.166339770991854 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.5452047485744,
            "unit": "iter/sec",
            "range": "stddev: 0.00008040321690273808",
            "extra": "mean: 3.4299998206535065 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7121034.930776611,
            "unit": "iter/sec",
            "range": "stddev: 6.739232357276368e-9",
            "extra": "mean: 140.4290260785339 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.536527469283085,
            "unit": "iter/sec",
            "range": "stddev: 0.00029261014309170933",
            "extra": "mean: 180.6186288333341 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9169839920184347,
            "unit": "iter/sec",
            "range": "stddev: 0.002183136779615216",
            "extra": "mean: 1.0905315782000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 299.58557779393146,
            "unit": "iter/sec",
            "range": "stddev: 0.00023673918987441176",
            "extra": "mean: 3.337944394265352 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1772423936624029,
            "unit": "iter/sec",
            "range": "stddev: 0.15708117450740033",
            "extra": "mean: 5.641991057200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.77575249274631,
            "unit": "iter/sec",
            "range": "stddev: 0.000881698403178082",
            "extra": "mean: 23.377730179488363 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.61063513481469,
            "unit": "iter/sec",
            "range": "stddev: 0.00064155121089354",
            "extra": "mean: 9.651518868684025 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 308.67415163398323,
            "unit": "iter/sec",
            "range": "stddev: 0.00027390792101386125",
            "extra": "mean: 3.2396622610168238 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.95766789716637,
            "unit": "iter/sec",
            "range": "stddev: 0.00008948646952878365",
            "extra": "mean: 6.624373666670635 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5394.500875542436,
            "unit": "iter/sec",
            "range": "stddev: 0.000043438591366369996",
            "extra": "mean: 185.3739619422059 usec\nrounds: 2286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.57225937632062,
            "unit": "iter/sec",
            "range": "stddev: 0.00019995471133149923",
            "extra": "mean: 13.971893701749561 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.08447594395759,
            "unit": "iter/sec",
            "range": "stddev: 0.00003598639917966431",
            "extra": "mean: 5.0739663548353615 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.27947745183807,
            "unit": "iter/sec",
            "range": "stddev: 0.00027977536361375733",
            "extra": "mean: 17.76846632692643 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6802971342446644,
            "unit": "iter/sec",
            "range": "stddev: 0.0028674014055012965",
            "extra": "mean: 1.4699459245999946 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.46952366153884,
            "unit": "iter/sec",
            "range": "stddev: 0.011278024504107264",
            "extra": "mean: 8.44098945528765 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11263558.141301198,
            "unit": "iter/sec",
            "range": "stddev: 5.283651439202929e-9",
            "extra": "mean: 88.78189178372787 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.86655997836662,
            "unit": "iter/sec",
            "range": "stddev: 0.0001618206875851674",
            "extra": "mean: 8.484170575467218 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.85236845196432,
            "unit": "iter/sec",
            "range": "stddev: 0.0006619441335298834",
            "extra": "mean: 9.915483546390853 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5750.694722462742,
            "unit": "iter/sec",
            "range": "stddev: 0.0000461265758199025",
            "extra": "mean: 173.89203361707033 usec\nrounds: 3629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1176.7462668619557,
            "unit": "iter/sec",
            "range": "stddev: 0.000011933180093231913",
            "extra": "mean: 849.8008688540077 usec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.22982668687418,
            "unit": "iter/sec",
            "range": "stddev: 0.0006365162347322815",
            "extra": "mean: 24.857178923076763 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1831200.0601199486,
            "unit": "iter/sec",
            "range": "stddev: 1.272138770115888e-7",
            "extra": "mean: 546.0899777026532 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.394221315560443,
            "unit": "iter/sec",
            "range": "stddev: 0.0005244107373103126",
            "extra": "mean: 64.95944026666696 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.40804449774367,
            "unit": "iter/sec",
            "range": "stddev: 0.01448532634840436",
            "extra": "mean: 8.374645143936645 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.11948585059616,
            "unit": "iter/sec",
            "range": "stddev: 0.000735287685352082",
            "extra": "mean: 9.512984123811986 msec\nrounds: 105"
          }
        ]
      }
    ]
  }
}