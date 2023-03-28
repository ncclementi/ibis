window.BENCHMARK_DATA = {
  "lastUpdate": 1680027136184,
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
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "3b0f8dbe93b6112101e084737e8733fa61c6558a",
          "message": "docs: style and review fixes in getting started guide",
          "timestamp": "2023-03-28T13:05:35-05:00",
          "tree_id": "51709838e7443836c736ea483fc2fee5974064d0",
          "url": "https://github.com/ibis-project/ibis/commit/3b0f8dbe93b6112101e084737e8733fa61c6558a"
        },
        "date": 1680027057601,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.524029963479194,
            "unit": "iter/sec",
            "range": "stddev: 0.0002944089716525095",
            "extra": "mean: 19.79256208823485 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.2653129510746,
            "unit": "iter/sec",
            "range": "stddev: 0.00003346710285900612",
            "extra": "mean: 1.3257934347895235 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 754018.5816279675,
            "unit": "iter/sec",
            "range": "stddev: 3.2545141945177604e-7",
            "extra": "mean: 1.3262272633135181 usec\nrounds: 23981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5582502.864752442,
            "unit": "iter/sec",
            "range": "stddev: 9.388929532318666e-9",
            "extra": "mean: 179.13112168998677 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.83072231920156,
            "unit": "iter/sec",
            "range": "stddev: 0.0003523697589497703",
            "extra": "mean: 7.2552764954978946 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4938.350503879752,
            "unit": "iter/sec",
            "range": "stddev: 0.00011280760379169532",
            "extra": "mean: 202.49676470197141 usec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 219.01771470657684,
            "unit": "iter/sec",
            "range": "stddev: 0.004252902653348931",
            "extra": "mean: 4.565840719047422 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 494861.57132963423,
            "unit": "iter/sec",
            "range": "stddev: 4.0784061861110055e-7",
            "extra": "mean: 2.0207671355711025 usec\nrounds: 2130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.88488756899814,
            "unit": "iter/sec",
            "range": "stddev: 0.0006173332367667343",
            "extra": "mean: 8.937757562506476 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5308.994391312667,
            "unit": "iter/sec",
            "range": "stddev: 0.000043772886494554664",
            "extra": "mean: 188.35958870786197 usec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.24909642331069,
            "unit": "iter/sec",
            "range": "stddev: 0.000331397206895612",
            "extra": "mean: 10.2828718906256 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.59341411328914,
            "unit": "iter/sec",
            "range": "stddev: 0.000645589650164492",
            "extra": "mean: 8.361664456311233 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8476907380486728,
            "unit": "iter/sec",
            "range": "stddev: 0.005667057007833864",
            "extra": "mean: 1.179675505599994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.08352351784345,
            "unit": "iter/sec",
            "range": "stddev: 0.00004019897278177316",
            "extra": "mean: 3.459207871244436 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5769.813307405018,
            "unit": "iter/sec",
            "range": "stddev: 0.00004699653097380758",
            "extra": "mean: 173.31583306457995 usec\nrounds: 2474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.16217189818561,
            "unit": "iter/sec",
            "range": "stddev: 0.0002495705675752739",
            "extra": "mean: 20.763183232558337 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.00042059289217,
            "unit": "iter/sec",
            "range": "stddev: 0.000038296080897398806",
            "extra": "mean: 3.4602025766899334 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.99516237788086,
            "unit": "iter/sec",
            "range": "stddev: 0.020130310167267393",
            "extra": "mean: 26.319140054054795 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.6271379967387,
            "unit": "iter/sec",
            "range": "stddev: 0.00022009455348434955",
            "extra": "mean: 3.337481400002174 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 677.2794815008467,
            "unit": "iter/sec",
            "range": "stddev: 0.00002678877041837739",
            "extra": "mean: 1.4764953424899376 msec\nrounds: 546"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.4367279353702,
            "unit": "iter/sec",
            "range": "stddev: 0.00018647242639949937",
            "extra": "mean: 3.3064767193675535 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1778.6915501961023,
            "unit": "iter/sec",
            "range": "stddev: 0.000030038437992221738",
            "extra": "mean: 562.2110252279261 usec\nrounds: 1427"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1185.9546592246993,
            "unit": "iter/sec",
            "range": "stddev: 0.000016938305893154176",
            "extra": "mean: 843.202556035098 usec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12763.574988864892,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016243887434586292",
            "extra": "mean: 78.3479550887908 usec\nrounds: 1670"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1575843.9236282909,
            "unit": "iter/sec",
            "range": "stddev: 1.0761505972212174e-7",
            "extra": "mean: 634.580611065566 nsec\nrounds: 116293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.54560002408576,
            "unit": "iter/sec",
            "range": "stddev: 0.024346688512185417",
            "extra": "mean: 26.634279365850944 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11382902.708626768,
            "unit": "iter/sec",
            "range": "stddev: 3.5874117211640635e-9",
            "extra": "mean: 87.85105395328945 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5459.9888537326015,
            "unit": "iter/sec",
            "range": "stddev: 0.000047558561338289796",
            "extra": "mean: 183.150557041224 usec\nrounds: 2095"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.871230509161,
            "unit": "iter/sec",
            "range": "stddev: 0.000190978588594315",
            "extra": "mean: 6.541453199986336 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.03931327005486,
            "unit": "iter/sec",
            "range": "stddev: 0.0034791703297901324",
            "extra": "mean: 6.209663837320582 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5261.268153926061,
            "unit": "iter/sec",
            "range": "stddev: 0.00005123815697192062",
            "extra": "mean: 190.0682441463814 usec\nrounds: 2093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5495.083407879458,
            "unit": "iter/sec",
            "range": "stddev: 0.000020616981068931098",
            "extra": "mean: 181.98085921063353 usec\nrounds: 2280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6203313.392345371,
            "unit": "iter/sec",
            "range": "stddev: 8.609421633590653e-9",
            "extra": "mean: 161.20417214984542 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.6188509287868,
            "unit": "iter/sec",
            "range": "stddev: 0.00024126709032484911",
            "extra": "mean: 3.5383343917563943 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5743.638696678166,
            "unit": "iter/sec",
            "range": "stddev: 0.00004834793611507211",
            "extra": "mean: 174.10565894027252 usec\nrounds: 3020"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.39233561646641,
            "unit": "iter/sec",
            "range": "stddev: 0.0006552272708064944",
            "extra": "mean: 9.488355999995134 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 314.0538823595771,
            "unit": "iter/sec",
            "range": "stddev: 0.00018586377695323006",
            "extra": "mean: 3.1841669731535 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.00357075625617,
            "unit": "iter/sec",
            "range": "stddev: 0.0007831395910891786",
            "extra": "mean: 10.8691433580256 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 337.3423693697458,
            "unit": "iter/sec",
            "range": "stddev: 0.00009824183030617456",
            "extra": "mean: 2.9643474724751955 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.39197270456378,
            "unit": "iter/sec",
            "range": "stddev: 0.0007360343202744718",
            "extra": "mean: 9.766390602565549 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5685.1905536212125,
            "unit": "iter/sec",
            "range": "stddev: 0.00006188546299631313",
            "extra": "mean: 175.8955993767077 usec\nrounds: 3532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.6294798187696,
            "unit": "iter/sec",
            "range": "stddev: 0.00004096308284441383",
            "extra": "mean: 5.034499415254999 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 112.34797160571352,
            "unit": "iter/sec",
            "range": "stddev: 0.0007668348282259869",
            "extra": "mean: 8.900917263637936 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 118.47662748292865,
            "unit": "iter/sec",
            "range": "stddev: 0.0007490914521009336",
            "extra": "mean: 8.440483336209839 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 117.60974687566397,
            "unit": "iter/sec",
            "range": "stddev: 0.0007491282962257088",
            "extra": "mean: 8.502696643477956 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1893561.284181147,
            "unit": "iter/sec",
            "range": "stddev: 1.0150180657561679e-7",
            "extra": "mean: 528.1054319994932 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2692081.7539005186,
            "unit": "iter/sec",
            "range": "stddev: 1.678636402800333e-8",
            "extra": "mean: 371.4597443230104 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.579573376780736,
            "unit": "iter/sec",
            "range": "stddev: 0.0016609834314425557",
            "extra": "mean: 179.22517233333224 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.55007569315107,
            "unit": "iter/sec",
            "range": "stddev: 0.00013417847998039445",
            "extra": "mean: 15.491848603767053 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5541572651330093,
            "unit": "iter/sec",
            "range": "stddev: 0.0031702530458720115",
            "extra": "mean: 391.5185700000052 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.44957462506699,
            "unit": "iter/sec",
            "range": "stddev: 0.0006544591644076119",
            "extra": "mean: 8.442411069565582 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12156.309437479866,
            "unit": "iter/sec",
            "range": "stddev: 0.000011412118604633334",
            "extra": "mean: 82.26180858121614 usec\nrounds: 3939"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.22469890244203,
            "unit": "iter/sec",
            "range": "stddev: 0.00007661047148805124",
            "extra": "mean: 13.119107249998763 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.16386002113016,
            "unit": "iter/sec",
            "range": "stddev: 0.0006847999604049154",
            "extra": "mean: 9.331504107847776 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.57195933728497,
            "unit": "iter/sec",
            "range": "stddev: 0.0002123596974644878",
            "extra": "mean: 3.2832963421054577 msec\nrounds: 304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 308.5931987397164,
            "unit": "iter/sec",
            "range": "stddev: 0.00022566494524232315",
            "extra": "mean: 3.240512117843051 msec\nrounds: 297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.289136637456322,
            "unit": "iter/sec",
            "range": "stddev: 0.0012693896744515138",
            "extra": "mean: 65.40591687500097 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.90582484461167,
            "unit": "iter/sec",
            "range": "stddev: 0.016567918144321042",
            "extra": "mean: 10.009426392858956 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.45389276423577,
            "unit": "iter/sec",
            "range": "stddev: 0.0006747357102120456",
            "extra": "mean: 8.371430824558258 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6926304.777389982,
            "unit": "iter/sec",
            "range": "stddev: 4.191106928643723e-9",
            "extra": "mean: 144.37712923985958 nsec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.75319345839705,
            "unit": "iter/sec",
            "range": "stddev: 0.00009620030526170257",
            "extra": "mean: 8.3505080000009 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.36756396142978,
            "unit": "iter/sec",
            "range": "stddev: 0.0006607782606277749",
            "extra": "mean: 9.768719321842822 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148738.04512341437,
            "unit": "iter/sec",
            "range": "stddev: 4.5343718853474993e-7",
            "extra": "mean: 6.723229414305243 usec\nrounds: 40817"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.378948551360722,
            "unit": "iter/sec",
            "range": "stddev: 0.0004504381872124852",
            "extra": "mean: 96.34887339998386 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1888520.0112389044,
            "unit": "iter/sec",
            "range": "stddev: 8.533179417043926e-8",
            "extra": "mean: 529.5151727537063 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6815308576712142,
            "unit": "iter/sec",
            "range": "stddev: 0.002207957919926493",
            "extra": "mean: 1.467284993399994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.46712826281983,
            "unit": "iter/sec",
            "range": "stddev: 0.00023242190773607995",
            "extra": "mean: 11.05373873585175 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.942393593373243,
            "unit": "iter/sec",
            "range": "stddev: 0.000701549925285277",
            "extra": "mean: 40.092383124997376 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16849534230320304,
            "unit": "iter/sec",
            "range": "stddev: 0.08586528346252068",
            "extra": "mean: 5.934882153599983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.46734537778931,
            "unit": "iter/sec",
            "range": "stddev: 0.00006997863864744389",
            "extra": "mean: 10.366202118279087 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.39637069744326,
            "unit": "iter/sec",
            "range": "stddev: 0.0007505025059411502",
            "extra": "mean: 9.487992740002937 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.86145000970393,
            "unit": "iter/sec",
            "range": "stddev: 0.00006601639876986645",
            "extra": "mean: 6.216529814568221 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.79177796090845,
            "unit": "iter/sec",
            "range": "stddev: 0.0007229446033462637",
            "extra": "mean: 9.921444191487968 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 532.5352876864846,
            "unit": "iter/sec",
            "range": "stddev: 0.00006045798007078878",
            "extra": "mean: 1.8778098336813358 msec\nrounds: 481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 90.31818018955093,
            "unit": "iter/sec",
            "range": "stddev: 0.01619253860065963",
            "extra": "mean: 11.07196799029053 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 307.6216310744856,
            "unit": "iter/sec",
            "range": "stddev: 0.00026527136122069504",
            "extra": "mean: 3.250746693290454 msec\nrounds: 313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 299.11439183233205,
            "unit": "iter/sec",
            "range": "stddev: 0.0002671903605558851",
            "extra": "mean: 3.3432025583060136 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13834.368861237257,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015568231819803028",
            "extra": "mean: 72.28374565043703 usec\nrounds: 6955"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8268.223282456149,
            "unit": "iter/sec",
            "range": "stddev: 0.00003882243983793927",
            "extra": "mean: 120.94496796208209 usec\nrounds: 1467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.902831630744113,
            "unit": "iter/sec",
            "range": "stddev: 0.004137976166151162",
            "extra": "mean: 1.1076262349999866 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.910170424208516,
            "unit": "iter/sec",
            "range": "stddev: 0.000621710225947837",
            "extra": "mean: 16.691656740737958 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5041.438283747184,
            "unit": "iter/sec",
            "range": "stddev: 0.000055391375791858046",
            "extra": "mean: 198.35609278880696 usec\nrounds: 2080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.77040468472315,
            "unit": "iter/sec",
            "range": "stddev: 0.00007229433730304465",
            "extra": "mean: 9.027682103773289 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9128015054639588,
            "unit": "iter/sec",
            "range": "stddev: 0.002853893528094141",
            "extra": "mean: 1.0955284297999923 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.95359978164905,
            "unit": "iter/sec",
            "range": "stddev: 0.00004993084386912415",
            "extra": "mean: 6.025780708075842 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7559108181983925,
            "unit": "iter/sec",
            "range": "stddev: 0.0016251520495470916",
            "extra": "mean: 569.5050054000035 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74620.92134020798,
            "unit": "iter/sec",
            "range": "stddev: 4.2877476043818005e-7",
            "extra": "mean: 13.401067449178898 usec\nrounds: 13551"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.60220802884112,
            "unit": "iter/sec",
            "range": "stddev: 0.0014995228878060857",
            "extra": "mean: 27.320756147061918 msec\nrounds: 34"
          }
        ]
      }
    ]
  }
}