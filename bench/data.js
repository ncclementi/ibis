window.BENCHMARK_DATA = {
  "lastUpdate": 1676721001007,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "3589f80af4cdb433876c5ac83d37f5c7aac5cf6e",
          "message": "depr(api): mark `ibis.sequence()` for removal\n\nnot required anymore, the API methods should automatically convert coerce to the right types",
          "timestamp": "2023-02-18T06:43:59-05:00",
          "tree_id": "2b2a29e0ee75481a3966ee139fe52e70a460481c",
          "url": "https://github.com/ibis-project/ibis/commit/3589f80af4cdb433876c5ac83d37f5c7aac5cf6e"
        },
        "date": 1676720911074,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 109.52817773977772,
            "unit": "iter/sec",
            "range": "stddev: 0.010336351212433975",
            "extra": "mean: 9.130070641509693 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4348377.939930388,
            "unit": "iter/sec",
            "range": "stddev: 2.1785020117458114e-8",
            "extra": "mean: 229.97081068202812 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 73.62371982500495,
            "unit": "iter/sec",
            "range": "stddev: 0.0008134107798023037",
            "extra": "mean: 13.58257912500053 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 207.52079386821416,
            "unit": "iter/sec",
            "range": "stddev: 0.0003282799524918538",
            "extra": "mean: 4.8187942102565815 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 71.35059520408683,
            "unit": "iter/sec",
            "range": "stddev: 0.0009614520704720345",
            "extra": "mean: 14.01530004255272 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.129879338169474,
            "unit": "iter/sec",
            "range": "stddev: 0.00019595272057725896",
            "extra": "mean: 19.5580355937488 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 194.30680479042772,
            "unit": "iter/sec",
            "range": "stddev: 0.0003684964967931898",
            "extra": "mean: 5.146500150000222 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.392876874637317,
            "unit": "iter/sec",
            "range": "stddev: 0.0005114165892550054",
            "extra": "mean: 34.02184836363824 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8297.72430030556,
            "unit": "iter/sec",
            "range": "stddev: 0.000017035519826734536",
            "extra": "mean: 120.51497058816179 usec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6192435697522612,
            "unit": "iter/sec",
            "range": "stddev: 0.004556363539580465",
            "extra": "mean: 1.6148734502000024 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 225.14559533866378,
            "unit": "iter/sec",
            "range": "stddev: 0.00016323311800658862",
            "extra": "mean: 4.441570346938393 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 185.14492086540903,
            "unit": "iter/sec",
            "range": "stddev: 0.0004909468024683162",
            "extra": "mean: 5.40117436290326 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 74.2822704120135,
            "unit": "iter/sec",
            "range": "stddev: 0.00033799887424919593",
            "extra": "mean: 13.46216256521788 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1210538.622324246,
            "unit": "iter/sec",
            "range": "stddev: 1.5755659980906497e-7",
            "extra": "mean: 826.0785583858451 nsec\nrounds: 96145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 117.69289258972482,
            "unit": "iter/sec",
            "range": "stddev: 0.00011590779498244226",
            "extra": "mean: 8.49668980000331 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4581.9792210938895,
            "unit": "iter/sec",
            "range": "stddev: 0.00006817213207032169",
            "extra": "mean: 218.24629745074722 usec\nrounds: 353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.55790906959639,
            "unit": "iter/sec",
            "range": "stddev: 0.00041254209746473627",
            "extra": "mean: 24.062808317071855 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6562031339229618,
            "unit": "iter/sec",
            "range": "stddev: 0.0080175543782211",
            "extra": "mean: 1.5239183543999957 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 200.71265055639296,
            "unit": "iter/sec",
            "range": "stddev: 0.0003143746786576072",
            "extra": "mean: 4.9822469945362835 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 115.584803750773,
            "unit": "iter/sec",
            "range": "stddev: 0.012473295219530412",
            "extra": "mean: 8.651656338459736 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11447187119520988,
            "unit": "iter/sec",
            "range": "stddev: 0.09022290777757233",
            "extra": "mean: 8.735770539599997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 72.84484050548022,
            "unit": "iter/sec",
            "range": "stddev: 0.0009350250222614605",
            "extra": "mean: 13.727808216214965 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8548278750892793,
            "unit": "iter/sec",
            "range": "stddev: 0.0051626393443295684",
            "extra": "mean: 539.1335840000067 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 84.81356991952482,
            "unit": "iter/sec",
            "range": "stddev: 0.00014010977983263355",
            "extra": "mean: 11.790566072726898 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 100.85558351678674,
            "unit": "iter/sec",
            "range": "stddev: 0.00022342672990555298",
            "extra": "mean: 9.915167461537285 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 29.649703678528464,
            "unit": "iter/sec",
            "range": "stddev: 0.0006773388515194343",
            "extra": "mean: 33.72714988460993 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 119.21743905522622,
            "unit": "iter/sec",
            "range": "stddev: 0.00030182214868539476",
            "extra": "mean: 8.388034568808013 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 65.63416057835474,
            "unit": "iter/sec",
            "range": "stddev: 0.0005111448478887474",
            "extra": "mean: 15.235968452833182 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 433.88444333461604,
            "unit": "iter/sec",
            "range": "stddev: 0.000046254938383882576",
            "extra": "mean: 2.3047611302090174 msec\nrounds: 384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.615166512190278,
            "unit": "iter/sec",
            "range": "stddev: 0.0015967964385425284",
            "extra": "mean: 86.0943318333393 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4709.863513575294,
            "unit": "iter/sec",
            "range": "stddev: 0.00005745081295344093",
            "extra": "mean: 212.32037767499813 usec\nrounds: 1729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 524.2779374359238,
            "unit": "iter/sec",
            "range": "stddev: 0.000046542120645073266",
            "extra": "mean: 1.9073852409099665 msec\nrounds: 440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16547.467345379893,
            "unit": "iter/sec",
            "range": "stddev: 0.000013951698839327648",
            "extra": "mean: 60.43220869562274 usec\nrounds: 4600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3196891729017544,
            "unit": "iter/sec",
            "range": "stddev: 0.0016250281186799144",
            "extra": "mean: 757.7541897999993 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 75.69131266104796,
            "unit": "iter/sec",
            "range": "stddev: 0.000873104729516683",
            "extra": "mean: 13.211555789474597 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 25.968208878435536,
            "unit": "iter/sec",
            "range": "stddev: 0.03353028678290146",
            "extra": "mean: 38.50862432142626 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 47516.08492370954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011637155399497652",
            "extra": "mean: 21.04550494018123 usec\nrounds: 9615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 78.13541074227652,
            "unit": "iter/sec",
            "range": "stddev: 0.0008919608712828609",
            "extra": "mean: 12.79829453125192 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 210.48453231312294,
            "unit": "iter/sec",
            "range": "stddev: 0.0002814907180840029",
            "extra": "mean: 4.7509429268292775 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 122.15579322320824,
            "unit": "iter/sec",
            "range": "stddev: 0.000929445072234201",
            "extra": "mean: 8.186267500001065 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 118.61358522966839,
            "unit": "iter/sec",
            "range": "stddev: 0.00030157016179185387",
            "extra": "mean: 8.430737491525326 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 826.1071626524875,
            "unit": "iter/sec",
            "range": "stddev: 0.000013028874041522995",
            "extra": "mean: 1.2104967069758512 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3938.3677272116383,
            "unit": "iter/sec",
            "range": "stddev: 0.000062303904719722",
            "extra": "mean: 253.91229800372128 usec\nrounds: 1453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 208.48603509863847,
            "unit": "iter/sec",
            "range": "stddev: 0.0002754474794185529",
            "extra": "mean: 4.796484328203959 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4114.777977107198,
            "unit": "iter/sec",
            "range": "stddev: 0.00006435049365225848",
            "extra": "mean: 243.02647811462901 usec\nrounds: 2673"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.145750553611873,
            "unit": "iter/sec",
            "range": "stddev: 0.005137687225920079",
            "extra": "mean: 241.21084640000277 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 110.12405338027042,
            "unit": "iter/sec",
            "range": "stddev: 0.017075334704063354",
            "extra": "mean: 9.080668294572215 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 326434.73589556996,
            "unit": "iter/sec",
            "range": "stddev: 2.0925880286630983e-7",
            "extra": "mean: 3.0633994793982677 usec\nrounds: 1537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1239.8122703579124,
            "unit": "iter/sec",
            "range": "stddev: 0.000020896776971411005",
            "extra": "mean: 806.5737240294592 usec\nrounds: 953"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3894.567594974415,
            "unit": "iter/sec",
            "range": "stddev: 0.00007076279691083335",
            "extra": "mean: 256.76791469492247 usec\nrounds: 1606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4461.59370485596,
            "unit": "iter/sec",
            "range": "stddev: 0.00006267627907824984",
            "extra": "mean: 224.13515576544063 usec\nrounds: 2966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 145.91137409926228,
            "unit": "iter/sec",
            "range": "stddev: 0.000045522631445544685",
            "extra": "mean: 6.853475311113913 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3601164.9881000994,
            "unit": "iter/sec",
            "range": "stddev: 1.8730362489669227e-8",
            "extra": "mean: 277.68791580066414 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.715816533830207,
            "unit": "iter/sec",
            "range": "stddev: 0.0008271664634089842",
            "extra": "mean: 53.430743894738804 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9371.633868983798,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022940490131412976",
            "extra": "mean: 106.70497951371993 usec\nrounds: 4442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 131.60444419338003,
            "unit": "iter/sec",
            "range": "stddev: 0.000929349880888351",
            "extra": "mean: 7.598527588708149 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3481830.762226102,
            "unit": "iter/sec",
            "range": "stddev: 1.9221502273215803e-8",
            "extra": "mean: 287.20522859648037 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1214640.1336805816,
            "unit": "iter/sec",
            "range": "stddev: 1.3691793470338223e-7",
            "extra": "mean: 823.2891144225716 nsec\nrounds: 104156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 58.04191149901845,
            "unit": "iter/sec",
            "range": "stddev: 0.0007673701620258889",
            "extra": "mean: 17.22892947826005 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 132.29082733030316,
            "unit": "iter/sec",
            "range": "stddev: 0.0009557838328467708",
            "extra": "mean: 7.55910307751878 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 73.08170449159819,
            "unit": "iter/sec",
            "range": "stddev: 0.0008923600360361692",
            "extra": "mean: 13.683315228573585 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4886877199721293,
            "unit": "iter/sec",
            "range": "stddev: 0.08546902397914839",
            "extra": "mean: 2.0462965594000027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 41.822479082782785,
            "unit": "iter/sec",
            "range": "stddev: 0.0009148978048453079",
            "extra": "mean: 23.910586410255956 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 67.41711170611624,
            "unit": "iter/sec",
            "range": "stddev: 0.000917987492904152",
            "extra": "mean: 14.833029400001388 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 212.24508480968098,
            "unit": "iter/sec",
            "range": "stddev: 0.00032631920315342143",
            "extra": "mean: 4.711534313723659 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 119.16528970470364,
            "unit": "iter/sec",
            "range": "stddev: 0.0008818168976164463",
            "extra": "mean: 8.391705357139147 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4666.150151691872,
            "unit": "iter/sec",
            "range": "stddev: 0.00006222192830615119",
            "extra": "mean: 214.30943443545547 usec\nrounds: 2631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 209.2789972465489,
            "unit": "iter/sec",
            "range": "stddev: 0.0001345505988280557",
            "extra": "mean: 4.77831035678135 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 344.25344043202495,
            "unit": "iter/sec",
            "range": "stddev: 0.00003835785971168114",
            "extra": "mean: 2.904836619047403 msec\nrounds: 315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6475000036062513,
            "unit": "iter/sec",
            "range": "stddev: 0.006627570529275831",
            "extra": "mean: 1.5444015358 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 228.91849739028697,
            "unit": "iter/sec",
            "range": "stddev: 0.00006249170281984199",
            "extra": "mean: 4.368366957673513 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3494.0878400320425,
            "unit": "iter/sec",
            "range": "stddev: 0.000028808362479912943",
            "extra": "mean: 286.19772764236785 usec\nrounds: 1722"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9198.476150363591,
            "unit": "iter/sec",
            "range": "stddev: 0.000003489913912311046",
            "extra": "mean: 108.71365905106715 usec\nrounds: 3939"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9284263.69323503,
            "unit": "iter/sec",
            "range": "stddev: 5.066315713132919e-9",
            "extra": "mean: 107.70913376022864 nsec\nrounds: 93450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 233.7902244384813,
            "unit": "iter/sec",
            "range": "stddev: 0.000029773074760200422",
            "extra": "mean: 4.277338808334719 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.7808777756637095,
            "unit": "iter/sec",
            "range": "stddev: 0.0011962008328003436",
            "extra": "mean: 128.5202041250031 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.775326357456457,
            "unit": "iter/sec",
            "range": "stddev: 0.0010311181330248114",
            "extra": "mean: 34.75199508000969 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1222024.406472265,
            "unit": "iter/sec",
            "range": "stddev: 1.3443322718615717e-7",
            "extra": "mean: 818.3142617313149 nsec\nrounds: 124985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 76.74897957304192,
            "unit": "iter/sec",
            "range": "stddev: 0.0010623883351986816",
            "extra": "mean: 13.029489194032882 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 116642.00327404575,
            "unit": "iter/sec",
            "range": "stddev: 4.0196379345139474e-7",
            "extra": "mean: 8.573240958924032 usec\nrounds: 31744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 497568.3861434764,
            "unit": "iter/sec",
            "range": "stddev: 4.3042269532796856e-7",
            "extra": "mean: 2.009773988558117 usec\nrounds: 16977"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1381667.8717730662,
            "unit": "iter/sec",
            "range": "stddev: 1.5171009501147007e-7",
            "extra": "mean: 723.7629392921472 nsec\nrounds: 109879"
          }
        ]
      }
    ]
  }
}