window.BENCHMARK_DATA = {
  "lastUpdate": 1677285524016,
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
          "id": "46255e7073b309e4b3786cddfd9fced34c3f3261",
          "message": "chore(flake/nixpkgs): `0663b90f` -> `5798b8c5`",
          "timestamp": "2023-02-25T00:32:26Z",
          "tree_id": "0f3e95272fde851f315d3ed6eac425f57c4ec1d0",
          "url": "https://github.com/ibis-project/ibis/commit/46255e7073b309e4b3786cddfd9fced34c3f3261"
        },
        "date": 1677285430962,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.53992579259721,
            "unit": "iter/sec",
            "range": "stddev: 0.018169614325313877",
            "extra": "mean: 40.74991947618942 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 96.08923803443375,
            "unit": "iter/sec",
            "range": "stddev: 0.00009962369730714016",
            "extra": "mean: 10.40699271277027 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2510.6518534374936,
            "unit": "iter/sec",
            "range": "stddev: 0.00024341998832661988",
            "extra": "mean: 398.30293420843526 usec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2321.928744948402,
            "unit": "iter/sec",
            "range": "stddev: 0.0002688595499653885",
            "extra": "mean: 430.6764374986116 usec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 6594.861933801712,
            "unit": "iter/sec",
            "range": "stddev: 0.0002728865065090867",
            "extra": "mean: 151.63319718257304 usec\nrounds: 1349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 182.43657793386683,
            "unit": "iter/sec",
            "range": "stddev: 0.0014241473932704602",
            "extra": "mean: 5.481356925925785 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6391799111883918,
            "unit": "iter/sec",
            "range": "stddev: 0.0012973878185758298",
            "extra": "mean: 1.5645047387999966 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 91.98731793332179,
            "unit": "iter/sec",
            "range": "stddev: 0.0007426057982736702",
            "extra": "mean: 10.87106377777927 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9153.93044211131,
            "unit": "iter/sec",
            "range": "stddev: 0.000002637693677462943",
            "extra": "mean: 109.24269157646722 usec\nrounds: 3787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 109.48907920277277,
            "unit": "iter/sec",
            "range": "stddev: 0.0001098302642763173",
            "extra": "mean: 9.13333098863686 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 132.41715457502463,
            "unit": "iter/sec",
            "range": "stddev: 0.00006795342543605066",
            "extra": "mean: 7.551891620155772 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.496300328035037,
            "unit": "iter/sec",
            "range": "stddev: 0.00039844918010155427",
            "extra": "mean: 33.90255689285685 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 209.96512172888166,
            "unit": "iter/sec",
            "range": "stddev: 0.0002583365270532867",
            "extra": "mean: 4.762695783784767 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 57.281581981172,
            "unit": "iter/sec",
            "range": "stddev: 0.0001847614348057134",
            "extra": "mean: 17.45761840740872 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 85.21705159861463,
            "unit": "iter/sec",
            "range": "stddev: 0.0008702127042588698",
            "extra": "mean: 11.734740656249798 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 93.79253507393888,
            "unit": "iter/sec",
            "range": "stddev: 0.0007660988362822611",
            "extra": "mean: 10.661829315218704 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 324514.24086391646,
            "unit": "iter/sec",
            "range": "stddev: 6.47082125888316e-7",
            "extra": "mean: 3.081528863996281 usec\nrounds: 1611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 71.14087688816029,
            "unit": "iter/sec",
            "range": "stddev: 0.000895253198766146",
            "extra": "mean: 14.05661616417925 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 58.08833989050488,
            "unit": "iter/sec",
            "range": "stddev: 0.0036952262089022486",
            "extra": "mean: 17.215158874999286 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 153.60577161297817,
            "unit": "iter/sec",
            "range": "stddev: 0.002110271433604149",
            "extra": "mean: 6.51017204301137 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 57.27637918343152,
            "unit": "iter/sec",
            "range": "stddev: 0.00010864488080094532",
            "extra": "mean: 17.459204199997203 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 386.3933032286155,
            "unit": "iter/sec",
            "range": "stddev: 0.007778130636956976",
            "extra": "mean: 2.5880365721771703 msec\nrounds: 381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1222146.0652088467,
            "unit": "iter/sec",
            "range": "stddev: 1.8219602641365226e-7",
            "extra": "mean: 818.2328024998508 nsec\nrounds: 116266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 141.832210622718,
            "unit": "iter/sec",
            "range": "stddev: 0.000047637899498332486",
            "extra": "mean: 7.050584599996531 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3029.3693751166834,
            "unit": "iter/sec",
            "range": "stddev: 0.00006920286900612008",
            "extra": "mean: 330.10170638616245 usec\nrounds: 1519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.904061830649518,
            "unit": "iter/sec",
            "range": "stddev: 0.0005496735764868744",
            "extra": "mean: 37.16910874999494 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3347.959993915068,
            "unit": "iter/sec",
            "range": "stddev: 0.00006749506245026529",
            "extra": "mean: 298.6893516701228 usec\nrounds: 1527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 92.09307660552167,
            "unit": "iter/sec",
            "range": "stddev: 0.0008852189274378267",
            "extra": "mean: 10.858579568184851 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8368652850277394,
            "unit": "iter/sec",
            "range": "stddev: 0.0033231270203976336",
            "extra": "mean: 544.4057374000067 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1232960.8984512822,
            "unit": "iter/sec",
            "range": "stddev: 1.7826897550502945e-7",
            "extra": "mean: 811.0557287389214 nsec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1225.6915742152282,
            "unit": "iter/sec",
            "range": "stddev: 0.000010502562350061484",
            "extra": "mean: 815.8659331898147 usec\nrounds: 928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.33623395872824,
            "unit": "iter/sec",
            "range": "stddev: 0.0007800714046985324",
            "extra": "mean: 34.087538346157615 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4958322681356319,
            "unit": "iter/sec",
            "range": "stddev: 0.0030576622680368046",
            "extra": "mean: 2.0168110554000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3241.197261359764,
            "unit": "iter/sec",
            "range": "stddev: 0.00009084927673399714",
            "extra": "mean: 308.52796647757094 usec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 69.64106865366759,
            "unit": "iter/sec",
            "range": "stddev: 0.00017743366636106686",
            "extra": "mean: 14.35934311940424 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 62.100585336524205,
            "unit": "iter/sec",
            "range": "stddev: 0.000989881271251472",
            "extra": "mean: 16.102907799998693 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 228.05207919327938,
            "unit": "iter/sec",
            "range": "stddev: 0.0000751816010619402",
            "extra": "mean: 4.384963309860802 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.757605817593734,
            "unit": "iter/sec",
            "range": "stddev: 0.0003553006452149302",
            "extra": "mean: 128.90575049998887 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 75.55334339396727,
            "unit": "iter/sec",
            "range": "stddev: 0.00006846643831072939",
            "extra": "mean: 13.235681639998043 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 47.55253074277496,
            "unit": "iter/sec",
            "range": "stddev: 0.00010680436422290901",
            "extra": "mean: 21.02937497499937 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3158532697135,
            "unit": "iter/sec",
            "range": "stddev: 0.0018024467212224954",
            "extra": "mean: 759.9631531999989 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 70.15531613247677,
            "unit": "iter/sec",
            "range": "stddev: 0.0009100641938149285",
            "extra": "mean: 14.254087289859326 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 67.08952876218963,
            "unit": "iter/sec",
            "range": "stddev: 0.0010568000344191436",
            "extra": "mean: 14.905455716415478 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3333.9454153728216,
            "unit": "iter/sec",
            "range": "stddev: 0.00004482100345558282",
            "extra": "mean: 299.9449227299884 usec\nrounds: 1773"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.35391844910058,
            "unit": "iter/sec",
            "range": "stddev: 0.00043752308907247655",
            "extra": "mean: 54.48427826315226 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 199.8691777559801,
            "unit": "iter/sec",
            "range": "stddev: 0.00028829607907837927",
            "extra": "mean: 5.0032726968081995 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 210.6688365952207,
            "unit": "iter/sec",
            "range": "stddev: 0.000280128160240798",
            "extra": "mean: 4.746786549742052 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3650826.1876405585,
            "unit": "iter/sec",
            "range": "stddev: 1.6371425324961842e-8",
            "extra": "mean: 273.9106023137758 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 820.8199283058278,
            "unit": "iter/sec",
            "range": "stddev: 0.000019871130787126887",
            "extra": "mean: 1.2182940076321 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8489799.562908538,
            "unit": "iter/sec",
            "range": "stddev: 5.305454857925545e-9",
            "extra": "mean: 117.7884109736648 nsec\nrounds: 83334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 87.15335340195003,
            "unit": "iter/sec",
            "range": "stddev: 0.0010191047409615123",
            "extra": "mean: 11.474027802326942 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.24689858277031,
            "unit": "iter/sec",
            "range": "stddev: 0.00025850877452237827",
            "extra": "mean: 24.846635025638964 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 492318.76583841833,
            "unit": "iter/sec",
            "range": "stddev: 3.482240997722834e-7",
            "extra": "mean: 2.031204311899428 usec\nrounds: 18692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 205.20318014406405,
            "unit": "iter/sec",
            "range": "stddev: 0.00030225449224750747",
            "extra": "mean: 4.873218822914656 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 70.65660804308064,
            "unit": "iter/sec",
            "range": "stddev: 0.0009359419427047725",
            "extra": "mean: 14.152957914287104 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 7721.034227009009,
            "unit": "iter/sec",
            "range": "stddev: 0.00003856993002181453",
            "extra": "mean: 129.5163278129104 usec\nrounds: 3804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 520.1628488394967,
            "unit": "iter/sec",
            "range": "stddev: 0.000021528659964772503",
            "extra": "mean: 1.9224748600001678 msec\nrounds: 450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 115930.42303545898,
            "unit": "iter/sec",
            "range": "stddev: 5.470716247859121e-7",
            "extra": "mean: 8.625863460311324 usec\nrounds: 31251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3230.7856564580666,
            "unit": "iter/sec",
            "range": "stddev: 0.00007433366245734313",
            "extra": "mean: 309.5222358688775 usec\nrounds: 1433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6195026821886496,
            "unit": "iter/sec",
            "range": "stddev: 0.003525651045107191",
            "extra": "mean: 1.6141980152000088 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 76.14697412901354,
            "unit": "iter/sec",
            "range": "stddev: 0.020263198646408822",
            "extra": "mean: 13.132498191007958 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5324.333914447535,
            "unit": "iter/sec",
            "range": "stddev: 0.00002109109951327261",
            "extra": "mean: 187.81692058916673 usec\nrounds: 2783"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 111.84450491489166,
            "unit": "iter/sec",
            "range": "stddev: 0.00018573321682899122",
            "extra": "mean: 8.940984635418184 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 209.00545638240925,
            "unit": "iter/sec",
            "range": "stddev: 0.00009705421405631835",
            "extra": "mean: 4.784564084156437 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1444703.6192129091,
            "unit": "iter/sec",
            "range": "stddev: 1.1989246361406782e-7",
            "extra": "mean: 692.1834947328583 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 38.10162936160763,
            "unit": "iter/sec",
            "range": "stddev: 0.0009969989909853739",
            "extra": "mean: 26.245596756752633 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11383762105003292,
            "unit": "iter/sec",
            "range": "stddev: 0.017680642502038935",
            "extra": "mean: 8.78444217980002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 360.31418454553744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000376144773886446",
            "extra": "mean: 2.7753556282034673 msec\nrounds: 312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3469.117348735051,
            "unit": "iter/sec",
            "range": "stddev: 0.00006079452106299346",
            "extra": "mean: 288.2577611174299 usec\nrounds: 1574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4408180.31540386,
            "unit": "iter/sec",
            "range": "stddev: 1.4831672162998181e-8",
            "extra": "mean: 226.85097442722193 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 67.82956811896452,
            "unit": "iter/sec",
            "range": "stddev: 0.0009958943383679532",
            "extra": "mean: 14.742833070175621 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3411631.399499594,
            "unit": "iter/sec",
            "range": "stddev: 1.6586387459238644e-8",
            "extra": "mean: 293.11490102571383 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 45806.65897897455,
            "unit": "iter/sec",
            "range": "stddev: 8.686457582720805e-7",
            "extra": "mean: 21.83088708694088 usec\nrounds: 9804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 90.68252132424568,
            "unit": "iter/sec",
            "range": "stddev: 0.0003625893771362937",
            "extra": "mean: 11.027483415733295 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.48202291343678,
            "unit": "iter/sec",
            "range": "stddev: 0.00010292151608559045",
            "extra": "mean: 87.09266716666757 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 182.7645830454971,
            "unit": "iter/sec",
            "range": "stddev: 0.0006443442761991258",
            "extra": "mean: 5.471519609196174 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6557303493004679,
            "unit": "iter/sec",
            "range": "stddev: 0.009907366632227126",
            "extra": "mean: 1.5250171065999893 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1217002.590313106,
            "unit": "iter/sec",
            "range": "stddev: 1.449394693327043e-7",
            "extra": "mean: 821.6909380141283 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.152871392000674,
            "unit": "iter/sec",
            "range": "stddev: 0.0014099802642346074",
            "extra": "mean: 240.79724740000756 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 69.01376092984238,
            "unit": "iter/sec",
            "range": "stddev: 0.0009051931609452847",
            "extra": "mean: 14.489863855073404 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 230.79054608006288,
            "unit": "iter/sec",
            "range": "stddev: 0.00001822354324274323",
            "extra": "mean: 4.332933116129865 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 92.35337852946675,
            "unit": "iter/sec",
            "range": "stddev: 0.0009465833445694942",
            "extra": "mean: 10.827974200001082 msec\nrounds: 90"
          }
        ]
      }
    ]
  }
}