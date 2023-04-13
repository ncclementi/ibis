window.BENCHMARK_DATA = {
  "lastUpdate": 1681383774761,
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
      }
    ]
  }
}