window.BENCHMARK_DATA = {
  "lastUpdate": 1681424517114,
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
          "id": "c550780cdf2b1e0c2c32e017c66dace1db625170",
          "message": "feat(datafusion): minimal decimal support",
          "timestamp": "2023-04-13T18:10:01-04:00",
          "tree_id": "1c17a1f6b32c2f3203bf4417ac8f0eb58d05cad4",
          "url": "https://github.com/ibis-project/ibis/commit/c550780cdf2b1e0c2c32e017c66dace1db625170"
        },
        "date": 1681424437869,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2087.87194011589,
            "unit": "iter/sec",
            "range": "stddev: 0.00014447089106170037",
            "extra": "mean: 478.95657812446757 usec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.354747924509542,
            "unit": "iter/sec",
            "range": "stddev: 0.0006632845333627344",
            "extra": "mean: 42.81784599997991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12219.672250843158,
            "unit": "iter/sec",
            "range": "stddev: 0.00001699222094075665",
            "extra": "mean: 81.8352554366587 usec\nrounds: 3817"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.6370923936554,
            "unit": "iter/sec",
            "range": "stddev: 0.00007556313627516855",
            "extra": "mean: 8.878070081080395 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 285.5182738201205,
            "unit": "iter/sec",
            "range": "stddev: 0.000037674985974542624",
            "extra": "mean: 3.5024027941203175 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.39602619353013,
            "unit": "iter/sec",
            "range": "stddev: 0.00007908599444082834",
            "extra": "mean: 5.065958111130285 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2240.0083932761586,
            "unit": "iter/sec",
            "range": "stddev: 0.00008298614573280865",
            "extra": "mean: 446.42689866774765 usec\nrounds: 375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.275034775872614,
            "unit": "iter/sec",
            "range": "stddev: 0.00028848885625563534",
            "extra": "mean: 88.69152245453775 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2188.717353324368,
            "unit": "iter/sec",
            "range": "stddev: 0.00009036497076834103",
            "extra": "mean: 456.8885966390927 usec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6166888.6772594545,
            "unit": "iter/sec",
            "range": "stddev: 8.066834067747381e-9",
            "extra": "mean: 162.15632425575174 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.38708486407663,
            "unit": "iter/sec",
            "range": "stddev: 0.00013833224806588914",
            "extra": "mean: 6.394389925927368 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.56368370419796,
            "unit": "iter/sec",
            "range": "stddev: 0.00036406614145881745",
            "extra": "mean: 8.363743647059355 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 284.0984231361737,
            "unit": "iter/sec",
            "range": "stddev: 0.0002509810788328728",
            "extra": "mean: 3.5199069004359846 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.13136874451897,
            "unit": "iter/sec",
            "range": "stddev: 0.021504971997609826",
            "extra": "mean: 26.93140688888857 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2150.41673368579,
            "unit": "iter/sec",
            "range": "stddev: 0.00008570944252048383",
            "extra": "mean: 465.026143228532 usec\nrounds: 1152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.5358773682224,
            "unit": "iter/sec",
            "range": "stddev: 0.0007292578181555784",
            "extra": "mean: 11.423887325575876 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 75.74691993220794,
            "unit": "iter/sec",
            "range": "stddev: 0.00017524026466368838",
            "extra": "mean: 13.201856932202407 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 272.33672988736487,
            "unit": "iter/sec",
            "range": "stddev: 0.00027095417300489725",
            "extra": "mean: 3.6719248278173406 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5654004001651165,
            "unit": "iter/sec",
            "range": "stddev: 0.002565476123001573",
            "extra": "mean: 389.8026989999835 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2218.362817482705,
            "unit": "iter/sec",
            "range": "stddev: 0.00008686906556606642",
            "extra": "mean: 450.78288912845807 usec\nrounds: 1389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7992038143849158,
            "unit": "iter/sec",
            "range": "stddev: 0.0014793414280835826",
            "extra": "mean: 555.8014006000008 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14028.359376284892,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014909006884623635",
            "extra": "mean: 71.2841732362882 usec\nrounds: 5911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.99803611936524,
            "unit": "iter/sec",
            "range": "stddev: 0.0009894310887939898",
            "extra": "mean: 10.10121048052172 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9350502938774208,
            "unit": "iter/sec",
            "range": "stddev: 0.009174856508040338",
            "extra": "mean: 1.0694611900000042 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 100.82248006532588,
            "unit": "iter/sec",
            "range": "stddev: 0.0006049311813686214",
            "extra": "mean: 9.918422948454257 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4535.9018853590605,
            "unit": "iter/sec",
            "range": "stddev: 0.000023468338231940007",
            "extra": "mean: 220.4633224602565 usec\nrounds: 1870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 756991.263313342,
            "unit": "iter/sec",
            "range": "stddev: 1.5449182006669155e-7",
            "extra": "mean: 1.321019209155746 usec\nrounds: 24155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1142.891097945852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000920485469950133",
            "extra": "mean: 874.9740039075693 usec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.8410966597004,
            "unit": "iter/sec",
            "range": "stddev: 0.000056161216182018995",
            "extra": "mean: 6.029868471335315 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.484400599178644,
            "unit": "iter/sec",
            "range": "stddev: 0.0022160051624087523",
            "extra": "mean: 64.58112431249319 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.77477550662465,
            "unit": "iter/sec",
            "range": "stddev: 0.00003977040525047258",
            "extra": "mean: 7.58870577586169 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 286.4775386120642,
            "unit": "iter/sec",
            "range": "stddev: 0.000261372388414088",
            "extra": "mean: 3.4906750625016985 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148489.34688697584,
            "unit": "iter/sec",
            "range": "stddev: 3.048704660097745e-7",
            "extra": "mean: 6.73448985374796 usec\nrounds: 37452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.612034580224524,
            "unit": "iter/sec",
            "range": "stddev: 0.001434942628138279",
            "extra": "mean: 26.587234941174263 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11074102.551971262,
            "unit": "iter/sec",
            "range": "stddev: 2.929586121354655e-9",
            "extra": "mean: 90.30077112862797 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 299.4429894957472,
            "unit": "iter/sec",
            "range": "stddev: 0.0001633387192876023",
            "extra": "mean: 3.3395338514485484 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 81.88110233990362,
            "unit": "iter/sec",
            "range": "stddev: 0.018111864818897327",
            "extra": "mean: 12.21283020652085 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5564331.092396188,
            "unit": "iter/sec",
            "range": "stddev: 9.154640714059289e-9",
            "extra": "mean: 179.716121020784 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.60642601148228,
            "unit": "iter/sec",
            "range": "stddev: 0.0008989121219067452",
            "extra": "mean: 10.039512911393121 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7057567.200694696,
            "unit": "iter/sec",
            "range": "stddev: 4.047820425030889e-9",
            "extra": "mean: 141.69188497438236 nsec\nrounds: 67115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.711129635728385,
            "unit": "iter/sec",
            "range": "stddev: 0.008081978402441183",
            "extra": "mean: 1.4062133678000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16767617680597388,
            "unit": "iter/sec",
            "range": "stddev: 0.18834077312007408",
            "extra": "mean: 5.963876437600004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.20757211088623,
            "unit": "iter/sec",
            "range": "stddev: 0.000030780171483719436",
            "extra": "mean: 9.073786681316616 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 499683.58164275525,
            "unit": "iter/sec",
            "range": "stddev: 2.4126844095805593e-7",
            "extra": "mean: 2.001266474900794 usec\nrounds: 2094"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.62524853924273,
            "unit": "iter/sec",
            "range": "stddev: 0.0001588399093598969",
            "extra": "mean: 10.139391431820854 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.0651182298266,
            "unit": "iter/sec",
            "range": "stddev: 0.000019929632493803926",
            "extra": "mean: 1.453350814487854 msec\nrounds: 566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.8388229703612815,
            "unit": "iter/sec",
            "range": "stddev: 0.00025515741225128096",
            "extra": "mean: 171.26739500001045 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 157.9913483597555,
            "unit": "iter/sec",
            "range": "stddev: 0.01963121452765497",
            "extra": "mean: 6.329460507691482 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 284.56137722396335,
            "unit": "iter/sec",
            "range": "stddev: 0.0002613950713266832",
            "extra": "mean: 3.5141803492641674 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.12806632227841,
            "unit": "iter/sec",
            "range": "stddev: 0.000515534069687295",
            "extra": "mean: 17.81639856000311 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2144.6320972831377,
            "unit": "iter/sec",
            "range": "stddev: 0.00009034115304148292",
            "extra": "mean: 466.2804409515365 usec\nrounds: 1177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.37779194132585,
            "unit": "iter/sec",
            "range": "stddev: 0.00008410454290162774",
            "extra": "mean: 13.266506941174411 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 274.51605240585343,
            "unit": "iter/sec",
            "range": "stddev: 0.0003200357075102078",
            "extra": "mean: 3.64277422480769 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.51994761088975,
            "unit": "iter/sec",
            "range": "stddev: 0.0006286815332708851",
            "extra": "mean: 22.97796883720916 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.97805309315189,
            "unit": "iter/sec",
            "range": "stddev: 0.00035898522366041834",
            "extra": "mean: 11.1138212666674 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.13768054869767,
            "unit": "iter/sec",
            "range": "stddev: 0.0008512557699644891",
            "extra": "mean: 9.986250875000971 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.86361563890279,
            "unit": "iter/sec",
            "range": "stddev: 0.0009524361942250754",
            "extra": "mean: 10.653755378943012 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.56618444488149,
            "unit": "iter/sec",
            "range": "stddev: 0.0009317168366306737",
            "extra": "mean: 10.04357057142816 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.42525235575766,
            "unit": "iter/sec",
            "range": "stddev: 0.0003019044003967508",
            "extra": "mean: 3.6176144960627767 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 745.4257095362151,
            "unit": "iter/sec",
            "range": "stddev: 0.000012930353507251215",
            "extra": "mean: 1.3415153075712596 msec\nrounds: 634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 82.47056097649862,
            "unit": "iter/sec",
            "range": "stddev: 0.021967010128777005",
            "extra": "mean: 12.125538957895131 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2736569.4692203375,
            "unit": "iter/sec",
            "range": "stddev: 1.4011176195974526e-8",
            "extra": "mean: 365.4210175355101 nsec\nrounds: 103083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2117.8314174407683,
            "unit": "iter/sec",
            "range": "stddev: 0.00021402007420786908",
            "extra": "mean: 472.18111496731916 usec\nrounds: 461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8289.403593308754,
            "unit": "iter/sec",
            "range": "stddev: 0.000013938035913695569",
            "extra": "mean: 120.63594066130459 usec\nrounds: 4449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 95.54598352536881,
            "unit": "iter/sec",
            "range": "stddev: 0.0008460216872334371",
            "extra": "mean: 10.466164700000036 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2120.2593379267537,
            "unit": "iter/sec",
            "range": "stddev: 0.00009009352424832519",
            "extra": "mean: 471.6404178074871 usec\nrounds: 1898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 99.5230256263857,
            "unit": "iter/sec",
            "range": "stddev: 0.000693785005790443",
            "extra": "mean: 10.04792603225357 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 154.12931583781392,
            "unit": "iter/sec",
            "range": "stddev: 0.003723932074297823",
            "extra": "mean: 6.488058385026978 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.72607274823361,
            "unit": "iter/sec",
            "range": "stddev: 0.000830345845967929",
            "extra": "mean: 17.3231947435849 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1780.0287872750464,
            "unit": "iter/sec",
            "range": "stddev: 0.000007723945307523504",
            "extra": "mean: 561.788667210741 usec\nrounds: 1223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.25470633754401,
            "unit": "iter/sec",
            "range": "stddev: 0.0008841228703424243",
            "extra": "mean: 10.498168945651944 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 226.70521961154387,
            "unit": "iter/sec",
            "range": "stddev: 0.003509370936089401",
            "extra": "mean: 4.411014451777889 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9440210527539588,
            "unit": "iter/sec",
            "range": "stddev: 0.00548531663754025",
            "extra": "mean: 1.0592984098000102 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.5195867100784,
            "unit": "iter/sec",
            "range": "stddev: 0.0007274147043649945",
            "extra": "mean: 10.360591400000077 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.32035628979484,
            "unit": "iter/sec",
            "range": "stddev: 0.00036252673184257645",
            "extra": "mean: 21.13255432558231 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.1366519802386,
            "unit": "iter/sec",
            "range": "stddev: 0.00003057054232367396",
            "extra": "mean: 1.865196114286286 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74652.94060650171,
            "unit": "iter/sec",
            "range": "stddev: 4.2277354204660963e-7",
            "extra": "mean: 13.395319620040627 usec\nrounds: 13369"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1709475.1814407695,
            "unit": "iter/sec",
            "range": "stddev: 9.236720000579142e-8",
            "extra": "mean: 584.9748571121028 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.81080438798062,
            "unit": "iter/sec",
            "range": "stddev: 0.000792549448301394",
            "extra": "mean: 10.547321125004316 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 96.25292197627466,
            "unit": "iter/sec",
            "range": "stddev: 0.0007925596131500281",
            "extra": "mean: 10.389294989366551 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2723177.4456690974,
            "unit": "iter/sec",
            "range": "stddev: 1.8089673230806056e-8",
            "extra": "mean: 367.21808253397336 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1975390.9092067895,
            "unit": "iter/sec",
            "range": "stddev: 7.68183226989637e-8",
            "extra": "mean: 506.2289166864427 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.4238612330375,
            "unit": "iter/sec",
            "range": "stddev: 0.0005485479920527962",
            "extra": "mean: 3.657325280574932 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 79.09669903822065,
            "unit": "iter/sec",
            "range": "stddev: 0.024833195666408483",
            "extra": "mean: 12.642752632657727 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.4334429220793,
            "unit": "iter/sec",
            "range": "stddev: 0.00020403707199377814",
            "extra": "mean: 6.233114379311105 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8565329442608921,
            "unit": "iter/sec",
            "range": "stddev: 0.004421575028356927",
            "extra": "mean: 1.167497417000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.47170145138804,
            "unit": "iter/sec",
            "range": "stddev: 0.0008065450353036809",
            "extra": "mean: 9.953051312501534 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9663.090788780893,
            "unit": "iter/sec",
            "range": "stddev: 0.00016739107228111967",
            "extra": "mean: 103.48655744402471 usec\nrounds: 5118"
          }
        ]
      }
    ]
  }
}