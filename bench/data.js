window.BENCHMARK_DATA = {
  "lastUpdate": 1676466581255,
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
          "id": "7f46342a2253ca391c3c4246adc9290e2eab025c",
          "message": "fix(backends): fix null literal handling",
          "timestamp": "2023-02-15T14:04:00+01:00",
          "tree_id": "cbc27fd802f2c27d96a8a42a73087f01f3b03f90",
          "url": "https://github.com/ibis-project/ibis/commit/7f46342a2253ca391c3c4246adc9290e2eab025c"
        },
        "date": 1676466495082,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9023.115934048785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000076149737520335734",
            "extra": "mean: 110.82646031693928 usec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.74451183904266,
            "unit": "iter/sec",
            "range": "stddev: 0.000844565061455291",
            "extra": "mean: 85.14615283333171 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 315165.6371157099,
            "unit": "iter/sec",
            "range": "stddev: 7.420765109601163e-7",
            "extra": "mean: 3.1729347436213677 usec\nrounds: 1701"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 72.50471383277296,
            "unit": "iter/sec",
            "range": "stddev: 0.006977306380601565",
            "extra": "mean: 13.792206701297104 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 208.5783009727445,
            "unit": "iter/sec",
            "range": "stddev: 0.0002623189474034697",
            "extra": "mean: 4.794362574324895 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 214.9083254270404,
            "unit": "iter/sec",
            "range": "stddev: 0.0002521819358142967",
            "extra": "mean: 4.653146861634691 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 123.40403233454238,
            "unit": "iter/sec",
            "range": "stddev: 0.0008425896666303546",
            "extra": "mean: 8.103462918367596 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 121.60301471708429,
            "unit": "iter/sec",
            "range": "stddev: 0.00014318821352494",
            "extra": "mean: 8.223480333333445 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1290866.564897156,
            "unit": "iter/sec",
            "range": "stddev: 1.7676838625420804e-7",
            "extra": "mean: 774.6734071462067 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.15890735194768,
            "unit": "iter/sec",
            "range": "stddev: 0.00019417522485782088",
            "extra": "mean: 18.811522843750872 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3734.059171434001,
            "unit": "iter/sec",
            "range": "stddev: 0.00010452562716759174",
            "extra": "mean: 267.80507594794415 usec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4738.529316473198,
            "unit": "iter/sec",
            "range": "stddev: 0.000059523008935148424",
            "extra": "mean: 211.03594242280258 usec\nrounds: 330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 133.39146533399168,
            "unit": "iter/sec",
            "range": "stddev: 0.0007470552138696616",
            "extra": "mean: 7.496731499996301 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 76.21878279790249,
            "unit": "iter/sec",
            "range": "stddev: 0.0008135509841532198",
            "extra": "mean: 13.120125555554262 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 191.25142609950967,
            "unit": "iter/sec",
            "range": "stddev: 0.0005359776226105232",
            "extra": "mean: 5.228719180790275 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3526.787056189225,
            "unit": "iter/sec",
            "range": "stddev: 0.00002740681822098391",
            "extra": "mean: 283.54419591199337 usec\nrounds: 1174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 123.56884418204196,
            "unit": "iter/sec",
            "range": "stddev: 0.00013284026382349247",
            "extra": "mean: 8.092654799997945 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8436.780419922135,
            "unit": "iter/sec",
            "range": "stddev: 0.000018351656691668703",
            "extra": "mean: 118.52862706236334 usec\nrounds: 1515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 72.59001895011077,
            "unit": "iter/sec",
            "range": "stddev: 0.00034694899495464154",
            "extra": "mean: 13.775998607842684 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4744.215944638005,
            "unit": "iter/sec",
            "range": "stddev: 0.00005896768877839391",
            "extra": "mean: 210.78298535930207 usec\nrounds: 1571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4299993.689371497,
            "unit": "iter/sec",
            "range": "stddev: 2.259695827914289e-8",
            "extra": "mean: 232.55848083457963 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1268.4556511065045,
            "unit": "iter/sec",
            "range": "stddev: 0.00006780135284636879",
            "extra": "mean: 788.3602387893308 usec\nrounds: 892"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16436.92368099199,
            "unit": "iter/sec",
            "range": "stddev: 0.000022655706933269565",
            "extra": "mean: 60.838634978662185 usec\nrounds: 4660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.870915698019215,
            "unit": "iter/sec",
            "range": "stddev: 0.0011699940692321486",
            "extra": "mean: 127.05002039999727 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 81.46840374611658,
            "unit": "iter/sec",
            "range": "stddev: 0.0007867881640718884",
            "extra": "mean: 12.274697355263546 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 352.6557077161384,
            "unit": "iter/sec",
            "range": "stddev: 0.0001497238812113503",
            "extra": "mean: 2.8356268681320356 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.231230761900804,
            "unit": "iter/sec",
            "range": "stddev: 0.00039279190723733135",
            "extra": "mean: 22.108617942855552 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7619438159228354,
            "unit": "iter/sec",
            "range": "stddev: 0.032053583119802394",
            "extra": "mean: 1.3124327267999945 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 224.524587674367,
            "unit": "iter/sec",
            "range": "stddev: 0.0002448356676913917",
            "extra": "mean: 4.453855189572032 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 549763.5182275007,
            "unit": "iter/sec",
            "range": "stddev: 6.06777086121443e-7",
            "extra": "mean: 1.8189639123820225 usec\nrounds: 19231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.004744119504507,
            "unit": "iter/sec",
            "range": "stddev: 0.008306273650280633",
            "extra": "mean: 498.81677680000394 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 88.93372897278762,
            "unit": "iter/sec",
            "range": "stddev: 0.00023832641154772162",
            "extra": "mean: 11.244327788234147 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.423328472400442,
            "unit": "iter/sec",
            "range": "stddev: 0.0008373691345185228",
            "extra": "mean: 48.96361537500482 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3990.1323211549175,
            "unit": "iter/sec",
            "range": "stddev: 0.00006281068358198262",
            "extra": "mean: 250.61825511354388 usec\nrounds: 1760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.015803857301165,
            "unit": "iter/sec",
            "range": "stddev: 0.0008161533697281913",
            "extra": "mean: 19.993680454543426 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3671531315326029,
            "unit": "iter/sec",
            "range": "stddev: 0.007387090993436186",
            "extra": "mean: 731.4469586000087 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122900.2985562332,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011377795697272566",
            "extra": "mean: 8.136676735105315 usec\nrounds: 33669"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1468542.9767256677,
            "unit": "iter/sec",
            "range": "stddev: 3.0289501592468243e-7",
            "extra": "mean: 680.9470446889112 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 222.5627759067102,
            "unit": "iter/sec",
            "range": "stddev: 0.00025364330412537485",
            "extra": "mean: 4.493114340104932 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3663098.7622984424,
            "unit": "iter/sec",
            "range": "stddev: 4.08393402605868e-8",
            "extra": "mean: 272.9929125287261 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4338.001855296919,
            "unit": "iter/sec",
            "range": "stddev: 0.00008417489853929958",
            "extra": "mean: 230.52087881865467 usec\nrounds: 2063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 104.38268909133349,
            "unit": "iter/sec",
            "range": "stddev: 0.0004328739237166175",
            "extra": "mean: 9.580132574712778 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 154.45457128821036,
            "unit": "iter/sec",
            "range": "stddev: 0.00016184847022108215",
            "extra": "mean: 6.474395621052952 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 81.4318080354998,
            "unit": "iter/sec",
            "range": "stddev: 0.0007011309569518853",
            "extra": "mean: 12.2802136428563 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 212.3712996229923,
            "unit": "iter/sec",
            "range": "stddev: 0.0002791826083285913",
            "extra": "mean: 4.708734192309549 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 237.25350894541654,
            "unit": "iter/sec",
            "range": "stddev: 0.00011277173162956276",
            "extra": "mean: 4.214900780371868 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11945383961648075,
            "unit": "iter/sec",
            "range": "stddev: 0.10489414042435868",
            "extra": "mean: 8.371434549199979 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9575267.839650929,
            "unit": "iter/sec",
            "range": "stddev: 1.5168494859622735e-8",
            "extra": "mean: 104.43572093712967 nsec\nrounds: 88496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5332139322589203,
            "unit": "iter/sec",
            "range": "stddev: 0.02470249273877556",
            "extra": "mean: 1.8754198633999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4844.200316958841,
            "unit": "iter/sec",
            "range": "stddev: 0.000057279960890855096",
            "extra": "mean: 206.4324211571403 usec\nrounds: 2023"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 123.21835688265324,
            "unit": "iter/sec",
            "range": "stddev: 0.0007626071295536113",
            "extra": "mean: 8.11567387603089 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.202229549634616,
            "unit": "iter/sec",
            "range": "stddev: 0.000990231466069269",
            "extra": "mean: 28.407291606061914 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 139.95114591756106,
            "unit": "iter/sec",
            "range": "stddev: 0.000743600167789425",
            "extra": "mean: 7.145350568183665 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 82.84920400968113,
            "unit": "iter/sec",
            "range": "stddev: 0.0008145139981046317",
            "extra": "mean: 12.070122000003133 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7607818483603032,
            "unit": "iter/sec",
            "range": "stddev: 0.00974278035450378",
            "extra": "mean: 1.314437249199989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 248.26112434432488,
            "unit": "iter/sec",
            "range": "stddev: 0.00012822889814453182",
            "extra": "mean: 4.028016881986942 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.28978461385978,
            "unit": "iter/sec",
            "range": "stddev: 0.001282254411727935",
            "extra": "mean: 25.451908424238148 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3806889.6963459817,
            "unit": "iter/sec",
            "range": "stddev: 4.691200660140467e-8",
            "extra": "mean: 262.68163245185116 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 60.11938642140522,
            "unit": "iter/sec",
            "range": "stddev: 0.0004578921023311652",
            "extra": "mean: 16.633569627449738 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 456.2128905549427,
            "unit": "iter/sec",
            "range": "stddev: 0.00008507143904367842",
            "extra": "mean: 2.1919591065995268 msec\nrounds: 394"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4661.1724655960925,
            "unit": "iter/sec",
            "range": "stddev: 0.00005805141284214452",
            "extra": "mean: 214.53829640094966 usec\nrounds: 1778"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 227.8785784927866,
            "unit": "iter/sec",
            "range": "stddev: 0.0002594795712288031",
            "extra": "mean: 4.388301904523486 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 28.499510616201675,
            "unit": "iter/sec",
            "range": "stddev: 0.029618525750793063",
            "extra": "mean: 35.088321812498435 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1408882.0119523976,
            "unit": "iter/sec",
            "range": "stddev: 3.787054019046027e-7",
            "extra": "mean: 709.7826443352925 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9665.161871764883,
            "unit": "iter/sec",
            "range": "stddev: 0.00002600135205610937",
            "extra": "mean: 103.4643820008156 usec\nrounds: 3678"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 867.2768935557219,
            "unit": "iter/sec",
            "range": "stddev: 0.00004529202695366168",
            "extra": "mean: 1.1530342932349213 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 53248.62150057582,
            "unit": "iter/sec",
            "range": "stddev: 0.00000233995008726919",
            "extra": "mean: 18.7798288823155 usec\nrounds: 11495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.14781123754116,
            "unit": "iter/sec",
            "range": "stddev: 0.0008592820049426049",
            "extra": "mean: 12.323191282051154 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 144.10981312503657,
            "unit": "iter/sec",
            "range": "stddev: 0.0007623427603480463",
            "extra": "mean: 6.9391527080279545 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 143.18192619767714,
            "unit": "iter/sec",
            "range": "stddev: 0.0007844672381675813",
            "extra": "mean: 6.984121715330179 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 130.32163956807267,
            "unit": "iter/sec",
            "range": "stddev: 0.0004209392681007748",
            "extra": "mean: 7.673322736840311 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.17945751180085,
            "unit": "iter/sec",
            "range": "stddev: 0.0007557495211483713",
            "extra": "mean: 13.665037074629051 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.3371392055822,
            "unit": "iter/sec",
            "range": "stddev: 0.0010266615388220951",
            "extra": "mean: 31.91101757692886 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6682304891486054,
            "unit": "iter/sec",
            "range": "stddev: 0.024110953531519506",
            "extra": "mean: 1.496489633800013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.385455441612088,
            "unit": "iter/sec",
            "range": "stddev: 0.0025369112955382035",
            "extra": "mean: 228.0264873999954 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 83.34170347596708,
            "unit": "iter/sec",
            "range": "stddev: 0.0008078381443775739",
            "extra": "mean: 11.99879482051103 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 550.671280806196,
            "unit": "iter/sec",
            "range": "stddev: 0.00007686368259779277",
            "extra": "mean: 1.8159654132243392 msec\nrounds: 484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 240.4793543852765,
            "unit": "iter/sec",
            "range": "stddev: 0.0001441013988467601",
            "extra": "mean: 4.158361130651911 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.30795657885326,
            "unit": "iter/sec",
            "range": "stddev: 0.00035634326467306137",
            "extra": "mean: 11.586417285715404 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1360609.3839632173,
            "unit": "iter/sec",
            "range": "stddev: 3.756297516350806e-7",
            "extra": "mean: 734.9647972345853 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 224.28254816375022,
            "unit": "iter/sec",
            "range": "stddev: 0.00024474100295340974",
            "extra": "mean: 4.458661666666517 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 143.0114232816359,
            "unit": "iter/sec",
            "range": "stddev: 0.0008355157757552606",
            "extra": "mean: 6.992448414632413 msec\nrounds: 123"
          }
        ]
      }
    ]
  }
}