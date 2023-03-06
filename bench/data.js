window.BENCHMARK_DATA = {
  "lastUpdate": 1678126756526,
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
          "id": "509806f11e629d29c91e540dd3288771f4e098a4",
          "message": "fix(bigquery): regenerate sql for predicate pushdown fix",
          "timestamp": "2023-03-06T13:13:47-05:00",
          "tree_id": "60d9fdb65e677794f5fc342995bf6f2e0f4ce3da",
          "url": "https://github.com/ibis-project/ibis/commit/509806f11e629d29c91e540dd3288771f4e098a4"
        },
        "date": 1678126672883,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 548.3401378467759,
            "unit": "iter/sec",
            "range": "stddev: 0.000045351116121108104",
            "extra": "mean: 1.823685575757419 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1176.9228222094703,
            "unit": "iter/sec",
            "range": "stddev: 0.000021834473477043032",
            "extra": "mean: 849.6733865035194 usec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5132.925202733909,
            "unit": "iter/sec",
            "range": "stddev: 0.00008519948581340823",
            "extra": "mean: 194.82068421090142 usec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.01274229363376,
            "unit": "iter/sec",
            "range": "stddev: 0.00006653474276657283",
            "extra": "mean: 9.007974934579622 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.39600786692739,
            "unit": "iter/sec",
            "range": "stddev: 0.00010037648738289529",
            "extra": "mean: 13.26330170909025 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.23435492966644,
            "unit": "iter/sec",
            "range": "stddev: 0.00017545826285906465",
            "extra": "mean: 3.2442846944435573 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9266804834034854,
            "unit": "iter/sec",
            "range": "stddev: 0.002924895256016032",
            "extra": "mean: 1.079120600799996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.45502781439721,
            "unit": "iter/sec",
            "range": "stddev: 0.000224196343215175",
            "extra": "mean: 9.306218799991939 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 485713.7178510374,
            "unit": "iter/sec",
            "range": "stddev: 5.041572243209132e-7",
            "extra": "mean: 2.058825936447379 usec\nrounds: 2028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8586804030105014,
            "unit": "iter/sec",
            "range": "stddev: 0.0035354421984621627",
            "extra": "mean: 1.1645776432000048 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.12343933880108,
            "unit": "iter/sec",
            "range": "stddev: 0.000059125601625382854",
            "extra": "mean: 10.403289841464726 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.4862305282932,
            "unit": "iter/sec",
            "range": "stddev: 0.00022896744258392",
            "extra": "mean: 14.391340448275185 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.23098256188162,
            "unit": "iter/sec",
            "range": "stddev: 0.0005456478816078287",
            "extra": "mean: 8.317323693876581 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 276.2712265283305,
            "unit": "iter/sec",
            "range": "stddev: 0.00029621793565864837",
            "extra": "mean: 3.6196313766227632 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.527522497036684,
            "unit": "iter/sec",
            "range": "stddev: 0.0018315818014483253",
            "extra": "mean: 395.64435180000146 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1859535.4184517679,
            "unit": "iter/sec",
            "range": "stddev: 8.748940124156895e-8",
            "extra": "mean: 537.7687298005815 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.50400068316065,
            "unit": "iter/sec",
            "range": "stddev: 0.00003145865482305685",
            "extra": "mean: 6.472324312499111 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 119.17922610973986,
            "unit": "iter/sec",
            "range": "stddev: 0.009655202969787348",
            "extra": "mean: 8.390724060241867 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.673083479814835,
            "unit": "iter/sec",
            "range": "stddev: 0.0004273795185834445",
            "extra": "mean: 28.032339861112295 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.28163933763756,
            "unit": "iter/sec",
            "range": "stddev: 0.00003279727229099291",
            "extra": "mean: 5.068895429688469 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.98288921429891,
            "unit": "iter/sec",
            "range": "stddev: 0.0005076727277042061",
            "extra": "mean: 9.347289153846706 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.32422982501292,
            "unit": "iter/sec",
            "range": "stddev: 0.000550183100254398",
            "extra": "mean: 8.2423766583337 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.0937749629037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000992584550571757",
            "extra": "mean: 6.131441866665075 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.0526947625562,
            "unit": "iter/sec",
            "range": "stddev: 0.00004235956673974186",
            "extra": "mean: 3.424039626866025 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6780468683394066,
            "unit": "iter/sec",
            "range": "stddev: 0.03354010269988908",
            "extra": "mean: 1.4748243030000026 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.32953878142686,
            "unit": "iter/sec",
            "range": "stddev: 0.0005847534765634863",
            "extra": "mean: 8.310511368421801 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.396723152736755,
            "unit": "iter/sec",
            "range": "stddev: 0.0003035452179190054",
            "extra": "mean: 20.244257840908954 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 187.46538767456826,
            "unit": "iter/sec",
            "range": "stddev: 0.0036257816811326154",
            "extra": "mean: 5.334318043477745 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5770.028292314851,
            "unit": "iter/sec",
            "range": "stddev: 0.000046568666334783315",
            "extra": "mean: 173.3093755072065 usec\nrounds: 2711"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 311.23927434532163,
            "unit": "iter/sec",
            "range": "stddev: 0.00018986000455592376",
            "extra": "mean: 3.2129621240875106 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5305.82753505116,
            "unit": "iter/sec",
            "range": "stddev: 0.00005007255815683321",
            "extra": "mean: 188.4720137233706 usec\nrounds: 3352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.237252984908814,
            "unit": "iter/sec",
            "range": "stddev: 0.0004885041032364413",
            "extra": "mean: 21.169732294117026 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11523.293198236634,
            "unit": "iter/sec",
            "range": "stddev: 0.00001377174223049859",
            "extra": "mean: 86.78074772522723 usec\nrounds: 4836"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137908.44635700685,
            "unit": "iter/sec",
            "range": "stddev: 3.001490688013331e-7",
            "extra": "mean: 7.25118748282666 usec\nrounds: 32787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.1401903929205,
            "unit": "iter/sec",
            "range": "stddev: 0.0005519369234766096",
            "extra": "mean: 8.254898698412815 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.52724855856285,
            "unit": "iter/sec",
            "range": "stddev: 0.0006165048373799238",
            "extra": "mean: 8.366293142856426 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.202505663931055,
            "unit": "iter/sec",
            "range": "stddev: 0.043222413819296444",
            "extra": "mean: 108.66605645454476 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12580614.38665235,
            "unit": "iter/sec",
            "range": "stddev: 1.1243027658584346e-8",
            "extra": "mean: 79.48737392834722 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.00301778951384,
            "unit": "iter/sec",
            "range": "stddev: 0.00033656671405813744",
            "extra": "mean: 16.665828433961877 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 358.58182055066334,
            "unit": "iter/sec",
            "range": "stddev: 0.00009726887407325876",
            "extra": "mean: 2.7887637986341027 msec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.22995991120595,
            "unit": "iter/sec",
            "range": "stddev: 0.00007440321246297751",
            "extra": "mean: 13.655613101694133 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.599678481393939,
            "unit": "iter/sec",
            "range": "stddev: 0.00016304750473802968",
            "extra": "mean: 178.581681666671 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13494.508829736651,
            "unit": "iter/sec",
            "range": "stddev: 0.000001910344618905474",
            "extra": "mean: 74.10421621247814 usec\nrounds: 7118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.38722312865957,
            "unit": "iter/sec",
            "range": "stddev: 0.0001849242424271595",
            "extra": "mean: 3.1909405559570465 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11840.34688170189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017499131378988138",
            "extra": "mean: 84.45698508591866 usec\nrounds: 5163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5419.040507451168,
            "unit": "iter/sec",
            "range": "stddev: 0.00005036279616293614",
            "extra": "mean: 184.5345128210432 usec\nrounds: 312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 259.82995288466066,
            "unit": "iter/sec",
            "range": "stddev: 0.0040967519590086356",
            "extra": "mean: 3.8486709823016563 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.85773162586463,
            "unit": "iter/sec",
            "range": "stddev: 0.00006561236240569367",
            "extra": "mean: 8.484806098037472 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.6862026531672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005502193305290158",
            "extra": "mean: 8.719444683543927 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.62509360668797,
            "unit": "iter/sec",
            "range": "stddev: 0.0007161284940167145",
            "extra": "mean: 26.578006966665647 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1722.4480506694379,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049592353653912184",
            "extra": "mean: 580.5690334819358 usec\nrounds: 1344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.0463030740286,
            "unit": "iter/sec",
            "range": "stddev: 0.0006119167617691988",
            "extra": "mean: 9.429843106382709 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.81493099851049,
            "unit": "iter/sec",
            "range": "stddev: 0.014269156483528462",
            "extra": "mean: 11.259368089997963 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.50030997766356,
            "unit": "iter/sec",
            "range": "stddev: 0.00018607730033891857",
            "extra": "mean: 3.338894707903905 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6395691.743729142,
            "unit": "iter/sec",
            "range": "stddev: 1.1923356769738007e-8",
            "extra": "mean: 156.35525289050165 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.8805590271988,
            "unit": "iter/sec",
            "range": "stddev: 0.0005472767959363",
            "extra": "mean: 9.534655509803956 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18162218720025922,
            "unit": "iter/sec",
            "range": "stddev: 0.1261362238383642",
            "extra": "mean: 5.505935235200013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1822566.9253927006,
            "unit": "iter/sec",
            "range": "stddev: 8.225912673769522e-8",
            "extra": "mean: 548.6766966236559 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.07434826414824,
            "unit": "iter/sec",
            "range": "stddev: 0.0005957407810704563",
            "extra": "mean: 8.84373879090545 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2534144.3004341684,
            "unit": "iter/sec",
            "range": "stddev: 1.3922553561072429e-8",
            "extra": "mean: 394.61051994092713 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.50017552636086,
            "unit": "iter/sec",
            "range": "stddev: 0.00019126061575972254",
            "extra": "mean: 3.3057832057781953 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5888215.869125491,
            "unit": "iter/sec",
            "range": "stddev: 8.061813750383252e-9",
            "extra": "mean: 169.83073009275728 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 526.2974617208513,
            "unit": "iter/sec",
            "range": "stddev: 0.007110004077185021",
            "extra": "mean: 1.9000661654917899 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8068877173540705,
            "unit": "iter/sec",
            "range": "stddev: 0.0010802472516775565",
            "extra": "mean: 553.4378204000177 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1669942.9143569425,
            "unit": "iter/sec",
            "range": "stddev: 8.41210048944779e-8",
            "extra": "mean: 598.8228647834213 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5651.072800472884,
            "unit": "iter/sec",
            "range": "stddev: 0.00005878598757964774",
            "extra": "mean: 176.95755041703222 usec\nrounds: 2162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5805.3352161261055,
            "unit": "iter/sec",
            "range": "stddev: 0.000043953089861953434",
            "extra": "mean: 172.2553414697212 usec\nrounds: 3564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8077.875138187866,
            "unit": "iter/sec",
            "range": "stddev: 0.000012839609724923708",
            "extra": "mean: 123.79493157458398 usec\nrounds: 4662"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70791.5019199236,
            "unit": "iter/sec",
            "range": "stddev: 3.851646333048181e-7",
            "extra": "mean: 14.125989319045079 usec\nrounds: 12920"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.06995209021069,
            "unit": "iter/sec",
            "range": "stddev: 0.0005499644217544537",
            "extra": "mean: 9.797202599999142 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.13982558618957,
            "unit": "iter/sec",
            "range": "stddev: 0.0005911588576433931",
            "extra": "mean: 9.333597423075336 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.1484820018965,
            "unit": "iter/sec",
            "range": "stddev: 0.000011994009946294201",
            "extra": "mean: 1.3348488637763383 msec\nrounds: 646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5338.268980278545,
            "unit": "iter/sec",
            "range": "stddev: 0.000027086853091844814",
            "extra": "mean: 187.32664159381136 usec\nrounds: 2486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.147210608670594,
            "unit": "iter/sec",
            "range": "stddev: 0.00037691698801360017",
            "extra": "mean: 35.52749911538145 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.23396703760743,
            "unit": "iter/sec",
            "range": "stddev: 0.0005864564134645112",
            "extra": "mean: 8.31711723931736 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 711761.3661843435,
            "unit": "iter/sec",
            "range": "stddev: 7.380625725174651e-7",
            "extra": "mean: 1.4049652699764599 usec\nrounds: 23697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.82236917675834,
            "unit": "iter/sec",
            "range": "stddev: 0.0006190192456640641",
            "extra": "mean: 9.918433857141704 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.918288763159731,
            "unit": "iter/sec",
            "range": "stddev: 0.005424673898968862",
            "extra": "mean: 1.088982071999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.490765422721308,
            "unit": "iter/sec",
            "range": "stddev: 0.00011956749068296177",
            "extra": "mean: 64.5545893124968 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 303.91685168709154,
            "unit": "iter/sec",
            "range": "stddev: 0.00019315235296897575",
            "extra": "mean: 3.2903736480844623 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.76157258260508,
            "unit": "iter/sec",
            "range": "stddev: 0.00003795528472303799",
            "extra": "mean: 6.220391999998408 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.79376631223764,
            "unit": "iter/sec",
            "range": "stddev: 0.000053001484256610604",
            "extra": "mean: 10.02066598900748 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5819.682978142923,
            "unit": "iter/sec",
            "range": "stddev: 0.000042833751489621326",
            "extra": "mean: 171.83066564892212 usec\nrounds: 2620"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5640.755482912427,
            "unit": "iter/sec",
            "range": "stddev: 0.000042857268971676664",
            "extra": "mean: 177.28121756550263 usec\nrounds: 3245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 313.1737662619633,
            "unit": "iter/sec",
            "range": "stddev: 0.00017603566320822668",
            "extra": "mean: 3.193115476867628 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 321.3225761000096,
            "unit": "iter/sec",
            "range": "stddev: 0.000016731561748638193",
            "extra": "mean: 3.1121373796304814 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.67213607010629,
            "unit": "iter/sec",
            "range": "stddev: 0.0005702709576436619",
            "extra": "mean: 10.79073001234699 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7077240.142807628,
            "unit": "iter/sec",
            "range": "stddev: 5.509215379495177e-9",
            "extra": "mean: 141.29801728099133 nsec\nrounds: 69445"
          }
        ]
      }
    ]
  }
}