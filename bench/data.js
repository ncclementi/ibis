window.BENCHMARK_DATA = {
  "lastUpdate": 1680004705377,
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
          "id": "2b1b4b3efc82b6b35e01f844825bd14348649a14",
          "message": "test: allow local networking on macos in nix tests",
          "timestamp": "2023-03-28T07:52:06-04:00",
          "tree_id": "2412bb1190e1a589146f641b1ed8614ee630a4cd",
          "url": "https://github.com/ibis-project/ibis/commit/2b1b4b3efc82b6b35e01f844825bd14348649a14"
        },
        "date": 1680004609172,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3495.490182115411,
            "unit": "iter/sec",
            "range": "stddev: 0.000060025839615204106",
            "extra": "mean: 286.08290909139873 usec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 225.73302617883775,
            "unit": "iter/sec",
            "range": "stddev: 0.0004954824514653471",
            "extra": "mean: 4.430011934575079 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1464858.2770037663,
            "unit": "iter/sec",
            "range": "stddev: 0.000001303302438608317",
            "extra": "mean: 682.6598966593606 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6229660698243347,
            "unit": "iter/sec",
            "range": "stddev: 0.03553433976772922",
            "extra": "mean: 1.6052238611999883 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.26694717215592,
            "unit": "iter/sec",
            "range": "stddev: 0.024101311846911076",
            "extra": "mean: 33.03934137500164 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1543779.3548332434,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013686173188992714",
            "extra": "mean: 647.760961998367 nsec\nrounds: 83334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.36682465250176,
            "unit": "iter/sec",
            "range": "stddev: 0.002478055475265154",
            "extra": "mean: 228.99934840000924 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10580283907890908,
            "unit": "iter/sec",
            "range": "stddev: 0.11306255304109568",
            "extra": "mean: 9.451542214799996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 859.246224299605,
            "unit": "iter/sec",
            "range": "stddev: 0.00032961982334913563",
            "extra": "mean: 1.163810758453 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 190.71163946614902,
            "unit": "iter/sec",
            "range": "stddev: 0.004602268008843143",
            "extra": "mean: 5.243518449105977 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5277871.674584772,
            "unit": "iter/sec",
            "range": "stddev: 1.634121734528886e-7",
            "extra": "mean: 189.4703133491561 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 79.54160072705052,
            "unit": "iter/sec",
            "range": "stddev: 0.0009791010905441419",
            "extra": "mean: 12.572037661544318 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 103.73176388468272,
            "unit": "iter/sec",
            "range": "stddev: 0.0010830247599823793",
            "extra": "mean: 9.640248681317008 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5958781738104486,
            "unit": "iter/sec",
            "range": "stddev: 0.026565246198384858",
            "extra": "mean: 1.6781953828000156 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1587875.7717110033,
            "unit": "iter/sec",
            "range": "stddev: 0.000001589531746555411",
            "extra": "mean: 629.7721886155223 nsec\nrounds: 161265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 197.26308124230835,
            "unit": "iter/sec",
            "range": "stddev: 0.0004836013505239327",
            "extra": "mean: 5.069372300697507 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 105.27460938535097,
            "unit": "iter/sec",
            "range": "stddev: 0.0031151183571827227",
            "extra": "mean: 9.498966615393119 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 92.495517699551,
            "unit": "iter/sec",
            "range": "stddev: 0.0010721848949314286",
            "extra": "mean: 10.811334698922975 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.70698025138256,
            "unit": "iter/sec",
            "range": "stddev: 0.0005263062842036842",
            "extra": "mean: 11.273070024096715 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.52177771823207,
            "unit": "iter/sec",
            "range": "stddev: 0.0014801259504690647",
            "extra": "mean: 30.74862661764608 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.35857266449755,
            "unit": "iter/sec",
            "range": "stddev: 0.002004991377850718",
            "extra": "mean: 35.26270563158182 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.92877005743284,
            "unit": "iter/sec",
            "range": "stddev: 0.002225630375716828",
            "extra": "mean: 83.83093941666668 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 221.7351715745889,
            "unit": "iter/sec",
            "range": "stddev: 0.0002547420879343226",
            "extra": "mean: 4.509884439616801 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3605.4436017639578,
            "unit": "iter/sec",
            "range": "stddev: 0.00006812027397250055",
            "extra": "mean: 277.3583809522777 usec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 517.6987445774769,
            "unit": "iter/sec",
            "range": "stddev: 0.00032579523498875034",
            "extra": "mean: 1.9316253138997979 msec\nrounds: 446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 124.6233261287986,
            "unit": "iter/sec",
            "range": "stddev: 0.000559784797903957",
            "extra": "mean: 8.024179991524997 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 91.75508733045126,
            "unit": "iter/sec",
            "range": "stddev: 0.0012342958980045874",
            "extra": "mean: 10.898578259737807 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59467.70743000483,
            "unit": "iter/sec",
            "range": "stddev: 0.000011204100422756543",
            "extra": "mean: 16.815849193060423 usec\nrounds: 9542"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.580984046865562,
            "unit": "iter/sec",
            "range": "stddev: 0.00524796134178796",
            "extra": "mean: 131.90899675002754 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 88.73013246264419,
            "unit": "iter/sec",
            "range": "stddev: 0.0012573353258129246",
            "extra": "mean: 11.270128560001922 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3827.820374897078,
            "unit": "iter/sec",
            "range": "stddev: 0.00007969696719682365",
            "extra": "mean: 261.24527852926946 usec\nrounds: 2068"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 56.71309739593612,
            "unit": "iter/sec",
            "range": "stddev: 0.000752966016330573",
            "extra": "mean: 17.632611264706853 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 538.6174556144459,
            "unit": "iter/sec",
            "range": "stddev: 0.0008225203816912498",
            "extra": "mean: 1.856605257731977 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6049.885569625769,
            "unit": "iter/sec",
            "range": "stddev: 0.0001887459934477784",
            "extra": "mean: 165.29238255689148 usec\nrounds: 3176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3460.842482657682,
            "unit": "iter/sec",
            "range": "stddev: 0.00015528683496417097",
            "extra": "mean: 288.9469847330558 usec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3551.677000540313,
            "unit": "iter/sec",
            "range": "stddev: 0.00014445368736704545",
            "extra": "mean: 281.557134797976 usec\nrounds: 2322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 89.62632181093586,
            "unit": "iter/sec",
            "range": "stddev: 0.001003142950589873",
            "extra": "mean: 11.157436563217122 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 60.378779313109476,
            "unit": "iter/sec",
            "range": "stddev: 0.026635515085025308",
            "extra": "mean: 16.56211025423761 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.71209310992086,
            "unit": "iter/sec",
            "range": "stddev: 0.0005033998073822247",
            "extra": "mean: 18.617781249997417 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 68.67104362820045,
            "unit": "iter/sec",
            "range": "stddev: 0.0015299859944030553",
            "extra": "mean: 14.56217857142541 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 76.91637429943454,
            "unit": "iter/sec",
            "range": "stddev: 0.00216525961525648",
            "extra": "mean: 13.001132842104749 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 138.41155466608512,
            "unit": "iter/sec",
            "range": "stddev: 0.004482963603940211",
            "extra": "mean: 7.224830343192649 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 391.61400277069254,
            "unit": "iter/sec",
            "range": "stddev: 0.0002537439113060034",
            "extra": "mean: 2.5535348402379388 msec\nrounds: 338"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 84.30254374956446,
            "unit": "iter/sec",
            "range": "stddev: 0.0012108489457235614",
            "extra": "mean: 11.86203826744156 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 209.74647763183873,
            "unit": "iter/sec",
            "range": "stddev: 0.0005786028608776108",
            "extra": "mean: 4.7676605170708415 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4302619.747146792,
            "unit": "iter/sec",
            "range": "stddev: 6.862856090504775e-7",
            "extra": "mean: 232.4165412627586 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8583893.872769052,
            "unit": "iter/sec",
            "range": "stddev: 9.18388901451289e-8",
            "extra": "mean: 116.49724645040729 nsec\nrounds: 90091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 224.8308745458003,
            "unit": "iter/sec",
            "range": "stddev: 0.0005228593674352031",
            "extra": "mean: 4.447787707182939 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 93.37425525539187,
            "unit": "iter/sec",
            "range": "stddev: 0.0008791891203926011",
            "extra": "mean: 10.709590103448297 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 207.47812351263397,
            "unit": "iter/sec",
            "range": "stddev: 0.0004250509186001346",
            "extra": "mean: 4.819785252873212 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.80095916269027,
            "unit": "iter/sec",
            "range": "stddev: 0.0009799317478115133",
            "extra": "mean: 24.50922773684283 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 78.72578668012429,
            "unit": "iter/sec",
            "range": "stddev: 0.0019071873502499897",
            "extra": "mean: 12.702318289471823 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4634472.992663036,
            "unit": "iter/sec",
            "range": "stddev: 7.957887223009778e-7",
            "extra": "mean: 215.77426421174394 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1305.542527942204,
            "unit": "iter/sec",
            "range": "stddev: 0.0002509288363421677",
            "extra": "mean: 765.9650900658132 usec\nrounds: 1077"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 111.6538038752169,
            "unit": "iter/sec",
            "range": "stddev: 0.019735992727122436",
            "extra": "mean: 8.956255544303618 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 205.97930174421344,
            "unit": "iter/sec",
            "range": "stddev: 0.0007380516562666843",
            "extra": "mean: 4.8548567333323955 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5425088114221451,
            "unit": "iter/sec",
            "range": "stddev: 0.10313641389012235",
            "extra": "mean: 1.8432880332000081 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.502218345388999,
            "unit": "iter/sec",
            "range": "stddev: 0.09079816972790887",
            "extra": "mean: 1.9911658129999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 70.7109688656436,
            "unit": "iter/sec",
            "range": "stddev: 0.0011386153056025742",
            "extra": "mean: 14.14207747457228 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 211.50336053198748,
            "unit": "iter/sec",
            "range": "stddev: 0.0005772311146564058",
            "extra": "mean: 4.728057263415261 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 208.38017856186713,
            "unit": "iter/sec",
            "range": "stddev: 0.001116304879162743",
            "extra": "mean: 4.79892092857145 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10373.160668405582,
            "unit": "iter/sec",
            "range": "stddev: 0.000059579912589659135",
            "extra": "mean: 96.40263290684247 usec\nrounds: 5865"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 72.6537238096196,
            "unit": "iter/sec",
            "range": "stddev: 0.0007563606812051964",
            "extra": "mean: 13.763919418918986 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 229.20605057861422,
            "unit": "iter/sec",
            "range": "stddev: 0.0005638069266083925",
            "extra": "mean: 4.3628865707321935 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 123837.70427119888,
            "unit": "iter/sec",
            "range": "stddev: 0.000007827930699492402",
            "extra": "mean: 8.075085095328044 usec\nrounds: 32258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2562.2133257118785,
            "unit": "iter/sec",
            "range": "stddev: 0.004216460854035803",
            "extra": "mean: 390.28756503799804 usec\nrounds: 1699"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.23118362315144,
            "unit": "iter/sec",
            "range": "stddev: 0.00110943568863696",
            "extra": "mean: 13.11799125333664 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 638065.9492875712,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019061328526035582",
            "extra": "mean: 1.5672361158224226 usec\nrounds: 23696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 84.30708517383368,
            "unit": "iter/sec",
            "range": "stddev: 0.0014377323167710208",
            "extra": "mean: 11.861399287356326 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1575471.9560269117,
            "unit": "iter/sec",
            "range": "stddev: 8.721977153303779e-7",
            "extra": "mean: 634.7304350131627 nsec\nrounds: 102031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3883.409977186778,
            "unit": "iter/sec",
            "range": "stddev: 0.00005168925119008452",
            "extra": "mean: 257.50564732400994 usec\nrounds: 1327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 404133.98453390546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029068470181109265",
            "extra": "mean: 2.474426893727626 usec\nrounds: 1703"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 253.74550747987186,
            "unit": "iter/sec",
            "range": "stddev: 0.0008273345885445965",
            "extra": "mean: 3.9409564722217754 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.47144835581071,
            "unit": "iter/sec",
            "range": "stddev: 0.0011681152146539252",
            "extra": "mean: 29.87620940001534 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3743.145851291128,
            "unit": "iter/sec",
            "range": "stddev: 0.0002098829319184232",
            "extra": "mean: 267.15496529612085 usec\nrounds: 1873"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.18341515516997,
            "unit": "iter/sec",
            "range": "stddev: 0.0263961100109367",
            "extra": "mean: 845.0119940000036 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 123.04362744126426,
            "unit": "iter/sec",
            "range": "stddev: 0.0009343623629316336",
            "extra": "mean: 8.12719862698584 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 91.58537542106527,
            "unit": "iter/sec",
            "range": "stddev: 0.0011513566483879005",
            "extra": "mean: 10.918773826088321 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 90.00179628243133,
            "unit": "iter/sec",
            "range": "stddev: 0.001166855107887903",
            "extra": "mean: 11.110889352274 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9516.844483679359,
            "unit": "iter/sec",
            "range": "stddev: 0.00006672986147075987",
            "extra": "mean: 105.07684576698942 usec\nrounds: 4571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8657.225228948117,
            "unit": "iter/sec",
            "range": "stddev: 0.000029693074507132836",
            "extra": "mean: 115.51045208529287 usec\nrounds: 3621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 80.00554204541851,
            "unit": "iter/sec",
            "range": "stddev: 0.0009458198426750197",
            "extra": "mean: 12.499134115388006 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.36202478449775,
            "unit": "iter/sec",
            "range": "stddev: 0.0022497118831022863",
            "extra": "mean: 20.67738074359008 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.707281151122118,
            "unit": "iter/sec",
            "range": "stddev: 0.0014100850509309371",
            "extra": "mean: 50.74266675000274 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6545173839252727,
            "unit": "iter/sec",
            "range": "stddev: 0.08952224574348142",
            "extra": "mean: 604.4058586000119 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 75.03733855396945,
            "unit": "iter/sec",
            "range": "stddev: 0.001227595295571382",
            "extra": "mean: 13.326698671232394 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3755.5889067856097,
            "unit": "iter/sec",
            "range": "stddev: 0.00010307306874787925",
            "extra": "mean: 266.2698247385908 usec\nrounds: 2870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 88.1427544242688,
            "unit": "iter/sec",
            "range": "stddev: 0.0015423425438385245",
            "extra": "mean: 11.34523202198302 msec\nrounds: 91"
          }
        ]
      }
    ]
  }
}