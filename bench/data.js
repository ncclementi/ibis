window.BENCHMARK_DATA = {
  "lastUpdate": 1682705875565,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "anja@voltrondata.com",
            "name": "anjakefala",
            "username": "anjakefala"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "69cdee5c731c77db01bacdd5a3dd2b109f31ff04",
          "message": "docs: add allowed input for memtable constructor",
          "timestamp": "2023-04-28T14:11:25-04:00",
          "tree_id": "4bf4a606d8ff0ddf14d311dbcbcba8dfd0ff40de",
          "url": "https://github.com/ibis-project/ibis/commit/69cdee5c731c77db01bacdd5a3dd2b109f31ff04"
        },
        "date": 1682705773677,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1334369.124257899,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016306076584531626",
            "extra": "mean: 749.4178198676051 nsec\nrounds: 86207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.598659259341712,
            "unit": "iter/sec",
            "range": "stddev: 0.017672663390920006",
            "extra": "mean: 36.23364419999916 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 57.1717016408537,
            "unit": "iter/sec",
            "range": "stddev: 0.013542191704610403",
            "extra": "mean: 17.49117082926601 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 277.8479107388838,
            "unit": "iter/sec",
            "range": "stddev: 0.000711389065852271",
            "extra": "mean: 3.5990913062498464 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 76.84029628081777,
            "unit": "iter/sec",
            "range": "stddev: 0.000787477206952919",
            "extra": "mean: 13.014004999999429 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.90339004798859,
            "unit": "iter/sec",
            "range": "stddev: 0.00367616428056543",
            "extra": "mean: 37.170036869564115 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 45.76394094877964,
            "unit": "iter/sec",
            "range": "stddev: 0.0018471983568653179",
            "extra": "mean: 21.85126497561103 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.724984120928983,
            "unit": "iter/sec",
            "range": "stddev: 0.001652915390582922",
            "extra": "mean: 72.85982928571245 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 133.61892901826783,
            "unit": "iter/sec",
            "range": "stddev: 0.0007223013988549472",
            "extra": "mean: 7.483969579364643 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 90.29139694570378,
            "unit": "iter/sec",
            "range": "stddev: 0.000720006053830319",
            "extra": "mean: 11.075252281248282 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 38.68902984254596,
            "unit": "iter/sec",
            "range": "stddev: 0.0010889341252001998",
            "extra": "mean: 25.847120076924476 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 63.11327251429221,
            "unit": "iter/sec",
            "range": "stddev: 0.01592895890007797",
            "extra": "mean: 15.844527785713325 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.628456106413925,
            "unit": "iter/sec",
            "range": "stddev: 0.002732255870797855",
            "extra": "mean: 33.751336769232516 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 186.83460518253233,
            "unit": "iter/sec",
            "range": "stddev: 0.0006858056782348968",
            "extra": "mean: 5.352327525315919 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.966176738348445,
            "unit": "iter/sec",
            "range": "stddev: 0.002445765617387587",
            "extra": "mean: 33.37095715384591 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8821220.414699003,
            "unit": "iter/sec",
            "range": "stddev: 1.8635579671965675e-7",
            "extra": "mean: 113.36299888085341 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 72.44927826030441,
            "unit": "iter/sec",
            "range": "stddev: 0.0012610571474937313",
            "extra": "mean: 13.80275999999725 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 69.66310087298008,
            "unit": "iter/sec",
            "range": "stddev: 0.0012532363842581492",
            "extra": "mean: 14.35480171666986 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 793888.7625635471,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025178514648856993",
            "extra": "mean: 1.2596223137998563 usec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 80.89011340449711,
            "unit": "iter/sec",
            "range": "stddev: 0.0009340417795247811",
            "extra": "mean: 12.362450216869206 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1534.674884039342,
            "unit": "iter/sec",
            "range": "stddev: 0.000254605887584385",
            "extra": "mean: 651.6038089891388 usec\nrounds: 1157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 71.16738161264438,
            "unit": "iter/sec",
            "range": "stddev: 0.001584263828579516",
            "extra": "mean: 14.051381086954715 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6731328863539106,
            "unit": "iter/sec",
            "range": "stddev: 0.013695561506537874",
            "extra": "mean: 597.6811573999953 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1278.7304198492145,
            "unit": "iter/sec",
            "range": "stddev: 0.0004083958394535426",
            "extra": "mean: 782.0256595740627 usec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.2214325427025035,
            "unit": "iter/sec",
            "range": "stddev: 0.003194046843506805",
            "extra": "mean: 160.73468499999422 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4884446871220867,
            "unit": "iter/sec",
            "range": "stddev: 0.021790874008349944",
            "extra": "mean: 2.047314724400002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 65.53982086457145,
            "unit": "iter/sec",
            "range": "stddev: 0.0013633190233231425",
            "extra": "mean: 15.257899500005578 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 182.0219073558815,
            "unit": "iter/sec",
            "range": "stddev: 0.0006570092744884145",
            "extra": "mean: 5.493844199999742 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4011097.4373976816,
            "unit": "iter/sec",
            "range": "stddev: 3.9640321580683207e-7",
            "extra": "mean: 249.3083291060068 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5530401611471443,
            "unit": "iter/sec",
            "range": "stddev: 0.018611472475875208",
            "extra": "mean: 1.808186945999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1454136.2405854901,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017027226754136564",
            "extra": "mean: 687.6934719661222 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7449.150061106968,
            "unit": "iter/sec",
            "range": "stddev: 0.00008162786723229468",
            "extra": "mean: 134.24350319120794 usec\nrounds: 3760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 71.73945374854148,
            "unit": "iter/sec",
            "range": "stddev: 0.0015444469881831177",
            "extra": "mean: 13.939331117646415 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8264.81056451542,
            "unit": "iter/sec",
            "range": "stddev: 0.00005578935619537362",
            "extra": "mean: 120.99490873916137 usec\nrounds: 3101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3282091.0640422585,
            "unit": "iter/sec",
            "range": "stddev: 4.445419383573722e-7",
            "extra": "mean: 304.6838069047309 nsec\nrounds: 42373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5869.064722350811,
            "unit": "iter/sec",
            "range": "stddev: 0.00005823884119751009",
            "extra": "mean: 170.38489900984723 usec\nrounds: 3030"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 71.90957042152458,
            "unit": "iter/sec",
            "range": "stddev: 0.0014930538977492014",
            "extra": "mean: 13.90635480281873 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5553578923276912,
            "unit": "iter/sec",
            "range": "stddev: 0.029024835931445985",
            "extra": "mean: 1.8006406568000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 134.58963772031862,
            "unit": "iter/sec",
            "range": "stddev: 0.0007697854392833556",
            "extra": "mean: 7.429992508621136 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 842.3029134604949,
            "unit": "iter/sec",
            "range": "stddev: 0.00011528009396036069",
            "extra": "mean: 1.1872213475929063 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 57.436752895953404,
            "unit": "iter/sec",
            "range": "stddev: 0.024166244098753852",
            "extra": "mean: 17.410454971427416 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1382788.9936061488,
            "unit": "iter/sec",
            "range": "stddev: 0.000006163862351463232",
            "extra": "mean: 723.1761350602881 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 32.889770832916696,
            "unit": "iter/sec",
            "range": "stddev: 0.002702480053887447",
            "extra": "mean: 30.404590080000844 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0071862833981702,
            "unit": "iter/sec",
            "range": "stddev: 0.021597793814405127",
            "extra": "mean: 992.8649907999898 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1005409601595744,
            "unit": "iter/sec",
            "range": "stddev: 0.17775562007414156",
            "extra": "mean: 9.946195047400005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1521.7965811399733,
            "unit": "iter/sec",
            "range": "stddev: 0.0003107062228358536",
            "extra": "mean: 657.1180487545207 usec\nrounds: 923"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 69.48230089350801,
            "unit": "iter/sec",
            "range": "stddev: 0.001984078967432579",
            "extra": "mean: 14.392154363636418 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 507.06588748684806,
            "unit": "iter/sec",
            "range": "stddev: 0.0002623908423725536",
            "extra": "mean: 1.9721302984041447 msec\nrounds: 439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 180.00443030130447,
            "unit": "iter/sec",
            "range": "stddev: 0.0008899858691413379",
            "extra": "mean: 5.555418821226386 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 187.38591909216476,
            "unit": "iter/sec",
            "range": "stddev: 0.0011003129206782253",
            "extra": "mean: 5.336580276921209 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 128.88410998928308,
            "unit": "iter/sec",
            "range": "stddev: 0.00068662109998774",
            "extra": "mean: 7.758908371894345 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 2658066.004514043,
            "unit": "iter/sec",
            "range": "stddev: 6.743419807982935e-7",
            "extra": "mean: 376.213381572074 nsec\nrounds: 58140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 71.9196742720043,
            "unit": "iter/sec",
            "range": "stddev: 0.0014170524620878337",
            "extra": "mean: 13.904401126984297 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.9645281080395005,
            "unit": "iter/sec",
            "range": "stddev: 0.01579929849760868",
            "extra": "mean: 1.0367764211999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9593.219399567566,
            "unit": "iter/sec",
            "range": "stddev: 0.0001029393207328065",
            "extra": "mean: 104.24029289323634 usec\nrounds: 4756"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 159.7707146042524,
            "unit": "iter/sec",
            "range": "stddev: 0.004898981842152061",
            "extra": "mean: 6.258969314100973 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1401.1590730450957,
            "unit": "iter/sec",
            "range": "stddev: 0.0007188169508962573",
            "extra": "mean: 713.6948396777897 usec\nrounds: 867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 238.94674753067048,
            "unit": "iter/sec",
            "range": "stddev: 0.0003667751113615814",
            "extra": "mean: 4.185032900988297 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 78.8899818099769,
            "unit": "iter/sec",
            "range": "stddev: 0.001229837404772156",
            "extra": "mean: 12.675880727272954 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 67.80012935448471,
            "unit": "iter/sec",
            "range": "stddev: 0.0016654667279080231",
            "extra": "mean: 14.749234397055822 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 67.91664965777683,
            "unit": "iter/sec",
            "range": "stddev: 0.001771313441826829",
            "extra": "mean: 14.723930067794422 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 72.56077646581468,
            "unit": "iter/sec",
            "range": "stddev: 0.0016060962349668019",
            "extra": "mean: 13.781550428572476 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 91.64598902360154,
            "unit": "iter/sec",
            "range": "stddev: 0.0010977087142373932",
            "extra": "mean: 10.911552274726072 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 116.00626252425302,
            "unit": "iter/sec",
            "range": "stddev: 0.0009647645211251668",
            "extra": "mean: 8.620224272727807 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4303448.970619765,
            "unit": "iter/sec",
            "range": "stddev: 5.548732678368018e-7",
            "extra": "mean: 232.3717573577189 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1264.5417990973376,
            "unit": "iter/sec",
            "range": "stddev: 0.00023093767457634445",
            "extra": "mean: 790.8002730426354 usec\nrounds: 868"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 186.83075507910553,
            "unit": "iter/sec",
            "range": "stddev: 0.0005871457602729173",
            "extra": "mean: 5.352437823079999 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 147.13698723965786,
            "unit": "iter/sec",
            "range": "stddev: 0.020361888289649605",
            "extra": "mean: 6.796387630060634 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1532314.083841057,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012520513393914222",
            "extra": "mean: 652.6077196218785 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 104540.12806251417,
            "unit": "iter/sec",
            "range": "stddev: 0.000040172331892874045",
            "extra": "mean: 9.565704754082642 usec\nrounds: 28986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3942780.155833902,
            "unit": "iter/sec",
            "range": "stddev: 0.00000287078817018666",
            "extra": "mean: 253.62814067145663 nsec\nrounds: 47394"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.80598147820721,
            "unit": "iter/sec",
            "range": "stddev: 0.0023444692566063742",
            "extra": "mean: 59.50262418750896 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1512.2910915502275,
            "unit": "iter/sec",
            "range": "stddev: 0.0001631324669252779",
            "extra": "mean: 661.2483572689134 usec\nrounds: 1128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 21.513909858516215,
            "unit": "iter/sec",
            "range": "stddev: 0.0017915188543356575",
            "extra": "mean: 46.48155572726606 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 72.01402487536599,
            "unit": "iter/sec",
            "range": "stddev: 0.0023854465687218325",
            "extra": "mean: 13.886184000001261 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 374.95975166379384,
            "unit": "iter/sec",
            "range": "stddev: 0.0003746604857465965",
            "extra": "mean: 2.6669529077794087 msec\nrounds: 347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1525.8565250493866,
            "unit": "iter/sec",
            "range": "stddev: 0.00028504787007582944",
            "extra": "mean: 655.3696127934659 usec\nrounds: 1188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1491.9041095249904,
            "unit": "iter/sec",
            "range": "stddev: 0.0002542265333737737",
            "extra": "mean: 670.2843658754928 usec\nrounds: 1096"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 71.53780678073515,
            "unit": "iter/sec",
            "range": "stddev: 0.0013952616377069804",
            "extra": "mean: 13.978622563381354 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 117.25474244838045,
            "unit": "iter/sec",
            "range": "stddev: 0.006118428080639632",
            "extra": "mean: 8.528439695650128 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.58252690851633,
            "unit": "iter/sec",
            "range": "stddev: 0.002328401625352607",
            "extra": "mean: 14.796724031252317 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 544.1204136354963,
            "unit": "iter/sec",
            "range": "stddev: 0.00026155937905904226",
            "extra": "mean: 1.8378284933634106 msec\nrounds: 452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3010.345551037852,
            "unit": "iter/sec",
            "range": "stddev: 0.0001520473630763407",
            "extra": "mean: 332.18777812907166 usec\nrounds: 1582"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 176.0982449592585,
            "unit": "iter/sec",
            "range": "stddev: 0.0011610383168925112",
            "extra": "mean: 5.67864830357257 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 118.45448718987501,
            "unit": "iter/sec",
            "range": "stddev: 0.0009659840577621636",
            "extra": "mean: 8.442060944445808 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 72.35492900046366,
            "unit": "iter/sec",
            "range": "stddev: 0.0016576484715715688",
            "extra": "mean: 13.820758499999245 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 161.00572761770536,
            "unit": "iter/sec",
            "range": "stddev: 0.0012197107761728297",
            "extra": "mean: 6.21095916770375 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1107.1240643309125,
            "unit": "iter/sec",
            "range": "stddev: 0.007356813822101193",
            "extra": "mean: 903.2411382046396 usec\nrounds: 1259"
          }
        ]
      }
    ]
  }
}