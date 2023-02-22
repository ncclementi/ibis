window.BENCHMARK_DATA = {
  "lastUpdate": 1677028395716,
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
          "id": "da105eb76ab01ad53381da272a908351d7cf47eb",
          "message": "chore(dev-deps): add pip to conda-lock spec",
          "timestamp": "2023-02-21T20:06:19-05:00",
          "tree_id": "3e3dfe1df85124d998f5179e51991ce2309108a5",
          "url": "https://github.com/ibis-project/ibis/commit/da105eb76ab01ad53381da272a908351d7cf47eb"
        },
        "date": 1677028308897,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 209.2136965580295,
            "unit": "iter/sec",
            "range": "stddev: 0.00026999530387053505",
            "extra": "mean: 4.779801783783455 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 51.98071504778342,
            "unit": "iter/sec",
            "range": "stddev: 0.0014952296418787449",
            "extra": "mean: 19.23790388571506 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7636.198540128883,
            "unit": "iter/sec",
            "range": "stddev: 0.000032701343622251974",
            "extra": "mean: 130.95521217067807 usec\nrounds: 4289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 26.853919104255315,
            "unit": "iter/sec",
            "range": "stddev: 0.0020545337341135706",
            "extra": "mean: 37.238512416667646 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 61.777120351818866,
            "unit": "iter/sec",
            "range": "stddev: 0.002247359176411732",
            "extra": "mean: 16.187222620689173 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.481793371984729,
            "unit": "iter/sec",
            "range": "stddev: 0.046778481391995544",
            "extra": "mean: 674.8579247999942 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 46278.78647337496,
            "unit": "iter/sec",
            "range": "stddev: 0.000017150127954403353",
            "extra": "mean: 21.608172473911313 usec\nrounds: 10906"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 6484.146690499475,
            "unit": "iter/sec",
            "range": "stddev: 0.00005248141487365617",
            "extra": "mean: 154.2222975098933 usec\nrounds: 3052"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 163.60697820051314,
            "unit": "iter/sec",
            "range": "stddev: 0.0009988616471160792",
            "extra": "mean: 6.112208727273368 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 50.61822416226322,
            "unit": "iter/sec",
            "range": "stddev: 0.0011522137330551821",
            "extra": "mean: 19.755730599998362 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 35.15070851998263,
            "unit": "iter/sec",
            "range": "stddev: 0.0017076006172246864",
            "extra": "mean: 28.4489286874976 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 59.531811369106734,
            "unit": "iter/sec",
            "range": "stddev: 0.0016011346262154817",
            "extra": "mean: 16.797741862746964 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 47.93354306856731,
            "unit": "iter/sec",
            "range": "stddev: 0.002525664172887646",
            "extra": "mean: 20.86221747826014 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.47337330913682596,
            "unit": "iter/sec",
            "range": "stddev: 0.03603448453041471",
            "extra": "mean: 2.1124976433999905 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 107.30541195137761,
            "unit": "iter/sec",
            "range": "stddev: 0.0008163649188785468",
            "extra": "mean: 9.319194454545514 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 737.445438348631,
            "unit": "iter/sec",
            "range": "stddev: 0.00011470365911214182",
            "extra": "mean: 1.3560325252527294 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 104.17308548798101,
            "unit": "iter/sec",
            "range": "stddev: 0.011490084728942317",
            "extra": "mean: 9.599408477877668 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08211051238905183,
            "unit": "iter/sec",
            "range": "stddev: 0.08432039090504044",
            "extra": "mean: 12.178708558800015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1271579.889470586,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025954032792672066",
            "extra": "mean: 786.4232584052139 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 70.73055319311194,
            "unit": "iter/sec",
            "range": "stddev: 0.0012644186831117239",
            "extra": "mean: 14.138161725806839 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 340.5248695399179,
            "unit": "iter/sec",
            "range": "stddev: 0.0005919828261635941",
            "extra": "mean: 2.9366430750009442 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 91.1198495324298,
            "unit": "iter/sec",
            "range": "stddev: 0.0009043575372977964",
            "extra": "mean: 10.974557191779574 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8129.657808434051,
            "unit": "iter/sec",
            "range": "stddev: 0.000057713810553508706",
            "extra": "mean: 123.00640734995731 usec\nrounds: 1279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.619578490509897,
            "unit": "iter/sec",
            "range": "stddev: 0.009588142881655836",
            "extra": "mean: 151.0670205714218 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 194.83490460514275,
            "unit": "iter/sec",
            "range": "stddev: 0.0005467980992219515",
            "extra": "mean: 5.13255056647383 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.20126380886897,
            "unit": "iter/sec",
            "range": "stddev: 0.002545128283865202",
            "extra": "mean: 19.156624323530277 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 475.5838971076099,
            "unit": "iter/sec",
            "range": "stddev: 0.0003931517664162763",
            "extra": "mean: 2.1026784255769932 msec\nrounds: 477"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 44.8245716109316,
            "unit": "iter/sec",
            "range": "stddev: 0.0015657295267414767",
            "extra": "mean: 22.30919257142716 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2496.7895447808346,
            "unit": "iter/sec",
            "range": "stddev: 0.00013411597381688997",
            "extra": "mean: 400.51433333271945 usec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 55.81578502495167,
            "unit": "iter/sec",
            "range": "stddev: 0.0017034045337656597",
            "extra": "mean: 17.91607874999812 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2350.49468677833,
            "unit": "iter/sec",
            "range": "stddev: 0.00023251400667889305",
            "extra": "mean: 425.4423571450973 usec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1360631.4506567654,
            "unit": "iter/sec",
            "range": "stddev: 0.000004471485099097225",
            "extra": "mean: 734.9528775902603 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 206.93951053152603,
            "unit": "iter/sec",
            "range": "stddev: 0.0005758088311174305",
            "extra": "mean: 4.832329976192033 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2971.822080099924,
            "unit": "iter/sec",
            "range": "stddev: 0.00017402618980752577",
            "extra": "mean: 336.4938993812093 usec\nrounds: 1292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.718534764436928,
            "unit": "iter/sec",
            "range": "stddev: 0.0026115120259876815",
            "extra": "mean: 36.07694304545299 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 456.8346138179528,
            "unit": "iter/sec",
            "range": "stddev: 0.0002977213701533081",
            "extra": "mean: 2.1889759877050317 msec\nrounds: 488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0090305314447945,
            "unit": "iter/sec",
            "range": "stddev: 0.05222589690546907",
            "extra": "mean: 991.0502892000068 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 70.9441884131104,
            "unit": "iter/sec",
            "range": "stddev: 0.0010839539458069557",
            "extra": "mean: 14.095587283019807 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 69.03682962574182,
            "unit": "iter/sec",
            "range": "stddev: 0.0009708409174374158",
            "extra": "mean: 14.48502205882191 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.41454041323931,
            "unit": "iter/sec",
            "range": "stddev: 0.002209851790121569",
            "extra": "mean: 37.85793674073493 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.547855367487234,
            "unit": "iter/sec",
            "range": "stddev: 0.004055935251020366",
            "extra": "mean: 53.914589055558004 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 175.6580732487104,
            "unit": "iter/sec",
            "range": "stddev: 0.0006995552067685935",
            "extra": "mean: 5.6928781097588494 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2989.376742651601,
            "unit": "iter/sec",
            "range": "stddev: 0.00012331080863296873",
            "extra": "mean: 334.5178898772699 usec\nrounds: 2361"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 50.74559439629401,
            "unit": "iter/sec",
            "range": "stddev: 0.019089648642479",
            "extra": "mean: 19.706144186440564 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.4819836341849753,
            "unit": "iter/sec",
            "range": "stddev: 0.07491094275654872",
            "extra": "mean: 2.0747592429999826 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 96.82666120573795,
            "unit": "iter/sec",
            "range": "stddev: 0.0008182052586684454",
            "extra": "mean: 10.327733989249026 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1166.6878397421103,
            "unit": "iter/sec",
            "range": "stddev: 0.00019139152793195606",
            "extra": "mean: 857.1273016962655 usec\nrounds: 1180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4436914693766238,
            "unit": "iter/sec",
            "range": "stddev: 0.11359570799195286",
            "extra": "mean: 2.2538184053999886 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 68.98671033112248,
            "unit": "iter/sec",
            "range": "stddev: 0.0014142453475538678",
            "extra": "mean: 14.495545521741782 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 169.06733456217447,
            "unit": "iter/sec",
            "range": "stddev: 0.0007656673370201345",
            "extra": "mean: 5.914803132075465 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 187.61886482083565,
            "unit": "iter/sec",
            "range": "stddev: 0.0007241402710219203",
            "extra": "mean: 5.329954431580949 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3007.198541382186,
            "unit": "iter/sec",
            "range": "stddev: 0.00010475168919926416",
            "extra": "mean: 332.5354100299524 usec\nrounds: 3051"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 379597.2397278684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013853336309940435",
            "extra": "mean: 2.6343711053244103 usec\nrounds: 1059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 26.30324702265302,
            "unit": "iter/sec",
            "range": "stddev: 0.025949546087277117",
            "extra": "mean: 38.01811993548837 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 486292.2032547066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023460190347770196",
            "extra": "mean: 2.056376790142011 usec\nrounds: 19268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1377430.52171176,
            "unit": "iter/sec",
            "range": "stddev: 0.000001458424146340799",
            "extra": "mean: 725.9894304921313 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 104520.91129323162,
            "unit": "iter/sec",
            "range": "stddev: 0.000007059629963020322",
            "extra": "mean: 9.567463463789721 usec\nrounds: 18940"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 175.03658121793487,
            "unit": "iter/sec",
            "range": "stddev: 0.0008488580062476657",
            "extra": "mean: 5.7130914751752275 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1275214.8981417925,
            "unit": "iter/sec",
            "range": "stddev: 0.000001269674752580553",
            "extra": "mean: 784.181553601022 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 229.50398933945883,
            "unit": "iter/sec",
            "range": "stddev: 0.0004563480909971539",
            "extra": "mean: 4.35722273446368 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5128228899518464,
            "unit": "iter/sec",
            "range": "stddev: 0.05218204031634403",
            "extra": "mean: 1.9499909610000032 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2914.1850217698457,
            "unit": "iter/sec",
            "range": "stddev: 0.00016174865613994562",
            "extra": "mean: 343.14911116819854 usec\nrounds: 1943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 54.7468494341724,
            "unit": "iter/sec",
            "range": "stddev: 0.0015288706655101386",
            "extra": "mean: 18.265891285714986 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 49.30232931155835,
            "unit": "iter/sec",
            "range": "stddev: 0.0022891773669434746",
            "extra": "mean: 20.283017333332396 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2909.6804405996004,
            "unit": "iter/sec",
            "range": "stddev: 0.0001107913226351453",
            "extra": "mean: 343.68035267609287 usec\nrounds: 1551"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 71.17312880219173,
            "unit": "iter/sec",
            "range": "stddev: 0.0017445750853501791",
            "extra": "mean: 14.050246445948092 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 62.794774126926356,
            "unit": "iter/sec",
            "range": "stddev: 0.0010934752130679587",
            "extra": "mean: 15.924892061538614 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 64.46590864004304,
            "unit": "iter/sec",
            "range": "stddev: 0.0012020500919371151",
            "extra": "mean: 15.512074848485877 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.800894869725107,
            "unit": "iter/sec",
            "range": "stddev: 0.003213524556967174",
            "extra": "mean: 102.0314995000092 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3703995.999873589,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011217976667016181",
            "extra": "mean: 269.9786932906834 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2723.7349853461615,
            "unit": "iter/sec",
            "range": "stddev: 0.000145310311051025",
            "extra": "mean: 367.14291418954224 usec\nrounds: 1480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.8582142439949174,
            "unit": "iter/sec",
            "range": "stddev: 0.008559610451572722",
            "extra": "mean: 259.1872655999964 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 69.23962382465125,
            "unit": "iter/sec",
            "range": "stddev: 0.001163110860707882",
            "extra": "mean: 14.442597240743124 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 78.92588459978047,
            "unit": "iter/sec",
            "range": "stddev: 0.0010175715360146583",
            "extra": "mean: 12.670114564706209 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4208271.517406605,
            "unit": "iter/sec",
            "range": "stddev: 3.2750767576710187e-7",
            "extra": "mean: 237.6272528670611 nsec\nrounds: 27101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9674647.181882199,
            "unit": "iter/sec",
            "range": "stddev: 1.2160363391095273e-7",
            "extra": "mean: 103.36294246188358 nsec\nrounds: 35715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 63.76131378475297,
            "unit": "iter/sec",
            "range": "stddev: 0.0014557894957245366",
            "extra": "mean: 15.683491142855443 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 178.33984754613695,
            "unit": "iter/sec",
            "range": "stddev: 0.0006662355787401586",
            "extra": "mean: 5.607271811429005 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 54.40837536415684,
            "unit": "iter/sec",
            "range": "stddev: 0.002562648362039487",
            "extra": "mean: 18.379523249995447 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4773.301957735861,
            "unit": "iter/sec",
            "range": "stddev: 0.00009048718240192992",
            "extra": "mean: 209.49858375905762 usec\nrounds: 3128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.59960068430772,
            "unit": "iter/sec",
            "range": "stddev: 0.0009193178289454909",
            "extra": "mean: 11.16076402531488 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3872416.5525921606,
            "unit": "iter/sec",
            "range": "stddev: 4.565242276878377e-7",
            "extra": "mean: 258.2366815188166 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}