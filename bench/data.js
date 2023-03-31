window.BENCHMARK_DATA = {
  "lastUpdate": 1680277766545,
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
          "id": "a20d15a8d0daf76d3bfc33ff51804a64e79aa83f",
          "message": "fix(duckdb): workaround upstream bug when scanning numpy.str_ objects",
          "timestamp": "2023-03-31T11:44:32-04:00",
          "tree_id": "469f2f309b79059487f48419de22f4cb65d671ab",
          "url": "https://github.com/ibis-project/ibis/commit/a20d15a8d0daf76d3bfc33ff51804a64e79aa83f"
        },
        "date": 1680277689040,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72983.33544920171,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018724860531249157",
            "extra": "mean: 13.701757995097744 usec\nrounds: 8599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 108.08517365583953,
            "unit": "iter/sec",
            "range": "stddev: 0.007804906411751331",
            "extra": "mean: 9.25196274545628 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 109.10563447564832,
            "unit": "iter/sec",
            "range": "stddev: 0.0005003755180724515",
            "extra": "mean: 9.165429492307235 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 112.87121237389646,
            "unit": "iter/sec",
            "range": "stddev: 0.006965802965962427",
            "extra": "mean: 8.85965499056931 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.139449981994055,
            "unit": "iter/sec",
            "range": "stddev: 0.00022259613452518803",
            "extra": "mean: 16.62802038095465 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8504832282665172,
            "unit": "iter/sec",
            "range": "stddev: 0.0021962053863010334",
            "extra": "mean: 1.175802140200028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17408750155306613,
            "unit": "iter/sec",
            "range": "stddev: 0.07969194941640802",
            "extra": "mean: 5.744237760200008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.19438784900024,
            "unit": "iter/sec",
            "range": "stddev: 0.0005701029309562902",
            "extra": "mean: 10.183881400001837 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.308376670331956,
            "unit": "iter/sec",
            "range": "stddev: 0.0006011260312126775",
            "extra": "mean: 36.61880059997884 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.58304858272908,
            "unit": "iter/sec",
            "range": "stddev: 0.00007288921112884334",
            "extra": "mean: 64.17229559999669 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12734.216228053141,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016316117382769425",
            "extra": "mean: 78.52858645489516 usec\nrounds: 1255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5296.369484378438,
            "unit": "iter/sec",
            "range": "stddev: 0.00004839343042244108",
            "extra": "mean: 188.80857971663136 usec\nrounds: 2396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11205532.652987836,
            "unit": "iter/sec",
            "range": "stddev: 5.606372402652031e-9",
            "extra": "mean: 89.24163009190119 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146131.0451925672,
            "unit": "iter/sec",
            "range": "stddev: 2.7008615836697183e-7",
            "extra": "mean: 6.843172843130146 usec\nrounds: 31948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5584.751042926454,
            "unit": "iter/sec",
            "range": "stddev: 0.000024766720220375417",
            "extra": "mean: 179.05901128154713 usec\nrounds: 1507"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5275.493981950559,
            "unit": "iter/sec",
            "range": "stddev: 0.00004832533916917976",
            "extra": "mean: 189.55570860688582 usec\nrounds: 2440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 256.3130540614201,
            "unit": "iter/sec",
            "range": "stddev: 0.005800967215721323",
            "extra": "mean: 3.9014790084018545 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1169.5733365288252,
            "unit": "iter/sec",
            "range": "stddev: 0.000018464524115852835",
            "extra": "mean: 855.0126518512284 usec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 677.3408165819926,
            "unit": "iter/sec",
            "range": "stddev: 0.00005165959059163279",
            "extra": "mean: 1.4763616417599268 msec\nrounds: 522"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 235.7525226083578,
            "unit": "iter/sec",
            "range": "stddev: 0.003896110278854886",
            "extra": "mean: 4.241736160173534 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 300.60042352828964,
            "unit": "iter/sec",
            "range": "stddev: 0.00019798579770902177",
            "extra": "mean: 3.3266752862904387 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.883803049347828,
            "unit": "iter/sec",
            "range": "stddev: 0.003722434490083654",
            "extra": "mean: 1.1314738060000082 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6142740.444330506,
            "unit": "iter/sec",
            "range": "stddev: 8.993542420254944e-9",
            "extra": "mean: 162.7937903383588 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.90639488662555,
            "unit": "iter/sec",
            "range": "stddev: 0.0001576194204653433",
            "extra": "mean: 7.199092603448482 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7931656240802263,
            "unit": "iter/sec",
            "range": "stddev: 0.0013958949795663596",
            "extra": "mean: 557.6729704000059 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.47965738364877,
            "unit": "iter/sec",
            "range": "stddev: 0.00020801895581126464",
            "extra": "mean: 3.284291662020578 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 311.06929530876914,
            "unit": "iter/sec",
            "range": "stddev: 0.00021710402124719611",
            "extra": "mean: 3.214717797870067 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6667601496400929,
            "unit": "iter/sec",
            "range": "stddev: 0.05731486248416851",
            "extra": "mean: 1.4997896928000045 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.40259196346688,
            "unit": "iter/sec",
            "range": "stddev: 0.0000796198619584133",
            "extra": "mean: 9.57830625843011 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 292.7034831805604,
            "unit": "iter/sec",
            "range": "stddev: 0.000017722825032800024",
            "extra": "mean: 3.4164267166685156 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.53515870622701,
            "unit": "iter/sec",
            "range": "stddev: 0.00005972495568780811",
            "extra": "mean: 10.252713106378083 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 770293.3535733946,
            "unit": "iter/sec",
            "range": "stddev: 1.1223192157727405e-7",
            "extra": "mean: 1.298206709639899 usec\nrounds: 26738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.61307300698893,
            "unit": "iter/sec",
            "range": "stddev: 0.00018525006376963712",
            "extra": "mean: 14.574482036362662 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1755.2682559461343,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051293294906965976",
            "extra": "mean: 569.713487731808 usec\nrounds: 1345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.70431905513108,
            "unit": "iter/sec",
            "range": "stddev: 0.01745883809037599",
            "extra": "mean: 25.18617681394961 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5299.388168407295,
            "unit": "iter/sec",
            "range": "stddev: 0.00007828161226956975",
            "extra": "mean: 188.70102891529555 usec\nrounds: 415"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 109.62863411886006,
            "unit": "iter/sec",
            "range": "stddev: 0.0004889640284586878",
            "extra": "mean: 9.12170445283295 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.30811527708,
            "unit": "iter/sec",
            "range": "stddev: 0.00009739222986117647",
            "extra": "mean: 3.4210476813211157 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5578.099340006541,
            "unit": "iter/sec",
            "range": "stddev: 0.00004712213186523936",
            "extra": "mean: 179.27253335700317 usec\nrounds: 2833"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.57480498910499,
            "unit": "iter/sec",
            "range": "stddev: 0.0005762837912469262",
            "extra": "mean: 10.686637285714152 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.39919538499531,
            "unit": "iter/sec",
            "range": "stddev: 0.00010303004643351821",
            "extra": "mean: 13.262741000005462 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.49426479491615,
            "unit": "iter/sec",
            "range": "stddev: 0.00016635371492616801",
            "extra": "mean: 3.305847800711118 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8988518266132377,
            "unit": "iter/sec",
            "range": "stddev: 0.004230477152484618",
            "extra": "mean: 1.1125304197999752 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.80046287172593,
            "unit": "iter/sec",
            "range": "stddev: 0.00005097833591979835",
            "extra": "mean: 15.197461482139422 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 531.4149157619714,
            "unit": "iter/sec",
            "range": "stddev: 0.0000621014641788899",
            "extra": "mean: 1.8817687843145048 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8343.112491196274,
            "unit": "iter/sec",
            "range": "stddev: 0.000013303079751110642",
            "extra": "mean: 119.85934518505042 usec\nrounds: 2025"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.81565697274284,
            "unit": "iter/sec",
            "range": "stddev: 0.00011260321560955243",
            "extra": "mean: 10.328907857140676 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5633.043057324601,
            "unit": "iter/sec",
            "range": "stddev: 0.00004847780715934886",
            "extra": "mean: 177.52394040370558 usec\nrounds: 2282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.84502589568271,
            "unit": "iter/sec",
            "range": "stddev: 0.01177152530257433",
            "extra": "mean: 11.007757333332696 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 333.64059460494354,
            "unit": "iter/sec",
            "range": "stddev: 0.00007302692608650075",
            "extra": "mean: 2.997237195264197 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.518792758958396,
            "unit": "iter/sec",
            "range": "stddev: 0.0004339941282349927",
            "extra": "mean: 95.0679439090901 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.18142277298881,
            "unit": "iter/sec",
            "range": "stddev: 0.0005865104407655389",
            "extra": "mean: 8.757992112150873 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5272.1817310051265,
            "unit": "iter/sec",
            "range": "stddev: 0.000052667836001459874",
            "extra": "mean: 189.67479708051582 usec\nrounds: 2809"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.5895713008176,
            "unit": "iter/sec",
            "range": "stddev: 0.0005854240705245738",
            "extra": "mean: 9.653481402061825 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5570.475193989105,
            "unit": "iter/sec",
            "range": "stddev: 0.00005457626618453212",
            "extra": "mean: 179.5178984153925 usec\nrounds: 3219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.230127586955945,
            "unit": "iter/sec",
            "range": "stddev: 0.00011458402183372516",
            "extra": "mean: 20.312764744184022 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13669.050253215786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013231898872076378",
            "extra": "mean: 73.15797231521184 usec\nrounds: 6935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.81113111671253,
            "unit": "iter/sec",
            "range": "stddev: 0.0005619065423957494",
            "extra": "mean: 8.209430376620151 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.37505658341686,
            "unit": "iter/sec",
            "range": "stddev: 0.000620481320028153",
            "extra": "mean: 8.238925098360179 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 171.7701122975004,
            "unit": "iter/sec",
            "range": "stddev: 0.0038640274113781203",
            "extra": "mean: 5.821734565021601 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.4813563467259,
            "unit": "iter/sec",
            "range": "stddev: 0.00004934496153303785",
            "extra": "mean: 6.116905452381435 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.47502271313194,
            "unit": "iter/sec",
            "range": "stddev: 0.0007141551901188719",
            "extra": "mean: 22.484530394736243 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5418219.755465196,
            "unit": "iter/sec",
            "range": "stddev: 8.611141174344135e-9",
            "extra": "mean: 184.56246611101 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.19526312641678,
            "unit": "iter/sec",
            "range": "stddev: 0.015312519789775469",
            "extra": "mean: 10.8465442376233 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1859731.24378738,
            "unit": "iter/sec",
            "range": "stddev: 7.99839179386547e-8",
            "extra": "mean: 537.7121040153522 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2716227.103804945,
            "unit": "iter/sec",
            "range": "stddev: 1.554829653552321e-8",
            "extra": "mean: 368.1577282691388 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.38200257116803,
            "unit": "iter/sec",
            "range": "stddev: 0.0005947523496281157",
            "extra": "mean: 8.23845363247888 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2707124.6114450027,
            "unit": "iter/sec",
            "range": "stddev: 1.7540276607624972e-7",
            "extra": "mean: 369.3956295074457 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12044.89599215683,
            "unit": "iter/sec",
            "range": "stddev: 0.00001142802813537646",
            "extra": "mean: 83.02271772634327 usec\nrounds: 4152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.40845995007476,
            "unit": "iter/sec",
            "range": "stddev: 0.000046585259836547205",
            "extra": "mean: 8.975979027518449 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.95420127629416,
            "unit": "iter/sec",
            "range": "stddev: 0.000057452959343071005",
            "extra": "mean: 6.09926425925987 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.618250912810493,
            "unit": "iter/sec",
            "range": "stddev: 0.00031032492772332135",
            "extra": "mean: 177.9913385000024 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.62972651037528,
            "unit": "iter/sec",
            "range": "stddev: 0.0016130178199082175",
            "extra": "mean: 9.649740799999904 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2720976.748159375,
            "unit": "iter/sec",
            "range": "stddev: 1.3599776662966157e-8",
            "extra": "mean: 367.51508467538406 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.3287365061263,
            "unit": "iter/sec",
            "range": "stddev: 0.00018272937020279276",
            "extra": "mean: 3.2223893000004487 msec\nrounds: 300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 492383.5801949931,
            "unit": "iter/sec",
            "range": "stddev: 1.2013538914100512e-7",
            "extra": "mean: 2.030936936613486 usec\nrounds: 2109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.5724187773807,
            "unit": "iter/sec",
            "range": "stddev: 0.00007523190385327417",
            "extra": "mean: 8.433664509092088 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6618204.0587995015,
            "unit": "iter/sec",
            "range": "stddev: 6.605589093898488e-9",
            "extra": "mean: 151.09839332779723 nsec\nrounds: 62894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 746.1593168968003,
            "unit": "iter/sec",
            "range": "stddev: 0.000036572275565922086",
            "extra": "mean: 1.3401963593497657 msec\nrounds: 615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.63779464476208,
            "unit": "iter/sec",
            "range": "stddev: 0.0005996071606452172",
            "extra": "mean: 8.723126636366178 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5582.483930149862,
            "unit": "iter/sec",
            "range": "stddev: 0.00006155030016799557",
            "extra": "mean: 179.1317292646743 usec\nrounds: 3605"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.9942428626731,
            "unit": "iter/sec",
            "range": "stddev: 0.00003824149857788139",
            "extra": "mean: 5.181501713041045 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 309.0731410359443,
            "unit": "iter/sec",
            "range": "stddev: 0.00019896244192090537",
            "extra": "mean: 3.235480108844861 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.03904594073302,
            "unit": "iter/sec",
            "range": "stddev: 0.0005748234697897244",
            "extra": "mean: 8.3306226916676 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 310.9300516957991,
            "unit": "iter/sec",
            "range": "stddev: 0.00022501808329725362",
            "extra": "mean: 3.216157442955556 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.92460901416868,
            "unit": "iter/sec",
            "range": "stddev: 0.00016566170338336127",
            "extra": "mean: 6.252946348684861 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5446644957882922,
            "unit": "iter/sec",
            "range": "stddev: 0.0015915011330430897",
            "extra": "mean: 392.9791143999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.68008185636744,
            "unit": "iter/sec",
            "range": "stddev: 0.00039767284887160583",
            "extra": "mean: 21.422413162790846 msec\nrounds: 43"
          }
        ]
      }
    ]
  }
}