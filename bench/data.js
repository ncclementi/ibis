window.BENCHMARK_DATA = {
  "lastUpdate": 1682080255232,
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
          "id": "fd081a0169ed7a0755008dc0ac43ea40ec18cbbb",
          "message": "chore(deps): clean up the nix setup a bit",
          "timestamp": "2023-04-21T08:14:02-04:00",
          "tree_id": "6bd7f3a6338474586f1347a3ed3f5b9d3550fc03",
          "url": "https://github.com/ibis-project/ibis/commit/fd081a0169ed7a0755008dc0ac43ea40ec18cbbb"
        },
        "date": 1682079468401,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.628538798526062,
            "unit": "iter/sec",
            "range": "stddev: 0.00031542935448675683",
            "extra": "mean: 85.99532730000021 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11654.581018803696,
            "unit": "iter/sec",
            "range": "stddev: 0.000029936432397454897",
            "extra": "mean: 85.80317030587229 usec\nrounds: 458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 201.1371215017047,
            "unit": "iter/sec",
            "range": "stddev: 0.000020967618114936647",
            "extra": "mean: 4.9717326793479275 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.25739188755894,
            "unit": "iter/sec",
            "range": "stddev: 0.00028913715377154955",
            "extra": "mean: 17.165203720929934 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6708613691464949,
            "unit": "iter/sec",
            "range": "stddev: 0.0013027802500076686",
            "extra": "mean: 598.4936981999994 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2401.317544768429,
            "unit": "iter/sec",
            "range": "stddev: 0.00008819888094683719",
            "extra": "mean: 416.43805175980384 usec\nrounds: 483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1596784.392445635,
            "unit": "iter/sec",
            "range": "stddev: 8.531390981454653e-8",
            "extra": "mean: 626.2586262309339 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9418894875789671,
            "unit": "iter/sec",
            "range": "stddev: 0.004131057217199326",
            "extra": "mean: 1.0616956799999968 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.11651920566082,
            "unit": "iter/sec",
            "range": "stddev: 0.00010550306445346124",
            "extra": "mean: 13.137752624999562 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 259.09525805576635,
            "unit": "iter/sec",
            "range": "stddev: 0.00018548024808431743",
            "extra": "mean: 3.859584337837495 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 265.8430579344174,
            "unit": "iter/sec",
            "range": "stddev: 0.00030804151740467076",
            "extra": "mean: 3.761617880000074 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.2104798894105,
            "unit": "iter/sec",
            "range": "stddev: 0.00004296750590366446",
            "extra": "mean: 1.459405583174085 msec\nrounds: 523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141140.77928252466,
            "unit": "iter/sec",
            "range": "stddev: 3.725800030065481e-7",
            "extra": "mean: 7.085124547869171 usec\nrounds: 32895"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1764.107954522265,
            "unit": "iter/sec",
            "range": "stddev: 0.000014721465225236175",
            "extra": "mean: 566.8587330137675 usec\nrounds: 1251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.66124896614846,
            "unit": "iter/sec",
            "range": "stddev: 0.00016635186579939213",
            "extra": "mean: 20.550232911112847 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.28222845395679,
            "unit": "iter/sec",
            "range": "stddev: 0.0008115697837657935",
            "extra": "mean: 9.971856583334068 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68032.55044897705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010322977770531663",
            "extra": "mean: 14.69884626403913 usec\nrounds: 13263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.194273595527534,
            "unit": "iter/sec",
            "range": "stddev: 0.000800942903951479",
            "extra": "mean: 23.151216972972616 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 94.34145374798405,
            "unit": "iter/sec",
            "range": "stddev: 0.01172583525637783",
            "extra": "mean: 10.599794260869853 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.2621096097556,
            "unit": "iter/sec",
            "range": "stddev: 0.000030017598666320155",
            "extra": "mean: 7.338797284615103 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2397.2223679645267,
            "unit": "iter/sec",
            "range": "stddev: 0.00007549867176189677",
            "extra": "mean: 417.1494532019975 usec\nrounds: 1421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 115.4378518968156,
            "unit": "iter/sec",
            "range": "stddev: 0.00018687916358892519",
            "extra": "mean: 8.662669857144019 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9941.35828031547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020447654848524396",
            "extra": "mean: 100.58987633310274 usec\nrounds: 4876"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.88213994317877,
            "unit": "iter/sec",
            "range": "stddev: 0.000054902108562108295",
            "extra": "mean: 6.25460730232529 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7348801544686585,
            "unit": "iter/sec",
            "range": "stddev: 0.0012327867101731204",
            "extra": "mean: 1.3607660975999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1194.2560238073313,
            "unit": "iter/sec",
            "range": "stddev: 0.000018187050233777838",
            "extra": "mean: 837.3413908451255 usec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 106.61474878857975,
            "unit": "iter/sec",
            "range": "stddev: 0.00007186200354777057",
            "extra": "mean: 9.379565316830883 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.74544075267474,
            "unit": "iter/sec",
            "range": "stddev: 0.0005517446195612045",
            "extra": "mean: 10.554597583332992 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5906206.625125682,
            "unit": "iter/sec",
            "range": "stddev: 1.0880496939633563e-8",
            "extra": "mean: 169.31341273193763 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12580467.88420272,
            "unit": "iter/sec",
            "range": "stddev: 4.235611026214536e-9",
            "extra": "mean: 79.48829957706897 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.40726262001705,
            "unit": "iter/sec",
            "range": "stddev: 0.0006629769644944633",
            "extra": "mean: 10.481382365855591 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 239.06615015457865,
            "unit": "iter/sec",
            "range": "stddev: 0.004266415379039392",
            "extra": "mean: 4.182942668183706 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 86.64976532609522,
            "unit": "iter/sec",
            "range": "stddev: 0.014347705181406304",
            "extra": "mean: 11.540712155845188 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2367.319259581662,
            "unit": "iter/sec",
            "range": "stddev: 0.00009978826019891874",
            "extra": "mean: 422.41873205421126 usec\nrounds: 1616"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.22934322613837,
            "unit": "iter/sec",
            "range": "stddev: 0.0007106169657377269",
            "extra": "mean: 10.28496096774176 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4656.808499142683,
            "unit": "iter/sec",
            "range": "stddev: 0.00004513529459707752",
            "extra": "mean: 214.73934351908602 usec\nrounds: 1080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 486546.21245340776,
            "unit": "iter/sec",
            "range": "stddev: 4.5738576161926533e-7",
            "extra": "mean: 2.0553032258898964 usec\nrounds: 2015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 269.7538696258552,
            "unit": "iter/sec",
            "range": "stddev: 0.0002601320565462614",
            "extra": "mean: 3.707083058296757 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.15735937663194,
            "unit": "iter/sec",
            "range": "stddev: 0.0008178657151784696",
            "extra": "mean: 10.50890868085157 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 78.83673569424674,
            "unit": "iter/sec",
            "range": "stddev: 0.019298570033646174",
            "extra": "mean: 12.684441982457386 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.80764826977757,
            "unit": "iter/sec",
            "range": "stddev: 0.00008986252462329189",
            "extra": "mean: 8.488413228570835 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6447659.133725248,
            "unit": "iter/sec",
            "range": "stddev: 1.004099963325993e-8",
            "extra": "mean: 155.0950475606536 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.793366385528077,
            "unit": "iter/sec",
            "range": "stddev: 0.003200552452450715",
            "extra": "mean: 1.260451688200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.36812207201433,
            "unit": "iter/sec",
            "range": "stddev: 0.000057467286341623986",
            "extra": "mean: 6.121145222929047 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.04146665853403,
            "unit": "iter/sec",
            "range": "stddev: 0.00011109474366667497",
            "extra": "mean: 18.168120522728707 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.68165021611173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000884147191140043",
            "extra": "mean: 10.133596244185327 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.185518641264633,
            "unit": "iter/sec",
            "range": "stddev: 0.00014183405154081046",
            "extra": "mean: 61.783624124995384 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 378.643955744063,
            "unit": "iter/sec",
            "range": "stddev: 0.00003554998177105806",
            "extra": "mean: 2.641003467320446 msec\nrounds: 306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.6999209299721,
            "unit": "iter/sec",
            "range": "stddev: 0.000778774093207975",
            "extra": "mean: 9.930494391305547 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.11005479020982,
            "unit": "iter/sec",
            "range": "stddev: 0.0008280978237592681",
            "extra": "mean: 9.989006619720621 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 748.7946326022482,
            "unit": "iter/sec",
            "range": "stddev: 0.000012733818804181894",
            "extra": "mean: 1.3354796581871193 msec\nrounds: 629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 275.30897218559636,
            "unit": "iter/sec",
            "range": "stddev: 0.0002877514640546742",
            "extra": "mean: 3.6322826388885776 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2531073.1179415877,
            "unit": "iter/sec",
            "range": "stddev: 1.7967713163671945e-8",
            "extra": "mean: 395.08933697396395 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.36435861159227,
            "unit": "iter/sec",
            "range": "stddev: 0.000735884295287335",
            "extra": "mean: 10.166283947915153 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.882908662645424,
            "unit": "iter/sec",
            "range": "stddev: 0.00042119306403406217",
            "extra": "mean: 169.9839411666678 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 84.21964167405005,
            "unit": "iter/sec",
            "range": "stddev: 0.013343362756401092",
            "extra": "mean: 11.873714731181556 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2519800.2025314597,
            "unit": "iter/sec",
            "range": "stddev: 1.7605281931109287e-8",
            "extra": "mean: 396.85686150646285 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 268.3828887457505,
            "unit": "iter/sec",
            "range": "stddev: 0.0003412284448133309",
            "extra": "mean: 3.72601995855011 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2304.031707269622,
            "unit": "iter/sec",
            "range": "stddev: 0.00008363341045682825",
            "extra": "mean: 434.0218048409775 usec\nrounds: 1322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 540.0625986032921,
            "unit": "iter/sec",
            "range": "stddev: 0.00003992340693245446",
            "extra": "mean: 1.851637203883765 msec\nrounds: 412"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2580907.284239604,
            "unit": "iter/sec",
            "range": "stddev: 1.72133412034239e-8",
            "extra": "mean: 387.4606445982813 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.29888144134605,
            "unit": "iter/sec",
            "range": "stddev: 0.0008613343013889631",
            "extra": "mean: 10.493302595744249 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.72261639711428,
            "unit": "iter/sec",
            "range": "stddev: 0.0023343876865817834",
            "extra": "mean: 15.94321247169797 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7320883.405355855,
            "unit": "iter/sec",
            "range": "stddev: 4.78614597117283e-9",
            "extra": "mean: 136.5955369905821 nsec\nrounds: 64517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8053.961452446055,
            "unit": "iter/sec",
            "range": "stddev: 0.000030573869253608445",
            "extra": "mean: 124.16250138573629 usec\nrounds: 3608"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 259.4912486558418,
            "unit": "iter/sec",
            "range": "stddev: 0.00027171525551422123",
            "extra": "mean: 3.853694508697211 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 86.41755789078165,
            "unit": "iter/sec",
            "range": "stddev: 0.014961623841892202",
            "extra": "mean: 11.571722511111048 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2210.1912204309447,
            "unit": "iter/sec",
            "range": "stddev: 0.00010502716709858635",
            "extra": "mean: 452.4495395493514 usec\nrounds: 1909"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 710008.4913227813,
            "unit": "iter/sec",
            "range": "stddev: 9.345896287102406e-7",
            "extra": "mean: 1.408433859906309 usec\nrounds: 23420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.45249503947319,
            "unit": "iter/sec",
            "range": "stddev: 0.0006544401158710189",
            "extra": "mean: 11.434779528573001 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 95.90019693356145,
            "unit": "iter/sec",
            "range": "stddev: 0.0006658495606605874",
            "extra": "mean: 10.427507262501123 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2355.962231056438,
            "unit": "iter/sec",
            "range": "stddev: 0.00007945787381124098",
            "extra": "mean: 424.4550217392872 usec\nrounds: 1886"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17948655527343993,
            "unit": "iter/sec",
            "range": "stddev: 0.1085544892877511",
            "extra": "mean: 5.571447947599995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13650.493992040349,
            "unit": "iter/sec",
            "range": "stddev: 0.000001478583294840049",
            "extra": "mean: 73.25742208180183 usec\nrounds: 6494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.40952248240388,
            "unit": "iter/sec",
            "range": "stddev: 0.0006012420738918233",
            "extra": "mean: 21.54730207317149 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 315.11807199672415,
            "unit": "iter/sec",
            "range": "stddev: 0.00004155816582455004",
            "extra": "mean: 3.1734136784462033 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 177.57857687697123,
            "unit": "iter/sec",
            "range": "stddev: 0.0038210314880404135",
            "extra": "mean: 5.631309911289655 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 274.50833460815045,
            "unit": "iter/sec",
            "range": "stddev: 0.0002369990969669552",
            "extra": "mean: 3.6428766413502878 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2444.3736861192706,
            "unit": "iter/sec",
            "range": "stddev: 0.00007886726345666161",
            "extra": "mean: 409.1027512195228 usec\nrounds: 1640"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.23890763557876,
            "unit": "iter/sec",
            "range": "stddev: 0.00008300378979238643",
            "extra": "mean: 8.989660373832717 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 269.4776674391682,
            "unit": "iter/sec",
            "range": "stddev: 0.00024031032878635698",
            "extra": "mean: 3.710882647541617 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.25050981569488,
            "unit": "iter/sec",
            "range": "stddev: 0.026685435333334822",
            "extra": "mean: 26.845270170736473 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.99068090231474,
            "unit": "iter/sec",
            "range": "stddev: 0.000766111334396721",
            "extra": "mean: 10.52734847777717 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.517820183298073,
            "unit": "iter/sec",
            "range": "stddev: 0.00113774513201461",
            "extra": "mean: 397.16895060000184 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2279.498267212016,
            "unit": "iter/sec",
            "range": "stddev: 0.00008534220511202231",
            "extra": "mean: 438.6930292441368 usec\nrounds: 1402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9321383739214721,
            "unit": "iter/sec",
            "range": "stddev: 0.003891950273711701",
            "extra": "mean: 1.0728020946000072 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.93521501429674,
            "unit": "iter/sec",
            "range": "stddev: 0.00003745913418305837",
            "extra": "mean: 6.331710124999527 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.198772146998753,
            "unit": "iter/sec",
            "range": "stddev: 0.00045238502754859483",
            "extra": "mean: 36.76636557692348 msec\nrounds: 26"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "dc0289c3e96291a95f9a7016538db29311028224",
          "message": "docs: fill out more docstrings",
          "timestamp": "2023-04-21T14:18:49+02:00",
          "tree_id": "cca691b6d746e4e8ac8c152598fb45fd27a0d58d",
          "url": "https://github.com/ibis-project/ibis/commit/dc0289c3e96291a95f9a7016538db29311028224"
        },
        "date": 1682080175456,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.4160848445217,
            "unit": "iter/sec",
            "range": "stddev: 0.00004213751940198439",
            "extra": "mean: 1.847008295453892 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.45624032360428,
            "unit": "iter/sec",
            "range": "stddev: 0.00007118100537083338",
            "extra": "mean: 8.892347788992396 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 287.3895087781057,
            "unit": "iter/sec",
            "range": "stddev: 0.00024078460784553027",
            "extra": "mean: 3.4795981393047404 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.67361082881905,
            "unit": "iter/sec",
            "range": "stddev: 0.0006262794696495381",
            "extra": "mean: 9.739600973683824 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.72163185859013,
            "unit": "iter/sec",
            "range": "stddev: 0.00026187755871991066",
            "extra": "mean: 9.197801604934149 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2255.758133002171,
            "unit": "iter/sec",
            "range": "stddev: 0.00008151253763785602",
            "extra": "mean: 443.30993884929853 usec\nrounds: 556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 92.71496681977601,
            "unit": "iter/sec",
            "range": "stddev: 0.009492637242994692",
            "extra": "mean: 10.78574510999772 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.70437570241907,
            "unit": "iter/sec",
            "range": "stddev: 0.00021176051225211114",
            "extra": "mean: 6.261569199978112 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1774102.3483527051,
            "unit": "iter/sec",
            "range": "stddev: 9.151569127210137e-8",
            "extra": "mean: 563.6653380953602 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 105.5890829721373,
            "unit": "iter/sec",
            "range": "stddev: 0.00024152927127660717",
            "extra": "mean: 9.470676057143885 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6164219.1159288995,
            "unit": "iter/sec",
            "range": "stddev: 1.0728767607217619e-8",
            "extra": "mean: 162.22654989901628 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.82584799296805,
            "unit": "iter/sec",
            "range": "stddev: 0.010651797128511947",
            "extra": "mean: 11.132653043011453 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 102.1558895345537,
            "unit": "iter/sec",
            "range": "stddev: 0.0006895403976983637",
            "extra": "mean: 9.78896081817931 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.755306479476815,
            "unit": "iter/sec",
            "range": "stddev: 0.000742437209213377",
            "extra": "mean: 22.854370828576975 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10578.134553567203,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021468685229491043",
            "extra": "mean: 94.5346265861948 usec\nrounds: 4333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17457399032103832,
            "unit": "iter/sec",
            "range": "stddev: 0.11705125031846135",
            "extra": "mean: 5.728230180000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2118.869492267188,
            "unit": "iter/sec",
            "range": "stddev: 0.00008317540044856384",
            "extra": "mean: 471.9497843777065 usec\nrounds: 1229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.7297432816537,
            "unit": "iter/sec",
            "range": "stddev: 0.00015799968642227926",
            "extra": "mean: 9.82996680952348 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.11800779555475,
            "unit": "iter/sec",
            "range": "stddev: 0.0006603528585634278",
            "extra": "mean: 10.296751577782794 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.94940102651086,
            "unit": "iter/sec",
            "range": "stddev: 0.00024402228116530218",
            "extra": "mean: 62.69827928571203 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.43403596232241,
            "unit": "iter/sec",
            "range": "stddev: 0.001103918692717833",
            "extra": "mean: 24.134747600000612 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.43228233914212,
            "unit": "iter/sec",
            "range": "stddev: 0.0007970483975274698",
            "extra": "mean: 9.956957829786006 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148081.2611607938,
            "unit": "iter/sec",
            "range": "stddev: 3.6678582698416236e-7",
            "extra": "mean: 6.7530489149072785 usec\nrounds: 35715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 276.6213792665721,
            "unit": "iter/sec",
            "range": "stddev: 0.00025782745669961234",
            "extra": "mean: 3.615049576613992 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6659567286471852,
            "unit": "iter/sec",
            "range": "stddev: 0.0023131175806529137",
            "extra": "mean: 600.2556865999964 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 283.7090991419094,
            "unit": "iter/sec",
            "range": "stddev: 0.00027848285180017156",
            "extra": "mean: 3.524737144577117 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.96779543634016,
            "unit": "iter/sec",
            "range": "stddev: 0.0009927756507935456",
            "extra": "mean: 16.137414490197656 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2194.3097760587816,
            "unit": "iter/sec",
            "range": "stddev: 0.00009405538965055929",
            "extra": "mean: 455.7241693541139 usec\nrounds: 1240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.58294721947605,
            "unit": "iter/sec",
            "range": "stddev: 0.0005814076491191978",
            "extra": "mean: 17.366252480765247 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11329813.92973351,
            "unit": "iter/sec",
            "range": "stddev: 3.894484368063451e-9",
            "extra": "mean: 88.26270283013902 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 82.3578397828472,
            "unit": "iter/sec",
            "range": "stddev: 0.015325547084578672",
            "extra": "mean: 12.142134891307235 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9367803681315398,
            "unit": "iter/sec",
            "range": "stddev: 0.0026648062841900205",
            "extra": "mean: 1.067486076800003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.90078324358172,
            "unit": "iter/sec",
            "range": "stddev: 0.00034276899758054917",
            "extra": "mean: 21.321605543482008 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 311.3017223333323,
            "unit": "iter/sec",
            "range": "stddev: 0.0000394181310407198",
            "extra": "mean: 3.212317594983399 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14044.391410001552,
            "unit": "iter/sec",
            "range": "stddev: 0.000001957952167121458",
            "extra": "mean: 71.20280052063072 usec\nrounds: 6532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.22990613224577,
            "unit": "iter/sec",
            "range": "stddev: 0.0008167836982511936",
            "extra": "mean: 10.391779855066376 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.32951220803177,
            "unit": "iter/sec",
            "range": "stddev: 0.00012249891573659646",
            "extra": "mean: 8.310513203703088 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9455395964455596,
            "unit": "iter/sec",
            "range": "stddev: 0.00434444127428778",
            "extra": "mean: 1.057597168599989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2240.952011576354,
            "unit": "iter/sec",
            "range": "stddev: 0.00008491448107366458",
            "extra": "mean: 446.23891758242945 usec\nrounds: 1274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6692.5003005010585,
            "unit": "iter/sec",
            "range": "stddev: 0.0022862701331812676",
            "extra": "mean: 149.4209869404311 usec\nrounds: 4671"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2221.0344142857994,
            "unit": "iter/sec",
            "range": "stddev: 0.00007898556516802564",
            "extra": "mean: 450.24065974302437 usec\nrounds: 1396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7303905581437864,
            "unit": "iter/sec",
            "range": "stddev: 0.004951393378832476",
            "extra": "mean: 1.3691305136000096 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.509547794768002,
            "unit": "iter/sec",
            "range": "stddev: 0.0004097154489535969",
            "extra": "mean: 86.88438658333553 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1927581.6958221793,
            "unit": "iter/sec",
            "range": "stddev: 2.1325446199871624e-7",
            "extra": "mean: 518.7847561363493 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 674.730763841234,
            "unit": "iter/sec",
            "range": "stddev: 0.00006673842472360496",
            "extra": "mean: 1.4820726333967822 msec\nrounds: 521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4446.382908386386,
            "unit": "iter/sec",
            "range": "stddev: 0.000025927631072667147",
            "extra": "mean: 224.9019080461752 usec\nrounds: 2001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 243.52330666067292,
            "unit": "iter/sec",
            "range": "stddev: 0.0033414618282139237",
            "extra": "mean: 4.1063831372551425 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 166.39076808348338,
            "unit": "iter/sec",
            "range": "stddev: 0.003921149852000393",
            "extra": "mean: 6.009948818183645 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.57086281159786,
            "unit": "iter/sec",
            "range": "stddev: 0.0002507389410853366",
            "extra": "mean: 3.6958894598207843 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72834.95815135154,
            "unit": "iter/sec",
            "range": "stddev: 4.465684020820438e-7",
            "extra": "mean: 13.72967082540218 usec\nrounds: 13947"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.86830007027655,
            "unit": "iter/sec",
            "range": "stddev: 0.000052898449055985445",
            "extra": "mean: 6.102461547298288 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8024892528408384,
            "unit": "iter/sec",
            "range": "stddev: 0.003512529048984783",
            "extra": "mean: 1.2461226071999931 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2140.2124992215445,
            "unit": "iter/sec",
            "range": "stddev: 0.00008489957322232422",
            "extra": "mean: 467.2433229708396 usec\nrounds: 1158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.29704159790681,
            "unit": "iter/sec",
            "range": "stddev: 0.0007687800603720041",
            "extra": "mean: 9.871956616161077 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.64960065730804,
            "unit": "iter/sec",
            "range": "stddev: 0.0003377427014552035",
            "extra": "mean: 3.68121284765488 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2151.8616621848005,
            "unit": "iter/sec",
            "range": "stddev: 0.00008560080586323172",
            "extra": "mean: 464.7138882453498 usec\nrounds: 1378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.05855483109946,
            "unit": "iter/sec",
            "range": "stddev: 0.000644280300518899",
            "extra": "mean: 10.303058826088975 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1158.0308467793627,
            "unit": "iter/sec",
            "range": "stddev: 0.000077248487971952",
            "extra": "mean: 863.5348555534014 usec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.87937903313018,
            "unit": "iter/sec",
            "range": "stddev: 0.0006043580558989392",
            "extra": "mean: 11.12602257333568 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.717038160815463,
            "unit": "iter/sec",
            "range": "stddev: 0.0005481160403671057",
            "extra": "mean: 37.429298636352954 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1933978.8295841082,
            "unit": "iter/sec",
            "range": "stddev: 9.27462260849773e-8",
            "extra": "mean: 517.0687417581736 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.053502881132,
            "unit": "iter/sec",
            "range": "stddev: 0.0008432987433864474",
            "extra": "mean: 9.994652572914356 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 233.5423442482506,
            "unit": "iter/sec",
            "range": "stddev: 0.012679389919271663",
            "extra": "mean: 4.281878745453634 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 99.03318951183469,
            "unit": "iter/sec",
            "range": "stddev: 0.0006435308529332551",
            "extra": "mean: 10.09762489655549 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.83677074175058,
            "unit": "iter/sec",
            "range": "stddev: 0.00012395519077624943",
            "extra": "mean: 9.819635802630811 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.96614656896621,
            "unit": "iter/sec",
            "range": "stddev: 0.00012544480102879402",
            "extra": "mean: 167.61237566667356 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.46299384896324,
            "unit": "iter/sec",
            "range": "stddev: 0.00006775997231345714",
            "extra": "mean: 13.078221890909639 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.18293293360034,
            "unit": "iter/sec",
            "range": "stddev: 0.0008766365450150964",
            "extra": "mean: 10.61763494565419 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.41460305530384,
            "unit": "iter/sec",
            "range": "stddev: 0.0002979202527320401",
            "extra": "mean: 19.07865254545336 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 301.59241100744583,
            "unit": "iter/sec",
            "range": "stddev: 0.00004060471377545033",
            "extra": "mean: 3.3157332993213533 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5535186.463870527,
            "unit": "iter/sec",
            "range": "stddev: 9.29479796168696e-9",
            "extra": "mean: 180.6623871711265 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.03579819460884,
            "unit": "iter/sec",
            "range": "stddev: 0.000057972583977647245",
            "extra": "mean: 6.096230280256385 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.887800575108976,
            "unit": "iter/sec",
            "range": "stddev: 0.032029967674596996",
            "extra": "mean: 27.864622071422758 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2193.7295635876762,
            "unit": "iter/sec",
            "range": "stddev: 0.00008279765135245381",
            "extra": "mean: 455.8447023727833 usec\nrounds: 1307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.2413668857772,
            "unit": "iter/sec",
            "range": "stddev: 0.00031621879013432835",
            "extra": "mean: 3.6331748069504077 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.90360008494181,
            "unit": "iter/sec",
            "range": "stddev: 0.0000291728244943666",
            "extra": "mean: 5.0529651788587575 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.49671597091256,
            "unit": "iter/sec",
            "range": "stddev: 0.00003828818224453628",
            "extra": "mean: 7.604752655733263 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.68257789387718,
            "unit": "iter/sec",
            "range": "stddev: 0.00043215218510703413",
            "extra": "mean: 3.973258730771795 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 761035.8478723075,
            "unit": "iter/sec",
            "range": "stddev: 1.1617224299210533e-7",
            "extra": "mean: 1.3139985492086672 usec\nrounds: 26881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1778.148579627068,
            "unit": "iter/sec",
            "range": "stddev: 0.000016911522336994246",
            "extra": "mean: 562.3827004432501 usec\nrounds: 1352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 465646.291364354,
            "unit": "iter/sec",
            "range": "stddev: 1.9581760557814492e-7",
            "extra": "mean: 2.147552806809602 usec\nrounds: 2102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1955998.3119190475,
            "unit": "iter/sec",
            "range": "stddev: 9.736926938737078e-8",
            "extra": "mean: 511.2478849835463 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 85.10873475884362,
            "unit": "iter/sec",
            "range": "stddev: 0.01763379106380793",
            "extra": "mean: 11.74967531632927 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7111588.060161272,
            "unit": "iter/sec",
            "range": "stddev: 3.4847779809080236e-9",
            "extra": "mean: 140.61556877878797 nsec\nrounds: 70423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12201.990019790122,
            "unit": "iter/sec",
            "range": "stddev: 0.000048709469060242034",
            "extra": "mean: 81.9538451005224 usec\nrounds: 4164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 766.7459843756133,
            "unit": "iter/sec",
            "range": "stddev: 0.000018732559538867123",
            "extra": "mean: 1.3042128949841627 msec\nrounds: 638"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6336025424150606,
            "unit": "iter/sec",
            "range": "stddev: 0.002430934408850296",
            "extra": "mean: 379.7080173999916 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.04744949389107,
            "unit": "iter/sec",
            "range": "stddev: 0.0007064116989842395",
            "extra": "mean: 10.304237826084732 msec\nrounds: 92"
          }
        ]
      }
    ]
  }
}