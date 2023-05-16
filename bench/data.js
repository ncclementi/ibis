window.BENCHMARK_DATA = {
  "lastUpdate": 1684246163605,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "d230a8dea38a416ffd4f09d405c1746b0b08373c",
          "message": "fix(tests): ensure that record batch readers are cleaned up",
          "timestamp": "2023-05-16T14:48:40+02:00",
          "tree_id": "36429377071c9fb3e661a9a92a01446a0bb0d285",
          "url": "https://github.com/ibis-project/ibis/commit/d230a8dea38a416ffd4f09d405c1746b0b08373c"
        },
        "date": 1684243525628,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2158.422274722673,
            "unit": "iter/sec",
            "range": "stddev: 0.00011122187586989092",
            "extra": "mean: 463.3013714281122 usec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.8888583427905,
            "unit": "iter/sec",
            "range": "stddev: 0.00007088035604876053",
            "extra": "mean: 1.4537232110563962 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.35975614386128,
            "unit": "iter/sec",
            "range": "stddev: 0.0008360708495233596",
            "extra": "mean: 9.964153346153454 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4950960384421883,
            "unit": "iter/sec",
            "range": "stddev: 0.001270902723350987",
            "extra": "mean: 400.78617600000257 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.16847287658986,
            "unit": "iter/sec",
            "range": "stddev: 0.0008360894462717754",
            "extra": "mean: 10.398418214285988 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.343832152843376,
            "unit": "iter/sec",
            "range": "stddev: 0.0005742309760947855",
            "extra": "mean: 18.40135228571064 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 86.49323460623211,
            "unit": "iter/sec",
            "range": "stddev: 0.0005092574704545552",
            "extra": "mean: 11.561597904767765 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 47.40855638791499,
            "unit": "iter/sec",
            "range": "stddev: 0.0006392544920966743",
            "extra": "mean: 21.093238777777085 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4571.775876252903,
            "unit": "iter/sec",
            "range": "stddev: 0.0000336451413944439",
            "extra": "mean: 218.73338218399616 usec\nrounds: 2784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.52052611239722,
            "unit": "iter/sec",
            "range": "stddev: 0.00014926643298725592",
            "extra": "mean: 6.43001939999408 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 75.2707317517776,
            "unit": "iter/sec",
            "range": "stddev: 0.019029412791575138",
            "extra": "mean: 13.285376357144075 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2124.7324897475432,
            "unit": "iter/sec",
            "range": "stddev: 0.00008091159346057621",
            "extra": "mean: 470.6474837775075 usec\nrounds: 1726"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2206.181636568614,
            "unit": "iter/sec",
            "range": "stddev: 0.00008130050451542057",
            "extra": "mean: 453.2718355662459 usec\nrounds: 1642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 105.58757520497991,
            "unit": "iter/sec",
            "range": "stddev: 0.00014898757669825718",
            "extra": "mean: 9.470811296297637 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 292.44256299756285,
            "unit": "iter/sec",
            "range": "stddev: 0.00024236862459409354",
            "extra": "mean: 3.4194748867945526 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 237.6672139042187,
            "unit": "iter/sec",
            "range": "stddev: 0.00030392693465706663",
            "extra": "mean: 4.20756394444463 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.967498527410424,
            "unit": "iter/sec",
            "range": "stddev: 0.00003499661868686285",
            "extra": "mean: 52.72176500000114 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.22251083569732,
            "unit": "iter/sec",
            "range": "stddev: 0.0008722162141081917",
            "extra": "mean: 10.39257852777848 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 158.91400289274742,
            "unit": "iter/sec",
            "range": "stddev: 0.0039046390423724945",
            "extra": "mean: 6.292711666667346 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7929.179879033334,
            "unit": "iter/sec",
            "range": "stddev: 0.000020417672175438002",
            "extra": "mean: 126.11644776078815 usec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1761.5648366469152,
            "unit": "iter/sec",
            "range": "stddev: 0.00004151642717764956",
            "extra": "mean: 567.6770898217233 usec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4502809.875388155,
            "unit": "iter/sec",
            "range": "stddev: 1.0127836337326526e-8",
            "extra": "mean: 222.0835495336444 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.96619681331984,
            "unit": "iter/sec",
            "range": "stddev: 0.00006215513540153106",
            "extra": "mean: 6.025323344155487 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 257.6578531793887,
            "unit": "iter/sec",
            "range": "stddev: 0.0004000377009019561",
            "extra": "mean: 3.8811159359609015 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 80.42324048282865,
            "unit": "iter/sec",
            "range": "stddev: 0.021111858478206673",
            "extra": "mean: 12.434216701495785 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6174957.7875282345,
            "unit": "iter/sec",
            "range": "stddev: 5.355248721825773e-9",
            "extra": "mean: 161.94442689463332 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.804088235428463,
            "unit": "iter/sec",
            "range": "stddev: 0.0004228674740351587",
            "extra": "mean: 33.55244394999772 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.04814519118672,
            "unit": "iter/sec",
            "range": "stddev: 0.00004052969900783652",
            "extra": "mean: 9.086931890244031 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.18126270947313,
            "unit": "iter/sec",
            "range": "stddev: 0.0008913074192369217",
            "extra": "mean: 9.981906525774306 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7036490.907158031,
            "unit": "iter/sec",
            "range": "stddev: 3.714166183027857e-9",
            "extra": "mean: 142.11629250919614 nsec\nrounds: 69926"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.50164582794939,
            "unit": "iter/sec",
            "range": "stddev: 0.000798007869435005",
            "extra": "mean: 9.478525118279066 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.52997566050188,
            "unit": "iter/sec",
            "range": "stddev: 0.0013035496742855087",
            "extra": "mean: 24.673096484845434 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1880050.0301810112,
            "unit": "iter/sec",
            "range": "stddev: 7.695825621054437e-8",
            "extra": "mean: 531.9007387817866 nsec\nrounds: 123442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1843113.6557405393,
            "unit": "iter/sec",
            "range": "stddev: 8.71152336388771e-8",
            "extra": "mean: 542.5601383210483 nsec\nrounds: 88496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12160.959116448174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000773827698274508",
            "extra": "mean: 82.23035620993585 usec\nrounds: 3905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2141.6403362946767,
            "unit": "iter/sec",
            "range": "stddev: 0.00008287417715413557",
            "extra": "mean: 466.9318106560009 usec\nrounds: 1220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2926340087346473,
            "unit": "iter/sec",
            "range": "stddev: 0.06472868618546333",
            "extra": "mean: 773.6141809999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5535023.48930051,
            "unit": "iter/sec",
            "range": "stddev: 8.35442793550917e-9",
            "extra": "mean: 180.6677066379472 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2156.0248025927735,
            "unit": "iter/sec",
            "range": "stddev: 0.00012371523908996732",
            "extra": "mean: 463.8165566543709 usec\nrounds: 1315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.09442774543277,
            "unit": "iter/sec",
            "range": "stddev: 0.00008315319472084331",
            "extra": "mean: 9.001351555556406 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.817983694884557,
            "unit": "iter/sec",
            "range": "stddev: 0.0008741275589366778",
            "extra": "mean: 40.29336195454582 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 283.7947281172892,
            "unit": "iter/sec",
            "range": "stddev: 0.0002758994067218814",
            "extra": "mean: 3.5236736307050465 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.72500443147469,
            "unit": "iter/sec",
            "range": "stddev: 0.0008750981794069902",
            "extra": "mean: 9.734728224490613 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2073.072705116015,
            "unit": "iter/sec",
            "range": "stddev: 0.00011592549810735201",
            "extra": "mean: 482.37574954904295 usec\nrounds: 1665"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11663987.437015943,
            "unit": "iter/sec",
            "range": "stddev: 3.007759528429256e-9",
            "extra": "mean: 85.7339743719503 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1664028.4832776694,
            "unit": "iter/sec",
            "range": "stddev: 8.009761126960799e-8",
            "extra": "mean: 600.9512517660037 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2083.4413503597957,
            "unit": "iter/sec",
            "range": "stddev: 0.00011946589324519894",
            "extra": "mean: 479.975114167388 usec\nrounds: 1200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.26593957961263,
            "unit": "iter/sec",
            "range": "stddev: 0.000802489674054633",
            "extra": "mean: 9.41035296874985 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13942.302081682179,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018154368840099621",
            "extra": "mean: 71.72416679407846 usec\nrounds: 6541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 223.99418743267583,
            "unit": "iter/sec",
            "range": "stddev: 0.01159334964931568",
            "extra": "mean: 4.464401560868905 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.27197659556279,
            "unit": "iter/sec",
            "range": "stddev: 0.0003296510848713476",
            "extra": "mean: 10.721333850746044 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.90355559467406,
            "unit": "iter/sec",
            "range": "stddev: 0.00029559244336309636",
            "extra": "mean: 3.572659153526765 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 318.2179339502403,
            "unit": "iter/sec",
            "range": "stddev: 0.000038442430823378677",
            "extra": "mean: 3.1425004479991685 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 285.57419181246144,
            "unit": "iter/sec",
            "range": "stddev: 0.00028511877544273466",
            "extra": "mean: 3.50171699218782 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.2844307701836,
            "unit": "iter/sec",
            "range": "stddev: 0.00007774155906073839",
            "extra": "mean: 5.1470928269228455 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.05214759324447,
            "unit": "iter/sec",
            "range": "stddev: 0.0008236917061173295",
            "extra": "mean: 9.798911865978182 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.25069573367358,
            "unit": "iter/sec",
            "range": "stddev: 0.01818220567492401",
            "extra": "mean: 11.869338185183874 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1022699.8158630448,
            "unit": "iter/sec",
            "range": "stddev: 1.1434752990703892e-7",
            "extra": "mean: 977.8040286006224 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.34573224859605,
            "unit": "iter/sec",
            "range": "stddev: 0.000803153536408577",
            "extra": "mean: 9.867213722893132 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 221.2831045496549,
            "unit": "iter/sec",
            "range": "stddev: 0.004074256129117438",
            "extra": "mean: 4.519097840909064 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.5687207150638,
            "unit": "iter/sec",
            "range": "stddev: 0.00006385606479628458",
            "extra": "mean: 1.8671740176776037 msec\nrounds: 396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2056.885378510678,
            "unit": "iter/sec",
            "range": "stddev: 0.00009051577712789503",
            "extra": "mean: 486.1719619612769 usec\nrounds: 1183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 187.1851718854978,
            "unit": "iter/sec",
            "range": "stddev: 0.00006340095019940028",
            "extra": "mean: 5.3423035058124455 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 272.81256159987277,
            "unit": "iter/sec",
            "range": "stddev: 0.0002721361161660106",
            "extra": "mean: 3.665520363635874 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2096.151100813137,
            "unit": "iter/sec",
            "range": "stddev: 0.00009302275954280001",
            "extra": "mean: 477.0648449971383 usec\nrounds: 1729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1172.616458994269,
            "unit": "iter/sec",
            "range": "stddev: 0.000013065387178215969",
            "extra": "mean: 852.7937607644371 usec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.648346243414533,
            "unit": "iter/sec",
            "range": "stddev: 0.03741761478224379",
            "extra": "mean: 34.90602883333528 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 176.44479247093489,
            "unit": "iter/sec",
            "range": "stddev: 0.0001269815540076318",
            "extra": "mean: 5.6674951184219635 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7764572856182924,
            "unit": "iter/sec",
            "range": "stddev: 0.0031156665196092",
            "extra": "mean: 1.2879008524000142 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.03999284741076,
            "unit": "iter/sec",
            "range": "stddev: 0.0005825956049563983",
            "extra": "mean: 15.862945962264224 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1958028.3124428682,
            "unit": "iter/sec",
            "range": "stddev: 8.357211296795457e-8",
            "extra": "mean: 510.7178449081687 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10428.12533568512,
            "unit": "iter/sec",
            "range": "stddev: 0.000002454937225331046",
            "extra": "mean: 95.8945129454853 usec\nrounds: 4519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.04728668516877,
            "unit": "iter/sec",
            "range": "stddev: 0.00044080938047729774",
            "extra": "mean: 21.255210883717993 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.95344447997917,
            "unit": "iter/sec",
            "range": "stddev: 0.0008417837177586573",
            "extra": "mean: 10.00465772042805 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147000.7985344577,
            "unit": "iter/sec",
            "range": "stddev: 7.733580859509673e-7",
            "extra": "mean: 6.802684134845672 usec\nrounds: 40321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.7814754209593,
            "unit": "iter/sec",
            "range": "stddev: 0.0003942545588175223",
            "extra": "mean: 3.665938086363047 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.623661094071928,
            "unit": "iter/sec",
            "range": "stddev: 0.0014680680492548108",
            "extra": "mean: 615.8920748000014 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.7651994603553,
            "unit": "iter/sec",
            "range": "stddev: 0.0001121625631809334",
            "extra": "mean: 7.8886003750007205 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6042508.827818265,
            "unit": "iter/sec",
            "range": "stddev: 8.982505409973057e-9",
            "extra": "mean: 165.49417278365786 nsec\nrounds: 188644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9189224802551519,
            "unit": "iter/sec",
            "range": "stddev: 0.004710470444152901",
            "extra": "mean: 1.0882310765999932 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.86590891110703,
            "unit": "iter/sec",
            "range": "stddev: 0.0008221658884689716",
            "extra": "mean: 9.721393711342829 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 427.92897926481834,
            "unit": "iter/sec",
            "range": "stddev: 0.00003397710320048001",
            "extra": "mean: 2.336836364104154 msec\nrounds: 390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 82.9772559266424,
            "unit": "iter/sec",
            "range": "stddev: 0.01936943650789734",
            "extra": "mean: 12.05149518181306 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 94.36788964736546,
            "unit": "iter/sec",
            "range": "stddev: 0.0010281706326910646",
            "extra": "mean: 10.596824870586877 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.880809663891025,
            "unit": "iter/sec",
            "range": "stddev: 0.019452176078799347",
            "extra": "mean: 1.1353190604000019 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 746.8268077567237,
            "unit": "iter/sec",
            "range": "stddev: 0.00001599566162450117",
            "extra": "mean: 1.3389985330116143 msec\nrounds: 621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 97.70141703618752,
            "unit": "iter/sec",
            "range": "stddev: 0.0010638328068308016",
            "extra": "mean: 10.235266082472593 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.45744980135647,
            "unit": "iter/sec",
            "range": "stddev: 0.0009445673930903428",
            "extra": "mean: 10.156671760415867 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.35201720816283,
            "unit": "iter/sec",
            "range": "stddev: 0.00010322544230408381",
            "extra": "mean: 9.675669880597349 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.603376637011245,
            "unit": "iter/sec",
            "range": "stddev: 0.00019352435568593024",
            "extra": "mean: 116.23343277778355 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.482070523435134,
            "unit": "iter/sec",
            "range": "stddev: 0.000146890841986008",
            "extra": "mean: 19.054126295445297 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16885906042998342,
            "unit": "iter/sec",
            "range": "stddev: 0.08662097578727387",
            "extra": "mean: 5.922098568199988 sec\nrounds: 5"
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
          "id": "7b9d85eab7abe19a1890d479197332c475e791af",
          "message": "fix(duckdb): better types for null literals",
          "timestamp": "2023-05-16T08:57:41-04:00",
          "tree_id": "1d2709d632a38d723d2aec37e5c9b6b156a02b86",
          "url": "https://github.com/ibis-project/ibis/commit/7b9d85eab7abe19a1890d479197332c475e791af"
        },
        "date": 1684245340650,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.52225412337943,
            "unit": "iter/sec",
            "range": "stddev: 0.0004405668735477061",
            "extra": "mean: 15.994304972220478 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 92.82551623685204,
            "unit": "iter/sec",
            "range": "stddev: 0.006741489502852078",
            "extra": "mean: 10.772899958330603 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.505660326988286,
            "unit": "iter/sec",
            "range": "stddev: 0.00015918015617038343",
            "extra": "mean: 117.5687673333275 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2296.4479043829024,
            "unit": "iter/sec",
            "range": "stddev: 0.0001322165829727063",
            "extra": "mean: 435.4551209681015 usec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.61820544122163,
            "unit": "iter/sec",
            "range": "stddev: 0.0005583725726309927",
            "extra": "mean: 9.938559285716662 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.46507955335204,
            "unit": "iter/sec",
            "range": "stddev: 0.00009222455524095742",
            "extra": "mean: 9.572576829267463 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11508143.076893765,
            "unit": "iter/sec",
            "range": "stddev: 3.719934490978962e-9",
            "extra": "mean: 86.89499194776077 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5781819.160855658,
            "unit": "iter/sec",
            "range": "stddev: 8.460710923310614e-9",
            "extra": "mean: 172.95594555605476 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 232.88635502266615,
            "unit": "iter/sec",
            "range": "stddev: 0.0002628477334771298",
            "extra": "mean: 4.293939848483922 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1877993.2765506094,
            "unit": "iter/sec",
            "range": "stddev: 1.2485767552793605e-7",
            "extra": "mean: 532.4832695017647 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 87.43578180504876,
            "unit": "iter/sec",
            "range": "stddev: 0.010098535127003285",
            "extra": "mean: 11.436965271605285 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6264578.904536524,
            "unit": "iter/sec",
            "range": "stddev: 7.990965432893349e-9",
            "extra": "mean: 159.62764859951903 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13524.771243201722,
            "unit": "iter/sec",
            "range": "stddev: 0.000001465838122942187",
            "extra": "mean: 73.93840398614164 usec\nrounds: 5921"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.32830776365329,
            "unit": "iter/sec",
            "range": "stddev: 0.0007278630910183609",
            "extra": "mean: 10.170011289156411 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9776.72524994803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020083459637340797",
            "extra": "mean: 102.28373759458114 usec\nrounds: 5804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1623136.3178587484,
            "unit": "iter/sec",
            "range": "stddev: 1.127120145959904e-7",
            "extra": "mean: 616.0911988705953 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.79927130967842,
            "unit": "iter/sec",
            "range": "stddev: 0.00011687748019067765",
            "extra": "mean: 8.077591971430463 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8053.270414283009,
            "unit": "iter/sec",
            "range": "stddev: 0.000013211506912763238",
            "extra": "mean: 124.17315556999473 usec\nrounds: 1517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.19508400210982,
            "unit": "iter/sec",
            "range": "stddev: 0.0008510268260881583",
            "extra": "mean: 10.081144746837763 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2237.8809105205637,
            "unit": "iter/sec",
            "range": "stddev: 0.00009587421871407974",
            "extra": "mean: 446.8513026313744 usec\nrounds: 1368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 170.95134442166608,
            "unit": "iter/sec",
            "range": "stddev: 0.00007827426215517597",
            "extra": "mean: 5.849617640522409 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 275.54567601836476,
            "unit": "iter/sec",
            "range": "stddev: 0.00025116241973519314",
            "extra": "mean: 3.629162375000765 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1088512.5401020576,
            "unit": "iter/sec",
            "range": "stddev: 3.072450160704107e-7",
            "extra": "mean: 918.6848687165709 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.9202048099274,
            "unit": "iter/sec",
            "range": "stddev: 0.0003110340013898162",
            "extra": "mean: 3.5852547888434927 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 267.5507860867286,
            "unit": "iter/sec",
            "range": "stddev: 0.00027515362662221336",
            "extra": "mean: 3.7376081551703706 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.79695308684347,
            "unit": "iter/sec",
            "range": "stddev: 0.012105859991328433",
            "extra": "mean: 11.013585434343176 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 98.34125055085805,
            "unit": "iter/sec",
            "range": "stddev: 0.0007816018994563516",
            "extra": "mean: 10.168672804123444 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4635.099862232878,
            "unit": "iter/sec",
            "range": "stddev: 0.000023785584283016308",
            "extra": "mean: 215.74508203114905 usec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6337824.889947469,
            "unit": "iter/sec",
            "range": "stddev: 4.416593955885184e-9",
            "extra": "mean: 157.78283833403782 nsec\nrounds: 52357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7504014500303785,
            "unit": "iter/sec",
            "range": "stddev: 0.0030204108728630824",
            "extra": "mean: 1.3326200261999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11723.542957833817,
            "unit": "iter/sec",
            "range": "stddev: 0.000013779206053290256",
            "extra": "mean: 85.29844634823363 usec\nrounds: 876"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2378.5153916698737,
            "unit": "iter/sec",
            "range": "stddev: 0.00008315259618414123",
            "extra": "mean: 420.430325362719 usec\nrounds: 1171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.7355183562142,
            "unit": "iter/sec",
            "range": "stddev: 0.00036142972704931124",
            "extra": "mean: 3.7773548717949232 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.72546535777771,
            "unit": "iter/sec",
            "range": "stddev: 0.01942201033350234",
            "extra": "mean: 24.554661099999464 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.872377974291943,
            "unit": "iter/sec",
            "range": "stddev: 0.00007161432205311074",
            "extra": "mean: 52.98749322222167 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 529.2179449902221,
            "unit": "iter/sec",
            "range": "stddev: 0.0000306677421439046",
            "extra": "mean: 1.8895806717560872 msec\nrounds: 393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2250.170595049315,
            "unit": "iter/sec",
            "range": "stddev: 0.00009009332403966792",
            "extra": "mean: 444.4107492116987 usec\nrounds: 1268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1745798651972649,
            "unit": "iter/sec",
            "range": "stddev: 0.05533095384903044",
            "extra": "mean: 5.7280374163999905 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 191.64828841639857,
            "unit": "iter/sec",
            "range": "stddev: 0.000059412940188496264",
            "extra": "mean: 5.217891629834321 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7191690.130310254,
            "unit": "iter/sec",
            "range": "stddev: 4.726902761017853e-9",
            "extra": "mean: 139.04937252311558 nsec\nrounds: 71429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.60234973504117,
            "unit": "iter/sec",
            "range": "stddev: 0.00025920876647368853",
            "extra": "mean: 20.575136911107467 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 94.77338166437532,
            "unit": "iter/sec",
            "range": "stddev: 0.00077905623565239",
            "extra": "mean: 10.55148589654993 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2412.3468048861578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000784364764066166",
            "extra": "mean: 414.5340951701144 usec\nrounds: 1387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.46598464020907,
            "unit": "iter/sec",
            "range": "stddev: 0.0001845153829971777",
            "extra": "mean: 10.155791399984082 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.98344868257361,
            "unit": "iter/sec",
            "range": "stddev: 0.0008818619939067041",
            "extra": "mean: 10.640171370785415 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 84.37874884045118,
            "unit": "iter/sec",
            "range": "stddev: 0.0007352341382994322",
            "extra": "mean: 11.851325289153849 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2344.4611102223407,
            "unit": "iter/sec",
            "range": "stddev: 0.00009630163501648938",
            "extra": "mean: 426.5372522665404 usec\nrounds: 1324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.82551519228245,
            "unit": "iter/sec",
            "range": "stddev: 0.0007978624268512977",
            "extra": "mean: 10.118844288889603 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.984151697687594,
            "unit": "iter/sec",
            "range": "stddev: 0.0007634664995382938",
            "extra": "mean: 18.523955059996524 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 408.98395396753364,
            "unit": "iter/sec",
            "range": "stddev: 0.00009451997613458917",
            "extra": "mean: 2.445083701448549 msec\nrounds: 345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.342648486750711,
            "unit": "iter/sec",
            "range": "stddev: 0.0015508781907083867",
            "extra": "mean: 744.7965792000105 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2331.952834057387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000827765472191422",
            "extra": "mean: 428.82513976926816 usec\nrounds: 1388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.07207750987882,
            "unit": "iter/sec",
            "range": "stddev: 0.00006745407940632369",
            "extra": "mean: 6.132257681818155 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.90238146938269,
            "unit": "iter/sec",
            "range": "stddev: 0.0008331394876313845",
            "extra": "mean: 10.009771391750778 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.72489038558864,
            "unit": "iter/sec",
            "range": "stddev: 0.00010591684725654657",
            "extra": "mean: 33.64183978571792 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 270.5819096732411,
            "unit": "iter/sec",
            "range": "stddev: 0.00027946918154243014",
            "extra": "mean: 3.6957385702821575 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.26060718445916,
            "unit": "iter/sec",
            "range": "stddev: 0.00039296306591470113",
            "extra": "mean: 10.497518644444881 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4637727.778728831,
            "unit": "iter/sec",
            "range": "stddev: 1.354588827776877e-8",
            "extra": "mean: 215.6228324970897 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1188.1759960639515,
            "unit": "iter/sec",
            "range": "stddev: 0.000012688397325239248",
            "extra": "mean: 841.6261591823783 usec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.09075480987215,
            "unit": "iter/sec",
            "range": "stddev: 0.00023181803646904104",
            "extra": "mean: 18.4874476888884 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1789574.6666880164,
            "unit": "iter/sec",
            "range": "stddev: 1.449681965220778e-7",
            "extra": "mean: 558.791996005794 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.16982557262736,
            "unit": "iter/sec",
            "range": "stddev: 0.0008424527177336138",
            "extra": "mean: 10.291260626505633 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 92.46002970001828,
            "unit": "iter/sec",
            "range": "stddev: 0.0009737243918493485",
            "extra": "mean: 10.815484304346946 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2250.716810493331,
            "unit": "iter/sec",
            "range": "stddev: 0.0001124199314252248",
            "extra": "mean: 444.30289734265216 usec\nrounds: 1656"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 243.63801331607164,
            "unit": "iter/sec",
            "range": "stddev: 0.004030513369486454",
            "extra": "mean: 4.104449820409182 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 264.3751672748078,
            "unit": "iter/sec",
            "range": "stddev: 0.000417697960363363",
            "extra": "mean: 3.782503516907617 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.61863003152288,
            "unit": "iter/sec",
            "range": "stddev: 0.00014719743212573735",
            "extra": "mean: 9.122536923809678 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.699832956568507,
            "unit": "iter/sec",
            "range": "stddev: 0.03811128271346004",
            "extra": "mean: 34.843408374999996 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.730254959081563,
            "unit": "iter/sec",
            "range": "stddev: 0.0007693984357253237",
            "extra": "mean: 40.4362996521706 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.7895637836655,
            "unit": "iter/sec",
            "range": "stddev: 0.0008415222640358169",
            "extra": "mean: 9.921662148934367 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2281.525948629631,
            "unit": "iter/sec",
            "range": "stddev: 0.00009079666398017667",
            "extra": "mean: 438.3031455770368 usec\nrounds: 1628"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 105.50271496669981,
            "unit": "iter/sec",
            "range": "stddev: 0.00020317379717772952",
            "extra": "mean: 9.478429065220107 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143070.86270528648,
            "unit": "iter/sec",
            "range": "stddev: 3.6018859545787444e-7",
            "extra": "mean: 6.9895433709651495 usec\nrounds: 53192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.58787745203037,
            "unit": "iter/sec",
            "range": "stddev: 0.0009325922596265401",
            "extra": "mean: 10.143234907218357 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.74307114207633,
            "unit": "iter/sec",
            "range": "stddev: 0.00008099026734962648",
            "extra": "mean: 6.633804077518717 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.392403121786312,
            "unit": "iter/sec",
            "range": "stddev: 0.0019424743543205703",
            "extra": "mean: 417.98975720000726 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1822765.7964730896,
            "unit": "iter/sec",
            "range": "stddev: 1.355781530881022e-7",
            "extra": "mean: 548.6168337890267 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 675.9809110724507,
            "unit": "iter/sec",
            "range": "stddev: 0.00007810771802336299",
            "extra": "mean: 1.4793317142838986 msec\nrounds: 539"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.11533954968495,
            "unit": "iter/sec",
            "range": "stddev: 0.000921605793403904",
            "extra": "mean: 24.32182272972771 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8855139229836694,
            "unit": "iter/sec",
            "range": "stddev: 0.004806360269822886",
            "extra": "mean: 1.129287721000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 99.29796339877382,
            "unit": "iter/sec",
            "range": "stddev: 0.0008003974526536987",
            "extra": "mean: 10.070699999999682 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 738.0375406065839,
            "unit": "iter/sec",
            "range": "stddev: 0.000014461751405936702",
            "extra": "mean: 1.3549446267707634 msec\nrounds: 635"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1759.847524284806,
            "unit": "iter/sec",
            "range": "stddev: 0.000005581987752151291",
            "extra": "mean: 568.2310462699861 usec\nrounds: 1448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 80.87850128032028,
            "unit": "iter/sec",
            "range": "stddev: 0.021038001524731207",
            "extra": "mean: 12.364225154643467 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8840500924933217,
            "unit": "iter/sec",
            "range": "stddev: 0.00550570210948924",
            "extra": "mean: 1.1311576215999934 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.55624607584189,
            "unit": "iter/sec",
            "range": "stddev: 0.0015446878443602637",
            "extra": "mean: 642.5719013999924 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.61386274319952,
            "unit": "iter/sec",
            "range": "stddev: 0.00004356351240148039",
            "extra": "mean: 5.1917343111136285 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 425.7881848348659,
            "unit": "iter/sec",
            "range": "stddev: 0.00003624802503412799",
            "extra": "mean: 2.348585601049103 msec\nrounds: 381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 165.8911307505549,
            "unit": "iter/sec",
            "range": "stddev: 0.004006436612134389",
            "extra": "mean: 6.02804981481299 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 249.3146319792645,
            "unit": "iter/sec",
            "range": "stddev: 0.00043272604591901537",
            "extra": "mean: 4.010996033651045 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 97.34913527509022,
            "unit": "iter/sec",
            "range": "stddev: 0.0009528962917122649",
            "extra": "mean: 10.27230490722069 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 272.7001013063702,
            "unit": "iter/sec",
            "range": "stddev: 0.0003267096852975088",
            "extra": "mean: 3.667032007723865 msec\nrounds: 259"
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
          "id": "25781898b505c5ce0b12c9f92eb123be8e94f116",
          "message": "chore(deps): relock",
          "timestamp": "2023-05-16T08:59:26-04:00",
          "tree_id": "3716e839cdf923870c55524854c2326e914b4508",
          "url": "https://github.com/ibis-project/ibis/commit/25781898b505c5ce0b12c9f92eb123be8e94f116"
        },
        "date": 1684246053521,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 143.92891152397334,
            "unit": "iter/sec",
            "range": "stddev: 0.009203565628154444",
            "extra": "mean: 6.947874401408478 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 810408.8930311017,
            "unit": "iter/sec",
            "range": "stddev: 0.000005792016092381901",
            "extra": "mean: 1.2339449981351849 usec\nrounds: 88488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 73.82526141075006,
            "unit": "iter/sec",
            "range": "stddev: 0.013848225074421613",
            "extra": "mean: 13.545498937500344 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11752.40042774873,
            "unit": "iter/sec",
            "range": "stddev: 0.000006220560664519919",
            "extra": "mean: 85.08900000027981 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.53446200268404,
            "unit": "iter/sec",
            "range": "stddev: 0.0009617985142834919",
            "extra": "mean: 12.417044518987067 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1865.5566929636893,
            "unit": "iter/sec",
            "range": "stddev: 0.00012581083424582684",
            "extra": "mean: 536.0330263731437 usec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 83.65540827170663,
            "unit": "iter/sec",
            "range": "stddev: 0.001010999591497141",
            "extra": "mean: 11.953799768116287 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.143317520418189,
            "unit": "iter/sec",
            "range": "stddev: 0.004304463899813308",
            "extra": "mean: 466.5664282000023 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.9688976068617,
            "unit": "iter/sec",
            "range": "stddev: 0.00009734718096693098",
            "extra": "mean: 10.529763166670136 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4994214.646060417,
            "unit": "iter/sec",
            "range": "stddev: 1.612071580952228e-8",
            "extra": "mean: 200.23168223016174 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 149.76802234602314,
            "unit": "iter/sec",
            "range": "stddev: 0.00009704765383156836",
            "extra": "mean: 6.676992754098108 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.099803865428605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002832687077341252",
            "extra": "mean: 23.20196173333689 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 75.52807911171811,
            "unit": "iter/sec",
            "range": "stddev: 0.0003534180659468677",
            "extra": "mean: 13.24010900000303 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 486.65069531055565,
            "unit": "iter/sec",
            "range": "stddev: 0.0069297658455592746",
            "extra": "mean: 2.054861956709732 msec\nrounds: 462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.195398208173845,
            "unit": "iter/sec",
            "range": "stddev: 0.00009438594244423861",
            "extra": "mean: 61.74593468750267 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1507250630591883,
            "unit": "iter/sec",
            "range": "stddev: 0.0009289250193434694",
            "extra": "mean: 869.0173109999989 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 85.9670789346429,
            "unit": "iter/sec",
            "range": "stddev: 0.0009310919227381944",
            "extra": "mean: 11.63235987999845 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 456.5085193227443,
            "unit": "iter/sec",
            "range": "stddev: 0.00004056314728573001",
            "extra": "mean: 2.190539623408464 msec\nrounds: 393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.59328332470812,
            "unit": "iter/sec",
            "range": "stddev: 0.0009887323129210627",
            "extra": "mean: 11.683159719511906 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145054.22076611876,
            "unit": "iter/sec",
            "range": "stddev: 4.421516084992504e-7",
            "extra": "mean: 6.893973816952014 usec\nrounds: 33113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.46574339316098,
            "unit": "iter/sec",
            "range": "stddev: 0.0009743712910237507",
            "extra": "mean: 12.584038823527354 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.195450826194076,
            "unit": "iter/sec",
            "range": "stddev: 0.0004946211600019615",
            "extra": "mean: 26.885008187500503 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1866.4848490864888,
            "unit": "iter/sec",
            "range": "stddev: 0.00013406246703886557",
            "extra": "mean: 535.7664705874407 usec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.503620997171573,
            "unit": "iter/sec",
            "range": "stddev: 0.0005562129844963177",
            "extra": "mean: 51.27253037500168 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.86642431283758,
            "unit": "iter/sec",
            "range": "stddev: 0.00036065238225054896",
            "extra": "mean: 23.32828119047292 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9705213.521772204,
            "unit": "iter/sec",
            "range": "stddev: 4.710873928570246e-9",
            "extra": "mean: 103.03740332513732 nsec\nrounds: 97078"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3748409.278040854,
            "unit": "iter/sec",
            "range": "stddev: 1.5996025960519342e-8",
            "extra": "mean: 266.7798326766859 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1895.1167562033902,
            "unit": "iter/sec",
            "range": "stddev: 0.00019923909093280508",
            "extra": "mean: 527.671974154967 usec\nrounds: 1006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4517426.503419283,
            "unit": "iter/sec",
            "range": "stddev: 2.058068011354446e-8",
            "extra": "mean: 221.36497389445154 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.04147362289316,
            "unit": "iter/sec",
            "range": "stddev: 0.0010548296416389724",
            "extra": "mean: 33.287315148147336 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 643.3003150113489,
            "unit": "iter/sec",
            "range": "stddev: 0.00013534191845467668",
            "extra": "mean: 1.5544839271256357 msec\nrounds: 494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1561123.6982941257,
            "unit": "iter/sec",
            "range": "stddev: 1.3482373551962388e-7",
            "extra": "mean: 640.5642301713324 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 96.06586635693611,
            "unit": "iter/sec",
            "range": "stddev: 0.00002921714287470551",
            "extra": "mean: 10.409524609755403 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 84.83174732622376,
            "unit": "iter/sec",
            "range": "stddev: 0.0009797147230747795",
            "extra": "mean: 11.788039637501058 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 82.11372118108773,
            "unit": "iter/sec",
            "range": "stddev: 0.0011693635771579394",
            "extra": "mean: 12.17823264634021 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 237.01266495429752,
            "unit": "iter/sec",
            "range": "stddev: 0.0003913961891855481",
            "extra": "mean: 4.219183815315638 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 89.29718081290589,
            "unit": "iter/sec",
            "range": "stddev: 0.0000975994893915625",
            "extra": "mean: 11.198561823527049 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 237.05354434689056,
            "unit": "iter/sec",
            "range": "stddev: 0.00034543915388146227",
            "extra": "mean: 4.218456225808028 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.754447479737878,
            "unit": "iter/sec",
            "range": "stddev: 0.009635928005708281",
            "extra": "mean: 1.325473312400004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 135.31598841837578,
            "unit": "iter/sec",
            "range": "stddev: 0.00011002293549922637",
            "extra": "mean: 7.390109710525538 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.307872979743788,
            "unit": "iter/sec",
            "range": "stddev: 0.00021540434794813728",
            "extra": "mean: 136.83872212500603 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.58280165695513,
            "unit": "iter/sec",
            "range": "stddev: 0.00011875195003919609",
            "extra": "mean: 39.08876023076748 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1490.9729436931332,
            "unit": "iter/sec",
            "range": "stddev: 0.000011177277843350838",
            "extra": "mean: 670.7029823914876 usec\nrounds: 1079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 89.62758453109551,
            "unit": "iter/sec",
            "range": "stddev: 0.0009001525706403308",
            "extra": "mean: 11.15727937143122 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 364.6785762578503,
            "unit": "iter/sec",
            "range": "stddev: 0.00008857977879312594",
            "extra": "mean: 2.7421407922052934 msec\nrounds: 308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 164.34861584163437,
            "unit": "iter/sec",
            "range": "stddev: 0.00005462612426362854",
            "extra": "mean: 6.084626845677823 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 70.19651412025432,
            "unit": "iter/sec",
            "range": "stddev: 0.0008209056235567156",
            "extra": "mean: 14.24572163636061 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.13308071273259,
            "unit": "iter/sec",
            "range": "stddev: 0.0005245624262724874",
            "extra": "mean: 11.746315200014124 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 87.82786812860573,
            "unit": "iter/sec",
            "range": "stddev: 0.001029039593656106",
            "extra": "mean: 11.385907699999127 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1587451.6628336064,
            "unit": "iter/sec",
            "range": "stddev: 1.4952154140611589e-7",
            "extra": "mean: 629.9404406525341 nsec\nrounds: 120468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9144.131275753723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024753775759120547",
            "extra": "mean: 109.35975981136305 usec\nrounds: 2344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1825.8983940414228,
            "unit": "iter/sec",
            "range": "stddev: 0.0001291711133153591",
            "extra": "mean: 547.6756008238834 usec\nrounds: 972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.35283870031537,
            "unit": "iter/sec",
            "range": "stddev: 0.0010313376734039238",
            "extra": "mean: 11.854965587497901 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 230.3502822541696,
            "unit": "iter/sec",
            "range": "stddev: 0.0004510066474749783",
            "extra": "mean: 4.341214563377853 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 82.90471833457522,
            "unit": "iter/sec",
            "range": "stddev: 0.0011205283121009017",
            "extra": "mean: 12.0620396533324 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10664.977637761933,
            "unit": "iter/sec",
            "range": "stddev: 0.00004789352326203982",
            "extra": "mean: 93.76484733163042 usec\nrounds: 4441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 82.11130540528538,
            "unit": "iter/sec",
            "range": "stddev: 0.0011660857022550016",
            "extra": "mean: 12.178590939021067 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 115.66375621603619,
            "unit": "iter/sec",
            "range": "stddev: 0.00504704471578488",
            "extra": "mean: 8.645750689024874 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 167.72746148158194,
            "unit": "iter/sec",
            "range": "stddev: 0.00006791499177573998",
            "extra": "mean: 5.9620529111138385 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1811.4415231312275,
            "unit": "iter/sec",
            "range": "stddev: 0.00011526891970657267",
            "extra": "mean: 552.0465260570028 usec\nrounds: 1017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1855.4527672826218,
            "unit": "iter/sec",
            "range": "stddev: 0.00011618500609617811",
            "extra": "mean: 538.9520108693127 usec\nrounds: 1564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.19686792514494,
            "unit": "iter/sec",
            "range": "stddev: 0.00009613316313900978",
            "extra": "mean: 7.236054007690358 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7442231740957952,
            "unit": "iter/sec",
            "range": "stddev: 0.013940449544322154",
            "extra": "mean: 1.3436829634000105 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6692210251420182,
            "unit": "iter/sec",
            "range": "stddev: 0.0024754752021550917",
            "extra": "mean: 1.4942746304000025 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7375.532722203485,
            "unit": "iter/sec",
            "range": "stddev: 0.000015767085841447726",
            "extra": "mean: 135.58342667094072 usec\nrounds: 3307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 81.91320690208839,
            "unit": "iter/sec",
            "range": "stddev: 0.0009960396685771062",
            "extra": "mean: 12.208043584416238 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1563050.5029352217,
            "unit": "iter/sec",
            "range": "stddev: 1.519565465264938e-7",
            "extra": "mean: 639.7745934134053 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 23.4509823234166,
            "unit": "iter/sec",
            "range": "stddev: 0.04068839141173562",
            "extra": "mean: 42.64213695651743 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 107.15869249256639,
            "unit": "iter/sec",
            "range": "stddev: 0.00012104064018726001",
            "extra": "mean: 9.331954102270984 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.26430049447792,
            "unit": "iter/sec",
            "range": "stddev: 0.0012199940007104819",
            "extra": "mean: 20.719247761902473 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 217.76195821587908,
            "unit": "iter/sec",
            "range": "stddev: 0.0005735457448686484",
            "extra": "mean: 4.59217031382794 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5049594.151090942,
            "unit": "iter/sec",
            "range": "stddev: 1.3421740702587996e-8",
            "extra": "mean: 198.03571734242422 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 985.6867189713923,
            "unit": "iter/sec",
            "range": "stddev: 0.00022446258870106834",
            "extra": "mean: 1.0145211259856926 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 240.17096066842873,
            "unit": "iter/sec",
            "range": "stddev: 0.00033263071308620824",
            "extra": "mean: 4.163700712262893 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 199.1864206832448,
            "unit": "iter/sec",
            "range": "stddev: 0.0004149994640123776",
            "extra": "mean: 5.020422559780041 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 269.2335596165101,
            "unit": "iter/sec",
            "range": "stddev: 0.00004365678186770408",
            "extra": "mean: 3.714247218750799 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3897.221392382884,
            "unit": "iter/sec",
            "range": "stddev: 0.000026486421716169337",
            "extra": "mean: 256.59306960453904 usec\nrounds: 1724"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1432315.20795006,
            "unit": "iter/sec",
            "range": "stddev: 1.2238944342608917e-7",
            "extra": "mean: 698.1703429870073 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.35162595410501,
            "unit": "iter/sec",
            "range": "stddev: 0.037994955334956566",
            "extra": "mean: 32.9471640666668 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5677832.257549108,
            "unit": "iter/sec",
            "range": "stddev: 1.3118670314730344e-8",
            "extra": "mean: 176.12355466640543 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 229.59640592134176,
            "unit": "iter/sec",
            "range": "stddev: 0.0005845278312976796",
            "extra": "mean: 4.355468875861209 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 82.59149172787586,
            "unit": "iter/sec",
            "range": "stddev: 0.0011590977923567345",
            "extra": "mean: 12.107784701296115 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.11926941297692,
            "unit": "iter/sec",
            "range": "stddev: 0.0010477714138800347",
            "extra": "mean: 11.887882609757092 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1778.9269471510243,
            "unit": "iter/sec",
            "range": "stddev: 0.00013941910205793751",
            "extra": "mean: 562.136630512857 usec\nrounds: 1134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 84.82841290364458,
            "unit": "iter/sec",
            "range": "stddev: 0.00024611029144088706",
            "extra": "mean: 11.788503000001736 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.391152584353486,
            "unit": "iter/sec",
            "range": "stddev: 0.005470308636716929",
            "extra": "mean: 718.8284098000167 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1847.4777528595619,
            "unit": "iter/sec",
            "range": "stddev: 0.00011141601021482832",
            "extra": "mean: 541.278507117166 usec\nrounds: 1124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14204078210585647,
            "unit": "iter/sec",
            "range": "stddev: 0.19245968794363774",
            "extra": "mean: 7.040231581200009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 79.85309036797366,
            "unit": "iter/sec",
            "range": "stddev: 0.0011191680676437474",
            "extra": "mean: 12.52299686075851 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1768.4471014645749,
            "unit": "iter/sec",
            "range": "stddev: 0.00014487204271328394",
            "extra": "mean: 565.4678611375086 usec\nrounds: 1037"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 240.20789538449938,
            "unit": "iter/sec",
            "range": "stddev: 0.00035828112167079525",
            "extra": "mean: 4.163060495573244 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 239.25340558420748,
            "unit": "iter/sec",
            "range": "stddev: 0.0003782216034547815",
            "extra": "mean: 4.179668822511455 msec\nrounds: 231"
          }
        ]
      }
    ]
  }
}