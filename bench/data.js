window.BENCHMARK_DATA = {
  "lastUpdate": 1684317416720,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "63a749540303b08f54a25abfec96266f102ffc78",
          "message": "chore: rename Zip to ArrayZip",
          "timestamp": "2023-05-17T11:51:00+02:00",
          "tree_id": "2a8fff26a3715728f4310b4dd3182e5f78b96339",
          "url": "https://github.com/ibis-project/ibis/commit/63a749540303b08f54a25abfec96266f102ffc78"
        },
        "date": 1684317316266,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.45575093650203,
            "unit": "iter/sec",
            "range": "stddev: 0.0005459543919296415",
            "extra": "mean: 60.76902864285622 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4614658.645108414,
            "unit": "iter/sec",
            "range": "stddev: 1.4374636626042607e-8",
            "extra": "mean: 216.70075229947588 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.705042967604616,
            "unit": "iter/sec",
            "range": "stddev: 0.0007534313152872663",
            "extra": "mean: 31.540723695652265 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 24.395153415622158,
            "unit": "iter/sec",
            "range": "stddev: 0.013838652109473945",
            "extra": "mean: 40.99174876922973 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3758832.7688172166,
            "unit": "iter/sec",
            "range": "stddev: 1.7708988016463352e-8",
            "extra": "mean: 266.04003463417206 nsec\nrounds: 128189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1905.2265916210454,
            "unit": "iter/sec",
            "range": "stddev: 0.00012605646661249995",
            "extra": "mean: 524.8719519231352 usec\nrounds: 312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 240.2451896574233,
            "unit": "iter/sec",
            "range": "stddev: 0.00034050782761243625",
            "extra": "mean: 4.162414246153881 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1369788.2190637595,
            "unit": "iter/sec",
            "range": "stddev: 2.563248039309875e-7",
            "extra": "mean: 730.0398602372949 nsec\nrounds: 106372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 232.28784001296052,
            "unit": "iter/sec",
            "range": "stddev: 0.0004368355724670158",
            "extra": "mean: 4.305003653846904 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.42761211015508,
            "unit": "iter/sec",
            "range": "stddev: 0.0008644903074247563",
            "extra": "mean: 11.705817068965299 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 92.88322571086314,
            "unit": "iter/sec",
            "range": "stddev: 0.0005621599460596679",
            "extra": "mean: 10.766206625003605 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1637635.0468544273,
            "unit": "iter/sec",
            "range": "stddev: 1.0644073551263293e-7",
            "extra": "mean: 610.6366628638059 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 84.52705904036402,
            "unit": "iter/sec",
            "range": "stddev: 0.001134440928559881",
            "extra": "mean: 11.830531090907495 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 243.23493372189415,
            "unit": "iter/sec",
            "range": "stddev: 0.0003847754974707951",
            "extra": "mean: 4.111251557078405 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 88.2957822933444,
            "unit": "iter/sec",
            "range": "stddev: 0.00010794378455114499",
            "extra": "mean: 11.325569285718627 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 168.15303703694033,
            "unit": "iter/sec",
            "range": "stddev: 0.00006570139695858007",
            "extra": "mean: 5.9469636565667106 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10661.022240121485,
            "unit": "iter/sec",
            "range": "stddev: 0.000020836024048806056",
            "extra": "mean: 93.79963548304208 usec\nrounds: 3613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 159.75953272974874,
            "unit": "iter/sec",
            "range": "stddev: 0.010212783436835293",
            "extra": "mean: 6.25940739130486 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.2523768330177445,
            "unit": "iter/sec",
            "range": "stddev: 0.0007297360340488093",
            "extra": "mean: 137.8858301250041 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 75.034665640318,
            "unit": "iter/sec",
            "range": "stddev: 0.00017194772629723588",
            "extra": "mean: 13.327173400006131 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.46786670069181,
            "unit": "iter/sec",
            "range": "stddev: 0.00007003965737234796",
            "extra": "mean: 6.874370420634237 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 85.44764043669733,
            "unit": "iter/sec",
            "range": "stddev: 0.0010031508895881613",
            "extra": "mean: 11.70307330769228 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7115641132933808,
            "unit": "iter/sec",
            "range": "stddev: 0.005314473122100239",
            "extra": "mean: 1.4053547407999987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 994.4121998665307,
            "unit": "iter/sec",
            "range": "stddev: 0.00007089849608548168",
            "extra": "mean: 1.005619199094922 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 121.10765882233645,
            "unit": "iter/sec",
            "range": "stddev: 0.005445381953269128",
            "extra": "mean: 8.257116104168016 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 738007.0029805095,
            "unit": "iter/sec",
            "range": "stddev: 0.000016678327101343643",
            "extra": "mean: 1.3550006923530638 usec\nrounds: 62105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.772919487004536,
            "unit": "iter/sec",
            "range": "stddev: 0.000381183045442248",
            "extra": "mean: 23.379278571429396 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 86.04577030586555,
            "unit": "iter/sec",
            "range": "stddev: 0.0009603512083699279",
            "extra": "mean: 11.62172174698786 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5018231.503548586,
            "unit": "iter/sec",
            "range": "stddev: 1.623226469654656e-8",
            "extra": "mean: 199.2733892991252 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 84.89051951902724,
            "unit": "iter/sec",
            "range": "stddev: 0.001065354261360748",
            "extra": "mean: 11.779878432430388 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1585998311615495,
            "unit": "iter/sec",
            "range": "stddev: 0.0024258769603327135",
            "extra": "mean: 463.26326240000526 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3499333871590111,
            "unit": "iter/sec",
            "range": "stddev: 0.0009401836313152283",
            "extra": "mean: 740.77729280001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144360.75664080968,
            "unit": "iter/sec",
            "range": "stddev: 3.8298591046392704e-7",
            "extra": "mean: 6.927090320592762 usec\nrounds: 35839"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 267.42307915516983,
            "unit": "iter/sec",
            "range": "stddev: 0.00007079134887655574",
            "extra": "mean: 3.7393930365290533 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.518705663813975,
            "unit": "iter/sec",
            "range": "stddev: 0.0007848591413632392",
            "extra": "mean: 23.519060243902516 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 127.63664435294392,
            "unit": "iter/sec",
            "range": "stddev: 0.00017744060905530167",
            "extra": "mean: 7.834740603449085 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5191253.728863903,
            "unit": "iter/sec",
            "range": "stddev: 1.0351557076442469e-8",
            "extra": "mean: 192.63169404332805 nsec\nrounds: 52354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.964192395820763,
            "unit": "iter/sec",
            "range": "stddev: 0.0009574890663271539",
            "extra": "mean: 33.37316710526376 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1835.7855808628826,
            "unit": "iter/sec",
            "range": "stddev: 0.00013931028310801782",
            "extra": "mean: 544.7259257423547 usec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 59.51109493115044,
            "unit": "iter/sec",
            "range": "stddev: 0.02711013999958819",
            "extra": "mean: 16.80358933333221 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6570130040377676,
            "unit": "iter/sec",
            "range": "stddev: 0.0030902172242270624",
            "extra": "mean: 1.5220398893999914 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.24460741190771,
            "unit": "iter/sec",
            "range": "stddev: 0.0008984641197565495",
            "extra": "mean: 11.730947333336083 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 642.8461629125941,
            "unit": "iter/sec",
            "range": "stddev: 0.00001482545108734832",
            "extra": "mean: 1.555582124764066 msec\nrounds: 529"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 73.62500536807941,
            "unit": "iter/sec",
            "range": "stddev: 0.017484500706633335",
            "extra": "mean: 13.582341963856159 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3904.384828279394,
            "unit": "iter/sec",
            "range": "stddev: 0.00002721212827791333",
            "extra": "mean: 256.12229428744234 usec\nrounds: 1733"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.24140798415034,
            "unit": "iter/sec",
            "range": "stddev: 0.0010623410735357685",
            "extra": "mean: 11.595357999996736 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 242.89468567844042,
            "unit": "iter/sec",
            "range": "stddev: 0.00035927929310244645",
            "extra": "mean: 4.117010618025065 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 236.27968140687645,
            "unit": "iter/sec",
            "range": "stddev: 0.0003601494340804228",
            "extra": "mean: 4.232272508773143 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9514450.790137956,
            "unit": "iter/sec",
            "range": "stddev: 4.8410267053568245e-9",
            "extra": "mean: 105.1032815300733 nsec\nrounds: 94331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.157429455902692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005114541044826022",
            "extra": "mean: 863.9835412000025 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1882.293366820962,
            "unit": "iter/sec",
            "range": "stddev: 0.00010223314411572655",
            "extra": "mean: 531.2668139977125 usec\nrounds: 1043"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.58911524620882,
            "unit": "iter/sec",
            "range": "stddev: 0.0011002131427435046",
            "extra": "mean: 12.408623632917267 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 71.5833663308244,
            "unit": "iter/sec",
            "range": "stddev: 0.018358593215672965",
            "extra": "mean: 13.96972580722837 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.8744025115218,
            "unit": "iter/sec",
            "range": "stddev: 0.0007175647494828612",
            "extra": "mean: 25.72386803124793 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 92.98979539283984,
            "unit": "iter/sec",
            "range": "stddev: 0.0012469130130162397",
            "extra": "mean: 10.753868161290734 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 244.78663982126875,
            "unit": "iter/sec",
            "range": "stddev: 0.0003221912376981249",
            "extra": "mean: 4.085190273170755 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1869.1970277214543,
            "unit": "iter/sec",
            "range": "stddev: 0.00010351541250731303",
            "extra": "mean: 534.9890809632825 usec\nrounds: 457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 68.72421122323125,
            "unit": "iter/sec",
            "range": "stddev: 0.019342589478529487",
            "extra": "mean: 14.550912730766477 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 84.59908091297513,
            "unit": "iter/sec",
            "range": "stddev: 0.0011090014021062316",
            "extra": "mean: 11.820459385707442 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1484.2182740024327,
            "unit": "iter/sec",
            "range": "stddev: 0.000006619165192143322",
            "extra": "mean: 673.755348196421 usec\nrounds: 942"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.29568811571082,
            "unit": "iter/sec",
            "range": "stddev: 0.0011432138631169454",
            "extra": "mean: 11.863002988092608 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 198.0806394972978,
            "unit": "iter/sec",
            "range": "stddev: 0.00045272822014948323",
            "extra": "mean: 5.048448967742968 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1884.339206796668,
            "unit": "iter/sec",
            "range": "stddev: 0.00011460821304236532",
            "extra": "mean: 530.6900139810689 usec\nrounds: 1645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2282259.0491611673,
            "unit": "iter/sec",
            "range": "stddev: 2.2582819138184084e-8",
            "extra": "mean: 438.1623551312516 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 36.29920282724648,
            "unit": "iter/sec",
            "range": "stddev: 0.0003101768124442384",
            "extra": "mean: 27.548814357140422 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 45.503571470549176,
            "unit": "iter/sec",
            "range": "stddev: 0.0009175828272810489",
            "extra": "mean: 21.976296973683045 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1904.0365929171833,
            "unit": "iter/sec",
            "range": "stddev: 0.00010509449607691649",
            "extra": "mean: 525.1999902312252 usec\nrounds: 1126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 359.64974527223313,
            "unit": "iter/sec",
            "range": "stddev: 0.0000731090299143349",
            "extra": "mean: 2.7804829925378103 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7294.632486628789,
            "unit": "iter/sec",
            "range": "stddev: 0.000016992181773672136",
            "extra": "mean: 137.08709819624505 usec\nrounds: 3381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1881.012337144485,
            "unit": "iter/sec",
            "range": "stddev: 0.00010617222834777763",
            "extra": "mean: 531.6286237218802 usec\nrounds: 978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5909098.652809494,
            "unit": "iter/sec",
            "range": "stddev: 7.127932063425559e-8",
            "extra": "mean: 169.2305474583525 nsec\nrounds: 50506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 72.76713204842402,
            "unit": "iter/sec",
            "range": "stddev: 0.023230820185240194",
            "extra": "mean: 13.742468225002114 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.62670764505297,
            "unit": "iter/sec",
            "range": "stddev: 0.00009944032845289998",
            "extra": "mean: 10.457329595742207 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 81.46379710289024,
            "unit": "iter/sec",
            "range": "stddev: 0.0010921589935886109",
            "extra": "mean: 12.275391469132995 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1456.9304853729514,
            "unit": "iter/sec",
            "range": "stddev: 0.005264583097405853",
            "extra": "mean: 686.3745456901573 usec\nrounds: 1160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 444.27095251200274,
            "unit": "iter/sec",
            "range": "stddev: 0.000048820246974757875",
            "extra": "mean: 2.250878645893428 msec\nrounds: 353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1936.9391699357918,
            "unit": "iter/sec",
            "range": "stddev: 0.00010008690209297614",
            "extra": "mean: 516.2784745755074 usec\nrounds: 1003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1595409.658389323,
            "unit": "iter/sec",
            "range": "stddev: 1.271436145825084e-7",
            "extra": "mean: 626.7982613378244 nsec\nrounds: 151493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 70.67988008097217,
            "unit": "iter/sec",
            "range": "stddev: 0.0008868332216520326",
            "extra": "mean: 14.148297915253698 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.2585674340266,
            "unit": "iter/sec",
            "range": "stddev: 0.0011087456343038108",
            "extra": "mean: 11.868229314282935 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 560.0088722265741,
            "unit": "iter/sec",
            "range": "stddev: 0.00005033792738745318",
            "extra": "mean: 1.7856859946236885 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.687619097458467,
            "unit": "iter/sec",
            "range": "stddev: 0.009674311255871152",
            "extra": "mean: 1.454293523399997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9170.717164108019,
            "unit": "iter/sec",
            "range": "stddev: 0.000006108112448039323",
            "extra": "mean: 109.04272611456818 usec\nrounds: 4239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 216.40211550085266,
            "unit": "iter/sec",
            "range": "stddev: 0.0005793465875874892",
            "extra": "mean: 4.621026914111012 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14403056505160317,
            "unit": "iter/sec",
            "range": "stddev: 0.13675808802383382",
            "extra": "mean: 6.942970748200014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12095.516444452946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024436226429358553",
            "extra": "mean: 82.67526273825243 usec\nrounds: 5142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 232.30425272825596,
            "unit": "iter/sec",
            "range": "stddev: 0.00047539077002976154",
            "extra": "mean: 4.304699497558388 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 87.33947837047849,
            "unit": "iter/sec",
            "range": "stddev: 0.0010149678865529939",
            "extra": "mean: 11.449576052631988 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.9159380300795,
            "unit": "iter/sec",
            "range": "stddev: 0.00047886580639697765",
            "extra": "mean: 12.358504694443043 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 140.76462531166126,
            "unit": "iter/sec",
            "range": "stddev: 0.00006878125004876284",
            "extra": "mean: 7.104057555553751 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 163.3130126425732,
            "unit": "iter/sec",
            "range": "stddev: 0.000059046555965562586",
            "extra": "mean: 6.123210782894561 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.10926012566348,
            "unit": "iter/sec",
            "range": "stddev: 0.0003422950288474756",
            "extra": "mean: 49.728333799998836 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}