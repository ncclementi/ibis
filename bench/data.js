window.BENCHMARK_DATA = {
  "lastUpdate": 1675952585079,
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
          "id": "9a5737dcb8b53c06581df8d65515d0eebc5ed7df",
          "message": "ci(snowflake): don't reset the random number seed for every test\n\nSnowflake uses the `random` module to generate temporary stage names.\nWhen the random seed is reset to a fixed value for each test, the\n`CREATE TEMP STAGE` step that is part of the `write_pandas` call will\nfail because a duplicate stage is being created. In practice this is not\na huge problem because most users aren't setting the random seed and\nthis is also a `snowflake-connector-python` problem: they should\nprobably be generating names using UUIDs instead of an arbitrary length\nstring.",
          "timestamp": "2023-02-09T09:08:30-05:00",
          "tree_id": "ab6c1457e93465caf39af23fdf1d5d54de696e4b",
          "url": "https://github.com/ibis-project/ibis/commit/9a5737dcb8b53c06581df8d65515d0eebc5ed7df"
        },
        "date": 1675952500770,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1467445.4792862586,
            "unit": "iter/sec",
            "range": "stddev: 9.92963485167761e-8",
            "extra": "mean: 681.4563226474237 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.9065279633342715,
            "unit": "iter/sec",
            "range": "stddev: 0.0005943385647065668",
            "extra": "mean: 203.81010919999767 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 406.6957930574244,
            "unit": "iter/sec",
            "range": "stddev: 0.000038847917255630164",
            "extra": "mean: 2.4588402857140017 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12035836.026538933,
            "unit": "iter/sec",
            "range": "stddev: 4.49214862497211e-9",
            "extra": "mean: 83.08521300834524 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 157.11207053194386,
            "unit": "iter/sec",
            "range": "stddev: 0.0006221185899111691",
            "extra": "mean: 6.3648833384617705 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.7244790239393,
            "unit": "iter/sec",
            "range": "stddev: 0.00010956903209287754",
            "extra": "mean: 6.957756999998839 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.61892037831049,
            "unit": "iter/sec",
            "range": "stddev: 0.0001230004126060336",
            "extra": "mean: 10.796929999997928 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 239.1340599856454,
            "unit": "iter/sec",
            "range": "stddev: 0.00020105909519123292",
            "extra": "mean: 4.18175478666664 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.61911264726783,
            "unit": "iter/sec",
            "range": "stddev: 0.000644937340995514",
            "extra": "mean: 11.158334092593657 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.42670317960944,
            "unit": "iter/sec",
            "range": "stddev: 0.021171216229923625",
            "extra": "mean: 30.83878106451537 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1483818.8772591115,
            "unit": "iter/sec",
            "range": "stddev: 1.3303960304489618e-7",
            "extra": "mean: 673.9367016594272 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7497086907920418,
            "unit": "iter/sec",
            "range": "stddev: 0.0029532010879932983",
            "extra": "mean: 1.3338514175999934 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.66684944548282,
            "unit": "iter/sec",
            "range": "stddev: 0.00009091729713703733",
            "extra": "mean: 14.563068031742702 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15406720133662363,
            "unit": "iter/sec",
            "range": "stddev: 0.05373600060495369",
            "extra": "mean: 6.490674143000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 250.09317077219828,
            "unit": "iter/sec",
            "range": "stddev: 0.0002081803526438332",
            "extra": "mean: 3.998509823008592 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 161.2434131471812,
            "unit": "iter/sec",
            "range": "stddev: 0.0006729377961697596",
            "extra": "mean: 6.2018037232144865 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1532470.5089861173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012966764954020924",
            "extra": "mean: 652.5411054478303 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.77209729430379,
            "unit": "iter/sec",
            "range": "stddev: 0.000659027985310927",
            "extra": "mean: 12.229110333331997 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 561597.9970821702,
            "unit": "iter/sec",
            "range": "stddev: 2.1561005423379133e-7",
            "extra": "mean: 1.780633131164257 usec\nrounds: 21599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5169.105983607217,
            "unit": "iter/sec",
            "range": "stddev: 0.00004902999038743358",
            "extra": "mean: 193.45705102029237 usec\nrounds: 1960"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.04572467656382,
            "unit": "iter/sec",
            "range": "stddev: 0.0007334656106077733",
            "extra": "mean: 10.983492125000472 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5882210714165552,
            "unit": "iter/sec",
            "range": "stddev: 0.0013317688650078372",
            "extra": "mean: 1.7000411046000068 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.08976319660965,
            "unit": "iter/sec",
            "range": "stddev: 0.0008528097737641654",
            "extra": "mean: 11.482405776468221 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2548335247299156,
            "unit": "iter/sec",
            "range": "stddev: 0.002401872163135104",
            "extra": "mean: 443.49172080000017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 155.2616233887245,
            "unit": "iter/sec",
            "range": "stddev: 0.0008022854731158751",
            "extra": "mean: 6.440741621619696 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5451890.252587742,
            "unit": "iter/sec",
            "range": "stddev: 5.069179291586966e-9",
            "extra": "mean: 183.42262108550545 nsec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.15635370232204,
            "unit": "iter/sec",
            "range": "stddev: 0.0008126760245696773",
            "extra": "mean: 10.9701623571471 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4486201.312780894,
            "unit": "iter/sec",
            "range": "stddev: 1.4481645377720818e-8",
            "extra": "mean: 222.90573478120797 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.90746490509477,
            "unit": "iter/sec",
            "range": "stddev: 0.00031387927941959795",
            "extra": "mean: 11.000196750002612 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10660.711731866759,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022805125666281885",
            "extra": "mean: 93.80236752962962 usec\nrounds: 5137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.557507529445346,
            "unit": "iter/sec",
            "range": "stddev: 0.000729103560181908",
            "extra": "mean: 17.077229584902586 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120012.38088241579,
            "unit": "iter/sec",
            "range": "stddev: 3.863066678712639e-7",
            "extra": "mean: 8.332473638530407 usec\nrounds: 35715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5824911628171032,
            "unit": "iter/sec",
            "range": "stddev: 0.0017019303149863154",
            "extra": "mean: 631.9150611999817 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1460.6401737906476,
            "unit": "iter/sec",
            "range": "stddev: 0.00000583412569414517",
            "extra": "mean: 684.6313129980562 usec\nrounds: 1131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.23202835836171,
            "unit": "iter/sec",
            "range": "stddev: 0.0003393652934264809",
            "extra": "mean: 39.632168519999595 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 255.25296776995245,
            "unit": "iter/sec",
            "range": "stddev: 0.00011491415484868202",
            "extra": "mean: 3.917682167367602 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55733.40505299538,
            "unit": "iter/sec",
            "range": "stddev: 5.857547142625545e-7",
            "extra": "mean: 17.942560642923702 usec\nrounds: 12821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 222.50396080683322,
            "unit": "iter/sec",
            "range": "stddev: 0.0003955568253603174",
            "extra": "mean: 4.494302017698237 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2016790.1409314773,
            "unit": "iter/sec",
            "range": "stddev: 2.347836767756358e-8",
            "extra": "mean: 495.8374100035598 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5141.746832139792,
            "unit": "iter/sec",
            "range": "stddev: 0.00005993004692442714",
            "extra": "mean: 194.48643284987244 usec\nrounds: 2271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8706533349453573,
            "unit": "iter/sec",
            "range": "stddev: 0.0021750850484936212",
            "extra": "mean: 1.1485627629999953 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 119.38756131051419,
            "unit": "iter/sec",
            "range": "stddev: 0.0003269466346241196",
            "extra": "mean: 8.376081972217422 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.19493650379164,
            "unit": "iter/sec",
            "range": "stddev: 0.00017115834831638634",
            "extra": "mean: 11.338519416667515 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 158.94777875511903,
            "unit": "iter/sec",
            "range": "stddev: 0.0007651853140832096",
            "extra": "mean: 6.291374486840975 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 141.71982353988116,
            "unit": "iter/sec",
            "range": "stddev: 0.0007728490485916002",
            "extra": "mean: 7.05617587590766 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.45071738814156,
            "unit": "iter/sec",
            "range": "stddev: 0.00010254575152870086",
            "extra": "mean: 9.666438525003684 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10431.953103793536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017031389842980224",
            "extra": "mean: 95.85932663331799 usec\nrounds: 5572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4536.272212352298,
            "unit": "iter/sec",
            "range": "stddev: 0.0027411948743118093",
            "extra": "mean: 220.44532452814306 usec\nrounds: 2385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 259.64534013265614,
            "unit": "iter/sec",
            "range": "stddev: 0.00014569474408822214",
            "extra": "mean: 3.851407460226658 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4422383.736039772,
            "unit": "iter/sec",
            "range": "stddev: 1.2020500195945561e-8",
            "extra": "mean: 226.12239454715476 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.534733742008509,
            "unit": "iter/sec",
            "range": "stddev: 0.0004162576421064958",
            "extra": "mean: 73.88398021427227 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5198.156522201651,
            "unit": "iter/sec",
            "range": "stddev: 0.0000479963793698364",
            "extra": "mean: 192.37589243974043 usec\nrounds: 2315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 270.4512828751215,
            "unit": "iter/sec",
            "range": "stddev: 0.00005111715546075743",
            "extra": "mean: 3.6975235960028385 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 249.21701378589356,
            "unit": "iter/sec",
            "range": "stddev: 0.0002262394825318495",
            "extra": "mean: 4.012567139012092 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.78985851675438,
            "unit": "iter/sec",
            "range": "stddev: 0.00010536892479077549",
            "extra": "mean: 6.954593392853781 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.97666841554746,
            "unit": "iter/sec",
            "range": "stddev: 0.00021639653409002212",
            "extra": "mean: 23.822757682923136 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.88638996758877,
            "unit": "iter/sec",
            "range": "stddev: 0.0005499409349109188",
            "extra": "mean: 11.002747500000964 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8698832178004721,
            "unit": "iter/sec",
            "range": "stddev: 0.003959589305082368",
            "extra": "mean: 1.1495795982000119 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5941.9067024548785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000560533808824527",
            "extra": "mean: 168.2961463509438 usec\nrounds: 2371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 517.8695201043878,
            "unit": "iter/sec",
            "range": "stddev: 0.00001937813838040611",
            "extra": "mean: 1.930988330416566 msec\nrounds: 457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 632.4705724620375,
            "unit": "iter/sec",
            "range": "stddev: 0.00001393132926254483",
            "extra": "mean: 1.5811012299074556 msec\nrounds: 535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 247.8083998690046,
            "unit": "iter/sec",
            "range": "stddev: 0.00023139206474429917",
            "extra": "mean: 4.035375719824734 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.21095258578376,
            "unit": "iter/sec",
            "range": "stddev: 0.0006632087499195599",
            "extra": "mean: 26.170506944442057 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 247.88565235333235,
            "unit": "iter/sec",
            "range": "stddev: 0.0002447907627455818",
            "extra": "mean: 4.034118112550603 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 251.69273129376887,
            "unit": "iter/sec",
            "range": "stddev: 0.00025870965597295947",
            "extra": "mean: 3.9730984476974327 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5820.186975800902,
            "unit": "iter/sec",
            "range": "stddev: 0.00004905329198375887",
            "extra": "mean: 171.81578601474266 usec\nrounds: 2374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 384168.3646198579,
            "unit": "iter/sec",
            "range": "stddev: 3.561608671755142e-7",
            "extra": "mean: 2.6030253714137017 usec\nrounds: 1813"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 987.5471999466039,
            "unit": "iter/sec",
            "range": "stddev: 0.00006287177478998986",
            "extra": "mean: 1.0126098277166593 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 327.1674328684101,
            "unit": "iter/sec",
            "range": "stddev: 0.00004486892749493819",
            "extra": "mean: 3.0565389447005553 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9822.899609724667,
            "unit": "iter/sec",
            "range": "stddev: 0.000012998130253013351",
            "extra": "mean: 101.80293393307208 usec\nrounds: 3890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.41215146658638,
            "unit": "iter/sec",
            "range": "stddev: 0.0003163635627319574",
            "extra": "mean: 19.450654591841325 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4487.076630898621,
            "unit": "iter/sec",
            "range": "stddev: 0.000019977562302669737",
            "extra": "mean: 222.8622513629172 usec\nrounds: 2017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.29279741616362,
            "unit": "iter/sec",
            "range": "stddev: 0.026687624209651945",
            "extra": "mean: 34.138084724137855 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19299.672188287932,
            "unit": "iter/sec",
            "range": "stddev: 0.000022573775305546274",
            "extra": "mean: 51.81435157260616 usec\nrounds: 5501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 156.71613693824662,
            "unit": "iter/sec",
            "range": "stddev: 0.0007818938831676951",
            "extra": "mean: 6.380963821192492 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5940.966692779657,
            "unit": "iter/sec",
            "range": "stddev: 0.00006148577955912691",
            "extra": "mean: 168.32277501493962 usec\nrounds: 3338"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.044716690395736,
            "unit": "iter/sec",
            "range": "stddev: 0.0003653620975253185",
            "extra": "mean: 110.56178255554035 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 145.28852618027832,
            "unit": "iter/sec",
            "range": "stddev: 0.0007850496896114767",
            "extra": "mean: 6.882855971428675 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.65439373555174,
            "unit": "iter/sec",
            "range": "stddev: 0.0001236098813242768",
            "extra": "mean: 7.2121767876122815 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.41712433256085,
            "unit": "iter/sec",
            "range": "stddev: 0.000762502762300952",
            "extra": "mean: 11.707254345236743 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.03943330737694,
            "unit": "iter/sec",
            "range": "stddev: 0.000114762433516589",
            "extra": "mean: 14.484475785712293 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 167.39203239177067,
            "unit": "iter/sec",
            "range": "stddev: 0.00023856358807433406",
            "extra": "mean: 5.973999990988592 msec\nrounds: 111"
          }
        ]
      }
    ]
  }
}