window.BENCHMARK_DATA = {
  "lastUpdate": 1679134182736,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "42d1451a6421ebef376f02536b3c721640d53ebb",
          "message": "chore(flake/nixpkgs): `1474943f` -> `518d5f09`",
          "timestamp": "2023-03-18T06:04:16-04:00",
          "tree_id": "e02bc6fff22e7af46fc1ed078349f9b54e97cd4f",
          "url": "https://github.com/ibis-project/ibis/commit/42d1451a6421ebef376f02536b3c721640d53ebb"
        },
        "date": 1679134105250,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1158.141866500307,
            "unit": "iter/sec",
            "range": "stddev: 0.000057297481988119735",
            "extra": "mean: 863.4520769219897 usec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.14273946134172,
            "unit": "iter/sec",
            "range": "stddev: 0.0000664486646027269",
            "extra": "mean: 8.254724999999802 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.97937777151138,
            "unit": "iter/sec",
            "range": "stddev: 0.00006412784393266246",
            "extra": "mean: 10.20622933870847 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2656092.7684416864,
            "unit": "iter/sec",
            "range": "stddev: 1.4394738638457245e-8",
            "extra": "mean: 376.492873999382 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.79321903402918,
            "unit": "iter/sec",
            "range": "stddev: 0.014263389964473086",
            "extra": "mean: 28.741232566666497 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 104.82616641883386,
            "unit": "iter/sec",
            "range": "stddev: 0.0003287677193508316",
            "extra": "mean: 9.539602888886456 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 477113.61988484283,
            "unit": "iter/sec",
            "range": "stddev: 2.464354857437943e-7",
            "extra": "mean: 2.0959368132089002 usec\nrounds: 2184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.2231918610333,
            "unit": "iter/sec",
            "range": "stddev: 0.000026066374539991666",
            "extra": "mean: 1.837481413793458 msec\nrounds: 493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6205082.55206464,
            "unit": "iter/sec",
            "range": "stddev: 7.377181901672281e-9",
            "extra": "mean: 161.1582104842221 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5069.6331509037,
            "unit": "iter/sec",
            "range": "stddev: 0.00005567098611273875",
            "extra": "mean: 197.25293137270546 usec\nrounds: 714"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 104.1065898112937,
            "unit": "iter/sec",
            "range": "stddev: 0.00047687059098380205",
            "extra": "mean: 9.605539878048315 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.7609370084163,
            "unit": "iter/sec",
            "range": "stddev: 0.0005500606663735036",
            "extra": "mean: 9.545542723808033 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.80178020995464,
            "unit": "iter/sec",
            "range": "stddev: 0.0002662023079923355",
            "extra": "mean: 3.5112140073801656 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1882203.3035292567,
            "unit": "iter/sec",
            "range": "stddev: 8.764198662991037e-8",
            "extra": "mean: 531.2922350762711 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5668.024174698991,
            "unit": "iter/sec",
            "range": "stddev: 0.00007202334352675706",
            "extra": "mean: 176.42832302371158 usec\nrounds: 582"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.663610906306099,
            "unit": "iter/sec",
            "range": "stddev: 0.00029788720946507255",
            "extra": "mean: 176.56580166666438 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.6105617289649,
            "unit": "iter/sec",
            "range": "stddev: 0.02471938019107142",
            "extra": "mean: 31.63499619444268 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.8747741328922,
            "unit": "iter/sec",
            "range": "stddev: 0.00003766522792335138",
            "extra": "mean: 1.4558694505303327 msec\nrounds: 566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 168.1310581069722,
            "unit": "iter/sec",
            "range": "stddev: 0.0035177604851359323",
            "extra": "mean: 5.947741073298647 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 122.16539725699693,
            "unit": "iter/sec",
            "range": "stddev: 0.0005165599804556115",
            "extra": "mean: 8.18562393650896 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.50931008633147,
            "unit": "iter/sec",
            "range": "stddev: 0.0006694994493647564",
            "extra": "mean: 8.732914373914879 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 77.05438494922227,
            "unit": "iter/sec",
            "range": "stddev: 0.00006726700745912271",
            "extra": "mean: 12.977846759259524 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.86190375659925,
            "unit": "iter/sec",
            "range": "stddev: 0.0005769348394551435",
            "extra": "mean: 9.446268813559493 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.06519689943057,
            "unit": "iter/sec",
            "range": "stddev: 0.0006079884799801801",
            "extra": "mean: 8.260012172042348 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.84295846440779,
            "unit": "iter/sec",
            "range": "stddev: 0.0005904240691889716",
            "extra": "mean: 9.18754886956702 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 246.34179331553858,
            "unit": "iter/sec",
            "range": "stddev: 0.0037532388964638445",
            "extra": "mean: 4.059400504238039 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 298.0773854613072,
            "unit": "iter/sec",
            "range": "stddev: 0.00003138565580887188",
            "extra": "mean: 3.354833505575712 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.24664850744807,
            "unit": "iter/sec",
            "range": "stddev: 0.0006154464347762641",
            "extra": "mean: 8.247650655173128 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7007335.82792686,
            "unit": "iter/sec",
            "range": "stddev: 5.996643236414781e-9",
            "extra": "mean: 142.70758881206126 nsec\nrounds: 68966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.9299537552144,
            "unit": "iter/sec",
            "range": "stddev: 0.00017001165678225003",
            "extra": "mean: 5.0522923944939055 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 307.70528873968806,
            "unit": "iter/sec",
            "range": "stddev: 0.0002053322051989155",
            "extra": "mean: 3.249862893471351 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.04948637116271,
            "unit": "iter/sec",
            "range": "stddev: 0.0002742188279581566",
            "extra": "mean: 15.14016315555485 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5433.783006223205,
            "unit": "iter/sec",
            "range": "stddev: 0.00005197824230207215",
            "extra": "mean: 184.03384876700443 usec\nrounds: 2149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.50514172694966,
            "unit": "iter/sec",
            "range": "stddev: 0.00005093933978477199",
            "extra": "mean: 6.19175333557281 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5587.604515381182,
            "unit": "iter/sec",
            "range": "stddev: 0.000051502715771908686",
            "extra": "mean: 178.96756959932782 usec\nrounds: 2421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.02431572347383,
            "unit": "iter/sec",
            "range": "stddev: 0.0006400075631312392",
            "extra": "mean: 10.635546691358085 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17011680126010278,
            "unit": "iter/sec",
            "range": "stddev: 0.1598940580333203",
            "extra": "mean: 5.87831415 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.225903572858975,
            "unit": "iter/sec",
            "range": "stddev: 0.00036470364072421513",
            "extra": "mean: 17.17448658823619 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1971214.04533844,
            "unit": "iter/sec",
            "range": "stddev: 7.951417151794915e-8",
            "extra": "mean: 507.30158014286513 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73033.21674467628,
            "unit": "iter/sec",
            "range": "stddev: 4.878829402638227e-7",
            "extra": "mean: 13.692399767848027 usec\nrounds: 11199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.010957236245915,
            "unit": "iter/sec",
            "range": "stddev: 0.019939586556820033",
            "extra": "mean: 23.803313844446926 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.646487358404238,
            "unit": "iter/sec",
            "range": "stddev: 0.0003856518340256225",
            "extra": "mean: 93.9276933636341 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.7049902937217,
            "unit": "iter/sec",
            "range": "stddev: 0.00010941931712742136",
            "extra": "mean: 6.222582124999931 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1960193.3456014013,
            "unit": "iter/sec",
            "range": "stddev: 1.5484131053894164e-7",
            "extra": "mean: 510.1537571505187 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146207.95962292657,
            "unit": "iter/sec",
            "range": "stddev: 3.4926963573713297e-7",
            "extra": "mean: 6.839572910934678 usec\nrounds: 32574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.25607904964627,
            "unit": "iter/sec",
            "range": "stddev: 0.00060888773696949",
            "extra": "mean: 8.24700920430197 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8240364821874602,
            "unit": "iter/sec",
            "range": "stddev: 0.0038547938410156335",
            "extra": "mean: 1.2135385041999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.41034411784585,
            "unit": "iter/sec",
            "range": "stddev: 0.000246962184979114",
            "extra": "mean: 3.190705153062812 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.64370840481742,
            "unit": "iter/sec",
            "range": "stddev: 0.0006379247849219591",
            "extra": "mean: 9.204398622641811 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.80401780647418,
            "unit": "iter/sec",
            "range": "stddev: 0.0006704956980099951",
            "extra": "mean: 9.276092119267423 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 295.4780691032542,
            "unit": "iter/sec",
            "range": "stddev: 0.00023872037471739616",
            "extra": "mean: 3.384345928057869 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 307.2397064890484,
            "unit": "iter/sec",
            "range": "stddev: 0.00023019235384971783",
            "extra": "mean: 3.2547876426110474 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1735.959650826714,
            "unit": "iter/sec",
            "range": "stddev: 0.000011370162288475576",
            "extra": "mean: 576.0502552716425 usec\nrounds: 1328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.42842581530974,
            "unit": "iter/sec",
            "range": "stddev: 0.000384793174570417",
            "extra": "mean: 7.383974183999953 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8391.74049281938,
            "unit": "iter/sec",
            "range": "stddev: 0.000024653661072806525",
            "extra": "mean: 119.16479076726422 usec\nrounds: 4029"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 330.77785389326147,
            "unit": "iter/sec",
            "range": "stddev: 0.00005675040205331162",
            "extra": "mean: 3.023177000001607 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.67090875615061,
            "unit": "iter/sec",
            "range": "stddev: 0.00010080427357678578",
            "extra": "mean: 15.462903169810394 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5226.602602519871,
            "unit": "iter/sec",
            "range": "stddev: 0.00005324647092703775",
            "extra": "mean: 191.32887576298148 usec\nrounds: 2294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5108.19938102749,
            "unit": "iter/sec",
            "range": "stddev: 0.000053688742304500614",
            "extra": "mean: 195.76369781377932 usec\nrounds: 3339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5574.552201676921,
            "unit": "iter/sec",
            "range": "stddev: 0.00005125220113952878",
            "extra": "mean: 179.3866061024925 usec\nrounds: 3638"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.68506293796072,
            "unit": "iter/sec",
            "range": "stddev: 0.0002458380737162144",
            "extra": "mean: 9.8342860898863 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7227779576394284,
            "unit": "iter/sec",
            "range": "stddev: 0.002353909527185384",
            "extra": "mean: 580.4578562000017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12714.713630274904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014078311566563292",
            "extra": "mean: 78.64903835654685 usec\nrounds: 5866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5244.118209112845,
            "unit": "iter/sec",
            "range": "stddev: 0.000024461354644534563",
            "extra": "mean: 190.68982813207248 usec\nrounds: 2147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 776592.6887181905,
            "unit": "iter/sec",
            "range": "stddev: 1.0962523357179686e-7",
            "extra": "mean: 1.2876762999797946 usec\nrounds: 22422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5155.873772720158,
            "unit": "iter/sec",
            "range": "stddev: 0.0000534712249413238",
            "extra": "mean: 193.9535458162343 usec\nrounds: 2008"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 298.9645758661218,
            "unit": "iter/sec",
            "range": "stddev: 0.0002183078947446169",
            "extra": "mean: 3.344877890977312 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13997.82746758349,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015446053183110898",
            "extra": "mean: 71.43965749798134 usec\nrounds: 6435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.830070087541,
            "unit": "iter/sec",
            "range": "stddev: 0.0001478749302947125",
            "extra": "mean: 6.179321305731722 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6882860183914409,
            "unit": "iter/sec",
            "range": "stddev: 0.004176244062170872",
            "extra": "mean: 1.4528843725999991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8440992268360225,
            "unit": "iter/sec",
            "range": "stddev: 0.011216140322917552",
            "extra": "mean: 1.1846948417999954 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.51029928260472,
            "unit": "iter/sec",
            "range": "stddev: 0.00006929956671853555",
            "extra": "mean: 9.048930339449445 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.64008473939528,
            "unit": "iter/sec",
            "range": "stddev: 0.00018971723537338295",
            "extra": "mean: 10.67918726027477 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 311.0006773833477,
            "unit": "iter/sec",
            "range": "stddev: 0.00019320779374746127",
            "extra": "mean: 3.215427080139036 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.763509997748216,
            "unit": "iter/sec",
            "range": "stddev: 0.0012882400075960253",
            "extra": "mean: 23.384422842106662 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11953825.04545681,
            "unit": "iter/sec",
            "range": "stddev: 3.3217556413763817e-9",
            "extra": "mean: 83.65523137542174 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5588903.918376632,
            "unit": "iter/sec",
            "range": "stddev: 9.337013113553209e-9",
            "extra": "mean: 178.92596018889515 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.771075738669946,
            "unit": "iter/sec",
            "range": "stddev: 0.00009368261420053732",
            "extra": "mean: 63.40721562499674 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4988794499782285,
            "unit": "iter/sec",
            "range": "stddev: 0.003022551705859058",
            "extra": "mean: 400.17936839998924 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.7678748875662,
            "unit": "iter/sec",
            "range": "stddev: 0.0005799002939833661",
            "extra": "mean: 8.789827541283282 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12093.262150990744,
            "unit": "iter/sec",
            "range": "stddev: 0.000023567122027100704",
            "extra": "mean: 82.69067415511826 usec\nrounds: 5653"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.946341396238836,
            "unit": "iter/sec",
            "range": "stddev: 0.0005566105875357618",
            "extra": "mean: 38.54107925000013 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.93589742689863,
            "unit": "iter/sec",
            "range": "stddev: 0.00004788674410276908",
            "extra": "mean: 3.4490382490568603 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.0535945424091,
            "unit": "iter/sec",
            "range": "stddev: 0.000012952256765122037",
            "extra": "mean: 1.3385920465485848 msec\nrounds: 623"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.845279508302817,
            "unit": "iter/sec",
            "range": "stddev: 0.009421776479575854",
            "extra": "mean: 1.183040627600019 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 314.2331512814623,
            "unit": "iter/sec",
            "range": "stddev: 0.00020183021396753394",
            "extra": "mean: 3.182350416949764 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 118.508346383308,
            "unit": "iter/sec",
            "range": "stddev: 0.0006673526511312712",
            "extra": "mean: 8.438224230769041 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.31212277707932,
            "unit": "iter/sec",
            "range": "stddev: 0.0007076252237446143",
            "extra": "mean: 8.311714371899605 msec\nrounds: 121"
          }
        ]
      }
    ]
  }
}