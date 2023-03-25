window.BENCHMARK_DATA = {
  "lastUpdate": 1679724636531,
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
          "id": "7e53415caaa74f6926564f5c54009118b27be060",
          "message": "chore(flake/poetry2nix): `4e91056f` -> `4e45611b`",
          "timestamp": "2023-03-25T06:05:43Z",
          "tree_id": "db616bb7b5bb2e4e9966855b96dee09f1baf163a",
          "url": "https://github.com/ibis-project/ibis/commit/7e53415caaa74f6926564f5c54009118b27be060"
        },
        "date": 1679724553329,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 42.086802472885104,
            "unit": "iter/sec",
            "range": "stddev: 0.009690737309138808",
            "extra": "mean: 23.760417547621046 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4614.107369592866,
            "unit": "iter/sec",
            "range": "stddev: 0.00004174142336455374",
            "extra": "mean: 216.72664285838601 usec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5864.091298103879,
            "unit": "iter/sec",
            "range": "stddev: 0.000042395413832362567",
            "extra": "mean: 170.52940501170988 usec\nrounds: 2953"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5254.850320676443,
            "unit": "iter/sec",
            "range": "stddev: 0.00007223214138183406",
            "extra": "mean: 190.30037755124349 usec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.86122888609079,
            "unit": "iter/sec",
            "range": "stddev: 0.00045309231633356773",
            "extra": "mean: 8.706157941177102 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13482.854371226511,
            "unit": "iter/sec",
            "range": "stddev: 0.000002056009664608407",
            "extra": "mean: 74.16827123298758 usec\nrounds: 1825"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.11288671835649,
            "unit": "iter/sec",
            "range": "stddev: 0.00012209193062376325",
            "extra": "mean: 13.492930099999967 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 745.8079378822044,
            "unit": "iter/sec",
            "range": "stddev: 0.000022087585483625937",
            "extra": "mean: 1.340827777778283 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 700.6674838097595,
            "unit": "iter/sec",
            "range": "stddev: 0.000027891472565745688",
            "extra": "mean: 1.4272105144121592 msec\nrounds: 451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1776022.8462923367,
            "unit": "iter/sec",
            "range": "stddev: 1.0154931308742143e-7",
            "extra": "mean: 563.0558199674184 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.84747297539536,
            "unit": "iter/sec",
            "range": "stddev: 0.0006315521033400548",
            "extra": "mean: 10.655587926828641 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1183.3571071690221,
            "unit": "iter/sec",
            "range": "stddev: 0.00002806134254937776",
            "extra": "mean: 845.053444933734 usec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 315.78629850830475,
            "unit": "iter/sec",
            "range": "stddev: 0.00018686802771582193",
            "extra": "mean: 3.1666985069452007 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7821.935276583437,
            "unit": "iter/sec",
            "range": "stddev: 0.000013320202454468108",
            "extra": "mean: 127.84559890104237 usec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5422.714499658719,
            "unit": "iter/sec",
            "range": "stddev: 0.00004310406027406799",
            "extra": "mean: 184.4094871789646 usec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 749716.5448360842,
            "unit": "iter/sec",
            "range": "stddev: 6.909339891987136e-7",
            "extra": "mean: 1.3338374441484908 usec\nrounds: 23475"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.82121222926523,
            "unit": "iter/sec",
            "range": "stddev: 0.00006837896974634829",
            "extra": "mean: 9.023543235849246 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.78187216550414,
            "unit": "iter/sec",
            "range": "stddev: 0.0005325543702912872",
            "extra": "mean: 8.211402750000252 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.18990783509366,
            "unit": "iter/sec",
            "range": "stddev: 0.00017920863832931582",
            "extra": "mean: 3.2447525846144196 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.45338310845844,
            "unit": "iter/sec",
            "range": "stddev: 0.000051857814513064467",
            "extra": "mean: 6.232339765151914 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.83037913445408,
            "unit": "iter/sec",
            "range": "stddev: 0.0005589956086442088",
            "extra": "mean: 9.273824389999561 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.11502403445397,
            "unit": "iter/sec",
            "range": "stddev: 0.0005938922018005114",
            "extra": "mean: 8.256613974790831 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9073973741432475,
            "unit": "iter/sec",
            "range": "stddev: 0.001809889618819035",
            "extra": "mean: 1.1020530017999959 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68876.17493171315,
            "unit": "iter/sec",
            "range": "stddev: 4.615601553602098e-7",
            "extra": "mean: 14.518808586444349 usec\nrounds: 12904"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.234242023095405,
            "unit": "iter/sec",
            "range": "stddev: 0.0002893735415003263",
            "extra": "mean: 16.882127057692415 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2516989.7145434893,
            "unit": "iter/sec",
            "range": "stddev: 1.683284619402381e-8",
            "extra": "mean: 397.2999946012826 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5388.40552418533,
            "unit": "iter/sec",
            "range": "stddev: 0.00011176770116834969",
            "extra": "mean: 185.58365652169235 usec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10901980.63864611,
            "unit": "iter/sec",
            "range": "stddev: 4.30901209471881e-9",
            "extra": "mean: 91.72645165559076 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 250.4285318503201,
            "unit": "iter/sec",
            "range": "stddev: 0.0041639697867457935",
            "extra": "mean: 3.993155223214322 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.73047688987269,
            "unit": "iter/sec",
            "range": "stddev: 0.0005467018773691689",
            "extra": "mean: 9.369395032609349 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 286.0930027141748,
            "unit": "iter/sec",
            "range": "stddev: 0.00014141407260270716",
            "extra": "mean: 3.4953668580250596 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138203.18375280694,
            "unit": "iter/sec",
            "range": "stddev: 4.612500602593709e-7",
            "extra": "mean: 7.235723323050361 usec\nrounds: 38760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.64058125694614,
            "unit": "iter/sec",
            "range": "stddev: 0.0005719264510429027",
            "extra": "mean: 21.44055612195165 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.671492108608556,
            "unit": "iter/sec",
            "range": "stddev: 0.040313911109438244",
            "extra": "mean: 1.4892207774000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.579232645696747,
            "unit": "iter/sec",
            "range": "stddev: 0.0008763793572207681",
            "extra": "mean: 387.7122141999962 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.10725046905235,
            "unit": "iter/sec",
            "range": "stddev: 0.000556777433124025",
            "extra": "mean: 8.325892034783251 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.549871823906525,
            "unit": "iter/sec",
            "range": "stddev: 0.0003312589033798075",
            "extra": "mean: 180.18434149999982 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.62209674532596,
            "unit": "iter/sec",
            "range": "stddev: 0.00020642908840476037",
            "extra": "mean: 3.3375375543479495 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5381.788310543323,
            "unit": "iter/sec",
            "range": "stddev: 0.000050361818675177496",
            "extra": "mean: 185.81184214193743 usec\nrounds: 2876"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.549868094112684,
            "unit": "iter/sec",
            "range": "stddev: 0.000118917284467377",
            "extra": "mean: 64.30922718750321 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11839.456981337213,
            "unit": "iter/sec",
            "range": "stddev: 0.000001627464964211157",
            "extra": "mean: 84.46333320660916 usec\nrounds: 2629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.98044158309955,
            "unit": "iter/sec",
            "range": "stddev: 0.00019686020575999304",
            "extra": "mean: 3.2156363111111674 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 324.42130720203977,
            "unit": "iter/sec",
            "range": "stddev: 0.000015214442320163671",
            "extra": "mean: 3.0824115981298057 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5596.687849342632,
            "unit": "iter/sec",
            "range": "stddev: 0.000022928937799576674",
            "extra": "mean: 178.6771081252024 usec\nrounds: 1563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9057254447838181,
            "unit": "iter/sec",
            "range": "stddev: 0.005210170202820356",
            "extra": "mean: 1.1040873431999956 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8542238663153923,
            "unit": "iter/sec",
            "range": "stddev: 0.004324284497114187",
            "extra": "mean: 1.170653313999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.561413127837,
            "unit": "iter/sec",
            "range": "stddev: 0.000747978082135787",
            "extra": "mean: 22.956096421054145 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11567.857610016123,
            "unit": "iter/sec",
            "range": "stddev: 0.00002865180104239912",
            "extra": "mean: 86.44643059352164 usec\nrounds: 4733"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.01064308543656,
            "unit": "iter/sec",
            "range": "stddev: 0.00006294371670077288",
            "extra": "mean: 8.473811970298533 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.44558373022195,
            "unit": "iter/sec",
            "range": "stddev: 0.0005987761473670191",
            "extra": "mean: 9.857501561224563 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.34659100470536,
            "unit": "iter/sec",
            "range": "stddev: 0.00024730554451070857",
            "extra": "mean: 9.31561953333168 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.39550465916912,
            "unit": "iter/sec",
            "range": "stddev: 0.00007050136941974427",
            "extra": "mean: 10.482674247311959 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2473372.8881463744,
            "unit": "iter/sec",
            "range": "stddev: 1.4488460673542411e-8",
            "extra": "mean: 404.30620259194103 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.01660998727768,
            "unit": "iter/sec",
            "range": "stddev: 0.0005639986960415648",
            "extra": "mean: 9.707172465911057 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.10397761641069,
            "unit": "iter/sec",
            "range": "stddev: 0.00016222368105739702",
            "extra": "mean: 14.683430175435669 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.173877343559845,
            "unit": "iter/sec",
            "range": "stddev: 0.00012804668636499754",
            "extra": "mean: 20.33600061702206 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.11753695208876,
            "unit": "iter/sec",
            "range": "stddev: 0.00018689857046456611",
            "extra": "mean: 3.1936888931041048 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.99379298549589,
            "unit": "iter/sec",
            "range": "stddev: 0.000578163564372481",
            "extra": "mean: 8.333764398304117 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.69097416423716,
            "unit": "iter/sec",
            "range": "stddev: 0.00027478872486820207",
            "extra": "mean: 3.5499894981262683 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.95075143030215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000676213478993891",
            "extra": "mean: 7.355604801586329 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1745.4349606363749,
            "unit": "iter/sec",
            "range": "stddev: 0.000005282692254527606",
            "extra": "mean: 572.9230951323481 usec\nrounds: 1356"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6390217.200450325,
            "unit": "iter/sec",
            "range": "stddev: 9.56799808036648e-9",
            "extra": "mean: 156.4892035169323 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1668437.5544441321,
            "unit": "iter/sec",
            "range": "stddev: 1.1228086468294851e-7",
            "extra": "mean: 599.3631570665326 nsec\nrounds: 149277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 188.80047704710188,
            "unit": "iter/sec",
            "range": "stddev: 0.0001242686382455072",
            "extra": "mean: 5.296596786408121 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.5942153506965,
            "unit": "iter/sec",
            "range": "stddev: 0.000637683277542529",
            "extra": "mean: 8.803265174311258 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.45117561842378,
            "unit": "iter/sec",
            "range": "stddev: 0.00008904503532673928",
            "extra": "mean: 10.157319033708562 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.58390307154747,
            "unit": "iter/sec",
            "range": "stddev: 0.00017844391950096967",
            "extra": "mean: 3.315826838950224 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 480243.32332039415,
            "unit": "iter/sec",
            "range": "stddev: 2.636878763238054e-7",
            "extra": "mean: 2.0822777776190975 usec\nrounds: 2124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.369555820463093,
            "unit": "iter/sec",
            "range": "stddev: 0.00047153786906027243",
            "extra": "mean: 96.4361460909076 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7034376.340679261,
            "unit": "iter/sec",
            "range": "stddev: 7.766353519879933e-9",
            "extra": "mean: 142.1590133320036 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 180.3665213992426,
            "unit": "iter/sec",
            "range": "stddev: 0.003952116139844241",
            "extra": "mean: 5.544266154507093 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.8248110861012,
            "unit": "iter/sec",
            "range": "stddev: 0.0005542525441855039",
            "extra": "mean: 9.361121164951053 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.768082860184393,
            "unit": "iter/sec",
            "range": "stddev: 0.0002782691451433961",
            "extra": "mean: 36.01256899999612 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.5712786487844,
            "unit": "iter/sec",
            "range": "stddev: 0.000027158707739041373",
            "extra": "mean: 1.8396851328970345 msec\nrounds: 459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.81320820420378,
            "unit": "iter/sec",
            "range": "stddev: 0.015832293813059093",
            "extra": "mean: 11.134219787877417 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.79698662026695,
            "unit": "iter/sec",
            "range": "stddev: 0.000619829995192686",
            "extra": "mean: 8.347455376067218 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.9330134597368,
            "unit": "iter/sec",
            "range": "stddev: 0.0000318361123230425",
            "extra": "mean: 6.53881053787823 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5774.693360947449,
            "unit": "iter/sec",
            "range": "stddev: 0.00004503217950535107",
            "extra": "mean: 173.16936805038094 usec\nrounds: 2698"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.42309346440418,
            "unit": "iter/sec",
            "range": "stddev: 0.00013378451277343704",
            "extra": "mean: 13.807750431034794 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17967082124918338,
            "unit": "iter/sec",
            "range": "stddev: 0.1486395065975198",
            "extra": "mean: 5.565734007599997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.53745641148626,
            "unit": "iter/sec",
            "range": "stddev: 0.000058842411047928784",
            "extra": "mean: 6.114807102562736 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5771.660468377459,
            "unit": "iter/sec",
            "range": "stddev: 0.0000428228932648028",
            "extra": "mean: 173.26036510271746 usec\nrounds: 2728"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.88702518296039,
            "unit": "iter/sec",
            "range": "stddev: 0.000568358493664871",
            "extra": "mean: 9.814792395835306 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 106.42953141527569,
            "unit": "iter/sec",
            "range": "stddev: 0.011527610969211628",
            "extra": "mean: 9.395888403361619 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 305.51377969489494,
            "unit": "iter/sec",
            "range": "stddev: 0.0002232294996060676",
            "extra": "mean: 3.2731747844521517 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5778284.606066921,
            "unit": "iter/sec",
            "range": "stddev: 1.0127573373837574e-8",
            "extra": "mean: 173.06174205235666 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 358.5350997050681,
            "unit": "iter/sec",
            "range": "stddev: 0.00011779736030952997",
            "extra": "mean: 2.7891272035083943 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.780541575878702,
            "unit": "iter/sec",
            "range": "stddev: 0.001391204195443323",
            "extra": "mean: 561.6268743999967 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}