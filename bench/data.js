window.BENCHMARK_DATA = {
  "lastUpdate": 1683127918795,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "5a013ffd3032e596a16a6a71476c2754f9bc9c8b",
          "message": "feat(duckdb): warn when querying an already consumed RecordBatchReader",
          "timestamp": "2023-05-03T08:27:01-07:00",
          "tree_id": "28fc5f6f9b3aba4cd647e031c5af26a99c5aae4a",
          "url": "https://github.com/ibis-project/ibis/commit/5a013ffd3032e596a16a6a71476c2754f9bc9c8b"
        },
        "date": 1683127838547,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6764711.4974794835,
            "unit": "iter/sec",
            "range": "stddev: 8.433951600585471e-9",
            "extra": "mean: 147.8259642518879 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.2069499860436,
            "unit": "iter/sec",
            "range": "stddev: 0.00018152297675373577",
            "extra": "mean: 6.2032065000086805 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2523360.4500821093,
            "unit": "iter/sec",
            "range": "stddev: 1.3093949619292214e-8",
            "extra": "mean: 396.29693013848635 nsec\nrounds: 123442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3662926409774967,
            "unit": "iter/sec",
            "range": "stddev: 0.00045129554176094394",
            "extra": "mean: 731.9076235999944 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4506038.867779565,
            "unit": "iter/sec",
            "range": "stddev: 1.0016449859019613e-8",
            "extra": "mean: 221.9244061900179 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17561581622827277,
            "unit": "iter/sec",
            "range": "stddev: 0.051614509284231114",
            "extra": "mean: 5.694247941200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2173.311445649499,
            "unit": "iter/sec",
            "range": "stddev: 0.00010954649318827441",
            "extra": "mean: 460.1273333381574 usec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 188.04805499477087,
            "unit": "iter/sec",
            "range": "stddev: 0.0002810505375315753",
            "extra": "mean: 5.317789647054885 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10385.989133700097,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016959522354966086",
            "extra": "mean: 96.28355923801564 usec\nrounds: 6035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 96.08948141248966,
            "unit": "iter/sec",
            "range": "stddev: 0.009537975638390782",
            "extra": "mean: 10.40696635365565 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.64254406430481,
            "unit": "iter/sec",
            "range": "stddev: 0.00033640431424299843",
            "extra": "mean: 7.53905925926151 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 427.01533790271867,
            "unit": "iter/sec",
            "range": "stddev: 0.000033414421039666716",
            "extra": "mean: 2.341836255604985 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.69232437591963,
            "unit": "iter/sec",
            "range": "stddev: 0.0007268570828234515",
            "extra": "mean: 9.737826133327744 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.5722223911575,
            "unit": "iter/sec",
            "range": "stddev: 0.000022346348424890572",
            "extra": "mean: 1.3340942608705142 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 102.4344648509791,
            "unit": "iter/sec",
            "range": "stddev: 0.0007200452609637107",
            "extra": "mean: 9.762339281557164 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.478688525605666,
            "unit": "iter/sec",
            "range": "stddev: 0.0003648405251067296",
            "extra": "mean: 37.76622089998796 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.801259978696116,
            "unit": "iter/sec",
            "range": "stddev: 0.0006532656109524006",
            "extra": "mean: 22.320800809520083 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5561051.05970347,
            "unit": "iter/sec",
            "range": "stddev: 7.72507062968938e-9",
            "extra": "mean: 179.82212162132083 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 93.03800264029577,
            "unit": "iter/sec",
            "range": "stddev: 0.010452650426620486",
            "extra": "mean: 10.748296089998917 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 128.28003946214264,
            "unit": "iter/sec",
            "range": "stddev: 0.00007488116570798723",
            "extra": "mean: 7.795445060609877 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 102.72678526683805,
            "unit": "iter/sec",
            "range": "stddev: 0.0006480933329136749",
            "extra": "mean: 9.734559466671222 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1169.463064763726,
            "unit": "iter/sec",
            "range": "stddev: 0.000013867327710353968",
            "extra": "mean: 855.0932732553091 usec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.06413510730022,
            "unit": "iter/sec",
            "range": "stddev: 0.000591315633679984",
            "extra": "mean: 9.51799583158151 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5857054689684866,
            "unit": "iter/sec",
            "range": "stddev: 0.004098755123359952",
            "extra": "mean: 386.74165019998554 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.0201859039479,
            "unit": "iter/sec",
            "range": "stddev: 0.00005383682345967753",
            "extra": "mean: 1.4555613073933897 msec\nrounds: 514"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.7931467997523,
            "unit": "iter/sec",
            "range": "stddev: 0.00002045074836069265",
            "extra": "mean: 1.8423224498980655 msec\nrounds: 489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 107.80644504982202,
            "unit": "iter/sec",
            "range": "stddev: 0.00009252322120437968",
            "extra": "mean: 9.275883269667752 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4559.073499872959,
            "unit": "iter/sec",
            "range": "stddev: 0.000023506582475504276",
            "extra": "mean: 219.34281165413665 usec\nrounds: 961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 232.89661595007033,
            "unit": "iter/sec",
            "range": "stddev: 0.00889277720350034",
            "extra": "mean: 4.293750666666559 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 156.18588054154262,
            "unit": "iter/sec",
            "range": "stddev: 0.004287721210318379",
            "extra": "mean: 6.402627411214794 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.565721032657555,
            "unit": "iter/sec",
            "range": "stddev: 0.00016133344924221422",
            "extra": "mean: 116.74440437499811 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2116.3396457676586,
            "unit": "iter/sec",
            "range": "stddev: 0.00009970613185964499",
            "extra": "mean: 472.51394737127396 usec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 292.3669462231015,
            "unit": "iter/sec",
            "range": "stddev: 0.00023567226411941625",
            "extra": "mean: 3.420359287937128 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 85.96603475367395,
            "unit": "iter/sec",
            "range": "stddev: 0.013286806827123573",
            "extra": "mean: 11.632501171717273 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6726043675687479,
            "unit": "iter/sec",
            "range": "stddev: 0.0012693234064415897",
            "extra": "mean: 597.8700160000017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 277.91340281798057,
            "unit": "iter/sec",
            "range": "stddev: 0.0002555256165849879",
            "extra": "mean: 3.5982431572576954 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9586612293784222,
            "unit": "iter/sec",
            "range": "stddev: 0.006158810921342498",
            "extra": "mean: 1.0431213544000115 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8531.408978151776,
            "unit": "iter/sec",
            "range": "stddev: 0.000013512843028601016",
            "extra": "mean: 117.21393295772319 usec\nrounds: 3729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14087.484671005253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013328018250078464",
            "extra": "mean: 70.9849929461284 usec\nrounds: 6663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2187.0219615816122,
            "unit": "iter/sec",
            "range": "stddev: 0.00008541477813279738",
            "extra": "mean: 457.2427792525774 usec\nrounds: 1205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 319.9080840094016,
            "unit": "iter/sec",
            "range": "stddev: 0.000033777269121617046",
            "extra": "mean: 3.125897874999031 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7955401755548394,
            "unit": "iter/sec",
            "range": "stddev: 0.005373943102252423",
            "extra": "mean: 1.2570075411999937 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.74593523337737,
            "unit": "iter/sec",
            "range": "stddev: 0.000050556702645245476",
            "extra": "mean: 6.033330462022837 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.4159974394062,
            "unit": "iter/sec",
            "range": "stddev: 0.00024960144404894964",
            "extra": "mean: 14.833274563634612 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 257.19919391272657,
            "unit": "iter/sec",
            "range": "stddev: 0.0003797041685999948",
            "extra": "mean: 3.8880370688071526 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 245.09483777412353,
            "unit": "iter/sec",
            "range": "stddev: 0.00909385571721457",
            "extra": "mean: 4.08005329317294 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2691103.2791170045,
            "unit": "iter/sec",
            "range": "stddev: 1.3521408028471759e-8",
            "extra": "mean: 371.5948056548658 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.22995422710841,
            "unit": "iter/sec",
            "range": "stddev: 0.0008087548166802933",
            "extra": "mean: 10.50089762319068 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2185.047026264349,
            "unit": "iter/sec",
            "range": "stddev: 0.00008441353206389548",
            "extra": "mean: 457.65605407113065 usec\nrounds: 1535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11669007.40108017,
            "unit": "iter/sec",
            "range": "stddev: 2.940694034003673e-9",
            "extra": "mean: 85.69709193150995 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.6438152576485,
            "unit": "iter/sec",
            "range": "stddev: 0.0006032061472355194",
            "extra": "mean: 9.648429069444198 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2239.6499714210627,
            "unit": "iter/sec",
            "range": "stddev: 0.00009452964664349795",
            "extra": "mean: 446.4983424912143 usec\nrounds: 1638"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.03390640863452,
            "unit": "iter/sec",
            "range": "stddev: 0.000041473496113048396",
            "extra": "mean: 5.049640327432327 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1777.5442421230316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063465537333329866",
            "extra": "mean: 562.5739018487876 usec\nrounds: 1406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.950228593237554,
            "unit": "iter/sec",
            "range": "stddev: 0.00014165603925944123",
            "extra": "mean: 20.019928399995024 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.97194703921027,
            "unit": "iter/sec",
            "range": "stddev: 0.027755587782331184",
            "extra": "mean: 27.047534146347736 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.89961522886603,
            "unit": "iter/sec",
            "range": "stddev: 0.00007988458050319785",
            "extra": "mean: 8.936581220183111 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2126.2068615905678,
            "unit": "iter/sec",
            "range": "stddev: 0.00008543114609573415",
            "extra": "mean: 470.32112352977845 usec\nrounds: 1190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 282.0154522552283,
            "unit": "iter/sec",
            "range": "stddev: 0.00023995551506198325",
            "extra": "mean: 3.5459049920959105 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.21059449400238,
            "unit": "iter/sec",
            "range": "stddev: 0.0006735649487052112",
            "extra": "mean: 9.241239313729356 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2728842.750553649,
            "unit": "iter/sec",
            "range": "stddev: 1.5187900032766935e-8",
            "extra": "mean: 366.4557072027719 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.07083602835603,
            "unit": "iter/sec",
            "range": "stddev: 0.0006710594450795749",
            "extra": "mean: 9.427662093024976 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.33272366748339,
            "unit": "iter/sec",
            "range": "stddev: 0.00013634298713663344",
            "extra": "mean: 16.854105764708695 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6120380.006490392,
            "unit": "iter/sec",
            "range": "stddev: 7.612507065478878e-9",
            "extra": "mean: 163.3885475964462 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.0531256209195,
            "unit": "iter/sec",
            "range": "stddev: 0.000031272228921233",
            "extra": "mean: 9.086520663161561 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.02945415383523,
            "unit": "iter/sec",
            "range": "stddev: 0.00009595538903040286",
            "extra": "mean: 9.52113869444007 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.04392787739325,
            "unit": "iter/sec",
            "range": "stddev: 0.0001330520003238696",
            "extra": "mean: 18.503466333325175 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2719092.672484538,
            "unit": "iter/sec",
            "range": "stddev: 1.6008534753142245e-8",
            "extra": "mean: 367.7697380891001 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.05269672319069,
            "unit": "iter/sec",
            "range": "stddev: 0.0007095084451763539",
            "extra": "mean: 9.79885913953274 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.16346074424758,
            "unit": "iter/sec",
            "range": "stddev: 0.000048060472158011416",
            "extra": "mean: 52.182641399997465 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2154.458954786294,
            "unit": "iter/sec",
            "range": "stddev: 0.00008383030479323129",
            "extra": "mean: 464.1536557372904 usec\nrounds: 1342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1043439.5339421607,
            "unit": "iter/sec",
            "range": "stddev: 9.817086396024889e-8",
            "extra": "mean: 958.3689015710913 nsec\nrounds: 112347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 151591.30920702606,
            "unit": "iter/sec",
            "range": "stddev: 3.7629451921384133e-7",
            "extra": "mean: 6.59668423757931 usec\nrounds: 36765"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.23804667329044,
            "unit": "iter/sec",
            "range": "stddev: 0.0007728766991556275",
            "extra": "mean: 10.28404039583286 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2214.7548553365004,
            "unit": "iter/sec",
            "range": "stddev: 0.00010103767285304855",
            "extra": "mean: 451.5172401995092 usec\nrounds: 1403"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6236034.712037996,
            "unit": "iter/sec",
            "range": "stddev: 5.564692944233482e-9",
            "extra": "mean: 160.3583120006897 nsec\nrounds: 62500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12449.397313975234,
            "unit": "iter/sec",
            "range": "stddev: 0.000011983344250463761",
            "extra": "mean: 80.32517356301553 usec\nrounds: 4350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 178.28081531285304,
            "unit": "iter/sec",
            "range": "stddev: 0.000042938754899744584",
            "extra": "mean: 5.609128487802612 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.22131746819392,
            "unit": "iter/sec",
            "range": "stddev: 0.0007046049411849536",
            "extra": "mean: 9.326503568627007 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 281.04929422488163,
            "unit": "iter/sec",
            "range": "stddev: 0.0002620961307239397",
            "extra": "mean: 3.5580946849838018 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 281.9796326962749,
            "unit": "iter/sec",
            "range": "stddev: 0.00025167606109377885",
            "extra": "mean: 3.5463554244611606 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.13897257610553,
            "unit": "iter/sec",
            "range": "stddev: 0.00012816312112232792",
            "extra": "mean: 9.887385391892481 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.55224740551392,
            "unit": "iter/sec",
            "range": "stddev: 0.0007672010993225395",
            "extra": "mean: 9.847147902171425 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 235.57350386341977,
            "unit": "iter/sec",
            "range": "stddev: 0.003926984482563913",
            "extra": "mean: 4.244959571428617 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.091549688205745,
            "unit": "iter/sec",
            "range": "stddev: 0.00010766935017209668",
            "extra": "mean: 33.231920933335836 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.00241020760853,
            "unit": "iter/sec",
            "range": "stddev: 0.0006392915051217522",
            "extra": "mean: 9.708510684210498 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.49341902781609,
            "unit": "iter/sec",
            "range": "stddev: 0.03560826138984186",
            "extra": "mean: 28.991037368420418 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9626831871907139,
            "unit": "iter/sec",
            "range": "stddev: 0.006424780096897068",
            "extra": "mean: 1.0387633369999776 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}