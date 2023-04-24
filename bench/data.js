window.BENCHMARK_DATA = {
  "lastUpdate": 1682348838517,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "dfdede5585c0bfd2c665895357569afa6586cb9e",
          "message": "fix(pandas): solve problem with first and last window function\n\nfixes #4918",
          "timestamp": "2023-04-24T10:59:19-04:00",
          "tree_id": "d66ec0520d1d1947c48dee8531b8a7c73149207f",
          "url": "https://github.com/ibis-project/ibis/commit/dfdede5585c0bfd2c665895357569afa6586cb9e"
        },
        "date": 1682348741910,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 635508.25049222,
            "unit": "iter/sec",
            "range": "stddev: 0.000001864473532553139",
            "extra": "mean: 1.5735436939260352 usec\nrounds: 10482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2257301.589553441,
            "unit": "iter/sec",
            "range": "stddev: 3.87458831753764e-8",
            "extra": "mean: 443.0068204567069 nsec\nrounds: 90082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7497902303999556,
            "unit": "iter/sec",
            "range": "stddev: 0.00868045138208673",
            "extra": "mean: 1.3337063614000102 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.05282808886055,
            "unit": "iter/sec",
            "range": "stddev: 0.0005867365306834038",
            "extra": "mean: 11.897279636359187 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 266.27097047787737,
            "unit": "iter/sec",
            "range": "stddev: 0.00005346349155166527",
            "extra": "mean: 3.7555727468349134 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 81.36970394500179,
            "unit": "iter/sec",
            "range": "stddev: 0.015255808948492494",
            "extra": "mean: 12.289586314286032 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.24201118965239,
            "unit": "iter/sec",
            "range": "stddev: 0.0002502755676251874",
            "extra": "mean: 12.46229979999498 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.985037413188678,
            "unit": "iter/sec",
            "range": "stddev: 0.001345288166207432",
            "extra": "mean: 47.65300057895155 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 140.17955193847195,
            "unit": "iter/sec",
            "range": "stddev: 0.00006086314890560028",
            "extra": "mean: 7.133708063490767 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.218656310040563,
            "unit": "iter/sec",
            "range": "stddev: 0.0012181003995895877",
            "extra": "mean: 450.72325779999574 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.247644366012615,
            "unit": "iter/sec",
            "range": "stddev: 0.02582208348720815",
            "extra": "mean: 31.010016999999834 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.141312394417897,
            "unit": "iter/sec",
            "range": "stddev: 0.0004385114721993846",
            "extra": "mean: 194.50286683332743 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.41621854977718,
            "unit": "iter/sec",
            "range": "stddev: 0.00029278076857973764",
            "extra": "mean: 25.37026728571488 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1922.6794155249536,
            "unit": "iter/sec",
            "range": "stddev: 0.00009512183406372435",
            "extra": "mean: 520.1075082644329 usec\nrounds: 484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 143.55750007495652,
            "unit": "iter/sec",
            "range": "stddev: 0.004478876096249828",
            "extra": "mean: 6.965849917126337 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6701584939018669,
            "unit": "iter/sec",
            "range": "stddev: 0.0038249257510041107",
            "extra": "mean: 1.4921843251999918 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 88.38246584431644,
            "unit": "iter/sec",
            "range": "stddev: 0.0007247017709694482",
            "extra": "mean: 11.314461420000157 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 140.06266634017805,
            "unit": "iter/sec",
            "range": "stddev: 0.0001601894452299893",
            "extra": "mean: 7.13966131111087 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1887.7837151556382,
            "unit": "iter/sec",
            "range": "stddev: 0.00009721191087443296",
            "extra": "mean: 529.7217006226558 usec\nrounds: 1286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6155171720264426,
            "unit": "iter/sec",
            "range": "stddev: 0.0789672009555111",
            "extra": "mean: 1.6246500430000026 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.99615256528537,
            "unit": "iter/sec",
            "range": "stddev: 0.0009373095067562095",
            "extra": "mean: 11.628427204819818 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.92623934309602,
            "unit": "iter/sec",
            "range": "stddev: 0.00029744733959212444",
            "extra": "mean: 20.438930386361484 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.73736999599532,
            "unit": "iter/sec",
            "range": "stddev: 0.00046403895768519325",
            "extra": "mean: 4.5302705202030005 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 236.33696481101856,
            "unit": "iter/sec",
            "range": "stddev: 0.00041318912902431034",
            "extra": "mean: 4.231246689656132 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 86.37968675036807,
            "unit": "iter/sec",
            "range": "stddev: 0.0008787878583060671",
            "extra": "mean: 11.576795860465877 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 422016.9724776957,
            "unit": "iter/sec",
            "range": "stddev: 6.679393662325967e-7",
            "extra": "mean: 2.3695729442560554 usec\nrounds: 1885"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9682491.413294755,
            "unit": "iter/sec",
            "range": "stddev: 9.313430595686507e-9",
            "extra": "mean: 103.2792033904625 nsec\nrounds: 96145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 92.1567137358183,
            "unit": "iter/sec",
            "range": "stddev: 0.00022286355862072562",
            "extra": "mean: 10.8510813750006 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.81904422715493,
            "unit": "iter/sec",
            "range": "stddev: 0.00007674587525751993",
            "extra": "mean: 14.965793234043371 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14632202637209193,
            "unit": "iter/sec",
            "range": "stddev: 0.01258115207379685",
            "extra": "mean: 6.834241055799993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 96.04230867812376,
            "unit": "iter/sec",
            "range": "stddev: 0.00005668205842741053",
            "extra": "mean: 10.412077903618503 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4909986.977087982,
            "unit": "iter/sec",
            "range": "stddev: 4.5827475106641306e-7",
            "extra": "mean: 203.6665279697263 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 582.9070531472333,
            "unit": "iter/sec",
            "range": "stddev: 0.00004382124992851882",
            "extra": "mean: 1.7155393721877223 msec\nrounds: 489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 242.33467655198046,
            "unit": "iter/sec",
            "range": "stddev: 0.0003009923018282041",
            "extra": "mean: 4.126524582566297 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.03149184400594,
            "unit": "iter/sec",
            "range": "stddev: 0.0001978735503051631",
            "extra": "mean: 11.231980721519552 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7345.549367342107,
            "unit": "iter/sec",
            "range": "stddev: 0.000018849639429729833",
            "extra": "mean: 136.13685648155098 usec\nrounds: 3456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 235.40761090979305,
            "unit": "iter/sec",
            "range": "stddev: 0.00038711744749579045",
            "extra": "mean: 4.247951016261724 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 253.6461941116293,
            "unit": "iter/sec",
            "range": "stddev: 0.000038958286745545774",
            "extra": "mean: 3.942499525776056 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.40572816541007,
            "unit": "iter/sec",
            "range": "stddev: 0.0002908846038846558",
            "extra": "mean: 22.519617205127876 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 81.95404066572166,
            "unit": "iter/sec",
            "range": "stddev: 0.0009156836690471661",
            "extra": "mean: 12.201960902438614 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60691.035446454516,
            "unit": "iter/sec",
            "range": "stddev: 6.791926600342658e-7",
            "extra": "mean: 16.47689799068041 usec\nrounds: 3882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1498.9850303595383,
            "unit": "iter/sec",
            "range": "stddev: 0.000020978713740273428",
            "extra": "mean: 667.1180697249162 usec\nrounds: 1133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1610427.984183087,
            "unit": "iter/sec",
            "range": "stddev: 1.9100202087912893e-7",
            "extra": "mean: 620.9529453173683 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1858.421797291413,
            "unit": "iter/sec",
            "range": "stddev: 0.0001381889964220333",
            "extra": "mean: 538.0909766864908 usec\nrounds: 1201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.85307591220479,
            "unit": "iter/sec",
            "range": "stddev: 0.0003921498889359521",
            "extra": "mean: 17.904116893613807 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.314676397525254,
            "unit": "iter/sec",
            "range": "stddev: 0.0007042629102127628",
            "extra": "mean: 28.316838833332113 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.9609528257828,
            "unit": "iter/sec",
            "range": "stddev: 0.0000752583789544781",
            "extra": "mean: 7.196266142861824 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7442871298707093,
            "unit": "iter/sec",
            "range": "stddev: 0.010472881824063498",
            "extra": "mean: 1.3435675022000055 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12064.616198856282,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027457544179475137",
            "extra": "mean: 82.88701302365503 usec\nrounds: 5682"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 174.6048024003436,
            "unit": "iter/sec",
            "range": "stddev: 0.00004811274422444232",
            "extra": "mean: 5.727219333332793 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 248.20566936508936,
            "unit": "iter/sec",
            "range": "stddev: 0.00027841800018845554",
            "extra": "mean: 4.028916835614602 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.98728931949138,
            "unit": "iter/sec",
            "range": "stddev: 0.0008275548838211934",
            "extra": "mean: 11.629625819281669 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 204.89417424635596,
            "unit": "iter/sec",
            "range": "stddev: 0.004855076848773734",
            "extra": "mean: 4.880568242987929 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.941068781420597,
            "unit": "iter/sec",
            "range": "stddev: 0.03436235443178314",
            "extra": "mean: 33.398941343754984 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1004.5880674308482,
            "unit": "iter/sec",
            "range": "stddev: 0.00005270322542930196",
            "extra": "mean: 995.4328867925121 usec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1936.1984633983598,
            "unit": "iter/sec",
            "range": "stddev: 0.00009685069426056092",
            "extra": "mean: 516.4759805897319 usec\nrounds: 1185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 85.65724838810652,
            "unit": "iter/sec",
            "range": "stddev: 0.0009898592061202438",
            "extra": "mean: 11.67443524999864 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.933986494138356,
            "unit": "iter/sec",
            "range": "stddev: 0.00026118970742239274",
            "extra": "mean: 100.66452179999033 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 83.87333979918697,
            "unit": "iter/sec",
            "range": "stddev: 0.0009006125457790569",
            "extra": "mean: 11.922739721516296 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1811.6623198569241,
            "unit": "iter/sec",
            "range": "stddev: 0.00012349749753219012",
            "extra": "mean: 551.9792452707053 usec\nrounds: 1533"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.40174383103724,
            "unit": "iter/sec",
            "range": "stddev: 0.0008107902783054439",
            "extra": "mean: 12.919605560605097 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3856.29088674192,
            "unit": "iter/sec",
            "range": "stddev: 0.000051060831859586574",
            "extra": "mean: 259.31653741112723 usec\nrounds: 1831"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.392392263469671,
            "unit": "iter/sec",
            "range": "stddev: 0.0032529577154737244",
            "extra": "mean: 718.1884202000106 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1863.0294997801752,
            "unit": "iter/sec",
            "range": "stddev: 0.00009725616435097142",
            "extra": "mean: 536.7601533512986 usec\nrounds: 1089"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5667801.970521301,
            "unit": "iter/sec",
            "range": "stddev: 1.5632476010856924e-8",
            "extra": "mean: 176.43523983392078 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 70.77000396963113,
            "unit": "iter/sec",
            "range": "stddev: 0.022760806518809674",
            "extra": "mean: 14.130280399999986 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.61485830085074,
            "unit": "iter/sec",
            "range": "stddev: 0.00012259790099343926",
            "extra": "mean: 10.5691644838727 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10653.746762875853,
            "unit": "iter/sec",
            "range": "stddev: 0.000015352208997194427",
            "extra": "mean: 93.86369154977567 usec\nrounds: 5385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 244.50263981756117,
            "unit": "iter/sec",
            "range": "stddev: 0.0002977341703340029",
            "extra": "mean: 4.089935391888459 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1843.2559444486753,
            "unit": "iter/sec",
            "range": "stddev: 0.00010474638689650061",
            "extra": "mean: 542.5182558134127 usec\nrounds: 1032"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 84.99658786832893,
            "unit": "iter/sec",
            "range": "stddev: 0.00099557140366272",
            "extra": "mean: 11.76517816867112 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 457.8267674664614,
            "unit": "iter/sec",
            "range": "stddev: 0.000029577455956484352",
            "extra": "mean: 2.184232270939152 msec\nrounds: 406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2214271.6803530124,
            "unit": "iter/sec",
            "range": "stddev: 4.832637225983158e-8",
            "extra": "mean: 451.61576552363204 nsec\nrounds: 109879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1868.0665412397552,
            "unit": "iter/sec",
            "range": "stddev: 0.00009724166479068897",
            "extra": "mean: 535.3128370557631 usec\nrounds: 1209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.65315263142688,
            "unit": "iter/sec",
            "range": "stddev: 0.0008567589155419137",
            "extra": "mean: 12.246924555551299 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.26913694081951,
            "unit": "iter/sec",
            "range": "stddev: 0.0008809930933002327",
            "extra": "mean: 12.009251407405765 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1375879.330279084,
            "unit": "iter/sec",
            "range": "stddev: 1.6757623369217504e-7",
            "extra": "mean: 726.8079242073936 nsec\nrounds: 120468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 239.44745743256257,
            "unit": "iter/sec",
            "range": "stddev: 0.0004003642828026975",
            "extra": "mean: 4.1762815555543655 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9137.76202545751,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030965892408913646",
            "extra": "mean: 109.43598631853534 usec\nrounds: 4751"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 64.8377445878091,
            "unit": "iter/sec",
            "range": "stddev: 0.02673826480068643",
            "extra": "mean: 15.423115136981828 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 86.65290258527132,
            "unit": "iter/sec",
            "range": "stddev: 0.0009333823792830161",
            "extra": "mean: 11.540294325581812 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 245.24042999863602,
            "unit": "iter/sec",
            "range": "stddev: 0.0003302786877423533",
            "extra": "mean: 4.077631082303851 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 111.81373254344768,
            "unit": "iter/sec",
            "range": "stddev: 0.00008685390987720318",
            "extra": "mean: 8.943445292924356 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4624133.627983622,
            "unit": "iter/sec",
            "range": "stddev: 2.1696343764984e-8",
            "extra": "mean: 216.25672622180434 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 84.61400107446374,
            "unit": "iter/sec",
            "range": "stddev: 0.0008719595445910188",
            "extra": "mean: 11.818375059701522 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 641.8827283559466,
            "unit": "iter/sec",
            "range": "stddev: 0.00002151082982115231",
            "extra": "mean: 1.5579169773913355 msec\nrounds: 575"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145506.38455378558,
            "unit": "iter/sec",
            "range": "stddev: 7.582753206278554e-7",
            "extra": "mean: 6.872550665502624 usec\nrounds: 37876"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.96881357602979,
            "unit": "iter/sec",
            "range": "stddev: 0.00029209377583964036",
            "extra": "mean: 71.58804107143217 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}