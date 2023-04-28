window.BENCHMARK_DATA = {
  "lastUpdate": 1682686635597,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "e4d666da5254debf46507c3d4bad8ed4558cf146",
          "message": "fix(deps): update dependency datafusion to v23",
          "timestamp": "2023-04-28T08:49:41-04:00",
          "tree_id": "8d36684934faa361dd3230f9d483a52b6592832f",
          "url": "https://github.com/ibis-project/ibis/commit/e4d666da5254debf46507c3d4bad8ed4558cf146"
        },
        "date": 1682686529476,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 109.17705772961352,
            "unit": "iter/sec",
            "range": "stddev: 0.0002222837791180873",
            "extra": "mean: 9.159433499999485 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15364677576696492,
            "unit": "iter/sec",
            "range": "stddev: 0.12473071091315453",
            "extra": "mean: 6.508434654800004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5196320.5042241635,
            "unit": "iter/sec",
            "range": "stddev: 3.919901640256889e-8",
            "extra": "mean: 192.44386468960028 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 279.0654314649383,
            "unit": "iter/sec",
            "range": "stddev: 0.00034672888256547825",
            "extra": "mean: 3.583389009346505 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2037.452311361259,
            "unit": "iter/sec",
            "range": "stddev: 0.00009799268132851254",
            "extra": "mean: 490.8090336268444 usec\nrounds: 1249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 93.95708154119514,
            "unit": "iter/sec",
            "range": "stddev: 0.0008208863871833967",
            "extra": "mean: 10.643157318179936 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 89.4232129164796,
            "unit": "iter/sec",
            "range": "stddev: 0.0009803450069270155",
            "extra": "mean: 11.18277869230655 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 104.61651640512657,
            "unit": "iter/sec",
            "range": "stddev: 0.0006108119458061449",
            "extra": "mean: 9.558720117648617 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 92.93529518147767,
            "unit": "iter/sec",
            "range": "stddev: 0.0007521996636038889",
            "extra": "mean: 10.760174571429172 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.2389570986794,
            "unit": "iter/sec",
            "range": "stddev: 0.000557702070364139",
            "extra": "mean: 6.612052999992102 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 965523.8595829551,
            "unit": "iter/sec",
            "range": "stddev: 5.190272761363386e-7",
            "extra": "mean: 1.0357071863888856 usec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.965973162418893,
            "unit": "iter/sec",
            "range": "stddev: 0.002274822907480661",
            "extra": "mean: 125.53394037500709 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 90.08785678442159,
            "unit": "iter/sec",
            "range": "stddev: 0.001062742484260406",
            "extra": "mean: 11.100275172412855 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4025070.2239165017,
            "unit": "iter/sec",
            "range": "stddev: 6.259927643773149e-8",
            "extra": "mean: 248.44287040225478 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1712794.2525647574,
            "unit": "iter/sec",
            "range": "stddev: 3.9899465965302366e-7",
            "extra": "mean: 583.8412865424956 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10834.738531882625,
            "unit": "iter/sec",
            "range": "stddev: 0.00002219039929398443",
            "extra": "mean: 92.29572057113977 usec\nrounds: 4341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 147.09692267559512,
            "unit": "iter/sec",
            "range": "stddev: 0.00033226861800329615",
            "extra": "mean: 6.798238751774447 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 95.25042835937242,
            "unit": "iter/sec",
            "range": "stddev: 0.0009341193833474801",
            "extra": "mean: 10.49864044943796 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 395.7969636886394,
            "unit": "iter/sec",
            "range": "stddev: 0.00023518685129796864",
            "extra": "mean: 2.5265479317488335 msec\nrounds: 337"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 585.0467230026319,
            "unit": "iter/sec",
            "range": "stddev: 0.0001462168640019593",
            "extra": "mean: 1.7092651931587717 msec\nrounds: 497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 72.06069126835332,
            "unit": "iter/sec",
            "range": "stddev: 0.01969684130361927",
            "extra": "mean: 13.877191328570655 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.51121987016223,
            "unit": "iter/sec",
            "range": "stddev: 0.0008006765227494731",
            "extra": "mean: 16.803554055550133 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.16583858284993,
            "unit": "iter/sec",
            "range": "stddev: 0.0005641478968480828",
            "extra": "mean: 11.090674868854443 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 172.6749156985578,
            "unit": "iter/sec",
            "range": "stddev: 0.00032162154706177085",
            "extra": "mean: 5.791229119495971 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1755004.491649069,
            "unit": "iter/sec",
            "range": "stddev: 4.2729393991429785e-7",
            "extra": "mean: 569.7991114885193 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.03973149140741,
            "unit": "iter/sec",
            "range": "stddev: 0.0009904995457148732",
            "extra": "mean: 10.864873069445638 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5061481.19634212,
            "unit": "iter/sec",
            "range": "stddev: 4.884668221823635e-8",
            "extra": "mean: 197.57062433073048 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.02795772073161,
            "unit": "iter/sec",
            "range": "stddev: 0.0020888267983655727",
            "extra": "mean: 43.4254749000047 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2072.070049791384,
            "unit": "iter/sec",
            "range": "stddev: 0.00010618035829948026",
            "extra": "mean: 482.6091666643606 usec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 248.02569086793633,
            "unit": "iter/sec",
            "range": "stddev: 0.00036886890814504176",
            "extra": "mean: 4.0318403972613455 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5575588.10836323,
            "unit": "iter/sec",
            "range": "stddev: 2.7097167072218596e-8",
            "extra": "mean: 179.35327728029563 nsec\nrounds: 30031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 92.12386094207596,
            "unit": "iter/sec",
            "range": "stddev: 0.0009636628653514206",
            "extra": "mean: 10.854951038458566 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2521754.842941291,
            "unit": "iter/sec",
            "range": "stddev: 8.931445008595271e-8",
            "extra": "mean: 396.54925331048247 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.3773264113899817,
            "unit": "iter/sec",
            "range": "stddev: 0.0036276128631431695",
            "extra": "mean: 420.640596599992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150737.64005624087,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012693836397379007",
            "extra": "mean: 6.634043093860933 usec\nrounds: 34483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.9133192400731,
            "unit": "iter/sec",
            "range": "stddev: 0.0009998485420750392",
            "extra": "mean: 22.772134224995 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12758.18310789111,
            "unit": "iter/sec",
            "range": "stddev: 0.000009080191482697897",
            "extra": "mean: 78.38106660982837 usec\nrounds: 5855"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 88.56443112732958,
            "unit": "iter/sec",
            "range": "stddev: 0.0011384148870219723",
            "extra": "mean: 11.291214625003287 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9350.962328211599,
            "unit": "iter/sec",
            "range": "stddev: 0.00001079483236793381",
            "extra": "mean: 106.94086500413194 usec\nrounds: 5252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.30089811114486,
            "unit": "iter/sec",
            "range": "stddev: 0.0005438591520760811",
            "extra": "mean: 10.60435287499999 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 253.2087035051495,
            "unit": "iter/sec",
            "range": "stddev: 0.00043288164746332984",
            "extra": "mean: 3.9493113236514916 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1065.7867580191137,
            "unit": "iter/sec",
            "range": "stddev: 0.00009141879126734578",
            "extra": "mean: 938.2739956899204 usec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1880.6744333181045,
            "unit": "iter/sec",
            "range": "stddev: 0.000109829102911525",
            "extra": "mean: 531.7241422991451 usec\nrounds: 1279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 154.2145739670654,
            "unit": "iter/sec",
            "range": "stddev: 0.00036152153754145114",
            "extra": "mean: 6.484471436620274 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 94.36551003062279,
            "unit": "iter/sec",
            "range": "stddev: 0.0005764554715313778",
            "extra": "mean: 10.59709209090787 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 236.69280164450637,
            "unit": "iter/sec",
            "range": "stddev: 0.00035533147278362856",
            "extra": "mean: 4.224885560744344 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 139.85801725315662,
            "unit": "iter/sec",
            "range": "stddev: 0.00467599985137468",
            "extra": "mean: 7.150108514622389 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1848.4128379716258,
            "unit": "iter/sec",
            "range": "stddev: 0.00010620283636947319",
            "extra": "mean: 541.0046822101494 usec\nrounds: 1158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1878.7143975741596,
            "unit": "iter/sec",
            "range": "stddev: 0.00009919277320560536",
            "extra": "mean: 532.2788824587833 usec\nrounds: 1106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.56927237682035,
            "unit": "iter/sec",
            "range": "stddev: 0.0007526314715532012",
            "extra": "mean: 26.617497138884815 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 222.16064409518663,
            "unit": "iter/sec",
            "range": "stddev: 0.00024634569520130134",
            "extra": "mean: 4.50124730270201 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.366035265470906,
            "unit": "iter/sec",
            "range": "stddev: 0.0011819360282797464",
            "extra": "mean: 61.102153562494266 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.5006459209224,
            "unit": "iter/sec",
            "range": "stddev: 0.0008549867787843249",
            "extra": "mean: 11.049644892852802 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 71.91935220697577,
            "unit": "iter/sec",
            "range": "stddev: 0.024576678046187895",
            "extra": "mean: 13.904463392858617 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 83.42080709399745,
            "unit": "iter/sec",
            "range": "stddev: 0.0010527439675460817",
            "extra": "mean: 11.987416986666327 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1887.2125153968934,
            "unit": "iter/sec",
            "range": "stddev: 0.00010102587009290806",
            "extra": "mean: 529.8820306888932 usec\nrounds: 945"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8285953019361635,
            "unit": "iter/sec",
            "range": "stddev: 0.028694513742665514",
            "extra": "mean: 1.2068617787999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 239.45642254084262,
            "unit": "iter/sec",
            "range": "stddev: 0.0004138951618080149",
            "extra": "mean: 4.176125198017757 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 209.4662966580415,
            "unit": "iter/sec",
            "range": "stddev: 0.012015347021639044",
            "extra": "mean: 4.774037713725959 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1331813.358963992,
            "unit": "iter/sec",
            "range": "stddev: 3.2803082427042774e-7",
            "extra": "mean: 750.8559613622534 nsec\nrounds: 129854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 90.8410571235005,
            "unit": "iter/sec",
            "range": "stddev: 0.0010314749358485956",
            "extra": "mean: 11.008238253331607 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3931.854586279707,
            "unit": "iter/sec",
            "range": "stddev: 0.00003089587674795949",
            "extra": "mean: 254.33290526295707 usec\nrounds: 1805"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 49.50108642509337,
            "unit": "iter/sec",
            "range": "stddev: 0.0006484589084533322",
            "extra": "mean: 20.2015768181822 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1761870059503872,
            "unit": "iter/sec",
            "range": "stddev: 0.006556280400146933",
            "extra": "mean: 850.2049376000173 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.599607493042217,
            "unit": "iter/sec",
            "range": "stddev: 0.0016372685026487693",
            "extra": "mean: 37.59453970369956 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 75.83347377769522,
            "unit": "iter/sec",
            "range": "stddev: 0.001800303574430908",
            "extra": "mean: 13.18678876470154 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 236.23213228068732,
            "unit": "iter/sec",
            "range": "stddev: 0.0004025229386718621",
            "extra": "mean: 4.233124386363391 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 82.80642713100356,
            "unit": "iter/sec",
            "range": "stddev: 0.001535566851268646",
            "extra": "mean: 12.07635729069622 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.264108916590835,
            "unit": "iter/sec",
            "range": "stddev: 0.0016987078176543165",
            "extra": "mean: 30.994192419359845 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1819.3326076975507,
            "unit": "iter/sec",
            "range": "stddev: 0.0002687005576178809",
            "extra": "mean: 549.652106365282 usec\nrounds: 1147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1448.5263796189379,
            "unit": "iter/sec",
            "range": "stddev: 0.00011491964910094063",
            "extra": "mean: 690.3567750440754 usec\nrounds: 1138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6865415089467666,
            "unit": "iter/sec",
            "range": "stddev: 0.011924259136004072",
            "extra": "mean: 1.4565761675999966 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 672.8046683014989,
            "unit": "iter/sec",
            "range": "stddev: 0.00009938122966678215",
            "extra": "mean: 1.4863154896420512 msec\nrounds: 531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 190.28939903515015,
            "unit": "iter/sec",
            "range": "stddev: 0.005034525755397607",
            "extra": "mean: 5.255153492892584 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.80315753885756,
            "unit": "iter/sec",
            "range": "stddev: 0.0007415359011253707",
            "extra": "mean: 10.4380693255794 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 83.19552629924202,
            "unit": "iter/sec",
            "range": "stddev: 0.0014658328173253355",
            "extra": "mean: 12.019877083331954 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 235.72348794614217,
            "unit": "iter/sec",
            "range": "stddev: 0.0006148726216693575",
            "extra": "mean: 4.242258625616802 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5782358.6959968675,
            "unit": "iter/sec",
            "range": "stddev: 4.589480595588841e-7",
            "extra": "mean: 172.93980753773883 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 161.2399744405612,
            "unit": "iter/sec",
            "range": "stddev: 0.0006194479645068805",
            "extra": "mean: 6.201935986839514 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10037038.790239157,
            "unit": "iter/sec",
            "range": "stddev: 2.0842103834805867e-7",
            "extra": "mean: 99.63097890708143 nsec\nrounds: 91735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7804.002848491659,
            "unit": "iter/sec",
            "range": "stddev: 0.00003860786614092668",
            "extra": "mean: 128.13936891287497 usec\nrounds: 2998"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8569087902053901,
            "unit": "iter/sec",
            "range": "stddev: 0.01330958868253103",
            "extra": "mean: 1.166985344800014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 464.40115484527473,
            "unit": "iter/sec",
            "range": "stddev: 0.0001801265671858248",
            "extra": "mean: 2.1533107520655745 msec\nrounds: 484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.70298320806853,
            "unit": "iter/sec",
            "range": "stddev: 0.03726145041469266",
            "extra": "mean: 32.570124968742675 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.510573899927907,
            "unit": "iter/sec",
            "range": "stddev: 0.007996798094120783",
            "extra": "mean: 662.0000517999983 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 113.84893526322521,
            "unit": "iter/sec",
            "range": "stddev: 0.00023592167850207377",
            "extra": "mean: 8.783569189188666 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1892.7700150254302,
            "unit": "iter/sec",
            "range": "stddev: 0.0001021337625124652",
            "extra": "mean: 528.3262055409117 usec\nrounds: 1119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 45.288292817793455,
            "unit": "iter/sec",
            "range": "stddev: 0.0008835383021462439",
            "extra": "mean: 22.080761666668675 msec\nrounds: 36"
          }
        ]
      }
    ]
  }
}