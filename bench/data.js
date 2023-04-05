window.BENCHMARK_DATA = {
  "lastUpdate": 1680726023306,
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
          "id": "3a029653e01ea853ba16200210d7e462618d151b",
          "message": "fix(sql): ensure that set operations resolve to a single relation",
          "timestamp": "2023-04-05T16:13:37-04:00",
          "tree_id": "322d4cb426b704f9da101cc6c24d6b4b5356e4c9",
          "url": "https://github.com/ibis-project/ibis/commit/3a029653e01ea853ba16200210d7e462618d151b"
        },
        "date": 1680725927522,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 212.6994573667988,
            "unit": "iter/sec",
            "range": "stddev: 0.000755021586289696",
            "extra": "mean: 4.701469446043328 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 451307.2045006005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016663194500557683",
            "extra": "mean: 2.2157855891234046 usec\nrounds: 1707"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1650.0378168005998,
            "unit": "iter/sec",
            "range": "stddev: 0.00016272478785792747",
            "extra": "mean: 606.0467159104184 usec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 217.48197773399244,
            "unit": "iter/sec",
            "range": "stddev: 0.000558829674365766",
            "extra": "mean: 4.598082151078857 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2115790.635944967,
            "unit": "iter/sec",
            "range": "stddev: 0.000001636858463585054",
            "extra": "mean: 472.6365562881463 nsec\nrounds: 99991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1414.304400849717,
            "unit": "iter/sec",
            "range": "stddev: 0.00011416668865515653",
            "extra": "mean: 707.0613648654405 usec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.486167644094664,
            "unit": "iter/sec",
            "range": "stddev: 0.0025661783890305098",
            "extra": "mean: 29.86307691666686 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 170.36883051027692,
            "unit": "iter/sec",
            "range": "stddev: 0.007100939094195701",
            "extra": "mean: 5.869618268816363 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 206.29999389718503,
            "unit": "iter/sec",
            "range": "stddev: 0.0006028461343884102",
            "extra": "mean: 4.847309886486841 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.513338409780672,
            "unit": "iter/sec",
            "range": "stddev: 0.06866921042316156",
            "extra": "mean: 1.9480326836000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 82.36634374982047,
            "unit": "iter/sec",
            "range": "stddev: 0.0014163354305943342",
            "extra": "mean: 12.140881268657498 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.52668924839612,
            "unit": "iter/sec",
            "range": "stddev: 0.0010858410347568794",
            "extra": "mean: 25.95603254545498 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 48.032312705675615,
            "unit": "iter/sec",
            "range": "stddev: 0.0006003735761718873",
            "extra": "mean: 20.819318156251043 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 708120.2247980506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033778530773638327",
            "extra": "mean: 1.412189575979405 usec\nrounds: 22371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1700682.9450010918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023911260470583606",
            "extra": "mean: 587.999075864995 nsec\nrounds: 166639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1892341189684683,
            "unit": "iter/sec",
            "range": "stddev: 0.019737007823116604",
            "extra": "mean: 840.8773209999993 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.232120671728547,
            "unit": "iter/sec",
            "range": "stddev: 0.0027773919002654014",
            "extra": "mean: 81.75197309091686 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 81.13646306491727,
            "unit": "iter/sec",
            "range": "stddev: 0.0012820756302438993",
            "extra": "mean: 12.324914868422354 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 79.75116135879259,
            "unit": "iter/sec",
            "range": "stddev: 0.0013339479139053746",
            "extra": "mean: 12.53900235384785 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1731.1711275877703,
            "unit": "iter/sec",
            "range": "stddev: 0.00015793187233403678",
            "extra": "mean: 577.6436448506446 usec\nrounds: 1039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6425676056484692,
            "unit": "iter/sec",
            "range": "stddev: 0.033741008912551516",
            "extra": "mean: 1.5562564797999983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 88.15426090609009,
            "unit": "iter/sec",
            "range": "stddev: 0.0007590769778055866",
            "extra": "mean: 11.343751166665564 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.585339269232442,
            "unit": "iter/sec",
            "range": "stddev: 0.003657852717893381",
            "extra": "mean: 31.660258307692416 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 135.12134266168087,
            "unit": "iter/sec",
            "range": "stddev: 0.004575518234725704",
            "extra": "mean: 7.4007553529409265 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 79.16967763344329,
            "unit": "iter/sec",
            "range": "stddev: 0.0014196532065785157",
            "extra": "mean: 12.631098545455927 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 146.5725733284355,
            "unit": "iter/sec",
            "range": "stddev: 0.00012109767760418588",
            "extra": "mean: 6.822558799996159 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1730192.8701608733,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014477064406003337",
            "extra": "mean: 577.9702466968437 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.35808785047251,
            "unit": "iter/sec",
            "range": "stddev: 0.0019119272973363703",
            "extra": "mean: 44.72654399999892 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9629580.84656015,
            "unit": "iter/sec",
            "range": "stddev: 1.069801243642014e-7",
            "extra": "mean: 103.84667992655454 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 66.94673785938029,
            "unit": "iter/sec",
            "range": "stddev: 0.018218659119606084",
            "extra": "mean: 14.937247608695609 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8990638032484322,
            "unit": "iter/sec",
            "range": "stddev: 0.0062322933214108865",
            "extra": "mean: 526.575251600002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6282.348522177415,
            "unit": "iter/sec",
            "range": "stddev: 0.000056944731896837856",
            "extra": "mean: 159.17614192684226 usec\nrounds: 1536"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9522.687288646857,
            "unit": "iter/sec",
            "range": "stddev: 0.00009231711726623438",
            "extra": "mean: 105.01237410076675 usec\nrounds: 4587"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1629.6230038384397,
            "unit": "iter/sec",
            "range": "stddev: 0.00014115610013172857",
            "extra": "mean: 613.6388585854423 usec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 74.05725840612213,
            "unit": "iter/sec",
            "range": "stddev: 0.0011761630987919887",
            "extra": "mean: 13.503065351354305 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5309744092616531,
            "unit": "iter/sec",
            "range": "stddev: 0.02455738998821849",
            "extra": "mean: 1.8833299356000055 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 182.85003764338973,
            "unit": "iter/sec",
            "range": "stddev: 0.0008294402148242161",
            "extra": "mean: 5.468962505494739 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 77.22481208501259,
            "unit": "iter/sec",
            "range": "stddev: 0.001068768247189801",
            "extra": "mean: 12.949205999998478 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 76.08972585695051,
            "unit": "iter/sec",
            "range": "stddev: 0.001117228492927892",
            "extra": "mean: 13.142378799997394 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1585.9292345888578,
            "unit": "iter/sec",
            "range": "stddev: 0.00021455464071198923",
            "extra": "mean: 630.545158125699 usec\nrounds: 1366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.81474349294574,
            "unit": "iter/sec",
            "range": "stddev: 0.0010101200122063707",
            "extra": "mean: 11.259391860760447 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10827395392424997,
            "unit": "iter/sec",
            "range": "stddev: 0.1641818354165468",
            "extra": "mean: 9.235831552799988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 67.31239407619067,
            "unit": "iter/sec",
            "range": "stddev: 0.0012229502732039551",
            "extra": "mean: 14.856105086206016 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3892.8580294726,
            "unit": "iter/sec",
            "range": "stddev: 0.00008169752669377394",
            "extra": "mean: 256.88067543924245 usec\nrounds: 1368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.23996816303206,
            "unit": "iter/sec",
            "range": "stddev: 0.0010770528580125688",
            "extra": "mean: 12.619894015385679 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 131.4116237370294,
            "unit": "iter/sec",
            "range": "stddev: 0.0007945528942017114",
            "extra": "mean: 7.609676918695725 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 58.09309217289844,
            "unit": "iter/sec",
            "range": "stddev: 0.0012551521202592605",
            "extra": "mean: 17.213750595746728 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 186.34673654840032,
            "unit": "iter/sec",
            "range": "stddev: 0.001150650117660127",
            "extra": "mean: 5.366340288660045 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 74.1267657066149,
            "unit": "iter/sec",
            "range": "stddev: 0.0013797006684608676",
            "extra": "mean: 13.490403776118917 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 599.985152573895,
            "unit": "iter/sec",
            "range": "stddev: 0.0002885402451354655",
            "extra": "mean: 1.666707910537567 msec\nrounds: 503"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 261.6323861498492,
            "unit": "iter/sec",
            "range": "stddev: 0.0004778243889699443",
            "extra": "mean: 3.822156785388384 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.347630570334225,
            "unit": "iter/sec",
            "range": "stddev: 0.0036317739619684685",
            "extra": "mean: 23.069311675004656 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1806.6002023458038,
            "unit": "iter/sec",
            "range": "stddev: 0.00016606374355346165",
            "extra": "mean: 553.5258983706173 usec\nrounds: 1289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.91236131208044,
            "unit": "iter/sec",
            "range": "stddev: 0.0010921531613253786",
            "extra": "mean: 11.505843183908576 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 76.16705384785399,
            "unit": "iter/sec",
            "range": "stddev: 0.001410540246542197",
            "extra": "mean: 13.129036105263182 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 75.8459415717909,
            "unit": "iter/sec",
            "range": "stddev: 0.001772967824884375",
            "extra": "mean: 13.184621078946778 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 64.13897028277047,
            "unit": "iter/sec",
            "range": "stddev: 0.022961267812088317",
            "extra": "mean: 15.59114522093642 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1622.4832253407187,
            "unit": "iter/sec",
            "range": "stddev: 0.00018547132929525059",
            "extra": "mean: 616.3391919136801 usec\nrounds: 1756"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 184.88835136676582,
            "unit": "iter/sec",
            "range": "stddev: 0.0009168903046779452",
            "extra": "mean: 5.408669570622569 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 874.7896990336537,
            "unit": "iter/sec",
            "range": "stddev: 0.0005265727413509482",
            "extra": "mean: 1.1431318877035945 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 512.5611090976956,
            "unit": "iter/sec",
            "range": "stddev: 0.0003622217867786801",
            "extra": "mean: 1.9509868818576268 msec\nrounds: 474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 95.81848230338528,
            "unit": "iter/sec",
            "range": "stddev: 0.0024089140862635972",
            "extra": "mean: 10.436399909087996 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 71.43032583426253,
            "unit": "iter/sec",
            "range": "stddev: 0.0013704801798450521",
            "extra": "mean: 13.999656144930201 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1577.1918880026478,
            "unit": "iter/sec",
            "range": "stddev: 0.00021471643219916114",
            "extra": "mean: 634.0382597747175 usec\nrounds: 1509"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 407.49621513610606,
            "unit": "iter/sec",
            "range": "stddev: 0.0003920228800473326",
            "extra": "mean: 2.4540105229345364 msec\nrounds: 327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 132758.1623172301,
            "unit": "iter/sec",
            "range": "stddev: 0.000008880970528285808",
            "extra": "mean: 7.532493539722751 usec\nrounds: 34364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 154.6944143494261,
            "unit": "iter/sec",
            "range": "stddev: 0.000860315592150747",
            "extra": "mean: 6.464357515463905 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.070927238145124,
            "unit": "iter/sec",
            "range": "stddev: 0.0026379578530415057",
            "extra": "mean: 27.723157583332007 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 65148.0809749078,
            "unit": "iter/sec",
            "range": "stddev: 0.000012134599717173731",
            "extra": "mean: 15.349646298640112 usec\nrounds: 13387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8469.214745153464,
            "unit": "iter/sec",
            "range": "stddev: 0.00015206547092531177",
            "extra": "mean: 118.07470114891741 usec\nrounds: 3480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.618759078501431,
            "unit": "iter/sec",
            "range": "stddev: 0.0047538073978244215",
            "extra": "mean: 131.2549707499997 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 86.28537796719648,
            "unit": "iter/sec",
            "range": "stddev: 0.0008435357417637493",
            "extra": "mean: 11.589449146067075 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 197.26375824792714,
            "unit": "iter/sec",
            "range": "stddev: 0.0009595268933796617",
            "extra": "mean: 5.069354902704273 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.220380743117673,
            "unit": "iter/sec",
            "range": "stddev: 0.004564967875077179",
            "extra": "mean: 236.94544659998655 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 2584319.5235361317,
            "unit": "iter/sec",
            "range": "stddev: 0.000001698316276657678",
            "extra": "mean: 386.94905598658215 nsec\nrounds: 18903"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6342642048932875,
            "unit": "iter/sec",
            "range": "stddev: 0.01461991937526805",
            "extra": "mean: 1.5766300419999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5620873.071966936,
            "unit": "iter/sec",
            "range": "stddev: 2.5617545171757e-7",
            "extra": "mean: 177.90830484806008 nsec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 76.69103583546661,
            "unit": "iter/sec",
            "range": "stddev: 0.0016278432374660404",
            "extra": "mean: 13.039333594938082 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10376.460718034403,
            "unit": "iter/sec",
            "range": "stddev: 0.00010214581565854306",
            "extra": "mean: 96.3719737561372 usec\nrounds: 6211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 70.57517025482825,
            "unit": "iter/sec",
            "range": "stddev: 0.0012836101843054404",
            "extra": "mean: 14.169289232874178 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4679014.931768616,
            "unit": "iter/sec",
            "range": "stddev: 4.6473006338443265e-7",
            "extra": "mean: 213.720198499459 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 42.03225400728462,
            "unit": "iter/sec",
            "range": "stddev: 0.00180757042769885",
            "extra": "mean: 23.79125325581373 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 195.42295773229162,
            "unit": "iter/sec",
            "range": "stddev: 0.0008037351222500182",
            "extra": "mean: 5.117106053475519 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 122.75576285678285,
            "unit": "iter/sec",
            "range": "stddev: 0.000860020845166598",
            "extra": "mean: 8.146257061403167 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1618.1497108773372,
            "unit": "iter/sec",
            "range": "stddev: 0.0002522070205637007",
            "extra": "mean: 617.9897899915667 usec\nrounds: 1219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 80.18394066071922,
            "unit": "iter/sec",
            "range": "stddev: 0.0014423521689377252",
            "extra": "mean: 12.471325202527536 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 193.52107387733165,
            "unit": "iter/sec",
            "range": "stddev: 0.0008884473804717189",
            "extra": "mean: 5.167395880791132 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1495931.3689558336,
            "unit": "iter/sec",
            "range": "stddev: 0.000005235747756383289",
            "extra": "mean: 668.4798652882077 nsec\nrounds: 119048"
          }
        ]
      }
    ]
  }
}