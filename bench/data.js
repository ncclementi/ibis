window.BENCHMARK_DATA = {
  "lastUpdate": 1678970223611,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mborch@gmail.com",
            "name": "Malthe Borch",
            "username": "malthe"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "6b30ee126c543f23542b1a66363cb0f6ade97715",
          "message": "style(snowflake): use mapping instead of dict",
          "timestamp": "2023-03-16T08:27:57-04:00",
          "tree_id": "59c2978543f35b52dd812f3e906dbd5e8285f523",
          "url": "https://github.com/ibis-project/ibis/commit/6b30ee126c543f23542b1a66363cb0f6ade97715"
        },
        "date": 1678970144433,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71650.93640370225,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018461615286276669",
            "extra": "mean: 13.956551724121354 usec\nrounds: 8555"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 110.32753330150868,
            "unit": "iter/sec",
            "range": "stddev: 0.007581128753312796",
            "extra": "mean: 9.063920583333893 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.75330866579174,
            "unit": "iter/sec",
            "range": "stddev: 0.0002463435341350199",
            "extra": "mean: 3.3360766039615073 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.410721613244974,
            "unit": "iter/sec",
            "range": "stddev: 0.002017218163137347",
            "extra": "mean: 96.05482089999953 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 303.7174076433909,
            "unit": "iter/sec",
            "range": "stddev: 0.0003028268712895415",
            "extra": "mean: 3.2925343586961855 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.60535673294196,
            "unit": "iter/sec",
            "range": "stddev: 0.0006734690966242826",
            "extra": "mean: 8.291505676769509 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 281.2323761042733,
            "unit": "iter/sec",
            "range": "stddev: 0.00019398693767024158",
            "extra": "mean: 3.5557783703723618 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5627.679439489617,
            "unit": "iter/sec",
            "range": "stddev: 0.00005230462864574795",
            "extra": "mean: 177.69313457745412 usec\nrounds: 2571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.971239682497,
            "unit": "iter/sec",
            "range": "stddev: 0.0006409425562084303",
            "extra": "mean: 8.697827411112433 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.87741981158736,
            "unit": "iter/sec",
            "range": "stddev: 0.0004353444477141314",
            "extra": "mean: 8.781372124996523 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 99.98815674259473,
            "unit": "iter/sec",
            "range": "stddev: 0.05019181127399973",
            "extra": "mean: 10.001184466019888 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1795521.6718833717,
            "unit": "iter/sec",
            "range": "stddev: 1.9161315813134516e-7",
            "extra": "mean: 556.9412030271251 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.43170468228709,
            "unit": "iter/sec",
            "range": "stddev: 0.00021508795038188987",
            "extra": "mean: 8.372986073172159 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 283.5590387667184,
            "unit": "iter/sec",
            "range": "stddev: 0.00006590847994139267",
            "extra": "mean: 3.526602447057565 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.44791122715318,
            "unit": "iter/sec",
            "range": "stddev: 0.00010041947036651709",
            "extra": "mean: 6.1181571088433255 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.5215075524357,
            "unit": "iter/sec",
            "range": "stddev: 0.000037764321653489135",
            "extra": "mean: 5.088501571428159 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5482.925739559511,
            "unit": "iter/sec",
            "range": "stddev: 0.00004996824132900855",
            "extra": "mean: 182.38437788514318 usec\nrounds: 1863"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12852.809697793993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022560114157846656",
            "extra": "mean: 77.80399955440373 usec\nrounds: 2246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5322.5667886598685,
            "unit": "iter/sec",
            "range": "stddev: 0.00005150774625207522",
            "extra": "mean: 187.8792769929305 usec\nrounds: 1982"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 691.3143134534818,
            "unit": "iter/sec",
            "range": "stddev: 0.000041334878763264055",
            "extra": "mean: 1.446520027922566 msec\nrounds: 573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.41146015521178,
            "unit": "iter/sec",
            "range": "stddev: 0.000653674564305302",
            "extra": "mean: 8.304857350878299 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.5563964509203,
            "unit": "iter/sec",
            "range": "stddev: 0.00006791430454255041",
            "extra": "mean: 7.431828039217385 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.23128539016043,
            "unit": "iter/sec",
            "range": "stddev: 0.0010994251556267884",
            "extra": "mean: 17.783694487179265 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 311.60895499256486,
            "unit": "iter/sec",
            "range": "stddev: 0.00024817932585539633",
            "extra": "mean: 3.209150391791084 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8419.338273521584,
            "unit": "iter/sec",
            "range": "stddev: 0.00001506080286683043",
            "extra": "mean: 118.7741800498683 usec\nrounds: 4421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6985399.616898392,
            "unit": "iter/sec",
            "range": "stddev: 5.383586969115348e-9",
            "extra": "mean: 143.15573264860907 nsec\nrounds: 57804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5531.450472747232,
            "unit": "iter/sec",
            "range": "stddev: 0.00005903501696217383",
            "extra": "mean: 180.78440816326125 usec\nrounds: 2009"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 158.6413493680605,
            "unit": "iter/sec",
            "range": "stddev: 0.0034879087896927405",
            "extra": "mean: 6.303526816832103 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.13114812134965,
            "unit": "iter/sec",
            "range": "stddev: 0.0003947993120102404",
            "extra": "mean: 11.74658185714301 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 540.6017978730245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000319032047964086",
            "extra": "mean: 1.849790370536056 msec\nrounds: 448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.93163112776608,
            "unit": "iter/sec",
            "range": "stddev: 0.0006752772367511068",
            "extra": "mean: 8.338083878261237 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.94530030336267,
            "unit": "iter/sec",
            "range": "stddev: 0.02088507992700752",
            "extra": "mean: 12.203262374998758 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2705218.159013685,
            "unit": "iter/sec",
            "range": "stddev: 2.215531915841817e-8",
            "extra": "mean: 369.6559542408426 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12069.42057713256,
            "unit": "iter/sec",
            "range": "stddev: 0.00005107609027810346",
            "extra": "mean: 82.85401884947645 usec\nrounds: 4085"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.28927679682783,
            "unit": "iter/sec",
            "range": "stddev: 0.000766196954490739",
            "extra": "mean: 10.83549502941139 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7414387557679087,
            "unit": "iter/sec",
            "range": "stddev: 0.0028182986157856914",
            "extra": "mean: 574.2378230000043 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.31912511640249,
            "unit": "iter/sec",
            "range": "stddev: 0.0008024250618994107",
            "extra": "mean: 26.79591220000172 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.711611344421875,
            "unit": "iter/sec",
            "range": "stddev: 0.0011710447008050767",
            "extra": "mean: 25.83204277142792 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1909923.4621267924,
            "unit": "iter/sec",
            "range": "stddev: 1.2412528965135322e-7",
            "extra": "mean: 523.5811904663716 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.09875203222654,
            "unit": "iter/sec",
            "range": "stddev: 0.00040450607040309466",
            "extra": "mean: 13.495503940000049 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12056740.116528181,
            "unit": "iter/sec",
            "range": "stddev: 3.80381248042226e-9",
            "extra": "mean: 82.94115908061502 nsec\nrounds: 119034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149746.09037200743,
            "unit": "iter/sec",
            "range": "stddev: 2.77872211529604e-7",
            "extra": "mean: 6.6779706736633 usec\nrounds: 35088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5773.012917157991,
            "unit": "iter/sec",
            "range": "stddev: 0.00004735366899132302",
            "extra": "mean: 173.21977524559085 usec\nrounds: 2238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5634604.384630737,
            "unit": "iter/sec",
            "range": "stddev: 1.0217447801673802e-8",
            "extra": "mean: 177.47474919917005 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.94302335456068,
            "unit": "iter/sec",
            "range": "stddev: 0.0006716306143400817",
            "extra": "mean: 9.264146666665969 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.45487543941704,
            "unit": "iter/sec",
            "range": "stddev: 0.00013037988555093344",
            "extra": "mean: 8.972240972478275 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 302.3457040134752,
            "unit": "iter/sec",
            "range": "stddev: 0.00025344778374176773",
            "extra": "mean: 3.3074721642330034 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1710182632816086,
            "unit": "iter/sec",
            "range": "stddev: 0.014344249432992512",
            "extra": "mean: 5.847328705199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5348.253418882799,
            "unit": "iter/sec",
            "range": "stddev: 0.000050710912845462835",
            "extra": "mean: 186.9769290417975 usec\nrounds: 2128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.93890213319617,
            "unit": "iter/sec",
            "range": "stddev: 0.00017836114463032975",
            "extra": "mean: 15.88842458490494 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1751.5143076407676,
            "unit": "iter/sec",
            "range": "stddev: 0.000012364014398815362",
            "extra": "mean: 570.9345311297898 usec\nrounds: 1301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.38467394736986,
            "unit": "iter/sec",
            "range": "stddev: 0.0007184614270128593",
            "extra": "mean: 9.489045821780591 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 298.9736871064676,
            "unit": "iter/sec",
            "range": "stddev: 0.0004665839589432522",
            "extra": "mean: 3.3447759556308037 msec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.843527357085484,
            "unit": "iter/sec",
            "range": "stddev: 0.03332488927748656",
            "extra": "mean: 1.1854980062000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5207.847556825549,
            "unit": "iter/sec",
            "range": "stddev: 0.000022726371850550408",
            "extra": "mean: 192.01790933557038 usec\nrounds: 2228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.48002439041834,
            "unit": "iter/sec",
            "range": "stddev: 0.000048056968807838764",
            "extra": "mean: 10.473394894737297 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 739.2822363243044,
            "unit": "iter/sec",
            "range": "stddev: 0.000011405337375745544",
            "extra": "mean: 1.3526633684206708 msec\nrounds: 608"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.4193344724725,
            "unit": "iter/sec",
            "range": "stddev: 0.0009276703822713822",
            "extra": "mean: 6.560847437505402 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.550302370530638,
            "unit": "iter/sec",
            "range": "stddev: 0.002637356812777055",
            "extra": "mean: 392.1103676000314 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.2940998119065,
            "unit": "iter/sec",
            "range": "stddev: 0.00025247636956815495",
            "extra": "mean: 3.5051548582998975 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1137.1447869403883,
            "unit": "iter/sec",
            "range": "stddev: 0.00001091363811739008",
            "extra": "mean: 879.3954925393526 usec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2724915.6548624174,
            "unit": "iter/sec",
            "range": "stddev: 1.6232775981890533e-8",
            "extra": "mean: 366.98383607390366 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6196529.886487787,
            "unit": "iter/sec",
            "range": "stddev: 8.511723699463372e-9",
            "extra": "mean: 161.38064663911487 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.18639980475207,
            "unit": "iter/sec",
            "range": "stddev: 0.0004100223986816684",
            "extra": "mean: 17.797901333329833 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13923.188929752965,
            "unit": "iter/sec",
            "range": "stddev: 0.000001324708991856559",
            "extra": "mean: 71.82262662995716 usec\nrounds: 6519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.9234720704778,
            "unit": "iter/sec",
            "range": "stddev: 0.000051850930764087867",
            "extra": "mean: 6.063418308175464 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.6434608450268815,
            "unit": "iter/sec",
            "range": "stddev: 0.00009043864801778933",
            "extra": "mean: 177.19623249999472 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5235.554088685773,
            "unit": "iter/sec",
            "range": "stddev: 0.000048065573797496925",
            "extra": "mean: 191.00175130671212 usec\nrounds: 2103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 109.2918692525153,
            "unit": "iter/sec",
            "range": "stddev: 0.0006388734879000494",
            "extra": "mean: 9.14981148039048 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.03503671311044,
            "unit": "iter/sec",
            "range": "stddev: 0.0006784416916302508",
            "extra": "mean: 9.256256400000337 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8108261038238685,
            "unit": "iter/sec",
            "range": "stddev: 0.03131685285973931",
            "extra": "mean: 1.2333100714000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.27541532398931,
            "unit": "iter/sec",
            "range": "stddev: 0.0009228468470893854",
            "extra": "mean: 22.58589767441843 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.40063259186768,
            "unit": "iter/sec",
            "range": "stddev: 0.0002711600833285916",
            "extra": "mean: 10.482110787232285 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.34778327107256,
            "unit": "iter/sec",
            "range": "stddev: 0.017198701602902444",
            "extra": "mean: 9.96534220689927 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.79811034529405,
            "unit": "iter/sec",
            "range": "stddev: 0.0007144022799469382",
            "extra": "mean: 8.34737707562916 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5127.121588884733,
            "unit": "iter/sec",
            "range": "stddev: 0.00006114214413712687",
            "extra": "mean: 195.04121028998713 usec\nrounds: 3110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.78890042347277,
            "unit": "iter/sec",
            "range": "stddev: 0.0006693009532376796",
            "extra": "mean: 27.94162402777071 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 335.114840487546,
            "unit": "iter/sec",
            "range": "stddev: 0.000011858469158535125",
            "extra": "mean: 2.9840516717944734 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.06032084791124,
            "unit": "iter/sec",
            "range": "stddev: 0.001172675782956105",
            "extra": "mean: 41.56220552174447 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 507202.96858609095,
            "unit": "iter/sec",
            "range": "stddev: 4.0117628538317946e-7",
            "extra": "mean: 1.9715972932643893 usec\nrounds: 2143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8325040094891554,
            "unit": "iter/sec",
            "range": "stddev: 0.0039994077468465455",
            "extra": "mean: 1.2011954160000073 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 765077.6329081625,
            "unit": "iter/sec",
            "range": "stddev: 1.5718881156494442e-7",
            "extra": "mean: 1.3070569011393864 usec\nrounds: 24692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.67775271848853,
            "unit": "iter/sec",
            "range": "stddev: 0.007270348899297126",
            "extra": "mean: 1.4754643879999776 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 294.5694784180052,
            "unit": "iter/sec",
            "range": "stddev: 0.0002725111670130115",
            "extra": "mean: 3.394784841153714 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.16563078793945,
            "unit": "iter/sec",
            "range": "stddev: 0.016374511848009726",
            "extra": "mean: 11.605555380440267 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.62987763143057,
            "unit": "iter/sec",
            "range": "stddev: 0.0007703371515011999",
            "extra": "mean: 9.839626134615505 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.581933954010362,
            "unit": "iter/sec",
            "range": "stddev: 0.0003246953644080088",
            "extra": "mean: 64.17688606250493 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.6660514172752,
            "unit": "iter/sec",
            "range": "stddev: 0.00022177243053281132",
            "extra": "mean: 3.218890494915509 msec\nrounds: 295"
          }
        ]
      }
    ]
  }
}