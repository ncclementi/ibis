window.BENCHMARK_DATA = {
  "lastUpdate": 1681122180918,
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
          "id": "b6095714b8cfed2c11092fefd330470075b77f66",
          "message": "docs: refresh environment setup pages",
          "timestamp": "2023-04-10T06:17:59-04:00",
          "tree_id": "30a61fd27e5831d8a65dd70014dbdfd227b54794",
          "url": "https://github.com/ibis-project/ibis/commit/b6095714b8cfed2c11092fefd330470075b77f66"
        },
        "date": 1681122100495,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9199556512342696,
            "unit": "iter/sec",
            "range": "stddev: 0.002418516141434642",
            "extra": "mean: 1.0870089211999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 88.91489834732768,
            "unit": "iter/sec",
            "range": "stddev: 0.0076003567616558625",
            "extra": "mean: 11.246709140842816 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7824217311897282,
            "unit": "iter/sec",
            "range": "stddev: 0.001828746275400841",
            "extra": "mean: 1.2780831105999937 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12790.179999340948,
            "unit": "iter/sec",
            "range": "stddev: 0.000002180576743499145",
            "extra": "mean: 78.1849825453221 usec\nrounds: 4927"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1966215.1954222268,
            "unit": "iter/sec",
            "range": "stddev: 6.608313887028114e-8",
            "extra": "mean: 508.5913293357796 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6164570.151266702,
            "unit": "iter/sec",
            "range": "stddev: 7.593002318463111e-9",
            "extra": "mean: 162.21731206912597 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.45672412591004,
            "unit": "iter/sec",
            "range": "stddev: 0.0009008298831011599",
            "extra": "mean: 9.954535235955175 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.257291846975184,
            "unit": "iter/sec",
            "range": "stddev: 0.00045864299999128465",
            "extra": "mean: 97.49162009998713 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.4109431080881,
            "unit": "iter/sec",
            "range": "stddev: 0.00022229507232620366",
            "extra": "mean: 19.079984840907763 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.1756570991175,
            "unit": "iter/sec",
            "range": "stddev: 0.00002711629913299891",
            "extra": "mean: 5.123589769661503 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.52531285336254,
            "unit": "iter/sec",
            "range": "stddev: 0.012567518664702095",
            "extra": "mean: 12.899012763630873 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.85340921914883,
            "unit": "iter/sec",
            "range": "stddev: 0.000049740084037705636",
            "extra": "mean: 9.103040197915746 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.45428086698956,
            "unit": "iter/sec",
            "range": "stddev: 0.00006712233137742544",
            "extra": "mean: 13.2530585211301 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2182.040672937572,
            "unit": "iter/sec",
            "range": "stddev: 0.00008389890768543505",
            "extra": "mean: 458.28659951317513 usec\nrounds: 412"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17067618311185928,
            "unit": "iter/sec",
            "range": "stddev: 0.04416170570606231",
            "extra": "mean: 5.859048297000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.59143943895698,
            "unit": "iter/sec",
            "range": "stddev: 0.00018871915328883356",
            "extra": "mean: 9.941203800019593 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 167.88116896449824,
            "unit": "iter/sec",
            "range": "stddev: 0.00003989400880302224",
            "extra": "mean: 5.956594215825776 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 509373.3037679723,
            "unit": "iter/sec",
            "range": "stddev: 4.607032712877353e-7",
            "extra": "mean: 1.9631967215453368 usec\nrounds: 2257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.2364571237461,
            "unit": "iter/sec",
            "range": "stddev: 0.00004919599005807829",
            "extra": "mean: 9.686500562503161 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.3886893924523,
            "unit": "iter/sec",
            "range": "stddev: 0.00047518345564917384",
            "extra": "mean: 10.268132842102924 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.73460092574848,
            "unit": "iter/sec",
            "range": "stddev: 0.00012213380141036224",
            "extra": "mean: 6.182968853146611 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73245.33540020838,
            "unit": "iter/sec",
            "range": "stddev: 4.1224867521150223e-7",
            "extra": "mean: 13.652746547422526 usec\nrounds: 14772"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.7617831012817,
            "unit": "iter/sec",
            "range": "stddev: 0.00034173746867113554",
            "extra": "mean: 3.972008728575409 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13866.668745420287,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013394239868419751",
            "extra": "mean: 72.1153738045605 usec\nrounds: 7215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6490127239618708,
            "unit": "iter/sec",
            "range": "stddev: 0.0016616445938310348",
            "extra": "mean: 606.4234590000183 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.87081625993625,
            "unit": "iter/sec",
            "range": "stddev: 0.0006894907820663226",
            "extra": "mean: 10.217550422222784 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.62164461060097,
            "unit": "iter/sec",
            "range": "stddev: 0.0005118704457107123",
            "extra": "mean: 15.474691274507633 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.496610443127535,
            "unit": "iter/sec",
            "range": "stddev: 0.001498096580736193",
            "extra": "mean: 400.5430654000179 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.40444287630773,
            "unit": "iter/sec",
            "range": "stddev: 0.0007361384589868463",
            "extra": "mean: 10.372965914891036 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2153.4821601413873,
            "unit": "iter/sec",
            "range": "stddev: 0.00008853691555748126",
            "extra": "mean: 464.36419047666726 usec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.82500231608157,
            "unit": "iter/sec",
            "range": "stddev: 0.0007351940810141883",
            "extra": "mean: 9.91817482795634 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2161.8759588778876,
            "unit": "iter/sec",
            "range": "stddev: 0.00008862373497832941",
            "extra": "mean: 462.56122877606987 usec\nrounds: 1814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7933.4271487347205,
            "unit": "iter/sec",
            "range": "stddev: 0.00001601987243900139",
            "extra": "mean: 126.04892958013576 usec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 285.08144682620474,
            "unit": "iter/sec",
            "range": "stddev: 0.00027533813383539754",
            "extra": "mean: 3.5077694852925094 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.6643260391343,
            "unit": "iter/sec",
            "range": "stddev: 0.000060201502307381895",
            "extra": "mean: 3.4522718543701436 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 88.91809482054079,
            "unit": "iter/sec",
            "range": "stddev: 0.012610431656965815",
            "extra": "mean: 11.24630483838248 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 739215.2745404426,
            "unit": "iter/sec",
            "range": "stddev: 1.5901916296941228e-7",
            "extra": "mean: 1.3527858993737416 usec\nrounds: 25063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.569732540931476,
            "unit": "iter/sec",
            "range": "stddev: 0.00046352883824225826",
            "extra": "mean: 21.944390371433137 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1767.7654888887962,
            "unit": "iter/sec",
            "range": "stddev: 0.000026717312862126568",
            "extra": "mean: 565.6858934544493 usec\nrounds: 1314"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11419695.53207904,
            "unit": "iter/sec",
            "range": "stddev: 3.0046140266312155e-9",
            "extra": "mean: 87.56800890106697 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.28428937683821,
            "unit": "iter/sec",
            "range": "stddev: 0.0006738123340975619",
            "extra": "mean: 38.04554065217388 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.26573420181641,
            "unit": "iter/sec",
            "range": "stddev: 0.0001564708678553013",
            "extra": "mean: 8.987492934582864 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.50183512496203,
            "unit": "iter/sec",
            "range": "stddev: 0.0007530156853826252",
            "extra": "mean: 10.471002978021545 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.68694366341758,
            "unit": "iter/sec",
            "range": "stddev: 0.014359089443690643",
            "extra": "mean: 11.670389411110843 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2202.387857522485,
            "unit": "iter/sec",
            "range": "stddev: 0.00009114102104987983",
            "extra": "mean: 454.0526304594334 usec\nrounds: 1694"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.34376475238889,
            "unit": "iter/sec",
            "range": "stddev: 0.0007999677594691751",
            "extra": "mean: 9.965741294116564 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.4529049169675,
            "unit": "iter/sec",
            "range": "stddev: 0.0006755127192647748",
            "extra": "mean: 10.367754095751296 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.41708069069385,
            "unit": "iter/sec",
            "range": "stddev: 0.0007805876287640218",
            "extra": "mean: 9.958465164708528 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 74.3905024951148,
            "unit": "iter/sec",
            "range": "stddev: 0.023874370736567518",
            "extra": "mean: 13.442576222222316 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 283.6651498938644,
            "unit": "iter/sec",
            "range": "stddev: 0.0002554486237397687",
            "extra": "mean: 3.525283244607799 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.560411802986224,
            "unit": "iter/sec",
            "range": "stddev: 0.00048545144812922673",
            "extra": "mean: 179.84279499999425 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.6792130655434,
            "unit": "iter/sec",
            "range": "stddev: 0.00022470171656955364",
            "extra": "mean: 3.6944100312492623 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1965727.0780253843,
            "unit": "iter/sec",
            "range": "stddev: 8.777086096631245e-8",
            "extra": "mean: 508.71761964256086 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.13773187771665,
            "unit": "iter/sec",
            "range": "stddev: 0.0003119559295310986",
            "extra": "mean: 3.6083141520449367 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.738399566094984,
            "unit": "iter/sec",
            "range": "stddev: 0.00011950527593779745",
            "extra": "mean: 16.46404921999647 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2180.457773225963,
            "unit": "iter/sec",
            "range": "stddev: 0.00008925120935279892",
            "extra": "mean: 458.6192919115838 usec\nrounds: 1360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 172.4531648318323,
            "unit": "iter/sec",
            "range": "stddev: 0.003367495023807775",
            "extra": "mean: 5.79867583743766 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.11442241915424,
            "unit": "iter/sec",
            "range": "stddev: 0.00006596425561470762",
            "extra": "mean: 6.1306657324899545 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2105.9154582829347,
            "unit": "iter/sec",
            "range": "stddev: 0.00008796166059281483",
            "extra": "mean: 474.8528703119703 usec\nrounds: 1280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 269.0973999389542,
            "unit": "iter/sec",
            "range": "stddev: 0.0003404507231350324",
            "extra": "mean: 3.71612657806004 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 533.8126977945983,
            "unit": "iter/sec",
            "range": "stddev: 0.000057780795002335284",
            "extra": "mean: 1.873316247686529 msec\nrounds: 432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2115.5220514015996,
            "unit": "iter/sec",
            "range": "stddev: 0.00008714844244507985",
            "extra": "mean: 472.6965617481835 usec\nrounds: 1328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1853750.0411212423,
            "unit": "iter/sec",
            "range": "stddev: 8.940282032966793e-8",
            "extra": "mean: 539.4470547901642 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2149.512277726979,
            "unit": "iter/sec",
            "range": "stddev: 0.0000922891195568276",
            "extra": "mean: 465.2218135071361 usec\nrounds: 1303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7047461.2654150175,
            "unit": "iter/sec",
            "range": "stddev: 3.3359601779523277e-9",
            "extra": "mean: 141.89506864086638 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.08474044867849,
            "unit": "iter/sec",
            "range": "stddev: 0.00015728097172374207",
            "extra": "mean: 10.407479848833306 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 277.44718496797765,
            "unit": "iter/sec",
            "range": "stddev: 0.0002514347648525725",
            "extra": "mean: 3.6042895880000287 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1179.0403369682647,
            "unit": "iter/sec",
            "range": "stddev: 0.00001167038699408926",
            "extra": "mean: 848.1474031425919 usec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147029.11888375928,
            "unit": "iter/sec",
            "range": "stddev: 3.32891340584377e-7",
            "extra": "mean: 6.8013738203151215 usec\nrounds: 42919"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 87.5745461959423,
            "unit": "iter/sec",
            "range": "stddev: 0.014732240547104048",
            "extra": "mean: 11.41884307070876 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 675.7594850562974,
            "unit": "iter/sec",
            "range": "stddev: 0.00004259312068635681",
            "extra": "mean: 1.479816446700249 msec\nrounds: 591"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5597738.502454383,
            "unit": "iter/sec",
            "range": "stddev: 8.091620386812885e-9",
            "extra": "mean: 178.6435717856096 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.77233583355937,
            "unit": "iter/sec",
            "range": "stddev: 0.0003235500614976367",
            "extra": "mean: 7.311420060975761 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.89701576936143,
            "unit": "iter/sec",
            "range": "stddev: 0.00005510371710510345",
            "extra": "mean: 8.340491158876207 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12099.221422609655,
            "unit": "iter/sec",
            "range": "stddev: 0.000013030772661872618",
            "extra": "mean: 82.64994622970642 usec\nrounds: 6658"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.479094495720695,
            "unit": "iter/sec",
            "range": "stddev: 0.02501105213402156",
            "extra": "mean: 26.681541095241204 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6645111275973974,
            "unit": "iter/sec",
            "range": "stddev: 0.06771813082885102",
            "extra": "mean: 1.5048656952000101 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9063719511110961,
            "unit": "iter/sec",
            "range": "stddev: 0.0065179310488894865",
            "extra": "mean: 1.1032998083999928 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 96.34613392615938,
            "unit": "iter/sec",
            "range": "stddev: 0.0006832769855791929",
            "extra": "mean: 10.379243662920713 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.6361923151469,
            "unit": "iter/sec",
            "range": "stddev: 0.00028042263034551364",
            "extra": "mean: 20.560820088881986 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 295.98181482896473,
            "unit": "iter/sec",
            "range": "stddev: 0.00002156966854265341",
            "extra": "mean: 3.3785859464976165 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 283.1980066939158,
            "unit": "iter/sec",
            "range": "stddev: 0.00022467864347095807",
            "extra": "mean: 3.53109829999903 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 743.6352377262516,
            "unit": "iter/sec",
            "range": "stddev: 0.000011587366966567067",
            "extra": "mean: 1.3447453123087774 msec\nrounds: 650"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2735776.847406156,
            "unit": "iter/sec",
            "range": "stddev: 1.4972512093621e-8",
            "extra": "mean: 365.5268889882176 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4584.86436950581,
            "unit": "iter/sec",
            "range": "stddev: 0.00002208431715750975",
            "extra": "mean: 218.10896013654323 usec\nrounds: 2032"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.405691540878985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000710903277008932",
            "extra": "mean: 64.91107506251836 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.8460664575799,
            "unit": "iter/sec",
            "range": "stddev: 0.000759715741937322",
            "extra": "mean: 22.80706299999517 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 242.23866005547725,
            "unit": "iter/sec",
            "range": "stddev: 0.004207650455897265",
            "extra": "mean: 4.128160219227521 msec\nrounds: 260"
          }
        ]
      }
    ]
  }
}