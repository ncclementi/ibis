window.BENCHMARK_DATA = {
  "lastUpdate": 1682469268244,
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
      },
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
          "id": "0853ee5b93a45214f88790a4da960f0bf2041278",
          "message": "chore(flake/nixpkgs): `f362b87e` -> `f3f15fa7`",
          "timestamp": "2023-04-26T00:28:27Z",
          "tree_id": "282a4de6bc66c40a2b154795673d8758aa632065",
          "url": "https://github.com/ibis-project/ibis/commit/0853ee5b93a45214f88790a4da960f0bf2041278"
        },
        "date": 1682469178568,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12300.683700635054,
            "unit": "iter/sec",
            "range": "stddev: 0.00002089547602013987",
            "extra": "mean: 81.29629411968153 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3702.9141499546413,
            "unit": "iter/sec",
            "range": "stddev: 0.00006177929525732448",
            "extra": "mean: 270.0575707412092 usec\nrounds: 1039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.5058954889901,
            "unit": "iter/sec",
            "range": "stddev: 0.0022133153986113887",
            "extra": "mean: 21.975174628569707 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4456139.1363855945,
            "unit": "iter/sec",
            "range": "stddev: 9.529513902987136e-7",
            "extra": "mean: 224.40950998038625 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1962432793258229,
            "unit": "iter/sec",
            "range": "stddev: 0.03689217371775574",
            "extra": "mean: 835.9503599999982 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.096341010205606,
            "unit": "iter/sec",
            "range": "stddev: 0.0024134088792902146",
            "extra": "mean: 26.956836517242742 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9750.665152423197,
            "unit": "iter/sec",
            "range": "stddev: 0.00003525611011760774",
            "extra": "mean: 102.5571060402463 usec\nrounds: 745"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1692.7238266315057,
            "unit": "iter/sec",
            "range": "stddev: 0.00015277803787576807",
            "extra": "mean: 590.7638235293141 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.1025457151968,
            "unit": "iter/sec",
            "range": "stddev: 0.0007472717387488645",
            "extra": "mean: 9.890947779069515 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2502667.0703448174,
            "unit": "iter/sec",
            "range": "stddev: 3.422586229164881e-7",
            "extra": "mean: 399.5737235086868 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 104.11318644240374,
            "unit": "iter/sec",
            "range": "stddev: 0.0015826552086436055",
            "extra": "mean: 9.604931269231761 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.48287571994719,
            "unit": "iter/sec",
            "range": "stddev: 0.020846446178966842",
            "extra": "mean: 30.785451652173663 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 229.54323767167003,
            "unit": "iter/sec",
            "range": "stddev: 0.0011753302533402694",
            "extra": "mean: 4.356477716979676 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1157.5760402257974,
            "unit": "iter/sec",
            "range": "stddev: 0.0001287041407590606",
            "extra": "mean: 863.8741346140331 usec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1949.611994148374,
            "unit": "iter/sec",
            "range": "stddev: 0.00013168108798141081",
            "extra": "mean: 512.9225727998346 usec\nrounds: 1250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.37484870342989,
            "unit": "iter/sec",
            "range": "stddev: 0.0014441847379582768",
            "extra": "mean: 11.065025439561795 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 88.13824038441305,
            "unit": "iter/sec",
            "range": "stddev: 0.0012337231510600771",
            "extra": "mean: 11.345813073173703 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 243.86463243110416,
            "unit": "iter/sec",
            "range": "stddev: 0.0005037033059794375",
            "extra": "mean: 4.10063562735985 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5661893.508244124,
            "unit": "iter/sec",
            "range": "stddev: 1.3962750371765045e-7",
            "extra": "mean: 176.61935861980783 nsec\nrounds: 50762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.06889279553265,
            "unit": "iter/sec",
            "range": "stddev: 0.0007262985655040591",
            "extra": "mean: 10.861431799997945 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1056243963901632,
            "unit": "iter/sec",
            "range": "stddev: 0.3361122473792529",
            "extra": "mean: 9.4675097248 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 199.1575853035319,
            "unit": "iter/sec",
            "range": "stddev: 0.0006977532730658946",
            "extra": "mean: 5.021149450451114 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 80.13314290744364,
            "unit": "iter/sec",
            "range": "stddev: 0.001517019696150411",
            "extra": "mean: 12.479230986297795 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.129953808441464,
            "unit": "iter/sec",
            "range": "stddev: 0.014683045182207088",
            "extra": "mean: 469.49374960000796 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6369.131097811075,
            "unit": "iter/sec",
            "range": "stddev: 0.000049377093227335294",
            "extra": "mean: 157.00728790834233 usec\nrounds: 3060"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 79.49290053007466,
            "unit": "iter/sec",
            "range": "stddev: 0.0015310757546633362",
            "extra": "mean: 12.579739741936683 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 133.3381120626662,
            "unit": "iter/sec",
            "range": "stddev: 0.0008911986027041536",
            "extra": "mean: 7.499731206108725 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6077439.915420479,
            "unit": "iter/sec",
            "range": "stddev: 2.1439014300870286e-7",
            "extra": "mean: 164.5429677490691 nsec\nrounds: 68028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1446.4147725477906,
            "unit": "iter/sec",
            "range": "stddev: 0.00022083098839253076",
            "extra": "mean: 691.3646202869926 usec\nrounds: 1114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.488536635291656,
            "unit": "iter/sec",
            "range": "stddev: 0.004718738112891383",
            "extra": "mean: 48.807780555566495 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 88.85401573818869,
            "unit": "iter/sec",
            "range": "stddev: 0.0005686420318959442",
            "extra": "mean: 11.254415365384647 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 82.25390265191997,
            "unit": "iter/sec",
            "range": "stddev: 0.0017886122412620073",
            "extra": "mean: 12.157477855266944 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 99.22303505754616,
            "unit": "iter/sec",
            "range": "stddev: 0.001223896350493029",
            "extra": "mean: 10.078304895834242 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.76003501329899,
            "unit": "iter/sec",
            "range": "stddev: 0.0026667820462509405",
            "extra": "mean: 28.76867067646525 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.235951305192557,
            "unit": "iter/sec",
            "range": "stddev: 0.030022932255354857",
            "extra": "mean: 809.093364599994 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 549.5334391489939,
            "unit": "iter/sec",
            "range": "stddev: 0.0003315552058306371",
            "extra": "mean: 1.8197254775771199 msec\nrounds: 446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.35417247008347,
            "unit": "iter/sec",
            "range": "stddev: 0.0014207496629554733",
            "extra": "mean: 12.14267559258478 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 176.68969396616777,
            "unit": "iter/sec",
            "range": "stddev: 0.0011390691219413753",
            "extra": "mean: 5.659639662919323 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 403.1473911009467,
            "unit": "iter/sec",
            "range": "stddev: 0.0005034198288063004",
            "extra": "mean: 2.4804823795811277 msec\nrounds: 382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 81.80879977037041,
            "unit": "iter/sec",
            "range": "stddev: 0.0015911723342329205",
            "extra": "mean: 12.223623898735903 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1657.9892901110672,
            "unit": "iter/sec",
            "range": "stddev: 0.0002064643233760098",
            "extra": "mean: 603.1402048037421 usec\nrounds: 874"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.05695044322868,
            "unit": "iter/sec",
            "range": "stddev: 0.0700542107937885",
            "extra": "mean: 165.09958425001514 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 298.2966456624235,
            "unit": "iter/sec",
            "range": "stddev: 0.0006384513835730166",
            "extra": "mean: 3.3523675661163166 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1811.9261424941556,
            "unit": "iter/sec",
            "range": "stddev: 0.00015104626186504728",
            "extra": "mean: 551.8988752066231 usec\nrounds: 1210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 128.31380967090948,
            "unit": "iter/sec",
            "range": "stddev: 0.004602656944127417",
            "extra": "mean: 7.793393420121589 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5962689563138878,
            "unit": "iter/sec",
            "range": "stddev: 0.05200747441431952",
            "extra": "mean: 1.6770955278000088 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 333.2506444490865,
            "unit": "iter/sec",
            "range": "stddev: 0.0005045981510909463",
            "extra": "mean: 3.000744384615221 msec\nrounds: 338"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 87.06838272840636,
            "unit": "iter/sec",
            "range": "stddev: 0.0012811778324420971",
            "extra": "mean: 11.485225390246585 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 46.98056009050394,
            "unit": "iter/sec",
            "range": "stddev: 0.0018682820538531285",
            "extra": "mean: 21.285399707316973 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 80.32736937422825,
            "unit": "iter/sec",
            "range": "stddev: 0.001512174115081762",
            "extra": "mean: 12.449057000002217 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1607470.2044837375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013811796014418188",
            "extra": "mean: 622.0955120727508 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 187.17777318659057,
            "unit": "iter/sec",
            "range": "stddev: 0.003918057837708423",
            "extra": "mean: 5.342514674555601 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 162.62790766467057,
            "unit": "iter/sec",
            "range": "stddev: 0.017773831794821362",
            "extra": "mean: 6.149006122995462 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 87.31699178957248,
            "unit": "iter/sec",
            "range": "stddev: 0.0016187938626164495",
            "extra": "mean: 11.452524640449436 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 27.454126904257212,
            "unit": "iter/sec",
            "range": "stddev: 0.0015778569768207119",
            "extra": "mean: 36.42439635714417 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 96.63158539499206,
            "unit": "iter/sec",
            "range": "stddev: 0.0009540559815206787",
            "extra": "mean: 10.348583187499116 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.16634776193001,
            "unit": "iter/sec",
            "range": "stddev: 0.0018316515750646844",
            "extra": "mean: 12.63162983098844 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1910.3224907821343,
            "unit": "iter/sec",
            "range": "stddev: 0.0002197399579112647",
            "extra": "mean: 523.4718246920575 usec\nrounds: 1620"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5762480.224958475,
            "unit": "iter/sec",
            "range": "stddev: 1.1091952348922968e-7",
            "extra": "mean: 173.53638727796348 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 232.30112728308893,
            "unit": "iter/sec",
            "range": "stddev: 0.0004420781741285627",
            "extra": "mean: 4.304757414204756 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 93.90270343247171,
            "unit": "iter/sec",
            "range": "stddev: 0.0010847409508264727",
            "extra": "mean: 10.649320663266424 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 76.4782454107406,
            "unit": "iter/sec",
            "range": "stddev: 0.018282747169440658",
            "extra": "mean: 13.07561378571533 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1084295.4137484925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021350096962250947",
            "extra": "mean: 922.2578896123181 nsec\nrounds: 129854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 167.21790565372436,
            "unit": "iter/sec",
            "range": "stddev: 0.0006430356410322922",
            "extra": "mean: 5.980220814813964 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.5113781175842,
            "unit": "iter/sec",
            "range": "stddev: 0.0016662665028249271",
            "extra": "mean: 24.68442315384833 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2641145.7478708965,
            "unit": "iter/sec",
            "range": "stddev: 2.686855790997042e-7",
            "extra": "mean: 378.62355790331014 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.15697138505644,
            "unit": "iter/sec",
            "range": "stddev: 0.000815873863385671",
            "extra": "mean: 6.445085844826645 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6199585595321968,
            "unit": "iter/sec",
            "range": "stddev: 0.026083234804924745",
            "extra": "mean: 1.6130110386000183 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1957.4640517008186,
            "unit": "iter/sec",
            "range": "stddev: 0.0001199415942846628",
            "extra": "mean: 510.86506499626967 usec\nrounds: 1277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4408378.0080686165,
            "unit": "iter/sec",
            "range": "stddev: 3.3155115984594975e-7",
            "extra": "mean: 226.84080134887793 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 164.65087430131305,
            "unit": "iter/sec",
            "range": "stddev: 0.0010069263651159822",
            "extra": "mean: 6.073456969138154 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.59299914687668,
            "unit": "iter/sec",
            "range": "stddev: 0.001517434277888701",
            "extra": "mean: 11.54827768817462 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 164.4516319529551,
            "unit": "iter/sec",
            "range": "stddev: 0.0006919986742076314",
            "extra": "mean: 6.080815301888104 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.48974548487373,
            "unit": "iter/sec",
            "range": "stddev: 0.00575032241966535",
            "extra": "mean: 60.643749833332095 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.10887575987698,
            "unit": "iter/sec",
            "range": "stddev: 0.0038434309765987096",
            "extra": "mean: 17.209074980770495 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1408.8630307440292,
            "unit": "iter/sec",
            "range": "stddev: 0.00627332183091931",
            "extra": "mean: 709.7922070337057 usec\nrounds: 1251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8601.92284916375,
            "unit": "iter/sec",
            "range": "stddev: 0.00007105282381824501",
            "extra": "mean: 116.25307707766953 usec\nrounds: 5462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1639.3866132369417,
            "unit": "iter/sec",
            "range": "stddev: 0.0002896007163306585",
            "extra": "mean: 609.9842416216371 usec\nrounds: 1134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.4168557648294,
            "unit": "iter/sec",
            "range": "stddev: 0.0007636801517149487",
            "extra": "mean: 8.168809709678085 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5863454012103594,
            "unit": "iter/sec",
            "range": "stddev: 0.030441699030775114",
            "extra": "mean: 1.7054793947999882 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2500202.3008657186,
            "unit": "iter/sec",
            "range": "stddev: 5.350204936472445e-7",
            "extra": "mean: 399.96763448059716 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 74.85542486430536,
            "unit": "iter/sec",
            "range": "stddev: 0.002048632234746418",
            "extra": "mean: 13.359085220780674 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 217.5830583966012,
            "unit": "iter/sec",
            "range": "stddev: 0.0005796284206852854",
            "extra": "mean: 4.5959460601810385 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 197.79833332765472,
            "unit": "iter/sec",
            "range": "stddev: 0.0007774449121894329",
            "extra": "mean: 5.055654328206553 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9924594.927723713,
            "unit": "iter/sec",
            "range": "stddev: 1.373577329834273e-7",
            "extra": "mean: 100.75977984821154 nsec\nrounds: 104156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 617.7405669563815,
            "unit": "iter/sec",
            "range": "stddev: 0.00033264838932215335",
            "extra": "mean: 1.6188025418615737 msec\nrounds: 430"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 127700.75946813375,
            "unit": "iter/sec",
            "range": "stddev: 0.000011496741908473278",
            "extra": "mean: 7.8308069910072735 usec\nrounds: 37879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.03994089040108,
            "unit": "iter/sec",
            "range": "stddev: 0.001753579564844747",
            "extra": "mean: 11.899104037973192 msec\nrounds: 79"
          }
        ]
      }
    ]
  }
}