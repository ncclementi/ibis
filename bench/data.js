window.BENCHMARK_DATA = {
  "lastUpdate": 1677430757735,
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
          "id": "d6340b6885f5b9b5a6459848962370c295eb4260",
          "message": "chore(deps): bump rust in pre-commit-config",
          "timestamp": "2023-02-26T11:53:54-05:00",
          "tree_id": "a17ce3e5aca0715dc0a0d5d9bee52e739b06fbae",
          "url": "https://github.com/ibis-project/ibis/commit/d6340b6885f5b9b5a6459848962370c295eb4260"
        },
        "date": 1677430681387,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.62981489601772,
            "unit": "iter/sec",
            "range": "stddev: 0.00040320643961725376",
            "extra": "mean: 18.646344424997352 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11216713.932468653,
            "unit": "iter/sec",
            "range": "stddev: 3.893831655225366e-9",
            "extra": "mean: 89.15267038296543 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13668779545064763,
            "unit": "iter/sec",
            "range": "stddev: 0.07916418332453026",
            "extra": "mean: 7.315942119800002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 147.64202254566018,
            "unit": "iter/sec",
            "range": "stddev: 0.00011619348055890718",
            "extra": "mean: 6.773139400002037 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1614650170222083,
            "unit": "iter/sec",
            "range": "stddev: 0.002659124060179446",
            "extra": "mean: 462.6491718000011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8264784432978961,
            "unit": "iter/sec",
            "range": "stddev: 0.009153917048942643",
            "extra": "mean: 1.2099529130000064 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 95.72995116865704,
            "unit": "iter/sec",
            "range": "stddev: 0.00008694655491150081",
            "extra": "mean: 10.446051499997111 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1486289.7712953018,
            "unit": "iter/sec",
            "range": "stddev: 9.301466634158999e-8",
            "extra": "mean: 672.816310327225 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 132.4370420461293,
            "unit": "iter/sec",
            "range": "stddev: 0.00008599614228816275",
            "extra": "mean: 7.550757586776128 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2432.974940016268,
            "unit": "iter/sec",
            "range": "stddev: 0.003708519592938173",
            "extra": "mean: 411.0194410770682 usec\nrounds: 594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.71473697594766,
            "unit": "iter/sec",
            "range": "stddev: 0.00013984694081239988",
            "extra": "mean: 10.339685876917533 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 245.58846843406917,
            "unit": "iter/sec",
            "range": "stddev: 0.0002103575422781552",
            "extra": "mean: 4.0718524219652465 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.01793345572958,
            "unit": "iter/sec",
            "range": "stddev: 0.0005612908809604026",
            "extra": "mean: 11.49188403225814 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4050.2393892409827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000510270081390051",
            "extra": "mean: 246.89898642939238 usec\nrounds: 2137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 84.3767504325998,
            "unit": "iter/sec",
            "range": "stddev: 0.0007530743698938026",
            "extra": "mean: 11.851605980000386 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.16231744081452,
            "unit": "iter/sec",
            "range": "stddev: 0.03676207821247434",
            "extra": "mean: 122.51422555555615 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 216.53141609182134,
            "unit": "iter/sec",
            "range": "stddev: 0.00037390057593643925",
            "extra": "mean: 4.618267492306726 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 123939.85703167501,
            "unit": "iter/sec",
            "range": "stddev: 3.4883551415222376e-7",
            "extra": "mean: 8.068429510487755 usec\nrounds: 34842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 275.1935763214809,
            "unit": "iter/sec",
            "range": "stddev: 0.00003938049479454105",
            "extra": "mean: 3.633805749999778 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3204.4803987416662,
            "unit": "iter/sec",
            "range": "stddev: 0.0027145820106286005",
            "extra": "mean: 312.06307281289014 usec\nrounds: 1909"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 83.13454478104396,
            "unit": "iter/sec",
            "range": "stddev: 0.00014226218533370898",
            "extra": "mean: 12.028693999994289 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.52047352895731,
            "unit": "iter/sec",
            "range": "stddev: 0.0006781237645780254",
            "extra": "mean: 25.96022084848624 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3569.683588165373,
            "unit": "iter/sec",
            "range": "stddev: 0.000042208025487950935",
            "extra": "mean: 280.1368735636165 usec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 604.4289658830427,
            "unit": "iter/sec",
            "range": "stddev: 0.00007100126191177382",
            "extra": "mean: 1.6544541318251456 msec\nrounds: 531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 74.66716561012711,
            "unit": "iter/sec",
            "range": "stddev: 0.0008125965721253152",
            "extra": "mean: 13.392767648653987 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1404.435547827175,
            "unit": "iter/sec",
            "range": "stddev: 0.00003569966333793805",
            "extra": "mean: 712.0298268917476 usec\nrounds: 1190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4992798.125993068,
            "unit": "iter/sec",
            "range": "stddev: 9.666198276659462e-9",
            "extra": "mean: 200.28849049472527 nsec\nrounds: 55866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 265.46235760785527,
            "unit": "iter/sec",
            "range": "stddev: 0.0000154944883215564",
            "extra": "mean: 3.7670124269641803 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.880568115464669,
            "unit": "iter/sec",
            "range": "stddev: 0.00022841495925116483",
            "extra": "mean: 204.89417959998946 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 243.02503800255832,
            "unit": "iter/sec",
            "range": "stddev: 0.00019058199098720313",
            "extra": "mean: 4.1148023603620345 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5637762686715169,
            "unit": "iter/sec",
            "range": "stddev: 0.0017505371884791688",
            "extra": "mean: 639.4776669999828 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4172066.583076535,
            "unit": "iter/sec",
            "range": "stddev: 3.047709411318483e-8",
            "extra": "mean: 239.68936738883087 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 581588.9166086937,
            "unit": "iter/sec",
            "range": "stddev: 4.977811244827019e-7",
            "extra": "mean: 1.7194275396978083 usec\nrounds: 21598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 111.5317756496089,
            "unit": "iter/sec",
            "range": "stddev: 0.0006278760124997179",
            "extra": "mean: 8.966054688680163 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 952.77902555061,
            "unit": "iter/sec",
            "range": "stddev: 0.00000942973409813711",
            "extra": "mean: 1.0495613076936714 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3641.843703331022,
            "unit": "iter/sec",
            "range": "stddev: 0.00005520008194557034",
            "extra": "mean: 274.58619354953294 usec\nrounds: 1922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 93.11757055418143,
            "unit": "iter/sec",
            "range": "stddev: 0.016635697246127918",
            "extra": "mean: 10.739111792206174 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 536.0548432120282,
            "unit": "iter/sec",
            "range": "stddev: 0.00009581069554787728",
            "extra": "mean: 1.8654807668708357 msec\nrounds: 489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1526345.7562025427,
            "unit": "iter/sec",
            "range": "stddev: 1.171613556303971e-7",
            "extra": "mean: 655.1595508005607 nsec\nrounds: 156251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.827895938411499,
            "unit": "iter/sec",
            "range": "stddev: 0.004311830763241157",
            "extra": "mean: 1.2078812729999868 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10756.230180528399,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015201521175228107",
            "extra": "mean: 92.96937525660827 usec\nrounds: 5359"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6454.883583457132,
            "unit": "iter/sec",
            "range": "stddev: 0.00003814247450799796",
            "extra": "mean: 154.92146172284893 usec\nrounds: 2926"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 110.0343962072236,
            "unit": "iter/sec",
            "range": "stddev: 0.0007356763148884372",
            "extra": "mean: 9.088067317757059 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3478.2427431686956,
            "unit": "iter/sec",
            "range": "stddev: 0.000056976874110978266",
            "extra": "mean: 287.5014982677705 usec\nrounds: 2021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 166.20040262906167,
            "unit": "iter/sec",
            "range": "stddev: 0.0000333290237732597",
            "extra": "mean: 6.016832595958711 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.577809739012764,
            "unit": "iter/sec",
            "range": "stddev: 0.014491488408440514",
            "extra": "mean: 1.7306734941999822 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 105.3659432607147,
            "unit": "iter/sec",
            "range": "stddev: 0.00005262222222846435",
            "extra": "mean: 9.490732669906693 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4022.0963542707022,
            "unit": "iter/sec",
            "range": "stddev: 0.00003127919989449599",
            "extra": "mean: 248.62656483557137 usec\nrounds: 1365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4428003.85468417,
            "unit": "iter/sec",
            "range": "stddev: 1.1623648824462183e-8",
            "extra": "mean: 225.83539509420117 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.288199538704106,
            "unit": "iter/sec",
            "range": "stddev: 0.00042211137562419876",
            "extra": "mean: 16.586993933332096 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 82.42688193018057,
            "unit": "iter/sec",
            "range": "stddev: 0.0005662356762712512",
            "extra": "mean: 12.1319644342127 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 242.91722013899246,
            "unit": "iter/sec",
            "range": "stddev: 0.00030157545239687354",
            "extra": "mean: 4.116628699389115 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 82.13263986876204,
            "unit": "iter/sec",
            "range": "stddev: 0.0006601929479931683",
            "extra": "mean: 12.175427474361937 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 111.01427728179817,
            "unit": "iter/sec",
            "range": "stddev: 0.0005699365670274703",
            "extra": "mean: 9.007850381817144 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.589418798198057,
            "unit": "iter/sec",
            "range": "stddev: 0.03318097375183452",
            "extra": "mean: 36.24577985185077 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 103.16137045455633,
            "unit": "iter/sec",
            "range": "stddev: 0.0006362916542444558",
            "extra": "mean: 9.69355094444495 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 112.02579752261244,
            "unit": "iter/sec",
            "range": "stddev: 0.0006186311359493762",
            "extra": "mean: 8.926515339452502 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.457529541128533,
            "unit": "iter/sec",
            "range": "stddev: 0.0003597462286510933",
            "extra": "mean: 74.30784357142427 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 86.60191486854208,
            "unit": "iter/sec",
            "range": "stddev: 0.0006807910116971913",
            "extra": "mean: 11.547088785715147 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.41840799327274,
            "unit": "iter/sec",
            "range": "stddev: 0.000148109367488927",
            "extra": "mean: 15.523513094338357 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7333251675033711,
            "unit": "iter/sec",
            "range": "stddev: 0.005048727726090769",
            "extra": "mean: 1.363651548200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.9679176000928,
            "unit": "iter/sec",
            "range": "stddev: 0.0008459403218373029",
            "extra": "mean: 41.72243983332654 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1519193.3826385406,
            "unit": "iter/sec",
            "range": "stddev: 9.028072715426249e-8",
            "extra": "mean: 658.2440467606542 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10516.10386049249,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017050478433585158",
            "extra": "mean: 95.09225215593943 usec\nrounds: 4406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4061.720847034408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000509520831466623",
            "extra": "mean: 246.20106542529427 usec\nrounds: 1880"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 233.15341991040958,
            "unit": "iter/sec",
            "range": "stddev: 0.00018906301200034126",
            "extra": "mean: 4.289021367922697 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 244.7657099745692,
            "unit": "iter/sec",
            "range": "stddev: 0.00019160043447809198",
            "extra": "mean: 4.085539596636712 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.83666208053493,
            "unit": "iter/sec",
            "range": "stddev: 0.0006657314883089361",
            "extra": "mean: 27.904384558827562 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1708000.0454176653,
            "unit": "iter/sec",
            "range": "stddev: 9.437215055119297e-8",
            "extra": "mean: 585.4800781082329 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 266.92152804749344,
            "unit": "iter/sec",
            "range": "stddev: 0.00018185790117448668",
            "extra": "mean: 3.7464194338872123 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 116.31618576479566,
            "unit": "iter/sec",
            "range": "stddev: 0.00016990507020672705",
            "extra": "mean: 8.597255776785115 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56771.15304028043,
            "unit": "iter/sec",
            "range": "stddev: 5.586901146677762e-7",
            "extra": "mean: 17.614579701956682 usec\nrounds: 12691"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 153.85261406744218,
            "unit": "iter/sec",
            "range": "stddev: 0.00006963710262916188",
            "extra": "mean: 6.499727067111413 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 235.94287008471585,
            "unit": "iter/sec",
            "range": "stddev: 0.0002209520419691254",
            "extra": "mean: 4.2383141293523625 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.34802306212772,
            "unit": "iter/sec",
            "range": "stddev: 0.00023946577077478266",
            "extra": "mean: 24.784361763157616 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 378529.6704123386,
            "unit": "iter/sec",
            "range": "stddev: 5.136909467912783e-7",
            "extra": "mean: 2.6418008366706993 usec\nrounds: 1672"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 88.8624329491423,
            "unit": "iter/sec",
            "range": "stddev: 0.0180330818514066",
            "extra": "mean: 11.253349326732023 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.64357837980957,
            "unit": "iter/sec",
            "range": "stddev: 0.0007122278546079091",
            "extra": "mean: 12.100153691364207 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 424.56975644021566,
            "unit": "iter/sec",
            "range": "stddev: 0.000030610930294496846",
            "extra": "mean: 2.3553255615389355 msec\nrounds: 390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9406.391197923058,
            "unit": "iter/sec",
            "range": "stddev: 0.000012914405510606556",
            "extra": "mean: 106.31069652097834 usec\nrounds: 3506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.05720140921477,
            "unit": "iter/sec",
            "range": "stddev: 0.00005842478290649724",
            "extra": "mean: 11.356254616278944 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.20393506259421,
            "unit": "iter/sec",
            "range": "stddev: 0.00005592886571797742",
            "extra": "mean: 14.661910622638551 msec\nrounds: 53"
          }
        ]
      }
    ]
  }
}