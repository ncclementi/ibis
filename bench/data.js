window.BENCHMARK_DATA = {
  "lastUpdate": 1675593997657,
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
          "id": "121d9a0a65227d3a71f5fa19d888facaead5eb67",
          "message": "fix(api): fix broken `__radd__` array concat operation",
          "timestamp": "2023-02-05T05:41:52-05:00",
          "tree_id": "dcb589933097962429015f294b24f5174358ffed",
          "url": "https://github.com/ibis-project/ibis/commit/121d9a0a65227d3a71f5fa19d888facaead5eb67"
        },
        "date": 1675593917425,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 149.87906952441438,
            "unit": "iter/sec",
            "range": "stddev: 0.004475787827266203",
            "extra": "mean: 6.672045691056991 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5712.780360946269,
            "unit": "iter/sec",
            "range": "stddev: 0.000054864987982643215",
            "extra": "mean: 175.04611359403975 usec\nrounds: 537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 329.89463536454645,
            "unit": "iter/sec",
            "range": "stddev: 0.00003618620223010915",
            "extra": "mean: 3.031270875002138 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 147.2908147296078,
            "unit": "iter/sec",
            "range": "stddev: 0.005171042606953437",
            "extra": "mean: 6.789289622952869 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 612.4352293927295,
            "unit": "iter/sec",
            "range": "stddev: 0.00003176796540247033",
            "extra": "mean: 1.6328257291657877 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5119.768773566823,
            "unit": "iter/sec",
            "range": "stddev: 0.00004134443995687309",
            "extra": "mean: 195.32132098679205 usec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.56943276669195,
            "unit": "iter/sec",
            "range": "stddev: 0.002146441947870931",
            "extra": "mean: 637.172882599998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.27922955054234,
            "unit": "iter/sec",
            "range": "stddev: 0.00034143164569299446",
            "extra": "mean: 15.557124859651694 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5990.573603383993,
            "unit": "iter/sec",
            "range": "stddev: 0.000048400352539527346",
            "extra": "mean: 166.92892303920843 usec\nrounds: 2040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10389.4944116454,
            "unit": "iter/sec",
            "range": "stddev: 0.000003514173675578997",
            "extra": "mean: 96.25107443911011 usec\nrounds: 4769"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.35659216289483,
            "unit": "iter/sec",
            "range": "stddev: 0.0006323639414775737",
            "extra": "mean: 12.291566957447865 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 235.2621675949445,
            "unit": "iter/sec",
            "range": "stddev: 0.00020594090918243905",
            "extra": "mean: 4.250577176189755 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 409.2986791182974,
            "unit": "iter/sec",
            "range": "stddev: 0.000042030649387917344",
            "extra": "mean: 2.4432035846149787 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.814482859206803,
            "unit": "iter/sec",
            "range": "stddev: 0.00031008760880693343",
            "extra": "mean: 72.38779838461632 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.52572566132204,
            "unit": "iter/sec",
            "range": "stddev: 0.0005756233694916519",
            "extra": "mean: 23.515177799999755 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57602.820869611576,
            "unit": "iter/sec",
            "range": "stddev: 8.625271647696632e-7",
            "extra": "mean: 17.36026091957505 usec\nrounds: 13004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1575559.7494837404,
            "unit": "iter/sec",
            "range": "stddev: 1.2104620589725333e-7",
            "extra": "mean: 634.6950665169426 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.3044330112366542,
            "unit": "iter/sec",
            "range": "stddev: 0.0005660106546565602",
            "extra": "mean: 433.94622239999876 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 248.33071621395496,
            "unit": "iter/sec",
            "range": "stddev: 0.00021124585871592908",
            "extra": "mean: 4.026888075893226 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 382216.84976754856,
            "unit": "iter/sec",
            "range": "stddev: 3.593187418919537e-7",
            "extra": "mean: 2.6163158442862122 usec\nrounds: 1925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 104.09081613488075,
            "unit": "iter/sec",
            "range": "stddev: 0.00015594619614215302",
            "extra": "mean: 9.606995478873 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 260.4042864710831,
            "unit": "iter/sec",
            "range": "stddev: 0.00010562640972621877",
            "extra": "mean: 3.84018256209099 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 250.19489175849077,
            "unit": "iter/sec",
            "range": "stddev: 0.0002257940899064737",
            "extra": "mean: 3.9968841608696173 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.412008847219388,
            "unit": "iter/sec",
            "range": "stddev: 0.02818294740221732",
            "extra": "mean: 118.87766859999829 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.28667327420297,
            "unit": "iter/sec",
            "range": "stddev: 0.0006542235176980572",
            "extra": "mean: 10.71964477777701 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.45436737866126,
            "unit": "iter/sec",
            "range": "stddev: 0.00009920983816607637",
            "extra": "mean: 7.019791800007624 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4754249.209750116,
            "unit": "iter/sec",
            "range": "stddev: 1.2367894663725668e-8",
            "extra": "mean: 210.3381534881751 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.98181129892648,
            "unit": "iter/sec",
            "range": "stddev: 0.020086499694655",
            "extra": "mean: 30.31974171874996 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.29435575614434,
            "unit": "iter/sec",
            "range": "stddev: 0.00017747042172873504",
            "extra": "mean: 10.384824657141882 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.77574302655823,
            "unit": "iter/sec",
            "range": "stddev: 0.0006416531308371434",
            "extra": "mean: 10.896125348836655 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6020.111006581213,
            "unit": "iter/sec",
            "range": "stddev: 0.00004662720124465297",
            "extra": "mean: 166.10989380541244 usec\nrounds: 2486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8754411045479747,
            "unit": "iter/sec",
            "range": "stddev: 0.0036628468984035846",
            "extra": "mean: 1.1422812966000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1543916.9320513115,
            "unit": "iter/sec",
            "range": "stddev: 9.75653568088521e-8",
            "extra": "mean: 647.7032405307965 nsec\nrounds: 117634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6059.486427795502,
            "unit": "iter/sec",
            "range": "stddev: 0.00005619259694829702",
            "extra": "mean: 165.03048763553537 usec\nrounds: 2305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 146.06016291035198,
            "unit": "iter/sec",
            "range": "stddev: 0.0007028198810990952",
            "extra": "mean: 6.846493801419177 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 76.31286687018994,
            "unit": "iter/sec",
            "range": "stddev: 0.014859417379036687",
            "extra": "mean: 13.103950107142804 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.05104890360285,
            "unit": "iter/sec",
            "range": "stddev: 0.0007048910442504006",
            "extra": "mean: 28.529816689657224 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11434207.563082201,
            "unit": "iter/sec",
            "range": "stddev: 3.5597729434136543e-9",
            "extra": "mean: 87.45686961547577 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 155.41262449477998,
            "unit": "iter/sec",
            "range": "stddev: 0.0006986643255392019",
            "extra": "mean: 6.434483705881874 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.5193458709552,
            "unit": "iter/sec",
            "range": "stddev: 0.0007292660973362566",
            "extra": "mean: 11.17076974000156 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.92408950638267,
            "unit": "iter/sec",
            "range": "stddev: 0.0006698639808630243",
            "extra": "mean: 11.373447318182432 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19507.543055050348,
            "unit": "iter/sec",
            "range": "stddev: 0.00001323568412647682",
            "extra": "mean: 51.26222185838559 usec\nrounds: 5801"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 268.1340843808347,
            "unit": "iter/sec",
            "range": "stddev: 0.00011109918334159596",
            "extra": "mean: 3.729477370656413 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.921808260006905,
            "unit": "iter/sec",
            "range": "stddev: 0.00021501551822450092",
            "extra": "mean: 40.125499304347954 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4571.394867869943,
            "unit": "iter/sec",
            "range": "stddev: 0.00002038291964852989",
            "extra": "mean: 218.75161277983267 usec\nrounds: 2097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.49829813454973,
            "unit": "iter/sec",
            "range": "stddev: 0.00012426208818832845",
            "extra": "mean: 14.18473958181866 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 579205.9879498495,
            "unit": "iter/sec",
            "range": "stddev: 1.852756615490267e-7",
            "extra": "mean: 1.726501487906898 usec\nrounds: 21506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.04674254286266,
            "unit": "iter/sec",
            "range": "stddev: 0.0007311420708770308",
            "extra": "mean: 10.747286500001252 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 247.74248640828534,
            "unit": "iter/sec",
            "range": "stddev: 0.000213263525944684",
            "extra": "mean: 4.0364493571440825 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.777914556198645,
            "unit": "iter/sec",
            "range": "stddev: 0.00024055879443729488",
            "extra": "mean: 18.25553250980491 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 519.6115891925047,
            "unit": "iter/sec",
            "range": "stddev: 0.000020075340725358318",
            "extra": "mean: 1.9245144273129793 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1552593.6770165435,
            "unit": "iter/sec",
            "range": "stddev: 1.8248472150426087e-7",
            "extra": "mean: 644.0835195990204 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 247.4322084038371,
            "unit": "iter/sec",
            "range": "stddev: 0.00021563744359542574",
            "extra": "mean: 4.0415110322577235 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1460.6738657658898,
            "unit": "iter/sec",
            "range": "stddev: 0.000006147286085229544",
            "extra": "mean: 684.6155212585116 usec\nrounds: 1176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9709.24263376602,
            "unit": "iter/sec",
            "range": "stddev: 0.000015613735080558808",
            "extra": "mean: 102.99464517678041 usec\nrounds: 4188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5437761.047549502,
            "unit": "iter/sec",
            "range": "stddev: 5.983941770270562e-9",
            "extra": "mean: 183.8992172064445 nsec\nrounds: 52632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 138.56934915991175,
            "unit": "iter/sec",
            "range": "stddev: 0.010668970563806248",
            "extra": "mean: 7.216603138158499 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.30061902226208,
            "unit": "iter/sec",
            "range": "stddev: 0.0001562515503064108",
            "extra": "mean: 6.882283136362869 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10902.305352587173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015880618878427931",
            "extra": "mean: 91.72371967757213 usec\nrounds: 6200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.62048452661928,
            "unit": "iter/sec",
            "range": "stddev: 0.00008288691330712824",
            "extra": "mean: 11.412856313253986 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5149.719868781252,
            "unit": "iter/sec",
            "range": "stddev: 0.000050786018714174895",
            "extra": "mean: 194.1853198777321 usec\nrounds: 1957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5906483498018287,
            "unit": "iter/sec",
            "range": "stddev: 0.0014825762648538186",
            "extra": "mean: 1.6930547597999976 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.12235648468375,
            "unit": "iter/sec",
            "range": "stddev: 0.00008254244355904989",
            "extra": "mean: 14.67946870312442 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.955808697030481,
            "unit": "iter/sec",
            "range": "stddev: 0.00017313376871051864",
            "extra": "mean: 201.78341439999485 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5139.960861864686,
            "unit": "iter/sec",
            "range": "stddev: 0.00005050852973830957",
            "extra": "mean: 194.55401059945382 usec\nrounds: 2453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 118178.70287650623,
            "unit": "iter/sec",
            "range": "stddev: 4.865640598511547e-7",
            "extra": "mean: 8.461761515905069 usec\nrounds: 33671"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 245.83679715939923,
            "unit": "iter/sec",
            "range": "stddev: 0.0002158181705750438",
            "extra": "mean: 4.067739295153628 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 139.86984243562736,
            "unit": "iter/sec",
            "range": "stddev: 0.0007585178839103584",
            "extra": "mean: 7.149504014492848 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 138.11685541546674,
            "unit": "iter/sec",
            "range": "stddev: 0.013113484988300466",
            "extra": "mean: 7.240245927927614 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.44994726577298,
            "unit": "iter/sec",
            "range": "stddev: 0.00011588418132728289",
            "extra": "mean: 10.587618404763077 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4446319.481016242,
            "unit": "iter/sec",
            "range": "stddev: 1.3501651252950599e-8",
            "extra": "mean: 224.9051163032536 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1551984.8398324314,
            "unit": "iter/sec",
            "range": "stddev: 9.487235122390607e-8",
            "extra": "mean: 644.3361908792682 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 996.9997883580319,
            "unit": "iter/sec",
            "range": "stddev: 0.0000178089365882208",
            "extra": "mean: 1.0030092399988462 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.46979424260786,
            "unit": "iter/sec",
            "range": "stddev: 0.00035127709193437964",
            "extra": "mean: 8.165278681035744 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8697008674337644,
            "unit": "iter/sec",
            "range": "stddev: 0.003103706446217864",
            "extra": "mean: 1.149820630800002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 148.4910795885968,
            "unit": "iter/sec",
            "range": "stddev: 0.0001235785887140823",
            "extra": "mean: 6.734411270835651 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 156.63521477850037,
            "unit": "iter/sec",
            "range": "stddev: 0.0007178398749912802",
            "extra": "mean: 6.384260406665969 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 218.2036275760983,
            "unit": "iter/sec",
            "range": "stddev: 0.0004632079392131435",
            "extra": "mean: 4.582875230391167 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 270.89533103792536,
            "unit": "iter/sec",
            "range": "stddev: 0.00013458840930049166",
            "extra": "mean: 3.69146266260307 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.92877037806342,
            "unit": "iter/sec",
            "range": "stddev: 0.0002479867604088876",
            "extra": "mean: 23.29440119512483 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1522584109557623,
            "unit": "iter/sec",
            "range": "stddev: 0.07880372523758647",
            "extra": "mean: 6.567781666199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7466334310539899,
            "unit": "iter/sec",
            "range": "stddev: 0.0024464331079389516",
            "extra": "mean: 1.3393453312000019 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}