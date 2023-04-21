window.BENCHMARK_DATA = {
  "lastUpdate": 1682079555472,
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
      }
    ]
  }
}