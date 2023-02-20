window.BENCHMARK_DATA = {
  "lastUpdate": 1676896239980,
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
          "id": "10445733615abf48fe55085dd217e3ef420d015d",
          "message": "fix(mssql): set sqlglot to tsql",
          "timestamp": "2023-02-20T07:25:35-05:00",
          "tree_id": "0c7e8229670df54e07bb8ca37ef0467721582043",
          "url": "https://github.com/ibis-project/ibis/commit/10445733615abf48fe55085dd217e3ef420d015d"
        },
        "date": 1676896156155,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 997.5401772187242,
            "unit": "iter/sec",
            "range": "stddev: 0.00001662517970563445",
            "extra": "mean: 1.0024658884298114 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4836501.937721879,
            "unit": "iter/sec",
            "range": "stddev: 1.1677992509461282e-8",
            "extra": "mean: 206.76100472546375 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5629326114437447,
            "unit": "iter/sec",
            "range": "stddev: 0.0013941910066901763",
            "extra": "mean: 639.8228514000095 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 218.86207409031525,
            "unit": "iter/sec",
            "range": "stddev: 0.005590912200120338",
            "extra": "mean: 4.569087651007738 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 321.32752051718484,
            "unit": "iter/sec",
            "range": "stddev: 0.00003445704431663482",
            "extra": "mean: 3.1120894917138577 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 161.13026210391428,
            "unit": "iter/sec",
            "range": "stddev: 0.0006009705926974791",
            "extra": "mean: 6.206158836600734 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 161.79096809024352,
            "unit": "iter/sec",
            "range": "stddev: 0.0006308169088257637",
            "extra": "mean: 6.180814737706628 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.99652065722611,
            "unit": "iter/sec",
            "range": "stddev: 0.0005965432229444651",
            "extra": "mean: 12.04869784999758 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4437.056103290669,
            "unit": "iter/sec",
            "range": "stddev: 0.00005539178782360497",
            "extra": "mean: 225.37465759298524 usec\nrounds: 1396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5998.421327570323,
            "unit": "iter/sec",
            "range": "stddev: 0.0000499131257520151",
            "extra": "mean: 166.71053021963243 usec\nrounds: 2548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.06592124133438,
            "unit": "iter/sec",
            "range": "stddev: 0.000585433154437417",
            "extra": "mean: 10.5190165617961 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.64902368047713,
            "unit": "iter/sec",
            "range": "stddev: 0.00033275437418386645",
            "extra": "mean: 13.764809894736803 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11213247.360700592,
            "unit": "iter/sec",
            "range": "stddev: 3.963029568618294e-9",
            "extra": "mean: 89.18023190198173 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120187.62859584768,
            "unit": "iter/sec",
            "range": "stddev: 2.8756850406063554e-7",
            "extra": "mean: 8.320323910896672 usec\nrounds: 33784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 149.65583995346,
            "unit": "iter/sec",
            "range": "stddev: 0.0006727996456068554",
            "extra": "mean: 6.6819978445945045 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 147.31495593997312,
            "unit": "iter/sec",
            "range": "stddev: 0.0005090815807506233",
            "extra": "mean: 6.788177029408156 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 415.56251157138337,
            "unit": "iter/sec",
            "range": "stddev: 0.00003308214267448519",
            "extra": "mean: 2.406376831775945 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 252.9993676046648,
            "unit": "iter/sec",
            "range": "stddev: 0.0002004003868104016",
            "extra": "mean: 3.952579049772937 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 585700.0191433531,
            "unit": "iter/sec",
            "range": "stddev: 2.5168974602383797e-7",
            "extra": "mean: 1.7073586602619606 usec\nrounds: 22124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5214.163888727656,
            "unit": "iter/sec",
            "range": "stddev: 0.00004944059723449419",
            "extra": "mean: 191.78530275234925 usec\nrounds: 2943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1459470.0006114913,
            "unit": "iter/sec",
            "range": "stddev: 8.940565540592417e-8",
            "extra": "mean: 685.1802363741757 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10837.455720805976,
            "unit": "iter/sec",
            "range": "stddev: 0.000002392940939467373",
            "extra": "mean: 92.27258000050499 usec\nrounds: 350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.8440177065151,
            "unit": "iter/sec",
            "range": "stddev: 0.00013173692520269958",
            "extra": "mean: 15.187408588237657 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.48404586416953,
            "unit": "iter/sec",
            "range": "stddev: 0.00010545213685956756",
            "extra": "mean: 6.969415965219291 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.82209024070302,
            "unit": "iter/sec",
            "range": "stddev: 0.00009760002644033447",
            "extra": "mean: 10.11919498529407 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 249.29110109409663,
            "unit": "iter/sec",
            "range": "stddev: 0.0002078277554573991",
            "extra": "mean: 4.011374636363547 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 255.8830216015549,
            "unit": "iter/sec",
            "range": "stddev: 0.00019868482306009688",
            "extra": "mean: 3.9080357647063337 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.15225051884808,
            "unit": "iter/sec",
            "range": "stddev: 0.016341105133788093",
            "extra": "mean: 14.460845344829968 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 619.6087193120194,
            "unit": "iter/sec",
            "range": "stddev: 0.00002909998095646266",
            "extra": "mean: 1.613921768419184 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.26270017891231,
            "unit": "iter/sec",
            "range": "stddev: 0.00011558821978725366",
            "extra": "mean: 17.46337488235077 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4402484.476880656,
            "unit": "iter/sec",
            "range": "stddev: 2.8597279953675458e-8",
            "extra": "mean: 227.14446927727968 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6051.289441176082,
            "unit": "iter/sec",
            "range": "stddev: 0.00004602438284714024",
            "extra": "mean: 165.2540354780398 usec\nrounds: 2114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5186.588493548718,
            "unit": "iter/sec",
            "range": "stddev: 0.00004316709618216914",
            "extra": "mean: 192.80496249969303 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.8025271724986,
            "unit": "iter/sec",
            "range": "stddev: 0.00022438641277650574",
            "extra": "mean: 21.832856432437946 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5179.678247572546,
            "unit": "iter/sec",
            "range": "stddev: 0.00004970552747573773",
            "extra": "mean: 193.06218498584337 usec\nrounds: 2038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8588382976293708,
            "unit": "iter/sec",
            "range": "stddev: 0.0026186867725277833",
            "extra": "mean: 1.1643635393999943 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 226.28942297343832,
            "unit": "iter/sec",
            "range": "stddev: 0.00036675137932611757",
            "extra": "mean: 4.419119492462444 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.08950070839,
            "unit": "iter/sec",
            "range": "stddev: 0.00010637858635624893",
            "extra": "mean: 6.988632953845826 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2238435959483804,
            "unit": "iter/sec",
            "range": "stddev: 0.0019241027010240392",
            "extra": "mean: 449.67191120000507 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.393098872835736,
            "unit": "iter/sec",
            "range": "stddev: 0.0005254200658631983",
            "extra": "mean: 26.742902571427457 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 142.87752499994534,
            "unit": "iter/sec",
            "range": "stddev: 0.011730465660145906",
            "extra": "mean: 6.999001417475439 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6100.396656865941,
            "unit": "iter/sec",
            "range": "stddev: 0.000043895156972510855",
            "extra": "mean: 163.9237669692362 usec\nrounds: 2313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 276.56369542066915,
            "unit": "iter/sec",
            "range": "stddev: 0.000040677635009375354",
            "extra": "mean: 3.6158035799996924 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15144466703312148,
            "unit": "iter/sec",
            "range": "stddev: 0.10212088964714869",
            "extra": "mean: 6.60307173299999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1464.8760155241105,
            "unit": "iter/sec",
            "range": "stddev: 0.000005639382283009048",
            "extra": "mean: 682.6516301737762 usec\nrounds: 1087"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7391562921022773,
            "unit": "iter/sec",
            "range": "stddev: 0.0028790608253225305",
            "extra": "mean: 1.3528938476000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.260929930342044,
            "unit": "iter/sec",
            "range": "stddev: 0.00036710598833818587",
            "extra": "mean: 38.079382666666106 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 251.21135955038721,
            "unit": "iter/sec",
            "range": "stddev: 0.0001974981543992498",
            "extra": "mean: 3.980711707423498 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5780688006371405,
            "unit": "iter/sec",
            "range": "stddev: 0.053830181609768935",
            "extra": "mean: 1.7298978926000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1452663.2388748461,
            "unit": "iter/sec",
            "range": "stddev: 4.048578705705215e-7",
            "extra": "mean: 688.3907937083516 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1591847.2324637715,
            "unit": "iter/sec",
            "range": "stddev: 7.728544017141181e-8",
            "extra": "mean: 628.2009853748693 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.33588382687771,
            "unit": "iter/sec",
            "range": "stddev: 0.023429784257281372",
            "extra": "mean: 32.96426125926802 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5577945.544764279,
            "unit": "iter/sec",
            "range": "stddev: 5.767061915206075e-9",
            "extra": "mean: 179.2774762634738 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55494.918559519974,
            "unit": "iter/sec",
            "range": "stddev: 0.000003952374575846085",
            "extra": "mean: 18.01966785350752 usec\nrounds: 11236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 252.94090560086548,
            "unit": "iter/sec",
            "range": "stddev: 0.00008972490233944935",
            "extra": "mean: 3.9534926058103683 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 519.8675671775652,
            "unit": "iter/sec",
            "range": "stddev: 0.00003245918314379441",
            "extra": "mean: 1.9235668141968194 msec\nrounds: 479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.16399522338944,
            "unit": "iter/sec",
            "range": "stddev: 0.00011425756112443773",
            "extra": "mean: 22.642879000004864 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 161.28288698004937,
            "unit": "iter/sec",
            "range": "stddev: 0.0006213955998855544",
            "extra": "mean: 6.200285837664225 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1960468.5025990151,
            "unit": "iter/sec",
            "range": "stddev: 4.723015647987051e-8",
            "extra": "mean: 510.08215570623315 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.76756706574905,
            "unit": "iter/sec",
            "range": "stddev: 0.0006600690306098878",
            "extra": "mean: 11.139880835442087 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.42973022322444,
            "unit": "iter/sec",
            "range": "stddev: 0.00008025204105161388",
            "extra": "mean: 8.303597443475413 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.93268024864679,
            "unit": "iter/sec",
            "range": "stddev: 0.00010967550163461413",
            "extra": "mean: 11.372336168672502 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.9385170212654,
            "unit": "iter/sec",
            "range": "stddev: 0.000053180687304067544",
            "extra": "mean: 3.7744606229517568 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18809.204348706993,
            "unit": "iter/sec",
            "range": "stddev: 0.000013470459759280985",
            "extra": "mean: 53.16545992381348 usec\nrounds: 5477"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.14605091456882,
            "unit": "iter/sec",
            "range": "stddev: 0.0010227942563552205",
            "extra": "mean: 109.33680660000391 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 78.56518146555622,
            "unit": "iter/sec",
            "range": "stddev: 0.015609365308001581",
            "extra": "mean: 12.728284735629487 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.908792022918837,
            "unit": "iter/sec",
            "range": "stddev: 0.000353286517741477",
            "extra": "mean: 203.71610680001595 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.09830013133909,
            "unit": "iter/sec",
            "range": "stddev: 0.00011224920326787716",
            "extra": "mean: 9.699480968416346 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8543694066899877,
            "unit": "iter/sec",
            "range": "stddev: 0.005235325890909619",
            "extra": "mean: 1.1704538951999894 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5799.039690054271,
            "unit": "iter/sec",
            "range": "stddev: 0.00004814673164945405",
            "extra": "mean: 172.4423444997393 usec\nrounds: 2418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 161.93166973000055,
            "unit": "iter/sec",
            "range": "stddev: 0.0006580910746396184",
            "extra": "mean: 6.17544425786115 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 163.1104328281961,
            "unit": "iter/sec",
            "range": "stddev: 0.000662166888858785",
            "extra": "mean: 6.130815685182431 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 385915.24080664985,
            "unit": "iter/sec",
            "range": "stddev: 1.1917870832026159e-7",
            "extra": "mean: 2.5912425689894354 usec\nrounds: 1884"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.85752731901788,
            "unit": "iter/sec",
            "range": "stddev: 0.0006225814935762228",
            "extra": "mean: 10.542125946809401 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.98177870786759,
            "unit": "iter/sec",
            "range": "stddev: 0.00014856752344729032",
            "extra": "mean: 14.709824000004712 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10270.715903000862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017015598301869723",
            "extra": "mean: 97.36419636608034 usec\nrounds: 6274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 239.74307519624026,
            "unit": "iter/sec",
            "range": "stddev: 0.00020286828658169426",
            "extra": "mean: 4.1711319469038095 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.25920419421936,
            "unit": "iter/sec",
            "range": "stddev: 0.00002507267536365999",
            "extra": "mean: 6.931966702475898 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.58111023865111,
            "unit": "iter/sec",
            "range": "stddev: 0.0006664695897331758",
            "extra": "mean: 73.63168271427867 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.14395431380494,
            "unit": "iter/sec",
            "range": "stddev: 0.000041934208546334175",
            "extra": "mean: 10.401070011496438 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9751.04765127972,
            "unit": "iter/sec",
            "range": "stddev: 0.000011950107204915386",
            "extra": "mean: 102.55308309038575 usec\nrounds: 4116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 93.55391654569448,
            "unit": "iter/sec",
            "range": "stddev: 0.0005903719332199203",
            "extra": "mean: 10.689023366665475 msec\nrounds: 90"
          }
        ]
      }
    ]
  }
}