window.BENCHMARK_DATA = {
  "lastUpdate": 1683889225248,
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
          "id": "05c9449c158c949bd93543678aad41e7adecf8d9",
          "message": "feat(streamlit): add support for streamlit connection interface",
          "timestamp": "2023-05-12T06:55:10-04:00",
          "tree_id": "79f6dc513ef0369bc00d7d51eabcf5f4e60317ad",
          "url": "https://github.com/ibis-project/ibis/commit/05c9449c158c949bd93543678aad41e7adecf8d9"
        },
        "date": 1683889143789,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5536814536815293,
            "unit": "iter/sec",
            "range": "stddev: 0.0012258682689146989",
            "extra": "mean: 391.5915191999943 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 202.8650557866911,
            "unit": "iter/sec",
            "range": "stddev: 0.00003137099402493557",
            "extra": "mean: 4.929385182293207 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 129.33999944693872,
            "unit": "iter/sec",
            "range": "stddev: 0.00006402393790696072",
            "extra": "mean: 7.73156026191454 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2219.7354615030627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000808215020183015",
            "extra": "mean: 450.50413319200845 usec\nrounds: 473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1757694.0928245268,
            "unit": "iter/sec",
            "range": "stddev: 7.847818047942221e-8",
            "extra": "mean: 568.927212125433 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 90.24564765018378,
            "unit": "iter/sec",
            "range": "stddev: 0.008995076326299528",
            "extra": "mean: 11.080866790122299 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9399622182825562,
            "unit": "iter/sec",
            "range": "stddev: 0.006689004976549154",
            "extra": "mean: 1.0638725477999968 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 414.5396531507418,
            "unit": "iter/sec",
            "range": "stddev: 0.00003933691270680418",
            "extra": "mean: 2.4123144611122727 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.577326512685477,
            "unit": "iter/sec",
            "range": "stddev: 0.00020604181426463425",
            "extra": "mean: 116.5864443333299 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.5682781116124,
            "unit": "iter/sec",
            "range": "stddev: 0.00014569291703963463",
            "extra": "mean: 6.22788020000371 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11635458.02281864,
            "unit": "iter/sec",
            "range": "stddev: 9.498947132370986e-9",
            "extra": "mean: 85.94418870652122 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2135.4736893700683,
            "unit": "iter/sec",
            "range": "stddev: 0.00019415309564569758",
            "extra": "mean: 468.28017829383066 usec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 286.06346581616003,
            "unit": "iter/sec",
            "range": "stddev: 0.0002597851273576823",
            "extra": "mean: 3.495727764980148 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 104.56430056649778,
            "unit": "iter/sec",
            "range": "stddev: 0.0007220450586270215",
            "extra": "mean: 9.56349341584367 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1932832.7534596852,
            "unit": "iter/sec",
            "range": "stddev: 1.0736711991147059e-7",
            "extra": "mean: 517.3753384559757 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 286.51779591214745,
            "unit": "iter/sec",
            "range": "stddev: 0.0003289386816370618",
            "extra": "mean: 3.490184603774565 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17278760083386496,
            "unit": "iter/sec",
            "range": "stddev: 0.10386333767728985",
            "extra": "mean: 5.787452312400001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.62909297000117,
            "unit": "iter/sec",
            "range": "stddev: 0.0008139189373630211",
            "extra": "mean: 9.937483986843775 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.29859051858993,
            "unit": "iter/sec",
            "range": "stddev: 0.00116043551623645",
            "extra": "mean: 9.587857276189771 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 237.0767808005078,
            "unit": "iter/sec",
            "range": "stddev: 0.00400158539800553",
            "extra": "mean: 4.218042764978603 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.36583605917185,
            "unit": "iter/sec",
            "range": "stddev: 0.0007758885767250384",
            "extra": "mean: 9.963549742269254 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.14407051600867,
            "unit": "iter/sec",
            "range": "stddev: 0.0001500894807765169",
            "extra": "mean: 9.51075980882579 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2145.2095600500725,
            "unit": "iter/sec",
            "range": "stddev: 0.00008799297205454067",
            "extra": "mean: 466.1549242660742 usec\nrounds: 1294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4489296.223595029,
            "unit": "iter/sec",
            "range": "stddev: 1.293962159370273e-8",
            "extra": "mean: 222.75206406386215 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.39061616167932,
            "unit": "iter/sec",
            "range": "stddev: 0.0007517096717084996",
            "extra": "mean: 9.96109037113088 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6173722.446709209,
            "unit": "iter/sec",
            "range": "stddev: 9.19484458143114e-9",
            "extra": "mean: 161.97683142230068 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 81.857583829576,
            "unit": "iter/sec",
            "range": "stddev: 0.020449781910763062",
            "extra": "mean: 12.216339075948753 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.28779377539031,
            "unit": "iter/sec",
            "range": "stddev: 0.0002690379615286509",
            "extra": "mean: 18.76602368292879 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 255.7069280629611,
            "unit": "iter/sec",
            "range": "stddev: 0.0004427635562847904",
            "extra": "mean: 3.9107270482471095 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1965438.3979954885,
            "unit": "iter/sec",
            "range": "stddev: 9.400361101737651e-8",
            "extra": "mean: 508.79233916457525 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.24094576490912,
            "unit": "iter/sec",
            "range": "stddev: 0.000564294216885495",
            "extra": "mean: 21.168077476188177 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.36478498666675,
            "unit": "iter/sec",
            "range": "stddev: 0.0008594251567166266",
            "extra": "mean: 10.486051010756363 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2169.9394545277937,
            "unit": "iter/sec",
            "range": "stddev: 0.00007980330068404954",
            "extra": "mean: 460.8423511141755 usec\nrounds: 1256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8602.874574153406,
            "unit": "iter/sec",
            "range": "stddev: 0.00001202915708729218",
            "extra": "mean: 116.24021614872936 usec\nrounds: 3604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5580239.380159762,
            "unit": "iter/sec",
            "range": "stddev: 1.0646290100325303e-8",
            "extra": "mean: 179.20378175098486 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.22402297478855,
            "unit": "iter/sec",
            "range": "stddev: 0.00006853138467773981",
            "extra": "mean: 52.01824827776451 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12557.186437828339,
            "unit": "iter/sec",
            "range": "stddev: 0.000014335946249429607",
            "extra": "mean: 79.63567356040161 usec\nrounds: 5174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.46019462311585,
            "unit": "iter/sec",
            "range": "stddev: 0.0006886892190257096",
            "extra": "mean: 9.759887765959716 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.5592340886586,
            "unit": "iter/sec",
            "range": "stddev: 0.0000866399203133277",
            "extra": "mean: 1.8637271273478158 msec\nrounds: 479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.6574877527901,
            "unit": "iter/sec",
            "range": "stddev: 0.0002767401819359946",
            "extra": "mean: 3.6276903201584756 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 284.4428140682072,
            "unit": "iter/sec",
            "range": "stddev: 0.00025630002270828235",
            "extra": "mean: 3.515645150944849 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 188.80233147169383,
            "unit": "iter/sec",
            "range": "stddev: 0.00011018511683462123",
            "extra": "mean: 5.296544763007468 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 678.8959884730483,
            "unit": "iter/sec",
            "range": "stddev: 0.00002626580024246696",
            "extra": "mean: 1.4729796861065108 msec\nrounds: 583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9270316888093254,
            "unit": "iter/sec",
            "range": "stddev: 0.011083381740405388",
            "extra": "mean: 1.0787117765999938 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4541.265048260524,
            "unit": "iter/sec",
            "range": "stddev: 0.000026520828766199172",
            "extra": "mean: 220.20295872909637 usec\nrounds: 945"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.865480644718236,
            "unit": "iter/sec",
            "range": "stddev: 0.0005981629332217799",
            "extra": "mean: 38.66156649999084 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 274.7240225492245,
            "unit": "iter/sec",
            "range": "stddev: 0.00032586932396880215",
            "extra": "mean: 3.640016590907415 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2256.2589418609296,
            "unit": "iter/sec",
            "range": "stddev: 0.00008209931382773425",
            "extra": "mean: 443.2115398843426 usec\nrounds: 1730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1883811.2114788634,
            "unit": "iter/sec",
            "range": "stddev: 9.152308800860926e-8",
            "extra": "mean: 530.838755978611 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2984266686452401,
            "unit": "iter/sec",
            "range": "stddev: 0.07401136893735354",
            "extra": "mean: 770.1628626000002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.93621147234046,
            "unit": "iter/sec",
            "range": "stddev: 0.025635457023791747",
            "extra": "mean: 27.073702476195923 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.89758274556254,
            "unit": "iter/sec",
            "range": "stddev: 0.000710228850191448",
            "extra": "mean: 9.354748482762218 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.07085864135323,
            "unit": "iter/sec",
            "range": "stddev: 0.0008410586684561677",
            "extra": "mean: 10.518470268291312 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.45437313189379,
            "unit": "iter/sec",
            "range": "stddev: 0.0008737979514564149",
            "extra": "mean: 9.954768207920901 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.70689512148682,
            "unit": "iter/sec",
            "range": "stddev: 0.0005436157421324558",
            "extra": "mean: 17.328951729160973 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10484.406789517509,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021028171660458484",
            "extra": "mean: 95.37974060676635 usec\nrounds: 4711"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.7154248657432,
            "unit": "iter/sec",
            "range": "stddev: 0.00011267640017862462",
            "extra": "mean: 6.034441276725837 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 163.3256868491798,
            "unit": "iter/sec",
            "range": "stddev: 0.0039836011742869475",
            "extra": "mean: 6.1227356167400195 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 81.9412722783373,
            "unit": "iter/sec",
            "range": "stddev: 0.0005463488534777494",
            "extra": "mean: 12.203862256412252 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.71108632913848,
            "unit": "iter/sec",
            "range": "stddev: 0.00014146153943068144",
            "extra": "mean: 9.929393440676973 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.52046153609285,
            "unit": "iter/sec",
            "range": "stddev: 0.0003218648049115122",
            "extra": "mean: 3.7241109831236687 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 236.800030200875,
            "unit": "iter/sec",
            "range": "stddev: 0.0002683703319237069",
            "extra": "mean: 4.222972434385715 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.87634791032974,
            "unit": "iter/sec",
            "range": "stddev: 0.0006446756363972518",
            "extra": "mean: 22.79132260605882 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.885548071295936,
            "unit": "iter/sec",
            "range": "stddev: 0.03577478361720753",
            "extra": "mean: 34.6193881290318 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6245169.636102979,
            "unit": "iter/sec",
            "range": "stddev: 5.97331528996563e-9",
            "extra": "mean: 160.12375295927086 nsec\nrounds: 62500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 282.0265208078167,
            "unit": "iter/sec",
            "range": "stddev: 0.00032049645644683484",
            "extra": "mean: 3.545765827751486 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2091.2079369768912,
            "unit": "iter/sec",
            "range": "stddev: 0.0000934614841804705",
            "extra": "mean: 478.19252323880715 usec\nrounds: 1334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.56615247035649,
            "unit": "iter/sec",
            "range": "stddev: 0.00010336603101773645",
            "extra": "mean: 5.695858717236771 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6401590.2339808615,
            "unit": "iter/sec",
            "range": "stddev: 1.0429685819111549e-8",
            "extra": "mean: 156.21118557253905 nsec\nrounds: 59524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.1950630726376,
            "unit": "iter/sec",
            "range": "stddev: 0.0008739937833597241",
            "extra": "mean: 10.504746440862803 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2189.881571362128,
            "unit": "iter/sec",
            "range": "stddev: 0.00008478192802291662",
            "extra": "mean: 456.6456985972945 usec\nrounds: 1284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.6491892152946,
            "unit": "iter/sec",
            "range": "stddev: 0.00009514920158262165",
            "extra": "mean: 9.555735763443916 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6395163201258092,
            "unit": "iter/sec",
            "range": "stddev: 0.0019447039592364727",
            "extra": "mean: 609.9359840000034 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13968.293445600097,
            "unit": "iter/sec",
            "range": "stddev: 0.000001528201171640032",
            "extra": "mean: 71.59070675988642 usec\nrounds: 6302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 764.7156223299083,
            "unit": "iter/sec",
            "range": "stddev: 0.000012113343534758595",
            "extra": "mean: 1.3076756519675061 msec\nrounds: 635"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.13841052359047,
            "unit": "iter/sec",
            "range": "stddev: 0.0000583971335982853",
            "extra": "mean: 8.917551045452269 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2218.491609005909,
            "unit": "iter/sec",
            "range": "stddev: 0.00008313180600949419",
            "extra": "mean: 450.7567195388641 usec\nrounds: 1387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 320.42660630514223,
            "unit": "iter/sec",
            "range": "stddev: 0.00005265351587647979",
            "extra": "mean: 3.120839469390691 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1170.3393709160866,
            "unit": "iter/sec",
            "range": "stddev: 0.00007123991226614171",
            "extra": "mean: 854.4530115373689 usec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1024372.2993698751,
            "unit": "iter/sec",
            "range": "stddev: 5.131961578893669e-7",
            "extra": "mean: 976.2075766936813 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.85418809444684,
            "unit": "iter/sec",
            "range": "stddev: 0.0007688405740791953",
            "extra": "mean: 9.817956617284358 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148409.46808206374,
            "unit": "iter/sec",
            "range": "stddev: 3.298004654279759e-7",
            "extra": "mean: 6.738114575325107 usec\nrounds: 42016"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.20428176577111,
            "unit": "iter/sec",
            "range": "stddev: 0.0008603901343641136",
            "extra": "mean: 9.979613469387603 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.154161622041883,
            "unit": "iter/sec",
            "range": "stddev: 0.00008560914569912089",
            "extra": "mean: 33.16291835714732 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7765613172706605,
            "unit": "iter/sec",
            "range": "stddev: 0.00906505876865946",
            "extra": "mean: 1.2877283194000029 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 82.67113257024701,
            "unit": "iter/sec",
            "range": "stddev: 0.019669917577091803",
            "extra": "mean: 12.096120724489696 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.627782684397864,
            "unit": "iter/sec",
            "range": "stddev: 0.0009808958940245673",
            "extra": "mean: 16.49408828301654 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.63754314749185,
            "unit": "iter/sec",
            "range": "stddev: 0.0007836745318788126",
            "extra": "mean: 9.743023549998497 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.76764596675488,
            "unit": "iter/sec",
            "range": "stddev: 0.00004289927535081563",
            "extra": "mean: 9.19391047872501 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1783.5994676092007,
            "unit": "iter/sec",
            "range": "stddev: 0.00002460332411580062",
            "extra": "mean: 560.6639933238123 usec\nrounds: 1348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.09726626491111,
            "unit": "iter/sec",
            "range": "stddev: 0.000869873335377229",
            "extra": "mean: 9.794581545457902 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2058.8619022900716,
            "unit": "iter/sec",
            "range": "stddev: 0.00009753146746181688",
            "extra": "mean: 485.7052330162116 usec\nrounds: 1575"
          }
        ]
      }
    ]
  }
}