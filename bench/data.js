window.BENCHMARK_DATA = {
  "lastUpdate": 1679831758689,
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
          "id": "315b5e73b264c0f47a4c2be229386b790763de58",
          "message": "fix(trino): only support `how='first'` with `arbitrary` reduction",
          "timestamp": "2023-03-26T07:50:59-04:00",
          "tree_id": "a987cd5863a6ed9f91b4eb78aba17361fae88d84",
          "url": "https://github.com/ibis-project/ibis/commit/315b5e73b264c0f47a4c2be229386b790763de58"
        },
        "date": 1679831674943,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 355.63714918377275,
            "unit": "iter/sec",
            "range": "stddev: 0.00006917198258066336",
            "extra": "mean: 2.811854729729761 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3396.0852679075874,
            "unit": "iter/sec",
            "range": "stddev: 0.002326709923183096",
            "extra": "mean: 294.4566820656199 usec\nrounds: 368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 315.50063816757984,
            "unit": "iter/sec",
            "range": "stddev: 0.00018354241903850517",
            "extra": "mean: 3.169565696627354 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 277.2988307035822,
            "unit": "iter/sec",
            "range": "stddev: 0.00431473827523646",
            "extra": "mean: 3.606217875000515 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 728385.3748079842,
            "unit": "iter/sec",
            "range": "stddev: 2.432056615719376e-7",
            "extra": "mean: 1.3728996141137764 usec\nrounds: 24097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1896813.9113558296,
            "unit": "iter/sec",
            "range": "stddev: 8.291846873373968e-8",
            "extra": "mean: 527.1998449680322 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.28265993842314,
            "unit": "iter/sec",
            "range": "stddev: 0.00015587072299550505",
            "extra": "mean: 3.319142230768881 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.65295806061636,
            "unit": "iter/sec",
            "range": "stddev: 0.0005440414886915755",
            "extra": "mean: 8.288234421054122 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1710640.6166050597,
            "unit": "iter/sec",
            "range": "stddev: 1.4839343260840574e-7",
            "extra": "mean: 584.5763220474688 nsec\nrounds: 166695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 311.39167563988866,
            "unit": "iter/sec",
            "range": "stddev: 0.0002472410394452227",
            "extra": "mean: 3.211389636364133 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1738.8795175768244,
            "unit": "iter/sec",
            "range": "stddev: 0.00001540340022332639",
            "extra": "mean: 575.0829714720702 usec\nrounds: 1332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.80529828807776,
            "unit": "iter/sec",
            "range": "stddev: 0.0005227075257759355",
            "extra": "mean: 9.541502350876437 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5662.601510103055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000437952841578079",
            "extra": "mean: 176.59727568959744 usec\nrounds: 399"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.82917826381171,
            "unit": "iter/sec",
            "range": "stddev: 0.0005316066957956571",
            "extra": "mean: 9.449189877551472 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.59840537911428,
            "unit": "iter/sec",
            "range": "stddev: 0.00006223734678226856",
            "extra": "mean: 10.040321390624385 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 249.1488457480079,
            "unit": "iter/sec",
            "range": "stddev: 0.003944659197112134",
            "extra": "mean: 4.013664992096379 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.59508647890944,
            "unit": "iter/sec",
            "range": "stddev: 0.000559415486900418",
            "extra": "mean: 8.361547530435958 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.04764164892558,
            "unit": "iter/sec",
            "range": "stddev: 0.0006062152252826271",
            "extra": "mean: 9.429724079207109 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7090856.042696874,
            "unit": "iter/sec",
            "range": "stddev: 5.06589839893071e-9",
            "extra": "mean: 141.02669606867818 nsec\nrounds: 67568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5781.212979969315,
            "unit": "iter/sec",
            "range": "stddev: 0.00007544022963393769",
            "extra": "mean: 172.97408060640376 usec\nrounds: 2506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5714.53347797806,
            "unit": "iter/sec",
            "range": "stddev: 0.000040626283583916285",
            "extra": "mean: 174.9924125659028 usec\nrounds: 2276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5387.49478136054,
            "unit": "iter/sec",
            "range": "stddev: 0.00004332152420477749",
            "extra": "mean: 185.61502898522778 usec\nrounds: 3243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11861.879522801193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022906974409299456",
            "extra": "mean: 84.30367194994483 usec\nrounds: 2713"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.23284272649268,
            "unit": "iter/sec",
            "range": "stddev: 0.0005713277084285888",
            "extra": "mean: 8.831360018183432 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7875.070707250179,
            "unit": "iter/sec",
            "range": "stddev: 0.00001468765555647937",
            "extra": "mean: 126.98298684218172 usec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.70051023935834,
            "unit": "iter/sec",
            "range": "stddev: 0.0005216412694748404",
            "extra": "mean: 9.372026410714694 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11906636.82896458,
            "unit": "iter/sec",
            "range": "stddev: 3.391685651227099e-9",
            "extra": "mean: 83.9867726179618 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.63259437703528,
            "unit": "iter/sec",
            "range": "stddev: 0.0005523499384960024",
            "extra": "mean: 9.839363111111904 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68108.3841157119,
            "unit": "iter/sec",
            "range": "stddev: 4.684386992921626e-7",
            "extra": "mean: 14.682480181897464 usec\nrounds: 13624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.03854707486483,
            "unit": "iter/sec",
            "range": "stddev: 0.00045036169243676145",
            "extra": "mean: 21.25916003333259 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139087.90838882455,
            "unit": "iter/sec",
            "range": "stddev: 3.1179341600055827e-7",
            "extra": "mean: 7.18969759186017 usec\nrounds: 43104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5496.941518037844,
            "unit": "iter/sec",
            "range": "stddev: 0.00004495458021355463",
            "extra": "mean: 181.91934491545294 usec\nrounds: 2360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 92.74175867226643,
            "unit": "iter/sec",
            "range": "stddev: 0.01027765793475486",
            "extra": "mean: 10.782629252630732 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.91162243604,
            "unit": "iter/sec",
            "range": "stddev: 0.00009520840982533818",
            "extra": "mean: 6.582774800006064 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5807413.277780346,
            "unit": "iter/sec",
            "range": "stddev: 9.41829523484206e-9",
            "extra": "mean: 172.1937034899288 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5533.233342215066,
            "unit": "iter/sec",
            "range": "stddev: 0.00006032208082479437",
            "extra": "mean: 180.72615741155056 usec\nrounds: 2395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.207947541262254,
            "unit": "iter/sec",
            "range": "stddev: 0.00026580226629623955",
            "extra": "mean: 35.451001833338346 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.73562881405641,
            "unit": "iter/sec",
            "range": "stddev: 0.00007989956596814297",
            "extra": "mean: 10.668302038957911 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.30464739357408,
            "unit": "iter/sec",
            "range": "stddev: 0.0001984721367903035",
            "extra": "mean: 20.282063717391697 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.52244382311068,
            "unit": "iter/sec",
            "range": "stddev: 0.00008575770573484266",
            "extra": "mean: 6.308255007195466 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9243079529259083,
            "unit": "iter/sec",
            "range": "stddev: 0.002519779649527434",
            "extra": "mean: 1.081890507199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 680.4730152646837,
            "unit": "iter/sec",
            "range": "stddev: 0.000021706802939310582",
            "extra": "mean: 1.4695659894919268 msec\nrounds: 571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.1255479394853,
            "unit": "iter/sec",
            "range": "stddev: 0.00031900449090600086",
            "extra": "mean: 7.239790284402083 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 496770.04752361565,
            "unit": "iter/sec",
            "range": "stddev: 2.022998999868366e-7",
            "extra": "mean: 2.0130038133035013 usec\nrounds: 2098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.6495833063404,
            "unit": "iter/sec",
            "range": "stddev: 0.00017760353388315264",
            "extra": "mean: 3.219061134274472 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13539.477579174125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016991955750716106",
            "extra": "mean: 73.85809342733869 usec\nrounds: 7364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.6579037270935,
            "unit": "iter/sec",
            "range": "stddev: 0.00003899615446028122",
            "extra": "mean: 1.8599187198177671 msec\nrounds: 439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.94834643063956,
            "unit": "iter/sec",
            "range": "stddev: 0.00024359172618097688",
            "extra": "mean: 3.5094079770117705 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.596896500722135,
            "unit": "iter/sec",
            "range": "stddev: 0.0009031611825528352",
            "extra": "mean: 385.07503080000447 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9199162270119087,
            "unit": "iter/sec",
            "range": "stddev: 0.0035083711589264485",
            "extra": "mean: 1.0870555063999916 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18229904073502462,
            "unit": "iter/sec",
            "range": "stddev: 0.11692143249489843",
            "extra": "mean: 5.4854923863999945 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.489491964618129,
            "unit": "iter/sec",
            "range": "stddev: 0.00026446577536758586",
            "extra": "mean: 182.16621983334372 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.24997822244805,
            "unit": "iter/sec",
            "range": "stddev: 0.000050843526707617246",
            "extra": "mean: 6.125575089739845 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.37207221117544,
            "unit": "iter/sec",
            "range": "stddev: 0.00002240531680488733",
            "extra": "mean: 5.198259750002876 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.305382510279586,
            "unit": "iter/sec",
            "range": "stddev: 0.00016158396534572656",
            "extra": "mean: 97.03666981817544 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.57663203241936,
            "unit": "iter/sec",
            "range": "stddev: 0.00006506150832300079",
            "extra": "mean: 64.19873037500778 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7932268051144908,
            "unit": "iter/sec",
            "range": "stddev: 0.0006841815482637458",
            "extra": "mean: 557.6539438000168 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5669.832608044622,
            "unit": "iter/sec",
            "range": "stddev: 0.000019211136312921552",
            "extra": "mean: 176.3720499580805 usec\nrounds: 2402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2545437.3132213578,
            "unit": "iter/sec",
            "range": "stddev: 1.5492611579895478e-8",
            "extra": "mean: 392.8598024416425 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.1534169790556,
            "unit": "iter/sec",
            "range": "stddev: 0.00018367601539856894",
            "extra": "mean: 13.669901438593195 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 295.44488882947405,
            "unit": "iter/sec",
            "range": "stddev: 0.00003827248470913925",
            "extra": "mean: 3.3847260108709603 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11699.248849390931,
            "unit": "iter/sec",
            "range": "stddev: 0.000011377545071688007",
            "extra": "mean: 85.47557307938284 usec\nrounds: 5453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2536370.4779047766,
            "unit": "iter/sec",
            "range": "stddev: 1.6123953374936875e-8",
            "extra": "mean: 394.26416949387317 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.03876448621665,
            "unit": "iter/sec",
            "range": "stddev: 0.0005391306036324674",
            "extra": "mean: 8.261815991304799 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 324.349263160367,
            "unit": "iter/sec",
            "range": "stddev: 0.00002458534347084677",
            "extra": "mean: 3.083096259434303 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.99522168136132,
            "unit": "iter/sec",
            "range": "stddev: 0.0007594570913587646",
            "extra": "mean: 22.729741135129963 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6562017651264216,
            "unit": "iter/sec",
            "range": "stddev: 0.05855033475417291",
            "extra": "mean: 1.5239215331999958 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 111.16451092088685,
            "unit": "iter/sec",
            "range": "stddev: 0.00008865960766266997",
            "extra": "mean: 8.99567669318202 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.67933407110468,
            "unit": "iter/sec",
            "range": "stddev: 0.000545460492479733",
            "extra": "mean: 22.38171227907192 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1166.132645645634,
            "unit": "iter/sec",
            "range": "stddev: 0.00003344373001866137",
            "extra": "mean: 857.5353787873299 usec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8594572180275578,
            "unit": "iter/sec",
            "range": "stddev: 0.0027666206079309187",
            "extra": "mean: 1.163525046999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6431477.921977029,
            "unit": "iter/sec",
            "range": "stddev: 8.472428103054605e-9",
            "extra": "mean: 155.48525737496448 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.69661971875499,
            "unit": "iter/sec",
            "range": "stddev: 0.0005361691738262893",
            "extra": "mean: 9.73741884337187 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.03421261524754,
            "unit": "iter/sec",
            "range": "stddev: 0.0005488134134171546",
            "extra": "mean: 8.330958134455853 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.0266214205302,
            "unit": "iter/sec",
            "range": "stddev: 0.0005855712388806232",
            "extra": "mean: 8.33148503361066 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5803.712630501389,
            "unit": "iter/sec",
            "range": "stddev: 0.00005060247304214358",
            "extra": "mean: 172.3035001327433 usec\nrounds: 3763"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 309.03457328076377,
            "unit": "iter/sec",
            "range": "stddev: 0.00018210889336528317",
            "extra": "mean: 3.2358838992797128 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 736.5114547390447,
            "unit": "iter/sec",
            "range": "stddev: 0.000012324481956059586",
            "extra": "mean: 1.357752134831783 msec\nrounds: 623"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.10110874538633,
            "unit": "iter/sec",
            "range": "stddev: 0.00019483604508760367",
            "extra": "mean: 13.679683074069839 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.68945966411535,
            "unit": "iter/sec",
            "range": "stddev: 0.0005220892939438986",
            "extra": "mean: 8.7191970642171 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.90667731150443,
            "unit": "iter/sec",
            "range": "stddev: 0.00016635065218531222",
            "extra": "mean: 16.69263001852317 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.14524453805751,
            "unit": "iter/sec",
            "range": "stddev: 0.00012353568764282547",
            "extra": "mean: 8.464157858489813 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 307.684618168184,
            "unit": "iter/sec",
            "range": "stddev: 0.00017849831636846162",
            "extra": "mean: 3.250081222628387 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.558181562603,
            "unit": "iter/sec",
            "range": "stddev: 0.0005915851630789422",
            "extra": "mean: 8.364128551724253 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 70.26448808549885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000764378751990817",
            "extra": "mean: 14.231940305082498 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 179.67649719141713,
            "unit": "iter/sec",
            "range": "stddev: 0.0038378771553275264",
            "extra": "mean: 5.565558187249482 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.8881502218497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000701404649508989",
            "extra": "mean: 9.100162283022616 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.99383083571114,
            "unit": "iter/sec",
            "range": "stddev: 0.0005720028312971963",
            "extra": "mean: 10.753401500005566 msec\nrounds: 80"
          }
        ]
      }
    ]
  }
}