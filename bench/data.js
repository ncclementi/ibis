window.BENCHMARK_DATA = {
  "lastUpdate": 1680010880089,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "bfcfd638ad7c955428b086d1b4c6656afd788934",
          "message": "test: avoid downloading large amounts of data in example tests",
          "timestamp": "2023-03-28T15:15:00+02:00",
          "tree_id": "4ab98f4e09830c27e5a46da88570329681428690",
          "url": "https://github.com/ibis-project/ibis/commit/bfcfd638ad7c955428b086d1b4c6656afd788934"
        },
        "date": 1680010795451,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 279.1025166290213,
            "unit": "iter/sec",
            "range": "stddev: 0.0040467939535119915",
            "extra": "mean: 3.5829128740146206 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 140.73885910399488,
            "unit": "iter/sec",
            "range": "stddev: 0.0003084940501059033",
            "extra": "mean: 7.1053581531528485 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 316.8103354804027,
            "unit": "iter/sec",
            "range": "stddev: 0.0001879905942417447",
            "extra": "mean: 3.1564626781623986 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.444685109552484,
            "unit": "iter/sec",
            "range": "stddev: 0.000271509741979942",
            "extra": "mean: 95.74247471428521 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1898863.712778722,
            "unit": "iter/sec",
            "range": "stddev: 1.3000535096029015e-7",
            "extra": "mean: 526.6307388309821 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 122.00303211691359,
            "unit": "iter/sec",
            "range": "stddev: 0.0006046540134649208",
            "extra": "mean: 8.19651760000289 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.5989533488311265,
            "unit": "iter/sec",
            "range": "stddev: 0.00015713715629121842",
            "extra": "mean: 178.6048101666656 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.95908776705431,
            "unit": "iter/sec",
            "range": "stddev: 0.00023546952247193253",
            "extra": "mean: 16.678038930229846 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69913.52857960464,
            "unit": "iter/sec",
            "range": "stddev: 5.102686846808364e-7",
            "extra": "mean: 14.303383341056579 usec\nrounds: 13038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.2541295181605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002453753493783327",
            "extra": "mean: 3.5179787948730987 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 546.846458398493,
            "unit": "iter/sec",
            "range": "stddev: 0.000042331646770770924",
            "extra": "mean: 1.828666867348145 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.38965862519376,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251930681865378",
            "extra": "mean: 9.672147227269424 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.26494568482714,
            "unit": "iter/sec",
            "range": "stddev: 0.0006043884536748602",
            "extra": "mean: 9.322710169809486 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11725.637118151591,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015870248646542012",
            "extra": "mean: 85.28321232557794 usec\nrounds: 6231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11702.676472833282,
            "unit": "iter/sec",
            "range": "stddev: 0.000018243990153657014",
            "extra": "mean: 85.45053794500862 usec\nrounds: 4467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13315.654439349872,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029107678011490076",
            "extra": "mean: 75.09957580791833 usec\nrounds: 1827"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7712579865314322,
            "unit": "iter/sec",
            "range": "stddev: 0.0011226882388387358",
            "extra": "mean: 564.5704959999932 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 122.37779549222265,
            "unit": "iter/sec",
            "range": "stddev: 0.0005423521392506249",
            "extra": "mean: 8.17141701219444 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.63041569591277,
            "unit": "iter/sec",
            "range": "stddev: 0.0006245499015017645",
            "extra": "mean: 8.64824357831438 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.82041790986638,
            "unit": "iter/sec",
            "range": "stddev: 0.0006300340368683807",
            "extra": "mean: 8.276746739495746 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1679052.6087803636,
            "unit": "iter/sec",
            "range": "stddev: 1.758672905434274e-7",
            "extra": "mean: 595.5739532940446 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5774232.3177782595,
            "unit": "iter/sec",
            "range": "stddev: 1.538880776723839e-8",
            "extra": "mean: 173.18319474638798 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.78095606837029,
            "unit": "iter/sec",
            "range": "stddev: 0.0007579716455287979",
            "extra": "mean: 9.453497464644409 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12890971.220004454,
            "unit": "iter/sec",
            "range": "stddev: 3.3558384053696733e-9",
            "extra": "mean: 77.57367408032451 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9240352548242681,
            "unit": "iter/sec",
            "range": "stddev: 0.005304085661063636",
            "extra": "mean: 1.0822097909999968 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.45759499186477,
            "unit": "iter/sec",
            "range": "stddev: 0.00007454331241414583",
            "extra": "mean: 6.559200937502396 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1885393.6545819682,
            "unit": "iter/sec",
            "range": "stddev: 8.693510556199505e-8",
            "extra": "mean: 530.3932139422211 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 322.0550508178749,
            "unit": "iter/sec",
            "range": "stddev: 0.00007161918966137557",
            "extra": "mean: 3.105059204817468 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.5427522622241,
            "unit": "iter/sec",
            "range": "stddev: 0.0001405491772763785",
            "extra": "mean: 3.441834264368323 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.60354463582325,
            "unit": "iter/sec",
            "range": "stddev: 0.0009159486570623546",
            "extra": "mean: 21.45759529268336 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.33974070767499,
            "unit": "iter/sec",
            "range": "stddev: 0.0006843740433831587",
            "extra": "mean: 8.309806836206873 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6207082385603617,
            "unit": "iter/sec",
            "range": "stddev: 0.0014530682000790337",
            "extra": "mean: 381.5762415999927 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6652898726933327,
            "unit": "iter/sec",
            "range": "stddev: 0.05079958165902793",
            "extra": "mean: 1.5031041971999968 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5669.112905096975,
            "unit": "iter/sec",
            "range": "stddev: 0.00004353261238484555",
            "extra": "mean: 176.394440671824 usec\nrounds: 2621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 313.86248482562456,
            "unit": "iter/sec",
            "range": "stddev: 0.00018172585008628016",
            "extra": "mean: 3.1861087206888685 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5805.232718450391,
            "unit": "iter/sec",
            "range": "stddev: 0.00004469633781138151",
            "extra": "mean: 172.25838282447583 usec\nrounds: 3994"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5397.678854324749,
            "unit": "iter/sec",
            "range": "stddev: 0.000041725212088615914",
            "extra": "mean: 185.26481974724675 usec\nrounds: 2613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 304.18269720320654,
            "unit": "iter/sec",
            "range": "stddev: 0.0001769953254638349",
            "extra": "mean: 3.2874979714311587 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 504473.0956272321,
            "unit": "iter/sec",
            "range": "stddev: 1.944990723040205e-7",
            "extra": "mean: 1.9822662668594029 usec\nrounds: 2167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 122.13391053193702,
            "unit": "iter/sec",
            "range": "stddev: 0.0005621443884652606",
            "extra": "mean: 8.187734230768841 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 319.1074032112379,
            "unit": "iter/sec",
            "range": "stddev: 0.00021156844904174368",
            "extra": "mean: 3.133741147766588 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5871.76772691165,
            "unit": "iter/sec",
            "range": "stddev: 0.00004508658513118243",
            "extra": "mean: 170.30646417036766 usec\nrounds: 3098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6443327.853710296,
            "unit": "iter/sec",
            "range": "stddev: 9.174508066713428e-9",
            "extra": "mean: 155.19930425773526 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 179.49435371428527,
            "unit": "iter/sec",
            "range": "stddev: 0.00399969546362219",
            "extra": "mean: 5.571205886463568 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.3528458560453,
            "unit": "iter/sec",
            "range": "stddev: 0.015021058682970646",
            "extra": "mean: 11.318254554350359 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.34757182048007,
            "unit": "iter/sec",
            "range": "stddev: 0.0000404273961514912",
            "extra": "mean: 10.065671275861565 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5627.13291217708,
            "unit": "iter/sec",
            "range": "stddev: 0.00002551961127739356",
            "extra": "mean: 177.71039277142475 usec\nrounds: 1660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8619528072708077,
            "unit": "iter/sec",
            "range": "stddev: 0.001969414246436164",
            "extra": "mean: 1.1601563236000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.807166838442546,
            "unit": "iter/sec",
            "range": "stddev: 0.0001502945107312347",
            "extra": "mean: 63.26244356250044 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 306.90047356571256,
            "unit": "iter/sec",
            "range": "stddev: 0.00016710292098835454",
            "extra": "mean: 3.2583853272741305 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.4099930177002,
            "unit": "iter/sec",
            "range": "stddev: 0.00022152518996768696",
            "extra": "mean: 20.238820913044226 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7224082.322990206,
            "unit": "iter/sec",
            "range": "stddev: 4.170406991973541e-9",
            "extra": "mean: 138.42588654024814 nsec\nrounds: 54645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.66208089561833,
            "unit": "iter/sec",
            "range": "stddev: 0.0005314153974303774",
            "extra": "mean: 9.464133126318815 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.91614471168101,
            "unit": "iter/sec",
            "range": "stddev: 0.00007263000728128635",
            "extra": "mean: 9.015820037736004 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141016.33928827386,
            "unit": "iter/sec",
            "range": "stddev: 3.0842198626226894e-7",
            "extra": "mean: 7.0913768223393 usec\nrounds: 41842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1775.0243333631843,
            "unit": "iter/sec",
            "range": "stddev: 0.000009558323080029254",
            "extra": "mean: 563.3725584512266 usec\nrounds: 1420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1205.8903182414847,
            "unit": "iter/sec",
            "range": "stddev: 0.00001256971748150048",
            "extra": "mean: 829.2628150943872 usec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 315.637377712983,
            "unit": "iter/sec",
            "range": "stddev: 0.00018350056075868438",
            "extra": "mean: 3.1681925862067106 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.1939993394885,
            "unit": "iter/sec",
            "range": "stddev: 0.0005739236251938793",
            "extra": "mean: 10.616387530121305 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.36092449428764,
            "unit": "iter/sec",
            "range": "stddev: 0.00007136501278993184",
            "extra": "mean: 5.198561000000268 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.77972761903224,
            "unit": "iter/sec",
            "range": "stddev: 0.00015797380544033292",
            "extra": "mean: 13.740089894737327 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.44846616657259,
            "unit": "iter/sec",
            "range": "stddev: 0.0005508283187818716",
            "extra": "mean: 9.761005092785714 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.17727641704302,
            "unit": "iter/sec",
            "range": "stddev: 0.00010503175545778057",
            "extra": "mean: 10.618272666664552 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.76859668239564,
            "unit": "iter/sec",
            "range": "stddev: 0.00011343046089251533",
            "extra": "mean: 6.143691230263926 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5542.795442594933,
            "unit": "iter/sec",
            "range": "stddev: 0.000046009287665770524",
            "extra": "mean: 180.41437941499007 usec\nrounds: 2633"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.9026211715774,
            "unit": "iter/sec",
            "range": "stddev: 0.00002670153869325724",
            "extra": "mean: 1.4515839674108906 msec\nrounds: 583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17975768631671965,
            "unit": "iter/sec",
            "range": "stddev: 0.14036181150736754",
            "extra": "mean: 5.563044454399988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 122.43838697354123,
            "unit": "iter/sec",
            "range": "stddev: 0.0005470419862268254",
            "extra": "mean: 8.167373196578446 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5813.9709520195265,
            "unit": "iter/sec",
            "range": "stddev: 0.00005317675288182271",
            "extra": "mean: 171.9994833570062 usec\nrounds: 3515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.59338795118524,
            "unit": "iter/sec",
            "range": "stddev: 0.000043943886147132895",
            "extra": "mean: 6.1503116000032305 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5745.254946382084,
            "unit": "iter/sec",
            "range": "stddev: 0.000042439963815271",
            "extra": "mean: 174.05667970047568 usec\nrounds: 2941"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5522.949259346043,
            "unit": "iter/sec",
            "range": "stddev: 0.000043536923409078915",
            "extra": "mean: 181.062681013732 usec\nrounds: 3276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9278175614010242,
            "unit": "iter/sec",
            "range": "stddev: 0.003241847122222113",
            "extra": "mean: 1.0777980947999937 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 264.33745500409685,
            "unit": "iter/sec",
            "range": "stddev: 0.003799440633380225",
            "extra": "mean: 3.783043155895185 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 357.54764738026563,
            "unit": "iter/sec",
            "range": "stddev: 0.00003955121246460765",
            "extra": "mean: 2.796830037414459 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8138.969360713937,
            "unit": "iter/sec",
            "range": "stddev: 0.000012325151162062862",
            "extra": "mean: 122.86567938526822 usec\nrounds: 3905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.23525078948904,
            "unit": "iter/sec",
            "range": "stddev: 0.00012903500984614975",
            "extra": "mean: 9.239134133342002 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 752352.2901461677,
            "unit": "iter/sec",
            "range": "stddev: 2.8116044123484917e-7",
            "extra": "mean: 1.3291645590734082 usec\nrounds: 24040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 740.1212016804463,
            "unit": "iter/sec",
            "range": "stddev: 0.00001646493502880782",
            "extra": "mean: 1.3511300550902994 msec\nrounds: 599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.80555979126937,
            "unit": "iter/sec",
            "range": "stddev: 0.00007504199883221314",
            "extra": "mean: 8.41711450000244 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.31582201508809,
            "unit": "iter/sec",
            "range": "stddev: 0.00007550366370222199",
            "extra": "mean: 14.426720637927781 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 45.2136200440691,
            "unit": "iter/sec",
            "range": "stddev: 0.0005336876170770019",
            "extra": "mean: 22.11722925581525 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.44533331550278,
            "unit": "iter/sec",
            "range": "stddev: 0.00006913120883477402",
            "extra": "mean: 13.432675433958412 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1910141.919060128,
            "unit": "iter/sec",
            "range": "stddev: 9.584460246596702e-8",
            "extra": "mean: 523.5213101296907 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.04535963001291,
            "unit": "iter/sec",
            "range": "stddev: 0.0005761093223169963",
            "extra": "mean: 9.42992700000218 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.56620475114336,
            "unit": "iter/sec",
            "range": "stddev: 0.035342576059036686",
            "extra": "mean: 28.1165788421058 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.384064023584987,
            "unit": "iter/sec",
            "range": "stddev: 0.00041500794519658924",
            "extra": "mean: 35.23103665384479 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.22377308734312,
            "unit": "iter/sec",
            "range": "stddev: 0.0012614007119518425",
            "extra": "mean: 8.910767945947654 msec\nrounds: 111"
          }
        ]
      }
    ]
  }
}