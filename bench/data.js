window.BENCHMARK_DATA = {
  "lastUpdate": 1675591494073,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "2ac97a13d50df3d96eb72083b69c68bafc832ee6",
          "message": "test(clickhouse): enable test_backend_specific_numerics test",
          "timestamp": "2023-02-05T04:52:38-05:00",
          "tree_id": "485a9277da41c311c7c2e2611a4bc47ac9fb4fea",
          "url": "https://github.com/ibis-project/ibis/commit/2ac97a13d50df3d96eb72083b69c68bafc832ee6"
        },
        "date": 1675591088602,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 192.1623103800617,
            "unit": "iter/sec",
            "range": "stddev: 0.006015053981352658",
            "extra": "mean: 5.2039341014488425 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7146.573626240355,
            "unit": "iter/sec",
            "range": "stddev: 0.00015201467113918656",
            "extra": "mean: 139.92719480678977 usec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 133.70221320465862,
            "unit": "iter/sec",
            "range": "stddev: 0.000742696942326786",
            "extra": "mean: 7.4793077543847035 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3414.104641390784,
            "unit": "iter/sec",
            "range": "stddev: 0.000041284534345788957",
            "extra": "mean: 292.9025630546098 usec\nrounds: 563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 81.35011828968317,
            "unit": "iter/sec",
            "range": "stddev: 0.0005151866274829549",
            "extra": "mean: 12.292545124999776 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.217638881920248,
            "unit": "iter/sec",
            "range": "stddev: 0.0008077429244218373",
            "extra": "mean: 34.225900458328816 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16704.680509381746,
            "unit": "iter/sec",
            "range": "stddev: 0.00001552787339472107",
            "extra": "mean: 59.86346158721062 usec\nrounds: 4738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1264.735971018845,
            "unit": "iter/sec",
            "range": "stddev: 0.000013868428871728932",
            "extra": "mean: 790.6788633475973 usec\nrounds: 944"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 815.3398074281723,
            "unit": "iter/sec",
            "range": "stddev: 0.00019818651150748198",
            "extra": "mean: 1.2264824934211191 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7164258080521345,
            "unit": "iter/sec",
            "range": "stddev: 0.008033638779828775",
            "extra": "mean: 1.3958179461999918 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3588.980441273619,
            "unit": "iter/sec",
            "range": "stddev: 0.00018692018624883133",
            "extra": "mean: 278.630663042881 usec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4334724.771994553,
            "unit": "iter/sec",
            "range": "stddev: 2.9239476551754447e-8",
            "extra": "mean: 230.6951542713116 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 227.87782421176252,
            "unit": "iter/sec",
            "range": "stddev: 0.00020170780443856182",
            "extra": "mean: 4.388316429907278 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 211.86298929567994,
            "unit": "iter/sec",
            "range": "stddev: 0.00023768770614875564",
            "extra": "mean: 4.720031579486407 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.346554092468727,
            "unit": "iter/sec",
            "range": "stddev: 0.0006095928444634674",
            "extra": "mean: 230.06730820000598 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 118219.93353888454,
            "unit": "iter/sec",
            "range": "stddev: 7.8847643257139e-7",
            "extra": "mean: 8.458810372034957 usec\nrounds: 31546"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 497928.8453613767,
            "unit": "iter/sec",
            "range": "stddev: 3.9835754552459944e-7",
            "extra": "mean: 2.008319078751584 usec\nrounds: 17889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 64.74000096376452,
            "unit": "iter/sec",
            "range": "stddev: 0.017094663077393997",
            "extra": "mean: 15.446400758623836 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 332705.675856212,
            "unit": "iter/sec",
            "range": "stddev: 5.38368128076715e-7",
            "extra": "mean: 3.0056595741161263 usec\nrounds: 1739"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.912667798468626,
            "unit": "iter/sec",
            "range": "stddev: 0.0007382489127627173",
            "extra": "mean: 126.37962637500522 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 136.3911033275354,
            "unit": "iter/sec",
            "range": "stddev: 0.0007536577667017673",
            "extra": "mean: 7.33185651851908 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 209.0352935018355,
            "unit": "iter/sec",
            "range": "stddev: 0.00028581394970402446",
            "extra": "mean: 4.783881148717211 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1452842.6425170372,
            "unit": "iter/sec",
            "range": "stddev: 2.969544766987307e-7",
            "extra": "mean: 688.3057880704195 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.622448698870016,
            "unit": "iter/sec",
            "range": "stddev: 0.0021112210759871796",
            "extra": "mean: 1.6065581015999952 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 133.43219324535784,
            "unit": "iter/sec",
            "range": "stddev: 0.000750294862925423",
            "extra": "mean: 7.494443249997245 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 107.70725987020187,
            "unit": "iter/sec",
            "range": "stddev: 0.01742285093798687",
            "extra": "mean: 9.284425220779926 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 125.00286506571607,
            "unit": "iter/sec",
            "range": "stddev: 0.0008243528420709959",
            "extra": "mean: 7.99981663999688 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 48733.296570672,
            "unit": "iter/sec",
            "range": "stddev: 0.000002272134284758264",
            "extra": "mean: 20.51985132074579 usec\nrounds: 10257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3628804.4000780066,
            "unit": "iter/sec",
            "range": "stddev: 6.231689582588198e-8",
            "extra": "mean: 275.57285809562933 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.65604034804653,
            "unit": "iter/sec",
            "range": "stddev: 0.017010386058779726",
            "extra": "mean: 14.780646263890814 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4355.877261191466,
            "unit": "iter/sec",
            "range": "stddev: 0.00006994719302833161",
            "extra": "mean: 229.57488010726672 usec\nrounds: 2986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 80.66870847617723,
            "unit": "iter/sec",
            "range": "stddev: 0.0008374898072070919",
            "extra": "mean: 12.396380441560138 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9250.406986644932,
            "unit": "iter/sec",
            "range": "stddev: 0.000004001227435014066",
            "extra": "mean: 108.10335171671123 usec\nrounds: 4660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 231.25994092532522,
            "unit": "iter/sec",
            "range": "stddev: 0.00003901491186371396",
            "extra": "mean: 4.324138439189968 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.90208405531804,
            "unit": "iter/sec",
            "range": "stddev: 0.0008311897979713638",
            "extra": "mean: 12.673936461537604 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 88.33142446820459,
            "unit": "iter/sec",
            "range": "stddev: 0.00017299114160425013",
            "extra": "mean: 11.320999361444192 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 198.94914242563075,
            "unit": "iter/sec",
            "range": "stddev: 0.0002837227830980854",
            "extra": "mean: 5.026410206185283 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 231.96292096550906,
            "unit": "iter/sec",
            "range": "stddev: 0.00006543230950327217",
            "extra": "mean: 4.311033831776466 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.212463774053816,
            "unit": "iter/sec",
            "range": "stddev: 0.0008697398542086784",
            "extra": "mean: 19.526496604653456 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4632.393586538019,
            "unit": "iter/sec",
            "range": "stddev: 0.000058482022968991536",
            "extra": "mean: 215.87112176867979 usec\nrounds: 1741"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5029313549664484,
            "unit": "iter/sec",
            "range": "stddev: 0.07138729001215616",
            "extra": "mean: 1.988342922200013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 439.26890892324275,
            "unit": "iter/sec",
            "range": "stddev: 0.00003646587788660042",
            "extra": "mean: 2.2765098546383546 msec\nrounds: 399"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1317351.11524441,
            "unit": "iter/sec",
            "range": "stddev: 2.5688090982923665e-7",
            "extra": "mean: 759.0990651072311 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.03834329929808,
            "unit": "iter/sec",
            "range": "stddev: 0.0008487416091418909",
            "extra": "mean: 13.15125970148841 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.66402824787897,
            "unit": "iter/sec",
            "range": "stddev: 0.00028724950287525164",
            "extra": "mean: 18.634456500002386 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 185.5513353041297,
            "unit": "iter/sec",
            "range": "stddev: 0.0005490079226695754",
            "extra": "mean: 5.38934413142832 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.316019377074575,
            "unit": "iter/sec",
            "range": "stddev: 0.003350751466176775",
            "extra": "mean: 759.8672309999984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11430117618856285,
            "unit": "iter/sec",
            "range": "stddev: 0.09782896757954841",
            "extra": "mean: 8.748816358200008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9097683679950677,
            "unit": "iter/sec",
            "range": "stddev: 0.002802556570290964",
            "extra": "mean: 523.6237110000047 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 76.7056494175019,
            "unit": "iter/sec",
            "range": "stddev: 0.00011883690570432663",
            "extra": "mean: 13.036849405408075 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.29688551122048,
            "unit": "iter/sec",
            "range": "stddev: 0.00021425563757198395",
            "extra": "mean: 12.45378315277574 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3853.807678357247,
            "unit": "iter/sec",
            "range": "stddev: 0.00006245871416807372",
            "extra": "mean: 259.4836285204215 usec\nrounds: 1704"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7079446718618619,
            "unit": "iter/sec",
            "range": "stddev: 0.01596981423654359",
            "extra": "mean: 1.4125397644000146 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.939103579801834,
            "unit": "iter/sec",
            "range": "stddev: 0.0012051514236239664",
            "extra": "mean: 47.75753633334211 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 349.34687376263093,
            "unit": "iter/sec",
            "range": "stddev: 0.000060987879761153946",
            "extra": "mean: 2.8624844677426977 msec\nrounds: 310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.54938555264834,
            "unit": "iter/sec",
            "range": "stddev: 0.0008458602532189615",
            "extra": "mean: 31.696338374997524 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1316066.096170129,
            "unit": "iter/sec",
            "range": "stddev: 2.7401793876681766e-7",
            "extra": "mean: 759.8402564355165 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 234.27669058094568,
            "unit": "iter/sec",
            "range": "stddev: 0.00010811609562683035",
            "extra": "mean: 4.26845708602191 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 127.45396223979142,
            "unit": "iter/sec",
            "range": "stddev: 0.00014070056454154934",
            "extra": "mean: 7.845970281556281 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 212.47634141659358,
            "unit": "iter/sec",
            "range": "stddev: 0.00024125968576055486",
            "extra": "mean: 4.706406338385418 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4582.145217392389,
            "unit": "iter/sec",
            "range": "stddev: 0.00006404867268091876",
            "extra": "mean: 218.23839109339292 usec\nrounds: 2470"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.91733849867575,
            "unit": "iter/sec",
            "range": "stddev: 0.0015439915343575077",
            "extra": "mean: 29.48344546666135 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 72.25246614826585,
            "unit": "iter/sec",
            "range": "stddev: 0.0003651634317137428",
            "extra": "mean: 13.840358029412414 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 147.20224956280606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000778901641648666",
            "extra": "mean: 6.793374442102767 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 101.80340684294856,
            "unit": "iter/sec",
            "range": "stddev: 0.00023888350802370767",
            "extra": "mean: 9.82285397916686 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 531.044950625284,
            "unit": "iter/sec",
            "range": "stddev: 0.000027646152320359595",
            "extra": "mean: 1.883079763441005 msec\nrounds: 465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 120.77182323738512,
            "unit": "iter/sec",
            "range": "stddev: 0.0008257847611552161",
            "extra": "mean: 8.280077034478753 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4654.320451915486,
            "unit": "iter/sec",
            "range": "stddev: 0.00005547413697177197",
            "extra": "mean: 214.85413613676943 usec\nrounds: 1998"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 59.644490463109534,
            "unit": "iter/sec",
            "range": "stddev: 0.00011868615149177257",
            "extra": "mean: 16.766007928569795 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 125.0091619162594,
            "unit": "iter/sec",
            "range": "stddev: 0.00013200893261636573",
            "extra": "mean: 7.999413680333892 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3584965.850137384,
            "unit": "iter/sec",
            "range": "stddev: 3.957884440982788e-8",
            "extra": "mean: 278.9426850363285 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9129554.509147482,
            "unit": "iter/sec",
            "range": "stddev: 9.795998895183448e-9",
            "extra": "mean: 109.53436983133534 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 69.6892170966275,
            "unit": "iter/sec",
            "range": "stddev: 0.0010256810325657462",
            "extra": "mean: 14.349422215684402 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.87211379205741,
            "unit": "iter/sec",
            "range": "stddev: 0.0007084970392454205",
            "extra": "mean: 84.23099858333671 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 214.2045382672342,
            "unit": "iter/sec",
            "range": "stddev: 0.0002604901794303737",
            "extra": "mean: 4.668435169904917 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 125.38982780954777,
            "unit": "iter/sec",
            "range": "stddev: 0.00010649996559184685",
            "extra": "mean: 7.975128584743581 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.417592393057305,
            "unit": "iter/sec",
            "range": "stddev: 0.00046651518428762805",
            "extra": "mean: 21.543555976194284 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 135.62256594159464,
            "unit": "iter/sec",
            "range": "stddev: 0.0008465001553209407",
            "extra": "mean: 7.373404219697822 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1326384.6405591178,
            "unit": "iter/sec",
            "range": "stddev: 2.0336508594905548e-7",
            "extra": "mean: 753.9291163523011 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9189.255844544283,
            "unit": "iter/sec",
            "range": "stddev: 0.000028104280123347702",
            "extra": "mean: 108.82274004741157 usec\nrounds: 3743"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4085.816550155234,
            "unit": "iter/sec",
            "range": "stddev: 0.00005815650948679588",
            "extra": "mean: 244.7491187439648 usec\nrounds: 1878"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.39508604221468,
            "unit": "iter/sec",
            "range": "stddev: 0.0005828131782352898",
            "extra": "mean: 29.94452533333501 msec\nrounds: 33"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "454661224f4578202b5a3487c47174829563c4e4",
          "message": "test(backends): refactor test_generic.test_typeof test",
          "timestamp": "2023-02-05T04:55:31-05:00",
          "tree_id": "6918c92c48165a4c2f5ad226028494edf959b70a",
          "url": "https://github.com/ibis-project/ibis/commit/454661224f4578202b5a3487c47174829563c4e4"
        },
        "date": 1675591422217,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.0178292497333,
            "unit": "iter/sec",
            "range": "stddev: 0.00010306165900172321",
            "extra": "mean: 6.992135213112703 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2119500.605000061,
            "unit": "iter/sec",
            "range": "stddev: 2.3191567386102288e-8",
            "extra": "mean: 471.80925433160587 nsec\nrounds: 99991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10819.762966441935,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017357016521321806",
            "extra": "mean: 92.4234664938181 usec\nrounds: 4626"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 404.93699039053115,
            "unit": "iter/sec",
            "range": "stddev: 0.00012986533038803524",
            "extra": "mean: 2.4695200086205404 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 154.91994381327896,
            "unit": "iter/sec",
            "range": "stddev: 0.0005991200334388016",
            "extra": "mean: 6.4549468285715 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.32925452647592,
            "unit": "iter/sec",
            "range": "stddev: 0.0001584744365300344",
            "extra": "mean: 15.545027023256287 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10630.644868881085,
            "unit": "iter/sec",
            "range": "stddev: 0.000001827468221752492",
            "extra": "mean: 94.06767061961442 usec\nrounds: 4469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 273.2464316931381,
            "unit": "iter/sec",
            "range": "stddev: 0.00006030301444612027",
            "extra": "mean: 3.6597001241832228 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5770176815463529,
            "unit": "iter/sec",
            "range": "stddev: 0.048005560756905624",
            "extra": "mean: 1.7330491456000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.61890549554015,
            "unit": "iter/sec",
            "range": "stddev: 0.0006235180863389357",
            "extra": "mean: 12.404038405797014 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 84.78206736558434,
            "unit": "iter/sec",
            "range": "stddev: 0.0007561037699265652",
            "extra": "mean: 11.794947104650705 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5184.68029814418,
            "unit": "iter/sec",
            "range": "stddev: 0.00005289181739094438",
            "extra": "mean: 192.875923392604 usec\nrounds: 731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 602.8543815289786,
            "unit": "iter/sec",
            "range": "stddev: 0.00007289351419883102",
            "extra": "mean: 1.6587753703701513 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 342899.41295072495,
            "unit": "iter/sec",
            "range": "stddev: 0.000009019219535206648",
            "extra": "mean: 2.916307121656406 usec\nrounds: 2022"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 237.83145644889785,
            "unit": "iter/sec",
            "range": "stddev: 0.000322749523640396",
            "extra": "mean: 4.204658269058143 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4037.234717546167,
            "unit": "iter/sec",
            "range": "stddev: 0.0000282316013741855",
            "extra": "mean: 247.694293238368 usec\nrounds: 1405"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 573190.7355737018,
            "unit": "iter/sec",
            "range": "stddev: 2.779491884308864e-7",
            "extra": "mean: 1.7446199631944652 usec\nrounds: 21740"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11039365.911122106,
            "unit": "iter/sec",
            "range": "stddev: 4.4652025470453335e-8",
            "extra": "mean: 90.58491294270826 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 229.20512565771875,
            "unit": "iter/sec",
            "range": "stddev: 0.00019673425299953073",
            "extra": "mean: 4.362904176468288 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.95123678080591,
            "unit": "iter/sec",
            "range": "stddev: 0.0001365180273495398",
            "extra": "mean: 15.396165639997719 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.31061792196392,
            "unit": "iter/sec",
            "range": "stddev: 0.0006167326797306339",
            "extra": "mean: 11.453360699998427 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.933875894298148,
            "unit": "iter/sec",
            "range": "stddev: 0.0020129875185678435",
            "extra": "mean: 202.68041220000157 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5419841362201705,
            "unit": "iter/sec",
            "range": "stddev: 0.0038519812688483476",
            "extra": "mean: 648.5151024000004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.389675382978684,
            "unit": "iter/sec",
            "range": "stddev: 0.0003459990015728884",
            "extra": "mean: 37.89360746153774 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.58610434702221,
            "unit": "iter/sec",
            "range": "stddev: 0.0005483703374058119",
            "extra": "mean: 11.417336202531976 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9828.640745989347,
            "unit": "iter/sec",
            "range": "stddev: 0.00001278716731268888",
            "extra": "mean: 101.74346848602211 usec\nrounds: 4617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1706077.6009988831,
            "unit": "iter/sec",
            "range": "stddev: 8.399573510570108e-8",
            "extra": "mean: 586.1398094755566 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 203.78775144325832,
            "unit": "iter/sec",
            "range": "stddev: 0.008436508065635399",
            "extra": "mean: 4.907066263393339 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.61312463593911,
            "unit": "iter/sec",
            "range": "stddev: 0.001126916352293655",
            "extra": "mean: 73.45852085714151 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4336648.943756014,
            "unit": "iter/sec",
            "range": "stddev: 1.2164957139007027e-8",
            "extra": "mean: 230.59279479783157 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 151.64527552134882,
            "unit": "iter/sec",
            "range": "stddev: 0.000634210782608543",
            "extra": "mean: 6.594336662069097 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 510.940482604788,
            "unit": "iter/sec",
            "range": "stddev: 0.00004034880703718716",
            "extra": "mean: 1.9571751193054303 msec\nrounds: 461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.43804393458038,
            "unit": "iter/sec",
            "range": "stddev: 0.00001598215620397786",
            "extra": "mean: 5.799184316770494 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 238.27938129659583,
            "unit": "iter/sec",
            "range": "stddev: 0.00020350771286669134",
            "extra": "mean: 4.196754224215734 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.1553244010488,
            "unit": "iter/sec",
            "range": "stddev: 0.00008205881561531309",
            "extra": "mean: 9.694119094737031 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5513041.839549809,
            "unit": "iter/sec",
            "range": "stddev: 4.353178782254703e-9",
            "extra": "mean: 181.3880665345992 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19297.033451694373,
            "unit": "iter/sec",
            "range": "stddev: 0.000014740939563115353",
            "extra": "mean: 51.82143682878858 usec\nrounds: 5121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5472.254429184645,
            "unit": "iter/sec",
            "range": "stddev: 0.000047827459786252055",
            "extra": "mean: 182.74004122812653 usec\nrounds: 2280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.42405484132202,
            "unit": "iter/sec",
            "range": "stddev: 0.0012174757760742897",
            "extra": "mean: 23.028710783784454 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.41664523590907,
            "unit": "iter/sec",
            "range": "stddev: 0.0006646988432108506",
            "extra": "mean: 10.8205615714283 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1554973.152703506,
            "unit": "iter/sec",
            "range": "stddev: 8.389101544092117e-8",
            "extra": "mean: 643.0979198974471 nsec\nrounds: 188644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.59131257985456,
            "unit": "iter/sec",
            "range": "stddev: 0.0001998095342281897",
            "extra": "mean: 11.287788507463626 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.72167613403548,
            "unit": "iter/sec",
            "range": "stddev: 0.0003757891036038349",
            "extra": "mean: 6.909814940740733 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5464.084125289869,
            "unit": "iter/sec",
            "range": "stddev: 0.00004562420788797895",
            "extra": "mean: 183.01328769292147 usec\nrounds: 2527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4513.001566303347,
            "unit": "iter/sec",
            "range": "stddev: 0.00005154383528011704",
            "extra": "mean: 221.58201926331517 usec\nrounds: 2959"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 956.0979524183454,
            "unit": "iter/sec",
            "range": "stddev: 0.000024787716905329794",
            "extra": "mean: 1.0459179391302003 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4515508.380430152,
            "unit": "iter/sec",
            "range": "stddev: 1.1026004884839596e-8",
            "extra": "mean: 221.45900655041754 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1539584.396295181,
            "unit": "iter/sec",
            "range": "stddev: 8.439322835345248e-8",
            "extra": "mean: 649.525938562625 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60290.74110599724,
            "unit": "iter/sec",
            "range": "stddev: 5.282908198448262e-7",
            "extra": "mean: 16.586294705548546 usec\nrounds: 12107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.90201776938744,
            "unit": "iter/sec",
            "range": "stddev: 0.0009920683687623178",
            "extra": "mean: 24.448671594593957 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1425.5220274742696,
            "unit": "iter/sec",
            "range": "stddev: 0.000015404344584302553",
            "extra": "mean: 701.4974028649654 usec\nrounds: 1117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 256.63859519494605,
            "unit": "iter/sec",
            "range": "stddev: 0.00008572812352996004",
            "extra": "mean: 3.8965300571427566 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.989495365643139,
            "unit": "iter/sec",
            "range": "stddev: 0.002652434968612873",
            "extra": "mean: 111.24094950000085 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 243.69871388619185,
            "unit": "iter/sec",
            "range": "stddev: 0.0001800449680800507",
            "extra": "mean: 4.103427482456898 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 262.00385758598327,
            "unit": "iter/sec",
            "range": "stddev: 0.00019210384999567465",
            "extra": "mean: 3.8167376969700704 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 123.20667099199238,
            "unit": "iter/sec",
            "range": "stddev: 0.011736056369059302",
            "extra": "mean: 8.116443630434535 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 263.94423334301524,
            "unit": "iter/sec",
            "range": "stddev: 0.000016076016883264826",
            "extra": "mean: 3.7886790983625134 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.90283050847853,
            "unit": "iter/sec",
            "range": "stddev: 0.00008376780787802587",
            "extra": "mean: 6.62678093333587 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 117.35950350906226,
            "unit": "iter/sec",
            "range": "stddev: 0.000567797104805835",
            "extra": "mean: 8.520826776697994 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 136.58056340754973,
            "unit": "iter/sec",
            "range": "stddev: 0.0006674480374310807",
            "extra": "mean: 7.3216860075181325 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.03549633920711,
            "unit": "iter/sec",
            "range": "stddev: 0.0006290469724626603",
            "extra": "mean: 11.106730574711534 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 242.62304247190792,
            "unit": "iter/sec",
            "range": "stddev: 0.00020395538258031681",
            "extra": "mean: 4.121620064655586 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4408.166224070963,
            "unit": "iter/sec",
            "range": "stddev: 0.00007914913349406718",
            "extra": "mean: 226.85169958869997 usec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.764268512827698,
            "unit": "iter/sec",
            "range": "stddev: 0.03282860110353024",
            "extra": "mean: 34.76535478571411 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 154.0491301370682,
            "unit": "iter/sec",
            "range": "stddev: 0.00067200326290965",
            "extra": "mean: 6.4914355511792285 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.27121283963407,
            "unit": "iter/sec",
            "range": "stddev: 0.0005456276703426747",
            "extra": "mean: 17.460779166666402 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 152.80090020831287,
            "unit": "iter/sec",
            "range": "stddev: 0.0006599299942095612",
            "extra": "mean: 6.544464061642986 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7249747172824574,
            "unit": "iter/sec",
            "range": "stddev: 0.0027825155697136384",
            "extra": "mean: 1.3793584468000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.93020797643159,
            "unit": "iter/sec",
            "range": "stddev: 0.00008021727338515178",
            "extra": "mean: 14.507427575757744 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8560374311584578,
            "unit": "iter/sec",
            "range": "stddev: 0.02229819227376271",
            "extra": "mean: 1.168173217200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.02571246211114,
            "unit": "iter/sec",
            "range": "stddev: 0.0001850648496861929",
            "extra": "mean: 10.201405068966162 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.48586194291373,
            "unit": "iter/sec",
            "range": "stddev: 0.0005959410255546931",
            "extra": "mean: 10.696804620688427 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4777.951882369159,
            "unit": "iter/sec",
            "range": "stddev: 0.00005002478910477492",
            "extra": "mean: 209.29469877878878 usec\nrounds: 2211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.38536613648057,
            "unit": "iter/sec",
            "range": "stddev: 0.0005898978533184663",
            "extra": "mean: 10.94267104545533 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4333.889799947583,
            "unit": "iter/sec",
            "range": "stddev: 0.0029226809010152732",
            "extra": "mean: 230.7396002575088 usec\nrounds: 3885"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.274256916220275,
            "unit": "iter/sec",
            "range": "stddev: 0.0030972031754918964",
            "extra": "mean: 439.7040602000061 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13567469991891346,
            "unit": "iter/sec",
            "range": "stddev: 0.09058205386508639",
            "extra": "mean: 7.370570936199999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8643464881122559,
            "unit": "iter/sec",
            "range": "stddev: 0.015412699306937458",
            "extra": "mean: 1.156943440800012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 210.09451298355742,
            "unit": "iter/sec",
            "range": "stddev: 0.0003599511223867083",
            "extra": "mean: 4.759762574466962 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120877.86822063438,
            "unit": "iter/sec",
            "range": "stddev: 5.223530970804508e-7",
            "extra": "mean: 8.272813003077893 usec\nrounds: 38760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 151.6629324607039,
            "unit": "iter/sec",
            "range": "stddev: 0.000674817594244236",
            "extra": "mean: 6.593568934578668 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.65323999966117,
            "unit": "iter/sec",
            "range": "stddev: 0.0005627762153707288",
            "extra": "mean: 26.558139485712218 msec\nrounds: 35"
          }
        ]
      }
    ]
  }
}