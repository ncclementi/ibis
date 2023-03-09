window.BENCHMARK_DATA = {
  "lastUpdate": 1678366759264,
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
          "id": "5a8ffe9164de9ae97d14716f1bfa107fef74a181",
          "message": "feat(api): make `cache` evaluate only once per session per expression",
          "timestamp": "2023-03-09T07:51:15-05:00",
          "tree_id": "764fee0d547469ad7f0475910efe973067994b4f",
          "url": "https://github.com/ibis-project/ibis/commit/5a8ffe9164de9ae97d14716f1bfa107fef74a181"
        },
        "date": 1678366675011,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.51942980761174,
            "unit": "iter/sec",
            "range": "stddev: 0.00005225675505188361",
            "extra": "mean: 6.078309420166331 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5639.3157218892575,
            "unit": "iter/sec",
            "range": "stddev: 0.00004847932996882526",
            "extra": "mean: 177.32647883473786 usec\nrounds: 756"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.05526707670049,
            "unit": "iter/sec",
            "range": "stddev: 0.0005172296481895446",
            "extra": "mean: 9.518799274194444 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.79908040491048,
            "unit": "iter/sec",
            "range": "stddev: 0.0006006492184948191",
            "extra": "mean: 8.210242611648518 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8506049798712295,
            "unit": "iter/sec",
            "range": "stddev: 0.003089519837235533",
            "extra": "mean: 1.1756338414000198 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.474592949275237,
            "unit": "iter/sec",
            "range": "stddev: 0.0003204333114550949",
            "extra": "mean: 37.77206327273772 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.46370229567121,
            "unit": "iter/sec",
            "range": "stddev: 0.0005398122216995453",
            "extra": "mean: 17.710492924525514 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1890789.1966205752,
            "unit": "iter/sec",
            "range": "stddev: 7.555735585652187e-8",
            "extra": "mean: 528.8796877977245 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6773514069004284,
            "unit": "iter/sec",
            "range": "stddev: 0.040770109537074314",
            "extra": "mean: 1.4763385589999984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 314.8754927361196,
            "unit": "iter/sec",
            "range": "stddev: 0.0001760116909074264",
            "extra": "mean: 3.1758584680899467 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5817.424223893473,
            "unit": "iter/sec",
            "range": "stddev: 0.000045871222900665084",
            "extra": "mean: 171.89738301923634 usec\nrounds: 530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 166.6075237205984,
            "unit": "iter/sec",
            "range": "stddev: 0.006290382333160847",
            "extra": "mean: 6.002129901870487 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13013667.244393157,
            "unit": "iter/sec",
            "range": "stddev: 7.118526420057866e-9",
            "extra": "mean: 76.84229058722242 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18115790382098046,
            "unit": "iter/sec",
            "range": "stddev: 0.01976453864700666",
            "extra": "mean: 5.520046207799998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 255.71423014219585,
            "unit": "iter/sec",
            "range": "stddev: 0.003934064459913954",
            "extra": "mean: 3.910615374998594 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6464361.771479236,
            "unit": "iter/sec",
            "range": "stddev: 1.0552748426891663e-8",
            "extra": "mean: 154.69431250106626 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.53802128519699,
            "unit": "iter/sec",
            "range": "stddev: 0.00046171448157928535",
            "extra": "mean: 9.848527550002473 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13220.704707767405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031882926118248043",
            "extra": "mean: 75.63893318126088 usec\nrounds: 1317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9255649799226726,
            "unit": "iter/sec",
            "range": "stddev: 0.002229124153582684",
            "extra": "mean: 1.0804211716000167 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 107.82250128184589,
            "unit": "iter/sec",
            "range": "stddev: 0.010953513097633354",
            "extra": "mean: 9.274501964910087 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1676052.4033564215,
            "unit": "iter/sec",
            "range": "stddev: 1.8432077386562339e-7",
            "extra": "mean: 596.6400561208136 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11810.070987679757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019376762000416433",
            "extra": "mean: 84.67349612404514 usec\nrounds: 5289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5675.386384703281,
            "unit": "iter/sec",
            "range": "stddev: 0.00007814988846229865",
            "extra": "mean: 176.19945713216524 usec\nrounds: 2531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.843410112474,
            "unit": "iter/sec",
            "range": "stddev: 0.0003484359663914086",
            "extra": "mean: 14.96033787500295 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.45916044883741,
            "unit": "iter/sec",
            "range": "stddev: 0.00007836500605091488",
            "extra": "mean: 8.97189603773326 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1851873.0446801726,
            "unit": "iter/sec",
            "range": "stddev: 1.1664655081547767e-7",
            "extra": "mean: 539.9938202419836 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.37378025887415,
            "unit": "iter/sec",
            "range": "stddev: 0.0002480424268293875",
            "extra": "mean: 3.340305884955193 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.56058704142237,
            "unit": "iter/sec",
            "range": "stddev: 0.0002403754414961767",
            "extra": "mean: 3.5516334530616778 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 306.1445269284955,
            "unit": "iter/sec",
            "range": "stddev: 0.00022082562816905143",
            "extra": "mean: 3.2664310874110924 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.37140752321797,
            "unit": "iter/sec",
            "range": "stddev: 0.0006379473603887742",
            "extra": "mean: 8.743444027275743 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5220.475125761494,
            "unit": "iter/sec",
            "range": "stddev: 0.000058644995380410884",
            "extra": "mean: 191.55344598143893 usec\nrounds: 2240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5346.044730408094,
            "unit": "iter/sec",
            "range": "stddev: 0.000022983308811889604",
            "extra": "mean: 187.05417751408606 usec\nrounds: 1352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.06064905038008,
            "unit": "iter/sec",
            "range": "stddev: 0.0008082089062185723",
            "extra": "mean: 23.223059151524176 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.15354206967646,
            "unit": "iter/sec",
            "range": "stddev: 0.007547380719372131",
            "extra": "mean: 3.6081083161787615 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70361.85540871436,
            "unit": "iter/sec",
            "range": "stddev: 4.6867552191061356e-7",
            "extra": "mean: 14.212246027215327 usec\nrounds: 13718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 354.725953937664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000352503772074184",
            "extra": "mean: 2.819077625697865 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.4826956534148,
            "unit": "iter/sec",
            "range": "stddev: 0.0002615641647816035",
            "extra": "mean: 13.989399684204958 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.82900881385581,
            "unit": "iter/sec",
            "range": "stddev: 0.00006393454070887977",
            "extra": "mean: 8.415453515786602 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.460472172210391,
            "unit": "iter/sec",
            "range": "stddev: 0.000201823212779969",
            "extra": "mean: 95.59797909090858 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11739.56164849592,
            "unit": "iter/sec",
            "range": "stddev: 0.000024698688224991827",
            "extra": "mean: 85.18205619100954 usec\nrounds: 4983"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 489737.9947420497,
            "unit": "iter/sec",
            "range": "stddev: 2.701484067715459e-7",
            "extra": "mean: 2.041908144224568 usec\nrounds: 2112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.91437249679121,
            "unit": "iter/sec",
            "range": "stddev: 0.00031720734126239574",
            "extra": "mean: 20.87056446511888 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.0453692730933,
            "unit": "iter/sec",
            "range": "stddev: 0.00002164953152236889",
            "extra": "mean: 1.8448640218826038 msec\nrounds: 457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5639.967885271804,
            "unit": "iter/sec",
            "range": "stddev: 0.0000438623500439677",
            "extra": "mean: 177.30597413708634 usec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1922905.0541683803,
            "unit": "iter/sec",
            "range": "stddev: 1.4833209717039697e-7",
            "extra": "mean: 520.0464775066499 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.3539478767234,
            "unit": "iter/sec",
            "range": "stddev: 0.0001822355599849027",
            "extra": "mean: 3.2430264210523077 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.0050326712829,
            "unit": "iter/sec",
            "range": "stddev: 0.0000308826131893784",
            "extra": "mean: 5.1019098151274775 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 108.84633335888871,
            "unit": "iter/sec",
            "range": "stddev: 0.010366790202625282",
            "extra": "mean: 9.18726399999892 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8099.571091383747,
            "unit": "iter/sec",
            "range": "stddev: 0.000028881838184069407",
            "extra": "mean: 123.46332771420344 usec\nrounds: 4449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.47334837359541,
            "unit": "iter/sec",
            "range": "stddev: 0.0005954792964326478",
            "extra": "mean: 8.232258461538954 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.74412783817495,
            "unit": "iter/sec",
            "range": "stddev: 0.0006379047232132694",
            "extra": "mean: 9.828577051547486 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.43068522770848,
            "unit": "iter/sec",
            "range": "stddev: 0.00005972008376199792",
            "extra": "mean: 10.47880980435052 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5427.21841731463,
            "unit": "iter/sec",
            "range": "stddev: 0.00004649823599120771",
            "extra": "mean: 184.2564501936513 usec\nrounds: 2319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.67841631239772,
            "unit": "iter/sec",
            "range": "stddev: 0.000590175408358592",
            "extra": "mean: 8.796744645455977 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.18813802822663,
            "unit": "iter/sec",
            "range": "stddev: 0.0001947495986850272",
            "extra": "mean: 7.34278340594346 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.55960976409946,
            "unit": "iter/sec",
            "range": "stddev: 0.0001365133253857165",
            "extra": "mean: 6.6862972000080845 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 295.3814355654943,
            "unit": "iter/sec",
            "range": "stddev: 0.000044607782243773915",
            "extra": "mean: 3.385453111112232 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9232225933987244,
            "unit": "iter/sec",
            "range": "stddev: 0.006312557254017201",
            "extra": "mean: 1.0831624000000146 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.62495413648084,
            "unit": "iter/sec",
            "range": "stddev: 0.00016083643819594782",
            "extra": "mean: 9.205987776469476 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.746084839870896,
            "unit": "iter/sec",
            "range": "stddev: 0.0016569162929791904",
            "extra": "mean: 572.7098576000117 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 768691.47008983,
            "unit": "iter/sec",
            "range": "stddev: 2.294662482382347e-7",
            "extra": "mean: 1.3009120549797946 usec\nrounds: 23981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.5907936829785,
            "unit": "iter/sec",
            "range": "stddev: 0.000029470856552779874",
            "extra": "mean: 1.452241315413798 msec\nrounds: 558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 758.224811800504,
            "unit": "iter/sec",
            "range": "stddev: 0.000010486148577881388",
            "extra": "mean: 1.3188700560001054 msec\nrounds: 625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.3715168478592,
            "unit": "iter/sec",
            "range": "stddev: 0.0001776545924463376",
            "extra": "mean: 3.318163609020915 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5844305.580164165,
            "unit": "iter/sec",
            "range": "stddev: 1.0689721842227371e-8",
            "extra": "mean: 171.10672710056534 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.37495401967705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000659031546851296",
            "extra": "mean: 13.267006434775993 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.586917289462537,
            "unit": "iter/sec",
            "range": "stddev: 0.0010019365321465136",
            "extra": "mean: 386.5604842000039 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.14550841112904,
            "unit": "iter/sec",
            "range": "stddev: 0.0005969615363450869",
            "extra": "mean: 9.421029819997102 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1199.3231957324729,
            "unit": "iter/sec",
            "range": "stddev: 0.000013318737683725078",
            "extra": "mean: 833.803601529829 usec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.7494487300101,
            "unit": "iter/sec",
            "range": "stddev: 0.0006299774340906327",
            "extra": "mean: 8.281611307691776 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.41745099937629,
            "unit": "iter/sec",
            "range": "stddev: 0.0006197892930195618",
            "extra": "mean: 8.236048374999546 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.364695421063352,
            "unit": "iter/sec",
            "range": "stddev: 0.027745919436247237",
            "extra": "mean: 32.93298306250492 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.35745874045855,
            "unit": "iter/sec",
            "range": "stddev: 0.000124300201877947",
            "extra": "mean: 6.27520047008703 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5788.194987449536,
            "unit": "iter/sec",
            "range": "stddev: 0.00004580582620066834",
            "extra": "mean: 172.76543070305792 usec\nrounds: 2345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.81137119388063,
            "unit": "iter/sec",
            "range": "stddev: 0.0006130182867713505",
            "extra": "mean: 9.362299058822414 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.5846899990376215,
            "unit": "iter/sec",
            "range": "stddev: 0.0003218053343110455",
            "extra": "mean: 179.06096850001063 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.49566278294402,
            "unit": "iter/sec",
            "range": "stddev: 0.0007739908917110111",
            "extra": "mean: 26.6697512666686 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1743.1149432275265,
            "unit": "iter/sec",
            "range": "stddev: 0.000032662107543255876",
            "extra": "mean: 573.6856332310562 usec\nrounds: 1306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.32792668842892,
            "unit": "iter/sec",
            "range": "stddev: 0.019370003965689882",
            "extra": "mean: 12.931938599999171 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.70126357603056,
            "unit": "iter/sec",
            "range": "stddev: 0.0001658686849365744",
            "extra": "mean: 10.235282159086978 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 324.06874087552234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000267371368983575",
            "extra": "mean: 3.08576506730746 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.86350054017285,
            "unit": "iter/sec",
            "range": "stddev: 0.0006188266061163108",
            "extra": "mean: 9.817059051545364 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5539.544006932581,
            "unit": "iter/sec",
            "range": "stddev: 0.00004841095212903294",
            "extra": "mean: 180.5202736450019 usec\nrounds: 3267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.846425319798062,
            "unit": "iter/sec",
            "range": "stddev: 0.00008555318814427774",
            "extra": "mean: 63.105715000002505 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.71835015439966,
            "unit": "iter/sec",
            "range": "stddev: 0.0005776273974124489",
            "extra": "mean: 9.370459705881924 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 308.3966182470953,
            "unit": "iter/sec",
            "range": "stddev: 0.00019663656120018553",
            "extra": "mean: 3.242577709457158 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140352.76396605928,
            "unit": "iter/sec",
            "range": "stddev: 3.666071862670961e-7",
            "extra": "mean: 7.124904218073143 usec\nrounds: 44643"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7151812.650481933,
            "unit": "iter/sec",
            "range": "stddev: 1.3611080840340389e-8",
            "extra": "mean: 139.8246918468719 nsec\nrounds: 60976"
          }
        ]
      }
    ]
  }
}