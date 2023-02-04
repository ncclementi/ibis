window.BENCHMARK_DATA = {
  "lastUpdate": 1675537723819,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "2833685dff46239d09986d689498b59804e04d59",
          "message": "feat(dask/pandas): raise OperationNotDefinedError exc for not defined operations",
          "timestamp": "2023-02-04T14:01:58-05:00",
          "tree_id": "05eace10d30b4e9d8f66632858197738c4bf312f",
          "url": "https://github.com/ibis-project/ibis/commit/2833685dff46239d09986d689498b59804e04d59"
        },
        "date": 1675537632216,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 57.51005081360178,
            "unit": "iter/sec",
            "range": "stddev: 0.0007549420994218233",
            "extra": "mean: 17.388264935483047 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 177.20134144714692,
            "unit": "iter/sec",
            "range": "stddev: 0.00033219985621591846",
            "extra": "mean: 5.643298136646814 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 153.1563582684003,
            "unit": "iter/sec",
            "range": "stddev: 0.0010929475100347366",
            "extra": "mean: 6.529275123188425 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 74.44267397383423,
            "unit": "iter/sec",
            "range": "stddev: 0.0010786368222648174",
            "extra": "mean: 13.433155294119187 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.38415395587501205,
            "unit": "iter/sec",
            "range": "stddev: 0.05439113448916396",
            "extra": "mean: 2.603123005000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 93876.15718381385,
            "unit": "iter/sec",
            "range": "stddev: 0.000005683459970407296",
            "extra": "mean: 10.65233207237013 usec\nrounds: 25642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 57.584034027741765,
            "unit": "iter/sec",
            "range": "stddev: 0.0011254390025825832",
            "extra": "mean: 17.365924720005523 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 58.745380000799955,
            "unit": "iter/sec",
            "range": "stddev: 0.0012914684174400498",
            "extra": "mean: 17.022615224999527 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.540296868885864,
            "unit": "iter/sec",
            "range": "stddev: 0.0009258490763485421",
            "extra": "mean: 60.4584070000044 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 352.83034372125434,
            "unit": "iter/sec",
            "range": "stddev: 0.0004030305985129588",
            "extra": "mean: 2.8342233535050703 msec\nrounds: 314"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2420.4832005405733,
            "unit": "iter/sec",
            "range": "stddev: 0.002719708777868387",
            "extra": "mean: 413.1406488492328 usec\nrounds: 1347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 988.7853307601818,
            "unit": "iter/sec",
            "range": "stddev: 0.00029049181798441125",
            "extra": "mean: 1.0113418644987344 msec\nrounds: 738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 55.25670977115611,
            "unit": "iter/sec",
            "range": "stddev: 0.0009486950738434046",
            "extra": "mean: 18.097349699999654 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2749.91184328387,
            "unit": "iter/sec",
            "range": "stddev: 0.00007856493685658652",
            "extra": "mean: 363.64802109649713 usec\nrounds: 474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 265.45655112361067,
            "unit": "iter/sec",
            "range": "stddev: 0.0004650062081167994",
            "extra": "mean: 3.7670948249996172 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 157.98258377925654,
            "unit": "iter/sec",
            "range": "stddev: 0.001047972643819881",
            "extra": "mean: 6.329811654411632 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 43.585469958577065,
            "unit": "iter/sec",
            "range": "stddev: 0.0015667321445180437",
            "extra": "mean: 22.943425892857963 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 56.10264989648254,
            "unit": "iter/sec",
            "range": "stddev: 0.0006986648381086617",
            "extra": "mean: 17.824469999993653 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3078986.82200619,
            "unit": "iter/sec",
            "range": "stddev: 8.53797257404547e-7",
            "extra": "mean: 324.78216303230596 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.9404335456124646,
            "unit": "iter/sec",
            "range": "stddev: 0.03274250089983768",
            "extra": "mean: 1.0633393551999917 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1140140.0187768461,
            "unit": "iter/sec",
            "range": "stddev: 0.000002577013050277037",
            "extra": "mean: 877.0852557853467 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2987.224423516313,
            "unit": "iter/sec",
            "range": "stddev: 0.00015915637526225728",
            "extra": "mean: 334.75891269758796 usec\nrounds: 756"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3215.6629729032807,
            "unit": "iter/sec",
            "range": "stddev: 0.00018502488460904346",
            "extra": "mean: 310.9778631736224 usec\nrounds: 2653"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.513307841968334,
            "unit": "iter/sec",
            "range": "stddev: 0.019994940968348873",
            "extra": "mean: 1.948148690200003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 194.30446736532232,
            "unit": "iter/sec",
            "range": "stddev: 0.0005740475616951773",
            "extra": "mean: 5.146562060870406 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 137.34822185650168,
            "unit": "iter/sec",
            "range": "stddev: 0.0009416769998387275",
            "extra": "mean: 7.280764078946558 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 99.8026936864863,
            "unit": "iter/sec",
            "range": "stddev: 0.0006119450254195855",
            "extra": "mean: 10.019769638095493 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 150.20695885431243,
            "unit": "iter/sec",
            "range": "stddev: 0.0009329979291550147",
            "extra": "mean: 6.65748116883128 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 25.224359325237206,
            "unit": "iter/sec",
            "range": "stddev: 0.0019457489565740736",
            "extra": "mean: 39.644217999998546 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3092.0469743869166,
            "unit": "iter/sec",
            "range": "stddev: 0.00013514467333733803",
            "extra": "mean: 323.4103518748377 usec\nrounds: 1600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.028594327923578,
            "unit": "iter/sec",
            "range": "stddev: 0.006877882543522727",
            "extra": "mean: 110.75921275000766 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 3738790.204653736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011764138093334333",
            "extra": "mean: 267.4661976898076 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1140066.1271714093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027830513105575847",
            "extra": "mean: 877.1421026963375 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12036.358000381511,
            "unit": "iter/sec",
            "range": "stddev: 0.0000731421701894493",
            "extra": "mean: 83.08160989963106 usec\nrounds: 3899"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.13134866825795,
            "unit": "iter/sec",
            "range": "stddev: 0.0006495437935169344",
            "extra": "mean: 41.43987200000083 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5088343368259016,
            "unit": "iter/sec",
            "range": "stddev: 0.03535233755115299",
            "extra": "mean: 1.9652761765999913 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 154.91488356640625,
            "unit": "iter/sec",
            "range": "stddev: 0.0006090400330239554",
            "extra": "mean: 6.455157677417981 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 7984514.971732183,
            "unit": "iter/sec",
            "range": "stddev: 2.9020971769585835e-7",
            "extra": "mean: 125.24242280730307 nsec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.65594226126005,
            "unit": "iter/sec",
            "range": "stddev: 0.001678169414914403",
            "extra": "mean: 9.837103249999473 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.07835175981748797,
            "unit": "iter/sec",
            "range": "stddev: 0.11294385385577078",
            "extra": "mean: 12.762955194999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.20009420790558,
            "unit": "iter/sec",
            "range": "stddev: 0.001003590285333946",
            "extra": "mean: 11.73707622388065 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 71.73471867163084,
            "unit": "iter/sec",
            "range": "stddev: 0.0008784714675701405",
            "extra": "mean: 13.940251227269023 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 26.350413570396125,
            "unit": "iter/sec",
            "range": "stddev: 0.002506691848018422",
            "extra": "mean: 37.95006850000522 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 151.99471955142533,
            "unit": "iter/sec",
            "range": "stddev: 0.0009726415273094874",
            "extra": "mean: 6.579175927632563 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.74235447608234,
            "unit": "iter/sec",
            "range": "stddev: 0.0014617408670647134",
            "extra": "mean: 9.733084326316394 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2782.656866133844,
            "unit": "iter/sec",
            "range": "stddev: 0.00018733975945240173",
            "extra": "mean: 359.3687788711714 usec\nrounds: 1931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 60.7228272908149,
            "unit": "iter/sec",
            "range": "stddev: 0.00043102967701675574",
            "extra": "mean: 16.468271399992318 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4482229670046042,
            "unit": "iter/sec",
            "range": "stddev: 0.08155003989222193",
            "extra": "mean: 2.231032485200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 195.4818223517361,
            "unit": "iter/sec",
            "range": "stddev: 0.000502868395627061",
            "extra": "mean: 5.115565160839719 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 42.171163648190024,
            "unit": "iter/sec",
            "range": "stddev: 0.0024671072050198835",
            "extra": "mean: 23.71288609302864 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.4709198831675596,
            "unit": "iter/sec",
            "range": "stddev: 0.015792839517290422",
            "extra": "mean: 679.8466805999965 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 60.991471572870026,
            "unit": "iter/sec",
            "range": "stddev: 0.0016128832692385304",
            "extra": "mean: 16.39573491525356 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3307465.215655194,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011276870033989178",
            "extra": "mean: 302.3463392047308 nsec\nrounds: 185151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 97.26033356388497,
            "unit": "iter/sec",
            "range": "stddev: 0.0014251834674765085",
            "extra": "mean: 10.281683841266645 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 61.393935028002474,
            "unit": "iter/sec",
            "range": "stddev: 0.0014148261849251686",
            "extra": "mean: 16.28825387302327 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.007203075872161,
            "unit": "iter/sec",
            "range": "stddev: 0.0031212574044213563",
            "extra": "mean: 166.46682114285178 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 443.332118888768,
            "unit": "iter/sec",
            "range": "stddev: 0.0005421260747128131",
            "extra": "mean: 2.25564527674319 msec\nrounds: 430"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 102.65535703472264,
            "unit": "iter/sec",
            "range": "stddev: 0.0009579023200524286",
            "extra": "mean: 9.741332833334312 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 304061.45281038864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030371320489756984",
            "extra": "mean: 3.28880886004184 usec\nrounds: 1580"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 103.149393226038,
            "unit": "iter/sec",
            "range": "stddev: 0.001253945652203899",
            "extra": "mean: 9.694676514564025 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6251.5834160491395,
            "unit": "iter/sec",
            "range": "stddev: 0.00004908299248634896",
            "extra": "mean: 159.95947481605828 usec\nrounds: 3673"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 403776.4556126058,
            "unit": "iter/sec",
            "range": "stddev: 0.00002305299540468953",
            "extra": "mean: 2.4766179060213145 usec\nrounds: 18519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1150265.1956710883,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043288131339229416",
            "extra": "mean: 869.3647375956459 nsec\nrounds: 80000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1260154.899929738,
            "unit": "iter/sec",
            "range": "stddev: 0.000002263816283512092",
            "extra": "mean: 793.5532370312227 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 32.7160832171042,
            "unit": "iter/sec",
            "range": "stddev: 0.0023002285862104145",
            "extra": "mean: 30.56600612499949 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 107.56282119623492,
            "unit": "iter/sec",
            "range": "stddev: 0.001195220886573764",
            "extra": "mean: 9.296892633334943 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 62.37437022158187,
            "unit": "iter/sec",
            "range": "stddev: 0.0014301598447718456",
            "extra": "mean: 16.032225999998868 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 48.83272057262311,
            "unit": "iter/sec",
            "range": "stddev: 0.001406243739142333",
            "extra": "mean: 20.478072658532685 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 42126.56827943778,
            "unit": "iter/sec",
            "range": "stddev: 0.00004323682434750517",
            "extra": "mean: 23.737988657578494 usec\nrounds: 7582"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 180.1616312540739,
            "unit": "iter/sec",
            "range": "stddev: 0.0005322926535229293",
            "extra": "mean: 5.550571412121288 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 676.0646805613794,
            "unit": "iter/sec",
            "range": "stddev: 0.00015735190682569862",
            "extra": "mean: 1.4791484139796158 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3366.811383421514,
            "unit": "iter/sec",
            "range": "stddev: 0.00026849286226610623",
            "extra": "mean: 297.01693564542734 usec\nrounds: 1989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 25.748821908746677,
            "unit": "iter/sec",
            "range": "stddev: 0.0018616100699378971",
            "extra": "mean: 38.836728279995896 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7556.222443172125,
            "unit": "iter/sec",
            "range": "stddev: 0.000049748988269940064",
            "extra": "mean: 132.34126013635418 usec\nrounds: 4267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 100.03198121375596,
            "unit": "iter/sec",
            "range": "stddev: 0.0008738034415798631",
            "extra": "mean: 9.996802901095439 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 149.86076975589648,
            "unit": "iter/sec",
            "range": "stddev: 0.0005796645215967562",
            "extra": "mean: 6.672860426573737 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2668.1303948370833,
            "unit": "iter/sec",
            "range": "stddev: 0.004091488942961738",
            "extra": "mean: 374.7942761474595 usec\nrounds: 2419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.55232226934578,
            "unit": "iter/sec",
            "range": "stddev: 0.001262140224736948",
            "extra": "mean: 10.250909222221905 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7254.918196895047,
            "unit": "iter/sec",
            "range": "stddev: 0.00004927071749615583",
            "extra": "mean: 137.83752936428408 usec\nrounds: 3763"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.4026806847892184,
            "unit": "iter/sec",
            "range": "stddev: 0.003329102977614425",
            "extra": "mean: 293.8859365999974 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 105.39870398697417,
            "unit": "iter/sec",
            "range": "stddev: 0.0012884032487666666",
            "extra": "mean: 9.487782697248216 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 106.71605255574912,
            "unit": "iter/sec",
            "range": "stddev: 0.0007577956614636208",
            "extra": "mean: 9.370661452058432 msec\nrounds: 73"
          }
        ]
      }
    ]
  }
}