window.BENCHMARK_DATA = {
  "lastUpdate": 1679474474178,
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
          "id": "1a1892c1f567672a16140943d9406c6a0796b4a5",
          "message": "fix(duckdb): disable the progress bar by default",
          "timestamp": "2023-03-22T04:36:01-04:00",
          "tree_id": "8efe105f45a679010283ddbe985f7aac10ee36b5",
          "url": "https://github.com/ibis-project/ibis/commit/1a1892c1f567672a16140943d9406c6a0796b4a5"
        },
        "date": 1679474394444,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6177968.039930005,
            "unit": "iter/sec",
            "range": "stddev: 1.1167287579947159e-8",
            "extra": "mean: 161.865518490082 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.73576666184772,
            "unit": "iter/sec",
            "range": "stddev: 0.0005278903375300671",
            "extra": "mean: 9.63987669999824 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 295.7809768990955,
            "unit": "iter/sec",
            "range": "stddev: 0.013877163431766964",
            "extra": "mean: 3.3808800365858085 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.32268146566616,
            "unit": "iter/sec",
            "range": "stddev: 0.0006593287168276512",
            "extra": "mean: 9.31769488372234 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8434962566040171,
            "unit": "iter/sec",
            "range": "stddev: 0.011577669104129754",
            "extra": "mean: 1.1855417165999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.26137948232727,
            "unit": "iter/sec",
            "range": "stddev: 0.00004102538869746898",
            "extra": "mean: 5.174339553399724 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8405374400628058,
            "unit": "iter/sec",
            "range": "stddev: 0.005766227088995672",
            "extra": "mean: 1.1897149994000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.41796568725133,
            "unit": "iter/sec",
            "range": "stddev: 0.000841733131285069",
            "extra": "mean: 26.725130071427422 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.81619529904212,
            "unit": "iter/sec",
            "range": "stddev: 0.016533748546086906",
            "extra": "mean: 10.119798652171884 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.80217119975195,
            "unit": "iter/sec",
            "range": "stddev: 0.000504232548263575",
            "extra": "mean: 12.22461440000302 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5665.345555435731,
            "unit": "iter/sec",
            "range": "stddev: 0.00005092333189759957",
            "extra": "mean: 176.51173970147852 usec\nrounds: 1675"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8443716001912643,
            "unit": "iter/sec",
            "range": "stddev: 0.007277611867576901",
            "extra": "mean: 1.1843126885999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1789727.5759023768,
            "unit": "iter/sec",
            "range": "stddev: 1.0238190915501802e-7",
            "extra": "mean: 558.7442544130226 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.620096396155507,
            "unit": "iter/sec",
            "range": "stddev: 0.00010334783100376596",
            "extra": "mean: 64.02009146666501 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.35561414883593,
            "unit": "iter/sec",
            "range": "stddev: 0.0006997505150537787",
            "extra": "mean: 8.378323945055524 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5174.016538208774,
            "unit": "iter/sec",
            "range": "stddev: 0.00005455859501188424",
            "extra": "mean: 193.2734448402433 usec\nrounds: 3091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.7654906081129,
            "unit": "iter/sec",
            "range": "stddev: 0.000010443502697084371",
            "extra": "mean: 1.3337503693173836 msec\nrounds: 528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.42665848487428,
            "unit": "iter/sec",
            "range": "stddev: 0.0005890702109283443",
            "extra": "mean: 9.57609880952808 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.7660345098143,
            "unit": "iter/sec",
            "range": "stddev: 0.00013897607582389452",
            "extra": "mean: 3.427403747252707 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.6789575190221,
            "unit": "iter/sec",
            "range": "stddev: 0.00012233401283631557",
            "extra": "mean: 6.109520827585819 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.35571217712863,
            "unit": "iter/sec",
            "range": "stddev: 0.0005675762233137145",
            "extra": "mean: 27.505993972223703 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1923470.5535329708,
            "unit": "iter/sec",
            "range": "stddev: 1.5792948201010332e-7",
            "extra": "mean: 519.8935841067238 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13859.73470008824,
            "unit": "iter/sec",
            "range": "stddev: 0.000002211290201858074",
            "extra": "mean: 72.15145323045998 usec\nrounds: 5046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 319.58877199233746,
            "unit": "iter/sec",
            "range": "stddev: 0.0002239471313659096",
            "extra": "mean: 3.1290210659339945 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.21584548318785,
            "unit": "iter/sec",
            "range": "stddev: 0.021923260703292684",
            "extra": "mean: 11.465806407767552 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11504112.746380009,
            "unit": "iter/sec",
            "range": "stddev: 3.984310332538112e-9",
            "extra": "mean: 86.92543458556831 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5609249.9805881865,
            "unit": "iter/sec",
            "range": "stddev: 1.075267635248037e-8",
            "extra": "mean: 178.27695386360878 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.22990499631336,
            "unit": "iter/sec",
            "range": "stddev: 0.0009912530747847386",
            "extra": "mean: 17.47338214285727 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 117.98193835051467,
            "unit": "iter/sec",
            "range": "stddev: 0.0009375337555205532",
            "extra": "mean: 8.475873629309955 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7039963.652369454,
            "unit": "iter/sec",
            "range": "stddev: 5.684336623084988e-9",
            "extra": "mean: 142.04618793214513 nsec\nrounds: 69440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16688334543794262,
            "unit": "iter/sec",
            "range": "stddev: 0.01592641264872589",
            "extra": "mean: 5.992209692199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.6979645661925,
            "unit": "iter/sec",
            "range": "stddev: 0.0007124775121123297",
            "extra": "mean: 9.460920123714946 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 117.78430694865084,
            "unit": "iter/sec",
            "range": "stddev: 0.0007851472146963915",
            "extra": "mean: 8.490095377782028 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1915549.0366469726,
            "unit": "iter/sec",
            "range": "stddev: 1.19512403232536e-7",
            "extra": "mean: 522.0435399296414 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 307.6401168513478,
            "unit": "iter/sec",
            "range": "stddev: 0.00044948081427297",
            "extra": "mean: 3.2505513592793283 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 118.55000758079264,
            "unit": "iter/sec",
            "range": "stddev: 0.0007645884670997155",
            "extra": "mean: 8.435258844825407 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.60709041179012,
            "unit": "iter/sec",
            "range": "stddev: 0.0002801010330106068",
            "extra": "mean: 178.34561716666522 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.44379922073955,
            "unit": "iter/sec",
            "range": "stddev: 0.0007423253202459754",
            "extra": "mean: 9.761449766669255 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 314.6375642851944,
            "unit": "iter/sec",
            "range": "stddev: 0.00027875773395889017",
            "extra": "mean: 3.178260047467117 msec\nrounds: 316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 305.38168958963666,
            "unit": "iter/sec",
            "range": "stddev: 0.00021021079607221816",
            "extra": "mean: 3.274590566787982 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 319.67554972542564,
            "unit": "iter/sec",
            "range": "stddev: 0.00023977463541216632",
            "extra": "mean: 3.1281716754969713 msec\nrounds: 302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.26339294714894,
            "unit": "iter/sec",
            "range": "stddev: 0.0001493190200579627",
            "extra": "mean: 10.281360434787432 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12328.482366099322,
            "unit": "iter/sec",
            "range": "stddev: 0.000011134038517122516",
            "extra": "mean: 81.11298457544014 usec\nrounds: 4279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5286.824863470348,
            "unit": "iter/sec",
            "range": "stddev: 0.00004671739078075328",
            "extra": "mean: 189.14944713027347 usec\nrounds: 1655"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 150.0772233772372,
            "unit": "iter/sec",
            "range": "stddev: 0.0037798594315404457",
            "extra": "mean: 6.663236282606184 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1787.9771433901285,
            "unit": "iter/sec",
            "range": "stddev: 0.000009522548410756529",
            "extra": "mean: 559.291265940867 usec\nrounds: 1286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 49.796121592241946,
            "unit": "iter/sec",
            "range": "stddev: 0.0005388304900252156",
            "extra": "mean: 20.08188525581471 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 308.8271730585098,
            "unit": "iter/sec",
            "range": "stddev: 0.00021300189651737644",
            "extra": "mean: 3.2380570339597092 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.1785464444338,
            "unit": "iter/sec",
            "range": "stddev: 0.00010703120070822791",
            "extra": "mean: 6.090929793549182 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.28063290059248,
            "unit": "iter/sec",
            "range": "stddev: 0.0007911322059671968",
            "extra": "mean: 9.32134694737131 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.650910935975084,
            "unit": "iter/sec",
            "range": "stddev: 0.0007669003883750237",
            "extra": "mean: 31.594667275859642 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6643496867226955,
            "unit": "iter/sec",
            "range": "stddev: 0.1032511701835799",
            "extra": "mean: 1.505231386399987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5757.7339727768585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000455359068790337",
            "extra": "mean: 173.67943790527661 usec\nrounds: 1852"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.79560790480365,
            "unit": "iter/sec",
            "range": "stddev: 0.00009048353086323193",
            "extra": "mean: 13.193376603773155 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143798.8556048556,
            "unit": "iter/sec",
            "range": "stddev: 5.609441923718653e-7",
            "extra": "mean: 6.954158263594925 usec\nrounds: 39371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5468.967389182439,
            "unit": "iter/sec",
            "range": "stddev: 0.000052550663978750965",
            "extra": "mean: 182.8498743616555 usec\nrounds: 1958"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 335.96170322396495,
            "unit": "iter/sec",
            "range": "stddev: 0.000017046268399604997",
            "extra": "mean: 2.9765297365853676 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.95255875251293,
            "unit": "iter/sec",
            "range": "stddev: 0.00014353417098206516",
            "extra": "mean: 9.012861093456769 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.38434623038984,
            "unit": "iter/sec",
            "range": "stddev: 0.00030945912636102217",
            "extra": "mean: 3.5040464314489883 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71630.005655782,
            "unit": "iter/sec",
            "range": "stddev: 7.651566010113883e-7",
            "extra": "mean: 13.960629918214723 usec\nrounds: 13089"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.38198314225562,
            "unit": "iter/sec",
            "range": "stddev: 0.00016781815828742752",
            "extra": "mean: 7.386507250002593 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.23303639266848,
            "unit": "iter/sec",
            "range": "stddev: 0.0006079050598160883",
            "extra": "mean: 43.042157000002135 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.3434556456228,
            "unit": "iter/sec",
            "range": "stddev: 0.0007324601892431799",
            "extra": "mean: 8.822741412848558 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.740951913745874,
            "unit": "iter/sec",
            "range": "stddev: 0.003765976673740688",
            "extra": "mean: 574.3984036000029 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5084240970846894,
            "unit": "iter/sec",
            "range": "stddev: 0.003406485116021891",
            "extra": "mean: 398.65667100001474 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.04423303395232,
            "unit": "iter/sec",
            "range": "stddev: 0.000882528971608549",
            "extra": "mean: 9.00542038679528 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8476.776103214675,
            "unit": "iter/sec",
            "range": "stddev: 0.000016890539469646583",
            "extra": "mean: 117.96937748783606 usec\nrounds: 4220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5208.736092178551,
            "unit": "iter/sec",
            "range": "stddev: 0.00005312090787679993",
            "extra": "mean: 191.98515384597852 usec\nrounds: 2158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 232.42798183956435,
            "unit": "iter/sec",
            "range": "stddev: 0.004082167246241024",
            "extra": "mean: 4.302407963470851 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 61.07937519752138,
            "unit": "iter/sec",
            "range": "stddev: 0.00035481761245863736",
            "extra": "mean: 16.372138660000246 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.93129917692607,
            "unit": "iter/sec",
            "range": "stddev: 0.0001818346987962769",
            "extra": "mean: 6.5388838346498375 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5211.113437525232,
            "unit": "iter/sec",
            "range": "stddev: 0.000025582883516343782",
            "extra": "mean: 191.89756891473505 usec\nrounds: 2046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 680.726088870397,
            "unit": "iter/sec",
            "range": "stddev: 0.00005294276167942848",
            "extra": "mean: 1.4690196487979608 msec\nrounds: 541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1179.7378680981303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000746472174653357",
            "extra": "mean: 847.6459279993378 usec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 480474.31755210453,
            "unit": "iter/sec",
            "range": "stddev: 3.396318159850571e-7",
            "extra": "mean: 2.081276695692597 usec\nrounds: 2107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.28532154792626,
            "unit": "iter/sec",
            "range": "stddev: 0.00005840509784621154",
            "extra": "mean: 8.245020809091454 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1793509.714925418,
            "unit": "iter/sec",
            "range": "stddev: 1.389170928246312e-7",
            "extra": "mean: 557.565978973013 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 780569.5067512396,
            "unit": "iter/sec",
            "range": "stddev: 1.5974554849207557e-7",
            "extra": "mean: 1.2811158921157944 usec\nrounds: 22124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.5937711056851,
            "unit": "iter/sec",
            "range": "stddev: 0.0007514178289846976",
            "extra": "mean: 8.432146061944922 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 317.063337133716,
            "unit": "iter/sec",
            "range": "stddev: 0.00025377100669947845",
            "extra": "mean: 3.153943969176945 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.93968790476097,
            "unit": "iter/sec",
            "range": "stddev: 0.0007964363981592692",
            "extra": "mean: 10.759666000005726 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.51357667527964,
            "unit": "iter/sec",
            "range": "stddev: 0.0011981668694649218",
            "extra": "mean: 23.52189766666868 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12645.131218465025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017727560405055361",
            "extra": "mean: 79.08182072003747 usec\nrounds: 5193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 287.48678613309045,
            "unit": "iter/sec",
            "range": "stddev: 0.00005474853255475557",
            "extra": "mean: 3.478420742221715 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.675438236878,
            "unit": "iter/sec",
            "range": "stddev: 0.0002066358803405989",
            "extra": "mean: 10.343888977774895 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5449.550509512858,
            "unit": "iter/sec",
            "range": "stddev: 0.000050869678499834825",
            "extra": "mean: 183.50137286632676 usec\nrounds: 2226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.589459078006637,
            "unit": "iter/sec",
            "range": "stddev: 0.06779076854404058",
            "extra": "mean: 116.421766600007 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5604.815017941954,
            "unit": "iter/sec",
            "range": "stddev: 0.000053731110347921235",
            "extra": "mean: 178.4180203626404 usec\nrounds: 2259"
          }
        ]
      }
    ]
  }
}