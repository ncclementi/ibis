window.BENCHMARK_DATA = {
  "lastUpdate": 1681377384228,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "b5472b3c55afaa891104a2e780ef2b0087ce9aad",
          "message": "fix(duckdb): disable map values and map merge for columns",
          "timestamp": "2023-04-13T11:09:22+02:00",
          "tree_id": "f358de30a53276094fb2006a66ea740abab2e04f",
          "url": "https://github.com/ibis-project/ibis/commit/b5472b3c55afaa891104a2e780ef2b0087ce9aad"
        },
        "date": 1681377297848,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1719.8962059295282,
            "unit": "iter/sec",
            "range": "stddev: 0.000017963777634241736",
            "extra": "mean: 581.4304354834856 usec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140954.09683166113,
            "unit": "iter/sec",
            "range": "stddev: 3.1378907610320836e-7",
            "extra": "mean: 7.094508229826633 usec\nrounds: 39065"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.966404018266985,
            "unit": "iter/sec",
            "range": "stddev: 0.0003057733272887485",
            "extra": "mean: 20.42216536111062 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 95.90137127047116,
            "unit": "iter/sec",
            "range": "stddev: 0.0054700706573894515",
            "extra": "mean: 10.427379574997886 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18103124300071105,
            "unit": "iter/sec",
            "range": "stddev: 0.032668319571335994",
            "extra": "mean: 5.523908378599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.643136506370666,
            "unit": "iter/sec",
            "range": "stddev: 0.0003457997484900801",
            "extra": "mean: 36.17534499999806 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6967585.585834332,
            "unit": "iter/sec",
            "range": "stddev: 7.739619541319508e-9",
            "extra": "mean: 143.52173901253923 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 270.11179599223226,
            "unit": "iter/sec",
            "range": "stddev: 0.00033043381186662226",
            "extra": "mean: 3.7021707857170276 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11618.616405339102,
            "unit": "iter/sec",
            "range": "stddev: 0.000012535123437895521",
            "extra": "mean: 86.06876801100603 usec\nrounds: 4414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.521486734953669,
            "unit": "iter/sec",
            "range": "stddev: 0.00024043807093638135",
            "extra": "mean: 181.11064066667382 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 255.85689309044608,
            "unit": "iter/sec",
            "range": "stddev: 0.004156694286766394",
            "extra": "mean: 3.908434859507566 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 376.16187798492234,
            "unit": "iter/sec",
            "range": "stddev: 0.00004607912690528743",
            "extra": "mean: 2.658429943398153 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2313.0310513279665,
            "unit": "iter/sec",
            "range": "stddev: 0.00008138916198311029",
            "extra": "mean: 432.3331497974816 usec\nrounds: 1235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.7448792396092,
            "unit": "iter/sec",
            "range": "stddev: 0.00006250887088703457",
            "extra": "mean: 10.025577329115608 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 83.26921667898792,
            "unit": "iter/sec",
            "range": "stddev: 0.014288609681663742",
            "extra": "mean: 12.009239907409134 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.4258621245853,
            "unit": "iter/sec",
            "range": "stddev: 0.00024363563805411138",
            "extra": "mean: 17.413756851059578 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.52789200010371,
            "unit": "iter/sec",
            "range": "stddev: 0.00009564590812372215",
            "extra": "mean: 16.52130888679035 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.83190738439345,
            "unit": "iter/sec",
            "range": "stddev: 0.0003041401749785777",
            "extra": "mean: 10.434937875011485 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2300.1195746744625,
            "unit": "iter/sec",
            "range": "stddev: 0.00007989532713316991",
            "extra": "mean: 434.7600059625295 usec\nrounds: 1845"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 181.99212376497738,
            "unit": "iter/sec",
            "range": "stddev: 0.003992826444923239",
            "extra": "mean: 5.494743285107156 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7838.202673486492,
            "unit": "iter/sec",
            "range": "stddev: 0.00001181129127563854",
            "extra": "mean: 127.58026829066317 usec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 738086.4356865558,
            "unit": "iter/sec",
            "range": "stddev: 8.630298201945496e-7",
            "extra": "mean: 1.35485486746524 usec\nrounds: 23420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 76.63224823343275,
            "unit": "iter/sec",
            "range": "stddev: 0.018097919234311345",
            "extra": "mean: 13.04933657895378 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 104.95738892013692,
            "unit": "iter/sec",
            "range": "stddev: 0.00004892955100405927",
            "extra": "mean: 9.527676043474266 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.229643901604211,
            "unit": "iter/sec",
            "range": "stddev: 0.0013917019098211973",
            "extra": "mean: 65.66141706666335 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 116.39726984158646,
            "unit": "iter/sec",
            "range": "stddev: 0.00014324847238447635",
            "extra": "mean: 8.591266799994303 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 156.8208501871221,
            "unit": "iter/sec",
            "range": "stddev: 0.00007684391252194247",
            "extra": "mean: 6.376703090225426 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.01394450325907,
            "unit": "iter/sec",
            "range": "stddev: 0.0006405081420205223",
            "extra": "mean: 10.524770918922316 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6256748.544644201,
            "unit": "iter/sec",
            "range": "stddev: 1.5354041429039962e-8",
            "extra": "mean: 159.8274235993244 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.61535885985796,
            "unit": "iter/sec",
            "range": "stddev: 0.0007339083475648088",
            "extra": "mean: 10.458570797874488 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8981309809682094,
            "unit": "iter/sec",
            "range": "stddev: 0.0037069308071265425",
            "extra": "mean: 1.1134233438000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.27324946201437,
            "unit": "iter/sec",
            "range": "stddev: 0.0007332561261800374",
            "extra": "mean: 22.08809864286482 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.21581258003326,
            "unit": "iter/sec",
            "range": "stddev: 0.00007245448009545777",
            "extra": "mean: 8.459105242989303 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2370.6767640503963,
            "unit": "iter/sec",
            "range": "stddev: 0.00008270108000839462",
            "extra": "mean: 421.82047555545273 usec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1839196.5101315593,
            "unit": "iter/sec",
            "range": "stddev: 8.754547144286601e-8",
            "extra": "mean: 543.7156902437082 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6650723874177279,
            "unit": "iter/sec",
            "range": "stddev: 0.045040499323364784",
            "extra": "mean: 1.5035957272000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13393.650183106027,
            "unit": "iter/sec",
            "range": "stddev: 0.00000224912925565398",
            "extra": "mean: 74.66224564094871 usec\nrounds: 7169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.09746918915249,
            "unit": "iter/sec",
            "range": "stddev: 0.0007716393191599082",
            "extra": "mean: 22.677038351352586 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 266.0360131877505,
            "unit": "iter/sec",
            "range": "stddev: 0.00032571953080871694",
            "extra": "mean: 3.758889587983213 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7931999146456024,
            "unit": "iter/sec",
            "range": "stddev: 0.0020451860762612014",
            "extra": "mean: 1.2607162223999921 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 89.57558678810278,
            "unit": "iter/sec",
            "range": "stddev: 0.012193801476392076",
            "extra": "mean: 11.163756061856104 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.20408418734843,
            "unit": "iter/sec",
            "range": "stddev: 0.0001026538721602347",
            "extra": "mean: 7.288412775194995 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 92.90891715062084,
            "unit": "iter/sec",
            "range": "stddev: 0.00014770949371784644",
            "extra": "mean: 10.763229522725288 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11951.83505498216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015785638501653245",
            "extra": "mean: 83.669160041089 usec\nrounds: 6817"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.655912654896927,
            "unit": "iter/sec",
            "range": "stddev: 0.001955141978580542",
            "extra": "mean: 603.8965866000012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.64462412593012,
            "unit": "iter/sec",
            "range": "stddev: 0.00015016033349989321",
            "extra": "mean: 14.567783169232266 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 485314.2149608388,
            "unit": "iter/sec",
            "range": "stddev: 2.930300959870206e-7",
            "extra": "mean: 2.0605207289893466 usec\nrounds: 2195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.4428809682056,
            "unit": "iter/sec",
            "range": "stddev: 0.000023061908772204565",
            "extra": "mean: 1.465324099478135 msec\nrounds: 573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2347.1132061959183,
            "unit": "iter/sec",
            "range": "stddev: 0.00007786728775267217",
            "extra": "mean: 426.0552909677284 usec\nrounds: 1251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.88611018196003,
            "unit": "iter/sec",
            "range": "stddev: 0.0001568528672185534",
            "extra": "mean: 9.018262056077509 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.123785489800746,
            "unit": "iter/sec",
            "range": "stddev: 0.021558677348750607",
            "extra": "mean: 26.230343790690196 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.5502756505021,
            "unit": "iter/sec",
            "range": "stddev: 0.0007663748922128229",
            "extra": "mean: 10.465694559142229 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.55346781949305,
            "unit": "iter/sec",
            "range": "stddev: 0.0007634216297263416",
            "extra": "mean: 9.944957858590557 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.90587402700558,
            "unit": "iter/sec",
            "range": "stddev: 0.0007866549000190332",
            "extra": "mean: 10.009421465345367 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2523297.39136808,
            "unit": "iter/sec",
            "range": "stddev: 1.3973409037496542e-8",
            "extra": "mean: 396.30683383606106 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9018185207445317,
            "unit": "iter/sec",
            "range": "stddev: 0.004189486313053981",
            "extra": "mean: 1.1088705510000068 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2556574.2390651815,
            "unit": "iter/sec",
            "range": "stddev: 1.4424312445493464e-8",
            "extra": "mean: 391.148430082462 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.353464062947326,
            "unit": "iter/sec",
            "range": "stddev: 0.0004519921865931421",
            "extra": "mean: 96.58603090909165 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2361.870109072473,
            "unit": "iter/sec",
            "range": "stddev: 0.00007501464126934807",
            "extra": "mean: 423.3933086153957 usec\nrounds: 1416"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 252.83660020066554,
            "unit": "iter/sec",
            "range": "stddev: 0.0003580290757036428",
            "extra": "mean: 3.9551235826076727 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.24277928274759,
            "unit": "iter/sec",
            "range": "stddev: 0.0005733640603662289",
            "extra": "mean: 11.332371987013229 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.75973420914255,
            "unit": "iter/sec",
            "range": "stddev: 0.0002272883772732411",
            "extra": "mean: 3.5873186736852714 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 85.41460879833971,
            "unit": "iter/sec",
            "range": "stddev: 0.013450354931617723",
            "extra": "mean: 11.70759913401884 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 280.33885663827124,
            "unit": "iter/sec",
            "range": "stddev: 0.0002403177239402385",
            "extra": "mean: 3.5671116447846787 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.4010993690953,
            "unit": "iter/sec",
            "range": "stddev: 0.0007577190244372994",
            "extra": "mean: 9.960050301080788 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68839.77874719015,
            "unit": "iter/sec",
            "range": "stddev: 4.728153112782211e-7",
            "extra": "mean: 14.526484805717322 usec\nrounds: 13624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1163.291999661998,
            "unit": "iter/sec",
            "range": "stddev: 0.00015955880865725432",
            "extra": "mean: 859.6293968243195 usec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 82.80464705308877,
            "unit": "iter/sec",
            "range": "stddev: 0.015265614013682816",
            "extra": "mean: 12.076616900001607 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.03647437133185,
            "unit": "iter/sec",
            "range": "stddev: 0.00022063993362733211",
            "extra": "mean: 3.5582569922176925 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2333.7804902260577,
            "unit": "iter/sec",
            "range": "stddev: 0.00007867104253208516",
            "extra": "mean: 428.48931345001375 usec\nrounds: 1710"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.59541499175333,
            "unit": "iter/sec",
            "range": "stddev: 0.0006521342307039105",
            "extra": "mean: 10.246382989246971 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.1295121109024,
            "unit": "iter/sec",
            "range": "stddev: 0.00007183296402117997",
            "extra": "mean: 1.3384560290954777 msec\nrounds: 653"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12637993.226098526,
            "unit": "iter/sec",
            "range": "stddev: 2.2840185594103935e-7",
            "extra": "mean: 79.12648646895254 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5165425313361687,
            "unit": "iter/sec",
            "range": "stddev: 0.0013644186727155053",
            "extra": "mean: 397.37059379999664 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5886282.471569532,
            "unit": "iter/sec",
            "range": "stddev: 8.599147242371894e-9",
            "extra": "mean: 169.8865123832782 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4695.718263039613,
            "unit": "iter/sec",
            "range": "stddev: 0.00004075371358338022",
            "extra": "mean: 212.95996565021431 usec\nrounds: 2067"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.7228547225721,
            "unit": "iter/sec",
            "range": "stddev: 0.000024540184357501374",
            "extra": "mean: 5.215862247863071 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.22075640767054,
            "unit": "iter/sec",
            "range": "stddev: 0.00003943415539382627",
            "extra": "mean: 6.280588175574227 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 238.03071732356432,
            "unit": "iter/sec",
            "range": "stddev: 0.008898008390663383",
            "extra": "mean: 4.201138454919082 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.23513737696396,
            "unit": "iter/sec",
            "range": "stddev: 0.0006814499044096965",
            "extra": "mean: 10.391214968425581 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1739078.04247525,
            "unit": "iter/sec",
            "range": "stddev: 1.1111120567416469e-7",
            "extra": "mean: 575.0173227284776 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 266.4732497986146,
            "unit": "iter/sec",
            "range": "stddev: 0.00028912800827104584",
            "extra": "mean: 3.7527218989363607 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.5775595395499,
            "unit": "iter/sec",
            "range": "stddev: 0.00011188776782429021",
            "extra": "mean: 13.591100415099708 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2233.9821667531714,
            "unit": "iter/sec",
            "range": "stddev: 0.00008263945435813143",
            "extra": "mean: 447.63114714267465 usec\nrounds: 1400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.8291793269293,
            "unit": "iter/sec",
            "range": "stddev: 0.00003733554756621314",
            "extra": "mean: 1.8627899497821436 msec\nrounds: 458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2350.3198414643643,
            "unit": "iter/sec",
            "range": "stddev: 0.00008076151964986986",
            "extra": "mean: 425.4740067109126 usec\nrounds: 1490"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 286.49078745211256,
            "unit": "iter/sec",
            "range": "stddev: 0.00010397249126357728",
            "extra": "mean: 3.490513635336884 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.33372744886512,
            "unit": "iter/sec",
            "range": "stddev: 0.00007546171730471713",
            "extra": "mean: 6.1224342064505315 msec\nrounds: 155"
          }
        ]
      }
    ]
  }
}