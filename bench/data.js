window.BENCHMARK_DATA = {
  "lastUpdate": 1682185282918,
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
          "id": "c05b8829d2bfdf94636d23db25074f0e03136f39",
          "message": "chore(deps): update clickhouse/clickhouse-server docker tag to v23.3.2.37",
          "timestamp": "2023-04-22T13:33:41-04:00",
          "tree_id": "6b194b42cfa39ea690ae01d7ef95c548ecef291a",
          "url": "https://github.com/ibis-project/ibis/commit/c05b8829d2bfdf94636d23db25074f0e03136f39"
        },
        "date": 1682185202072,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.04169064852822,
            "unit": "iter/sec",
            "range": "stddev: 0.00028383065917801686",
            "extra": "mean: 10.98397880000448 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4563.402051069275,
            "unit": "iter/sec",
            "range": "stddev: 0.000029653117166243252",
            "extra": "mean: 219.1347570976536 usec\nrounds: 951"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.50770450935184,
            "unit": "iter/sec",
            "range": "stddev: 0.0008948043845234603",
            "extra": "mean: 10.36186701449414 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.46183646881596,
            "unit": "iter/sec",
            "range": "stddev: 0.00009021521973686388",
            "extra": "mean: 6.155291739496906 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.03836540265351,
            "unit": "iter/sec",
            "range": "stddev: 0.0006730887828736087",
            "extra": "mean: 9.897230581817563 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17037989093995098,
            "unit": "iter/sec",
            "range": "stddev: 0.10976974985244829",
            "extra": "mean: 5.869237235000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.59985316458642,
            "unit": "iter/sec",
            "range": "stddev: 0.000855203407072578",
            "extra": "mean: 23.474259315788146 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 202.2943927723387,
            "unit": "iter/sec",
            "range": "stddev: 0.000045311283655516576",
            "extra": "mean: 4.943290747190388 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.082093690729494,
            "unit": "iter/sec",
            "range": "stddev: 0.00022831184752928414",
            "extra": "mean: 18.838744489361478 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7077103.2010707,
            "unit": "iter/sec",
            "range": "stddev: 5.4109610869623295e-9",
            "extra": "mean: 141.300751393436 nsec\nrounds: 63695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6121649.881126472,
            "unit": "iter/sec",
            "range": "stddev: 9.518105724293757e-9",
            "extra": "mean: 163.35465428723919 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10463.771253313598,
            "unit": "iter/sec",
            "range": "stddev: 0.0000275049152984419",
            "extra": "mean: 95.56783838172365 usec\nrounds: 4820"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2178.040943264658,
            "unit": "iter/sec",
            "range": "stddev: 0.00012615585894086215",
            "extra": "mean: 459.1281918241186 usec\nrounds: 1272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8512955027219015,
            "unit": "iter/sec",
            "range": "stddev: 0.01443076205510197",
            "extra": "mean: 1.1746802336000086 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.599653523273738,
            "unit": "iter/sec",
            "range": "stddev: 0.0009545892580694209",
            "extra": "mean: 384.6666454000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.01029087062218,
            "unit": "iter/sec",
            "range": "stddev: 0.00009328134445953098",
            "extra": "mean: 62.45982712499831 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 75523.14134516651,
            "unit": "iter/sec",
            "range": "stddev: 4.5255023301560665e-7",
            "extra": "mean: 13.240974649474111 usec\nrounds: 14556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11430162.382281896,
            "unit": "iter/sec",
            "range": "stddev: 3.6607428030700266e-9",
            "extra": "mean: 87.48782095614501 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1800.3550850779516,
            "unit": "iter/sec",
            "range": "stddev: 0.000035124824052447554",
            "extra": "mean: 555.4459830110137 usec\nrounds: 1295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.83346638531182,
            "unit": "iter/sec",
            "range": "stddev: 0.0009285282653012037",
            "extra": "mean: 10.016681141176191 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.528490973897517,
            "unit": "iter/sec",
            "range": "stddev: 0.0006535713313029376",
            "extra": "mean: 86.7416214545487 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7330665082376245,
            "unit": "iter/sec",
            "range": "stddev: 0.002061479469590476",
            "extra": "mean: 1.3641327065999973 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2675342.629616916,
            "unit": "iter/sec",
            "range": "stddev: 2.186373914492503e-8",
            "extra": "mean: 373.7838992768604 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2152.5538720514846,
            "unit": "iter/sec",
            "range": "stddev: 0.00006407489945164633",
            "extra": "mean: 464.5644473682571 usec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1960818.084985961,
            "unit": "iter/sec",
            "range": "stddev: 1.0820652526150871e-7",
            "extra": "mean: 509.99121624643715 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.5894253646434,
            "unit": "iter/sec",
            "range": "stddev: 0.0008793200371687146",
            "extra": "mean: 9.941402850000713 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 277.2803853497182,
            "unit": "iter/sec",
            "range": "stddev: 0.00031255812327317937",
            "extra": "mean: 3.606457769231517 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5418129.335827009,
            "unit": "iter/sec",
            "range": "stddev: 1.1095759742375103e-8",
            "extra": "mean: 184.56554615391624 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 99.12136275219864,
            "unit": "iter/sec",
            "range": "stddev: 0.0005168920412643898",
            "extra": "mean: 10.08864257143013 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.09803988860548,
            "unit": "iter/sec",
            "range": "stddev: 0.0007746973091068848",
            "extra": "mean: 11.350990342854825 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7805390430855884,
            "unit": "iter/sec",
            "range": "stddev: 0.0031222373054700494",
            "extra": "mean: 1.281165892799993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 301.04697479081307,
            "unit": "iter/sec",
            "range": "stddev: 0.000027144033267893113",
            "extra": "mean: 3.321740737288142 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1946289.7800783617,
            "unit": "iter/sec",
            "range": "stddev: 1.0047868429531707e-7",
            "extra": "mean: 513.7981045966022 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1674300.908678388,
            "unit": "iter/sec",
            "range": "stddev: 1.0679604233160353e-7",
            "extra": "mean: 597.2642043116082 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 87.2311197311558,
            "unit": "iter/sec",
            "range": "stddev: 0.014367885504623389",
            "extra": "mean: 11.463798734694404 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.7080840477315,
            "unit": "iter/sec",
            "range": "stddev: 0.00006478126612903929",
            "extra": "mean: 1.4669035374531108 msec\nrounds: 534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.14353719667751,
            "unit": "iter/sec",
            "range": "stddev: 0.0007982198954550681",
            "extra": "mean: 10.401115136364648 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12505.955617976559,
            "unit": "iter/sec",
            "range": "stddev: 0.000035004354152725354",
            "extra": "mean: 79.96190219662704 usec\nrounds: 5828"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2225.0523982044433,
            "unit": "iter/sec",
            "range": "stddev: 0.00010381268370408194",
            "extra": "mean: 449.4276183369761 usec\nrounds: 1407"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.31027764428103,
            "unit": "iter/sec",
            "range": "stddev: 0.0008640710427341082",
            "extra": "mean: 9.96906821000124 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 280.67278814239353,
            "unit": "iter/sec",
            "range": "stddev: 0.00031505047253418885",
            "extra": "mean: 3.5628676603043923 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.62315443283904,
            "unit": "iter/sec",
            "range": "stddev: 0.00008146155694970306",
            "extra": "mean: 8.29028228205376 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.15627456288257,
            "unit": "iter/sec",
            "range": "stddev: 0.000841476850652483",
            "extra": "mean: 10.085090473682769 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.0981277004602,
            "unit": "iter/sec",
            "range": "stddev: 0.0009443249644075527",
            "extra": "mean: 10.515454133332646 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.4340725048614,
            "unit": "iter/sec",
            "range": "stddev: 0.0004536321832447797",
            "extra": "mean: 3.739239322176579 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 225.24387709831242,
            "unit": "iter/sec",
            "range": "stddev: 0.004127576786789256",
            "extra": "mean: 4.439632334882644 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.03437408917715,
            "unit": "iter/sec",
            "range": "stddev: 0.000460326865703353",
            "extra": "mean: 27.001941428577783 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2207.869393176087,
            "unit": "iter/sec",
            "range": "stddev: 0.00009539996409182144",
            "extra": "mean: 452.92534200198753 usec\nrounds: 1269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.49154356551438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000777535279098858",
            "extra": "mean: 6.116524305731322 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.67001765625976,
            "unit": "iter/sec",
            "range": "stddev: 0.00016003885284020329",
            "extra": "mean: 9.202170217392954 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 26.498463465400853,
            "unit": "iter/sec",
            "range": "stddev: 0.06957381902041779",
            "extra": "mean: 37.73803719999478 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 261.11485642432854,
            "unit": "iter/sec",
            "range": "stddev: 0.00028178857773710235",
            "extra": "mean: 3.8297323013093334 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 490268.3282948247,
            "unit": "iter/sec",
            "range": "stddev: 7.369966956232501e-7",
            "extra": "mean: 2.0396993692781358 usec\nrounds: 2059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 106.30787775209298,
            "unit": "iter/sec",
            "range": "stddev: 0.00007593649544476513",
            "extra": "mean: 9.406640609757748 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 284.25533329147265,
            "unit": "iter/sec",
            "range": "stddev: 0.0002951857319165069",
            "extra": "mean: 3.5179638968272577 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 154.23862283491064,
            "unit": "iter/sec",
            "range": "stddev: 0.003926402949516454",
            "extra": "mean: 6.48346037860018 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.17469372913692,
            "unit": "iter/sec",
            "range": "stddev: 0.00012341402281896454",
            "extra": "mean: 19.540908349992492 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.52227966109857,
            "unit": "iter/sec",
            "range": "stddev: 0.000044345058531666496",
            "extra": "mean: 7.603274537034794 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146259.70521564715,
            "unit": "iter/sec",
            "range": "stddev: 3.5450773759203814e-7",
            "extra": "mean: 6.837153121056736 usec\nrounds: 37454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2110.8297388050464,
            "unit": "iter/sec",
            "range": "stddev: 0.00009942389099480562",
            "extra": "mean: 473.7473523402727 usec\nrounds: 1175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.98378019802664,
            "unit": "iter/sec",
            "range": "stddev: 0.0008858577762070161",
            "extra": "mean: 10.528113304346839 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.2434273674231,
            "unit": "iter/sec",
            "range": "stddev: 0.00030932729503464046",
            "extra": "mean: 3.543040875485844 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.99922434974351,
            "unit": "iter/sec",
            "range": "stddev: 0.0001286961485296727",
            "extra": "mean: 9.009071962963773 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.18807452668313,
            "unit": "iter/sec",
            "range": "stddev: 0.0387690679272244",
            "extra": "mean: 29.249965487805383 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2181.108527337054,
            "unit": "iter/sec",
            "range": "stddev: 0.00009626533379828873",
            "extra": "mean: 458.48245856014967 usec\nrounds: 1291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1172.8758232360074,
            "unit": "iter/sec",
            "range": "stddev: 0.00004306811805472323",
            "extra": "mean: 852.6051779641629 usec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.845091203018426,
            "unit": "iter/sec",
            "range": "stddev: 0.010331821704636888",
            "extra": "mean: 1.1833042355999965 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.900200039792012,
            "unit": "iter/sec",
            "range": "stddev: 0.00010055271082235267",
            "extra": "mean: 169.48577900000336 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2170.2386472950716,
            "unit": "iter/sec",
            "range": "stddev: 0.00008919485688502591",
            "extra": "mean: 460.7788186088999 usec\nrounds: 1279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13893.949147729076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019224446127178207",
            "extra": "mean: 71.97377717216182 usec\nrounds: 6054"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.9101949056963,
            "unit": "iter/sec",
            "range": "stddev: 0.0009434437207848119",
            "extra": "mean: 10.008988581634584 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.53895702974003,
            "unit": "iter/sec",
            "range": "stddev: 0.00016013055494793933",
            "extra": "mean: 10.466934443179165 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 220.7786341796199,
            "unit": "iter/sec",
            "range": "stddev: 0.013358777289588591",
            "extra": "mean: 4.529423799163579 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.32159942683524,
            "unit": "iter/sec",
            "range": "stddev: 0.000521336535410137",
            "extra": "mean: 18.07612235294345 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.87528391981789,
            "unit": "iter/sec",
            "range": "stddev: 0.0008347483935072275",
            "extra": "mean: 10.540152911111514 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 306.931871199446,
            "unit": "iter/sec",
            "range": "stddev: 0.00006314722986872904",
            "extra": "mean: 3.258052010343998 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.23426514531351,
            "unit": "iter/sec",
            "range": "stddev: 0.0008446913913839785",
            "extra": "mean: 10.391309150540115 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2211.399324865536,
            "unit": "iter/sec",
            "range": "stddev: 0.00008392301260765213",
            "extra": "mean: 452.2023628911096 usec\nrounds: 1342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.481695254374745,
            "unit": "iter/sec",
            "range": "stddev: 0.0006291066285352748",
            "extra": "mean: 42.586363086953675 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 742.3948224875829,
            "unit": "iter/sec",
            "range": "stddev: 0.000023388433974869445",
            "extra": "mean: 1.3469921525708453 msec\nrounds: 603"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 281.8936454230656,
            "unit": "iter/sec",
            "range": "stddev: 0.0002763492539835792",
            "extra": "mean: 3.547437185039065 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.21488112047516,
            "unit": "iter/sec",
            "range": "stddev: 0.00009579232320840349",
            "extra": "mean: 13.120797215694267 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.00755252833419,
            "unit": "iter/sec",
            "range": "stddev: 0.0008465377613150196",
            "extra": "mean: 10.525479010753056 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6211988785031417,
            "unit": "iter/sec",
            "range": "stddev: 0.0025504681889501808",
            "extra": "mean: 616.8274683999925 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.95818662122524,
            "unit": "iter/sec",
            "range": "stddev: 0.0006151070342553339",
            "extra": "mean: 22.74889109090659 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 762211.9083358978,
            "unit": "iter/sec",
            "range": "stddev: 1.7917116474692725e-7",
            "extra": "mean: 1.3119711054938172 usec\nrounds: 25126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8563.702483506004,
            "unit": "iter/sec",
            "range": "stddev: 0.00001787184931529487",
            "extra": "mean: 116.77192218272829 usec\nrounds: 3354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.8186764838026,
            "unit": "iter/sec",
            "range": "stddev: 0.000029189656802951664",
            "extra": "mean: 1.852473883478178 msec\nrounds: 472"
          }
        ]
      }
    ]
  }
}