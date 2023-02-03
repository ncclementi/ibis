window.BENCHMARK_DATA = {
  "lastUpdate": 1675440619811,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "6d191110c804fa06baaa622c86ab20384b6d1496",
          "message": "docs: add CNAME file to mkdocs source",
          "timestamp": "2023-02-03T11:03:16-05:00",
          "tree_id": "c9bc090b7a95ba132f10a2bcb86555f6924096fa",
          "url": "https://github.com/ibis-project/ibis/commit/6d191110c804fa06baaa622c86ab20384b6d1496"
        },
        "date": 1675440539066,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.75564342178068,
            "unit": "iter/sec",
            "range": "stddev: 0.005924607844490631",
            "extra": "mean: 12.697502763636109 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.70320350376099,
            "unit": "iter/sec",
            "range": "stddev: 0.0002024513312300539",
            "extra": "mean: 10.029768000004916 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57157.23840869418,
            "unit": "iter/sec",
            "range": "stddev: 7.401198009561512e-7",
            "extra": "mean: 17.49559684548878 usec\nrounds: 13124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 80.40451188309288,
            "unit": "iter/sec",
            "range": "stddev: 0.008657250032690208",
            "extra": "mean: 12.43711300000163 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 93.3180745552066,
            "unit": "iter/sec",
            "range": "stddev: 0.000608710925732545",
            "extra": "mean: 10.716037646151861 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10372.929331051157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018513326715123618",
            "extra": "mean: 96.40478288100546 usec\nrounds: 5748"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5221.98158056848,
            "unit": "iter/sec",
            "range": "stddev: 0.00004890143792029644",
            "extra": "mean: 191.498185999181 usec\nrounds: 2457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5528233.935585184,
            "unit": "iter/sec",
            "range": "stddev: 4.910796856436291e-9",
            "extra": "mean: 180.8895954209445 nsec\nrounds: 54946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1560150.8065129672,
            "unit": "iter/sec",
            "range": "stddev: 8.562061575947149e-8",
            "extra": "mean: 640.9636785273734 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 149.77912820862034,
            "unit": "iter/sec",
            "range": "stddev: 0.00011566073077133049",
            "extra": "mean: 6.676497666665189 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15464579535885414,
            "unit": "iter/sec",
            "range": "stddev: 0.057049672988738295",
            "extra": "mean: 6.466389840599993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 90.59613033680108,
            "unit": "iter/sec",
            "range": "stddev: 0.00044446748623309224",
            "extra": "mean: 11.03799904347338 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.82454221490089,
            "unit": "iter/sec",
            "range": "stddev: 0.0005386688815838949",
            "extra": "mean: 10.773012999998103 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 161.76587783211764,
            "unit": "iter/sec",
            "range": "stddev: 0.0006003246566567449",
            "extra": "mean: 6.181773396227668 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6097.697615026698,
            "unit": "iter/sec",
            "range": "stddev: 0.000047228079151058716",
            "extra": "mean: 163.99632502859384 usec\nrounds: 3532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 984.0734400375421,
            "unit": "iter/sec",
            "range": "stddev: 0.00002542102094592331",
            "extra": "mean: 1.0161843205135688 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 251.7744477236387,
            "unit": "iter/sec",
            "range": "stddev: 0.00018284930321172204",
            "extra": "mean: 3.971808930736507 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8669565958057226,
            "unit": "iter/sec",
            "range": "stddev: 0.005643466137082705",
            "extra": "mean: 1.1534602825999969 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 70.63806628789476,
            "unit": "iter/sec",
            "range": "stddev: 0.00006934540994810841",
            "extra": "mean: 14.156672918032156 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4483647.008477024,
            "unit": "iter/sec",
            "range": "stddev: 9.806672768662029e-9",
            "extra": "mean: 223.03272271638917 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.23820453193093,
            "unit": "iter/sec",
            "range": "stddev: 0.00005439842432051756",
            "extra": "mean: 6.9329759285697685 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5311.609362640786,
            "unit": "iter/sec",
            "range": "stddev: 0.00004771461667714109",
            "extra": "mean: 188.2668569404787 usec\nrounds: 2125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120199.6390029132,
            "unit": "iter/sec",
            "range": "stddev: 2.880628087746642e-7",
            "extra": "mean: 8.319492540038024 usec\nrounds: 32574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.6410739974393,
            "unit": "iter/sec",
            "range": "stddev: 0.0004540388507701501",
            "extra": "mean: 26.566723363632754 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.14390912682308,
            "unit": "iter/sec",
            "range": "stddev: 0.00014801633872674858",
            "extra": "mean: 17.19870602127571 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.61041527008966,
            "unit": "iter/sec",
            "range": "stddev: 0.0005695707688580521",
            "extra": "mean: 10.459111564102113 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 164.75406142823053,
            "unit": "iter/sec",
            "range": "stddev: 0.0006259650081731384",
            "extra": "mean: 6.069653101909211 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 142.7820376864494,
            "unit": "iter/sec",
            "range": "stddev: 0.010917341718540662",
            "extra": "mean: 7.00368208917153 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 90.90479210834776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000789492516357816",
            "extra": "mean: 11.000520179487548 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.44883009646946,
            "unit": "iter/sec",
            "range": "stddev: 0.00023081063799164684",
            "extra": "mean: 14.826054040814917 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10694.406080623477,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016753462150557643",
            "extra": "mean: 93.5068289403969 usec\nrounds: 5653"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4857282.955908153,
            "unit": "iter/sec",
            "range": "stddev: 5.321419222114101e-9",
            "extra": "mean: 205.87641466990405 nsec\nrounds: 50252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 241.26696786034856,
            "unit": "iter/sec",
            "range": "stddev: 0.0002067536084642867",
            "extra": "mean: 4.144786204545106 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1573008.4964162163,
            "unit": "iter/sec",
            "range": "stddev: 8.92773373374598e-8",
            "extra": "mean: 635.7244746473392 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 508.23063024278434,
            "unit": "iter/sec",
            "range": "stddev: 0.00005253201868039455",
            "extra": "mean: 1.9676106485795533 msec\nrounds: 387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7538697268027597,
            "unit": "iter/sec",
            "range": "stddev: 0.0026064568485978765",
            "extra": "mean: 1.326489132600011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 627.4594403116685,
            "unit": "iter/sec",
            "range": "stddev: 0.000011571743548905714",
            "extra": "mean: 1.5937285117637006 msec\nrounds: 510"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.205822636117034,
            "unit": "iter/sec",
            "range": "stddev: 0.00020704910089524152",
            "extra": "mean: 22.121044186043715 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5903.641986620226,
            "unit": "iter/sec",
            "range": "stddev: 0.000045550211155337636",
            "extra": "mean: 169.38696524388834 usec\nrounds: 2532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 271.927301114503,
            "unit": "iter/sec",
            "range": "stddev: 0.0002491572276992091",
            "extra": "mean: 3.677453480770291 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.311738310922232,
            "unit": "iter/sec",
            "range": "stddev: 0.00025007566970615327",
            "extra": "mean: 107.39133409999795 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 388190.8696595077,
            "unit": "iter/sec",
            "range": "stddev: 2.5383276161194663e-7",
            "extra": "mean: 2.576052344757943 usec\nrounds: 2025"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 174.7226711671514,
            "unit": "iter/sec",
            "range": "stddev: 0.00002477456563082678",
            "extra": "mean: 5.72335572321541 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 256.77315524669615,
            "unit": "iter/sec",
            "range": "stddev: 0.00018623813028267682",
            "extra": "mean: 3.8944881097061907 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1567077.5772694428,
            "unit": "iter/sec",
            "range": "stddev: 1.3955549797834562e-7",
            "extra": "mean: 638.1305013262022 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 249.64839893440566,
            "unit": "iter/sec",
            "range": "stddev: 0.00018839737397964866",
            "extra": "mean: 4.005633540084297 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5989530011168043,
            "unit": "iter/sec",
            "range": "stddev: 0.0016795917562485922",
            "extra": "mean: 1.6695800808000059 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.55491501042837,
            "unit": "iter/sec",
            "range": "stddev: 0.0007388804708040983",
            "extra": "mean: 6.917786226278496 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 135.49522892325496,
            "unit": "iter/sec",
            "range": "stddev: 0.009357327600875355",
            "extra": "mean: 7.380333668917627 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.1332244025721,
            "unit": "iter/sec",
            "range": "stddev: 0.000015030420701045784",
            "extra": "mean: 3.7575165680453657 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.1812476620056,
            "unit": "iter/sec",
            "range": "stddev: 0.0003352946874505879",
            "extra": "mean: 8.184562026787745 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.81136232247205,
            "unit": "iter/sec",
            "range": "stddev: 0.00034431251351186714",
            "extra": "mean: 10.659689564709105 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9642.308741036944,
            "unit": "iter/sec",
            "range": "stddev: 0.00002252620389784568",
            "extra": "mean: 103.70960180356752 usec\nrounds: 3993"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6179.897758108249,
            "unit": "iter/sec",
            "range": "stddev: 0.000045411460228138087",
            "extra": "mean: 161.81497480083127 usec\nrounds: 2381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8686631214657613,
            "unit": "iter/sec",
            "range": "stddev: 0.0032737438394777833",
            "extra": "mean: 1.1511942608000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 571503.6210460544,
            "unit": "iter/sec",
            "range": "stddev: 2.828432292001804e-7",
            "extra": "mean: 1.7497701907288794 usec\nrounds: 22523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2644583693405793,
            "unit": "iter/sec",
            "range": "stddev: 0.0017323900563459955",
            "extra": "mean: 441.6067054000223 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 146.22395463488039,
            "unit": "iter/sec",
            "range": "stddev: 0.00008804230803315094",
            "extra": "mean: 6.838824750000703 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4603.262145706401,
            "unit": "iter/sec",
            "range": "stddev: 0.00001935871958506716",
            "extra": "mean: 217.2372479226997 usec\nrounds: 2287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.064410668888037,
            "unit": "iter/sec",
            "range": "stddev: 0.00012102728239060862",
            "extra": "mean: 197.45634100000112 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.19789887215542,
            "unit": "iter/sec",
            "range": "stddev: 0.00007943392605992519",
            "extra": "mean: 13.66159432727107 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.46907025310037,
            "unit": "iter/sec",
            "range": "stddev: 0.0003712896303194154",
            "extra": "mean: 4.515303192708468 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 162.51064484856118,
            "unit": "iter/sec",
            "range": "stddev: 0.000644655248410935",
            "extra": "mean: 6.153443061726019 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.191595717525827,
            "unit": "iter/sec",
            "range": "stddev: 0.0002862041014891153",
            "extra": "mean: 70.46423953333564 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 250.11580388096948,
            "unit": "iter/sec",
            "range": "stddev: 0.00020546630028601905",
            "extra": "mean: 3.998147995781592 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.331142500237203,
            "unit": "iter/sec",
            "range": "stddev: 0.0010306443517151757",
            "extra": "mean: 39.47709819999773 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12018703.888979126,
            "unit": "iter/sec",
            "range": "stddev: 3.4473276943525377e-9",
            "extra": "mean: 83.20364735137196 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5891.074293729859,
            "unit": "iter/sec",
            "range": "stddev: 0.00006436776221445747",
            "extra": "mean: 169.74832605053817 usec\nrounds: 2334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 144.12905318308438,
            "unit": "iter/sec",
            "range": "stddev: 0.010833084256923394",
            "extra": "mean: 6.938226387498148 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 295.47666273749206,
            "unit": "iter/sec",
            "range": "stddev: 0.00007491228576967288",
            "extra": "mean: 3.384362036362993 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2028265.6072954864,
            "unit": "iter/sec",
            "range": "stddev: 2.134803762271087e-8",
            "extra": "mean: 493.0320744990979 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.96932200828446,
            "unit": "iter/sec",
            "range": "stddev: 0.0016068652092669441",
            "extra": "mean: 28.596493799996853 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.80669431399234,
            "unit": "iter/sec",
            "range": "stddev: 0.00010558675105545925",
            "extra": "mean: 9.633290093750801 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 407.948341314618,
            "unit": "iter/sec",
            "range": "stddev: 0.00004640273183304664",
            "extra": "mean: 2.4512907609269567 msec\nrounds: 389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19118.599931775945,
            "unit": "iter/sec",
            "range": "stddev: 0.000013265901306718918",
            "extra": "mean: 52.30508528702232 usec\nrounds: 8231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5908484662772215,
            "unit": "iter/sec",
            "range": "stddev: 0.0006354441501505304",
            "extra": "mean: 628.5953824000103 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.73839664601692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005792667856310943",
            "extra": "mean: 10.44513001087118 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 252.14683653359737,
            "unit": "iter/sec",
            "range": "stddev: 0.00020379538213058344",
            "extra": "mean: 3.965943074073645 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5141.648507977196,
            "unit": "iter/sec",
            "range": "stddev: 0.000052781200705098356",
            "extra": "mean: 194.49015202974573 usec\nrounds: 3006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1445.8316176062306,
            "unit": "iter/sec",
            "range": "stddev: 0.000004670996058187652",
            "extra": "mean: 691.6434720494182 usec\nrounds: 1127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 338.47855275688613,
            "unit": "iter/sec",
            "range": "stddev: 0.00004416845309781302",
            "extra": "mean: 2.954396938462021 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.29566548126031,
            "unit": "iter/sec",
            "range": "stddev: 0.00032501542700537984",
            "extra": "mean: 21.600294317073438 msec\nrounds: 41"
          }
        ]
      }
    ]
  }
}