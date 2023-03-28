window.BENCHMARK_DATA = {
  "lastUpdate": 1680022585109,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "b417ad264ae425c27586d8169c5ab008739121a9",
          "message": "refactor(datatypes): remove direct `ir` dependency from `datatypes`\n\nThis change was required to prevent import cycles. The value expression\ncorresponding to a datatype is now can be retrieved using\n`getattr(ibis.expr.types, DataType.scalar|column)`.\n\nBREAKING CHANGE: `DataType.scalar` and `column` class attributes are now strings.",
          "timestamp": "2023-03-28T18:27:52+02:00",
          "tree_id": "ba51b080584e63743766ffd861d6ff2bfa346549",
          "url": "https://github.com/ibis-project/ibis/commit/b417ad264ae425c27586d8169c5ab008739121a9"
        },
        "date": 1680022497413,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 106.00651841976178,
            "unit": "iter/sec",
            "range": "stddev: 0.0063862075047402865",
            "extra": "mean: 9.433382162785753 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 314.731074784444,
            "unit": "iter/sec",
            "range": "stddev: 0.00022645130935396222",
            "extra": "mean: 3.1773157470544957 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.86962042089,
            "unit": "iter/sec",
            "range": "stddev: 0.000029864894885930204",
            "extra": "mean: 1.4558803741927535 msec\nrounds: 465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.74592678751435,
            "unit": "iter/sec",
            "range": "stddev: 0.0005830134956329343",
            "extra": "mean: 8.281852867465872 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9245401797335773,
            "unit": "iter/sec",
            "range": "stddev: 0.005510026483608659",
            "extra": "mean: 1.0816187570000124 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.90993244285602,
            "unit": "iter/sec",
            "range": "stddev: 0.0006122443014920883",
            "extra": "mean: 9.909827266669582 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.252621812754414,
            "unit": "iter/sec",
            "range": "stddev: 0.000202923832261338",
            "extra": "mean: 97.53602719998753 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.87028744417653,
            "unit": "iter/sec",
            "range": "stddev: 0.0007135539064086871",
            "extra": "mean: 8.412531184208811 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 297.1654207717148,
            "unit": "iter/sec",
            "range": "stddev: 0.0002448219843961845",
            "extra": "mean: 3.365129083333721 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.57901922262974,
            "unit": "iter/sec",
            "range": "stddev: 0.0006767587076281841",
            "extra": "mean: 9.562147431036637 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5238.793354927672,
            "unit": "iter/sec",
            "range": "stddev: 0.000052722690795268326",
            "extra": "mean: 190.88365053746352 usec\nrounds: 3162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 322.10868962898803,
            "unit": "iter/sec",
            "range": "stddev: 0.00009953961602717198",
            "extra": "mean: 3.104542138095754 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.63643887821416,
            "unit": "iter/sec",
            "range": "stddev: 0.0006809686614121532",
            "extra": "mean: 10.912689452380521 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.002569045240215,
            "unit": "iter/sec",
            "range": "stddev: 0.0008480940135053784",
            "extra": "mean: 24.388715714292175 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.1581273624014,
            "unit": "iter/sec",
            "range": "stddev: 0.000031816261949728966",
            "extra": "mean: 1.8478887213132855 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.2563723124456,
            "unit": "iter/sec",
            "range": "stddev: 0.0006483340191773085",
            "extra": "mean: 8.246989258620276 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.30650148355792,
            "unit": "iter/sec",
            "range": "stddev: 0.00007224341955251085",
            "extra": "mean: 10.717366786881575 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.92350902557465,
            "unit": "iter/sec",
            "range": "stddev: 0.00011781813530276315",
            "extra": "mean: 6.670068000005358 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13435.928752742562,
            "unit": "iter/sec",
            "range": "stddev: 0.000001935475993693423",
            "extra": "mean: 74.42730743833978 usec\nrounds: 1815"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5638.804222737795,
            "unit": "iter/sec",
            "range": "stddev: 0.00004384269538881855",
            "extra": "mean: 177.3425642209072 usec\nrounds: 1962"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.84112468594884,
            "unit": "iter/sec",
            "range": "stddev: 0.000039526833468256685",
            "extra": "mean: 3.414820924050297 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70684.02637176418,
            "unit": "iter/sec",
            "range": "stddev: 5.421343407135024e-7",
            "extra": "mean: 14.147467982942542 usec\nrounds: 13774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.15877099706869,
            "unit": "iter/sec",
            "range": "stddev: 0.0005581349709962968",
            "extra": "mean: 16.087834169809412 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 140.00297374804052,
            "unit": "iter/sec",
            "range": "stddev: 0.00036904474768465395",
            "extra": "mean: 7.142705424241005 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.61636807778741,
            "unit": "iter/sec",
            "range": "stddev: 0.0007231816597463125",
            "extra": "mean: 9.55873367020781 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5279.549541030931,
            "unit": "iter/sec",
            "range": "stddev: 0.00003938275033409284",
            "extra": "mean: 189.4100987647388 usec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.64264614132159,
            "unit": "iter/sec",
            "range": "stddev: 0.0006610295114935209",
            "extra": "mean: 8.288942857143512 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.6235374949562,
            "unit": "iter/sec",
            "range": "stddev: 0.0003529346157396757",
            "extra": "mean: 18.30712630232594 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5630281.518891213,
            "unit": "iter/sec",
            "range": "stddev: 1.1182174029593547e-8",
            "extra": "mean: 177.61101228162926 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4431.287989991672,
            "unit": "iter/sec",
            "range": "stddev: 0.00033565900025831104",
            "extra": "mean: 225.6680229898304 usec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 76.66042851142257,
            "unit": "iter/sec",
            "range": "stddev: 0.02037256370127774",
            "extra": "mean: 13.044539659088887 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 309.9838901588021,
            "unit": "iter/sec",
            "range": "stddev: 0.00024162418621606282",
            "extra": "mean: 3.2259740965496895 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.12456538468372,
            "unit": "iter/sec",
            "range": "stddev: 0.000751006988238183",
            "extra": "mean: 9.987558958762504 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.771854099402868,
            "unit": "iter/sec",
            "range": "stddev: 0.00320324274361526",
            "extra": "mean: 564.3805549999911 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 189.1733705886977,
            "unit": "iter/sec",
            "range": "stddev: 0.000034453049894910113",
            "extra": "mean: 5.286156274998177 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 305.4874320100045,
            "unit": "iter/sec",
            "range": "stddev: 0.00022327893306905563",
            "extra": "mean: 3.2734570892829753 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1887473.5423145306,
            "unit": "iter/sec",
            "range": "stddev: 9.616675016321658e-8",
            "extra": "mean: 529.8087510004201 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4504.4190958214185,
            "unit": "iter/sec",
            "range": "stddev: 0.002658697150133129",
            "extra": "mean: 222.00420936134975 usec\nrounds: 2713"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.56000471285084,
            "unit": "iter/sec",
            "range": "stddev: 0.0007311149281096279",
            "extra": "mean: 8.364001008545591 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 276.51472815611464,
            "unit": "iter/sec",
            "range": "stddev: 0.0003243626086969122",
            "extra": "mean: 3.6164438931275305 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 72.40021924131284,
            "unit": "iter/sec",
            "range": "stddev: 0.0002751742264640968",
            "extra": "mean: 13.812112870362448 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 736.4420222095106,
            "unit": "iter/sec",
            "range": "stddev: 0.000012551365419854414",
            "extra": "mean: 1.357880145133149 msec\nrounds: 627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.06696044956719,
            "unit": "iter/sec",
            "range": "stddev: 0.00021212655487383425",
            "extra": "mean: 14.272061947367906 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.79864029733113,
            "unit": "iter/sec",
            "range": "stddev: 0.00020692364726390667",
            "extra": "mean: 3.3355721660652984 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 725275.7328306332,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013471310510040868",
            "extra": "mean: 1.3787859633703208 usec\nrounds: 23809"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.453443784535965,
            "unit": "iter/sec",
            "range": "stddev: 0.00039212513925366324",
            "extra": "mean: 183.3703691666623 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7454721.593444655,
            "unit": "iter/sec",
            "range": "stddev: 5.412033458333611e-9",
            "extra": "mean: 134.14317187645486 nsec\nrounds: 64517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 492740.93746905617,
            "unit": "iter/sec",
            "range": "stddev: 5.443512674001017e-7",
            "extra": "mean: 2.0294640123397487 usec\nrounds: 2084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.97025428088597,
            "unit": "iter/sec",
            "range": "stddev: 0.00011929572393901608",
            "extra": "mean: 6.290484999999378 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.80965654930382,
            "unit": "iter/sec",
            "range": "stddev: 0.0000723262479555598",
            "extra": "mean: 8.943771324071978 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1159.1117551803773,
            "unit": "iter/sec",
            "range": "stddev: 0.000012956255029756901",
            "extra": "mean: 862.7295819671705 usec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 97.66957252818806,
            "unit": "iter/sec",
            "range": "stddev: 0.014084256888086023",
            "extra": "mean: 10.238603222220448 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.10180893828796,
            "unit": "iter/sec",
            "range": "stddev: 0.00005990660727517681",
            "extra": "mean: 8.467270814814807 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.91867933687726,
            "unit": "iter/sec",
            "range": "stddev: 0.0006681240244796006",
            "extra": "mean: 9.53119126470472 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6083202.695210533,
            "unit": "iter/sec",
            "range": "stddev: 1.2573997929902488e-8",
            "extra": "mean: 164.3870918168747 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.44944663434796,
            "unit": "iter/sec",
            "range": "stddev: 0.0011564172909795454",
            "extra": "mean: 64.72723739999537 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.384811557954656,
            "unit": "iter/sec",
            "range": "stddev: 0.0004545445034036602",
            "extra": "mean: 39.39363495832756 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11728.386554878947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018052704459257337",
            "extra": "mean: 85.26321973792766 usec\nrounds: 5725"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 165.86683943935898,
            "unit": "iter/sec",
            "range": "stddev: 0.003611768593321598",
            "extra": "mean: 6.028932626799105 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11583.563224289494,
            "unit": "iter/sec",
            "range": "stddev: 0.000013955213511231472",
            "extra": "mean: 86.32922190152223 usec\nrounds: 4155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12722572.50122693,
            "unit": "iter/sec",
            "range": "stddev: 4.218284449533471e-9",
            "extra": "mean: 78.60045599298684 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138935.8774800221,
            "unit": "iter/sec",
            "range": "stddev: 3.75540469336686e-7",
            "extra": "mean: 7.197564935261535 usec\nrounds: 34365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 103.13405010031437,
            "unit": "iter/sec",
            "range": "stddev: 0.00017997658823097113",
            "extra": "mean: 9.69611877965948 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 234.3782125367,
            "unit": "iter/sec",
            "range": "stddev: 0.0042236054475650875",
            "extra": "mean: 4.266608185022384 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1675649.4745134336,
            "unit": "iter/sec",
            "range": "stddev: 9.526032895366756e-8",
            "extra": "mean: 596.7835249614927 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.80544904792352,
            "unit": "iter/sec",
            "range": "stddev: 0.03667137259113396",
            "extra": "mean: 28.731133410262945 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.20912779771497,
            "unit": "iter/sec",
            "range": "stddev: 0.0002877367583816617",
            "extra": "mean: 10.287099808990432 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1753.2496872335687,
            "unit": "iter/sec",
            "range": "stddev: 0.000009421814070573706",
            "extra": "mean: 570.3694158804544 usec\nrounds: 1272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.18264991559254,
            "unit": "iter/sec",
            "range": "stddev: 0.00023508924803481885",
            "extra": "mean: 20.754358711109138 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5570.827436423156,
            "unit": "iter/sec",
            "range": "stddev: 0.00004729563248777222",
            "extra": "mean: 179.50654753040905 usec\nrounds: 2146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8084.972590854939,
            "unit": "iter/sec",
            "range": "stddev: 0.000012173532077160345",
            "extra": "mean: 123.68625728318713 usec\nrounds: 3638"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.31249557394158,
            "unit": "iter/sec",
            "range": "stddev: 0.0008612555505293027",
            "extra": "mean: 23.088025447363908 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9211305878059699,
            "unit": "iter/sec",
            "range": "stddev: 0.0028052271243258183",
            "extra": "mean: 1.0856224005999935 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5729.846062513735,
            "unit": "iter/sec",
            "range": "stddev: 0.000052821322131938265",
            "extra": "mean: 174.52475844722625 usec\nrounds: 2397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6509097940374738,
            "unit": "iter/sec",
            "range": "stddev: 0.07786949490491467",
            "extra": "mean: 1.5363111895999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.6450801972631,
            "unit": "iter/sec",
            "range": "stddev: 0.000078549711303555",
            "extra": "mean: 6.110785602564817 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5848142485483168,
            "unit": "iter/sec",
            "range": "stddev: 0.001644107819836275",
            "extra": "mean: 386.87499519999164 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 353.4949098129503,
            "unit": "iter/sec",
            "range": "stddev: 0.00003244706818122716",
            "extra": "mean: 2.828895048387384 msec\nrounds: 310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2537401.9125389634,
            "unit": "iter/sec",
            "range": "stddev: 1.743210856883942e-8",
            "extra": "mean: 394.10390409899435 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.92898304983649,
            "unit": "iter/sec",
            "range": "stddev: 0.0006832733118899538",
            "extra": "mean: 9.715436511364507 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.24385109356652,
            "unit": "iter/sec",
            "range": "stddev: 0.0007669226172929572",
            "extra": "mean: 8.386176652541476 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17802457838105967,
            "unit": "iter/sec",
            "range": "stddev: 0.01633010340622681",
            "extra": "mean: 5.617201900400016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5660.409342122815,
            "unit": "iter/sec",
            "range": "stddev: 0.00001897917109722033",
            "extra": "mean: 176.6656684276073 usec\nrounds: 2461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5872.146127790367,
            "unit": "iter/sec",
            "range": "stddev: 0.00004292689324002213",
            "extra": "mean: 170.295489628132 usec\nrounds: 2555"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.93419889603166,
            "unit": "iter/sec",
            "range": "stddev: 0.0002280275570648571",
            "extra": "mean: 3.2793960258322925 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 271.4682545866463,
            "unit": "iter/sec",
            "range": "stddev: 0.008161731492763214",
            "extra": "mean: 3.683671969389789 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1830204.6159661214,
            "unit": "iter/sec",
            "range": "stddev: 1.0441056632440697e-7",
            "extra": "mean: 546.3869948072029 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8510654706414505,
            "unit": "iter/sec",
            "range": "stddev: 0.0018050129274700356",
            "extra": "mean: 1.174997734600015 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}