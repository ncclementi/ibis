window.BENCHMARK_DATA = {
  "lastUpdate": 1680070687599,
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
          "id": "1a0290ebe1d93b80fbd1b012e003092cb054415a",
          "message": "chore(flake/nixpkgs): `0fc009e2` -> `49079a13`",
          "timestamp": "2023-03-29T06:12:41Z",
          "tree_id": "1e9f82ab22a625870b8b160bca542ef31555d1c3",
          "url": "https://github.com/ibis-project/ibis/commit/1a0290ebe1d93b80fbd1b012e003092cb054415a"
        },
        "date": 1680070608386,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9047433660274925,
            "unit": "iter/sec",
            "range": "stddev: 0.005374294529180178",
            "extra": "mean: 1.1052858053999954 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 92.7767684134951,
            "unit": "iter/sec",
            "range": "stddev: 0.011246502177697524",
            "extra": "mean: 10.778560377778174 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.86250445978628,
            "unit": "iter/sec",
            "range": "stddev: 0.0006284174874197815",
            "extra": "mean: 8.273864623852162 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 108.69270890525614,
            "unit": "iter/sec",
            "range": "stddev: 0.00035050103042998733",
            "extra": "mean: 9.200249125004945 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.2328420599807,
            "unit": "iter/sec",
            "range": "stddev: 0.0001584840635351762",
            "extra": "mean: 7.234170875008772 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.49408004395188,
            "unit": "iter/sec",
            "range": "stddev: 0.0005810944074670041",
            "extra": "mean: 9.662388414635117 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.05268372960331,
            "unit": "iter/sec",
            "range": "stddev: 0.02635852373883856",
            "extra": "mean: 26.279355409091533 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 671.7996853787342,
            "unit": "iter/sec",
            "range": "stddev: 0.00006726514199979525",
            "extra": "mean: 1.4885389525543455 msec\nrounds: 548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 122.10624916784501,
            "unit": "iter/sec",
            "range": "stddev: 0.000553806431666893",
            "extra": "mean: 8.189589040814925 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 320.45314087174137,
            "unit": "iter/sec",
            "range": "stddev: 0.00020879092027676705",
            "extra": "mean: 3.120581053690597 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12681.54686687308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017594274405862271",
            "extra": "mean: 78.8547336139422 usec\nrounds: 2136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 314.2278981344295,
            "unit": "iter/sec",
            "range": "stddev: 0.00020984213238492468",
            "extra": "mean: 3.182403618319692 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.446523845562396,
            "unit": "iter/sec",
            "range": "stddev: 0.0006785444456951105",
            "extra": "mean: 17.71588278378308 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 307.27857256931804,
            "unit": "iter/sec",
            "range": "stddev: 0.0001941966711327731",
            "extra": "mean: 3.254375961325494 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.55838211501965,
            "unit": "iter/sec",
            "range": "stddev: 0.0006487170035184058",
            "extra": "mean: 8.294736396229524 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 97.47216151892641,
            "unit": "iter/sec",
            "range": "stddev: 0.019529739813260286",
            "extra": "mean: 10.259339532609292 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6875671262675066,
            "unit": "iter/sec",
            "range": "stddev: 0.0011575344955054253",
            "extra": "mean: 1.4544034492000093 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.058926062504135,
            "unit": "iter/sec",
            "range": "stddev: 0.00032770299339013076",
            "extra": "mean: 21.249953700001356 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5267.614807658704,
            "unit": "iter/sec",
            "range": "stddev: 0.000051515186628300376",
            "extra": "mean: 189.8392415759173 usec\nrounds: 1929"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.598257931857602,
            "unit": "iter/sec",
            "range": "stddev: 0.0002437242990617877",
            "extra": "mean: 178.6269964999955 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.939510019171,
            "unit": "iter/sec",
            "range": "stddev: 0.0002026822960680379",
            "extra": "mean: 3.216059612168119 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.48969823162668,
            "unit": "iter/sec",
            "range": "stddev: 0.00005810817990617997",
            "extra": "mean: 6.079408076923134 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.51529158877576,
            "unit": "iter/sec",
            "range": "stddev: 0.0016822556485935306",
            "extra": "mean: 24.087509968745202 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8544482313119081,
            "unit": "iter/sec",
            "range": "stddev: 0.002970321781767024",
            "extra": "mean: 1.170345918400011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.68479201173106,
            "unit": "iter/sec",
            "range": "stddev: 0.0005392390825341498",
            "extra": "mean: 10.561358152174048 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6961723.146768045,
            "unit": "iter/sec",
            "range": "stddev: 4.603443361737206e-9",
            "extra": "mean: 143.64259809214573 nsec\nrounds: 68023"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.53705849817692,
            "unit": "iter/sec",
            "range": "stddev: 0.017458108023100685",
            "extra": "mean: 11.168559887639834 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 756768.4230801136,
            "unit": "iter/sec",
            "range": "stddev: 4.1604247832058937e-7",
            "extra": "mean: 1.3214082003182859 usec\nrounds: 25316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5660.923638038834,
            "unit": "iter/sec",
            "range": "stddev: 0.00005551015925369973",
            "extra": "mean: 176.6496183203134 usec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1948022.18323192,
            "unit": "iter/sec",
            "range": "stddev: 1.3531396393480776e-7",
            "extra": "mean: 513.3411768139737 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2683781.2606526557,
            "unit": "iter/sec",
            "range": "stddev: 2.142788842155138e-8",
            "extra": "mean: 372.60860810890114 nsec\nrounds: 131562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.2472795857834,
            "unit": "iter/sec",
            "range": "stddev: 0.0006822906963014009",
            "extra": "mean: 9.592576458334493 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5578020.493638649,
            "unit": "iter/sec",
            "range": "stddev: 9.561470892305344e-8",
            "extra": "mean: 179.27506740819499 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11985572.310213786,
            "unit": "iter/sec",
            "range": "stddev: 3.0852188069626032e-9",
            "extra": "mean: 83.43364623042221 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.15702080534653,
            "unit": "iter/sec",
            "range": "stddev: 0.0006858939001683583",
            "extra": "mean: 9.24581679999979 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1179.17679899159,
            "unit": "iter/sec",
            "range": "stddev: 0.000011482479788964566",
            "extra": "mean: 848.0492499981185 usec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.84790696977097,
            "unit": "iter/sec",
            "range": "stddev: 0.0006268321718537034",
            "extra": "mean: 9.187131180002552 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5409.374651555781,
            "unit": "iter/sec",
            "range": "stddev: 0.000029101375135769746",
            "extra": "mean: 184.86425223152025 usec\nrounds: 2240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 292.09696956928553,
            "unit": "iter/sec",
            "range": "stddev: 0.00002541850258506031",
            "extra": "mean: 3.4235206256147057 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71704.29484067495,
            "unit": "iter/sec",
            "range": "stddev: 5.158107895747664e-7",
            "extra": "mean: 13.946166017279351 usec\nrounds: 13089"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1941691.041656496,
            "unit": "iter/sec",
            "range": "stddev: 9.398341632045725e-8",
            "extra": "mean: 515.0149939131818 nsec\nrounds: 71429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 317.4711805899548,
            "unit": "iter/sec",
            "range": "stddev: 0.00023877435708032283",
            "extra": "mean: 3.1498922142844776 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12032.27611240277,
            "unit": "iter/sec",
            "range": "stddev: 0.00001599058843942065",
            "extra": "mean: 83.10979490980999 usec\nrounds: 5305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6194223.133533364,
            "unit": "iter/sec",
            "range": "stddev: 7.411785608501531e-9",
            "extra": "mean: 161.44074542382387 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5373.049779166353,
            "unit": "iter/sec",
            "range": "stddev: 0.00008758858548369428",
            "extra": "mean: 186.1140397167795 usec\nrounds: 2115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.83859254491678,
            "unit": "iter/sec",
            "range": "stddev: 0.00012753672787027868",
            "extra": "mean: 15.422913433959144 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.86376286939486,
            "unit": "iter/sec",
            "range": "stddev: 0.000055004519829187166",
            "extra": "mean: 6.178035047948831 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9082466357152182,
            "unit": "iter/sec",
            "range": "stddev: 0.004259498909679978",
            "extra": "mean: 1.1010225204000108 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1742491.4115478795,
            "unit": "iter/sec",
            "range": "stddev: 1.7012020836075748e-7",
            "extra": "mean: 573.8909204216312 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1781.897083397785,
            "unit": "iter/sec",
            "range": "stddev: 0.000006409516236121576",
            "extra": "mean: 561.1996390348 usec\nrounds: 1327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.06987936053181,
            "unit": "iter/sec",
            "range": "stddev: 0.00003474373335585783",
            "extra": "mean: 5.048723224492779 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.20518608378015,
            "unit": "iter/sec",
            "range": "stddev: 0.017962255378244113",
            "extra": "mean: 11.467207913979744 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8370.554769648985,
            "unit": "iter/sec",
            "range": "stddev: 0.000021206239172911727",
            "extra": "mean: 119.466394703721 usec\nrounds: 4041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.4506552813607,
            "unit": "iter/sec",
            "range": "stddev: 0.0006039444745401306",
            "extra": "mean: 10.587539038464929 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.98752710208644,
            "unit": "iter/sec",
            "range": "stddev: 0.0008254494217225056",
            "extra": "mean: 22.733717166668537 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.2035991916149,
            "unit": "iter/sec",
            "range": "stddev: 0.00011502198227417389",
            "extra": "mean: 3.4577716279991364 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 287.1833545701507,
            "unit": "iter/sec",
            "range": "stddev: 0.00025614855850635915",
            "extra": "mean: 3.4820959644293334 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.45098875113248,
            "unit": "iter/sec",
            "range": "stddev: 0.00025944998977799836",
            "extra": "mean: 10.70079635714803 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145317.8577559327,
            "unit": "iter/sec",
            "range": "stddev: 4.315579522591504e-7",
            "extra": "mean: 6.881466706449396 usec\nrounds: 38611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.524943477849353,
            "unit": "iter/sec",
            "range": "stddev: 0.0002343364697316873",
            "extra": "mean: 95.01238672726231 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.30110397820084,
            "unit": "iter/sec",
            "range": "stddev: 0.01991903423113251",
            "extra": "mean: 10.07038149565312 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.6530207838111,
            "unit": "iter/sec",
            "range": "stddev: 0.00008671890261035871",
            "extra": "mean: 1.8564826732891395 msec\nrounds: 453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.71441668125937,
            "unit": "iter/sec",
            "range": "stddev: 0.0006456462053057153",
            "extra": "mean: 8.284014681033934 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 216.904512098587,
            "unit": "iter/sec",
            "range": "stddev: 0.004257883653773946",
            "extra": "mean: 4.610323641148977 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.69179779029217,
            "unit": "iter/sec",
            "range": "stddev: 0.00011545340593623423",
            "extra": "mean: 13.38835092452376 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5689494722118997,
            "unit": "iter/sec",
            "range": "stddev: 0.0016421113437988658",
            "extra": "mean: 389.26417620000393 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.27258179649246,
            "unit": "iter/sec",
            "range": "stddev: 0.00015638863538942497",
            "extra": "mean: 9.777791686044011 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1653856638483039,
            "unit": "iter/sec",
            "range": "stddev: 0.019949234865692264",
            "extra": "mean: 6.046473295999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.488237597312636,
            "unit": "iter/sec",
            "range": "stddev: 0.001007422677285474",
            "extra": "mean: 40.835931782601655 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5304.248148343001,
            "unit": "iter/sec",
            "range": "stddev: 0.000047132443718070684",
            "extra": "mean: 188.52813292914865 usec\nrounds: 1813"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.565105625554649,
            "unit": "iter/sec",
            "range": "stddev: 0.00018211800844316112",
            "extra": "mean: 64.24627137500494 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.95337834934024,
            "unit": "iter/sec",
            "range": "stddev: 0.0008655655131990048",
            "extra": "mean: 16.40598154000145 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 314.25516817921584,
            "unit": "iter/sec",
            "range": "stddev: 0.00022931834384169787",
            "extra": "mean: 3.182127459649963 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 159.1706847189225,
            "unit": "iter/sec",
            "range": "stddev: 0.004012419795751306",
            "extra": "mean: 6.282563914114507 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 732.8868607423415,
            "unit": "iter/sec",
            "range": "stddev: 0.00003334031379420084",
            "extra": "mean: 1.3644670870304585 msec\nrounds: 586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7699447944236457,
            "unit": "iter/sec",
            "range": "stddev: 0.00270874106925095",
            "extra": "mean: 564.9893731999896 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 246.5096955362812,
            "unit": "iter/sec",
            "range": "stddev: 0.012680971954090974",
            "extra": "mean: 4.056635572992383 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13732.807651507675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021468937918263545",
            "extra": "mean: 72.81832130592855 usec\nrounds: 6984"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5480.4370755405525,
            "unit": "iter/sec",
            "range": "stddev: 0.00005272010869381781",
            "extra": "mean: 182.4671985493724 usec\nrounds: 2206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 334.17118190885583,
            "unit": "iter/sec",
            "range": "stddev: 0.00006553522294457174",
            "extra": "mean: 2.9924782690350207 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.18812285497775,
            "unit": "iter/sec",
            "range": "stddev: 0.00019736975790825506",
            "extra": "mean: 8.3900977383187 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.02964691757025,
            "unit": "iter/sec",
            "range": "stddev: 0.0007041456660188435",
            "extra": "mean: 8.847236342596695 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.27344978982813,
            "unit": "iter/sec",
            "range": "stddev: 0.0002520483939993592",
            "extra": "mean: 6.239336592001564 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 481699.81147645763,
            "unit": "iter/sec",
            "range": "stddev: 3.6899891663594616e-7",
            "extra": "mean: 2.0759817134553176 usec\nrounds: 2078"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.68270868071929,
            "unit": "iter/sec",
            "range": "stddev: 0.0006113084267084228",
            "extra": "mean: 8.64433424324433 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5488.191257224057,
            "unit": "iter/sec",
            "range": "stddev: 0.00004585703488396556",
            "extra": "mean: 182.20939342879296 usec\nrounds: 2313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5686.618375003767,
            "unit": "iter/sec",
            "range": "stddev: 0.00004691698355071101",
            "extra": "mean: 175.85143472887566 usec\nrounds: 3202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5152.383638537374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000904441808317202",
            "extra": "mean: 194.08492654166443 usec\nrounds: 3063"
          }
        ]
      }
    ]
  }
}