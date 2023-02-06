window.BENCHMARK_DATA = {
  "lastUpdate": 1675702936729,
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
          "id": "e16b91ffac3863688270f82156e1312b67ba2144",
          "message": "fix(ir): properly raise error if literal cannot be coerced to a datatype",
          "timestamp": "2023-02-06T11:55:52-05:00",
          "tree_id": "99d335f6a8fdf20e625e18e4553b0be9d4228645",
          "url": "https://github.com/ibis-project/ibis/commit/e16b91ffac3863688270f82156e1312b67ba2144"
        },
        "date": 1675702863795,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2869.608841399311,
            "unit": "iter/sec",
            "range": "stddev: 0.0032139289035995576",
            "extra": "mean: 348.4795507921451 usec\nrounds: 443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4776.395606439917,
            "unit": "iter/sec",
            "range": "stddev: 0.00004778924827740148",
            "extra": "mean: 209.36289252333293 usec\nrounds: 2354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10578817.012730999,
            "unit": "iter/sec",
            "range": "stddev: 4.284614877293973e-9",
            "extra": "mean: 94.5285279815872 nsec\nrounds: 103083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 228.89245920209748,
            "unit": "iter/sec",
            "range": "stddev: 0.0002127232549601315",
            "extra": "mean: 4.368863891304796 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.62329819598594,
            "unit": "iter/sec",
            "range": "stddev: 0.00011489593653857105",
            "extra": "mean: 6.914515243905254 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.013997390998457,
            "unit": "iter/sec",
            "range": "stddev: 0.00047483903169176375",
            "extra": "mean: 199.44166740000355 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.44780300656885,
            "unit": "iter/sec",
            "range": "stddev: 0.0006663356871773236",
            "extra": "mean: 11.179704435295768 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4502.250762268926,
            "unit": "iter/sec",
            "range": "stddev: 0.00004497308543131741",
            "extra": "mean: 222.11112903361388 usec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.56499939464817,
            "unit": "iter/sec",
            "range": "stddev: 0.00008469802692384858",
            "extra": "mean: 14.584700777785683 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.59714323940532,
            "unit": "iter/sec",
            "range": "stddev: 0.0013359495490726234",
            "extra": "mean: 26.597765517245644 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 240.45860018071951,
            "unit": "iter/sec",
            "range": "stddev: 0.0002190584438489487",
            "extra": "mean: 4.1587200426536555 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1453990.925450431,
            "unit": "iter/sec",
            "range": "stddev: 1.0074977840671613e-7",
            "extra": "mean: 687.7622016039822 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5339.686075770834,
            "unit": "iter/sec",
            "range": "stddev: 0.00006158589122468195",
            "extra": "mean: 187.27692710954747 usec\nrounds: 2003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 137.09652901254088,
            "unit": "iter/sec",
            "range": "stddev: 0.0008003077978048938",
            "extra": "mean: 7.294130691729805 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.813903648015337,
            "unit": "iter/sec",
            "range": "stddev: 0.02173384706042394",
            "extra": "mean: 31.432797781242527 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 207.69445026932098,
            "unit": "iter/sec",
            "range": "stddev: 0.00039795439416875504",
            "extra": "mean: 4.814765145160512 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8294670510990797,
            "unit": "iter/sec",
            "range": "stddev: 0.010288660708492929",
            "extra": "mean: 1.2055933971999935 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7285706994470195,
            "unit": "iter/sec",
            "range": "stddev: 0.0035026213744320427",
            "extra": "mean: 1.3725503931999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4436989.42673569,
            "unit": "iter/sec",
            "range": "stddev: 1.3872943221238816e-8",
            "extra": "mean: 225.3780443951293 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 267.0236702359188,
            "unit": "iter/sec",
            "range": "stddev: 0.00023471909870932255",
            "extra": "mean: 3.7449863493992392 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10733.934562177925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024874488148693653",
            "extra": "mean: 93.16248335662473 usec\nrounds: 5708"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1435.572805088982,
            "unit": "iter/sec",
            "range": "stddev: 0.000023564478089966504",
            "extra": "mean: 696.5860571160766 usec\nrounds: 1068"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5416898.569969693,
            "unit": "iter/sec",
            "range": "stddev: 5.786949472223126e-9",
            "extra": "mean: 184.6074810305246 nsec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1508943.1286740713,
            "unit": "iter/sec",
            "range": "stddev: 1.1807615799497552e-7",
            "extra": "mean: 662.715500006096 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4514.528323696062,
            "unit": "iter/sec",
            "range": "stddev: 0.00008704721740052653",
            "extra": "mean: 221.5070829772303 usec\nrounds: 1868"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 76.25866769405322,
            "unit": "iter/sec",
            "range": "stddev: 0.013412914686246795",
            "extra": "mean: 13.11326345238499 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.10016715010195,
            "unit": "iter/sec",
            "range": "stddev: 0.00018084317014483749",
            "extra": "mean: 11.09875854429942 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 393615.720166578,
            "unit": "iter/sec",
            "range": "stddev: 4.5845353764435585e-7",
            "extra": "mean: 2.540548938382848 usec\nrounds: 1931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18953.538304648217,
            "unit": "iter/sec",
            "range": "stddev: 0.000014907417615539082",
            "extra": "mean: 52.7605971996668 usec\nrounds: 5571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5357706546842476,
            "unit": "iter/sec",
            "range": "stddev: 0.0025600197300973512",
            "extra": "mean: 651.1388904000114 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 49.607815698138864,
            "unit": "iter/sec",
            "range": "stddev: 0.0005121340884614088",
            "extra": "mean: 20.158113916664888 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5824487582792356,
            "unit": "iter/sec",
            "range": "stddev: 0.060494900763898296",
            "extra": "mean: 1.7168892297999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8321138888743698,
            "unit": "iter/sec",
            "range": "stddev: 0.005582462960690319",
            "extra": "mean: 1.2017585734000136 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 116.37897389076763,
            "unit": "iter/sec",
            "range": "stddev: 0.0004136959475914976",
            "extra": "mean: 8.592617433958406 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.55838614832994,
            "unit": "iter/sec",
            "range": "stddev: 0.0002953990166321782",
            "extra": "mean: 12.41335691803368 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5359.829952584987,
            "unit": "iter/sec",
            "range": "stddev: 0.00005471388308648065",
            "extra": "mean: 186.57308325942526 usec\nrounds: 2234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 99.46690711137482,
            "unit": "iter/sec",
            "range": "stddev: 0.00007992565294083424",
            "extra": "mean: 10.053594999996156 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.914701815209273,
            "unit": "iter/sec",
            "range": "stddev: 0.00133985612332695",
            "extra": "mean: 112.17425111111525 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.6562396436887,
            "unit": "iter/sec",
            "range": "stddev: 0.0007213259165613858",
            "extra": "mean: 12.713549548389055 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1985511992584432,
            "unit": "iter/sec",
            "range": "stddev: 0.00355419050955073",
            "extra": "mean: 454.84499079998386 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 153.2571090324642,
            "unit": "iter/sec",
            "range": "stddev: 0.0007857225130516086",
            "extra": "mean: 6.524982797295046 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 135.9894210243257,
            "unit": "iter/sec",
            "range": "stddev: 0.0009154597664218883",
            "extra": "mean: 7.353513181154883 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 245.06761163009355,
            "unit": "iter/sec",
            "range": "stddev: 0.00023432534462638192",
            "extra": "mean: 4.0805065726490435 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10848.937650502783,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016591165653869824",
            "extra": "mean: 92.1749236851459 usec\nrounds: 5438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.48831446501572,
            "unit": "iter/sec",
            "range": "stddev: 0.0001453881278198534",
            "extra": "mean: 7.067721484852795 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 77.9203607394733,
            "unit": "iter/sec",
            "range": "stddev: 0.017265431755273734",
            "extra": "mean: 12.833616150000893 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.42074752653786,
            "unit": "iter/sec",
            "range": "stddev: 0.0008390591227665444",
            "extra": "mean: 29.92153300000087 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.4713888751777,
            "unit": "iter/sec",
            "range": "stddev: 0.0008152599950724345",
            "extra": "mean: 11.176757313951041 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.884599955509934,
            "unit": "iter/sec",
            "range": "stddev: 0.00014030608605250427",
            "extra": "mean: 15.902144574466364 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 155.18740963665354,
            "unit": "iter/sec",
            "range": "stddev: 0.0005458532759364658",
            "extra": "mean: 6.443821714283006 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.6467904250092,
            "unit": "iter/sec",
            "range": "stddev: 0.00003206885230518427",
            "extra": "mean: 5.825917266055087 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.55809179919391,
            "unit": "iter/sec",
            "range": "stddev: 0.0009429091749383613",
            "extra": "mean: 17.37375178261217 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 608897.4946382975,
            "unit": "iter/sec",
            "range": "stddev: 1.5862820113631984e-7",
            "extra": "mean: 1.6423125547495128 usec\nrounds: 20534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1691578.3382473935,
            "unit": "iter/sec",
            "range": "stddev: 9.838230221622294e-8",
            "extra": "mean: 591.1638718642364 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.37111233975058,
            "unit": "iter/sec",
            "range": "stddev: 0.0007505242841387015",
            "extra": "mean: 11.71356413888939 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.11607260273013,
            "unit": "iter/sec",
            "range": "stddev: 0.00011111039914096331",
            "extra": "mean: 6.9873353971629575 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 603.8230551639647,
            "unit": "iter/sec",
            "range": "stddev: 0.00003004498719682004",
            "extra": "mean: 1.6561143060833536 msec\nrounds: 526"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5251.428536164708,
            "unit": "iter/sec",
            "range": "stddev: 0.000051893392601703364",
            "extra": "mean: 190.4243755986315 usec\nrounds: 2295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 269.7212804694552,
            "unit": "iter/sec",
            "range": "stddev: 0.00014217814198835523",
            "extra": "mean: 3.70753096774374 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 259.94491963712954,
            "unit": "iter/sec",
            "range": "stddev: 0.000015048385134383543",
            "extra": "mean: 3.846968817070752 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 241.49604752521662,
            "unit": "iter/sec",
            "range": "stddev: 0.00023425856045672394",
            "extra": "mean: 4.140854520178355 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 134.8984828257413,
            "unit": "iter/sec",
            "range": "stddev: 0.012200266328570453",
            "extra": "mean: 7.412981814567749 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59814.36778574603,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014056260982898612",
            "extra": "mean: 16.718391199619155 usec\nrounds: 11976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4343574.294865539,
            "unit": "iter/sec",
            "range": "stddev: 1.0456522857783606e-8",
            "extra": "mean: 230.2251399687486 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.37401594166023,
            "unit": "iter/sec",
            "range": "stddev: 0.0008388359389170595",
            "extra": "mean: 10.825555106660735 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.671897163427916,
            "unit": "iter/sec",
            "range": "stddev: 0.00045524667126135794",
            "extra": "mean: 73.1427385714239 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 257.25413027219696,
            "unit": "iter/sec",
            "range": "stddev: 0.00011195707543843165",
            "extra": "mean: 3.8872067824213903 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 153.46865756896275,
            "unit": "iter/sec",
            "range": "stddev: 0.000732329348180384",
            "extra": "mean: 6.515988448981119 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 239.53222852314377,
            "unit": "iter/sec",
            "range": "stddev: 0.0002667210000882949",
            "extra": "mean: 4.174803558442155 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 237.78582849512605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002445393822974542",
            "extra": "mean: 4.205465087338025 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 949.179275032673,
            "unit": "iter/sec",
            "range": "stddev: 0.000012415755120947215",
            "extra": "mean: 1.0535417558138083 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1323699682170858,
            "unit": "iter/sec",
            "range": "stddev: 0.10754302908619345",
            "extra": "mean: 7.554583667799989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 123454.82109608394,
            "unit": "iter/sec",
            "range": "stddev: 3.0889508766231776e-7",
            "extra": "mean: 8.100129189946399 usec\nrounds: 34964"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9718.109965807851,
            "unit": "iter/sec",
            "range": "stddev: 0.000019367578995773455",
            "extra": "mean: 102.90066726126736 usec\nrounds: 3360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 404.56091345967377,
            "unit": "iter/sec",
            "range": "stddev: 0.00007999412305049927",
            "extra": "mean: 2.471815656753205 msec\nrounds: 370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 515.6659326139985,
            "unit": "iter/sec",
            "range": "stddev: 0.00003104661120116854",
            "extra": "mean: 1.9392399938674048 msec\nrounds: 489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4061.5619627520587,
            "unit": "iter/sec",
            "range": "stddev: 0.000021674214225392704",
            "extra": "mean: 246.210696567193 usec\nrounds: 1951"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 152.740942254775,
            "unit": "iter/sec",
            "range": "stddev: 0.0007235347333190961",
            "extra": "mean: 6.5470330694436845 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2136057.493330741,
            "unit": "iter/sec",
            "range": "stddev: 2.293229932101436e-8",
            "extra": "mean: 468.15219305806187 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.23675661194228,
            "unit": "iter/sec",
            "range": "stddev: 0.00038972110121488477",
            "extra": "mean: 11.333145487179618 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.53536690740538,
            "unit": "iter/sec",
            "range": "stddev: 0.0006778737542168378",
            "extra": "mean: 40.75749116668703 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.39902904729619,
            "unit": "iter/sec",
            "range": "stddev: 0.00041447287304323974",
            "extra": "mean: 24.75307015000965 msec\nrounds: 40"
          }
        ]
      }
    ]
  }
}