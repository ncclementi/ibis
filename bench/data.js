window.BENCHMARK_DATA = {
  "lastUpdate": 1682100204680,
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
          "id": "bfdfb0e8c3848127f1ef146fcc69aa1b5f7aae6d",
          "message": "fix(impala): do not cast `ca_cert` `None` value to string",
          "timestamp": "2023-04-21T13:58:04-04:00",
          "tree_id": "0f0d04ff29b5c2e7dc7aa2d072e3164075b0daff",
          "url": "https://github.com/ibis-project/ibis/commit/bfdfb0e8c3848127f1ef146fcc69aa1b5f7aae6d"
        },
        "date": 1682100123965,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 496284.5444178947,
            "unit": "iter/sec",
            "range": "stddev: 2.5790179465943346e-7",
            "extra": "mean: 2.014973086000344 usec\nrounds: 1672"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 294.4806789423536,
            "unit": "iter/sec",
            "range": "stddev: 0.00005771404542888892",
            "extra": "mean: 3.395808524999211 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.82241324436018,
            "unit": "iter/sec",
            "range": "stddev: 0.008287398904650922",
            "extra": "mean: 7.001702164835032 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 106.73032375558073,
            "unit": "iter/sec",
            "range": "stddev: 0.00007465162125169883",
            "extra": "mean: 9.369408475608713 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13849.121331645136,
            "unit": "iter/sec",
            "range": "stddev: 0.000005533559128903248",
            "extra": "mean: 72.20674698798454 usec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2741570.049057818,
            "unit": "iter/sec",
            "range": "stddev: 1.8961547784999178e-8",
            "extra": "mean: 364.7544954552615 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16977797562417274,
            "unit": "iter/sec",
            "range": "stddev: 0.06039085311478894",
            "extra": "mean: 5.8900454922 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2186.8172824440617,
            "unit": "iter/sec",
            "range": "stddev: 0.0000818785229754984",
            "extra": "mean: 457.2855757214274 usec\nrounds: 832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2279.9309260297937,
            "unit": "iter/sec",
            "range": "stddev: 0.00008369252024395153",
            "extra": "mean: 438.6097791749206 usec\nrounds: 557"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2142.6186541046736,
            "unit": "iter/sec",
            "range": "stddev: 0.00008640139954181368",
            "extra": "mean: 466.71860999822457 usec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.687374587165197,
            "unit": "iter/sec",
            "range": "stddev: 0.0005215654781504274",
            "extra": "mean: 85.56241545455184 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2157.4340928465726,
            "unit": "iter/sec",
            "range": "stddev: 0.00011493413613654268",
            "extra": "mean: 463.5135800049284 usec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7847733806157523,
            "unit": "iter/sec",
            "range": "stddev: 0.005162347094414491",
            "extra": "mean: 1.274253210800009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.15968737225587,
            "unit": "iter/sec",
            "range": "stddev: 0.021535121131709183",
            "extra": "mean: 26.205665425001712 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.51616500484087,
            "unit": "iter/sec",
            "range": "stddev: 0.0009055367765969307",
            "extra": "mean: 9.948648557690595 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1741920.6660643513,
            "unit": "iter/sec",
            "range": "stddev: 1.0360478723950901e-7",
            "extra": "mean: 574.0789574874113 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2148.848697062406,
            "unit": "iter/sec",
            "range": "stddev: 0.00018873890906244425",
            "extra": "mean: 465.36547750758575 usec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7224322160092972,
            "unit": "iter/sec",
            "range": "stddev: 0.06058129983768261",
            "extra": "mean: 1.3842129100000307 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6058803.597241103,
            "unit": "iter/sec",
            "range": "stddev: 1.116152277956403e-8",
            "extra": "mean: 165.0490866635593 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4579.19066392516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000816012167365472",
            "extra": "mean: 218.37920134621052 usec\nrounds: 1783"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9385159963575728,
            "unit": "iter/sec",
            "range": "stddev: 0.0037071313834448048",
            "extra": "mean: 1.0655119400000104 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11590867.797237176,
            "unit": "iter/sec",
            "range": "stddev: 3.6719324639934336e-9",
            "extra": "mean: 86.27481716584371 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.59779896854994,
            "unit": "iter/sec",
            "range": "stddev: 0.00017594543456943686",
            "extra": "mean: 6.226735400002781 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.7553594414633,
            "unit": "iter/sec",
            "range": "stddev: 0.0007206054354491787",
            "extra": "mean: 11.266925245900543 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.62605175163529,
            "unit": "iter/sec",
            "range": "stddev: 0.00008430506740641331",
            "extra": "mean: 13.050391833331787 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.97803168591707,
            "unit": "iter/sec",
            "range": "stddev: 0.0008088656484686527",
            "extra": "mean: 9.903144112675998 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 299.0712901844888,
            "unit": "iter/sec",
            "range": "stddev: 0.00026788568720577735",
            "extra": "mean: 3.3436843749967693 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.07326410755834,
            "unit": "iter/sec",
            "range": "stddev: 0.0009078633255757458",
            "extra": "mean: 10.408723064519332 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 755451.3715990661,
            "unit": "iter/sec",
            "range": "stddev: 4.6291204201413937e-7",
            "extra": "mean: 1.323711939106414 usec\nrounds: 21978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.596211981331352,
            "unit": "iter/sec",
            "range": "stddev: 0.001589761219833352",
            "extra": "mean: 385.17656000000215 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.103346041305084,
            "unit": "iter/sec",
            "range": "stddev: 0.00008679726730829222",
            "extra": "mean: 62.09889531250212 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.35706175586779,
            "unit": "iter/sec",
            "range": "stddev: 0.0008169464123860289",
            "extra": "mean: 10.378066555553763 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.63332401567402,
            "unit": "iter/sec",
            "range": "stddev: 0.000953201841443702",
            "extra": "mean: 9.937066173469995 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.85019274791694,
            "unit": "iter/sec",
            "range": "stddev: 0.00013871559259193763",
            "extra": "mean: 8.557966199998646 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.58249471067746,
            "unit": "iter/sec",
            "range": "stddev: 0.000751748690963448",
            "extra": "mean: 19.017735950001224 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 50.984584822553565,
            "unit": "iter/sec",
            "range": "stddev: 0.0004081091301490696",
            "extra": "mean: 19.613771564099107 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.57275107048297,
            "unit": "iter/sec",
            "range": "stddev: 0.0013661225446769802",
            "extra": "mean: 25.269913588239074 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9333168454326005,
            "unit": "iter/sec",
            "range": "stddev: 0.005443935410958689",
            "extra": "mean: 1.0714474992000078 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.09412601232731,
            "unit": "iter/sec",
            "range": "stddev: 0.00012766491158254642",
            "extra": "mean: 9.89177155434393 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 279.08706717900253,
            "unit": "iter/sec",
            "range": "stddev: 0.00027985000198680585",
            "extra": "mean: 3.5831112136723053 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.21717553843128,
            "unit": "iter/sec",
            "range": "stddev: 0.0008820996759828357",
            "extra": "mean: 10.502306903615125 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 200.33752987229997,
            "unit": "iter/sec",
            "range": "stddev: 0.00006167396274174021",
            "extra": "mean: 4.99157597000135 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 83.44890230375024,
            "unit": "iter/sec",
            "range": "stddev: 0.018099166340302668",
            "extra": "mean: 11.983381115788017 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10504.96763668502,
            "unit": "iter/sec",
            "range": "stddev: 0.000001898817626924374",
            "extra": "mean: 95.19305861617705 usec\nrounds: 1979"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.97967896200952,
            "unit": "iter/sec",
            "range": "stddev: 0.001069081047595297",
            "extra": "mean: 10.640598170209131 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8578.342413314873,
            "unit": "iter/sec",
            "range": "stddev: 0.00004434847467381977",
            "extra": "mean: 116.57263744192004 usec\nrounds: 4300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.6217880086284,
            "unit": "iter/sec",
            "range": "stddev: 0.0003143565848718204",
            "extra": "mean: 3.7227062161014244 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 145.82704841139062,
            "unit": "iter/sec",
            "range": "stddev: 0.004012113515981924",
            "extra": "mean: 6.857438389474318 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 206.47550883446257,
            "unit": "iter/sec",
            "range": "stddev: 0.0042029713188865055",
            "extra": "mean: 4.843189420599656 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.2970913276142,
            "unit": "iter/sec",
            "range": "stddev: 0.000042588248584899274",
            "extra": "mean: 7.616314953274839 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.90810868638418,
            "unit": "iter/sec",
            "range": "stddev: 0.00044366425147163727",
            "extra": "mean: 21.78264425640755 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.2480469296115,
            "unit": "iter/sec",
            "range": "stddev: 0.00030207970129687205",
            "extra": "mean: 3.606878429170261 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.29944577706394,
            "unit": "iter/sec",
            "range": "stddev: 0.000972009118018901",
            "extra": "mean: 10.49324045744528 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.15690912998036,
            "unit": "iter/sec",
            "range": "stddev: 0.00007037975561615589",
            "extra": "mean: 8.996291888888875 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5469838.899116698,
            "unit": "iter/sec",
            "range": "stddev: 1.1508580297415012e-8",
            "extra": "mean: 182.820740874381 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.6783270560804,
            "unit": "iter/sec",
            "range": "stddev: 0.00016769099405229183",
            "extra": "mean: 1.8529556401772747 msec\nrounds: 453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74178.88863303326,
            "unit": "iter/sec",
            "range": "stddev: 4.7255290962855107e-7",
            "extra": "mean: 13.480924538342048 usec\nrounds: 12788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 93.41114711823693,
            "unit": "iter/sec",
            "range": "stddev: 0.0011329979515816225",
            "extra": "mean: 10.705360450549131 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 93.17366750683165,
            "unit": "iter/sec",
            "range": "stddev: 0.0009897667897321785",
            "extra": "mean: 10.732646108694588 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.57976354050511,
            "unit": "iter/sec",
            "range": "stddev: 0.0008458583963840793",
            "extra": "mean: 10.042200989895296 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1169.6460475574897,
            "unit": "iter/sec",
            "range": "stddev: 0.000012297590702102306",
            "extra": "mean: 854.9595000027977 usec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.0615442379801,
            "unit": "iter/sec",
            "range": "stddev: 0.000026009804453684247",
            "extra": "mean: 9.085825634408275 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5993848735068374,
            "unit": "iter/sec",
            "range": "stddev: 0.0009885113376183461",
            "extra": "mean: 625.2403761999972 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.11779150017234,
            "unit": "iter/sec",
            "range": "stddev: 0.0009653360756214718",
            "extra": "mean: 10.40390113414338 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147475.21538734308,
            "unit": "iter/sec",
            "range": "stddev: 3.8864159438086077e-7",
            "extra": "mean: 6.780800403467824 usec\nrounds: 41153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1841920.9127219976,
            "unit": "iter/sec",
            "range": "stddev: 8.340446946299929e-8",
            "extra": "mean: 542.9114752392904 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.34423173515204,
            "unit": "iter/sec",
            "range": "stddev: 0.0002353014970674252",
            "extra": "mean: 10.59948214753872 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.868846251828992,
            "unit": "iter/sec",
            "range": "stddev: 0.001064161054177338",
            "extra": "mean: 170.39124166668293 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 268.2949503321703,
            "unit": "iter/sec",
            "range": "stddev: 0.0003956185493906495",
            "extra": "mean: 3.7272412274696975 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12315.692436910844,
            "unit": "iter/sec",
            "range": "stddev: 0.00002515442560820931",
            "extra": "mean: 81.19722095388985 usec\nrounds: 5345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 282.4420154053528,
            "unit": "iter/sec",
            "range": "stddev: 0.00031400483955567037",
            "extra": "mean: 3.5405497250996047 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2185.9856138168966,
            "unit": "iter/sec",
            "range": "stddev: 0.00008674343067827578",
            "extra": "mean: 457.4595521943642 usec\nrounds: 1322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.95933685215297,
            "unit": "iter/sec",
            "range": "stddev: 0.00007788774538984662",
            "extra": "mean: 6.099073216560578 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.607499080551,
            "unit": "iter/sec",
            "range": "stddev: 0.00031917584303792456",
            "extra": "mean: 3.5892788359974475 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2147.7614754922733,
            "unit": "iter/sec",
            "range": "stddev: 0.00008954813018831831",
            "extra": "mean: 465.6010508665991 usec\nrounds: 1730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.077893707700575,
            "unit": "iter/sec",
            "range": "stddev: 0.0010048401708208272",
            "extra": "mean: 17.51991769565047 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1912727.2805585137,
            "unit": "iter/sec",
            "range": "stddev: 8.871009808914939e-8",
            "extra": "mean: 522.8136860723821 nsec\nrounds: 188644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1770.3964020905357,
            "unit": "iter/sec",
            "range": "stddev: 0.000006991425895652946",
            "extra": "mean: 564.8452509388128 usec\nrounds: 1331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.4339419254077,
            "unit": "iter/sec",
            "range": "stddev: 0.0010671581268093513",
            "extra": "mean: 10.159097364583758 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.215079827223047,
            "unit": "iter/sec",
            "range": "stddev: 0.0012137024194609587",
            "extra": "mean: 45.014468000001024 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 732.7096932711648,
            "unit": "iter/sec",
            "range": "stddev: 0.000013344978949718797",
            "extra": "mean: 1.3647970119455144 msec\nrounds: 586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7265783.782468089,
            "unit": "iter/sec",
            "range": "stddev: 4.854370431697213e-9",
            "extra": "mean: 137.63140081498423 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 79.23274788011214,
            "unit": "iter/sec",
            "range": "stddev: 0.022680914450228712",
            "extra": "mean: 12.621044034887063 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.2016597663748,
            "unit": "iter/sec",
            "range": "stddev: 0.0003626374501660712",
            "extra": "mean: 3.607482007296777 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 246.78069640899272,
            "unit": "iter/sec",
            "range": "stddev: 0.0006180431214340738",
            "extra": "mean: 4.0521808008138835 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.9455683597944,
            "unit": "iter/sec",
            "range": "stddev: 0.000026923198790842683",
            "extra": "mean: 1.4621046560739508 msec\nrounds: 535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 41.188159386187785,
            "unit": "iter/sec",
            "range": "stddev: 0.0009782170433185041",
            "extra": "mean: 24.278822236842764 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2189.0361237438447,
            "unit": "iter/sec",
            "range": "stddev: 0.00011547809340774274",
            "extra": "mean: 456.82206389985436 usec\nrounds: 1205"
          }
        ]
      }
    ]
  }
}