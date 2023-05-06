window.BENCHMARK_DATA = {
  "lastUpdate": 1683333228185,
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
          "id": "a356646a08caaaeba83e41b35beb341287684fe8",
          "message": "chore(flake/poetry2nix): `fa63354b` -> `e1ccedce`",
          "timestamp": "2023-05-06T00:22:35Z",
          "tree_id": "68df1d43a6cef7c4c8d373e2e24b34eb63eae220",
          "url": "https://github.com/ibis-project/ibis/commit/a356646a08caaaeba83e41b35beb341287684fe8"
        },
        "date": 1683332947882,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 99.67829826016909,
            "unit": "iter/sec",
            "range": "stddev: 0.000593097436700085",
            "extra": "mean: 10.032274000002614 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 263.27727072508463,
            "unit": "iter/sec",
            "range": "stddev: 0.005384670153532032",
            "extra": "mean: 3.7982769923356003 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2182.8552430036634,
            "unit": "iter/sec",
            "range": "stddev: 0.00009327533038160717",
            "extra": "mean: 458.11558196776025 usec\nrounds: 488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7754467827327229,
            "unit": "iter/sec",
            "range": "stddev: 0.002704992852611056",
            "extra": "mean: 1.2895791461999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146727.4325249068,
            "unit": "iter/sec",
            "range": "stddev: 3.155761647917993e-7",
            "extra": "mean: 6.8153581289596366 usec\nrounds: 36364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.03126773588708,
            "unit": "iter/sec",
            "range": "stddev: 0.0003805357152035588",
            "extra": "mean: 17.534241122449174 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.40809586380187,
            "unit": "iter/sec",
            "range": "stddev: 0.0006375216906204346",
            "extra": "mean: 24.149866810808366 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 256.5137606314261,
            "unit": "iter/sec",
            "range": "stddev: 0.005891608274546857",
            "extra": "mean: 3.8984263360313762 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4536.766175982159,
            "unit": "iter/sec",
            "range": "stddev: 0.000024301220100315855",
            "extra": "mean: 220.42132241552233 usec\nrounds: 977"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6028164.182344868,
            "unit": "iter/sec",
            "range": "stddev: 8.189482474838818e-9",
            "extra": "mean: 165.88798343096914 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6132893.815262772,
            "unit": "iter/sec",
            "range": "stddev: 7.838644505660982e-9",
            "extra": "mean: 163.0551628839345 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.96668896435138,
            "unit": "iter/sec",
            "range": "stddev: 0.0007786427201525628",
            "extra": "mean: 9.807124367347168 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.69159408450055,
            "unit": "iter/sec",
            "range": "stddev: 0.00018410202064590036",
            "extra": "mean: 10.030936000003976 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 98.02414501333058,
            "unit": "iter/sec",
            "range": "stddev: 0.011300133668120325",
            "extra": "mean: 10.201568193877204 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 226.540543604475,
            "unit": "iter/sec",
            "range": "stddev: 0.004104082598263627",
            "extra": "mean: 4.414220889952196 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.61465892210916,
            "unit": "iter/sec",
            "range": "stddev: 0.003964028107289078",
            "extra": "mean: 6.226081770562144 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 283.3917368115018,
            "unit": "iter/sec",
            "range": "stddev: 0.00023614178476635093",
            "extra": "mean: 3.528684397262969 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13851.930599405232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014347987345537885",
            "extra": "mean: 72.19210295804814 usec\nrounds: 6964"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.305298006236,
            "unit": "iter/sec",
            "range": "stddev: 0.0003519065045692722",
            "extra": "mean: 3.685884526947258 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8731438451217878,
            "unit": "iter/sec",
            "range": "stddev: 0.006065473512798121",
            "extra": "mean: 1.145286662199993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.99854746578295,
            "unit": "iter/sec",
            "range": "stddev: 0.0007423731332921137",
            "extra": "mean: 9.804061183669955 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.79979636331154,
            "unit": "iter/sec",
            "range": "stddev: 0.00008887983340978847",
            "extra": "mean: 5.241095740457968 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1739.438204540144,
            "unit": "iter/sec",
            "range": "stddev: 0.00002138783498495826",
            "extra": "mean: 574.8982616283115 usec\nrounds: 1376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.58990032826855,
            "unit": "iter/sec",
            "range": "stddev: 0.00046801295588934095",
            "extra": "mean: 39.07791695832922 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1945513.621874669,
            "unit": "iter/sec",
            "range": "stddev: 8.805167463897234e-8",
            "extra": "mean: 514.0030831736939 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1026231.6960862807,
            "unit": "iter/sec",
            "range": "stddev: 1.1526574617983285e-7",
            "extra": "mean: 974.4388170952817 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 103.05142763992016,
            "unit": "iter/sec",
            "range": "stddev: 0.0007474186111686577",
            "extra": "mean: 9.7038927349379 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.0022405405099,
            "unit": "iter/sec",
            "range": "stddev: 0.018350389956571015",
            "extra": "mean: 12.19478874490009 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11177361.493731279,
            "unit": "iter/sec",
            "range": "stddev: 3.621465358254417e-9",
            "extra": "mean: 89.46655259932878 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.70735309177734,
            "unit": "iter/sec",
            "range": "stddev: 0.0006864162165215127",
            "extra": "mean: 9.736401240000987 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.19226583040887,
            "unit": "iter/sec",
            "range": "stddev: 0.0008001673503339543",
            "extra": "mean: 10.395846187499558 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 559.9411167241217,
            "unit": "iter/sec",
            "range": "stddev: 0.0073010871389431395",
            "extra": "mean: 1.7859020710077478 msec\nrounds: 507"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1194.041496999857,
            "unit": "iter/sec",
            "range": "stddev: 0.000021939179927000255",
            "extra": "mean: 837.4918313246193 usec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2238.668449430442,
            "unit": "iter/sec",
            "range": "stddev: 0.00007886499570004795",
            "extra": "mean: 446.69410526351874 usec\nrounds: 342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 274.4035679528677,
            "unit": "iter/sec",
            "range": "stddev: 0.00031296879146315516",
            "extra": "mean: 3.6442674833286524 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7131489.007767157,
            "unit": "iter/sec",
            "range": "stddev: 3.5613143986953134e-9",
            "extra": "mean: 140.22317063252058 nsec\nrounds: 61729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.63881714093905,
            "unit": "iter/sec",
            "range": "stddev: 0.00022897101931789897",
            "extra": "mean: 9.038419117642354 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 162.9792990137307,
            "unit": "iter/sec",
            "range": "stddev: 0.00009553343298547555",
            "extra": "mean: 6.135748564704232 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.11416279786215,
            "unit": "iter/sec",
            "range": "stddev: 0.0008084874189575823",
            "extra": "mean: 10.404293923915267 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.03990307279066,
            "unit": "iter/sec",
            "range": "stddev: 0.0007202328520550675",
            "extra": "mean: 9.800087709674177 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 84.45284731504847,
            "unit": "iter/sec",
            "range": "stddev: 0.000563844033505127",
            "extra": "mean: 11.840927000004323 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 174.74285843158685,
            "unit": "iter/sec",
            "range": "stddev: 0.00015910160067893043",
            "extra": "mean: 5.722694529410525 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1711.7183199601652,
            "unit": "iter/sec",
            "range": "stddev: 0.004361364683383195",
            "extra": "mean: 584.2082709164857 usec\nrounds: 1255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2141.4010883673186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000822385345018417",
            "extra": "mean: 466.98397858872676 usec\nrounds: 1588"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2208.507989504935,
            "unit": "iter/sec",
            "range": "stddev: 0.00008465451340837764",
            "extra": "mean: 452.7943773588805 usec\nrounds: 1802"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.85287000749393,
            "unit": "iter/sec",
            "range": "stddev: 0.0008038553982694684",
            "extra": "mean: 9.91543423529439 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.56439492123218,
            "unit": "iter/sec",
            "range": "stddev: 0.00032305398373801933",
            "extra": "mean: 19.0242844324281 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 166.18924247745034,
            "unit": "iter/sec",
            "range": "stddev: 0.00012376256641274288",
            "extra": "mean: 6.017236645962127 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 127.8220919185418,
            "unit": "iter/sec",
            "range": "stddev: 0.000046756645179876136",
            "extra": "mean: 7.823373761065326 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8684126905760766,
            "unit": "iter/sec",
            "range": "stddev: 0.008305486714030998",
            "extra": "mean: 1.1515262396000139 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2188.537613689136,
            "unit": "iter/sec",
            "range": "stddev: 0.00008312114167988163",
            "extra": "mean: 456.92611986427664 usec\nrounds: 1168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 760.8123972134871,
            "unit": "iter/sec",
            "range": "stddev: 0.000011743484551152458",
            "extra": "mean: 1.314384470682325 msec\nrounds: 631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2163.015511012133,
            "unit": "iter/sec",
            "range": "stddev: 0.00008231320292741018",
            "extra": "mean: 462.317535361581 usec\nrounds: 1315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.88818031669079,
            "unit": "iter/sec",
            "range": "stddev: 0.0008223884684793037",
            "extra": "mean: 9.911963887751492 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.10406953775666,
            "unit": "iter/sec",
            "range": "stddev: 0.0007211234472435454",
            "extra": "mean: 9.336713388350542 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.35921329268868,
            "unit": "iter/sec",
            "range": "stddev: 0.01581916445603659",
            "extra": "mean: 10.945803537036678 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1945358.6163342665,
            "unit": "iter/sec",
            "range": "stddev: 1.1569040800201709e-7",
            "extra": "mean: 514.0440387718068 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.57334066635528,
            "unit": "iter/sec",
            "range": "stddev: 0.0009178306797122385",
            "extra": "mean: 9.942992778945538 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.41646971570825,
            "unit": "iter/sec",
            "range": "stddev: 0.0008569875379939879",
            "extra": "mean: 9.958525756094858 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 105.8153499482255,
            "unit": "iter/sec",
            "range": "stddev: 0.0003474412827095217",
            "extra": "mean: 9.450424730337243 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.683810401023074,
            "unit": "iter/sec",
            "range": "stddev: 0.03150255761784652",
            "extra": "mean: 32.59047644117425 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.607794387657563,
            "unit": "iter/sec",
            "range": "stddev: 0.0001171166865772166",
            "extra": "mean: 116.17377866667766 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1695029.318039779,
            "unit": "iter/sec",
            "range": "stddev: 8.263221271625717e-8",
            "extra": "mean: 589.960297062267 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12416.536986248626,
            "unit": "iter/sec",
            "range": "stddev: 0.000029659595522193362",
            "extra": "mean: 80.53775389285312 usec\nrounds: 3917"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.90639646478604,
            "unit": "iter/sec",
            "range": "stddev: 0.027494446146333975",
            "extra": "mean: 27.095574095242334 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.623290618488241,
            "unit": "iter/sec",
            "range": "stddev: 0.0030973739502050085",
            "extra": "mean: 616.0326367999915 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5182122207181523,
            "unit": "iter/sec",
            "range": "stddev: 0.0014812313375803677",
            "extra": "mean: 397.1071190000089 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 284.9090614385167,
            "unit": "iter/sec",
            "range": "stddev: 0.00024554059058394686",
            "extra": "mean: 3.5098918755021757 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 235.3207530673416,
            "unit": "iter/sec",
            "range": "stddev: 0.00028179061829175994",
            "extra": "mean: 4.249518952176014 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 200.4070266710798,
            "unit": "iter/sec",
            "range": "stddev: 0.000019393058075098484",
            "extra": "mean: 4.989845000002225 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2078.3599111340595,
            "unit": "iter/sec",
            "range": "stddev: 0.00020799132382790447",
            "extra": "mean: 481.14861850580485 usec\nrounds: 1232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.35926879978413,
            "unit": "iter/sec",
            "range": "stddev: 0.016746137606726216",
            "extra": "mean: 11.446982257736927 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.268528234400996,
            "unit": "iter/sec",
            "range": "stddev: 0.0005519245165793762",
            "extra": "mean: 33.0376155806437 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.7433903017813,
            "unit": "iter/sec",
            "range": "stddev: 0.0005010192222795901",
            "extra": "mean: 15.687901055555484 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16749077558865583,
            "unit": "iter/sec",
            "range": "stddev: 0.060448649918518824",
            "extra": "mean: 5.970478054599982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.01399511351815,
            "unit": "iter/sec",
            "range": "stddev: 0.0004064656154286368",
            "extra": "mean: 21.27026213333794 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 106.39166672001211,
            "unit": "iter/sec",
            "range": "stddev: 0.00006859576436674408",
            "extra": "mean: 9.399232391308159 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.16889324332689,
            "unit": "iter/sec",
            "range": "stddev: 0.0006983934851146817",
            "extra": "mean: 9.508515010102109 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.11775489109175,
            "unit": "iter/sec",
            "range": "stddev: 0.0004778784553663893",
            "extra": "mean: 3.998116808762448 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4483365.164064973,
            "unit": "iter/sec",
            "range": "stddev: 1.2246367633605808e-8",
            "extra": "mean: 223.04674355171556 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2209.8663364456097,
            "unit": "iter/sec",
            "range": "stddev: 0.00011635056887476996",
            "extra": "mean: 452.51605651788816 usec\nrounds: 1327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.526756384696,
            "unit": "iter/sec",
            "range": "stddev: 0.000022239230421618192",
            "extra": "mean: 1.843227063424164 msec\nrounds: 473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 422.8676097918978,
            "unit": "iter/sec",
            "range": "stddev: 0.000031368306814660194",
            "extra": "mean: 2.36480632908281 msec\nrounds: 392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1998092.3873700649,
            "unit": "iter/sec",
            "range": "stddev: 8.742829883484235e-8",
            "extra": "mean: 500.47735846500217 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3670203925436466,
            "unit": "iter/sec",
            "range": "stddev: 0.0016404222841523298",
            "extra": "mean: 731.5179828000055 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5564186.851488771,
            "unit": "iter/sec",
            "range": "stddev: 8.009630605007735e-9",
            "extra": "mean: 179.7207798175818 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10468.573887719602,
            "unit": "iter/sec",
            "range": "stddev: 0.000001781834659419383",
            "extra": "mean: 95.52399502792571 usec\nrounds: 4626"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 85.16585530702915,
            "unit": "iter/sec",
            "range": "stddev: 0.01917864632029748",
            "extra": "mean: 11.741794835441114 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 278.2994661504654,
            "unit": "iter/sec",
            "range": "stddev: 0.0002616867803768194",
            "extra": "mean: 3.5932515927261606 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8588.235399900823,
            "unit": "iter/sec",
            "range": "stddev: 0.000020763887297878442",
            "extra": "mean: 116.43835473018683 usec\nrounds: 4767"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 321.0919147724315,
            "unit": "iter/sec",
            "range": "stddev: 0.000024805965030066942",
            "extra": "mean: 3.1143730315001337 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.9627828270227,
            "unit": "iter/sec",
            "range": "stddev: 0.00006908766594806526",
            "extra": "mean: 52.734875947372096 msec\nrounds: 19"
          }
        ]
      },
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
          "id": "ba1f0cd5160280422a7c7912bcbeb1afbb100b82",
          "message": "chore(flake/nixpkgs): `f5c3f099` -> `7091454b`",
          "timestamp": "2023-05-06T00:28:47Z",
          "tree_id": "7a53edaea6e6edca8a0ff47fb07c0861a3eab3d4",
          "url": "https://github.com/ibis-project/ibis/commit/ba1f0cd5160280422a7c7912bcbeb1afbb100b82"
        },
        "date": 1683333141034,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 94.20705790611464,
            "unit": "iter/sec",
            "range": "stddev: 0.007918247571893224",
            "extra": "mean: 10.614915933332567 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2572878.622645024,
            "unit": "iter/sec",
            "range": "stddev: 1.722898694632227e-8",
            "extra": "mean: 388.66971461407866 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.77012948087179,
            "unit": "iter/sec",
            "range": "stddev: 0.011068354551629534",
            "extra": "mean: 24.527761200002374 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 694.6418462697363,
            "unit": "iter/sec",
            "range": "stddev: 0.00002241067540379362",
            "extra": "mean: 1.4395907838982824 msec\nrounds: 472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2346.9410337070685,
            "unit": "iter/sec",
            "range": "stddev: 0.00008161603222200482",
            "extra": "mean: 426.0865465462794 usec\nrounds: 666"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 80.40408915789187,
            "unit": "iter/sec",
            "range": "stddev: 0.008583479429823345",
            "extra": "mean: 12.437178388231855 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 96.82670386590534,
            "unit": "iter/sec",
            "range": "stddev: 0.0006137191990130389",
            "extra": "mean: 10.327729439028445 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.45789149099974,
            "unit": "iter/sec",
            "range": "stddev: 0.00003143318335183784",
            "extra": "mean: 5.116191484374255 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 258.80003063362284,
            "unit": "iter/sec",
            "range": "stddev: 0.004839297909736117",
            "extra": "mean: 3.8639871778673656 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.36634168445369,
            "unit": "iter/sec",
            "range": "stddev: 0.00030203984714413396",
            "extra": "mean: 15.067878906970849 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.11599868589774,
            "unit": "iter/sec",
            "range": "stddev: 0.00014820199985894",
            "extra": "mean: 18.143552214284107 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 241.20223025590388,
            "unit": "iter/sec",
            "range": "stddev: 0.005254269647198641",
            "extra": "mean: 4.1458986467042545 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2191.2546592605254,
            "unit": "iter/sec",
            "range": "stddev: 0.0001086145673689736",
            "extra": "mean: 456.35955445610614 usec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.4498104304267,
            "unit": "iter/sec",
            "range": "stddev: 0.0008044045937364865",
            "extra": "mean: 10.055323340204675 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1085919.4317222913,
            "unit": "iter/sec",
            "range": "stddev: 1.5610523078665196e-7",
            "extra": "mean: 920.8786313124342 nsec\nrounds: 153870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.68113651971468,
            "unit": "iter/sec",
            "range": "stddev: 0.0007707041947468318",
            "extra": "mean: 23.9916682580623 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 115.25423536076835,
            "unit": "iter/sec",
            "range": "stddev: 0.00029658271350282094",
            "extra": "mean: 8.676470733329703 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.41235879126447,
            "unit": "iter/sec",
            "range": "stddev: 0.00003155509753261268",
            "extra": "mean: 9.30991564893673 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11768.51070040359,
            "unit": "iter/sec",
            "range": "stddev: 0.00001251182816511572",
            "extra": "mean: 84.9725190771765 usec\nrounds: 4639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.43920331961593,
            "unit": "iter/sec",
            "range": "stddev: 0.0008409966921709441",
            "extra": "mean: 10.588822913040081 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.40091996766263,
            "unit": "iter/sec",
            "range": "stddev: 0.0007013267232725791",
            "extra": "mean: 10.060269063156786 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1914875.109097762,
            "unit": "iter/sec",
            "range": "stddev: 8.911672053705998e-8",
            "extra": "mean: 522.2272696787903 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7989720059283857,
            "unit": "iter/sec",
            "range": "stddev: 0.005009161583893747",
            "extra": "mean: 1.251608307399988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 745.7817252546515,
            "unit": "iter/sec",
            "range": "stddev: 0.000012596671133081497",
            "extra": "mean: 1.3408749049978987 msec\nrounds: 600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.756746480904184,
            "unit": "iter/sec",
            "range": "stddev: 0.00032700954171177907",
            "extra": "mean: 17.01932220370639 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 246.26766104434975,
            "unit": "iter/sec",
            "range": "stddev: 0.003741186634511831",
            "extra": "mean: 4.060622477832817 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2338.196068295647,
            "unit": "iter/sec",
            "range": "stddev: 0.00008452668637504542",
            "extra": "mean: 427.68013066112024 usec\nrounds: 1347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7777.267541766122,
            "unit": "iter/sec",
            "range": "stddev: 0.000016895574727561156",
            "extra": "mean: 128.579863638446 usec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7404753.384390997,
            "unit": "iter/sec",
            "range": "stddev: 4.5694365895965e-9",
            "extra": "mean: 135.04838690623546 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 230.6107732919288,
            "unit": "iter/sec",
            "range": "stddev: 0.000035457180280946993",
            "extra": "mean: 4.336310857143287 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 89.98517534443282,
            "unit": "iter/sec",
            "range": "stddev: 0.010996717397483226",
            "extra": "mean: 11.112941617020116 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.89848930403459,
            "unit": "iter/sec",
            "range": "stddev: 0.00022459996965363692",
            "extra": "mean: 20.450529540541257 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.35145957886111,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588304483924115",
            "extra": "mean: 9.96497713333358 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.42446203090078,
            "unit": "iter/sec",
            "range": "stddev: 0.0007856651117719296",
            "extra": "mean: 10.057886958334292 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1073.5353973706901,
            "unit": "iter/sec",
            "range": "stddev: 0.007917364101835791",
            "extra": "mean: 931.5016556037244 usec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.3438390849552,
            "unit": "iter/sec",
            "range": "stddev: 0.00027623968452877525",
            "extra": "mean: 3.658395972441143 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9276350920369568,
            "unit": "iter/sec",
            "range": "stddev: 0.005661756243419593",
            "extra": "mean: 1.0780101017999868 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.70852873944212,
            "unit": "iter/sec",
            "range": "stddev: 0.0008179898552110377",
            "extra": "mean: 10.029232329896228 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.02902113242033,
            "unit": "iter/sec",
            "range": "stddev: 0.00011712834327930871",
            "extra": "mean: 6.621244000007209 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6590381609001117,
            "unit": "iter/sec",
            "range": "stddev: 0.0015496785144408043",
            "extra": "mean: 602.758889800009 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.3462753030567,
            "unit": "iter/sec",
            "range": "stddev: 0.00008260058419805003",
            "extra": "mean: 9.145258923803924 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1789821.7373325943,
            "unit": "iter/sec",
            "range": "stddev: 1.219125260472208e-7",
            "extra": "mean: 558.7148592185047 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.46477149942375,
            "unit": "iter/sec",
            "range": "stddev: 0.00011369562933000952",
            "extra": "mean: 10.260117421051076 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.10035075012063,
            "unit": "iter/sec",
            "range": "stddev: 0.0007770610912355479",
            "extra": "mean: 10.62695294999969 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9264871400207165,
            "unit": "iter/sec",
            "range": "stddev: 0.006425679384564631",
            "extra": "mean: 1.07934579639998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.19901825509228,
            "unit": "iter/sec",
            "range": "stddev: 0.0007473708714821051",
            "extra": "mean: 9.980137704085523 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.890646590091116,
            "unit": "iter/sec",
            "range": "stddev: 0.00022823264446279377",
            "extra": "mean: 52.9362504999982 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.83263723335547,
            "unit": "iter/sec",
            "range": "stddev: 0.0006195977530528366",
            "extra": "mean: 9.724539085103162 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.346677539525657,
            "unit": "iter/sec",
            "range": "stddev: 0.00041413417349643",
            "extra": "mean: 742.5682619999975 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 174.2380137698447,
            "unit": "iter/sec",
            "range": "stddev: 0.004213401224320824",
            "extra": "mean: 5.739275708921502 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 276.8863526594126,
            "unit": "iter/sec",
            "range": "stddev: 0.0002461107532434328",
            "extra": "mean: 3.6115900635596225 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2348.3023976168415,
            "unit": "iter/sec",
            "range": "stddev: 0.00008379604093372983",
            "extra": "mean: 425.8395345568965 usec\nrounds: 1852"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.399216907410631,
            "unit": "iter/sec",
            "range": "stddev: 0.00020840549049538681",
            "extra": "mean: 119.0587183333365 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2290.659519864341,
            "unit": "iter/sec",
            "range": "stddev: 0.00008057485725547969",
            "extra": "mean: 436.5554947507968 usec\nrounds: 1429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141994.07423785425,
            "unit": "iter/sec",
            "range": "stddev: 6.701601619254881e-7",
            "extra": "mean: 7.042547411696211 usec\nrounds: 38461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.64094355623266,
            "unit": "iter/sec",
            "range": "stddev: 0.0007047122198187526",
            "extra": "mean: 9.936313836736385 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.00669711252546,
            "unit": "iter/sec",
            "range": "stddev: 0.017710475660207434",
            "extra": "mean: 12.04722070370275 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.7703061731569,
            "unit": "iter/sec",
            "range": "stddev: 0.0008429620076186746",
            "extra": "mean: 10.551828313953932 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5681337.8954056,
            "unit": "iter/sec",
            "range": "stddev: 1.6930843133388867e-8",
            "extra": "mean: 176.01487860963283 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9641.378724841887,
            "unit": "iter/sec",
            "range": "stddev: 0.000001935858997026459",
            "extra": "mean: 103.71960572645168 usec\nrounds: 4715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 101.47860966633715,
            "unit": "iter/sec",
            "range": "stddev: 0.0007778875815684774",
            "extra": "mean: 9.85429346428781 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1739.5365177673068,
            "unit": "iter/sec",
            "range": "stddev: 0.000004229767430282389",
            "extra": "mean: 574.8657701555462 usec\nrounds: 1414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2312.493015099391,
            "unit": "iter/sec",
            "range": "stddev: 0.00010224478642064797",
            "extra": "mean: 432.433738597485 usec\nrounds: 1469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 249.82291897470128,
            "unit": "iter/sec",
            "range": "stddev: 0.0004095225737446262",
            "extra": "mean: 4.002835304719446 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 188.81920831920573,
            "unit": "iter/sec",
            "range": "stddev: 0.00012038791809749874",
            "extra": "mean: 5.296071352600227 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.89498848864621,
            "unit": "iter/sec",
            "range": "stddev: 0.0007978395376018462",
            "extra": "mean: 27.859042225805577 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5063068856850097,
            "unit": "iter/sec",
            "range": "stddev: 0.0013504500531590616",
            "extra": "mean: 398.9934375999951 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 422.4578805141828,
            "unit": "iter/sec",
            "range": "stddev: 0.00009940050115984537",
            "extra": "mean: 2.3670998840946647 msec\nrounds: 371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17862456399496202,
            "unit": "iter/sec",
            "range": "stddev: 0.07735457242836799",
            "extra": "mean: 5.598334168800011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1606018.1181305987,
            "unit": "iter/sec",
            "range": "stddev: 9.374892527045978e-8",
            "extra": "mean: 622.6579816945014 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6255371.382465185,
            "unit": "iter/sec",
            "range": "stddev: 1.0891932902374856e-8",
            "extra": "mean: 159.86261068408524 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.2021254130844,
            "unit": "iter/sec",
            "range": "stddev: 0.0003258453881140067",
            "extra": "mean: 3.620536947369296 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4668.262498054252,
            "unit": "iter/sec",
            "range": "stddev: 0.00003269195185352926",
            "extra": "mean: 214.21246136368796 usec\nrounds: 2200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 99.96428160472081,
            "unit": "iter/sec",
            "range": "stddev: 0.0007445693692993531",
            "extra": "mean: 10.003573115787539 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2323.2426425327126,
            "unit": "iter/sec",
            "range": "stddev: 0.00009168854356381473",
            "extra": "mean: 430.4328707180741 usec\nrounds: 1810"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1164.2970557504889,
            "unit": "iter/sec",
            "range": "stddev: 0.000014970520809282926",
            "extra": "mean: 858.8873389836192 usec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.3778617344724,
            "unit": "iter/sec",
            "range": "stddev: 0.00024988949006340863",
            "extra": "mean: 3.631373973570287 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13458.142540004646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017379083002339388",
            "extra": "mean: 74.30445895690853 usec\nrounds: 6883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.0696695285748,
            "unit": "iter/sec",
            "range": "stddev: 0.00007057039049860467",
            "extra": "mean: 6.208493522876408 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4609982.480350817,
            "unit": "iter/sec",
            "range": "stddev: 1.160731519930787e-8",
            "extra": "mean: 216.92056407195264 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12096275.353970282,
            "unit": "iter/sec",
            "range": "stddev: 3.556234843976706e-9",
            "extra": "mean: 82.67007576600602 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 266.3998803109548,
            "unit": "iter/sec",
            "range": "stddev: 0.000301037651986233",
            "extra": "mean: 3.7537554402530198 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 170.56155059521487,
            "unit": "iter/sec",
            "range": "stddev: 0.00011533261995240266",
            "extra": "mean: 5.86298609804064 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6355029.024689943,
            "unit": "iter/sec",
            "range": "stddev: 5.0882394279866485e-9",
            "extra": "mean: 157.3556935955782 nsec\nrounds: 61729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.55130844362863,
            "unit": "iter/sec",
            "range": "stddev: 0.0006603409738141777",
            "extra": "mean: 9.657048423916159 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.00307122194945,
            "unit": "iter/sec",
            "range": "stddev: 0.00019560526825822678",
            "extra": "mean: 8.129878303571607 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2317.595750489742,
            "unit": "iter/sec",
            "range": "stddev: 0.00007566986876611402",
            "extra": "mean: 431.48163340767496 usec\nrounds: 1353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.140399302332575,
            "unit": "iter/sec",
            "range": "stddev: 0.000488496399416801",
            "extra": "mean: 36.845441692306096 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 414.50863724207744,
            "unit": "iter/sec",
            "range": "stddev: 0.000041793871723545525",
            "extra": "mean: 2.4124949642870517 msec\nrounds: 308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.248213469225227,
            "unit": "iter/sec",
            "range": "stddev: 0.00018292421603736622",
            "extra": "mean: 33.05980371427251 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.4078762230238,
            "unit": "iter/sec",
            "range": "stddev: 0.000023716192444574126",
            "extra": "mean: 1.8573279555549662 msec\nrounds: 450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.3135296658591,
            "unit": "iter/sec",
            "range": "stddev: 0.00007325378077581225",
            "extra": "mean: 9.586484161769201 msec\nrounds: 68"
          }
        ]
      }
    ]
  }
}