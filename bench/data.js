window.BENCHMARK_DATA = {
  "lastUpdate": 1683119468549,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "8d570e634d7fa8216b67dc8e981430f64c586190",
          "message": "chore(deps): update dependency mkdocs-material to >=8.2.1,<9.1.10",
          "timestamp": "2023-05-03T06:04:30-07:00",
          "tree_id": "eda49dd24fae819ae92cb8b113800efa43dcd233",
          "url": "https://github.com/ibis-project/ibis/commit/8d570e634d7fa8216b67dc8e981430f64c586190"
        },
        "date": 1683119381682,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2302.3834392867825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000843201675277927",
            "extra": "mean: 434.33251948240803 usec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1027998.011724891,
            "unit": "iter/sec",
            "range": "stddev: 1.1745331622645596e-7",
            "extra": "mean: 972.764527357487 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2292.472333281929,
            "unit": "iter/sec",
            "range": "stddev: 0.00010142042746707987",
            "extra": "mean: 436.21028070091853 usec\nrounds: 684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.3677520745842,
            "unit": "iter/sec",
            "range": "stddev: 0.00004876441771952571",
            "extra": "mean: 5.144886378149153 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 261.1445731610896,
            "unit": "iter/sec",
            "range": "stddev: 0.00406758054277451",
            "extra": "mean: 3.82929650000094 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 550.0862608777607,
            "unit": "iter/sec",
            "range": "stddev: 0.00002490937032886978",
            "extra": "mean: 1.8178967029722244 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.01614501960938,
            "unit": "iter/sec",
            "range": "stddev: 0.0001668894714060346",
            "extra": "mean: 6.492825800000901 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13301.094940178928,
            "unit": "iter/sec",
            "range": "stddev: 0.000004827545430864815",
            "extra": "mean: 75.1817804847988 usec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 116.98319740454308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000946599649656193",
            "extra": "mean: 8.548236175678035 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.73308219250035,
            "unit": "iter/sec",
            "range": "stddev: 0.00012515416512965744",
            "extra": "mean: 53.3814985555523 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.56449056722495,
            "unit": "iter/sec",
            "range": "stddev: 0.0002260534843269805",
            "extra": "mean: 17.99710552173866 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5843375.486459102,
            "unit": "iter/sec",
            "range": "stddev: 9.489731738729345e-9",
            "extra": "mean: 171.133962264797 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 230.73845818525663,
            "unit": "iter/sec",
            "range": "stddev: 0.004371485271436539",
            "extra": "mean: 4.333911251140953 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 89.27137849973377,
            "unit": "iter/sec",
            "range": "stddev: 0.011106441355770382",
            "extra": "mean: 11.201798569773203 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6462031.308133239,
            "unit": "iter/sec",
            "range": "stddev: 4.868271004624392e-9",
            "extra": "mean: 154.750101371572 nsec\nrounds: 49020"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1867901.651848917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013902552563787675",
            "extra": "mean: 535.3600919032132 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.87919055109217,
            "unit": "iter/sec",
            "range": "stddev: 0.0006218907569918932",
            "extra": "mean: 9.9128471842122 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.66850206477198,
            "unit": "iter/sec",
            "range": "stddev: 0.00040867112008656487",
            "extra": "mean: 36.14218065217262 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.772860583012,
            "unit": "iter/sec",
            "range": "stddev: 0.00023235391225561312",
            "extra": "mean: 3.5364072702671403 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.3509190096455,
            "unit": "iter/sec",
            "range": "stddev: 0.00023498692900898746",
            "extra": "mean: 3.592587384147805 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6622115363858057,
            "unit": "iter/sec",
            "range": "stddev: 0.0014411444784706176",
            "extra": "mean: 601.6081456000052 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2297.4942608603965,
            "unit": "iter/sec",
            "range": "stddev: 0.00008493347801304212",
            "extra": "mean: 435.25679999979917 usec\nrounds: 1335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.14407615765225,
            "unit": "iter/sec",
            "range": "stddev: 0.00003995847037261482",
            "extra": "mean: 7.567497757576109 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2335.0434816106517,
            "unit": "iter/sec",
            "range": "stddev: 0.0000800113350250161",
            "extra": "mean: 428.25754975244666 usec\nrounds: 1417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 228.1507541159033,
            "unit": "iter/sec",
            "range": "stddev: 0.006931133250677491",
            "extra": "mean: 4.383066818582542 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5327734630164174,
            "unit": "iter/sec",
            "range": "stddev: 0.002095701000413979",
            "extra": "mean: 394.8240987999952 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7305704.553147433,
            "unit": "iter/sec",
            "range": "stddev: 4.3993618016938034e-9",
            "extra": "mean: 136.87933760874566 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141391.6097906942,
            "unit": "iter/sec",
            "range": "stddev: 3.127486365152616e-7",
            "extra": "mean: 7.0725554471041585 usec\nrounds: 34844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 412.21840997639043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000603581865686437",
            "extra": "mean: 2.4258984455771255 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.74699792868782,
            "unit": "iter/sec",
            "range": "stddev: 0.00004857659739740193",
            "extra": "mean: 5.788812610293887 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.2586440453882,
            "unit": "iter/sec",
            "range": "stddev: 0.000034058830311704366",
            "extra": "mean: 9.87570008889078 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9793.287742230545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018618783872213947",
            "extra": "mean: 102.11075445969051 usec\nrounds: 4765"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.73086407544584,
            "unit": "iter/sec",
            "range": "stddev: 0.0005966614251212942",
            "extra": "mean: 9.73417296739174 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.01242982105043,
            "unit": "iter/sec",
            "range": "stddev: 0.0006398924447009261",
            "extra": "mean: 9.522682235846554 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.39351750858758,
            "unit": "iter/sec",
            "range": "stddev: 0.000059873596670469144",
            "extra": "mean: 9.579138857139654 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17923151898205034,
            "unit": "iter/sec",
            "range": "stddev: 0.008471229126707912",
            "extra": "mean: 5.579375802199991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1181.5693453233944,
            "unit": "iter/sec",
            "range": "stddev: 0.000015741800191822296",
            "extra": "mean: 846.3320447149049 usec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.6630516466664,
            "unit": "iter/sec",
            "range": "stddev: 0.000021162211379734668",
            "extra": "mean: 1.4584423028168603 msec\nrounds: 568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 107.44399343405156,
            "unit": "iter/sec",
            "range": "stddev: 0.00007751990703191847",
            "extra": "mean: 9.30717453846123 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.53383227960597,
            "unit": "iter/sec",
            "range": "stddev: 0.0006916683193491108",
            "extra": "mean: 10.57822343478328 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 269.5969256042848,
            "unit": "iter/sec",
            "range": "stddev: 0.00031376868254638434",
            "extra": "mean: 3.70924111155408 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6459765.982003074,
            "unit": "iter/sec",
            "range": "stddev: 8.791681719791892e-9",
            "extra": "mean: 154.80436950595467 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 274.98435456778867,
            "unit": "iter/sec",
            "range": "stddev: 0.00029625132497322913",
            "extra": "mean: 3.636570529882571 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 271.59026858131745,
            "unit": "iter/sec",
            "range": "stddev: 0.00026818878887777467",
            "extra": "mean: 3.6820170517287427 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.9591173877298,
            "unit": "iter/sec",
            "range": "stddev: 0.00007903679161609076",
            "extra": "mean: 6.174397688312921 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11959.991953379778,
            "unit": "iter/sec",
            "range": "stddev: 0.000011793799114985481",
            "extra": "mean: 83.61209638752386 usec\nrounds: 6588"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.780795654198258,
            "unit": "iter/sec",
            "range": "stddev: 0.00008859218692307518",
            "extra": "mean: 33.5786864666602 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1753.6105482887046,
            "unit": "iter/sec",
            "range": "stddev: 0.000005496924754418205",
            "extra": "mean: 570.2520442614067 usec\nrounds: 1333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.15595116192127,
            "unit": "iter/sec",
            "range": "stddev: 0.00010692460839871274",
            "extra": "mean: 16.623459203700534 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9218486927803848,
            "unit": "iter/sec",
            "range": "stddev: 0.004272278481088886",
            "extra": "mean: 1.0847767185999941 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.34350850628465,
            "unit": "iter/sec",
            "range": "stddev: 0.0006323045374588438",
            "extra": "mean: 9.583729877549303 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7954548129443133,
            "unit": "iter/sec",
            "range": "stddev: 0.001072719808507712",
            "extra": "mean: 1.2571424343999866 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8158.025961691159,
            "unit": "iter/sec",
            "range": "stddev: 0.00003562779019542277",
            "extra": "mean: 122.57867340651363 usec\nrounds: 3956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1781202.0541143222,
            "unit": "iter/sec",
            "range": "stddev: 9.47405648514225e-8",
            "extra": "mean: 561.418620470453 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.8330960693784,
            "unit": "iter/sec",
            "range": "stddev: 0.000009635622569388171",
            "extra": "mean: 1.3336301174781366 msec\nrounds: 349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2286.4287995694244,
            "unit": "iter/sec",
            "range": "stddev: 0.00008704707014029506",
            "extra": "mean: 437.3632803209608 usec\nrounds: 1245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.1199098913776,
            "unit": "iter/sec",
            "range": "stddev: 0.0006971397374372865",
            "extra": "mean: 9.792409737373202 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.04864258317417,
            "unit": "iter/sec",
            "range": "stddev: 0.00005843033108449358",
            "extra": "mean: 9.341547691490105 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2261.865579356876,
            "unit": "iter/sec",
            "range": "stddev: 0.00007932193113907804",
            "extra": "mean: 442.11292179632244 usec\nrounds: 1381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 50.201057693827,
            "unit": "iter/sec",
            "range": "stddev: 0.00014766279728107147",
            "extra": "mean: 19.919899020832094 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4755.21797434841,
            "unit": "iter/sec",
            "range": "stddev: 0.000020774166041803734",
            "extra": "mean: 210.29530200180284 usec\nrounds: 2149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.90108061905963,
            "unit": "iter/sec",
            "range": "stddev: 0.015025810994573348",
            "extra": "mean: 12.209851108695688 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3108807534096485,
            "unit": "iter/sec",
            "range": "stddev: 0.0008314428984219889",
            "extra": "mean: 762.8458937999994 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.0050951194965,
            "unit": "iter/sec",
            "range": "stddev: 0.000517512179065918",
            "extra": "mean: 21.73672279999721 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2376.092183489587,
            "unit": "iter/sec",
            "range": "stddev: 0.00007718332953960499",
            "extra": "mean: 420.859092483262 usec\nrounds: 1330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9265364245508221,
            "unit": "iter/sec",
            "range": "stddev: 0.003069524206000849",
            "extra": "mean: 1.0792883836000216 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1603543.850399753,
            "unit": "iter/sec",
            "range": "stddev: 9.119624745492161e-8",
            "extra": "mean: 623.6187427931618 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.15744203986193,
            "unit": "iter/sec",
            "range": "stddev: 0.000059714763335228",
            "extra": "mean: 5.258800230339521 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.55514471996953,
            "unit": "iter/sec",
            "range": "stddev: 0.0006669337429793569",
            "extra": "mean: 10.044684308508794 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.55078364255418,
            "unit": "iter/sec",
            "range": "stddev: 0.0007670256738107915",
            "extra": "mean: 10.57632693749492 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.304447581157117,
            "unit": "iter/sec",
            "range": "stddev: 0.0004725717449996968",
            "extra": "mean: 120.41740166666968 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.24228466053697,
            "unit": "iter/sec",
            "range": "stddev: 0.0002745895670556541",
            "extra": "mean: 14.871594637932912 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 124.7670647207603,
            "unit": "iter/sec",
            "range": "stddev: 0.00005635899844043853",
            "extra": "mean: 8.014935690264801 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.95826629193376,
            "unit": "iter/sec",
            "range": "stddev: 0.02398291117418163",
            "extra": "mean: 27.057546263155007 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 172.55395816093917,
            "unit": "iter/sec",
            "range": "stddev: 0.004368069033294181",
            "extra": "mean: 5.795288677570125 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.71835610500952,
            "unit": "iter/sec",
            "range": "stddev: 0.0007849386336966626",
            "extra": "mean: 10.129828326317261 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 433.5656217352186,
            "unit": "iter/sec",
            "range": "stddev: 0.00012796479180992155",
            "extra": "mean: 2.306455931625286 msec\nrounds: 351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.44572605856314,
            "unit": "iter/sec",
            "range": "stddev: 0.0007715752269397779",
            "extra": "mean: 10.157881302080321 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12312412.515688514,
            "unit": "iter/sec",
            "range": "stddev: 3.0034195717340132e-9",
            "extra": "mean: 81.2188511978686 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.30624060761906,
            "unit": "iter/sec",
            "range": "stddev: 0.000712799289625053",
            "extra": "mean: 10.17229418823383 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.85479389678222,
            "unit": "iter/sec",
            "range": "stddev: 0.02997354830092445",
            "extra": "mean: 27.89027327499838 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4712711.0473922845,
            "unit": "iter/sec",
            "range": "stddev: 1.2218777924708021e-8",
            "extra": "mean: 212.1920885761712 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2238.5840067458225,
            "unit": "iter/sec",
            "range": "stddev: 0.000118491870249407",
            "extra": "mean: 446.7109552228404 usec\nrounds: 1273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.28569750010354,
            "unit": "iter/sec",
            "range": "stddev: 0.0002459003449086676",
            "extra": "mean: 3.6458335564493756 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.71331755384263,
            "unit": "iter/sec",
            "range": "stddev: 0.0008024262347179166",
            "extra": "mean: 10.234019528085039 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2504545.6333136396,
            "unit": "iter/sec",
            "range": "stddev: 1.7000057751227573e-8",
            "extra": "mean: 399.2740186877395 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 97.53764012588171,
            "unit": "iter/sec",
            "range": "stddev: 0.00084809852225913",
            "extra": "mean: 10.252452270830048 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.31837023415466,
            "unit": "iter/sec",
            "range": "stddev: 0.018205932012529496",
            "extra": "mean: 11.859811773199242 msec\nrounds: 97"
          }
        ]
      }
    ]
  }
}