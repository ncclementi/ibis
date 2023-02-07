window.BENCHMARK_DATA = {
  "lastUpdate": 1675772685805,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "8f34a2b1ee96a45762699d78d01b7c4b16f104a2",
          "message": "fix(mysql): remove invalid operations",
          "timestamp": "2023-02-07T07:19:14-05:00",
          "tree_id": "6b67df752b1ec2f0cabcb686afac673f598a70cf",
          "url": "https://github.com/ibis-project/ibis/commit/8f34a2b1ee96a45762699d78d01b7c4b16f104a2"
        },
        "date": 1675772612174,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 143.754759971054,
            "unit": "iter/sec",
            "range": "stddev: 0.006960764199772795",
            "extra": "mean: 6.956291396551717 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1418.7760507253747,
            "unit": "iter/sec",
            "range": "stddev: 0.000017128192336756008",
            "extra": "mean: 704.8328730166625 usec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 262.11817943426144,
            "unit": "iter/sec",
            "range": "stddev: 0.00002747967469355522",
            "extra": "mean: 3.815073041321796 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1523956.633802776,
            "unit": "iter/sec",
            "range": "stddev: 1.265313868442531e-7",
            "extra": "mean: 656.1866511284309 nsec\nrounds: 78119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4108.205579314723,
            "unit": "iter/sec",
            "range": "stddev: 0.00020913440376883096",
            "extra": "mean: 243.41527722836278 usec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 588206.5893785517,
            "unit": "iter/sec",
            "range": "stddev: 3.525752620964994e-7",
            "extra": "mean: 1.7000829607443086 usec\nrounds: 20576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 219.45251081649758,
            "unit": "iter/sec",
            "range": "stddev: 0.006499339365489941",
            "extra": "mean: 4.55679452597461 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.97360811025908,
            "unit": "iter/sec",
            "range": "stddev: 0.00019545709003212125",
            "extra": "mean: 6.945717434782711 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 244.4421668892846,
            "unit": "iter/sec",
            "range": "stddev: 0.00023263369217520137",
            "extra": "mean: 4.090947207373312 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 173.0823713767083,
            "unit": "iter/sec",
            "range": "stddev: 0.00006498567937279836",
            "extra": "mean: 5.777595904458298 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 363752.5124983995,
            "unit": "iter/sec",
            "range": "stddev: 5.249001071082096e-7",
            "extra": "mean: 2.74912190470272 usec\nrounds: 2100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.702644021534677,
            "unit": "iter/sec",
            "range": "stddev: 0.010959895330385749",
            "extra": "mean: 212.64633159999562 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5851795561462398,
            "unit": "iter/sec",
            "range": "stddev: 0.002675975209440481",
            "extra": "mean: 1.7088771976000032 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10772.08686771277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018917925684066298",
            "extra": "mean: 92.83252282315927 usec\nrounds: 5214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.63161293203441,
            "unit": "iter/sec",
            "range": "stddev: 0.00009629206689335302",
            "extra": "mean: 6.962255589743977 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5369.713320968538,
            "unit": "iter/sec",
            "range": "stddev: 0.00004952798929688162",
            "extra": "mean: 186.2296812187414 usec\nrounds: 2199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.521107872783343,
            "unit": "iter/sec",
            "range": "stddev: 0.0011573463281878988",
            "extra": "mean: 42.51500419999843 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 117.89110076495182,
            "unit": "iter/sec",
            "range": "stddev: 0.00039915872921735327",
            "extra": "mean: 8.482404469136087 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 83.93610675369231,
            "unit": "iter/sec",
            "range": "stddev: 0.00036614810305261256",
            "extra": "mean: 11.913823962963477 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9756.770640688335,
            "unit": "iter/sec",
            "range": "stddev: 0.000013879989851675973",
            "extra": "mean: 102.49292894410506 usec\nrounds: 1534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.96483964178048,
            "unit": "iter/sec",
            "range": "stddev: 0.001225655134241701",
            "extra": "mean: 17.868361749998677 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 270.1217019567824,
            "unit": "iter/sec",
            "range": "stddev: 0.00004426119589346684",
            "extra": "mean: 3.702035018867137 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5519.2211103033205,
            "unit": "iter/sec",
            "range": "stddev: 0.00004856936989225276",
            "extra": "mean: 181.18498607225445 usec\nrounds: 359"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58200.419898485314,
            "unit": "iter/sec",
            "range": "stddev: 4.733303166328287e-7",
            "extra": "mean: 17.18200662029975 usec\nrounds: 11933"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.5003812166947,
            "unit": "iter/sec",
            "range": "stddev: 0.0006177423597510546",
            "extra": "mean: 10.58196789393837 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5459766876405712,
            "unit": "iter/sec",
            "range": "stddev: 0.0016457176031107123",
            "extra": "mean: 646.8402841999989 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 157.5406418621588,
            "unit": "iter/sec",
            "range": "stddev: 0.0007457709253677651",
            "extra": "mean: 6.347568400000277 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 155.06375103540216,
            "unit": "iter/sec",
            "range": "stddev: 0.0007527821105543649",
            "extra": "mean: 6.448960465116652 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.730960348764085,
            "unit": "iter/sec",
            "range": "stddev: 0.008170414715633546",
            "extra": "mean: 1.368063263199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.41134821441622,
            "unit": "iter/sec",
            "range": "stddev: 0.0002024053181685554",
            "extra": "mean: 6.738029214283919 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.03702827673618,
            "unit": "iter/sec",
            "range": "stddev: 0.0007030829690504836",
            "extra": "mean: 12.340037897059416 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1507342.8339576975,
            "unit": "iter/sec",
            "range": "stddev: 1.3442255634831452e-7",
            "extra": "mean: 663.4190825549539 nsec\nrounds: 178540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4705.115630660447,
            "unit": "iter/sec",
            "range": "stddev: 0.00010710336122651687",
            "extra": "mean: 212.53462794486774 usec\nrounds: 1825"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4191449.6821877747,
            "unit": "iter/sec",
            "range": "stddev: 1.1130135807843935e-8",
            "extra": "mean: 238.58093877434172 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 273.7683538902805,
            "unit": "iter/sec",
            "range": "stddev: 0.0001735428057010576",
            "extra": "mean: 3.6527231354167946 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.20740322034759,
            "unit": "iter/sec",
            "range": "stddev: 0.0003058978433255763",
            "extra": "mean: 9.880700108694732 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5175.5936242990265,
            "unit": "iter/sec",
            "range": "stddev: 0.00005257448258729899",
            "extra": "mean: 193.21455133283155 usec\nrounds: 2026"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.178891614001962,
            "unit": "iter/sec",
            "range": "stddev: 0.034410957688003285",
            "extra": "mean: 35.48755620689866 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8775494188589814,
            "unit": "iter/sec",
            "range": "stddev: 0.00211601572203148",
            "extra": "mean: 1.1395369634000019 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19004.776533851564,
            "unit": "iter/sec",
            "range": "stddev: 0.000014977041486871383",
            "extra": "mean: 52.61835087714852 usec\nrounds: 4617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11036063.213015981,
            "unit": "iter/sec",
            "range": "stddev: 3.6397944178237355e-9",
            "extra": "mean: 90.61202175987452 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 252.26697009817474,
            "unit": "iter/sec",
            "range": "stddev: 0.00023876583403214705",
            "extra": "mean: 3.9640544285715644 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1525469.3853739148,
            "unit": "iter/sec",
            "range": "stddev: 1.0014795613622381e-7",
            "extra": "mean: 655.5359350950758 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1709163.6543427247,
            "unit": "iter/sec",
            "range": "stddev: 1.0284526858126441e-7",
            "extra": "mean: 585.0814797396097 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 140.3141640736669,
            "unit": "iter/sec",
            "range": "stddev: 0.0009378076332625094",
            "extra": "mean: 7.126864252100638 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.405870648123521,
            "unit": "iter/sec",
            "range": "stddev: 0.00033958406590893074",
            "extra": "mean: 74.59418535714235 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.75382234974455,
            "unit": "iter/sec",
            "range": "stddev: 0.0005413215898976354",
            "extra": "mean: 27.208054457142747 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 73.19178392701963,
            "unit": "iter/sec",
            "range": "stddev: 0.02365293588969363",
            "extra": "mean: 13.662735710843057 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.457452093940816,
            "unit": "iter/sec",
            "range": "stddev: 0.0017019240938204155",
            "extra": "mean: 26.696957323527133 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13174047431544333,
            "unit": "iter/sec",
            "range": "stddev: 0.0977352026638677",
            "extra": "mean: 7.5906816427999955 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 506.387120565483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000230744458817828",
            "extra": "mean: 1.9747737637625913 msec\nrounds: 436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 212.0675938702614,
            "unit": "iter/sec",
            "range": "stddev: 0.00041818911992155393",
            "extra": "mean: 4.715477653845498 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 402.83976384202225,
            "unit": "iter/sec",
            "range": "stddev: 0.000042379559805557055",
            "extra": "mean: 2.482376591780945 msec\nrounds: 365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 136.51232146920455,
            "unit": "iter/sec",
            "range": "stddev: 0.02317727049075405",
            "extra": "mean: 7.3253460877199075 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 241.35606636142438,
            "unit": "iter/sec",
            "range": "stddev: 0.0002510568589566599",
            "extra": "mean: 4.143256123931545 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.28069302907134,
            "unit": "iter/sec",
            "range": "stddev: 0.0002554293003812454",
            "extra": "mean: 10.60662546987909 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5509111.752846404,
            "unit": "iter/sec",
            "range": "stddev: 5.577639407696286e-9",
            "extra": "mean: 181.51746504023725 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.25768122871402,
            "unit": "iter/sec",
            "range": "stddev: 0.0006123391233903624",
            "extra": "mean: 15.092589741378259 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.78730203866033,
            "unit": "iter/sec",
            "range": "stddev: 0.000782575192346786",
            "extra": "mean: 11.391169073172037 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10751.997538293557,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017691796738826445",
            "extra": "mean: 93.00597367498183 usec\nrounds: 5622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 243.86776986455297,
            "unit": "iter/sec",
            "range": "stddev: 0.00026153975369352066",
            "extra": "mean: 4.100582871428282 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.36663759538189,
            "unit": "iter/sec",
            "range": "stddev: 0.0008317354014772993",
            "extra": "mean: 10.826419863636971 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.9237469039989,
            "unit": "iter/sec",
            "range": "stddev: 0.03168421317544177",
            "extra": "mean: 30.37321368420982 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 249.2272106312068,
            "unit": "iter/sec",
            "range": "stddev: 0.00025552032020037925",
            "extra": "mean: 4.012402969432367 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 154.51594447549462,
            "unit": "iter/sec",
            "range": "stddev: 0.0007416321481888502",
            "extra": "mean: 6.471824013984489 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.05078157315237,
            "unit": "iter/sec",
            "range": "stddev: 0.0004899019372944711",
            "extra": "mean: 110.48769566667399 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4518.378601929559,
            "unit": "iter/sec",
            "range": "stddev: 0.00005156580712940699",
            "extra": "mean: 221.3183285643556 usec\nrounds: 1957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 599.5398103307034,
            "unit": "iter/sec",
            "range": "stddev: 0.00011185883269116923",
            "extra": "mean: 1.6679459524938047 msec\nrounds: 421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 934.3263917468875,
            "unit": "iter/sec",
            "range": "stddev: 0.000050714925009456614",
            "extra": "mean: 1.0702897925534611 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 123529.46829478616,
            "unit": "iter/sec",
            "range": "stddev: 5.205213275886627e-7",
            "extra": "mean: 8.095234390660835 usec\nrounds: 38022"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 154.53986104351353,
            "unit": "iter/sec",
            "range": "stddev: 0.0008088769216789589",
            "extra": "mean: 6.470822435374338 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5362.407061036096,
            "unit": "iter/sec",
            "range": "stddev: 0.00006247054106686822",
            "extra": "mean: 186.48341847565473 usec\nrounds: 2165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.22585940044834,
            "unit": "iter/sec",
            "range": "stddev: 0.0008938539913979651",
            "extra": "mean: 11.083297035295747 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 70.1159106383947,
            "unit": "iter/sec",
            "range": "stddev: 0.024677394928275417",
            "extra": "mean: 14.26209815853709 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4124.730273511948,
            "unit": "iter/sec",
            "range": "stddev: 0.00004245401767588159",
            "extra": "mean: 242.44009515525556 usec\nrounds: 1734"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 138.90289032328405,
            "unit": "iter/sec",
            "range": "stddev: 0.0007797559019883978",
            "extra": "mean: 7.199274238805179 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 59.91041942218687,
            "unit": "iter/sec",
            "range": "stddev: 0.0005823360334882664",
            "extra": "mean: 16.691587367349758 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8637098240177977,
            "unit": "iter/sec",
            "range": "stddev: 0.002195823306796125",
            "extra": "mean: 1.157796255400001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2306408989097757,
            "unit": "iter/sec",
            "range": "stddev: 0.005357901130281286",
            "extra": "mean: 448.30165199999215 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.81627542444835,
            "unit": "iter/sec",
            "range": "stddev: 0.00006464193326537486",
            "extra": "mean: 11.25919765517133 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4597920.822909076,
            "unit": "iter/sec",
            "range": "stddev: 1.3612328450916428e-8",
            "extra": "mean: 217.48960856773013 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.077631067026935,
            "unit": "iter/sec",
            "range": "stddev: 0.0005099603596786605",
            "extra": "mean: 19.968995711109805 msec\nrounds: 45"
          }
        ]
      }
    ]
  }
}