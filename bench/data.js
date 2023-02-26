window.BENCHMARK_DATA = {
  "lastUpdate": 1677370991479,
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
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "333221fa3a0ad237b07837f75459d7f99ccb7c33",
          "message": "chore(flake/nixpkgs): `5798b8c5` -> `98759b48`",
          "timestamp": "2023-02-26T00:16:49Z",
          "tree_id": "d98573bbff7e1c43d0418ec609e25f8f9b1ec4b7",
          "url": "https://github.com/ibis-project/ibis/commit/333221fa3a0ad237b07837f75459d7f99ccb7c33"
        },
        "date": 1677370907413,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 976.6716419599363,
            "unit": "iter/sec",
            "range": "stddev: 0.00003730985603984316",
            "extra": "mean: 1.0238855691491662 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.121852346367685,
            "unit": "iter/sec",
            "range": "stddev: 0.01462149461819731",
            "extra": "mean: 33.19848953846251 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1414470.5362745938,
            "unit": "iter/sec",
            "range": "stddev: 1.515681024103405e-7",
            "extra": "mean: 706.9783175786619 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.9891228268158,
            "unit": "iter/sec",
            "range": "stddev: 0.00001388016202759003",
            "extra": "mean: 3.7454709368390877 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10102.707132888267,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019410989472397353",
            "extra": "mean: 98.98337018447347 usec\nrounds: 4387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4000.0454544959257,
            "unit": "iter/sec",
            "range": "stddev: 0.000052288041723118204",
            "extra": "mean: 249.99715912628724 usec\nrounds: 641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.04505877301701,
            "unit": "iter/sec",
            "range": "stddev: 0.0005962029179772094",
            "extra": "mean: 41.58858622222144 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1460584.0353683645,
            "unit": "iter/sec",
            "range": "stddev: 1.3884033325790928e-7",
            "extra": "mean: 684.6576272126625 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.90233178200573,
            "unit": "iter/sec",
            "range": "stddev: 0.0009771158529363535",
            "extra": "mean: 17.573972255320314 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1448.309943597575,
            "unit": "iter/sec",
            "range": "stddev: 0.000006367869864199182",
            "extra": "mean: 690.4599422386195 usec\nrounds: 1108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.19625769478859,
            "unit": "iter/sec",
            "range": "stddev: 0.00024880066185086765",
            "extra": "mean: 11.46838208928967 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3801.87727865943,
            "unit": "iter/sec",
            "range": "stddev: 0.000049756139569115545",
            "extra": "mean: 263.0279534831823 usec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.067333971065748,
            "unit": "iter/sec",
            "range": "stddev: 0.00034969336217802557",
            "extra": "mean: 110.2860006249955 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 440.80363179550926,
            "unit": "iter/sec",
            "range": "stddev: 0.0060257990427065285",
            "extra": "mean: 2.2685838497444695 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 104.12093794513137,
            "unit": "iter/sec",
            "range": "stddev: 0.0005909915766802434",
            "extra": "mean: 9.60421620987481 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 325.9852242292002,
            "unit": "iter/sec",
            "range": "stddev: 0.00003977231171244601",
            "extra": "mean: 3.067623700934678 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4538663.449351085,
            "unit": "iter/sec",
            "range": "stddev: 1.2832191531653428e-8",
            "extra": "mean: 220.3291808615042 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.5588208956891,
            "unit": "iter/sec",
            "range": "stddev: 0.00008954082206892195",
            "extra": "mean: 14.801916119051299 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.201602176707488,
            "unit": "iter/sec",
            "range": "stddev: 0.001854074515760322",
            "extra": "mean: 454.2146672000058 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 218.23935774271882,
            "unit": "iter/sec",
            "range": "stddev: 0.006570150532552406",
            "extra": "mean: 4.582124921660072 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9307.069067544868,
            "unit": "iter/sec",
            "range": "stddev: 0.000019060521375085995",
            "extra": "mean: 107.44521102643887 usec\nrounds: 4208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5536185140044756,
            "unit": "iter/sec",
            "range": "stddev: 0.002210686307173774",
            "extra": "mean: 643.6586530000113 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10974.145713253867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019301608191237613",
            "extra": "mean: 91.12326609553438 usec\nrounds: 5374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 255.76030498190877,
            "unit": "iter/sec",
            "range": "stddev: 0.0002213180179682037",
            "extra": "mean: 3.909910883437268 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 86.21977337685547,
            "unit": "iter/sec",
            "range": "stddev: 0.0006043956583074317",
            "extra": "mean: 11.598267553187936 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1928453.2617680037,
            "unit": "iter/sec",
            "range": "stddev: 5.238485857909534e-8",
            "extra": "mean: 518.5502909638375 nsec\nrounds: 100011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 83.04005148587677,
            "unit": "iter/sec",
            "range": "stddev: 0.0006313702453393022",
            "extra": "mean: 12.042381743586434 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 54910.50423250472,
            "unit": "iter/sec",
            "range": "stddev: 5.982563504027321e-7",
            "extra": "mean: 18.211451779166904 usec\nrounds: 4272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.41143231534028,
            "unit": "iter/sec",
            "range": "stddev: 0.00034659117976041347",
            "extra": "mean: 10.821171958331396 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 230.13216519008878,
            "unit": "iter/sec",
            "range": "stddev: 0.0002509715643193048",
            "extra": "mean: 4.345329125000852 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4410156.9808845045,
            "unit": "iter/sec",
            "range": "stddev: 1.2390574321982584e-8",
            "extra": "mean: 226.7492981166751 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.477695522932379,
            "unit": "iter/sec",
            "range": "stddev: 0.0005367800146514255",
            "extra": "mean: 74.19666057142292 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4024.395745014305,
            "unit": "iter/sec",
            "range": "stddev: 0.000048080910196867645",
            "extra": "mean: 248.4845088207014 usec\nrounds: 1814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8533804570476884,
            "unit": "iter/sec",
            "range": "stddev: 0.004542627748803228",
            "extra": "mean: 1.1718102889999955 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 75.61854462694374,
            "unit": "iter/sec",
            "range": "stddev: 0.0006591073888145755",
            "extra": "mean: 13.224269323528988 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6393.075373706452,
            "unit": "iter/sec",
            "range": "stddev: 0.000016786383433699533",
            "extra": "mean: 156.41924137369267 usec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 133.41582360401128,
            "unit": "iter/sec",
            "range": "stddev: 0.00010850067380924803",
            "extra": "mean: 7.495362791208928 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1490377613861432,
            "unit": "iter/sec",
            "range": "stddev: 0.10494311329101288",
            "extra": "mean: 6.709708940200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 250.8918550462678,
            "unit": "iter/sec",
            "range": "stddev: 0.00023235020746267061",
            "extra": "mean: 3.98578104424947 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 108.58206076501811,
            "unit": "iter/sec",
            "range": "stddev: 0.00009366782304829407",
            "extra": "mean: 9.209624434777444 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 563283.4287731005,
            "unit": "iter/sec",
            "range": "stddev: 1.9702202674636673e-7",
            "extra": "mean: 1.7753051996898277 usec\nrounds: 21232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 166.22642171035963,
            "unit": "iter/sec",
            "range": "stddev: 0.00017439282843414737",
            "extra": "mean: 6.015890793477134 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 425.3916018730482,
            "unit": "iter/sec",
            "range": "stddev: 0.00009986686344769832",
            "extra": "mean: 2.350775134245446 msec\nrounds: 365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 356700.3625805454,
            "unit": "iter/sec",
            "range": "stddev: 3.5592916242568664e-7",
            "extra": "mean: 2.8034734609337355 usec\nrounds: 1884"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4394.778448542364,
            "unit": "iter/sec",
            "range": "stddev: 0.000024806950504969708",
            "extra": "mean: 227.54275595659996 usec\nrounds: 1385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.354516085096954,
            "unit": "iter/sec",
            "range": "stddev: 0.0009307712141235087",
            "extra": "mean: 26.07254900000056 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.78768285746566,
            "unit": "iter/sec",
            "range": "stddev: 0.0005028710068095485",
            "extra": "mean: 19.309610795916136 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 111.3495321401616,
            "unit": "iter/sec",
            "range": "stddev: 0.0006493619610204677",
            "extra": "mean: 8.980729247620426 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5789382844710658,
            "unit": "iter/sec",
            "range": "stddev: 0.0025385728400377956",
            "extra": "mean: 1.727299829399999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.992900242290027,
            "unit": "iter/sec",
            "range": "stddev: 0.021721428324596486",
            "extra": "mean: 32.26545409375703 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4386.417935826541,
            "unit": "iter/sec",
            "range": "stddev: 0.00006565752563600258",
            "extra": "mean: 227.97645245620402 usec\nrounds: 1609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.46043203185968,
            "unit": "iter/sec",
            "range": "stddev: 0.00020863658405095303",
            "extra": "mean: 14.39668557692423 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 117.53550171144973,
            "unit": "iter/sec",
            "range": "stddev: 0.0003492406237267934",
            "extra": "mean: 8.508067651380816 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 96.69692001711267,
            "unit": "iter/sec",
            "range": "stddev: 0.00013091862997576534",
            "extra": "mean: 10.341591022992539 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 159.22197358555172,
            "unit": "iter/sec",
            "range": "stddev: 0.00007599336198934578",
            "extra": "mean: 6.280540163400807 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 72.37882749214997,
            "unit": "iter/sec",
            "range": "stddev: 0.014107739038147065",
            "extra": "mean: 13.816195075948938 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 112.36006701734722,
            "unit": "iter/sec",
            "range": "stddev: 0.0006744760501531638",
            "extra": "mean: 8.899959091743959 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.10400730943498,
            "unit": "iter/sec",
            "range": "stddev: 0.00042513317807667554",
            "extra": "mean: 11.750327999996964 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.822525701192589,
            "unit": "iter/sec",
            "range": "stddev: 0.0031410157670306365",
            "extra": "mean: 207.3602219999998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.627826719821584,
            "unit": "iter/sec",
            "range": "stddev: 0.00021772092921809548",
            "extra": "mean: 24.02239268291751 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.849808509002994,
            "unit": "iter/sec",
            "range": "stddev: 0.003604304323966146",
            "extra": "mean: 1.1767356873999915 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 246.23176202095678,
            "unit": "iter/sec",
            "range": "stddev: 0.000244678615377901",
            "extra": "mean: 4.061214490740191 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 81.30968603117542,
            "unit": "iter/sec",
            "range": "stddev: 0.0006814766371962835",
            "extra": "mean: 12.298657746834545 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5572845.4658573335,
            "unit": "iter/sec",
            "range": "stddev: 5.9934677263017326e-9",
            "extra": "mean: 179.4415449211409 nsec\nrounds: 55252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 111.84062516375407,
            "unit": "iter/sec",
            "range": "stddev: 0.0007409115048243221",
            "extra": "mean: 8.941294798163248 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 133.91405610143065,
            "unit": "iter/sec",
            "range": "stddev: 0.00017515299170142167",
            "extra": "mean: 7.467475999999351 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 111.98721148303699,
            "unit": "iter/sec",
            "range": "stddev: 0.0007282825445225724",
            "extra": "mean: 8.92959103773624 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 104.88064755765328,
            "unit": "iter/sec",
            "range": "stddev: 0.0007894043965400579",
            "extra": "mean: 9.534647461537613 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119950.1006674505,
            "unit": "iter/sec",
            "range": "stddev: 3.779778727439177e-7",
            "extra": "mean: 8.336800006299276 usec\nrounds: 31646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12219371.664508013,
            "unit": "iter/sec",
            "range": "stddev: 4.254237881631047e-9",
            "extra": "mean: 81.8372685154883 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.40765945419787,
            "unit": "iter/sec",
            "range": "stddev: 0.000346567438967746",
            "extra": "mean: 11.184724061726325 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1557391.3898320098,
            "unit": "iter/sec",
            "range": "stddev: 1.9755631314992927e-7",
            "extra": "mean: 642.0993505735681 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 85.5559357572638,
            "unit": "iter/sec",
            "range": "stddev: 0.0007049630657350865",
            "extra": "mean: 11.688259746666365 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7328052107013865,
            "unit": "iter/sec",
            "range": "stddev: 0.0032323947875113257",
            "extra": "mean: 1.3646191175999889 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 256.1532234521815,
            "unit": "iter/sec",
            "range": "stddev: 0.0002843158381945752",
            "extra": "mean: 3.90391339419033 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4463.598147731784,
            "unit": "iter/sec",
            "range": "stddev: 0.000052805982996928525",
            "extra": "mean: 224.03450465364108 usec\nrounds: 2901"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 110.99017135667047,
            "unit": "iter/sec",
            "range": "stddev: 0.0007093049364397568",
            "extra": "mean: 9.009806794391443 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4320.587323176381,
            "unit": "iter/sec",
            "range": "stddev: 0.000049750643643537004",
            "extra": "mean: 231.4500148245648 usec\nrounds: 1956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 251.32447668528545,
            "unit": "iter/sec",
            "range": "stddev: 0.00024243622564987856",
            "extra": "mean: 3.978920052630704 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 265.6348849720988,
            "unit": "iter/sec",
            "range": "stddev: 0.0001415390410042256",
            "extra": "mean: 3.764565787754255 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4456.955636034315,
            "unit": "iter/sec",
            "range": "stddev: 0.00005214768945579562",
            "extra": "mean: 224.36839889431218 usec\nrounds: 2171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 611.5692468703821,
            "unit": "iter/sec",
            "range": "stddev: 0.00003488951985128227",
            "extra": "mean: 1.635137811649877 msec\nrounds: 515"
          }
        ]
      }
    ]
  }
}