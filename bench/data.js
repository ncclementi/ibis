window.BENCHMARK_DATA = {
  "lastUpdate": 1681923569219,
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
          "id": "c0d14873850e5351e5d5294f96e9965e28c4d98d",
          "message": "chore(windows): move warning to error on locale-specific format string usage",
          "timestamp": "2023-04-19T12:53:53-04:00",
          "tree_id": "e41dd16d553f8e270add239ba259042a9b29653f",
          "url": "https://github.com/ibis-project/ibis/commit/c0d14873850e5351e5d5294f96e9965e28c4d98d"
        },
        "date": 1681923483259,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2398.3634175417674,
            "unit": "iter/sec",
            "range": "stddev: 0.00007692276510487894",
            "extra": "mean: 416.95098944803067 usec\nrounds: 379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1197.6350566661552,
            "unit": "iter/sec",
            "range": "stddev: 0.000021423082593118693",
            "extra": "mean: 834.9788981492326 usec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.60581524305854,
            "unit": "iter/sec",
            "range": "stddev: 0.0006997954237379153",
            "extra": "mean: 9.939783277776247 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.566318107322475,
            "unit": "iter/sec",
            "range": "stddev: 0.001912088984290217",
            "extra": "mean: 389.66330680000283 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1728.8970347684644,
            "unit": "iter/sec",
            "range": "stddev: 0.00022018603600455097",
            "extra": "mean: 578.4034444445218 usec\nrounds: 1278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.249009928617046,
            "unit": "iter/sec",
            "range": "stddev: 0.00029808641269131204",
            "extra": "mean: 88.89671236363999 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.05776911384137,
            "unit": "iter/sec",
            "range": "stddev: 0.0006863721429100112",
            "extra": "mean: 9.895330252872512 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.54783220400356,
            "unit": "iter/sec",
            "range": "stddev: 0.0006865090149684069",
            "extra": "mean: 11.422327370366004 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 114.08666146652588,
            "unit": "iter/sec",
            "range": "stddev: 0.00019764904064883246",
            "extra": "mean: 8.765266571442355 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.72488992341625,
            "unit": "iter/sec",
            "range": "stddev: 0.0009305405574142182",
            "extra": "mean: 23.405560594596864 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13584.399038177873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019041510545831837",
            "extra": "mean: 73.61385639435206 usec\nrounds: 6490"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.79477628663412,
            "unit": "iter/sec",
            "range": "stddev: 0.000043391865396373985",
            "extra": "mean: 9.363753872343237 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.86500826111065,
            "unit": "iter/sec",
            "range": "stddev: 0.0001805452485728783",
            "extra": "mean: 18.22655334782513 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7060480245351346,
            "unit": "iter/sec",
            "range": "stddev: 0.04614708417173434",
            "extra": "mean: 1.4163342510000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 310.5663927248744,
            "unit": "iter/sec",
            "range": "stddev: 0.00004359072278813813",
            "extra": "mean: 3.219923415492942 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9777.729127795039,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017767031754049392",
            "extra": "mean: 102.27323614000632 usec\nrounds: 5357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.23935792995064,
            "unit": "iter/sec",
            "range": "stddev: 0.000021391722705309506",
            "extra": "mean: 5.0699820284101165 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 168.25198953893022,
            "unit": "iter/sec",
            "range": "stddev: 0.004151038998622212",
            "extra": "mean: 5.9434661232853925 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 675.9956339522925,
            "unit": "iter/sec",
            "range": "stddev: 0.00004000147133065819",
            "extra": "mean: 1.4792994951067593 msec\nrounds: 511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1736790.321241621,
            "unit": "iter/sec",
            "range": "stddev: 9.704822146490382e-8",
            "extra": "mean: 575.7747425061109 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7988978875134978,
            "unit": "iter/sec",
            "range": "stddev: 0.004418069613104201",
            "extra": "mean: 1.2517244263999943 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 256.4587223766898,
            "unit": "iter/sec",
            "range": "stddev: 0.00019468638165927863",
            "extra": "mean: 3.899262971961574 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.3288913422944,
            "unit": "iter/sec",
            "range": "stddev: 0.000252812299014388",
            "extra": "mean: 3.6320198549624054 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.669691935410185,
            "unit": "iter/sec",
            "range": "stddev: 0.00010993805794006232",
            "extra": "mean: 63.81746393751442 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1805872488871115,
            "unit": "iter/sec",
            "range": "stddev: 0.00625832232895353",
            "extra": "mean: 5.537489530199991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2299.7248521925426,
            "unit": "iter/sec",
            "range": "stddev: 0.00008249874165060968",
            "extra": "mean: 434.83462773670794 usec\nrounds: 1370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.03346857020465,
            "unit": "iter/sec",
            "range": "stddev: 0.0005647116420118838",
            "extra": "mean: 10.522608666664249 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141670.7632467264,
            "unit": "iter/sec",
            "range": "stddev: 3.954105380971907e-7",
            "extra": "mean: 7.0586194150620365 usec\nrounds: 39371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7243582.581724664,
            "unit": "iter/sec",
            "range": "stddev: 4.979627246526355e-9",
            "extra": "mean: 138.05323384084986 nsec\nrounds: 71429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2309.2777530825515,
            "unit": "iter/sec",
            "range": "stddev: 0.00007927313655858524",
            "extra": "mean: 433.0358263163211 usec\nrounds: 1330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.40524936847552,
            "unit": "iter/sec",
            "range": "stddev: 0.00007387647375855793",
            "extra": "mean: 6.119754437906828 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.855251980395543,
            "unit": "iter/sec",
            "range": "stddev: 0.00022379876719585834",
            "extra": "mean: 37.23666419998608 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.48628826317339,
            "unit": "iter/sec",
            "range": "stddev: 0.00042370140080101636",
            "extra": "mean: 17.70341140740091 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9338163693733762,
            "unit": "iter/sec",
            "range": "stddev: 0.0037731298822449117",
            "extra": "mean: 1.0708743526000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1122.4208040697863,
            "unit": "iter/sec",
            "range": "stddev: 0.0070184568208182885",
            "extra": "mean: 890.9314549178877 usec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2529462.904696885,
            "unit": "iter/sec",
            "range": "stddev: 1.6749044925040613e-8",
            "extra": "mean: 395.3408441543048 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 498817.2386928404,
            "unit": "iter/sec",
            "range": "stddev: 3.6062415596928325e-7",
            "extra": "mean: 2.004742263159385 usec\nrounds: 2068"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11760897.217728918,
            "unit": "iter/sec",
            "range": "stddev: 3.4185469467406278e-9",
            "extra": "mean: 85.02752651320954 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4696.819998888031,
            "unit": "iter/sec",
            "range": "stddev: 0.00002202810840432017",
            "extra": "mean: 212.91001150496493 usec\nrounds: 1043"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 247.68503232522286,
            "unit": "iter/sec",
            "range": "stddev: 0.0039233061559112575",
            "extra": "mean: 4.03738566925978 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.26860226036352,
            "unit": "iter/sec",
            "range": "stddev: 0.0004617570406293015",
            "extra": "mean: 22.09036617142439 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 83.8181636893415,
            "unit": "iter/sec",
            "range": "stddev: 0.015606092810384905",
            "extra": "mean: 11.93058826373647 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7565.9812676009005,
            "unit": "iter/sec",
            "range": "stddev: 0.00001557293225976705",
            "extra": "mean: 132.17056249956727 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.585381744056,
            "unit": "iter/sec",
            "range": "stddev: 0.0000483680943060727",
            "extra": "mean: 6.305751444442207 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2415.9060822125048,
            "unit": "iter/sec",
            "range": "stddev: 0.00007889865148267666",
            "extra": "mean: 413.9233753177162 usec\nrounds: 1183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.28919128388577,
            "unit": "iter/sec",
            "range": "stddev: 0.000653250422146135",
            "extra": "mean: 10.071589737706885 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.07072700073481,
            "unit": "iter/sec",
            "range": "stddev: 0.016795249225275376",
            "extra": "mean: 23.217625279065743 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.6221907091713,
            "unit": "iter/sec",
            "range": "stddev: 0.0002589537722158236",
            "extra": "mean: 3.6020175384595605 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.325223267547,
            "unit": "iter/sec",
            "range": "stddev: 0.00004997006407570579",
            "extra": "mean: 1.325688137098547 msec\nrounds: 620"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.18798346382383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000611784384843103",
            "extra": "mean: 8.533298128717284 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70145.83028376184,
            "unit": "iter/sec",
            "range": "stddev: 4.833319417594813e-7",
            "extra": "mean: 14.25601487579072 usec\nrounds: 10823"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1603147.0805632435,
            "unit": "iter/sec",
            "range": "stddev: 9.235687759273612e-8",
            "extra": "mean: 623.7730849053875 nsec\nrounds: 149232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.02175952086805,
            "unit": "iter/sec",
            "range": "stddev: 0.0002783749705469297",
            "extra": "mean: 3.7034052432456543 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5749868.867668543,
            "unit": "iter/sec",
            "range": "stddev: 9.280106839680792e-9",
            "extra": "mean: 173.91700976430067 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 101.40879566037411,
            "unit": "iter/sec",
            "range": "stddev: 0.0003147398571632008",
            "extra": "mean: 9.861077567167618 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.89116511300317,
            "unit": "iter/sec",
            "range": "stddev: 0.0006295149406866699",
            "extra": "mean: 10.428489411110478 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 372.5335965479992,
            "unit": "iter/sec",
            "range": "stddev: 0.000045249085067856534",
            "extra": "mean: 2.684321653848889 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.7057743222699,
            "unit": "iter/sec",
            "range": "stddev: 0.0003536711411979186",
            "extra": "mean: 3.7354442672431065 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2561568.004726332,
            "unit": "iter/sec",
            "range": "stddev: 1.7242934918043974e-8",
            "extra": "mean: 390.38588792273396 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.0156026932038,
            "unit": "iter/sec",
            "range": "stddev: 0.00008491706304034333",
            "extra": "mean: 13.510664827590753 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.27474223245883,
            "unit": "iter/sec",
            "range": "stddev: 0.0001169730651598584",
            "extra": "mean: 6.358300041095963 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.949333459847985,
            "unit": "iter/sec",
            "range": "stddev: 0.02155850451876035",
            "extra": "mean: 26.35092395122151 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.2025403602479,
            "unit": "iter/sec",
            "range": "stddev: 0.00029948517683070367",
            "extra": "mean: 3.581629302905789 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 83.83392209148832,
            "unit": "iter/sec",
            "range": "stddev: 0.016833954752964977",
            "extra": "mean: 11.928345651163687 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6189215.39818367,
            "unit": "iter/sec",
            "range": "stddev: 8.505686226568793e-9",
            "extra": "mean: 161.57136820485366 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6740148413033111,
            "unit": "iter/sec",
            "range": "stddev: 0.0018643662909142613",
            "extra": "mean: 597.3662690000083 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.9577344535396,
            "unit": "iter/sec",
            "range": "stddev: 0.0002523797484667677",
            "extra": "mean: 3.650198093493103 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.52376217914926,
            "unit": "iter/sec",
            "range": "stddev: 0.0007973838074408739",
            "extra": "mean: 10.579350387098613 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2325.3900212536087,
            "unit": "iter/sec",
            "range": "stddev: 0.00009874314842335814",
            "extra": "mean: 430.03538798231534 usec\nrounds: 1348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2260.386943970624,
            "unit": "iter/sec",
            "range": "stddev: 0.00008753912287701235",
            "extra": "mean: 442.4021306030849 usec\nrounds: 1807"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.43387973105699,
            "unit": "iter/sec",
            "range": "stddev: 0.0007962312869071742",
            "extra": "mean: 10.056934343754284 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.44328766146705,
            "unit": "iter/sec",
            "range": "stddev: 0.000039330194391438884",
            "extra": "mean: 7.49382016528928 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.32983778434861,
            "unit": "iter/sec",
            "range": "stddev: 0.0008055714996420628",
            "extra": "mean: 10.489895118275143 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.49350469716018,
            "unit": "iter/sec",
            "range": "stddev: 0.0009056455812591243",
            "extra": "mean: 10.05090737374078 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.47908401928301,
            "unit": "iter/sec",
            "range": "stddev: 0.00006652285403669866",
            "extra": "mean: 9.051487065420096 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.781037348517,
            "unit": "iter/sec",
            "range": "stddev: 0.0002591469174947697",
            "extra": "mean: 3.587044547616967 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2314.265495179349,
            "unit": "iter/sec",
            "range": "stddev: 0.00008685884712978035",
            "extra": "mean: 432.10254056114803 usec\nrounds: 1319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.711261362065462,
            "unit": "iter/sec",
            "range": "stddev: 0.00015904823781299926",
            "extra": "mean: 175.09266983333305 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.49338717599579,
            "unit": "iter/sec",
            "range": "stddev: 0.0155565897166153",
            "extra": "mean: 12.12218378021679 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.29835169325074,
            "unit": "iter/sec",
            "range": "stddev: 0.0008218492935983034",
            "extra": "mean: 10.49336092631309 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.6923524706621,
            "unit": "iter/sec",
            "range": "stddev: 0.00008003258479071064",
            "extra": "mean: 1.8632648581566371 msec\nrounds: 423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 94.47609322803469,
            "unit": "iter/sec",
            "range": "stddev: 0.0007433914682853448",
            "extra": "mean: 10.584688314601705 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9340569904497087,
            "unit": "iter/sec",
            "range": "stddev: 0.0017075446984762225",
            "extra": "mean: 1.070598486200015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.171316377530516,
            "unit": "iter/sec",
            "range": "stddev: 0.0006051882446170052",
            "extra": "mean: 15.829969317462115 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.38007179080998,
            "unit": "iter/sec",
            "range": "stddev: 0.00018492841194970685",
            "extra": "mean: 10.164660197914325 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 733592.0820615294,
            "unit": "iter/sec",
            "range": "stddev: 1.4167648786452796e-7",
            "extra": "mean: 1.3631553890137624 usec\nrounds: 22936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.12608201186305,
            "unit": "iter/sec",
            "range": "stddev: 0.015410986761557447",
            "extra": "mean: 11.610884608245149 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11508.682166354532,
            "unit": "iter/sec",
            "range": "stddev: 0.000017062105796946084",
            "extra": "mean: 86.89092161424753 usec\nrounds: 5575"
          }
        ]
      }
    ]
  }
}