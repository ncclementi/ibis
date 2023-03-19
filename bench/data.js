window.BENCHMARK_DATA = {
  "lastUpdate": 1679258042879,
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
          "id": "f31669505fd17c4f4c6e9bc8b153528a97612500",
          "message": "build: add deadnix to pre-commit-hooks",
          "timestamp": "2023-03-19T16:29:01-04:00",
          "tree_id": "bfd7bd2f7c8d088ddac0911644f65d3f615482b9",
          "url": "https://github.com/ibis-project/ibis/commit/f31669505fd17c4f4c6e9bc8b153528a97612500"
        },
        "date": 1679257964161,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.79101228044192,
            "unit": "iter/sec",
            "range": "stddev: 0.00009233925579783076",
            "extra": "mean: 6.031690055118678 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2672214.2282924745,
            "unit": "iter/sec",
            "range": "stddev: 1.604308111954781e-8",
            "extra": "mean: 374.2214937006423 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 220.00476788826867,
            "unit": "iter/sec",
            "range": "stddev: 0.00397658365898919",
            "extra": "mean: 4.545356037501236 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.66992239760779,
            "unit": "iter/sec",
            "range": "stddev: 0.0005459724404734773",
            "extra": "mean: 8.218958147536892 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.98637736953161,
            "unit": "iter/sec",
            "range": "stddev: 0.0006654978252317985",
            "extra": "mean: 9.260427327587621 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 91.96542858088242,
            "unit": "iter/sec",
            "range": "stddev: 0.011133607477535763",
            "extra": "mean: 10.87365127777894 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148278.0033123264,
            "unit": "iter/sec",
            "range": "stddev: 3.4334834294145566e-7",
            "extra": "mean: 6.744088655507744 usec\nrounds: 37313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 680.9390852996631,
            "unit": "iter/sec",
            "range": "stddev: 0.00015870604785784575",
            "extra": "mean: 1.468560142292209 msec\nrounds: 506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 505774.69802624127,
            "unit": "iter/sec",
            "range": "stddev: 3.807550596909802e-7",
            "extra": "mean: 1.9771649390577395 usec\nrounds: 2219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 311.41715079627556,
            "unit": "iter/sec",
            "range": "stddev: 0.00020070751081475709",
            "extra": "mean: 3.2111269319723017 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5502.324258351402,
            "unit": "iter/sec",
            "range": "stddev: 0.000054420697459856915",
            "extra": "mean: 181.74137928752648 usec\nrounds: 3003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.4377544537995,
            "unit": "iter/sec",
            "range": "stddev: 0.000054574813309880865",
            "extra": "mean: 3.4312644285712337 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.56627932790124,
            "unit": "iter/sec",
            "range": "stddev: 0.00044680097599623903",
            "extra": "mean: 11.290979000006018 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 288.7596406002541,
            "unit": "iter/sec",
            "range": "stddev: 0.00023512227088893408",
            "extra": "mean: 3.4630878398423937 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11504692.528663557,
            "unit": "iter/sec",
            "range": "stddev: 3.1518735204233223e-9",
            "extra": "mean: 86.92105395332537 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5106.041229145764,
            "unit": "iter/sec",
            "range": "stddev: 0.00006472236287564572",
            "extra": "mean: 195.8464405441746 usec\nrounds: 2279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5673.065166873635,
            "unit": "iter/sec",
            "range": "stddev: 0.000046485779696004605",
            "extra": "mean: 176.27155172467184 usec\nrounds: 1624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.77147867801472,
            "unit": "iter/sec",
            "range": "stddev: 0.0005554017445627589",
            "extra": "mean: 8.212103612900822 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.027457979124744,
            "unit": "iter/sec",
            "range": "stddev: 0.0006981072792220312",
            "extra": "mean: 38.420962999999745 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.87361224403713,
            "unit": "iter/sec",
            "range": "stddev: 0.00005528892536664718",
            "extra": "mean: 13.179812723080012 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.89933341288545,
            "unit": "iter/sec",
            "range": "stddev: 0.0005504943087166601",
            "extra": "mean: 8.271344198275125 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.02754242806928,
            "unit": "iter/sec",
            "range": "stddev: 0.0006228742672482062",
            "extra": "mean: 9.431511634615273 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 74.50693346048236,
            "unit": "iter/sec",
            "range": "stddev: 0.023748140807157186",
            "extra": "mean: 13.421569692307745 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.46788794919655,
            "unit": "iter/sec",
            "range": "stddev: 0.0006114640599170673",
            "extra": "mean: 9.219318444444802 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4845096093020027,
            "unit": "iter/sec",
            "range": "stddev: 0.003061540616895641",
            "extra": "mean: 402.49391520000586 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.81966916330889,
            "unit": "iter/sec",
            "range": "stddev: 0.013013482543413215",
            "extra": "mean: 12.074426402599348 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74520.20840143666,
            "unit": "iter/sec",
            "range": "stddev: 6.510293524470075e-7",
            "extra": "mean: 13.419178789906889 usec\nrounds: 13569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.7177809555077,
            "unit": "iter/sec",
            "range": "stddev: 0.000166029944842707",
            "extra": "mean: 6.4218742000036855 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13859.437202254427,
            "unit": "iter/sec",
            "range": "stddev: 0.000001321584012713841",
            "extra": "mean: 72.15300198750757 usec\nrounds: 6541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 306.98575276727377,
            "unit": "iter/sec",
            "range": "stddev: 0.00021395773787679032",
            "extra": "mean: 3.2574801631204724 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1759.423812242913,
            "unit": "iter/sec",
            "range": "stddev: 0.000025502583305942458",
            "extra": "mean: 568.3678901248927 usec\nrounds: 1438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 319.6727994701476,
            "unit": "iter/sec",
            "range": "stddev: 0.00018815739261491917",
            "extra": "mean: 3.128198588236107 msec\nrounds: 306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.226420189899095,
            "unit": "iter/sec",
            "range": "stddev: 0.0008264654853582233",
            "extra": "mean: 23.133999891891914 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.6994603895394,
            "unit": "iter/sec",
            "range": "stddev: 0.00002160601038812867",
            "extra": "mean: 5.083898034186882 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7019509.780612394,
            "unit": "iter/sec",
            "range": "stddev: 3.7500603470675586e-9",
            "extra": "mean: 142.46009069785157 nsec\nrounds: 60972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.99024080732414,
            "unit": "iter/sec",
            "range": "stddev: 0.0006453535574841311",
            "extra": "mean: 8.334011110168223 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5301.56589289287,
            "unit": "iter/sec",
            "range": "stddev: 0.0000547639465393087",
            "extra": "mean: 188.62351618426018 usec\nrounds: 2935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11836.679670607296,
            "unit": "iter/sec",
            "range": "stddev: 0.00001425013187423352",
            "extra": "mean: 84.48315134211059 usec\nrounds: 5438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.38098950781935,
            "unit": "iter/sec",
            "range": "stddev: 0.0002036271506900748",
            "extra": "mean: 20.66927547726943 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.51487532661035,
            "unit": "iter/sec",
            "range": "stddev: 0.00026470389748979703",
            "extra": "mean: 8.50956100000693 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5083.840770561718,
            "unit": "iter/sec",
            "range": "stddev: 0.00005088115821930353",
            "extra": "mean: 196.70167598296143 usec\nrounds: 2111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.48550412695357,
            "unit": "iter/sec",
            "range": "stddev: 0.0001268926995520888",
            "extra": "mean: 64.57652213333063 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.12815757904914,
            "unit": "iter/sec",
            "range": "stddev: 0.00004901346688860449",
            "extra": "mean: 10.4027792187494 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.28201013694849,
            "unit": "iter/sec",
            "range": "stddev: 0.0005266806183225183",
            "extra": "mean: 15.802279318180657 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.33998723347331,
            "unit": "iter/sec",
            "range": "stddev: 0.00012137311968982313",
            "extra": "mean: 9.771351619564406 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1974978.9201093083,
            "unit": "iter/sec",
            "range": "stddev: 8.902642265265461e-8",
            "extra": "mean: 506.33451821584686 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 288.5643643421789,
            "unit": "iter/sec",
            "range": "stddev: 0.000024277614181869843",
            "extra": "mean: 3.465431368421509 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5476449.590856342,
            "unit": "iter/sec",
            "range": "stddev: 8.781465412031475e-9",
            "extra": "mean: 182.6000556398722 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1952301.552265374,
            "unit": "iter/sec",
            "range": "stddev: 7.854509838915375e-8",
            "extra": "mean: 512.2159529298326 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.47342787005033,
            "unit": "iter/sec",
            "range": "stddev: 0.00023090152377848588",
            "extra": "mean: 17.101785142857903 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.96181694829626,
            "unit": "iter/sec",
            "range": "stddev: 0.0008568681424128385",
            "extra": "mean: 9.807592978723488 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5230.009394087941,
            "unit": "iter/sec",
            "range": "stddev: 0.00005444977846428544",
            "extra": "mean: 191.20424547045954 usec\nrounds: 3422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.553016091621402,
            "unit": "iter/sec",
            "range": "stddev: 0.0001030035506528187",
            "extra": "mean: 94.75963945453972 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.1179629333016,
            "unit": "iter/sec",
            "range": "stddev: 0.000027677178695920274",
            "extra": "mean: 1.8583285987127465 msec\nrounds: 466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8356232234061116,
            "unit": "iter/sec",
            "range": "stddev: 0.003297522456657837",
            "extra": "mean: 1.1967115944000057 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8801127441323371,
            "unit": "iter/sec",
            "range": "stddev: 0.0035502042496145135",
            "extra": "mean: 1.1362180660000036 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.79892892014265,
            "unit": "iter/sec",
            "range": "stddev: 0.022797280878211243",
            "extra": "mean: 31.447600090912562 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.59225569899891,
            "unit": "iter/sec",
            "range": "stddev: 0.0005916093598023675",
            "extra": "mean: 8.361745450448685 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 337.71189346812344,
            "unit": "iter/sec",
            "range": "stddev: 0.00001702714079651847",
            "extra": "mean: 2.961103885713133 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12819.27693328533,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023299596410699943",
            "extra": "mean: 78.00751986280083 usec\nrounds: 5261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5585.5025072656,
            "unit": "iter/sec",
            "range": "stddev: 0.00004549033856604535",
            "extra": "mean: 179.0349209760812 usec\nrounds: 2050"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8535.91523190931,
            "unit": "iter/sec",
            "range": "stddev: 0.000012522266735947472",
            "extra": "mean: 117.15205374366403 usec\nrounds: 4354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.81146867332463,
            "unit": "iter/sec",
            "range": "stddev: 0.0001728978002543324",
            "extra": "mean: 8.94362637272624 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.47504148758386,
            "unit": "iter/sec",
            "range": "stddev: 0.025665387514767123",
            "extra": "mean: 30.792878290311922 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5173.965096538445,
            "unit": "iter/sec",
            "range": "stddev: 0.00005267440454784367",
            "extra": "mean: 193.27536644362624 usec\nrounds: 1943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.52624699036214,
            "unit": "iter/sec",
            "range": "stddev: 0.00008712974211766349",
            "extra": "mean: 15.261060200000223 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.83801495346026,
            "unit": "iter/sec",
            "range": "stddev: 0.0006634119589553081",
            "extra": "mean: 8.784411783786148 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 156.76267306089557,
            "unit": "iter/sec",
            "range": "stddev: 0.00419790887956368",
            "extra": "mean: 6.379069586364752 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1152.4552546981522,
            "unit": "iter/sec",
            "range": "stddev: 0.00003315018318742329",
            "extra": "mean: 867.7126473443146 usec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5217.467154425089,
            "unit": "iter/sec",
            "range": "stddev: 0.000022885391656229172",
            "extra": "mean: 191.66388027030902 usec\nrounds: 2372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.07293287745075,
            "unit": "iter/sec",
            "range": "stddev: 0.0006485351934902042",
            "extra": "mean: 9.70186810526636 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.7090984064684,
            "unit": "iter/sec",
            "range": "stddev: 0.000048905057141185155",
            "extra": "mean: 7.314802099175316 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 318.43385003776734,
            "unit": "iter/sec",
            "range": "stddev: 0.00019317668397573215",
            "extra": "mean: 3.140369655680125 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 304.64444110335916,
            "unit": "iter/sec",
            "range": "stddev: 0.00018792453899929402",
            "extra": "mean: 3.282515172041895 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 737.22645278802,
            "unit": "iter/sec",
            "range": "stddev: 0.000027779569417075905",
            "extra": "mean: 1.3564353208138846 msec\nrounds: 639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8752431803441278,
            "unit": "iter/sec",
            "range": "stddev: 0.009547379593294308",
            "extra": "mean: 1.142539607799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6773827378441186,
            "unit": "iter/sec",
            "range": "stddev: 0.06328949750727346",
            "extra": "mean: 1.4762702739999896 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.11729732250168,
            "unit": "iter/sec",
            "range": "stddev: 0.000593615348095039",
            "extra": "mean: 8.325195640350701 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.74826017290978,
            "unit": "iter/sec",
            "range": "stddev: 0.0017405700073450095",
            "extra": "mean: 571.9972435999694 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1713834.3499900303,
            "unit": "iter/sec",
            "range": "stddev: 7.062152098049233e-8",
            "extra": "mean: 583.4869630228949 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 314.1216814255988,
            "unit": "iter/sec",
            "range": "stddev: 0.0002150407314005082",
            "extra": "mean: 3.183479712261933 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.55288209730239,
            "unit": "iter/sec",
            "range": "stddev: 0.0006076589213634424",
            "extra": "mean: 9.212099952386714 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.629435152243666,
            "unit": "iter/sec",
            "range": "stddev: 0.0004819266891776872",
            "extra": "mean: 177.6377155000072 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16708267668391877,
            "unit": "iter/sec",
            "range": "stddev: 0.18894378448653457",
            "extra": "mean: 5.985060928200028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6144673.364664334,
            "unit": "iter/sec",
            "range": "stddev: 9.064383717221223e-9",
            "extra": "mean: 162.74258054946316 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 312.93201731875206,
            "unit": "iter/sec",
            "range": "stddev: 0.0002526453839169816",
            "extra": "mean: 3.195582249998413 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.84554338275782,
            "unit": "iter/sec",
            "range": "stddev: 0.00011332436930529803",
            "extra": "mean: 6.256039291664529 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 757458.1623537588,
            "unit": "iter/sec",
            "range": "stddev: 4.15201571847641e-7",
            "extra": "mean: 1.3202049297251692 usec\nrounds: 25316"
          }
        ]
      }
    ]
  }
}