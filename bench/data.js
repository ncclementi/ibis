window.BENCHMARK_DATA = {
  "lastUpdate": 1675505231876,
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
          "id": "2bc5e5e40684019f7b16d11ad21010a7fa7540a8",
          "message": "refactor(ir/api): introduce window frame operation and revamp the window API",
          "timestamp": "2023-02-04T11:02:32+01:00",
          "tree_id": "dbbf9f815f23d7ea6d93e07bb7bdf25f8112421d",
          "url": "https://github.com/ibis-project/ibis/commit/2bc5e5e40684019f7b16d11ad21010a7fa7540a8"
        },
        "date": 1675505159956,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1443724.7619827804,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031322631082586018",
            "extra": "mean: 692.6528008196116 nsec\nrounds: 86207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 84.15783629673385,
            "unit": "iter/sec",
            "range": "stddev: 0.008617461126364644",
            "extra": "mean: 11.882434767857854 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.51034517377164,
            "unit": "iter/sec",
            "range": "stddev: 0.0007001207730266374",
            "extra": "mean: 12.420764037734822 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5826931511259235,
            "unit": "iter/sec",
            "range": "stddev: 0.0016387409418018482",
            "extra": "mean: 631.8344142000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.62008931004624,
            "unit": "iter/sec",
            "range": "stddev: 0.00006908088369260813",
            "extra": "mean: 6.639220601851687 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8713896086862358,
            "unit": "iter/sec",
            "range": "stddev: 0.010269627848685481",
            "extra": "mean: 1.1475922940000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5350.371724406229,
            "unit": "iter/sec",
            "range": "stddev: 0.000052317195917283096",
            "extra": "mean: 186.9029016130608 usec\nrounds: 620"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 158.60266697028268,
            "unit": "iter/sec",
            "range": "stddev: 0.0006206530117358997",
            "extra": "mean: 6.305064215517698 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 234.65319139287487,
            "unit": "iter/sec",
            "range": "stddev: 0.0002974316267514003",
            "extra": "mean: 4.261608350877791 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.97024082797952,
            "unit": "iter/sec",
            "range": "stddev: 0.00009068724131767611",
            "extra": "mean: 11.36748053191578 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 241.42985489336488,
            "unit": "iter/sec",
            "range": "stddev: 0.00019860177318301484",
            "extra": "mean: 4.141989814978275 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5170.106922916013,
            "unit": "iter/sec",
            "range": "stddev: 0.000052771029185644624",
            "extra": "mean: 193.41959748793474 usec\nrounds: 3503"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 276.4762877680099,
            "unit": "iter/sec",
            "range": "stddev: 0.000041499665468631504",
            "extra": "mean: 3.616946712041706 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1487090.715335136,
            "unit": "iter/sec",
            "range": "stddev: 9.881446027765912e-8",
            "extra": "mean: 672.4539328285944 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 173.2224660586457,
            "unit": "iter/sec",
            "range": "stddev: 0.00015404302451104286",
            "extra": "mean: 5.7729232399996135 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.57367110957422,
            "unit": "iter/sec",
            "range": "stddev: 0.0006892697409533064",
            "extra": "mean: 11.55085590322633 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 260.7332197938362,
            "unit": "iter/sec",
            "range": "stddev: 0.00013029184077215293",
            "extra": "mean: 3.835337901287407 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9620.393758584425,
            "unit": "iter/sec",
            "range": "stddev: 0.000016070283129401496",
            "extra": "mean: 103.94584931699752 usec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.99973071701044,
            "unit": "iter/sec",
            "range": "stddev: 0.00010222288614680903",
            "extra": "mean: 6.896564531913896 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.58232558337399,
            "unit": "iter/sec",
            "range": "stddev: 0.021305714375470363",
            "extra": "mean: 30.691486322580882 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122536.32149236779,
            "unit": "iter/sec",
            "range": "stddev: 4.848255082305578e-7",
            "extra": "mean: 8.160845599255936 usec\nrounds: 31347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.05160317068147,
            "unit": "iter/sec",
            "range": "stddev: 0.0007551188579578122",
            "extra": "mean: 11.104743999999933 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 74.51586984835679,
            "unit": "iter/sec",
            "range": "stddev: 0.017999842654737926",
            "extra": "mean: 13.419960097561042 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.63001715513972,
            "unit": "iter/sec",
            "range": "stddev: 0.0008740047079752036",
            "extra": "mean: 18.64627410256503 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1500565.8504010313,
            "unit": "iter/sec",
            "range": "stddev: 1.7316780730455215e-7",
            "extra": "mean: 666.4152724338933 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 266.61918333063056,
            "unit": "iter/sec",
            "range": "stddev: 0.0001585933981729875",
            "extra": "mean: 3.7506678533326485 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 117.16103466017941,
            "unit": "iter/sec",
            "range": "stddev: 0.0005785630507915263",
            "extra": "mean: 8.535260915887756 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1422.167818019879,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068354772100422315",
            "extra": "mean: 703.1518976377386 usec\nrounds: 1143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 210.23696811914357,
            "unit": "iter/sec",
            "range": "stddev: 0.00037298806947750035",
            "extra": "mean: 4.756537391812506 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1633037.719092931,
            "unit": "iter/sec",
            "range": "stddev: 1.0101401381605084e-7",
            "extra": "mean: 612.3557271876421 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 387857.17249731766,
            "unit": "iter/sec",
            "range": "stddev: 8.64775790743938e-8",
            "extra": "mean: 2.5782686795792484 usec\nrounds: 1954"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10811686.544805342,
            "unit": "iter/sec",
            "range": "stddev: 4.0492781862731004e-9",
            "extra": "mean: 92.49250760800277 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 402.30209243765,
            "unit": "iter/sec",
            "range": "stddev: 0.00014973650433521978",
            "extra": "mean: 2.4856942551323744 msec\nrounds: 341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2741298454105174,
            "unit": "iter/sec",
            "range": "stddev: 0.0031300087046796966",
            "extra": "mean: 439.7286293999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4588835.7204239555,
            "unit": "iter/sec",
            "range": "stddev: 1.0932606172426068e-8",
            "extra": "mean: 217.9202004441842 nsec\nrounds: 45872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 153.81461790551373,
            "unit": "iter/sec",
            "range": "stddev: 0.0007479787044425802",
            "extra": "mean: 6.501332666666875 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 508.87741440811703,
            "unit": "iter/sec",
            "range": "stddev: 0.000026656940100269455",
            "extra": "mean: 1.9651098116883712 msec\nrounds: 462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19248.597271901494,
            "unit": "iter/sec",
            "range": "stddev: 0.000016516111562331068",
            "extra": "mean: 51.95183762609907 usec\nrounds: 8425"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.01645464390873,
            "unit": "iter/sec",
            "range": "stddev: 0.0001395595315851675",
            "extra": "mean: 15.380721780000783 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 259.507686161887,
            "unit": "iter/sec",
            "range": "stddev: 0.000013960245560242928",
            "extra": "mean: 3.8534504113923487 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.135405434211272,
            "unit": "iter/sec",
            "range": "stddev: 0.11506701894890269",
            "extra": "mean: 7.385227969800002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.759232356422615,
            "unit": "iter/sec",
            "range": "stddev: 0.00041649257576083443",
            "extra": "mean: 16.458404117646726 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.952338942585692,
            "unit": "iter/sec",
            "range": "stddev: 0.001741023823973553",
            "extra": "mean: 201.924789800006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.20833058347604,
            "unit": "iter/sec",
            "range": "stddev: 0.00014071312277406597",
            "extra": "mean: 10.28718417441874 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 141.00040593730458,
            "unit": "iter/sec",
            "range": "stddev: 0.000614511382597197",
            "extra": "mean: 7.092178163264629 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.1924064642413,
            "unit": "iter/sec",
            "range": "stddev: 0.00019647277896466214",
            "extra": "mean: 11.73813537500834 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 125.03949777077858,
            "unit": "iter/sec",
            "range": "stddev: 0.01301014339037646",
            "extra": "mean: 7.997472941175691 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.026176435179948,
            "unit": "iter/sec",
            "range": "stddev: 0.00035810507255276637",
            "extra": "mean: 110.78888244444822 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5527.112246802031,
            "unit": "iter/sec",
            "range": "stddev: 0.0000475185496018699",
            "extra": "mean: 180.92630569943586 usec\nrounds: 2123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4699.868992540042,
            "unit": "iter/sec",
            "range": "stddev: 0.00005030385143566566",
            "extra": "mean: 212.7718882350273 usec\nrounds: 3060"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 597.8537862719664,
            "unit": "iter/sec",
            "range": "stddev: 0.00008363321736546026",
            "extra": "mean: 1.6726497731756362 msec\nrounds: 507"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.3299710054992,
            "unit": "iter/sec",
            "range": "stddev: 0.00039978278606089346",
            "extra": "mean: 9.967111422220873 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.6324383965159,
            "unit": "iter/sec",
            "range": "stddev: 0.0007170631390858228",
            "extra": "mean: 11.543020357143925 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5871491307398938,
            "unit": "iter/sec",
            "range": "stddev: 0.006699223412359564",
            "extra": "mean: 1.7031448189999936 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 134.40648091276043,
            "unit": "iter/sec",
            "range": "stddev: 0.012857454898330251",
            "extra": "mean: 7.440117420000547 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 237.98382180020764,
            "unit": "iter/sec",
            "range": "stddev: 0.0002771104465544526",
            "extra": "mean: 4.201966303573025 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.71460668836374,
            "unit": "iter/sec",
            "range": "stddev: 0.001013723977227553",
            "extra": "mean: 25.17965261111341 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.695276831032881,
            "unit": "iter/sec",
            "range": "stddev: 0.00008256253161824533",
            "extra": "mean: 73.01787414286106 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 157.98579637281657,
            "unit": "iter/sec",
            "range": "stddev: 0.0007195282635768185",
            "extra": "mean: 6.329682939599136 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 227.92853343920788,
            "unit": "iter/sec",
            "range": "stddev: 0.0002841902135233803",
            "extra": "mean: 4.3873401232878795 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 239.93711760971166,
            "unit": "iter/sec",
            "range": "stddev: 0.00030714451162625647",
            "extra": "mean: 4.167758660944772 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5509555.394894346,
            "unit": "iter/sec",
            "range": "stddev: 4.840936884116244e-9",
            "extra": "mean: 181.50284883728858 nsec\nrounds: 52632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7477900989558814,
            "unit": "iter/sec",
            "range": "stddev: 0.00410873905258393",
            "extra": "mean: 1.33727365659999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10537.504372282254,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019689135673690684",
            "extra": "mean: 94.89913025615346 usec\nrounds: 5113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10748.728849247924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016079315813165184",
            "extra": "mean: 93.03425679679034 usec\nrounds: 4377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.541239512192906,
            "unit": "iter/sec",
            "range": "stddev: 0.03361201385442081",
            "extra": "mean: 35.03702071428246 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 586412.7441251533,
            "unit": "iter/sec",
            "range": "stddev: 0.000009996643063367147",
            "extra": "mean: 1.7052835396540738 usec\nrounds: 22272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 244.2309075572976,
            "unit": "iter/sec",
            "range": "stddev: 0.00020378978193880598",
            "extra": "mean: 4.094485869956471 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4343777.25695796,
            "unit": "iter/sec",
            "range": "stddev: 1.347059252524958e-8",
            "extra": "mean: 230.21438274645064 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.26646305379597,
            "unit": "iter/sec",
            "range": "stddev: 0.0007666614703055822",
            "extra": "mean: 10.956927293331848 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8581201136514794,
            "unit": "iter/sec",
            "range": "stddev: 0.0027183739737309063",
            "extra": "mean: 1.1653380267999922 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.300337666253427,
            "unit": "iter/sec",
            "range": "stddev: 0.0007642397445269481",
            "extra": "mean: 41.15169154166646 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 62.83766943773427,
            "unit": "iter/sec",
            "range": "stddev: 0.0008192827859058279",
            "extra": "mean: 15.914021142857601 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 920.2443546931281,
            "unit": "iter/sec",
            "range": "stddev: 0.00005772015899284901",
            "extra": "mean: 1.086667899563989 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5351.016186011276,
            "unit": "iter/sec",
            "range": "stddev: 0.00005040023266780194",
            "extra": "mean: 186.88039154398714 usec\nrounds: 2176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 155.74912988012895,
            "unit": "iter/sec",
            "range": "stddev: 0.0006965670895365578",
            "extra": "mean: 6.420581615895009 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60193.33892915291,
            "unit": "iter/sec",
            "range": "stddev: 5.300934505034216e-7",
            "extra": "mean: 16.61313390800587 usec\nrounds: 12755"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4591.036106364059,
            "unit": "iter/sec",
            "range": "stddev: 0.00005074628530289004",
            "extra": "mean: 217.81575592790645 usec\nrounds: 1729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.79039476820926,
            "unit": "iter/sec",
            "range": "stddev: 0.0004493120193259283",
            "extra": "mean: 24.515575435895716 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4155.434662287585,
            "unit": "iter/sec",
            "range": "stddev: 0.000020849764313775386",
            "extra": "mean: 240.64871217334834 usec\nrounds: 2029"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4590.335851110407,
            "unit": "iter/sec",
            "range": "stddev: 0.00005179155437700088",
            "extra": "mean: 217.8489836986762 usec\nrounds: 1963"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 138.9863370397912,
            "unit": "iter/sec",
            "range": "stddev: 0.00040303195766747336",
            "extra": "mean: 7.194951829788162 msec\nrounds: 141"
          }
        ]
      }
    ]
  }
}