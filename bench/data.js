window.BENCHMARK_DATA = {
  "lastUpdate": 1676307471529,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "a3926e232ac41da9040a0dbc1594ecf6d32524cd",
          "message": "test(backends): strict validate exception in test_numeric",
          "timestamp": "2023-02-13T11:50:03-05:00",
          "tree_id": "a668d2317aca77f398b037ac5a34415e426172b6",
          "url": "https://github.com/ibis-project/ibis/commit/a3926e232ac41da9040a0dbc1594ecf6d32524cd"
        },
        "date": 1676307388298,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 618.767131778619,
            "unit": "iter/sec",
            "range": "stddev: 0.00004379625764055116",
            "extra": "mean: 1.6161168695653625 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.578239862595668,
            "unit": "iter/sec",
            "range": "stddev: 0.0026734476010010465",
            "extra": "mean: 633.6172489999967 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1466.7925431910467,
            "unit": "iter/sec",
            "range": "stddev: 0.000005962129581641396",
            "extra": "mean: 681.7596698606561 usec\nrounds: 1148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.15088471968244,
            "unit": "iter/sec",
            "range": "stddev: 0.00009539740725496125",
            "extra": "mean: 3.757267239796058 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 254.66836452940817,
            "unit": "iter/sec",
            "range": "stddev: 0.0001936554593664432",
            "extra": "mean: 3.926675391534639 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.85041590412474,
            "unit": "iter/sec",
            "range": "stddev: 0.00052975876786161",
            "extra": "mean: 11.007104260868864 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.870549104722268,
            "unit": "iter/sec",
            "range": "stddev: 0.0034417481231233797",
            "extra": "mean: 1.1487002796000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.1069625637747,
            "unit": "iter/sec",
            "range": "stddev: 0.0003749684602746388",
            "extra": "mean: 15.35934039344045 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.8556015036468,
            "unit": "iter/sec",
            "range": "stddev: 0.0006636604216246051",
            "extra": "mean: 22.29375967500289 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.56939247112673,
            "unit": "iter/sec",
            "range": "stddev: 0.0005717263618668685",
            "extra": "mean: 10.463601098041075 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 256.7009269390711,
            "unit": "iter/sec",
            "range": "stddev: 0.0001926387142968997",
            "extra": "mean: 3.8955839074058103 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19416.073162846038,
            "unit": "iter/sec",
            "range": "stddev: 0.00001346213671403657",
            "extra": "mean: 51.503720222561135 usec\nrounds: 5751"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 382801.735163499,
            "unit": "iter/sec",
            "range": "stddev: 7.754438128892515e-7",
            "extra": "mean: 2.612318357368178 usec\nrounds: 779"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 243.75827864058982,
            "unit": "iter/sec",
            "range": "stddev: 0.0002920051668399153",
            "extra": "mean: 4.102424769229902 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.97090115323554,
            "unit": "iter/sec",
            "range": "stddev: 0.00018511789327309847",
            "extra": "mean: 10.207112399996277 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 329.1663566821358,
            "unit": "iter/sec",
            "range": "stddev: 0.000041174017168884427",
            "extra": "mean: 3.0379775444841837 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 248.40477791025987,
            "unit": "iter/sec",
            "range": "stddev: 0.00021517490707783217",
            "extra": "mean: 4.025687462264779 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.53171025928938,
            "unit": "iter/sec",
            "range": "stddev: 0.0006337364050676285",
            "extra": "mean: 6.918896885714584 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.36324778224082,
            "unit": "iter/sec",
            "range": "stddev: 0.0001941608501678301",
            "extra": "mean: 11.316922194444048 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121353.89153952709,
            "unit": "iter/sec",
            "range": "stddev: 4.185240044306887e-7",
            "extra": "mean: 8.240362029711115 usec\nrounds: 36102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 79.21934122094271,
            "unit": "iter/sec",
            "range": "stddev: 0.011518360607222635",
            "extra": "mean: 12.62317995312534 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1567934.8413191591,
            "unit": "iter/sec",
            "range": "stddev: 9.624007071952805e-8",
            "extra": "mean: 637.7816052347332 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 261.9115176550668,
            "unit": "iter/sec",
            "range": "stddev: 0.00020992260569596994",
            "extra": "mean: 3.818083331932671 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.21705971285677,
            "unit": "iter/sec",
            "range": "stddev: 0.00013278186583522733",
            "extra": "mean: 10.50231967901204 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.2710123918134,
            "unit": "iter/sec",
            "range": "stddev: 0.01883493738216889",
            "extra": "mean: 30.056193909087604 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4674761.153527639,
            "unit": "iter/sec",
            "range": "stddev: 1.1902865776616401e-8",
            "extra": "mean: 213.91467224942554 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5219.5338321836425,
            "unit": "iter/sec",
            "range": "stddev: 0.000048030787995099015",
            "extra": "mean: 191.58799083435395 usec\nrounds: 2182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 972.2567290252767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000487997258745307",
            "extra": "mean: 1.0285349230779168 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 144.81877476678116,
            "unit": "iter/sec",
            "range": "stddev: 0.00009179663005527588",
            "extra": "mean: 6.90518202222342 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4453.758990389578,
            "unit": "iter/sec",
            "range": "stddev: 0.000026939629364020274",
            "extra": "mean: 224.52943730404422 usec\nrounds: 638"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 68.73941473876216,
            "unit": "iter/sec",
            "range": "stddev: 0.016285238123737382",
            "extra": "mean: 14.547694416666305 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.82867686587733,
            "unit": "iter/sec",
            "range": "stddev: 0.00004180792355235831",
            "extra": "mean: 5.786076813953994 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.97432114398083,
            "unit": "iter/sec",
            "range": "stddev: 0.00012588955736197836",
            "extra": "mean: 13.703450533331662 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56858.25453587536,
            "unit": "iter/sec",
            "range": "stddev: 4.798345487789747e-7",
            "extra": "mean: 17.587595823382838 usec\nrounds: 13551"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.9516195426927805,
            "unit": "iter/sec",
            "range": "stddev: 0.00025684994884613395",
            "extra": "mean: 201.9541265999976 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5786504075231534,
            "unit": "iter/sec",
            "range": "stddev: 0.04460268392914982",
            "extra": "mean: 1.7281591562000016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.86349480826978,
            "unit": "iter/sec",
            "range": "stddev: 0.00011752235001118237",
            "extra": "mean: 8.273796828284148 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 162.2731583124437,
            "unit": "iter/sec",
            "range": "stddev: 0.0006653534195135587",
            "extra": "mean: 6.162448616884511 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4512.04902717955,
            "unit": "iter/sec",
            "range": "stddev: 0.0002504886382317746",
            "extra": "mean: 221.62879746568115 usec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 132.5212904373001,
            "unit": "iter/sec",
            "range": "stddev: 0.008784575401103547",
            "extra": "mean: 7.545957307691104 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 161.36297297289315,
            "unit": "iter/sec",
            "range": "stddev: 0.0007045861550053215",
            "extra": "mean: 6.197208576269766 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 251.14119479762357,
            "unit": "iter/sec",
            "range": "stddev: 0.0002809953120936129",
            "extra": "mean: 3.9818238533340873 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.46965722278128,
            "unit": "iter/sec",
            "range": "stddev: 0.0007485403750105697",
            "extra": "mean: 10.932587159088442 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5987.841269109838,
            "unit": "iter/sec",
            "range": "stddev: 0.000053557985019481246",
            "extra": "mean: 167.00509500123434 usec\nrounds: 2821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.02160826888831,
            "unit": "iter/sec",
            "range": "stddev: 0.00003852332560865982",
            "extra": "mean: 6.94340253535428 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 159.714410886747,
            "unit": "iter/sec",
            "range": "stddev: 0.000648187392852956",
            "extra": "mean: 6.261175772730345 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1525342.6297405828,
            "unit": "iter/sec",
            "range": "stddev: 1.131985502894762e-7",
            "extra": "mean: 655.590409985507 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.98980770223926,
            "unit": "iter/sec",
            "range": "stddev: 0.0007851625374080501",
            "extra": "mean: 11.23724194737008 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.076310093660437,
            "unit": "iter/sec",
            "range": "stddev: 0.00034197160949225836",
            "extra": "mean: 110.17693199998462 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2696205624558994,
            "unit": "iter/sec",
            "range": "stddev: 0.001434193024387759",
            "extra": "mean: 440.60228239998196 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8716425878603584,
            "unit": "iter/sec",
            "range": "stddev: 0.001844881900798534",
            "extra": "mean: 1.1472592252000027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7499873080397852,
            "unit": "iter/sec",
            "range": "stddev: 0.002348003516914215",
            "extra": "mean: 1.3333558971999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.46804314132254,
            "unit": "iter/sec",
            "range": "stddev: 0.00046650750873151",
            "extra": "mean: 37.78141038461495 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.04341581214065,
            "unit": "iter/sec",
            "range": "stddev: 0.00012069128625646187",
            "extra": "mean: 14.696499111109807 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.65145930598248,
            "unit": "iter/sec",
            "range": "stddev: 0.0003432358846467579",
            "extra": "mean: 22.90874156097111 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 558836.614268046,
            "unit": "iter/sec",
            "range": "stddev: 1.5256454494884703e-7",
            "extra": "mean: 1.789431784654593 usec\nrounds: 23697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6065.969804478144,
            "unit": "iter/sec",
            "range": "stddev: 0.00004573553281215222",
            "extra": "mean: 164.85410119611205 usec\nrounds: 2342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.34699340776446,
            "unit": "iter/sec",
            "range": "stddev: 0.00019647011254346773",
            "extra": "mean: 17.437705807687657 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.95612360287187,
            "unit": "iter/sec",
            "range": "stddev: 0.00014131239712288226",
            "extra": "mean: 9.712875397846718 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6010.673860443303,
            "unit": "iter/sec",
            "range": "stddev: 0.00004966423100174279",
            "extra": "mean: 166.3706970662766 usec\nrounds: 2796"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11437562.37100876,
            "unit": "iter/sec",
            "range": "stddev: 3.3587497931234864e-9",
            "extra": "mean: 87.4312172089483 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15264165226986276,
            "unit": "iter/sec",
            "range": "stddev: 0.09830791304909368",
            "extra": "mean: 6.551291768200008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.01142138362755,
            "unit": "iter/sec",
            "range": "stddev: 0.0007198537420275759",
            "extra": "mean: 28.56210803448362 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1552466.457091179,
            "unit": "iter/sec",
            "range": "stddev: 9.914318434203015e-8",
            "extra": "mean: 644.1363002931975 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4490255.985590481,
            "unit": "iter/sec",
            "range": "stddev: 1.331583150831196e-8",
            "extra": "mean: 222.70445230981755 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9717.160931804923,
            "unit": "iter/sec",
            "range": "stddev: 0.0000772658603765031",
            "extra": "mean: 102.91071713415103 usec\nrounds: 3712"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5434369.910973724,
            "unit": "iter/sec",
            "range": "stddev: 4.865217479271588e-9",
            "extra": "mean: 184.01397335514744 nsec\nrounds: 54946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 224.80757970912768,
            "unit": "iter/sec",
            "range": "stddev: 0.0004116495297635335",
            "extra": "mean: 4.448248592391201 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.45068977846299,
            "unit": "iter/sec",
            "range": "stddev: 0.0006746541300940276",
            "extra": "mean: 10.476613655919698 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 270.33335315464086,
            "unit": "iter/sec",
            "range": "stddev: 0.0001417822376981697",
            "extra": "mean: 3.699136596837026 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 251.39724072424735,
            "unit": "iter/sec",
            "range": "stddev: 0.00011733722834418337",
            "extra": "mean: 3.977768399999585 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1586703.8122851856,
            "unit": "iter/sec",
            "range": "stddev: 9.142181019520845e-8",
            "extra": "mean: 630.2373462882091 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10724.665740811284,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017928364776159116",
            "extra": "mean: 93.24299928478268 usec\nrounds: 5590"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.88316227727277,
            "unit": "iter/sec",
            "range": "stddev: 0.00015049228517253777",
            "extra": "mean: 72.02969899999191 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5198.498345004598,
            "unit": "iter/sec",
            "range": "stddev: 0.000047055513105173675",
            "extra": "mean: 192.36324292782194 usec\nrounds: 1980"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.87845315209796,
            "unit": "iter/sec",
            "range": "stddev: 0.00015326536151424812",
            "extra": "mean: 6.95031103053959 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 419.2813271840423,
            "unit": "iter/sec",
            "range": "stddev: 0.000023574182592918255",
            "extra": "mean: 2.385033473148335 msec\nrounds: 391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 160.95973471727473,
            "unit": "iter/sec",
            "range": "stddev: 0.0006821000611363026",
            "extra": "mean: 6.21273389743402 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 159.76917604952783,
            "unit": "iter/sec",
            "range": "stddev: 0.0007064897941002705",
            "extra": "mean: 6.259029587096349 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5784.518872413116,
            "unit": "iter/sec",
            "range": "stddev: 0.00006159847439781465",
            "extra": "mean: 172.8752247259645 usec\nrounds: 3373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10043.18772651925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035536260940118853",
            "extra": "mean: 99.56997989388158 usec\nrounds: 4924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 520.6693475209919,
            "unit": "iter/sec",
            "range": "stddev: 0.000022502108124015633",
            "extra": "mean: 1.9206047076925012 msec\nrounds: 455"
          }
        ]
      }
    ]
  }
}