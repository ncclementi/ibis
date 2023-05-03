window.BENCHMARK_DATA = {
  "lastUpdate": 1683141051163,
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
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "22ee854fac49f654faa53575a52f74d61c68e4dd",
          "message": "feat(api): allow passing multiple keyword arguments to `ibis.interval`",
          "timestamp": "2023-05-03T14:05:34-05:00",
          "tree_id": "87242c72c439ab440c469535c25b615942e9281b",
          "url": "https://github.com/ibis-project/ibis/commit/22ee854fac49f654faa53575a52f74d61c68e4dd"
        },
        "date": 1683140969943,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.15548786294532,
            "unit": "iter/sec",
            "range": "stddev: 0.0004701176185810432",
            "extra": "mean: 18.130562138891392 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 257.5816840190709,
            "unit": "iter/sec",
            "range": "stddev: 0.0052511675503995724",
            "extra": "mean: 3.8822636159408046 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.76064174072752,
            "unit": "iter/sec",
            "range": "stddev: 0.0007509016184603414",
            "extra": "mean: 10.334780567904087 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1944.0996792411988,
            "unit": "iter/sec",
            "range": "stddev: 0.0020441398574626104",
            "extra": "mean: 514.3769173349742 usec\nrounds: 1621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.0582399485755,
            "unit": "iter/sec",
            "range": "stddev: 0.0008827042026236631",
            "extra": "mean: 9.994179395059774 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 72.26873516931626,
            "unit": "iter/sec",
            "range": "stddev: 0.018752434658731814",
            "extra": "mean: 13.837242310345266 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 200.67348314355476,
            "unit": "iter/sec",
            "range": "stddev: 0.000041971514988548674",
            "extra": "mean: 4.983219428571114 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 85.59809917034872,
            "unit": "iter/sec",
            "range": "stddev: 0.012882095887092045",
            "extra": "mean: 11.682502411763847 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2213.577573370804,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869835498368974",
            "extra": "mean: 451.75737775352246 usec\nrounds: 1861"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 103.7154059608661,
            "unit": "iter/sec",
            "range": "stddev: 0.0006723068717882233",
            "extra": "mean: 9.641769134831522 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.0825672204116,
            "unit": "iter/sec",
            "range": "stddev: 0.00010159969282016505",
            "extra": "mean: 6.325808200000438 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2046.2837352002011,
            "unit": "iter/sec",
            "range": "stddev: 0.00009469302483250401",
            "extra": "mean: 488.69078261141703 usec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 531.0351907339199,
            "unit": "iter/sec",
            "range": "stddev: 0.00006975421415492304",
            "extra": "mean: 1.8831143725483521 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.27956070667688,
            "unit": "iter/sec",
            "range": "stddev: 0.004307514857419996",
            "extra": "mean: 438.6810129999958 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.60480663374872,
            "unit": "iter/sec",
            "range": "stddev: 0.0006707621033129387",
            "extra": "mean: 9.842054063491945 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7611365818085173,
            "unit": "iter/sec",
            "range": "stddev: 0.002130760919608267",
            "extra": "mean: 1.3138246458000027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2209.945074893005,
            "unit": "iter/sec",
            "range": "stddev: 0.00008267004113613278",
            "extra": "mean: 452.4999337589488 usec\nrounds: 1253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 233.69708870256594,
            "unit": "iter/sec",
            "range": "stddev: 0.007212749997828838",
            "extra": "mean: 4.279043464134606 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.04259502656467,
            "unit": "iter/sec",
            "range": "stddev: 0.000049077773860624444",
            "extra": "mean: 9.17072818889153 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1166.9761152974465,
            "unit": "iter/sec",
            "range": "stddev: 0.000013809421084606934",
            "extra": "mean: 856.9155674151167 usec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 104.1515337423835,
            "unit": "iter/sec",
            "range": "stddev: 0.000698139973460795",
            "extra": "mean: 9.601394852940693 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1880136.843457715,
            "unit": "iter/sec",
            "range": "stddev: 1.6734585034479938e-7",
            "extra": "mean: 531.8761788428782 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1682026.3227823859,
            "unit": "iter/sec",
            "range": "stddev: 6.782129083599966e-8",
            "extra": "mean: 594.521016975414 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.420213087849916,
            "unit": "iter/sec",
            "range": "stddev: 0.0014383009504805304",
            "extra": "mean: 24.740097184212875 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.64040017000339,
            "unit": "iter/sec",
            "range": "stddev: 0.0005549930783310356",
            "extra": "mean: 15.470201257572871 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 595.7739921548439,
            "unit": "iter/sec",
            "range": "stddev: 0.005336279859542118",
            "extra": "mean: 1.6784888450452804 msec\nrounds: 555"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.40352275555675,
            "unit": "iter/sec",
            "range": "stddev: 0.00016875054048694492",
            "extra": "mean: 18.725356463416972 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5767651.042649086,
            "unit": "iter/sec",
            "range": "stddev: 1.1764933778449161e-8",
            "extra": "mean: 173.3808083404925 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12548.266880839443,
            "unit": "iter/sec",
            "range": "stddev: 0.000011355247584375507",
            "extra": "mean: 79.69228017671098 usec\nrounds: 4747"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11367979.548393128,
            "unit": "iter/sec",
            "range": "stddev: 3.935476480060789e-9",
            "extra": "mean: 87.96637922719006 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8545.959449894228,
            "unit": "iter/sec",
            "range": "stddev: 0.000030226508671977764",
            "extra": "mean: 117.0143628533572 usec\nrounds: 3715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16828985056488857,
            "unit": "iter/sec",
            "range": "stddev: 0.013366060036360235",
            "extra": "mean: 5.942128991400011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13711.999727419876,
            "unit": "iter/sec",
            "range": "stddev: 0.000003238037417347989",
            "extra": "mean: 72.92882291999327 usec\nrounds: 6370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 240.76392747987086,
            "unit": "iter/sec",
            "range": "stddev: 0.003345291996809497",
            "extra": "mean: 4.15344611822552 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.12917097497296,
            "unit": "iter/sec",
            "range": "stddev: 0.0001855439490896761",
            "extra": "mean: 39.79438880000998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2069.111998380984,
            "unit": "iter/sec",
            "range": "stddev: 0.00009000788491878757",
            "extra": "mean: 483.29911613410434 usec\nrounds: 1128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 281.9861761862279,
            "unit": "iter/sec",
            "range": "stddev: 0.0002577748864103743",
            "extra": "mean: 3.546273131274297 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.38682313191777,
            "unit": "iter/sec",
            "range": "stddev: 0.0000636010538556389",
            "extra": "mean: 9.579753171875538 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.432219288414982,
            "unit": "iter/sec",
            "range": "stddev: 0.00021787496699935066",
            "extra": "mean: 118.5927412222188 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.10392822628467,
            "unit": "iter/sec",
            "range": "stddev: 0.0007247284859120975",
            "extra": "mean: 9.605785459184192 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1861157.9888468462,
            "unit": "iter/sec",
            "range": "stddev: 9.534272994611513e-8",
            "extra": "mean: 537.2998993060173 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6479979220776642,
            "unit": "iter/sec",
            "range": "stddev: 0.0024229570628586826",
            "extra": "mean: 606.7968815999961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.43686435918585,
            "unit": "iter/sec",
            "range": "stddev: 0.0001237098132761351",
            "extra": "mean: 9.956503584418613 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148441.96499013636,
            "unit": "iter/sec",
            "range": "stddev: 3.595994381206317e-7",
            "extra": "mean: 6.736639467595621 usec\nrounds: 40651"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 285.9596788759519,
            "unit": "iter/sec",
            "range": "stddev: 0.000375579898906288",
            "extra": "mean: 3.4969965133923506 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.70717686904383,
            "unit": "iter/sec",
            "range": "stddev: 0.00011585445143180714",
            "extra": "mean: 9.11517394339377 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 232.6183411704227,
            "unit": "iter/sec",
            "range": "stddev: 0.01012908640878984",
            "extra": "mean: 4.298887159836515 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4553.068859504876,
            "unit": "iter/sec",
            "range": "stddev: 0.00002568789779857471",
            "extra": "mean: 219.63208351492958 usec\nrounds: 922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.90318812594967,
            "unit": "iter/sec",
            "range": "stddev: 0.00013997945471331343",
            "extra": "mean: 9.532598749995781 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7117239.32571797,
            "unit": "iter/sec",
            "range": "stddev: 4.703884396958775e-8",
            "extra": "mean: 140.50391650968808 nsec\nrounds: 64103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1776.414219121053,
            "unit": "iter/sec",
            "range": "stddev: 0.000023867646244007503",
            "extra": "mean: 562.9317696493035 usec\nrounds: 1285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2232.7822530255485,
            "unit": "iter/sec",
            "range": "stddev: 0.00008502084436855001",
            "extra": "mean: 447.871707438082 usec\nrounds: 1210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.27919473503222,
            "unit": "iter/sec",
            "range": "stddev: 0.00010269482048492694",
            "extra": "mean: 33.02597736666447 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.89661319957011,
            "unit": "iter/sec",
            "range": "stddev: 0.00005976120098785612",
            "extra": "mean: 7.880430964909218 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 92.5461756784453,
            "unit": "iter/sec",
            "range": "stddev: 0.014583822557373356",
            "extra": "mean: 10.805416784314597 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.84057635908419,
            "unit": "iter/sec",
            "range": "stddev: 0.000499003938880755",
            "extra": "mean: 20.902758204544824 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 738.294096542565,
            "unit": "iter/sec",
            "range": "stddev: 0.000011950644959790513",
            "extra": "mean: 1.3544737858300713 msec\nrounds: 621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.86675755995253,
            "unit": "iter/sec",
            "range": "stddev: 0.0004312001011456633",
            "extra": "mean: 22.796305348835133 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 82.36172077931725,
            "unit": "iter/sec",
            "range": "stddev: 0.02257925094098357",
            "extra": "mean: 12.141562737372054 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4443208.707462146,
            "unit": "iter/sec",
            "range": "stddev: 1.0160366922864717e-8",
            "extra": "mean: 225.06257658378203 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.43698386716773,
            "unit": "iter/sec",
            "range": "stddev: 0.0008640788882612086",
            "extra": "mean: 9.956491737371797 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 284.2100116476924,
            "unit": "iter/sec",
            "range": "stddev: 0.0002611925614545359",
            "extra": "mean: 3.5185248901069786 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.82012671482983,
            "unit": "iter/sec",
            "range": "stddev: 0.0006794133055486287",
            "extra": "mean: 9.82124096938835 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.1997271982787,
            "unit": "iter/sec",
            "range": "stddev: 0.00010251258714689169",
            "extra": "mean: 6.12746122292873 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 174.53018220249075,
            "unit": "iter/sec",
            "range": "stddev: 0.00007227476176040435",
            "extra": "mean: 5.729668000001256 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1046590.239578992,
            "unit": "iter/sec",
            "range": "stddev: 1.9738996873960411e-7",
            "extra": "mean: 955.4837816969001 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10413.001723447844,
            "unit": "iter/sec",
            "range": "stddev: 0.00001946634343622354",
            "extra": "mean: 96.033788004492 usec\nrounds: 4335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8542112593560239,
            "unit": "iter/sec",
            "range": "stddev: 0.00938162046256415",
            "extra": "mean: 1.1706705911999848 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8514327178309797,
            "unit": "iter/sec",
            "range": "stddev: 0.012010925643363656",
            "extra": "mean: 1.174490924600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 281.68159432855526,
            "unit": "iter/sec",
            "range": "stddev: 0.000273294283608988",
            "extra": "mean: 3.5501077107423407 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.42418833380088,
            "unit": "iter/sec",
            "range": "stddev: 0.0008685952394691328",
            "extra": "mean: 10.479523247312578 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 83.07926860801615,
            "unit": "iter/sec",
            "range": "stddev: 0.020897581783572546",
            "extra": "mean: 12.036697202020289 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5572884.993697864,
            "unit": "iter/sec",
            "range": "stddev: 1.0070639679937628e-8",
            "extra": "mean: 179.44027216264465 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.92610523662347,
            "unit": "iter/sec",
            "range": "stddev: 0.00014317773114208966",
            "extra": "mean: 5.265205637498482 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2235.827826432654,
            "unit": "iter/sec",
            "range": "stddev: 0.00008312780684830047",
            "extra": "mean: 447.26163087232743 usec\nrounds: 1490"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 275.27167222849977,
            "unit": "iter/sec",
            "range": "stddev: 0.0003625417997315705",
            "extra": "mean: 3.6327748217038174 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 421.2097205097463,
            "unit": "iter/sec",
            "range": "stddev: 0.00003226736226874671",
            "extra": "mean: 2.374114250710558 msec\nrounds: 351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3355151762292727,
            "unit": "iter/sec",
            "range": "stddev: 0.0016401518717656036",
            "extra": "mean: 748.7747184 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2185.5957514131705,
            "unit": "iter/sec",
            "range": "stddev: 0.00008634321515245794",
            "extra": "mean: 457.5411529572275 usec\nrounds: 1386"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6223310.753098031,
            "unit": "iter/sec",
            "range": "stddev: 7.990932497624917e-9",
            "extra": "mean: 160.68617487922893 nsec\nrounds: 62500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.740692681568472,
            "unit": "iter/sec",
            "range": "stddev: 0.0002845530463916062",
            "extra": "mean: 53.359820631576916 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.15620292388408,
            "unit": "iter/sec",
            "range": "stddev: 0.01902359012417481",
            "extra": "mean: 11.743125757895038 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1891665.387796843,
            "unit": "iter/sec",
            "range": "stddev: 9.198073948273289e-8",
            "extra": "mean: 528.6347186193776 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 320.02841382967665,
            "unit": "iter/sec",
            "range": "stddev: 0.00014511836189890474",
            "extra": "mean: 3.1247225458306125 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.47824136763152,
            "unit": "iter/sec",
            "range": "stddev: 0.0010933694873853674",
            "extra": "mean: 23.541464236841062 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 166.8581833995842,
            "unit": "iter/sec",
            "range": "stddev: 0.003887415861486149",
            "extra": "mean: 5.993113311111908 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.82381129862657,
            "unit": "iter/sec",
            "range": "stddev: 0.0007137972374832867",
            "extra": "mean: 9.449669103091342 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 130.5141378587014,
            "unit": "iter/sec",
            "range": "stddev: 0.00015712105503476738",
            "extra": "mean: 7.662005177420937 msec\nrounds: 124"
          }
        ]
      }
    ]
  }
}