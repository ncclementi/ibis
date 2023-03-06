window.BENCHMARK_DATA = {
  "lastUpdate": 1678099415083,
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
          "id": "2df3b3f5279321db64898142cae105347f6925b3",
          "message": "ci: remove unnecessary Python version in custom venv cache key",
          "timestamp": "2023-03-06T05:17:22-05:00",
          "tree_id": "259fae75df14a924effeae17e454f1f0403d5d32",
          "url": "https://github.com/ibis-project/ibis/commit/2df3b3f5279321db64898142cae105347f6925b3"
        },
        "date": 1678098807838,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 175.31401390227896,
            "unit": "iter/sec",
            "range": "stddev: 0.005681017186565737",
            "extra": "mean: 5.704050564705032 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.32767464376127,
            "unit": "iter/sec",
            "range": "stddev: 0.00002177194124575328",
            "extra": "mean: 5.172565189348437 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.7726821999092,
            "unit": "iter/sec",
            "range": "stddev: 0.00008410868015204566",
            "extra": "mean: 10.33349471428558 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5780.331462853133,
            "unit": "iter/sec",
            "range": "stddev: 0.00004930097631564012",
            "extra": "mean: 173.00045964948984 usec\nrounds: 1995"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.14410035158634,
            "unit": "iter/sec",
            "range": "stddev: 0.013469291964766088",
            "extra": "mean: 26.922175810816007 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.22796205706406,
            "unit": "iter/sec",
            "range": "stddev: 0.0001805719610511598",
            "extra": "mean: 20.734859142851292 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.38981372321093,
            "unit": "iter/sec",
            "range": "stddev: 0.0001850523258406479",
            "extra": "mean: 8.446672636363349 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1656778.4017129946,
            "unit": "iter/sec",
            "range": "stddev: 9.609917295236987e-8",
            "extra": "mean: 603.5810214365838 nsec\nrounds: 58824"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5340.62293434986,
            "unit": "iter/sec",
            "range": "stddev: 0.00004232741790245059",
            "extra": "mean: 187.24407476292558 usec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 141.60321649825292,
            "unit": "iter/sec",
            "range": "stddev: 0.0005417843049708179",
            "extra": "mean: 7.0619864769267995 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 140.18478123603563,
            "unit": "iter/sec",
            "range": "stddev: 0.0006571943155663872",
            "extra": "mean: 7.133441955559023 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.01213341496242,
            "unit": "iter/sec",
            "range": "stddev: 0.0003752889942716904",
            "extra": "mean: 10.524971538451119 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139052.94357608425,
            "unit": "iter/sec",
            "range": "stddev: 3.726082388442369e-7",
            "extra": "mean: 7.191505438738445 usec\nrounds: 34014"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8504504621869791,
            "unit": "iter/sec",
            "range": "stddev: 0.0018104737412502092",
            "extra": "mean: 1.175847441399992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8074.466367144423,
            "unit": "iter/sec",
            "range": "stddev: 0.0000113147456388667",
            "extra": "mean: 123.84719367574196 usec\nrounds: 1771"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.846258874947885,
            "unit": "iter/sec",
            "range": "stddev: 0.00030006916644897594",
            "extra": "mean: 19.287794755104308 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1878593.2877708375,
            "unit": "iter/sec",
            "range": "stddev: 1.2213178110424802e-7",
            "extra": "mean: 532.313197598301 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1767.1174501769144,
            "unit": "iter/sec",
            "range": "stddev: 0.000037044871321392634",
            "extra": "mean: 565.8933422336389 usec\nrounds: 1236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 490907.49800098914,
            "unit": "iter/sec",
            "range": "stddev: 3.486361276524921e-7",
            "extra": "mean: 2.0370436468623363 usec\nrounds: 2062"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.93557022008345,
            "unit": "iter/sec",
            "range": "stddev: 0.000677016363367575",
            "extra": "mean: 10.006447131864526 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 295.80776131255794,
            "unit": "iter/sec",
            "range": "stddev: 0.0003032947303589098",
            "extra": "mean: 3.3805739090915017 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.4561253894078,
            "unit": "iter/sec",
            "range": "stddev: 0.0001880852814995845",
            "extra": "mean: 3.3393873600001216 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12452559.514252935,
            "unit": "iter/sec",
            "range": "stddev: 5.5751200798157315e-9",
            "extra": "mean: 80.30477580578099 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 309.0793136575174,
            "unit": "iter/sec",
            "range": "stddev: 0.0002626231549060162",
            "extra": "mean: 3.2354154930862618 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5307.292778376048,
            "unit": "iter/sec",
            "range": "stddev: 0.000049603182590632046",
            "extra": "mean: 188.4199801590718 usec\nrounds: 2268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.129637344764,
            "unit": "iter/sec",
            "range": "stddev: 0.0006913823079497933",
            "extra": "mean: 17.504049500003543 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.31656561743338,
            "unit": "iter/sec",
            "range": "stddev: 0.00006860381005364822",
            "extra": "mean: 6.276811178576987 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71882.54792123273,
            "unit": "iter/sec",
            "range": "stddev: 6.22637017144175e-7",
            "extra": "mean: 13.911582559591201 usec\nrounds: 14105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7286416.234663574,
            "unit": "iter/sec",
            "range": "stddev: 7.990397705024361e-9",
            "extra": "mean: 137.24167928304723 nsec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 213.50354273463913,
            "unit": "iter/sec",
            "range": "stddev: 0.004142812249195709",
            "extra": "mean: 4.683763028901527 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5320.9748102830845,
            "unit": "iter/sec",
            "range": "stddev: 0.000020613031936899784",
            "extra": "mean: 187.9354884498689 usec\nrounds: 1472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.86889249050638,
            "unit": "iter/sec",
            "range": "stddev: 0.0002708604402920485",
            "extra": "mean: 10.65315647674374 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11677.735050003617,
            "unit": "iter/sec",
            "range": "stddev: 0.000011904105974616006",
            "extra": "mean: 85.63304405503621 usec\nrounds: 4676"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 139.17957762991753,
            "unit": "iter/sec",
            "range": "stddev: 0.0006625470222391352",
            "extra": "mean: 7.184962169227359 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.14215702897552,
            "unit": "iter/sec",
            "range": "stddev: 0.0006606973565153164",
            "extra": "mean: 10.971871114286712 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 111.64061158096158,
            "unit": "iter/sec",
            "range": "stddev: 0.013989894324451751",
            "extra": "mean: 8.957313882814066 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 137.40830542539675,
            "unit": "iter/sec",
            "range": "stddev: 0.0007694475645995747",
            "extra": "mean: 7.27758047014801 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.783162352398003,
            "unit": "iter/sec",
            "range": "stddev: 0.004692004059247115",
            "extra": "mean: 560.8014315999867 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 302.7869529823806,
            "unit": "iter/sec",
            "range": "stddev: 0.00023075207603667156",
            "extra": "mean: 3.3026522118943173 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 301.93724194952307,
            "unit": "iter/sec",
            "range": "stddev: 0.0002229595447078435",
            "extra": "mean: 3.3119465275077817 msec\nrounds: 309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4914680958166273,
            "unit": "iter/sec",
            "range": "stddev: 0.0027749326907606374",
            "extra": "mean: 401.3697793999768 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.496135198991146,
            "unit": "iter/sec",
            "range": "stddev: 0.0002761343764353072",
            "extra": "mean: 64.53221962500066 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 133.2976985574058,
            "unit": "iter/sec",
            "range": "stddev: 0.00007952773037543941",
            "extra": "mean: 7.50200499200173 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 324.3771560435642,
            "unit": "iter/sec",
            "range": "stddev: 0.00007807178386113014",
            "extra": "mean: 3.0828311469186787 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 299.45109829407716,
            "unit": "iter/sec",
            "range": "stddev: 0.00023041822667633116",
            "extra": "mean: 3.3394434206347308 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.18821928371725,
            "unit": "iter/sec",
            "range": "stddev: 0.0006617892441457784",
            "extra": "mean: 9.981213431572804 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18044154141033678,
            "unit": "iter/sec",
            "range": "stddev: 0.12600093803941542",
            "extra": "mean: 5.541961081599993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.15142406283115,
            "unit": "iter/sec",
            "range": "stddev: 0.00012680623069342718",
            "extra": "mean: 6.88935714173313 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 547.7775372323034,
            "unit": "iter/sec",
            "range": "stddev: 0.000023283285990553563",
            "extra": "mean: 1.8255586109875777 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6826455718335479,
            "unit": "iter/sec",
            "range": "stddev: 0.00198437583548662",
            "extra": "mean: 1.464889015999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2450674.05986485,
            "unit": "iter/sec",
            "range": "stddev: 1.8298748381406e-8",
            "extra": "mean: 408.05099967281814 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 163.6597807350585,
            "unit": "iter/sec",
            "range": "stddev: 0.003833905642721601",
            "extra": "mean: 6.110236708790753 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.90814687046515,
            "unit": "iter/sec",
            "range": "stddev: 0.0006845729323610158",
            "extra": "mean: 9.717403630431152 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.02544999110935,
            "unit": "iter/sec",
            "range": "stddev: 0.00007495048775961893",
            "extra": "mean: 7.406011237628493 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4125.611660597439,
            "unit": "iter/sec",
            "range": "stddev: 0.003125954894330956",
            "extra": "mean: 242.38830075809602 usec\nrounds: 2374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 357.13035711836415,
            "unit": "iter/sec",
            "range": "stddev: 0.00005290972122548249",
            "extra": "mean: 2.8000980036221588 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2472540.8565265606,
            "unit": "iter/sec",
            "range": "stddev: 2.106340766805781e-8",
            "extra": "mean: 404.4422551647526 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13473.411527239852,
            "unit": "iter/sec",
            "range": "stddev: 0.000001685386850095238",
            "extra": "mean: 74.22025208524592 usec\nrounds: 4915"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.27527630879047,
            "unit": "iter/sec",
            "range": "stddev: 0.0006772382938120446",
            "extra": "mean: 9.498906439027795 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5731943.274654387,
            "unit": "iter/sec",
            "range": "stddev: 1.3031311985298052e-8",
            "extra": "mean: 174.46090306225057 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1187.0805561695306,
            "unit": "iter/sec",
            "range": "stddev: 0.000017181145695448704",
            "extra": "mean: 842.4028131896947 usec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5717.373269871616,
            "unit": "iter/sec",
            "range": "stddev: 0.00007852869900682508",
            "extra": "mean: 174.9054946735103 usec\nrounds: 2347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.58027020325822,
            "unit": "iter/sec",
            "range": "stddev: 0.0002408579377168323",
            "extra": "mean: 14.168265396550387 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.69786745237854,
            "unit": "iter/sec",
            "range": "stddev: 0.001621506183710186",
            "extra": "mean: 23.982041794872597 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.70622372725154,
            "unit": "iter/sec",
            "range": "stddev: 0.0007378909088596442",
            "extra": "mean: 9.550530660000618 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 306.1428255601051,
            "unit": "iter/sec",
            "range": "stddev: 0.0002322528627736368",
            "extra": "mean: 3.2664492403845986 msec\nrounds: 312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6306612.621454584,
            "unit": "iter/sec",
            "range": "stddev: 1.1815667243998089e-8",
            "extra": "mean: 158.56372668217352 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 130.47671309683952,
            "unit": "iter/sec",
            "range": "stddev: 0.0006560142284195837",
            "extra": "mean: 7.664202877779442 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 139.27935057599927,
            "unit": "iter/sec",
            "range": "stddev: 0.0006299588201454334",
            "extra": "mean: 7.179815212121766 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5422.068689896051,
            "unit": "iter/sec",
            "range": "stddev: 0.00005941628068865411",
            "extra": "mean: 184.4314517563169 usec\nrounds: 3389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 761751.328219605,
            "unit": "iter/sec",
            "range": "stddev: 1.5466767253798739e-7",
            "extra": "mean: 1.312764366735322 usec\nrounds: 23753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5600.981015158316,
            "unit": "iter/sec",
            "range": "stddev: 0.00004831064084833983",
            "extra": "mean: 178.54015167943473 usec\nrounds: 2769"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.533708616062565,
            "unit": "iter/sec",
            "range": "stddev: 0.0006555938565059254",
            "extra": "mean: 37.68790915999716 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.4602601665123,
            "unit": "iter/sec",
            "range": "stddev: 0.000022624837431207308",
            "extra": "mean: 1.4546295370699482 msec\nrounds: 553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.67424022362842,
            "unit": "iter/sec",
            "range": "stddev: 0.0006576273721189752",
            "extra": "mean: 9.553448851059986 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 745.8931880173711,
            "unit": "iter/sec",
            "range": "stddev: 0.00010196321782003741",
            "extra": "mean: 1.3406745309714652 msec\nrounds: 565"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.44235714965201,
            "unit": "iter/sec",
            "range": "stddev: 0.013495931013729616",
            "extra": "mean: 8.372239328357171 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5748.780670565444,
            "unit": "iter/sec",
            "range": "stddev: 0.000051347382663572014",
            "extra": "mean: 173.9499308297043 usec\nrounds: 3542"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.80579911312883,
            "unit": "iter/sec",
            "range": "stddev: 0.00008699376770808963",
            "extra": "mean: 13.3679475636334 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9241749635028654,
            "unit": "iter/sec",
            "range": "stddev: 0.003143109248620627",
            "extra": "mean: 1.0820461919999844 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 297.72032861613087,
            "unit": "iter/sec",
            "range": "stddev: 0.00004330419297719382",
            "extra": "mean: 3.3588569670341912 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 280.1189970502304,
            "unit": "iter/sec",
            "range": "stddev: 0.00028383230547008063",
            "extra": "mean: 3.5699113966936054 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.494685840753883,
            "unit": "iter/sec",
            "range": "stddev: 0.0001814539991906615",
            "extra": "mean: 95.28632063636553 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.25386946612076,
            "unit": "iter/sec",
            "range": "stddev: 0.0009266281045475991",
            "extra": "mean: 27.58326255172568 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.90820628461256,
            "unit": "iter/sec",
            "range": "stddev: 0.000784977856507817",
            "extra": "mean: 10.213648456525362 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11832.963059571024,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017952617840845128",
            "extra": "mean: 84.50968662419307 usec\nrounds: 5996"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.548374351144762,
            "unit": "iter/sec",
            "range": "stddev: 0.0005408637457140179",
            "extra": "mean: 180.23297216664483 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9159140865164318,
            "unit": "iter/sec",
            "range": "stddev: 0.0024414753657346806",
            "extra": "mean: 1.0918054593999955 sec\nrounds: 5"
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
          "id": "4adfe292307d042175b4221a33ebbfc3d53029e8",
          "message": "feat(examples): enable progressbar and faster hashing",
          "timestamp": "2023-03-06T11:34:43+01:00",
          "tree_id": "d9b0c700c8efeda8ccf106bacacafb5309e71dc9",
          "url": "https://github.com/ibis-project/ibis/commit/4adfe292307d042175b4221a33ebbfc3d53029e8"
        },
        "date": 1678099336646,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5577.72708496367,
            "unit": "iter/sec",
            "range": "stddev: 0.00006417428147840577",
            "extra": "mean: 179.28449792672376 usec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11435775.236823332,
            "unit": "iter/sec",
            "range": "stddev: 4.0042967466119444e-9",
            "extra": "mean: 87.44488058670507 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.52896463168506,
            "unit": "iter/sec",
            "range": "stddev: 0.009809812073038276",
            "extra": "mean: 8.296760891092203 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.644576766327356,
            "unit": "iter/sec",
            "range": "stddev: 0.0005407246919916103",
            "extra": "mean: 177.16120116666426 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7764394181102785,
            "unit": "iter/sec",
            "range": "stddev: 0.002485276346410742",
            "extra": "mean: 562.9237844000158 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.81363649376992,
            "unit": "iter/sec",
            "range": "stddev: 0.0010912733580191907",
            "extra": "mean: 30.475134939398217 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.839465489465205,
            "unit": "iter/sec",
            "range": "stddev: 0.020019307910313724",
            "extra": "mean: 27.90220184209901 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.26321366269933,
            "unit": "iter/sec",
            "range": "stddev: 0.0007487362585937131",
            "extra": "mean: 9.410594367813868 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8397845186758857,
            "unit": "iter/sec",
            "range": "stddev: 0.010081719477860997",
            "extra": "mean: 1.1907816562000106 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.175017168072394,
            "unit": "iter/sec",
            "range": "stddev: 0.0007797124586133208",
            "extra": "mean: 19.930237326083564 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1944525.3395697067,
            "unit": "iter/sec",
            "range": "stddev: 8.285570712389103e-8",
            "extra": "mean: 514.2643192406454 nsec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8456782502757904,
            "unit": "iter/sec",
            "range": "stddev: 0.015803807430493703",
            "extra": "mean: 1.1824828173999777 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.39018245343956,
            "unit": "iter/sec",
            "range": "stddev: 0.0004419887798659742",
            "extra": "mean: 12.286494142853956 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.5875326904076,
            "unit": "iter/sec",
            "range": "stddev: 0.0007197396942371368",
            "extra": "mean: 46.32303349999554 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 131.38707569385414,
            "unit": "iter/sec",
            "range": "stddev: 0.0005311911331192978",
            "extra": "mean: 7.611098692310547 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6182976.540300988,
            "unit": "iter/sec",
            "range": "stddev: 9.294727041054778e-9",
            "extra": "mean: 161.73439984462007 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.42448872269188,
            "unit": "iter/sec",
            "range": "stddev: 0.0001424971930502232",
            "extra": "mean: 8.444199428562829 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 283.1519537949327,
            "unit": "iter/sec",
            "range": "stddev: 0.0003033180476702958",
            "extra": "mean: 3.5316726111105368 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 315.85632153796183,
            "unit": "iter/sec",
            "range": "stddev: 0.0002548150289267843",
            "extra": "mean: 3.1659964731141628 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.491712487191615,
            "unit": "iter/sec",
            "range": "stddev: 0.0005362876767977745",
            "extra": "mean: 95.31332480000856 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.50574061103114,
            "unit": "iter/sec",
            "range": "stddev: 0.0012246327395477627",
            "extra": "mean: 18.689583371430476 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 117.08588406427812,
            "unit": "iter/sec",
            "range": "stddev: 0.0138878661675638",
            "extra": "mean: 8.540739201755674 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8460.377062839734,
            "unit": "iter/sec",
            "range": "stddev: 0.000023371913236106932",
            "extra": "mean: 118.19804159701944 usec\nrounds: 4183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 508074.7684067996,
            "unit": "iter/sec",
            "range": "stddev: 1.3654586658104785e-7",
            "extra": "mean: 1.9682142514885352 usec\nrounds: 2049"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 130.11609413325388,
            "unit": "iter/sec",
            "range": "stddev: 0.00078067881365637",
            "extra": "mean: 7.685444346153558 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 138.09736477531067,
            "unit": "iter/sec",
            "range": "stddev: 0.000760123568362711",
            "extra": "mean: 7.241267794117836 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 61.94881909366216,
            "unit": "iter/sec",
            "range": "stddev: 0.0004485123878137744",
            "extra": "mean: 16.142357750001207 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 283.3139527700898,
            "unit": "iter/sec",
            "range": "stddev: 0.00009829380362914611",
            "extra": "mean: 3.5296532000014245 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 135.4214106917274,
            "unit": "iter/sec",
            "range": "stddev: 0.00006314311826531962",
            "extra": "mean: 7.3843566899210265 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.92233760769105,
            "unit": "iter/sec",
            "range": "stddev: 0.00012608469964064443",
            "extra": "mean: 6.137893763886145 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5715.580500941571,
            "unit": "iter/sec",
            "range": "stddev: 0.00004595879751300878",
            "extra": "mean: 174.96035614147374 usec\nrounds: 2426"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 297.88570101639306,
            "unit": "iter/sec",
            "range": "stddev: 0.0002664313136754202",
            "extra": "mean: 3.3569922845842424 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.95750743993011,
            "unit": "iter/sec",
            "range": "stddev: 0.0008395758833775746",
            "extra": "mean: 9.71274484848464 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 750930.8758966601,
            "unit": "iter/sec",
            "range": "stddev: 1.9864403381070876e-7",
            "extra": "mean: 1.33168049430107 usec\nrounds: 23311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 739.9962886396293,
            "unit": "iter/sec",
            "range": "stddev: 0.000011363076314376321",
            "extra": "mean: 1.3513581288878465 msec\nrounds: 450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5295.530726473337,
            "unit": "iter/sec",
            "range": "stddev: 0.00007167884041044577",
            "extra": "mean: 188.83848506454984 usec\nrounds: 2109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 137.58178528439112,
            "unit": "iter/sec",
            "range": "stddev: 0.0007375573007549308",
            "extra": "mean: 7.268404010988304 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.30624284274828,
            "unit": "iter/sec",
            "range": "stddev: 0.00006483027252886996",
            "extra": "mean: 5.094081500001266 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 296.4556927709348,
            "unit": "iter/sec",
            "range": "stddev: 0.000041337518321876157",
            "extra": "mean: 3.3731853507454126 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 108.63975935292324,
            "unit": "iter/sec",
            "range": "stddev: 0.0187634301056624",
            "extra": "mean: 9.204733202247215 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147029.76915991408,
            "unit": "iter/sec",
            "range": "stddev: 3.6871198450042423e-7",
            "extra": "mean: 6.8013437395278045 usec\nrounds: 35972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.12080038668057,
            "unit": "iter/sec",
            "range": "stddev: 0.0009205512520902629",
            "extra": "mean: 10.974442671227603 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5232.429484989605,
            "unit": "iter/sec",
            "range": "stddev: 0.000024131192600603543",
            "extra": "mean: 191.1158101353728 usec\nrounds: 1401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.28723649549828,
            "unit": "iter/sec",
            "range": "stddev: 0.00024401989577588491",
            "extra": "mean: 10.719580057967057 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5226.939727979408,
            "unit": "iter/sec",
            "range": "stddev: 0.00005245910583401567",
            "extra": "mean: 191.3165354953447 usec\nrounds: 1634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.4633158966749,
            "unit": "iter/sec",
            "range": "stddev: 0.0002552314661687122",
            "extra": "mean: 3.2209924612568703 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 533.8764522941639,
            "unit": "iter/sec",
            "range": "stddev: 0.00007968826482453681",
            "extra": "mean: 1.8730925398616454 msec\nrounds: 439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1734.8413877606104,
            "unit": "iter/sec",
            "range": "stddev: 0.00001649473463291754",
            "extra": "mean: 576.4215720555483 usec\nrounds: 1367"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12190.2827673989,
            "unit": "iter/sec",
            "range": "stddev: 0.000012202378338245638",
            "extra": "mean: 82.03255158890583 usec\nrounds: 4061"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16350087510815345,
            "unit": "iter/sec",
            "range": "stddev: 0.1826806757393109",
            "extra": "mean: 6.116175215200007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 308.42542634532776,
            "unit": "iter/sec",
            "range": "stddev: 0.00025076557675714905",
            "extra": "mean: 3.2422748404677653 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 139.29653101181486,
            "unit": "iter/sec",
            "range": "stddev: 0.0007586454330947237",
            "extra": "mean: 7.178929674244235 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6847199.153583814,
            "unit": "iter/sec",
            "range": "stddev: 4.9828364889839145e-9",
            "extra": "mean: 146.0451167797982 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6859362081373287,
            "unit": "iter/sec",
            "range": "stddev: 0.013806095286303117",
            "extra": "mean: 1.4578615155999954 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.370061692411981,
            "unit": "iter/sec",
            "range": "stddev: 0.002709643828799437",
            "extra": "mean: 421.9299451999973 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.689129346847288,
            "unit": "iter/sec",
            "range": "stddev: 0.00023406795964527518",
            "extra": "mean: 63.73839987500318 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12676.513445619914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018821992690243922",
            "extra": "mean: 78.88604420212465 usec\nrounds: 4864"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 680.3682391738721,
            "unit": "iter/sec",
            "range": "stddev: 0.000030319803451063922",
            "extra": "mean: 1.4697923013194096 msec\nrounds: 531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.43141315446874,
            "unit": "iter/sec",
            "range": "stddev: 0.0007576184321431845",
            "extra": "mean: 9.395722281246558 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 302.45927621092295,
            "unit": "iter/sec",
            "range": "stddev: 0.00030873629195723946",
            "extra": "mean: 3.3062302222221813 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.27338781011814,
            "unit": "iter/sec",
            "range": "stddev: 0.000861762194901304",
            "extra": "mean: 9.874262346935044 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.68715919887784,
            "unit": "iter/sec",
            "range": "stddev: 0.0009187477519673753",
            "extra": "mean: 27.257493407409616 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5215.769202094607,
            "unit": "iter/sec",
            "range": "stddev: 0.00007064000506556681",
            "extra": "mean: 191.72627492765758 usec\nrounds: 2066"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14005.460199650792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016430005688455576",
            "extra": "mean: 71.40072412793216 usec\nrounds: 6532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74793.67468111172,
            "unit": "iter/sec",
            "range": "stddev: 5.473854775912786e-7",
            "extra": "mean: 13.370114575377835 usec\nrounds: 11835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 137.44329476552173,
            "unit": "iter/sec",
            "range": "stddev: 0.0007769843181777916",
            "extra": "mean: 7.2757277952773185 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.25954727069053,
            "unit": "iter/sec",
            "range": "stddev: 0.0008435136664423029",
            "extra": "mean: 9.500325869997823 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8314195207481736,
            "unit": "iter/sec",
            "range": "stddev: 0.005062342043476918",
            "extra": "mean: 1.2027622338000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.85811866958363,
            "unit": "iter/sec",
            "range": "stddev: 0.0004332197798923386",
            "extra": "mean: 23.332802069767453 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.56641712355241,
            "unit": "iter/sec",
            "range": "stddev: 0.00010189954112672753",
            "extra": "mean: 13.060556279998536 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5732.606732551032,
            "unit": "iter/sec",
            "range": "stddev: 0.00004618311538820725",
            "extra": "mean: 174.44071199263936 usec\nrounds: 2118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5615641.020892402,
            "unit": "iter/sec",
            "range": "stddev: 1.0189064882856063e-8",
            "extra": "mean: 178.07406069593688 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.7603301911385,
            "unit": "iter/sec",
            "range": "stddev: 0.00035403192916027795",
            "extra": "mean: 3.33599846037787 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1951301.1217605635,
            "unit": "iter/sec",
            "range": "stddev: 8.698722856779385e-8",
            "extra": "mean: 512.4785656340673 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5111.0061591694675,
            "unit": "iter/sec",
            "range": "stddev: 0.00010513078876482665",
            "extra": "mean: 195.65619153206006 usec\nrounds: 1984"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5433.432834319168,
            "unit": "iter/sec",
            "range": "stddev: 0.00005190360698496167",
            "extra": "mean: 184.04570931358612 usec\nrounds: 3017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 339.4276659964807,
            "unit": "iter/sec",
            "range": "stddev: 0.000013300800257898669",
            "extra": "mean: 2.9461358050005515 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 311.8711519851028,
            "unit": "iter/sec",
            "range": "stddev: 0.0002534728271432447",
            "extra": "mean: 3.20645238790078 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1173.1277410225102,
            "unit": "iter/sec",
            "range": "stddev: 0.000014089039429218883",
            "extra": "mean: 852.422089284488 usec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.21515378050208,
            "unit": "iter/sec",
            "range": "stddev: 0.00019743748029341882",
            "extra": "mean: 6.9340840666579115 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 195.46037332279988,
            "unit": "iter/sec",
            "range": "stddev: 0.00007690907481349541",
            "extra": "mean: 5.116126522221028 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.05281070620013,
            "unit": "iter/sec",
            "range": "stddev: 0.00007458855064600435",
            "extra": "mean: 10.410939488889426 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.77466503595532,
            "unit": "iter/sec",
            "range": "stddev: 0.0008277166918286606",
            "extra": "mean: 9.923128989247553 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 153.63157730732652,
            "unit": "iter/sec",
            "range": "stddev: 0.003925078706335474",
            "extra": "mean: 6.509078521009958 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1937549.7315577832,
            "unit": "iter/sec",
            "range": "stddev: 2.3454140923289535e-7",
            "extra": "mean: 516.1157846493073 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 216.6033645170987,
            "unit": "iter/sec",
            "range": "stddev: 0.004304018655649297",
            "extra": "mean: 4.616733457623923 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1820057.554074148,
            "unit": "iter/sec",
            "range": "stddev: 4.1356424411802784e-7",
            "extra": "mean: 549.4331746606189 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.44565799552213,
            "unit": "iter/sec",
            "range": "stddev: 0.0016854501437147979",
            "extra": "mean: 10.157888325003483 msec\nrounds: 80"
          }
        ]
      }
    ]
  }
}