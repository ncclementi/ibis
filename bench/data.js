window.BENCHMARK_DATA = {
  "lastUpdate": 1675876850598,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "16199c6269c7cb4c49afb42323e44211185b6c50",
          "message": "refactor(tests): reorganize datatype test files to the datatypes subpackage",
          "timestamp": "2023-02-08T12:15:34-05:00",
          "tree_id": "61e8e00e6c1383ad0fcdbf3bc8154c0b94e4308a",
          "url": "https://github.com/ibis-project/ibis/commit/16199c6269c7cb4c49afb42323e44211185b6c50"
        },
        "date": 1675876769458,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4023.5481899940555,
            "unit": "iter/sec",
            "range": "stddev: 0.0015234573923396794",
            "extra": "mean: 248.53685174862474 usec\nrounds: 715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4939.9714335383005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000840402314608302",
            "extra": "mean: 202.43032038825794 usec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.94845165697967,
            "unit": "iter/sec",
            "range": "stddev: 0.0005316619472949818",
            "extra": "mean: 10.532030618179016 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 418.08373503385366,
            "unit": "iter/sec",
            "range": "stddev: 0.00003291417630345956",
            "extra": "mean: 2.391865351851171 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.275880008958498,
            "unit": "iter/sec",
            "range": "stddev: 0.002095174525874226",
            "extra": "mean: 439.3904758000076 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 393391.78056530753,
            "unit": "iter/sec",
            "range": "stddev: 2.7042700288184986e-7",
            "extra": "mean: 2.5419951544564325 usec\nrounds: 2064"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 96.30020493378827,
            "unit": "iter/sec",
            "range": "stddev: 0.006535756156371635",
            "extra": "mean: 10.384193893331334 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119505.05210520866,
            "unit": "iter/sec",
            "range": "stddev: 3.0017195431450975e-7",
            "extra": "mean: 8.36784706908985 usec\nrounds: 37736"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 255.8602949843676,
            "unit": "iter/sec",
            "range": "stddev: 0.00019782681133986878",
            "extra": "mean: 3.908382893332853 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.29279866839296,
            "unit": "iter/sec",
            "range": "stddev: 0.00003741932325134918",
            "extra": "mean: 10.384992583336754 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4505553.556095721,
            "unit": "iter/sec",
            "range": "stddev: 1.0406627440333114e-8",
            "extra": "mean: 221.94831057902138 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 265.9912093955701,
            "unit": "iter/sec",
            "range": "stddev: 0.000013474400741676722",
            "extra": "mean: 3.7595227386362433 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6038.88689570743,
            "unit": "iter/sec",
            "range": "stddev: 0.00005131124715855884",
            "extra": "mean: 165.59343092032762 usec\nrounds: 304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 162.22383269786616,
            "unit": "iter/sec",
            "range": "stddev: 0.0005902136284706645",
            "extra": "mean: 6.164322364781323 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8718816227822803,
            "unit": "iter/sec",
            "range": "stddev: 0.005653632485164995",
            "extra": "mean: 1.1469446928000138 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10340.991216419228,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018227784469439686",
            "extra": "mean: 96.70252871042179 usec\nrounds: 4615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.32238857411883,
            "unit": "iter/sec",
            "range": "stddev: 0.0005644326809377483",
            "extra": "mean: 10.490714877779638 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2028483.848530323,
            "unit": "iter/sec",
            "range": "stddev: 2.770638971737299e-8",
            "extra": "mean: 492.97902999047557 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4926.508395765022,
            "unit": "iter/sec",
            "range": "stddev: 0.00010781936040899432",
            "extra": "mean: 202.98351685742193 usec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 93.28542671551573,
            "unit": "iter/sec",
            "range": "stddev: 0.000558946980951918",
            "extra": "mean: 10.7197880227274 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 247.439887736787,
            "unit": "iter/sec",
            "range": "stddev: 0.0002032415030388502",
            "extra": "mean: 4.041385603374284 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.161413123869275,
            "unit": "iter/sec",
            "range": "stddev: 0.00036306284284672057",
            "extra": "mean: 109.15346644444905 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6112.472022653817,
            "unit": "iter/sec",
            "range": "stddev: 0.000046551694196918674",
            "extra": "mean: 163.59993081258077 usec\nrounds: 2645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1454.628917439076,
            "unit": "iter/sec",
            "range": "stddev: 0.000010058617203026495",
            "extra": "mean: 687.4605530051844 usec\nrounds: 1132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.8780089694052,
            "unit": "iter/sec",
            "range": "stddev: 0.000569534106958565",
            "extra": "mean: 6.215889955414441 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 149.22469090905685,
            "unit": "iter/sec",
            "range": "stddev: 0.0006144701570669979",
            "extra": "mean: 6.70130387878932 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.9224514488301665,
            "unit": "iter/sec",
            "range": "stddev: 0.0001491750528258194",
            "extra": "mean: 203.15081019999752 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5484501.863041398,
            "unit": "iter/sec",
            "range": "stddev: 4.306168343827218e-9",
            "extra": "mean: 182.33196468380262 nsec\nrounds: 55556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 277.2586970316339,
            "unit": "iter/sec",
            "range": "stddev: 0.00003608690410245873",
            "extra": "mean: 3.6067398812232923 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7482114572259331,
            "unit": "iter/sec",
            "range": "stddev: 0.02419342685340956",
            "extra": "mean: 1.3365205655999943 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 140.97319247815588,
            "unit": "iter/sec",
            "range": "stddev: 0.000308097852753156",
            "extra": "mean: 7.093547237039073 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5827188625189463,
            "unit": "iter/sec",
            "range": "stddev: 0.002734791034081073",
            "extra": "mean: 631.8241499999999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5897837949933684,
            "unit": "iter/sec",
            "range": "stddev: 0.003336612500284775",
            "extra": "mean: 1.6955365821999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58185.81246252226,
            "unit": "iter/sec",
            "range": "stddev: 4.969842877862728e-7",
            "extra": "mean: 17.186320129913188 usec\nrounds: 13532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.03982123395051,
            "unit": "iter/sec",
            "range": "stddev: 0.0006886857749572744",
            "extra": "mean: 28.538958384613213 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6020.62464498017,
            "unit": "iter/sec",
            "range": "stddev: 0.000050114024977725985",
            "extra": "mean: 166.0957224486287 usec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15508842318199711,
            "unit": "iter/sec",
            "range": "stddev: 0.09503575956527685",
            "extra": "mean: 6.4479345362 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10827.4515952577,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014788034334002084",
            "extra": "mean: 92.35783611704055 usec\nrounds: 5388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 555638.4924268413,
            "unit": "iter/sec",
            "range": "stddev: 8.065971650336615e-7",
            "extra": "mean: 1.799731324646602 usec\nrounds: 21740"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 252.85790909844684,
            "unit": "iter/sec",
            "range": "stddev: 0.00018883454705728644",
            "extra": "mean: 3.9547902755561557 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 252.75256826798156,
            "unit": "iter/sec",
            "range": "stddev: 0.00010466426776580306",
            "extra": "mean: 3.9564385313772457 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.44272308134987,
            "unit": "iter/sec",
            "range": "stddev: 0.00006411003956692762",
            "extra": "mean: 14.610757067795461 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 159.79043559434334,
            "unit": "iter/sec",
            "range": "stddev: 0.0006065534455891589",
            "extra": "mean: 6.258196845640244 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 147.40626324839704,
            "unit": "iter/sec",
            "range": "stddev: 0.010066130920629449",
            "extra": "mean: 6.783972254387057 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.85311176158435,
            "unit": "iter/sec",
            "range": "stddev: 0.00017208295636101208",
            "extra": "mean: 21.34329956756291 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.98351846377116,
            "unit": "iter/sec",
            "range": "stddev: 0.00008421897127694682",
            "extra": "mean: 13.701723636363154 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11045258.312503338,
            "unit": "iter/sec",
            "range": "stddev: 2.9603297582440937e-9",
            "extra": "mean: 90.53658789211852 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.693728197658702,
            "unit": "iter/sec",
            "range": "stddev: 0.00013674923744208273",
            "extra": "mean: 73.02613178571603 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 993.6419883207324,
            "unit": "iter/sec",
            "range": "stddev: 0.000010976356634091307",
            "extra": "mean: 1.0063986946546137 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.32124402785033,
            "unit": "iter/sec",
            "range": "stddev: 0.00061702460796675",
            "extra": "mean: 11.071592411765858 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.82073720402497,
            "unit": "iter/sec",
            "range": "stddev: 0.00003600290705205608",
            "extra": "mean: 8.141947547007796 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.48879947017565,
            "unit": "iter/sec",
            "range": "stddev: 0.00017249569671302738",
            "extra": "mean: 11.300865261902903 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.68429602848464,
            "unit": "iter/sec",
            "range": "stddev: 0.0001240778714477785",
            "extra": "mean: 22.379226906977248 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.318063262624854,
            "unit": "iter/sec",
            "range": "stddev: 0.00023017494729162506",
            "extra": "mean: 36.605816100006905 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.75009226627287,
            "unit": "iter/sec",
            "range": "stddev: 0.00015701999383012754",
            "extra": "mean: 6.956517274073592 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.93469060432006,
            "unit": "iter/sec",
            "range": "stddev: 0.00008896217617051431",
            "extra": "mean: 17.260815403844276 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.2018366573461,
            "unit": "iter/sec",
            "range": "stddev: 0.00002091340468716385",
            "extra": "mean: 6.934724433338602 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 515.5774236390841,
            "unit": "iter/sec",
            "range": "stddev: 0.00001920950172656309",
            "extra": "mean: 1.93957290243962 msec\nrounds: 451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.96991180746221,
            "unit": "iter/sec",
            "range": "stddev: 0.0005634937366592117",
            "extra": "mean: 10.873121223531088 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.55933226189026,
            "unit": "iter/sec",
            "range": "stddev: 0.013925482658144247",
            "extra": "mean: 13.594468155851947 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8705203095816235,
            "unit": "iter/sec",
            "range": "stddev: 0.004959285195788148",
            "extra": "mean: 1.1487382764000131 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 239.56145522456305,
            "unit": "iter/sec",
            "range": "stddev: 0.00021385018413022465",
            "extra": "mean: 4.174294228855004 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.63044985638415,
            "unit": "iter/sec",
            "range": "stddev: 0.00011118842439451178",
            "extra": "mean: 14.786239070175318 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 143.88964099958184,
            "unit": "iter/sec",
            "range": "stddev: 0.0006320338713151365",
            "extra": "mean: 6.949770623188267 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1571040.5850507177,
            "unit": "iter/sec",
            "range": "stddev: 9.894702607832816e-8",
            "extra": "mean: 636.5207936163642 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 331.26511887747665,
            "unit": "iter/sec",
            "range": "stddev: 0.00023656444758826355",
            "extra": "mean: 3.0187301439662435 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.75210679958276,
            "unit": "iter/sec",
            "range": "stddev: 0.0005027976466646803",
            "extra": "mean: 26.488587916663025 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9800.247118402194,
            "unit": "iter/sec",
            "range": "stddev: 0.00001579459030462806",
            "extra": "mean: 102.03824331350506 usec\nrounds: 4225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.59676950310148,
            "unit": "iter/sec",
            "range": "stddev: 0.00006757995975234556",
            "extra": "mean: 9.84283265000343 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19460.2370664119,
            "unit": "iter/sec",
            "range": "stddev: 0.000013068977567301762",
            "extra": "mean: 51.386835452584805 usec\nrounds: 6448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 248.58009092536224,
            "unit": "iter/sec",
            "range": "stddev: 0.00020487125352329572",
            "extra": "mean: 4.02284831531523 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4524.068126674566,
            "unit": "iter/sec",
            "range": "stddev: 0.000020134672352391472",
            "extra": "mean: 221.039995862099 usec\nrounds: 2175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4577173.0591727765,
            "unit": "iter/sec",
            "range": "stddev: 1.032249092472249e-8",
            "extra": "mean: 218.47546227158645 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5967.927017688276,
            "unit": "iter/sec",
            "range": "stddev: 0.00004339558868295518",
            "extra": "mean: 167.56237082593515 usec\nrounds: 2516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 162.95039600207863,
            "unit": "iter/sec",
            "range": "stddev: 0.0005994230042223208",
            "extra": "mean: 6.136836881250929 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1539614.133562524,
            "unit": "iter/sec",
            "range": "stddev: 1.1207429050277204e-7",
            "extra": "mean: 649.5133931292854 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 632.7937590266264,
            "unit": "iter/sec",
            "range": "stddev: 0.00006252223311126134",
            "extra": "mean: 1.5802937145559341 msec\nrounds: 529"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 163.59097870681018,
            "unit": "iter/sec",
            "range": "stddev: 0.0006023321290747763",
            "extra": "mean: 6.112806512345725 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 250.87500044460543,
            "unit": "iter/sec",
            "range": "stddev: 0.00020060881849702037",
            "extra": "mean: 3.986048822034005 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2021261.2668939312,
            "unit": "iter/sec",
            "range": "stddev: 5.537527303774687e-7",
            "extra": "mean: 494.7405940927582 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 223.70437910599006,
            "unit": "iter/sec",
            "range": "stddev: 0.000392660077227013",
            "extra": "mean: 4.470185179192244 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.82540942313862,
            "unit": "iter/sec",
            "range": "stddev: 0.014931502822469146",
            "extra": "mean: 12.849273873561987 msec\nrounds: 87"
          }
        ]
      }
    ]
  }
}