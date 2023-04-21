window.BENCHMARK_DATA = {
  "lastUpdate": 1682087442757,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "d8818e2da26bb4089c1b5f2cbd1169a65d7a6c50",
          "message": "fix(sqlalchemy): prepend the table's schema when querying metadata",
          "timestamp": "2023-04-21T10:24:17-04:00",
          "tree_id": "e3115899545c2e1ca537e72e959bc33da73869af",
          "url": "https://github.com/ibis-project/ibis/commit/d8818e2da26bb4089c1b5f2cbd1169a65d7a6c50"
        },
        "date": 1682087352230,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5817621481804666,
            "unit": "iter/sec",
            "range": "stddev: 0.048583709837971285",
            "extra": "mean: 1.7189155450000044 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 176.78342456653905,
            "unit": "iter/sec",
            "range": "stddev: 0.004261562300992921",
            "extra": "mean: 5.656638921052311 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1524802265688878,
            "unit": "iter/sec",
            "range": "stddev: 0.015646759837645848",
            "extra": "mean: 867.6938457999881 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1634.1109603660534,
            "unit": "iter/sec",
            "range": "stddev: 0.000413237186410386",
            "extra": "mean: 611.9535479867244 usec\nrounds: 323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1697718.3135409085,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013032105255503853",
            "extra": "mean: 589.0258660839403 nsec\nrounds: 40323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5624324766276759,
            "unit": "iter/sec",
            "range": "stddev: 0.06751682911677111",
            "extra": "mean: 1.777991210600004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1159928.056083664,
            "unit": "iter/sec",
            "range": "stddev: 0.000002329680728762912",
            "extra": "mean: 862.1224348830401 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 363212.0392566545,
            "unit": "iter/sec",
            "range": "stddev: 0.000006938342987774342",
            "extra": "mean: 2.753212701997952 usec\nrounds: 1669"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 552.2095904303659,
            "unit": "iter/sec",
            "range": "stddev: 0.00032836966233536967",
            "extra": "mean: 1.8109066146798494 msec\nrounds: 436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.946627643720205,
            "unit": "iter/sec",
            "range": "stddev: 0.0035367130372844467",
            "extra": "mean: 55.72077494737097 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 195.8367901331638,
            "unit": "iter/sec",
            "range": "stddev: 0.0007640838727140886",
            "extra": "mean: 5.106292843750282 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.07996185434711,
            "unit": "iter/sec",
            "range": "stddev: 0.0017403884593895757",
            "extra": "mean: 25.58856131249687 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 83.00200776324,
            "unit": "iter/sec",
            "range": "stddev: 0.0007925581282931133",
            "extra": "mean: 12.047901333332334 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4500540.374562666,
            "unit": "iter/sec",
            "range": "stddev: 5.726459687487655e-7",
            "extra": "mean: 222.1955402625351 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 45.866983670395385,
            "unit": "iter/sec",
            "range": "stddev: 0.0020989823981179085",
            "extra": "mean: 21.802174897440334 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1443.2667091119145,
            "unit": "iter/sec",
            "range": "stddev: 0.00038490976922427495",
            "extra": "mean: 692.8726296301327 usec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 198.2270768473058,
            "unit": "iter/sec",
            "range": "stddev: 0.0006602694460399226",
            "extra": "mean: 5.0447195000020075 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 198.2400305841051,
            "unit": "iter/sec",
            "range": "stddev: 0.0008723501100298707",
            "extra": "mean: 5.044389859371723 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 71.60327902854112,
            "unit": "iter/sec",
            "range": "stddev: 0.001640313302977191",
            "extra": "mean: 13.965840860463935 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 90.00677353232786,
            "unit": "iter/sec",
            "range": "stddev: 0.0011717007268677727",
            "extra": "mean: 11.110274935483925 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 122.2596127291735,
            "unit": "iter/sec",
            "range": "stddev: 0.0010032560706778788",
            "extra": "mean: 8.179315946429304 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.681953582213069,
            "unit": "iter/sec",
            "range": "stddev: 0.0053394855131111705",
            "extra": "mean: 213.58605600000828 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2246834.6512352657,
            "unit": "iter/sec",
            "range": "stddev: 4.946545083867932e-7",
            "extra": "mean: 445.0705793816288 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 70.51160638090629,
            "unit": "iter/sec",
            "range": "stddev: 0.0018419423946707297",
            "extra": "mean: 14.18206237704986 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.81025831427239,
            "unit": "iter/sec",
            "range": "stddev: 0.0009026989646709034",
            "extra": "mean: 10.659815013512857 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.403205051854599,
            "unit": "iter/sec",
            "range": "stddev: 0.00442705013164991",
            "extra": "mean: 80.62432216667048 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 409.31431031986574,
            "unit": "iter/sec",
            "range": "stddev: 0.0004955527140609963",
            "extra": "mean: 2.4431102817258767 msec\nrounds: 394"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 79.23942402419274,
            "unit": "iter/sec",
            "range": "stddev: 0.001682635038095015",
            "extra": "mean: 12.619980676470947 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1584.6201447693081,
            "unit": "iter/sec",
            "range": "stddev: 0.0002681016662490602",
            "extra": "mean: 631.0660654548108 usec\nrounds: 1100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5996103901734134,
            "unit": "iter/sec",
            "range": "stddev: 0.02446991238834813",
            "extra": "mean: 1.667749619400007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.68236636847376,
            "unit": "iter/sec",
            "range": "stddev: 0.029953856749955522",
            "extra": "mean: 31.563298914284132 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.04843018612032,
            "unit": "iter/sec",
            "range": "stddev: 0.002656227565059667",
            "extra": "mean: 30.258623310343495 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1519.5145355915442,
            "unit": "iter/sec",
            "range": "stddev: 0.00019645043466479833",
            "extra": "mean: 658.1049253409752 usec\nrounds: 1393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.03850298781082,
            "unit": "iter/sec",
            "range": "stddev: 0.0015048786406872943",
            "extra": "mean: 12.980522222222076 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 721369.8831512934,
            "unit": "iter/sec",
            "range": "stddev: 0.000005529390056235265",
            "extra": "mean: 1.386251385532641 usec\nrounds: 11548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.134910093442838,
            "unit": "iter/sec",
            "range": "stddev: 0.00799172580580417",
            "extra": "mean: 468.4037998000008 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 218.8762426554599,
            "unit": "iter/sec",
            "range": "stddev: 0.0008672665772300769",
            "extra": "mean: 4.568791879227076 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 266.468153073776,
            "unit": "iter/sec",
            "range": "stddev: 0.0005435454299730389",
            "extra": "mean: 3.7527936770858084 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 83.00757677974075,
            "unit": "iter/sec",
            "range": "stddev: 0.0016325722192589045",
            "extra": "mean: 12.047093034091137 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 114.84765269374061,
            "unit": "iter/sec",
            "range": "stddev: 0.0007550348249521404",
            "extra": "mean: 8.707187099998098 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9724520.628616914,
            "unit": "iter/sec",
            "range": "stddev: 1.381840677677257e-7",
            "extra": "mean: 102.83283240281575 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 72.06211427267245,
            "unit": "iter/sec",
            "range": "stddev: 0.0012061855030594507",
            "extra": "mean: 13.876917296877345 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1642.5510643260106,
            "unit": "iter/sec",
            "range": "stddev: 0.0002982882252984655",
            "extra": "mean: 608.8090785843124 usec\nrounds: 1667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1801.7168556168588,
            "unit": "iter/sec",
            "range": "stddev: 0.00021189292065945865",
            "extra": "mean: 555.0261667822535 usec\nrounds: 1439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 224.95680812646359,
            "unit": "iter/sec",
            "range": "stddev: 0.0007410684823639935",
            "extra": "mean: 4.445297781064851 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 71.77319411607462,
            "unit": "iter/sec",
            "range": "stddev: 0.01941024876519252",
            "extra": "mean: 13.932778279071128 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1753.2457839169722,
            "unit": "iter/sec",
            "range": "stddev: 0.00022769203003985698",
            "extra": "mean: 570.370685715196 usec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 142.18611111484458,
            "unit": "iter/sec",
            "range": "stddev: 0.0033381085479790612",
            "extra": "mean: 7.033035731544089 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6592.92389691441,
            "unit": "iter/sec",
            "range": "stddev: 0.00009296108145538267",
            "extra": "mean: 151.67777083973553 usec\nrounds: 3203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.733176640377785,
            "unit": "iter/sec",
            "range": "stddev: 0.0017309141988698427",
            "extra": "mean: 27.985197343748602 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10046964137608973,
            "unit": "iter/sec",
            "range": "stddev: 0.17798413651105854",
            "extra": "mean: 9.953255394400014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 76.9909827329757,
            "unit": "iter/sec",
            "range": "stddev: 0.0016854628852144874",
            "extra": "mean: 12.988534039996011 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 74.97807808356175,
            "unit": "iter/sec",
            "range": "stddev: 0.0016605774244839852",
            "extra": "mean: 13.337231702385296 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60091.64238833047,
            "unit": "iter/sec",
            "range": "stddev: 0.000027359946218131514",
            "extra": "mean: 16.641249269535617 usec\nrounds: 12316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 531.6023433152249,
            "unit": "iter/sec",
            "range": "stddev: 0.0005487492836989145",
            "extra": "mean: 1.8811053272709686 msec\nrounds: 495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.040047836799008,
            "unit": "iter/sec",
            "range": "stddev: 0.0068521618211090235",
            "extra": "mean: 110.61888366666987 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4630972.959293469,
            "unit": "iter/sec",
            "range": "stddev: 4.5301410132527204e-7",
            "extra": "mean: 215.9373437915204 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.77062434123185,
            "unit": "iter/sec",
            "range": "stddev: 0.0011071569709083778",
            "extra": "mean: 10.55179288889553 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 79.93901691230369,
            "unit": "iter/sec",
            "range": "stddev: 0.0017886681852832668",
            "extra": "mean: 12.509535876542492 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9281.897526676998,
            "unit": "iter/sec",
            "range": "stddev: 0.00007584130501067085",
            "extra": "mean: 107.73659126551561 usec\nrounds: 4465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 81.0395553094837,
            "unit": "iter/sec",
            "range": "stddev: 0.0016676499553265444",
            "extra": "mean: 12.33965310126738 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 65.07507144196416,
            "unit": "iter/sec",
            "range": "stddev: 0.025112554437485723",
            "extra": "mean: 15.366867493827174 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1725.288254650093,
            "unit": "iter/sec",
            "range": "stddev: 0.0002278002973205577",
            "extra": "mean: 579.6132891444339 usec\nrounds: 1041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3741.989264524874,
            "unit": "iter/sec",
            "range": "stddev: 0.00009948069978332164",
            "extra": "mean: 267.23753846123645 usec\nrounds: 1937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 152.27607535828193,
            "unit": "iter/sec",
            "range": "stddev: 0.0012169876230685617",
            "extra": "mean: 6.567019787232863 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8732.059162997832,
            "unit": "iter/sec",
            "range": "stddev: 0.00004534133310839812",
            "extra": "mean: 114.5205250369246 usec\nrounds: 3375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.27143561184833,
            "unit": "iter/sec",
            "range": "stddev: 0.0010957738168649032",
            "extra": "mean: 12.457731600011357 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 238.27458724775175,
            "unit": "iter/sec",
            "range": "stddev: 0.0007888678676605629",
            "extra": "mean: 4.196838662279271 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 62.08138267576442,
            "unit": "iter/sec",
            "range": "stddev: 0.0017754541148358083",
            "extra": "mean: 16.107888659998935 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11587.855774582129,
            "unit": "iter/sec",
            "range": "stddev: 0.000044272699853716835",
            "extra": "mean: 86.29724251431331 usec\nrounds: 5043"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1637507.7073041187,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051863531150228024",
            "extra": "mean: 610.6841485627765 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1680.7650056540394,
            "unit": "iter/sec",
            "range": "stddev: 0.00025559652204511674",
            "extra": "mean: 594.9671706847965 usec\nrounds: 1037"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 68.8815855764815,
            "unit": "iter/sec",
            "range": "stddev: 0.024062479000128287",
            "extra": "mean: 14.517668134826355 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 46.52504300477386,
            "unit": "iter/sec",
            "range": "stddev: 0.001536988806939346",
            "extra": "mean: 21.493800659085725 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 212.82640606414566,
            "unit": "iter/sec",
            "range": "stddev: 0.0008027707343470726",
            "extra": "mean: 4.698665069308181 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 84.64749162853413,
            "unit": "iter/sec",
            "range": "stddev: 0.001790623309506514",
            "extra": "mean: 11.813699151161927 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.9728874326983,
            "unit": "iter/sec",
            "range": "stddev: 0.000989246484036599",
            "extra": "mean: 7.043598380529143 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 75.53120448705172,
            "unit": "iter/sec",
            "range": "stddev: 0.0020080521387031073",
            "extra": "mean: 13.239561142857578 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.22714208934465,
            "unit": "iter/sec",
            "range": "stddev: 0.0034024630606287426",
            "extra": "mean: 31.029744965521864 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1033.450350073774,
            "unit": "iter/sec",
            "range": "stddev: 0.0003857774841653405",
            "extra": "mean: 967.6323588536343 usec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 129935.17686992683,
            "unit": "iter/sec",
            "range": "stddev: 0.000018744211627696265",
            "extra": "mean: 7.6961452940573745 usec\nrounds: 41151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 196.85957043577798,
            "unit": "iter/sec",
            "range": "stddev: 0.001099434304765282",
            "extra": "mean: 5.0797631925455855 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 124.40796587541772,
            "unit": "iter/sec",
            "range": "stddev: 0.0015395852117642806",
            "extra": "mean: 8.03807049623656 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5804846.118836204,
            "unit": "iter/sec",
            "range": "stddev: 3.7331798219843726e-7",
            "extra": "mean: 172.26985513956814 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 82.95741040998894,
            "unit": "iter/sec",
            "range": "stddev: 0.0014358700445537608",
            "extra": "mean: 12.054378205127646 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6084171032908717,
            "unit": "iter/sec",
            "range": "stddev: 0.03236893033739684",
            "extra": "mean: 1.6436092848000043 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 88.00057480761917,
            "unit": "iter/sec",
            "range": "stddev: 0.0014899119953537944",
            "extra": "mean: 11.363562137930705 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 209.42676311149376,
            "unit": "iter/sec",
            "range": "stddev: 0.0006188540171734476",
            "extra": "mean: 4.7749389101125725 msec\nrounds: 178"
          }
        ]
      }
    ]
  }
}