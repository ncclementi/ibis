window.BENCHMARK_DATA = {
  "lastUpdate": 1684283431871,
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
          "id": "bee1551261db5d9db4f6e428cc77e29ca25ed4be",
          "message": "chore(flake/nixpkgs): `78563313` -> `c8f6370f`",
          "timestamp": "2023-05-17T00:23:57Z",
          "tree_id": "7c33635bd6230b67155d66ab3f08477c70314be5",
          "url": "https://github.com/ibis-project/ibis/commit/bee1551261db5d9db4f6e428cc77e29ca25ed4be"
        },
        "date": 1684283342797,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2205.1267909500207,
            "unit": "iter/sec",
            "range": "stddev: 0.00008023828460810812",
            "extra": "mean: 453.4886629213627 usec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.24644065662926,
            "unit": "iter/sec",
            "range": "stddev: 0.00027506877764673065",
            "extra": "mean: 3.6463554371232543 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 249.52141053354455,
            "unit": "iter/sec",
            "range": "stddev: 0.00037922184642935825",
            "extra": "mean: 4.007672118643961 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2233.549628459041,
            "unit": "iter/sec",
            "range": "stddev: 0.00008079894253627767",
            "extra": "mean: 447.71783320074013 usec\nrounds: 1253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.535852297489706,
            "unit": "iter/sec",
            "range": "stddev: 0.000310617096884064",
            "extra": "mean: 117.15291750000034 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 233.63441507155122,
            "unit": "iter/sec",
            "range": "stddev: 0.006536488866927029",
            "extra": "mean: 4.280191339506841 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 102.45704005065966,
            "unit": "iter/sec",
            "range": "stddev: 0.0006876277557708815",
            "extra": "mean: 9.760188265301752 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 412.5335645254606,
            "unit": "iter/sec",
            "range": "stddev: 0.00004270121251581375",
            "extra": "mean: 2.424045183209044 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6248905.35294967,
            "unit": "iter/sec",
            "range": "stddev: 8.839305917456216e-9",
            "extra": "mean: 160.02802787334517 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.10891761802766,
            "unit": "iter/sec",
            "range": "stddev: 0.0001705091401587691",
            "extra": "mean: 10.089909405065509 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9232187672605315,
            "unit": "iter/sec",
            "range": "stddev: 0.003476678439505447",
            "extra": "mean: 1.0831668889999946 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.0117999913906,
            "unit": "iter/sec",
            "range": "stddev: 0.00011294691530416936",
            "extra": "mean: 6.368948066672904 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2211.520899581643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000853254883531698",
            "extra": "mean: 452.1775038115948 usec\nrounds: 1312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.1673708406367,
            "unit": "iter/sec",
            "range": "stddev: 0.00024828172155891374",
            "extra": "mean: 3.620992577638918 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 95.7065917341503,
            "unit": "iter/sec",
            "range": "stddev: 0.0005825123116199409",
            "extra": "mean: 10.44860110344079 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.85687639496407,
            "unit": "iter/sec",
            "range": "stddev: 0.0006046826347660569",
            "extra": "mean: 38.674431695653766 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.26461704040477,
            "unit": "iter/sec",
            "range": "stddev: 0.008791860914553917",
            "extra": "mean: 10.72217987628441 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4701085.859993214,
            "unit": "iter/sec",
            "range": "stddev: 1.4755220374912876e-8",
            "extra": "mean: 212.71681262196094 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13485.545882780367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017257936046272463",
            "extra": "mean: 74.15346836473972 usec\nrounds: 5848"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6477576.282599837,
            "unit": "iter/sec",
            "range": "stddev: 9.302515344690274e-9",
            "extra": "mean: 154.37873000217922 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140448.5282363975,
            "unit": "iter/sec",
            "range": "stddev: 3.370863486078353e-7",
            "extra": "mean: 7.120046130471647 usec\nrounds: 34966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2243.4000616043886,
            "unit": "iter/sec",
            "range": "stddev: 0.00012950050041628047",
            "extra": "mean: 445.7519713558538 usec\nrounds: 1187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 1741.69677546455,
            "unit": "iter/sec",
            "range": "stddev: 0.005808629416994137",
            "extra": "mean: 574.152753847338 usec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.92879129095417,
            "unit": "iter/sec",
            "range": "stddev: 0.0008253910875253807",
            "extra": "mean: 10.10828078409402 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 98.17444039038003,
            "unit": "iter/sec",
            "range": "stddev: 0.000664569023072389",
            "extra": "mean: 10.185950600009619 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1034437.6070686801,
            "unit": "iter/sec",
            "range": "stddev: 2.6035409150828736e-7",
            "extra": "mean: 966.7088601251969 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 264.45082372191655,
            "unit": "iter/sec",
            "range": "stddev: 0.0003126390769761685",
            "extra": "mean: 3.7814213846108142 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2554190.294128959,
            "unit": "iter/sec",
            "range": "stddev: 1.958010309875744e-8",
            "extra": "mean: 391.5135071566225 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9294699457738099,
            "unit": "iter/sec",
            "range": "stddev: 0.0033593562579246664",
            "extra": "mean: 1.075882016999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7676.169830866747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000590027191635641",
            "extra": "mean: 130.27330322720152 usec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2307.1285014189457,
            "unit": "iter/sec",
            "range": "stddev: 0.00007873414027132447",
            "extra": "mean: 433.4392294945745 usec\nrounds: 1268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 97.92175747916181,
            "unit": "iter/sec",
            "range": "stddev: 0.0009572443820312318",
            "extra": "mean: 10.212235010312233 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 169.25740982633667,
            "unit": "iter/sec",
            "range": "stddev: 0.004284278235314228",
            "extra": "mean: 5.908160836361792 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11736.494601095032,
            "unit": "iter/sec",
            "range": "stddev: 0.000023631573846621583",
            "extra": "mean: 85.2043164495384 usec\nrounds: 4225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 82.05624306626149,
            "unit": "iter/sec",
            "range": "stddev: 0.017107604134416834",
            "extra": "mean: 12.186763159415998 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.8168676816931,
            "unit": "iter/sec",
            "range": "stddev: 0.0008657111227460683",
            "extra": "mean: 10.223185670329482 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 191.1265556972111,
            "unit": "iter/sec",
            "range": "stddev: 0.00008523832065767724",
            "extra": "mean: 5.232135306117443 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.82037831341617,
            "unit": "iter/sec",
            "range": "stddev: 0.0006434852811110544",
            "extra": "mean: 10.222818775000064 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 83.11361056726656,
            "unit": "iter/sec",
            "range": "stddev: 0.013536694424998674",
            "extra": "mean: 12.031723723404692 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5881561.775234501,
            "unit": "iter/sec",
            "range": "stddev: 8.744415088837895e-9",
            "extra": "mean: 170.0228677717727 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1132.292214609807,
            "unit": "iter/sec",
            "range": "stddev: 0.00027279033946267923",
            "extra": "mean: 883.1642460286672 usec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1617737.9777038505,
            "unit": "iter/sec",
            "range": "stddev: 9.74553611557435e-8",
            "extra": "mean: 618.1470755970988 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.79666997790287,
            "unit": "iter/sec",
            "range": "stddev: 0.00013497738343402497",
            "extra": "mean: 6.1426317880810135 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 92.88217407967481,
            "unit": "iter/sec",
            "range": "stddev: 0.0009204970605211696",
            "extra": "mean: 10.766328522222087 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.5382550811811,
            "unit": "iter/sec",
            "range": "stddev: 0.0007796514925428571",
            "extra": "mean: 10.252387631577987 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.16557802563336,
            "unit": "iter/sec",
            "range": "stddev: 0.026992631876913496",
            "extra": "mean: 33.15036758620189 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 99.47336541472332,
            "unit": "iter/sec",
            "range": "stddev: 0.0007940008648776094",
            "extra": "mean: 10.052942270836121 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 272.4811878695832,
            "unit": "iter/sec",
            "range": "stddev: 0.00028612046115465456",
            "extra": "mean: 3.669978128833712 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1749452.5430184528,
            "unit": "iter/sec",
            "range": "stddev: 1.0558600274071071e-7",
            "extra": "mean: 571.60738883184 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6736179770103203,
            "unit": "iter/sec",
            "range": "stddev: 0.001467010278814975",
            "extra": "mean: 597.5079221999977 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 226.4176762304907,
            "unit": "iter/sec",
            "range": "stddev: 0.00031421873032775216",
            "extra": "mean: 4.416616302439262 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 677.2077213458766,
            "unit": "iter/sec",
            "range": "stddev: 0.000052091474793835466",
            "extra": "mean: 1.4766517989673964 msec\nrounds: 582"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1752135.5870314369,
            "unit": "iter/sec",
            "range": "stddev: 9.751949889849649e-8",
            "extra": "mean: 570.7320868325346 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.96978044742329,
            "unit": "iter/sec",
            "range": "stddev: 0.017070249960135498",
            "extra": "mean: 11.909046262496048 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.61718670049505,
            "unit": "iter/sec",
            "range": "stddev: 0.00039737458911351316",
            "extra": "mean: 17.05984296226135 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 276.323728006325,
            "unit": "iter/sec",
            "range": "stddev: 0.0002755406297841958",
            "extra": "mean: 3.6189436470584613 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 84.15197691350552,
            "unit": "iter/sec",
            "range": "stddev: 0.000620592176731193",
            "extra": "mean: 11.883262124998401 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.53658011055468,
            "unit": "iter/sec",
            "range": "stddev: 0.0018973011848384214",
            "extra": "mean: 394.2315859999894 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7368490.145280944,
            "unit": "iter/sec",
            "range": "stddev: 4.6157313788554075e-9",
            "extra": "mean: 135.71301315245736 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.46565873845293,
            "unit": "iter/sec",
            "range": "stddev: 0.00007217996886822338",
            "extra": "mean: 5.064171696429095 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.89265584620841,
            "unit": "iter/sec",
            "range": "stddev: 0.0008231604415752119",
            "extra": "mean: 10.538223333328242 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17571556320302878,
            "unit": "iter/sec",
            "range": "stddev: 0.022946443086907027",
            "extra": "mean: 5.691015535400015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.61506485598649,
            "unit": "iter/sec",
            "range": "stddev: 0.00007250176863227667",
            "extra": "mean: 9.558852746271333 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2198.003622448581,
            "unit": "iter/sec",
            "range": "stddev: 0.00008608458296404077",
            "extra": "mean: 454.95830388395706 usec\nrounds: 1313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.80102630307571,
            "unit": "iter/sec",
            "range": "stddev: 0.0007594565945039106",
            "extra": "mean: 15.92330665384404 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.81637075765516,
            "unit": "iter/sec",
            "range": "stddev: 0.00007533771381162996",
            "extra": "mean: 9.023937466666407 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9952.15546601921,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019201456980720825",
            "extra": "mean: 100.48074544398095 usec\nrounds: 5103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.30616741903609,
            "unit": "iter/sec",
            "range": "stddev: 0.00008363533846279525",
            "extra": "mean: 8.109894427272737 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.8028718565,
            "unit": "iter/sec",
            "range": "stddev: 0.000013675683545235217",
            "extra": "mean: 1.3590596588416484 msec\nrounds: 639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.74190444276414,
            "unit": "iter/sec",
            "range": "stddev: 0.00017296965297817894",
            "extra": "mean: 18.26754129545417 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.2773943871915,
            "unit": "iter/sec",
            "range": "stddev: 0.000925500852767489",
            "extra": "mean: 10.279880606379294 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 97.08180713862639,
            "unit": "iter/sec",
            "range": "stddev: 0.0009345715067376498",
            "extra": "mean: 10.300591114585108 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.41257878654127,
            "unit": "iter/sec",
            "range": "stddev: 0.00043988066911980614",
            "extra": "mean: 20.65578874468056 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 261.22425755681115,
            "unit": "iter/sec",
            "range": "stddev: 0.0002748021632701212",
            "extra": "mean: 3.8281284033605476 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 111.13522992565011,
            "unit": "iter/sec",
            "range": "stddev: 0.0002049432536822068",
            "extra": "mean: 8.998046800002157 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.63833923834453,
            "unit": "iter/sec",
            "range": "stddev: 0.000036075412005404304",
            "extra": "mean: 9.290370021277374 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2239.2221550528593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000787705450027836",
            "extra": "mean: 446.5836485868432 usec\nrounds: 1309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1761.716270661606,
            "unit": "iter/sec",
            "range": "stddev: 0.000007672342292456742",
            "extra": "mean: 567.6282933031287 usec\nrounds: 1299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 225.75780798940758,
            "unit": "iter/sec",
            "range": "stddev: 0.009336141558500257",
            "extra": "mean: 4.429525644787087 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.344053212516124,
            "unit": "iter/sec",
            "range": "stddev: 0.0001951033976662642",
            "extra": "mean: 744.0181613999926 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7943555993999862,
            "unit": "iter/sec",
            "range": "stddev: 0.003427313886995793",
            "extra": "mean: 1.2588820431999808 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 83.51205965252606,
            "unit": "iter/sec",
            "range": "stddev: 0.017928836327468216",
            "extra": "mean: 11.974318489578195 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2239.7535016639076,
            "unit": "iter/sec",
            "range": "stddev: 0.00009787469051929312",
            "extra": "mean: 446.4777035763545 usec\nrounds: 1734"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2219.90143029119,
            "unit": "iter/sec",
            "range": "stddev: 0.0000866406313609323",
            "extra": "mean: 450.47045168524784 usec\nrounds: 1780"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11961474.964501565,
            "unit": "iter/sec",
            "range": "stddev: 3.6280371089648893e-9",
            "extra": "mean: 83.60172996782731 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 170.43331861043518,
            "unit": "iter/sec",
            "range": "stddev: 0.00011836280143795748",
            "extra": "mean: 5.867397338461335 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.2759454901272,
            "unit": "iter/sec",
            "range": "stddev: 0.00002845646005295599",
            "extra": "mean: 1.861240966386007 msec\nrounds: 476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.007290001035337,
            "unit": "iter/sec",
            "range": "stddev: 0.00009627642498441478",
            "extra": "mean: 33.32523530000533 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.061674486215427,
            "unit": "iter/sec",
            "range": "stddev: 0.0002962702017406717",
            "extra": "mean: 52.46128826316683 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.71225267078605,
            "unit": "iter/sec",
            "range": "stddev: 0.02813708543818968",
            "extra": "mean: 25.83161482500458 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 428.66552049045544,
            "unit": "iter/sec",
            "range": "stddev: 0.00008932380628542087",
            "extra": "mean: 2.3328211675523964 msec\nrounds: 376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.49010166427402,
            "unit": "iter/sec",
            "range": "stddev: 0.0009258103986191083",
            "extra": "mean: 22.993737925001767 msec\nrounds: 40"
          }
        ]
      }
    ]
  }
}