window.BENCHMARK_DATA = {
  "lastUpdate": 1678098893023,
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
      }
    ]
  }
}