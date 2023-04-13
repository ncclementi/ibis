window.BENCHMARK_DATA = {
  "lastUpdate": 1681425524647,
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
          "id": "3c41bc2e0982671ccba5b174b989a2b74d45faf4",
          "message": "chore(deps): remove pandas extra from snowflake deps",
          "timestamp": "2023-04-13T18:08:31-04:00",
          "tree_id": "3a6839b663178740ceb4b0b8ec5705bd1603cdf0",
          "url": "https://github.com/ibis-project/ibis/commit/3c41bc2e0982671ccba5b174b989a2b74d45faf4"
        },
        "date": 1681424418075,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5387.151198227284,
            "unit": "iter/sec",
            "range": "stddev: 0.00015975917206864981",
            "extra": "mean: 185.62686718892607 usec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.28889705705608,
            "unit": "iter/sec",
            "range": "stddev: 0.001924473716235657",
            "extra": "mean: 14.432326714286535 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.092675686907118,
            "unit": "iter/sec",
            "range": "stddev: 0.026104849785864276",
            "extra": "mean: 34.37291264515902 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9136843563748365,
            "unit": "iter/sec",
            "range": "stddev: 0.012959290050283514",
            "extra": "mean: 522.5522154000032 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 60.79300759173838,
            "unit": "iter/sec",
            "range": "stddev: 0.019572793296604604",
            "extra": "mean: 16.449260196429197 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 124.41935365675796,
            "unit": "iter/sec",
            "range": "stddev: 0.000995008734792056",
            "extra": "mean: 8.0373347924532 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 205.47921174799393,
            "unit": "iter/sec",
            "range": "stddev: 0.0006919042194415299",
            "extra": "mean: 4.866672358206391 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121789.69309152014,
            "unit": "iter/sec",
            "range": "stddev: 0.00001383006392481644",
            "extra": "mean: 8.210875441229165 usec\nrounds: 28902"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 64.1364025464595,
            "unit": "iter/sec",
            "range": "stddev: 0.0015343328990061421",
            "extra": "mean: 15.591769421049369 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 69.06455840384373,
            "unit": "iter/sec",
            "range": "stddev: 0.002639433466490162",
            "extra": "mean: 14.479206457133387 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 74.036238001937,
            "unit": "iter/sec",
            "range": "stddev: 0.0018139502918639362",
            "extra": "mean: 13.506899148141985 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 168.83641369022922,
            "unit": "iter/sec",
            "range": "stddev: 0.012652017404639816",
            "extra": "mean: 5.922892924240497 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09839594149208862,
            "unit": "iter/sec",
            "range": "stddev: 0.09838168951287977",
            "extra": "mean: 10.163020799799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5411531.610001798,
            "unit": "iter/sec",
            "range": "stddev: 2.898076826825315e-7",
            "extra": "mean: 184.7905680069786 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 133.16037363990472,
            "unit": "iter/sec",
            "range": "stddev: 0.013993925526331778",
            "extra": "mean: 7.509741619561855 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 66.01755219146254,
            "unit": "iter/sec",
            "range": "stddev: 0.0017467559486405689",
            "extra": "mean: 15.147486794115354 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 604811.769153548,
            "unit": "iter/sec",
            "range": "stddev: 0.000004001467872591934",
            "extra": "mean: 1.6534069788349681 usec\nrounds: 20576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 66.61463638775817,
            "unit": "iter/sec",
            "range": "stddev: 0.0018699348917677707",
            "extra": "mean: 15.011715956521696 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5689053463122077,
            "unit": "iter/sec",
            "range": "stddev: 0.028012751560656076",
            "extra": "mean: 1.7577616495999906 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 209.77252161704783,
            "unit": "iter/sec",
            "range": "stddev: 0.0005814252281994552",
            "extra": "mean: 4.76706859550251 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3560309.371344444,
            "unit": "iter/sec",
            "range": "stddev: 6.384255651682381e-7",
            "extra": "mean: 280.87446783366886 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1108799.1103833485,
            "unit": "iter/sec",
            "range": "stddev: 0.000015541179420187684",
            "extra": "mean: 901.876625473001 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1315.9952537821862,
            "unit": "iter/sec",
            "range": "stddev: 0.0003525592223412243",
            "extra": "mean: 759.8811600011384 usec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1249.6054742489591,
            "unit": "iter/sec",
            "range": "stddev: 0.00042036910209184445",
            "extra": "mean: 800.2525761989178 usec\nrounds: 1168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1484.7261314813388,
            "unit": "iter/sec",
            "range": "stddev: 0.00034909840919991744",
            "extra": "mean: 673.5248870458564 usec\nrounds: 1266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1431110.7340465349,
            "unit": "iter/sec",
            "range": "stddev: 0.000005626992147882097",
            "extra": "mean: 698.7579480816635 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1446.7936044259702,
            "unit": "iter/sec",
            "range": "stddev: 0.0002122389249641508",
            "extra": "mean: 691.183591730598 usec\nrounds: 774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 65.16656132489442,
            "unit": "iter/sec",
            "range": "stddev: 0.002037739176266718",
            "extra": "mean: 15.345293347832177 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 33.9850593409461,
            "unit": "iter/sec",
            "range": "stddev: 0.0026042974676395774",
            "extra": "mean: 29.424694833331465 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 133.4519388610226,
            "unit": "iter/sec",
            "range": "stddev: 0.0010095571933447678",
            "extra": "mean: 7.493334368423109 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.9462059674299015,
            "unit": "iter/sec",
            "range": "stddev: 0.012469630646167237",
            "extra": "mean: 253.4079589999919 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.04064395538414,
            "unit": "iter/sec",
            "range": "stddev: 0.0021760708007636273",
            "extra": "mean: 33.2882344827622 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 62.12285029002012,
            "unit": "iter/sec",
            "range": "stddev: 0.005284898594632962",
            "extra": "mean: 16.097136485713495 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 64.94463628935625,
            "unit": "iter/sec",
            "range": "stddev: 0.0027873581659338194",
            "extra": "mean: 15.39773039215387 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.48243102725140324,
            "unit": "iter/sec",
            "range": "stddev: 0.02649537193201624",
            "extra": "mean: 2.072835169200016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 56.662462225262026,
            "unit": "iter/sec",
            "range": "stddev: 0.03154591261473651",
            "extra": "mean: 17.648368262298465 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.69777930208659,
            "unit": "iter/sec",
            "range": "stddev: 0.0021901275119015533",
            "extra": "mean: 17.33168957446922 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5456457331518566,
            "unit": "iter/sec",
            "range": "stddev: 0.04149145615656347",
            "extra": "mean: 1.8326909553999826 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 127.38121880852545,
            "unit": "iter/sec",
            "range": "stddev: 0.004960520448871649",
            "extra": "mean: 7.850450869866158 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5465960776327381,
            "unit": "iter/sec",
            "range": "stddev: 0.009594732447263478",
            "extra": "mean: 1.8295045297999877 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3085.6965712582155,
            "unit": "iter/sec",
            "range": "stddev: 0.00014525020109204737",
            "extra": "mean: 324.0759345278861 usec\nrounds: 1619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 61163.555749928455,
            "unit": "iter/sec",
            "range": "stddev: 0.000010978293137544128",
            "extra": "mean: 16.34960537756456 usec\nrounds: 3051"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2247265232580344,
            "unit": "iter/sec",
            "range": "stddev: 0.011215031467300636",
            "extra": "mean: 816.5088132000164 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.719211123493285,
            "unit": "iter/sec",
            "range": "stddev: 0.0031561318098809413",
            "extra": "mean: 37.42625466665572 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 72.05889583894593,
            "unit": "iter/sec",
            "range": "stddev: 0.0016925980020149195",
            "extra": "mean: 13.877537094587652 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1541.4769295468197,
            "unit": "iter/sec",
            "range": "stddev: 0.0002579343500457374",
            "extra": "mean: 648.7284894325281 usec\nrounds: 1561"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 845.2407509378236,
            "unit": "iter/sec",
            "range": "stddev: 0.0002479231613474206",
            "extra": "mean: 1.1830948743189036 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 70.18753327867924,
            "unit": "iter/sec",
            "range": "stddev: 0.0016349814869932918",
            "extra": "mean: 14.247544446810876 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 118.16463559857064,
            "unit": "iter/sec",
            "range": "stddev: 0.0009223268040452756",
            "extra": "mean: 8.462768872720972 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1559.5875853441296,
            "unit": "iter/sec",
            "range": "stddev: 0.0002227401386541519",
            "extra": "mean: 641.195152742477 usec\nrounds: 838"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9382497.323669638,
            "unit": "iter/sec",
            "range": "stddev: 1.97521636261528e-7",
            "extra": "mean: 106.58143194746236 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8602.819747648065,
            "unit": "iter/sec",
            "range": "stddev: 0.00005841067654109689",
            "extra": "mean: 116.2409569575593 usec\nrounds: 2788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 185.80000500537528,
            "unit": "iter/sec",
            "range": "stddev: 0.0008361889140984114",
            "extra": "mean: 5.382131179011914 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 84.26634899456299,
            "unit": "iter/sec",
            "range": "stddev: 0.0011259336840360181",
            "extra": "mean: 11.867133344824538 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1580.744142422796,
            "unit": "iter/sec",
            "range": "stddev: 0.0002074645325147185",
            "extra": "mean: 632.6134465172249 usec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 75.33068687077369,
            "unit": "iter/sec",
            "range": "stddev: 0.001294435742911334",
            "extra": "mean: 13.27480262745319 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 426840.0478161342,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040425900588840654",
            "extra": "mean: 2.342797975767167 usec\nrounds: 1975"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 57.00897580539753,
            "unit": "iter/sec",
            "range": "stddev: 0.03538154058620368",
            "extra": "mean: 17.541097447769292 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4613411.529454713,
            "unit": "iter/sec",
            "range": "stddev: 7.665303895523326e-7",
            "extra": "mean: 216.7593317039122 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 188.51505051724766,
            "unit": "iter/sec",
            "range": "stddev: 0.0012724868161072803",
            "extra": "mean: 5.304616248178592 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 120.15092985310375,
            "unit": "iter/sec",
            "range": "stddev: 0.0008210980317926643",
            "extra": "mean: 8.322865259741208 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 190.648154264594,
            "unit": "iter/sec",
            "range": "stddev: 0.0008273804098397516",
            "extra": "mean: 5.2452645233173065 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 99.69102943290235,
            "unit": "iter/sec",
            "range": "stddev: 0.0007873666259001082",
            "extra": "mean: 10.030992815387226 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1482424.0784892726,
            "unit": "iter/sec",
            "range": "stddev: 0.000006358538831761271",
            "extra": "mean: 674.5708023166304 nsec\nrounds: 42195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7954.8785350351845,
            "unit": "iter/sec",
            "range": "stddev: 0.00004144316796597832",
            "extra": "mean: 125.70902190344721 usec\nrounds: 2648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.986221316459949,
            "unit": "iter/sec",
            "range": "stddev: 0.0028428288985590097",
            "extra": "mean: 125.21566337498768 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 55.278015999918345,
            "unit": "iter/sec",
            "range": "stddev: 0.0011559385367374993",
            "extra": "mean: 18.0903743000016 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 170.82040199168537,
            "unit": "iter/sec",
            "range": "stddev: 0.00461446486241418",
            "extra": "mean: 5.854101666665523 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 69.91354032324583,
            "unit": "iter/sec",
            "range": "stddev: 0.001627617773175913",
            "extra": "mean: 14.303380938463306 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.897205147186785,
            "unit": "iter/sec",
            "range": "stddev: 0.0035023892661636175",
            "extra": "mean: 55.874645888896644 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 73.58041373992776,
            "unit": "iter/sec",
            "range": "stddev: 0.0012129889527727191",
            "extra": "mean: 13.590573213335421 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 69.04384575638505,
            "unit": "iter/sec",
            "range": "stddev: 0.0013196331185979986",
            "extra": "mean: 14.483550112900854 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 197.5733790617469,
            "unit": "iter/sec",
            "range": "stddev: 0.0008079898308917096",
            "extra": "mean: 5.061410624998592 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 83.34794315773304,
            "unit": "iter/sec",
            "range": "stddev: 0.0011494732762902817",
            "extra": "mean: 11.997896554058153 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1281.289216276265,
            "unit": "iter/sec",
            "range": "stddev: 0.00018772364713567357",
            "extra": "mean: 780.4639165747768 usec\nrounds: 899"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.83696190073738,
            "unit": "iter/sec",
            "range": "stddev: 0.002886247287116483",
            "extra": "mean: 84.48113700000211 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 481.9303866357051,
            "unit": "iter/sec",
            "range": "stddev: 0.00033893459065346065",
            "extra": "mean: 2.0749884791056092 msec\nrounds: 359"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1509272.4342709067,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052854911930053805",
            "extra": "mean: 662.5709032333026 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 44.12511676859499,
            "unit": "iter/sec",
            "range": "stddev: 0.0030226868137846184",
            "extra": "mean: 22.662829545455764 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1591.1618900619462,
            "unit": "iter/sec",
            "range": "stddev: 0.00022347645358794554",
            "extra": "mean: 628.4715629790936 usec\nrounds: 913"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 557.0168707937413,
            "unit": "iter/sec",
            "range": "stddev: 0.00035468509131336473",
            "extra": "mean: 1.7952777598549465 msec\nrounds: 558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 219.7649572605758,
            "unit": "iter/sec",
            "range": "stddev: 0.0007694285938473699",
            "extra": "mean: 4.550315994256981 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.289899178905163,
            "unit": "iter/sec",
            "range": "stddev: 0.002820123537011356",
            "extra": "mean: 34.14146268964315 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.2715560101581,
            "unit": "iter/sec",
            "range": "stddev: 0.0020853924733909806",
            "extra": "mean: 14.86512367647626 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 338.3068136411763,
            "unit": "iter/sec",
            "range": "stddev: 0.0008306739028487532",
            "extra": "mean: 2.955896717648276 msec\nrounds: 340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10232.568835956743,
            "unit": "iter/sec",
            "range": "stddev: 0.00005514535687287477",
            "extra": "mean: 97.72717056992074 usec\nrounds: 6021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 192.67084488769933,
            "unit": "iter/sec",
            "range": "stddev: 0.0007747236858151268",
            "extra": "mean: 5.19019886263987 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 85.83463677473405,
            "unit": "iter/sec",
            "range": "stddev: 0.0011582858528816277",
            "extra": "mean: 11.650308518511215 msec\nrounds: 81"
          }
        ]
      },
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
          "id": "cfd65a0216384173ac74228afc7a6a5928698223",
          "message": "feat(sqlite): add ops.DateSub, ops.DateAdd, ops.DateDiff\n\nA few missing ops to help clean up some of our TPC-H queries.",
          "timestamp": "2023-04-13T18:18:51-04:00",
          "tree_id": "c9930c1205e8961688fa1402ca8e46c6f12d3c62",
          "url": "https://github.com/ibis-project/ibis/commit/cfd65a0216384173ac74228afc7a6a5928698223"
        },
        "date": 1681425426172,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 187.3143607552788,
            "unit": "iter/sec",
            "range": "stddev: 0.0008336332619971804",
            "extra": "mean: 5.338618971700056 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7434.187332163952,
            "unit": "iter/sec",
            "range": "stddev: 0.000034518382358318026",
            "extra": "mean: 134.5136940084235 usec\nrounds: 1402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 591.3281656232183,
            "unit": "iter/sec",
            "range": "stddev: 0.0003201561392310217",
            "extra": "mean: 1.691108352577913 msec\nrounds: 485"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 220.332261049389,
            "unit": "iter/sec",
            "range": "stddev: 0.00042743454382653093",
            "extra": "mean: 4.538600000005642 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 76.36890530899583,
            "unit": "iter/sec",
            "range": "stddev: 0.0012329202243455926",
            "extra": "mean: 13.094334611107824 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120757.72951009596,
            "unit": "iter/sec",
            "range": "stddev: 0.000023975789306343518",
            "extra": "mean: 8.281043408624166 usec\nrounds: 29326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.69080257352892,
            "unit": "iter/sec",
            "range": "stddev: 0.0010380729838970419",
            "extra": "mean: 53.50225042857509 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5662.599661730284,
            "unit": "iter/sec",
            "range": "stddev: 0.000042052526134100015",
            "extra": "mean: 176.59733333407442 usec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1646.6896579156887,
            "unit": "iter/sec",
            "range": "stddev: 0.00016178738818000278",
            "extra": "mean: 607.2789703833803 usec\nrounds: 1148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 139.12355775814942,
            "unit": "iter/sec",
            "range": "stddev: 0.016242851900891427",
            "extra": "mean: 7.187855285719381 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4702113.6573585225,
            "unit": "iter/sec",
            "range": "stddev: 5.243787130347998e-7",
            "extra": "mean: 212.67031655744438 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 530.4206572455435,
            "unit": "iter/sec",
            "range": "stddev: 0.00022234348827083385",
            "extra": "mean: 1.8852961066655403 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.26817994871394,
            "unit": "iter/sec",
            "range": "stddev: 0.0008859117198955163",
            "extra": "mean: 11.329110904756678 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8427.977602274552,
            "unit": "iter/sec",
            "range": "stddev: 0.000057491750071808784",
            "extra": "mean: 118.65242733086036 usec\nrounds: 3110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 70.11476184070715,
            "unit": "iter/sec",
            "range": "stddev: 0.0016674001787968045",
            "extra": "mean: 14.26233183636689 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 138.05817584029114,
            "unit": "iter/sec",
            "range": "stddev: 0.003929768358785504",
            "extra": "mean: 7.2433232868209325 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.243017363277874,
            "unit": "iter/sec",
            "range": "stddev: 0.006287347407360715",
            "extra": "mean: 235.68133580001813 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 77.98670325464542,
            "unit": "iter/sec",
            "range": "stddev: 0.0011119194551981889",
            "extra": "mean: 12.822698719995362 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1618.913041419829,
            "unit": "iter/sec",
            "range": "stddev: 0.00021009384998787962",
            "extra": "mean: 617.6984028264877 usec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.869811418719,
            "unit": "iter/sec",
            "range": "stddev: 0.0019629855092365344",
            "extra": "mean: 19.658024516128272 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 179.30169178698418,
            "unit": "iter/sec",
            "range": "stddev: 0.0009324945664511522",
            "extra": "mean: 5.577192217394302 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 77.02064035063282,
            "unit": "iter/sec",
            "range": "stddev: 0.0015638894940544826",
            "extra": "mean: 12.983532666666331 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 88.6815381850912,
            "unit": "iter/sec",
            "range": "stddev: 0.0005640911033040517",
            "extra": "mean: 11.276304183096771 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.858959886716459,
            "unit": "iter/sec",
            "range": "stddev: 0.0042026945217467394",
            "extra": "mean: 84.32442723076642 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1519.288529949578,
            "unit": "iter/sec",
            "range": "stddev: 0.0003281186021162526",
            "extra": "mean: 658.2028234183983 usec\nrounds: 1059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 182.40484452587575,
            "unit": "iter/sec",
            "range": "stddev: 0.0042692998179238535",
            "extra": "mean: 5.482310530727933 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 72.33362270434078,
            "unit": "iter/sec",
            "range": "stddev: 0.001486412336702867",
            "extra": "mean: 13.824829486108255 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 74.27169339631455,
            "unit": "iter/sec",
            "range": "stddev: 0.0015057960883919682",
            "extra": "mean: 13.464079708860137 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1547799.3579069627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014202927442677337",
            "extra": "mean: 646.0785727113018 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10547.752988712742,
            "unit": "iter/sec",
            "range": "stddev: 0.00006893024458645559",
            "extra": "mean: 94.80692248577589 usec\nrounds: 4296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5415985249201909,
            "unit": "iter/sec",
            "range": "stddev: 0.03263162225530077",
            "extra": "mean: 1.8463861218000148 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 643029.9291439662,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023660266406931368",
            "extra": "mean: 1.5551375677509294 usec\nrounds: 20877"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1457366.3960229887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028916681249398358",
            "extra": "mean: 686.1692452418986 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5378099.733931822,
            "unit": "iter/sec",
            "range": "stddev: 1.4958177521720514e-7",
            "extra": "mean: 185.93928143255832 nsec\nrounds: 51547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 67.53299706129404,
            "unit": "iter/sec",
            "range": "stddev: 0.0005930342160269794",
            "extra": "mean: 14.807576200007588 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.15955578816812,
            "unit": "iter/sec",
            "range": "stddev: 0.0015226067352366163",
            "extra": "mean: 14.459317857143914 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 71.1440995781964,
            "unit": "iter/sec",
            "range": "stddev: 0.0014775644947882572",
            "extra": "mean: 14.055979426668728 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.49627418542417007,
            "unit": "iter/sec",
            "range": "stddev: 0.09838594940818242",
            "extra": "mean: 2.015015145599989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.96722257517149,
            "unit": "iter/sec",
            "range": "stddev: 0.0019992462691045244",
            "extra": "mean: 23.828119628569766 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.901231845947501,
            "unit": "iter/sec",
            "range": "stddev: 0.005595985802736704",
            "extra": "mean: 525.9747790000006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1673.0967504003047,
            "unit": "iter/sec",
            "range": "stddev: 0.00016296136116119306",
            "extra": "mean: 597.694066264094 usec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.953182345650962,
            "unit": "iter/sec",
            "range": "stddev: 0.00161035672866404",
            "extra": "mean: 31.295787354842503 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 74.10248175486338,
            "unit": "iter/sec",
            "range": "stddev: 0.001349053910507201",
            "extra": "mean: 13.49482468492858 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 76.90421749476994,
            "unit": "iter/sec",
            "range": "stddev: 0.0017034432413508853",
            "extra": "mean: 13.003188025000156 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8996790.093712235,
            "unit": "iter/sec",
            "range": "stddev: 1.5232093086972654e-7",
            "extra": "mean: 111.15075372258808 nsec\nrounds: 39683"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 54.5308597545077,
            "unit": "iter/sec",
            "range": "stddev: 0.0016030235923413026",
            "extra": "mean: 18.33824011764892 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 162.5043083953685,
            "unit": "iter/sec",
            "range": "stddev: 0.016557837834000902",
            "extra": "mean: 6.153683000004084 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3347.545926960627,
            "unit": "iter/sec",
            "range": "stddev: 0.00009822144112275754",
            "extra": "mean: 298.7262973589553 usec\nrounds: 871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 187.8409618286617,
            "unit": "iter/sec",
            "range": "stddev: 0.000712867167917753",
            "extra": "mean: 5.323652467836837 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1368.4459103708657,
            "unit": "iter/sec",
            "range": "stddev: 0.00019871143638615474",
            "extra": "mean: 730.7559563892354 usec\nrounds: 1307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 87.84045722220473,
            "unit": "iter/sec",
            "range": "stddev: 0.0008358789533734373",
            "extra": "mean: 11.38427589772626 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 71.61239332548378,
            "unit": "iter/sec",
            "range": "stddev: 0.0016126223459964786",
            "extra": "mean: 13.96406339130329 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 29.95814943311439,
            "unit": "iter/sec",
            "range": "stddev: 0.0027082935382169394",
            "extra": "mean: 33.37989892308384 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 394.7759218969625,
            "unit": "iter/sec",
            "range": "stddev: 0.0004042836442552358",
            "extra": "mean: 2.53308255274242 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09679838253241953,
            "unit": "iter/sec",
            "range": "stddev: 0.1782601851757691",
            "extra": "mean: 10.330751132799993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.567262829321037,
            "unit": "iter/sec",
            "range": "stddev: 0.03126305196406416",
            "extra": "mean: 1.762851271599993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 63.02437438021371,
            "unit": "iter/sec",
            "range": "stddev: 0.0015934630941531322",
            "extra": "mean: 15.866877058821654 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 74.5182484800868,
            "unit": "iter/sec",
            "range": "stddev: 0.0013546399366083245",
            "extra": "mean: 13.419531730770965 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1498.5614640719496,
            "unit": "iter/sec",
            "range": "stddev: 0.00025201816429494696",
            "extra": "mean: 667.3066297079073 usec\nrounds: 956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1540.0378532589493,
            "unit": "iter/sec",
            "range": "stddev: 0.00016446240394771337",
            "extra": "mean: 649.3346886791459 usec\nrounds: 1272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.036889251421684,
            "unit": "iter/sec",
            "range": "stddev: 0.002037941380255427",
            "extra": "mean: 31.214016821424803 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 371244.8848131363,
            "unit": "iter/sec",
            "range": "stddev: 0.00000856720210793005",
            "extra": "mean: 2.6936398073291796 usec\nrounds: 1663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 89.45911875179871,
            "unit": "iter/sec",
            "range": "stddev: 0.0009381097636312034",
            "extra": "mean: 11.17829030682122 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 99.74011187217073,
            "unit": "iter/sec",
            "range": "stddev: 0.0007084442667759044",
            "extra": "mean: 10.026056530612513 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 59.61294785747006,
            "unit": "iter/sec",
            "range": "stddev: 0.0004951698996084186",
            "extra": "mean: 16.7748792156852 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1372910.9799238,
            "unit": "iter/sec",
            "range": "stddev: 0.000002230830960675879",
            "extra": "mean: 728.3793447813364 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 116.03165138454828,
            "unit": "iter/sec",
            "range": "stddev: 0.0003531010441942381",
            "extra": "mean: 8.618338083337562 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 26.429162594907964,
            "unit": "iter/sec",
            "range": "stddev: 0.044351687517493944",
            "extra": "mean: 37.83699148275956 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 200.14976763674264,
            "unit": "iter/sec",
            "range": "stddev: 0.0007157466425565719",
            "extra": "mean: 4.996258610776545 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4305399.296736334,
            "unit": "iter/sec",
            "range": "stddev: 7.459422674325491e-7",
            "extra": "mean: 232.26649401830727 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2231926951246896,
            "unit": "iter/sec",
            "range": "stddev: 0.0054115168005400855",
            "extra": "mean: 817.5326782000297 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 925.2882459493452,
            "unit": "iter/sec",
            "range": "stddev: 0.0001465263460349848",
            "extra": "mean: 1.0807443025216437 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60873.57194254887,
            "unit": "iter/sec",
            "range": "stddev: 0.000015176871552705659",
            "extra": "mean: 16.42749009280707 usec\nrounds: 11002"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1620.8972170661993,
            "unit": "iter/sec",
            "range": "stddev: 0.00016533912949689983",
            "extra": "mean: 616.9422647353209 usec\nrounds: 1001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 199.3798800039218,
            "unit": "iter/sec",
            "range": "stddev: 0.0006465045514583867",
            "extra": "mean: 5.0155512180082065 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 69.40001864533767,
            "unit": "iter/sec",
            "range": "stddev: 0.0023960737820638315",
            "extra": "mean: 14.4092180307675 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.009885849173848,
            "unit": "iter/sec",
            "range": "stddev: 0.007532884426413366",
            "extra": "mean: 124.84572425000806 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 128.46400588934844,
            "unit": "iter/sec",
            "range": "stddev: 0.0006140322755399021",
            "extra": "mean: 7.784281620965041 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5346600781451919,
            "unit": "iter/sec",
            "range": "stddev: 0.010443182730025558",
            "extra": "mean: 1.8703472372000078 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 77.45896852123761,
            "unit": "iter/sec",
            "range": "stddev: 0.001355017171145743",
            "extra": "mean: 12.910060888892694 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 142.52124619285502,
            "unit": "iter/sec",
            "range": "stddev: 0.0006962468277713733",
            "extra": "mean: 7.016497727271015 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1614.3591240937774,
            "unit": "iter/sec",
            "range": "stddev: 0.00019463887279798104",
            "extra": "mean: 619.4408574122882 usec\nrounds: 1059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.43427016074405,
            "unit": "iter/sec",
            "range": "stddev: 0.0014756650219947712",
            "extra": "mean: 13.4346719305564 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 70.65782577107707,
            "unit": "iter/sec",
            "range": "stddev: 0.001211281449921169",
            "extra": "mean: 14.152714000001652 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 203.8381999227891,
            "unit": "iter/sec",
            "range": "stddev: 0.00058763994440254",
            "extra": "mean: 4.905851800000123 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 124.24606236457464,
            "unit": "iter/sec",
            "range": "stddev: 0.0007019472857427777",
            "extra": "mean: 8.048544806721559 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1592078.943861172,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018754727039599065",
            "extra": "mean: 628.109556913529 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 194.53295252149152,
            "unit": "iter/sec",
            "range": "stddev: 0.0007607884011379579",
            "extra": "mean: 5.140517259611954 msec\nrounds: 104"
          }
        ]
      }
    ]
  }
}