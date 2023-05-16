window.BENCHMARK_DATA = {
  "lastUpdate": 1684243606773,
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
      }
    ]
  }
}