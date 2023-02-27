window.BENCHMARK_DATA = {
  "lastUpdate": 1677502942806,
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
          "id": "4451375b063faec77929853442dc4a79c1787f0f",
          "message": "refactor(common): move `frozendict` and `DotDict` to `ibis.common.collections`",
          "timestamp": "2023-02-27T07:54:06-05:00",
          "tree_id": "c6b87a67723ad412935c7aec0aecf8594ecc93df",
          "url": "https://github.com/ibis-project/ibis/commit/4451375b063faec77929853442dc4a79c1787f0f"
        },
        "date": 1677502858253,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.5221906381601,
            "unit": "iter/sec",
            "range": "stddev: 0.0001204738959221351",
            "extra": "mean: 14.383896577780005 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9155519295939372,
            "unit": "iter/sec",
            "range": "stddev: 0.004983423839236539",
            "extra": "mean: 1.0922373353999888 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.65026473509261,
            "unit": "iter/sec",
            "range": "stddev: 0.005819313643351398",
            "extra": "mean: 20.986242270833344 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 305.53820005067087,
            "unit": "iter/sec",
            "range": "stddev: 0.0001952959176543914",
            "extra": "mean: 3.2729131736527823 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5716.2072094492805,
            "unit": "iter/sec",
            "range": "stddev: 0.000040454667686607374",
            "extra": "mean: 174.94117399154666 usec\nrounds: 3322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5874.541161775841,
            "unit": "iter/sec",
            "range": "stddev: 0.00004359195616354704",
            "extra": "mean: 170.22606063376455 usec\nrounds: 3315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5840.745087620316,
            "unit": "iter/sec",
            "range": "stddev: 0.00004304842403463368",
            "extra": "mean: 171.21103301007582 usec\nrounds: 515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 134.26131266565193,
            "unit": "iter/sec",
            "range": "stddev: 0.0004545474280418064",
            "extra": "mean: 7.448161947368105 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1653679.6524139724,
            "unit": "iter/sec",
            "range": "stddev: 7.659215106415553e-8",
            "extra": "mean: 604.7120423476468 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5344.25797462869,
            "unit": "iter/sec",
            "range": "stddev: 0.00004270910620453903",
            "extra": "mean: 187.11671568764012 usec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 142.94912107182566,
            "unit": "iter/sec",
            "range": "stddev: 0.0005321583462908199",
            "extra": "mean: 6.995495967390691 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.15825597611506,
            "unit": "iter/sec",
            "range": "stddev: 0.0005461852922863719",
            "extra": "mean: 10.620417611108557 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6290220.639549295,
            "unit": "iter/sec",
            "range": "stddev: 1.0990357835548321e-8",
            "extra": "mean: 158.97693535756778 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12075940.47612166,
            "unit": "iter/sec",
            "range": "stddev: 6.950622529627928e-9",
            "extra": "mean: 82.8092852872681 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 142.3789420118974,
            "unit": "iter/sec",
            "range": "stddev: 0.0005303058233356524",
            "extra": "mean: 7.023510540740205 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.97968528714172,
            "unit": "iter/sec",
            "range": "stddev: 0.00007391884989295024",
            "extra": "mean: 13.336945816328868 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 549.051637393886,
            "unit": "iter/sec",
            "range": "stddev: 0.00004405233101588288",
            "extra": "mean: 1.8213223163245147 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5338.385801705279,
            "unit": "iter/sec",
            "range": "stddev: 0.00004494748707152794",
            "extra": "mean: 187.32254227121666 usec\nrounds: 1999"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.25220856774155,
            "unit": "iter/sec",
            "range": "stddev: 0.000025158615403205346",
            "extra": "mean: 3.074537155038952 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 727534.7772742821,
            "unit": "iter/sec",
            "range": "stddev: 1.6676231973567192e-7",
            "extra": "mean: 1.3745047401672152 usec\nrounds: 23311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1767.4718036933687,
            "unit": "iter/sec",
            "range": "stddev: 0.000008593955432185535",
            "extra": "mean: 565.7798884883856 usec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.66130310145047,
            "unit": "iter/sec",
            "range": "stddev: 0.0006567173997327647",
            "extra": "mean: 26.552453517241315 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13671.965871627262,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016312078665478583",
            "extra": "mean: 73.14237099400967 usec\nrounds: 7364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 313.89448757926596,
            "unit": "iter/sec",
            "range": "stddev: 0.00019612612396500298",
            "extra": "mean: 3.1857838846165647 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9526.39618200377,
            "unit": "iter/sec",
            "range": "stddev: 0.001442634904145293",
            "extra": "mean: 104.97148983674343 usec\nrounds: 5510"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 135.3482737740799,
            "unit": "iter/sec",
            "range": "stddev: 0.00004640651639214038",
            "extra": "mean: 7.3883469076907184 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2448122.210462077,
            "unit": "iter/sec",
            "range": "stddev: 1.7592673854931893e-8",
            "extra": "mean: 408.47633983569864 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.40123227007804,
            "unit": "iter/sec",
            "range": "stddev: 0.0005454490091274636",
            "extra": "mean: 9.310880134832493 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 311.6683407072903,
            "unit": "iter/sec",
            "range": "stddev: 0.00018853012009971008",
            "extra": "mean: 3.208538915857259 msec\nrounds: 309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 144.49432235930402,
            "unit": "iter/sec",
            "range": "stddev: 0.000525946479285657",
            "extra": "mean: 6.920687150000049 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5457.95246906294,
            "unit": "iter/sec",
            "range": "stddev: 0.000050077539127646994",
            "extra": "mean: 183.21889127255213 usec\nrounds: 2750"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.30875299258635,
            "unit": "iter/sec",
            "range": "stddev: 0.00005721592543765248",
            "extra": "mean: 8.452459980392689 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.20929053091125,
            "unit": "iter/sec",
            "range": "stddev: 0.00007052746350388044",
            "extra": "mean: 10.394006592104619 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7029395.496388747,
            "unit": "iter/sec",
            "range": "stddev: 7.722497058028681e-9",
            "extra": "mean: 142.2597434607414 nsec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.35302823990767,
            "unit": "iter/sec",
            "range": "stddev: 0.00006563592523016462",
            "extra": "mean: 5.145276145456344 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 740.0677516410732,
            "unit": "iter/sec",
            "range": "stddev: 0.00001001957838287205",
            "extra": "mean: 1.3512276379865715 msec\nrounds: 616"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.49526232259195,
            "unit": "iter/sec",
            "range": "stddev: 0.0005916192182623593",
            "extra": "mean: 24.694246749998428 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1191.9749639895804,
            "unit": "iter/sec",
            "range": "stddev: 0.000048495231846630255",
            "extra": "mean: 838.9437951389232 usec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.182730103223818,
            "unit": "iter/sec",
            "range": "stddev: 0.00026651773882060357",
            "extra": "mean: 35.48272280000333 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 287.65833140047744,
            "unit": "iter/sec",
            "range": "stddev: 0.00023976869706798627",
            "extra": "mean: 3.476346383334198 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 316.5771542106733,
            "unit": "iter/sec",
            "range": "stddev: 0.00019881364346940045",
            "extra": "mean: 3.158787634228741 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 299.1024221819386,
            "unit": "iter/sec",
            "range": "stddev: 0.000042147934632100976",
            "extra": "mean: 3.3433363484823877 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 321.2244407196917,
            "unit": "iter/sec",
            "range": "stddev: 0.00018555612946265663",
            "extra": "mean: 3.113088150327342 msec\nrounds: 306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.139178753320838,
            "unit": "iter/sec",
            "range": "stddev: 0.030145979290028557",
            "extra": "mean: 70.72546556249826 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 109.94637373866226,
            "unit": "iter/sec",
            "range": "stddev: 0.00007591837207918525",
            "extra": "mean: 9.095343175000536 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5748311.677985506,
            "unit": "iter/sec",
            "range": "stddev: 1.289769598182621e-8",
            "extra": "mean: 173.96412303639863 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6805382061338133,
            "unit": "iter/sec",
            "range": "stddev: 0.05026841648966837",
            "extra": "mean: 1.469425215199999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.49334174776962,
            "unit": "iter/sec",
            "range": "stddev: 0.0005167033396280426",
            "extra": "mean: 9.662457343750338 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.97414477711423,
            "unit": "iter/sec",
            "range": "stddev: 0.0006045232318727227",
            "extra": "mean: 9.348053233643961 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1838987.4594526133,
            "unit": "iter/sec",
            "range": "stddev: 8.85874513343867e-8",
            "extra": "mean: 543.7774982422428 nsec\nrounds: 55249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.84805295745083,
            "unit": "iter/sec",
            "range": "stddev: 0.00009274876954980252",
            "extra": "mean: 20.89949200000376 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5325.429391659511,
            "unit": "iter/sec",
            "range": "stddev: 0.00002583645421419562",
            "extra": "mean: 187.7782853653384 usec\nrounds: 2453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.4367583683125,
            "unit": "iter/sec",
            "range": "stddev: 0.000521355172926193",
            "extra": "mean: 9.484358353533523 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138161.46747840717,
            "unit": "iter/sec",
            "range": "stddev: 3.6918579631781537e-7",
            "extra": "mean: 7.237908066923848 usec\nrounds: 40486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.40050451276724,
            "unit": "iter/sec",
            "range": "stddev: 0.000032525842948841274",
            "extra": "mean: 10.060311111112696 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8510439628721057,
            "unit": "iter/sec",
            "range": "stddev: 0.0012203992527916629",
            "extra": "mean: 1.1750274294000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18166174295607632,
            "unit": "iter/sec",
            "range": "stddev: 0.14413204521522366",
            "extra": "mean: 5.5047363508000045 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9191625322659401,
            "unit": "iter/sec",
            "range": "stddev: 0.002132502786445726",
            "extra": "mean: 1.0879468699999961 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11670.206815950984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015143294763797973",
            "extra": "mean: 85.68828434412899 usec\nrounds: 5838"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 141.80299810744916,
            "unit": "iter/sec",
            "range": "stddev: 0.000038410567253057826",
            "extra": "mean: 7.052037075000802 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.3739672017063,
            "unit": "iter/sec",
            "range": "stddev: 0.00005793286793648115",
            "extra": "mean: 6.19678636734554 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.73932698208213,
            "unit": "iter/sec",
            "range": "stddev: 0.00006512993637017453",
            "extra": "mean: 16.739391796294157 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 505047.75077469635,
            "unit": "iter/sec",
            "range": "stddev: 2.0029923704707648e-7",
            "extra": "mean: 1.9800107979217665 usec\nrounds: 1945"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 136.1379667740211,
            "unit": "iter/sec",
            "range": "stddev: 0.0005111978579804043",
            "extra": "mean: 7.3454894596738445 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.6560909966470385,
            "unit": "iter/sec",
            "range": "stddev: 0.000247737024356924",
            "extra": "mean: 176.8005501666797 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 143.19851757495678,
            "unit": "iter/sec",
            "range": "stddev: 0.0005439700365753496",
            "extra": "mean: 6.983312515624007 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 143.60014411542073,
            "unit": "iter/sec",
            "range": "stddev: 0.0005767061746406382",
            "extra": "mean: 6.963781312059376 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.00499189455368,
            "unit": "iter/sec",
            "range": "stddev: 0.0005715928483202736",
            "extra": "mean: 9.708267352942476 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 195.78351898005857,
            "unit": "iter/sec",
            "range": "stddev: 0.00013009779713355033",
            "extra": "mean: 5.107682225804995 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8085.374266779169,
            "unit": "iter/sec",
            "range": "stddev: 0.000010759726151612085",
            "extra": "mean: 123.68011263359273 usec\nrounds: 4963"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2432689.8256753194,
            "unit": "iter/sec",
            "range": "stddev: 2.1728902990847903e-8",
            "extra": "mean: 411.0676130782652 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.38767486663559,
            "unit": "iter/sec",
            "range": "stddev: 0.00018948443062723457",
            "extra": "mean: 13.62626628813706 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71560.33566425902,
            "unit": "iter/sec",
            "range": "stddev: 3.9351164352312825e-7",
            "extra": "mean: 13.974221762901154 usec\nrounds: 13298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5820.653877511886,
            "unit": "iter/sec",
            "range": "stddev: 0.000050065060994289374",
            "extra": "mean: 171.80200387167892 usec\nrounds: 2583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.29526509110882,
            "unit": "iter/sec",
            "range": "stddev: 0.000529188312245712",
            "extra": "mean: 9.775623525774673 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.66030779859437,
            "unit": "iter/sec",
            "range": "stddev: 0.00003327222049267776",
            "extra": "mean: 6.507861492186517 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8069923609864147,
            "unit": "iter/sec",
            "range": "stddev: 0.0017440863648364674",
            "extra": "mean: 553.4057705999999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.86237880262183,
            "unit": "iter/sec",
            "range": "stddev: 0.0002136713245933838",
            "extra": "mean: 3.3127679042570195 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.507241295542796,
            "unit": "iter/sec",
            "range": "stddev: 0.00037151616077784927",
            "extra": "mean: 95.17245981818303 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 356.4996627927252,
            "unit": "iter/sec",
            "range": "stddev: 0.000029931986084897695",
            "extra": "mean: 2.8050517416096876 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 690.1564697904512,
            "unit": "iter/sec",
            "range": "stddev: 0.000015443389958744597",
            "extra": "mean: 1.4489467878257014 msec\nrounds: 575"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.500156716073252,
            "unit": "iter/sec",
            "range": "stddev: 0.0024857307938182752",
            "extra": "mean: 399.9749270000166 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}