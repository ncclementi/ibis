window.BENCHMARK_DATA = {
  "lastUpdate": 1675718468737,
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
          "id": "ac31db2c9784f3d028dad36dcaa62557a1008712",
          "message": "feat(api): implement isin",
          "timestamp": "2023-02-06T16:13:53-05:00",
          "tree_id": "b095fe6c2564c64088bf02a28d1e398b7d4abbc0",
          "url": "https://github.com/ibis-project/ibis/commit/ac31db2c9784f3d028dad36dcaa62557a1008712"
        },
        "date": 1675718396172,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 145.2567417485403,
            "unit": "iter/sec",
            "range": "stddev: 0.005192793745754565",
            "extra": "mean: 6.8843620472441795 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.16090936416046,
            "unit": "iter/sec",
            "range": "stddev: 0.00012070425396699639",
            "extra": "mean: 6.8889069680001285 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 159.7560631419898,
            "unit": "iter/sec",
            "range": "stddev: 0.0006193010219099877",
            "extra": "mean: 6.2595433333332 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10688.648118694891,
            "unit": "iter/sec",
            "range": "stddev: 0.000002882281358000199",
            "extra": "mean: 93.55720095705634 usec\nrounds: 5016"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5586.020025390964,
            "unit": "iter/sec",
            "range": "stddev: 0.00006718329246667555",
            "extra": "mean: 179.01833424415807 usec\nrounds: 2196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 276.6395782534809,
            "unit": "iter/sec",
            "range": "stddev: 0.000027066585360982493",
            "extra": "mean: 3.6148117572812164 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 513.169509516444,
            "unit": "iter/sec",
            "range": "stddev: 0.000027585292771235692",
            "extra": "mean: 1.9486738425716152 msec\nrounds: 451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11034895.832544059,
            "unit": "iter/sec",
            "range": "stddev: 3.0622247350971866e-9",
            "extra": "mean: 90.62160759620015 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 269.1563616134232,
            "unit": "iter/sec",
            "range": "stddev: 0.0001422625090675743",
            "extra": "mean: 3.7153125194798613 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.22900784510641,
            "unit": "iter/sec",
            "range": "stddev: 0.0008776176219476842",
            "extra": "mean: 24.85768487878936 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 157.37490095882995,
            "unit": "iter/sec",
            "range": "stddev: 0.0006579830602422873",
            "extra": "mean: 6.354253403226001 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.75429350557685,
            "unit": "iter/sec",
            "range": "stddev: 0.00030354327889813406",
            "extra": "mean: 24.537291999998953 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1536989.9823900464,
            "unit": "iter/sec",
            "range": "stddev: 1.1010861854688739e-7",
            "extra": "mean: 650.6223277037775 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.86473231371527,
            "unit": "iter/sec",
            "range": "stddev: 0.000697175370792377",
            "extra": "mean: 10.768350643835424 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.0782627098508,
            "unit": "iter/sec",
            "range": "stddev: 0.0005135841841012042",
            "extra": "mean: 11.35353910526392 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2112155.282707002,
            "unit": "iter/sec",
            "range": "stddev: 2.444058022720691e-8",
            "extra": "mean: 473.450038540275 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10708.672652575506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029749700828944007",
            "extra": "mean: 93.38225496691166 usec\nrounds: 302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4543134.234444435,
            "unit": "iter/sec",
            "range": "stddev: 1.1052756430245619e-8",
            "extra": "mean: 220.1123604092117 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4104.649491385204,
            "unit": "iter/sec",
            "range": "stddev: 0.000026006773302886794",
            "extra": "mean: 243.62616152701708 usec\nrounds: 1362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.150389605287752,
            "unit": "iter/sec",
            "range": "stddev: 0.004968574170000118",
            "extra": "mean: 465.0320098000037 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 228.8699678773639,
            "unit": "iter/sec",
            "range": "stddev: 0.0003634568539980983",
            "extra": "mean: 4.369293224770464 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4633.124793947213,
            "unit": "iter/sec",
            "range": "stddev: 0.00004432835070238224",
            "extra": "mean: 215.8370526316096 usec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 73.14986524046627,
            "unit": "iter/sec",
            "range": "stddev: 0.016461513742654033",
            "extra": "mean: 13.670565170731212 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 239.2979899669605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002564501928005821",
            "extra": "mean: 4.178890094889926 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 140.58541480826818,
            "unit": "iter/sec",
            "range": "stddev: 0.0006800066954659469",
            "extra": "mean: 7.113113414814831 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.53381823757712,
            "unit": "iter/sec",
            "range": "stddev: 0.00043832159129466165",
            "extra": "mean: 15.495751333332919 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.69292056515846,
            "unit": "iter/sec",
            "range": "stddev: 0.00011675465917301318",
            "extra": "mean: 6.959285092591209 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.84443520292544,
            "unit": "iter/sec",
            "range": "stddev: 0.0006717090317793274",
            "extra": "mean: 10.770704758064927 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 209.56034817634284,
            "unit": "iter/sec",
            "range": "stddev: 0.0004240175528732966",
            "extra": "mean: 4.771895106599605 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 157.15794487785251,
            "unit": "iter/sec",
            "range": "stddev: 0.0006919810255649198",
            "extra": "mean: 6.363025431372416 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 69.50534829902853,
            "unit": "iter/sec",
            "range": "stddev: 0.01563833406833564",
            "extra": "mean: 14.387382042857512 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.16599072221153,
            "unit": "iter/sec",
            "range": "stddev: 0.00047649590288076",
            "extra": "mean: 26.906318937500284 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.433095199929188,
            "unit": "iter/sec",
            "range": "stddev: 0.00019916386138413492",
            "extra": "mean: 74.44300700000038 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.232385858084697,
            "unit": "iter/sec",
            "range": "stddev: 0.0004597804912208291",
            "extra": "mean: 39.63160700000117 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.50694151039666,
            "unit": "iter/sec",
            "range": "stddev: 0.00030679242061410633",
            "extra": "mean: 11.559765985713609 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58376.54192193978,
            "unit": "iter/sec",
            "range": "stddev: 6.950351686339771e-7",
            "extra": "mean: 17.130168507363532 usec\nrounds: 13038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19408.65906801441,
            "unit": "iter/sec",
            "range": "stddev: 0.00001283390109908088",
            "extra": "mean: 51.52339460936826 usec\nrounds: 4341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 405.62717126547784,
            "unit": "iter/sec",
            "range": "stddev: 0.000024360953546853213",
            "extra": "mean: 2.465318082317303 msec\nrounds: 328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.553759454857406,
            "unit": "iter/sec",
            "range": "stddev: 0.0010381255568920245",
            "extra": "mean: 643.6002669999993 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1402.733969623736,
            "unit": "iter/sec",
            "range": "stddev: 0.000037341337472765865",
            "extra": "mean: 712.893550491428 usec\nrounds: 1119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.44246021842218,
            "unit": "iter/sec",
            "range": "stddev: 0.0009380880090995909",
            "extra": "mean: 11.70378284337359 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 958.8480985993286,
            "unit": "iter/sec",
            "range": "stddev: 0.000009912717550879347",
            "extra": "mean: 1.0429180612244895 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 256.59378941594576,
            "unit": "iter/sec",
            "range": "stddev: 0.00011860938886803521",
            "extra": "mean: 3.8972104596770727 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 237.96516257945183,
            "unit": "iter/sec",
            "range": "stddev: 0.0002290236774367722",
            "extra": "mean: 4.20229578632595 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 152.52399537717264,
            "unit": "iter/sec",
            "range": "stddev: 0.0007579564734553437",
            "extra": "mean: 6.556345429629784 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5152.1121358223145,
            "unit": "iter/sec",
            "range": "stddev: 0.000060837361765571215",
            "extra": "mean: 194.0951543051756 usec\nrounds: 3519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4549.199222264727,
            "unit": "iter/sec",
            "range": "stddev: 0.00005440091894788372",
            "extra": "mean: 219.81890683217213 usec\nrounds: 2576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.570313307526215,
            "unit": "iter/sec",
            "range": "stddev: 0.07581945729723162",
            "extra": "mean: 1.753422174800005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.152547461898045,
            "unit": "iter/sec",
            "range": "stddev: 0.0006740850749091617",
            "extra": "mean: 16.35254852830234 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.84568870061618,
            "unit": "iter/sec",
            "range": "stddev: 0.00005523043979750685",
            "extra": "mean: 11.383597929410799 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9751.915888768606,
            "unit": "iter/sec",
            "range": "stddev: 0.000014097522172810576",
            "extra": "mean: 102.54395253262095 usec\nrounds: 4087"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 144.41307966468176,
            "unit": "iter/sec",
            "range": "stddev: 0.0007242506073493261",
            "extra": "mean: 6.924580531915379 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.97401882005855,
            "unit": "iter/sec",
            "range": "stddev: 0.0001679464950383838",
            "extra": "mean: 9.806419434783496 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.76277601702882,
            "unit": "iter/sec",
            "range": "stddev: 0.0006159020246928707",
            "extra": "mean: 18.260579041665892 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5405577.350481928,
            "unit": "iter/sec",
            "range": "stddev: 4.249197963848985e-9",
            "extra": "mean: 184.99411536693302 nsec\nrounds: 52632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 619.6219580214987,
            "unit": "iter/sec",
            "range": "stddev: 0.00003318595745644015",
            "extra": "mean: 1.6138872857138213 msec\nrounds: 511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.8916925403061,
            "unit": "iter/sec",
            "range": "stddev: 0.00004128148818084579",
            "extra": "mean: 6.540577734374775 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7241838933630237,
            "unit": "iter/sec",
            "range": "stddev: 0.004675401310684409",
            "extra": "mean: 1.380864735 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1555098.055978555,
            "unit": "iter/sec",
            "range": "stddev: 1.3048341110737463e-7",
            "extra": "mean: 643.0462671826465 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.31614225717779,
            "unit": "iter/sec",
            "range": "stddev: 0.0007681587572415605",
            "extra": "mean: 11.196184415585147 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 581001.2005696915,
            "unit": "iter/sec",
            "range": "stddev: 2.7514790298570424e-7",
            "extra": "mean: 1.7211668392758328 usec\nrounds: 25126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 227.234539506768,
            "unit": "iter/sec",
            "range": "stddev: 0.00026787205185179196",
            "extra": "mean: 4.400739439394141 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13362851178857232,
            "unit": "iter/sec",
            "range": "stddev: 0.09671264225328179",
            "extra": "mean: 7.483432888799996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.78137498623404,
            "unit": "iter/sec",
            "range": "stddev: 0.00020743975719995114",
            "extra": "mean: 10.22689648351522 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 235.94302374210199,
            "unit": "iter/sec",
            "range": "stddev: 0.0002244439934871994",
            "extra": "mean: 4.238311369159413 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 238.93286384977458,
            "unit": "iter/sec",
            "range": "stddev: 0.0002807760293731986",
            "extra": "mean: 4.185276080852297 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4338282.344260805,
            "unit": "iter/sec",
            "range": "stddev: 1.251826662434092e-8",
            "extra": "mean: 230.50597463338167 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.020620597448854,
            "unit": "iter/sec",
            "range": "stddev: 0.000616890103809746",
            "extra": "mean: 110.85711777777381 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1689349.2391867947,
            "unit": "iter/sec",
            "range": "stddev: 1.1138787370805171e-7",
            "extra": "mean: 591.9439135518076 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.779607033061254,
            "unit": "iter/sec",
            "range": "stddev: 0.000693758674691153",
            "extra": "mean: 28.752481275863953 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5442.202437656768,
            "unit": "iter/sec",
            "range": "stddev: 0.00005369950071165047",
            "extra": "mean: 183.74913676135998 usec\nrounds: 1945"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8166751144847182,
            "unit": "iter/sec",
            "range": "stddev: 0.007994814371866802",
            "extra": "mean: 1.224477129600001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 376364.61318169854,
            "unit": "iter/sec",
            "range": "stddev: 3.6499147247009226e-7",
            "extra": "mean: 2.6569979349180404 usec\nrounds: 1937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 124637.48396301897,
            "unit": "iter/sec",
            "range": "stddev: 4.698801815516605e-7",
            "extra": "mean: 8.023268508025312 usec\nrounds: 37038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5537.518315408333,
            "unit": "iter/sec",
            "range": "stddev: 0.00005212184119266089",
            "extra": "mean: 180.58631015584473 usec\nrounds: 2186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4804.716184712821,
            "unit": "iter/sec",
            "range": "stddev: 0.00005075375634785354",
            "extra": "mean: 208.128838740091 usec\nrounds: 3175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 267.5616353645844,
            "unit": "iter/sec",
            "range": "stddev: 0.000013347099904410715",
            "extra": "mean: 3.7374565999994047 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 168.75226395686158,
            "unit": "iter/sec",
            "range": "stddev: 0.000023915205880838484",
            "extra": "mean: 5.925846424529342 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.8988152502387345,
            "unit": "iter/sec",
            "range": "stddev: 0.00018945566144005788",
            "extra": "mean: 204.13098860000218 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.50272066994572,
            "unit": "iter/sec",
            "range": "stddev: 0.00011520502032608458",
            "extra": "mean: 14.814217709675676 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.31339756899149,
            "unit": "iter/sec",
            "range": "stddev: 0.00007086831486393259",
            "extra": "mean: 8.311626304348762 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8242277122992689,
            "unit": "iter/sec",
            "range": "stddev: 0.003972283341411696",
            "extra": "mean: 1.213256949600003 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}