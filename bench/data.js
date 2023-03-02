window.BENCHMARK_DATA = {
  "lastUpdate": 1677753788815,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "fac8c478b4166c6f47bd9b9047592acd1ec936d2",
          "message": "feat(postgres): parse tsvector columns as strings\n\nFixes #5402\n\nThe `tsvector` type is a postgres-specific type for fast text search --\nthis doesn't add support for using any of the specific features\nassociated with `tsvector` but it will let a user load a table that\ncontains them, instead of erroring out.",
          "timestamp": "2023-03-02T05:34:04-05:00",
          "tree_id": "6ef08ced3950b8905078e8d4902063a4e4f74088",
          "url": "https://github.com/ibis-project/ibis/commit/fac8c478b4166c6f47bd9b9047592acd1ec936d2"
        },
        "date": 1677753711797,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.881122373512724,
            "unit": "iter/sec",
            "range": "stddev: 0.0006287070282672849",
            "extra": "mean: 16.9833719142868 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 129.44220891180495,
            "unit": "iter/sec",
            "range": "stddev: 0.007499211540297817",
            "extra": "mean: 7.72545530864161 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 137.0463727374978,
            "unit": "iter/sec",
            "range": "stddev: 0.0004909114731297225",
            "extra": "mean: 7.296800199998188 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 177.47126499850654,
            "unit": "iter/sec",
            "range": "stddev: 0.0038646740851986327",
            "extra": "mean: 5.634715005882305 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.30007084115834,
            "unit": "iter/sec",
            "range": "stddev: 0.00006251117547916637",
            "extra": "mean: 3.409477526316613 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 94.10430427399636,
            "unit": "iter/sec",
            "range": "stddev: 0.010762874272182232",
            "extra": "mean: 10.626506488888923 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 748.3593651601078,
            "unit": "iter/sec",
            "range": "stddev: 0.000025225079360988464",
            "extra": "mean: 1.3362564117655624 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 305.2337471313209,
            "unit": "iter/sec",
            "range": "stddev: 0.00018063634820171553",
            "extra": "mean: 3.2761777142871735 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 198.03173922422187,
            "unit": "iter/sec",
            "range": "stddev: 0.000051744791528214525",
            "extra": "mean: 5.049695588785128 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 136.63037182915537,
            "unit": "iter/sec",
            "range": "stddev: 0.00006589255720415217",
            "extra": "mean: 7.31901689655368 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5445494.33440062,
            "unit": "iter/sec",
            "range": "stddev: 1.1919399527230821e-8",
            "extra": "mean: 183.63805718827115 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5747.551544688435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000490850378559579",
            "extra": "mean: 173.98713038496263 usec\nrounds: 1764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.671197899838596,
            "unit": "iter/sec",
            "range": "stddev: 0.0006763086189068879",
            "extra": "mean: 25.859038620682956 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.8456442595032,
            "unit": "iter/sec",
            "range": "stddev: 0.00008644713457970164",
            "extra": "mean: 1.8387570270266553 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6175401.719726943,
            "unit": "iter/sec",
            "range": "stddev: 9.448440473290804e-9",
            "extra": "mean: 161.93278516666018 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74613.48871228313,
            "unit": "iter/sec",
            "range": "stddev: 4.924550377163135e-7",
            "extra": "mean: 13.402402397455202 usec\nrounds: 13514"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 245.2848098848016,
            "unit": "iter/sec",
            "range": "stddev: 0.003735439402669208",
            "extra": "mean: 4.0768933081084455 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 104.93431607456648,
            "unit": "iter/sec",
            "range": "stddev: 0.0005679623176817583",
            "extra": "mean: 9.529770978727289 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 145.4778093305092,
            "unit": "iter/sec",
            "range": "stddev: 0.0005196399075093489",
            "extra": "mean: 6.873900594200677 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.34491644183356,
            "unit": "iter/sec",
            "range": "stddev: 0.019945114715362505",
            "extra": "mean: 10.94751671962805 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.239819935089216,
            "unit": "iter/sec",
            "range": "stddev: 0.00037211121866062883",
            "extra": "mean: 39.61993399999528 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 41.8237611573517,
            "unit": "iter/sec",
            "range": "stddev: 0.000563391927287136",
            "extra": "mean: 23.909853449998053 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.73022445876367,
            "unit": "iter/sec",
            "range": "stddev: 0.02045253728638937",
            "extra": "mean: 11.39858020618693 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 134.29177989200485,
            "unit": "iter/sec",
            "range": "stddev: 0.0005575229576322208",
            "extra": "mean: 7.446472157895166 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.32444422046085,
            "unit": "iter/sec",
            "range": "stddev: 0.00005098984625082213",
            "extra": "mean: 8.242362093024568 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1187.1429533189453,
            "unit": "iter/sec",
            "range": "stddev: 0.00000950588165417835",
            "extra": "mean: 842.3585358479853 usec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 288.3699934460549,
            "unit": "iter/sec",
            "range": "stddev: 0.00008739109446608482",
            "extra": "mean: 3.467767183575115 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8316133595362459,
            "unit": "iter/sec",
            "range": "stddev: 0.0034897116633100787",
            "extra": "mean: 1.2024818847999938 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1768.6466289749865,
            "unit": "iter/sec",
            "range": "stddev: 0.000006734819360510014",
            "extra": "mean: 565.4040686349805 usec\nrounds: 1253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 309.9987191864934,
            "unit": "iter/sec",
            "range": "stddev: 0.0001738942662005997",
            "extra": "mean: 3.2258197795920758 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 287.39277741522864,
            "unit": "iter/sec",
            "range": "stddev: 0.00026641885793259545",
            "extra": "mean: 3.479558564393522 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1929672.4909443017,
            "unit": "iter/sec",
            "range": "stddev: 9.64738297269136e-8",
            "extra": "mean: 518.2226542031707 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.595261049113958,
            "unit": "iter/sec",
            "range": "stddev: 0.003928662693701476",
            "extra": "mean: 94.38181800000352 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.60646303444254,
            "unit": "iter/sec",
            "range": "stddev: 0.0004966504967994904",
            "extra": "mean: 22.932380441177965 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 109.17556934572734,
            "unit": "iter/sec",
            "range": "stddev: 0.0006325212950686549",
            "extra": "mean: 9.159558369998422 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.54691530211413,
            "unit": "iter/sec",
            "range": "stddev: 0.00010185432028857992",
            "extra": "mean: 9.751634137934754 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 316.4966437904552,
            "unit": "iter/sec",
            "range": "stddev: 0.00020632587398739275",
            "extra": "mean: 3.159591166666765 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145310.60439333477,
            "unit": "iter/sec",
            "range": "stddev: 3.101451128537063e-7",
            "extra": "mean: 6.881810203563291 usec\nrounds: 36497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 142.5513163554229,
            "unit": "iter/sec",
            "range": "stddev: 0.0006198097252214414",
            "extra": "mean: 7.015017648147858 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5398.952042406492,
            "unit": "iter/sec",
            "range": "stddev: 0.00005315541081560905",
            "extra": "mean: 185.22113035000524 usec\nrounds: 2570"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 312.26889591384736,
            "unit": "iter/sec",
            "range": "stddev: 0.0002092998608368123",
            "extra": "mean: 3.2023682572467687 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5312.290305397791,
            "unit": "iter/sec",
            "range": "stddev: 0.000052630821680485794",
            "extra": "mean: 188.2427244203701 usec\nrounds: 3538"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5281.845956776645,
            "unit": "iter/sec",
            "range": "stddev: 0.00005234239246892832",
            "extra": "mean: 189.3277479470966 usec\nrounds: 2801"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.06080814878231,
            "unit": "iter/sec",
            "range": "stddev: 0.0005735688217494576",
            "extra": "mean: 10.51958235443225 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 141.73667583221365,
            "unit": "iter/sec",
            "range": "stddev: 0.0005565467091002164",
            "extra": "mean: 7.055336906474293 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8949643599354246,
            "unit": "iter/sec",
            "range": "stddev: 0.005202092825931638",
            "extra": "mean: 1.117362930600001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.598993826679488,
            "unit": "iter/sec",
            "range": "stddev: 0.0005112599471633314",
            "extra": "mean: 64.10669887500475 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 111.62386068968003,
            "unit": "iter/sec",
            "range": "stddev: 0.01859793133338245",
            "extra": "mean: 8.958658066665965 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12224.070671101672,
            "unit": "iter/sec",
            "range": "stddev: 0.000019281071856508645",
            "extra": "mean: 81.80580977530269 usec\nrounds: 4358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4828493420183317,
            "unit": "iter/sec",
            "range": "stddev: 0.0017891133706548737",
            "extra": "mean: 402.76306060000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.6232065151844415,
            "unit": "iter/sec",
            "range": "stddev: 0.005412203172095697",
            "extra": "mean: 177.83447883332806 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7219858720654189,
            "unit": "iter/sec",
            "range": "stddev: 0.002684209198305237",
            "extra": "mean: 580.7248573999971 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.6206257715963,
            "unit": "iter/sec",
            "range": "stddev: 0.0005884418675181103",
            "extra": "mean: 9.558344663156205 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 143.03232072745757,
            "unit": "iter/sec",
            "range": "stddev: 0.0006092041140738527",
            "extra": "mean: 6.9914267972024335 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2729256.98047772,
            "unit": "iter/sec",
            "range": "stddev: 1.4083401385216054e-8",
            "extra": "mean: 366.4000887978151 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 317.74106909787537,
            "unit": "iter/sec",
            "range": "stddev: 0.00020522583429072533",
            "extra": "mean: 3.147216703333887 msec\nrounds: 300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.64482312958813,
            "unit": "iter/sec",
            "range": "stddev: 0.00018620855288795313",
            "extra": "mean: 5.13756278703715 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.9911570795344,
            "unit": "iter/sec",
            "range": "stddev: 0.00001744217785775557",
            "extra": "mean: 3.0581866767631545 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.36140190004244,
            "unit": "iter/sec",
            "range": "stddev: 0.00006026130379537338",
            "extra": "mean: 6.197268914529287 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.89280496451774,
            "unit": "iter/sec",
            "range": "stddev: 0.0006628314859598154",
            "extra": "mean: 9.18334320000156 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.18256846627372,
            "unit": "iter/sec",
            "range": "stddev: 0.00014517027281356148",
            "extra": "mean: 15.34152494339668 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12924.233920942233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013955960783652855",
            "extra": "mean: 77.37402511568715 usec\nrounds: 6689"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5691.422501859179,
            "unit": "iter/sec",
            "range": "stddev: 0.00004921461012983184",
            "extra": "mean: 175.70299862175696 usec\nrounds: 2176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.332760711882,
            "unit": "iter/sec",
            "range": "stddev: 0.00002620438782356393",
            "extra": "mean: 1.4655605850680449 msec\nrounds: 576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 318.2566353115121,
            "unit": "iter/sec",
            "range": "stddev: 0.00020786754817273472",
            "extra": "mean: 3.1421183065710223 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5460.149472700785,
            "unit": "iter/sec",
            "range": "stddev: 0.000051953967461503666",
            "extra": "mean: 183.14516937672116 usec\nrounds: 3997"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1678588285808682,
            "unit": "iter/sec",
            "range": "stddev: 0.1803171446040893",
            "extra": "mean: 5.957386980799981 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 312.4787822318813,
            "unit": "iter/sec",
            "range": "stddev: 0.0002006865003339545",
            "extra": "mean: 3.2002172846984833 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5303.427206604491,
            "unit": "iter/sec",
            "range": "stddev: 0.00004602931286646959",
            "extra": "mean: 188.5573160605796 usec\nrounds: 2721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 786666.1275277655,
            "unit": "iter/sec",
            "range": "stddev: 0.00000192900621510303",
            "extra": "mean: 1.2711873118811827 usec\nrounds: 23202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.99606878356141,
            "unit": "iter/sec",
            "range": "stddev: 0.00018179460063593478",
            "extra": "mean: 10.638742800006185 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5264.040633646675,
            "unit": "iter/sec",
            "range": "stddev: 0.000021213585305881428",
            "extra": "mean: 189.96813846918351 usec\nrounds: 2181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 493282.0219780122,
            "unit": "iter/sec",
            "range": "stddev: 2.032612650797576e-7",
            "extra": "mean: 2.0272378790333745 usec\nrounds: 1980"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1804164.9435556838,
            "unit": "iter/sec",
            "range": "stddev: 8.672333930286942e-8",
            "extra": "mean: 554.273046692272 nsec\nrounds: 138870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.53630999767626,
            "unit": "iter/sec",
            "range": "stddev: 0.00040776142744397326",
            "extra": "mean: 15.495153039211674 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.67066112962731,
            "unit": "iter/sec",
            "range": "stddev: 0.0003669634759652201",
            "extra": "mean: 20.546258809524772 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11514558.913690936,
            "unit": "iter/sec",
            "range": "stddev: 3.1129260847997356e-9",
            "extra": "mean: 86.84657462747536 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6990754.243873291,
            "unit": "iter/sec",
            "range": "stddev: 9.37244555726501e-9",
            "extra": "mean: 143.04608131179504 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.86618376583024,
            "unit": "iter/sec",
            "range": "stddev: 0.0003086507736384606",
            "extra": "mean: 6.177942648272274 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 78.19427408109412,
            "unit": "iter/sec",
            "range": "stddev: 0.00007480849762649637",
            "extra": "mean: 12.788660189656786 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2739428.371158509,
            "unit": "iter/sec",
            "range": "stddev: 1.533697898949026e-8",
            "extra": "mean: 365.0396595608178 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8455.77920530805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000380019390760212",
            "extra": "mean: 118.26231216778434 usec\nrounds: 3386"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 144.21666955733437,
            "unit": "iter/sec",
            "range": "stddev: 0.0005676181026163224",
            "extra": "mean: 6.934011186567048 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.97085386900288,
            "unit": "iter/sec",
            "range": "stddev: 0.00011739686041467667",
            "extra": "mean: 10.207117326313222 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13924.51095295748,
            "unit": "iter/sec",
            "range": "stddev: 0.000001741538586364199",
            "extra": "mean: 71.81580763435043 usec\nrounds: 6654"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.699548906297061,
            "unit": "iter/sec",
            "range": "stddev: 0.0022675178649384487",
            "extra": "mean: 1.4294926216000021 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8948740324832005,
            "unit": "iter/sec",
            "range": "stddev: 0.0055995757048094294",
            "extra": "mean: 1.1174757158000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5803.377415524346,
            "unit": "iter/sec",
            "range": "stddev: 0.00004658645115208956",
            "extra": "mean: 172.3134527361509 usec\nrounds: 2412"
          }
        ]
      }
    ]
  }
}