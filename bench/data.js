window.BENCHMARK_DATA = {
  "lastUpdate": 1680947243748,
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
          "id": "6ea888af7ac862ac431751bfbbdf4f242ba77ec4",
          "message": "chore(docker): add health checks for kudu",
          "timestamp": "2023-04-08T05:41:04-04:00",
          "tree_id": "bd3470de75fd255e05b80bd52977222c873b1c07",
          "url": "https://github.com/ibis-project/ibis/commit/6ea888af7ac862ac431751bfbbdf4f242ba77ec4"
        },
        "date": 1680947151398,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 75.83368729281905,
            "unit": "iter/sec",
            "range": "stddev: 0.0014723581679497672",
            "extra": "mean: 13.186751636362715 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 74.1239014010605,
            "unit": "iter/sec",
            "range": "stddev: 0.001534426916495054",
            "extra": "mean: 13.490925074077294 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1612600.279020851,
            "unit": "iter/sec",
            "range": "stddev: 0.000001194606339268146",
            "extra": "mean: 620.1164746214644 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 64.63319586818015,
            "unit": "iter/sec",
            "range": "stddev: 0.015667431280957753",
            "extra": "mean: 15.471925634615173 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.300851073312566,
            "unit": "iter/sec",
            "range": "stddev: 0.0045565897382722625",
            "extra": "mean: 232.51211979999766 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6230875396565347,
            "unit": "iter/sec",
            "range": "stddev: 0.018040576042372424",
            "extra": "mean: 1.6049109256000065 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5878.918007414455,
            "unit": "iter/sec",
            "range": "stddev: 0.000019321223511098796",
            "extra": "mean: 170.0993275869482 usec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 628702.411027387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011228617258951224",
            "extra": "mean: 1.5905776444627613 usec\nrounds: 17007"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 101.98089349432257,
            "unit": "iter/sec",
            "range": "stddev: 0.0010677108815983273",
            "extra": "mean: 9.805758370372304 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.3035597910381105,
            "unit": "iter/sec",
            "range": "stddev: 0.008668966003820368",
            "extra": "mean: 136.91953357143151 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 54.77277950604116,
            "unit": "iter/sec",
            "range": "stddev: 0.0017782550700515122",
            "extra": "mean: 18.257244000000128 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 552.4002645667199,
            "unit": "iter/sec",
            "range": "stddev: 0.0006002575938123618",
            "extra": "mean: 1.8102815370379286 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.5819746846642,
            "unit": "iter/sec",
            "range": "stddev: 0.002939197496565509",
            "extra": "mean: 32.69900031999782 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 198.63854800540165,
            "unit": "iter/sec",
            "range": "stddev: 0.0007366643197195009",
            "extra": "mean: 5.034269581817556 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 199.7137935537503,
            "unit": "iter/sec",
            "range": "stddev: 0.0006550343259364344",
            "extra": "mean: 5.007165415096195 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 128.90493115289294,
            "unit": "iter/sec",
            "range": "stddev: 0.00501248219590721",
            "extra": "mean: 7.757655126582468 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 73.784654836426,
            "unit": "iter/sec",
            "range": "stddev: 0.0015905395534886542",
            "extra": "mean: 13.55295355405417 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1538027.299677443,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013248673104556228",
            "extra": "mean: 650.183517685103 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.89243879658885,
            "unit": "iter/sec",
            "range": "stddev: 0.00022848031563957742",
            "extra": "mean: 13.533184400000664 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 842.9139013373372,
            "unit": "iter/sec",
            "range": "stddev: 0.008726313186644578",
            "extra": "mean: 1.1863607877547584 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1623.575494401891,
            "unit": "iter/sec",
            "range": "stddev: 0.00017367890169638344",
            "extra": "mean: 615.9245464396406 usec\nrounds: 1292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 78.76451725019271,
            "unit": "iter/sec",
            "range": "stddev: 0.0015248061272144994",
            "extra": "mean: 12.696072227847665 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1599.5450320576083,
            "unit": "iter/sec",
            "range": "stddev: 0.0001615783445571075",
            "extra": "mean: 625.177772402962 usec\nrounds: 1261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9433947.279826107,
            "unit": "iter/sec",
            "range": "stddev: 3.106717865374359e-7",
            "extra": "mean: 106.00016836405565 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5165622.670202893,
            "unit": "iter/sec",
            "range": "stddev: 4.852544954503637e-7",
            "extra": "mean: 193.5875041298251 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 66.3172771066509,
            "unit": "iter/sec",
            "range": "stddev: 0.0016123573231324572",
            "extra": "mean: 15.079026818182056 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6153635339766521,
            "unit": "iter/sec",
            "range": "stddev: 0.02161282286890925",
            "extra": "mean: 1.625055670000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.385174173925144,
            "unit": "iter/sec",
            "range": "stddev: 0.0021173362957452005",
            "extra": "mean: 24.16324251282367 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.176711330674289,
            "unit": "iter/sec",
            "range": "stddev: 0.003994277004723275",
            "extra": "mean: 82.12398018181685 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4636427.674634116,
            "unit": "iter/sec",
            "range": "stddev: 2.3687067152083204e-7",
            "extra": "mean: 215.6832954540019 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 115.64258985742431,
            "unit": "iter/sec",
            "range": "stddev: 0.01934451330623684",
            "extra": "mean: 8.647333142857658 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.9387891158591,
            "unit": "iter/sec",
            "range": "stddev: 0.0011879527955618537",
            "extra": "mean: 12.355015573170473 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1643.9036800811223,
            "unit": "iter/sec",
            "range": "stddev: 0.00023602388695416888",
            "extra": "mean: 608.3081461017549 usec\nrounds: 1629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.137288778983613,
            "unit": "iter/sec",
            "range": "stddev: 0.002746603624099189",
            "extra": "mean: 47.309757200000035 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 73.98682371230976,
            "unit": "iter/sec",
            "range": "stddev: 0.0016929716780761438",
            "extra": "mean: 13.515920130432932 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 226.787397231464,
            "unit": "iter/sec",
            "range": "stddev: 0.00027177378468231896",
            "extra": "mean: 4.409416097224216 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9071.783731670763,
            "unit": "iter/sec",
            "range": "stddev: 0.000029334837050398064",
            "extra": "mean: 110.23190472551408 usec\nrounds: 2603"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 83.49370694532418,
            "unit": "iter/sec",
            "range": "stddev: 0.001393647637618986",
            "extra": "mean: 11.976950558140265 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 186.97006534162185,
            "unit": "iter/sec",
            "range": "stddev: 0.0008760258334260855",
            "extra": "mean: 5.348449754097548 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 45.04664368581093,
            "unit": "iter/sec",
            "range": "stddev: 0.0009876338245499898",
            "extra": "mean: 22.199212153845465 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.210662784033342,
            "unit": "iter/sec",
            "range": "stddev: 0.033350751835718756",
            "extra": "mean: 33.100895771426465 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 36.10492538167708,
            "unit": "iter/sec",
            "range": "stddev: 0.0011598441024442544",
            "extra": "mean: 27.69705211764517 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 83.41102375103652,
            "unit": "iter/sec",
            "range": "stddev: 0.0014389482330329417",
            "extra": "mean: 11.988823000000323 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 70.30129853162498,
            "unit": "iter/sec",
            "range": "stddev: 0.02241767428726368",
            "extra": "mean: 14.224488322219978 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9626682859401996,
            "unit": "iter/sec",
            "range": "stddev: 0.009135835760402283",
            "extra": "mean: 509.51044920000754 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 963.194611808148,
            "unit": "iter/sec",
            "range": "stddev: 0.0000989317616679881",
            "extra": "mean: 1.0382117878782142 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 90.66543794561413,
            "unit": "iter/sec",
            "range": "stddev: 0.00060057332224271",
            "extra": "mean: 11.029561238096619 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 204.553633453149,
            "unit": "iter/sec",
            "range": "stddev: 0.0005619568253572518",
            "extra": "mean: 4.88869341071392 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 136.3359656485681,
            "unit": "iter/sec",
            "range": "stddev: 0.0008012112403274899",
            "extra": "mean: 7.33482170491747 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.77034683401142,
            "unit": "iter/sec",
            "range": "stddev: 0.0006214856431036305",
            "extra": "mean: 9.923554214288819 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5455620801844027,
            "unit": "iter/sec",
            "range": "stddev: 0.011985937011831363",
            "extra": "mean: 1.832971968399994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4784020.62651385,
            "unit": "iter/sec",
            "range": "stddev: 0.000001319339793794874",
            "extra": "mean: 209.02919909197882 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1344931.3863818222,
            "unit": "iter/sec",
            "range": "stddev: 0.000004149965468280958",
            "extra": "mean: 743.5323542342426 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3075.124201169445,
            "unit": "iter/sec",
            "range": "stddev: 0.00016318379801532828",
            "extra": "mean: 325.19011740069163 usec\nrounds: 954"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 198.24833520215168,
            "unit": "iter/sec",
            "range": "stddev: 0.0005311407085693341",
            "extra": "mean: 5.044178550000487 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59029.48295024758,
            "unit": "iter/sec",
            "range": "stddev: 0.000007167301766275652",
            "extra": "mean: 16.94068709432607 usec\nrounds: 11863"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 73.031612941727,
            "unit": "iter/sec",
            "range": "stddev: 0.0009588512761528107",
            "extra": "mean: 13.692700458333226 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 181.91125904996107,
            "unit": "iter/sec",
            "range": "stddev: 0.004371375394094037",
            "extra": "mean: 5.497185854369546 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 134.90380175935573,
            "unit": "iter/sec",
            "range": "stddev: 0.00015010042092831154",
            "extra": "mean: 7.41268953845957 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1696.3267883820288,
            "unit": "iter/sec",
            "range": "stddev: 0.00013053907252821072",
            "extra": "mean: 589.509053826715 usec\nrounds: 1189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1642.5071639764253,
            "unit": "iter/sec",
            "range": "stddev: 0.00013345980712266108",
            "extra": "mean: 608.8253506176809 usec\nrounds: 1215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 62.94433487846826,
            "unit": "iter/sec",
            "range": "stddev: 0.027011803465574767",
            "extra": "mean: 15.887053249999086 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 525.3686326694624,
            "unit": "iter/sec",
            "range": "stddev: 0.00023411956976956952",
            "extra": "mean: 1.9034254004067153 msec\nrounds: 492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1411.6216326434235,
            "unit": "iter/sec",
            "range": "stddev: 0.00010897122637266268",
            "extra": "mean: 708.4051256195227 usec\nrounds: 1210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 92.75946202381658,
            "unit": "iter/sec",
            "range": "stddev: 0.000396594500040845",
            "extra": "mean: 10.780571363633433 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 423762.26868656377,
            "unit": "iter/sec",
            "range": "stddev: 0.000002302872178444876",
            "extra": "mean: 2.359813683033803 usec\nrounds: 1637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.342033333939334,
            "unit": "iter/sec",
            "range": "stddev: 0.002166778975628082",
            "extra": "mean: 29.118834935487822 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 252.28580688440027,
            "unit": "iter/sec",
            "range": "stddev: 0.0003164876901656682",
            "extra": "mean: 3.963758454545996 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1101336835481757,
            "unit": "iter/sec",
            "range": "stddev: 0.012450616658381413",
            "extra": "mean: 900.7924134000064 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 82.31526308435318,
            "unit": "iter/sec",
            "range": "stddev: 0.0013347724860879925",
            "extra": "mean: 12.148415282050943 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1617.8852752935716,
            "unit": "iter/sec",
            "range": "stddev: 0.0001540316693664041",
            "extra": "mean: 618.0907974569125 usec\nrounds: 1101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 203.01357788166388,
            "unit": "iter/sec",
            "range": "stddev: 0.000478496725502826",
            "extra": "mean: 4.925778908161982 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10156.567037846615,
            "unit": "iter/sec",
            "range": "stddev: 0.00014624332109096954",
            "extra": "mean: 98.45846497873548 usec\nrounds: 6753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.05947120365191,
            "unit": "iter/sec",
            "range": "stddev: 0.0010526466906794684",
            "extra": "mean: 10.862543385545006 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1607741.0429653323,
            "unit": "iter/sec",
            "range": "stddev: 0.000008137729957530553",
            "extra": "mean: 621.9907144720214 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11138183204221788,
            "unit": "iter/sec",
            "range": "stddev: 0.05623794146978001",
            "extra": "mean: 8.978124903000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10447.891363722498,
            "unit": "iter/sec",
            "range": "stddev: 0.00002927402018273755",
            "extra": "mean: 95.71309321536708 usec\nrounds: 6780"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 411.5144931631635,
            "unit": "iter/sec",
            "range": "stddev: 0.00030179960076146407",
            "extra": "mean: 2.4300480702717433 msec\nrounds: 370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 131940.92430377225,
            "unit": "iter/sec",
            "range": "stddev: 0.000004605333547654143",
            "extra": "mean: 7.579149572256025 usec\nrounds: 27933"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 77.40905094491296,
            "unit": "iter/sec",
            "range": "stddev: 0.0011375547680852688",
            "extra": "mean: 12.918385999999348 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 204.23523957242983,
            "unit": "iter/sec",
            "range": "stddev: 0.0004785748944985044",
            "extra": "mean: 4.8963146717163895 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 64.10645596351188,
            "unit": "iter/sec",
            "range": "stddev: 0.020124949437349212",
            "extra": "mean: 15.599052934218985 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 78.60263858112823,
            "unit": "iter/sec",
            "range": "stddev: 0.0012125123305884989",
            "extra": "mean: 12.722219228911365 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.37860299541629,
            "unit": "iter/sec",
            "range": "stddev: 0.002082788111669916",
            "extra": "mean: 18.734098381815492 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 128.78555957067755,
            "unit": "iter/sec",
            "range": "stddev: 0.0008290287311626754",
            "extra": "mean: 7.764845712000806 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.501851717109124,
            "unit": "iter/sec",
            "range": "stddev: 0.06949105711375056",
            "extra": "mean: 1.9926204612000107 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1632.9423582920635,
            "unit": "iter/sec",
            "range": "stddev: 0.0003354367226049986",
            "extra": "mean: 612.3914876247842 usec\nrounds: 1212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 208.7230197068267,
            "unit": "iter/sec",
            "range": "stddev: 0.0004129990445459422",
            "extra": "mean: 4.791038388600378 msec\nrounds: 193"
          }
        ]
      }
    ]
  }
}