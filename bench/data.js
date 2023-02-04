window.BENCHMARK_DATA = {
  "lastUpdate": 1675514349849,
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
          "id": "5a4707a49402ae949243e980edf07ab29543adbc",
          "message": "fix(polars): properly infer polars categorical dtype",
          "timestamp": "2023-02-04T07:30:59-05:00",
          "tree_id": "4229f540f1b49ac50ef57c90046b920c60423790",
          "url": "https://github.com/ibis-project/ibis/commit/5a4707a49402ae949243e980edf07ab29543adbc"
        },
        "date": 1675514104035,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 44.00702647618425,
            "unit": "iter/sec",
            "range": "stddev: 0.0011160097605986987",
            "extra": "mean: 22.72364392857083 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4010.0471376622068,
            "unit": "iter/sec",
            "range": "stddev: 0.000051954682844856564",
            "extra": "mean: 249.37362720952552 usec\nrounds: 566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 261.97464822447824,
            "unit": "iter/sec",
            "range": "stddev: 0.000021475334060338125",
            "extra": "mean: 3.8171632513964857 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5797153431425941,
            "unit": "iter/sec",
            "range": "stddev: 0.05387506384448107",
            "extra": "mean: 1.724984532200017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10830.177238202143,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024149024771731458",
            "extra": "mean: 92.33459231605377 usec\nrounds: 4425"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1455.9533074683059,
            "unit": "iter/sec",
            "range": "stddev: 0.000007771077483042283",
            "extra": "mean: 686.8352129635646 usec\nrounds: 1080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 154.58255664704407,
            "unit": "iter/sec",
            "range": "stddev: 0.0007503036168428816",
            "extra": "mean: 6.469035198345725 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 154.46134486688155,
            "unit": "iter/sec",
            "range": "stddev: 0.0006390306449564207",
            "extra": "mean: 6.474111699997327 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4529079.662351099,
            "unit": "iter/sec",
            "range": "stddev: 1.1500516855528828e-8",
            "extra": "mean: 220.7954097859808 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 247.6019019600309,
            "unit": "iter/sec",
            "range": "stddev: 0.00022635759873036135",
            "extra": "mean: 4.038741189320205 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.0751587123226,
            "unit": "iter/sec",
            "range": "stddev: 0.0005920689337306914",
            "extra": "mean: 11.101840000013194 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.53299020309453,
            "unit": "iter/sec",
            "range": "stddev: 0.00016324506313235187",
            "extra": "mean: 11.295224499997138 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 218.8454656178133,
            "unit": "iter/sec",
            "range": "stddev: 0.00046038176730191476",
            "extra": "mean: 4.569434405126662 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 269.301390585736,
            "unit": "iter/sec",
            "range": "stddev: 0.00004663346635536802",
            "extra": "mean: 3.713311683333605 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 385544.17362338747,
            "unit": "iter/sec",
            "range": "stddev: 3.9787495698863217e-7",
            "extra": "mean: 2.5937365116995226 usec\nrounds: 1909"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10698.197597573218,
            "unit": "iter/sec",
            "range": "stddev: 0.000001932061114843658",
            "extra": "mean: 93.47368945838505 usec\nrounds: 6318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 242.05083543991134,
            "unit": "iter/sec",
            "range": "stddev: 0.0003429191790294881",
            "extra": "mean: 4.131363555025812 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1527685.470696378,
            "unit": "iter/sec",
            "range": "stddev: 8.624845941557517e-8",
            "extra": "mean: 654.5850040350003 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 156.8292799847659,
            "unit": "iter/sec",
            "range": "stddev: 0.000659023501592227",
            "extra": "mean: 6.3763603333327685 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11071163.638251673,
            "unit": "iter/sec",
            "range": "stddev: 2.786065743223417e-9",
            "extra": "mean: 90.32474206648484 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7467560227993691,
            "unit": "iter/sec",
            "range": "stddev: 0.0037599092925475314",
            "extra": "mean: 1.339125456599993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.49473217184575,
            "unit": "iter/sec",
            "range": "stddev: 0.00003911710374851752",
            "extra": "mean: 5.797278487343963 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 63.041518873427414,
            "unit": "iter/sec",
            "range": "stddev: 0.02217040036476768",
            "extra": "mean: 15.862561972971582 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 365.35925722034347,
            "unit": "iter/sec",
            "range": "stddev: 0.000030167326995169573",
            "extra": "mean: 2.737032058823442 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5500.621047267732,
            "unit": "iter/sec",
            "range": "stddev: 0.00004831200828898072",
            "extra": "mean: 181.79765364798578 usec\nrounds: 1946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 253.5013733278974,
            "unit": "iter/sec",
            "range": "stddev: 0.00018872643358483729",
            "extra": "mean: 3.9447518049794787 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 141.9321278450019,
            "unit": "iter/sec",
            "range": "stddev: 0.0005848074848824377",
            "extra": "mean: 7.0456211372527155 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 119.35805533616224,
            "unit": "iter/sec",
            "range": "stddev: 0.00008080224144289228",
            "extra": "mean: 8.378152586212815 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 271.60062518663784,
            "unit": "iter/sec",
            "range": "stddev: 0.000059941227440062885",
            "extra": "mean: 3.6818766499996918 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.63243382171852,
            "unit": "iter/sec",
            "range": "stddev: 0.000978194041628762",
            "extra": "mean: 22.918730687496947 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.875284774743417,
            "unit": "iter/sec",
            "range": "stddev: 0.0009547810116342828",
            "extra": "mean: 40.20054480000681 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 94.10417140757401,
            "unit": "iter/sec",
            "range": "stddev: 0.0005673406188401486",
            "extra": "mean: 10.626521492537307 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 514.3920249466764,
            "unit": "iter/sec",
            "range": "stddev: 0.00006194228614917544",
            "extra": "mean: 1.9440425813437976 msec\nrounds: 461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.1528283159561,
            "unit": "iter/sec",
            "range": "stddev: 0.00009095109165549075",
            "extra": "mean: 6.572339213592726 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 157.79965822927772,
            "unit": "iter/sec",
            "range": "stddev: 0.0007059754161782862",
            "extra": "mean: 6.337149340000678 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.946373755379123,
            "unit": "iter/sec",
            "range": "stddev: 0.0001387826665781465",
            "extra": "mean: 202.16830539999364 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8132465479188101,
            "unit": "iter/sec",
            "range": "stddev: 0.006092065244061248",
            "extra": "mean: 1.229639403400006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9761.727396505787,
            "unit": "iter/sec",
            "range": "stddev: 0.000016336357641156132",
            "extra": "mean: 102.44088565287639 usec\nrounds: 3262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1512606.0419354425,
            "unit": "iter/sec",
            "range": "stddev: 1.4746578172728272e-7",
            "extra": "mean: 661.1106740790605 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4546.179758613384,
            "unit": "iter/sec",
            "range": "stddev: 0.00006994061810568962",
            "extra": "mean: 219.96490528236544 usec\nrounds: 1552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.230808391212456,
            "unit": "iter/sec",
            "range": "stddev: 0.0006396076402717775",
            "extra": "mean: 27.600819424237393 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5457.80572666186,
            "unit": "iter/sec",
            "range": "stddev: 0.00004953198804967537",
            "extra": "mean: 183.2238174244481 usec\nrounds: 1802"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.2943785027064,
            "unit": "iter/sec",
            "range": "stddev: 0.00025553294930757026",
            "extra": "mean: 22.077794928574825 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 948.5766180970297,
            "unit": "iter/sec",
            "range": "stddev: 0.00001518433995921294",
            "extra": "mean: 1.0542111000017398 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8186303675059756,
            "unit": "iter/sec",
            "range": "stddev: 0.008384868810104341",
            "extra": "mean: 1.2215525341999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.554467877938503,
            "unit": "iter/sec",
            "range": "stddev: 0.001086976108258383",
            "extra": "mean: 643.3069568000178 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.69489799588079,
            "unit": "iter/sec",
            "range": "stddev: 0.00009459981552756691",
            "extra": "mean: 73.01989399999798 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4797.209174755672,
            "unit": "iter/sec",
            "range": "stddev: 0.000047765104561317735",
            "extra": "mean: 208.454533369588 usec\nrounds: 1828"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.96297913335925,
            "unit": "iter/sec",
            "range": "stddev: 0.0005118387453216593",
            "extra": "mean: 26.341452194442482 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19437.78465907556,
            "unit": "iter/sec",
            "range": "stddev: 0.000012146332014685439",
            "extra": "mean: 51.446191916376485 usec\nrounds: 4033"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.90712169299492,
            "unit": "iter/sec",
            "range": "stddev: 0.0002684379551582428",
            "extra": "mean: 9.81285687778129 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.47840022183287,
            "unit": "iter/sec",
            "range": "stddev: 0.00028702964416459905",
            "extra": "mean: 10.584429855416957 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.23652202978744,
            "unit": "iter/sec",
            "range": "stddev: 0.0009740674966063009",
            "extra": "mean: 11.73206010975591 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5392.018727723262,
            "unit": "iter/sec",
            "range": "stddev: 0.00005774443096688391",
            "extra": "mean: 185.4592965077186 usec\nrounds: 2634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122986.3219029068,
            "unit": "iter/sec",
            "range": "stddev: 4.3794166962844316e-7",
            "extra": "mean: 8.130985499261156 usec\nrounds: 32895"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4317525.55449254,
            "unit": "iter/sec",
            "range": "stddev: 1.5521745378488453e-8",
            "extra": "mean: 231.61414735778217 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.49708490697469,
            "unit": "iter/sec",
            "range": "stddev: 0.0008740999168034737",
            "extra": "mean: 10.695520625000812 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1671650.9032990143,
            "unit": "iter/sec",
            "range": "stddev: 7.621933134055153e-8",
            "extra": "mean: 598.2110248177376 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 249.56575375339978,
            "unit": "iter/sec",
            "range": "stddev: 0.0002590317636748144",
            "extra": "mean: 4.006960029412197 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1497093.9290096208,
            "unit": "iter/sec",
            "range": "stddev: 1.0159027874558833e-7",
            "extra": "mean: 667.9607609266939 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.59108423449803,
            "unit": "iter/sec",
            "range": "stddev: 0.0006693670195186771",
            "extra": "mean: 11.16182495774439 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 252.32352427553175,
            "unit": "iter/sec",
            "range": "stddev: 0.00019266392136814867",
            "extra": "mean: 3.963165950821224 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 215.31694501863396,
            "unit": "iter/sec",
            "range": "stddev: 0.012878081253252066",
            "extra": "mean: 4.6443163119997735 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4882.93039711817,
            "unit": "iter/sec",
            "range": "stddev: 0.00005651872537454591",
            "extra": "mean: 204.7950551558516 usec\nrounds: 2502"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 235.09980583148828,
            "unit": "iter/sec",
            "range": "stddev: 0.00031266708705325646",
            "extra": "mean: 4.253512658010304 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58688.25420328236,
            "unit": "iter/sec",
            "range": "stddev: 5.285693307264795e-7",
            "extra": "mean: 17.039184647344157 usec\nrounds: 12532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.50896531123659,
            "unit": "iter/sec",
            "range": "stddev: 0.0022844888722318834",
            "extra": "mean: 30.760745241385898 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 156.79073718635289,
            "unit": "iter/sec",
            "range": "stddev: 0.0006444907640989537",
            "extra": "mean: 6.377927790539403 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.57169853534107,
            "unit": "iter/sec",
            "range": "stddev: 0.00027382581332901286",
            "extra": "mean: 14.58327591935923 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 87.92703446733725,
            "unit": "iter/sec",
            "range": "stddev: 0.00015151198554584885",
            "extra": "mean: 11.373066384622303 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5496845.260816961,
            "unit": "iter/sec",
            "range": "stddev: 4.237266420511753e-9",
            "extra": "mean: 181.9225305701539 nsec\nrounds: 54055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 142.6674439831636,
            "unit": "iter/sec",
            "range": "stddev: 0.00013399720835555437",
            "extra": "mean: 7.009307604319396 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4481.188255574697,
            "unit": "iter/sec",
            "range": "stddev: 0.00005677953139682734",
            "extra": "mean: 223.15509703391237 usec\nrounds: 1989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.215021513137334,
            "unit": "iter/sec",
            "range": "stddev: 0.003037562445996481",
            "extra": "mean: 451.4628837999908 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 144.03837066965204,
            "unit": "iter/sec",
            "range": "stddev: 0.0007095114082928065",
            "extra": "mean: 6.942594499999392 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.67237926112084,
            "unit": "iter/sec",
            "range": "stddev: 0.0006735070194630264",
            "extra": "mean: 10.675505499998062 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 594187.6504016536,
            "unit": "iter/sec",
            "range": "stddev: 1.3499534697159283e-7",
            "extra": "mean: 1.6829700168356396 usec\nrounds: 24814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.35447753382155,
            "unit": "iter/sec",
            "range": "stddev: 0.00011897602911107791",
            "extra": "mean: 6.879733028983003 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13041251792703656,
            "unit": "iter/sec",
            "range": "stddev: 0.13085836202572904",
            "extra": "mean: 7.667975558599994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.12635325839929,
            "unit": "iter/sec",
            "range": "stddev: 0.0004238227513975594",
            "extra": "mean: 109.57279119999725 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 622.4315215991608,
            "unit": "iter/sec",
            "range": "stddev: 0.000016823855560455467",
            "extra": "mean: 1.6066024378565922 msec\nrounds: 523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 66.27132253651145,
            "unit": "iter/sec",
            "range": "stddev: 0.00007647773857847856",
            "extra": "mean: 15.089483078432018 msec\nrounds: 51"
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "9f8d48522c8f3d479812a300e8523f969a0a99d2",
          "message": "test(duckdb): isolate tests with `subprocess`",
          "timestamp": "2023-02-04T07:32:27-05:00",
          "tree_id": "48f3d9ec4b19317414eaed8027759a558c939360",
          "url": "https://github.com/ibis-project/ibis/commit/9f8d48522c8f3d479812a300e8523f969a0a99d2"
        },
        "date": 1675514277506,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 138.61295735045326,
            "unit": "iter/sec",
            "range": "stddev: 0.0006131413582598017",
            "extra": "mean: 7.214332765960066 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 616.4526031054362,
            "unit": "iter/sec",
            "range": "stddev: 0.000024744168469587594",
            "extra": "mean: 1.6221847307682844 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 83.4999685378956,
            "unit": "iter/sec",
            "range": "stddev: 0.0002737253260758001",
            "extra": "mean: 11.9760524166684 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5172.489359911508,
            "unit": "iter/sec",
            "range": "stddev: 0.00005264700580300739",
            "extra": "mean: 193.33050885523875 usec\nrounds: 847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 156.53636841631996,
            "unit": "iter/sec",
            "range": "stddev: 0.0006661768152623642",
            "extra": "mean: 6.388291807948595 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.475402490198561,
            "unit": "iter/sec",
            "range": "stddev: 0.04977918401841669",
            "extra": "mean: 223.44359020000297 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 250.7338496522596,
            "unit": "iter/sec",
            "range": "stddev: 0.00020954735810283233",
            "extra": "mean: 3.9882927709477216 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.60519725096741,
            "unit": "iter/sec",
            "range": "stddev: 0.0006551188919201884",
            "extra": "mean: 10.570243803278728 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.47556310429202,
            "unit": "iter/sec",
            "range": "stddev: 0.000828686683232746",
            "extra": "mean: 29.006052692305566 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.97338828084546,
            "unit": "iter/sec",
            "range": "stddev: 0.00012927231219385903",
            "extra": "mean: 15.390916596153659 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 236.94775188379108,
            "unit": "iter/sec",
            "range": "stddev: 0.00024763297255703996",
            "extra": "mean: 4.220339682692753 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.61036674812567,
            "unit": "iter/sec",
            "range": "stddev: 0.0001959134580671379",
            "extra": "mean: 10.350856058823531 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.05340364586546,
            "unit": "iter/sec",
            "range": "stddev: 0.00011718873523339595",
            "extra": "mean: 14.694342184613927 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7455199790707873,
            "unit": "iter/sec",
            "range": "stddev: 0.0018354705988185818",
            "extra": "mean: 1.341345675599996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 144.42384208952546,
            "unit": "iter/sec",
            "range": "stddev: 0.0006815544149173141",
            "extra": "mean: 6.9240645140857 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.40666104121792,
            "unit": "iter/sec",
            "range": "stddev: 0.00023809538924601686",
            "extra": "mean: 6.973176787880028 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.78465702824187,
            "unit": "iter/sec",
            "range": "stddev: 0.0005157410733599462",
            "extra": "mean: 18.253285759998334 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1354822045268366,
            "unit": "iter/sec",
            "range": "stddev: 0.06760733064480098",
            "extra": "mean: 7.3810431672 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5880858437238078,
            "unit": "iter/sec",
            "range": "stddev: 0.0046537196205337535",
            "extra": "mean: 1.7004320214000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 255.33097164650425,
            "unit": "iter/sec",
            "range": "stddev: 0.0002054648503289243",
            "extra": "mean: 3.916485311403824 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.52454123539597,
            "unit": "iter/sec",
            "range": "stddev: 0.00011434520091773409",
            "extra": "mean: 9.753762249996356 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.212711195876605,
            "unit": "iter/sec",
            "range": "stddev: 0.0038212927219071005",
            "extra": "mean: 451.93426139999815 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4294.412573604454,
            "unit": "iter/sec",
            "range": "stddev: 0.00011540036654236272",
            "extra": "mean: 232.86071909962394 usec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 262.83261226274305,
            "unit": "iter/sec",
            "range": "stddev: 0.000018386974769193548",
            "extra": "mean: 3.8047028920457584 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4194.142925326358,
            "unit": "iter/sec",
            "range": "stddev: 0.000028251850742512795",
            "extra": "mean: 238.42773548833873 usec\nrounds: 1361"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 273.31797472403014,
            "unit": "iter/sec",
            "range": "stddev: 0.000057604084352598805",
            "extra": "mean: 3.6587421702129275 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5446.205843997789,
            "unit": "iter/sec",
            "range": "stddev: 0.00004745454041487142",
            "extra": "mean: 183.61406613047694 usec\nrounds: 2238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 489.6825936773124,
            "unit": "iter/sec",
            "range": "stddev: 0.00009929776617509081",
            "extra": "mean: 2.042139158940522 msec\nrounds: 453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 965.6335176715234,
            "unit": "iter/sec",
            "range": "stddev: 0.000012889889546776625",
            "extra": "mean: 1.0355895706803406 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4613.347686206344,
            "unit": "iter/sec",
            "range": "stddev: 0.00004844461939249691",
            "extra": "mean: 216.7623313954734 usec\nrounds: 1720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.41952516286371,
            "unit": "iter/sec",
            "range": "stddev: 0.023640068434777214",
            "extra": "mean: 30.84560908823833 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5747087380058846,
            "unit": "iter/sec",
            "range": "stddev: 0.001528446346142685",
            "extra": "mean: 635.0380714000096 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5406.015207270243,
            "unit": "iter/sec",
            "range": "stddev: 0.00004964198581181233",
            "extra": "mean: 184.97913188537774 usec\nrounds: 1888"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1623424.7344436026,
            "unit": "iter/sec",
            "range": "stddev: 9.726280461898749e-8",
            "extra": "mean: 615.9817445079957 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 156.2842461307831,
            "unit": "iter/sec",
            "range": "stddev: 0.0006785409328571591",
            "extra": "mean: 6.398597585857576 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 409.0120411645658,
            "unit": "iter/sec",
            "range": "stddev: 0.000026888182600460788",
            "extra": "mean: 2.4449157955172534 msec\nrounds: 357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 125161.79901312242,
            "unit": "iter/sec",
            "range": "stddev: 4.692986704182347e-7",
            "extra": "mean: 7.989658249440439 usec\nrounds: 35087"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8246938534448514,
            "unit": "iter/sec",
            "range": "stddev: 0.009298027071970149",
            "extra": "mean: 1.2125711811999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5175.000806094591,
            "unit": "iter/sec",
            "range": "stddev: 0.00005171625807305606",
            "extra": "mean: 193.23668487593304 usec\nrounds: 1977"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.909341357286,
            "unit": "iter/sec",
            "range": "stddev: 0.00003478648602189404",
            "extra": "mean: 5.885491592232097 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19131.21779251405,
            "unit": "iter/sec",
            "range": "stddev: 0.000012691872303008515",
            "extra": "mean: 52.27058783426191 usec\nrounds: 5721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.27820230911327,
            "unit": "iter/sec",
            "range": "stddev: 0.00006293801926175808",
            "extra": "mean: 11.327824693330513 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.6619287163928,
            "unit": "iter/sec",
            "range": "stddev: 0.000640505146404492",
            "extra": "mean: 25.21309558974339 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10566.662079252794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020391202629962303",
            "extra": "mean: 94.63726506059646 usec\nrounds: 5644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.1700587788905,
            "unit": "iter/sec",
            "range": "stddev: 0.0005525931143047092",
            "extra": "mean: 8.462380490739305 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59149.92748692818,
            "unit": "iter/sec",
            "range": "stddev: 5.440967109971052e-7",
            "extra": "mean: 16.906191477935366 usec\nrounds: 13072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.71070067332013,
            "unit": "iter/sec",
            "range": "stddev: 0.0007314815197168146",
            "extra": "mean: 11.024057719511369 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9802.789942072946,
            "unit": "iter/sec",
            "range": "stddev: 0.000013937189982829943",
            "extra": "mean: 102.01177480179025 usec\nrounds: 3659"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8174264088742155,
            "unit": "iter/sec",
            "range": "stddev: 0.023171473182291583",
            "extra": "mean: 1.2233517160000134 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1495426.112262119,
            "unit": "iter/sec",
            "range": "stddev: 8.539716872235489e-8",
            "extra": "mean: 668.7057232719495 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 134.69836490910052,
            "unit": "iter/sec",
            "range": "stddev: 0.012945503948105383",
            "extra": "mean: 7.423995092106999 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.653051047392502,
            "unit": "iter/sec",
            "range": "stddev: 0.0009024525027464823",
            "extra": "mean: 40.56293065217855 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.62335028884154,
            "unit": "iter/sec",
            "range": "stddev: 0.0009062879562833203",
            "extra": "mean: 16.771952517856903 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.17114541877059,
            "unit": "iter/sec",
            "range": "stddev: 0.0007872116216124361",
            "extra": "mean: 11.471685902439337 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.13405099525157,
            "unit": "iter/sec",
            "range": "stddev: 0.0008388219170698636",
            "extra": "mean: 10.972847021275328 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 153.61040984789238,
            "unit": "iter/sec",
            "range": "stddev: 0.0007006394897412561",
            "extra": "mean: 6.509975469697768 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.978677239760309,
            "unit": "iter/sec",
            "range": "stddev: 0.0005189080475558313",
            "extra": "mean: 111.37498022221986 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 269.12958029457064,
            "unit": "iter/sec",
            "range": "stddev: 0.00003125682634741774",
            "extra": "mean: 3.7156822334634088 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 67.57226630048487,
            "unit": "iter/sec",
            "range": "stddev: 0.021720156986002402",
            "extra": "mean: 14.798970861109398 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.56549658430316,
            "unit": "iter/sec",
            "range": "stddev: 0.0007550622671699559",
            "extra": "mean: 10.687700450550093 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4455748.322108663,
            "unit": "iter/sec",
            "range": "stddev: 1.1493963861837776e-8",
            "extra": "mean: 224.4291929683888 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10733682.216582151,
            "unit": "iter/sec",
            "range": "stddev: 3.936919710030104e-9",
            "extra": "mean: 93.16467357825617 nsec\nrounds: 102031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1444.2649375708036,
            "unit": "iter/sec",
            "range": "stddev: 0.00009072039741870794",
            "extra": "mean: 692.3937388398837 usec\nrounds: 1053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4263624.692281452,
            "unit": "iter/sec",
            "range": "stddev: 1.2002080977727987e-8",
            "extra": "mean: 234.54221986563329 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 256.6799819970201,
            "unit": "iter/sec",
            "range": "stddev: 0.00037141673124396236",
            "extra": "mean: 3.8959017848599093 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 594465.8873797834,
            "unit": "iter/sec",
            "range": "stddev: 1.6924176340925092e-7",
            "extra": "mean: 1.6821823105909102 usec\nrounds: 21787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 399528.3823419922,
            "unit": "iter/sec",
            "range": "stddev: 3.066228789342158e-7",
            "extra": "mean: 2.502951089827731 usec\nrounds: 1881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 247.48934461016975,
            "unit": "iter/sec",
            "range": "stddev: 0.00020308834400816617",
            "extra": "mean: 4.040577995691651 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1445965.2833672795,
            "unit": "iter/sec",
            "range": "stddev: 1.0164363994980105e-7",
            "extra": "mean: 691.5795361775619 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10795.317448603477,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016068898316854727",
            "extra": "mean: 92.63275533683948 usec\nrounds: 4778"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 248.22347973078368,
            "unit": "iter/sec",
            "range": "stddev: 0.0002206837351504951",
            "extra": "mean: 4.028627755458801 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5433091.611896037,
            "unit": "iter/sec",
            "range": "stddev: 5.014690606538788e-9",
            "extra": "mean: 184.0572682062894 nsec\nrounds: 53474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 131.89955654621465,
            "unit": "iter/sec",
            "range": "stddev: 0.01314633081264169",
            "extra": "mean: 7.581526626661723 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 128.0219003141982,
            "unit": "iter/sec",
            "range": "stddev: 0.00038481941265571163",
            "extra": "mean: 7.811163539564296 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1433341.7350707275,
            "unit": "iter/sec",
            "range": "stddev: 1.2587872168533135e-7",
            "extra": "mean: 697.670329086354 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.98553032305908,
            "unit": "iter/sec",
            "range": "stddev: 0.0014437240909767044",
            "extra": "mean: 25.650542437498203 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.90865971666526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000825336112952179",
            "extra": "mean: 6.670728708335124 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4633.662562610221,
            "unit": "iter/sec",
            "range": "stddev: 0.00007083998411994639",
            "extra": "mean: 215.81200324537286 usec\nrounds: 2157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 215.072461813305,
            "unit": "iter/sec",
            "range": "stddev: 0.00048484570225658814",
            "extra": "mean: 4.649595729592086 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.84609402814768,
            "unit": "iter/sec",
            "range": "stddev: 0.0008075792838952359",
            "extra": "mean: 11.383545404757319 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.604737229366187,
            "unit": "iter/sec",
            "range": "stddev: 0.0004935840462126841",
            "extra": "mean: 73.50380849998876 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 249.13708951260236,
            "unit": "iter/sec",
            "range": "stddev: 0.00022588418227309322",
            "extra": "mean: 4.013854388185811 msec\nrounds: 237"
          }
        ]
      }
    ]
  }
}