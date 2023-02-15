window.BENCHMARK_DATA = {
  "lastUpdate": 1676421074860,
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
          "id": "b421f2a1926bf862bd6a8b1ddb9427a1e21caf10",
          "message": "chore(flake/flake-utils): `5aed5285` -> `3db36a8b`",
          "timestamp": "2023-02-15T00:22:10Z",
          "tree_id": "6fe53b93de0b55497baede6a4eec8b0c6ccdb408",
          "url": "https://github.com/ibis-project/ibis/commit/b421f2a1926bf862bd6a8b1ddb9427a1e21caf10"
        },
        "date": 1676420991302,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1562059.623451289,
            "unit": "iter/sec",
            "range": "stddev: 1.085508635209968e-7",
            "extra": "mean: 640.1804290866647 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.3803504912203,
            "unit": "iter/sec",
            "range": "stddev: 0.013515193458731716",
            "extra": "mean: 14.413302799998746 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.59474621965915,
            "unit": "iter/sec",
            "range": "stddev: 0.00026097010795403033",
            "extra": "mean: 24.04149780645529 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1439.643502388762,
            "unit": "iter/sec",
            "range": "stddev: 0.000019881569989661557",
            "extra": "mean: 694.6164090906718 usec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.41859515347107,
            "unit": "iter/sec",
            "range": "stddev: 0.00039601705228716475",
            "extra": "mean: 4.536822309858789 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 119.43186231592057,
            "unit": "iter/sec",
            "range": "stddev: 0.00035831601177246654",
            "extra": "mean: 8.372975021982032 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 138.72116029085245,
            "unit": "iter/sec",
            "range": "stddev: 0.007256960481520089",
            "extra": "mean: 7.208705563760644 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 517.0812046464926,
            "unit": "iter/sec",
            "range": "stddev: 0.000037763204461694894",
            "extra": "mean: 1.9339322160890753 msec\nrounds: 435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 244.0375841138036,
            "unit": "iter/sec",
            "range": "stddev: 0.0002566264549434098",
            "extra": "mean: 4.097729469136458 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4847766.72611509,
            "unit": "iter/sec",
            "range": "stddev: 1.3844423078763892e-8",
            "extra": "mean: 206.28055277753984 nsec\nrounds: 50762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5761762514266149,
            "unit": "iter/sec",
            "range": "stddev: 0.0405908514952653",
            "extra": "mean: 1.7355800374000068 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 156.59508237385126,
            "unit": "iter/sec",
            "range": "stddev: 0.0007997474206582611",
            "extra": "mean: 6.385896573767398 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.6405352491475,
            "unit": "iter/sec",
            "range": "stddev: 0.00006893821069009005",
            "extra": "mean: 11.541941622640651 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1534978.4640484096,
            "unit": "iter/sec",
            "range": "stddev: 1.9237798385384192e-7",
            "extra": "mean: 651.4749381972191 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18821.17678066705,
            "unit": "iter/sec",
            "range": "stddev: 0.00002988544390675623",
            "extra": "mean: 53.13164057983831 usec\nrounds: 5239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8627042777552459,
            "unit": "iter/sec",
            "range": "stddev: 0.005678389743911905",
            "extra": "mean: 1.1591457533999914 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.3012920670851,
            "unit": "iter/sec",
            "range": "stddev: 0.0005895052967241492",
            "extra": "mean: 11.074038666657138 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.72048557789644,
            "unit": "iter/sec",
            "range": "stddev: 0.00011945900131962641",
            "extra": "mean: 11.271353999995881 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 156.5672848672035,
            "unit": "iter/sec",
            "range": "stddev: 0.0007460950404767358",
            "extra": "mean: 6.3870303483143065 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1488603.3670665435,
            "unit": "iter/sec",
            "range": "stddev: 1.2152229398382085e-7",
            "extra": "mean: 671.7706154128952 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.3560359889035,
            "unit": "iter/sec",
            "range": "stddev: 0.0006892357559794809",
            "extra": "mean: 10.946184224997069 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 320.13735198280415,
            "unit": "iter/sec",
            "range": "stddev: 0.0001597506757984822",
            "extra": "mean: 3.1236592475273364 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6029.3267753515975,
            "unit": "iter/sec",
            "range": "stddev: 0.00004821998666436588",
            "extra": "mean: 165.85599640876748 usec\nrounds: 2227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.741973274647375,
            "unit": "iter/sec",
            "range": "stddev: 0.0023300057004859405",
            "extra": "mean: 1.3477574383999922 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5259.975591487185,
            "unit": "iter/sec",
            "range": "stddev: 0.000046974107751316436",
            "extra": "mean: 190.11495065080027 usec\nrounds: 2229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 152.73910861955667,
            "unit": "iter/sec",
            "range": "stddev: 0.0007788323598873787",
            "extra": "mean: 6.547111666670813 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5152.349320015363,
            "unit": "iter/sec",
            "range": "stddev: 0.00004854743054349236",
            "extra": "mean: 194.08621929326372 usec\nrounds: 1897"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11869720.870864732,
            "unit": "iter/sec",
            "range": "stddev: 1.210572139363493e-8",
            "extra": "mean: 84.2479794494389 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 541880.2379744163,
            "unit": "iter/sec",
            "range": "stddev: 0.000006023396319578328",
            "extra": "mean: 1.8454262213696242 usec\nrounds: 22676"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 269.73025476044137,
            "unit": "iter/sec",
            "range": "stddev: 0.00015494766720415911",
            "extra": "mean: 3.707407613165759 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 253.31114286040324,
            "unit": "iter/sec",
            "range": "stddev: 0.0002195460030212392",
            "extra": "mean: 3.947714217021586 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 616.2596610570914,
            "unit": "iter/sec",
            "range": "stddev: 0.000015087685766417198",
            "extra": "mean: 1.6226926135075361 msec\nrounds: 533"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 73.37112695261649,
            "unit": "iter/sec",
            "range": "stddev: 0.020153865399250376",
            "extra": "mean: 13.629339517243697 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.91333747467533,
            "unit": "iter/sec",
            "range": "stddev: 0.0007954950871123717",
            "extra": "mean: 12.51355570422649 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 137.93559794895648,
            "unit": "iter/sec",
            "range": "stddev: 0.0008661374419699579",
            "extra": "mean: 7.249760140743749 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8557630003817708,
            "unit": "iter/sec",
            "range": "stddev: 0.005355203571307433",
            "extra": "mean: 1.1685478333999981 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.6839304894661,
            "unit": "iter/sec",
            "range": "stddev: 0.00012457095697920428",
            "extra": "mean: 7.3161489900019205 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.99604667360504,
            "unit": "iter/sec",
            "range": "stddev: 0.0007509980272555526",
            "extra": "mean: 10.989488406973479 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.71122485022876,
            "unit": "iter/sec",
            "range": "stddev: 0.00022907114381408492",
            "extra": "mean: 11.146877123453411 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 77.30015287168452,
            "unit": "iter/sec",
            "range": "stddev: 0.013721184063956872",
            "extra": "mean: 12.93658502409386 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.402007169956514,
            "unit": "iter/sec",
            "range": "stddev: 0.0006182056282684896",
            "extra": "mean: 74.61568907691046 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4432.103452955688,
            "unit": "iter/sec",
            "range": "stddev: 0.000022253192661110598",
            "extra": "mean: 225.62650231756626 usec\nrounds: 647"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 157.61123676875258,
            "unit": "iter/sec",
            "range": "stddev: 0.0007478635478465056",
            "extra": "mean: 6.344725290540048 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5891.894555190689,
            "unit": "iter/sec",
            "range": "stddev: 0.000052599001021000324",
            "extra": "mean: 169.72469392192565 usec\nrounds: 3192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.28161145785377,
            "unit": "iter/sec",
            "range": "stddev: 0.00019721178194090214",
            "extra": "mean: 14.228472843137306 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.69116178863018,
            "unit": "iter/sec",
            "range": "stddev: 0.00009370426137171706",
            "extra": "mean: 7.057603222223305 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 251.4249102151061,
            "unit": "iter/sec",
            "range": "stddev: 0.00025965180459844675",
            "extra": "mean: 3.9773306437474782 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 241.4432109019144,
            "unit": "iter/sec",
            "range": "stddev: 0.0002177585198787473",
            "extra": "mean: 4.141760690907343 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 245.12369183526076,
            "unit": "iter/sec",
            "range": "stddev: 0.0001885340636410326",
            "extra": "mean: 4.079573020922293 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5784.150514888829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000487805051320978",
            "extra": "mean: 172.8862341022984 usec\nrounds: 2469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5178.43296195862,
            "unit": "iter/sec",
            "range": "stddev: 0.00004887838409607385",
            "extra": "mean: 193.10861168738072 usec\nrounds: 1831"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 253.55654183670705,
            "unit": "iter/sec",
            "range": "stddev: 0.0002338500538320613",
            "extra": "mean: 3.9438935109156446 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5950.9801676195675,
            "unit": "iter/sec",
            "range": "stddev: 0.00005180424940335805",
            "extra": "mean: 168.03954505531593 usec\nrounds: 3640"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 248.0311032890631,
            "unit": "iter/sec",
            "range": "stddev: 0.00024837805615823133",
            "extra": "mean: 4.031752416286957 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5242638.800782325,
            "unit": "iter/sec",
            "range": "stddev: 5.230815356603857e-9",
            "extra": "mean: 190.7436384613228 nsec\nrounds: 50252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120456.93602536104,
            "unit": "iter/sec",
            "range": "stddev: 4.14466365233038e-7",
            "extra": "mean: 8.301722034416182 usec\nrounds: 34015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1541056.9211548287,
            "unit": "iter/sec",
            "range": "stddev: 1.1803178476419995e-7",
            "extra": "mean: 648.9052975737103 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.64840965641748,
            "unit": "iter/sec",
            "range": "stddev: 0.0007732707354056303",
            "extra": "mean: 28.861353520010198 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.24196882599745,
            "unit": "iter/sec",
            "range": "stddev: 0.0014704209716449963",
            "extra": "mean: 446.0365319999937 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5682945946595628,
            "unit": "iter/sec",
            "range": "stddev: 0.0007420353172159276",
            "extra": "mean: 637.6353036000069 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10014.045712824663,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018826445478730761",
            "extra": "mean: 99.85973987709406 usec\nrounds: 4890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 139.6583519252468,
            "unit": "iter/sec",
            "range": "stddev: 0.00011808367016207796",
            "extra": "mean: 7.160330808824507 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9589.135948762842,
            "unit": "iter/sec",
            "range": "stddev: 0.000015642757063480414",
            "extra": "mean: 104.28468272253629 usec\nrounds: 5377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4403774.643844751,
            "unit": "iter/sec",
            "range": "stddev: 1.4514736276001919e-8",
            "extra": "mean: 227.0779231173898 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 144.92137666364314,
            "unit": "iter/sec",
            "range": "stddev: 0.0007230311184189079",
            "extra": "mean: 6.900293269508203 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 975.7294905649522,
            "unit": "iter/sec",
            "range": "stddev: 0.00007924531056477162",
            "extra": "mean: 1.0248742194119753 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 139.48319708689058,
            "unit": "iter/sec",
            "range": "stddev: 0.012020058420853609",
            "extra": "mean: 7.169322333334913 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.63416946042447,
            "unit": "iter/sec",
            "range": "stddev: 0.0003539201376921539",
            "extra": "mean: 19.36702014286218 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10593.688173815412,
            "unit": "iter/sec",
            "range": "stddev: 0.000003648412825384966",
            "extra": "mean: 94.3958311395002 usec\nrounds: 4862"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 364034.3475020983,
            "unit": "iter/sec",
            "range": "stddev: 1.3127616339656936e-7",
            "extra": "mean: 2.7469935374552423 usec\nrounds: 1857"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.151458388472719,
            "unit": "iter/sec",
            "range": "stddev: 0.08172619302282569",
            "extra": "mean: 6.602473524799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.42056539543763,
            "unit": "iter/sec",
            "range": "stddev: 0.0007006464509070964",
            "extra": "mean: 11.438955987948676 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.32408520975441,
            "unit": "iter/sec",
            "range": "stddev: 0.0005959533332097003",
            "extra": "mean: 25.429707891893905 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57438.148134766474,
            "unit": "iter/sec",
            "range": "stddev: 5.739587794351485e-7",
            "extra": "mean: 17.410032051411395 usec\nrounds: 6864"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.091143328349157,
            "unit": "iter/sec",
            "range": "stddev: 0.00017169989160204928",
            "extra": "mean: 109.99716580000154 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.75268852110856,
            "unit": "iter/sec",
            "range": "stddev: 0.0005107265455293233",
            "extra": "mean: 17.620310615382753 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.876410406497947,
            "unit": "iter/sec",
            "range": "stddev: 0.0002740181834961775",
            "extra": "mean: 205.0688758000092 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 248.09700562722784,
            "unit": "iter/sec",
            "range": "stddev: 0.0002282483520657572",
            "extra": "mean: 4.030681456520785 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.336025192111567,
            "unit": "iter/sec",
            "range": "stddev: 0.00040619726937668915",
            "extra": "mean: 41.091344708344 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.79996524835465,
            "unit": "iter/sec",
            "range": "stddev: 0.00014275471343873646",
            "extra": "mean: 14.749270096775863 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 411.7325651408451,
            "unit": "iter/sec",
            "range": "stddev: 0.000024725151142775614",
            "extra": "mean: 2.428761008150815 msec\nrounds: 368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.93469202195872,
            "unit": "iter/sec",
            "range": "stddev: 0.025580440380652932",
            "extra": "mean: 31.313907749991348 msec\nrounds: 36"
          }
        ]
      }
    ]
  }
}