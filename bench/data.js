window.BENCHMARK_DATA = {
  "lastUpdate": 1681003074073,
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
          "id": "62c50366dd6d40026ea6e4c30bacb7c9d78e5422",
          "message": "chore(conda-lock): relock",
          "timestamp": "2023-04-09T01:12:38Z",
          "tree_id": "ad9370df8d5dbef935df5a7a53e2ff2628e040ab",
          "url": "https://github.com/ibis-project/ibis/commit/62c50366dd6d40026ea6e4c30bacb7c9d78e5422"
        },
        "date": 1681002988818,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 93.28532600527943,
            "unit": "iter/sec",
            "range": "stddev: 0.006455370216670619",
            "extra": "mean: 10.71979959574141 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.84487595803603,
            "unit": "iter/sec",
            "range": "stddev: 0.0005680884199027084",
            "extra": "mean: 10.11686230882159 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2384.741990172707,
            "unit": "iter/sec",
            "range": "stddev: 0.00008725063039384964",
            "extra": "mean: 419.33257523073945 usec\nrounds: 1841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1888158.1837936807,
            "unit": "iter/sec",
            "range": "stddev: 8.068789451368902e-8",
            "extra": "mean: 529.6166436600156 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2316.826812087202,
            "unit": "iter/sec",
            "range": "stddev: 0.00010297181214379163",
            "extra": "mean: 431.62483910444377 usec\nrounds: 491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 549.566002680027,
            "unit": "iter/sec",
            "range": "stddev: 0.00004501996567019063",
            "extra": "mean: 1.8196176530632815 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.860503661746918,
            "unit": "iter/sec",
            "range": "stddev: 0.000686117337150397",
            "extra": "mean: 35.89310559999035 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 96.87021874635015,
            "unit": "iter/sec",
            "range": "stddev: 0.0005026918169784158",
            "extra": "mean: 10.323090139999067 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.362556800176064,
            "unit": "iter/sec",
            "range": "stddev: 0.00030284239516018626",
            "extra": "mean: 96.50128045455051 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.2605863133609,
            "unit": "iter/sec",
            "range": "stddev: 0.00011079760629027104",
            "extra": "mean: 6.239837398602043 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8066.072350556709,
            "unit": "iter/sec",
            "range": "stddev: 0.000012276056465984965",
            "extra": "mean: 123.97607615445968 usec\nrounds: 5003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1752374.9963284866,
            "unit": "iter/sec",
            "range": "stddev: 7.306522885244346e-8",
            "extra": "mean: 570.6541134718107 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2312.3186246836653,
            "unit": "iter/sec",
            "range": "stddev: 0.00008541249350988316",
            "extra": "mean: 432.46635187951404 usec\nrounds: 1330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1715497.0274628412,
            "unit": "iter/sec",
            "range": "stddev: 7.762816182635268e-8",
            "extra": "mean: 582.9214414197875 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.57102530653366,
            "unit": "iter/sec",
            "range": "stddev: 0.014495120720971609",
            "extra": "mean: 13.592307512821797 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.59459144211044,
            "unit": "iter/sec",
            "range": "stddev: 0.0006011679657391351",
            "extra": "mean: 9.940892305084551 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.5850816740102,
            "unit": "iter/sec",
            "range": "stddev: 0.0003373418602432875",
            "extra": "mean: 7.21578389189301 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.17398513926108,
            "unit": "iter/sec",
            "range": "stddev: 0.00021586085356486905",
            "extra": "mean: 13.48181573529463 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 190.73417238696788,
            "unit": "iter/sec",
            "range": "stddev: 0.00004262475070527045",
            "extra": "mean: 5.24289899122621 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 93.55409463029737,
            "unit": "iter/sec",
            "range": "stddev: 0.00951722056428593",
            "extra": "mean: 10.689003019608629 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13445.605906555706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016859736957124149",
            "extra": "mean: 74.37374016089731 usec\nrounds: 7216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 378.49779176022884,
            "unit": "iter/sec",
            "range": "stddev: 0.00004587317377195974",
            "extra": "mean: 2.642023340081945 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 176.20236965098505,
            "unit": "iter/sec",
            "range": "stddev: 0.00403971893832165",
            "extra": "mean: 5.675292573991837 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.5597041543432,
            "unit": "iter/sec",
            "range": "stddev: 0.0003347737758609004",
            "extra": "mean: 20.177682999997575 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.21169490188669,
            "unit": "iter/sec",
            "range": "stddev: 0.0005800884013326896",
            "extra": "mean: 10.286828153847896 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.12516838473675,
            "unit": "iter/sec",
            "range": "stddev: 0.00006799294613393591",
            "extra": "mean: 6.324103937501491 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.574246287230753,
            "unit": "iter/sec",
            "range": "stddev: 0.00029794211972958545",
            "extra": "mean: 179.39645083331848 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.834985615546,
            "unit": "iter/sec",
            "range": "stddev: 0.00008466522463428022",
            "extra": "mean: 14.319470265307672 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 479465.36753122736,
            "unit": "iter/sec",
            "range": "stddev: 2.2867099109656368e-7",
            "extra": "mean: 2.08565637420073 usec\nrounds: 2008"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6369067.363051777,
            "unit": "iter/sec",
            "range": "stddev: 7.862971967849812e-9",
            "extra": "mean: 157.00885906822663 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 265.4228550595056,
            "unit": "iter/sec",
            "range": "stddev: 0.0003481467796800698",
            "extra": "mean: 3.7675730666668032 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.7003649007574,
            "unit": "iter/sec",
            "range": "stddev: 0.0002354096775669872",
            "extra": "mean: 3.6010035505620346 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2194.477483416358,
            "unit": "iter/sec",
            "range": "stddev: 0.00008188344262026038",
            "extra": "mean: 455.6893417941122 usec\nrounds: 591"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2311.1615939859926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000803003830242234",
            "extra": "mean: 432.6828563619947 usec\nrounds: 1831"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1968.760123075501,
            "unit": "iter/sec",
            "range": "stddev: 0.003142198773499373",
            "extra": "mean: 507.9338962015589 usec\nrounds: 1869"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.56653115762266,
            "unit": "iter/sec",
            "range": "stddev: 0.00004728524905638011",
            "extra": "mean: 9.943666033709096 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9037342662641011,
            "unit": "iter/sec",
            "range": "stddev: 0.001464974620651639",
            "extra": "mean: 1.1065199553999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.38379442143696,
            "unit": "iter/sec",
            "range": "stddev: 0.018376227618499403",
            "extra": "mean: 25.391154272725203 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.62076596199182,
            "unit": "iter/sec",
            "range": "stddev: 0.0006561911694610053",
            "extra": "mean: 9.744616410000049 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 753.4257499383381,
            "unit": "iter/sec",
            "range": "stddev: 0.000013203010609887633",
            "extra": "mean: 1.32727080283869 msec\nrounds: 634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 274.93853259314113,
            "unit": "iter/sec",
            "range": "stddev: 0.0002334089764778095",
            "extra": "mean: 3.637176610234614 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2251.2327375211266,
            "unit": "iter/sec",
            "range": "stddev: 0.00007588340905075416",
            "extra": "mean: 444.20107407513905 usec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140488.6621121773,
            "unit": "iter/sec",
            "range": "stddev: 3.565744840157713e-7",
            "extra": "mean: 7.118012122583392 usec\nrounds: 41494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 120.42348332899833,
            "unit": "iter/sec",
            "range": "stddev: 0.00011115421131712999",
            "extra": "mean: 8.304028187492207 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 280.38379307448764,
            "unit": "iter/sec",
            "range": "stddev: 0.00023591775544825718",
            "extra": "mean: 3.566539952379976 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.8562366056316,
            "unit": "iter/sec",
            "range": "stddev: 0.0002386015707354656",
            "extra": "mean: 3.664933638461539 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.38662608102445,
            "unit": "iter/sec",
            "range": "stddev: 0.0006084445638208178",
            "extra": "mean: 9.961486295922288 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.561635753536281,
            "unit": "iter/sec",
            "range": "stddev: 0.0026086276093587792",
            "extra": "mean: 390.37556320000704 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.05927431009135,
            "unit": "iter/sec",
            "range": "stddev: 0.00012258754635755055",
            "extra": "mean: 8.399177685188032 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.78551591549166,
            "unit": "iter/sec",
            "range": "stddev: 0.0002336823254580603",
            "extra": "mean: 3.7766416208323035 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.77943443190324,
            "unit": "iter/sec",
            "range": "stddev: 0.000672329962640462",
            "extra": "mean: 10.227099448979043 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.9952892368658,
            "unit": "iter/sec",
            "range": "stddev: 0.023079873195257988",
            "extra": "mean: 26.319052179493003 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1174.3190023638306,
            "unit": "iter/sec",
            "range": "stddev: 0.00002889784648046294",
            "extra": "mean: 851.5573689832682 usec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 105.86636874518513,
            "unit": "iter/sec",
            "range": "stddev: 0.00004272116733491577",
            "extra": "mean: 9.4458704105262 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4696.075948563386,
            "unit": "iter/sec",
            "range": "stddev: 0.000021364916604489464",
            "extra": "mean: 212.9437451508675 usec\nrounds: 2217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.17158844622233,
            "unit": "iter/sec",
            "range": "stddev: 0.00019282382003944464",
            "extra": "mean: 10.618914011109206 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6711409638860357,
            "unit": "iter/sec",
            "range": "stddev: 0.001078348281352601",
            "extra": "mean: 598.3935656000085 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 102.52729184080427,
            "unit": "iter/sec",
            "range": "stddev: 0.0006535475184477992",
            "extra": "mean: 9.753500575756117 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2280.4433176469834,
            "unit": "iter/sec",
            "range": "stddev: 0.00008672265287417863",
            "extra": "mean: 438.51122817287313 usec\nrounds: 1363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 248.24124197004826,
            "unit": "iter/sec",
            "range": "stddev: 0.00035895761822585037",
            "extra": "mean: 4.0283394977562015 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.94981372473655,
            "unit": "iter/sec",
            "range": "stddev: 0.00008345048361190793",
            "extra": "mean: 16.406941037034684 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1752.4576813304184,
            "unit": "iter/sec",
            "range": "stddev: 0.000004810460662278338",
            "extra": "mean: 570.6271886924123 usec\nrounds: 1309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 48.27595752462349,
            "unit": "iter/sec",
            "range": "stddev: 0.0002494485776677527",
            "extra": "mean: 20.714244756097134 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 769285.5387056092,
            "unit": "iter/sec",
            "range": "stddev: 1.7280350326385475e-7",
            "extra": "mean: 1.299907446177382 usec\nrounds: 22884"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12890360.480564594,
            "unit": "iter/sec",
            "range": "stddev: 3.996833125767627e-9",
            "extra": "mean: 77.57734948583888 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11964.458309034932,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017897909369596408",
            "extra": "mean: 83.58088382863538 usec\nrounds: 5380"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.79232341622577,
            "unit": "iter/sec",
            "range": "stddev: 0.00012394314261899658",
            "extra": "mean: 3.3922185910793585 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.01037496459391,
            "unit": "iter/sec",
            "range": "stddev: 0.0005787867512946005",
            "extra": "mean: 10.415541032610003 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2463832.095854261,
            "unit": "iter/sec",
            "range": "stddev: 1.7454096376713922e-8",
            "extra": "mean: 405.87181313326397 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.553346960843797,
            "unit": "iter/sec",
            "range": "stddev: 0.0006224804819453535",
            "extra": "mean: 64.29484293750676 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.75083433729606,
            "unit": "iter/sec",
            "range": "stddev: 0.0005951261936682696",
            "extra": "mean: 10.443773225801422 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5805076.625566913,
            "unit": "iter/sec",
            "range": "stddev: 8.514602267197934e-9",
            "extra": "mean: 172.2630146858095 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 253.00549591650318,
            "unit": "iter/sec",
            "range": "stddev: 0.00395266141696253",
            "extra": "mean: 3.9524833102045336 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11649.993705293546,
            "unit": "iter/sec",
            "range": "stddev: 0.000013101382434383593",
            "extra": "mean: 85.83695625051008 usec\nrounds: 4320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.18800471286474,
            "unit": "iter/sec",
            "range": "stddev: 0.00006439332413087431",
            "extra": "mean: 6.053708329114048 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7415062.196411749,
            "unit": "iter/sec",
            "range": "stddev: 4.407245523982714e-9",
            "extra": "mean: 134.86063548931574 nsec\nrounds: 72464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7936766693999239,
            "unit": "iter/sec",
            "range": "stddev: 0.005249557051040183",
            "extra": "mean: 1.2599589209999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18053360223223158,
            "unit": "iter/sec",
            "range": "stddev: 0.05922449249946471",
            "extra": "mean: 5.539135028800001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 690.4617508668005,
            "unit": "iter/sec",
            "range": "stddev: 0.000018191054679909966",
            "extra": "mean: 1.4483061498259788 msec\nrounds: 574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.717778425115995,
            "unit": "iter/sec",
            "range": "stddev: 0.00022045990224136219",
            "extra": "mean: 17.325684170214842 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71039.84492063717,
            "unit": "iter/sec",
            "range": "stddev: 4.5240352276725893e-7",
            "extra": "mean: 14.076607305620662 usec\nrounds: 13606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9016054765019892,
            "unit": "iter/sec",
            "range": "stddev: 0.002021731862006103",
            "extra": "mean: 1.1091325707999886 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.5667982252675,
            "unit": "iter/sec",
            "range": "stddev: 0.00023245462848538927",
            "extra": "mean: 3.642100962183901 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.6950183611941,
            "unit": "iter/sec",
            "range": "stddev: 0.0007111850413440356",
            "extra": "mean: 10.341794406249605 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.2220800181292,
            "unit": "iter/sec",
            "range": "stddev: 0.0007563202265175882",
            "extra": "mean: 9.879267446597588 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.90556600901627,
            "unit": "iter/sec",
            "range": "stddev: 0.0007406270267487068",
            "extra": "mean: 10.426923499997779 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.37650884085268,
            "unit": "iter/sec",
            "range": "stddev: 0.00021136181941179335",
            "extra": "mean: 8.978554009346018 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6751152722499827,
            "unit": "iter/sec",
            "range": "stddev: 0.0006848212330005769",
            "extra": "mean: 1.4812285266000003 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}