window.BENCHMARK_DATA = {
  "lastUpdate": 1682074450073,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
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
          "id": "1d872923ba08be8495b7c6a1e4c534021877c9e1",
          "message": "docs(generic): add docstring examples in types/generic",
          "timestamp": "2023-04-21T06:49:01-04:00",
          "tree_id": "d95b590784846119f4b14d54bcdd805b28570f97",
          "url": "https://github.com/ibis-project/ibis/commit/1d872923ba08be8495b7c6a1e4c534021877c9e1"
        },
        "date": 1682074362854,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.287950071728105,
            "unit": "iter/sec",
            "range": "stddev: 0.0002272850763589387",
            "extra": "mean: 20.70910027273006 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9322196261575548,
            "unit": "iter/sec",
            "range": "stddev: 0.0029426884024069335",
            "extra": "mean: 1.0727085891999764 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.25053251583981,
            "unit": "iter/sec",
            "range": "stddev: 0.0007232069031291933",
            "extra": "mean: 9.876491265303304 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7916.824109184908,
            "unit": "iter/sec",
            "range": "stddev: 0.0000157078368082145",
            "extra": "mean: 126.3132774214125 usec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1753.1056665504025,
            "unit": "iter/sec",
            "range": "stddev: 0.00002403229686590136",
            "extra": "mean: 570.4162727211454 usec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 693.9428765145205,
            "unit": "iter/sec",
            "range": "stddev: 0.00001837716783166031",
            "extra": "mean: 1.441040802987586 msec\nrounds: 335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 548.2564035594436,
            "unit": "iter/sec",
            "range": "stddev: 0.00004917985741323556",
            "extra": "mean: 1.823964104217849 msec\nrounds: 403"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1197.3621616093885,
            "unit": "iter/sec",
            "range": "stddev: 0.00001882007628026443",
            "extra": "mean: 835.1692011512109 usec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 89.48876081516005,
            "unit": "iter/sec",
            "range": "stddev: 0.008559491928774992",
            "extra": "mean: 11.174587634144473 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1577334.5295762706,
            "unit": "iter/sec",
            "range": "stddev: 1.116128015413139e-7",
            "extra": "mean: 633.9809224037188 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.069352778544854,
            "unit": "iter/sec",
            "range": "stddev: 0.015134804100710927",
            "extra": "mean: 24.95672953658114 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2311.0618590448785,
            "unit": "iter/sec",
            "range": "stddev: 0.00008519254005790074",
            "extra": "mean: 432.70152899035014 usec\nrounds: 1397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.935558977616074,
            "unit": "iter/sec",
            "range": "stddev: 0.00037913306078784956",
            "extra": "mean: 168.47612900000777 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.3598209851916,
            "unit": "iter/sec",
            "range": "stddev: 0.00007602319284140318",
            "extra": "mean: 6.235976031005578 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 371.2176901902888,
            "unit": "iter/sec",
            "range": "stddev: 0.00004010204298431364",
            "extra": "mean: 2.6938371376843406 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 247.664201833439,
            "unit": "iter/sec",
            "range": "stddev: 0.0039555183385284205",
            "extra": "mean: 4.037725244896425 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 269.35848687339166,
            "unit": "iter/sec",
            "range": "stddev: 0.00029468505156163494",
            "extra": "mean: 3.712524567566481 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.47192990568743,
            "unit": "iter/sec",
            "range": "stddev: 0.0001631506391562681",
            "extra": "mean: 17.10222326529934 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2395.1459777766568,
            "unit": "iter/sec",
            "range": "stddev: 0.00008582024691344695",
            "extra": "mean: 417.51108670556704 usec\nrounds: 519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1806943.9439788796,
            "unit": "iter/sec",
            "range": "stddev: 9.465954117452105e-8",
            "extra": "mean: 553.4205990906426 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.1594546167254,
            "unit": "iter/sec",
            "range": "stddev: 0.00030391995227241976",
            "extra": "mean: 3.5950602555569984 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 245.59463651309076,
            "unit": "iter/sec",
            "range": "stddev: 0.006354535695695962",
            "extra": "mean: 4.071750157893606 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.02215799242222,
            "unit": "iter/sec",
            "range": "stddev: 0.000052940922994792085",
            "extra": "mean: 5.180752357142637 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7218062.020262796,
            "unit": "iter/sec",
            "range": "stddev: 4.173945816558911e-9",
            "extra": "mean: 138.5413421487554 nsec\nrounds: 59524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 483874.57260489464,
            "unit": "iter/sec",
            "range": "stddev: 2.6315958407424456e-7",
            "extra": "mean: 2.0666512700111337 usec\nrounds: 1970"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.54549439544371,
            "unit": "iter/sec",
            "range": "stddev: 0.0008190951512379041",
            "extra": "mean: 9.945746510201811 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.65894454457181,
            "unit": "iter/sec",
            "range": "stddev: 0.00005633519628890735",
            "extra": "mean: 10.13592842104877 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.18277379485696,
            "unit": "iter/sec",
            "range": "stddev: 0.0008294948534030714",
            "extra": "mean: 10.506102734043596 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 743.5491698537639,
            "unit": "iter/sec",
            "range": "stddev: 0.000014944384802049762",
            "extra": "mean: 1.3449009702971937 msec\nrounds: 606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2285.253976674653,
            "unit": "iter/sec",
            "range": "stddev: 0.00009300235582095277",
            "extra": "mean: 437.5881237739414 usec\nrounds: 1325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.943085726288686,
            "unit": "iter/sec",
            "range": "stddev: 0.0008287841499144613",
            "extra": "mean: 22.25036362857184 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.04499712269755,
            "unit": "iter/sec",
            "range": "stddev: 0.0005997197973102452",
            "extra": "mean: 10.521332319144145 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2391.3776519796284,
            "unit": "iter/sec",
            "range": "stddev: 0.00008786954549229857",
            "extra": "mean: 418.16899943519195 usec\nrounds: 1770"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2353.1027201392294,
            "unit": "iter/sec",
            "range": "stddev: 0.00007984149191326996",
            "extra": "mean: 424.9708231780173 usec\nrounds: 1674"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2358.4252410893378,
            "unit": "iter/sec",
            "range": "stddev: 0.00008702308852651011",
            "extra": "mean: 424.011744183211 usec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.05739439960576,
            "unit": "iter/sec",
            "range": "stddev: 0.0006113722472327199",
            "extra": "mean: 10.303182010870692 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.69508873410564,
            "unit": "iter/sec",
            "range": "stddev: 0.000770437052582615",
            "extra": "mean: 9.833316558822455 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 131205.3422832016,
            "unit": "iter/sec",
            "range": "stddev: 4.144881807213041e-7",
            "extra": "mean: 7.621640876798591 usec\nrounds: 36901"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4733.844044274077,
            "unit": "iter/sec",
            "range": "stddev: 0.00004658003194153801",
            "extra": "mean: 211.24481302031307 usec\nrounds: 2043"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.4707076743447,
            "unit": "iter/sec",
            "range": "stddev: 0.00025805607809658145",
            "extra": "mean: 3.6566987685965384 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.26706706327383,
            "unit": "iter/sec",
            "range": "stddev: 0.00007402217182370429",
            "extra": "mean: 8.455439242988854 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.84233982404425,
            "unit": "iter/sec",
            "range": "stddev: 0.0007799144993963129",
            "extra": "mean: 10.433802031919166 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 94.51992315987883,
            "unit": "iter/sec",
            "range": "stddev: 0.0007730860587882711",
            "extra": "mean: 10.57978007777807 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 112.34714098151811,
            "unit": "iter/sec",
            "range": "stddev: 0.00024035941800369375",
            "extra": "mean: 8.900983071429534 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5287377951556342,
            "unit": "iter/sec",
            "range": "stddev: 0.002200333055668032",
            "extra": "mean: 395.45420720002085 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.388394240294296,
            "unit": "iter/sec",
            "range": "stddev: 0.024879106505322927",
            "extra": "mean: 27.48128959459994 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 715399.0944657419,
            "unit": "iter/sec",
            "range": "stddev: 8.893817630025749e-7",
            "extra": "mean: 1.3978211710580892 usec\nrounds: 22625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 98.42226883094396,
            "unit": "iter/sec",
            "range": "stddev: 0.0008105165034468951",
            "extra": "mean: 10.160302255556214 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 274.4417485924734,
            "unit": "iter/sec",
            "range": "stddev: 0.0003168103906097638",
            "extra": "mean: 3.643760488805693 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9784.235068502396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017729069909172547",
            "extra": "mean: 102.20523045477718 usec\nrounds: 4656"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.78292073709758,
            "unit": "iter/sec",
            "range": "stddev: 0.000364572219535197",
            "extra": "mean: 15.4361672586237 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 95.00605990212145,
            "unit": "iter/sec",
            "range": "stddev: 0.0007374451370192874",
            "extra": "mean: 10.525644375003392 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.18566430113225,
            "unit": "iter/sec",
            "range": "stddev: 0.00025272506924751476",
            "extra": "mean: 3.5947215415008356 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.18732525173796,
            "unit": "iter/sec",
            "range": "stddev: 0.000739809015642198",
            "extra": "mean: 10.28940756842279 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1972.0152491370106,
            "unit": "iter/sec",
            "range": "stddev: 0.003951969491603601",
            "extra": "mean: 507.0954701986295 usec\nrounds: 1812"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6358629.75382646,
            "unit": "iter/sec",
            "range": "stddev: 8.545224595958417e-9",
            "extra": "mean: 157.26658709757012 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.022738396808577,
            "unit": "iter/sec",
            "range": "stddev: 0.0012500050265080373",
            "extra": "mean: 62.411304187502736 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2343.075239683678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000812466558167483",
            "extra": "mean: 426.7895384080807 usec\nrounds: 1471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1734725.3288006582,
            "unit": "iter/sec",
            "range": "stddev: 1.0210351517220208e-7",
            "extra": "mean: 576.4601365977476 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.05203708920837,
            "unit": "iter/sec",
            "range": "stddev: 0.0007129563312462513",
            "extra": "mean: 10.095703525000488 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5780051.482646591,
            "unit": "iter/sec",
            "range": "stddev: 9.221468790017496e-9",
            "extra": "mean: 173.00883962788333 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 263.59522903811245,
            "unit": "iter/sec",
            "range": "stddev: 0.0003742632771475621",
            "extra": "mean: 3.793695370167011 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 163.00793005702363,
            "unit": "iter/sec",
            "range": "stddev: 0.004999023964295637",
            "extra": "mean: 6.1346708693876355 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.705541813873886,
            "unit": "iter/sec",
            "range": "stddev: 0.00016623399729115613",
            "extra": "mean: 18.279683681816486 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 103.18338206824389,
            "unit": "iter/sec",
            "range": "stddev: 0.00017436439662799912",
            "extra": "mean: 9.691483065932221 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 105.56843052839695,
            "unit": "iter/sec",
            "range": "stddev: 0.00016710149936701766",
            "extra": "mean: 9.472528813725322 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.789182525618614,
            "unit": "iter/sec",
            "range": "stddev: 0.0013894365523944036",
            "extra": "mean: 1.2671339867999905 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.89388058773162,
            "unit": "iter/sec",
            "range": "stddev: 0.000041447496808902026",
            "extra": "mean: 6.333367678833908 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7114858193868074,
            "unit": "iter/sec",
            "range": "stddev: 0.06824928843857686",
            "extra": "mean: 1.4055093899999975 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13789.8287916899,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017947020736410489",
            "extra": "mean: 72.5172165010943 usec\nrounds: 6836"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.5935815407409,
            "unit": "iter/sec",
            "range": "stddev: 0.00007942116285480334",
            "extra": "mean: 13.05592426785905 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.93145152904475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000348819162030261",
            "extra": "mean: 7.411170551179792 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12590525.102335282,
            "unit": "iter/sec",
            "range": "stddev: 3.3276250937409478e-9",
            "extra": "mean: 79.42480491250514 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17937812561007027,
            "unit": "iter/sec",
            "range": "stddev: 0.06124074983933945",
            "extra": "mean: 5.5748157507999965 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9281705904776774,
            "unit": "iter/sec",
            "range": "stddev: 0.005020523735652236",
            "extra": "mean: 1.0773881549999942 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11997.802263899108,
            "unit": "iter/sec",
            "range": "stddev: 0.000011240518262158794",
            "extra": "mean: 83.34859818526587 usec\nrounds: 4517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.40632697541282,
            "unit": "iter/sec",
            "range": "stddev: 0.00005633668757882429",
            "extra": "mean: 8.976150880736768 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.75640697588372,
            "unit": "iter/sec",
            "range": "stddev: 0.00006293706195574512",
            "extra": "mean: 6.106631297468985 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.106106867844883,
            "unit": "iter/sec",
            "range": "stddev: 0.0003848218512160039",
            "extra": "mean: 36.89205553846128 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 67464.5361911258,
            "unit": "iter/sec",
            "range": "stddev: 5.275769331874406e-7",
            "extra": "mean: 14.822602458379292 usec\nrounds: 12937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 102.08945487901906,
            "unit": "iter/sec",
            "range": "stddev: 0.0007401396354637884",
            "extra": "mean: 9.79533097894438 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.75272715085892,
            "unit": "iter/sec",
            "range": "stddev: 0.0007915104021681373",
            "extra": "mean: 9.925289650003037 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 257.3021236061686,
            "unit": "iter/sec",
            "range": "stddev: 0.00022426483200281173",
            "extra": "mean: 3.8864817203398547 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.2510578547251,
            "unit": "iter/sec",
            "range": "stddev: 0.0006557428556754019",
            "extra": "mean: 11.331308930553044 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.440136415007446,
            "unit": "iter/sec",
            "range": "stddev: 0.0003540525402768271",
            "extra": "mean: 87.41154508334148 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 307.86458910293453,
            "unit": "iter/sec",
            "range": "stddev: 0.000042219752408904654",
            "extra": "mean: 3.248181295919194 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6425775075524967,
            "unit": "iter/sec",
            "range": "stddev: 0.0020252827138507036",
            "extra": "mean: 608.7992776000192 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1764100.186255646,
            "unit": "iter/sec",
            "range": "stddev: 1.5047331821830772e-7",
            "extra": "mean: 566.8612291927303 nsec\nrounds: 151516"
          }
        ]
      }
    ]
  }
}