window.BENCHMARK_DATA = {
  "lastUpdate": 1677756252775,
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
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "51233b5c3c186e0e09e3b5caa8f79336df94ab1b",
          "message": "chore: workaround broken lychee config parsing for `base` param",
          "timestamp": "2023-03-02T11:18:22Z",
          "tree_id": "9e2be01e20e173d9d88d570489ff10e4858731f2",
          "url": "https://github.com/ibis-project/ibis/commit/51233b5c3c186e0e09e3b5caa8f79336df94ab1b"
        },
        "date": 1677756160063,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 201.14335748243596,
            "unit": "iter/sec",
            "range": "stddev: 0.009737581631640008",
            "extra": "mean: 4.971578542370314 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.14878888353195,
            "unit": "iter/sec",
            "range": "stddev: 0.0006271063913497197",
            "extra": "mean: 8.916725806450872 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10637.645274977707,
            "unit": "iter/sec",
            "range": "stddev: 0.000007344368680703247",
            "extra": "mean: 94.00576670405054 usec\nrounds: 4445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 128.22675249611086,
            "unit": "iter/sec",
            "range": "stddev: 0.0003079867100769083",
            "extra": "mean: 7.798684600004435 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1622650.0308488244,
            "unit": "iter/sec",
            "range": "stddev: 2.1159037873572384e-7",
            "extra": "mean: 616.2758333519952 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1515.7007000360472,
            "unit": "iter/sec",
            "range": "stddev: 0.00005033194062235465",
            "extra": "mean: 659.7608617428344 usec\nrounds: 1056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 75.76266171451095,
            "unit": "iter/sec",
            "range": "stddev: 0.01583877955252664",
            "extra": "mean: 13.199113882352794 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 295.6988054977,
            "unit": "iter/sec",
            "range": "stddev: 0.000018733733480849525",
            "extra": "mean: 3.3818195454556146 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1470961.57836501,
            "unit": "iter/sec",
            "range": "stddev: 2.4977597825768555e-7",
            "extra": "mean: 679.8274099800152 nsec\nrounds: 98030"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.489209481215354,
            "unit": "iter/sec",
            "range": "stddev: 0.0007574417669827449",
            "extra": "mean: 25.981307838708656 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 138.1003123733203,
            "unit": "iter/sec",
            "range": "stddev: 0.00008258277724770759",
            "extra": "mean: 7.241113237287585 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.325719668192704,
            "unit": "iter/sec",
            "range": "stddev: 0.0002697815989345012",
            "extra": "mean: 22.560265405404824 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14643774277743696,
            "unit": "iter/sec",
            "range": "stddev: 0.09189342830655246",
            "extra": "mean: 6.828840577799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4470.706831552898,
            "unit": "iter/sec",
            "range": "stddev: 0.0000288203145574094",
            "extra": "mean: 223.6782767642696 usec\nrounds: 1261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4478.429291737832,
            "unit": "iter/sec",
            "range": "stddev: 0.0000712666697707994",
            "extra": "mean: 223.29257310032355 usec\nrounds: 342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 265.36222571869655,
            "unit": "iter/sec",
            "range": "stddev: 0.0002603931347379735",
            "extra": "mean: 3.7684338729509808 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 62610.17237898077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012284041030682278",
            "extra": "mean: 15.971845500551852 usec\nrounds: 11890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1000.1290802440208,
            "unit": "iter/sec",
            "range": "stddev: 0.000013832409519761229",
            "extra": "mean: 999.8709364155384 usec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 257.92844499819836,
            "unit": "iter/sec",
            "range": "stddev: 0.00012777037496025488",
            "extra": "mean: 3.8770442709681947 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 174.66469667306234,
            "unit": "iter/sec",
            "range": "stddev: 0.00010907860703501744",
            "extra": "mean: 5.725255412499308 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.805420081088094,
            "unit": "iter/sec",
            "range": "stddev: 0.0002523810429138621",
            "extra": "mean: 18.937449952379854 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 271.3818906025983,
            "unit": "iter/sec",
            "range": "stddev: 0.00023699195640150965",
            "extra": "mean: 3.684844253164864 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5043436.035540163,
            "unit": "iter/sec",
            "range": "stddev: 3.440171682885464e-8",
            "extra": "mean: 198.27752210070074 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 243.4735743501072,
            "unit": "iter/sec",
            "range": "stddev: 0.00030508758581706803",
            "extra": "mean: 4.107221913791892 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12068.559612039773,
            "unit": "iter/sec",
            "range": "stddev: 0.000005111751554877676",
            "extra": "mean: 82.8599296143332 usec\nrounds: 5342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7089566862942303,
            "unit": "iter/sec",
            "range": "stddev: 0.006091877334897521",
            "extra": "mean: 1.4105234061999965 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.59038693289008,
            "unit": "iter/sec",
            "range": "stddev: 0.0007964370699459584",
            "extra": "mean: 10.918176388235132 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.87777408922604,
            "unit": "iter/sec",
            "range": "stddev: 0.0007717459333320572",
            "extra": "mean: 8.412001382608581 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9738275.517020937,
            "unit": "iter/sec",
            "range": "stddev: 6.8848248733466265e-9",
            "extra": "mean: 102.68758552295213 nsec\nrounds: 94331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1527293981146416,
            "unit": "iter/sec",
            "range": "stddev: 0.002279666984376432",
            "extra": "mean: 464.5265684000037 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.15692384539659,
            "unit": "iter/sec",
            "range": "stddev: 0.00017411995034133344",
            "extra": "mean: 8.916079058823478 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 250.56009170549814,
            "unit": "iter/sec",
            "range": "stddev: 0.0003254800631618426",
            "extra": "mean: 3.991058564806777 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4529.04295992502,
            "unit": "iter/sec",
            "range": "stddev: 0.00006523888848683489",
            "extra": "mean: 220.79719906577247 usec\nrounds: 2783"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 115.22876278482866,
            "unit": "iter/sec",
            "range": "stddev: 0.00009685356354851658",
            "extra": "mean: 8.678388761904358 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.59205582499952,
            "unit": "iter/sec",
            "range": "stddev: 0.00011230807825816313",
            "extra": "mean: 9.843289338711488 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 83.85651667101634,
            "unit": "iter/sec",
            "range": "stddev: 0.00010400443201779196",
            "extra": "mean: 11.925131637928315 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 456.5013207948535,
            "unit": "iter/sec",
            "range": "stddev: 0.00004288463784167543",
            "extra": "mean: 2.19057416582895 msec\nrounds: 398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.137667649405852,
            "unit": "iter/sec",
            "range": "stddev: 0.0007018502563404758",
            "extra": "mean: 109.43711659999167 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7245051444933175,
            "unit": "iter/sec",
            "range": "stddev: 0.013471156999775812",
            "extra": "mean: 1.3802524489999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1648140.2531526433,
            "unit": "iter/sec",
            "range": "stddev: 1.9373637497695397e-7",
            "extra": "mean: 606.7444794744567 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.395308257883165,
            "unit": "iter/sec",
            "range": "stddev: 0.0007675070424154977",
            "extra": "mean: 74.65300392855819 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.837986153468564,
            "unit": "iter/sec",
            "range": "stddev: 0.0004063577391502095",
            "extra": "mean: 206.697573800011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140762.94550389462,
            "unit": "iter/sec",
            "range": "stddev: 6.796049819097249e-7",
            "extra": "mean: 7.104142332488574 usec\nrounds: 34841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4506.516340805293,
            "unit": "iter/sec",
            "range": "stddev: 0.00006330646657721897",
            "extra": "mean: 221.9008929237134 usec\nrounds: 1625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 117.83298442006831,
            "unit": "iter/sec",
            "range": "stddev: 0.0008344374310316022",
            "extra": "mean: 8.48658807142704 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 117.81771541339859,
            "unit": "iter/sec",
            "range": "stddev: 0.0008452764433760344",
            "extra": "mean: 8.48768792104992 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4661.668330343782,
            "unit": "iter/sec",
            "range": "stddev: 0.0000556178496398426",
            "extra": "mean: 214.51547582027428 usec\nrounds: 1799"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4455.244168956491,
            "unit": "iter/sec",
            "range": "stddev: 0.00005943113513677288",
            "extra": "mean: 224.45458926086658 usec\nrounds: 2812"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 185.03523106886766,
            "unit": "iter/sec",
            "range": "stddev: 0.005208771324927222",
            "extra": "mean: 5.404376205674114 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 65.747029774609,
            "unit": "iter/sec",
            "range": "stddev: 0.00019836097673864002",
            "extra": "mean: 15.209812571429536 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.34818913192472,
            "unit": "iter/sec",
            "range": "stddev: 0.0008171789174846239",
            "extra": "mean: 20.26416810000171 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 118.78888928787832,
            "unit": "iter/sec",
            "range": "stddev: 0.0008561654359853386",
            "extra": "mean: 8.418295734515668 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 633.1804836043837,
            "unit": "iter/sec",
            "range": "stddev: 0.00010512993779620959",
            "extra": "mean: 1.57932852621656 msec\nrounds: 534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 258.0177708804108,
            "unit": "iter/sec",
            "range": "stddev: 0.0003125998405984488",
            "extra": "mean: 3.875702036289167 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 142.44758959173544,
            "unit": "iter/sec",
            "range": "stddev: 0.004522696877156012",
            "extra": "mean: 7.020125808138058 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 416866.67858304916,
            "unit": "iter/sec",
            "range": "stddev: 9.611017870778484e-8",
            "extra": "mean: 2.398848484122191 usec\nrounds: 1749"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7333768782993089,
            "unit": "iter/sec",
            "range": "stddev: 0.025275537113747613",
            "extra": "mean: 1.3635553963999882 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 572.9688106401608,
            "unit": "iter/sec",
            "range": "stddev: 0.00005339938654717129",
            "extra": "mean: 1.745295697479118 msec\nrounds: 476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.32994497097572,
            "unit": "iter/sec",
            "range": "stddev: 0.0008321506682548717",
            "extra": "mean: 8.380126214281145 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.36540925644383,
            "unit": "iter/sec",
            "range": "stddev: 0.0008289882260909597",
            "extra": "mean: 8.377636421047297 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.00976328650789,
            "unit": "iter/sec",
            "range": "stddev: 0.0010087731768093835",
            "extra": "mean: 11.626587049994441 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4839.948371018396,
            "unit": "iter/sec",
            "range": "stddev: 0.00005872833506645499",
            "extra": "mean: 206.61377422701418 usec\nrounds: 1909"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7244.465793127602,
            "unit": "iter/sec",
            "range": "stddev: 0.000015436352805463327",
            "extra": "mean: 138.03640303590655 usec\nrounds: 3821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 262.3314654107964,
            "unit": "iter/sec",
            "range": "stddev: 0.00030588460119165497",
            "extra": "mean: 3.811971234308686 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4748.098247625243,
            "unit": "iter/sec",
            "range": "stddev: 0.00006627284203097718",
            "extra": "mean: 210.6106377432584 usec\nrounds: 3031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 251.5536030868808,
            "unit": "iter/sec",
            "range": "stddev: 0.0003160577268994681",
            "extra": "mean: 3.9752958722464533 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 77.30960347695168,
            "unit": "iter/sec",
            "range": "stddev: 0.01789250056885386",
            "extra": "mean: 12.935003609197532 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4556519511729695,
            "unit": "iter/sec",
            "range": "stddev: 0.002461145959521866",
            "extra": "mean: 686.9774050000046 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.097739624945625,
            "unit": "iter/sec",
            "range": "stddev: 0.0006884370800576676",
            "extra": "mean: 47.398442571431495 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.13271223541363,
            "unit": "iter/sec",
            "range": "stddev: 0.0003661638427294509",
            "extra": "mean: 12.175416746664117 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.269859250775056,
            "unit": "iter/sec",
            "range": "stddev: 0.0008246725001642254",
            "extra": "mean: 29.18016069696533 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1698101.6160623417,
            "unit": "iter/sec",
            "range": "stddev: 2.9365609699129766e-7",
            "extra": "mean: 588.8929087287833 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 166.38067972970978,
            "unit": "iter/sec",
            "range": "stddev: 0.00010018039299145026",
            "extra": "mean: 6.010313226418649 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.38802920792047,
            "unit": "iter/sec",
            "range": "stddev: 0.000780029235126433",
            "extra": "mean: 12.59635753623458 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.43105997718354,
            "unit": "iter/sec",
            "range": "stddev: 0.0009025375030119017",
            "extra": "mean: 11.437582939758082 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.81644333268761,
            "unit": "iter/sec",
            "range": "stddev: 0.000934950898294724",
            "extra": "mean: 11.259176369562688 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 242.7684837459197,
            "unit": "iter/sec",
            "range": "stddev: 0.00009435137045201851",
            "extra": "mean: 4.119150824563353 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5837676.886643187,
            "unit": "iter/sec",
            "range": "stddev: 1.6804017261345794e-8",
            "extra": "mean: 171.30101912423484 nsec\nrounds: 50249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.62452099344783,
            "unit": "iter/sec",
            "range": "stddev: 0.0011866518573684687",
            "extra": "mean: 32.65357195999741 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.22731864808067,
            "unit": "iter/sec",
            "range": "stddev: 0.000773835859572159",
            "extra": "mean: 31.029574967744203 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.70709024717763,
            "unit": "iter/sec",
            "range": "stddev: 0.0009453420557858296",
            "extra": "mean: 11.533082209877879 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 110.62022358910282,
            "unit": "iter/sec",
            "range": "stddev: 0.000903182234116029",
            "extra": "mean: 9.039938336361399 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 589611.178759039,
            "unit": "iter/sec",
            "range": "stddev: 0.000022449617371363634",
            "extra": "mean: 1.6960329722796486 usec\nrounds: 21321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4460405.971358652,
            "unit": "iter/sec",
            "range": "stddev: 1.905535751618906e-8",
            "extra": "mean: 224.1948393086748 nsec\nrounds: 44051"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 6159.630561131354,
            "unit": "iter/sec",
            "range": "stddev: 0.00397211526229966",
            "extra": "mean: 162.34739893496595 usec\nrounds: 3567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4886.000778293852,
            "unit": "iter/sec",
            "range": "stddev: 0.00005301084722200151",
            "extra": "mean: 204.66636117671496 usec\nrounds: 2143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.18737092035921,
            "unit": "iter/sec",
            "range": "stddev: 0.0003257478220878023",
            "extra": "mean: 13.479383183338692 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5906836091583118,
            "unit": "iter/sec",
            "range": "stddev: 0.005878892395193107",
            "extra": "mean: 1.6929536971999937 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}