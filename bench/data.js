window.BENCHMARK_DATA = {
  "lastUpdate": 1680092943615,
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
          "id": "267e4e1390686223edae3f5fc027466035da1bcd",
          "message": "test(backends): strict validate exceptions in test_window",
          "timestamp": "2023-03-29T08:20:34-04:00",
          "tree_id": "254c2183d22adc7401c535a2f6fd5b518a2a7b3b",
          "url": "https://github.com/ibis-project/ibis/commit/267e4e1390686223edae3f5fc027466035da1bcd"
        },
        "date": 1680092864016,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 164.16744907339495,
            "unit": "iter/sec",
            "range": "stddev: 0.000070138870655362",
            "extra": "mean: 6.091341527472515 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.168732330269336,
            "unit": "iter/sec",
            "range": "stddev: 0.00024814178059780895",
            "extra": "mean: 15.830616875001269 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 208.94770924775483,
            "unit": "iter/sec",
            "range": "stddev: 0.004558818639954985",
            "extra": "mean: 4.785886400000076 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13391.243767061274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054090501612402875",
            "extra": "mean: 74.67566249967916 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5214.12590132171,
            "unit": "iter/sec",
            "range": "stddev: 0.00004397564487939577",
            "extra": "mean: 191.78670000018863 usec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.61352203364234,
            "unit": "iter/sec",
            "range": "stddev: 0.0007066665282142899",
            "extra": "mean: 20.570408358973935 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 496889.8376424481,
            "unit": "iter/sec",
            "range": "stddev: 1.0395780140824644e-7",
            "extra": "mean: 2.012518518681358 usec\nrounds: 2295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73436.16684328983,
            "unit": "iter/sec",
            "range": "stddev: 6.35605650435163e-7",
            "extra": "mean: 13.617268479357922 usec\nrounds: 15152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.57178976236507,
            "unit": "iter/sec",
            "range": "stddev: 0.0004488875685438174",
            "extra": "mean: 11.41920249333263 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.03437347803379,
            "unit": "iter/sec",
            "range": "stddev: 0.001493658069812636",
            "extra": "mean: 18.506738130433266 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.74656615663893,
            "unit": "iter/sec",
            "range": "stddev: 0.0006859053098998751",
            "extra": "mean: 10.782070338982772 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5614.773485021422,
            "unit": "iter/sec",
            "range": "stddev: 0.00006931513856094501",
            "extra": "mean: 178.1015748307048 usec\nrounds: 3695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12530.291133117447,
            "unit": "iter/sec",
            "range": "stddev: 0.000001953640565217491",
            "extra": "mean: 79.80660539937568 usec\nrounds: 4445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.5156445117547,
            "unit": "iter/sec",
            "range": "stddev: 0.00026218895061573354",
            "extra": "mean: 9.048492676470232 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 281.47275609981,
            "unit": "iter/sec",
            "range": "stddev: 0.00006903197136552322",
            "extra": "mean: 3.5527417070709353 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.04192865269266,
            "unit": "iter/sec",
            "range": "stddev: 0.00032579322810974925",
            "extra": "mean: 11.898822599997061 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8184467774540829,
            "unit": "iter/sec",
            "range": "stddev: 0.01434952598027598",
            "extra": "mean: 1.2218265470000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 735515.5269988859,
            "unit": "iter/sec",
            "range": "stddev: 1.8855832887223973e-7",
            "extra": "mean: 1.3595906045386785 usec\nrounds: 24331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.75686762071524,
            "unit": "iter/sec",
            "range": "stddev: 0.00011428626915971142",
            "extra": "mean: 6.25951181250084 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 156.23771243161286,
            "unit": "iter/sec",
            "range": "stddev: 0.0036358306255017286",
            "extra": "mean: 6.400503338383888 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 256.04309666197855,
            "unit": "iter/sec",
            "range": "stddev: 0.011062865929257983",
            "extra": "mean: 3.9055925078119724 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149146.55636949808,
            "unit": "iter/sec",
            "range": "stddev: 5.153712020990732e-7",
            "extra": "mean: 6.704814541762425 usec\nrounds: 37038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.06520136024072,
            "unit": "iter/sec",
            "range": "stddev: 0.0007526998801072213",
            "extra": "mean: 8.398759575221519 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 279.673550224531,
            "unit": "iter/sec",
            "range": "stddev: 0.00036894857204466865",
            "extra": "mean: 3.575597331950653 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.72282970230611,
            "unit": "iter/sec",
            "range": "stddev: 0.0007558946200511089",
            "extra": "mean: 10.02779406666671 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6997479.334573004,
            "unit": "iter/sec",
            "range": "stddev: 6.217216514777791e-9",
            "extra": "mean: 142.9086035394947 nsec\nrounds: 60238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5528.555336529917,
            "unit": "iter/sec",
            "range": "stddev: 0.00008170971227945523",
            "extra": "mean: 180.87907945725027 usec\nrounds: 2064"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16737946158307496,
            "unit": "iter/sec",
            "range": "stddev: 0.13840575951705594",
            "extra": "mean: 5.974448660200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.527782415345722,
            "unit": "iter/sec",
            "range": "stddev: 0.0005396561268202457",
            "extra": "mean: 94.98676554545423 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1865481.7922236207,
            "unit": "iter/sec",
            "range": "stddev: 1.3729002736546502e-7",
            "extra": "mean: 536.054548572151 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.96500001677579,
            "unit": "iter/sec",
            "range": "stddev: 0.000807545003105482",
            "extra": "mean: 9.437078279070311 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.14509563805296,
            "unit": "iter/sec",
            "range": "stddev: 0.0007298048638269031",
            "extra": "mean: 9.421066456145342 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.5704197795604,
            "unit": "iter/sec",
            "range": "stddev: 0.00022457137034132224",
            "extra": "mean: 3.272568073576636 msec\nrounds: 299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.42841035959358,
            "unit": "iter/sec",
            "range": "stddev: 0.00044168754148642386",
            "extra": "mean: 7.438903705883437 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.45202226791447,
            "unit": "iter/sec",
            "range": "stddev: 0.02943787412667635",
            "extra": "mean: 27.433320232557097 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.663502178661556,
            "unit": "iter/sec",
            "range": "stddev: 0.08244981683268933",
            "extra": "mean: 1.5071540563999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5271.263700618565,
            "unit": "iter/sec",
            "range": "stddev: 0.000050809757292675204",
            "extra": "mean: 189.70783037901393 usec\nrounds: 395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.70181595786271,
            "unit": "iter/sec",
            "range": "stddev: 0.0009003261187010692",
            "extra": "mean: 23.418207810805512 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.568449995007564,
            "unit": "iter/sec",
            "range": "stddev: 0.0016105610716804733",
            "extra": "mean: 389.3398750000017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.16577053300952,
            "unit": "iter/sec",
            "range": "stddev: 0.00004863708488563123",
            "extra": "mean: 5.15023836207007 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1902040.3711698367,
            "unit": "iter/sec",
            "range": "stddev: 7.178387268166538e-8",
            "extra": "mean: 525.7511960090295 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 339.9624776679954,
            "unit": "iter/sec",
            "range": "stddev: 0.00017774641754456053",
            "extra": "mean: 2.941501094060715 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.25468618649987,
            "unit": "iter/sec",
            "range": "stddev: 0.0006562645230037142",
            "extra": "mean: 8.829656711540132 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.1534328466308,
            "unit": "iter/sec",
            "range": "stddev: 0.0007615323133891671",
            "extra": "mean: 8.39254040869437 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8316126249397834,
            "unit": "iter/sec",
            "range": "stddev: 0.022969797526629726",
            "extra": "mean: 1.2024829470000042 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1763.597248089956,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066642853202016624",
            "extra": "mean: 567.0228852324638 usec\nrounds: 1246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.58354065487248,
            "unit": "iter/sec",
            "range": "stddev: 0.000057051605376283844",
            "extra": "mean: 6.075941713375669 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 669.8368380861808,
            "unit": "iter/sec",
            "range": "stddev: 0.000030462142676207153",
            "extra": "mean: 1.4929008724828308 msec\nrounds: 596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.76381239452536,
            "unit": "iter/sec",
            "range": "stddev: 0.0007234342284296681",
            "extra": "mean: 9.54528073333323 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5222.136241964503,
            "unit": "iter/sec",
            "range": "stddev: 0.00009902749462210494",
            "extra": "mean: 191.49251449322824 usec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.00565539367132,
            "unit": "iter/sec",
            "range": "stddev: 0.0007533282465202844",
            "extra": "mean: 9.900435734043628 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11817149.41646583,
            "unit": "iter/sec",
            "range": "stddev: 4.1737524776414854e-9",
            "extra": "mean: 84.62277701303523 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8406151606210859,
            "unit": "iter/sec",
            "range": "stddev: 0.004721329963610063",
            "extra": "mean: 1.1896050021999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5472943.940792832,
            "unit": "iter/sec",
            "range": "stddev: 1.5738488566936984e-8",
            "extra": "mean: 182.71701863165316 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.06730440054119,
            "unit": "iter/sec",
            "range": "stddev: 0.020681624360389873",
            "extra": "mean: 10.518863517858483 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1903521.5639161693,
            "unit": "iter/sec",
            "range": "stddev: 1.41432126300183e-7",
            "extra": "mean: 525.3420917085233 nsec\nrounds: 89286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.27220271218596,
            "unit": "iter/sec",
            "range": "stddev: 0.00017922099112155967",
            "extra": "mean: 10.387214292682032 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.026819539725,
            "unit": "iter/sec",
            "range": "stddev: 0.000251273282255612",
            "extra": "mean: 3.3219631444434636 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.74763070171563,
            "unit": "iter/sec",
            "range": "stddev: 0.0014634515933674257",
            "extra": "mean: 31.49841351612927 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 117.80987182324954,
            "unit": "iter/sec",
            "range": "stddev: 0.0008059227523560071",
            "extra": "mean: 8.48825301754256 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 308.62964263627066,
            "unit": "iter/sec",
            "range": "stddev: 0.0002268963776791577",
            "extra": "mean: 3.2401294686347746 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5544.72467118142,
            "unit": "iter/sec",
            "range": "stddev: 0.00005489976304576668",
            "extra": "mean: 180.3516061306844 usec\nrounds: 3458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7321805372537113,
            "unit": "iter/sec",
            "range": "stddev: 0.002933528975781825",
            "extra": "mean: 577.3070292 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1182.4933860493645,
            "unit": "iter/sec",
            "range": "stddev: 0.00002237084121534208",
            "extra": "mean: 845.6706919443639 usec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.44380622218209,
            "unit": "iter/sec",
            "range": "stddev: 0.0001594651040953531",
            "extra": "mean: 64.75087718749606 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 313.56787261695536,
            "unit": "iter/sec",
            "range": "stddev: 0.00023219442855323472",
            "extra": "mean: 3.1891022241987415 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1729163.7440180697,
            "unit": "iter/sec",
            "range": "stddev: 1.2491519112254836e-7",
            "extra": "mean: 578.3142304824719 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 530.0734469008988,
            "unit": "iter/sec",
            "range": "stddev: 0.0001554477529460075",
            "extra": "mean: 1.8865310191381033 msec\nrounds: 418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5456.982587730909,
            "unit": "iter/sec",
            "range": "stddev: 0.00002445873127760814",
            "extra": "mean: 183.25145516284564 usec\nrounds: 2208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.353966256696864,
            "unit": "iter/sec",
            "range": "stddev: 0.0009079914956508266",
            "extra": "mean: 23.610539658535128 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 287.09645211295964,
            "unit": "iter/sec",
            "range": "stddev: 0.00005604986059462465",
            "extra": "mean: 3.4831499750005435 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6017215.129128347,
            "unit": "iter/sec",
            "range": "stddev: 1.457269856249969e-8",
            "extra": "mean: 166.18983674986282 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4982.994623717289,
            "unit": "iter/sec",
            "range": "stddev: 0.00010186523190626465",
            "extra": "mean: 200.68253640900076 usec\nrounds: 1799"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.73235286944796,
            "unit": "iter/sec",
            "range": "stddev: 0.0007322814035244471",
            "extra": "mean: 9.457843061855822 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 118.40452958570081,
            "unit": "iter/sec",
            "range": "stddev: 0.0007777514051784607",
            "extra": "mean: 8.44562284482709 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12044.414731695619,
            "unit": "iter/sec",
            "range": "stddev: 0.000018965163020528922",
            "extra": "mean: 83.02603507735735 usec\nrounds: 5217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.5228627271123,
            "unit": "iter/sec",
            "range": "stddev: 0.0008157419873995156",
            "extra": "mean: 10.047942478724309 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.34327013812492,
            "unit": "iter/sec",
            "range": "stddev: 0.0015251069171563134",
            "extra": "mean: 44.756205954547056 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 298.70825293376953,
            "unit": "iter/sec",
            "range": "stddev: 0.00023670107133418234",
            "extra": "mean: 3.3477481461542444 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5245.807020807243,
            "unit": "iter/sec",
            "range": "stddev: 0.00005116846376590021",
            "extra": "mean: 190.62843830006477 usec\nrounds: 2188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.561919452293427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005327569263346751",
            "extra": "mean: 179.79404566667276 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.2362765509228,
            "unit": "iter/sec",
            "range": "stddev: 0.0002351545572507788",
            "extra": "mean: 3.192478250000619 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8396.068217042526,
            "unit": "iter/sec",
            "range": "stddev: 0.00002409680511806528",
            "extra": "mean: 119.1033676894356 usec\nrounds: 4172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.76875350492843,
            "unit": "iter/sec",
            "range": "stddev: 0.00008151322043246662",
            "extra": "mean: 13.555874980769342 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.1405254925308,
            "unit": "iter/sec",
            "range": "stddev: 0.00009429819982907235",
            "extra": "mean: 8.464495953704075 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 117.49461979699616,
            "unit": "iter/sec",
            "range": "stddev: 0.0008385302717524999",
            "extra": "mean: 8.51102800900817 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.7905451011735,
            "unit": "iter/sec",
            "range": "stddev: 0.000013018925823489184",
            "extra": "mean: 1.3301577234725974 msec\nrounds: 622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 111.66375838576795,
            "unit": "iter/sec",
            "range": "stddev: 0.0008672742032641098",
            "extra": "mean: 8.955457119267574 msec\nrounds: 109"
          }
        ]
      }
    ]
  }
}