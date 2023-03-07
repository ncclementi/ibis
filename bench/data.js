window.BENCHMARK_DATA = {
  "lastUpdate": 1678189857853,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "ade12b0694a9ca12efd4cbb14cc76e14b1d50dc6",
          "message": "Revert \"feat: add `persist` API to table relation\"\n\nThis reverts commit ee218f526220ee4f4d8c0024110cb7e66a17ba23.",
          "timestamp": "2023-03-07T12:46:03+01:00",
          "tree_id": "9999ae4450ed76eb67355fff3e81ea5f1fea1c82",
          "url": "https://github.com/ibis-project/ibis/commit/ade12b0694a9ca12efd4cbb14cc76e14b1d50dc6"
        },
        "date": 1678189781113,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1948639.231333621,
            "unit": "iter/sec",
            "range": "stddev: 6.531437158508459e-8",
            "extra": "mean: 513.1786243036963 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 105.52668298185654,
            "unit": "iter/sec",
            "range": "stddev: 0.00782651934415807",
            "extra": "mean: 9.476276253011124 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5607.858678803805,
            "unit": "iter/sec",
            "range": "stddev: 0.00006978003993712942",
            "extra": "mean: 178.32118412322527 usec\nrounds: 907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 109.70792832330153,
            "unit": "iter/sec",
            "range": "stddev: 0.0005628098546340372",
            "extra": "mean: 9.115111508195382 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 286.7255859712968,
            "unit": "iter/sec",
            "range": "stddev: 0.00022770727850238053",
            "extra": "mean: 3.4876552666635994 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14019.691518082745,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013575835399125302",
            "extra": "mean: 71.3282456115521 usec\nrounds: 7862"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 679.6899101661177,
            "unit": "iter/sec",
            "range": "stddev: 0.00002967342721050274",
            "extra": "mean: 1.471259150743606 msec\nrounds: 471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 487530.98180691345,
            "unit": "iter/sec",
            "range": "stddev: 1.909118284651904e-7",
            "extra": "mean: 2.0511516956189046 usec\nrounds: 2182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 295.8599455598079,
            "unit": "iter/sec",
            "range": "stddev: 0.000036060894453446026",
            "extra": "mean: 3.3799776380944766 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 122.70061463399311,
            "unit": "iter/sec",
            "range": "stddev: 0.0005652143498815667",
            "extra": "mean: 8.149918425290096 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74483.4900257192,
            "unit": "iter/sec",
            "range": "stddev: 4.1469339042983786e-7",
            "extra": "mean: 13.425794087450779 usec\nrounds: 4973"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.06731574831967,
            "unit": "iter/sec",
            "range": "stddev: 0.00059404377097683",
            "extra": "mean: 8.2598676101719 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.17988397460985,
            "unit": "iter/sec",
            "range": "stddev: 0.013216707796836214",
            "extra": "mean: 10.848353858586341 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 105.1584193568089,
            "unit": "iter/sec",
            "range": "stddev: 0.0005696114281793238",
            "extra": "mean: 9.509462067958053 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5231.86315449101,
            "unit": "iter/sec",
            "range": "stddev: 0.00005539159317674016",
            "extra": "mean: 191.1364977391666 usec\nrounds: 3317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6078113.494098436,
            "unit": "iter/sec",
            "range": "stddev: 1.2932857957436375e-8",
            "extra": "mean: 164.52473303937276 nsec\nrounds: 50000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 122.10901942308843,
            "unit": "iter/sec",
            "range": "stddev: 0.0005659803952290332",
            "extra": "mean: 8.189403245759909 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 317.671230645953,
            "unit": "iter/sec",
            "range": "stddev: 0.00018491721422285768",
            "extra": "mean: 3.1479086033903636 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5490.567360147492,
            "unit": "iter/sec",
            "range": "stddev: 0.000048889648472872214",
            "extra": "mean: 182.1305403260069 usec\nrounds: 3509"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 104.49622951184124,
            "unit": "iter/sec",
            "range": "stddev: 0.0004983439386805124",
            "extra": "mean: 9.56972327778279 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.691904322518369,
            "unit": "iter/sec",
            "range": "stddev: 0.00022657162201290308",
            "extra": "mean: 175.6881253333423 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12086.826658609945,
            "unit": "iter/sec",
            "range": "stddev: 0.000012039334570918035",
            "extra": "mean: 82.73470185722063 usec\nrounds: 4092"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 760525.9473783614,
            "unit": "iter/sec",
            "range": "stddev: 1.0888952345623701e-7",
            "extra": "mean: 1.3148795296822404 usec\nrounds: 24753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.03674013828453,
            "unit": "iter/sec",
            "range": "stddev: 0.00016959402472999284",
            "extra": "mean: 9.800391492757976 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 313.39145810239273,
            "unit": "iter/sec",
            "range": "stddev: 0.00019377682384305776",
            "extra": "mean: 3.190897435606797 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2719908.4764111214,
            "unit": "iter/sec",
            "range": "stddev: 1.5680194006981948e-8",
            "extra": "mean: 367.65942996689563 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.61210909724691,
            "unit": "iter/sec",
            "range": "stddev: 0.0006657249929812231",
            "extra": "mean: 9.20707652499999 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.60004086486838,
            "unit": "iter/sec",
            "range": "stddev: 0.0006019765928239591",
            "extra": "mean: 8.291871153845578 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 236.44870504975066,
            "unit": "iter/sec",
            "range": "stddev: 0.0036874371470606193",
            "extra": "mean: 4.2292470994484495 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.13574786857639,
            "unit": "iter/sec",
            "range": "stddev: 0.0033573394607215837",
            "extra": "mean: 39.783976400008214 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.604172036322886,
            "unit": "iter/sec",
            "range": "stddev: 0.0005212174267242436",
            "extra": "mean: 21.927818340907898 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.059954904658596,
            "unit": "iter/sec",
            "range": "stddev: 0.0007223027297932417",
            "extra": "mean: 26.274334862062553 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.58982123013894,
            "unit": "iter/sec",
            "range": "stddev: 0.0006433857689218317",
            "extra": "mean: 15.24626811363367 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.3236702127231,
            "unit": "iter/sec",
            "range": "stddev: 0.00011108421054212926",
            "extra": "mean: 3.4563366324807 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9037990071639931,
            "unit": "iter/sec",
            "range": "stddev: 0.00250992091454144",
            "extra": "mean: 1.1064406931999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12842.64490115279,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018352016035643122",
            "extra": "mean: 77.86558047012866 usec\nrounds: 5325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 303.3605365681976,
            "unit": "iter/sec",
            "range": "stddev: 0.00019221778245641165",
            "extra": "mean: 3.2964076715864885 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 301.1265772942244,
            "unit": "iter/sec",
            "range": "stddev: 0.00027529668475213473",
            "extra": "mean: 3.32086263851404 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8340721223074975,
            "unit": "iter/sec",
            "range": "stddev: 0.0018191318007450192",
            "extra": "mean: 1.1989370861999986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5341.4418115783965,
            "unit": "iter/sec",
            "range": "stddev: 0.000050719398675764615",
            "extra": "mean: 187.21536904742578 usec\nrounds: 1932"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5681.14439573629,
            "unit": "iter/sec",
            "range": "stddev: 0.000049254079858875195",
            "extra": "mean: 176.0208736730054 usec\nrounds: 1884"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5270.411977424304,
            "unit": "iter/sec",
            "range": "stddev: 0.000020915211714858642",
            "extra": "mean: 189.73848805055061 usec\nrounds: 2385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.73140747753455,
            "unit": "iter/sec",
            "range": "stddev: 0.01788206681728818",
            "extra": "mean: 11.144369938144159 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.2004203412526,
            "unit": "iter/sec",
            "range": "stddev: 0.0006279090109551277",
            "extra": "mean: 8.319438460872018 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.448340017888235,
            "unit": "iter/sec",
            "range": "stddev: 0.003558840456144632",
            "extra": "mean: 95.70898327274335 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11169243.99917707,
            "unit": "iter/sec",
            "range": "stddev: 2.9582887675570154e-9",
            "extra": "mean: 89.53157439075794 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5401.382829443869,
            "unit": "iter/sec",
            "range": "stddev: 0.000053622968604840583",
            "extra": "mean: 185.13777519135056 usec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.06470926001326,
            "unit": "iter/sec",
            "range": "stddev: 0.00018866085544209823",
            "extra": "mean: 8.469931500002303 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.03663699977238,
            "unit": "iter/sec",
            "range": "stddev: 0.00010139094318089458",
            "extra": "mean: 13.15155482222331 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 316.38894888410994,
            "unit": "iter/sec",
            "range": "stddev: 0.00020466250427909587",
            "extra": "mean: 3.1606666526342226 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7281806527127836,
            "unit": "iter/sec",
            "range": "stddev: 0.002563048036024981",
            "extra": "mean: 578.6432098000091 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 172.92468291992742,
            "unit": "iter/sec",
            "range": "stddev: 0.0037322063594577744",
            "extra": "mean: 5.782864441989747 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.4458818098194,
            "unit": "iter/sec",
            "range": "stddev: 0.00008146402260289891",
            "extra": "mean: 10.262106324325265 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1787521.4922529743,
            "unit": "iter/sec",
            "range": "stddev: 8.49083818769725e-8",
            "extra": "mean: 559.4338330106509 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.27713511846105,
            "unit": "iter/sec",
            "range": "stddev: 0.00006419667171145598",
            "extra": "mean: 6.087274405405811 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1897605.5213056074,
            "unit": "iter/sec",
            "range": "stddev: 9.847587156674768e-8",
            "extra": "mean: 526.979916938675 nsec\nrounds: 156251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.7295137290078,
            "unit": "iter/sec",
            "range": "stddev: 0.00018812867645797213",
            "extra": "mean: 9.03101590825491 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147517.6987518733,
            "unit": "iter/sec",
            "range": "stddev: 3.689983589625706e-7",
            "extra": "mean: 6.778847612597408 usec\nrounds: 37175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8995051276113409,
            "unit": "iter/sec",
            "range": "stddev: 0.011141314507603918",
            "extra": "mean: 1.1117224008000108 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5064044863039907,
            "unit": "iter/sec",
            "range": "stddev: 0.003063173773223818",
            "extra": "mean: 398.9779006000049 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.4729260441754,
            "unit": "iter/sec",
            "range": "stddev: 0.0005875936598698809",
            "extra": "mean: 8.81267483673327 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.979359043934835,
            "unit": "iter/sec",
            "range": "stddev: 0.0002755789015908248",
            "extra": "mean: 20.41676370454323 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.06630522694986,
            "unit": "iter/sec",
            "range": "stddev: 0.0005843684044786091",
            "extra": "mean: 10.518974074070938 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.04182154835438,
            "unit": "iter/sec",
            "range": "stddev: 0.0001665391441064555",
            "extra": "mean: 10.41213071429021 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5247.2176760713555,
            "unit": "iter/sec",
            "range": "stddev: 0.00005135443046883056",
            "extra": "mean: 190.57718999542442 usec\nrounds: 2379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.96493976018881,
            "unit": "iter/sec",
            "range": "stddev: 0.03427979648035565",
            "extra": "mean: 33.37233473529596 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 339.7739541981414,
            "unit": "iter/sec",
            "range": "stddev: 0.00001574517345318476",
            "extra": "mean: 2.9431331850022957 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.1782686409281,
            "unit": "iter/sec",
            "range": "stddev: 0.00004016814678778553",
            "extra": "mean: 1.8615794018064435 msec\nrounds: 443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 303.60977535699755,
            "unit": "iter/sec",
            "range": "stddev: 0.00019304689308445084",
            "extra": "mean: 3.293701590550425 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16922385481123117,
            "unit": "iter/sec",
            "range": "stddev: 0.1440779321411981",
            "extra": "mean: 5.909332352199977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7024838.533834141,
            "unit": "iter/sec",
            "range": "stddev: 3.5616360315408286e-9",
            "extra": "mean: 142.3520263396054 nsec\nrounds: 60972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.20917837484396,
            "unit": "iter/sec",
            "range": "stddev: 0.0006119693796748269",
            "extra": "mean: 8.250200301725188 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.066999264782,
            "unit": "iter/sec",
            "range": "stddev: 0.00004426440297052854",
            "extra": "mean: 6.132448653060931 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1162.2786091218775,
            "unit": "iter/sec",
            "range": "stddev: 0.000009545734046711272",
            "extra": "mean: 860.3789075628933 usec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 109.01067334821835,
            "unit": "iter/sec",
            "range": "stddev: 0.0006092794847589666",
            "extra": "mean: 9.173413660198658 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8388.415997324133,
            "unit": "iter/sec",
            "range": "stddev: 0.000024160674399247048",
            "extra": "mean: 119.21201813536614 usec\nrounds: 4687"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.2382676317194,
            "unit": "iter/sec",
            "range": "stddev: 0.00003885345138029873",
            "extra": "mean: 7.3400815892874505 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 313.05981573174057,
            "unit": "iter/sec",
            "range": "stddev: 0.0002063749462449333",
            "extra": "mean: 3.194277737826611 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5612137.775272426,
            "unit": "iter/sec",
            "range": "stddev: 7.368076648138498e-9",
            "extra": "mean: 178.18521925935443 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5424.671886169032,
            "unit": "iter/sec",
            "range": "stddev: 0.00009955370368641311",
            "extra": "mean: 184.34294663049414 usec\nrounds: 2211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.93730403874851,
            "unit": "iter/sec",
            "range": "stddev: 0.00015310696254672605",
            "extra": "mean: 16.68410042856642 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.01762739836832,
            "unit": "iter/sec",
            "range": "stddev: 0.000040185883810029714",
            "extra": "mean: 5.154170852459409 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.28888025352794,
            "unit": "iter/sec",
            "range": "stddev: 0.000037831290126108045",
            "extra": "mean: 6.200055443550186 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.522712780951023,
            "unit": "iter/sec",
            "range": "stddev: 0.00010588101163573416",
            "extra": "mean: 64.42172925000378 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1727.6596933967471,
            "unit": "iter/sec",
            "range": "stddev: 0.000004533663317276649",
            "extra": "mean: 578.8176941454846 usec\nrounds: 1298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.36055113800366,
            "unit": "iter/sec",
            "range": "stddev: 0.00011832898089008223",
            "extra": "mean: 15.299748588236026 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 731.991942344292,
            "unit": "iter/sec",
            "range": "stddev: 0.000010123926873413838",
            "extra": "mean: 1.366135256622334 msec\nrounds: 604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6940587396153476,
            "unit": "iter/sec",
            "range": "stddev: 0.0013004206947191724",
            "extra": "mean: 1.4408002419999888 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}