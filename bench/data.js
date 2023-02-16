window.BENCHMARK_DATA = {
  "lastUpdate": 1676589487361,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "80bd494ee713455551a7d6c2eaf528bef3ee5ec9",
          "message": "refactor(ir): reorganize the `scope` and `timecontext` utilities\n\nplace them under the pandas backends instead of the previous central location\n\nBREAKING CHANGE: removed `ibis.expr.scope` and `ibis.expr.timecontext` modules, access them under `ibis.backends.base.df.<module>`",
          "timestamp": "2023-02-17T00:12:16+01:00",
          "tree_id": "18ea505aeab7bf3aee4034d958b4e2a30882f983",
          "url": "https://github.com/ibis-project/ibis/commit/80bd494ee713455551a7d6c2eaf528bef3ee5ec9"
        },
        "date": 1676589396329,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 62.887227200761025,
            "unit": "iter/sec",
            "range": "stddev: 0.010666000433694953",
            "extra": "mean: 15.901480229166449 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9334.344476286955,
            "unit": "iter/sec",
            "range": "stddev: 0.000004562110278860823",
            "extra": "mean: 107.13125089184443 usec\nrounds: 5046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 539753.9299222114,
            "unit": "iter/sec",
            "range": "stddev: 4.467746523345715e-7",
            "extra": "mean: 1.852696098283376 usec\nrounds: 19684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 75.61047114671238,
            "unit": "iter/sec",
            "range": "stddev: 0.0006659428126198911",
            "extra": "mean: 13.225681374999354 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 204.25461210690693,
            "unit": "iter/sec",
            "range": "stddev: 0.00031026419602056267",
            "extra": "mean: 4.895850280612512 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 145.54093590794614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000769780191369014",
            "extra": "mean: 6.8709191249978945 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 102.07355932218735,
            "unit": "iter/sec",
            "range": "stddev: 0.00014252646146139305",
            "extra": "mean: 9.79685637142893 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.224720283730033,
            "unit": "iter/sec",
            "range": "stddev: 0.021414512284755396",
            "extra": "mean: 38.13196057692199 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1395203.4817208603,
            "unit": "iter/sec",
            "range": "stddev: 1.8216128780015404e-7",
            "extra": "mean: 716.7413306384444 nsec\nrounds: 69440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3579306.926747742,
            "unit": "iter/sec",
            "range": "stddev: 2.8477362366612854e-8",
            "extra": "mean: 279.3836964713519 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 76.08794030171275,
            "unit": "iter/sec",
            "range": "stddev: 0.0007753941103899747",
            "extra": "mean: 13.142687212121707 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9438304819150465,
            "unit": "iter/sec",
            "range": "stddev: 0.005186738461338758",
            "extra": "mean: 514.4481524000014 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 208.59894272205327,
            "unit": "iter/sec",
            "range": "stddev: 0.000249652270868345",
            "extra": "mean: 4.793888151832321 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 230.63449207139118,
            "unit": "iter/sec",
            "range": "stddev: 0.00011881329025694039",
            "extra": "mean: 4.335864904762196 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 133.40422426916643,
            "unit": "iter/sec",
            "range": "stddev: 0.0008720261697861935",
            "extra": "mean: 7.496014503876013 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3898.671103308232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000693089192688885",
            "extra": "mean: 256.49765612478734 usec\nrounds: 2245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3797441.4689603695,
            "unit": "iter/sec",
            "range": "stddev: 2.7627015891362368e-8",
            "extra": "mean: 263.33519770442456 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4011.6529856521192,
            "unit": "iter/sec",
            "range": "stddev: 0.00009512825947873663",
            "extra": "mean: 249.27380398467935 usec\nrounds: 1857"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 80.06860406105855,
            "unit": "iter/sec",
            "range": "stddev: 0.0008466716551509029",
            "extra": "mean: 12.489289799999785 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 210.94570922299266,
            "unit": "iter/sec",
            "range": "stddev: 0.0002849036320690977",
            "extra": "mean: 4.740556248730761 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 58.277027711766735,
            "unit": "iter/sec",
            "range": "stddev: 0.022704783362076018",
            "extra": "mean: 17.15942008823641 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 135.78590273413585,
            "unit": "iter/sec",
            "range": "stddev: 0.0008558079177273522",
            "extra": "mean: 7.364534755555338 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4629.379609350422,
            "unit": "iter/sec",
            "range": "stddev: 0.00006133679823705074",
            "extra": "mean: 216.01166557613894 usec\nrounds: 2751"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.9636913015228314,
            "unit": "iter/sec",
            "range": "stddev: 0.0012098782580912987",
            "extra": "mean: 125.5699099999994 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 834.7058522824192,
            "unit": "iter/sec",
            "range": "stddev: 0.000031815638645620775",
            "extra": "mean: 1.1980268225813926 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.937479572016226,
            "unit": "iter/sec",
            "range": "stddev: 0.02111846277808525",
            "extra": "mean: 33.402945548386796 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 533.3302744790898,
            "unit": "iter/sec",
            "range": "stddev: 0.00004769293827331571",
            "extra": "mean: 1.875010753846127 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1259371.806786642,
            "unit": "iter/sec",
            "range": "stddev: 1.9698890734327286e-7",
            "extra": "mean: 794.0466783606632 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 123.22063832979788,
            "unit": "iter/sec",
            "range": "stddev: 0.0001911875194702269",
            "extra": "mean: 8.115523613207696 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5065253542593681,
            "unit": "iter/sec",
            "range": "stddev: 0.004144862928204587",
            "extra": "mean: 1.9742348365999987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.790542656265906,
            "unit": "iter/sec",
            "range": "stddev: 0.0006450068738405097",
            "extra": "mean: 19.688704780487956 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11616353955960435,
            "unit": "iter/sec",
            "range": "stddev: 0.053709249740881426",
            "extra": "mean: 8.608553112200003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 134.40785242924164,
            "unit": "iter/sec",
            "range": "stddev: 0.0008040567040807468",
            "extra": "mean: 7.440041500004213 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 207.74476577112338,
            "unit": "iter/sec",
            "range": "stddev: 0.0002844342812586858",
            "extra": "mean: 4.813599015542564 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 81.89779328347832,
            "unit": "iter/sec",
            "range": "stddev: 0.0008616939726930696",
            "extra": "mean: 12.210341205881251 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.883016931029882,
            "unit": "iter/sec",
            "range": "stddev: 0.0007879737473012444",
            "extra": "mean: 47.88580133333653 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8709765.03822948,
            "unit": "iter/sec",
            "range": "stddev: 9.910487432297142e-9",
            "extra": "mean: 114.81365979566384 nsec\nrounds: 86207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 347.9615625129053,
            "unit": "iter/sec",
            "range": "stddev: 0.00011830817369793474",
            "extra": "mean: 2.8738806458340114 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3427.6285844702547,
            "unit": "iter/sec",
            "range": "stddev: 0.000028579915654428072",
            "extra": "mean: 291.7468959532999 usec\nrounds: 519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16334.890938978651,
            "unit": "iter/sec",
            "range": "stddev: 0.000015912420440579988",
            "extra": "mean: 61.218651764229385 usec\nrounds: 4988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7339644108381407,
            "unit": "iter/sec",
            "range": "stddev: 0.023510252023434267",
            "extra": "mean: 1.3624638814000036 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.695283057374555,
            "unit": "iter/sec",
            "range": "stddev: 0.0005527029883636288",
            "extra": "mean: 85.5045572727239 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7506459888608177,
            "unit": "iter/sec",
            "range": "stddev: 0.00822500747492284",
            "extra": "mean: 1.3321858969999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.939025963549955,
            "unit": "iter/sec",
            "range": "stddev: 0.0006690415916566697",
            "extra": "mean: 31.30965863333586 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 128.03130655650784,
            "unit": "iter/sec",
            "range": "stddev: 0.00010334007059051432",
            "extra": "mean: 7.810589666665945 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8496.325276640966,
            "unit": "iter/sec",
            "range": "stddev: 0.000014678082097171045",
            "extra": "mean: 117.69794204434595 usec\nrounds: 2916"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 203.27981692845478,
            "unit": "iter/sec",
            "range": "stddev: 0.00026935780097300983",
            "extra": "mean: 4.919327531429027 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 182.5074302237976,
            "unit": "iter/sec",
            "range": "stddev: 0.00048773119239228026",
            "extra": "mean: 5.47922897590395 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 124.2984530570715,
            "unit": "iter/sec",
            "range": "stddev: 0.0008403473545184375",
            "extra": "mean: 8.045152416666449 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9417.540146115653,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032203261396391744",
            "extra": "mean: 106.18484067864144 usec\nrounds: 4833"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 49919.88491996277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016612172973242608",
            "extra": "mean: 20.03209746182936 usec\nrounds: 11820"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4370561.983922323,
            "unit": "iter/sec",
            "range": "stddev: 3.088656906564956e-8",
            "extra": "mean: 228.8035277108001 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1273855.2465655988,
            "unit": "iter/sec",
            "range": "stddev: 2.3718868415018073e-7",
            "extra": "mean: 785.0185511235038 nsec\nrounds: 86949"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.73070844340873,
            "unit": "iter/sec",
            "range": "stddev: 0.00032463030638910594",
            "extra": "mean: 13.381379901640692 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.33186555141166,
            "unit": "iter/sec",
            "range": "stddev: 0.0011422346343435837",
            "extra": "mean: 29.127458818178965 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3565102496537613,
            "unit": "iter/sec",
            "range": "stddev: 0.0017790151194663063",
            "extra": "mean: 737.1857309999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 122.19048613436563,
            "unit": "iter/sec",
            "range": "stddev: 0.0008110264865783124",
            "extra": "mean: 8.183943215516463 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4614.218952746,
            "unit": "iter/sec",
            "range": "stddev: 0.00006715450957407204",
            "extra": "mean: 216.72140187558352 usec\nrounds: 2772"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.06921807566297,
            "unit": "iter/sec",
            "range": "stddev: 0.00025937889863449234",
            "extra": "mean: 12.184836452055128 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 210.62875192778625,
            "unit": "iter/sec",
            "range": "stddev: 0.00014384758944025174",
            "extra": "mean: 4.747689908654296 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4678.020243599412,
            "unit": "iter/sec",
            "range": "stddev: 0.00006095688224845098",
            "extra": "mean: 213.7656418584818 usec\nrounds: 2432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1274258.5076989925,
            "unit": "iter/sec",
            "range": "stddev: 2.292698897850134e-7",
            "extra": "mean: 784.7701184320613 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 199.31849943047922,
            "unit": "iter/sec",
            "range": "stddev: 0.0003604650063736344",
            "extra": "mean: 5.017095768116558 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 444.46672568082414,
            "unit": "iter/sec",
            "range": "stddev: 0.00009685824142771015",
            "extra": "mean: 2.24988720689546 msec\nrounds: 406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.640174520055198,
            "unit": "iter/sec",
            "range": "stddev: 0.0028996077561792037",
            "extra": "mean: 1.5620740418000025 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 117.63063600513837,
            "unit": "iter/sec",
            "range": "stddev: 0.013818092733724904",
            "extra": "mean: 8.501186714286897 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 134.9176952652422,
            "unit": "iter/sec",
            "range": "stddev: 0.0008942915866932186",
            "extra": "mean: 7.411926197182989 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.81301561072613,
            "unit": "iter/sec",
            "range": "stddev: 0.00026115172108623623",
            "extra": "mean: 18.243842066669913 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 121.67561830127381,
            "unit": "iter/sec",
            "range": "stddev: 0.00013945458219531709",
            "extra": "mean: 8.218573400004914 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 56.9534275280684,
            "unit": "iter/sec",
            "range": "stddev: 0.000858475119444995",
            "extra": "mean: 17.558205772728417 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 116593.69342693979,
            "unit": "iter/sec",
            "range": "stddev: 8.123542209389793e-7",
            "extra": "mean: 8.576793226184419 usec\nrounds: 36494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.294114160692713,
            "unit": "iter/sec",
            "range": "stddev: 0.0011181525021816555",
            "extra": "mean: 232.8769014000045 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 79.24567039011475,
            "unit": "iter/sec",
            "range": "stddev: 0.0008881653175196099",
            "extra": "mean: 12.618985934211262 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 88.30737609297371,
            "unit": "iter/sec",
            "range": "stddev: 0.00031033382258438763",
            "extra": "mean: 11.324082361445754 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 233.53035728872968,
            "unit": "iter/sec",
            "range": "stddev: 0.00008368842284854127",
            "extra": "mean: 4.28209853147114 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2848.0140156748157,
            "unit": "iter/sec",
            "range": "stddev: 0.004089575535365753",
            "extra": "mean: 351.1218675526979 usec\nrounds: 1729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1269.5613071391624,
            "unit": "iter/sec",
            "range": "stddev: 0.000029259331090515277",
            "extra": "mean: 787.6736589061669 usec\nrounds: 988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 235.37104371257277,
            "unit": "iter/sec",
            "range": "stddev: 0.00015939050943604557",
            "extra": "mean: 4.24861097706295 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 332937.02785847755,
            "unit": "iter/sec",
            "range": "stddev: 1.8868520410523368e-7",
            "extra": "mean: 3.0035709948881766 usec\nrounds: 1648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.260770502810935,
            "unit": "iter/sec",
            "range": "stddev: 0.000522480083324294",
            "extra": "mean: 21.6165876428547 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.33042216347688,
            "unit": "iter/sec",
            "range": "stddev: 0.0008495544996505685",
            "extra": "mean: 13.100936319444164 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4557.465681438868,
            "unit": "iter/sec",
            "range": "stddev: 0.000057370702616684785",
            "extra": "mean: 219.42019312897673 usec\nrounds: 2154"
          }
        ]
      }
    ]
  }
}