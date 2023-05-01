window.BENCHMARK_DATA = {
  "lastUpdate": 1682951953633,
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
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "d712e2ec23fa13e659c813e2298f846775e335f6",
          "message": "refactor(alchemy): abstract out custom type mapping and fix sqlite",
          "timestamp": "2023-05-01T09:31:41-05:00",
          "tree_id": "ca9333dd61fb863bbcf99c01fc69b715935d1df2",
          "url": "https://github.com/ibis-project/ibis/commit/d712e2ec23fa13e659c813e2298f846775e335f6"
        },
        "date": 1682951867903,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13105.821413394327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067347585860566705",
            "extra": "mean: 76.30197058674908 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.91648946460133,
            "unit": "iter/sec",
            "range": "stddev: 0.0006835258861336244",
            "extra": "mean: 10.318161599995317 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 179.94036983196415,
            "unit": "iter/sec",
            "range": "stddev: 0.004067067414441004",
            "extra": "mean: 5.557396602740352 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.90388073118862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000861991241245213",
            "extra": "mean: 9.910421608699412 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.60017477662343,
            "unit": "iter/sec",
            "range": "stddev: 0.0005398087863958581",
            "extra": "mean: 9.74657209090682 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.86070614453371,
            "unit": "iter/sec",
            "range": "stddev: 0.0005975500187373465",
            "extra": "mean: 9.914663878785431 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.11895827933998,
            "unit": "iter/sec",
            "range": "stddev: 0.0007258483463360743",
            "extra": "mean: 9.889342384615073 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2296.034423474503,
            "unit": "iter/sec",
            "range": "stddev: 0.00008603883947023943",
            "extra": "mean: 435.53353981807356 usec\nrounds: 1645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 548.1412444946299,
            "unit": "iter/sec",
            "range": "stddev: 0.00004406760450835134",
            "extra": "mean: 1.8243473010719538 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7014285690742668,
            "unit": "iter/sec",
            "range": "stddev: 0.0012359826635130865",
            "extra": "mean: 587.7413946000047 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.602132824640556,
            "unit": "iter/sec",
            "range": "stddev: 0.000165777422583171",
            "extra": "mean: 116.2502393749989 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 280.5360580048945,
            "unit": "iter/sec",
            "range": "stddev: 0.0002086571255715869",
            "extra": "mean: 3.564604162159265 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.6950343885555,
            "unit": "iter/sec",
            "range": "stddev: 0.0007171515688312578",
            "extra": "mean: 9.833321813720115 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9346258274399478,
            "unit": "iter/sec",
            "range": "stddev: 0.0030324379776467455",
            "extra": "mean: 1.0699468927999987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11815.47439116898,
            "unit": "iter/sec",
            "range": "stddev: 0.00001267542801274346",
            "extra": "mean: 84.63477359380605 usec\nrounds: 4461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2537230.9396411185,
            "unit": "iter/sec",
            "range": "stddev: 1.5101226989069612e-8",
            "extra": "mean: 394.13046103768403 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3638851953150135,
            "unit": "iter/sec",
            "range": "stddev: 0.0018876820630277405",
            "extra": "mean: 733.1995416000041 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 200.01454851594968,
            "unit": "iter/sec",
            "range": "stddev: 0.00002449657133566797",
            "extra": "mean: 4.999636313556747 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 436.72326937538185,
            "unit": "iter/sec",
            "range": "stddev: 0.000031589170811461924",
            "extra": "mean: 2.2897795242974754 msec\nrounds: 391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9288760757336788,
            "unit": "iter/sec",
            "range": "stddev: 0.0023031481205435813",
            "extra": "mean: 1.076569874200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.8293065704982,
            "unit": "iter/sec",
            "range": "stddev: 0.00018253848709198734",
            "extra": "mean: 9.360727239580887 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.26065459668143,
            "unit": "iter/sec",
            "range": "stddev: 0.0000793431985330329",
            "extra": "mean: 33.04621176667032 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 90.47374591291288,
            "unit": "iter/sec",
            "range": "stddev: 0.011051013811150241",
            "extra": "mean: 11.0529302164914 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6296266.358149916,
            "unit": "iter/sec",
            "range": "stddev: 4.4071571695983884e-9",
            "extra": "mean: 158.82428460249233 nsec\nrounds: 56180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4634214.353705191,
            "unit": "iter/sec",
            "range": "stddev: 1.0834720351280337e-8",
            "extra": "mean: 215.78630673395818 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.86377408760593,
            "unit": "iter/sec",
            "range": "stddev: 0.0007540427119122158",
            "extra": "mean: 10.323776968421402 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12819217.4445587,
            "unit": "iter/sec",
            "range": "stddev: 3.6282651654720734e-9",
            "extra": "mean: 78.00788186364112 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.47388374378215,
            "unit": "iter/sec",
            "range": "stddev: 0.00009278076102116007",
            "extra": "mean: 6.3502593333320565 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.7934454474626,
            "unit": "iter/sec",
            "range": "stddev: 0.000059826446891498666",
            "extra": "mean: 7.886843018351089 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1058536.0336981106,
            "unit": "iter/sec",
            "range": "stddev: 1.4621369736449408e-7",
            "extra": "mean: 944.7009531705703 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.39068026077919,
            "unit": "iter/sec",
            "range": "stddev: 0.000762245841086109",
            "extra": "mean: 9.862839438772642 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.07537871201532,
            "unit": "iter/sec",
            "range": "stddev: 0.00011273810203861773",
            "extra": "mean: 5.777829333333 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.51772414015848,
            "unit": "iter/sec",
            "range": "stddev: 0.00017705368100670812",
            "extra": "mean: 16.80171771429124 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.3951586991831,
            "unit": "iter/sec",
            "range": "stddev: 0.0002628612337258584",
            "extra": "mean: 3.6049655829950313 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2516387.4773412333,
            "unit": "iter/sec",
            "range": "stddev: 1.7217714548897242e-8",
            "extra": "mean: 397.39507885989565 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 244.4709715352996,
            "unit": "iter/sec",
            "range": "stddev: 0.008567624901528525",
            "extra": "mean: 4.0904651939651995 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1187.871062138705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000491969740721549",
            "extra": "mean: 841.8422098771797 usec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 413.3102608872656,
            "unit": "iter/sec",
            "range": "stddev: 0.000025608563044124016",
            "extra": "mean: 2.4194898956857975 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.79081354226926,
            "unit": "iter/sec",
            "range": "stddev: 0.0008364874988111831",
            "extra": "mean: 9.921539124997972 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.13620473167506,
            "unit": "iter/sec",
            "range": "stddev: 0.0006091886702964903",
            "extra": "mean: 9.887655984848399 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7312657.83384908,
            "unit": "iter/sec",
            "range": "stddev: 4.033970634193087e-9",
            "extra": "mean: 136.74918514183904 nsec\nrounds: 60980"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.90675294449856,
            "unit": "iter/sec",
            "range": "stddev: 0.014159194936367438",
            "extra": "mean: 11.000282900991213 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5618976.4588819705,
            "unit": "iter/sec",
            "range": "stddev: 9.222762251403638e-9",
            "extra": "mean: 177.96835550359793 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5272244189092516,
            "unit": "iter/sec",
            "range": "stddev: 0.0023967859057257663",
            "extra": "mean: 395.6910168000036 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.558928723971103,
            "unit": "iter/sec",
            "range": "stddev: 0.0004792983948030218",
            "extra": "mean: 36.28588070370774 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2404.989541654306,
            "unit": "iter/sec",
            "range": "stddev: 0.00007539172886028479",
            "extra": "mean: 415.802223951517 usec\nrounds: 1286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.20084212888264,
            "unit": "iter/sec",
            "range": "stddev: 0.00023928377572652543",
            "extra": "mean: 3.607492648002335 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8140.291875620901,
            "unit": "iter/sec",
            "range": "stddev: 0.000012795468765105737",
            "extra": "mean: 122.84571797663274 usec\nrounds: 4684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2386.986592280559,
            "unit": "iter/sec",
            "range": "stddev: 0.00008585978633706117",
            "extra": "mean: 418.93825597260127 usec\nrounds: 1465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.6877429428691,
            "unit": "iter/sec",
            "range": "stddev: 0.00003791102236906551",
            "extra": "mean: 1.4583897849889362 msec\nrounds: 493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17860479422420072,
            "unit": "iter/sec",
            "range": "stddev: 0.007101224369592845",
            "extra": "mean: 5.598953848600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 118.31648421160041,
            "unit": "iter/sec",
            "range": "stddev: 0.00013248101341392396",
            "extra": "mean: 8.451907666657615 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.61797493160347,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940734006961724",
            "extra": "mean: 9.938582054347291 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 265.72451764725156,
            "unit": "iter/sec",
            "range": "stddev: 0.00035296075373315573",
            "extra": "mean: 3.7632959459446527 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.84724474343301,
            "unit": "iter/sec",
            "range": "stddev: 0.0008059636569525902",
            "extra": "mean: 9.915987318682975 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.66871978415074,
            "unit": "iter/sec",
            "range": "stddev: 0.00019365523629843396",
            "extra": "mean: 20.133395914889263 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 736.3857403997766,
            "unit": "iter/sec",
            "range": "stddev: 0.000013864846012619164",
            "extra": "mean: 1.3579839276316101 msec\nrounds: 608"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8048220032100626,
            "unit": "iter/sec",
            "range": "stddev: 0.0029670151962513185",
            "extra": "mean: 1.24251076139999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.87781024494866,
            "unit": "iter/sec",
            "range": "stddev: 0.0006960630080493546",
            "extra": "mean: 9.72026910000352 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.746284630624956,
            "unit": "iter/sec",
            "range": "stddev: 0.025467201877845784",
            "extra": "mean: 27.213635611111105 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2335.5681214924234,
            "unit": "iter/sec",
            "range": "stddev: 0.00009134957807526926",
            "extra": "mean: 428.1613500363252 usec\nrounds: 1357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.18633683462459,
            "unit": "iter/sec",
            "range": "stddev: 0.026255589472966898",
            "extra": "mean: 26.891597428571924 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2312.2373216627375,
            "unit": "iter/sec",
            "range": "stddev: 0.00007884843899937979",
            "extra": "mean: 432.48155828610913 usec\nrounds: 1424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.32826199294749,
            "unit": "iter/sec",
            "range": "stddev: 0.0007051559373977824",
            "extra": "mean: 9.58513044210014 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143662.4507310678,
            "unit": "iter/sec",
            "range": "stddev: 4.3461508070748215e-7",
            "extra": "mean: 6.960761109887877 usec\nrounds: 37038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1767.415778628974,
            "unit": "iter/sec",
            "range": "stddev: 0.000018767124337340728",
            "extra": "mean: 565.7978230655627 usec\nrounds: 1266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2356.9941680285738,
            "unit": "iter/sec",
            "range": "stddev: 0.00008022988932106355",
            "extra": "mean: 424.2691872404654 usec\nrounds: 1442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.72312204989858,
            "unit": "iter/sec",
            "range": "stddev: 0.00015995399203965304",
            "extra": "mean: 17.945871717390972 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.60076829563374,
            "unit": "iter/sec",
            "range": "stddev: 0.00010055868423612172",
            "extra": "mean: 9.56015922534808 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.432757872349015,
            "unit": "iter/sec",
            "range": "stddev: 0.00033018469620130334",
            "extra": "mean: 21.53651960000218 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.82260986283666,
            "unit": "iter/sec",
            "range": "stddev: 0.00007128831260843743",
            "extra": "mean: 6.067128780645978 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2415.0163266627046,
            "unit": "iter/sec",
            "range": "stddev: 0.00007854758920347046",
            "extra": "mean: 414.07587557881794 usec\nrounds: 1294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.0398769570238,
            "unit": "iter/sec",
            "range": "stddev: 0.000055259768318243724",
            "extra": "mean: 7.460466412697636 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6221839.6949897865,
            "unit": "iter/sec",
            "range": "stddev: 1.0040130635338348e-8",
            "extra": "mean: 160.7241666486951 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1617068.607033258,
            "unit": "iter/sec",
            "range": "stddev: 9.257109739706349e-8",
            "extra": "mean: 618.4029518912262 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.99835761098435,
            "unit": "iter/sec",
            "range": "stddev: 0.0006638748292064651",
            "extra": "mean: 52.63612889473279 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.38409908001701,
            "unit": "iter/sec",
            "range": "stddev: 0.00039487411997799247",
            "extra": "mean: 14.623282509430865 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.24489849438065,
            "unit": "iter/sec",
            "range": "stddev: 0.0007934032131728371",
            "extra": "mean: 10.390161095742503 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 265.83671739901075,
            "unit": "iter/sec",
            "range": "stddev: 0.0037632741926017254",
            "extra": "mean: 3.761707599251755 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4681.151689129781,
            "unit": "iter/sec",
            "range": "stddev: 0.000024366944506122043",
            "extra": "mean: 213.62264382974922 usec\nrounds: 2058"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.92845524467907,
            "unit": "iter/sec",
            "range": "stddev: 0.0003995911550609517",
            "extra": "mean: 3.9851996818172934 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 188.08394450619534,
            "unit": "iter/sec",
            "range": "stddev: 0.00010968910768648671",
            "extra": "mean: 5.316774925289068 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2512499.1322128195,
            "unit": "iter/sec",
            "range": "stddev: 1.5742614127239582e-8",
            "extra": "mean: 398.0100877165819 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.51868151123584,
            "unit": "iter/sec",
            "range": "stddev: 0.00015199310555502968",
            "extra": "mean: 9.048244028303355 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 226.0521223509125,
            "unit": "iter/sec",
            "range": "stddev: 0.011979427392345227",
            "extra": "mean: 4.423758510206101 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2341.488358369195,
            "unit": "iter/sec",
            "range": "stddev: 0.00007755247159857983",
            "extra": "mean: 427.07878364019814 usec\nrounds: 1308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9909.64821150344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018543865525986898",
            "extra": "mean: 100.91175576133648 usec\nrounds: 5077"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.35574302406184,
            "unit": "iter/sec",
            "range": "stddev: 0.00023742093471795762",
            "extra": "mean: 3.698830247933736 msec\nrounds: 242"
          }
        ]
      }
    ]
  }
}