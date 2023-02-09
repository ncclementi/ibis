window.BENCHMARK_DATA = {
  "lastUpdate": 1675975811555,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "c2e50651763841fc9ce4518a6a6f3546b03337ce",
          "message": "test(postgres): fix flaky test\n\nThis test assumed `functional_alltypes` existed before it ran, but that\nisn't always the case. Here I make sure that the table exists by\ncreating a one-off table and verifying metadata laziness with that.",
          "timestamp": "2023-02-09T15:44:55-05:00",
          "tree_id": "5b189cf257b9b07312442edd8336154b2335d9de",
          "url": "https://github.com/ibis-project/ibis/commit/c2e50651763841fc9ce4518a6a6f3546b03337ce"
        },
        "date": 1675975736583,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.922807227158773,
            "unit": "iter/sec",
            "range": "stddev: 0.000513678767211362",
            "extra": "mean: 203.13612819999776 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3609.0799627487804,
            "unit": "iter/sec",
            "range": "stddev: 0.002488340989386044",
            "extra": "mean: 277.0789260203509 usec\nrounds: 784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.7661393316528,
            "unit": "iter/sec",
            "range": "stddev: 0.00012572051004823315",
            "extra": "mean: 8.419908280486526 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1549340.1152242895,
            "unit": "iter/sec",
            "range": "stddev: 1.0659203136165002e-7",
            "extra": "mean: 645.436073186058 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.13483322867737,
            "unit": "iter/sec",
            "range": "stddev: 0.00031233627823836044",
            "extra": "mean: 11.746073399990564 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.15084182635128,
            "unit": "iter/sec",
            "range": "stddev: 0.0006480257809169333",
            "extra": "mean: 11.60754763157899 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.39825999144155,
            "unit": "iter/sec",
            "range": "stddev: 0.020048915001902146",
            "extra": "mean: 32.89661974999701 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13276090960278095,
            "unit": "iter/sec",
            "range": "stddev: 0.07537903865116094",
            "extra": "mean: 7.532337666199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 124229.97392256172,
            "unit": "iter/sec",
            "range": "stddev: 3.4915804947595554e-7",
            "extra": "mean: 8.049587136059017 usec\nrounds: 31250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4253821.773041384,
            "unit": "iter/sec",
            "range": "stddev: 1.2668075905604776e-8",
            "extra": "mean: 235.0827216924331 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.551360054803258,
            "unit": "iter/sec",
            "range": "stddev: 0.0014357926301268272",
            "extra": "mean: 644.5956868000053 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.433353703671054,
            "unit": "iter/sec",
            "range": "stddev: 0.0001313442526050693",
            "extra": "mean: 74.44157446153756 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8629801341645181,
            "unit": "iter/sec",
            "range": "stddev: 0.004234833384671077",
            "extra": "mean: 1.1587752260000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 237.89897249180802,
            "unit": "iter/sec",
            "range": "stddev: 0.0002598796787258864",
            "extra": "mean: 4.203464981482569 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.594619431306917,
            "unit": "iter/sec",
            "range": "stddev: 0.0013167302787361606",
            "extra": "mean: 44.25832455555363 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.7177039717103,
            "unit": "iter/sec",
            "range": "stddev: 0.00008380309355117317",
            "extra": "mean: 5.857623297029056 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19152.673592415507,
            "unit": "iter/sec",
            "range": "stddev: 0.000016502084668121834",
            "extra": "mean: 52.212031661000154 usec\nrounds: 4864"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.31940488192078,
            "unit": "iter/sec",
            "range": "stddev: 0.00032552709468908274",
            "extra": "mean: 4.538864838237674 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.48893389840276,
            "unit": "iter/sec",
            "range": "stddev: 0.0009148299360846033",
            "extra": "mean: 11.562172811318092 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10800.994321926584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017178931522066445",
            "extra": "mean: 92.58406866948792 usec\nrounds: 4660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 245.73237313608553,
            "unit": "iter/sec",
            "range": "stddev: 0.00021292319424508004",
            "extra": "mean: 4.069467881817119 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59228.297578094745,
            "unit": "iter/sec",
            "range": "stddev: 4.775955171822674e-7",
            "extra": "mean: 16.883821431495008 usec\nrounds: 12225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 250.11491585391946,
            "unit": "iter/sec",
            "range": "stddev: 0.00023274714352004207",
            "extra": "mean: 3.9981621911108003 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.85831861769915,
            "unit": "iter/sec",
            "range": "stddev: 0.0015141353829496015",
            "extra": "mean: 26.41427396969737 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.85040131750369,
            "unit": "iter/sec",
            "range": "stddev: 0.0006303254869342237",
            "extra": "mean: 27.13674652777816 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 134.42202439132697,
            "unit": "iter/sec",
            "range": "stddev: 0.00043503325621047887",
            "extra": "mean: 7.439257104838847 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 392032.19943602144,
            "unit": "iter/sec",
            "range": "stddev: 3.1378266715609947e-7",
            "extra": "mean: 2.5508108809393786 usec\nrounds: 1930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.731685271614616,
            "unit": "iter/sec",
            "range": "stddev: 0.0004963812105985058",
            "extra": "mean: 25.168829189191907 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.55908384706713,
            "unit": "iter/sec",
            "range": "stddev: 0.0007316951454516231",
            "extra": "mean: 10.921909197675228 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.32125675449654,
            "unit": "iter/sec",
            "range": "stddev: 0.0008885556890183872",
            "extra": "mean: 19.112690749999217 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8628552746689737,
            "unit": "iter/sec",
            "range": "stddev: 0.0049941848850223215",
            "extra": "mean: 1.1589429065999979 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9472.239382281985,
            "unit": "iter/sec",
            "range": "stddev: 0.000019046554706693248",
            "extra": "mean: 105.57165625169063 usec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 957.1958948550362,
            "unit": "iter/sec",
            "range": "stddev: 0.000044349524504776524",
            "extra": "mean: 1.0447182289174426 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1447.287257702204,
            "unit": "iter/sec",
            "range": "stddev: 0.000027083400926168022",
            "extra": "mean: 690.9478368431552 usec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 145.07780377547394,
            "unit": "iter/sec",
            "range": "stddev: 0.0006503069005502153",
            "extra": "mean: 6.892853172409648 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.02929900452803,
            "unit": "iter/sec",
            "range": "stddev: 0.00011806202096257875",
            "extra": "mean: 14.918849142856873 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5435593.38858506,
            "unit": "iter/sec",
            "range": "stddev: 4.5231656947919535e-9",
            "extra": "mean: 183.97255433050856 nsec\nrounds: 53192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4711.44208719159,
            "unit": "iter/sec",
            "range": "stddev: 0.00005793166480590751",
            "extra": "mean: 212.2492395096133 usec\nrounds: 1716"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4577.498447583531,
            "unit": "iter/sec",
            "range": "stddev: 0.00005209929169593111",
            "extra": "mean: 218.45993208974252 usec\nrounds: 1502"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4624.691553890736,
            "unit": "iter/sec",
            "range": "stddev: 0.00005132514432506625",
            "extra": "mean: 216.2306368645718 usec\nrounds: 2539"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 155.52099330467473,
            "unit": "iter/sec",
            "range": "stddev: 0.0006347042992126127",
            "extra": "mean: 6.430000083917554 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.02684065125939,
            "unit": "iter/sec",
            "range": "stddev: 0.00027635763948801595",
            "extra": "mean: 15.618449853660401 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5806531790767858,
            "unit": "iter/sec",
            "range": "stddev: 0.0024857847422872126",
            "extra": "mean: 1.7221984414000076 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 247.37881881993962,
            "unit": "iter/sec",
            "range": "stddev: 0.00020974743253904677",
            "extra": "mean: 4.042383275861112 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 508.58403064362057,
            "unit": "iter/sec",
            "range": "stddev: 0.00005165013646210942",
            "extra": "mean: 1.9662434125870707 msec\nrounds: 429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.16747108171552,
            "unit": "iter/sec",
            "range": "stddev: 0.00009089152277094763",
            "extra": "mean: 6.703874462363108 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 238.31879899121245,
            "unit": "iter/sec",
            "range": "stddev: 0.0001572937727705258",
            "extra": "mean: 4.1960600852007195 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4493685.038925311,
            "unit": "iter/sec",
            "range": "stddev: 1.2482305772399405e-8",
            "extra": "mean: 222.53451039333282 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.046569650804404,
            "unit": "iter/sec",
            "range": "stddev: 0.0005081659249942051",
            "extra": "mean: 110.53913677778206 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.219645761991629,
            "unit": "iter/sec",
            "range": "stddev: 0.0021992450275016436",
            "extra": "mean: 450.5223388000104 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 242.83264722842887,
            "unit": "iter/sec",
            "range": "stddev: 0.00023285511497359373",
            "extra": "mean: 4.118062424527769 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 156.21219912207164,
            "unit": "iter/sec",
            "range": "stddev: 0.0007666814483576066",
            "extra": "mean: 6.401548698629821 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5196.760732917256,
            "unit": "iter/sec",
            "range": "stddev: 0.00006131572818663491",
            "extra": "mean: 192.42756235933908 usec\nrounds: 2678"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 271.660008017222,
            "unit": "iter/sec",
            "range": "stddev: 0.00003938647157792162",
            "extra": "mean: 3.681071819509792 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 575694.5590384706,
            "unit": "iter/sec",
            "range": "stddev: 2.551684936055898e-7",
            "extra": "mean: 1.737032223598235 usec\nrounds: 21506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.38721971655094,
            "unit": "iter/sec",
            "range": "stddev: 0.0008074713493458495",
            "extra": "mean: 10.82400794252771 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1508233.440442717,
            "unit": "iter/sec",
            "range": "stddev: 9.206491899821932e-8",
            "extra": "mean: 663.0273359450687 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 155.848357406086,
            "unit": "iter/sec",
            "range": "stddev: 0.0007542311635285272",
            "extra": "mean: 6.416493677853478 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4086.790098440254,
            "unit": "iter/sec",
            "range": "stddev: 0.000023264414864942787",
            "extra": "mean: 244.69081501926306 usec\nrounds: 1265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 267.91798594520105,
            "unit": "iter/sec",
            "range": "stddev: 0.000034436727746831425",
            "extra": "mean: 3.732485508473986 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 155.83323189793052,
            "unit": "iter/sec",
            "range": "stddev: 0.0006837877548103861",
            "extra": "mean: 6.4171164765099125 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 138.63437720018692,
            "unit": "iter/sec",
            "range": "stddev: 0.0007921135254995468",
            "extra": "mean: 7.213218107915672 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5517.121583627824,
            "unit": "iter/sec",
            "range": "stddev: 0.00006459087484308836",
            "extra": "mean: 181.25393556080425 usec\nrounds: 3352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1741669.7110634763,
            "unit": "iter/sec",
            "range": "stddev: 8.667329450139641e-8",
            "extra": "mean: 574.1616758032685 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1488799.2448843569,
            "unit": "iter/sec",
            "range": "stddev: 1.0219667286499579e-7",
            "extra": "mean: 671.6822321317577 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 231.25260563870523,
            "unit": "iter/sec",
            "range": "stddev: 0.00039539222726748564",
            "extra": "mean: 4.324275600000538 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.2319554655862,
            "unit": "iter/sec",
            "range": "stddev: 0.000017836771337758368",
            "extra": "mean: 3.756123107953742 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.7388263046514,
            "unit": "iter/sec",
            "range": "stddev: 0.000788287071613306",
            "extra": "mean: 10.78297019540611 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10858.325964719654,
            "unit": "iter/sec",
            "range": "stddev: 0.000007938471029755262",
            "extra": "mean: 92.0952275009197 usec\nrounds: 5978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 96.35198868575789,
            "unit": "iter/sec",
            "range": "stddev: 0.0005753916376440178",
            "extra": "mean: 10.378612975611714 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.18398232992254,
            "unit": "iter/sec",
            "range": "stddev: 0.00008348711620971311",
            "extra": "mean: 11.339927882352853 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.95121299165939,
            "unit": "iter/sec",
            "range": "stddev: 0.0002242413657428013",
            "extra": "mean: 10.421963087500785 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5407.525987154774,
            "unit": "iter/sec",
            "range": "stddev: 0.000050035163812663945",
            "extra": "mean: 184.9274515509375 usec\nrounds: 2095"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 610.2532284724242,
            "unit": "iter/sec",
            "range": "stddev: 0.00003293221872199031",
            "extra": "mean: 1.638664005929446 msec\nrounds: 506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7265847236166701,
            "unit": "iter/sec",
            "range": "stddev: 0.007965875154066722",
            "extra": "mean: 1.3763019885999939 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 71.0087622448389,
            "unit": "iter/sec",
            "range": "stddev: 0.024214160152825095",
            "extra": "mean: 14.082769060978563 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.40940712463055,
            "unit": "iter/sec",
            "range": "stddev: 0.0009281384410192132",
            "extra": "mean: 12.592966453338855 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10688733.548517266,
            "unit": "iter/sec",
            "range": "stddev: 4.33010139326084e-9",
            "extra": "mean: 93.5564532001024 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 156.08307523983538,
            "unit": "iter/sec",
            "range": "stddev: 0.0006976747644768696",
            "extra": "mean: 6.406844550335852 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 394.73999569701,
            "unit": "iter/sec",
            "range": "stddev: 0.0001076845316445671",
            "extra": "mean: 2.533313094443991 msec\nrounds: 360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.96892751633015,
            "unit": "iter/sec",
            "range": "stddev: 0.0002769126303233483",
            "extra": "mean: 7.409112737292871 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.3145554687846,
            "unit": "iter/sec",
            "range": "stddev: 0.000904215169223587",
            "extra": "mean: 18.07842423255711 msec\nrounds: 43"
          }
        ]
      }
    ]
  }
}