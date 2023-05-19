window.BENCHMARK_DATA = {
  "lastUpdate": 1684494090975,
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
          "id": "05f2a259149bb222f06d3ea49157e0e2246d9d51",
          "message": "chore(deps): relock",
          "timestamp": "2023-05-19T05:52:31-05:00",
          "tree_id": "1ea52ab056daa6478c7edf408ce1a7b163b22935",
          "url": "https://github.com/ibis-project/ibis/commit/05f2a259149bb222f06d3ea49157e0e2246d9d51"
        },
        "date": 1684494009370,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16935276721558276,
            "unit": "iter/sec",
            "range": "stddev: 0.09871164887835038",
            "extra": "mean: 5.904834130799998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 216.07501661568926,
            "unit": "iter/sec",
            "range": "stddev: 0.0039349620135789",
            "extra": "mean: 4.628022321426445 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 236.95079174090455,
            "unit": "iter/sec",
            "range": "stddev: 0.0003460560086263393",
            "extra": "mean: 4.220285539680563 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4481955.490571817,
            "unit": "iter/sec",
            "range": "stddev: 1.6886048162151483e-8",
            "extra": "mean: 223.11689665452087 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.19133697124974,
            "unit": "iter/sec",
            "range": "stddev: 0.0007278632762881927",
            "extra": "mean: 9.597726923073626 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2202.7317750803118,
            "unit": "iter/sec",
            "range": "stddev: 0.00009410641131186721",
            "extra": "mean: 453.9817381821443 usec\nrounds: 1375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.33273824039703,
            "unit": "iter/sec",
            "range": "stddev: 0.0008469982679394319",
            "extra": "mean: 9.772043797468115 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.314880045915437,
            "unit": "iter/sec",
            "range": "stddev: 0.019671017602886934",
            "extra": "mean: 31.93370048148836 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.533829115998,
            "unit": "iter/sec",
            "range": "stddev: 0.00012931869584270833",
            "extra": "mean: 6.041061246153189 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2082.490391955062,
            "unit": "iter/sec",
            "range": "stddev: 0.00006667873272186674",
            "extra": "mean: 480.1942923065256 usec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.06449406745558,
            "unit": "iter/sec",
            "range": "stddev: 0.0002700458224200436",
            "extra": "mean: 11.355314200000066 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11531620.099107128,
            "unit": "iter/sec",
            "range": "stddev: 3.846964349085237e-9",
            "extra": "mean: 86.71808396442955 nsec\nrounds: 114930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1016511.3248508968,
            "unit": "iter/sec",
            "range": "stddev: 1.4005745145722144e-7",
            "extra": "mean: 983.7568707330253 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.81263336190467,
            "unit": "iter/sec",
            "range": "stddev: 0.00012238169350568424",
            "extra": "mean: 7.885649666671194 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1185.9460362177524,
            "unit": "iter/sec",
            "range": "stddev: 0.000016751529221552424",
            "extra": "mean: 843.2086869561317 usec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 758.4099217638569,
            "unit": "iter/sec",
            "range": "stddev: 0.00002205322173987461",
            "extra": "mean: 1.3185481509449004 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.09200509777409,
            "unit": "iter/sec",
            "range": "stddev: 0.0003894892092177488",
            "extra": "mean: 19.572533864864244 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10037.356493979021,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020424544303292332",
            "extra": "mean: 99.62782537412684 usec\nrounds: 4209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.23466568274672,
            "unit": "iter/sec",
            "range": "stddev: 0.0008616066824186773",
            "extra": "mean: 9.976588370784865 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 285.69941033535497,
            "unit": "iter/sec",
            "range": "stddev: 0.0002848084492457352",
            "extra": "mean: 3.500182232879643 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2104.95957214284,
            "unit": "iter/sec",
            "range": "stddev: 0.00009487756125860835",
            "extra": "mean: 475.068506414118 usec\nrounds: 1325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 424.1374281183532,
            "unit": "iter/sec",
            "range": "stddev: 0.00003230774513563137",
            "extra": "mean: 2.357726372879678 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.13655445303107,
            "unit": "iter/sec",
            "range": "stddev: 0.00012961901799462617",
            "extra": "mean: 52.256011000016166 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 268.9624973384882,
            "unit": "iter/sec",
            "range": "stddev: 0.00038297199912919416",
            "extra": "mean: 3.7179904629659357 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12409.509206887915,
            "unit": "iter/sec",
            "range": "stddev: 0.000015732657783341262",
            "extra": "mean: 80.58336420307008 usec\nrounds: 5291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.06814757474746,
            "unit": "iter/sec",
            "range": "stddev: 0.0008617007977613607",
            "extra": "mean: 10.409277426963323 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.59431362817489,
            "unit": "iter/sec",
            "range": "stddev: 0.00028393031088382205",
            "extra": "mean: 19.38198087499927 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6117440.328510494,
            "unit": "iter/sec",
            "range": "stddev: 1.266010714664404e-8",
            "extra": "mean: 163.46706241477625 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 285.0863123951304,
            "unit": "iter/sec",
            "range": "stddev: 0.00038243572441811944",
            "extra": "mean: 3.507709618180467 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 154.3541598029476,
            "unit": "iter/sec",
            "range": "stddev: 0.0035537213363396915",
            "extra": "mean: 6.478607387560044 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 77.30372096216584,
            "unit": "iter/sec",
            "range": "stddev: 0.02356388099579311",
            "extra": "mean: 12.93598791304525 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 202.21679699916785,
            "unit": "iter/sec",
            "range": "stddev: 0.000193074884155887",
            "extra": "mean: 4.945187614677307 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.4057476594897,
            "unit": "iter/sec",
            "range": "stddev: 0.000021728844747309957",
            "extra": "mean: 1.4547448917976686 msec\nrounds: 573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.54473794776116,
            "unit": "iter/sec",
            "range": "stddev: 0.0009695420192618904",
            "extra": "mean: 10.045734416667784 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.48319420468067,
            "unit": "iter/sec",
            "range": "stddev: 0.00011848144593910982",
            "extra": "mean: 5.698551388537051 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1684898.7808316804,
            "unit": "iter/sec",
            "range": "stddev: 8.201554469913265e-8",
            "extra": "mean: 593.5074625114224 nsec\nrounds: 126567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.37840514248565,
            "unit": "iter/sec",
            "range": "stddev: 0.0008616381615161984",
            "extra": "mean: 26.753415406249204 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.67403801130915,
            "unit": "iter/sec",
            "range": "stddev: 0.00005013442105041815",
            "extra": "mean: 9.035542734040442 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.7326206864427,
            "unit": "iter/sec",
            "range": "stddev: 0.0003077968414514194",
            "extra": "mean: 3.626701829875903 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.98400229691617,
            "unit": "iter/sec",
            "range": "stddev: 0.0008426542637503105",
            "extra": "mean: 9.902558595962262 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 269.4055749001199,
            "unit": "iter/sec",
            "range": "stddev: 0.0003064590829436792",
            "extra": "mean: 3.7118756743276102 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 98.48170880181014,
            "unit": "iter/sec",
            "range": "stddev: 0.0010451883478278037",
            "extra": "mean: 10.154169867345148 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8924731548479349,
            "unit": "iter/sec",
            "range": "stddev: 0.010053117838536074",
            "extra": "mean: 1.1204818818000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.42796032753185,
            "unit": "iter/sec",
            "range": "stddev: 0.00005422894626890073",
            "extra": "mean: 8.894584559630365 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.02203789476297,
            "unit": "iter/sec",
            "range": "stddev: 0.0008386455426551192",
            "extra": "mean: 9.521811041241145 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8530.68449482603,
            "unit": "iter/sec",
            "range": "stddev: 0.000014290924111429152",
            "extra": "mean: 117.22388755632834 usec\nrounds: 4669"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4529.604458065104,
            "unit": "iter/sec",
            "range": "stddev: 0.00002478436076872692",
            "extra": "mean: 220.7698286369063 usec\nrounds: 887"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2135.225887963894,
            "unit": "iter/sec",
            "range": "stddev: 0.00008836074746333076",
            "extra": "mean: 468.33452405992455 usec\nrounds: 1143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.57186388885907,
            "unit": "iter/sec",
            "range": "stddev: 0.00014295419838668077",
            "extra": "mean: 6.59753053332679 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8922536029224127,
            "unit": "iter/sec",
            "range": "stddev: 0.015869489579148594",
            "extra": "mean: 1.1207575926000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 274.411966701194,
            "unit": "iter/sec",
            "range": "stddev: 0.00031811337025078307",
            "extra": "mean: 3.6441559456074875 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14149.251756860867,
            "unit": "iter/sec",
            "range": "stddev: 0.000024305064751826766",
            "extra": "mean: 70.67511534771494 usec\nrounds: 6242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2228.492413840931,
            "unit": "iter/sec",
            "range": "stddev: 0.00008574834251536508",
            "extra": "mean: 448.733858723999 usec\nrounds: 1175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 93.86884437956152,
            "unit": "iter/sec",
            "range": "stddev: 0.001036017110786906",
            "extra": "mean: 10.653161936845304 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1954655.1706969284,
            "unit": "iter/sec",
            "range": "stddev: 1.2862197331312037e-7",
            "extra": "mean: 511.59918894720033 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 96.01445357271673,
            "unit": "iter/sec",
            "range": "stddev: 0.0009563871511916271",
            "extra": "mean: 10.41509858974147 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1920059.725270107,
            "unit": "iter/sec",
            "range": "stddev: 1.2079039588504095e-7",
            "extra": "mean: 520.8171323208833 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6224692.416303258,
            "unit": "iter/sec",
            "range": "stddev: 8.229134093235636e-9",
            "extra": "mean: 160.6505081890963 nsec\nrounds: 62890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 317.9943120809881,
            "unit": "iter/sec",
            "range": "stddev: 0.00008265252440263321",
            "extra": "mean: 3.1447103360305255 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7924903182523744,
            "unit": "iter/sec",
            "range": "stddev: 0.0027223061157614697",
            "extra": "mean: 1.261845068599996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 285.25886019914884,
            "unit": "iter/sec",
            "range": "stddev: 0.00026734279813325225",
            "extra": "mean: 3.5055878695647396 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.15202740171095,
            "unit": "iter/sec",
            "range": "stddev: 0.0008546158806950722",
            "extra": "mean: 9.984820337076037 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 45.81462663825616,
            "unit": "iter/sec",
            "range": "stddev: 0.0005858034121844952",
            "extra": "mean: 21.827090459468664 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.97205893578136,
            "unit": "iter/sec",
            "range": "stddev: 0.0002794058783880014",
            "extra": "mean: 10.41969934884005 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1772.921621014915,
            "unit": "iter/sec",
            "range": "stddev: 0.000008254647672329441",
            "extra": "mean: 564.0407269823618 usec\nrounds: 1249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 78.56304226556966,
            "unit": "iter/sec",
            "range": "stddev: 0.025535138863002245",
            "extra": "mean: 12.728631315213859 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6519041193511945,
            "unit": "iter/sec",
            "range": "stddev: 0.0006822250035481803",
            "extra": "mean: 605.3620111999976 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.51262887060345,
            "unit": "iter/sec",
            "range": "stddev: 0.000122096723975849",
            "extra": "mean: 9.568221666666666 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7031745.525096293,
            "unit": "iter/sec",
            "range": "stddev: 3.886049288534829e-9",
            "extra": "mean: 142.21219986291572 nsec\nrounds: 59881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.84804519022424,
            "unit": "iter/sec",
            "range": "stddev: 0.0009083711248303494",
            "extra": "mean: 10.015218606381955 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1961847.4150139336,
            "unit": "iter/sec",
            "range": "stddev: 9.549924029956466e-8",
            "extra": "mean: 509.7236371937201 nsec\nrounds: 88496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.29598427760038,
            "unit": "iter/sec",
            "range": "stddev: 0.000941512878040444",
            "extra": "mean: 10.070900724487649 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.28216066448621,
            "unit": "iter/sec",
            "range": "stddev: 0.0009201388036804394",
            "extra": "mean: 10.174786484535897 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.06094291961521,
            "unit": "iter/sec",
            "range": "stddev: 0.0006609825416740302",
            "extra": "mean: 11.756276919537862 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 151646.6294602896,
            "unit": "iter/sec",
            "range": "stddev: 3.4208053852240635e-7",
            "extra": "mean: 6.5942777861862165 usec\nrounds: 39840"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2144.517484571345,
            "unit": "iter/sec",
            "range": "stddev: 0.00009446786540971915",
            "extra": "mean: 466.3053610868013 usec\nrounds: 1141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.1845783059474,
            "unit": "iter/sec",
            "range": "stddev: 0.00040121359098545327",
            "extra": "mean: 23.15641460975618 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.520562547618545,
            "unit": "iter/sec",
            "range": "stddev: 0.00134582023910394",
            "extra": "mean: 396.73683199998777 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2171.8897638212734,
            "unit": "iter/sec",
            "range": "stddev: 0.00008232070207656538",
            "extra": "mean: 460.42852480716 usec\nrounds: 1290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.48970874181892,
            "unit": "iter/sec",
            "range": "stddev: 0.0010013087359430288",
            "extra": "mean: 10.051290858585718 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.473966432856734,
            "unit": "iter/sec",
            "range": "stddev: 0.0005392932278817764",
            "extra": "mean: 118.00849199999499 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.378581099794527,
            "unit": "iter/sec",
            "range": "stddev: 0.0005362099810985333",
            "extra": "mean: 42.7741955652214 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 187.60334677543426,
            "unit": "iter/sec",
            "range": "stddev: 0.00004403369800609642",
            "extra": "mean: 5.330395311108305 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2129.8699054254175,
            "unit": "iter/sec",
            "range": "stddev: 0.00009344968612490244",
            "extra": "mean: 469.51224459893075 usec\nrounds: 1296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2142.6278129838083,
            "unit": "iter/sec",
            "range": "stddev: 0.00009289302026125584",
            "extra": "mean: 466.71661496235646 usec\nrounds: 1818"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.16211272074857,
            "unit": "iter/sec",
            "range": "stddev: 0.0008098485109891357",
            "extra": "mean: 9.600419710004644 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 519.5323116319756,
            "unit": "iter/sec",
            "range": "stddev: 0.0001475590652375446",
            "extra": "mean: 1.9248080968414845 msec\nrounds: 475"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.7180868689617,
            "unit": "iter/sec",
            "range": "stddev: 0.000507969019361216",
            "extra": "mean: 3.988543517096363 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5576911.264862517,
            "unit": "iter/sec",
            "range": "stddev: 3.222277320043432e-8",
            "extra": "mean: 179.31072461223786 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.66499576654605,
            "unit": "iter/sec",
            "range": "stddev: 0.000946480161840365",
            "extra": "mean: 17.341542936176598 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.275574282490627,
            "unit": "iter/sec",
            "range": "stddev: 0.09624630868063554",
            "extra": "mean: 783.9606158000038 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.83857987718916,
            "unit": "iter/sec",
            "range": "stddev: 0.00009481198321769167",
            "extra": "mean: 33.513659300001564 msec\nrounds: 30"
          }
        ]
      }
    ]
  }
}