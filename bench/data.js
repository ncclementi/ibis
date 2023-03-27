window.BENCHMARK_DATA = {
  "lastUpdate": 1679928924977,
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
          "id": "7e959fc3f9618bcedabf61a3ad07789cc7c3bcc0",
          "message": "fix(duckdb): use finer grained execution to fix flaky windows `install_extension`",
          "timestamp": "2023-03-27T10:47:25-04:00",
          "tree_id": "485c13d1c26cacdabd5337a66055ab1265f0f876",
          "url": "https://github.com/ibis-project/ibis/commit/7e959fc3f9618bcedabf61a3ad07789cc7c3bcc0"
        },
        "date": 1679928839188,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5427.727434651311,
            "unit": "iter/sec",
            "range": "stddev: 0.000047626013904115375",
            "extra": "mean: 184.23917045205164 usec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.74192915020993,
            "unit": "iter/sec",
            "range": "stddev: 0.00008122849591951996",
            "extra": "mean: 6.299532866667808 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13220.561940326686,
            "unit": "iter/sec",
            "range": "stddev: 0.000005485780255681985",
            "extra": "mean: 75.63974999804657 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2449122.750556819,
            "unit": "iter/sec",
            "range": "stddev: 9.571955879166612e-8",
            "extra": "mean: 408.3094650002863 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 748.7452769995336,
            "unit": "iter/sec",
            "range": "stddev: 0.00002972968076098944",
            "extra": "mean: 1.3355676899990954 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 315.20234580916065,
            "unit": "iter/sec",
            "range": "stddev: 0.00019357288018737398",
            "extra": "mean: 3.1725652213434046 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6945581.578483827,
            "unit": "iter/sec",
            "range": "stddev: 1.063351169644321e-8",
            "extra": "mean: 143.97642424896543 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.7470987326669,
            "unit": "iter/sec",
            "range": "stddev: 0.0003729672998008224",
            "extra": "mean: 3.549282333334124 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.77145086161215,
            "unit": "iter/sec",
            "range": "stddev: 0.0006593017291285339",
            "extra": "mean: 8.349235087378483 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.21290478742247,
            "unit": "iter/sec",
            "range": "stddev: 0.00007175909209083641",
            "extra": "mean: 6.126966499998609 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.29490496561515,
            "unit": "iter/sec",
            "range": "stddev: 0.00022479042907708297",
            "extra": "mean: 14.225782088888964 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11562.71534862167,
            "unit": "iter/sec",
            "range": "stddev: 0.00001436764705827191",
            "extra": "mean: 86.4848757276728 usec\nrounds: 5150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 282.8665228933374,
            "unit": "iter/sec",
            "range": "stddev: 0.004876109766315958",
            "extra": "mean: 3.5352363007519187 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.258397382386725,
            "unit": "iter/sec",
            "range": "stddev: 0.00027001255790231433",
            "extra": "mean: 21.160260512192092 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5564.1748118614305,
            "unit": "iter/sec",
            "range": "stddev: 0.00004812278275424361",
            "extra": "mean: 179.72116869301982 usec\nrounds: 658"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12382333.52078798,
            "unit": "iter/sec",
            "range": "stddev: 3.816120546847467e-9",
            "extra": "mean: 80.76022167546994 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.41168811313626,
            "unit": "iter/sec",
            "range": "stddev: 0.000488339964643387",
            "extra": "mean: 8.895872100003999 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.74822419053875,
            "unit": "iter/sec",
            "range": "stddev: 0.0006244883449867169",
            "extra": "mean: 8.35085452631714 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6444767.284576948,
            "unit": "iter/sec",
            "range": "stddev: 9.28292284609384e-9",
            "extra": "mean: 155.16464068386566 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.1424335741112,
            "unit": "iter/sec",
            "range": "stddev: 0.000020172478339183756",
            "extra": "mean: 1.4574233440001763 msec\nrounds: 500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5328.478816633764,
            "unit": "iter/sec",
            "range": "stddev: 0.000045252179209489174",
            "extra": "mean: 187.67082208872216 usec\nrounds: 2327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6647953024595995,
            "unit": "iter/sec",
            "range": "stddev: 0.05171696400680903",
            "extra": "mean: 1.504222421999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.50954077353583,
            "unit": "iter/sec",
            "range": "stddev: 0.00003578663721376841",
            "extra": "mean: 5.16770385585432 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.92075397748161,
            "unit": "iter/sec",
            "range": "stddev: 0.00008258153543280973",
            "extra": "mean: 8.55280150000226 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 251.80589706511674,
            "unit": "iter/sec",
            "range": "stddev: 0.008206964589818865",
            "extra": "mean: 3.971312870966644 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.34079038278536,
            "unit": "iter/sec",
            "range": "stddev: 0.0006276270257504023",
            "extra": "mean: 9.867694895834056 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.31023062249754,
            "unit": "iter/sec",
            "range": "stddev: 0.0006719019712662636",
            "extra": "mean: 8.381510913041824 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 62.077335831618534,
            "unit": "iter/sec",
            "range": "stddev: 0.0181256280604496",
            "extra": "mean: 16.108938739130924 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.41877186727937,
            "unit": "iter/sec",
            "range": "stddev: 0.0006413801992981267",
            "extra": "mean: 8.373892850877652 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 349.4232352137331,
            "unit": "iter/sec",
            "range": "stddev: 0.00003984916275288241",
            "extra": "mean: 2.861858912697451 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.48016686437607,
            "unit": "iter/sec",
            "range": "stddev: 0.0006751066032828588",
            "extra": "mean: 10.813129278481071 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 298.65912573253394,
            "unit": "iter/sec",
            "range": "stddev: 0.00024828856447348726",
            "extra": "mean: 3.34829882578427 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.9078546901754,
            "unit": "iter/sec",
            "range": "stddev: 0.019776897605882596",
            "extra": "mean: 25.70175117500142 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1189.7510897948769,
            "unit": "iter/sec",
            "range": "stddev: 0.000032821761333248563",
            "extra": "mean: 840.511942857231 usec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1881331.9732007084,
            "unit": "iter/sec",
            "range": "stddev: 1.0267583621371446e-7",
            "extra": "mean: 531.5383006533934 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5823483.414129056,
            "unit": "iter/sec",
            "range": "stddev: 1.2190225635032673e-8",
            "extra": "mean: 171.71852804995248 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5522.948828179619,
            "unit": "iter/sec",
            "range": "stddev: 0.0000970829401661858",
            "extra": "mean: 181.0626951489614 usec\nrounds: 2247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.63150196392078,
            "unit": "iter/sec",
            "range": "stddev: 0.0006422897299959285",
            "extra": "mean: 9.937246095745724 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 164.09014703244853,
            "unit": "iter/sec",
            "range": "stddev: 0.00420651446184967",
            "extra": "mean: 6.094211127754379 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.02461986293388,
            "unit": "iter/sec",
            "range": "stddev: 0.000741366347539502",
            "extra": "mean: 38.42515299999718 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.05022147869609,
            "unit": "iter/sec",
            "range": "stddev: 0.0006776465123257073",
            "extra": "mean: 8.845626190908847 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11987.500403342314,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019120106447698205",
            "extra": "mean: 83.42022659879814 usec\nrounds: 5331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.721786727527856,
            "unit": "iter/sec",
            "range": "stddev: 0.00016549360673371566",
            "extra": "mean: 63.606002125004224 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.39098062117343,
            "unit": "iter/sec",
            "range": "stddev: 0.0005979157195088475",
            "extra": "mean: 9.672023555555773 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17873412638474265,
            "unit": "iter/sec",
            "range": "stddev: 0.13077629606927246",
            "extra": "mean: 5.594902441000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 735024.5344857252,
            "unit": "iter/sec",
            "range": "stddev: 4.5564716065901615e-7",
            "extra": "mean: 1.3604988038932202 usec\nrounds: 22989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.66203475445526,
            "unit": "iter/sec",
            "range": "stddev: 0.0006643653338508188",
            "extra": "mean: 8.356869428570098 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.5175218013310285,
            "unit": "iter/sec",
            "range": "stddev: 0.0003317660534293114",
            "extra": "mean: 181.2407881666663 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 324.9707902036331,
            "unit": "iter/sec",
            "range": "stddev: 0.000026049298926961235",
            "extra": "mean: 3.0771996442307334 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9236169749949301,
            "unit": "iter/sec",
            "range": "stddev: 0.00402028523317523",
            "extra": "mean: 1.0826998930000058 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8027.206184827347,
            "unit": "iter/sec",
            "range": "stddev: 0.000010786161753619833",
            "extra": "mean: 124.57634411959587 usec\nrounds: 3461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.370236534960894,
            "unit": "iter/sec",
            "range": "stddev: 0.0002756560653654048",
            "extra": "mean: 96.42981590909017 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.30813923830154,
            "unit": "iter/sec",
            "range": "stddev: 0.0006740378262173036",
            "extra": "mean: 8.381657834782237 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.27326523499669,
            "unit": "iter/sec",
            "range": "stddev: 0.0008405689085548417",
            "extra": "mean: 16.05825543636363 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5779.918664908356,
            "unit": "iter/sec",
            "range": "stddev: 0.00006639582505252066",
            "extra": "mean: 173.01281522719412 usec\nrounds: 2246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.0771750321998,
            "unit": "iter/sec",
            "range": "stddev: 0.0006216333446021976",
            "extra": "mean: 9.893430437499203 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1655948.521509355,
            "unit": "iter/sec",
            "range": "stddev: 1.0631185473987474e-7",
            "extra": "mean: 603.8835066494249 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 478768.75313975825,
            "unit": "iter/sec",
            "range": "stddev: 8.599661008970714e-7",
            "extra": "mean: 2.088691029734115 usec\nrounds: 301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.43713538445354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000740977272656104",
            "extra": "mean: 9.054925198112048 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.05715618298454,
            "unit": "iter/sec",
            "range": "stddev: 0.000641466341743992",
            "extra": "mean: 9.518628109999838 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.46870538546519,
            "unit": "iter/sec",
            "range": "stddev: 0.000686899328260865",
            "extra": "mean: 9.57224459047552 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.329381939850705,
            "unit": "iter/sec",
            "range": "stddev: 0.028165632337417926",
            "extra": "mean: 27.52592933333315 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.05678196181219,
            "unit": "iter/sec",
            "range": "stddev: 0.00027755630934550563",
            "extra": "mean: 10.520027917647546 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.765396571122835,
            "unit": "iter/sec",
            "range": "stddev: 0.0009356094956434566",
            "extra": "mean: 566.4449655999817 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.34562414631126,
            "unit": "iter/sec",
            "range": "stddev: 0.00038773521613913177",
            "extra": "mean: 18.4007455192301 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5639.611256266411,
            "unit": "iter/sec",
            "range": "stddev: 0.000020196672631008683",
            "extra": "mean: 177.31718633777416 usec\nrounds: 2313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5832.8279676306565,
            "unit": "iter/sec",
            "range": "stddev: 0.00004334074562257814",
            "extra": "mean: 171.4434242788423 usec\nrounds: 2529"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 312.26987394254655,
            "unit": "iter/sec",
            "range": "stddev: 0.00020815774086773648",
            "extra": "mean: 3.202358227434986 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 304.8340152006984,
            "unit": "iter/sec",
            "range": "stddev: 0.00021034576193112065",
            "extra": "mean: 3.280473799295706 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1759.7332612157477,
            "unit": "iter/sec",
            "range": "stddev: 0.00000710262365634151",
            "extra": "mean: 568.2679426705439 usec\nrounds: 1378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.66663181923272,
            "unit": "iter/sec",
            "range": "stddev: 0.00006161581680761894",
            "extra": "mean: 10.676160555553022 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 299.34968874484593,
            "unit": "iter/sec",
            "range": "stddev: 0.0002359578339950303",
            "extra": "mean: 3.340574711111062 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.14271997354699,
            "unit": "iter/sec",
            "range": "stddev: 0.0007288173851468762",
            "extra": "mean: 9.69530375247492 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.70070362105554,
            "unit": "iter/sec",
            "range": "stddev: 0.00045549390165178173",
            "extra": "mean: 7.262127016808447 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8491668373251405,
            "unit": "iter/sec",
            "range": "stddev: 0.001986457386420093",
            "extra": "mean: 1.177624886000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.75158227548476,
            "unit": "iter/sec",
            "range": "stddev: 0.0002667369198822317",
            "extra": "mean: 10.024903637501126 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70907.07156716943,
            "unit": "iter/sec",
            "range": "stddev: 5.122219566556144e-7",
            "extra": "mean: 14.102965725396116 usec\nrounds: 13246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.76776631919566,
            "unit": "iter/sec",
            "range": "stddev: 0.0005930970454556756",
            "extra": "mean: 25.14599366666732 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 243.7114436822032,
            "unit": "iter/sec",
            "range": "stddev: 0.003967534156859876",
            "extra": "mean: 4.10321314785689 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.15851510816736,
            "unit": "iter/sec",
            "range": "stddev: 0.00009292413836414171",
            "extra": "mean: 6.704276985291896 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5328.850818095117,
            "unit": "iter/sec",
            "range": "stddev: 0.00005091065949824744",
            "extra": "mean: 187.65772098635446 usec\nrounds: 2068"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 288.03123250613976,
            "unit": "iter/sec",
            "range": "stddev: 0.00004653140018279873",
            "extra": "mean: 3.4718457137410734 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5731.384506683304,
            "unit": "iter/sec",
            "range": "stddev: 0.00004863616549771088",
            "extra": "mean: 174.47791172166362 usec\nrounds: 2764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.0211253413776,
            "unit": "iter/sec",
            "range": "stddev: 0.00003451373736921937",
            "extra": "mean: 1.8655981130652766 msec\nrounds: 398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9194799853873277,
            "unit": "iter/sec",
            "range": "stddev: 0.005522863450105367",
            "extra": "mean: 1.0875712531999853 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141271.7599575705,
            "unit": "iter/sec",
            "range": "stddev: 3.16161876288451e-7",
            "extra": "mean: 7.078555546418758 usec\nrounds: 24214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1840928.122868819,
            "unit": "iter/sec",
            "range": "stddev: 1.1603529012334417e-7",
            "extra": "mean: 543.2042607082591 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.571991779574797,
            "unit": "iter/sec",
            "range": "stddev: 0.0028825209680938507",
            "extra": "mean: 388.8037309999959 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}