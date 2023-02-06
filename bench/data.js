window.BENCHMARK_DATA = {
  "lastUpdate": 1675692842639,
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
          "id": "d85fb28676d0b1a56e07abe192fb4754a93043a6",
          "message": "fix(snowflake): return `NULL` when trying to call map functions on non-object JSON",
          "timestamp": "2023-02-06T09:06:22-05:00",
          "tree_id": "5244221897149d77f8668c6dc74392787b558e25",
          "url": "https://github.com/ibis-project/ibis/commit/d85fb28676d0b1a56e07abe192fb4754a93043a6"
        },
        "date": 1675692754018,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 203.4424384033544,
            "unit": "iter/sec",
            "range": "stddev: 0.0002486620978914854",
            "extra": "mean: 4.915395272727482 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.94882396350388,
            "unit": "iter/sec",
            "range": "stddev: 0.0004281492631952649",
            "extra": "mean: 12.353483979592514 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 50603.08583131607,
            "unit": "iter/sec",
            "range": "stddev: 0.000002123362420065789",
            "extra": "mean: 19.76164068992692 usec\nrounds: 11074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 89.23050888360606,
            "unit": "iter/sec",
            "range": "stddev: 0.0002379196871124165",
            "extra": "mean: 11.20692924999922 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.33888142630206,
            "unit": "iter/sec",
            "range": "stddev: 0.0018755232426301738",
            "extra": "mean: 230.47414800000183 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 103.24651480401752,
            "unit": "iter/sec",
            "range": "stddev: 0.00045276281432429734",
            "extra": "mean: 9.685556959459594 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8558.375289184629,
            "unit": "iter/sec",
            "range": "stddev: 0.00001785516960866318",
            "extra": "mean: 116.84460732444366 usec\nrounds: 3741"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.39990144106087,
            "unit": "iter/sec",
            "range": "stddev: 0.00028858760520242266",
            "extra": "mean: 18.72662632352854 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1287.5789619043192,
            "unit": "iter/sec",
            "range": "stddev: 0.00003048203124738685",
            "extra": "mean: 776.6513973799383 usec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.882560230932455,
            "unit": "iter/sec",
            "range": "stddev: 0.0008570531259724643",
            "extra": "mean: 33.464334791664406 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.17938079616901,
            "unit": "iter/sec",
            "range": "stddev: 0.0005390372360894972",
            "extra": "mean: 13.665051400002426 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 82.72534993151102,
            "unit": "iter/sec",
            "range": "stddev: 0.0007847774184825552",
            "extra": "mean: 12.088193048780187 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 126.591568042807,
            "unit": "iter/sec",
            "range": "stddev: 0.00017314500220908392",
            "extra": "mean: 7.899420280992565 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1415119.6327432322,
            "unit": "iter/sec",
            "range": "stddev: 3.5525287791434095e-7",
            "extra": "mean: 706.6540360700698 nsec\nrounds: 103083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3999.3102803285574,
            "unit": "iter/sec",
            "range": "stddev: 0.00006028320035557079",
            "extra": "mean: 250.0431149137662 usec\nrounds: 409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16828.025700860864,
            "unit": "iter/sec",
            "range": "stddev: 0.00001556450886876625",
            "extra": "mean: 59.42467748601332 usec\nrounds: 6285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3792.032956599818,
            "unit": "iter/sec",
            "range": "stddev: 0.00010491841320901513",
            "extra": "mean: 263.71078823551807 usec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 444.9631931404273,
            "unit": "iter/sec",
            "range": "stddev: 0.00005806659917325223",
            "extra": "mean: 2.2473768963726557 msec\nrounds: 386"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 134.7381187481392,
            "unit": "iter/sec",
            "range": "stddev: 0.0008205013788506999",
            "extra": "mean: 7.421804677778394 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 508367.57728154154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014813366799503672",
            "extra": "mean: 1.9670806020860474 usec\nrounds: 17605"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.645650120276297,
            "unit": "iter/sec",
            "range": "stddev: 0.006787191142532572",
            "extra": "mean: 1.5488264752000105 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 537.0922052935439,
            "unit": "iter/sec",
            "range": "stddev: 0.00003188831688807576",
            "extra": "mean: 1.8618777002236648 msec\nrounds: 447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 186.05897837317445,
            "unit": "iter/sec",
            "range": "stddev: 0.0005166881725118357",
            "extra": "mean: 5.374639852070572 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 363957.86091482994,
            "unit": "iter/sec",
            "range": "stddev: 4.2662477083804025e-7",
            "extra": "mean: 2.7475708245082 usec\nrounds: 1892"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4152.792091452814,
            "unit": "iter/sec",
            "range": "stddev: 0.00007055728196719061",
            "extra": "mean: 240.80184559640688 usec\nrounds: 1930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 216.10291865688322,
            "unit": "iter/sec",
            "range": "stddev: 0.0002846209151236399",
            "extra": "mean: 4.62742477619077 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 124.44567192124346,
            "unit": "iter/sec",
            "range": "stddev: 0.0008240559509557385",
            "extra": "mean: 8.035635024999976 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119843.93484700251,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011980576921062525",
            "extra": "mean: 8.34418530463506 usec\nrounds: 32255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9532432711690058,
            "unit": "iter/sec",
            "range": "stddev: 0.003122376611966568",
            "extra": "mean: 511.96899780000535 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 237.77546801343576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000894590391950515",
            "extra": "mean: 4.205648330144361 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.911398866399203,
            "unit": "iter/sec",
            "range": "stddev: 0.0005307103946976896",
            "extra": "mean: 83.95319569231236 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 70.27571816493774,
            "unit": "iter/sec",
            "range": "stddev: 0.0008020394513303891",
            "extra": "mean: 14.229666037037017 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 214.52926042489972,
            "unit": "iter/sec",
            "range": "stddev: 0.0003176818249408021",
            "extra": "mean: 4.661368794258582 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.167936335631985,
            "unit": "iter/sec",
            "range": "stddev: 0.030490598240831602",
            "extra": "mean: 36.8080956774201 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 136.28302323997838,
            "unit": "iter/sec",
            "range": "stddev: 0.0008415411106772405",
            "extra": "mean: 7.337671092305588 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7320766902240202,
            "unit": "iter/sec",
            "range": "stddev: 0.009539164085236519",
            "extra": "mean: 1.365977107799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 79.01362049371232,
            "unit": "iter/sec",
            "range": "stddev: 0.0009277980780516608",
            "extra": "mean: 12.656045802629398 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3686479306905768,
            "unit": "iter/sec",
            "range": "stddev: 0.0032802397081801177",
            "extra": "mean: 730.6480925999949 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4760.825866737231,
            "unit": "iter/sec",
            "range": "stddev: 0.00007651897792990798",
            "extra": "mean: 210.04759005927195 usec\nrounds: 2032"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3761764.29571407,
            "unit": "iter/sec",
            "range": "stddev: 3.8628803881311935e-8",
            "extra": "mean: 265.8327107681008 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 220.64393768822455,
            "unit": "iter/sec",
            "range": "stddev: 0.0002723074425906882",
            "extra": "mean: 4.532188876238354 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4708.701052686862,
            "unit": "iter/sec",
            "range": "stddev: 0.00006109655059668902",
            "extra": "mean: 212.3727942824877 usec\nrounds: 3043"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 121.56835926306276,
            "unit": "iter/sec",
            "range": "stddev: 0.0008570314162005891",
            "extra": "mean: 8.22582459829117 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 134.56472931269164,
            "unit": "iter/sec",
            "range": "stddev: 0.0008584238131185624",
            "extra": "mean: 7.4313678265295895 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.24289560826615,
            "unit": "iter/sec",
            "range": "stddev: 0.0008868218267209763",
            "extra": "mean: 12.619427802631758 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8498726.228128605,
            "unit": "iter/sec",
            "range": "stddev: 1.3719730561975662e-8",
            "extra": "mean: 117.66469152639435 nsec\nrounds: 80639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 236.86516054041292,
            "unit": "iter/sec",
            "range": "stddev: 0.0001248863107532207",
            "extra": "mean: 4.22181125210005 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11573830588273509,
            "unit": "iter/sec",
            "range": "stddev: 0.09818463914697859",
            "extra": "mean: 8.640181765 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9487.693842889112,
            "unit": "iter/sec",
            "range": "stddev: 0.000006286422763711831",
            "extra": "mean: 105.39969106923549 usec\nrounds: 3975"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5143960969862801,
            "unit": "iter/sec",
            "range": "stddev: 0.013325606596606964",
            "extra": "mean: 1.9440271920000043 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.57311810926579,
            "unit": "iter/sec",
            "range": "stddev: 0.0010871645391425644",
            "extra": "mean: 21.4716136818215 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 132.84082053341126,
            "unit": "iter/sec",
            "range": "stddev: 0.0008910675397348115",
            "extra": "mean: 7.527806558139157 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 221.05918396611406,
            "unit": "iter/sec",
            "range": "stddev: 0.0002485922149115712",
            "extra": "mean: 4.523675434146581 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 217.9091423999967,
            "unit": "iter/sec",
            "range": "stddev: 0.0002464987135275911",
            "extra": "mean: 4.589068586045774 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7307865773546555,
            "unit": "iter/sec",
            "range": "stddev: 0.009379781362028246",
            "extra": "mean: 1.3683885705999956 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4807.990527606514,
            "unit": "iter/sec",
            "range": "stddev: 0.00006316948753588889",
            "extra": "mean: 207.98709861390145 usec\nrounds: 1876"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 76.39980502038193,
            "unit": "iter/sec",
            "range": "stddev: 0.0002029885108188714",
            "extra": "mean: 13.08903863999679 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 126.91386540536178,
            "unit": "iter/sec",
            "range": "stddev: 0.00017426771895320668",
            "extra": "mean: 7.879359728001418 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1284532.073925583,
            "unit": "iter/sec",
            "range": "stddev: 2.896256571958131e-7",
            "extra": "mean: 778.4936011320907 nsec\nrounds: 105253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 134.76296716895322,
            "unit": "iter/sec",
            "range": "stddev: 0.0009207293168631707",
            "extra": "mean: 7.420436200000652 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.041004051236264,
            "unit": "iter/sec",
            "range": "stddev: 0.001205470639445562",
            "extra": "mean: 30.265424090905732 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.88416126827206,
            "unit": "iter/sec",
            "range": "stddev: 0.0004714926748343906",
            "extra": "mean: 29.512313794125543 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 125.71214965763305,
            "unit": "iter/sec",
            "range": "stddev: 0.00010464103141925124",
            "extra": "mean: 7.954680615385383 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1292402.0005937433,
            "unit": "iter/sec",
            "range": "stddev: 4.0740516967759657e-7",
            "extra": "mean: 773.7530579034923 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4642585.354617928,
            "unit": "iter/sec",
            "range": "stddev: 2.1705863050051457e-8",
            "extra": "mean: 215.3972245239481 nsec\nrounds: 49015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.953168127373699,
            "unit": "iter/sec",
            "range": "stddev: 0.0007902471374934138",
            "extra": "mean: 125.73605687501299 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 82.00990392283033,
            "unit": "iter/sec",
            "range": "stddev: 0.0008180458070030983",
            "extra": "mean: 12.193649207795438 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.202809589242705,
            "unit": "iter/sec",
            "range": "stddev: 0.0006949843993537643",
            "extra": "mean: 22.12251869047491 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.39581362577115,
            "unit": "iter/sec",
            "range": "stddev: 0.0008776257535813576",
            "extra": "mean: 13.089722493153248 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 358.7696131960983,
            "unit": "iter/sec",
            "range": "stddev: 0.00018392579064136286",
            "extra": "mean: 2.7873040614881015 msec\nrounds: 309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 60.64730930901251,
            "unit": "iter/sec",
            "range": "stddev: 0.00033789014381768024",
            "extra": "mean: 16.48877767857369 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1304576.4965793728,
            "unit": "iter/sec",
            "range": "stddev: 3.421897978112252e-7",
            "extra": "mean: 766.5322827921714 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 63.600924719290504,
            "unit": "iter/sec",
            "range": "stddev: 0.021450931430183093",
            "extra": "mean: 15.723041833331939 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3574.69149288156,
            "unit": "iter/sec",
            "range": "stddev: 0.00005582703167222511",
            "extra": "mean: 279.7444204601555 usec\nrounds: 1867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 153.14779816853064,
            "unit": "iter/sec",
            "range": "stddev: 0.00013890424792057046",
            "extra": "mean: 6.529640072915417 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3668547.649258329,
            "unit": "iter/sec",
            "range": "stddev: 4.957833558899238e-8",
            "extra": "mean: 272.5874366663864 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 227.32331571631187,
            "unit": "iter/sec",
            "range": "stddev: 0.00022372966111324738",
            "extra": "mean: 4.399020825685783 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.89847811284251,
            "unit": "iter/sec",
            "range": "stddev: 0.0009336648064466953",
            "extra": "mean: 47.85037430000614 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 836.1193871562084,
            "unit": "iter/sec",
            "range": "stddev: 0.00005763299830011739",
            "extra": "mean: 1.1960014507033245 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4597.675041418507,
            "unit": "iter/sec",
            "range": "stddev: 0.00006059525130101719",
            "extra": "mean: 217.50123507890916 usec\nrounds: 1910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9649.336470249154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060786572698770855",
            "extra": "mean: 103.63406883812179 usec\nrounds: 4881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 240.42448056047436,
            "unit": "iter/sec",
            "range": "stddev: 0.00010741533777254068",
            "extra": "mean: 4.159310223604574 msec\nrounds: 161"
          }
        ]
      }
    ]
  }
}