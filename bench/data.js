window.BENCHMARK_DATA = {
  "lastUpdate": 1681128485114,
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
          "id": "ea10a2752e02ab8e30396f7e5244b6a20c80ddd3",
          "message": "fix(clickhouse): ensure that clickhouse depends on sqlalchemy for `make_url` usage",
          "timestamp": "2023-04-10T07:59:07-04:00",
          "tree_id": "4a161bdb68d0ca879fc2ace4bb12a8d376c8dbb5",
          "url": "https://github.com/ibis-project/ibis/commit/ea10a2752e02ab8e30396f7e5244b6a20c80ddd3"
        },
        "date": 1681128389389,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1527.7777133430961,
            "unit": "iter/sec",
            "range": "stddev: 0.00024835934531382004",
            "extra": "mean: 654.5454821511905 usec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 517.8309923907121,
            "unit": "iter/sec",
            "range": "stddev: 0.0002804223357123516",
            "extra": "mean: 1.931132000004904 msec\nrounds: 350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 386.4186703491458,
            "unit": "iter/sec",
            "range": "stddev: 0.00023481181084269756",
            "extra": "mean: 2.587866676049729 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 189.91833645079785,
            "unit": "iter/sec",
            "range": "stddev: 0.0009872713351008913",
            "extra": "mean: 5.265421015621996 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 72.77322457664263,
            "unit": "iter/sec",
            "range": "stddev: 0.0011349854773067723",
            "extra": "mean: 13.741317714275933 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 67.51459223866078,
            "unit": "iter/sec",
            "range": "stddev: 0.012872258236050108",
            "extra": "mean: 14.811612820900242 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 130.3654265643144,
            "unit": "iter/sec",
            "range": "stddev: 0.004054121612640398",
            "extra": "mean: 7.670745429630154 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 71.76728868151827,
            "unit": "iter/sec",
            "range": "stddev: 0.0016057785124746473",
            "extra": "mean: 13.933924750002754 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9450204.358086148,
            "unit": "iter/sec",
            "range": "stddev: 1.754307530459956e-7",
            "extra": "mean: 105.81781748929889 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 121.18842703788059,
            "unit": "iter/sec",
            "range": "stddev: 0.0008718629214896178",
            "extra": "mean: 8.25161300003856 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 27.787495425126384,
            "unit": "iter/sec",
            "range": "stddev: 0.0030985865380762268",
            "extra": "mean: 35.98741033334608 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 204.23026126092066,
            "unit": "iter/sec",
            "range": "stddev: 0.000881128711433372",
            "extra": "mean: 4.89643402415482 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1542.9135317048463,
            "unit": "iter/sec",
            "range": "stddev: 0.00019343044252809283",
            "extra": "mean: 648.1244602832975 usec\nrounds: 919"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 64.23067822908956,
            "unit": "iter/sec",
            "range": "stddev: 0.0013920473668974874",
            "extra": "mean: 15.568884333329489 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 56.45811059428997,
            "unit": "iter/sec",
            "range": "stddev: 0.0010127351645423067",
            "extra": "mean: 17.71224700001097 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1645.3213359963195,
            "unit": "iter/sec",
            "range": "stddev: 0.00017047468707554063",
            "extra": "mean: 607.7840104069719 usec\nrounds: 1249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 66.3448767646704,
            "unit": "iter/sec",
            "range": "stddev: 0.017576782145571478",
            "extra": "mean: 15.072753900004443 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.212183069021755,
            "unit": "iter/sec",
            "range": "stddev: 0.002266465057160456",
            "extra": "mean: 24.868085333331972 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5406664356845244,
            "unit": "iter/sec",
            "range": "stddev: 0.02141720608583328",
            "extra": "mean: 1.8495692241999904 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10101897513727637,
            "unit": "iter/sec",
            "range": "stddev: 0.140704616246901",
            "extra": "mean: 9.899130323200007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 94.03529416174871,
            "unit": "iter/sec",
            "range": "stddev: 0.0012086711287750127",
            "extra": "mean: 10.634305011902393 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 125466.01329843288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050302483830335006",
            "extra": "mean: 7.970285926128892 usec\nrounds: 30396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 196.80667285013848,
            "unit": "iter/sec",
            "range": "stddev: 0.000845952280031494",
            "extra": "mean: 5.081128528408515 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 217.10857406351028,
            "unit": "iter/sec",
            "range": "stddev: 0.000803814076306793",
            "extra": "mean: 4.605990363639311 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1573977.1247149801,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014837395134613125",
            "extra": "mean: 635.3332486843368 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.364202172216384,
            "unit": "iter/sec",
            "range": "stddev: 0.001919730905913908",
            "extra": "mean: 54.453767750004545 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 125.63274434398697,
            "unit": "iter/sec",
            "range": "stddev: 0.0007467847263814301",
            "extra": "mean: 7.9597083166627645 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 77.76652676909978,
            "unit": "iter/sec",
            "range": "stddev: 0.0013739352350392536",
            "extra": "mean: 12.859002986839654 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1371.9079977508145,
            "unit": "iter/sec",
            "range": "stddev: 0.00018685105638021002",
            "extra": "mean: 728.9118524270272 usec\nrounds: 969"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1610.6902253771962,
            "unit": "iter/sec",
            "range": "stddev: 0.00022048451352392633",
            "extra": "mean: 620.85184614926 usec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 64.036433090471,
            "unit": "iter/sec",
            "range": "stddev: 0.022927622092889472",
            "extra": "mean: 15.616110263155898 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4234212.444310975,
            "unit": "iter/sec",
            "range": "stddev: 3.943716151338171e-7",
            "extra": "mean: 236.17142813526064 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 73.13617389220614,
            "unit": "iter/sec",
            "range": "stddev: 0.0010619874338305814",
            "extra": "mean: 13.673124348477385 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 401166.9018462279,
            "unit": "iter/sec",
            "range": "stddev: 0.000001950288976848944",
            "extra": "mean: 2.492728077510522 usec\nrounds: 1699"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 85.41990827765693,
            "unit": "iter/sec",
            "range": "stddev: 0.0013744551641621562",
            "extra": "mean: 11.70687279070244 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3320.343885045141,
            "unit": "iter/sec",
            "range": "stddev: 0.00012552902878512973",
            "extra": "mean: 301.173623763493 usec\nrounds: 808"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.272599563328042,
            "unit": "iter/sec",
            "range": "stddev: 0.004123698804526224",
            "extra": "mean: 234.04954879999877 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.69768885903571,
            "unit": "iter/sec",
            "range": "stddev: 0.002209243063617585",
            "extra": "mean: 31.548041387091253 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2123535.2853605403,
            "unit": "iter/sec",
            "range": "stddev: 3.684730585330526e-7",
            "extra": "mean: 470.9128248981125 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.733512786715724,
            "unit": "iter/sec",
            "range": "stddev: 0.010706533211247631",
            "extra": "mean: 576.8633537999904 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1637.7316375814194,
            "unit": "iter/sec",
            "range": "stddev: 0.00017426093765897653",
            "extra": "mean: 610.6006485145435 usec\nrounds: 1010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 73.25446610321887,
            "unit": "iter/sec",
            "range": "stddev: 0.0011903376493804286",
            "extra": "mean: 13.651044819451071 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5253194527294662,
            "unit": "iter/sec",
            "range": "stddev: 0.01802399212859079",
            "extra": "mean: 1.9036035973999788 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 77.22827692063343,
            "unit": "iter/sec",
            "range": "stddev: 0.0013458989244132138",
            "extra": "mean: 12.948625035719596 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2075016.7005254633,
            "unit": "iter/sec",
            "range": "stddev: 9.447176558147e-7",
            "extra": "mean: 481.9238321053229 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1651.4386284835884,
            "unit": "iter/sec",
            "range": "stddev: 0.00023064199795947037",
            "extra": "mean: 605.5326445392868 usec\nrounds: 467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 190.83333682199356,
            "unit": "iter/sec",
            "range": "stddev: 0.0009470116964790185",
            "extra": "mean: 5.2401745766924615 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 174.82086103732843,
            "unit": "iter/sec",
            "range": "stddev: 0.0046861899908097904",
            "extra": "mean: 5.720141143718976 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 75.51214266104327,
            "unit": "iter/sec",
            "range": "stddev: 0.0012326310436846372",
            "extra": "mean: 13.242903257145956 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 640911.9779652558,
            "unit": "iter/sec",
            "range": "stddev: 0.000001935727081538688",
            "extra": "mean: 1.5602766594794557 usec\nrounds: 24391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.80760246399359,
            "unit": "iter/sec",
            "range": "stddev: 0.0028388418522929185",
            "extra": "mean: 84.69119815385267 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.07968349947066,
            "unit": "iter/sec",
            "range": "stddev: 0.00120161583304599",
            "extra": "mean: 11.225904277106489 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1478118.219170745,
            "unit": "iter/sec",
            "range": "stddev: 0.000001508888931352209",
            "extra": "mean: 676.5358731326787 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 68.98029705654103,
            "unit": "iter/sec",
            "range": "stddev: 0.001705260579230048",
            "extra": "mean: 14.496893209670157 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 73.26525100008581,
            "unit": "iter/sec",
            "range": "stddev: 0.0013931238406768292",
            "extra": "mean: 13.649035338715057 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10498.334819807465,
            "unit": "iter/sec",
            "range": "stddev: 0.00010692961860524996",
            "extra": "mean: 95.25320130896144 usec\nrounds: 6721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5045345726850773,
            "unit": "iter/sec",
            "range": "stddev: 0.02472278397143963",
            "extra": "mean: 1.9820247296000162 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5199856479094,
            "unit": "iter/sec",
            "range": "stddev: 0.015169842850354233",
            "extra": "mean: 1.923130001800041 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 58.71159891425066,
            "unit": "iter/sec",
            "range": "stddev: 0.028917771275758845",
            "extra": "mean: 17.03240958333494 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.449684087727654,
            "unit": "iter/sec",
            "range": "stddev: 0.002279838441791146",
            "extra": "mean: 30.816940999995627 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.926000537877826,
            "unit": "iter/sec",
            "range": "stddev: 0.002379807588998484",
            "extra": "mean: 19.25817489584129 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 73.02475508743987,
            "unit": "iter/sec",
            "range": "stddev: 0.0016749706667025545",
            "extra": "mean: 13.69398635849719 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0581232967759593,
            "unit": "iter/sec",
            "range": "stddev: 0.02360938768080963",
            "extra": "mean: 945.0694480000038 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 102.37686969420547,
            "unit": "iter/sec",
            "range": "stddev: 0.0009280692187891157",
            "extra": "mean: 9.767831376237128 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 578.4128723063847,
            "unit": "iter/sec",
            "range": "stddev: 0.0002600024963620658",
            "extra": "mean: 1.728868854547727 msec\nrounds: 495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4797507.724155824,
            "unit": "iter/sec",
            "range": "stddev: 1.5631537753991749e-7",
            "extra": "mean: 208.44156122246233 nsec\nrounds: 43479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 85.53676829615202,
            "unit": "iter/sec",
            "range": "stddev: 0.0007199118387973228",
            "extra": "mean: 11.690878904119018 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8451.835142032765,
            "unit": "iter/sec",
            "range": "stddev: 0.00008805297967976714",
            "extra": "mean: 118.31749947733695 usec\nrounds: 3830"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 201.45261720519372,
            "unit": "iter/sec",
            "range": "stddev: 0.0009707575693313605",
            "extra": "mean: 4.963946430050245 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5068796.484373493,
            "unit": "iter/sec",
            "range": "stddev: 9.95240067718082e-7",
            "extra": "mean: 197.2854903688886 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 75.05794548447363,
            "unit": "iter/sec",
            "range": "stddev: 0.0019609351745240927",
            "extra": "mean: 13.323039866670191 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1643.5100148078968,
            "unit": "iter/sec",
            "range": "stddev: 0.0001542427524568817",
            "extra": "mean: 608.4538524195643 usec\nrounds: 847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.76697152182924,
            "unit": "iter/sec",
            "range": "stddev: 0.0018985999156580686",
            "extra": "mean: 30.518536000002427 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.7523990569286045,
            "unit": "iter/sec",
            "range": "stddev: 0.0028327653996024793",
            "extra": "mean: 128.99232774998382 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 58.59287087130895,
            "unit": "iter/sec",
            "range": "stddev: 0.02733095634498592",
            "extra": "mean: 17.06692273529932 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 148.96155729182007,
            "unit": "iter/sec",
            "range": "stddev: 0.0006042580109320706",
            "extra": "mean: 6.713141418365884 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 71.07551894512446,
            "unit": "iter/sec",
            "range": "stddev: 0.0015148820600913886",
            "extra": "mean: 14.069542014488475 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 181.0642576321488,
            "unit": "iter/sec",
            "range": "stddev: 0.0005513673436206728",
            "extra": "mean: 5.522901168222863 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 126.90644412525367,
            "unit": "iter/sec",
            "range": "stddev: 0.0005607966180516447",
            "extra": "mean: 7.879820499997806 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 927.7165848382472,
            "unit": "iter/sec",
            "range": "stddev: 0.00016475617819139543",
            "extra": "mean: 1.0779154068635692 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 234.7108706917939,
            "unit": "iter/sec",
            "range": "stddev: 0.0006050273001251404",
            "extra": "mean: 4.2605610769223 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 190.7434991557982,
            "unit": "iter/sec",
            "range": "stddev: 0.0010697613597712556",
            "extra": "mean: 5.2426426296353394 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 202.28821490220085,
            "unit": "iter/sec",
            "range": "stddev: 0.0006575299623595805",
            "extra": "mean: 4.943441714997903 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9275.183453563492,
            "unit": "iter/sec",
            "range": "stddev: 0.00014675586965902796",
            "extra": "mean: 107.8145790869294 usec\nrounds: 1884"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58967.82181926987,
            "unit": "iter/sec",
            "range": "stddev: 0.000006697328397487458",
            "extra": "mean: 16.958401534058595 usec\nrounds: 9125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.26739038707959,
            "unit": "iter/sec",
            "range": "stddev: 0.0014709619167724709",
            "extra": "mean: 23.658900888891466 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1541.0593217939017,
            "unit": "iter/sec",
            "range": "stddev: 0.00039892553171084794",
            "extra": "mean: 648.9042867187808 usec\nrounds: 994"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5761.976215201934,
            "unit": "iter/sec",
            "range": "stddev: 0.00017095126392641265",
            "extra": "mean: 173.55156679780814 usec\nrounds: 3578"
          }
        ]
      }
    ]
  }
}