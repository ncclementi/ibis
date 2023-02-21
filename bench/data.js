window.BENCHMARK_DATA = {
  "lastUpdate": 1676991464192,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "7affefc65cd63e84e278a513f6d664c2a38dd04d",
          "message": "chore(flake/nixpkgs): `45f2df84` -> `a1970c01`",
          "timestamp": "2023-02-21T14:52:05Z",
          "tree_id": "2ac52bed1767295ee63eb575e1b7af2f7fbfa877",
          "url": "https://github.com/ibis-project/ibis/commit/7affefc65cd63e84e278a513f6d664c2a38dd04d"
        },
        "date": 1676991380248,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.8807235240903,
            "unit": "iter/sec",
            "range": "stddev: 0.00014427565161391305",
            "extra": "mean: 14.310097972229288 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10524.536042479032,
            "unit": "iter/sec",
            "range": "stddev: 0.00000560629813810162",
            "extra": "mean: 95.01606493282074 usec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 234.15746959242747,
            "unit": "iter/sec",
            "range": "stddev: 0.004079094372508631",
            "extra": "mean: 4.270630365713259 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4627102.4875883395,
            "unit": "iter/sec",
            "range": "stddev: 1.486227488169524e-8",
            "extra": "mean: 216.11797073487273 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8630654597065781,
            "unit": "iter/sec",
            "range": "stddev: 0.002804490657324378",
            "extra": "mean: 1.1586606656000071 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.93446585867969,
            "unit": "iter/sec",
            "range": "stddev: 0.0002443334211021302",
            "extra": "mean: 23.291311071425355 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3817.0534845858833,
            "unit": "iter/sec",
            "range": "stddev: 0.00009291213988111841",
            "extra": "mean: 261.98218181595405 usec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 114.46876765143084,
            "unit": "iter/sec",
            "range": "stddev: 0.00010449505915100611",
            "extra": "mean: 8.736007388889718 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.676195699171906,
            "unit": "iter/sec",
            "range": "stddev: 0.0003599802855800969",
            "extra": "mean: 18.630232395837016 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 384427.2107957655,
            "unit": "iter/sec",
            "range": "stddev: 4.824010784307239e-7",
            "extra": "mean: 2.6012726776806376 usec\nrounds: 1863"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 329.5741948826641,
            "unit": "iter/sec",
            "range": "stddev: 0.00007063439898540116",
            "extra": "mean: 3.0342181382132263 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4061.122085801751,
            "unit": "iter/sec",
            "range": "stddev: 0.0000467502921878231",
            "extra": "mean: 246.23736466730205 usec\nrounds: 1851"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 78.69096518541099,
            "unit": "iter/sec",
            "range": "stddev: 0.00013471755260150112",
            "extra": "mean: 12.707939185188646 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.69714308576967,
            "unit": "iter/sec",
            "range": "stddev: 0.00014025715595917163",
            "extra": "mean: 10.78781898461242 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10065.082487077138,
            "unit": "iter/sec",
            "range": "stddev: 0.000011822026789685951",
            "extra": "mean: 99.35338347042163 usec\nrounds: 4634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13009727.194346802,
            "unit": "iter/sec",
            "range": "stddev: 7.29522032556405e-9",
            "extra": "mean: 76.86556259485991 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 557.3659799596784,
            "unit": "iter/sec",
            "range": "stddev: 0.00012211644462422483",
            "extra": "mean: 1.7941532780173328 msec\nrounds: 464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55272.326927007125,
            "unit": "iter/sec",
            "range": "stddev: 5.554758141863908e-7",
            "extra": "mean: 18.092236306978794 usec\nrounds: 12196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.83013923671194,
            "unit": "iter/sec",
            "range": "stddev: 0.0000671939369283361",
            "extra": "mean: 5.888236354833249 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.85064736029831,
            "unit": "iter/sec",
            "range": "stddev: 0.00009990201627725891",
            "extra": "mean: 11.382955391310212 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4482.907674488746,
            "unit": "iter/sec",
            "range": "stddev: 0.00004984155356931882",
            "extra": "mean: 223.06950591259837 usec\nrounds: 1945"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 68.98993383246724,
            "unit": "iter/sec",
            "range": "stddev: 0.0005829161721258881",
            "extra": "mean: 14.494868228579046 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6446.532444611366,
            "unit": "iter/sec",
            "range": "stddev: 0.000027346649910076008",
            "extra": "mean: 155.1221542111211 usec\nrounds: 3800"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 276.6389055353904,
            "unit": "iter/sec",
            "range": "stddev: 0.000047405677566461825",
            "extra": "mean: 3.614820547618419 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.43519259356564,
            "unit": "iter/sec",
            "range": "stddev: 0.0004958864931914065",
            "extra": "mean: 16.277315294112615 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9225.099250896421,
            "unit": "iter/sec",
            "range": "stddev: 0.000012742171197683518",
            "extra": "mean: 108.39991774644898 usec\nrounds: 3781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4391.0286394096875,
            "unit": "iter/sec",
            "range": "stddev: 0.00001897937630708092",
            "extra": "mean: 227.73707076855595 usec\nrounds: 650"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 53.4906569630204,
            "unit": "iter/sec",
            "range": "stddev: 0.01950593537768009",
            "extra": "mean: 18.69485358333378 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.116921549490483,
            "unit": "iter/sec",
            "range": "stddev: 0.0002495179702378925",
            "extra": "mean: 109.68614730000468 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 87.25447046457442,
            "unit": "iter/sec",
            "range": "stddev: 0.0005569633936339886",
            "extra": "mean: 11.460730833338825 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7351464644526606,
            "unit": "iter/sec",
            "range": "stddev: 0.003933300858102477",
            "extra": "mean: 1.3602731542000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.858008943087969,
            "unit": "iter/sec",
            "range": "stddev: 0.0022025524648150506",
            "extra": "mean: 1.1654890173999888 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4506.248344503715,
            "unit": "iter/sec",
            "range": "stddev: 0.000047191083075458",
            "extra": "mean: 221.91408984808908 usec\nrounds: 1714"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 83.9688808214642,
            "unit": "iter/sec",
            "range": "stddev: 0.0005604446501719881",
            "extra": "mean: 11.909173853659118 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1572943.4294267576,
            "unit": "iter/sec",
            "range": "stddev: 1.3177010726832374e-7",
            "extra": "mean: 635.7507722731257 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.072735502352316,
            "unit": "iter/sec",
            "range": "stddev: 0.0006442833144772069",
            "extra": "mean: 23.768361815791348 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 256.04607444939296,
            "unit": "iter/sec",
            "range": "stddev: 0.00019677692836665887",
            "extra": "mean: 3.905547086204784 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 224.7407364097265,
            "unit": "iter/sec",
            "range": "stddev: 0.0004110816464148753",
            "extra": "mean: 4.4495716084906505 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.94132204483036,
            "unit": "iter/sec",
            "range": "stddev: 0.00011538943316610055",
            "extra": "mean: 14.718583181825055 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3919.464788355014,
            "unit": "iter/sec",
            "range": "stddev: 0.000050691462418626854",
            "extra": "mean: 255.13687556807892 usec\nrounds: 1760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4385931.002126973,
            "unit": "iter/sec",
            "range": "stddev: 1.3902740242248672e-8",
            "extra": "mean: 228.0017627990889 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 242.31745968382393,
            "unit": "iter/sec",
            "range": "stddev: 0.00028035784758814855",
            "extra": "mean: 4.126817775759126 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 240.05530761798147,
            "unit": "iter/sec",
            "range": "stddev: 0.00022729660300123967",
            "extra": "mean: 4.165706686191571 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3798.8229039238477,
            "unit": "iter/sec",
            "range": "stddev: 0.0021921284164675174",
            "extra": "mean: 263.2394363441077 usec\nrounds: 2867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 64.73184881850308,
            "unit": "iter/sec",
            "range": "stddev: 0.000601126824351715",
            "extra": "mean: 15.44834603448184 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 443.2723079450591,
            "unit": "iter/sec",
            "range": "stddev: 0.000025753743074155598",
            "extra": "mean: 2.255949632035087 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.557058345781378,
            "unit": "iter/sec",
            "range": "stddev: 0.0007436198325940668",
            "extra": "mean: 642.2366912000143 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 82.2026472792234,
            "unit": "iter/sec",
            "range": "stddev: 0.0006045396011224476",
            "extra": "mean: 12.165058341773728 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4305.585727995518,
            "unit": "iter/sec",
            "range": "stddev: 0.0000568564307457327",
            "extra": "mean: 232.2564369112106 usec\nrounds: 2758"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5390658.383065704,
            "unit": "iter/sec",
            "range": "stddev: 5.089228349629806e-9",
            "extra": "mean: 185.50609757450744 nsec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 985.0175695799192,
            "unit": "iter/sec",
            "range": "stddev: 0.000016419280767634822",
            "extra": "mean: 1.0152103179504406 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 101.23623584733535,
            "unit": "iter/sec",
            "range": "stddev: 0.00009353423659200496",
            "extra": "mean: 9.87788603191454 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1438374.5064370541,
            "unit": "iter/sec",
            "range": "stddev: 1.4134773777733892e-7",
            "extra": "mean: 695.2292296093764 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 63.2998015936667,
            "unit": "iter/sec",
            "range": "stddev: 0.015491002908490611",
            "extra": "mean: 15.797837826083367 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.28292361387885,
            "unit": "iter/sec",
            "range": "stddev: 0.00017360188050395215",
            "extra": "mean: 10.279296333332391 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 87.59233430066134,
            "unit": "iter/sec",
            "range": "stddev: 0.000614063527186762",
            "extra": "mean: 11.416524151160223 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 559421.1564475726,
            "unit": "iter/sec",
            "range": "stddev: 2.2891272465485614e-7",
            "extra": "mean: 1.787561997744569 usec\nrounds: 21646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 627.1027049590328,
            "unit": "iter/sec",
            "range": "stddev: 0.000024183834450075913",
            "extra": "mean: 1.5946351245053672 msec\nrounds: 506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 71.58666941443136,
            "unit": "iter/sec",
            "range": "stddev: 0.0006315920864624631",
            "extra": "mean: 13.969081229506218 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.68270158339368,
            "unit": "iter/sec",
            "range": "stddev: 0.00008382835108839013",
            "extra": "mean: 7.008558072581283 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.903097966555068,
            "unit": "iter/sec",
            "range": "stddev: 0.000259199107345592",
            "extra": "mean: 203.952685999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.650194771557862,
            "unit": "iter/sec",
            "range": "stddev: 0.00013691218378611154",
            "extra": "mean: 73.25902792857164 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 251.3862308170525,
            "unit": "iter/sec",
            "range": "stddev: 0.00022074741109829183",
            "extra": "mean: 3.9779426134431146 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1449.049279799065,
            "unit": "iter/sec",
            "range": "stddev: 0.000005622504337223089",
            "extra": "mean: 690.1076546814659 usec\nrounds: 1196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1430848.9616944126,
            "unit": "iter/sec",
            "range": "stddev: 1.0851462683935159e-7",
            "extra": "mean: 698.8857851326244 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15285094660499043,
            "unit": "iter/sec",
            "range": "stddev: 0.033218116674834194",
            "extra": "mean: 6.542321275800009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.71404367821148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005959978747932818",
            "extra": "mean: 28.000189757568187 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 76.00915184146155,
            "unit": "iter/sec",
            "range": "stddev: 0.016303591810019016",
            "extra": "mean: 13.156310467531346 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 257.50117263291236,
            "unit": "iter/sec",
            "range": "stddev: 0.0002142371118569756",
            "extra": "mean: 3.883477460607826 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 87.34816494472317,
            "unit": "iter/sec",
            "range": "stddev: 0.0005921101410846196",
            "extra": "mean: 11.448437418609004 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1475186.034333867,
            "unit": "iter/sec",
            "range": "stddev: 9.616293627525015e-8",
            "extra": "mean: 677.8806040226368 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.6967234447423,
            "unit": "iter/sec",
            "range": "stddev: 0.000015801478528817998",
            "extra": "mean: 3.7495773741936995 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 117.83726037158169,
            "unit": "iter/sec",
            "range": "stddev: 0.000379619958462187",
            "extra": "mean: 8.486280119264938 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 85.01070141024557,
            "unit": "iter/sec",
            "range": "stddev: 0.00009611532019707897",
            "extra": "mean: 11.763224904758626 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 87.75853519051807,
            "unit": "iter/sec",
            "range": "stddev: 0.0006475950810562643",
            "extra": "mean: 11.394903046513539 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.197289004777279,
            "unit": "iter/sec",
            "range": "stddev: 0.0016759037865217664",
            "extra": "mean: 455.1062686000023 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 68.32638117035748,
            "unit": "iter/sec",
            "range": "stddev: 0.0006634151418942746",
            "extra": "mean: 14.63563535593536 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.25506116343655,
            "unit": "iter/sec",
            "range": "stddev: 0.0007898516542051034",
            "extra": "mean: 30.070610758625975 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.115413329787334,
            "unit": "iter/sec",
            "range": "stddev: 0.0005375992296129012",
            "extra": "mean: 39.816187250001654 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 70.32566983100712,
            "unit": "iter/sec",
            "range": "stddev: 0.0006449920829942885",
            "extra": "mean: 14.219558838230823 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5723106559865548,
            "unit": "iter/sec",
            "range": "stddev: 0.05986985089365934",
            "extra": "mean: 1.7473027795999883 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120201.98836019005,
            "unit": "iter/sec",
            "range": "stddev: 4.429227549481134e-7",
            "extra": "mean: 8.319329934904738 usec\nrounds: 35213"
          }
        ]
      }
    ]
  }
}