window.BENCHMARK_DATA = {
  "lastUpdate": 1678458134664,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "066c1582cab394896625b93bf8b05d07c2a321db",
          "message": "fix(duckdb): support casting to unsigned integer types",
          "timestamp": "2023-03-10T09:10:52-05:00",
          "tree_id": "b8a763487ced63189976b095c1f3eed1aea1f67d",
          "url": "https://github.com/ibis-project/ibis/commit/066c1582cab394896625b93bf8b05d07c2a321db"
        },
        "date": 1678457799868,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.611320498235195,
            "unit": "iter/sec",
            "range": "stddev: 0.0008074330201344669",
            "extra": "mean: 22.929826214284585 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.6763331447261,
            "unit": "iter/sec",
            "range": "stddev: 0.000036567096960630054",
            "extra": "mean: 3.070533220341847 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 742047.5606182397,
            "unit": "iter/sec",
            "range": "stddev: 2.5499047745332025e-7",
            "extra": "mean: 1.347622515148283 usec\nrounds: 22989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.596829939068315,
            "unit": "iter/sec",
            "range": "stddev: 0.0008531251664228009",
            "extra": "mean: 385.0849010000161 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5341.6904678879255,
            "unit": "iter/sec",
            "range": "stddev: 0.00004987889973742031",
            "extra": "mean: 187.20665415032826 usec\nrounds: 506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.97313160951967,
            "unit": "iter/sec",
            "range": "stddev: 0.000607068339749204",
            "extra": "mean: 8.335199611649145 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.7464313721046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005917162068177432",
            "extra": "mean: 37.38816540000016 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139916.3285473954,
            "unit": "iter/sec",
            "range": "stddev: 3.867315354750059e-7",
            "extra": "mean: 7.147128647399143 usec\nrounds: 40817"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 282.0517527462849,
            "unit": "iter/sec",
            "range": "stddev: 0.00480344297525281",
            "extra": "mean: 3.5454486287115325 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7415430.4641873585,
            "unit": "iter/sec",
            "range": "stddev: 4.730021622506167e-9",
            "extra": "mean: 134.85393799183998 nsec\nrounds: 55249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 66.0397238819596,
            "unit": "iter/sec",
            "range": "stddev: 0.0002078647044459896",
            "extra": "mean: 15.142401288464121 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.20687367718693,
            "unit": "iter/sec",
            "range": "stddev: 0.0000882996266453365",
            "extra": "mean: 5.202727565713953 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2523851.4136707224,
            "unit": "iter/sec",
            "range": "stddev: 2.7293908305466094e-8",
            "extra": "mean: 396.21983868916436 nsec\nrounds: 87720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5777.338424692019,
            "unit": "iter/sec",
            "range": "stddev: 0.00005259928203583957",
            "extra": "mean: 173.0900851724483 usec\nrounds: 2583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2537406.680925232,
            "unit": "iter/sec",
            "range": "stddev: 1.7553002566209655e-8",
            "extra": "mean: 394.103163484658 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.12617464360194,
            "unit": "iter/sec",
            "range": "stddev: 0.0005434300430320523",
            "extra": "mean: 9.4227461166696 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.525564562210405,
            "unit": "iter/sec",
            "range": "stddev: 0.017391535145507755",
            "extra": "mean: 29.82798389999933 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5566.6420969977535,
            "unit": "iter/sec",
            "range": "stddev: 0.00004374223510581192",
            "extra": "mean: 179.64151144894478 usec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.63365493323543,
            "unit": "iter/sec",
            "range": "stddev: 0.00008929522617217646",
            "extra": "mean: 9.038840853657726 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 352.9748648073807,
            "unit": "iter/sec",
            "range": "stddev: 0.000044793648197709425",
            "extra": "mean: 2.8330629166632093 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.62289714878936,
            "unit": "iter/sec",
            "range": "stddev: 0.0005550323264241987",
            "extra": "mean: 8.290299964910407 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1746.3840705474847,
            "unit": "iter/sec",
            "range": "stddev: 0.00002963889025115143",
            "extra": "mean: 572.6117277779015 usec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.9912253504298,
            "unit": "iter/sec",
            "range": "stddev: 0.0005661173180634901",
            "extra": "mean: 8.850244759259938 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.2252050354829,
            "unit": "iter/sec",
            "range": "stddev: 0.0006146291810243525",
            "extra": "mean: 9.878962454553347 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.57034903902387,
            "unit": "iter/sec",
            "range": "stddev: 0.00010484486321221614",
            "extra": "mean: 10.249015298695342 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.85427618391182,
            "unit": "iter/sec",
            "range": "stddev: 0.00007817854650002784",
            "extra": "mean: 8.413664464647681 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5855.043492866714,
            "unit": "iter/sec",
            "range": "stddev: 0.00004314220240804184",
            "extra": "mean: 170.79292429139335 usec\nrounds: 2470"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.50445121230905,
            "unit": "iter/sec",
            "range": "stddev: 0.0005332710062480331",
            "extra": "mean: 15.502806104165026 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.4748900765203,
            "unit": "iter/sec",
            "range": "stddev: 0.0006519460112078321",
            "extra": "mean: 9.48092953000014 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13689.545953121786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018893738000403953",
            "extra": "mean: 73.04844173973194 usec\nrounds: 7149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6752007284428543,
            "unit": "iter/sec",
            "range": "stddev: 0.04186563051322597",
            "extra": "mean: 1.4810410561999787 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1645774.1213222982,
            "unit": "iter/sec",
            "range": "stddev: 1.557241757347257e-7",
            "extra": "mean: 607.616796888597 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 283.52805756809033,
            "unit": "iter/sec",
            "range": "stddev: 0.005782568727040141",
            "extra": "mean: 3.526987799998758 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.2426309435208,
            "unit": "iter/sec",
            "range": "stddev: 0.0000373306109409349",
            "extra": "mean: 1.452975963765986 msec\nrounds: 552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 316.87948951675656,
            "unit": "iter/sec",
            "range": "stddev: 0.00017910495930361536",
            "extra": "mean: 3.1557738291140494 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.42137500750903,
            "unit": "iter/sec",
            "range": "stddev: 0.00039523355440884093",
            "extra": "mean: 20.652036416663577 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.88407404099297,
            "unit": "iter/sec",
            "range": "stddev: 0.0001849278271411265",
            "extra": "mean: 3.3125298284672335 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 303.1121794035543,
            "unit": "iter/sec",
            "range": "stddev: 0.00021502426071723355",
            "extra": "mean: 3.299108607142541 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 752.5265715015569,
            "unit": "iter/sec",
            "range": "stddev: 0.000015042554639304781",
            "extra": "mean: 1.3288567312708255 msec\nrounds: 614"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.58229904919956,
            "unit": "iter/sec",
            "range": "stddev: 0.00022041934972404087",
            "extra": "mean: 9.471284571422498 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.30196756272791,
            "unit": "iter/sec",
            "range": "stddev: 0.0006212131743236924",
            "extra": "mean: 8.312416000000827 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.8014173228938,
            "unit": "iter/sec",
            "range": "stddev: 0.00007852008414284294",
            "extra": "mean: 1.8355312012841523 msec\nrounds: 467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.40800296655976,
            "unit": "iter/sec",
            "range": "stddev: 0.00005647060420299804",
            "extra": "mean: 6.273210763513408 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.35507559008047,
            "unit": "iter/sec",
            "range": "stddev: 0.0006362431642579304",
            "extra": "mean: 9.866304121210375 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11883.602952332865,
            "unit": "iter/sec",
            "range": "stddev: 0.000001719084133002197",
            "extra": "mean: 84.1495633951394 usec\nrounds: 5939"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8116.037994286825,
            "unit": "iter/sec",
            "range": "stddev: 0.000029329106636556583",
            "extra": "mean: 123.21282880932007 usec\nrounds: 3832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.67891497435085,
            "unit": "iter/sec",
            "range": "stddev: 0.0002693079562181207",
            "extra": "mean: 3.550141479673969 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.14020462582137,
            "unit": "iter/sec",
            "range": "stddev: 0.0006227140312217485",
            "extra": "mean: 8.761154785714963 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.28078962035733,
            "unit": "iter/sec",
            "range": "stddev: 0.0006388138780138807",
            "extra": "mean: 8.383579645832029 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.836990802328856,
            "unit": "iter/sec",
            "range": "stddev: 0.00036304761141108525",
            "extra": "mean: 17.90927458000283 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1185.1014550059979,
            "unit": "iter/sec",
            "range": "stddev: 0.000011320649036376178",
            "extra": "mean: 843.8096129035121 usec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6366786.137145567,
            "unit": "iter/sec",
            "range": "stddev: 1.0028495636113663e-8",
            "extra": "mean: 157.0651155006416 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 255.5206990647585,
            "unit": "iter/sec",
            "range": "stddev: 0.0040423323421170535",
            "extra": "mean: 3.913577270491744 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.681227522098897,
            "unit": "iter/sec",
            "range": "stddev: 0.0001263826653407476",
            "extra": "mean: 63.77051787500321 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.520101490020918,
            "unit": "iter/sec",
            "range": "stddev: 0.00045232281830343387",
            "extra": "mean: 95.05611718181358 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1854922.1127340582,
            "unit": "iter/sec",
            "range": "stddev: 8.958272035497889e-8",
            "extra": "mean: 539.1061938045756 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7365805950719957,
            "unit": "iter/sec",
            "range": "stddev: 0.002416535694998818",
            "extra": "mean: 575.8442786000046 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.52146280544964,
            "unit": "iter/sec",
            "range": "stddev: 0.0005162973321417572",
            "extra": "mean: 28.151993781252216 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 87.88057845779866,
            "unit": "iter/sec",
            "range": "stddev: 0.018518605670872598",
            "extra": "mean: 11.379078489796381 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.57680760003925,
            "unit": "iter/sec",
            "range": "stddev: 0.00008038488055977911",
            "extra": "mean: 6.554076046874524 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5596.236772722161,
            "unit": "iter/sec",
            "range": "stddev: 0.00004300685784554092",
            "extra": "mean: 178.6915101366544 usec\nrounds: 2417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 178.16508580588382,
            "unit": "iter/sec",
            "range": "stddev: 0.00393571196002685",
            "extra": "mean: 5.612771971998654 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.35164413826102,
            "unit": "iter/sec",
            "range": "stddev: 0.00006666970809155046",
            "extra": "mean: 10.378650088887298 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5498.472397298438,
            "unit": "iter/sec",
            "range": "stddev: 0.00004303973200915142",
            "extra": "mean: 181.8686951109056 usec\nrounds: 2250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.30821244620108,
            "unit": "iter/sec",
            "range": "stddev: 0.000059326323181493524",
            "extra": "mean: 7.178327698276843 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 103.42873231267495,
            "unit": "iter/sec",
            "range": "stddev: 0.014862299277379878",
            "extra": "mean: 9.668493247861768 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11505.765356617112,
            "unit": "iter/sec",
            "range": "stddev: 0.000011607179932761096",
            "extra": "mean: 86.91294920462525 usec\nrounds: 5532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.49608844873465,
            "unit": "iter/sec",
            "range": "stddev: 0.000656069518439503",
            "extra": "mean: 10.811267987340278 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 295.0807457724316,
            "unit": "iter/sec",
            "range": "stddev: 0.00011523489018214585",
            "extra": "mean: 3.388902916665417 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13023215.051670957,
            "unit": "iter/sec",
            "range": "stddev: 4.045804318776057e-9",
            "extra": "mean: 76.78595462269716 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.87418754688267,
            "unit": "iter/sec",
            "range": "stddev: 0.0006790400162162203",
            "extra": "mean: 9.72061139772571 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8380407533657187,
            "unit": "iter/sec",
            "range": "stddev: 0.0034341853641201544",
            "extra": "mean: 1.193259392199991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.30254291100294,
            "unit": "iter/sec",
            "range": "stddev: 0.00011362834543014303",
            "extra": "mean: 6.1236033571441855 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5872.90850233852,
            "unit": "iter/sec",
            "range": "stddev: 0.000041547728964250454",
            "extra": "mean: 170.27338321409442 usec\nrounds: 2526"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.609345879255975,
            "unit": "iter/sec",
            "range": "stddev: 0.00018281351179786205",
            "extra": "mean: 178.2739060000059 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.29485930771254,
            "unit": "iter/sec",
            "range": "stddev: 0.00012565265965877026",
            "extra": "mean: 13.28111917857809 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5788855.9290311,
            "unit": "iter/sec",
            "range": "stddev: 9.656145061347032e-9",
            "extra": "mean: 172.7457052415532 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9220684596964333,
            "unit": "iter/sec",
            "range": "stddev: 0.0026965392022350056",
            "extra": "mean: 1.0845181715999956 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70879.86562481878,
            "unit": "iter/sec",
            "range": "stddev: 6.513828482022776e-7",
            "extra": "mean: 14.108378891308837 usec\nrounds: 14165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.44943037261766,
            "unit": "iter/sec",
            "range": "stddev: 0.00024687216270464433",
            "extra": "mean: 3.284617740214174 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18004182679507966,
            "unit": "iter/sec",
            "range": "stddev: 0.12364265577941418",
            "extra": "mean: 5.554264905000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5393.505341195411,
            "unit": "iter/sec",
            "range": "stddev: 0.00001836126316178134",
            "extra": "mean: 185.40817830697853 usec\nrounds: 2434"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.87635248125439,
            "unit": "iter/sec",
            "range": "stddev: 0.000606489370445553",
            "extra": "mean: 9.913126073683399 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 496062.59492770047,
            "unit": "iter/sec",
            "range": "stddev: 2.5387971903526355e-7",
            "extra": "mean: 2.0158746299864574 usec\nrounds: 2034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.31987796957904,
            "unit": "iter/sec",
            "range": "stddev: 0.0006797533327352988",
            "extra": "mean: 8.451665241381567 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 305.7244701924747,
            "unit": "iter/sec",
            "range": "stddev: 0.00021342930701561492",
            "extra": "mean: 3.2709190709217055 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9196326240852121,
            "unit": "iter/sec",
            "range": "stddev: 0.0027707134580632654",
            "extra": "mean: 1.0873907403999852 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5527.505883140059,
            "unit": "iter/sec",
            "range": "stddev: 0.00005932344208535612",
            "extra": "mean: 180.91342119602072 usec\nrounds: 2576"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "e449c076f16156a9868a98adcce0d159137c9583",
          "message": "depr(api): deprecate `summary` API",
          "timestamp": "2023-03-10T09:13:35-05:00",
          "tree_id": "4994b2233705a19e077601df3485fd88a2a56dc5",
          "url": "https://github.com/ibis-project/ibis/commit/e449c076f16156a9868a98adcce0d159137c9583"
        },
        "date": 1678458057150,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.31924653920316,
            "unit": "iter/sec",
            "range": "stddev: 0.0005396501000274739",
            "extra": "mean: 8.671579376475083 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.85700093313103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006739368098038356",
            "extra": "mean: 13.182698863635716 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9163162525026572,
            "unit": "iter/sec",
            "range": "stddev: 0.00565044913548706",
            "extra": "mean: 1.0913262722000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71328.86670824658,
            "unit": "iter/sec",
            "range": "stddev: 4.505667950388013e-7",
            "extra": "mean: 14.019569441503357 usec\nrounds: 13947"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.6096455156527,
            "unit": "iter/sec",
            "range": "stddev: 0.00018525218211172347",
            "extra": "mean: 3.219475037035212 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 314.29742689509425,
            "unit": "iter/sec",
            "range": "stddev: 0.0001959542325748005",
            "extra": "mean: 3.181699608166944 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5204.423081955921,
            "unit": "iter/sec",
            "range": "stddev: 0.000045886385076662466",
            "extra": "mean: 192.14425580946065 usec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17063779659928463,
            "unit": "iter/sec",
            "range": "stddev: 0.06684051098366407",
            "extra": "mean: 5.860366342800001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 670.2195624192581,
            "unit": "iter/sec",
            "range": "stddev: 0.00004114612915354456",
            "extra": "mean: 1.492048361570274 msec\nrounds: 484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12616.620470215827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014407469320442514",
            "extra": "mean: 79.26052799644003 usec\nrounds: 4697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 222.2263065674016,
            "unit": "iter/sec",
            "range": "stddev: 0.003514709965269024",
            "extra": "mean: 4.499917293530226 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5547.568348418781,
            "unit": "iter/sec",
            "range": "stddev: 0.00004920592277072376",
            "extra": "mean: 180.2591581021312 usec\nrounds: 2024"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5561.261134676128,
            "unit": "iter/sec",
            "range": "stddev: 0.00004881265285988724",
            "extra": "mean: 179.81532889450213 usec\nrounds: 3004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.53010788196826,
            "unit": "iter/sec",
            "range": "stddev: 0.0007096528068314952",
            "extra": "mean: 26.645273793109997 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13807.008078501969,
            "unit": "iter/sec",
            "range": "stddev: 0.000001970961333255706",
            "extra": "mean: 72.42698739034111 usec\nrounds: 7058"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.13629225530008,
            "unit": "iter/sec",
            "range": "stddev: 0.0005593015705125332",
            "extra": "mean: 8.25516433912684 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1800.2368012529064,
            "unit": "iter/sec",
            "range": "stddev: 0.000007299016217116591",
            "extra": "mean: 555.4824783628644 usec\nrounds: 1294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5673.616075876238,
            "unit": "iter/sec",
            "range": "stddev: 0.000046836057860979825",
            "extra": "mean: 176.25443572960816 usec\nrounds: 2435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.51118982035982,
            "unit": "iter/sec",
            "range": "stddev: 0.00033771624577770006",
            "extra": "mean: 20.613800727276878 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2682861.6002994967,
            "unit": "iter/sec",
            "range": "stddev: 1.3057779218829972e-8",
            "extra": "mean: 372.73633492275627 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.77607765274902,
            "unit": "iter/sec",
            "range": "stddev: 0.0004706457773921389",
            "extra": "mean: 9.636132166665194 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10971970.503676806,
            "unit": "iter/sec",
            "range": "stddev: 5.261834359544324e-9",
            "extra": "mean: 91.14133141950221 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.33186444531349,
            "unit": "iter/sec",
            "range": "stddev: 0.000621605183251106",
            "extra": "mean: 9.230894392155555 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.13200990957915,
            "unit": "iter/sec",
            "range": "stddev: 0.0006121501959959414",
            "extra": "mean: 9.247955354165782 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.8011018202993,
            "unit": "iter/sec",
            "range": "stddev: 0.000023518707712253547",
            "extra": "mean: 1.3213511417924015 msec\nrounds: 670"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8505543601761529,
            "unit": "iter/sec",
            "range": "stddev: 0.0017482357178738455",
            "extra": "mean: 1.175703807800005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.8936339985223,
            "unit": "iter/sec",
            "range": "stddev: 0.000050664789897848154",
            "extra": "mean: 3.4142087226281093 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5136.16436909559,
            "unit": "iter/sec",
            "range": "stddev: 0.00005052591096885111",
            "extra": "mean: 194.69781886596567 usec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.912295238964527,
            "unit": "iter/sec",
            "range": "stddev: 0.005416670814577265",
            "extra": "mean: 1.096136379200027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6123149.550457183,
            "unit": "iter/sec",
            "range": "stddev: 7.288902645034565e-9",
            "extra": "mean: 163.31464579778216 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.62120321673089,
            "unit": "iter/sec",
            "range": "stddev: 0.0006607715022762731",
            "extra": "mean: 8.359721964911103 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.98613035775779,
            "unit": "iter/sec",
            "range": "stddev: 0.00008029841947276682",
            "extra": "mean: 8.929677244899333 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.39580680152969,
            "unit": "iter/sec",
            "range": "stddev: 0.024350214752064957",
            "extra": "mean: 31.851387235294023 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5013.928945021027,
            "unit": "iter/sec",
            "range": "stddev: 0.000057351660214907525",
            "extra": "mean: 199.4443900113559 usec\nrounds: 1782"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1819736.7234333484,
            "unit": "iter/sec",
            "range": "stddev: 1.0606835787468478e-7",
            "extra": "mean: 549.5300430675884 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.46444331880772,
            "unit": "iter/sec",
            "range": "stddev: 0.0002161091752798254",
            "extra": "mean: 10.260151968743969 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5545762.539109412,
            "unit": "iter/sec",
            "range": "stddev: 9.523147571844705e-9",
            "extra": "mean: 180.31785402782108 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.43392203978949,
            "unit": "iter/sec",
            "range": "stddev: 0.0005449638209548297",
            "extra": "mean: 39.31756959998438 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.99197069479132,
            "unit": "iter/sec",
            "range": "stddev: 0.017572662226265086",
            "extra": "mean: 11.7658173098613 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.34968077565708,
            "unit": "iter/sec",
            "range": "stddev: 0.0005785108045601366",
            "extra": "mean: 8.24064796551654 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.51488461139026,
            "unit": "iter/sec",
            "range": "stddev: 0.0002143835310705909",
            "extra": "mean: 8.297730220002109 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.80462587984765,
            "unit": "iter/sec",
            "range": "stddev: 0.0004051973215285424",
            "extra": "mean: 15.430997192300293 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.21915718095704,
            "unit": "iter/sec",
            "range": "stddev: 0.00023468388934861584",
            "extra": "mean: 3.2763343206767463 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12072.50303507839,
            "unit": "iter/sec",
            "range": "stddev: 0.000013244621422713786",
            "extra": "mean: 82.83286383067012 usec\nrounds: 5618"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.89409158408046,
            "unit": "iter/sec",
            "range": "stddev: 0.00038024283746393835",
            "extra": "mean: 7.468589451327938 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7033205.374872415,
            "unit": "iter/sec",
            "range": "stddev: 4.211400127400591e-9",
            "extra": "mean: 142.1826815369923 nsec\nrounds: 66667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.10180870025798,
            "unit": "iter/sec",
            "range": "stddev: 0.00038199164309177757",
            "extra": "mean: 17.51258012244859 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.58425543092675,
            "unit": "iter/sec",
            "range": "stddev: 0.0008632151015261917",
            "extra": "mean: 23.482857452375498 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 307.73002655135383,
            "unit": "iter/sec",
            "range": "stddev: 0.00026928265429045285",
            "extra": "mean: 3.2496016433843855 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 496662.89721340337,
            "unit": "iter/sec",
            "range": "stddev: 2.4729303841136287e-7",
            "extra": "mean: 2.0134380997868773 usec\nrounds: 2294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6796718021789848,
            "unit": "iter/sec",
            "range": "stddev: 0.07748458783248202",
            "extra": "mean: 1.471298348400012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.22052830408198,
            "unit": "iter/sec",
            "range": "stddev: 0.0006338411684167708",
            "extra": "mean: 9.240391039213591 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 317.5494818115945,
            "unit": "iter/sec",
            "range": "stddev: 0.00018780205828459922",
            "extra": "mean: 3.1491155151476855 msec\nrounds: 297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5266.750048658859,
            "unit": "iter/sec",
            "range": "stddev: 0.000021832377834955933",
            "extra": "mean: 189.87041168863576 usec\nrounds: 2327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.63598994085543,
            "unit": "iter/sec",
            "range": "stddev: 0.00448073633156139",
            "extra": "mean: 177.4311186666561 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5719258507933436,
            "unit": "iter/sec",
            "range": "stddev: 0.0018966518900318567",
            "extra": "mean: 388.8136976000055 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.07127761587141,
            "unit": "iter/sec",
            "range": "stddev: 0.0006105055934540953",
            "extra": "mean: 8.259597318967323 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.2933328488539,
            "unit": "iter/sec",
            "range": "stddev: 0.00009723402447822039",
            "extra": "mean: 9.775808179772335 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 730948.2948639096,
            "unit": "iter/sec",
            "range": "stddev: 1.2711193182263808e-7",
            "extra": "mean: 1.3680858236165436 usec\nrounds: 21882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 296.2970152173485,
            "unit": "iter/sec",
            "range": "stddev: 0.000335522821866854",
            "extra": "mean: 3.3749918110597594 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.66069584456744,
            "unit": "iter/sec",
            "range": "stddev: 0.00008583747394452298",
            "extra": "mean: 6.185795469799747 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.788218598366306,
            "unit": "iter/sec",
            "range": "stddev: 0.0011625692154296858",
            "extra": "mean: 559.2157474000032 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.0571177427352,
            "unit": "iter/sec",
            "range": "stddev: 0.0006315421296580892",
            "extra": "mean: 10.631837589741986 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.97186222646738,
            "unit": "iter/sec",
            "range": "stddev: 0.00006098345473280959",
            "extra": "mean: 6.290421373912226 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 300.12795017922707,
            "unit": "iter/sec",
            "range": "stddev: 0.00024168638154119037",
            "extra": "mean: 3.3319122707592914 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.104527552028,
            "unit": "iter/sec",
            "range": "stddev: 0.0002450767742580544",
            "extra": "mean: 3.5447853626368047 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.0281612488878,
            "unit": "iter/sec",
            "range": "stddev: 0.0004232757508286995",
            "extra": "mean: 15.377952886790311 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.3769844360688,
            "unit": "iter/sec",
            "range": "stddev: 0.0006485742385617999",
            "extra": "mean: 8.307235844831215 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2692356.857480288,
            "unit": "iter/sec",
            "range": "stddev: 1.7401792345354873e-8",
            "extra": "mean: 371.4217887656195 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 163.1744239367028,
            "unit": "iter/sec",
            "range": "stddev: 0.003494522719496405",
            "extra": "mean: 6.12841140096754 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4972.904802716409,
            "unit": "iter/sec",
            "range": "stddev: 0.00005501419889543295",
            "extra": "mean: 201.08971308957254 usec\nrounds: 2269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 533.2396349323747,
            "unit": "iter/sec",
            "range": "stddev: 0.00002209183537409462",
            "extra": "mean: 1.875329466322997 msec\nrounds: 386"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.50147995366919,
            "unit": "iter/sec",
            "range": "stddev: 0.0005771816131077336",
            "extra": "mean: 8.810457805556329 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.52607647625146,
            "unit": "iter/sec",
            "range": "stddev: 0.00004962844522071219",
            "extra": "mean: 6.041344187503128 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.700408090996637,
            "unit": "iter/sec",
            "range": "stddev: 0.0003071208971734261",
            "extra": "mean: 93.45437963636206 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5229.9799013370575,
            "unit": "iter/sec",
            "range": "stddev: 0.00005155686804726563",
            "extra": "mean: 191.20532370389174 usec\nrounds: 2354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.75710719177478,
            "unit": "iter/sec",
            "range": "stddev: 0.0005875460942384388",
            "extra": "mean: 8.281086084746105 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 288.4899241190225,
            "unit": "iter/sec",
            "range": "stddev: 0.00002752440936690602",
            "extra": "mean: 3.466325567708317 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.65781567797838,
            "unit": "iter/sec",
            "range": "stddev: 0.059841082505573504",
            "extra": "mean: 79.0025724374992 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 341.1737325918789,
            "unit": "iter/sec",
            "range": "stddev: 0.000012012239749673345",
            "extra": "mean: 2.9310580049731634 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.51342822261796,
            "unit": "iter/sec",
            "range": "stddev: 0.00003743144805555617",
            "extra": "mean: 5.037442599996685 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.25491600061437,
            "unit": "iter/sec",
            "range": "stddev: 0.0006235503881375687",
            "extra": "mean: 9.684768907216483 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148776.10794873224,
            "unit": "iter/sec",
            "range": "stddev: 2.6918003171946617e-7",
            "extra": "mean: 6.721509345738475 usec\nrounds: 25252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.99025871027206,
            "unit": "iter/sec",
            "range": "stddev: 0.00025553807877247854",
            "extra": "mean: 10.990187457144884 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8358.113366813395,
            "unit": "iter/sec",
            "range": "stddev: 0.000029215012282005678",
            "extra": "mean: 119.6442254505168 usec\nrounds: 3442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1890424.0908065434,
            "unit": "iter/sec",
            "range": "stddev: 8.718117378268179e-8",
            "extra": "mean: 528.9818326285471 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1161.1675497147803,
            "unit": "iter/sec",
            "range": "stddev: 0.00000958994075402823",
            "extra": "mean: 861.2021583324747 usec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.87022236509442,
            "unit": "iter/sec",
            "range": "stddev: 0.0006210947432770202",
            "extra": "mean: 9.445526585856134 msec\nrounds: 99"
          }
        ]
      }
    ]
  }
}