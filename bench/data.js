window.BENCHMARK_DATA = {
  "lastUpdate": 1678920078777,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "semantic-release-bot@martynus.net",
            "name": "semantic-release-bot",
            "username": "semantic-release-bot"
          },
          "committer": {
            "email": "semantic-release-bot@martynus.net",
            "name": "semantic-release-bot",
            "username": "semantic-release-bot"
          },
          "distinct": true,
          "id": "9eb6d8cbf26fe6c2405ec08ce49afac18ca25845",
          "message": "chore(release): 5.0.0",
          "timestamp": "2023-03-15T22:35:58Z",
          "tree_id": "3094d7db1cddb82d9d792e4a0ea6023894a12600",
          "url": "https://github.com/ibis-project/ibis/commit/9eb6d8cbf26fe6c2405ec08ce49afac18ca25845"
        },
        "date": 1678919991793,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 737.5907886070282,
            "unit": "iter/sec",
            "range": "stddev: 0.000038589887684781325",
            "extra": "mean: 1.3557653043478792 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.08665324733177,
            "unit": "iter/sec",
            "range": "stddev: 0.0068390074826122655",
            "extra": "mean: 10.195066983052588 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 98.779113150043,
            "unit": "iter/sec",
            "range": "stddev: 0.008385083078219783",
            "extra": "mean: 10.123597672728899 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5718.984716453468,
            "unit": "iter/sec",
            "range": "stddev: 0.00004582563953545042",
            "extra": "mean: 174.85621129971008 usec\nrounds: 885"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.96925371103167,
            "unit": "iter/sec",
            "range": "stddev: 0.0004404255660683181",
            "extra": "mean: 9.711636862071035 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.07471542678306,
            "unit": "iter/sec",
            "range": "stddev: 0.00017526182832815811",
            "extra": "mean: 13.874491131579253 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6013206917638545,
            "unit": "iter/sec",
            "range": "stddev: 0.0015605999992577882",
            "extra": "mean: 384.42011519999824 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.532194844574992,
            "unit": "iter/sec",
            "range": "stddev: 0.00009220440315030342",
            "extra": "mean: 64.38240120000007 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 286.759784777714,
            "unit": "iter/sec",
            "range": "stddev: 0.00003841108343374161",
            "extra": "mean: 3.4872393309095435 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.07803127945785,
            "unit": "iter/sec",
            "range": "stddev: 0.0005589713837001786",
            "extra": "mean: 10.629474133334169 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.21269486982466,
            "unit": "iter/sec",
            "range": "stddev: 0.0006382960182716326",
            "extra": "mean: 9.783520542859899 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.11582860539755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000580539434927137",
            "extra": "mean: 7.240299754903836 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6766957376211227,
            "unit": "iter/sec",
            "range": "stddev: 0.0012779344730129976",
            "extra": "mean: 1.4777690243999928 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.10370695454587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000626985560877452",
            "extra": "mean: 8.396044300969027 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.0052842228803,
            "unit": "iter/sec",
            "range": "stddev: 0.0001891581863572898",
            "extra": "mean: 3.3112003406602604 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.31158030052647,
            "unit": "iter/sec",
            "range": "stddev: 0.000595887186739776",
            "extra": "mean: 8.67215588749879 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.22415534606862,
            "unit": "iter/sec",
            "range": "stddev: 0.000857379237303453",
            "extra": "mean: 21.633710611113425 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5371.878549041671,
            "unit": "iter/sec",
            "range": "stddev: 0.00004943402168095957",
            "extra": "mean: 186.15461814161776 usec\nrounds: 2260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 298.84214621737715,
            "unit": "iter/sec",
            "range": "stddev: 0.0001947981578024884",
            "extra": "mean: 3.3462482205324613 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18029450770177563,
            "unit": "iter/sec",
            "range": "stddev: 0.0588821695638345",
            "extra": "mean: 5.5464806595999905 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.065158977252914,
            "unit": "iter/sec",
            "range": "stddev: 0.0009687851242471219",
            "extra": "mean: 38.3653903999857 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.472640166947375,
            "unit": "iter/sec",
            "range": "stddev: 0.028188726111422334",
            "extra": "mean: 105.56718954545245 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 312.95728438210796,
            "unit": "iter/sec",
            "range": "stddev: 0.00021905970605880755",
            "extra": "mean: 3.1953242499990546 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8515488157542227,
            "unit": "iter/sec",
            "range": "stddev: 0.0014926094182521868",
            "extra": "mean: 1.1743307976000097 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.80197593423254,
            "unit": "iter/sec",
            "range": "stddev: 0.0007034615262632493",
            "extra": "mean: 26.45364363333253 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.46677562108278,
            "unit": "iter/sec",
            "range": "stddev: 0.00019032128529747848",
            "extra": "mean: 20.632690893615077 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 283.5966363631232,
            "unit": "iter/sec",
            "range": "stddev: 0.0002560116963649317",
            "extra": "mean: 3.5261349105691746 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 240.8949344919156,
            "unit": "iter/sec",
            "range": "stddev: 0.004234142860313212",
            "extra": "mean: 4.151187330315407 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6298836.263374489,
            "unit": "iter/sec",
            "range": "stddev: 1.0129847337166892e-8",
            "extra": "mean: 158.75948479804921 nsec\nrounds: 175408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5750.454239824299,
            "unit": "iter/sec",
            "range": "stddev: 0.0000473194155224943",
            "extra": "mean: 173.8993057408547 usec\nrounds: 2247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8030.601556371695,
            "unit": "iter/sec",
            "range": "stddev: 0.000011201589272450061",
            "extra": "mean: 124.52367272618241 usec\nrounds: 3685"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1902154.2526717137,
            "unit": "iter/sec",
            "range": "stddev: 1.0675861929939693e-7",
            "extra": "mean: 525.7197194157243 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.33487838382892,
            "unit": "iter/sec",
            "range": "stddev: 0.0006173176603022656",
            "extra": "mean: 8.241653293100233 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 505879.62467771076,
            "unit": "iter/sec",
            "range": "stddev: 1.2356567291668538e-7",
            "extra": "mean: 1.9767548468414533 usec\nrounds: 2011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.87703127009132,
            "unit": "iter/sec",
            "range": "stddev: 0.000055135466971147195",
            "extra": "mean: 6.54120499130623 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1183.5378160925738,
            "unit": "iter/sec",
            "range": "stddev: 0.00001269080378949555",
            "extra": "mean: 844.9244176256909 usec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.37467959176698,
            "unit": "iter/sec",
            "range": "stddev: 0.0001533309876489732",
            "extra": "mean: 6.120899532894286 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13449.773017830821,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027696205009827293",
            "extra": "mean: 74.3506971213764 usec\nrounds: 6983"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.54014405616775,
            "unit": "iter/sec",
            "range": "stddev: 0.0006228444758950447",
            "extra": "mean: 9.38613335713909 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 306.5028701793494,
            "unit": "iter/sec",
            "range": "stddev: 0.00023711231395558057",
            "extra": "mean: 3.2626121883127963 msec\nrounds: 308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 321.03522595215276,
            "unit": "iter/sec",
            "range": "stddev: 0.00009104464349440405",
            "extra": "mean: 3.1149229715652464 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.48401834400134,
            "unit": "iter/sec",
            "range": "stddev: 0.013431080140137296",
            "extra": "mean: 11.17517986458457 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70597.54321286886,
            "unit": "iter/sec",
            "range": "stddev: 7.887634158441123e-7",
            "extra": "mean: 14.164798865376314 usec\nrounds: 13568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5338.052417095261,
            "unit": "iter/sec",
            "range": "stddev: 0.000044756706918296825",
            "extra": "mean: 187.33424137939753 usec\nrounds: 2407"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5820.713898209853,
            "unit": "iter/sec",
            "range": "stddev: 0.00004360696336249516",
            "extra": "mean: 171.8002323233148 usec\nrounds: 1683"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.31274986445199,
            "unit": "iter/sec",
            "range": "stddev: 0.00014825863199665056",
            "extra": "mean: 10.491775774197464 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7760268136230726,
            "unit": "iter/sec",
            "range": "stddev: 0.001126395479620049",
            "extra": "mean: 563.0545622 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.97332769204488,
            "unit": "iter/sec",
            "range": "stddev: 0.0006693218870722987",
            "extra": "mean: 8.266284966101328 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.60921651052206,
            "unit": "iter/sec",
            "range": "stddev: 0.0000785768959129321",
            "extra": "mean: 5.191859549178796 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11941.312303907482,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016628298969195563",
            "extra": "mean: 83.74288977207104 usec\nrounds: 6042"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 303.8122961709935,
            "unit": "iter/sec",
            "range": "stddev: 0.00023188243754208472",
            "extra": "mean: 3.2915060140856642 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.312628526889974,
            "unit": "iter/sec",
            "range": "stddev: 0.0003188586413439117",
            "extra": "mean: 17.14894398112864 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.14661247570936,
            "unit": "iter/sec",
            "range": "stddev: 0.00010115426110016479",
            "extra": "mean: 6.3232464125881656 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 735433.6693896179,
            "unit": "iter/sec",
            "range": "stddev: 1.4121101833905002e-7",
            "extra": "mean: 1.35974193407539 usec\nrounds: 26315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.15611016175855,
            "unit": "iter/sec",
            "range": "stddev: 0.0006457892701930562",
            "extra": "mean: 8.322506434785243 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5594.880271643513,
            "unit": "iter/sec",
            "range": "stddev: 0.00004813609431637267",
            "extra": "mean: 178.734834607327 usec\nrounds: 3531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.70631435142123,
            "unit": "iter/sec",
            "range": "stddev: 0.0005639224650666157",
            "extra": "mean: 9.55052239393838 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.35765743954931,
            "unit": "iter/sec",
            "range": "stddev: 0.00013212775339021678",
            "extra": "mean: 10.064649527475172 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12890111.33967178,
            "unit": "iter/sec",
            "range": "stddev: 4.12324187013643e-9",
            "extra": "mean: 77.57884890584285 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.502566113911853,
            "unit": "iter/sec",
            "range": "stddev: 0.0007227762223157405",
            "extra": "mean: 181.7333911666689 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.08707758576585,
            "unit": "iter/sec",
            "range": "stddev: 0.0005832217281459186",
            "extra": "mean: 9.33819488349658 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.7421927230623,
            "unit": "iter/sec",
            "range": "stddev: 0.0001529092381436966",
            "extra": "mean: 9.28141496591195 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1693781.863251815,
            "unit": "iter/sec",
            "range": "stddev: 1.0802195230245969e-7",
            "extra": "mean: 590.3947974033359 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1858828.8016596246,
            "unit": "iter/sec",
            "range": "stddev: 8.718966063068804e-8",
            "extra": "mean: 537.9731576717375 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5638104.1059183795,
            "unit": "iter/sec",
            "range": "stddev: 9.341020535260826e-9",
            "extra": "mean: 177.36458589895815 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.606393486597675,
            "unit": "iter/sec",
            "range": "stddev: 0.000510505457933037",
            "extra": "mean: 28.08484381818682 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11588.450575224982,
            "unit": "iter/sec",
            "range": "stddev: 0.000018500807948949507",
            "extra": "mean: 86.29281313395822 usec\nrounds: 4340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 98.10529027870918,
            "unit": "iter/sec",
            "range": "stddev: 0.014566433160423364",
            "extra": "mean: 10.19313022935951 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.09694365130386,
            "unit": "iter/sec",
            "range": "stddev: 0.0006694749260140523",
            "extra": "mean: 8.25784672881158 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9222131633592047,
            "unit": "iter/sec",
            "range": "stddev: 0.0035358501972920803",
            "extra": "mean: 1.0843480008000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 308.3818645924404,
            "unit": "iter/sec",
            "range": "stddev: 0.00022771922181146701",
            "extra": "mean: 3.2427328413803025 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7023409.854236951,
            "unit": "iter/sec",
            "range": "stddev: 7.940728231956031e-9",
            "extra": "mean: 142.380983134069 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.9594623708432,
            "unit": "iter/sec",
            "range": "stddev: 0.0002435911673290397",
            "extra": "mean: 3.1851245777036596 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5367.954215788714,
            "unit": "iter/sec",
            "range": "stddev: 0.00001902351178955245",
            "extra": "mean: 186.29070960752782 usec\nrounds: 2352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2538600.7435115883,
            "unit": "iter/sec",
            "range": "stddev: 1.85667730036623e-8",
            "extra": "mean: 393.9177921363953 nsec\nrounds: 124985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5565.500638624713,
            "unit": "iter/sec",
            "range": "stddev: 0.00005350271840894739",
            "extra": "mean: 179.67835508992218 usec\nrounds: 2436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 355.9894964196724,
            "unit": "iter/sec",
            "range": "stddev: 0.00004024410939634011",
            "extra": "mean: 2.8090716441282586 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.92847779260165,
            "unit": "iter/sec",
            "range": "stddev: 0.000520902183752258",
            "extra": "mean: 15.167952203383312 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139452.45821722128,
            "unit": "iter/sec",
            "range": "stddev: 3.510085642085453e-7",
            "extra": "mean: 7.170902634375417 usec\nrounds: 39213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.95116399119485,
            "unit": "iter/sec",
            "range": "stddev: 0.00009794738449429593",
            "extra": "mean: 13.342020947366189 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.26283189048894,
            "unit": "iter/sec",
            "range": "stddev: 0.000632958032336151",
            "extra": "mean: 8.315121008547328 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1759.241998158729,
            "unit": "iter/sec",
            "range": "stddev: 0.000006456188380791553",
            "extra": "mean: 568.4266297909143 usec\nrounds: 1383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5435.725264573489,
            "unit": "iter/sec",
            "range": "stddev: 0.00005189785675885465",
            "extra": "mean: 183.9680909771779 usec\nrounds: 2682"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9170686870191629,
            "unit": "iter/sec",
            "range": "stddev: 0.0027694415758990967",
            "extra": "mean: 1.090430863200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 168.5025114610995,
            "unit": "iter/sec",
            "range": "stddev: 0.003977185634188479",
            "extra": "mean: 5.934629646341265 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.9648588913429,
            "unit": "iter/sec",
            "range": "stddev: 0.00003952791489903008",
            "extra": "mean: 1.8519723710413345 msec\nrounds: 442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.85377351875489,
            "unit": "iter/sec",
            "range": "stddev: 0.0007579479998602198",
            "extra": "mean: 8.343500339132154 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.2462216244185,
            "unit": "iter/sec",
            "range": "stddev: 0.00007085919402715436",
            "extra": "mean: 1.4657464831670513 msec\nrounds: 594"
          }
        ]
      }
    ]
  }
}