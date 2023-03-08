window.BENCHMARK_DATA = {
  "lastUpdate": 1678292497372,
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
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "af4db5c61913dfc883e287d241c84bb1f47c6be0",
          "message": "fix(snowflake): quote column names on construction of `sa.Column`",
          "timestamp": "2023-03-08T10:16:37-06:00",
          "tree_id": "a69ff1ba6a647dce48a8e32d2e5be7d1b4bcd6a0",
          "url": "https://github.com/ibis-project/ibis/commit/af4db5c61913dfc883e287d241c84bb1f47c6be0"
        },
        "date": 1678292419579,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8957725733820051,
            "unit": "iter/sec",
            "range": "stddev: 0.004327242466137911",
            "extra": "mean: 1.1163547865999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 752405.6919381963,
            "unit": "iter/sec",
            "range": "stddev: 2.5451463412586846e-7",
            "extra": "mean: 1.3290702219755954 usec\nrounds: 23981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1767.4615902678072,
            "unit": "iter/sec",
            "range": "stddev: 0.000007831803177073405",
            "extra": "mean: 565.7831578950913 usec\nrounds: 1254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 342.17686648110225,
            "unit": "iter/sec",
            "range": "stddev: 0.00001552467438139844",
            "extra": "mean: 2.9224652451928046 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 98.25380028472358,
            "unit": "iter/sec",
            "range": "stddev: 0.00013453192105402013",
            "extra": "mean: 10.177723376624233 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.72210661794468,
            "unit": "iter/sec",
            "range": "stddev: 0.0005323803548934925",
            "extra": "mean: 9.197761440679711 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5765.990981976464,
            "unit": "iter/sec",
            "range": "stddev: 0.00004860852953296461",
            "extra": "mean: 173.4307256334314 usec\nrounds: 3160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71429.78627430442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015666665713043702",
            "extra": "mean: 13.999761894285996 usec\nrounds: 13662"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.36366129073907,
            "unit": "iter/sec",
            "range": "stddev: 0.011589896452122205",
            "extra": "mean: 9.865468425925568 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1809577.2715433368,
            "unit": "iter/sec",
            "range": "stddev: 1.1633511263282578e-7",
            "extra": "mean: 552.6152520401234 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 92.0981966507194,
            "unit": "iter/sec",
            "range": "stddev: 0.011015888953933278",
            "extra": "mean: 10.85797590361601 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.52378911185205,
            "unit": "iter/sec",
            "range": "stddev: 0.0008445487639923428",
            "extra": "mean: 26.649760689656627 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.60279784232797,
            "unit": "iter/sec",
            "range": "stddev: 0.00014017604681203458",
            "extra": "mean: 8.431504300003212 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.2605702191274,
            "unit": "iter/sec",
            "range": "stddev: 0.0002376667360689254",
            "extra": "mean: 15.56164217948919 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14083.091353813275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014901101988251012",
            "extra": "mean: 71.00713720281523 usec\nrounds: 1895"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.2952079360185,
            "unit": "iter/sec",
            "range": "stddev: 0.00002469498288317665",
            "extra": "mean: 1.8611742394677762 msec\nrounds: 451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5305.039354819703,
            "unit": "iter/sec",
            "range": "stddev: 0.00005657369580862128",
            "extra": "mean: 188.5000153847089 usec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6131464.97555806,
            "unit": "iter/sec",
            "range": "stddev: 7.702804905458218e-9",
            "extra": "mean: 163.09316027821336 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 678.1475343907707,
            "unit": "iter/sec",
            "range": "stddev: 0.000053769245720962",
            "extra": "mean: 1.4746053760976552 msec\nrounds: 569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6920101760107426,
            "unit": "iter/sec",
            "range": "stddev: 0.010899050843470611",
            "extra": "mean: 1.445065455200006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 103.30782551585568,
            "unit": "iter/sec",
            "range": "stddev: 0.011522339427787727",
            "extra": "mean: 9.679808814159195 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5585.315418340247,
            "unit": "iter/sec",
            "range": "stddev: 0.00006015809231873194",
            "extra": "mean: 179.04091803237208 usec\nrounds: 305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.020936242617225,
            "unit": "iter/sec",
            "range": "stddev: 0.0002870149298118807",
            "extra": "mean: 21.26712226316018 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 154.82895462563468,
            "unit": "iter/sec",
            "range": "stddev: 0.0001270030329127974",
            "extra": "mean: 6.458740242856566 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.07514785062733,
            "unit": "iter/sec",
            "range": "stddev: 0.00004446584877108779",
            "extra": "mean: 5.126229614680177 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8537566695842466,
            "unit": "iter/sec",
            "range": "stddev: 0.04516887252930408",
            "extra": "mean: 1.1712939243999927 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.583742928372458,
            "unit": "iter/sec",
            "range": "stddev: 0.002284763182095515",
            "extra": "mean: 387.03540860000203 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.56322945536454,
            "unit": "iter/sec",
            "range": "stddev: 0.000431790114757188",
            "extra": "mean: 11.687263400006032 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5689.8350532639015,
            "unit": "iter/sec",
            "range": "stddev: 0.000050064318302117195",
            "extra": "mean: 175.75201928329412 usec\nrounds: 1815"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.58742650303996,
            "unit": "iter/sec",
            "range": "stddev: 0.000699655733259966",
            "extra": "mean: 10.685196050000556 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2738602.9258686258,
            "unit": "iter/sec",
            "range": "stddev: 1.573759580400625e-8",
            "extra": "mean: 365.149686562273 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.604620569021,
            "unit": "iter/sec",
            "range": "stddev: 0.023259761266928435",
            "extra": "mean: 31.640943064515216 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2725679.175160937,
            "unit": "iter/sec",
            "range": "stddev: 1.4500832776165914e-8",
            "extra": "mean: 366.881036151406 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.698754139794811,
            "unit": "iter/sec",
            "range": "stddev: 0.00017817386330041556",
            "extra": "mean: 175.47695083332826 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 320.2651607294072,
            "unit": "iter/sec",
            "range": "stddev: 0.00019361522554706552",
            "extra": "mean: 3.122412683672772 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.9228349695888,
            "unit": "iter/sec",
            "range": "stddev: 0.0007174030702810547",
            "extra": "mean: 9.530813766992127 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12033414.360064127,
            "unit": "iter/sec",
            "range": "stddev: 5.29328401334673e-9",
            "extra": "mean: 83.10193350587816 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6911906.953869122,
            "unit": "iter/sec",
            "range": "stddev: 4.226354301062182e-9",
            "extra": "mean: 144.67787351219852 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 493100.23791178165,
            "unit": "iter/sec",
            "range": "stddev: 3.714271558261903e-7",
            "extra": "mean: 2.027985231227784 usec\nrounds: 2099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.33712319623737,
            "unit": "iter/sec",
            "range": "stddev: 0.0006916199153223996",
            "extra": "mean: 8.379622142856627 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.602003819394998,
            "unit": "iter/sec",
            "range": "stddev: 0.0014285782390709766",
            "extra": "mean: 94.32179209090918 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5210.072853108837,
            "unit": "iter/sec",
            "range": "stddev: 0.000022666393935587085",
            "extra": "mean: 191.93589575303207 usec\nrounds: 2331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7578591250846285,
            "unit": "iter/sec",
            "range": "stddev: 0.002419412911110668",
            "extra": "mean: 568.8737998000022 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.34444253344883,
            "unit": "iter/sec",
            "range": "stddev: 0.0006432808271185673",
            "extra": "mean: 9.229822745096254 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 305.95796092851646,
            "unit": "iter/sec",
            "range": "stddev: 0.00017642832993012712",
            "extra": "mean: 3.268422880598418 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.57801020451706,
            "unit": "iter/sec",
            "range": "stddev: 0.00011591758007910096",
            "extra": "mean: 13.231361837840938 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 290.66235879820726,
            "unit": "iter/sec",
            "range": "stddev: 0.00005803341949998992",
            "extra": "mean: 3.440417961701919 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2713127.034862373,
            "unit": "iter/sec",
            "range": "stddev: 1.784237734400878e-8",
            "extra": "mean: 368.57839207323383 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 317.2984344734631,
            "unit": "iter/sec",
            "range": "stddev: 0.00022272658959831328",
            "extra": "mean: 3.1516071034495883 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5315.679943825189,
            "unit": "iter/sec",
            "range": "stddev: 0.00005173254538847319",
            "extra": "mean: 188.12268807899582 usec\nrounds: 3238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1170.908774645567,
            "unit": "iter/sec",
            "range": "stddev: 0.00001178967145825473",
            "extra": "mean: 854.0374977569872 usec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 319.93233038458925,
            "unit": "iter/sec",
            "range": "stddev: 0.00020355122033293866",
            "extra": "mean: 3.125660975862941 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16870501679651437,
            "unit": "iter/sec",
            "range": "stddev: 0.1529493487835657",
            "extra": "mean: 5.927506004199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 240.25438677872302,
            "unit": "iter/sec",
            "range": "stddev: 0.0034941269927378058",
            "extra": "mean: 4.162254905759583 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12813.684922788647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027009703578020373",
            "extra": "mean: 78.04156306524584 usec\nrounds: 3980"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.83651703802929,
            "unit": "iter/sec",
            "range": "stddev: 0.0003617112015170733",
            "extra": "mean: 7.361790642202909 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.78674009144616,
            "unit": "iter/sec",
            "range": "stddev: 0.000639124947617337",
            "extra": "mean: 8.279054466102092 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 288.5928080696645,
            "unit": "iter/sec",
            "range": "stddev: 0.0002575130075952271",
            "extra": "mean: 3.4650898152618073 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.994552462858,
            "unit": "iter/sec",
            "range": "stddev: 0.00016788981030923492",
            "extra": "mean: 9.90152414772829 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 109.3208914158418,
            "unit": "iter/sec",
            "range": "stddev: 0.0006611704300812955",
            "extra": "mean: 9.14738241747532 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149325.7346664518,
            "unit": "iter/sec",
            "range": "stddev: 3.0936153886252384e-7",
            "extra": "mean: 6.696769329370421 usec\nrounds: 41323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5372.444600831793,
            "unit": "iter/sec",
            "range": "stddev: 0.00005319794333776778",
            "extra": "mean: 186.1350045089668 usec\nrounds: 2218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.81871767608948,
            "unit": "iter/sec",
            "range": "stddev: 0.0011560596562054171",
            "extra": "mean: 23.912737060604947 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.88471889410556,
            "unit": "iter/sec",
            "range": "stddev: 0.000043555283588406846",
            "extra": "mean: 3.391155715868426 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5370.915841517727,
            "unit": "iter/sec",
            "range": "stddev: 0.000066542806273232",
            "extra": "mean: 186.18798534691197 usec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8461761011581072,
            "unit": "iter/sec",
            "range": "stddev: 0.0024797957396774863",
            "extra": "mean: 1.181787099199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.28181987665661,
            "unit": "iter/sec",
            "range": "stddev: 0.0006364174541487472",
            "extra": "mean: 8.245258860866354 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.805498249785748,
            "unit": "iter/sec",
            "range": "stddev: 0.00015206269179684207",
            "extra": "mean: 63.26912218749925 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.53084425992397,
            "unit": "iter/sec",
            "range": "stddev: 0.0004372322650066275",
            "extra": "mean: 15.496465472729554 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.6525667539709,
            "unit": "iter/sec",
            "range": "stddev: 0.000016600825464764112",
            "extra": "mean: 1.3375196507939882 msec\nrounds: 630"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 317.105253150958,
            "unit": "iter/sec",
            "range": "stddev: 0.00018635237541623391",
            "extra": "mean: 3.1535270704706675 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5422.900498130706,
            "unit": "iter/sec",
            "range": "stddev: 0.00005062619224855232",
            "extra": "mean: 184.40316217210767 usec\nrounds: 2855"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.51579841147026,
            "unit": "iter/sec",
            "range": "stddev: 0.000637880195286422",
            "extra": "mean: 9.66036117525799 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.2197837639265,
            "unit": "iter/sec",
            "range": "stddev: 0.000713460680557272",
            "extra": "mean: 8.755050719294264 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5547346.165831353,
            "unit": "iter/sec",
            "range": "stddev: 8.893073436348703e-9",
            "extra": "mean: 180.26637785103284 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12044.857752320371,
            "unit": "iter/sec",
            "range": "stddev: 0.00007095395504841124",
            "extra": "mean: 83.02298130564105 usec\nrounds: 3905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 175.8847207289009,
            "unit": "iter/sec",
            "range": "stddev: 0.003335511618783687",
            "extra": "mean: 5.685542188405015 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.13171659446513,
            "unit": "iter/sec",
            "range": "stddev: 0.02132954892443785",
            "extra": "mean: 11.886123812500315 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.37179099185917,
            "unit": "iter/sec",
            "range": "stddev: 0.00004842619947679792",
            "extra": "mean: 6.046980527950063 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.25201045420842,
            "unit": "iter/sec",
            "range": "stddev: 0.0006624152880737009",
            "extra": "mean: 8.247285931623017 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 312.8512957779903,
            "unit": "iter/sec",
            "range": "stddev: 0.0002241126907050127",
            "extra": "mean: 3.1964067705496526 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.78479141014256,
            "unit": "iter/sec",
            "range": "stddev: 0.00015460417696180824",
            "extra": "mean: 6.29783237499737 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.351521419739836,
            "unit": "iter/sec",
            "range": "stddev: 0.0009111321580740582",
            "extra": "mean: 41.06519600000761 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.6558456889146,
            "unit": "iter/sec",
            "range": "stddev: 0.0007031323666396495",
            "extra": "mean: 8.876592189999428 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.290513819681735,
            "unit": "iter/sec",
            "range": "stddev: 0.0003675942206620322",
            "extra": "mean: 21.602698209299664 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 304.2512579395577,
            "unit": "iter/sec",
            "range": "stddev: 0.00021298874518071412",
            "extra": "mean: 3.28675715844915 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 108.99851908352782,
            "unit": "iter/sec",
            "range": "stddev: 0.0004808603396752865",
            "extra": "mean: 9.174436574075647 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7964.43039376505,
            "unit": "iter/sec",
            "range": "stddev: 0.00002919120286566272",
            "extra": "mean: 125.55825722111268 usec\nrounds: 5089"
          }
        ]
      }
    ]
  }
}