window.BENCHMARK_DATA = {
  "lastUpdate": 1683679072862,
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
          "id": "e221a2e68296705c5834218b90abefcd640ab9c8",
          "message": "chore(flake/poetry2nix): `e1ccedce` -> `38abfb45`",
          "timestamp": "2023-05-10T00:29:53Z",
          "tree_id": "3f473c2c91bc7ae3c24c98e50be06564e6fcced2",
          "url": "https://github.com/ibis-project/ibis/commit/e221a2e68296705c5834218b90abefcd640ab9c8"
        },
        "date": 1683678976421,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 237.34825148017666,
            "unit": "iter/sec",
            "range": "stddev: 0.00038510691397088224",
            "extra": "mean: 4.213218314285834 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7491710903228107,
            "unit": "iter/sec",
            "range": "stddev: 0.007781067160688856",
            "extra": "mean: 1.3348085809999817 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 74.83707029473749,
            "unit": "iter/sec",
            "range": "stddev: 0.009929886912090624",
            "extra": "mean: 13.362361675324957 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.216673957278616,
            "unit": "iter/sec",
            "range": "stddev: 0.00044276345863349906",
            "extra": "mean: 24.262025631580734 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.9724859917857,
            "unit": "iter/sec",
            "range": "stddev: 0.0002640471171836777",
            "extra": "mean: 12.052187999995567 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 138.83138855235887,
            "unit": "iter/sec",
            "range": "stddev: 0.0046035831934206775",
            "extra": "mean: 7.202982052022479 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4605945.820661761,
            "unit": "iter/sec",
            "range": "stddev: 5.0507996285908523e-8",
            "extra": "mean: 217.11067366759397 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1777.5205664095802,
            "unit": "iter/sec",
            "range": "stddev: 0.00012509379612092407",
            "extra": "mean: 562.5813950608197 usec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1109.3807892238817,
            "unit": "iter/sec",
            "range": "stddev: 0.0070828248301207835",
            "extra": "mean: 901.4037467690384 usec\nrounds: 387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9807425.635752339,
            "unit": "iter/sec",
            "range": "stddev: 1.6343631301203327e-8",
            "extra": "mean: 101.96355671101729 nsec\nrounds: 96145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 85.5241370620703,
            "unit": "iter/sec",
            "range": "stddev: 0.0009807693765277903",
            "extra": "mean: 11.692605553847757 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 140.71564811073105,
            "unit": "iter/sec",
            "range": "stddev: 0.0001580440618083694",
            "extra": "mean: 7.106530179309456 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 74.58177946551203,
            "unit": "iter/sec",
            "range": "stddev: 0.01658725365715482",
            "extra": "mean: 13.40810057317576 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1919.2375649231778,
            "unit": "iter/sec",
            "range": "stddev: 0.00010437978756965119",
            "extra": "mean: 521.0402392473113 usec\nrounds: 1488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 642.6017660302105,
            "unit": "iter/sec",
            "range": "stddev: 0.00005484035728166746",
            "extra": "mean: 1.5561737500002253 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12168.358916698826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060810632862681775",
            "extra": "mean: 82.18035043556158 usec\nrounds: 7348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 84.91500214098711,
            "unit": "iter/sec",
            "range": "stddev: 0.0009937770912948486",
            "extra": "mean: 11.776482067793719 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 88.34260129708954,
            "unit": "iter/sec",
            "range": "stddev: 0.0007369500968400507",
            "extra": "mean: 11.319567064106195 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 205.0093862311042,
            "unit": "iter/sec",
            "range": "stddev: 0.00035959180939332047",
            "extra": "mean: 4.877825441966418 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 371.3615091570243,
            "unit": "iter/sec",
            "range": "stddev: 0.00012218299684858426",
            "extra": "mean: 2.692793882354582 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2383211.6445673425,
            "unit": "iter/sec",
            "range": "stddev: 8.210540838192588e-8",
            "extra": "mean: 419.6018437051453 nsec\nrounds: 92585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 246.60689277577004,
            "unit": "iter/sec",
            "range": "stddev: 0.0003150229719323245",
            "extra": "mean: 4.055036697247797 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 242.217038701423,
            "unit": "iter/sec",
            "range": "stddev: 0.0002757875062029353",
            "extra": "mean: 4.1285287168946185 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1812.7155800461178,
            "unit": "iter/sec",
            "range": "stddev: 0.00010359112267549165",
            "extra": "mean: 551.6585232717858 usec\nrounds: 1418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3779345.004930415,
            "unit": "iter/sec",
            "range": "stddev: 5.3500485807704746e-8",
            "extra": "mean: 264.5961135317694 nsec\nrounds: 124985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0530137310941385,
            "unit": "iter/sec",
            "range": "stddev: 0.0027509389282240294",
            "extra": "mean: 487.08880259999887 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 567.1223501389343,
            "unit": "iter/sec",
            "range": "stddev: 0.000053489549052799986",
            "extra": "mean: 1.763287939110527 msec\nrounds: 427"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1844.9121318886075,
            "unit": "iter/sec",
            "range": "stddev: 0.0001101161540325836",
            "extra": "mean: 542.0312342877359 usec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 218.25822752351922,
            "unit": "iter/sec",
            "range": "stddev: 0.0004630929885361316",
            "extra": "mean: 4.581728768471014 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 174.17471273178393,
            "unit": "iter/sec",
            "range": "stddev: 0.0000732689172029223",
            "extra": "mean: 5.74136155769021 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 239.26964555207957,
            "unit": "iter/sec",
            "range": "stddev: 0.0002758619880520095",
            "extra": "mean: 4.179385135513729 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 453.2305755238607,
            "unit": "iter/sec",
            "range": "stddev: 0.00006217141311209949",
            "extra": "mean: 2.2063824772725518 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 92.76558968055956,
            "unit": "iter/sec",
            "range": "stddev: 0.0006761307551229271",
            "extra": "mean: 10.779859250003401 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 268.1909271719717,
            "unit": "iter/sec",
            "range": "stddev: 0.00008511579518113164",
            "extra": "mean: 3.7286869117640635 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.87776900626571,
            "unit": "iter/sec",
            "range": "stddev: 0.0007975685711798257",
            "extra": "mean: 11.126221879520466 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5090803.363428223,
            "unit": "iter/sec",
            "range": "stddev: 4.692941576252825e-8",
            "extra": "mean: 196.4326509220301 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 85.78854566354788,
            "unit": "iter/sec",
            "range": "stddev: 0.0008976130876683071",
            "extra": "mean: 11.656567811766816 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4978407.952036264,
            "unit": "iter/sec",
            "range": "stddev: 6.720196909505568e-8",
            "extra": "mean: 200.86742782716055 nsec\nrounds: 51544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.18411884821955,
            "unit": "iter/sec",
            "range": "stddev: 0.0008390265713218645",
            "extra": "mean: 11.212758649349638 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.79363020651738,
            "unit": "iter/sec",
            "range": "stddev: 0.0008174557136084618",
            "extra": "mean: 11.52158283529094 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 864294.3623704799,
            "unit": "iter/sec",
            "range": "stddev: 5.219966119682964e-7",
            "extra": "mean: 1.1570132162580855 usec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1615231.6509077968,
            "unit": "iter/sec",
            "range": "stddev: 3.471254888939425e-7",
            "extra": "mean: 619.1062436387854 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3786.378805150361,
            "unit": "iter/sec",
            "range": "stddev: 0.00003018353177281124",
            "extra": "mean: 264.10458421111116 usec\nrounds: 760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.920537860070572,
            "unit": "iter/sec",
            "range": "stddev: 0.04536713076585924",
            "extra": "mean: 71.83630475000413 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.4768192841131,
            "unit": "iter/sec",
            "range": "stddev: 0.0002999575922207885",
            "extra": "mean: 11.05255476388736 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.125997915058104,
            "unit": "iter/sec",
            "range": "stddev: 0.0008288165682865313",
            "extra": "mean: 32.12748399999799 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1819.331338367618,
            "unit": "iter/sec",
            "range": "stddev: 0.00011674030148115946",
            "extra": "mean: 549.6524898522568 usec\nrounds: 1084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14552584313090228,
            "unit": "iter/sec",
            "range": "stddev: 0.19190580126479223",
            "extra": "mean: 6.871631721800009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1551.6991948938266,
            "unit": "iter/sec",
            "range": "stddev: 0.00003552482440026542",
            "extra": "mean: 644.4548036698724 usec\nrounds: 1090"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.406669005375801,
            "unit": "iter/sec",
            "range": "stddev: 0.003934357370535245",
            "extra": "mean: 710.8992919999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1005.1548215343716,
            "unit": "iter/sec",
            "range": "stddev: 0.000033183165141234235",
            "extra": "mean: 994.871614378268 usec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6566144567556399,
            "unit": "iter/sec",
            "range": "stddev: 0.009123411688849946",
            "extra": "mean: 1.522963726599994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 62.202764091791934,
            "unit": "iter/sec",
            "range": "stddev: 0.018124749941700026",
            "extra": "mean: 16.076455999998828 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 137.66745623545307,
            "unit": "iter/sec",
            "range": "stddev: 0.00023703582364375319",
            "extra": "mean: 7.26388085714097 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.39939141657332,
            "unit": "iter/sec",
            "range": "stddev: 0.00030171432425380384",
            "extra": "mean: 20.661416822228297 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 245.3152983973981,
            "unit": "iter/sec",
            "range": "stddev: 0.00030072867901389074",
            "extra": "mean: 4.076386619720926 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7313.085647713667,
            "unit": "iter/sec",
            "range": "stddev: 0.000015141282262791543",
            "extra": "mean: 136.74118534529072 usec\nrounds: 3248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.89630520253071,
            "unit": "iter/sec",
            "range": "stddev: 0.0003821703132154195",
            "extra": "mean: 18.216162204553978 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7665763748193125,
            "unit": "iter/sec",
            "range": "stddev: 0.019802931530860695",
            "extra": "mean: 1.3045014598000193 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 75.80580929527723,
            "unit": "iter/sec",
            "range": "stddev: 0.01785142741800644",
            "extra": "mean: 13.191601135802411 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 152.05108971903985,
            "unit": "iter/sec",
            "range": "stddev: 0.00025554296632866155",
            "extra": "mean: 6.5767368181826305 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 96.41324349512428,
            "unit": "iter/sec",
            "range": "stddev: 0.00025965532577174397",
            "extra": "mean: 10.372019068631074 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 86.80441380329788,
            "unit": "iter/sec",
            "range": "stddev: 0.0009111699169121469",
            "extra": "mean: 11.520151524391816 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1788350514792525,
            "unit": "iter/sec",
            "range": "stddev: 0.005761805602579646",
            "extra": "mean: 848.2951017999994 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1835.6775770871848,
            "unit": "iter/sec",
            "range": "stddev: 0.00010059296296024516",
            "extra": "mean: 544.7579751923425 usec\nrounds: 1169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 45.250161260573314,
            "unit": "iter/sec",
            "range": "stddev: 0.00029754423251442856",
            "extra": "mean: 22.099368756754128 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 22.419820749568597,
            "unit": "iter/sec",
            "range": "stddev: 0.032860181906274995",
            "extra": "mean: 44.60338961538049 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.87386115889909,
            "unit": "iter/sec",
            "range": "stddev: 0.0001308887122296716",
            "extra": "mean: 10.4303716144552 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1879.1885347739103,
            "unit": "iter/sec",
            "range": "stddev: 0.00009836355087652581",
            "extra": "mean: 532.144583417391 usec\nrounds: 1001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.25286482429287,
            "unit": "iter/sec",
            "range": "stddev: 0.0008646362562521289",
            "extra": "mean: 12.307258361443294 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9634.227737586263,
            "unit": "iter/sec",
            "range": "stddev: 0.000011356058552708439",
            "extra": "mean: 103.79659140697639 usec\nrounds: 4562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 206.28081728828312,
            "unit": "iter/sec",
            "range": "stddev: 0.004077080809011534",
            "extra": "mean: 4.847760509899825 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.077282125438487,
            "unit": "iter/sec",
            "range": "stddev: 0.04040822896793242",
            "extra": "mean: 34.3911097222234 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1643594.7387161034,
            "unit": "iter/sec",
            "range": "stddev: 3.3654018461649387e-7",
            "extra": "mean: 608.4224878823544 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1512923.3973444488,
            "unit": "iter/sec",
            "range": "stddev: 3.6344258051780365e-7",
            "extra": "mean: 660.9719974952103 nsec\nrounds: 112347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 84.85987971756474,
            "unit": "iter/sec",
            "range": "stddev: 0.000997481329039959",
            "extra": "mean: 11.784131716050675 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10526.766116952764,
            "unit": "iter/sec",
            "range": "stddev: 0.000026913155347468645",
            "extra": "mean: 94.9959359683651 usec\nrounds: 4654"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1833.178158660609,
            "unit": "iter/sec",
            "range": "stddev: 0.00010257299864352158",
            "extra": "mean: 545.5007170337655 usec\nrounds: 1092"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5728081.296520251,
            "unit": "iter/sec",
            "range": "stddev: 3.165342731504531e-8",
            "extra": "mean: 174.57852782349167 nsec\nrounds: 52351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 97.11587179276263,
            "unit": "iter/sec",
            "range": "stddev: 0.0008241519022105696",
            "extra": "mean: 10.296978048386555 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 162.96153235476896,
            "unit": "iter/sec",
            "range": "stddev: 0.00016021871096009082",
            "extra": "mean: 6.136417506328975 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 233.69736352077916,
            "unit": "iter/sec",
            "range": "stddev: 0.0003891565921237763",
            "extra": "mean: 4.279038432160511 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 67.4894595846685,
            "unit": "iter/sec",
            "range": "stddev: 0.02325645176000551",
            "extra": "mean: 14.817128573173061 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.338745553602538,
            "unit": "iter/sec",
            "range": "stddev: 0.0006641052114219511",
            "extra": "mean: 136.26307012498984 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.09345617247449,
            "unit": "iter/sec",
            "range": "stddev: 0.0007042582854535159",
            "extra": "mean: 27.705853250003187 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 83.972860229963,
            "unit": "iter/sec",
            "range": "stddev: 0.000801607891169103",
            "extra": "mean: 11.908609487177886 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.2323623189762,
            "unit": "iter/sec",
            "range": "stddev: 0.0008339326921677951",
            "extra": "mean: 11.082498277779173 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 246.596845903016,
            "unit": "iter/sec",
            "range": "stddev: 0.0003249143270813039",
            "extra": "mean: 4.055201907948529 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.823851194438337,
            "unit": "iter/sec",
            "range": "stddev: 0.0009179501554232129",
            "extra": "mean: 45.82142679999777 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143429.2116187274,
            "unit": "iter/sec",
            "range": "stddev: 0.000001202864761990078",
            "extra": "mean: 6.972080434062925 usec\nrounds: 36763"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 106.6874941456772,
            "unit": "iter/sec",
            "range": "stddev: 0.000264280151296807",
            "extra": "mean: 9.373169817209718 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.29066555996853,
            "unit": "iter/sec",
            "range": "stddev: 0.0007587511089084348",
            "extra": "mean: 11.455978638552155 msec\nrounds: 83"
          }
        ]
      }
    ]
  }
}