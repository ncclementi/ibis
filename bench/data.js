window.BENCHMARK_DATA = {
  "lastUpdate": 1676032101293,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "nicholas.b.crews@gmail.com",
            "name": "Nick Crews",
            "username": "NickCrews"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "b954edd0749cc0e321d0fd89ab71f1c03071762c",
          "message": "docs: improve Expr.substitute() docstring",
          "timestamp": "2023-02-10T07:23:27-05:00",
          "tree_id": "01dbe0b6f2c89f9e85a5476a01d7dc6a19cdc24b",
          "url": "https://github.com/ibis-project/ibis/commit/b954edd0749cc0e321d0fd89ab71f1c03071762c"
        },
        "date": 1676032018189,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 115.58897239538847,
            "unit": "iter/sec",
            "range": "stddev: 0.003963989035897355",
            "extra": "mean: 8.651344321838577 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.67161020314833,
            "unit": "iter/sec",
            "range": "stddev: 0.00045373690319596343",
            "extra": "mean: 11.406200909083902 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19361.8474935605,
            "unit": "iter/sec",
            "range": "stddev: 0.000014103303334188446",
            "extra": "mean: 51.647963880130085 usec\nrounds: 5371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 243.6127164634014,
            "unit": "iter/sec",
            "range": "stddev: 0.00018779440128076713",
            "extra": "mean: 4.104876028301391 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.405725903145365,
            "unit": "iter/sec",
            "range": "stddev: 0.0003449529938158652",
            "extra": "mean: 74.59499076923329 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4628386.3613257855,
            "unit": "iter/sec",
            "range": "stddev: 1.0601254816958824e-8",
            "extra": "mean: 216.0580215075774 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1562214.9780066407,
            "unit": "iter/sec",
            "range": "stddev: 1.430404787787653e-7",
            "extra": "mean: 640.1167663082982 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 158.3990440897102,
            "unit": "iter/sec",
            "range": "stddev: 0.0006244720983760974",
            "extra": "mean: 6.3131694117651636 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2882546469209797,
            "unit": "iter/sec",
            "range": "stddev: 0.0012663809303598871",
            "extra": "mean: 437.0142987999941 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.55504829345753,
            "unit": "iter/sec",
            "range": "stddev: 0.0001793492929991901",
            "extra": "mean: 13.782638472727367 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.13957835544188,
            "unit": "iter/sec",
            "range": "stddev: 0.00023688922309086094",
            "extra": "mean: 22.655404452378782 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8986.96229662118,
            "unit": "iter/sec",
            "range": "stddev: 0.00008222532290552806",
            "extra": "mean: 111.27230392142283 usec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4331088.195443805,
            "unit": "iter/sec",
            "range": "stddev: 1.4556112236762495e-8",
            "extra": "mean: 230.88885630494482 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 395841.9770030066,
            "unit": "iter/sec",
            "range": "stddev: 5.058490789329251e-7",
            "extra": "mean: 2.5262606244319676 usec\nrounds: 1953"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6029.692515201308,
            "unit": "iter/sec",
            "range": "stddev: 0.00004909190841258454",
            "extra": "mean: 165.84593616986686 usec\nrounds: 2585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.3462337549108,
            "unit": "iter/sec",
            "range": "stddev: 0.00012162635182807442",
            "extra": "mean: 7.025124400001914 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5992.203178443404,
            "unit": "iter/sec",
            "range": "stddev: 0.00004994238800903846",
            "extra": "mean: 166.88352684659304 usec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 248.51179740942197,
            "unit": "iter/sec",
            "range": "stddev: 0.00019355216912313641",
            "extra": "mean: 4.023953834080983 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 143.07198670157157,
            "unit": "iter/sec",
            "range": "stddev: 0.008327602230207369",
            "extra": "mean: 6.9894884600006435 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5870886980105213,
            "unit": "iter/sec",
            "range": "stddev: 0.005593049411199003",
            "extra": "mean: 1.7033201343999962 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1474502.3756762461,
            "unit": "iter/sec",
            "range": "stddev: 1.0888049952054943e-7",
            "extra": "mean: 678.1949059535243 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11846016.412874267,
            "unit": "iter/sec",
            "range": "stddev: 3.1669634630017294e-9",
            "extra": "mean: 84.41656377518875 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.91813426436087,
            "unit": "iter/sec",
            "range": "stddev: 0.00029379789251458843",
            "extra": "mean: 11.37421771250402 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.214283497483912,
            "unit": "iter/sec",
            "range": "stddev: 0.0008711499309145654",
            "extra": "mean: 38.14714219047725 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 81.72606204179837,
            "unit": "iter/sec",
            "range": "stddev: 0.013678819021543878",
            "extra": "mean: 12.235998835824917 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5961.082118345288,
            "unit": "iter/sec",
            "range": "stddev: 0.00009304029327235816",
            "extra": "mean: 167.75477675814767 usec\nrounds: 327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 142.62345501674457,
            "unit": "iter/sec",
            "range": "stddev: 0.0001788555515774865",
            "extra": "mean: 7.011469466102865 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 412.38408099354666,
            "unit": "iter/sec",
            "range": "stddev: 0.000025377794892043753",
            "extra": "mean: 2.4249238660976555 msec\nrounds: 351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5839302174782652,
            "unit": "iter/sec",
            "range": "stddev: 0.002132625895269702",
            "extra": "mean: 631.3409448000016 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.34360004562004,
            "unit": "iter/sec",
            "range": "stddev: 0.00004089068155651144",
            "extra": "mean: 5.836226154544151 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 276.3222018169806,
            "unit": "iter/sec",
            "range": "stddev: 0.00003916722972550579",
            "extra": "mean: 3.6189636352939183 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4918.462909090737,
            "unit": "iter/sec",
            "range": "stddev: 0.00009086563505026863",
            "extra": "mean: 203.3155517248512 usec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7507005029620177,
            "unit": "iter/sec",
            "range": "stddev: 0.002674828287646198",
            "extra": "mean: 1.3320891567999866 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.90743702300531,
            "unit": "iter/sec",
            "range": "stddev: 0.00009261220737769419",
            "extra": "mean: 6.948911193798401 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 253.22569078326657,
            "unit": "iter/sec",
            "range": "stddev: 0.00019427786074480114",
            "extra": "mean: 3.9490463898305257 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.867161035890056,
            "unit": "iter/sec",
            "range": "stddev: 0.00477516773297061",
            "extra": "mean: 1.1531883452000329 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.65553722943089,
            "unit": "iter/sec",
            "range": "stddev: 0.00010908756996305168",
            "extra": "mean: 9.741315734046 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 158.6126147537797,
            "unit": "iter/sec",
            "range": "stddev: 0.0006305655566906802",
            "extra": "mean: 6.304668777778725 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4490.470588667308,
            "unit": "iter/sec",
            "range": "stddev: 0.00006575279642194633",
            "extra": "mean: 222.693809090682 usec\nrounds: 1430"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 330.2391860854082,
            "unit": "iter/sec",
            "range": "stddev: 0.000030380430197818426",
            "extra": "mean: 3.028108238316015 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.95554207514444,
            "unit": "iter/sec",
            "range": "stddev: 0.000313353883484342",
            "extra": "mean: 17.55755390196528 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5667.7194708300985,
            "unit": "iter/sec",
            "range": "stddev: 0.00006631752482217145",
            "extra": "mean: 176.43780803666687 usec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.1416240324135,
            "unit": "iter/sec",
            "range": "stddev: 0.0006477388949665754",
            "extra": "mean: 22.152503846161135 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.974458145710756,
            "unit": "iter/sec",
            "range": "stddev: 0.022395467957956668",
            "extra": "mean: 30.326502882355257 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 250.69601482464986,
            "unit": "iter/sec",
            "range": "stddev: 0.0001182567982116888",
            "extra": "mean: 3.9888946806731385 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.53220229169601,
            "unit": "iter/sec",
            "range": "stddev: 0.00011200531538954895",
            "extra": "mean: 14.807750466668304 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.93025816689462,
            "unit": "iter/sec",
            "range": "stddev: 0.00014101307309679893",
            "extra": "mean: 10.00697905062838 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1491907.9581817524,
            "unit": "iter/sec",
            "range": "stddev: 1.4395216106786247e-7",
            "extra": "mean: 670.2826367510901 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.01780947803353,
            "unit": "iter/sec",
            "range": "stddev: 0.0007460442748521033",
            "extra": "mean: 11.23370711842516 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 624.580802340267,
            "unit": "iter/sec",
            "range": "stddev: 0.000016939923630930753",
            "extra": "mean: 1.601073866268479 msec\nrounds: 501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 141.9785009994142,
            "unit": "iter/sec",
            "range": "stddev: 0.0006701474254840802",
            "extra": "mean: 7.043319889707287 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.782902557169514,
            "unit": "iter/sec",
            "range": "stddev: 0.0007615992193564129",
            "extra": "mean: 28.749757107141654 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10960.172843557537,
            "unit": "iter/sec",
            "range": "stddev: 0.000002128282383971121",
            "extra": "mean: 91.2394370302113 usec\nrounds: 5590"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.30609193296557,
            "unit": "iter/sec",
            "range": "stddev: 0.0006596999996734333",
            "extra": "mean: 15.312507155174208 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 514.8359798844491,
            "unit": "iter/sec",
            "range": "stddev: 0.00002037951216900152",
            "extra": "mean: 1.9423661885955255 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 251.26524560279424,
            "unit": "iter/sec",
            "range": "stddev: 0.0001951508730565161",
            "extra": "mean: 3.979858008619395 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.5110753530592,
            "unit": "iter/sec",
            "range": "stddev: 0.000014553616127560935",
            "extra": "mean: 3.752189280221301 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 161.11789926807302,
            "unit": "iter/sec",
            "range": "stddev: 0.0006441358269667956",
            "extra": "mean: 6.206635045161361 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 224.53030091461903,
            "unit": "iter/sec",
            "range": "stddev: 0.0003870165182953616",
            "extra": "mean: 4.4537418599027525 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10456.70456061424,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029656123880176997",
            "extra": "mean: 95.63242359993183 usec\nrounds: 5000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15357283163980354,
            "unit": "iter/sec",
            "range": "stddev: 0.07395112953196348",
            "extra": "mean: 6.511568415599993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.170379987369218,
            "unit": "iter/sec",
            "range": "stddev: 0.00044761727685156433",
            "extra": "mean: 109.04673539998839 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1483714.1390534025,
            "unit": "iter/sec",
            "range": "stddev: 9.21276779465804e-8",
            "extra": "mean: 673.98427613421 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.10780704445227,
            "unit": "iter/sec",
            "range": "stddev: 0.0005797678559163335",
            "extra": "mean: 11.097817523254967 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.9751793624371,
            "unit": "iter/sec",
            "range": "stddev: 0.0000788598942673376",
            "extra": "mean: 10.419360574713147 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 158.5571925664994,
            "unit": "iter/sec",
            "range": "stddev: 0.0007139827941733508",
            "extra": "mean: 6.30687251592574 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 242.89152250730245,
            "unit": "iter/sec",
            "range": "stddev: 0.00023804285763786632",
            "extra": "mean: 4.117064233766888 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.29265437923752,
            "unit": "iter/sec",
            "range": "stddev: 0.0006359217701060271",
            "extra": "mean: 10.835098488888661 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5467239.850244749,
            "unit": "iter/sec",
            "range": "stddev: 4.754222150017023e-9",
            "extra": "mean: 182.90765128137434 nsec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 963.7039561811604,
            "unit": "iter/sec",
            "range": "stddev: 0.00016988089633120998",
            "extra": "mean: 1.037663064041647 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 253.42372824251518,
            "unit": "iter/sec",
            "range": "stddev: 0.00021204271837711988",
            "extra": "mean: 3.945960415526066 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.869470004771259,
            "unit": "iter/sec",
            "range": "stddev: 0.0001367894169185186",
            "extra": "mean: 205.36115820000305 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1438.167792684126,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053524696754149625",
            "extra": "mean: 695.3291577567934 usec\nrounds: 1141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8653852243495497,
            "unit": "iter/sec",
            "range": "stddev: 0.002149774412950282",
            "extra": "mean: 1.1555547423999883 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5048.090125279263,
            "unit": "iter/sec",
            "range": "stddev: 0.000053353700401663766",
            "extra": "mean: 198.09472001942112 usec\nrounds: 2168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5184.349593696523,
            "unit": "iter/sec",
            "range": "stddev: 0.00005013257395194599",
            "extra": "mean: 192.88822675381817 usec\nrounds: 3065"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.85354041039311,
            "unit": "iter/sec",
            "range": "stddev: 0.0005797932729815985",
            "extra": "mean: 10.542569056182852 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 561971.7571398144,
            "unit": "iter/sec",
            "range": "stddev: 2.473190000316961e-7",
            "extra": "mean: 1.7794488553829713 usec\nrounds: 23981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 147.65314992018594,
            "unit": "iter/sec",
            "range": "stddev: 0.000631859487772142",
            "extra": "mean: 6.772628965521907 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120422.08210135822,
            "unit": "iter/sec",
            "range": "stddev: 3.727977699769301e-7",
            "extra": "mean: 8.304124812908556 usec\nrounds: 39371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.1032692839515,
            "unit": "iter/sec",
            "range": "stddev: 0.0006401163463609614",
            "extra": "mean: 12.17978295774718 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56064.39748380603,
            "unit": "iter/sec",
            "range": "stddev: 5.798099304194327e-7",
            "extra": "mean: 17.836631532316847 usec\nrounds: 4497"
          }
        ]
      }
    ]
  }
}