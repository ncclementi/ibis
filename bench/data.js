window.BENCHMARK_DATA = {
  "lastUpdate": 1682778917570,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "c33a3ed0048faefb35c6b5b6b1b86398d7f9b80a",
          "message": "docs: change plural variable name cols to col\n\nfixes #6115",
          "timestamp": "2023-04-29T10:28:45-04:00",
          "tree_id": "9a3df15fbde652b700e702975d5a8708913b45a7",
          "url": "https://github.com/ibis-project/ibis/commit/c33a3ed0048faefb35c6b5b6b1b86398d7f9b80a"
        },
        "date": 1682778818785,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 162.57495428674477,
            "unit": "iter/sec",
            "range": "stddev: 0.004137269473829451",
            "extra": "mean: 6.151008956989958 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.269357276167732,
            "unit": "iter/sec",
            "range": "stddev: 0.0014648815019448539",
            "extra": "mean: 70.08024122222878 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 204.09211761873595,
            "unit": "iter/sec",
            "range": "stddev: 0.0007373640869913507",
            "extra": "mean: 4.89974826890717 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8443.345459675167,
            "unit": "iter/sec",
            "range": "stddev: 0.00006406455192455371",
            "extra": "mean: 118.43646630070162 usec\nrounds: 3457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4632181.051406296,
            "unit": "iter/sec",
            "range": "stddev: 3.556000779146101e-7",
            "extra": "mean: 215.88102643257938 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1562.1865076124914,
            "unit": "iter/sec",
            "range": "stddev: 0.00025167280924303634",
            "extra": "mean: 640.1284322499445 usec\nrounds: 893"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 131.3833522740419,
            "unit": "iter/sec",
            "range": "stddev: 0.000832586489866609",
            "extra": "mean: 7.611314391751711 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 35.42234509261778,
            "unit": "iter/sec",
            "range": "stddev: 0.004451611505175513",
            "extra": "mean: 28.230767821422578 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 75.47681696041568,
            "unit": "iter/sec",
            "range": "stddev: 0.0014624737023170924",
            "extra": "mean: 13.249101383335454 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4543063.280068775,
            "unit": "iter/sec",
            "range": "stddev: 4.739024161386639e-7",
            "extra": "mean: 220.1157981635466 nsec\nrounds: 49505"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 67.55715378248921,
            "unit": "iter/sec",
            "range": "stddev: 0.013459704122073125",
            "extra": "mean: 14.80228138710011 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 506.1870073404531,
            "unit": "iter/sec",
            "range": "stddev: 0.0004272446224119369",
            "extra": "mean: 1.9755544601076975 msec\nrounds: 376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1387.8709791482975,
            "unit": "iter/sec",
            "range": "stddev: 0.00020498293417319676",
            "extra": "mean: 720.5280714304406 usec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 122.69111305201585,
            "unit": "iter/sec",
            "range": "stddev: 0.0009317554392271339",
            "extra": "mean: 8.150549580359925 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.0451479185139942,
            "unit": "iter/sec",
            "range": "stddev: 0.011781199680134264",
            "extra": "mean: 956.8023648000121 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 40.16661019533398,
            "unit": "iter/sec",
            "range": "stddev: 0.0015046429274199356",
            "extra": "mean: 24.896300562504692 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 543.3231679826899,
            "unit": "iter/sec",
            "range": "stddev: 0.00032500514334291583",
            "extra": "mean: 1.8405252323638435 msec\nrounds: 482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7908.9626859858045,
            "unit": "iter/sec",
            "range": "stddev: 0.0001336189379853775",
            "extra": "mean: 126.438831450291 usec\nrounds: 1151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 311.81035188253594,
            "unit": "iter/sec",
            "range": "stddev: 0.0005205354598832541",
            "extra": "mean: 3.2070776161296797 msec\nrounds: 310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.86130127979758,
            "unit": "iter/sec",
            "range": "stddev: 0.0028364558749474807",
            "extra": "mean: 32.4030406538502 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 176.32872482880643,
            "unit": "iter/sec",
            "range": "stddev: 0.0006861974448599122",
            "extra": "mean: 5.671225723267026 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.443413211546881,
            "unit": "iter/sec",
            "range": "stddev: 0.0047522640920158385",
            "extra": "mean: 155.1972482857309 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1580475.1546495878,
            "unit": "iter/sec",
            "range": "stddev: 0.000005403827655369042",
            "extra": "mean: 632.7211136841396 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1551.0578878564281,
            "unit": "iter/sec",
            "range": "stddev: 0.00024534956973796434",
            "extra": "mean: 644.7212627131579 usec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 198.18643756951394,
            "unit": "iter/sec",
            "range": "stddev: 0.0007142523784902978",
            "extra": "mean: 5.045753948976705 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 202.36186555002368,
            "unit": "iter/sec",
            "range": "stddev: 0.0006536666070601525",
            "extra": "mean: 4.9416425238123765 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 127.31276366479354,
            "unit": "iter/sec",
            "range": "stddev: 0.0006256196071691772",
            "extra": "mean: 7.854671999996298 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1435987.3333585686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016011130241020232",
            "extra": "mean: 696.3849727428607 nsec\nrounds: 41151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1560706.2593786707,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017273610399822761",
            "extra": "mean: 640.7355605776245 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 73.99809010617264,
            "unit": "iter/sec",
            "range": "stddev: 0.0016809964746520036",
            "extra": "mean: 13.513862297867384 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 249.63326238747595,
            "unit": "iter/sec",
            "range": "stddev: 0.0005454513810147267",
            "extra": "mean: 4.005876422220606 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5002142911520456,
            "unit": "iter/sec",
            "range": "stddev: 0.029640510490012904",
            "extra": "mean: 1.999143202600021 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 70.8227928852871,
            "unit": "iter/sec",
            "range": "stddev: 0.0017547721363130673",
            "extra": "mean: 14.1197481666632 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 61.23145976881124,
            "unit": "iter/sec",
            "range": "stddev: 0.023897379338333087",
            "extra": "mean: 16.331474111113035 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.48693848180484905,
            "unit": "iter/sec",
            "range": "stddev: 0.026266451791240014",
            "extra": "mean: 2.0536475086000108 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119546.47823468171,
            "unit": "iter/sec",
            "range": "stddev: 0.000013441626243119201",
            "extra": "mean: 8.36494738085801 usec\nrounds: 34246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 75.2568403074489,
            "unit": "iter/sec",
            "range": "stddev: 0.0016452921310568381",
            "extra": "mean: 13.28782866666567 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 187.01138417793126,
            "unit": "iter/sec",
            "range": "stddev: 0.0009594305449936536",
            "extra": "mean: 5.3472680521339475 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8242316369637335,
            "unit": "iter/sec",
            "range": "stddev: 0.00775035343836851",
            "extra": "mean: 548.175999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 144.0061395890052,
            "unit": "iter/sec",
            "range": "stddev: 0.0005836279359825458",
            "extra": "mean: 6.944148373493025 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 853318.8459995051,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045909499131013285",
            "extra": "mean: 1.171894895663162 usec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8862800.258695876,
            "unit": "iter/sec",
            "range": "stddev: 2.434594622990222e-7",
            "extra": "mean: 112.83115615961728 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 57.60103501793023,
            "unit": "iter/sec",
            "range": "stddev: 0.02844614717141526",
            "extra": "mean: 17.360799153847093 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.70777621151471,
            "unit": "iter/sec",
            "range": "stddev: 0.002420488181536852",
            "extra": "mean: 31.53800485184606 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 182.84797099623714,
            "unit": "iter/sec",
            "range": "stddev: 0.0007868482756447296",
            "extra": "mean: 5.4690243186815515 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.86098184277466,
            "unit": "iter/sec",
            "range": "stddev: 0.0012340151493403007",
            "extra": "mean: 13.182007083332318 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 841.1326863734455,
            "unit": "iter/sec",
            "range": "stddev: 0.00039106472298933414",
            "extra": "mean: 1.1888730710389022 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 27.34427407381321,
            "unit": "iter/sec",
            "range": "stddev: 0.003547929389124582",
            "extra": "mean: 36.57072765218038 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 81.1757042053136,
            "unit": "iter/sec",
            "range": "stddev: 0.0009419323921931967",
            "extra": "mean: 12.318956882354241 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1505110.0072398959,
            "unit": "iter/sec",
            "range": "stddev: 0.000005448580707170912",
            "extra": "mean: 664.4032630105371 nsec\nrounds: 119034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 394.24361985696254,
            "unit": "iter/sec",
            "range": "stddev: 0.00027809801993814944",
            "extra": "mean: 2.5365026842103746 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3164.0768897419543,
            "unit": "iter/sec",
            "range": "stddev: 0.00014934265836935305",
            "extra": "mean: 316.04794537137644 usec\nrounds: 659"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1564.4216242470534,
            "unit": "iter/sec",
            "range": "stddev: 0.00029972951365248485",
            "extra": "mean: 639.2138695227342 usec\nrounds: 1027"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1526.469732554056,
            "unit": "iter/sec",
            "range": "stddev: 0.00035816362482592857",
            "extra": "mean: 655.1063402526964 usec\nrounds: 1349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4377571.734456107,
            "unit": "iter/sec",
            "range": "stddev: 4.991985077851108e-7",
            "extra": "mean: 228.43714750093358 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 75.80473434221037,
            "unit": "iter/sec",
            "range": "stddev: 0.00158659180106322",
            "extra": "mean: 13.191788200003884 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 69.69423498035565,
            "unit": "iter/sec",
            "range": "stddev: 0.0024113433065076476",
            "extra": "mean: 14.348389078119084 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 22.17538522735823,
            "unit": "iter/sec",
            "range": "stddev: 0.0026945516360812618",
            "extra": "mean: 45.095045238099374 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 72.5009051475534,
            "unit": "iter/sec",
            "range": "stddev: 0.0018477483010845676",
            "extra": "mean: 13.792931246372802 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1261.4209544334944,
            "unit": "iter/sec",
            "range": "stddev: 0.000238234399454676",
            "extra": "mean: 792.7567688528696 usec\nrounds: 1021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1468.0562487098782,
            "unit": "iter/sec",
            "range": "stddev: 0.000272121115635028",
            "extra": "mean: 681.1728098829972 usec\nrounds: 1194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1470.2514754599965,
            "unit": "iter/sec",
            "range": "stddev: 0.0002636148903555268",
            "extra": "mean: 680.1557534143135 usec\nrounds: 1464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09619214307627351,
            "unit": "iter/sec",
            "range": "stddev: 0.088191550391193",
            "extra": "mean: 10.395859454000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.58139052855138,
            "unit": "iter/sec",
            "range": "stddev: 0.0015405536242031515",
            "extra": "mean: 11.549826052634677 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 94.78429821598124,
            "unit": "iter/sec",
            "range": "stddev: 0.0012979280933549432",
            "extra": "mean: 10.550270654759077 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.460599617927205,
            "unit": "iter/sec",
            "range": "stddev: 0.0025056527837164985",
            "extra": "mean: 54.16942139999037 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10054.43904276306,
            "unit": "iter/sec",
            "range": "stddev: 0.00013436620350612525",
            "extra": "mean: 99.45855713549484 usec\nrounds: 5907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 127.49922039409844,
            "unit": "iter/sec",
            "range": "stddev: 0.004976130170537513",
            "extra": "mean: 7.843185212497873 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 75.4068470866664,
            "unit": "iter/sec",
            "range": "stddev: 0.0009653435266366264",
            "extra": "mean: 13.261395199970138 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.237585312162366,
            "unit": "iter/sec",
            "range": "stddev: 0.0021887736917468",
            "extra": "mean: 20.73072259999435 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1462.4123231315964,
            "unit": "iter/sec",
            "range": "stddev: 0.00027806578110921033",
            "extra": "mean: 683.8016776681758 usec\nrounds: 1030"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 187.85586998555343,
            "unit": "iter/sec",
            "range": "stddev: 0.0008426411801664062",
            "extra": "mean: 5.323229985184399 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5137054.731536564,
            "unit": "iter/sec",
            "range": "stddev: 7.015944421528784e-7",
            "extra": "mean: 194.66407353242528 nsec\nrounds: 37454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.041500534095727,
            "unit": "iter/sec",
            "range": "stddev: 0.021447026161525592",
            "extra": "mean: 960.1531322000142 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 190.49923808904666,
            "unit": "iter/sec",
            "range": "stddev: 0.0009041773351427426",
            "extra": "mean: 5.24936482702656 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 73.55509734891311,
            "unit": "iter/sec",
            "range": "stddev: 0.001912876348088785",
            "extra": "mean: 13.59525085333568 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 73.76822133836501,
            "unit": "iter/sec",
            "range": "stddev: 0.001799937073972876",
            "extra": "mean: 13.555972773331936 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3295998.4112006547,
            "unit": "iter/sec",
            "range": "stddev: 6.414087339349405e-7",
            "extra": "mean: 303.3982045021038 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.034475940868685,
            "unit": "iter/sec",
            "range": "stddev: 0.003965939189036907",
            "extra": "mean: 33.29507070370668 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 58.198410242262035,
            "unit": "iter/sec",
            "range": "stddev: 0.03244208955464358",
            "extra": "mean: 17.182599934213123 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 66.4769264657085,
            "unit": "iter/sec",
            "range": "stddev: 0.0024346869910700205",
            "extra": "mean: 15.042813396552573 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5713.077140724447,
            "unit": "iter/sec",
            "range": "stddev: 0.00014243279588602395",
            "extra": "mean: 175.03702039514118 usec\nrounds: 3138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.51978216128417,
            "unit": "iter/sec",
            "range": "stddev: 0.0013127480217226951",
            "extra": "mean: 13.068516032785551 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 140.52691320519688,
            "unit": "iter/sec",
            "range": "stddev: 0.000860663622749662",
            "extra": "mean: 7.116074616538425 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 93.89429748992715,
            "unit": "iter/sec",
            "range": "stddev: 0.0010552528750915986",
            "extra": "mean: 10.650274050000519 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.47997753288910117,
            "unit": "iter/sec",
            "range": "stddev: 0.02381135682153727",
            "extra": "mean: 2.0834308513999757 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 83.6125404790869,
            "unit": "iter/sec",
            "range": "stddev: 0.0009926706931624072",
            "extra": "mean: 11.959928430234926 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 69.73098552823943,
            "unit": "iter/sec",
            "range": "stddev: 0.001836845506300982",
            "extra": "mean: 14.34082700000021 msec\nrounds: 66"
          }
        ]
      }
    ]
  }
}