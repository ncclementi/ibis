window.BENCHMARK_DATA = {
  "lastUpdate": 1684407496079,
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
          "id": "d245510a22cbe09a149dd104d898cf2a0f2042d4",
          "message": "chore(dev-deps): bump ruff to 0.267",
          "timestamp": "2023-05-18T05:46:47-05:00",
          "tree_id": "ba89805ad7794c6950aafeeb22a3f524b0564519",
          "url": "https://github.com/ibis-project/ibis/commit/d245510a22cbe09a149dd104d898cf2a0f2042d4"
        },
        "date": 1684407415364,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 71.64427256936823,
            "unit": "iter/sec",
            "range": "stddev: 0.017665151437304932",
            "extra": "mean: 13.957849862063556 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4634362224637054,
            "unit": "iter/sec",
            "range": "stddev: 0.002225659952487562",
            "extra": "mean: 405.9370365999939 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.25153470592069,
            "unit": "iter/sec",
            "range": "stddev: 0.0009768342586886141",
            "extra": "mean: 29.195772060606117 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 97.65082714540193,
            "unit": "iter/sec",
            "range": "stddev: 0.0008799474625275375",
            "extra": "mean: 10.24056865909596 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.06536342588028,
            "unit": "iter/sec",
            "range": "stddev: 0.0004913667900824727",
            "extra": "mean: 10.09434544444174 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6073699.621916064,
            "unit": "iter/sec",
            "range": "stddev: 1.9202615336566784e-8",
            "extra": "mean: 164.6442962688958 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 259.89575479934075,
            "unit": "iter/sec",
            "range": "stddev: 0.0005342027947917817",
            "extra": "mean: 3.8476965534588126 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.57630058125149,
            "unit": "iter/sec",
            "range": "stddev: 0.00006001981856332278",
            "extra": "mean: 9.210113023252847 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 52.037790498266105,
            "unit": "iter/sec",
            "range": "stddev: 0.000819747968598657",
            "extra": "mean: 19.216803604167627 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.61626928395815,
            "unit": "iter/sec",
            "range": "stddev: 0.011706396054383738",
            "extra": "mean: 11.413405388890396 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.85432173612944,
            "unit": "iter/sec",
            "range": "stddev: 0.0009612635911821839",
            "extra": "mean: 10.115895617283048 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 96.3348649462747,
            "unit": "iter/sec",
            "range": "stddev: 0.0010857618945989593",
            "extra": "mean: 10.38045779747232 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 97.52787460947154,
            "unit": "iter/sec",
            "range": "stddev: 0.0009964778832632565",
            "extra": "mean: 10.253478854166312 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2836972963264308,
            "unit": "iter/sec",
            "range": "stddev: 0.05941876016157466",
            "extra": "mean: 778.9998490000016 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8013.510261380411,
            "unit": "iter/sec",
            "range": "stddev: 0.00001924347858804892",
            "extra": "mean: 124.78925806326221 usec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.20889631326816,
            "unit": "iter/sec",
            "range": "stddev: 0.00031181578702065455",
            "extra": "mean: 10.728589647055518 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.46797683206191,
            "unit": "iter/sec",
            "range": "stddev: 0.016248790929184118",
            "extra": "mean: 12.27476167797072 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148133.7403235399,
            "unit": "iter/sec",
            "range": "stddev: 3.7060831065507307e-7",
            "extra": "mean: 6.7506565203571665 usec\nrounds: 35842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.69447451899131,
            "unit": "iter/sec",
            "range": "stddev: 0.00009605391556485128",
            "extra": "mean: 9.55160245652317 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.89579109579661,
            "unit": "iter/sec",
            "range": "stddev: 0.00007901770310667547",
            "extra": "mean: 7.880482018864413 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2165.540136251748,
            "unit": "iter/sec",
            "range": "stddev: 0.00009120250729056014",
            "extra": "mean: 461.77855734914357 usec\nrounds: 1177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.83712825062648,
            "unit": "iter/sec",
            "range": "stddev: 0.0016411038599633621",
            "extra": "mean: 45.79356719999623 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.72043547063578,
            "unit": "iter/sec",
            "range": "stddev: 0.00007748261755095085",
            "extra": "mean: 5.243276618639877 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 427.62715673397946,
            "unit": "iter/sec",
            "range": "stddev: 0.00003610925638267612",
            "extra": "mean: 2.338485721153779 msec\nrounds: 416"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.7013766544548,
            "unit": "iter/sec",
            "range": "stddev: 0.00008360480924856298",
            "extra": "mean: 9.033311330187134 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.52414523624935,
            "unit": "iter/sec",
            "range": "stddev: 0.0005868665935056722",
            "extra": "mean: 23.516051749996336 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5460557.590056718,
            "unit": "iter/sec",
            "range": "stddev: 9.691367088243115e-9",
            "extra": "mean: 183.13148126501727 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8166585689198456,
            "unit": "iter/sec",
            "range": "stddev: 0.013691678661125188",
            "extra": "mean: 1.2245019376000073 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 81.6179150151172,
            "unit": "iter/sec",
            "range": "stddev: 0.018281386251430602",
            "extra": "mean: 12.252212027405756 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 101.88127620703928,
            "unit": "iter/sec",
            "range": "stddev: 0.0007985711829516553",
            "extra": "mean: 9.815346226796745 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 100.59709866527118,
            "unit": "iter/sec",
            "range": "stddev: 0.0008685557475463098",
            "extra": "mean: 9.94064454410778 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.43485499108,
            "unit": "iter/sec",
            "range": "stddev: 0.0008666666589313419",
            "extra": "mean: 10.589310483872259 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 267.0544887009783,
            "unit": "iter/sec",
            "range": "stddev: 0.00030698337819399797",
            "extra": "mean: 3.7445541726868448 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11345621.019612273,
            "unit": "iter/sec",
            "range": "stddev: 3.427541256093698e-9",
            "extra": "mean: 88.13973234886569 nsec\nrounds: 112347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2112.178349917357,
            "unit": "iter/sec",
            "range": "stddev: 0.00012459776659157993",
            "extra": "mean: 473.444867967294 usec\nrounds: 1227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 94.05253683573352,
            "unit": "iter/sec",
            "range": "stddev: 0.000835967048853494",
            "extra": "mean: 10.632355422231083 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 274.74116508156226,
            "unit": "iter/sec",
            "range": "stddev: 0.0002975145699924505",
            "extra": "mean: 3.639789471312501 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.46896265876284,
            "unit": "iter/sec",
            "range": "stddev: 0.00018813467489159225",
            "extra": "mean: 118.07821574998911 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 226.06413587679907,
            "unit": "iter/sec",
            "range": "stddev: 0.0003669591011801055",
            "extra": "mean: 4.423523422330829 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 315.6754651468926,
            "unit": "iter/sec",
            "range": "stddev: 0.00003628789070722417",
            "extra": "mean: 3.167810331837706 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2159.0556521824533,
            "unit": "iter/sec",
            "range": "stddev: 0.00009797369892247256",
            "extra": "mean: 463.1654580043654 usec\nrounds: 1393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 62.424589924849464,
            "unit": "iter/sec",
            "range": "stddev: 0.02439567005410027",
            "extra": "mean: 16.019328300015445 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 49.88503205638549,
            "unit": "iter/sec",
            "range": "stddev: 0.0003885127742855332",
            "extra": "mean: 20.046093162167182 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 262.84698256251806,
            "unit": "iter/sec",
            "range": "stddev: 0.00038577958373484165",
            "extra": "mean: 3.8044948823490885 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.09790631488366,
            "unit": "iter/sec",
            "range": "stddev: 0.00010421234622443885",
            "extra": "mean: 6.093922966214591 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 272.87820117644077,
            "unit": "iter/sec",
            "range": "stddev: 0.000296517823093348",
            "extra": "mean: 3.6646386398355375 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.813188490263861,
            "unit": "iter/sec",
            "range": "stddev: 0.010841374969327092",
            "extra": "mean: 1.2297271936000016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7693280640205696,
            "unit": "iter/sec",
            "range": "stddev: 0.010968121539220393",
            "extra": "mean: 1.2998355926000158 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.71726054143149,
            "unit": "iter/sec",
            "range": "stddev: 0.0008918561098965384",
            "extra": "mean: 9.83117314285789 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 272.7012998972328,
            "unit": "iter/sec",
            "range": "stddev: 0.00033409202539111437",
            "extra": "mean: 3.6670158901950556 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1787.7303619747197,
            "unit": "iter/sec",
            "range": "stddev: 0.000006917833362609639",
            "extra": "mean: 559.3684714821334 usec\nrounds: 1315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1702108.5963037973,
            "unit": "iter/sec",
            "range": "stddev: 1.063267889563704e-7",
            "extra": "mean: 587.50657988071 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 46.14911255653663,
            "unit": "iter/sec",
            "range": "stddev: 0.000645409651290895",
            "extra": "mean: 21.6688890555569 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2099.0630285530574,
            "unit": "iter/sec",
            "range": "stddev: 0.00009970428055311423",
            "extra": "mean: 476.40303621055523 usec\nrounds: 1215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6050087041819956,
            "unit": "iter/sec",
            "range": "stddev: 0.0014581894259380812",
            "extra": "mean: 623.0495806000363 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3233.8937585582557,
            "unit": "iter/sec",
            "range": "stddev: 0.0038172295338726515",
            "extra": "mean: 309.22475339629676 usec\nrounds: 1914"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.09893449009462,
            "unit": "iter/sec",
            "range": "stddev: 0.0000957967100842061",
            "extra": "mean: 5.711057025630103 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 217.93778151273952,
            "unit": "iter/sec",
            "range": "stddev: 0.003488464326468824",
            "extra": "mean: 4.588465538461697 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1928407.8921832587,
            "unit": "iter/sec",
            "range": "stddev: 9.269998363185031e-8",
            "extra": "mean: 518.56249087834 nsec\nrounds: 74627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2171.321035164912,
            "unit": "iter/sec",
            "range": "stddev: 0.00010561041079109438",
            "extra": "mean: 460.54912369236547 usec\nrounds: 1148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6292120.427732896,
            "unit": "iter/sec",
            "range": "stddev: 4.632609586859917e-9",
            "extra": "mean: 158.92893524289315 nsec\nrounds: 48310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.74998597701094,
            "unit": "iter/sec",
            "range": "stddev: 0.0002138585961017576",
            "extra": "mean: 33.61346122222518 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.0625463777851,
            "unit": "iter/sec",
            "range": "stddev: 0.000024975376510305335",
            "extra": "mean: 1.4512470678557827 msec\nrounds: 560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.24354073336328,
            "unit": "iter/sec",
            "range": "stddev: 0.0009629049663405022",
            "extra": "mean: 10.17878623403892 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.19842687952699,
            "unit": "iter/sec",
            "range": "stddev: 0.0002321694465566789",
            "extra": "mean: 19.531850116275265 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13991.724791729055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018761820719409577",
            "extra": "mean: 71.47081684962322 usec\nrounds: 5935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4440610.977055535,
            "unit": "iter/sec",
            "range": "stddev: 1.8788928637289895e-8",
            "extra": "mean: 225.19423682126933 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2119.2053906142496,
            "unit": "iter/sec",
            "range": "stddev: 0.00013134786774040023",
            "extra": "mean: 471.87497938090416 usec\nrounds: 1261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.62100752188562,
            "unit": "iter/sec",
            "range": "stddev: 0.0003838209065358601",
            "extra": "mean: 11.544543622946668 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 80.78195981177049,
            "unit": "iter/sec",
            "range": "stddev: 0.020657010769547103",
            "extra": "mean: 12.37900147916804 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.7451477703229,
            "unit": "iter/sec",
            "range": "stddev: 0.000027474312865978596",
            "extra": "mean: 1.8561652093548298 msec\nrounds: 449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 92.21320186529992,
            "unit": "iter/sec",
            "range": "stddev: 0.0010179138531761643",
            "extra": "mean: 10.844434200004747 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1012245.3483181262,
            "unit": "iter/sec",
            "range": "stddev: 1.2347581554876075e-7",
            "extra": "mean: 987.9027862775836 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1126.7373046935568,
            "unit": "iter/sec",
            "range": "stddev: 0.00024731702828026625",
            "extra": "mean: 887.5183202281335 usec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2138.0839082774055,
            "unit": "iter/sec",
            "range": "stddev: 0.00009580822489638998",
            "extra": "mean: 467.7084917615193 usec\nrounds: 1153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16757959490238214,
            "unit": "iter/sec",
            "range": "stddev: 0.09505015469885225",
            "extra": "mean: 5.967313625400015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.890014571589795,
            "unit": "iter/sec",
            "range": "stddev: 0.0008244990778605174",
            "extra": "mean: 28.66149562500553 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1960574.0033192788,
            "unit": "iter/sec",
            "range": "stddev: 9.907363936327827e-8",
            "extra": "mean: 510.05470760450066 nsec\nrounds: 129854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12172.624623030139,
            "unit": "iter/sec",
            "range": "stddev: 0.00006991620029866246",
            "extra": "mean: 82.15155161427046 usec\nrounds: 3749"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10522.797125243984,
            "unit": "iter/sec",
            "range": "stddev: 0.000001997388436197597",
            "extra": "mean: 95.03176656338073 usec\nrounds: 4558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 243.83512129498277,
            "unit": "iter/sec",
            "range": "stddev: 0.0005499801820827975",
            "extra": "mean: 4.101131923445256 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.9619425606321,
            "unit": "iter/sec",
            "range": "stddev: 0.00010588790054808074",
            "extra": "mean: 1.3298545357159057 msec\nrounds: 616"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2189.16213925485,
            "unit": "iter/sec",
            "range": "stddev: 0.00009168300340582828",
            "extra": "mean: 456.7957676905473 usec\nrounds: 1399"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 147.2232127860199,
            "unit": "iter/sec",
            "range": "stddev: 0.004287186803800457",
            "extra": "mean: 6.792407128442713 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.953764187639326,
            "unit": "iter/sec",
            "range": "stddev: 0.00008369998092580209",
            "extra": "mean: 52.75996842105638 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 98.9753911067343,
            "unit": "iter/sec",
            "range": "stddev: 0.0008448487780041022",
            "extra": "mean: 10.10352158064834 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 266.1179583587977,
            "unit": "iter/sec",
            "range": "stddev: 0.0003405265314898024",
            "extra": "mean: 3.7577321206249983 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7118818.910757629,
            "unit": "iter/sec",
            "range": "stddev: 4.3056337950152025e-9",
            "extra": "mean: 140.47274028683822 nsec\nrounds: 59877"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2103.215637453898,
            "unit": "iter/sec",
            "range": "stddev: 0.00011593305541766722",
            "extra": "mean: 475.46242153780094 usec\nrounds: 1300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1962150.337534488,
            "unit": "iter/sec",
            "range": "stddev: 9.629331844689591e-8",
            "extra": "mean: 509.64494456451064 nsec\nrounds: 144907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 201.19905404695223,
            "unit": "iter/sec",
            "range": "stddev: 0.00002666562892403278",
            "extra": "mean: 4.970202294125289 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.70155806633042,
            "unit": "iter/sec",
            "range": "stddev: 0.0002023333222163911",
            "extra": "mean: 6.4640590081919935 msec\nrounds: 122"
          }
        ]
      }
    ]
  }
}