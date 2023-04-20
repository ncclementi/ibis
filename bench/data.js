window.BENCHMARK_DATA = {
  "lastUpdate": 1682018480248,
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
          "id": "a7e845ac9a2c2069135c38a923babc1f1d6de65c",
          "message": "docs(introguides): use DuckDB for intro pandas notebook, remove iris\n\nThis swaps in the DuckDB backend for the Pandas backend in the \"Ibis for\npandas Users\" notebook.  I also swapped out the Iris data for the palmer\npenguins data.\n\nVery brief mention of `memtable` vs. making a backend connection.",
          "timestamp": "2023-04-20T14:15:03-05:00",
          "tree_id": "e29a63f52e410fdd78713f1d3d3e01b2154318f0",
          "url": "https://github.com/ibis-project/ibis/commit/a7e845ac9a2c2069135c38a923babc1f1d6de65c"
        },
        "date": 1682018394380,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11527.869200260158,
            "unit": "iter/sec",
            "range": "stddev: 0.00001959869374156954",
            "extra": "mean: 86.74629999943375 usec\nrounds: 840"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1794039.2797811532,
            "unit": "iter/sec",
            "range": "stddev: 1.240573626861748e-7",
            "extra": "mean: 557.4013965413207 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 761.7829892137808,
            "unit": "iter/sec",
            "range": "stddev: 0.00007645946238008602",
            "extra": "mean: 1.3127098060197926 msec\nrounds: 598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.17759339831002,
            "unit": "iter/sec",
            "range": "stddev: 0.00017672358496765572",
            "extra": "mean: 21.196502999998756 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1200.597899697591,
            "unit": "iter/sec",
            "range": "stddev: 0.00002774307746851255",
            "extra": "mean: 832.9183319843238 usec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9620.472959638335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019313280812161143",
            "extra": "mean: 103.94499357727973 usec\nrounds: 4671"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.43073623802218,
            "unit": "iter/sec",
            "range": "stddev: 0.0001533472484038489",
            "extra": "mean: 13.435309800001148 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.17150858662703,
            "unit": "iter/sec",
            "range": "stddev: 0.0007930856625318754",
            "extra": "mean: 9.982878506169376 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.2230316122863,
            "unit": "iter/sec",
            "range": "stddev: 0.0006840508276403442",
            "extra": "mean: 10.392522281248873 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.947720988224766,
            "unit": "iter/sec",
            "range": "stddev: 0.014375230579121793",
            "extra": "mean: 25.03271714285694 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.49522684975325,
            "unit": "iter/sec",
            "range": "stddev: 0.00014233490952631237",
            "extra": "mean: 18.693256555554033 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 222.16852408987452,
            "unit": "iter/sec",
            "range": "stddev: 0.009262651815944664",
            "extra": "mean: 4.501087650001523 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 692.3687104836933,
            "unit": "iter/sec",
            "range": "stddev: 0.000017394399140676653",
            "extra": "mean: 1.444317146136476 msec\nrounds: 479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 498292.62228805147,
            "unit": "iter/sec",
            "range": "stddev: 3.80162330232688e-7",
            "extra": "mean: 2.0068529118657574 usec\nrounds: 2060"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 98.79543000161158,
            "unit": "iter/sec",
            "range": "stddev: 0.0007208790198641569",
            "extra": "mean: 10.121925680000459 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.8137887418233545,
            "unit": "iter/sec",
            "range": "stddev: 0.0005032434750012346",
            "extra": "mean: 172.00487400000952 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 94.13480341119025,
            "unit": "iter/sec",
            "range": "stddev: 0.0007361347786086806",
            "extra": "mean: 10.623063561644676 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 273.17493138159705,
            "unit": "iter/sec",
            "range": "stddev: 0.00028417432810455686",
            "extra": "mean: 3.660658007462272 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6134792.426960999,
            "unit": "iter/sec",
            "range": "stddev: 1.0923027910370436e-8",
            "extra": "mean: 163.00470014378442 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.23156848252067,
            "unit": "iter/sec",
            "range": "stddev: 0.00008225417274615659",
            "extra": "mean: 8.990253519234907 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.18994347937063,
            "unit": "iter/sec",
            "range": "stddev: 0.00022427184232670433",
            "extra": "mean: 9.506612200016207 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2289.38152171361,
            "unit": "iter/sec",
            "range": "stddev: 0.00008280264303448318",
            "extra": "mean: 436.7991924961011 usec\nrounds: 613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.20665236490638,
            "unit": "iter/sec",
            "range": "stddev: 0.00007876690490688597",
            "extra": "mean: 8.531938928574132 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.570725557313847,
            "unit": "iter/sec",
            "range": "stddev: 0.0022555619501192117",
            "extra": "mean: 388.9952380000068 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.73515956816849,
            "unit": "iter/sec",
            "range": "stddev: 0.0008367428139378744",
            "extra": "mean: 23.399936027028556 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.70146236617286,
            "unit": "iter/sec",
            "range": "stddev: 0.00025057134847615814",
            "extra": "mean: 38.90829190000318 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.29616401983547,
            "unit": "iter/sec",
            "range": "stddev: 0.015139269514544227",
            "extra": "mean: 11.862936014083548 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.29810823271437,
            "unit": "iter/sec",
            "range": "stddev: 0.0008858985600515202",
            "extra": "mean: 10.07068531110791 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2268.8462949130917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000921278240672412",
            "extra": "mean: 440.7526425399853 usec\nrounds: 1796"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2294.4817065850502,
            "unit": "iter/sec",
            "range": "stddev: 0.00010399173136064648",
            "extra": "mean: 435.8282731695132 usec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.64265280890101,
            "unit": "iter/sec",
            "range": "stddev: 0.00012831937994756273",
            "extra": "mean: 63.92777569230318 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.267990702837183,
            "unit": "iter/sec",
            "range": "stddev: 0.0002578762276665485",
            "extra": "mean: 88.74696708333356 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 102.50555099782724,
            "unit": "iter/sec",
            "range": "stddev: 0.00005304876654477925",
            "extra": "mean: 9.75556923762301 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7021293414610666,
            "unit": "iter/sec",
            "range": "stddev: 0.06033234547040639",
            "extra": "mean: 1.4242390126000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.42698789619892,
            "unit": "iter/sec",
            "range": "stddev: 0.000767506473973427",
            "extra": "mean: 10.590192722225488 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 302.55563071091257,
            "unit": "iter/sec",
            "range": "stddev: 0.00014868836418974895",
            "extra": "mean: 3.305177291363932 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1793107793824369,
            "unit": "iter/sec",
            "range": "stddev: 0.09381459495881803",
            "extra": "mean: 5.57690956140001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.2566747829865,
            "unit": "iter/sec",
            "range": "stddev: 0.0007313189999161619",
            "extra": "mean: 11.593305706670282 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139410.8153110864,
            "unit": "iter/sec",
            "range": "stddev: 3.73352114973489e-7",
            "extra": "mean: 7.173044629059542 usec\nrounds: 36232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.67279384354956,
            "unit": "iter/sec",
            "range": "stddev: 0.00020183370167960388",
            "extra": "mean: 6.34224824475583 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 88.48030068473604,
            "unit": "iter/sec",
            "range": "stddev: 0.012727973434358426",
            "extra": "mean: 11.301950742268584 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 243.4239433770236,
            "unit": "iter/sec",
            "range": "stddev: 0.0005183266972791831",
            "extra": "mean: 4.108059322870982 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 92.52595705463774,
            "unit": "iter/sec",
            "range": "stddev: 0.0008476032234849796",
            "extra": "mean: 10.807777966668178 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2540295.3759721816,
            "unit": "iter/sec",
            "range": "stddev: 1.876734945317446e-8",
            "extra": "mean: 393.6550093576531 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.5809850009152,
            "unit": "iter/sec",
            "range": "stddev: 0.00010453023760328534",
            "extra": "mean: 6.386471511813233 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 272.84968252256243,
            "unit": "iter/sec",
            "range": "stddev: 0.0003571817116356344",
            "extra": "mean: 3.66502167330654 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.27980707968372,
            "unit": "iter/sec",
            "range": "stddev: 0.00031276276396035733",
            "extra": "mean: 18.42305737255076 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11500726.788455294,
            "unit": "iter/sec",
            "range": "stddev: 4.185262181401382e-9",
            "extra": "mean: 86.95102652157446 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2270.2692655992796,
            "unit": "iter/sec",
            "range": "stddev: 0.00011792454323813355",
            "extra": "mean: 440.4763854018133 usec\nrounds: 1370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2318.0844004742276,
            "unit": "iter/sec",
            "range": "stddev: 0.00008134603288557911",
            "extra": "mean: 431.3906774901823 usec\nrounds: 1355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 95.88980846802234,
            "unit": "iter/sec",
            "range": "stddev: 0.0007758158903992179",
            "extra": "mean: 10.428636952940451 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5528438.812852171,
            "unit": "iter/sec",
            "range": "stddev: 1.0463077297587864e-8",
            "extra": "mean: 180.88289187104917 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 714484.4812930401,
            "unit": "iter/sec",
            "range": "stddev: 2.562723299387111e-7",
            "extra": "mean: 1.3996105250463207 usec\nrounds: 22936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13612.106752110763,
            "unit": "iter/sec",
            "range": "stddev: 0.000001915166873741003",
            "extra": "mean: 73.4640139260541 usec\nrounds: 5960"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69566.51021256285,
            "unit": "iter/sec",
            "range": "stddev: 7.46249014807552e-7",
            "extra": "mean: 14.374732855571823 usec\nrounds: 13124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 244.8794064478519,
            "unit": "iter/sec",
            "range": "stddev: 0.0041851574645179425",
            "extra": "mean: 4.0836426978719995 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.063609325328756,
            "unit": "iter/sec",
            "range": "stddev: 0.0005608002236957009",
            "extra": "mean: 16.649016121951583 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 267.4964919580669,
            "unit": "iter/sec",
            "range": "stddev: 0.0002940787418554774",
            "extra": "mean: 3.738366782607233 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9341351633464108,
            "unit": "iter/sec",
            "range": "stddev: 0.0036000386649123533",
            "extra": "mean: 1.070508893400006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 369.8651028509895,
            "unit": "iter/sec",
            "range": "stddev: 0.00007849493945899811",
            "extra": "mean: 2.70368843205756 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 220.8334146729338,
            "unit": "iter/sec",
            "range": "stddev: 0.0109424304490803",
            "extra": "mean: 4.5283002188824275 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1606979.1336306904,
            "unit": "iter/sec",
            "range": "stddev: 1.1828492746013844e-7",
            "extra": "mean: 622.2856159561161 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 96.32157403320295,
            "unit": "iter/sec",
            "range": "stddev: 0.000827514771839583",
            "extra": "mean: 10.38189014285928 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8012727230036776,
            "unit": "iter/sec",
            "range": "stddev: 0.0049959300193162075",
            "extra": "mean: 1.2480145290000224 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.73040613608045,
            "unit": "iter/sec",
            "range": "stddev: 0.000028467348755476796",
            "extra": "mean: 9.282430428572251 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6678812862023642,
            "unit": "iter/sec",
            "range": "stddev: 0.0015957957801588792",
            "extra": "mean: 599.5630554000172 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1844051.0426759822,
            "unit": "iter/sec",
            "range": "stddev: 1.0830733367220762e-7",
            "extra": "mean: 542.2843385879692 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4695.710144552036,
            "unit": "iter/sec",
            "range": "stddev: 0.00004629813402951766",
            "extra": "mean: 212.96033384006898 usec\nrounds: 1971"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8036.369156136722,
            "unit": "iter/sec",
            "range": "stddev: 0.000012258201340846934",
            "extra": "mean: 124.43430367262077 usec\nrounds: 3540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.74907271453989,
            "unit": "iter/sec",
            "range": "stddev: 0.0008549014467140927",
            "extra": "mean: 10.55419299999696 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.04818869949501,
            "unit": "iter/sec",
            "range": "stddev: 0.00016928942782314197",
            "extra": "mean: 10.63284698863498 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 186.6968418547901,
            "unit": "iter/sec",
            "range": "stddev: 0.00005296554232921307",
            "extra": "mean: 5.356277000002947 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 85.9107966930462,
            "unit": "iter/sec",
            "range": "stddev: 0.01647329297376198",
            "extra": "mean: 11.639980520410449 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2284.745170957836,
            "unit": "iter/sec",
            "range": "stddev: 0.00009304029828101372",
            "extra": "mean: 437.6855733021504 usec\nrounds: 1753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 170.56990304294348,
            "unit": "iter/sec",
            "range": "stddev: 0.004104283256953755",
            "extra": "mean: 5.862699000000225 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.4939911453559,
            "unit": "iter/sec",
            "range": "stddev: 0.0000731271169850325",
            "extra": "mean: 6.116432738564321 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7490438.137655411,
            "unit": "iter/sec",
            "range": "stddev: 6.7477852275904146e-9",
            "extra": "mean: 133.5035389950911 nsec\nrounds: 75188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.8309315402282,
            "unit": "iter/sec",
            "range": "stddev: 0.00006990738339711415",
            "extra": "mean: 1.8558697013579695 msec\nrounds: 442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.48039838241097,
            "unit": "iter/sec",
            "range": "stddev: 0.0008398104842884415",
            "extra": "mean: 10.473353870968097 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2310.2019666523756,
            "unit": "iter/sec",
            "range": "stddev: 0.00008557881473348123",
            "extra": "mean: 432.8625870962535 usec\nrounds: 310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.690735945561464,
            "unit": "iter/sec",
            "range": "stddev: 0.0004981064293244739",
            "extra": "mean: 24.575618424249214 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.75237145520143,
            "unit": "iter/sec",
            "range": "stddev: 0.000038217325677192866",
            "extra": "mean: 7.532822118642602 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.15592713251436,
            "unit": "iter/sec",
            "range": "stddev: 0.00031598557648991957",
            "extra": "mean: 3.6211426290341637 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9347085530781045,
            "unit": "iter/sec",
            "range": "stddev: 0.002730517779165801",
            "extra": "mean: 1.0698521979999895 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1781.116173599342,
            "unit": "iter/sec",
            "range": "stddev: 0.000006198001962898021",
            "extra": "mean: 561.4456905296441 usec\nrounds: 1341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.0019797818321,
            "unit": "iter/sec",
            "range": "stddev: 0.0002654817104132528",
            "extra": "mean: 3.5842039571975732 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 93.04308394432167,
            "unit": "iter/sec",
            "range": "stddev: 0.0008325514298106655",
            "extra": "mean: 10.747709099995165 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2325.7320449268905,
            "unit": "iter/sec",
            "range": "stddev: 0.00009614172128267492",
            "extra": "mean: 429.9721466973359 usec\nrounds: 1786"
          }
        ]
      }
    ]
  }
}