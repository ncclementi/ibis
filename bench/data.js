window.BENCHMARK_DATA = {
  "lastUpdate": 1681274756848,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "3c1eb82ae0e0f1a3c4b34bb6f9b57ed0ac5a6f76",
          "message": "chore(deps): regenerate conda-lock files",
          "timestamp": "2023-04-12T00:40:57-04:00",
          "tree_id": "62f91ca6237454303357c06ef3109ed88b012247",
          "url": "https://github.com/ibis-project/ibis/commit/3c1eb82ae0e0f1a3c4b34bb6f9b57ed0ac5a6f76"
        },
        "date": 1681274678643,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.0046895538645,
            "unit": "iter/sec",
            "range": "stddev: 0.000018962845383444897",
            "extra": "mean: 5.025007210844297 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.16424602563791,
            "unit": "iter/sec",
            "range": "stddev: 0.00012874832834765886",
            "extra": "mean: 9.788160133331303 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 101.69460365894108,
            "unit": "iter/sec",
            "range": "stddev: 0.0005769790832239009",
            "extra": "mean: 9.83336346295971 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2708210.312825983,
            "unit": "iter/sec",
            "range": "stddev: 1.3719179172154058e-8",
            "extra": "mean: 369.2475415458404 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.489749195677,
            "unit": "iter/sec",
            "range": "stddev: 0.0000902773748622506",
            "extra": "mean: 6.079406193333057 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4564.021301444359,
            "unit": "iter/sec",
            "range": "stddev: 0.000028826417456470323",
            "extra": "mean: 219.10502470344161 usec\nrounds: 1012"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2156.662270686307,
            "unit": "iter/sec",
            "range": "stddev: 0.00007977689657344139",
            "extra": "mean: 463.6794613566331 usec\nrounds: 1268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5686075.50987383,
            "unit": "iter/sec",
            "range": "stddev: 4.821199516566975e-9",
            "extra": "mean: 175.8682237448581 nsec\nrounds: 56180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2006224.053673783,
            "unit": "iter/sec",
            "range": "stddev: 7.594057304888155e-8",
            "extra": "mean: 498.44881391428197 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1992132.553597302,
            "unit": "iter/sec",
            "range": "stddev: 1.0957857797991061e-7",
            "extra": "mean: 501.9746292455518 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6574930212590697,
            "unit": "iter/sec",
            "range": "stddev: 0.0019035980286435932",
            "extra": "mean: 603.3207905999973 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139925.51482024812,
            "unit": "iter/sec",
            "range": "stddev: 3.2047058967803344e-7",
            "extra": "mean: 7.146659430087682 usec\nrounds: 38462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.25437778930544,
            "unit": "iter/sec",
            "range": "stddev: 0.0005822341521363882",
            "extra": "mean: 10.177663555555542 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 102.76798820959304,
            "unit": "iter/sec",
            "range": "stddev: 0.00009245684343285238",
            "extra": "mean: 9.730656573334121 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 99.94562315595,
            "unit": "iter/sec",
            "range": "stddev: 0.0006544129842395935",
            "extra": "mean: 10.00544064285488 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2054.2211445382654,
            "unit": "iter/sec",
            "range": "stddev: 0.00017511795069118663",
            "extra": "mean: 486.8025054940098 usec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1176.113127050458,
            "unit": "iter/sec",
            "range": "stddev: 0.00001201760795944134",
            "extra": "mean: 850.2583442018649 usec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11780111.482574385,
            "unit": "iter/sec",
            "range": "stddev: 3.1435047438049313e-9",
            "extra": "mean: 84.88884009957488 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.515556175902326,
            "unit": "iter/sec",
            "range": "stddev: 0.00009991104689068571",
            "extra": "mean: 64.45144399999853 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.616368838449567,
            "unit": "iter/sec",
            "range": "stddev: 0.00034581310063832725",
            "extra": "mean: 94.19416518181575 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17194028369091147,
            "unit": "iter/sec",
            "range": "stddev: 0.09358091101594743",
            "extra": "mean: 5.815972723400006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2231.960129587059,
            "unit": "iter/sec",
            "range": "stddev: 0.0000803202251501288",
            "extra": "mean: 448.03667715382204 usec\nrounds: 1335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 757.2343103932419,
            "unit": "iter/sec",
            "range": "stddev: 0.00002343293779568245",
            "extra": "mean: 1.320595205836205 msec\nrounds: 617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1783.1809618669859,
            "unit": "iter/sec",
            "range": "stddev: 0.000013499387053740733",
            "extra": "mean: 560.7955790157173 usec\nrounds: 1525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2234.462053629047,
            "unit": "iter/sec",
            "range": "stddev: 0.00007876151112863722",
            "extra": "mean: 447.53501111190246 usec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 516302.17763920134,
            "unit": "iter/sec",
            "range": "stddev: 5.300830732219746e-7",
            "extra": "mean: 1.936850246443882 usec\nrounds: 1222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.560176954187812,
            "unit": "iter/sec",
            "range": "stddev: 0.0010552671358998254",
            "extra": "mean: 390.59800080000286 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7932.500668988458,
            "unit": "iter/sec",
            "range": "stddev: 0.000016826579604641905",
            "extra": "mean: 126.06365151779039 usec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 86.46332444355484,
            "unit": "iter/sec",
            "range": "stddev: 0.011400136062206821",
            "extra": "mean: 11.565597395608146 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 98.47210160833734,
            "unit": "iter/sec",
            "range": "stddev: 0.0006388394950681299",
            "extra": "mean: 10.155160534477035 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6178031.861501572,
            "unit": "iter/sec",
            "range": "stddev: 7.1303952377078035e-9",
            "extra": "mean: 161.86384635376882 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.687361223693549,
            "unit": "iter/sec",
            "range": "stddev: 0.003543722407864653",
            "extra": "mean: 1.454839123199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14128.057550905336,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012720381438963314",
            "extra": "mean: 70.78113862410756 usec\nrounds: 6817"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.2224735528282,
            "unit": "iter/sec",
            "range": "stddev: 0.0003455810466472584",
            "extra": "mean: 20.737219108109212 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2162.8211208695584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000824013119864945",
            "extra": "mean: 462.3590875596553 usec\nrounds: 1302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 279.8083956669345,
            "unit": "iter/sec",
            "range": "stddev: 0.000262373538055688",
            "extra": "mean: 3.57387417777962 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.61984126188891,
            "unit": "iter/sec",
            "range": "stddev: 0.012083921816903195",
            "extra": "mean: 10.45808052808982 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73184.2122597187,
            "unit": "iter/sec",
            "range": "stddev: 6.964527939700654e-7",
            "extra": "mean: 13.664149262837796 usec\nrounds: 13158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.49122370228864,
            "unit": "iter/sec",
            "range": "stddev: 0.0007769154334831215",
            "extra": "mean: 9.853068704081945 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.57419561408459,
            "unit": "iter/sec",
            "range": "stddev: 0.0000630984713339548",
            "extra": "mean: 10.35473289361944 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7073840.187677636,
            "unit": "iter/sec",
            "range": "stddev: 5.384346402222074e-9",
            "extra": "mean: 141.3659304519916 nsec\nrounds: 68961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.1084750975667,
            "unit": "iter/sec",
            "range": "stddev: 0.015063846461250618",
            "extra": "mean: 11.889408277108695 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 299.0992539245279,
            "unit": "iter/sec",
            "range": "stddev: 0.000021980198318502872",
            "extra": "mean: 3.3433717633155022 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2194.051284303117,
            "unit": "iter/sec",
            "range": "stddev: 0.00008013503081806025",
            "extra": "mean: 455.7778604147914 usec\nrounds: 1397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2148.0961960277045,
            "unit": "iter/sec",
            "range": "stddev: 0.00007886707505012099",
            "extra": "mean: 465.5285000034993 usec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.851759373927756,
            "unit": "iter/sec",
            "range": "stddev: 0.023278333250169102",
            "extra": "mean: 26.418851238095915 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.75093502325369,
            "unit": "iter/sec",
            "range": "stddev: 0.0006717155663665153",
            "extra": "mean: 9.827919515152018 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.9647892829188,
            "unit": "iter/sec",
            "range": "stddev: 0.0001278559438695406",
            "extra": "mean: 6.098870400001033 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.98512953693315,
            "unit": "iter/sec",
            "range": "stddev: 0.00011223575791930548",
            "extra": "mean: 18.523619533335832 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.012337810839,
            "unit": "iter/sec",
            "range": "stddev: 0.00004031471628302994",
            "extra": "mean: 3.412825574073858 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8788758836023088,
            "unit": "iter/sec",
            "range": "stddev: 0.009928234329692354",
            "extra": "mean: 1.1378170895999915 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.604622041226917,
            "unit": "iter/sec",
            "range": "stddev: 0.0004138550115694501",
            "extra": "mean: 178.42416359999334 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.90015523539736,
            "unit": "iter/sec",
            "range": "stddev: 0.00006366931320762179",
            "extra": "mean: 8.340272771429875 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 254.11100933986475,
            "unit": "iter/sec",
            "range": "stddev: 0.00038003474193232294",
            "extra": "mean: 3.93528797747812 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.61315301640103,
            "unit": "iter/sec",
            "range": "stddev: 0.0011705173526965196",
            "extra": "mean: 10.45881208235508 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 280.0449486969767,
            "unit": "iter/sec",
            "range": "stddev: 0.0002445097851132925",
            "extra": "mean: 3.570855338233765 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8776275894892949,
            "unit": "iter/sec",
            "range": "stddev: 0.006861940067468495",
            "extra": "mean: 1.1394354644000146 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 231.67459300169497,
            "unit": "iter/sec",
            "range": "stddev: 0.0034308800207974105",
            "extra": "mean: 4.3163990796033636 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 165.6915909843916,
            "unit": "iter/sec",
            "range": "stddev: 0.00354570930659944",
            "extra": "mean: 6.035309300000635 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 81.50856291957562,
            "unit": "iter/sec",
            "range": "stddev: 0.023661179948944493",
            "extra": "mean: 12.26864962625704 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.6283092664662,
            "unit": "iter/sec",
            "range": "stddev: 0.0001395078426571598",
            "extra": "mean: 6.187034960264073 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.0423699983736,
            "unit": "iter/sec",
            "range": "stddev: 0.0003552390682029781",
            "extra": "mean: 3.7447241050402993 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12522.398097498626,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030506899863057316",
            "extra": "mean: 79.85690857406554 usec\nrounds: 5622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.1864627088613,
            "unit": "iter/sec",
            "range": "stddev: 0.0006390334612106624",
            "extra": "mean: 11.212463972972918 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.274102030847,
            "unit": "iter/sec",
            "range": "stddev: 0.00001737906516400104",
            "extra": "mean: 1.465686586994017 msec\nrounds: 569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 793128.4894814603,
            "unit": "iter/sec",
            "range": "stddev: 1.891932360857382e-7",
            "extra": "mean: 1.260829756164465 usec\nrounds: 25252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.97161342967617,
            "unit": "iter/sec",
            "range": "stddev: 0.00019748398639233194",
            "extra": "mean: 15.158034615387587 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 232.3395707428072,
            "unit": "iter/sec",
            "range": "stddev: 0.01116999646654099",
            "extra": "mean: 4.304045138772204 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12187.816236056211,
            "unit": "iter/sec",
            "range": "stddev: 0.000013950010017558994",
            "extra": "mean: 82.04915307482389 usec\nrounds: 5886"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7940123310334162,
            "unit": "iter/sec",
            "range": "stddev: 0.0037146390350997777",
            "extra": "mean: 1.2594262845999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2167.727372043522,
            "unit": "iter/sec",
            "range": "stddev: 0.00008380285910673961",
            "extra": "mean: 461.3126230247753 usec\nrounds: 1329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.16522956371668,
            "unit": "iter/sec",
            "range": "stddev: 0.0006660825610573018",
            "extra": "mean: 10.291747413041865 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 286.53928230410264,
            "unit": "iter/sec",
            "range": "stddev: 0.00022565845337707633",
            "extra": "mean: 3.489922889311578 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.02321813112795,
            "unit": "iter/sec",
            "range": "stddev: 0.0007661109026225834",
            "extra": "mean: 10.41414794736846 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1796432.300130457,
            "unit": "iter/sec",
            "range": "stddev: 1.0104407128372272e-7",
            "extra": "mean: 556.6588843494854 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.553090523222345,
            "unit": "iter/sec",
            "range": "stddev: 0.0007700354629447065",
            "extra": "mean: 22.960483124998987 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 82.9500856687709,
            "unit": "iter/sec",
            "range": "stddev: 0.02054779221618948",
            "extra": "mean: 12.0554426428577 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.74899253380079,
            "unit": "iter/sec",
            "range": "stddev: 0.00005271172675311364",
            "extra": "mean: 8.948626536364785 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.42354875837864,
            "unit": "iter/sec",
            "range": "stddev: 0.0006803526439874989",
            "extra": "mean: 9.859643172043805 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 257.45209502392856,
            "unit": "iter/sec",
            "range": "stddev: 0.00034455129578998757",
            "extra": "mean: 3.884217760617004 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.03578704110494,
            "unit": "iter/sec",
            "range": "stddev: 0.00038533892736941795",
            "extra": "mean: 16.938878096157648 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.92031930292052,
            "unit": "iter/sec",
            "range": "stddev: 0.0003687870123038373",
            "extra": "mean: 13.528080092593578 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.14781842507912,
            "unit": "iter/sec",
            "range": "stddev: 0.0007306747157791447",
            "extra": "mean: 9.886520693876426 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 532.643973447633,
            "unit": "iter/sec",
            "range": "stddev: 0.00012617378255731275",
            "extra": "mean: 1.8774266674366404 msec\nrounds: 433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.8887677530865,
            "unit": "iter/sec",
            "range": "stddev: 0.0002183135186248158",
            "extra": "mean: 3.5728479139333826 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.217720861421945,
            "unit": "iter/sec",
            "range": "stddev: 0.0009008521083665179",
            "extra": "mean: 23.13865655263289 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.75503105480396,
            "unit": "iter/sec",
            "range": "stddev: 0.00009907672744502707",
            "extra": "mean: 7.259263000000076 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.666112977672455,
            "unit": "iter/sec",
            "range": "stddev: 0.001058428310161021",
            "extra": "mean: 38.961879458331815 msec\nrounds: 24"
          }
        ]
      }
    ]
  }
}