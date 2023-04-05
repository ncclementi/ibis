window.BENCHMARK_DATA = {
  "lastUpdate": 1680729477497,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "nicholas.b.crews@gmail.com",
            "name": "Nick Crews",
            "username": "NickCrews"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "e11de3fe0aab878fe88ea5a2cf65ebbf6374cc99",
          "message": "fix: improve typing signature of .dropna()",
          "timestamp": "2023-04-05T16:08:41-05:00",
          "tree_id": "2325fc89f7c9730cd03de15d84f3041625aada3f",
          "url": "https://github.com/ibis-project/ibis/commit/e11de3fe0aab878fe88ea5a2cf65ebbf6374cc99"
        },
        "date": 1680729390935,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.37796182749571,
            "unit": "iter/sec",
            "range": "stddev: 0.0006164844104147406",
            "extra": "mean: 9.864076787237009 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1731246.4819711822,
            "unit": "iter/sec",
            "range": "stddev: 7.412886198382836e-8",
            "extra": "mean: 577.6185022836314 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1825393.126065495,
            "unit": "iter/sec",
            "range": "stddev: 9.797340020359543e-8",
            "extra": "mean: 547.8271971777547 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.16981710421091,
            "unit": "iter/sec",
            "range": "stddev: 0.00042512095426326034",
            "extra": "mean: 17.49174740540396 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5619.133004309307,
            "unit": "iter/sec",
            "range": "stddev: 0.00003206697327827914",
            "extra": "mean: 177.96339741969112 usec\nrounds: 1550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 141.21257046698528,
            "unit": "iter/sec",
            "range": "stddev: 0.00003827837095572619",
            "extra": "mean: 7.08152253509042 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9281475879467229,
            "unit": "iter/sec",
            "range": "stddev: 0.0020195234743444306",
            "extra": "mean: 1.077414856200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.586230519538012,
            "unit": "iter/sec",
            "range": "stddev: 0.002677425869556772",
            "extra": "mean: 386.66313479999985 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 691.8891332990161,
            "unit": "iter/sec",
            "range": "stddev: 0.000018374286768189267",
            "extra": "mean: 1.4453182625254886 msec\nrounds: 499"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 241.61739247002288,
            "unit": "iter/sec",
            "range": "stddev: 0.004297690102345393",
            "extra": "mean: 4.138774902655522 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1758.2187132315591,
            "unit": "iter/sec",
            "range": "stddev: 0.000017504552461885874",
            "extra": "mean: 568.7574546183886 usec\nrounds: 1245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 757.324122066427,
            "unit": "iter/sec",
            "range": "stddev: 0.000014936919006824537",
            "extra": "mean: 1.3204385953948095 msec\nrounds: 608"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.49773667963719,
            "unit": "iter/sec",
            "range": "stddev: 0.0006576903188655588",
            "extra": "mean: 11.428867053571727 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 760611.8905224489,
            "unit": "iter/sec",
            "range": "stddev: 2.2743917743360274e-7",
            "extra": "mean: 1.3147309586668705 usec\nrounds: 25576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11470.229181344474,
            "unit": "iter/sec",
            "range": "stddev: 0.000019342761220702777",
            "extra": "mean: 87.18221616935345 usec\nrounds: 4626"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.424123495774175,
            "unit": "iter/sec",
            "range": "stddev: 0.00023335027426400526",
            "extra": "mean: 17.414284086958503 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 88.51713965373372,
            "unit": "iter/sec",
            "range": "stddev: 0.012244661105377315",
            "extra": "mean: 11.297247108434092 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 270.6558456729264,
            "unit": "iter/sec",
            "range": "stddev: 0.00027506966586336853",
            "extra": "mean: 3.694728992509729 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2281.580408796541,
            "unit": "iter/sec",
            "range": "stddev: 0.00008622541755604139",
            "extra": "mean: 438.29268350330346 usec\nrounds: 1861"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.85066190657007,
            "unit": "iter/sec",
            "range": "stddev: 0.0006519085660287568",
            "extra": "mean: 9.818296526313423 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.54848571199899,
            "unit": "iter/sec",
            "range": "stddev: 0.00032830811260057586",
            "extra": "mean: 20.597964804344972 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.38017241303578,
            "unit": "iter/sec",
            "range": "stddev: 0.000034806337186179536",
            "extra": "mean: 5.17116097023704 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.343852848311752,
            "unit": "iter/sec",
            "range": "stddev: 0.00048056616663807257",
            "extra": "mean: 96.67577590909104 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.36206357935068,
            "unit": "iter/sec",
            "range": "stddev: 0.00004427956427039279",
            "extra": "mean: 9.401848425533386 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 81.76243661773916,
            "unit": "iter/sec",
            "range": "stddev: 0.015675750908399438",
            "extra": "mean: 12.230555269227876 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2277.5341056923075,
            "unit": "iter/sec",
            "range": "stddev: 0.00010771487078832135",
            "extra": "mean: 439.07136121503993 usec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7619.024654405981,
            "unit": "iter/sec",
            "range": "stddev: 0.000013525869904061321",
            "extra": "mean: 131.25039560302687 usec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1194.8692943726828,
            "unit": "iter/sec",
            "range": "stddev: 0.000017529681712722616",
            "extra": "mean: 836.9116226432188 usec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6675811990578319,
            "unit": "iter/sec",
            "range": "stddev: 0.040918653791344066",
            "extra": "mean: 1.4979451209999866 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.29060078762242,
            "unit": "iter/sec",
            "range": "stddev: 0.014573350970779882",
            "extra": "mean: 12.611835325582549 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.40755612187775,
            "unit": "iter/sec",
            "range": "stddev: 0.0005759329240116022",
            "extra": "mean: 10.266144022223342 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.12935846140104,
            "unit": "iter/sec",
            "range": "stddev: 0.0007707281306367121",
            "extra": "mean: 22.66065120513088 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.66415113131478,
            "unit": "iter/sec",
            "range": "stddev: 0.00010343051982250854",
            "extra": "mean: 6.302620931506908 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.3049834214701,
            "unit": "iter/sec",
            "range": "stddev: 0.011849701331675367",
            "extra": "mean: 11.722644561798411 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13391.439211516154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021351437502226233",
            "extra": "mean: 74.67457262846223 usec\nrounds: 7263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.20453046884586,
            "unit": "iter/sec",
            "range": "stddev: 0.0008155188731197985",
            "extra": "mean: 9.880980578313473 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.43009513635587,
            "unit": "iter/sec",
            "range": "stddev: 0.0008875539689858033",
            "extra": "mean: 10.478874600000596 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.636280936319,
            "unit": "iter/sec",
            "range": "stddev: 0.0006867224061297403",
            "extra": "mean: 10.036504680851493 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11843.233863773388,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017607016998568188",
            "extra": "mean: 84.43639731364628 usec\nrounds: 6403"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.23511582538313,
            "unit": "iter/sec",
            "range": "stddev: 0.0001828096333649899",
            "extra": "mean: 6.483607800004165 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2528735.6594852996,
            "unit": "iter/sec",
            "range": "stddev: 1.9320027631156624e-8",
            "extra": "mean: 395.454541185146 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 485111.9041159911,
            "unit": "iter/sec",
            "range": "stddev: 0.000001390798249277148",
            "extra": "mean: 2.061380047604229 usec\nrounds: 2105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1973.0901180732067,
            "unit": "iter/sec",
            "range": "stddev: 0.0030660138359752238",
            "extra": "mean: 506.8192227208233 usec\nrounds: 1338"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.562853301694888,
            "unit": "iter/sec",
            "range": "stddev: 0.00018868271126996875",
            "extra": "mean: 64.25556937499977 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69259.25943081916,
            "unit": "iter/sec",
            "range": "stddev: 8.226052199211966e-7",
            "extra": "mean: 14.438502638031638 usec\nrounds: 14026"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.3000301949721,
            "unit": "iter/sec",
            "range": "stddev: 0.00006019711122700477",
            "extra": "mean: 10.493176108697169 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 280.4364377523783,
            "unit": "iter/sec",
            "range": "stddev: 0.0002482809731243795",
            "extra": "mean: 3.565870426877219 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.9017456602707,
            "unit": "iter/sec",
            "range": "stddev: 0.0004017597434941775",
            "extra": "mean: 3.9856239236933533 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5917701.233220242,
            "unit": "iter/sec",
            "range": "stddev: 1.2164443442562595e-8",
            "extra": "mean: 168.9845364930157 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.318541429783064,
            "unit": "iter/sec",
            "range": "stddev: 0.00039357526423506526",
            "extra": "mean: 37.99602659090986 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.49876431691442,
            "unit": "iter/sec",
            "range": "stddev: 0.00011755080383386458",
            "extra": "mean: 10.256540244444068 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2522020.493799725,
            "unit": "iter/sec",
            "range": "stddev: 1.762791534025193e-8",
            "extra": "mean: 396.50748376495005 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.13644127987142,
            "unit": "iter/sec",
            "range": "stddev: 0.0004229049907597159",
            "extra": "mean: 15.35238923636164 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2334.7907295930427,
            "unit": "iter/sec",
            "range": "stddev: 0.00009738495420014217",
            "extra": "mean: 428.30391063540895 usec\nrounds: 1354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17877769298353835,
            "unit": "iter/sec",
            "range": "stddev: 0.07212278968560935",
            "extra": "mean: 5.593539010999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7268386.90587635,
            "unit": "iter/sec",
            "range": "stddev: 6.542648251543517e-9",
            "extra": "mean: 137.58210906350376 nsec\nrounds: 59524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2337.4794899803223,
            "unit": "iter/sec",
            "range": "stddev: 0.00007850402551908404",
            "extra": "mean: 427.81124039228183 usec\nrounds: 1327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.682956180171859,
            "unit": "iter/sec",
            "range": "stddev: 0.0007418814156879267",
            "extra": "mean: 594.1925355999956 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2304.2534955192123,
            "unit": "iter/sec",
            "range": "stddev: 0.00008076630563338856",
            "extra": "mean: 433.98002951696606 usec\nrounds: 1389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.750884505254,
            "unit": "iter/sec",
            "range": "stddev: 0.0002734103687759639",
            "extra": "mean: 3.5746088945117127 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.19931250650983,
            "unit": "iter/sec",
            "range": "stddev: 0.000051834420469370834",
            "extra": "mean: 8.389310130839782 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.96962214070113,
            "unit": "iter/sec",
            "range": "stddev: 0.0007371257161240406",
            "extra": "mean: 10.312507957894468 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 376.331824887335,
            "unit": "iter/sec",
            "range": "stddev: 0.00002775865763811913",
            "extra": "mean: 2.6572294285751057 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.72628009025856,
            "unit": "iter/sec",
            "range": "stddev: 0.0006390249346421775",
            "extra": "mean: 23.965711725006145 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.17004702511276,
            "unit": "iter/sec",
            "range": "stddev: 0.026181900551946972",
            "extra": "mean: 26.198553000002388 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.536428379684097,
            "unit": "iter/sec",
            "range": "stddev: 0.0001769668755353842",
            "extra": "mean: 180.62186150000534 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.9219590963244,
            "unit": "iter/sec",
            "range": "stddev: 0.0002397633953881164",
            "extra": "mean: 3.7185509259279677 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138445.0068383192,
            "unit": "iter/sec",
            "range": "stddev: 3.3002200174703377e-7",
            "extra": "mean: 7.223084622819472 usec\nrounds: 40651"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.80068255760844,
            "unit": "iter/sec",
            "range": "stddev: 0.0008686026010356117",
            "extra": "mean: 10.019971551023863 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.70237706853504,
            "unit": "iter/sec",
            "range": "stddev: 0.0009216739434722415",
            "extra": "mean: 10.559397038960398 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 261.83001991858464,
            "unit": "iter/sec",
            "range": "stddev: 0.00041800282898539026",
            "extra": "mean: 3.8192717561987255 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2322.5914090135207,
            "unit": "iter/sec",
            "range": "stddev: 0.00009730499377503008",
            "extra": "mean: 430.55356018247403 usec\nrounds: 1753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 275.47325799691475,
            "unit": "iter/sec",
            "range": "stddev: 0.00028724696341938746",
            "extra": "mean: 3.630116430434782 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 163.13361107279516,
            "unit": "iter/sec",
            "range": "stddev: 0.0036610529546728383",
            "extra": "mean: 6.129944610579175 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 103.97039497827912,
            "unit": "iter/sec",
            "range": "stddev: 0.00023984224704034785",
            "extra": "mean: 9.618122545450694 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.84763039910469,
            "unit": "iter/sec",
            "range": "stddev: 0.00009103294496250152",
            "extra": "mean: 9.021392666667928 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12720749.299328357,
            "unit": "iter/sec",
            "range": "stddev: 3.500528568840987e-9",
            "extra": "mean: 78.6117214064212 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.08033887731439,
            "unit": "iter/sec",
            "range": "stddev: 0.00020424272769109799",
            "extra": "mean: 13.68357092156862 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.07908568252276,
            "unit": "iter/sec",
            "range": "stddev: 0.0003156288664564968",
            "extra": "mean: 3.6754019423854443 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9129226971194246,
            "unit": "iter/sec",
            "range": "stddev: 0.005074464530027764",
            "extra": "mean: 1.0953829970000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.5234600471247,
            "unit": "iter/sec",
            "range": "stddev: 0.00008388827303597163",
            "extra": "mean: 3.3953152656837484 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2283.7075695280982,
            "unit": "iter/sec",
            "range": "stddev: 0.000082097400801488",
            "extra": "mean: 437.8844355307008 usec\nrounds: 1396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8010013496014203,
            "unit": "iter/sec",
            "range": "stddev: 0.004587653796982484",
            "extra": "mean: 1.2484373471999788 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 92.67760560766916,
            "unit": "iter/sec",
            "range": "stddev: 0.0007951727479344844",
            "extra": "mean: 10.7900931777768 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.27783330744217,
            "unit": "iter/sec",
            "range": "stddev: 0.0008525367273555623",
            "extra": "mean: 10.836838752686129 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.5211473038469,
            "unit": "iter/sec",
            "range": "stddev: 0.000021233228144408088",
            "extra": "mean: 1.839854815144784 msec\nrounds: 449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6365239.403139123,
            "unit": "iter/sec",
            "range": "stddev: 2.6398567876266613e-8",
            "extra": "mean: 157.10328185073658 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.33067474969,
            "unit": "iter/sec",
            "range": "stddev: 0.000058089151417483104",
            "extra": "mean: 6.085291145571022 msec\nrounds: 158"
          }
        ]
      }
    ]
  }
}