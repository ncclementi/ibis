window.BENCHMARK_DATA = {
  "lastUpdate": 1675515755698,
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
          "id": "66540ebd20713e7d5bb1efe9f530d3ef5d69a81f",
          "message": "chore(flake/nixpkgs): `7095515e` -> `a59fe7ab`",
          "timestamp": "2023-02-04T12:57:45Z",
          "tree_id": "767bd21f37563b431fa5dd421007463f407f77de",
          "url": "https://github.com/ibis-project/ibis/commit/66540ebd20713e7d5bb1efe9f530d3ef5d69a81f"
        },
        "date": 1675515675737,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.40460813716024,
            "unit": "iter/sec",
            "range": "stddev: 0.000096229662400508",
            "extra": "mean: 7.0222446666671585 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.57191731525062,
            "unit": "iter/sec",
            "range": "stddev: 0.009242952597774731",
            "extra": "mean: 28.112063545455094 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 277.7037032632543,
            "unit": "iter/sec",
            "range": "stddev: 0.00009234769778498724",
            "extra": "mean: 3.600960261779555 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 253.51569461044184,
            "unit": "iter/sec",
            "range": "stddev: 0.00018371222261367442",
            "extra": "mean: 3.9445289631343075 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 114635.08309810713,
            "unit": "iter/sec",
            "range": "stddev: 3.9746776778420785e-7",
            "extra": "mean: 8.72333297079899 usec\nrounds: 34015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 150.11124330670745,
            "unit": "iter/sec",
            "range": "stddev: 0.00010676341945605461",
            "extra": "mean: 6.661726183672991 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 81.56581520489449,
            "unit": "iter/sec",
            "range": "stddev: 0.007376787459302444",
            "extra": "mean: 12.260038074627044 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15585145548913729,
            "unit": "iter/sec",
            "range": "stddev: 0.03598691437846352",
            "extra": "mean: 6.416366127999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 69.05584568931312,
            "unit": "iter/sec",
            "range": "stddev: 0.00010317035732870611",
            "extra": "mean: 14.481033285712945 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19306.788602253804,
            "unit": "iter/sec",
            "range": "stddev: 0.00001608692456726819",
            "extra": "mean: 51.79525298595043 usec\nrounds: 6028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10401.027760462961,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025215898164176385",
            "extra": "mean: 96.14434486957748 usec\nrounds: 4883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5697310199026353,
            "unit": "iter/sec",
            "range": "stddev: 0.001361284944333409",
            "extra": "mean: 637.0518180000204 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.80554518206252,
            "unit": "iter/sec",
            "range": "stddev: 0.00004285247823645994",
            "extra": "mean: 10.437809190477088 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.04612222870102,
            "unit": "iter/sec",
            "range": "stddev: 0.00007723937206554718",
            "extra": "mean: 14.6959145833326 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.060729423630218,
            "unit": "iter/sec",
            "range": "stddev: 0.00019293056136123678",
            "extra": "mean: 197.59997349999972 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.00961734215969,
            "unit": "iter/sec",
            "range": "stddev: 0.0002740098144855761",
            "extra": "mean: 21.2722429268355 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.226006017027599,
            "unit": "iter/sec",
            "range": "stddev: 0.0002009002232827831",
            "extra": "mean: 108.38926380000089 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6044.325840060172,
            "unit": "iter/sec",
            "range": "stddev: 0.000046504423245430525",
            "extra": "mean: 165.444422829138 usec\nrounds: 622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4577.351300190153,
            "unit": "iter/sec",
            "range": "stddev: 0.000019835500116512587",
            "extra": "mean: 218.46695488687047 usec\nrounds: 1463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 151.95128633806746,
            "unit": "iter/sec",
            "range": "stddev: 0.0005807324092302404",
            "extra": "mean: 6.581056495797996 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 515.2184787569344,
            "unit": "iter/sec",
            "range": "stddev: 0.00010992181198839042",
            "extra": "mean: 1.9409241733966844 msec\nrounds: 421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 124.35424440151526,
            "unit": "iter/sec",
            "range": "stddev: 0.0002801900513314028",
            "extra": "mean: 8.04154297115262 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5844.274408179088,
            "unit": "iter/sec",
            "range": "stddev: 0.00005012548827927595",
            "extra": "mean: 171.10763974403656 usec\nrounds: 2501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1944223.1729533672,
            "unit": "iter/sec",
            "range": "stddev: 3.245703479336599e-8",
            "extra": "mean: 514.3442449979196 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.51308817648096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000713412024039274",
            "extra": "mean: 9.850946493337839 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 413.6783929199975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000237867493802605",
            "extra": "mean: 2.4173367937865513 msec\nrounds: 354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5235.492550639141,
            "unit": "iter/sec",
            "range": "stddev: 0.00005200543893474056",
            "extra": "mean: 191.0039963437483 usec\nrounds: 2462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10762.95980764784,
            "unit": "iter/sec",
            "range": "stddev: 0.000001583135869800333",
            "extra": "mean: 92.9112454075532 usec\nrounds: 5444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1528649.8949884593,
            "unit": "iter/sec",
            "range": "stddev: 7.077609710800554e-7",
            "extra": "mean: 654.1720267527637 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.50256988355987,
            "unit": "iter/sec",
            "range": "stddev: 0.0006219120658941072",
            "extra": "mean: 10.81051046753379 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.36841749082171,
            "unit": "iter/sec",
            "range": "stddev: 0.015286940601497843",
            "extra": "mean: 12.760242352949351 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.266568929736282,
            "unit": "iter/sec",
            "range": "stddev: 0.0034859469237903487",
            "extra": "mean: 441.1954946000037 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 243.8360506567691,
            "unit": "iter/sec",
            "range": "stddev: 0.0002198877053249452",
            "extra": "mean: 4.10111629230589 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 90.38223344934839,
            "unit": "iter/sec",
            "range": "stddev: 0.0005607404262513646",
            "extra": "mean: 11.064121363635206 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 147.39950419765108,
            "unit": "iter/sec",
            "range": "stddev: 0.0005954108447258742",
            "extra": "mean: 6.78428333557404 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.10778985553219,
            "unit": "iter/sec",
            "range": "stddev: 0.0000819451353947182",
            "extra": "mean: 13.67843292727209 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 254.60762062468123,
            "unit": "iter/sec",
            "range": "stddev: 0.00024598055065828744",
            "extra": "mean: 3.9276122118674 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 146.16034966199965,
            "unit": "iter/sec",
            "range": "stddev: 0.00011088294300932547",
            "extra": "mean: 6.841800818844037 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.61736058180155,
            "unit": "iter/sec",
            "range": "stddev: 0.00020042224386123832",
            "extra": "mean: 22.41280046511488 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.954905462054462,
            "unit": "iter/sec",
            "range": "stddev: 0.0006231577409997453",
            "extra": "mean: 37.09899860000405 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 254.97504943301834,
            "unit": "iter/sec",
            "range": "stddev: 0.0001931970394672773",
            "extra": "mean: 3.9219523722955443 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 96.49631368275169,
            "unit": "iter/sec",
            "range": "stddev: 0.0005712325352796454",
            "extra": "mean: 10.363090172415008 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1527908.0014290854,
            "unit": "iter/sec",
            "range": "stddev: 1.402111422144155e-7",
            "extra": "mean: 654.4896676139391 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11789017.214786036,
            "unit": "iter/sec",
            "range": "stddev: 3.0838560384083894e-9",
            "extra": "mean: 84.82471284758886 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.510997379367,
            "unit": "iter/sec",
            "range": "stddev: 0.0005934065406048511",
            "extra": "mean: 10.361513476740726 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 988.0154857241527,
            "unit": "iter/sec",
            "range": "stddev: 0.000024021618011137443",
            "extra": "mean: 1.012129885056471 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7379422474938336,
            "unit": "iter/sec",
            "range": "stddev: 0.0027887008337358164",
            "extra": "mean: 1.3551195956000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.3968310657479,
            "unit": "iter/sec",
            "range": "stddev: 0.0006804215643170675",
            "extra": "mean: 28.251116551720365 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 252.3146026156817,
            "unit": "iter/sec",
            "range": "stddev: 0.0002050008812467534",
            "extra": "mean: 3.9633060854712836 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 160.60139815726583,
            "unit": "iter/sec",
            "range": "stddev: 0.0006120855427574997",
            "extra": "mean: 6.226595854543988 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4569908.025328707,
            "unit": "iter/sec",
            "range": "stddev: 9.590366346840046e-9",
            "extra": "mean: 218.82278471629832 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 509954.3594268583,
            "unit": "iter/sec",
            "range": "stddev: 2.6625855753462693e-7",
            "extra": "mean: 1.960959802606468 usec\nrounds: 21693"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 164.8209250985262,
            "unit": "iter/sec",
            "range": "stddev: 0.0006012391996996681",
            "extra": "mean: 6.067190797541166 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4371078.9191321945,
            "unit": "iter/sec",
            "range": "stddev: 1.1621413426637242e-8",
            "extra": "mean: 228.77646880801288 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.96490640071977,
            "unit": "iter/sec",
            "range": "stddev: 0.000008593734446238703",
            "extra": "mean: 3.7740847027026647 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 263.83338208598343,
            "unit": "iter/sec",
            "range": "stddev: 0.0001935120192436131",
            "extra": "mean: 3.7902709357457254 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6000388739744817,
            "unit": "iter/sec",
            "range": "stddev: 0.002072097480354712",
            "extra": "mean: 1.6665586903999952 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6107.30930126784,
            "unit": "iter/sec",
            "range": "stddev: 0.00004383460854304763",
            "extra": "mean: 163.73822753539042 usec\nrounds: 2070"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 226.5371320051201,
            "unit": "iter/sec",
            "range": "stddev: 0.00037332283034103783",
            "extra": "mean: 4.41428736714738 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6030.591338587024,
            "unit": "iter/sec",
            "range": "stddev: 0.00004738009944021094",
            "extra": "mean: 165.82121783007457 usec\nrounds: 3466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5208.353963543258,
            "unit": "iter/sec",
            "range": "stddev: 0.00004825892273268213",
            "extra": "mean: 191.99923949095373 usec\nrounds: 3069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 331.09838117331543,
            "unit": "iter/sec",
            "range": "stddev: 0.00004866004243009062",
            "extra": "mean: 3.0202503450977125 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8689789766685859,
            "unit": "iter/sec",
            "range": "stddev: 0.002395508434795261",
            "extra": "mean: 1.150775826399979 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5523161.821772087,
            "unit": "iter/sec",
            "range": "stddev: 4.447699618455683e-9",
            "extra": "mean: 181.05571270032618 nsec\nrounds: 54055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 164.23277769782496,
            "unit": "iter/sec",
            "range": "stddev: 0.0006438756475354634",
            "extra": "mean: 6.0889185095555 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.29053782422025,
            "unit": "iter/sec",
            "range": "stddev: 0.00007438626804483588",
            "extra": "mean: 5.907004684681974 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9665.848637415336,
            "unit": "iter/sec",
            "range": "stddev: 0.000013644622021407292",
            "extra": "mean: 103.45703078042422 usec\nrounds: 4061"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.6266215901161,
            "unit": "iter/sec",
            "range": "stddev: 0.0005547243008976137",
            "extra": "mean: 11.034285317649552 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57291.803798843306,
            "unit": "iter/sec",
            "range": "stddev: 7.455501537182216e-7",
            "extra": "mean: 17.454503675797856 usec\nrounds: 13737"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1582551.4644916323,
            "unit": "iter/sec",
            "range": "stddev: 1.0425271129860814e-7",
            "extra": "mean: 631.8909826551726 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 140.4960046681371,
            "unit": "iter/sec",
            "range": "stddev: 0.011608832232037734",
            "extra": "mean: 7.117640123376326 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5135.523430304183,
            "unit": "iter/sec",
            "range": "stddev: 0.000050929823863331946",
            "extra": "mean: 194.72211811927588 usec\nrounds: 2616"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.91261566542087,
            "unit": "iter/sec",
            "range": "stddev: 0.0006595884346917606",
            "extra": "mean: 11.9171592027024 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 634.7335063328704,
            "unit": "iter/sec",
            "range": "stddev: 0.00001055635510310414",
            "extra": "mean: 1.5754643327046527 msec\nrounds: 532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 105.18006313377329,
            "unit": "iter/sec",
            "range": "stddev: 0.00009750171655122377",
            "extra": "mean: 9.50750522680472 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8682102915811123,
            "unit": "iter/sec",
            "range": "stddev: 0.003238010517786739",
            "extra": "mean: 1.1517946858000072 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 162.88870994985285,
            "unit": "iter/sec",
            "range": "stddev: 0.0006391829256132084",
            "extra": "mean: 6.139160905061262 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 256.13885231409154,
            "unit": "iter/sec",
            "range": "stddev: 0.0002021894598272009",
            "extra": "mean: 3.904132430380945 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.885909452116826,
            "unit": "iter/sec",
            "range": "stddev: 0.00019564959350228068",
            "extra": "mean: 72.01544871427602 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.91516432363955,
            "unit": "iter/sec",
            "range": "stddev: 0.0001804092572565541",
            "extra": "mean: 17.266634942306887 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1457.0638106880901,
            "unit": "iter/sec",
            "range": "stddev: 0.000006136378761049518",
            "extra": "mean: 686.3117405460476 usec\nrounds: 1137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 391489.82420565904,
            "unit": "iter/sec",
            "range": "stddev: 1.5679887778642115e-7",
            "extra": "mean: 2.554344808397053 usec\nrounds: 1859"
          }
        ]
      }
    ]
  }
}