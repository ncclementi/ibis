window.BENCHMARK_DATA = {
  "lastUpdate": 1682960753802,
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
          "id": "5a6c8ca524a031477614e6984adcab3c96bddd3c",
          "message": "test(impala): fix udf/uda error testing",
          "timestamp": "2023-05-01T10:00:45-07:00",
          "tree_id": "0115ca2e1ba4650701fc4eaf09ae5092df9fe159",
          "url": "https://github.com/ibis-project/ibis/commit/5a6c8ca524a031477614e6984adcab3c96bddd3c"
        },
        "date": 1682960670621,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 292.73423920453183,
            "unit": "iter/sec",
            "range": "stddev: 0.00023254420340134896",
            "extra": "mean: 3.4160677709494225 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6157259.37783011,
            "unit": "iter/sec",
            "range": "stddev: 9.907270358947244e-9",
            "extra": "mean: 162.4099195167135 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.961055624151356,
            "unit": "iter/sec",
            "range": "stddev: 0.00021989787422575105",
            "extra": "mean: 16.677491575001824 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 50.46675132685881,
            "unit": "iter/sec",
            "range": "stddev: 0.00022080107232059484",
            "extra": "mean: 19.815026204545724 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 585.583916629885,
            "unit": "iter/sec",
            "range": "stddev: 0.005730149864009782",
            "extra": "mean: 1.707697174736519 msec\nrounds: 475"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12474.732832756015,
            "unit": "iter/sec",
            "range": "stddev: 0.000011804953780817342",
            "extra": "mean: 80.16203740846547 usec\nrounds: 6282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9275394921773082,
            "unit": "iter/sec",
            "range": "stddev: 0.0059076330220965536",
            "extra": "mean: 1.078121210399999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.280991509017333,
            "unit": "iter/sec",
            "range": "stddev: 0.00015304716261426747",
            "extra": "mean: 33.024017714288235 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7178238.557738077,
            "unit": "iter/sec",
            "range": "stddev: 4.155075104875589e-9",
            "extra": "mean: 139.30994239833768 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 102.81773417094946,
            "unit": "iter/sec",
            "range": "stddev: 0.0006934995614056635",
            "extra": "mean: 9.725948622222646 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 420.062984803867,
            "unit": "iter/sec",
            "range": "stddev: 0.00009066574044374922",
            "extra": "mean: 2.380595377778676 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2181.505656802979,
            "unit": "iter/sec",
            "range": "stddev: 0.00008228761852883097",
            "extra": "mean: 458.39899469502694 usec\nrounds: 1508"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 177.865294575702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000887794846888457",
            "extra": "mean: 5.622232276316197 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 260.0904705257905,
            "unit": "iter/sec",
            "range": "stddev: 0.0003713334172991542",
            "extra": "mean: 3.844815990291502 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.505223217548183,
            "unit": "iter/sec",
            "range": "stddev: 0.0033167895900348323",
            "extra": "mean: 399.16602760000046 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6023910.630144119,
            "unit": "iter/sec",
            "range": "stddev: 8.371389831647443e-9",
            "extra": "mean: 166.00511883325453 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 171.99464850833783,
            "unit": "iter/sec",
            "range": "stddev: 0.0036064994056369307",
            "extra": "mean: 5.81413438541678 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1869504.2127182095,
            "unit": "iter/sec",
            "range": "stddev: 8.24143996085095e-8",
            "extra": "mean: 534.9011749730303 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 97.87131208339333,
            "unit": "iter/sec",
            "range": "stddev: 0.000712746741263437",
            "extra": "mean: 10.217498659340837 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.6524604051745,
            "unit": "iter/sec",
            "range": "stddev: 0.00003438312310046496",
            "extra": "mean: 1.8564846046517633 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1186.534402012353,
            "unit": "iter/sec",
            "range": "stddev: 0.000014099371164987932",
            "extra": "mean: 842.7905657889125 usec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.2797844504081,
            "unit": "iter/sec",
            "range": "stddev: 0.0006810066560680691",
            "extra": "mean: 22.58366910344758 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.56064807011163,
            "unit": "iter/sec",
            "range": "stddev: 0.0006001517086894327",
            "extra": "mean: 9.211440957446854 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 745.0269140314239,
            "unit": "iter/sec",
            "range": "stddev: 0.0001398685719464806",
            "extra": "mean: 1.342233389380376 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5574932.50506101,
            "unit": "iter/sec",
            "range": "stddev: 9.02499933445843e-9",
            "extra": "mean: 179.37436894410703 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.17518773064725,
            "unit": "iter/sec",
            "range": "stddev: 0.00005165967528904427",
            "extra": "mean: 7.565716509802479 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.03357659714534,
            "unit": "iter/sec",
            "range": "stddev: 0.0006856076884980913",
            "extra": "mean: 38.41193300000327 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.71158632857802,
            "unit": "iter/sec",
            "range": "stddev: 0.00002879905485620696",
            "extra": "mean: 9.032478290322082 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1857996.579434107,
            "unit": "iter/sec",
            "range": "stddev: 8.228115198293593e-8",
            "extra": "mean: 538.2141232491244 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 283.3088323247779,
            "unit": "iter/sec",
            "range": "stddev: 0.0002609072646401341",
            "extra": "mean: 3.5297169939750623 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.67087436767704,
            "unit": "iter/sec",
            "range": "stddev: 0.00006465985306432398",
            "extra": "mean: 5.272290768594759 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 102.81493375437961,
            "unit": "iter/sec",
            "range": "stddev: 0.00014492396630946415",
            "extra": "mean: 9.726213532257447 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2210.67783476053,
            "unit": "iter/sec",
            "range": "stddev: 0.00009654932000196935",
            "extra": "mean: 452.349946372138 usec\nrounds: 317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1744895.607516196,
            "unit": "iter/sec",
            "range": "stddev: 8.631845760683524e-8",
            "extra": "mean: 573.1001875942989 nsec\nrounds: 90091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.24911760968938,
            "unit": "iter/sec",
            "range": "stddev: 0.00006452890494733852",
            "extra": "mean: 8.90875599999977 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4525708.092524537,
            "unit": "iter/sec",
            "range": "stddev: 1.0533515018767134e-8",
            "extra": "mean: 220.9598983305744 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4572.356828059391,
            "unit": "iter/sec",
            "range": "stddev: 0.00002193776396368196",
            "extra": "mean: 218.7055904874384 usec\nrounds: 1724"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 102.29336127529685,
            "unit": "iter/sec",
            "range": "stddev: 0.0007815660596418277",
            "extra": "mean: 9.775805463159546 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.79866598340946,
            "unit": "iter/sec",
            "range": "stddev: 0.0006077922370766912",
            "extra": "mean: 9.542106195877615 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 281.07248718175555,
            "unit": "iter/sec",
            "range": "stddev: 0.00024324732735758726",
            "extra": "mean: 3.5578010855020117 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.284498491450556,
            "unit": "iter/sec",
            "range": "stddev: 0.09888694300829731",
            "extra": "mean: 778.5139543999946 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 107.52254117912372,
            "unit": "iter/sec",
            "range": "stddev: 0.0001431814401879476",
            "extra": "mean: 9.300375428572528 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 322.8848279642962,
            "unit": "iter/sec",
            "range": "stddev: 0.000037643377716711605",
            "extra": "mean: 3.097079557143445 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 292.15844168267773,
            "unit": "iter/sec",
            "range": "stddev: 0.00020849505410144872",
            "extra": "mean: 3.422800293705464 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1050646.109617367,
            "unit": "iter/sec",
            "range": "stddev: 1.3381003694911387e-7",
            "extra": "mean: 951.7952723055229 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.30513557351914,
            "unit": "iter/sec",
            "range": "stddev: 0.0007241753399461837",
            "extra": "mean: 9.496213024690013 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.7860747165456,
            "unit": "iter/sec",
            "range": "stddev: 0.0001593200359211813",
            "extra": "mean: 7.887301521367314 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.60095066524254,
            "unit": "iter/sec",
            "range": "stddev: 0.0005244451585003934",
            "extra": "mean: 9.652421078945693 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.627286228828325,
            "unit": "iter/sec",
            "range": "stddev: 0.00008255537232496522",
            "extra": "mean: 115.91130437500397 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2237.837701814814,
            "unit": "iter/sec",
            "range": "stddev: 0.00007894510496812836",
            "extra": "mean: 446.8599305432348 usec\nrounds: 1123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.63393970852755,
            "unit": "iter/sec",
            "range": "stddev: 0.024625740177845384",
            "extra": "mean: 12.249806925532216 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.37568209309158,
            "unit": "iter/sec",
            "range": "stddev: 0.0006706188265361142",
            "extra": "mean: 9.313095670330915 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1766.6467099068454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000082720027587283",
            "extra": "mean: 566.0441300415574 usec\nrounds: 1438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.067364106235765,
            "unit": "iter/sec",
            "range": "stddev: 0.0008680192323931993",
            "extra": "mean: 23.219438216215536 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11441752.673886873,
            "unit": "iter/sec",
            "range": "stddev: 4.218159095317478e-9",
            "extra": "mean: 87.39919735225425 nsec\nrounds: 113624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.25744444671675,
            "unit": "iter/sec",
            "range": "stddev: 0.00032710473082973",
            "extra": "mean: 14.868242589743774 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 283.9866517447952,
            "unit": "iter/sec",
            "range": "stddev: 0.000448603881843241",
            "extra": "mean: 3.5212922644640727 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9322845984082325,
            "unit": "iter/sec",
            "range": "stddev: 0.004890791321270897",
            "extra": "mean: 1.0726338305999945 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.15219652892979,
            "unit": "iter/sec",
            "range": "stddev: 0.00006274356085714788",
            "extra": "mean: 9.51002483076877 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 203.9408472454916,
            "unit": "iter/sec",
            "range": "stddev: 0.018480089988401907",
            "extra": "mean: 4.90338259111114 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 277.45821612721306,
            "unit": "iter/sec",
            "range": "stddev: 0.00023440070317659638",
            "extra": "mean: 3.6041462889731317 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2248.0247889478746,
            "unit": "iter/sec",
            "range": "stddev: 0.00008401124787794017",
            "extra": "mean: 444.8349524063843 usec\nrounds: 1849"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13927.890069259707,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017042936756529173",
            "extra": "mean: 71.79838403572006 usec\nrounds: 6239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148262.421330333,
            "unit": "iter/sec",
            "range": "stddev: 3.011569774359123e-7",
            "extra": "mean: 6.74479744109919 usec\nrounds: 37594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.839919255946,
            "unit": "iter/sec",
            "range": "stddev: 0.00011796892786254559",
            "extra": "mean: 6.066491687898158 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.0691239940076,
            "unit": "iter/sec",
            "range": "stddev: 0.0006227070090679926",
            "extra": "mean: 9.702226634410318 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10532.055076678793,
            "unit": "iter/sec",
            "range": "stddev: 0.000001941615702523206",
            "extra": "mean: 94.94823115901733 usec\nrounds: 6117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.89794364347854,
            "unit": "iter/sec",
            "range": "stddev: 0.044676740267361806",
            "extra": "mean: 29.50031454761667 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 102.46476055459802,
            "unit": "iter/sec",
            "range": "stddev: 0.0007392081695747192",
            "extra": "mean: 9.759452855668885 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.6429944521821,
            "unit": "iter/sec",
            "range": "stddev: 0.0008005841771949796",
            "extra": "mean: 9.742506104163459 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 97.0904332334902,
            "unit": "iter/sec",
            "range": "stddev: 0.0007358709901313428",
            "extra": "mean: 10.299675948454434 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7842733616775418,
            "unit": "iter/sec",
            "range": "stddev: 0.0037740613774920615",
            "extra": "mean: 1.2750656197999946 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8482.951016080422,
            "unit": "iter/sec",
            "range": "stddev: 0.000047764067980394736",
            "extra": "mean: 117.8835051746006 usec\nrounds: 3092"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.27004405389791,
            "unit": "iter/sec",
            "range": "stddev: 0.00010669827376101374",
            "extra": "mean: 18.426371627906864 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2237.8777969725443,
            "unit": "iter/sec",
            "range": "stddev: 0.00008239086250790996",
            "extra": "mean: 446.8519243333235 usec\nrounds: 1163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.927363667804148,
            "unit": "iter/sec",
            "range": "stddev: 0.0001378971830034436",
            "extra": "mean: 52.833559789471444 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2160.615305840283,
            "unit": "iter/sec",
            "range": "stddev: 0.00008278850855471212",
            "extra": "mean: 462.8311191246935 usec\nrounds: 1234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6527165960182142,
            "unit": "iter/sec",
            "range": "stddev: 0.0011248871329411069",
            "extra": "mean: 605.0644147999947 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.56745127374207,
            "unit": "iter/sec",
            "range": "stddev: 0.0007217369427411735",
            "extra": "mean: 9.749681673683224 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16956110217800408,
            "unit": "iter/sec",
            "range": "stddev: 0.12840105715188885",
            "extra": "mean: 5.897579026999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 246.94390528649322,
            "unit": "iter/sec",
            "range": "stddev: 0.0037736670075754425",
            "extra": "mean: 4.049502654620469 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2149.0462308129268,
            "unit": "iter/sec",
            "range": "stddev: 0.00008518116317499323",
            "extra": "mean: 465.32270253754695 usec\nrounds: 1143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 165.18935827522736,
            "unit": "iter/sec",
            "range": "stddev: 0.00014157493708592667",
            "extra": "mean: 6.053658725000115 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1860568.6336403466,
            "unit": "iter/sec",
            "range": "stddev: 8.608600773600679e-8",
            "extra": "mean: 537.4700948512834 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 80.0984396942054,
            "unit": "iter/sec",
            "range": "stddev: 0.026628680163998636",
            "extra": "mean: 12.484637701030566 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.8987762445545,
            "unit": "iter/sec",
            "range": "stddev: 0.0007426744814441308",
            "extra": "mean: 10.214632279998739 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.34616313067943,
            "unit": "iter/sec",
            "range": "stddev: 0.00003562960166988139",
            "extra": "mean: 5.041690669565183 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2180.7056422050127,
            "unit": "iter/sec",
            "range": "stddev: 0.00008495150927653667",
            "extra": "mean: 458.5671631448862 usec\nrounds: 1183"
          }
        ]
      }
    ]
  }
}