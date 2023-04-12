window.BENCHMARK_DATA = {
  "lastUpdate": 1681306132086,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "7bb681e144764f1c7ed6248c209b15fdf04b0fc7",
          "message": "test(ir): fix maximum console width",
          "timestamp": "2023-04-12T09:14:15-04:00",
          "tree_id": "74583ca85b74c4da811439bd429a8f767b38b799",
          "url": "https://github.com/ibis-project/ibis/commit/7bb681e144764f1c7ed6248c209b15fdf04b0fc7"
        },
        "date": 1681306037462,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 170.6073069201819,
            "unit": "iter/sec",
            "range": "stddev: 0.006224583431214968",
            "extra": "mean: 5.861413664233308 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 49.07551819259807,
            "unit": "iter/sec",
            "range": "stddev: 0.02998431371727",
            "extra": "mean: 20.37675885714493 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 66.64085152796669,
            "unit": "iter/sec",
            "range": "stddev: 0.013543534882519432",
            "extra": "mean: 15.00581065625095 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.13577561268068,
            "unit": "iter/sec",
            "range": "stddev: 0.0009932189702625976",
            "extra": "mean: 18.819712114286958 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 69.8294046498881,
            "unit": "iter/sec",
            "range": "stddev: 0.0015540596729611861",
            "extra": "mean: 14.320614718309823 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 138.3566923093702,
            "unit": "iter/sec",
            "range": "stddev: 0.0003337212965869295",
            "extra": "mean: 7.227695193550642 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5416855654440786,
            "unit": "iter/sec",
            "range": "stddev: 0.013449171925018695",
            "extra": "mean: 1.8460894359999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1543.883963353665,
            "unit": "iter/sec",
            "range": "stddev: 0.00017593260095616583",
            "extra": "mean: 647.7170718372992 usec\nrounds: 1044"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 70.08724998213818,
            "unit": "iter/sec",
            "range": "stddev: 0.0021435322608210363",
            "extra": "mean: 14.267930333332401 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5017417.028836747,
            "unit": "iter/sec",
            "range": "stddev: 1.7600857720612348e-7",
            "extra": "mean: 199.30573724528085 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2050231356633303,
            "unit": "iter/sec",
            "range": "stddev: 0.01834281289055029",
            "extra": "mean: 829.8595856000134 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.42136947159194,
            "unit": "iter/sec",
            "range": "stddev: 0.00045803193214725133",
            "extra": "mean: 15.522799471702825 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.3706069407051515,
            "unit": "iter/sec",
            "range": "stddev: 0.004859321961892965",
            "extra": "mean: 228.80117419999806 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1546680.1009252644,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016505946384178318",
            "extra": "mean: 646.5461082752496 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 580.6755049979171,
            "unit": "iter/sec",
            "range": "stddev: 0.00012490067466781887",
            "extra": "mean: 1.72213222599012 msec\nrounds: 531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 233.44186041468842,
            "unit": "iter/sec",
            "range": "stddev: 0.0002957043214487941",
            "extra": "mean: 4.283721857868979 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.505534701892927,
            "unit": "iter/sec",
            "range": "stddev: 0.03224138448179568",
            "extra": "mean: 36.356319222224755 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4309363.589939027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012237002197292124",
            "extra": "mean: 232.05282616083994 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 216.32983705639515,
            "unit": "iter/sec",
            "range": "stddev: 0.00035331900508126033",
            "extra": "mean: 4.622570855722087 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.8630852476437,
            "unit": "iter/sec",
            "range": "stddev: 0.0006145529249210358",
            "extra": "mean: 30.429279310338046 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.86319561693196,
            "unit": "iter/sec",
            "range": "stddev: 0.0014887946575920202",
            "extra": "mean: 50.34436649999918 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2058274.1838275706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010630732424842214",
            "extra": "mean: 485.8439210175499 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.081312311160493,
            "unit": "iter/sec",
            "range": "stddev: 0.003999562319556765",
            "extra": "mean: 123.74227866666843 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.66015791735134,
            "unit": "iter/sec",
            "range": "stddev: 0.0017176113955411458",
            "extra": "mean: 24.594100249995815 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 134.31818092841687,
            "unit": "iter/sec",
            "range": "stddev: 0.003708991509157259",
            "extra": "mean: 7.4450085095549134 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 561762.215262643,
            "unit": "iter/sec",
            "range": "stddev: 0.000001755207652630963",
            "extra": "mean: 1.7801126042848323 usec\nrounds: 17637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 184.07472864712986,
            "unit": "iter/sec",
            "range": "stddev: 0.0007260633299013361",
            "extra": "mean: 5.432576255032781 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1561.5943279005219,
            "unit": "iter/sec",
            "range": "stddev: 0.00013625650935985943",
            "extra": "mean: 640.3711784381576 usec\nrounds: 1076"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 118.34919480660984,
            "unit": "iter/sec",
            "range": "stddev: 0.00032716225358151346",
            "extra": "mean: 8.449571639537252 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 195.5742904860798,
            "unit": "iter/sec",
            "range": "stddev: 0.0006093359718672737",
            "extra": "mean: 5.113146505681307 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 84.6346442775895,
            "unit": "iter/sec",
            "range": "stddev: 0.00039839993596836316",
            "extra": "mean: 11.81549244444324 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.7093007523004,
            "unit": "iter/sec",
            "range": "stddev: 0.0011441286503105332",
            "extra": "mean: 85.40219618182928 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.5008179001306943,
            "unit": "iter/sec",
            "range": "stddev: 0.035611791678956325",
            "extra": "mean: 666.3033536000057 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 70.98274920853441,
            "unit": "iter/sec",
            "range": "stddev: 0.0015639001001524896",
            "extra": "mean: 14.08792997101566 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 74.72406556864604,
            "unit": "iter/sec",
            "range": "stddev: 0.0013457660856419221",
            "extra": "mean: 13.382569489361357 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09409376996545113,
            "unit": "iter/sec",
            "range": "stddev: 0.10122439251610012",
            "extra": "mean: 10.627696184000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1576.6030957375751,
            "unit": "iter/sec",
            "range": "stddev: 0.00016186381785396418",
            "extra": "mean: 634.2750453196177 usec\nrounds: 1015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 510.4581302558192,
            "unit": "iter/sec",
            "range": "stddev: 0.00029040968488399646",
            "extra": "mean: 1.9590245325289344 msec\nrounds: 415"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1499.5769774389437,
            "unit": "iter/sec",
            "range": "stddev: 0.00044391153710755387",
            "extra": "mean: 666.8547297304153 usec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.14079444125454,
            "unit": "iter/sec",
            "range": "stddev: 0.0011523519551156249",
            "extra": "mean: 13.487851155848483 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 91.8274813416609,
            "unit": "iter/sec",
            "range": "stddev: 0.0011066265719886388",
            "extra": "mean: 10.889986149999231 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 72.86457241521228,
            "unit": "iter/sec",
            "range": "stddev: 0.0011281324760664113",
            "extra": "mean: 13.724090691174156 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 55.219410575026075,
            "unit": "iter/sec",
            "range": "stddev: 0.00044889918976904737",
            "extra": "mean: 18.109573962969232 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 192.1669839736165,
            "unit": "iter/sec",
            "range": "stddev: 0.000633796925926965",
            "extra": "mean: 5.203807539266447 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 372162.2627043899,
            "unit": "iter/sec",
            "range": "stddev: 0.000003319626908680349",
            "extra": "mean: 2.6870000003044483 usec\nrounds: 1522"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 61.32391093727154,
            "unit": "iter/sec",
            "range": "stddev: 0.026106673483645284",
            "extra": "mean: 16.306852983054256 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1592.1415122821459,
            "unit": "iter/sec",
            "range": "stddev: 0.00016349462803139935",
            "extra": "mean: 628.0848732890701 usec\nrounds: 1681"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9449547.75254276,
            "unit": "iter/sec",
            "range": "stddev: 2.717802602063448e-7",
            "extra": "mean: 105.8251702819726 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.4615845434265793,
            "unit": "iter/sec",
            "range": "stddev: 0.0561183556492583",
            "extra": "mean: 2.166450359400005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 72.85787593641153,
            "unit": "iter/sec",
            "range": "stddev: 0.001107584199946376",
            "extra": "mean: 13.725352093338188 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3127.326863635112,
            "unit": "iter/sec",
            "range": "stddev: 0.00006831681975399778",
            "extra": "mean: 319.76190644735794 usec\nrounds: 791"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5463.776471324877,
            "unit": "iter/sec",
            "range": "stddev: 0.0001727178031219933",
            "extra": "mean: 183.0235927930478 usec\nrounds: 1665"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1176709.7553493246,
            "unit": "iter/sec",
            "range": "stddev: 0.000002874491830363737",
            "extra": "mean: 849.8272368814811 nsec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8291.83146118557,
            "unit": "iter/sec",
            "range": "stddev: 0.00009475131809469443",
            "extra": "mean: 120.60061817235966 usec\nrounds: 3973"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1528.770250740304,
            "unit": "iter/sec",
            "range": "stddev: 0.00013081157550538276",
            "extra": "mean: 654.1205256419347 usec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59968.86793469281,
            "unit": "iter/sec",
            "range": "stddev: 0.000006527060347192131",
            "extra": "mean: 16.675318951977186 usec\nrounds: 3245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 195.49759258229545,
            "unit": "iter/sec",
            "range": "stddev: 0.0005535186307546663",
            "extra": "mean: 5.115152502857785 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.87413672098924,
            "unit": "iter/sec",
            "range": "stddev: 0.03564122228814081",
            "extra": "mean: 35.87555051514831 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 121.4123063580111,
            "unit": "iter/sec",
            "range": "stddev: 0.0004103778134971306",
            "extra": "mean: 8.236397363635268 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1537.3294924976,
            "unit": "iter/sec",
            "range": "stddev: 0.0001413294168511439",
            "extra": "mean: 650.478641618567 usec\nrounds: 865"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 73.45608716260287,
            "unit": "iter/sec",
            "range": "stddev: 0.00127789166100044",
            "extra": "mean: 13.613575656247434 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 96.17735279725022,
            "unit": "iter/sec",
            "range": "stddev: 0.0008019436324912151",
            "extra": "mean: 10.397458142854923 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.39336063391383,
            "unit": "iter/sec",
            "range": "stddev: 0.0005890125237798015",
            "extra": "mean: 11.44251683132941 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 388.3982015033562,
            "unit": "iter/sec",
            "range": "stddev: 0.00032216339222274965",
            "extra": "mean: 2.5746772156239217 msec\nrounds: 320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 900.2474495952613,
            "unit": "iter/sec",
            "range": "stddev: 0.00018153168222973296",
            "extra": "mean: 1.1108057017540964 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4349978.257432157,
            "unit": "iter/sec",
            "range": "stddev: 3.2906803822138445e-7",
            "extra": "mean: 229.88620650961064 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1361.799623846902,
            "unit": "iter/sec",
            "range": "stddev: 0.00013545088729737022",
            "extra": "mean: 734.3224234231564 usec\nrounds: 777"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1592745.159979903,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013365926289314726",
            "extra": "mean: 627.8468301938635 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 73.82097659099863,
            "unit": "iter/sec",
            "range": "stddev: 0.001474360129612086",
            "extra": "mean: 13.546285164181032 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7461.608330305474,
            "unit": "iter/sec",
            "range": "stddev: 0.00005867876613457357",
            "extra": "mean: 134.01936361876295 usec\nrounds: 5195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 198.69934219789283,
            "unit": "iter/sec",
            "range": "stddev: 0.0005104710886491565",
            "extra": "mean: 5.03272929310485 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5165402484702366,
            "unit": "iter/sec",
            "range": "stddev: 0.06101772169858507",
            "extra": "mean: 1.9359575617999893 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 68.94554344799738,
            "unit": "iter/sec",
            "range": "stddev: 0.002699602246381179",
            "extra": "mean: 14.504200706667234 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 60.932385958862966,
            "unit": "iter/sec",
            "range": "stddev: 0.002385304965229249",
            "extra": "mean: 16.411633719302014 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 83.96004490934253,
            "unit": "iter/sec",
            "range": "stddev: 0.0005995070691949825",
            "extra": "mean: 11.910427169015561 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 71.2320889186527,
            "unit": "iter/sec",
            "range": "stddev: 0.0012741124358107382",
            "extra": "mean: 14.038616797297681 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 68.58254000662468,
            "unit": "iter/sec",
            "range": "stddev: 0.0012861934213794582",
            "extra": "mean: 14.580970607145868 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 177.17637145923172,
            "unit": "iter/sec",
            "range": "stddev: 0.0007038014242173661",
            "extra": "mean: 5.644093463275942 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1500.6078425584542,
            "unit": "iter/sec",
            "range": "stddev: 0.00017021199043848917",
            "extra": "mean: 666.3966238474768 usec\nrounds: 1518"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 117436.16286153972,
            "unit": "iter/sec",
            "range": "stddev: 0.000004971682364053408",
            "extra": "mean: 8.515264596809297 usec\nrounds: 34014"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5165102397413798,
            "unit": "iter/sec",
            "range": "stddev: 0.0524664086837754",
            "extra": "mean: 1.9360700390000147 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9483.519009535976,
            "unit": "iter/sec",
            "range": "stddev: 0.00009406017713132113",
            "extra": "mean: 105.44609010584243 usec\nrounds: 5660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 69.67918662648295,
            "unit": "iter/sec",
            "range": "stddev: 0.0011880664148043027",
            "extra": "mean: 14.35148784615592 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 199.40245806027337,
            "unit": "iter/sec",
            "range": "stddev: 0.0008839160630200924",
            "extra": "mean: 5.014983314286577 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 29.91035706083547,
            "unit": "iter/sec",
            "range": "stddev: 0.0015696392603922061",
            "extra": "mean: 33.433235115384065 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 197.13289492158958,
            "unit": "iter/sec",
            "range": "stddev: 0.0005036915264557961",
            "extra": "mean: 5.072720107913771 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 59.07902981848561,
            "unit": "iter/sec",
            "range": "stddev: 0.025813515828524963",
            "extra": "mean: 16.92647971830952 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 119.23174437947974,
            "unit": "iter/sec",
            "range": "stddev: 0.0005979603822566482",
            "extra": "mean: 8.387028179486267 msec\nrounds: 117"
          }
        ]
      }
    ]
  }
}