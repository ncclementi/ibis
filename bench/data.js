window.BENCHMARK_DATA = {
  "lastUpdate": 1675696062174,
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
          "id": "57630637f7829d9f8d38e0eff5a521757232819d",
          "message": "feat(ux): expose `between`, `rows` and `range` keyword arguments in `value.over()`",
          "timestamp": "2023-02-06T09:58:16-05:00",
          "tree_id": "1b93f3cb6e333690cd0098ffce4d7872838f5c8f",
          "url": "https://github.com/ibis-project/ibis/commit/57630637f7829d9f8d38e0eff5a521757232819d"
        },
        "date": 1675695973526,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5952505052899055,
            "unit": "iter/sec",
            "range": "stddev: 0.013815789972370342",
            "extra": "mean: 1.6799649746000114 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5927515494144652,
            "unit": "iter/sec",
            "range": "stddev: 0.03524098997367396",
            "extra": "mean: 1.6870474670000022 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4072497.2989610936,
            "unit": "iter/sec",
            "range": "stddev: 4.2241810735869665e-7",
            "extra": "mean: 245.54957967824717 nsec\nrounds: 188644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 177.45022680658542,
            "unit": "iter/sec",
            "range": "stddev: 0.00037699248299009577",
            "extra": "mean: 5.635383047945976 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 177.53224599381068,
            "unit": "iter/sec",
            "range": "stddev: 0.0003772146579861702",
            "extra": "mean: 5.6327795235287175 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 114.17453221362145,
            "unit": "iter/sec",
            "range": "stddev: 0.00144627836201782",
            "extra": "mean: 8.758520666666644 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1113.9380698225295,
            "unit": "iter/sec",
            "range": "stddev: 0.00012656346330498018",
            "extra": "mean: 897.7159746046907 usec\nrounds: 945"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2884.091892859551,
            "unit": "iter/sec",
            "range": "stddev: 0.00016681756614944957",
            "extra": "mean: 346.7295901617438 usec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 50.66883163064804,
            "unit": "iter/sec",
            "range": "stddev: 0.0016005067760954893",
            "extra": "mean: 19.73599879487117 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 168.61129586932333,
            "unit": "iter/sec",
            "range": "stddev: 0.0006460148594755144",
            "extra": "mean: 5.93080074999849 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1245488.117055378,
            "unit": "iter/sec",
            "range": "stddev: 0.000001209996970685968",
            "extra": "mean: 802.898065671017 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3616734.651897257,
            "unit": "iter/sec",
            "range": "stddev: 7.208954067056196e-7",
            "extra": "mean: 276.49249841254414 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 113.8211553227359,
            "unit": "iter/sec",
            "range": "stddev: 0.0011008015452794978",
            "extra": "mean: 8.785712964910038 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 43.34580909783475,
            "unit": "iter/sec",
            "range": "stddev: 0.0017926292405777537",
            "extra": "mean: 23.07028109091065 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1350160.7474120632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013719841181393383",
            "extra": "mean: 740.6525496440049 nsec\nrounds: 106372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 115.41695099715774,
            "unit": "iter/sec",
            "range": "stddev: 0.0005125986284668052",
            "extra": "mean: 8.664238583331022 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 102.53452875161337,
            "unit": "iter/sec",
            "range": "stddev: 0.0016614916819310426",
            "extra": "mean: 9.752812171424402 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 65.55298233277664,
            "unit": "iter/sec",
            "range": "stddev: 0.0013252700414818019",
            "extra": "mean: 15.254836079364734 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3250.4286929333934,
            "unit": "iter/sec",
            "range": "stddev: 0.00011282116936142678",
            "extra": "mean: 307.65172673193956 usec\nrounds: 1848"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 161.56137747975512,
            "unit": "iter/sec",
            "range": "stddev: 0.00043981603953309386",
            "extra": "mean: 6.189598130439979 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.5730375425222,
            "unit": "iter/sec",
            "range": "stddev: 0.012198037653042152",
            "extra": "mean: 9.845132371682428 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.18649823278453,
            "unit": "iter/sec",
            "range": "stddev: 0.002276772925991159",
            "extra": "mean: 38.18761833333015 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.9174768732874,
            "unit": "iter/sec",
            "range": "stddev: 0.0034787389343023545",
            "extra": "mean: 100.83209799999509 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 75.58861928680078,
            "unit": "iter/sec",
            "range": "stddev: 0.00066834333453456",
            "extra": "mean: 13.229504777773062 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 171.85506889952953,
            "unit": "iter/sec",
            "range": "stddev: 0.0005006360251893397",
            "extra": "mean: 5.818856588888997 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 193.0846363041441,
            "unit": "iter/sec",
            "range": "stddev: 0.00026385425878549043",
            "extra": "mean: 5.179075969694526 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.07198912108747,
            "unit": "iter/sec",
            "range": "stddev: 0.013589916112568835",
            "extra": "mean: 9.89393806034596 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.370124539095862,
            "unit": "iter/sec",
            "range": "stddev: 0.001097017937786352",
            "extra": "mean: 54.436212333333366 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0171549991301705,
            "unit": "iter/sec",
            "range": "stddev: 0.024824233842382304",
            "extra": "mean: 983.1343313999923 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 63.84392422067224,
            "unit": "iter/sec",
            "range": "stddev: 0.001454128173546362",
            "extra": "mean: 15.663197590166405 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 64.78862859030401,
            "unit": "iter/sec",
            "range": "stddev: 0.0017370683912745326",
            "extra": "mean: 15.434807338237988 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.165229367710552,
            "unit": "iter/sec",
            "range": "stddev: 0.0007221430770169981",
            "extra": "mean: 34.28740392856712 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8094.511748777677,
            "unit": "iter/sec",
            "range": "stddev: 0.000025866543653898578",
            "extra": "mean: 123.54049645440398 usec\nrounds: 564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 112.26005923529922,
            "unit": "iter/sec",
            "range": "stddev: 0.0011658526065959865",
            "extra": "mean: 8.90788769230899 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 744.316664298339,
            "unit": "iter/sec",
            "range": "stddev: 0.00014528885733767948",
            "extra": "mean: 1.3435141895455096 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8975125.34858637,
            "unit": "iter/sec",
            "range": "stddev: 1.137779471557243e-7",
            "extra": "mean: 111.41905668846535 nsec\nrounds: 82645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 472.10529449520163,
            "unit": "iter/sec",
            "range": "stddev: 0.0005488040672667388",
            "extra": "mean: 2.118171542789516 msec\nrounds: 409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5031463878482224,
            "unit": "iter/sec",
            "range": "stddev: 0.030499166320139718",
            "extra": "mean: 1.9874931514000196 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1267143.7080110763,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012816552552985376",
            "extra": "mean: 789.1764712067362 nsec\nrounds: 89278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 54.25107836224298,
            "unit": "iter/sec",
            "range": "stddev: 0.019410506913653456",
            "extra": "mean: 18.432813322582142 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 392.22755567283684,
            "unit": "iter/sec",
            "range": "stddev: 0.0002964451375592299",
            "extra": "mean: 2.5495404020876995 msec\nrounds: 383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 46771.86564758621,
            "unit": "iter/sec",
            "range": "stddev: 0.000028422770968975537",
            "extra": "mean: 21.38037442283656 usec\nrounds: 6068"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 108.47410627626017,
            "unit": "iter/sec",
            "range": "stddev: 0.0005571760275668265",
            "extra": "mean: 9.218789942857105 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6623.961561859389,
            "unit": "iter/sec",
            "range": "stddev: 0.0000600111332766798",
            "extra": "mean: 150.96705961549895 usec\nrounds: 4831"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 58.030965204867606,
            "unit": "iter/sec",
            "range": "stddev: 0.0011225668433925086",
            "extra": "mean: 17.232179345452632 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 176.5286962724484,
            "unit": "iter/sec",
            "range": "stddev: 0.0004214856752913507",
            "extra": "mean: 5.66480136723286 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7994.359389183216,
            "unit": "iter/sec",
            "range": "stddev: 0.000029657466986331055",
            "extra": "mean: 125.08819672944053 usec\nrounds: 4036"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 102827.36348399095,
            "unit": "iter/sec",
            "range": "stddev: 0.000005565552545219848",
            "extra": "mean: 9.725037831546548 usec\nrounds: 27173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 184.16251901221514,
            "unit": "iter/sec",
            "range": "stddev: 0.0007363526350465398",
            "extra": "mean: 5.429986543210086 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 111.84946125089397,
            "unit": "iter/sec",
            "range": "stddev: 0.0013949453565939196",
            "extra": "mean: 8.9405884374969 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08582300890706529,
            "unit": "iter/sec",
            "range": "stddev: 0.03847828184457328",
            "extra": "mean: 11.651886979200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12367.100449673717,
            "unit": "iter/sec",
            "range": "stddev: 0.00003371984452011099",
            "extra": "mean: 80.85969739385298 usec\nrounds: 5142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3635.1933238331876,
            "unit": "iter/sec",
            "range": "stddev: 0.00007371906200270935",
            "extra": "mean: 275.0885333783387 usec\nrounds: 1483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3648.7048190175738,
            "unit": "iter/sec",
            "range": "stddev: 0.00008014062201642272",
            "extra": "mean: 274.0698548120024 usec\nrounds: 2390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 471011.52001436293,
            "unit": "iter/sec",
            "range": "stddev: 0.000003119010842806535",
            "extra": "mean: 2.123090322651782 usec\nrounds: 17825"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 104.59151204013865,
            "unit": "iter/sec",
            "range": "stddev: 0.0014836896460129006",
            "extra": "mean: 9.561005290909593 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 214.0199868152052,
            "unit": "iter/sec",
            "range": "stddev: 0.0001933044896429754",
            "extra": "mean: 4.672460805557598 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 217.03408174343656,
            "unit": "iter/sec",
            "range": "stddev: 0.0004576925398686551",
            "extra": "mean: 4.607571271603943 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 25.930637515377285,
            "unit": "iter/sec",
            "range": "stddev: 0.002328971371489496",
            "extra": "mean: 38.5644201538425 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 23.027130613104685,
            "unit": "iter/sec",
            "range": "stddev: 0.03925921443033171",
            "extra": "mean: 43.427034692325165 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.4710011890253032,
            "unit": "iter/sec",
            "range": "stddev: 0.06734519302892475",
            "extra": "mean: 679.8091037999825 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3053.4010732670577,
            "unit": "iter/sec",
            "range": "stddev: 0.0000858654414353073",
            "extra": "mean: 327.50365117610534 usec\nrounds: 1786"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 88.25939124916353,
            "unit": "iter/sec",
            "range": "stddev: 0.0008761038437217412",
            "extra": "mean: 11.330239035718222 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 103.48570400943035,
            "unit": "iter/sec",
            "range": "stddev: 0.0012830840577907983",
            "extra": "mean: 9.6631704791695 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3526.9058685379546,
            "unit": "iter/sec",
            "range": "stddev: 0.0001517016571121042",
            "extra": "mean: 283.5346440404265 usec\nrounds: 2534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2812.699550069113,
            "unit": "iter/sec",
            "range": "stddev: 0.0000751568532261561",
            "extra": "mean: 355.53033027485225 usec\nrounds: 1744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 304043.65304369293,
            "unit": "iter/sec",
            "range": "stddev: 0.000002214937568303284",
            "extra": "mean: 3.2890013982837325 usec\nrounds: 1431"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 78.01356258296148,
            "unit": "iter/sec",
            "range": "stddev: 0.0009980188239125415",
            "extra": "mean: 12.818283986666756 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.544166323764484,
            "unit": "iter/sec",
            "range": "stddev: 0.003211684500212682",
            "extra": "mean: 152.8078521428467 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 145.54387764042133,
            "unit": "iter/sec",
            "range": "stddev: 0.0008463026884171314",
            "extra": "mean: 6.8707802499984645 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3761.708811804668,
            "unit": "iter/sec",
            "range": "stddev: 0.00007789207771354254",
            "extra": "mean: 265.8366317089422 usec\nrounds: 2031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.659355392910815,
            "unit": "iter/sec",
            "range": "stddev: 0.002712832778853592",
            "extra": "mean: 273.272172999998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 66.04588354339147,
            "unit": "iter/sec",
            "range": "stddev: 0.002134998588857871",
            "extra": "mean: 15.140989057145557 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 66.69177546629824,
            "unit": "iter/sec",
            "range": "stddev: 0.001132972305934542",
            "extra": "mean: 14.994352647056697 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3439127.708657674,
            "unit": "iter/sec",
            "range": "stddev: 2.912353154295477e-7",
            "extra": "mean: 290.77140621558004 nsec\nrounds: 181786"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 62.78878353076042,
            "unit": "iter/sec",
            "range": "stddev: 0.0006052617668478514",
            "extra": "mean: 15.926411434776355 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 49.62762036487891,
            "unit": "iter/sec",
            "range": "stddev: 0.000455360501488579",
            "extra": "mean: 20.15006951064074 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 303.1034180318441,
            "unit": "iter/sec",
            "range": "stddev: 0.0004892206210561445",
            "extra": "mean: 3.2992039696990147 msec\nrounds: 297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1241171.7181567352,
            "unit": "iter/sec",
            "range": "stddev: 0.000001659125488249884",
            "extra": "mean: 805.6902887580297 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4143620571419642,
            "unit": "iter/sec",
            "range": "stddev: 0.10427516376839427",
            "extra": "mean: 2.4133483815999854 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 36.99420957551131,
            "unit": "iter/sec",
            "range": "stddev: 0.0024619520214970068",
            "extra": "mean: 27.031257363637796 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 64.82149851155731,
            "unit": "iter/sec",
            "range": "stddev: 0.00035345876015696024",
            "extra": "mean: 15.426980599988838 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}