window.BENCHMARK_DATA = {
  "lastUpdate": 1676161645167,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "fb39cb61284e82c8d4d25b21c10c4e5a92680ded",
          "message": "chore(flake/nixpkgs): `3441ad51` -> `f8e87567`",
          "timestamp": "2023-02-12T00:20:50Z",
          "tree_id": "4be64e046b14e18370ef493988f61ec081217c5e",
          "url": "https://github.com/ibis-project/ibis/commit/fb39cb61284e82c8d4d25b21c10c4e5a92680ded"
        },
        "date": 1676161569437,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1677472.5358627222,
            "unit": "iter/sec",
            "range": "stddev: 1.2951209873622168e-7",
            "extra": "mean: 596.1349462485841 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.00328174525904,
            "unit": "iter/sec",
            "range": "stddev: 0.01616853040916385",
            "extra": "mean: 30.300017062504736 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4671296.940175329,
            "unit": "iter/sec",
            "range": "stddev: 1.5374155846756086e-8",
            "extra": "mean: 214.07331043371616 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.81516019356002,
            "unit": "iter/sec",
            "range": "stddev: 0.00032159855974677143",
            "extra": "mean: 19.29937100000103 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.67496345004564,
            "unit": "iter/sec",
            "range": "stddev: 0.00009873153786490039",
            "extra": "mean: 11.537357042859803 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 152.3050379292757,
            "unit": "iter/sec",
            "range": "stddev: 0.000697323057609632",
            "extra": "mean: 6.565770992187137 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 127.25732981637992,
            "unit": "iter/sec",
            "range": "stddev: 0.008726037071869601",
            "extra": "mean: 7.858093529409298 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1449492.5443847778,
            "unit": "iter/sec",
            "range": "stddev: 1.231392374831804e-7",
            "extra": "mean: 689.8966151112144 nsec\nrounds: 172385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 263.37292844176636,
            "unit": "iter/sec",
            "range": "stddev: 0.000028001096634679962",
            "extra": "mean: 3.7968974484828544 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 153.74918578311588,
            "unit": "iter/sec",
            "range": "stddev: 0.0007317971314448255",
            "extra": "mean: 6.504099484537343 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 407.68152510448493,
            "unit": "iter/sec",
            "range": "stddev: 0.000054619374902757",
            "extra": "mean: 2.452895062496907 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4437.151912038572,
            "unit": "iter/sec",
            "range": "stddev: 0.00004890565631956529",
            "extra": "mean: 225.36979121378954 usec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 586498.5917374043,
            "unit": "iter/sec",
            "range": "stddev: 0.000003024809524524791",
            "extra": "mean: 1.7050339320298562 usec\nrounds: 20040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 135.49901510969374,
            "unit": "iter/sec",
            "range": "stddev: 0.008687815797709846",
            "extra": "mean: 7.380127443660356 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4527.812541308409,
            "unit": "iter/sec",
            "range": "stddev: 0.00004337302871867555",
            "extra": "mean: 220.85720000038438 usec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.77986297190766,
            "unit": "iter/sec",
            "range": "stddev: 0.0006339651812218963",
            "extra": "mean: 17.61187765625216 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58275.098224450834,
            "unit": "iter/sec",
            "range": "stddev: 5.764003815696125e-7",
            "extra": "mean: 17.159988236286218 usec\nrounds: 11136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.2751573716048,
            "unit": "iter/sec",
            "range": "stddev: 0.00013523368790227162",
            "extra": "mean: 9.972559766664329 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2519104832470656,
            "unit": "iter/sec",
            "range": "stddev: 0.0018961223140212028",
            "extra": "mean: 444.0673852000032 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 232.64482158043188,
            "unit": "iter/sec",
            "range": "stddev: 0.0002250777199500805",
            "extra": "mean: 4.298397846153097 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.84716576791809,
            "unit": "iter/sec",
            "range": "stddev: 0.0003262838319591295",
            "extra": "mean: 25.74190369444788 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 604.0928208911293,
            "unit": "iter/sec",
            "range": "stddev: 0.00006691607389891117",
            "extra": "mean: 1.6553747460942292 msec\nrounds: 512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.885338923506907,
            "unit": "iter/sec",
            "range": "stddev: 0.0008834540470663402",
            "extra": "mean: 112.54494719997865 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.739610082952067,
            "unit": "iter/sec",
            "range": "stddev: 0.006708000177551229",
            "extra": "mean: 210.98782020000044 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.18047533843745,
            "unit": "iter/sec",
            "range": "stddev: 0.00009712827634618062",
            "extra": "mean: 14.885277232146166 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5350.494848931145,
            "unit": "iter/sec",
            "range": "stddev: 0.00005145537648216607",
            "extra": "mean: 186.8986006406057 usec\nrounds: 313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 212.39266675851238,
            "unit": "iter/sec",
            "range": "stddev: 0.00048743402588210296",
            "extra": "mean: 4.708260484044803 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 243.2359608842336,
            "unit": "iter/sec",
            "range": "stddev: 0.00027386994326774315",
            "extra": "mean: 4.111234195653918 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19025.940704042685,
            "unit": "iter/sec",
            "range": "stddev: 0.00001745876784363331",
            "extra": "mean: 52.559819015283544 usec\nrounds: 4691"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.209217064079272,
            "unit": "iter/sec",
            "range": "stddev: 0.0008448487226803572",
            "extra": "mean: 75.7047139999969 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5627962939679898,
            "unit": "iter/sec",
            "range": "stddev: 0.0018757051174640117",
            "extra": "mean: 639.8786610000002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.64753964159793,
            "unit": "iter/sec",
            "range": "stddev: 0.0007068555660021402",
            "extra": "mean: 11.409333383334305 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 241.3541869660441,
            "unit": "iter/sec",
            "range": "stddev: 0.0002395860795881348",
            "extra": "mean: 4.143288386957584 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.97630311811521,
            "unit": "iter/sec",
            "range": "stddev: 0.0008375454671497905",
            "extra": "mean: 11.238947505747786 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5171.19840044419,
            "unit": "iter/sec",
            "range": "stddev: 0.000051481319384604285",
            "extra": "mean: 193.37877268721752 usec\nrounds: 3427"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.00175106793064,
            "unit": "iter/sec",
            "range": "stddev: 0.0008793586542608367",
            "extra": "mean: 11.764463525002355 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 229.49727199458545,
            "unit": "iter/sec",
            "range": "stddev: 0.000370732124117946",
            "extra": "mean: 4.357350269608403 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 253.04837945698296,
            "unit": "iter/sec",
            "range": "stddev: 0.00019977174527080526",
            "extra": "mean: 3.951813491735857 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3695.7506829066883,
            "unit": "iter/sec",
            "range": "stddev: 0.00002521072397611029",
            "extra": "mean: 270.58102285555293 usec\nrounds: 1225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.404280141663186,
            "unit": "iter/sec",
            "range": "stddev: 0.0010975913913929291",
            "extra": "mean: 26.038764333331226 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4711.479492632297,
            "unit": "iter/sec",
            "range": "stddev: 0.000051444067163473436",
            "extra": "mean: 212.24755441762548 usec\nrounds: 1856"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.626898615499407,
            "unit": "iter/sec",
            "range": "stddev: 0.035169403591754876",
            "extra": "mean: 36.196607296302666 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 235.841722122704,
            "unit": "iter/sec",
            "range": "stddev: 0.0003185465478641094",
            "extra": "mean: 4.2401318604675 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 966.6130961327783,
            "unit": "iter/sec",
            "range": "stddev: 0.000011346091117838385",
            "extra": "mean: 1.034540090549979 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9789.13907194,
            "unit": "iter/sec",
            "range": "stddev: 0.000014590296367864002",
            "extra": "mean: 102.15402934323835 usec\nrounds: 3476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 516.8656282837857,
            "unit": "iter/sec",
            "range": "stddev: 0.000034195102931005936",
            "extra": "mean: 1.9347388281949154 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7410953031313021,
            "unit": "iter/sec",
            "range": "stddev: 0.0021240058406025567",
            "extra": "mean: 1.3493541192000067 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.39806755437277,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068387451453656",
            "extra": "mean: 12.594764971013781 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 354976.28188774356,
            "unit": "iter/sec",
            "range": "stddev: 3.3629794938183884e-7",
            "extra": "mean: 2.81708962267016 usec\nrounds: 1908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 136.542729503338,
            "unit": "iter/sec",
            "range": "stddev: 0.0001749900264694817",
            "extra": "mean: 7.323714734848285 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.606445985583477,
            "unit": "iter/sec",
            "range": "stddev: 0.0006238889656990223",
            "extra": "mean: 42.361310999999866 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5335.739843401241,
            "unit": "iter/sec",
            "range": "stddev: 0.000051905446103066825",
            "extra": "mean: 187.41543428821953 usec\nrounds: 2024"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 126693.5692319266,
            "unit": "iter/sec",
            "range": "stddev: 3.151725945331105e-7",
            "extra": "mean: 7.893060445470515 usec\nrounds: 36231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8581463854910647,
            "unit": "iter/sec",
            "range": "stddev: 0.004334555508025924",
            "extra": "mean: 1.1653023503999975 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5577774415420991,
            "unit": "iter/sec",
            "range": "stddev: 0.09533055701443799",
            "extra": "mean: 1.7928297659999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 146.0604189440161,
            "unit": "iter/sec",
            "range": "stddev: 0.00007856288434242561",
            "extra": "mean: 6.846481799996019 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4315497.11204391,
            "unit": "iter/sec",
            "range": "stddev: 1.1543248021290506e-8",
            "extra": "mean: 231.72301453054587 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.0276159941261,
            "unit": "iter/sec",
            "range": "stddev: 0.00024481483473824174",
            "extra": "mean: 12.341471333335202 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.7582412522849,
            "unit": "iter/sec",
            "range": "stddev: 0.00020249749479278186",
            "extra": "mean: 10.780713244445728 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 267.6718032546838,
            "unit": "iter/sec",
            "range": "stddev: 0.00003978270044263037",
            "extra": "mean: 3.7359183441840607 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5422434.260423393,
            "unit": "iter/sec",
            "range": "stddev: 5.146567059355991e-9",
            "extra": "mean: 184.4190177276457 nsec\nrounds: 52908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 153.4352589753888,
            "unit": "iter/sec",
            "range": "stddev: 0.0008327997963534385",
            "extra": "mean: 6.517406798657675 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 240.1782119848353,
            "unit": "iter/sec",
            "range": "stddev: 0.0001219333650719218",
            "extra": "mean: 4.163575004310297 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1443.188548982289,
            "unit": "iter/sec",
            "range": "stddev: 0.000014172633052244542",
            "extra": "mean: 692.9101541896118 usec\nrounds: 1122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.56280007701541,
            "unit": "iter/sec",
            "range": "stddev: 0.0008289449739848116",
            "extra": "mean: 11.687322050001825 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 135.69846988494075,
            "unit": "iter/sec",
            "range": "stddev: 0.0008565683463727879",
            "extra": "mean: 7.369279851481774 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 153.5863786905753,
            "unit": "iter/sec",
            "range": "stddev: 0.0008073125446224101",
            "extra": "mean: 6.5109940642240325 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1288764954477117,
            "unit": "iter/sec",
            "range": "stddev: 0.09165209116195477",
            "extra": "mean: 7.759366799400004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8587965216675677,
            "unit": "iter/sec",
            "range": "stddev: 0.005001985523747962",
            "extra": "mean: 1.1644201795999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5467.181793356905,
            "unit": "iter/sec",
            "range": "stddev: 0.00004681139787246732",
            "extra": "mean: 182.90959360727422 usec\nrounds: 1971"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1480765.7282586459,
            "unit": "iter/sec",
            "range": "stddev: 9.724251981202393e-8",
            "extra": "mean: 675.3262726953994 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.91430890802342,
            "unit": "iter/sec",
            "range": "stddev: 0.00025558918993980083",
            "extra": "mean: 15.645948725489012 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1502914.538707381,
            "unit": "iter/sec",
            "range": "stddev: 8.490095621715218e-8",
            "extra": "mean: 665.373828148655 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10608.818085640634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020253937195082607",
            "extra": "mean: 94.26120722661192 usec\nrounds: 3764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 137.29963954698408,
            "unit": "iter/sec",
            "range": "stddev: 0.00035267469522404736",
            "extra": "mean: 7.283340315382247 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.90984930937756,
            "unit": "iter/sec",
            "range": "stddev: 0.0007889815377043024",
            "extra": "mean: 10.88022673863714 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 168.49200845916215,
            "unit": "iter/sec",
            "range": "stddev: 0.00011689738697765118",
            "extra": "mean: 5.9349995833325995 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10788041.202196036,
            "unit": "iter/sec",
            "range": "stddev: 3.3474116487734415e-9",
            "extra": "mean: 92.69523366274123 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 75.72033703122139,
            "unit": "iter/sec",
            "range": "stddev: 0.01946596709293701",
            "extra": "mean: 13.206491666666444 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 117.95558926365435,
            "unit": "iter/sec",
            "range": "stddev: 0.00025535374981467876",
            "extra": "mean: 8.47776698198506 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 241.35259390943753,
            "unit": "iter/sec",
            "range": "stddev: 0.0002578065788147768",
            "extra": "mean: 4.143315734883831 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10812.921362302719,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017353180166628304",
            "extra": "mean: 92.48194511857987 usec\nrounds: 5357"
          }
        ]
      }
    ]
  }
}