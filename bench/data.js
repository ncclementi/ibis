window.BENCHMARK_DATA = {
  "lastUpdate": 1677156547711,
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
          "id": "dd13e9496e133cf08afdd3f0c3f88e52fddb3f33",
          "message": "test(snowflake): reduce flakiness of concurrent cross schema tests",
          "timestamp": "2023-02-23T07:43:14-05:00",
          "tree_id": "3762abe152763c048168360d6963d2440e2b2d3d",
          "url": "https://github.com/ibis-project/ibis/commit/dd13e9496e133cf08afdd3f0c3f88e52fddb3f33"
        },
        "date": 1677156473334,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3997.6450236561677,
            "unit": "iter/sec",
            "range": "stddev: 0.000038051296306246926",
            "extra": "mean: 250.1472727274368 usec\nrounds: 528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 134.07300516461868,
            "unit": "iter/sec",
            "range": "stddev: 0.00010617233567372509",
            "extra": "mean: 7.45862300000042 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 112.6298211179574,
            "unit": "iter/sec",
            "range": "stddev: 0.0005399578281793583",
            "extra": "mean: 8.878643240964559 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.28275541989629,
            "unit": "iter/sec",
            "range": "stddev: 0.0007684480654917317",
            "extra": "mean: 13.109122690908688 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 242.4895449254563,
            "unit": "iter/sec",
            "range": "stddev: 0.0002066107702225778",
            "extra": "mean: 4.12388913636425 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9326.104814715829,
            "unit": "iter/sec",
            "range": "stddev: 0.000015407392908838233",
            "extra": "mean: 107.22590190301979 usec\nrounds: 4414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 942.5864521125376,
            "unit": "iter/sec",
            "range": "stddev: 0.00007208494223613983",
            "extra": "mean: 1.0609106440674874 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.539921668496505,
            "unit": "iter/sec",
            "range": "stddev: 0.002403348867661219",
            "extra": "mean: 649.3836799999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.77584372339489,
            "unit": "iter/sec",
            "range": "stddev: 0.020526251679279125",
            "extra": "mean: 31.470446818183223 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.03897750643515,
            "unit": "iter/sec",
            "range": "stddev: 0.0007562276040260091",
            "extra": "mean: 15.142572428571526 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 112.2250668902979,
            "unit": "iter/sec",
            "range": "stddev: 0.0006008063258934043",
            "extra": "mean: 8.910665216867447 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 106.8907043443539,
            "unit": "iter/sec",
            "range": "stddev: 0.00007268435414536895",
            "extra": "mean: 9.355350459460427 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 604057.508529438,
            "unit": "iter/sec",
            "range": "stddev: 1.9811869263808747e-7",
            "extra": "mean: 1.6554715169992231 usec\nrounds: 21978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.61804338180977,
            "unit": "iter/sec",
            "range": "stddev: 0.0004859989980338426",
            "extra": "mean: 11.81781048148141 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.15533087958177,
            "unit": "iter/sec",
            "range": "stddev: 0.011687969930917277",
            "extra": "mean: 12.795032517241276 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3532.0592808722135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000533630825071194",
            "extra": "mean: 283.1209559294424 usec\nrounds: 2496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.11857454699333,
            "unit": "iter/sec",
            "range": "stddev: 0.0004521696366626206",
            "extra": "mean: 4.522460413145773 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4002.2826708510493,
            "unit": "iter/sec",
            "range": "stddev: 0.00006085113013901638",
            "extra": "mean: 249.8574144407844 usec\nrounds: 2396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3538.0526992967434,
            "unit": "iter/sec",
            "range": "stddev: 0.00005938474952231217",
            "extra": "mean: 282.6413524588736 usec\nrounds: 1586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 111.5360700294424,
            "unit": "iter/sec",
            "range": "stddev: 0.0005806721735127238",
            "extra": "mean: 8.96570947619033 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 167.7548738942219,
            "unit": "iter/sec",
            "range": "stddev: 0.000027556712009253075",
            "extra": "mean: 5.961078666665456 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5531154.771318747,
            "unit": "iter/sec",
            "range": "stddev: 4.437350604906638e-9",
            "extra": "mean: 180.79407309039635 nsec\nrounds: 54946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.31305836001778,
            "unit": "iter/sec",
            "range": "stddev: 0.0006338150895898994",
            "extra": "mean: 12.002920306667118 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3861.3009591055543,
            "unit": "iter/sec",
            "range": "stddev: 0.000060040500803679384",
            "extra": "mean: 258.98007189567625 usec\nrounds: 306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.63732949282845,
            "unit": "iter/sec",
            "range": "stddev: 0.00034363420823529245",
            "extra": "mean: 17.65619969999861 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2014900.9419984887,
            "unit": "iter/sec",
            "range": "stddev: 3.316836348680815e-8",
            "extra": "mean: 496.30231400257077 nsec\nrounds: 102031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 431.48991823857125,
            "unit": "iter/sec",
            "range": "stddev: 0.00007281598328099525",
            "extra": "mean: 2.3175512514456917 msec\nrounds: 346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.725560654929084,
            "unit": "iter/sec",
            "range": "stddev: 0.005575800392746853",
            "extra": "mean: 211.61510199999896 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 88.5942729707198,
            "unit": "iter/sec",
            "range": "stddev: 0.0005746571229058174",
            "extra": "mean: 11.287411324324516 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57409.944438261526,
            "unit": "iter/sec",
            "range": "stddev: 0.00000234897593463432",
            "extra": "mean: 17.418585051504394 usec\nrounds: 12804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3704.219802771651,
            "unit": "iter/sec",
            "range": "stddev: 0.000049587173628923865",
            "extra": "mean: 269.96238161994563 usec\nrounds: 1926"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.13315494208672,
            "unit": "iter/sec",
            "range": "stddev: 0.00003156151473009283",
            "extra": "mean: 6.616681828571592 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.364504559323318,
            "unit": "iter/sec",
            "range": "stddev: 0.0028236201094739783",
            "extra": "mean: 80.87667364285623 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2026331.5786782152,
            "unit": "iter/sec",
            "range": "stddev: 3.250557806329608e-8",
            "extra": "mean: 493.50264809695244 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1430661.3839282233,
            "unit": "iter/sec",
            "range": "stddev: 1.707572565815594e-7",
            "extra": "mean: 698.977417880855 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.24580085606173,
            "unit": "iter/sec",
            "range": "stddev: 0.0007234797233816533",
            "extra": "mean: 11.870027821428764 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4403772.448780843,
            "unit": "iter/sec",
            "range": "stddev: 1.169629277315888e-8",
            "extra": "mean: 227.0780363048325 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 155.9270999487061,
            "unit": "iter/sec",
            "range": "stddev: 0.00005509547881169746",
            "extra": "mean: 6.413253374999989 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.325270304753104,
            "unit": "iter/sec",
            "range": "stddev: 0.0007459938218806189",
            "extra": "mean: 30.007258481482516 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 260.4282908420565,
            "unit": "iter/sec",
            "range": "stddev: 0.00016126254244330695",
            "extra": "mean: 3.839828602210026 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4011.524291638334,
            "unit": "iter/sec",
            "range": "stddev: 0.000053542965759629545",
            "extra": "mean: 249.28180095641227 usec\nrounds: 1673"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6441.91417488289,
            "unit": "iter/sec",
            "range": "stddev: 0.00001616470092426974",
            "extra": "mean: 155.23336276335587 usec\nrounds: 3749"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 112.78762995652666,
            "unit": "iter/sec",
            "range": "stddev: 0.0005207348489438018",
            "extra": "mean: 8.866220527778127 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 547.041985928866,
            "unit": "iter/sec",
            "range": "stddev: 0.00009097552703011247",
            "extra": "mean: 1.8280132525879538 msec\nrounds: 483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10946250.131092617,
            "unit": "iter/sec",
            "range": "stddev: 2.8918818051750953e-9",
            "extra": "mean: 91.35548594498037 nsec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.55146622337779,
            "unit": "iter/sec",
            "range": "stddev: 0.00024203828940990056",
            "extra": "mean: 24.06653942424245 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.174129879119102,
            "unit": "iter/sec",
            "range": "stddev: 0.007400692936994612",
            "extra": "mean: 122.33718020000026 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.529423909347795,
            "unit": "iter/sec",
            "range": "stddev: 0.07054710153001706",
            "extra": "mean: 1.8888455589999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.55490488946091,
            "unit": "iter/sec",
            "range": "stddev: 0.00012373000755069286",
            "extra": "mean: 11.166334230763981 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 253.84075600008435,
            "unit": "iter/sec",
            "range": "stddev: 0.0001935648905372087",
            "extra": "mean: 3.9394777094016677 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 258.4875842418265,
            "unit": "iter/sec",
            "range": "stddev: 0.00018617606431924294",
            "extra": "mean: 3.8686577652582965 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 248.90077368570775,
            "unit": "iter/sec",
            "range": "stddev: 0.00018020166990694362",
            "extra": "mean: 4.0176652936512 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 106.40289238810008,
            "unit": "iter/sec",
            "range": "stddev: 0.0006421133274317756",
            "extra": "mean: 9.398240757897277 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 275.9315136636696,
            "unit": "iter/sec",
            "range": "stddev: 0.00014570392375318924",
            "extra": "mean: 3.624087682927333 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 609.9640479849236,
            "unit": "iter/sec",
            "range": "stddev: 0.000035626024580193574",
            "extra": "mean: 1.639440887218843 msec\nrounds: 532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 257.78916752219004,
            "unit": "iter/sec",
            "range": "stddev: 0.00024300448714319436",
            "extra": "mean: 3.879138947581736 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1727314.130839575,
            "unit": "iter/sec",
            "range": "stddev: 7.649564384736913e-8",
            "extra": "mean: 578.9334911038688 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8530155565318841,
            "unit": "iter/sec",
            "range": "stddev: 0.003921309461247976",
            "extra": "mean: 1.172311562599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 79.56470967322397,
            "unit": "iter/sec",
            "range": "stddev: 0.0007860542943077722",
            "extra": "mean: 12.56838621176458 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 97.44086432264017,
            "unit": "iter/sec",
            "range": "stddev: 0.00004850896672087266",
            "extra": "mean: 10.262634747254108 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 111.3678434362657,
            "unit": "iter/sec",
            "range": "stddev: 0.0006609898535917637",
            "extra": "mean: 8.979252620369598 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1435.4083497910578,
            "unit": "iter/sec",
            "range": "stddev: 0.000015964866993034702",
            "extra": "mean: 696.6658652539975 usec\nrounds: 1180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.22765370478474,
            "unit": "iter/sec",
            "range": "stddev: 0.00043123090508933286",
            "extra": "mean: 15.815864442306912 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 252.9527208781728,
            "unit": "iter/sec",
            "range": "stddev: 0.00020664535789885425",
            "extra": "mean: 3.9533079404258333 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7213607199579251,
            "unit": "iter/sec",
            "range": "stddev: 0.0021644179215237172",
            "extra": "mean: 1.3862689945999933 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8558672099059123,
            "unit": "iter/sec",
            "range": "stddev: 0.005233126204107292",
            "extra": "mean: 1.1684055522000107 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 115.69982500515135,
            "unit": "iter/sec",
            "range": "stddev: 0.0004206344464906485",
            "extra": "mean: 8.643055423424162 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.386305763026975,
            "unit": "iter/sec",
            "range": "stddev: 0.001030096458378563",
            "extra": "mean: 39.39131630000361 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.82895499369012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000899131009131422",
            "extra": "mean: 15.190883709088997 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10936.566916776876,
            "unit": "iter/sec",
            "range": "stddev: 0.000001739005147306457",
            "extra": "mean: 91.4363719080787 usec\nrounds: 5781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.61856041766868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000979821523909979",
            "extra": "mean: 10.038290011493046 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.523211940863796,
            "unit": "iter/sec",
            "range": "stddev: 0.0008321464641173597",
            "extra": "mean: 23.5165678780493 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4064.624051698849,
            "unit": "iter/sec",
            "range": "stddev: 0.00005130752428633207",
            "extra": "mean: 246.02521347135175 usec\nrounds: 1930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4177177.334275552,
            "unit": "iter/sec",
            "range": "stddev: 1.1128791163128156e-8",
            "extra": "mean: 239.39610889744156 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 103.62824672415603,
            "unit": "iter/sec",
            "range": "stddev: 0.0006418170915836425",
            "extra": "mean: 9.649878595957151 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.49315343183514,
            "unit": "iter/sec",
            "range": "stddev: 0.0007380971471409936",
            "extra": "mean: 11.42946574418635 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 248.02814894304595,
            "unit": "iter/sec",
            "range": "stddev: 0.000219121348364764",
            "extra": "mean: 4.031800439834864 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13473957663856012,
            "unit": "iter/sec",
            "range": "stddev: 0.10223995330893888",
            "extra": "mean: 7.421724373400008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 390842.1310670163,
            "unit": "iter/sec",
            "range": "stddev: 4.3249617675138904e-7",
            "extra": "mean: 2.5585778003767294 usec\nrounds: 1973"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 123357.28123512716,
            "unit": "iter/sec",
            "range": "stddev: 4.005054058744727e-7",
            "extra": "mean: 8.106534044747093 usec\nrounds: 38611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.209796077277835,
            "unit": "iter/sec",
            "range": "stddev: 0.0028433588555750707",
            "extra": "mean: 452.53044400000135 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10491.156439578754,
            "unit": "iter/sec",
            "range": "stddev: 0.000001533949470293343",
            "extra": "mean: 95.31837655450617 usec\nrounds: 4905"
          }
        ]
      }
    ]
  }
}