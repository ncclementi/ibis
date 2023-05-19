window.BENCHMARK_DATA = {
  "lastUpdate": 1684509246202,
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
          "id": "64c9520d7de0237f673cc7a0a42c8dca18dfaccc",
          "message": "ci: checkout gh-pages for benchmark data",
          "timestamp": "2023-05-19T11:07:40-04:00",
          "tree_id": "123db52e9c87e025d8fed085347fb4af1265014d",
          "url": "https://github.com/ibis-project/ibis/commit/64c9520d7de0237f673cc7a0a42c8dca18dfaccc"
        },
        "date": 1684509148289,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.780556681138664,
            "unit": "iter/sec",
            "range": "stddev: 0.019997142451646997",
            "extra": "mean: 1.2811369426000112 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 152.52508404966173,
            "unit": "iter/sec",
            "range": "stddev: 0.00014054231822935615",
            "extra": "mean: 6.556298632652468 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1658.7238674155744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000671655904772774",
            "extra": "mean: 602.8731000043308 usec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1858.7081647835544,
            "unit": "iter/sec",
            "range": "stddev: 0.00010557740899070546",
            "extra": "mean: 538.0080740735593 usec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 202.59637327414075,
            "unit": "iter/sec",
            "range": "stddev: 0.00036676361264686833",
            "extra": "mean: 4.935922513513421 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.53064445443582,
            "unit": "iter/sec",
            "range": "stddev: 0.00009685549916123332",
            "extra": "mean: 5.829862081965377 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 167.88886987649258,
            "unit": "iter/sec",
            "range": "stddev: 0.0036716957974570956",
            "extra": "mean: 5.956320992187569 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.98402977476164,
            "unit": "iter/sec",
            "range": "stddev: 0.0014825986193682749",
            "extra": "mean: 12.197497521741054 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 233.96343018969998,
            "unit": "iter/sec",
            "range": "stddev: 0.0004525262984850891",
            "extra": "mean: 4.274172246445479 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.21034235409023,
            "unit": "iter/sec",
            "range": "stddev: 0.0008820499841940893",
            "extra": "mean: 12.46722019444175 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 242.1055940022583,
            "unit": "iter/sec",
            "range": "stddev: 0.0003240617280253337",
            "extra": "mean: 4.130429138248958 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6851.1663932095735,
            "unit": "iter/sec",
            "range": "stddev: 0.000024268038484006203",
            "extra": "mean: 145.9605478260073 usec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5522553.922683096,
            "unit": "iter/sec",
            "range": "stddev: 2.7058237344688506e-7",
            "extra": "mean: 181.07564253789005 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.00997008345387,
            "unit": "iter/sec",
            "range": "stddev: 0.0005809189041651279",
            "extra": "mean: 22.217299814816148 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.526494896652,
            "unit": "iter/sec",
            "range": "stddev: 0.0015601945247694835",
            "extra": "mean: 30.744167275857677 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.07172308713832,
            "unit": "iter/sec",
            "range": "stddev: 0.0009103157264510281",
            "extra": "mean: 11.618217506667179 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 998.0941009265172,
            "unit": "iter/sec",
            "range": "stddev: 0.000015917972686225357",
            "extra": "mean: 1.0019095384610666 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1932155516663374,
            "unit": "iter/sec",
            "range": "stddev: 0.002180234556819531",
            "extra": "mean: 455.9515362000013 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.808320163033045,
            "unit": "iter/sec",
            "range": "stddev: 0.00021938685248136622",
            "extra": "mean: 38.74719445833463 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 128.8967883715232,
            "unit": "iter/sec",
            "range": "stddev: 0.00010041210267530203",
            "extra": "mean: 7.758145200000399 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1918.592149556914,
            "unit": "iter/sec",
            "range": "stddev: 0.00010103899681419441",
            "extra": "mean: 521.2155174464481 usec\nrounds: 1175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4578680.395927468,
            "unit": "iter/sec",
            "range": "stddev: 1.4910471343221446e-8",
            "extra": "mean: 218.40353847167466 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12091.155902694321,
            "unit": "iter/sec",
            "range": "stddev: 0.000002025232208522485",
            "extra": "mean: 82.70507865812613 usec\nrounds: 5187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.33995042774223,
            "unit": "iter/sec",
            "range": "stddev: 0.00011828336497817964",
            "extra": "mean: 61.1996960714265 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 83.2728278748869,
            "unit": "iter/sec",
            "range": "stddev: 0.0010670953931455186",
            "extra": "mean: 12.0087191166661 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9682233.63501402,
            "unit": "iter/sec",
            "range": "stddev: 4.6754872835064424e-9",
            "extra": "mean: 103.28195307981332 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1835.1922822430392,
            "unit": "iter/sec",
            "range": "stddev: 0.00018319619911716465",
            "extra": "mean: 544.9020299811655 usec\nrounds: 1034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1839.8751697797286,
            "unit": "iter/sec",
            "range": "stddev: 0.00010421944379194059",
            "extra": "mean: 543.515134301052 usec\nrounds: 1102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1622124.257891586,
            "unit": "iter/sec",
            "range": "stddev: 9.754558155848926e-8",
            "extra": "mean: 616.4755844905407 nsec\nrounds: 78741"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 222.20438880463826,
            "unit": "iter/sec",
            "range": "stddev: 0.0002922876330074075",
            "extra": "mean: 4.500361155688956 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 244.7159881433665,
            "unit": "iter/sec",
            "range": "stddev: 0.00032973560854056614",
            "extra": "mean: 4.0863697038632045 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1506.4564047975375,
            "unit": "iter/sec",
            "range": "stddev: 0.00000768607587357885",
            "extra": "mean: 663.8094516478202 usec\nrounds: 910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.54574761893094,
            "unit": "iter/sec",
            "range": "stddev: 0.00023042178894210375",
            "extra": "mean: 22.964354837836407 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.05610231495155,
            "unit": "iter/sec",
            "range": "stddev: 0.0004400550055108538",
            "extra": "mean: 25.604193473683562 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1413180.6318061012,
            "unit": "iter/sec",
            "range": "stddev: 1.4054958642590464e-7",
            "extra": "mean: 707.623623967985 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 69.08109331350462,
            "unit": "iter/sec",
            "range": "stddev: 0.0009937222968124204",
            "extra": "mean: 14.475740785713802 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.34261114839081,
            "unit": "iter/sec",
            "range": "stddev: 0.000404808739520402",
            "extra": "mean: 136.1913329999993 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 79.48689646242923,
            "unit": "iter/sec",
            "range": "stddev: 0.0010450082193333818",
            "extra": "mean: 12.580689956522157 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.19621195105645,
            "unit": "iter/sec",
            "range": "stddev: 0.00022671922606555607",
            "extra": "mean: 13.124011999997265 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 67.90758853842749,
            "unit": "iter/sec",
            "range": "stddev: 0.02266751417185348",
            "extra": "mean: 14.72589472727515 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 231.95515951106384,
            "unit": "iter/sec",
            "range": "stddev: 0.0003423482455288358",
            "extra": "mean: 4.311178083332533 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.96203530629987,
            "unit": "iter/sec",
            "range": "stddev: 0.001021601088995717",
            "extra": "mean: 11.910144821429402 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 355.62536622955577,
            "unit": "iter/sec",
            "range": "stddev: 0.0001436012143553409",
            "extra": "mean: 2.8119478950624157 msec\nrounds: 324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145329.74869481748,
            "unit": "iter/sec",
            "range": "stddev: 9.747493458925226e-7",
            "extra": "mean: 6.880903662057048 usec\nrounds: 31348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 81.06994172051277,
            "unit": "iter/sec",
            "range": "stddev: 0.0010251186118592141",
            "extra": "mean: 12.335027986667153 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5001210.371016165,
            "unit": "iter/sec",
            "range": "stddev: 2.034487208616357e-8",
            "extra": "mean: 199.95159687630309 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1835.9876717077498,
            "unit": "iter/sec",
            "range": "stddev: 0.0001306042195411647",
            "extra": "mean: 544.6659666673289 usec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 645.4563503326019,
            "unit": "iter/sec",
            "range": "stddev: 0.000033453119063001543",
            "extra": "mean: 1.5492914423798028 msec\nrounds: 538"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.12675802347636,
            "unit": "iter/sec",
            "range": "stddev: 0.0009156233817930863",
            "extra": "mean: 11.219975035292945 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1589368.579265237,
            "unit": "iter/sec",
            "range": "stddev: 2.931140643983964e-7",
            "extra": "mean: 629.1806778150217 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.58524177635668,
            "unit": "iter/sec",
            "range": "stddev: 0.001052555703671429",
            "extra": "mean: 12.409220075001315 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 83.2513890118426,
            "unit": "iter/sec",
            "range": "stddev: 0.0011479567945178145",
            "extra": "mean: 12.011811597014301 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 461.6101724992398,
            "unit": "iter/sec",
            "range": "stddev: 0.00007567201669836343",
            "extra": "mean: 2.1663300758426134 msec\nrounds: 356"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 90.99563492727114,
            "unit": "iter/sec",
            "range": "stddev: 0.0009651745997646828",
            "extra": "mean: 10.989538133331962 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10549.574584394615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000604597523887569",
            "extra": "mean: 94.79055216873323 usec\nrounds: 2559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1570378.9724255195,
            "unit": "iter/sec",
            "range": "stddev: 3.1928442776996365e-7",
            "extra": "mean: 636.7889646761228 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 244.64014435419307,
            "unit": "iter/sec",
            "range": "stddev: 0.0003305000919255589",
            "extra": "mean: 4.087636567742486 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5029531.742662829,
            "unit": "iter/sec",
            "range": "stddev: 3.833030880074995e-8",
            "extra": "mean: 198.82566631765124 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.55158333957563,
            "unit": "iter/sec",
            "range": "stddev: 0.0009802803232934092",
            "extra": "mean: 11.827099629628522 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.601380789463033,
            "unit": "iter/sec",
            "range": "stddev: 0.0011681630837904367",
            "extra": "mean: 48.54043572222445 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1444052428651581,
            "unit": "iter/sec",
            "range": "stddev: 0.014232248355351149",
            "extra": "mean: 6.924956325400001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 71.73149685140339,
            "unit": "iter/sec",
            "range": "stddev: 0.01973351071910667",
            "extra": "mean: 13.940877353661909 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.36391290611463,
            "unit": "iter/sec",
            "range": "stddev: 0.00023243029294361064",
            "extra": "mean: 10.486146903226336 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 243.72046367075305,
            "unit": "iter/sec",
            "range": "stddev: 0.0003492624564144528",
            "extra": "mean: 4.103061289719687 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 265.405246635377,
            "unit": "iter/sec",
            "range": "stddev: 0.00008855910931031075",
            "extra": "mean: 3.7678230279065836 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8669.68519454713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044442144977300765",
            "extra": "mean: 115.34444187534726 usec\nrounds: 4628"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 847381.9945837356,
            "unit": "iter/sec",
            "range": "stddev: 1.8699794610278986e-7",
            "extra": "mean: 1.1801053201410492 usec\nrounds: 81295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 88.68312618795738,
            "unit": "iter/sec",
            "range": "stddev: 0.0002674771495728253",
            "extra": "mean: 11.276102264150829 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.31100468378906,
            "unit": "iter/sec",
            "range": "stddev: 0.000114447739046437",
            "extra": "mean: 7.23008268421035 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 160.48831129790463,
            "unit": "iter/sec",
            "range": "stddev: 0.00006647725619202744",
            "extra": "mean: 6.230983377622818 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 116.67621335781189,
            "unit": "iter/sec",
            "range": "stddev: 0.005709115821318474",
            "extra": "mean: 8.570727239264201 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1426947344622966,
            "unit": "iter/sec",
            "range": "stddev: 0.013580425760242687",
            "extra": "mean: 875.1243616000011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1859.8625423828823,
            "unit": "iter/sec",
            "range": "stddev: 0.00010908334720442775",
            "extra": "mean: 537.6741437669829 usec\nrounds: 1099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.6816036361409,
            "unit": "iter/sec",
            "range": "stddev: 0.0002991255923293066",
            "extra": "mean: 12.39439915584493 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3844509586572185,
            "unit": "iter/sec",
            "range": "stddev: 0.002961308085973887",
            "extra": "mean: 722.3079978000101 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 83.38807073749837,
            "unit": "iter/sec",
            "range": "stddev: 0.0010637213974079042",
            "extra": "mean: 11.992122987806637 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 76.85764983637617,
            "unit": "iter/sec",
            "range": "stddev: 0.023888314663598115",
            "extra": "mean: 13.011066590364402 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.03197841090618,
            "unit": "iter/sec",
            "range": "stddev: 0.0000739273229749994",
            "extra": "mean: 9.256518437498565 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1830.5228202757305,
            "unit": "iter/sec",
            "range": "stddev: 0.00010403263558896969",
            "extra": "mean: 546.2920150044185 usec\nrounds: 1133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 82.74467800761747,
            "unit": "iter/sec",
            "range": "stddev: 0.0011120740394133127",
            "extra": "mean: 12.08536940476027 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 81.72064524736524,
            "unit": "iter/sec",
            "range": "stddev: 0.0012136012006646797",
            "extra": "mean: 12.236809890243016 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 578.5262562495798,
            "unit": "iter/sec",
            "range": "stddev: 0.00004235123351730061",
            "extra": "mean: 1.7285300177777823 msec\nrounds: 450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.373324293148894,
            "unit": "iter/sec",
            "range": "stddev: 0.042393828353650354",
            "extra": "mean: 41.02846160714689 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6673007063476339,
            "unit": "iter/sec",
            "range": "stddev: 0.0011610644327316314",
            "extra": "mean: 1.4985747661999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3821.8579524607267,
            "unit": "iter/sec",
            "range": "stddev: 0.00003124148274631567",
            "extra": "mean: 261.65284331306555 usec\nrounds: 1787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3756297.9739761823,
            "unit": "iter/sec",
            "range": "stddev: 3.5545303921238346e-8",
            "extra": "mean: 266.21956163420816 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.84013594056286,
            "unit": "iter/sec",
            "range": "stddev: 0.001008847151631899",
            "extra": "mean: 20.064150731702572 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1851.6793235404302,
            "unit": "iter/sec",
            "range": "stddev: 0.00010183489456785434",
            "extra": "mean: 540.0503139431236 usec\nrounds: 997"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.23911923727142,
            "unit": "iter/sec",
            "range": "stddev: 0.04312514006786067",
            "extra": "mean: 33.06974624999803 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 232.10304077918946,
            "unit": "iter/sec",
            "range": "stddev: 0.00044773535210566623",
            "extra": "mean: 4.308431275363373 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.7905735424489,
            "unit": "iter/sec",
            "range": "stddev: 0.0010617745083836673",
            "extra": "mean: 11.656292279071934 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7617120205004398,
            "unit": "iter/sec",
            "range": "stddev: 0.015118009029421333",
            "extra": "mean: 1.3128321111999868 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}