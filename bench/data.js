window.BENCHMARK_DATA = {
  "lastUpdate": 1677262618602,
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
          "id": "2553295ed181c0963b827b31d8a7804b34fc41d5",
          "message": "chore(examples): add Lahman baseball data examples",
          "timestamp": "2023-02-24T13:11:19-05:00",
          "tree_id": "8f36157a0370bdbb408ad3618aa8c11124ca129b",
          "url": "https://github.com/ibis-project/ibis/commit/2553295ed181c0963b827b31d8a7804b34fc41d5"
        },
        "date": 1677262533545,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 236.81795515990902,
            "unit": "iter/sec",
            "range": "stddev: 0.004096960064563788",
            "extra": "mean: 4.222652793892928 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4026.595990542088,
            "unit": "iter/sec",
            "range": "stddev: 0.00005317370748916629",
            "extra": "mean: 248.34872988222818 usec\nrounds: 1951"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4363.763406394146,
            "unit": "iter/sec",
            "range": "stddev: 0.00008799235771891578",
            "extra": "mean: 229.15999491052094 usec\nrounds: 393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119718.4410746532,
            "unit": "iter/sec",
            "range": "stddev: 4.253254095071979e-7",
            "extra": "mean: 8.352932021361914 usec\nrounds: 32363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8600968799295168,
            "unit": "iter/sec",
            "range": "stddev: 0.004452442816689997",
            "extra": "mean: 1.1626597228000037 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.406050087618494,
            "unit": "iter/sec",
            "range": "stddev: 0.00018283589505476444",
            "extra": "mean: 74.5931869166725 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 566.4041028205779,
            "unit": "iter/sec",
            "range": "stddev: 0.000052235471064201424",
            "extra": "mean: 1.7655239342727254 msec\nrounds: 426"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 626.8340818259568,
            "unit": "iter/sec",
            "range": "stddev: 0.000025036414198087316",
            "extra": "mean: 1.5953184885656144 msec\nrounds: 481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15328952663890447,
            "unit": "iter/sec",
            "range": "stddev: 0.05240253595130611",
            "extra": "mean: 6.523602896599999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.88906837290655,
            "unit": "iter/sec",
            "range": "stddev: 0.0009652092885516448",
            "extra": "mean: 11.377979292681507 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4558.181129299091,
            "unit": "iter/sec",
            "range": "stddev: 0.00006138676220207313",
            "extra": "mean: 219.3857531400402 usec\nrounds: 2548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 256.04993034496965,
            "unit": "iter/sec",
            "range": "stddev: 0.0001906702486744278",
            "extra": "mean: 3.905488271966038 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5642652361677087,
            "unit": "iter/sec",
            "range": "stddev: 0.0023425354208599773",
            "extra": "mean: 639.2777752000029 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.55802550599986,
            "unit": "iter/sec",
            "range": "stddev: 0.0005086894880580126",
            "extra": "mean: 11.967731333337875 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12553535.634847302,
            "unit": "iter/sec",
            "range": "stddev: 3.5504793239486565e-9",
            "extra": "mean: 79.65883310380904 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 246.2646427540734,
            "unit": "iter/sec",
            "range": "stddev: 0.000255057178634248",
            "extra": "mean: 4.060672245989561 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4628378.707660878,
            "unit": "iter/sec",
            "range": "stddev: 1.1465262964554894e-8",
            "extra": "mean: 216.0583787893559 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 545454.9319555651,
            "unit": "iter/sec",
            "range": "stddev: 0.00000919843394961844",
            "extra": "mean: 1.8333320342613821 usec\nrounds: 21552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 157.86698494304878,
            "unit": "iter/sec",
            "range": "stddev: 0.00011095677652708889",
            "extra": "mean: 6.334446688525498 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.64901177251464,
            "unit": "iter/sec",
            "range": "stddev: 0.00008488539153458509",
            "extra": "mean: 14.782181938780273 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 258.09518585234355,
            "unit": "iter/sec",
            "range": "stddev: 0.00020146679285746246",
            "extra": "mean: 3.8745395296605833 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4389.862418727077,
            "unit": "iter/sec",
            "range": "stddev: 0.000022375328206855263",
            "extra": "mean: 227.79757190886377 usec\nrounds: 1189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 249.2099111281715,
            "unit": "iter/sec",
            "range": "stddev: 0.00023308989337027716",
            "extra": "mean: 4.01268149999736 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5496184.709472739,
            "unit": "iter/sec",
            "range": "stddev: 5.328168812207433e-9",
            "extra": "mean: 181.94439467740804 nsec\nrounds: 54946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.45397535737557,
            "unit": "iter/sec",
            "range": "stddev: 0.000843532932566351",
            "extra": "mean: 16.81973314633779 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1492013.4750562382,
            "unit": "iter/sec",
            "range": "stddev: 1.115396133541758e-7",
            "extra": "mean: 670.2352336075967 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.200201272124181,
            "unit": "iter/sec",
            "range": "stddev: 0.002721738723261293",
            "extra": "mean: 454.50387319999663 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4011.454186180968,
            "unit": "iter/sec",
            "range": "stddev: 0.00004756136652884937",
            "extra": "mean: 249.2861574849573 usec\nrounds: 1797"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.84902822867159,
            "unit": "iter/sec",
            "range": "stddev: 0.0005865181074763139",
            "extra": "mean: 11.926196655169548 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4276047.346552358,
            "unit": "iter/sec",
            "range": "stddev: 5.417417268918208e-8",
            "extra": "mean: 233.86083430704068 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.17541397366226,
            "unit": "iter/sec",
            "range": "stddev: 0.00043885301860157867",
            "extra": "mean: 18.45855761224375 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.14317403294999,
            "unit": "iter/sec",
            "range": "stddev: 0.009000350853826722",
            "extra": "mean: 9.886974672895121 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 229.2466462897471,
            "unit": "iter/sec",
            "range": "stddev: 0.00016566852364134602",
            "extra": "mean: 4.362113977170641 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.665868621316875,
            "unit": "iter/sec",
            "range": "stddev: 0.00020147544412581737",
            "extra": "mean: 24.000459682925825 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6483.381219123,
            "unit": "iter/sec",
            "range": "stddev: 0.000013526027511592812",
            "extra": "mean: 154.24050602646332 usec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10903.263944689283,
            "unit": "iter/sec",
            "range": "stddev: 0.000002247861774219566",
            "extra": "mean: 91.71565552048072 usec\nrounds: 1286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 103.68544509109338,
            "unit": "iter/sec",
            "range": "stddev: 0.0006087590531637367",
            "extra": "mean: 9.644555213332447 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.1313638264459,
            "unit": "iter/sec",
            "range": "stddev: 0.0006174603143069568",
            "extra": "mean: 11.746552093757856 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57015.08332686337,
            "unit": "iter/sec",
            "range": "stddev: 5.37251490128156e-7",
            "extra": "mean: 17.539218425185346 usec\nrounds: 13460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 71.82113291588668,
            "unit": "iter/sec",
            "range": "stddev: 0.015392792247840754",
            "extra": "mean: 13.923478500000133 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.36338217455589,
            "unit": "iter/sec",
            "range": "stddev: 0.0005455338487200308",
            "extra": "mean: 28.277838218752294 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 112.88492430434397,
            "unit": "iter/sec",
            "range": "stddev: 0.0006349743859027922",
            "extra": "mean: 8.858578824077032 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.67183268388324,
            "unit": "iter/sec",
            "range": "stddev: 0.00012710098765686433",
            "extra": "mean: 10.79076533871022 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1439066.966710931,
            "unit": "iter/sec",
            "range": "stddev: 1.1356762578793532e-7",
            "extra": "mean: 694.8946943626652 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10048.590147445497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019055042586483082",
            "extra": "mean: 99.51644811130197 usec\nrounds: 2303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.632946804962955,
            "unit": "iter/sec",
            "range": "stddev: 0.0007325755964168117",
            "extra": "mean: 24.610570451608464 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 437.95284268072834,
            "unit": "iter/sec",
            "range": "stddev: 0.0001003011630594699",
            "extra": "mean: 2.283350860058258 msec\nrounds: 343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 87.7335832467559,
            "unit": "iter/sec",
            "range": "stddev: 0.0006459875615271674",
            "extra": "mean: 11.398143823528109 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.79991103704037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000675015305013792",
            "extra": "mean: 8.417514720934532 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 97.25627935450991,
            "unit": "iter/sec",
            "range": "stddev: 0.00007957347865095843",
            "extra": "mean: 10.282112441859814 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4581.337098497022,
            "unit": "iter/sec",
            "range": "stddev: 0.000045600517001812215",
            "extra": "mean: 218.2768869656121 usec\nrounds: 1964"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4068.6772463044845,
            "unit": "iter/sec",
            "range": "stddev: 0.000046093671508027474",
            "extra": "mean: 245.78012446386214 usec\nrounds: 2097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.99619198368563,
            "unit": "iter/sec",
            "range": "stddev: 0.00003234507922491058",
            "extra": "mean: 5.814082209999469 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 264.79329244227955,
            "unit": "iter/sec",
            "range": "stddev: 0.00019639674714698617",
            "extra": "mean: 3.7765307073176073 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4523.494064088342,
            "unit": "iter/sec",
            "range": "stddev: 0.00004788757306572292",
            "extra": "mean: 221.0680473616446 usec\nrounds: 2407"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.54452775610423,
            "unit": "iter/sec",
            "range": "stddev: 0.00021385437445753684",
            "extra": "mean: 14.175443961540587 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8544318223089669,
            "unit": "iter/sec",
            "range": "stddev: 0.005468780915736959",
            "extra": "mean: 1.1703683943999863 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.875780814609341,
            "unit": "iter/sec",
            "range": "stddev: 0.0005207219864156153",
            "extra": "mean: 205.09535560000813 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.34301948050795,
            "unit": "iter/sec",
            "range": "stddev: 0.0010123546867830998",
            "extra": "mean: 29.99128499998603 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 331.297688223782,
            "unit": "iter/sec",
            "range": "stddev: 0.00008795690678845439",
            "extra": "mean: 3.0184333774298144 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 271.8509138813524,
            "unit": "iter/sec",
            "range": "stddev: 0.00009956561222407158",
            "extra": "mean: 3.6784868063251888 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 108.23112481961812,
            "unit": "iter/sec",
            "range": "stddev: 0.0005924189027210017",
            "extra": "mean: 9.239486346156301 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.418774252593,
            "unit": "iter/sec",
            "range": "stddev: 0.00009905466436645786",
            "extra": "mean: 7.071196913458357 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.70736000164311,
            "unit": "iter/sec",
            "range": "stddev: 0.00029930457127888137",
            "extra": "mean: 11.53304632941252 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1536915.535346631,
            "unit": "iter/sec",
            "range": "stddev: 9.991164676656078e-8",
            "extra": "mean: 650.6538433645693 nsec\nrounds: 123473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 391585.89844065707,
            "unit": "iter/sec",
            "range": "stddev: 4.209775857631728e-7",
            "extra": "mean: 2.553718108803515 usec\nrounds: 1905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.017209163344548,
            "unit": "iter/sec",
            "range": "stddev: 0.00019080865367851656",
            "extra": "mean: 110.89905777777176 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 113.67493726854882,
            "unit": "iter/sec",
            "range": "stddev: 0.0006406959875059309",
            "extra": "mean: 8.797013871558796 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.2114581903304,
            "unit": "iter/sec",
            "range": "stddev: 0.000161166718560172",
            "extra": "mean: 3.7848472085553104 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.281113526188435,
            "unit": "iter/sec",
            "range": "stddev: 0.0008550182162616181",
            "extra": "mean: 39.555219708345156 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.29752473392216,
            "unit": "iter/sec",
            "range": "stddev: 0.00016895046933383464",
            "extra": "mean: 10.277753753085523 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 113.29823088381345,
            "unit": "iter/sec",
            "range": "stddev: 0.0006055814437875555",
            "extra": "mean: 8.826263148146532 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7363817238896828,
            "unit": "iter/sec",
            "range": "stddev: 0.005965026631763755",
            "extra": "mean: 1.3579913346000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.01224637248342,
            "unit": "iter/sec",
            "range": "stddev: 0.0007024335897928811",
            "extra": "mean: 12.984947811589889 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5786673669427538,
            "unit": "iter/sec",
            "range": "stddev: 0.0031205479715260016",
            "extra": "mean: 1.7281085078000047 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 985.2344601602238,
            "unit": "iter/sec",
            "range": "stddev: 0.000019100868504999262",
            "extra": "mean: 1.0149868284523615 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1462.605121223485,
            "unit": "iter/sec",
            "range": "stddev: 0.000005917134034341274",
            "extra": "mean: 683.7115401069354 usec\nrounds: 1122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 108.52355044971236,
            "unit": "iter/sec",
            "range": "stddev: 0.00011123487694674521",
            "extra": "mean: 9.214589790474834 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 134.6997266534063,
            "unit": "iter/sec",
            "range": "stddev: 0.0000546658787060423",
            "extra": "mean: 7.423920039370859 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1914258.647834121,
            "unit": "iter/sec",
            "range": "stddev: 5.5433927415107354e-8",
            "extra": "mean: 522.3954459503607 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 113.26943109701197,
            "unit": "iter/sec",
            "range": "stddev: 0.0006399796203042778",
            "extra": "mean: 8.82850730611977 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9322.92575414663,
            "unit": "iter/sec",
            "range": "stddev: 0.000013939838328038034",
            "extra": "mean: 107.26246527869453 usec\nrounds: 4853"
          }
        ]
      }
    ]
  }
}