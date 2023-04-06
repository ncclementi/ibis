window.BENCHMARK_DATA = {
  "lastUpdate": 1680800887282,
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
          "id": "47d8b92cc021b8f5fd1b284bab8c1ac8e1e71a07",
          "message": "fix(duckdb): drop use of experimental parallel csv reader",
          "timestamp": "2023-04-06T13:01:52-04:00",
          "tree_id": "194ad11d04e3b859f5384ab728ae5f40e37f939d",
          "url": "https://github.com/ibis-project/ibis/commit/47d8b92cc021b8f5fd1b284bab8c1ac8e1e71a07"
        },
        "date": 1680800807643,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3108598.764904615,
            "unit": "iter/sec",
            "range": "stddev: 7.497732799075728e-8",
            "extra": "mean: 321.68834758920207 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17057028833105967,
            "unit": "iter/sec",
            "range": "stddev: 0.09257889342375518",
            "extra": "mean: 5.862685757199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.83331584214473,
            "unit": "iter/sec",
            "range": "stddev: 0.0006306277608003525",
            "extra": "mean: 9.819968953482118 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.20324550595331,
            "unit": "iter/sec",
            "range": "stddev: 0.0018461352787087027",
            "extra": "mean: 26.879375344819813 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 412.66807867725765,
            "unit": "iter/sec",
            "range": "stddev: 0.014389959258742362",
            "extra": "mean: 2.423255036360801 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 85.32047385109887,
            "unit": "iter/sec",
            "range": "stddev: 0.01265568317860475",
            "extra": "mean: 11.72051624731009 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 140.35566111621378,
            "unit": "iter/sec",
            "range": "stddev: 0.00004438623310935532",
            "extra": "mean: 7.124757149424881 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.311935785655997,
            "unit": "iter/sec",
            "range": "stddev: 0.004315880540574451",
            "extra": "mean: 96.97500263636337 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 287.2747605154742,
            "unit": "iter/sec",
            "range": "stddev: 0.00022704061239219012",
            "extra": "mean: 3.480988020686678 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7044497.659198629,
            "unit": "iter/sec",
            "range": "stddev: 4.4055266985379115e-8",
            "extra": "mean: 141.95476361529126 nsec\nrounds: 59881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 503921.5783088506,
            "unit": "iter/sec",
            "range": "stddev: 3.5438252331026e-7",
            "extra": "mean: 1.9844357595401596 usec\nrounds: 2226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.2232138035154,
            "unit": "iter/sec",
            "range": "stddev: 0.00003470789468547154",
            "extra": "mean: 1.4551312876428983 msec\nrounds: 518"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.76575001892405,
            "unit": "iter/sec",
            "range": "stddev: 0.00025267592451428577",
            "extra": "mean: 10.023480000003158 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1997058.453970466,
            "unit": "iter/sec",
            "range": "stddev: 8.853932452855588e-8",
            "extra": "mean: 500.73646968712546 nsec\nrounds: 151493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.790380584537,
            "unit": "iter/sec",
            "range": "stddev: 0.0003148722123959462",
            "extra": "mean: 3.625942275000682 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1174.7498615932004,
            "unit": "iter/sec",
            "range": "stddev: 0.000010118360261910414",
            "extra": "mean: 851.245046025199 usec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2202.458991769914,
            "unit": "iter/sec",
            "range": "stddev: 0.00007859395881074204",
            "extra": "mean: 454.0379656269522 usec\nrounds: 320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.94697206739161,
            "unit": "iter/sec",
            "range": "stddev: 0.00030786713719420557",
            "extra": "mean: 15.397176622219732 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.687064383663532,
            "unit": "iter/sec",
            "range": "stddev: 0.0007932221280484983",
            "extra": "mean: 40.5070438695717 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 169.40163531430085,
            "unit": "iter/sec",
            "range": "stddev: 0.00008091895768094273",
            "extra": "mean: 5.9031307350997 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 87.42485117646964,
            "unit": "iter/sec",
            "range": "stddev: 0.015680732112184244",
            "extra": "mean: 11.438395222217427 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.04658495766259,
            "unit": "iter/sec",
            "range": "stddev: 0.0004147648678151948",
            "extra": "mean: 9.341727252630287 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 254.27349686194728,
            "unit": "iter/sec",
            "range": "stddev: 0.00041033512643729207",
            "extra": "mean: 3.9327732238760613 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72605.09865092563,
            "unit": "iter/sec",
            "range": "stddev: 4.032939397976444e-7",
            "extra": "mean: 13.773137404686263 usec\nrounds: 12707"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 230.58048450207517,
            "unit": "iter/sec",
            "range": "stddev: 0.003599603184543649",
            "extra": "mean: 4.336880469999187 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1994023.6754741627,
            "unit": "iter/sec",
            "range": "stddev: 1.3308732677214004e-7",
            "extra": "mean: 501.49855906911847 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12059.186585652884,
            "unit": "iter/sec",
            "range": "stddev: 0.000012806716707620224",
            "extra": "mean: 82.92433265687464 usec\nrounds: 3451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.9018232831066,
            "unit": "iter/sec",
            "range": "stddev: 0.00012323924176665276",
            "extra": "mean: 13.350809849051307 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 80.99659578606932,
            "unit": "iter/sec",
            "range": "stddev: 0.021345627659669533",
            "extra": "mean: 12.34619789010924 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.05643192667034,
            "unit": "iter/sec",
            "range": "stddev: 0.0008393637751435207",
            "extra": "mean: 9.994359990099216 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.13256741297523,
            "unit": "iter/sec",
            "range": "stddev: 0.0007672802122303375",
            "extra": "mean: 18.82084846808655 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.597327386253417,
            "unit": "iter/sec",
            "range": "stddev: 0.0013260400380433828",
            "extra": "mean: 64.11354812500392 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9090392161626659,
            "unit": "iter/sec",
            "range": "stddev: 0.005481456624794764",
            "extra": "mean: 1.1000625520000198 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.74079805170774,
            "unit": "iter/sec",
            "range": "stddev: 0.0002944441376295404",
            "extra": "mean: 19.327108155553358 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1997794.6326982067,
            "unit": "iter/sec",
            "range": "stddev: 8.141303750423403e-8",
            "extra": "mean: 500.551950452188 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.463266032860545,
            "unit": "iter/sec",
            "range": "stddev: 0.03260024563072803",
            "extra": "mean: 28.198192435896683 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2175.383637850921,
            "unit": "iter/sec",
            "range": "stddev: 0.0000905571795222063",
            "extra": "mean: 459.68903259192854 usec\nrounds: 1258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.81262607897892,
            "unit": "iter/sec",
            "range": "stddev: 0.0008722762468403906",
            "extra": "mean: 10.329231222218976 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1766.4765285342676,
            "unit": "iter/sec",
            "range": "stddev: 0.0000743392552788034",
            "extra": "mean: 566.0986624202412 usec\nrounds: 1413"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 266.07241768537557,
            "unit": "iter/sec",
            "range": "stddev: 0.00037764362039427755",
            "extra": "mean: 3.758375290077894 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.0193696922418,
            "unit": "iter/sec",
            "range": "stddev: 0.0007688542218867897",
            "extra": "mean: 11.49169436111366 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.62961233074387,
            "unit": "iter/sec",
            "range": "stddev: 0.0009612834818716701",
            "extra": "mean: 10.138942822228753 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 219.18804291897032,
            "unit": "iter/sec",
            "range": "stddev: 0.014590862055551202",
            "extra": "mean: 4.562292662878883 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.70857507873225,
            "unit": "iter/sec",
            "range": "stddev: 0.0001270736871219654",
            "extra": "mean: 5.083662466670565 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.21299197193794,
            "unit": "iter/sec",
            "range": "stddev: 0.00035699867227904084",
            "extra": "mean: 10.393606720926691 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6121345720035438,
            "unit": "iter/sec",
            "range": "stddev: 0.002320164665850632",
            "extra": "mean: 620.2956113999903 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.16177254336958,
            "unit": "iter/sec",
            "range": "stddev: 0.0008298003817191329",
            "extra": "mean: 10.508421325845463 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.62192899830868,
            "unit": "iter/sec",
            "range": "stddev: 0.0009780482691525809",
            "extra": "mean: 10.681258234041145 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11889036.554594092,
            "unit": "iter/sec",
            "range": "stddev: 3.5134675447378044e-9",
            "extra": "mean: 84.11110483238298 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.72850201630719,
            "unit": "iter/sec",
            "range": "stddev: 0.00014673780818118384",
            "extra": "mean: 8.49411979999104 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9049072124179491,
            "unit": "iter/sec",
            "range": "stddev: 0.006430271456300965",
            "extra": "mean: 1.1050856775999818 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.71751206507625,
            "unit": "iter/sec",
            "range": "stddev: 0.000056618432996929326",
            "extra": "mean: 6.108082070062908 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.20219233098167,
            "unit": "iter/sec",
            "range": "stddev: 0.0004902985569144643",
            "extra": "mean: 21.64399457143147 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.467691594447368,
            "unit": "iter/sec",
            "range": "stddev: 0.006241651945941534",
            "extra": "mean: 182.89253933333308 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 283.76641557078875,
            "unit": "iter/sec",
            "range": "stddev: 0.00005458734999940529",
            "extra": "mean: 3.524025202166811 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5083145.7734155785,
            "unit": "iter/sec",
            "range": "stddev: 1.1533082597097593e-8",
            "extra": "mean: 196.7285701758566 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1826987.793111726,
            "unit": "iter/sec",
            "range": "stddev: 9.762598120508604e-8",
            "extra": "mean: 547.3490319805585 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13946.071429974152,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020572632940859516",
            "extra": "mean: 71.70478116516097 usec\nrounds: 5182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148873.2866939535,
            "unit": "iter/sec",
            "range": "stddev: 3.5777646005924295e-7",
            "extra": "mean: 6.717121803428386 usec\nrounds: 33004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2132.130092857876,
            "unit": "iter/sec",
            "range": "stddev: 0.00012510186128315105",
            "extra": "mean: 469.0145330952177 usec\nrounds: 1118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2113.002459597519,
            "unit": "iter/sec",
            "range": "stddev: 0.00008620992669620412",
            "extra": "mean: 473.2602157928762 usec\nrounds: 1469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 94.28689940472293,
            "unit": "iter/sec",
            "range": "stddev: 0.0009459996251287694",
            "extra": "mean: 10.605927295451067 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.82899883817707,
            "unit": "iter/sec",
            "range": "stddev: 0.0009189666444763177",
            "extra": "mean: 23.348666257139225 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5690028989265925,
            "unit": "iter/sec",
            "range": "stddev: 0.0017974295340199052",
            "extra": "mean: 389.2560807999985 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.67618758976323,
            "unit": "iter/sec",
            "range": "stddev: 0.0001927883514073941",
            "extra": "mean: 6.262674573425935 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2063.624062556866,
            "unit": "iter/sec",
            "range": "stddev: 0.00009071160055632696",
            "extra": "mean: 484.5843863445663 usec\nrounds: 1245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 532.62381221637,
            "unit": "iter/sec",
            "range": "stddev: 0.000029706359173442754",
            "extra": "mean: 1.8774977330412068 msec\nrounds: 457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2103.4481051792086,
            "unit": "iter/sec",
            "range": "stddev: 0.00009335121254163514",
            "extra": "mean: 475.4098746423804 usec\nrounds: 1045"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6650124719943618,
            "unit": "iter/sec",
            "range": "stddev: 0.0825128185235548",
            "extra": "mean: 1.503731196199999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.03868490953835,
            "unit": "iter/sec",
            "range": "stddev: 0.0002902771569584434",
            "extra": "mean: 3.730804754311844 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 155.33039086538747,
            "unit": "iter/sec",
            "range": "stddev: 0.004076258456159596",
            "extra": "mean: 6.43789019282531 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 97.27448383426851,
            "unit": "iter/sec",
            "range": "stddev: 0.0009002226170016371",
            "extra": "mean: 10.280188191013698 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 92.831770173228,
            "unit": "iter/sec",
            "range": "stddev: 0.0011352521019727302",
            "extra": "mean: 10.772174204304818 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12554.501868976025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031070853846730776",
            "extra": "mean: 79.65270230841602 usec\nrounds: 5415"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5384.238780496977,
            "unit": "iter/sec",
            "range": "stddev: 0.00008897820164639139",
            "extra": "mean: 185.7272756219957 usec\nrounds: 2010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.64323530908172,
            "unit": "iter/sec",
            "range": "stddev: 0.0010117050064809543",
            "extra": "mean: 10.678827965515817 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2162.8417793427207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000930190822494739",
            "extra": "mean: 462.3546713176108 usec\nrounds: 1792"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8247.03914245383,
            "unit": "iter/sec",
            "range": "stddev: 0.000017758183357126355",
            "extra": "mean: 121.25563886949847 usec\nrounds: 4245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 295.37689062323636,
            "unit": "iter/sec",
            "range": "stddev: 0.000057718558672318184",
            "extra": "mean: 3.385505202827581 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 89.50513088814097,
            "unit": "iter/sec",
            "range": "stddev: 0.0008308063890980199",
            "extra": "mean: 11.17254385393559 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 750.2471092408839,
            "unit": "iter/sec",
            "range": "stddev: 0.000012539131701120939",
            "extra": "mean: 1.332894172710404 msec\nrounds: 579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.99157456401228,
            "unit": "iter/sec",
            "range": "stddev: 0.02248617891181648",
            "extra": "mean: 12.988434197674197 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.56425513867494,
            "unit": "iter/sec",
            "range": "stddev: 0.00009106498722925464",
            "extra": "mean: 9.044514420558006 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.7563640951774,
            "unit": "iter/sec",
            "range": "stddev: 0.00029518485287117964",
            "extra": "mean: 3.613286376518868 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 768446.0860366502,
            "unit": "iter/sec",
            "range": "stddev: 1.4481098162256352e-7",
            "extra": "mean: 1.3013274687331886 usec\nrounds: 24213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 96.89210522209555,
            "unit": "iter/sec",
            "range": "stddev: 0.0010537376791180332",
            "extra": "mean: 10.320758308510333 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 276.44188551276903,
            "unit": "iter/sec",
            "range": "stddev: 0.00033009754704810664",
            "extra": "mean: 3.617396828794996 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7743389476998727,
            "unit": "iter/sec",
            "range": "stddev: 0.005993461562495803",
            "extra": "mean: 1.2914241275999871 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}