window.BENCHMARK_DATA = {
  "lastUpdate": 1683659818532,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "ea1529d14aec891974076c4b093ac6c7c6bc9854",
          "message": "fix(trino): support trino 0.323 special tuple type for struct results",
          "timestamp": "2023-05-09T21:08:32+02:00",
          "tree_id": "a33b8f00c90d210a9ad6695eaadeb82ceb12f355",
          "url": "https://github.com/ibis-project/ibis/commit/ea1529d14aec891974076c4b093ac6c7c6bc9854"
        },
        "date": 1683659650669,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2251.8580169381185,
            "unit": "iter/sec",
            "range": "stddev: 0.00007993482361991078",
            "extra": "mean: 444.07773157905996 usec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.34107787786818,
            "unit": "iter/sec",
            "range": "stddev: 0.016647539333419583",
            "extra": "mean: 26.78015892499701 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1863648.6430569147,
            "unit": "iter/sec",
            "range": "stddev: 1.4748447631713991e-7",
            "extra": "mean: 536.5818303388536 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2554449.6962032267,
            "unit": "iter/sec",
            "range": "stddev: 1.7158461088298296e-8",
            "extra": "mean: 391.47374931131003 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 191.42713187478566,
            "unit": "iter/sec",
            "range": "stddev: 0.0003622163952207262",
            "extra": "mean: 5.223919881190665 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9335957833650714,
            "unit": "iter/sec",
            "range": "stddev: 0.0049610996628089675",
            "extra": "mean: 1.0711273741999776 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6182520.962495703,
            "unit": "iter/sec",
            "range": "stddev: 9.358127287206262e-9",
            "extra": "mean: 161.74631773433478 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.181459485664572,
            "unit": "iter/sec",
            "range": "stddev: 0.0002543795493105343",
            "extra": "mean: 39.71175699999776 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.20348332851805,
            "unit": "iter/sec",
            "range": "stddev: 0.0006862659598312181",
            "extra": "mean: 9.6895954259295 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4661083.4074154785,
            "unit": "iter/sec",
            "range": "stddev: 1.36058713471495e-8",
            "extra": "mean: 214.54239553164018 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 77.22887650516701,
            "unit": "iter/sec",
            "range": "stddev: 0.011632506349846462",
            "extra": "mean: 12.948524506025862 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.7256346921297,
            "unit": "iter/sec",
            "range": "stddev: 0.00010781991324460534",
            "extra": "mean: 6.421550324562842 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 266.3500468630461,
            "unit": "iter/sec",
            "range": "stddev: 0.00033818222328031613",
            "extra": "mean: 3.7544577587935914 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 174.30239434336806,
            "unit": "iter/sec",
            "range": "stddev: 0.00007209723215025811",
            "extra": "mean: 5.737155842105324 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 529.0962988164501,
            "unit": "iter/sec",
            "range": "stddev: 0.00006065871714853116",
            "extra": "mean: 1.8900151111185755 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.70457282482192,
            "unit": "iter/sec",
            "range": "stddev: 0.0008622254876257435",
            "extra": "mean: 10.5591522159097 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9295395176864152,
            "unit": "iter/sec",
            "range": "stddev: 0.004713453513415238",
            "extra": "mean: 1.0758014919999936 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.475872480915218,
            "unit": "iter/sec",
            "range": "stddev: 0.0001249130821017917",
            "extra": "mean: 33.9260525925898 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7899.015315502934,
            "unit": "iter/sec",
            "range": "stddev: 0.000015137647571143509",
            "extra": "mean: 126.59805811964416 usec\nrounds: 3424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139427.88372284063,
            "unit": "iter/sec",
            "range": "stddev: 4.343320909896845e-7",
            "extra": "mean: 7.172166522930472 usec\nrounds: 33671"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12653230.350333508,
            "unit": "iter/sec",
            "range": "stddev: 3.547888694222998e-9",
            "extra": "mean: 79.03120170202456 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 100.90006734638834,
            "unit": "iter/sec",
            "range": "stddev: 0.0007452595043429264",
            "extra": "mean: 9.910796159996758 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.49622713799918,
            "unit": "iter/sec",
            "range": "stddev: 0.00011823117463826846",
            "extra": "mean: 117.699301555572 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 279.72412029493387,
            "unit": "iter/sec",
            "range": "stddev: 0.0002438390076872773",
            "extra": "mean: 3.5749509157294903 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2262.826006373915,
            "unit": "iter/sec",
            "range": "stddev: 0.00008590373612797168",
            "extra": "mean: 441.92527272676114 usec\nrounds: 429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 99.79146027615346,
            "unit": "iter/sec",
            "range": "stddev: 0.0006879177068497863",
            "extra": "mean: 10.020897552082056 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5874826.478254959,
            "unit": "iter/sec",
            "range": "stddev: 9.505208087008357e-9",
            "extra": "mean: 170.2177934452097 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5384776940366365,
            "unit": "iter/sec",
            "range": "stddev: 0.0020384989976744454",
            "extra": "mean: 393.93688679998604 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.93882757170269,
            "unit": "iter/sec",
            "range": "stddev: 0.012503977011772357",
            "extra": "mean: 10.996403040401288 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2191.3673747658654,
            "unit": "iter/sec",
            "range": "stddev: 0.00009054574900786656",
            "extra": "mean: 456.33608107670403 usec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7270279.6480772635,
            "unit": "iter/sec",
            "range": "stddev: 2.026258641050865e-8",
            "extra": "mean: 137.54629098268714 nsec\nrounds: 59172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1205.24526734182,
            "unit": "iter/sec",
            "range": "stddev: 0.000016463361525635175",
            "extra": "mean: 829.7066390524061 usec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.3322296496313,
            "unit": "iter/sec",
            "range": "stddev: 0.0006273483774468787",
            "extra": "mean: 10.067225949998715 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 230.90917998319128,
            "unit": "iter/sec",
            "range": "stddev: 0.0003236909793454018",
            "extra": "mean: 4.330706990829873 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.46704579532734,
            "unit": "iter/sec",
            "range": "stddev: 0.00017382458357566432",
            "extra": "mean: 18.70310927272876 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 435.8347488778774,
            "unit": "iter/sec",
            "range": "stddev: 0.00003919219376574852",
            "extra": "mean: 2.294447614777508 msec\nrounds: 379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17715066627727036,
            "unit": "iter/sec",
            "range": "stddev: 0.059332208374633634",
            "extra": "mean: 5.644912440999986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.4412895570598,
            "unit": "iter/sec",
            "range": "stddev: 0.00002283655843510767",
            "extra": "mean: 1.4504498282115692 msec\nrounds: 553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1093344.899432101,
            "unit": "iter/sec",
            "range": "stddev: 1.3129649712896814e-7",
            "extra": "mean: 914.6244707588743 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 758.3045892781987,
            "unit": "iter/sec",
            "range": "stddev: 0.00005251138629133666",
            "extra": "mean: 1.3187313042004165 msec\nrounds: 595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 244.15690228164428,
            "unit": "iter/sec",
            "range": "stddev: 0.00424198804734425",
            "extra": "mean: 4.095726930735966 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.60490661320974,
            "unit": "iter/sec",
            "range": "stddev: 0.00019075161555762274",
            "extra": "mean: 10.351441091950296 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.646502027011,
            "unit": "iter/sec",
            "range": "stddev: 0.015580707529166722",
            "extra": "mean: 12.099725644446204 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 273.1879965406212,
            "unit": "iter/sec",
            "range": "stddev: 0.0003234822820520315",
            "extra": "mean: 3.6604829372556518 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3360124419333175,
            "unit": "iter/sec",
            "range": "stddev: 0.0010634162946122111",
            "extra": "mean: 748.4960233999914 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.75259248962565,
            "unit": "iter/sec",
            "range": "stddev: 0.0005936456991442391",
            "extra": "mean: 16.193652115382825 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 109.55920977392157,
            "unit": "iter/sec",
            "range": "stddev: 0.0001922932391803432",
            "extra": "mean: 9.1274846000033 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1836634.3669548645,
            "unit": "iter/sec",
            "range": "stddev: 1.1322080463792461e-7",
            "extra": "mean: 544.4741849505939 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11754.028724502565,
            "unit": "iter/sec",
            "range": "stddev: 0.000033620208843482614",
            "extra": "mean: 85.0772125403599 usec\nrounds: 4051"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.39148120143807,
            "unit": "iter/sec",
            "range": "stddev: 0.00006922825688236775",
            "extra": "mean: 9.579325712127401 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.36287413167406,
            "unit": "iter/sec",
            "range": "stddev: 0.0002670529586037246",
            "extra": "mean: 3.592433089791169 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2241.6078654087787,
            "unit": "iter/sec",
            "range": "stddev: 0.00008504500943411408",
            "extra": "mean: 446.1083561631956 usec\nrounds: 1606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.8060222315585,
            "unit": "iter/sec",
            "range": "stddev: 0.00006511002758950312",
            "extra": "mean: 6.104781658066185 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.51441616664609,
            "unit": "iter/sec",
            "range": "stddev: 0.00013395158872796302",
            "extra": "mean: 20.61242985105745 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13347.376330242696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026866608123606435",
            "extra": "mean: 74.92109125103367 usec\nrounds: 6378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1563028.4391460433,
            "unit": "iter/sec",
            "range": "stddev: 1.211225724847827e-7",
            "extra": "mean: 639.7836245042014 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 266.42800962961917,
            "unit": "iter/sec",
            "range": "stddev: 0.0002977937064836014",
            "extra": "mean: 3.7533591208753623 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.43515377340914,
            "unit": "iter/sec",
            "range": "stddev: 0.0002932439024233339",
            "extra": "mean: 18.370481769236537 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.29328847859135,
            "unit": "iter/sec",
            "range": "stddev: 0.0008987087108278334",
            "extra": "mean: 10.173634593757678 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 410.8429566930379,
            "unit": "iter/sec",
            "range": "stddev: 0.000028063783145660784",
            "extra": "mean: 2.4340200646232617 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 270.1480773269501,
            "unit": "iter/sec",
            "range": "stddev: 0.0002871255394502984",
            "extra": "mean: 3.701673578041932 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2205.1604909059524,
            "unit": "iter/sec",
            "range": "stddev: 0.00009165438263155266",
            "extra": "mean: 453.48173256503753 usec\nrounds: 1735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2199.464503189677,
            "unit": "iter/sec",
            "range": "stddev: 0.00009217942620872574",
            "extra": "mean: 454.6561213194365 usec\nrounds: 1698"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1768.3347117979608,
            "unit": "iter/sec",
            "range": "stddev: 0.00000927538142524948",
            "extra": "mean: 565.503800455993 usec\nrounds: 1318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 85.38924000217396,
            "unit": "iter/sec",
            "range": "stddev: 0.016359284750125342",
            "extra": "mean: 11.711077414139538 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2148.0225422022845,
            "unit": "iter/sec",
            "range": "stddev: 0.00010425031586791136",
            "extra": "mean: 465.54446257102063 usec\nrounds: 1189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.53194200357184,
            "unit": "iter/sec",
            "range": "stddev: 0.0008568000317220497",
            "extra": "mean: 10.04702590816638 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.69890192681734,
            "unit": "iter/sec",
            "range": "stddev: 0.0008676650705436652",
            "extra": "mean: 10.131824979587654 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.250853411548874,
            "unit": "iter/sec",
            "range": "stddev: 0.0008259573308725245",
            "extra": "mean: 27.585557466666916 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.089646449633616,
            "unit": "iter/sec",
            "range": "stddev: 0.00025194641876282315",
            "extra": "mean: 52.384416999990734 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6775732430264503,
            "unit": "iter/sec",
            "range": "stddev: 0.0012906610381912304",
            "extra": "mean: 596.0991594000006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.5007571277375,
            "unit": "iter/sec",
            "range": "stddev: 0.00028522163451392605",
            "extra": "mean: 3.6562970081028103 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4691.7279805843455,
            "unit": "iter/sec",
            "range": "stddev: 0.000026867207369340753",
            "extra": "mean: 213.14108663977828 usec\nrounds: 2193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 98.17448041989493,
            "unit": "iter/sec",
            "range": "stddev: 0.0009390174576867019",
            "extra": "mean: 10.185946446805449 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.39576584124222,
            "unit": "iter/sec",
            "range": "stddev: 0.00014464092014897917",
            "extra": "mean: 7.974750927922509 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 171.3155903539575,
            "unit": "iter/sec",
            "range": "stddev: 0.004001116248764417",
            "extra": "mean: 5.837180363642831 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.8659598773342,
            "unit": "iter/sec",
            "range": "stddev: 0.0000362725639700155",
            "extra": "mean: 5.079598324784502 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9868.003275696126,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017892937129521836",
            "extra": "mean: 101.33762343420545 usec\nrounds: 5266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.13858513534082,
            "unit": "iter/sec",
            "range": "stddev: 0.0008888719409109837",
            "extra": "mean: 10.622636813186896 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 94.79689586287557,
            "unit": "iter/sec",
            "range": "stddev: 0.0008549066338412583",
            "extra": "mean: 10.548868619564375 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7979577730105016,
            "unit": "iter/sec",
            "range": "stddev: 0.0010282933983727764",
            "extra": "mean: 1.253199146399993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.1894848374791,
            "unit": "iter/sec",
            "range": "stddev: 0.0007526621292787888",
            "extra": "mean: 10.081713819146144 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2162.0052434308477,
            "unit": "iter/sec",
            "range": "stddev: 0.00009652657272165418",
            "extra": "mean: 462.53356833358913 usec\nrounds: 1661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.71946486111858,
            "unit": "iter/sec",
            "range": "stddev: 0.00009812945806428035",
            "extra": "mean: 9.031835560751256 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.64223230917952,
            "unit": "iter/sec",
            "range": "stddev: 0.0001036443544367665",
            "extra": "mean: 9.377148043007745 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.52086097337158,
            "unit": "iter/sec",
            "range": "stddev: 0.0006533742160963344",
            "extra": "mean: 10.150134602155802 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 100.57745757006256,
            "unit": "iter/sec",
            "range": "stddev: 0.0007750280510053638",
            "extra": "mean: 9.942585785720393 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6408419.394220894,
            "unit": "iter/sec",
            "range": "stddev: 4.925621480479573e-8",
            "extra": "mean: 156.0447184369433 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2182.7027657839,
            "unit": "iter/sec",
            "range": "stddev: 0.00020383027827862294",
            "extra": "mean: 458.14758458000955 usec\nrounds: 402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.87859842321245,
            "unit": "iter/sec",
            "range": "stddev: 0.0006745735724445026",
            "extra": "mean: 24.46267823683899 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 83.40244171432396,
            "unit": "iter/sec",
            "range": "stddev: 0.01829893663327567",
            "extra": "mean: 11.99005663917217 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 243.43575284395277,
            "unit": "iter/sec",
            "range": "stddev: 0.0005082697132887246",
            "extra": "mean: 4.10786003418742 msec\nrounds: 234"
          }
        ]
      }
    ]
  }
}