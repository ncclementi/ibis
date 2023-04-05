window.BENCHMARK_DATA = {
  "lastUpdate": 1680689983398,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "9fb9f7f15aa953a05b76e0cc50eed1e917ec31e6",
          "message": "chore(deps): update peter-evans/create-pull-request action to v5",
          "timestamp": "2023-04-05T06:14:06-04:00",
          "tree_id": "b6c58260b5f81090ce61aeb473c4a91cae939f9c",
          "url": "https://github.com/ibis-project/ibis/commit/9fb9f7f15aa953a05b76e0cc50eed1e917ec31e6"
        },
        "date": 1680689905824,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.37734868474857,
            "unit": "iter/sec",
            "range": "stddev: 0.00005270292819200162",
            "extra": "mean: 8.898590433960969 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11989486.841229055,
            "unit": "iter/sec",
            "range": "stddev: 3.17895407539221e-9",
            "extra": "mean: 83.40640539848462 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.38461681189607,
            "unit": "iter/sec",
            "range": "stddev: 0.0005649919136379887",
            "extra": "mean: 8.23827620224441 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7045746.081444102,
            "unit": "iter/sec",
            "range": "stddev: 4.144038919813118e-9",
            "extra": "mean: 141.9296109227254 nsec\nrounds: 70423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.97291054586117,
            "unit": "iter/sec",
            "range": "stddev: 0.00018967217031181098",
            "extra": "mean: 9.806526014085488 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 745375.705750218,
            "unit": "iter/sec",
            "range": "stddev: 2.539554064729705e-7",
            "extra": "mean: 1.3416053035878108 usec\nrounds: 24097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12194.086716074939,
            "unit": "iter/sec",
            "range": "stddev: 0.000018629529883378045",
            "extra": "mean: 82.00696151206988 usec\nrounds: 4417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.89519549869601,
            "unit": "iter/sec",
            "range": "stddev: 0.00008344689312324096",
            "extra": "mean: 8.271627303921983 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2677319.2377466755,
            "unit": "iter/sec",
            "range": "stddev: 1.4287130540617759e-8",
            "extra": "mean: 373.5079425351316 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13739.175097971704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017644098465801438",
            "extra": "mean: 72.78457351836418 usec\nrounds: 5468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.05643900686704,
            "unit": "iter/sec",
            "range": "stddev: 0.00010871509394292935",
            "extra": "mean: 13.323307276921415 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 337.61464116424827,
            "unit": "iter/sec",
            "range": "stddev: 0.000013038476527054701",
            "extra": "mean: 2.9619568527939037 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 313.75510070113387,
            "unit": "iter/sec",
            "range": "stddev: 0.0002087209401857339",
            "extra": "mean: 3.1871991810343374 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 546.7826688077284,
            "unit": "iter/sec",
            "range": "stddev: 0.000021869763882688976",
            "extra": "mean: 1.8288802060616183 msec\nrounds: 495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2701369.208573401,
            "unit": "iter/sec",
            "range": "stddev: 1.5580696858062443e-8",
            "extra": "mean: 370.18264546241556 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.91013919481125,
            "unit": "iter/sec",
            "range": "stddev: 0.0002836735267359642",
            "extra": "mean: 15.646969519997354 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.8147469760667,
            "unit": "iter/sec",
            "range": "stddev: 0.0005917604550123531",
            "extra": "mean: 8.277135242422842 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.57830366660798,
            "unit": "iter/sec",
            "range": "stddev: 0.00010473325384142751",
            "extra": "mean: 6.1508822361110065 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.16348410518283,
            "unit": "iter/sec",
            "range": "stddev: 0.0007028907870943974",
            "extra": "mean: 9.33153684158386 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.47254717319593,
            "unit": "iter/sec",
            "range": "stddev: 0.0005277428085417517",
            "extra": "mean: 9.664399179486374 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17252122165769299,
            "unit": "iter/sec",
            "range": "stddev: 0.11862089712532119",
            "extra": "mean: 5.7963883538 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.18418766722424,
            "unit": "iter/sec",
            "range": "stddev: 0.0006987182290151434",
            "extra": "mean: 9.32973437373719 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6805958651482441,
            "unit": "iter/sec",
            "range": "stddev: 0.00208832950004824",
            "extra": "mean: 1.469300727800021 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.15483377500686,
            "unit": "iter/sec",
            "range": "stddev: 0.0001279213249010349",
            "extra": "mean: 7.238255605508222 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5494.98428785061,
            "unit": "iter/sec",
            "range": "stddev: 0.00002278309385577619",
            "extra": "mean: 181.9841418311234 usec\nrounds: 3342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1990535.4637698913,
            "unit": "iter/sec",
            "range": "stddev: 9.156947186045815e-8",
            "extra": "mean: 502.377384478291 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.22978938925648,
            "unit": "iter/sec",
            "range": "stddev: 0.0006514435534147663",
            "extra": "mean: 8.754283846154511 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8579657805612907,
            "unit": "iter/sec",
            "range": "stddev: 0.006754365487383768",
            "extra": "mean: 1.1655476507999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.78201668226035,
            "unit": "iter/sec",
            "range": "stddev: 0.0006599342111735212",
            "extra": "mean: 9.45340268000109 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.639703839109906,
            "unit": "iter/sec",
            "range": "stddev: 0.00045743739325812343",
            "extra": "mean: 17.655459549022158 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.4419468581928,
            "unit": "iter/sec",
            "range": "stddev: 0.000038279156136575624",
            "extra": "mean: 3.4549242459660943 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.5123459078658,
            "unit": "iter/sec",
            "range": "stddev: 0.00021630306878139133",
            "extra": "mean: 3.2204838653878087 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.93861727202301,
            "unit": "iter/sec",
            "range": "stddev: 0.0005543253216802288",
            "extra": "mean: 40.09845410001276 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 300.19858895397465,
            "unit": "iter/sec",
            "range": "stddev: 0.00023618511465328375",
            "extra": "mean: 3.3311282490848626 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148265.61200081042,
            "unit": "iter/sec",
            "range": "stddev: 3.6683453699402e-7",
            "extra": "mean: 6.7446522933081345 usec\nrounds: 43669"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5630.56093034691,
            "unit": "iter/sec",
            "range": "stddev: 0.000051523357331084685",
            "extra": "mean: 177.60219849683574 usec\nrounds: 1995"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1163.8322538184163,
            "unit": "iter/sec",
            "range": "stddev: 0.000009722402241559122",
            "extra": "mean: 859.2303544768594 usec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.59431832496703,
            "unit": "iter/sec",
            "range": "stddev: 0.0003235291165724742",
            "extra": "mean: 10.917707760563324 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5619877.185340312,
            "unit": "iter/sec",
            "range": "stddev: 9.922658890116991e-9",
            "extra": "mean: 177.93983160485095 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8349.236459443924,
            "unit": "iter/sec",
            "range": "stddev: 0.000052592122300651655",
            "extra": "mean: 119.77143117906161 usec\nrounds: 3342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5362.679254497326,
            "unit": "iter/sec",
            "range": "stddev: 0.000046811561583814976",
            "extra": "mean: 186.4739531385111 usec\nrounds: 2262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5169.419709438543,
            "unit": "iter/sec",
            "range": "stddev: 0.00004457183702649804",
            "extra": "mean: 193.4453103457934 usec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.06465402954483,
            "unit": "iter/sec",
            "range": "stddev: 0.0006749350000543562",
            "extra": "mean: 8.328845887932394 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 514979.8158430989,
            "unit": "iter/sec",
            "range": "stddev: 3.186388511921495e-7",
            "extra": "mean: 1.9418236778131792 usec\nrounds: 397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.44299925445081,
            "unit": "iter/sec",
            "range": "stddev: 0.0008636445667661946",
            "extra": "mean: 9.483796999996558 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 110.82502079768346,
            "unit": "iter/sec",
            "range": "stddev: 0.000881961161752013",
            "extra": "mean: 9.02323313636502 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 285.6393402011312,
            "unit": "iter/sec",
            "range": "stddev: 0.00005838409833082116",
            "extra": "mean: 3.500918323420913 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5145.606058623244,
            "unit": "iter/sec",
            "range": "stddev: 0.00005264970396822762",
            "extra": "mean: 194.340567195997 usec\nrounds: 2329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.82816878912853,
            "unit": "iter/sec",
            "range": "stddev: 0.028808385216613545",
            "extra": "mean: 27.153128512194566 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.80707500628826,
            "unit": "iter/sec",
            "range": "stddev: 0.0007469749647859789",
            "extra": "mean: 10.77504058750094 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6854898822592177,
            "unit": "iter/sec",
            "range": "stddev: 0.0014091187707639457",
            "extra": "mean: 593.2993194000119 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.3051359834198,
            "unit": "iter/sec",
            "range": "stddev: 0.0007538005668027943",
            "extra": "mean: 9.774680326528927 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.1205473849803,
            "unit": "iter/sec",
            "range": "stddev: 0.000009299150160793834",
            "extra": "mean: 1.334898640133135 msec\nrounds: 603"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.83806628967664,
            "unit": "iter/sec",
            "range": "stddev: 0.0010033923147823962",
            "extra": "mean: 16.437077326530442 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72328.47763561098,
            "unit": "iter/sec",
            "range": "stddev: 4.592701055561918e-7",
            "extra": "mean: 13.825812912003684 usec\nrounds: 12438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5622.803079527149,
            "unit": "iter/sec",
            "range": "stddev: 0.00005485243021655656",
            "extra": "mean: 177.8472384425199 usec\nrounds: 2055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5384.220405136215,
            "unit": "iter/sec",
            "range": "stddev: 0.000051120791448479425",
            "extra": "mean: 185.7279094752625 usec\nrounds: 2839"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 232.86377517382138,
            "unit": "iter/sec",
            "range": "stddev: 0.004088173816358994",
            "extra": "mean: 4.294356214286869 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 97.24199306642791,
            "unit": "iter/sec",
            "range": "stddev: 0.020067454085120777",
            "extra": "mean: 10.283623036365373 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 316.7187010016972,
            "unit": "iter/sec",
            "range": "stddev: 0.00023384954479180743",
            "extra": "mean: 3.1573759201375395 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.78771441124541,
            "unit": "iter/sec",
            "range": "stddev: 0.0013250817967762508",
            "extra": "mean: 25.78135925714865 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.36548384095997,
            "unit": "iter/sec",
            "range": "stddev: 0.0001352270364691008",
            "extra": "mean: 6.314507276119962 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8050850541307699,
            "unit": "iter/sec",
            "range": "stddev: 0.0015827022688248919",
            "extra": "mean: 1.2421047873999782 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.496540129132606,
            "unit": "iter/sec",
            "range": "stddev: 0.00009970896687469672",
            "extra": "mean: 64.53053337499881 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.1144858229715,
            "unit": "iter/sec",
            "range": "stddev: 0.00005634417091938639",
            "extra": "mean: 6.056403803795605 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12618.887818148289,
            "unit": "iter/sec",
            "range": "stddev: 0.000001951014958389932",
            "extra": "mean: 79.2462865516417 usec\nrounds: 5116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5673.696144552536,
            "unit": "iter/sec",
            "range": "stddev: 0.00004831063117516505",
            "extra": "mean: 176.25194838114942 usec\nrounds: 2286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.4458556532035,
            "unit": "iter/sec",
            "range": "stddev: 0.00022278302641084784",
            "extra": "mean: 3.242060094736157 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5440.940351329491,
            "unit": "iter/sec",
            "range": "stddev: 0.000054789249550130045",
            "extra": "mean: 183.7917594071125 usec\nrounds: 3508"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.85372930953129,
            "unit": "iter/sec",
            "range": "stddev: 0.000054615164665567475",
            "extra": "mean: 10.432562271737968 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1772.848645832758,
            "unit": "iter/sec",
            "range": "stddev: 0.000006430866784639894",
            "extra": "mean: 564.0639444041606 usec\nrounds: 1349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1849710.0852341682,
            "unit": "iter/sec",
            "range": "stddev: 1.1347847446173302e-7",
            "extra": "mean: 540.6252622953087 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.006292189180655,
            "unit": "iter/sec",
            "range": "stddev: 0.0008749262995077502",
            "extra": "mean: 23.252411428567097 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.6527629182405,
            "unit": "iter/sec",
            "range": "stddev: 0.00011109685526898971",
            "extra": "mean: 1.4584641878257019 msec\nrounds: 575"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.53260191161044,
            "unit": "iter/sec",
            "range": "stddev: 0.0004127571327377784",
            "extra": "mean: 21.49030913636678 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.560141039909319,
            "unit": "iter/sec",
            "range": "stddev: 0.00015217904552768398",
            "extra": "mean: 179.85155283332688 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.72465094645023,
            "unit": "iter/sec",
            "range": "stddev: 0.000699454984224466",
            "extra": "mean: 8.352498771930223 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8575372228309608,
            "unit": "iter/sec",
            "range": "stddev: 0.002816266067263974",
            "extra": "mean: 1.166130137999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.07293807179225,
            "unit": "iter/sec",
            "range": "stddev: 0.0008065866401302358",
            "extra": "mean: 9.893845168423804 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.02183433070402,
            "unit": "iter/sec",
            "range": "stddev: 0.0006981781840292638",
            "extra": "mean: 8.331817336207632 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.30226239302868,
            "unit": "iter/sec",
            "range": "stddev: 0.00014472808450767576",
            "extra": "mean: 5.173245194444576 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 278.3417430784234,
            "unit": "iter/sec",
            "range": "stddev: 0.0003014975999649515",
            "extra": "mean: 3.59270581889777 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.446039051546728,
            "unit": "iter/sec",
            "range": "stddev: 0.0017432943718810117",
            "extra": "mean: 408.8242169999944 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 297.0050385562035,
            "unit": "iter/sec",
            "range": "stddev: 0.00025181348913436787",
            "extra": "mean: 3.3669462473134635 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.423276277383534,
            "unit": "iter/sec",
            "range": "stddev: 0.0002061111270468341",
            "extra": "mean: 95.93912445454448 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6158509.381806284,
            "unit": "iter/sec",
            "range": "stddev: 1.0830867886764929e-8",
            "extra": "mean: 162.37695487692096 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 178.74191575071274,
            "unit": "iter/sec",
            "range": "stddev: 0.0031481032141047853",
            "extra": "mean: 5.5946586216222345 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 302.4127345534771,
            "unit": "iter/sec",
            "range": "stddev: 0.002045866991676845",
            "extra": "mean: 3.3067390547442876 msec\nrounds: 274"
          }
        ]
      }
    ]
  }
}