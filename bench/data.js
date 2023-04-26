window.BENCHMARK_DATA = {
  "lastUpdate": 1682468967303,
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
          "id": "0ddd4d8b0170220d1702d6078047ffa13ab2a42e",
          "message": "chore(flake/poetry2nix): `e2d2c7a3` -> `7b7956ff`",
          "timestamp": "2023-04-26T00:24:02Z",
          "tree_id": "2dbc74d6fbd79333d4a8a230669d9df5421fee32",
          "url": "https://github.com/ibis-project/ibis/commit/0ddd4d8b0170220d1702d6078047ffa13ab2a42e"
        },
        "date": 1682468881042,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5776430.318941079,
            "unit": "iter/sec",
            "range": "stddev: 8.681330903667348e-9",
            "extra": "mean: 173.11729645924547 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.30462568908104,
            "unit": "iter/sec",
            "range": "stddev: 0.00012940234969722436",
            "extra": "mean: 21.139581709676698 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 694.1198055220053,
            "unit": "iter/sec",
            "range": "stddev: 0.00003147134501736588",
            "extra": "mean: 1.4406734861108896 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1181.195037517219,
            "unit": "iter/sec",
            "range": "stddev: 0.00004031655706108517",
            "extra": "mean: 846.6002380960921 usec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.17335257970312,
            "unit": "iter/sec",
            "range": "stddev: 0.0005908472548764664",
            "extra": "mean: 10.39789061290398 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.83573779883672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005599330894229559",
            "extra": "mean: 9.917118888889972 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2223.9774244105906,
            "unit": "iter/sec",
            "range": "stddev: 0.00008124358683233085",
            "extra": "mean: 449.64485206724834 usec\nrounds: 1548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3601355807738165,
            "unit": "iter/sec",
            "range": "stddev: 0.0005076228020728899",
            "extra": "mean: 735.2208222000002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 174.25828027911305,
            "unit": "iter/sec",
            "range": "stddev: 0.00006212888169495304",
            "extra": "mean: 5.738608222222092 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 93.79149687538319,
            "unit": "iter/sec",
            "range": "stddev: 0.00701635519880552",
            "extra": "mean: 10.661947333335108 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2145.076081137276,
            "unit": "iter/sec",
            "range": "stddev: 0.00008644672197849883",
            "extra": "mean: 466.183931093866 usec\nrounds: 1161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.80056861599509,
            "unit": "iter/sec",
            "range": "stddev: 0.0007373351476759428",
            "extra": "mean: 9.920578958334561 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.76978814816337,
            "unit": "iter/sec",
            "range": "stddev: 0.00007051911930980468",
            "extra": "mean: 9.454495631580448 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11850.692029340427,
            "unit": "iter/sec",
            "range": "stddev: 0.000011540158098561108",
            "extra": "mean: 84.38325774766227 usec\nrounds: 5292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9315837367237697,
            "unit": "iter/sec",
            "range": "stddev: 0.0035413147939759027",
            "extra": "mean: 1.0734408089999932 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4643653.793438504,
            "unit": "iter/sec",
            "range": "stddev: 1.3851401445328821e-8",
            "extra": "mean: 215.3476646801343 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.7570921742581,
            "unit": "iter/sec",
            "range": "stddev: 0.0006652571867012048",
            "extra": "mean: 10.898340131582154 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7786.286619010417,
            "unit": "iter/sec",
            "range": "stddev: 0.000014001953055204431",
            "extra": "mean: 128.43092592539227 usec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.24481408109918,
            "unit": "iter/sec",
            "range": "stddev: 0.000635699843240117",
            "extra": "mean: 9.592803333334466 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.4137610667205,
            "unit": "iter/sec",
            "range": "stddev: 0.0007965266432989777",
            "extra": "mean: 10.591676347829402 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4669.801151490019,
            "unit": "iter/sec",
            "range": "stddev: 0.0000261605810090192",
            "extra": "mean: 214.14188046977642 usec\nrounds: 937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.06270686606983,
            "unit": "iter/sec",
            "range": "stddev: 0.0018751971796931136",
            "extra": "mean: 23.774028694445647 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2202.999181063605,
            "unit": "iter/sec",
            "range": "stddev: 0.00007461239159984861",
            "extra": "mean: 453.9266326541262 usec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.68824970811565,
            "unit": "iter/sec",
            "range": "stddev: 0.018492858015177124",
            "extra": "mean: 22.889449833332126 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6326228.887640695,
            "unit": "iter/sec",
            "range": "stddev: 8.27678441207868e-9",
            "extra": "mean: 158.07205489417572 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1632619.753488173,
            "unit": "iter/sec",
            "range": "stddev: 8.023677729243752e-8",
            "extra": "mean: 612.5124958603805 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.535903372657796,
            "unit": "iter/sec",
            "range": "stddev: 0.00007976621728675889",
            "extra": "mean: 51.18780436842186 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1775.1150425432577,
            "unit": "iter/sec",
            "range": "stddev: 0.000005790425594745708",
            "extra": "mean: 563.3437698591476 usec\nrounds: 1347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.635563652575422,
            "unit": "iter/sec",
            "range": "stddev: 0.00023579432947632876",
            "extra": "mean: 115.8002002222247 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 195.59643138950372,
            "unit": "iter/sec",
            "range": "stddev: 0.00004750791830169388",
            "extra": "mean: 5.112567713511274 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2285.0625215847094,
            "unit": "iter/sec",
            "range": "stddev: 0.00007876453430594014",
            "extra": "mean: 437.6247873106298 usec\nrounds: 1387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9254734636633802,
            "unit": "iter/sec",
            "range": "stddev: 0.0036493231666923412",
            "extra": "mean: 1.0805280100000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 261.237883598257,
            "unit": "iter/sec",
            "range": "stddev: 0.0037917907489357482",
            "extra": "mean: 3.8279287300376525 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.73870265741719,
            "unit": "iter/sec",
            "range": "stddev: 0.00023470634417585164",
            "extra": "mean: 17.940855318184003 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.36467841536532,
            "unit": "iter/sec",
            "range": "stddev: 0.00013888357170461604",
            "extra": "mean: 6.520406199996387 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2232.5262673255743,
            "unit": "iter/sec",
            "range": "stddev: 0.000082597405281592",
            "extra": "mean: 447.92306125828344 usec\nrounds: 1208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.18983642421755,
            "unit": "iter/sec",
            "range": "stddev: 0.017363703741322834",
            "extra": "mean: 25.516819952380438 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 142.67876493046808,
            "unit": "iter/sec",
            "range": "stddev: 0.01170657214905444",
            "extra": "mean: 7.00875144586044 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 266.580447621861,
            "unit": "iter/sec",
            "range": "stddev: 0.00022974885641696994",
            "extra": "mean: 3.7512128474571393 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.57199295157083,
            "unit": "iter/sec",
            "range": "stddev: 0.0007202833086504536",
            "extra": "mean: 9.943126019999795 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12697202.525275456,
            "unit": "iter/sec",
            "range": "stddev: 2.8254504971175855e-9",
            "extra": "mean: 78.75750567956175 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7935057292157874,
            "unit": "iter/sec",
            "range": "stddev: 0.014331461649071056",
            "extra": "mean: 1.2602303464000044 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.08339341365624,
            "unit": "iter/sec",
            "range": "stddev: 0.0007235282267843944",
            "extra": "mean: 9.795912602041543 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 187.6228210288724,
            "unit": "iter/sec",
            "range": "stddev: 0.003750170911598453",
            "extra": "mean: 5.329842044354053 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2190.995190756558,
            "unit": "iter/sec",
            "range": "stddev: 0.00008638229395778775",
            "extra": "mean: 456.41359881520174 usec\nrounds: 1351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138777.26488945374,
            "unit": "iter/sec",
            "range": "stddev: 3.169055807745264e-7",
            "extra": "mean: 7.205791242510604 usec\nrounds: 41153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 228.06211225180803,
            "unit": "iter/sec",
            "range": "stddev: 0.01094221493280067",
            "extra": "mean: 4.384770403669154 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6426796.024125291,
            "unit": "iter/sec",
            "range": "stddev: 4.840064157537169e-9",
            "extra": "mean: 155.59852782734453 nsec\nrounds: 63695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2185.7181115643602,
            "unit": "iter/sec",
            "range": "stddev: 0.00008488443879118077",
            "extra": "mean: 457.5155390391494 usec\nrounds: 1332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.09168041513246,
            "unit": "iter/sec",
            "range": "stddev: 0.00033059225776877187",
            "extra": "mean: 7.5704994959352465 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 275.29060425214544,
            "unit": "iter/sec",
            "range": "stddev: 0.0002544782327860301",
            "extra": "mean: 3.6325249919683977 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.12959907091421,
            "unit": "iter/sec",
            "range": "stddev: 0.0007082043267291847",
            "extra": "mean: 9.696537260000184 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7247600.198528446,
            "unit": "iter/sec",
            "range": "stddev: 3.658711462221752e-9",
            "extra": "mean: 137.9767057519007 nsec\nrounds: 59528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 124.40171684051907,
            "unit": "iter/sec",
            "range": "stddev: 0.0003093259728602538",
            "extra": "mean: 8.038474270270589 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 272.6012858480216,
            "unit": "iter/sec",
            "range": "stddev: 0.0002538630457958044",
            "extra": "mean: 3.6683612730921293 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 262.17624608991133,
            "unit": "iter/sec",
            "range": "stddev: 0.00032411840008127874",
            "extra": "mean: 3.8142280809721325 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.22802963390878,
            "unit": "iter/sec",
            "range": "stddev: 0.0008557468931391305",
            "extra": "mean: 10.077797611112436 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 208.09568790828305,
            "unit": "iter/sec",
            "range": "stddev: 0.010805094857833613",
            "extra": "mean: 4.805481603447468 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 409.47173921232115,
            "unit": "iter/sec",
            "range": "stddev: 0.00004742359768126792",
            "extra": "mean: 2.4421709833348855 msec\nrounds: 300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.32007027222335,
            "unit": "iter/sec",
            "range": "stddev: 0.0007909378241874358",
            "extra": "mean: 9.96809509090705 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 266.9589594752348,
            "unit": "iter/sec",
            "range": "stddev: 0.00027100529003139186",
            "extra": "mean: 3.745894132812455 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.65816245662248,
            "unit": "iter/sec",
            "range": "stddev: 0.00014556446206689735",
            "extra": "mean: 14.780182666668308 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.474204787068059,
            "unit": "iter/sec",
            "range": "stddev: 0.0008709675064576502",
            "extra": "mean: 404.17026320000105 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 115.78820812671263,
            "unit": "iter/sec",
            "range": "stddev: 0.00008157085069055925",
            "extra": "mean: 8.636458031250053 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.85420677224694,
            "unit": "iter/sec",
            "range": "stddev: 0.00017433149525541554",
            "extra": "mean: 33.4961169000015 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.03418822478616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000791018100080945",
            "extra": "mean: 9.430920505375676 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 269.5457358391627,
            "unit": "iter/sec",
            "range": "stddev: 0.0002519627846275896",
            "extra": "mean: 3.709945538135679 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 961624.3367333723,
            "unit": "iter/sec",
            "range": "stddev: 1.374479749767374e-7",
            "extra": "mean: 1.0399071256838086 usec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.2756477794096,
            "unit": "iter/sec",
            "range": "stddev: 0.000018776401203350755",
            "extra": "mean: 1.8406862227074048 msec\nrounds: 458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.34840680130642,
            "unit": "iter/sec",
            "range": "stddev: 0.00004135559342808188",
            "extra": "mean: 9.96528028571532 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6845136996300574,
            "unit": "iter/sec",
            "range": "stddev: 0.0009881282235925616",
            "extra": "mean: 593.6431388000074 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2279.668379580923,
            "unit": "iter/sec",
            "range": "stddev: 0.00008189790758955815",
            "extra": "mean: 438.66029329398884 usec\nrounds: 1357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2545123.6328581413,
            "unit": "iter/sec",
            "range": "stddev: 1.2891934195071105e-8",
            "extra": "mean: 392.9082214671681 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2561481.099040448,
            "unit": "iter/sec",
            "range": "stddev: 1.3651251788519031e-8",
            "extra": "mean: 390.3991328979084 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1914133.1388581113,
            "unit": "iter/sec",
            "range": "stddev: 1.0857305827181585e-7",
            "extra": "mean: 522.4296992196461 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.31993288408948,
            "unit": "iter/sec",
            "range": "stddev: 0.0008214984095679068",
            "extra": "mean: 10.170877569443745 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.38523987360533,
            "unit": "iter/sec",
            "range": "stddev: 0.015902610443554996",
            "extra": "mean: 12.138096600000083 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 769.9842538221417,
            "unit": "iter/sec",
            "range": "stddev: 0.000010817967129015281",
            "extra": "mean: 1.298727857142634 msec\nrounds: 623"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.14496698849995,
            "unit": "iter/sec",
            "range": "stddev: 0.0007235092862340977",
            "extra": "mean: 10.086240687497453 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9875.709373053951,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016738999155782285",
            "extra": "mean: 101.25854885204681 usec\nrounds: 5967"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 99.51440583893577,
            "unit": "iter/sec",
            "range": "stddev: 0.0007215519261703121",
            "extra": "mean: 10.048796368422293 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17889702208444241,
            "unit": "iter/sec",
            "range": "stddev: 0.06336990475595677",
            "extra": "mean: 5.589807970800001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 200.01450849044272,
            "unit": "iter/sec",
            "range": "stddev: 0.000029923757973818698",
            "extra": "mean: 4.99963731404906 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.609175152447197,
            "unit": "iter/sec",
            "range": "stddev: 0.000537876208722287",
            "extra": "mean: 36.2198433846135 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13582.885827279964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014722195766075843",
            "extra": "mean: 73.62205739752247 usec\nrounds: 6725"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.82433777359033,
            "unit": "iter/sec",
            "range": "stddev: 0.00008543572913627795",
            "extra": "mean: 9.023288747666237 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 425.396871156619,
            "unit": "iter/sec",
            "range": "stddev: 0.00003386895844071172",
            "extra": "mean: 2.3507460157877573 msec\nrounds: 380"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.06334481549456,
            "unit": "iter/sec",
            "range": "stddev: 0.00015883923723813384",
            "extra": "mean: 16.930974754712196 msec\nrounds: 53"
          }
        ]
      }
    ]
  }
}