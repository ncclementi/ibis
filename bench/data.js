window.BENCHMARK_DATA = {
  "lastUpdate": 1677777024578,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "493b1c8acd14793476fbef4b498ea2fcae4b368b",
          "message": "test(pyspark): xfail on python 3.11",
          "timestamp": "2023-03-02T11:55:22-05:00",
          "tree_id": "de51dce2a7f16b7d23b197db80e4ee8ce0f3f74b",
          "url": "https://github.com/ibis-project/ibis/commit/493b1c8acd14793476fbef4b498ea2fcae4b368b"
        },
        "date": 1677776534207,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2699576.548263525,
            "unit": "iter/sec",
            "range": "stddev: 1.3639767011205942e-8",
            "extra": "mean: 370.42846613964826 nsec\nrounds: 87720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4909.616072188243,
            "unit": "iter/sec",
            "range": "stddev: 0.00009951210855279478",
            "extra": "mean: 203.68191428750444 usec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1984974.6165262258,
            "unit": "iter/sec",
            "range": "stddev: 9.78560606595218e-8",
            "extra": "mean: 503.78477975201235 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12200.789326171014,
            "unit": "iter/sec",
            "range": "stddev: 0.000011414344823739244",
            "extra": "mean: 81.96191027206524 usec\nrounds: 4079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.95239999535093,
            "unit": "iter/sec",
            "range": "stddev: 0.00003431391792487497",
            "extra": "mean: 7.196709089108629 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.648675720517945,
            "unit": "iter/sec",
            "range": "stddev: 0.0004246796711758528",
            "extra": "mean: 93.9083906999997 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.110911368459,
            "unit": "iter/sec",
            "range": "stddev: 0.00026366763761290663",
            "extra": "mean: 21.226505090909896 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 320.20734161540963,
            "unit": "iter/sec",
            "range": "stddev: 0.00018723681952478112",
            "extra": "mean: 3.1229764906548163 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10985374.112655785,
            "unit": "iter/sec",
            "range": "stddev: 9.052273686443312e-9",
            "extra": "mean: 91.03012694391323 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 144.09774147004478,
            "unit": "iter/sec",
            "range": "stddev: 0.00048057446128718",
            "extra": "mean: 6.939734029126899 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8228790740910369,
            "unit": "iter/sec",
            "range": "stddev: 0.004687751694564655",
            "extra": "mean: 1.2152453884000067 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.1490231695138,
            "unit": "iter/sec",
            "range": "stddev: 0.00017217178200975005",
            "extra": "mean: 6.167166353845871 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 128.5349207485682,
            "unit": "iter/sec",
            "range": "stddev: 0.008979538392572515",
            "extra": "mean: 7.779986902984413 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.33094060668249,
            "unit": "iter/sec",
            "range": "stddev: 0.0001111692626035102",
            "extra": "mean: 10.274225172045062 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 143.5162925357018,
            "unit": "iter/sec",
            "range": "stddev: 0.0005482258082819651",
            "extra": "mean: 6.967850007351848 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.39749538277766,
            "unit": "iter/sec",
            "range": "stddev: 0.00008806786847532469",
            "extra": "mean: 3.431738487272882 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5408.986156175971,
            "unit": "iter/sec",
            "range": "stddev: 0.00005904828562823612",
            "extra": "mean: 184.8775299338124 usec\nrounds: 451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 290.51340862108793,
            "unit": "iter/sec",
            "range": "stddev: 0.00003952659953997011",
            "extra": "mean: 3.442181910798769 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 306.76514934133536,
            "unit": "iter/sec",
            "range": "stddev: 0.00020319374346660493",
            "extra": "mean: 3.259822708502351 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 160.04482977902373,
            "unit": "iter/sec",
            "range": "stddev: 0.011031985172532364",
            "extra": "mean: 6.248249327271083 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 499298.54360673146,
            "unit": "iter/sec",
            "range": "stddev: 2.043538057945663e-7",
            "extra": "mean: 2.0028097674317316 usec\nrounds: 2150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 143.75535473269017,
            "unit": "iter/sec",
            "range": "stddev: 0.0005309926338002416",
            "extra": "mean: 6.956262616161168 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 135.7028376802193,
            "unit": "iter/sec",
            "range": "stddev: 0.00006465992101249257",
            "extra": "mean: 7.369042660378832 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.81975346813975,
            "unit": "iter/sec",
            "range": "stddev: 0.0005261472135589501",
            "extra": "mean: 9.18950804545592 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 313.13384053716214,
            "unit": "iter/sec",
            "range": "stddev: 0.00020479960223985356",
            "extra": "mean: 3.193522610921134 msec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.70932182150796,
            "unit": "iter/sec",
            "range": "stddev: 0.0007306007525252579",
            "extra": "mean: 9.736214612903751 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 105.10899785219196,
            "unit": "iter/sec",
            "range": "stddev: 0.0005274155249193338",
            "extra": "mean: 9.513933349514337 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.75734786711314,
            "unit": "iter/sec",
            "range": "stddev: 0.01269381933838726",
            "extra": "mean: 10.335132390910541 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6084301.958538426,
            "unit": "iter/sec",
            "range": "stddev: 7.917067662986808e-9",
            "extra": "mean: 164.3573916633466 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.15465795131449,
            "unit": "iter/sec",
            "range": "stddev: 0.0007397283831095556",
            "extra": "mean: 26.209119769229865 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.9836162393894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000781054547284086",
            "extra": "mean: 13.33624663829821 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 132.6588664144727,
            "unit": "iter/sec",
            "range": "stddev: 0.0005518345393053434",
            "extra": "mean: 7.538131653225878 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 122.73721635514599,
            "unit": "iter/sec",
            "range": "stddev: 0.012224734724533797",
            "extra": "mean: 8.147488021126797 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 134.57989459356398,
            "unit": "iter/sec",
            "range": "stddev: 0.0005669142436559369",
            "extra": "mean: 7.43053041481445 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8456.309925455964,
            "unit": "iter/sec",
            "range": "stddev: 0.00002619326990203791",
            "extra": "mean: 118.25488999518664 usec\nrounds: 4318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.887691620142375,
            "unit": "iter/sec",
            "range": "stddev: 0.001040939202677107",
            "extra": "mean: 1.1265173369999957 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 320.27047066790306,
            "unit": "iter/sec",
            "range": "stddev: 0.000192677976497353",
            "extra": "mean: 3.1223609154929757 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 110.1666434572556,
            "unit": "iter/sec",
            "range": "stddev: 0.0005558109566382269",
            "extra": "mean: 9.077157736842528 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5681.674729540717,
            "unit": "iter/sec",
            "range": "stddev: 0.00004988127286286619",
            "extra": "mean: 176.00444368993928 usec\nrounds: 3534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.31943607890348,
            "unit": "iter/sec",
            "range": "stddev: 0.0005615172700652172",
            "extra": "mean: 10.491039824996662 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 248.85015458429302,
            "unit": "iter/sec",
            "range": "stddev: 0.003758928521811445",
            "extra": "mean: 4.018482534883336 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 104.28328923034364,
            "unit": "iter/sec",
            "range": "stddev: 0.0005415743296472039",
            "extra": "mean: 9.589264084211747 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6961557211919829,
            "unit": "iter/sec",
            "range": "stddev: 0.0027399350881303058",
            "extra": "mean: 1.4364602193999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5339.72371786386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000488850568125472",
            "extra": "mean: 187.27560691099708 usec\nrounds: 2315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.27525046153751,
            "unit": "iter/sec",
            "range": "stddev: 0.018899229438565892",
            "extra": "mean: 26.827452200002 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5661.443164733776,
            "unit": "iter/sec",
            "range": "stddev: 0.00005628956550768738",
            "extra": "mean: 176.6334079319551 usec\nrounds: 2471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 339.9691526586485,
            "unit": "iter/sec",
            "range": "stddev: 0.000015625429549305146",
            "extra": "mean: 2.9414433403140725 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 197.71016924299562,
            "unit": "iter/sec",
            "range": "stddev: 0.00004290586704336743",
            "extra": "mean: 5.057908775400168 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 761495.8742274236,
            "unit": "iter/sec",
            "range": "stddev: 1.1184409074429136e-7",
            "extra": "mean: 1.3132047511282332 usec\nrounds: 24752"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 290.93160301131087,
            "unit": "iter/sec",
            "range": "stddev: 0.00022550183160676058",
            "extra": "mean: 3.437234008438478 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5671.137413331839,
            "unit": "iter/sec",
            "range": "stddev: 0.00004930105706881649",
            "extra": "mean: 176.3314705881006 usec\nrounds: 3757"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5542738.189290471,
            "unit": "iter/sec",
            "range": "stddev: 9.903219174573091e-9",
            "extra": "mean: 180.41624299184 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.101789233030516,
            "unit": "iter/sec",
            "range": "stddev: 0.0001672343421075698",
            "extra": "mean: 20.365856634146954 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5506.252910994914,
            "unit": "iter/sec",
            "range": "stddev: 0.000046998955178976786",
            "extra": "mean: 181.61170875445893 usec\nrounds: 2376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16809539219753747,
            "unit": "iter/sec",
            "range": "stddev: 0.15512137655189456",
            "extra": "mean: 5.949003044799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8858125022254888,
            "unit": "iter/sec",
            "range": "stddev: 0.005268375966046616",
            "extra": "mean: 1.1289070740000056 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.778697769876,
            "unit": "iter/sec",
            "range": "stddev: 0.00006230596444423124",
            "extra": "mean: 9.635888881718765 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.68768393715233,
            "unit": "iter/sec",
            "range": "stddev: 0.0006356517705679517",
            "extra": "mean: 9.373153142860247 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148665.80039794292,
            "unit": "iter/sec",
            "range": "stddev: 4.0361509390039946e-7",
            "extra": "mean: 6.726496593858427 usec\nrounds: 38168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.50174530802747,
            "unit": "iter/sec",
            "range": "stddev: 0.00015932585019966928",
            "extra": "mean: 14.598168199997872 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.46751078699334,
            "unit": "iter/sec",
            "range": "stddev: 0.00041146094347475784",
            "extra": "mean: 64.65164393749134 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1956197.5329100313,
            "unit": "iter/sec",
            "range": "stddev: 7.926922777143795e-8",
            "extra": "mean: 511.19581901956707 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5510233353323843,
            "unit": "iter/sec",
            "range": "stddev: 0.0018036827238710695",
            "extra": "mean: 391.9995502000006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.493801452403762,
            "unit": "iter/sec",
            "range": "stddev: 0.0008608094975821851",
            "extra": "mean: 37.7446778181872 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 321.85129035037704,
            "unit": "iter/sec",
            "range": "stddev: 0.00017423136855258462",
            "extra": "mean: 3.10702498321933 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 182.70233164843643,
            "unit": "iter/sec",
            "range": "stddev: 0.0035142098119728227",
            "extra": "mean: 5.4733838970607245 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.4256503106856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000520081936480241",
            "extra": "mean: 1.8641912433173593 msec\nrounds: 374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7022736911875054,
            "unit": "iter/sec",
            "range": "stddev: 0.0014159428515579137",
            "extra": "mean: 587.4496006000072 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5223.442669310781,
            "unit": "iter/sec",
            "range": "stddev: 0.00004747817291757578",
            "extra": "mean: 191.44462059003462 usec\nrounds: 2069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1174.4790291655916,
            "unit": "iter/sec",
            "range": "stddev: 0.000008859335471087247",
            "extra": "mean: 851.441341366861 usec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.85945114961937,
            "unit": "iter/sec",
            "range": "stddev: 0.00006259223245245452",
            "extra": "mean: 15.183849584901672 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6973188.031499354,
            "unit": "iter/sec",
            "range": "stddev: 3.5423022608025643e-9",
            "extra": "mean: 143.40642981125825 nsec\nrounds: 64512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 741.3190324770576,
            "unit": "iter/sec",
            "range": "stddev: 0.00004365971801006422",
            "extra": "mean: 1.3489468854705926 msec\nrounds: 585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1822382.35689096,
            "unit": "iter/sec",
            "range": "stddev: 8.450508573030097e-8",
            "extra": "mean: 548.7322658819144 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.1728110676552,
            "unit": "iter/sec",
            "range": "stddev: 0.00039704516059837136",
            "extra": "mean: 10.397949159420168 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 314.5586300503467,
            "unit": "iter/sec",
            "range": "stddev: 0.00018577948730345514",
            "extra": "mean: 3.17905758885059 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14124.324802201334,
            "unit": "iter/sec",
            "range": "stddev: 0.000001260259233958838",
            "extra": "mean: 70.79984452383492 usec\nrounds: 7268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.727462633854394,
            "unit": "iter/sec",
            "range": "stddev: 0.00009381162516667963",
            "extra": "mean: 16.467014372547144 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5168.790050631461,
            "unit": "iter/sec",
            "range": "stddev: 0.000023246943173558566",
            "extra": "mean: 193.4688757338542 usec\nrounds: 2213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.7253795266611,
            "unit": "iter/sec",
            "range": "stddev: 0.0001142301045117716",
            "extra": "mean: 8.352447943397955 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.719358245796191,
            "unit": "iter/sec",
            "range": "stddev: 0.0003153209945492234",
            "extra": "mean: 174.84479149999288 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12636.01555906392,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014450026969126619",
            "extra": "mean: 79.13887058192894 usec\nrounds: 6282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 306.99021993484985,
            "unit": "iter/sec",
            "range": "stddev: 0.000191100453964013",
            "extra": "mean: 3.257432761904344 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 75875.80758594106,
            "unit": "iter/sec",
            "range": "stddev: 3.947871328816099e-7",
            "extra": "mean: 13.179431386840209 usec\nrounds: 14815"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 162.67295910066633,
            "unit": "iter/sec",
            "range": "stddev: 0.000057261577718637685",
            "extra": "mean: 6.147303187502562 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 674.0211070590052,
            "unit": "iter/sec",
            "range": "stddev: 0.000058307493490210606",
            "extra": "mean: 1.483633063604428 msec\nrounds: 566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1778.9242415719004,
            "unit": "iter/sec",
            "range": "stddev: 0.000009689944209858876",
            "extra": "mean: 562.1374854706436 usec\nrounds: 1411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 143.70420622835655,
            "unit": "iter/sec",
            "range": "stddev: 0.0005510321974727495",
            "extra": "mean: 6.958738552237827 msec\nrounds: 134"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "4b286bdf52d0e6f899c51dcfff994ea35c6cd96b",
          "message": "chore: remove spark alias to pyspark and associated cruft\n\nBREAKING CHANGE: The `spark` plugin alias is removed. Use `pyspark` instead",
          "timestamp": "2023-03-02T11:56:44-05:00",
          "tree_id": "d5a2535ac96ffa0455cf9079bc6d584babcd0822",
          "url": "https://github.com/ibis-project/ibis/commit/4b286bdf52d0e6f899c51dcfff994ea35c6cd96b"
        },
        "date": 1677776949169,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 292.6419456207797,
            "unit": "iter/sec",
            "range": "stddev: 0.00004799891838916411",
            "extra": "mean: 3.417145132351774 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5202.63705268787,
            "unit": "iter/sec",
            "range": "stddev: 0.00002475229758549086",
            "extra": "mean: 192.21021760173792 usec\nrounds: 1443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 323.57976581774057,
            "unit": "iter/sec",
            "range": "stddev: 0.0001693929723250187",
            "extra": "mean: 3.09042809729722 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5687.44253671791,
            "unit": "iter/sec",
            "range": "stddev: 0.00005214140849822363",
            "extra": "mean: 175.82595227011763 usec\nrounds: 1299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 238.7855016145203,
            "unit": "iter/sec",
            "range": "stddev: 0.0037621595336645992",
            "extra": "mean: 4.187858949721053 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1768.2318500501024,
            "unit": "iter/sec",
            "range": "stddev: 0.000009603763978860308",
            "extra": "mean: 565.5366969957391 usec\nrounds: 1165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 765329.9714680746,
            "unit": "iter/sec",
            "range": "stddev: 2.953217260409845e-7",
            "extra": "mean: 1.306625948650326 usec\nrounds: 23585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.295667687439604,
            "unit": "iter/sec",
            "range": "stddev: 0.0002462673470348486",
            "extra": "mean: 20.705790972221568 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 331.7996417671775,
            "unit": "iter/sec",
            "range": "stddev: 0.00015320757185313365",
            "extra": "mean: 3.013867027323966 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 323.39097069312385,
            "unit": "iter/sec",
            "range": "stddev: 0.00017184920401182565",
            "extra": "mean: 3.092232284212203 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 143.31081570561696,
            "unit": "iter/sec",
            "range": "stddev: 0.0005482142955252676",
            "extra": "mean: 6.977840402877602 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7063446.0078534875,
            "unit": "iter/sec",
            "range": "stddev: 4.049670354984436e-9",
            "extra": "mean: 141.57395680360236 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5614846.525671973,
            "unit": "iter/sec",
            "range": "stddev: 3.520297563737428e-8",
            "extra": "mean: 178.09925799878306 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5643.305311065876,
            "unit": "iter/sec",
            "range": "stddev: 0.00007784554303716052",
            "extra": "mean: 177.20111616841186 usec\nrounds: 2307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5141318559672308,
            "unit": "iter/sec",
            "range": "stddev: 0.0014589276010863546",
            "extra": "mean: 397.7516126000012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12050744.62744521,
            "unit": "iter/sec",
            "range": "stddev: 2.9179890488071637e-9",
            "extra": "mean: 82.98242398410606 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.71468749701786,
            "unit": "iter/sec",
            "range": "stddev: 0.00036010526065162544",
            "extra": "mean: 10.339691166668294 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12598.766685612187,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018046646182673846",
            "extra": "mean: 79.37284854572327 usec\nrounds: 6979"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 110.17553264831854,
            "unit": "iter/sec",
            "range": "stddev: 0.0005549262391209496",
            "extra": "mean: 9.076425372882113 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.4246519211064,
            "unit": "iter/sec",
            "range": "stddev: 0.000059103776327552854",
            "extra": "mean: 1.8607259574441692 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.6979116364691755,
            "unit": "iter/sec",
            "range": "stddev: 0.0010389807519797774",
            "extra": "mean: 175.50289716666612 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8793547856385195,
            "unit": "iter/sec",
            "range": "stddev: 0.010373429280522189",
            "extra": "mean: 1.1371974273999967 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 110.40323247113224,
            "unit": "iter/sec",
            "range": "stddev: 0.0005617473127293869",
            "extra": "mean: 9.05770580821966 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.91398600320666,
            "unit": "iter/sec",
            "range": "stddev: 0.0006075552372743914",
            "extra": "mean: 17.266986249998933 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 96.68416475454649,
            "unit": "iter/sec",
            "range": "stddev: 0.012520432200959804",
            "extra": "mean: 10.342955359222627 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 308.45122642022636,
            "unit": "iter/sec",
            "range": "stddev: 0.0002182979329569414",
            "extra": "mean: 3.2420036438358153 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.09915710642855,
            "unit": "iter/sec",
            "range": "stddev: 0.00011726414243348488",
            "extra": "mean: 9.606225715906836 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1791232.309323587,
            "unit": "iter/sec",
            "range": "stddev: 9.524961548300013e-8",
            "extra": "mean: 558.2748785821223 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 135.74541519599566,
            "unit": "iter/sec",
            "range": "stddev: 0.00005173474206398568",
            "extra": "mean: 7.36673130769207 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 143.1557636109917,
            "unit": "iter/sec",
            "range": "stddev: 0.0005093727349583146",
            "extra": "mean: 6.985398106061435 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.844920774404155,
            "unit": "iter/sec",
            "range": "stddev: 0.0028587704762536715",
            "extra": "mean: 1.1835429193999971 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5460.352639761704,
            "unit": "iter/sec",
            "range": "stddev: 0.00005207132790957373",
            "extra": "mean: 183.13835496962352 usec\nrounds: 1972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 291.19421119897805,
            "unit": "iter/sec",
            "range": "stddev: 0.0002356296745423214",
            "extra": "mean: 3.4341342016468954 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16821667936990167,
            "unit": "iter/sec",
            "range": "stddev: 0.07314103109950412",
            "extra": "mean: 5.944713709400008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6157421.876293471,
            "unit": "iter/sec",
            "range": "stddev: 7.038323799724756e-9",
            "extra": "mean: 162.40563341107506 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.3610128045003,
            "unit": "iter/sec",
            "range": "stddev: 0.000053587789635865586",
            "extra": "mean: 7.280086100000257 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.87807802919517,
            "unit": "iter/sec",
            "range": "stddev: 0.0005756249895139245",
            "extra": "mean: 10.429912870129677 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2730517.118658623,
            "unit": "iter/sec",
            "range": "stddev: 1.3709043985613808e-8",
            "extra": "mean: 366.2309945489228 nsec\nrounds: 109879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2696085.6085245414,
            "unit": "iter/sec",
            "range": "stddev: 1.3731386720530967e-8",
            "extra": "mean: 370.9081035257121 nsec\nrounds: 117634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7809333998964851,
            "unit": "iter/sec",
            "range": "stddev: 0.001992055151798812",
            "extra": "mean: 561.5033106000055 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.81909324863874,
            "unit": "iter/sec",
            "range": "stddev: 0.0000581292361924978",
            "extra": "mean: 8.208893805825257 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2695539.4853344173,
            "unit": "iter/sec",
            "range": "stddev: 1.3496828549085589e-8",
            "extra": "mean: 370.9832504555665 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 104.92590222539476,
            "unit": "iter/sec",
            "range": "stddev: 0.0006424196881812966",
            "extra": "mean: 9.530535156627648 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 142.38882710431378,
            "unit": "iter/sec",
            "range": "stddev: 0.0005521094346687266",
            "extra": "mean: 7.023022945946467 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 132.14251716330617,
            "unit": "iter/sec",
            "range": "stddev: 0.0006718562049814835",
            "extra": "mean: 7.567587037593405 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 41.323771940698265,
            "unit": "iter/sec",
            "range": "stddev: 0.0005048517372379288",
            "extra": "mean: 24.199146230771273 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 131.61572201935587,
            "unit": "iter/sec",
            "range": "stddev: 0.018163155092802752",
            "extra": "mean: 7.597876489656278 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1182.582216015901,
            "unit": "iter/sec",
            "range": "stddev: 0.000010299983830764077",
            "extra": "mean: 845.6071691733897 usec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 144.02918896968927,
            "unit": "iter/sec",
            "range": "stddev: 0.0005445234689666381",
            "extra": "mean: 6.943037082646133 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.75716778099088,
            "unit": "iter/sec",
            "range": "stddev: 0.00011123831216800714",
            "extra": "mean: 13.02809925000454 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8405.252100709775,
            "unit": "iter/sec",
            "range": "stddev: 0.000012452000886359048",
            "extra": "mean: 118.97323102486786 usec\nrounds: 3913"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.6167338453251,
            "unit": "iter/sec",
            "range": "stddev: 0.000020211325711255472",
            "extra": "mean: 1.4628079602075095 msec\nrounds: 578"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.72173712578842,
            "unit": "iter/sec",
            "range": "stddev: 0.0009693178263306036",
            "extra": "mean: 38.877623043484405 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 506415.14483652596,
            "unit": "iter/sec",
            "range": "stddev: 3.0023815643493106e-7",
            "extra": "mean: 1.9746644826801267 usec\nrounds: 2137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 197.68455920282463,
            "unit": "iter/sec",
            "range": "stddev: 0.00004547155388268421",
            "extra": "mean: 5.058564027623415 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13880.842857016687,
            "unit": "iter/sec",
            "range": "stddev: 0.000001447990530914747",
            "extra": "mean: 72.04173480679566 usec\nrounds: 6878"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150513.11696035342,
            "unit": "iter/sec",
            "range": "stddev: 3.7228988194208804e-7",
            "extra": "mean: 6.643939214038132 usec\nrounds: 43102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 144.1610970393489,
            "unit": "iter/sec",
            "range": "stddev: 0.0005384917557426776",
            "extra": "mean: 6.936684171646177 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5320.948204133628,
            "unit": "iter/sec",
            "range": "stddev: 0.000052424753981515404",
            "extra": "mean: 187.936428177057 usec\nrounds: 3258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 220.67728472862927,
            "unit": "iter/sec",
            "range": "stddev: 0.015568654946563948",
            "extra": "mean: 4.531504006992462 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.68526397964413,
            "unit": "iter/sec",
            "range": "stddev: 0.00006997295512261715",
            "extra": "mean: 15.224114807697202 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 135.67099174705115,
            "unit": "iter/sec",
            "range": "stddev: 0.000553665331109544",
            "extra": "mean: 7.370772389313911 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6967160377347581,
            "unit": "iter/sec",
            "range": "stddev: 0.0013653730282068063",
            "extra": "mean: 1.4353049820000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 201.161443062896,
            "unit": "iter/sec",
            "range": "stddev: 0.000034876057518093034",
            "extra": "mean: 4.97113156862439 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.56425825866227,
            "unit": "iter/sec",
            "range": "stddev: 0.001342017136662341",
            "extra": "mean: 22.439507333337534 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.31479626819952,
            "unit": "iter/sec",
            "range": "stddev: 0.00013537789323483582",
            "extra": "mean: 10.275929646340733 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 108.28907586061295,
            "unit": "iter/sec",
            "range": "stddev: 0.0005651853081776777",
            "extra": "mean: 9.234541822918274 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 144.02151860436018,
            "unit": "iter/sec",
            "range": "stddev: 0.0005465381664264273",
            "extra": "mean: 6.94340685815908 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 316.706782190662,
            "unit": "iter/sec",
            "range": "stddev: 0.0002067982437005169",
            "extra": "mean: 3.1574947435069 msec\nrounds: 308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5073.575221296986,
            "unit": "iter/sec",
            "range": "stddev: 0.00005431379328465354",
            "extra": "mean: 197.09966963776768 usec\nrounds: 3254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 175.4546485320536,
            "unit": "iter/sec",
            "range": "stddev: 0.0035064197012508814",
            "extra": "mean: 5.699478516907526 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 105.38037777254905,
            "unit": "iter/sec",
            "range": "stddev: 0.0006039656211913785",
            "extra": "mean: 9.489432673684094 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.668278671874937,
            "unit": "iter/sec",
            "range": "stddev: 0.04673053576062556",
            "extra": "mean: 34.88175943332976 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5401.666517448143,
            "unit": "iter/sec",
            "range": "stddev: 0.000050271928977072155",
            "extra": "mean: 185.12805201318133 usec\nrounds: 2384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.4803011458168,
            "unit": "iter/sec",
            "range": "stddev: 0.0006308188587621551",
            "extra": "mean: 15.042049791661091 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.651324617465233,
            "unit": "iter/sec",
            "range": "stddev: 0.0013145462204236786",
            "extra": "mean: 93.88503645455289 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5732.5693625670365,
            "unit": "iter/sec",
            "range": "stddev: 0.00004668039734162245",
            "extra": "mean: 174.4418491522973 usec\nrounds: 2181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 320.3264515892801,
            "unit": "iter/sec",
            "range": "stddev: 0.00023198104895557538",
            "extra": "mean: 3.1218152451618066 msec\nrounds: 310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 315.4459559353087,
            "unit": "iter/sec",
            "range": "stddev: 0.00019447444674383803",
            "extra": "mean: 3.170115137583437 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8828967130033323,
            "unit": "iter/sec",
            "range": "stddev: 0.0022970385792986004",
            "extra": "mean: 1.1326353187999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74989.5004510768,
            "unit": "iter/sec",
            "range": "stddev: 6.538275820081049e-7",
            "extra": "mean: 13.335200181156035 usec\nrounds: 13263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 164.06634355040575,
            "unit": "iter/sec",
            "range": "stddev: 0.00004725269037887634",
            "extra": "mean: 6.095095303277556 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 105.65093628173182,
            "unit": "iter/sec",
            "range": "stddev: 0.0005772019975177832",
            "extra": "mean: 9.465131452629736 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.724103805392398,
            "unit": "iter/sec",
            "range": "stddev: 0.000756158206578576",
            "extra": "mean: 63.59662924999654 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5263.891489156657,
            "unit": "iter/sec",
            "range": "stddev: 0.0000648932466751905",
            "extra": "mean: 189.973520932175 usec\nrounds: 2532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 742.3687610023468,
            "unit": "iter/sec",
            "range": "stddev: 0.00001878946844057717",
            "extra": "mean: 1.3470394398732501 msec\nrounds: 632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.1168424739796,
            "unit": "iter/sec",
            "range": "stddev: 0.00013357805060411468",
            "extra": "mean: 3.435046874999619 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11972.9912924947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000337784465864775",
            "extra": "mean: 83.52131690155429 usec\nrounds: 4402"
          }
        ]
      }
    ]
  }
}