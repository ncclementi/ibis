window.BENCHMARK_DATA = {
  "lastUpdate": 1682729072465,
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
          "id": "276fa6f35d4ff973d71ac923363f136bee5c68e8",
          "message": "chore(flake/nixpkgs): `f3f15fa7` -> `17b00c9e`",
          "timestamp": "2023-04-29T00:34:00Z",
          "tree_id": "493e5b4eea3129679415a844fc611b77600eb352",
          "url": "https://github.com/ibis-project/ibis/commit/276fa6f35d4ff973d71ac923363f136bee5c68e8"
        },
        "date": 1682728992677,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1778821.4168271164,
            "unit": "iter/sec",
            "range": "stddev: 6.707521756840338e-7",
            "extra": "mean: 562.1699798193907 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.3698878485522,
            "unit": "iter/sec",
            "range": "stddev: 0.00018309084331178283",
            "extra": "mean: 6.436253600020336 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6150820.7863099305,
            "unit": "iter/sec",
            "range": "stddev: 1.0888429008484424e-8",
            "extra": "mean: 162.5799279058365 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 223.1926263797194,
            "unit": "iter/sec",
            "range": "stddev: 0.0035660364997700204",
            "extra": "mean: 4.480434753694291 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.651467741674671,
            "unit": "iter/sec",
            "range": "stddev: 0.0014413161085397308",
            "extra": "mean: 605.5219697999974 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 646.3157082458329,
            "unit": "iter/sec",
            "range": "stddev: 0.005344463889979845",
            "extra": "mean: 1.5472314648116827 msec\nrounds: 611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1913339.1727812788,
            "unit": "iter/sec",
            "range": "stddev: 1.0121261191475659e-7",
            "extra": "mean: 522.6464885190086 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.29815899144062,
            "unit": "iter/sec",
            "range": "stddev: 0.000026978447523048077",
            "extra": "mean: 9.066334462369424 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.19633548485098,
            "unit": "iter/sec",
            "range": "stddev: 0.0003687729975963566",
            "extra": "mean: 7.5077140550442145 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.42495256117695,
            "unit": "iter/sec",
            "range": "stddev: 0.000765516669712397",
            "extra": "mean: 9.859506706663979 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1023397.8037005403,
            "unit": "iter/sec",
            "range": "stddev: 1.306019113463349e-7",
            "extra": "mean: 977.1371370781378 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.75442918530618,
            "unit": "iter/sec",
            "range": "stddev: 0.0008494556598207146",
            "extra": "mean: 9.827582032609984 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1174.0143660221581,
            "unit": "iter/sec",
            "range": "stddev: 0.000009110789686572568",
            "extra": "mean: 851.7783333335516 usec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4513249.302822516,
            "unit": "iter/sec",
            "range": "stddev: 1.2995522187747946e-8",
            "extra": "mean: 221.5698564166715 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2167.889282198663,
            "unit": "iter/sec",
            "range": "stddev: 0.00012510769769499052",
            "extra": "mean: 461.278169605509 usec\nrounds: 1191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 87.02018494971507,
            "unit": "iter/sec",
            "range": "stddev: 0.015090311471230392",
            "extra": "mean: 11.491586700003609 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.47164093859065,
            "unit": "iter/sec",
            "range": "stddev: 0.0007522841330125729",
            "extra": "mean: 9.571975619563675 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.494102023604714,
            "unit": "iter/sec",
            "range": "stddev: 0.0019594509306772603",
            "extra": "mean: 400.94590779999635 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1750059.3174590042,
            "unit": "iter/sec",
            "range": "stddev: 9.90869042935874e-8",
            "extra": "mean: 571.4092031188683 nsec\nrounds: 121937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 258.6878224183737,
            "unit": "iter/sec",
            "range": "stddev: 0.0004259926681733158",
            "extra": "mean: 3.865663217740139 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.32876075293784,
            "unit": "iter/sec",
            "range": "stddev: 0.0008571836799114155",
            "extra": "mean: 23.07935843589057 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.9161860560945,
            "unit": "iter/sec",
            "range": "stddev: 0.00029350930866873484",
            "extra": "mean: 3.5724979469375975 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.9606233135202,
            "unit": "iter/sec",
            "range": "stddev: 0.000025340494724419588",
            "extra": "mean: 1.8554231176519316 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 411.48957806194403,
            "unit": "iter/sec",
            "range": "stddev: 0.00013226498356674183",
            "extra": "mean: 2.430195206182024 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.63547187028826,
            "unit": "iter/sec",
            "range": "stddev: 0.0007072802461829862",
            "extra": "mean: 9.74322017307827 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 287.55656256802365,
            "unit": "iter/sec",
            "range": "stddev: 0.00028215299005019507",
            "extra": "mean: 3.477576693327743 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16854053386170698,
            "unit": "iter/sec",
            "range": "stddev: 0.06750087614259861",
            "extra": "mean: 5.933290806000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10432.111589946497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025009526984754904",
            "extra": "mean: 95.85787032451871 usec\nrounds: 4465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.75117628596992,
            "unit": "iter/sec",
            "range": "stddev: 0.0008140270119661809",
            "extra": "mean: 9.827896212123555 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.54714773377259,
            "unit": "iter/sec",
            "range": "stddev: 0.00015770181199974397",
            "extra": "mean: 39.14331299998821 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5453513.11255838,
            "unit": "iter/sec",
            "range": "stddev: 1.0465019781139206e-8",
            "extra": "mean: 183.36803806284613 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.2608930410196,
            "unit": "iter/sec",
            "range": "stddev: 0.0009298735022211555",
            "extra": "mean: 10.38843468420629 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146897.35628238256,
            "unit": "iter/sec",
            "range": "stddev: 3.0323330074285526e-7",
            "extra": "mean: 6.807474452281414 usec\nrounds: 41667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.3467993148869,
            "unit": "iter/sec",
            "range": "stddev: 0.0006829798545676673",
            "extra": "mean: 9.770701250005231 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 178.2409702233255,
            "unit": "iter/sec",
            "range": "stddev: 0.00009080981187433744",
            "extra": "mean: 5.610382387096853 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.87575916052954,
            "unit": "iter/sec",
            "range": "stddev: 0.0005429465663807575",
            "extra": "mean: 18.222982520837167 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8898494391994247,
            "unit": "iter/sec",
            "range": "stddev: 0.0025933798224540786",
            "extra": "mean: 1.1237856157999886 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.23930492539349,
            "unit": "iter/sec",
            "range": "stddev: 0.0016151019813140481",
            "extra": "mean: 24.851323894736016 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 276.5102253270214,
            "unit": "iter/sec",
            "range": "stddev: 0.000343489245757986",
            "extra": "mean: 3.616502785086252 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.88902029225156,
            "unit": "iter/sec",
            "range": "stddev: 0.0007215565226977185",
            "extra": "mean: 9.355497854371208 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2214.156356884522,
            "unit": "iter/sec",
            "range": "stddev: 0.00008600626696855466",
            "extra": "mean: 451.63928775430844 usec\nrounds: 1960"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 151.49595034986154,
            "unit": "iter/sec",
            "range": "stddev: 0.017496508147587346",
            "extra": "mean: 6.600836508768856 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 106.17203786225011,
            "unit": "iter/sec",
            "range": "stddev: 0.00007263411431569596",
            "extra": "mean: 9.418675765623163 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8791321065073564,
            "unit": "iter/sec",
            "range": "stddev: 0.01889808515192384",
            "extra": "mean: 1.1374854729999924 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2172.7725207173703,
            "unit": "iter/sec",
            "range": "stddev: 0.00008304408256045367",
            "extra": "mean: 460.24146129657254 usec\nrounds: 1279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 283.211700674048,
            "unit": "iter/sec",
            "range": "stddev: 0.000311442814555953",
            "extra": "mean: 3.5309275627383516 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8561.289450100745,
            "unit": "iter/sec",
            "range": "stddev: 0.000019301740656859635",
            "extra": "mean: 116.80483481238126 usec\nrounds: 4619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.47843846113864,
            "unit": "iter/sec",
            "range": "stddev: 0.000056560740915472706",
            "extra": "mean: 6.043083372670587 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 275.87300084920577,
            "unit": "iter/sec",
            "range": "stddev: 0.0002545889491013657",
            "extra": "mean: 3.6248563539083243 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 675.3461563244813,
            "unit": "iter/sec",
            "range": "stddev: 0.00005840053215159212",
            "extra": "mean: 1.4807221313621182 msec\nrounds: 609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.968167149923595,
            "unit": "iter/sec",
            "range": "stddev: 0.0005103333807891649",
            "extra": "mean: 22.74372721951722 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6247901.837301413,
            "unit": "iter/sec",
            "range": "stddev: 5.632467752472028e-9",
            "extra": "mean: 160.05373100292462 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11396501.46972031,
            "unit": "iter/sec",
            "range": "stddev: 3.2312468462487647e-9",
            "extra": "mean: 87.74622656414851 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 212.0924050578674,
            "unit": "iter/sec",
            "range": "stddev: 0.01576136154153122",
            "extra": "mean: 4.714926023528092 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2204.5276162908917,
            "unit": "iter/sec",
            "range": "stddev: 0.00008478080789799197",
            "extra": "mean: 453.6119178595257 usec\nrounds: 1887"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7169728.422561067,
            "unit": "iter/sec",
            "range": "stddev: 4.339153357022104e-9",
            "extra": "mean: 139.4752968401774 nsec\nrounds: 59881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.7808142301373,
            "unit": "iter/sec",
            "range": "stddev: 0.0007885777441245535",
            "extra": "mean: 9.825034389476322 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.08824845180902,
            "unit": "iter/sec",
            "range": "stddev: 0.00021122416208303857",
            "extra": "mean: 9.607232467390226 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 85.59007697883962,
            "unit": "iter/sec",
            "range": "stddev: 0.017664336962238035",
            "extra": "mean: 11.683597390001523 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7756511366702562,
            "unit": "iter/sec",
            "range": "stddev: 0.0021710731547996106",
            "extra": "mean: 1.2892393921999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2271.114116146946,
            "unit": "iter/sec",
            "range": "stddev: 0.00008249412367943503",
            "extra": "mean: 440.31252894352485 usec\nrounds: 1382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1808.0070799531343,
            "unit": "iter/sec",
            "range": "stddev: 0.000005370389378492887",
            "extra": "mean: 553.0951792655155 usec\nrounds: 1389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12441.662138108173,
            "unit": "iter/sec",
            "range": "stddev: 0.000012057067049701745",
            "extra": "mean: 80.37511297924183 usec\nrounds: 4461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.00886108151404,
            "unit": "iter/sec",
            "range": "stddev: 0.00018210135181063737",
            "extra": "mean: 10.100106082188942 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 128.630652668254,
            "unit": "iter/sec",
            "range": "stddev: 0.000044306295601543805",
            "extra": "mean: 7.774196735043075 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.65635255472315,
            "unit": "iter/sec",
            "range": "stddev: 0.0011515223844832834",
            "extra": "mean: 16.218928927273943 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.638541579630335,
            "unit": "iter/sec",
            "range": "stddev: 0.00026426377649471145",
            "extra": "mean: 18.997486822221767 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 325.03756373258335,
            "unit": "iter/sec",
            "range": "stddev: 0.00002183284599793956",
            "extra": "mean: 3.0765674850514366 msec\nrounds: 301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1948755.4762502695,
            "unit": "iter/sec",
            "range": "stddev: 9.785274374598647e-8",
            "extra": "mean: 513.1480127635955 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 279.9866287767667,
            "unit": "iter/sec",
            "range": "stddev: 0.00029786382582286966",
            "extra": "mean: 3.571599130890282 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2248.550214873316,
            "unit": "iter/sec",
            "range": "stddev: 0.00008794725632955942",
            "extra": "mean: 444.73100639931243 usec\nrounds: 1875"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 104.21954756660668,
            "unit": "iter/sec",
            "range": "stddev: 0.000771504305636567",
            "extra": "mean: 9.59512896907272 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2137.805505910355,
            "unit": "iter/sec",
            "range": "stddev: 0.00010232634385280136",
            "extra": "mean: 467.76940055365975 usec\nrounds: 1805"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.727453211172,
            "unit": "iter/sec",
            "range": "stddev: 0.0008560756682356476",
            "extra": "mean: 10.4463240842105 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13694.999186406903,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037069119291354973",
            "extra": "mean: 73.01935446572053 usec\nrounds: 7098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3525178987701436,
            "unit": "iter/sec",
            "range": "stddev: 0.0008948727995390299",
            "extra": "mean: 739.3617495999933 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.2500799446177,
            "unit": "iter/sec",
            "range": "stddev: 0.06255579974060875",
            "extra": "mean: 137.9295135555544 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2162.97957881638,
            "unit": "iter/sec",
            "range": "stddev: 0.00008670671781254183",
            "extra": "mean: 462.3252155469805 usec\nrounds: 1415"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 168.52435120032538,
            "unit": "iter/sec",
            "range": "stddev: 0.0031025246606877417",
            "extra": "mean: 5.933860554142096 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.983359954826028,
            "unit": "iter/sec",
            "range": "stddev: 0.00015076810305886138",
            "extra": "mean: 33.35183253333298 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.74259004305195,
            "unit": "iter/sec",
            "range": "stddev: 0.000749713909179852",
            "extra": "mean: 9.7330620104182 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.48607084984386,
            "unit": "iter/sec",
            "range": "stddev: 0.000059807078735297116",
            "extra": "mean: 8.88998960000022 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.49685589166236,
            "unit": "iter/sec",
            "range": "stddev: 0.000423088607483416",
            "extra": "mean: 21.054025181812943 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.99520428077376,
            "unit": "iter/sec",
            "range": "stddev: 0.00007340310954240572",
            "extra": "mean: 52.64486684210935 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4499.695046541655,
            "unit": "iter/sec",
            "range": "stddev: 0.000023342380591775842",
            "extra": "mean: 222.23728267287206 usec\nrounds: 2020"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 79.42368853997957,
            "unit": "iter/sec",
            "range": "stddev: 0.019986614716319802",
            "extra": "mean: 12.590702073684591 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 186.67142486846933,
            "unit": "iter/sec",
            "range": "stddev: 0.00024766792012167576",
            "extra": "mean: 5.35700630508719 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.48378355709431,
            "unit": "iter/sec",
            "range": "stddev: 0.000789250542582333",
            "extra": "mean: 9.480130179998127 msec\nrounds: 100"
          }
        ]
      }
    ]
  }
}