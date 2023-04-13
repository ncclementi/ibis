window.BENCHMARK_DATA = {
  "lastUpdate": 1681383963571,
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
          "id": "b2ed0794ad3045a89ee8601838239248bb30a3d1",
          "message": "ci(deps): remove snowflake deps when testing pyspark with pandas2",
          "timestamp": "2023-04-13T06:37:22-04:00",
          "tree_id": "1327c6ae641d167dd9644dd95dca318ed8b887d2",
          "url": "https://github.com/ibis-project/ibis/commit/b2ed0794ad3045a89ee8601838239248bb30a3d1"
        },
        "date": 1681383674195,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 54991.739246260266,
            "unit": "iter/sec",
            "range": "stddev: 0.000008105006308665761",
            "extra": "mean: 18.18454941972044 usec\nrounds: 5342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1480265.5588662303,
            "unit": "iter/sec",
            "range": "stddev: 0.00000301102622908326",
            "extra": "mean: 675.5544598132263 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 910.7035416824406,
            "unit": "iter/sec",
            "range": "stddev: 0.005564370530610608",
            "extra": "mean: 1.098052169812135 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 95.90445953898072,
            "unit": "iter/sec",
            "range": "stddev: 0.001361276212810354",
            "extra": "mean: 10.427043797619717 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 400379.885209858,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011158567209861934",
            "extra": "mean: 2.4976279701859965 usec\nrounds: 1473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 72.25201860532239,
            "unit": "iter/sec",
            "range": "stddev: 0.0007111952334829253",
            "extra": "mean: 13.840443759260392 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 72.08670686768328,
            "unit": "iter/sec",
            "range": "stddev: 0.0017698374092243114",
            "extra": "mean: 13.872183145160477 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 449.2665933120717,
            "unit": "iter/sec",
            "range": "stddev: 0.004241210539941542",
            "extra": "mean: 2.2258498960001134 msec\nrounds: 375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 27.807859818440676,
            "unit": "iter/sec",
            "range": "stddev: 0.002447368648034153",
            "extra": "mean: 35.96105585000302 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1467.3398307644993,
            "unit": "iter/sec",
            "range": "stddev: 0.0006519962887433298",
            "extra": "mean: 681.5053875277068 usec\nrounds: 449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 113526.56663136944,
            "unit": "iter/sec",
            "range": "stddev: 0.00002405943358516842",
            "extra": "mean: 8.808510903417755 usec\nrounds: 28248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.58002538907024,
            "unit": "iter/sec",
            "range": "stddev: 0.0015924621486094615",
            "extra": "mean: 20.169412826086347 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.981934463926233,
            "unit": "iter/sec",
            "range": "stddev: 0.007530366011503309",
            "extra": "mean: 55.6113694000004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 82.80376644525118,
            "unit": "iter/sec",
            "range": "stddev: 0.00039891711132003017",
            "extra": "mean: 12.076745333332 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 188.2811418758434,
            "unit": "iter/sec",
            "range": "stddev: 0.000833484044493983",
            "extra": "mean: 5.311206369565261 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.549483663008568,
            "unit": "iter/sec",
            "range": "stddev: 0.0036257653792469164",
            "extra": "mean: 86.58395727272766 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1469.5876533054654,
            "unit": "iter/sec",
            "range": "stddev: 0.000243825644116538",
            "extra": "mean: 680.462984123984 usec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 84.17778327931326,
            "unit": "iter/sec",
            "range": "stddev: 0.0010314677945338143",
            "extra": "mean: 11.879619075758562 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4194645.002079627,
            "unit": "iter/sec",
            "range": "stddev: 4.086534695614007e-7",
            "extra": "mean: 238.39919695321743 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1315.6021573799003,
            "unit": "iter/sec",
            "range": "stddev: 0.00003983065126551691",
            "extra": "mean: 760.1082093020883 usec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1498.385634480643,
            "unit": "iter/sec",
            "range": "stddev: 0.0001619714760871422",
            "extra": "mean: 667.3849354853239 usec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 66.25454103405318,
            "unit": "iter/sec",
            "range": "stddev: 0.0031445794569095104",
            "extra": "mean: 15.093305068493718 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 68.81674729867731,
            "unit": "iter/sec",
            "range": "stddev: 0.0007377538163108313",
            "extra": "mean: 14.531346499999723 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 127.00512886136767,
            "unit": "iter/sec",
            "range": "stddev: 0.00399357114986046",
            "extra": "mean: 7.873697770832146 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1160199342159323,
            "unit": "iter/sec",
            "range": "stddev: 0.04097753645824538",
            "extra": "mean: 896.0413423999967 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 80.9491810887932,
            "unit": "iter/sec",
            "range": "stddev: 0.0007251465254977103",
            "extra": "mean: 12.353429479454519 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5255243.046617832,
            "unit": "iter/sec",
            "range": "stddev: 1.3743175754110937e-7",
            "extra": "mean: 190.2861563451005 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5102021119401297,
            "unit": "iter/sec",
            "range": "stddev: 0.03452903802975738",
            "extra": "mean: 1.96000756680001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 85.32598058499399,
            "unit": "iter/sec",
            "range": "stddev: 0.002492667820489304",
            "extra": "mean: 11.719759833335766 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1227845.4349951437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042784807965667404",
            "extra": "mean: 814.4347582348223 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 65.70466512168046,
            "unit": "iter/sec",
            "range": "stddev: 0.0027463158608060523",
            "extra": "mean: 15.219619461541575 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 173.6419449300457,
            "unit": "iter/sec",
            "range": "stddev: 0.0012428310962427145",
            "extra": "mean: 5.758977189542914 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 63.54040437155042,
            "unit": "iter/sec",
            "range": "stddev: 0.0031041175006222424",
            "extra": "mean: 15.73801756363609 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 103.55940141131512,
            "unit": "iter/sec",
            "range": "stddev: 0.0021453510950959335",
            "extra": "mean: 9.656293744188616 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9241.907514831799,
            "unit": "iter/sec",
            "range": "stddev: 0.00011064397371219084",
            "extra": "mean: 108.20277073701054 usec\nrounds: 6486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 169.32736009670938,
            "unit": "iter/sec",
            "range": "stddev: 0.00479118888751037",
            "extra": "mean: 5.905720135416163 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.122894165066775,
            "unit": "iter/sec",
            "range": "stddev: 0.0007092068820113762",
            "extra": "mean: 32.13068793333586 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4932859521402962,
            "unit": "iter/sec",
            "range": "stddev: 0.02812612666405085",
            "extra": "mean: 2.02722172739999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.560184438562019,
            "unit": "iter/sec",
            "range": "stddev: 0.005758208353401591",
            "extra": "mean: 132.27190528571344 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 389.6096557136255,
            "unit": "iter/sec",
            "range": "stddev: 0.0004359271954218737",
            "extra": "mean: 2.5666715014245676 msec\nrounds: 351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 89.69295989955721,
            "unit": "iter/sec",
            "range": "stddev: 0.0010620122300291",
            "extra": "mean: 11.149147058139809 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1482.4676897323352,
            "unit": "iter/sec",
            "range": "stddev: 0.00026802835884022925",
            "extra": "mean: 674.5509577888699 usec\nrounds: 995"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 71.54763556244204,
            "unit": "iter/sec",
            "range": "stddev: 0.0016391881742433315",
            "extra": "mean: 13.976702264706793 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 172.85755827233606,
            "unit": "iter/sec",
            "range": "stddev: 0.0012980699657346843",
            "extra": "mean: 5.785110064001401 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 52.95503537842449,
            "unit": "iter/sec",
            "range": "stddev: 0.0016783541166828864",
            "extra": "mean: 18.883945461538314 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 65.70044416324951,
            "unit": "iter/sec",
            "range": "stddev: 0.0024968423049582826",
            "extra": "mean: 15.22059725373005 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 37.045978581342,
            "unit": "iter/sec",
            "range": "stddev: 0.00331297954203887",
            "extra": "mean: 26.99348318750161 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 560.2981631997866,
            "unit": "iter/sec",
            "range": "stddev: 0.0002273321810607087",
            "extra": "mean: 1.784764016160853 msec\nrounds: 495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 209.3540010329431,
            "unit": "iter/sec",
            "range": "stddev: 0.0006317061971414459",
            "extra": "mean: 4.776598465116719 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 119.12782914179151,
            "unit": "iter/sec",
            "range": "stddev: 0.0010811620070964381",
            "extra": "mean: 8.39434418644323 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 183.11290184568668,
            "unit": "iter/sec",
            "range": "stddev: 0.0006828023056883665",
            "extra": "mean: 5.461111641618362 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 630408.8089528155,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017548966983654795",
            "extra": "mean: 1.5862722503213744 usec\nrounds: 20202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 69.66870988962208,
            "unit": "iter/sec",
            "range": "stddev: 0.001753886940344427",
            "extra": "mean: 14.353646013889529 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 68.80524293005053,
            "unit": "iter/sec",
            "range": "stddev: 0.001519222696551594",
            "extra": "mean: 14.533776169014185 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09936006780499235,
            "unit": "iter/sec",
            "range": "stddev: 0.055398776065240275",
            "extra": "mean: 10.064405370199989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1576.9171455138985,
            "unit": "iter/sec",
            "range": "stddev: 0.00021815278301868398",
            "extra": "mean: 634.1487267386593 usec\nrounds: 849"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.009613789845503,
            "unit": "iter/sec",
            "range": "stddev: 0.0029953029702176302",
            "extra": "mean: 33.32265476666597 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.142148015401069,
            "unit": "iter/sec",
            "range": "stddev: 0.007794959409502022",
            "extra": "mean: 241.4206340000078 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5967.801125880649,
            "unit": "iter/sec",
            "range": "stddev: 0.00006955430632256152",
            "extra": "mean: 167.5659055834293 usec\nrounds: 752"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1591354.11827593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011037169473064388",
            "extra": "mean: 628.3956465223454 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 243.04159321179128,
            "unit": "iter/sec",
            "range": "stddev: 0.0003915053833313478",
            "extra": "mean: 4.114522073300351 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5537986489094392,
            "unit": "iter/sec",
            "range": "stddev: 0.03383522953178425",
            "extra": "mean: 1.8057104364000112 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1537.0105185280088,
            "unit": "iter/sec",
            "range": "stddev: 0.00021858729720600415",
            "extra": "mean: 650.6136346794149 usec\nrounds: 1188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 200.24057883043267,
            "unit": "iter/sec",
            "range": "stddev: 0.0007439380293975533",
            "extra": "mean: 4.993992755318682 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 183.7798548963427,
            "unit": "iter/sec",
            "range": "stddev: 0.0012133788951334504",
            "extra": "mean: 5.441292793293529 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1224676.3495833892,
            "unit": "iter/sec",
            "range": "stddev: 0.000012858415113077453",
            "extra": "mean: 816.5422646890995 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 130.16971389695058,
            "unit": "iter/sec",
            "range": "stddev: 0.0006595309495711958",
            "extra": "mean: 7.682278542854095 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 848.7937038443224,
            "unit": "iter/sec",
            "range": "stddev: 0.00011645243766711906",
            "extra": "mean: 1.178142575128491 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9238679.157027712,
            "unit": "iter/sec",
            "range": "stddev: 2.498532932195672e-7",
            "extra": "mean: 108.24058104011301 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7612.336485216216,
            "unit": "iter/sec",
            "range": "stddev: 0.0001219132944528618",
            "extra": "mean: 131.3657116894507 usec\nrounds: 3576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 67.14447755270751,
            "unit": "iter/sec",
            "range": "stddev: 0.0021979497075851418",
            "extra": "mean: 14.893257590916743 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6108565047878782,
            "unit": "iter/sec",
            "range": "stddev: 0.025501566897342242",
            "extra": "mean: 620.7877591999932 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.006663051090044,
            "unit": "iter/sec",
            "range": "stddev: 0.002705580672671007",
            "extra": "mean: 31.243494468753852 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 75.10512631715955,
            "unit": "iter/sec",
            "range": "stddev: 0.0013896596327394306",
            "extra": "mean: 13.314670369864302 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 177.102959843112,
            "unit": "iter/sec",
            "range": "stddev: 0.0008844952421048113",
            "extra": "mean: 5.646433017753389 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 7835.4123342187495,
            "unit": "iter/sec",
            "range": "stddev: 0.00007425186915872564",
            "extra": "mean: 127.62570204924738 usec\nrounds: 4588"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 71.01077965564362,
            "unit": "iter/sec",
            "range": "stddev: 0.001279122389599265",
            "extra": "mean: 14.082368970589448 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5225262698964016,
            "unit": "iter/sec",
            "range": "stddev: 0.011297825345704544",
            "extra": "mean: 1.9137793783999881 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3078.941037384345,
            "unit": "iter/sec",
            "range": "stddev: 0.00007686520552342927",
            "extra": "mean: 324.7869926244287 usec\nrounds: 1627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 60.262037280268146,
            "unit": "iter/sec",
            "range": "stddev: 0.0011725266752162465",
            "extra": "mean: 16.594195037734547 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 187.33647156638105,
            "unit": "iter/sec",
            "range": "stddev: 0.0009293366242289549",
            "extra": "mean: 5.337988869111687 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 69.39445250206725,
            "unit": "iter/sec",
            "range": "stddev: 0.0019609705152089925",
            "extra": "mean: 14.41037379710158 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 68.91905427628377,
            "unit": "iter/sec",
            "range": "stddev: 0.0016082953391576272",
            "extra": "mean: 14.50977542424167 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 72.16096690270983,
            "unit": "iter/sec",
            "range": "stddev: 0.001770677694535054",
            "extra": "mean: 13.85790743835567 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4175261.1572677474,
            "unit": "iter/sec",
            "range": "stddev: 1.872289902036372e-7",
            "extra": "mean: 239.50597635304763 nsec\nrounds: 48307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 70.2541612999577,
            "unit": "iter/sec",
            "range": "stddev: 0.0013121889542918937",
            "extra": "mean: 14.23403228358805 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 59.78190978568862,
            "unit": "iter/sec",
            "range": "stddev: 0.0017129102800332724",
            "extra": "mean: 16.727468285722 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1459.1759791732634,
            "unit": "iter/sec",
            "range": "stddev: 0.00026524916317008325",
            "extra": "mean: 685.3182990077577 usec\nrounds: 1311"
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "9de88794755f0073bd3befadb93a659f07d27345",
          "message": "ci: only show docker compose logs if job requires services",
          "timestamp": "2023-04-13T12:51:14+02:00",
          "tree_id": "525a37f551cf8ad9fe6215f58b3c2d6e38d7fb6c",
          "url": "https://github.com/ibis-project/ibis/commit/9de88794755f0073bd3befadb93a659f07d27345"
        },
        "date": 1681383871281,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1510.4568654201419,
            "unit": "iter/sec",
            "range": "stddev: 0.00017900532169931417",
            "extra": "mean: 662.0513454529167 usec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 72.39358253767531,
            "unit": "iter/sec",
            "range": "stddev: 0.009724514107192083",
            "extra": "mean: 13.813379099999322 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 951.8599858092566,
            "unit": "iter/sec",
            "range": "stddev: 0.0001080613727154166",
            "extra": "mean: 1.0505746800038196 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 180.03424877617837,
            "unit": "iter/sec",
            "range": "stddev: 0.0008106204362900116",
            "extra": "mean: 5.554498695652164 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.15577203864547,
            "unit": "iter/sec",
            "range": "stddev: 0.0006254257272011531",
            "extra": "mean: 11.343556716418103 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4360737.430450842,
            "unit": "iter/sec",
            "range": "stddev: 4.082674073883111e-7",
            "extra": "mean: 229.3190121970781 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5709211903737862,
            "unit": "iter/sec",
            "range": "stddev: 0.01629705752002838",
            "extra": "mean: 1.7515552353999908 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.75002499751384,
            "unit": "iter/sec",
            "range": "stddev: 0.0010863511231053269",
            "extra": "mean: 30.534327838708922 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 193.2117012256703,
            "unit": "iter/sec",
            "range": "stddev: 0.0006920637522930026",
            "extra": "mean: 5.175669970588401 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1590290.007270785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012234278459372236",
            "extra": "mean: 628.8161250011086 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 56.55559021071968,
            "unit": "iter/sec",
            "range": "stddev: 0.0010242894667485895",
            "extra": "mean: 17.681718045450754 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 136.07111818263593,
            "unit": "iter/sec",
            "range": "stddev: 0.004623392974175342",
            "extra": "mean: 7.349098128654977 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 126.94406235172103,
            "unit": "iter/sec",
            "range": "stddev: 0.0005510284739563841",
            "extra": "mean: 7.877485417390556 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 75.8032780073905,
            "unit": "iter/sec",
            "range": "stddev: 0.0018054868613475298",
            "extra": "mean: 13.192041641029087 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4859305.143514669,
            "unit": "iter/sec",
            "range": "stddev: 2.5186301548319064e-7",
            "extra": "mean: 205.7907397181691 nsec\nrounds: 47394"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09957716609499766,
            "unit": "iter/sec",
            "range": "stddev: 0.12076159247281992",
            "extra": "mean: 10.042462938200003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 77.87414045493853,
            "unit": "iter/sec",
            "range": "stddev: 0.0013641948283877243",
            "extra": "mean: 12.841233227847246 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 64.95228660175067,
            "unit": "iter/sec",
            "range": "stddev: 0.01818945437325396",
            "extra": "mean: 15.395916792451256 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 72.01139991898594,
            "unit": "iter/sec",
            "range": "stddev: 0.0013385752390551915",
            "extra": "mean: 13.886690178569186 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 72.53004047800033,
            "unit": "iter/sec",
            "range": "stddev: 0.0014991531693821097",
            "extra": "mean: 13.787390623383397 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 123751.35117695501,
            "unit": "iter/sec",
            "range": "stddev: 0.000008104362501648849",
            "extra": "mean: 8.080719850646933 usec\nrounds: 21692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 76.98362863098397,
            "unit": "iter/sec",
            "range": "stddev: 0.0011035190888118067",
            "extra": "mean: 12.989774810348772 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 79.14166366355303,
            "unit": "iter/sec",
            "range": "stddev: 0.001702602874212741",
            "extra": "mean: 12.63556960656272 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 60.45035678062453,
            "unit": "iter/sec",
            "range": "stddev: 0.02010943053725513",
            "extra": "mean: 16.542499552633224 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.949085913942917,
            "unit": "iter/sec",
            "range": "stddev: 0.005431760727959757",
            "extra": "mean: 125.80062800000341 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 86.70750325614243,
            "unit": "iter/sec",
            "range": "stddev: 0.0005846822730837265",
            "extra": "mean: 11.53302727499721 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 52.26999704383417,
            "unit": "iter/sec",
            "range": "stddev: 0.020049697729402245",
            "extra": "mean: 19.131434026318953 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1277966.8414681205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053935736551194775",
            "extra": "mean: 782.4929157404476 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 373909.11841434066,
            "unit": "iter/sec",
            "range": "stddev: 0.000004771218624223881",
            "extra": "mean: 2.6744466790239336 usec\nrounds: 497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 561.7518192880066,
            "unit": "iter/sec",
            "range": "stddev: 0.0003795773295352343",
            "extra": "mean: 1.7801455476680998 msec\nrounds: 493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1550.155537829558,
            "unit": "iter/sec",
            "range": "stddev: 0.00022583049300975384",
            "extra": "mean: 645.0965568269005 usec\nrounds: 1135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1573.3125989968664,
            "unit": "iter/sec",
            "range": "stddev: 0.00020387086001155314",
            "extra": "mean: 635.6015966805282 usec\nrounds: 1567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1541.612024986897,
            "unit": "iter/sec",
            "range": "stddev: 0.00023812041683401303",
            "extra": "mean: 648.6716396808721 usec\nrounds: 877"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 73.22686507906562,
            "unit": "iter/sec",
            "range": "stddev: 0.0016889240629452257",
            "extra": "mean: 13.656190237288799 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 201.0910180483552,
            "unit": "iter/sec",
            "range": "stddev: 0.0006395047942411776",
            "extra": "mean: 4.972872531579386 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.576846721416096,
            "unit": "iter/sec",
            "range": "stddev: 0.00200922455152191",
            "extra": "mean: 24.64459613793028 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 88.86821221823052,
            "unit": "iter/sec",
            "range": "stddev: 0.0008148675460737724",
            "extra": "mean: 11.252617499993534 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.89926748969692,
            "unit": "iter/sec",
            "range": "stddev: 0.0019411771647101434",
            "extra": "mean: 30.395813533330813 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2690139864901866,
            "unit": "iter/sec",
            "range": "stddev: 0.023016826305384798",
            "extra": "mean: 788.0133794000017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60923.27457620215,
            "unit": "iter/sec",
            "range": "stddev: 0.00001687552882828051",
            "extra": "mean: 16.414088161810987 usec\nrounds: 8439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.04827899651634,
            "unit": "iter/sec",
            "range": "stddev: 0.0014429295851990313",
            "extra": "mean: 19.980707030297808 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.62275808963244,
            "unit": "iter/sec",
            "range": "stddev: 0.0008318026709922761",
            "extra": "mean: 15.71764616980592 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 71.01340192745101,
            "unit": "iter/sec",
            "range": "stddev: 0.0015198831744513011",
            "extra": "mean: 14.081848958899672 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1606.8411238209753,
            "unit": "iter/sec",
            "range": "stddev: 0.0001886216280761349",
            "extra": "mean: 622.3390633804902 usec\nrounds: 1278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 198.23350387665278,
            "unit": "iter/sec",
            "range": "stddev: 0.0006771160342280384",
            "extra": "mean: 5.044555942582905 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 396.14655355804115,
            "unit": "iter/sec",
            "range": "stddev: 0.00040997146567224807",
            "extra": "mean: 2.5243183135593927 msec\nrounds: 354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 187.4062533966663,
            "unit": "iter/sec",
            "range": "stddev: 0.0008687568836697716",
            "extra": "mean: 5.336001237287361 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5914756850294957,
            "unit": "iter/sec",
            "range": "stddev: 0.03161796106515003",
            "extra": "mean: 1.6906865747999973 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 220.52818212186185,
            "unit": "iter/sec",
            "range": "stddev: 0.0004323662320694084",
            "extra": "mean: 4.534567828829283 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 83.15667533623719,
            "unit": "iter/sec",
            "range": "stddev: 0.0013260865785086988",
            "extra": "mean: 12.02549279365225 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8012.327117227796,
            "unit": "iter/sec",
            "range": "stddev: 0.00005585111152568616",
            "extra": "mean: 124.80768512931013 usec\nrounds: 5272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 114.25136172047253,
            "unit": "iter/sec",
            "range": "stddev: 0.0007213234546987657",
            "extra": "mean: 8.752630909087989 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2024020.3712292966,
            "unit": "iter/sec",
            "range": "stddev: 7.524804254128513e-7",
            "extra": "mean: 494.0661735497884 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 186.01823413716875,
            "unit": "iter/sec",
            "range": "stddev: 0.0007196691408221578",
            "extra": "mean: 5.375817078569867 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 66.63049223207068,
            "unit": "iter/sec",
            "range": "stddev: 0.0017534501054078204",
            "extra": "mean: 15.008143666672156 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 182.1425038028421,
            "unit": "iter/sec",
            "range": "stddev: 0.0007176114707033202",
            "extra": "mean: 5.490206728916154 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 64.2805436539053,
            "unit": "iter/sec",
            "range": "stddev: 0.0008302150552080325",
            "extra": "mean: 15.556806821425287 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1301.002436989419,
            "unit": "iter/sec",
            "range": "stddev: 0.0001162256048281466",
            "extra": "mean: 768.6380682837514 usec\nrounds: 1113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7206.228476720604,
            "unit": "iter/sec",
            "range": "stddev: 0.00006016386467959824",
            "extra": "mean: 138.7688446502154 usec\nrounds: 4094"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8849652.308841351,
            "unit": "iter/sec",
            "range": "stddev: 1.317024038194783e-7",
            "extra": "mean: 112.99878968131688 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 109.25253028858998,
            "unit": "iter/sec",
            "range": "stddev: 0.0009626460672421446",
            "extra": "mean: 9.153106086957486 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 66.30264262998271,
            "unit": "iter/sec",
            "range": "stddev: 0.0016200275592892428",
            "extra": "mean: 15.082355096775435 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.394904123137927,
            "unit": "iter/sec",
            "range": "stddev: 0.00204872809361958",
            "extra": "mean: 57.488100705875375 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5670.1308382813495,
            "unit": "iter/sec",
            "range": "stddev: 0.00007756347429448825",
            "extra": "mean: 176.3627733682255 usec\nrounds: 1134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 25.431873451856884,
            "unit": "iter/sec",
            "range": "stddev: 0.0022429531912312763",
            "extra": "mean: 39.32073670832873 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1506301.2981471468,
            "unit": "iter/sec",
            "range": "stddev: 0.000003891684725250208",
            "extra": "mean: 663.8778053435046 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 136.88416703009895,
            "unit": "iter/sec",
            "range": "stddev: 0.00036751384858508613",
            "extra": "mean: 7.305446799994874 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 177.67637326520705,
            "unit": "iter/sec",
            "range": "stddev: 0.004420913515281353",
            "extra": "mean: 5.628210333330921 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1534.7497153558863,
            "unit": "iter/sec",
            "range": "stddev: 0.0001871329026925275",
            "extra": "mean: 651.5720380948984 usec\nrounds: 1050"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 567748.7250548663,
            "unit": "iter/sec",
            "range": "stddev: 0.000004083972672287808",
            "extra": "mean: 1.7613425726378542 usec\nrounds: 20492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 70.32442698674652,
            "unit": "iter/sec",
            "range": "stddev: 0.001326203336079077",
            "extra": "mean: 14.21981014062812 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.52433483152633,
            "unit": "iter/sec",
            "range": "stddev: 0.003355307547752132",
            "extra": "mean: 86.77290400000952 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 195.64044176476452,
            "unit": "iter/sec",
            "range": "stddev: 0.0007330229539241214",
            "extra": "mean: 5.111417613758952 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5612830330595698,
            "unit": "iter/sec",
            "range": "stddev: 0.022601592586622428",
            "extra": "mean: 1.7816323335999869 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.61942426565529,
            "unit": "iter/sec",
            "range": "stddev: 0.03553683299938671",
            "extra": "mean: 33.76162855263643 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10567.6724161528,
            "unit": "iter/sec",
            "range": "stddev: 0.00004613196674370977",
            "extra": "mean: 94.62821713431326 usec\nrounds: 3712"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 223.82905550104707,
            "unit": "iter/sec",
            "range": "stddev: 0.0005976387172196806",
            "extra": "mean: 4.467695213927765 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.5725539694569175,
            "unit": "iter/sec",
            "range": "stddev: 0.007042230147223833",
            "extra": "mean: 218.6961611999891 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5430917357516201,
            "unit": "iter/sec",
            "range": "stddev: 0.03151060126206012",
            "extra": "mean: 1.8413095507999855 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9262994820832415,
            "unit": "iter/sec",
            "range": "stddev: 0.010532497114791916",
            "extra": "mean: 519.1300778000141 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1543.7354358284322,
            "unit": "iter/sec",
            "range": "stddev: 0.00024783074854420074",
            "extra": "mean: 647.7793906851394 usec\nrounds: 773"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 102.60956583704052,
            "unit": "iter/sec",
            "range": "stddev: 0.0007233982950012175",
            "extra": "mean: 9.745680062501686 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3315.985037638639,
            "unit": "iter/sec",
            "range": "stddev: 0.0000698813113388749",
            "extra": "mean: 301.5695151363272 usec\nrounds: 2081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 74.52012393590888,
            "unit": "iter/sec",
            "range": "stddev: 0.0014565518701209683",
            "extra": "mean: 13.419193999999933 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 546.4470647267613,
            "unit": "iter/sec",
            "range": "stddev: 0.00021113280658641514",
            "extra": "mean: 1.8300034249429593 msec\nrounds: 433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 61.23783072171826,
            "unit": "iter/sec",
            "range": "stddev: 0.023525599785015717",
            "extra": "mean: 16.329775046152076 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1667.6001631099916,
            "unit": "iter/sec",
            "range": "stddev: 0.0001395430829882357",
            "extra": "mean: 599.664129400809 usec\nrounds: 966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5455504.423743497,
            "unit": "iter/sec",
            "range": "stddev: 2.2092074339303696e-7",
            "extra": "mean: 183.30110697880556 nsec\nrounds: 56180"
          }
        ]
      }
    ]
  }
}