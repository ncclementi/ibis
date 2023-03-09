window.BENCHMARK_DATA = {
  "lastUpdate": 1678389879059,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kaesuarez1423@gmail.com",
            "name": "kaesuarez",
            "username": "ksuarez1423"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "128194f85bd11f7735df2db396467c0cf6ab37f6",
          "message": "docs(blog): adds to file sneak peek blog",
          "timestamp": "2023-03-09T14:19:02-05:00",
          "tree_id": "f44ead27ffc87eb7de472f1c55a5a9bbb9811658",
          "url": "https://github.com/ibis-project/ibis/commit/128194f85bd11f7735df2db396467c0cf6ab37f6"
        },
        "date": 1678389786941,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4194.352038110789,
            "unit": "iter/sec",
            "range": "stddev: 0.00006882408292516941",
            "extra": "mean: 238.41584848238392 usec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 74.44268429076575,
            "unit": "iter/sec",
            "range": "stddev: 0.013934310978200122",
            "extra": "mean: 13.433153432432649 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2263923.811007142,
            "unit": "iter/sec",
            "range": "stddev: 6.036975632894214e-8",
            "extra": "mean: 441.71097770070014 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 103.63353785691008,
            "unit": "iter/sec",
            "range": "stddev: 0.0008093980801824083",
            "extra": "mean: 9.649385910000774 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 267.30111917359466,
            "unit": "iter/sec",
            "range": "stddev: 0.0002877867805530848",
            "extra": "mean: 3.7410991884046885 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 65393.20345915218,
            "unit": "iter/sec",
            "range": "stddev: 0.000002055779370514223",
            "extra": "mean: 15.292109074066838 usec\nrounds: 11891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 129.90773562903,
            "unit": "iter/sec",
            "range": "stddev: 0.00024328608849910095",
            "extra": "mean: 7.697770999993736 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5082810.719332273,
            "unit": "iter/sec",
            "range": "stddev: 3.923782263359702e-8",
            "extra": "mean: 196.74153833755403 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 265.4458865693094,
            "unit": "iter/sec",
            "range": "stddev: 0.00025825646518229465",
            "extra": "mean: 3.7672461718064505 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4664486.266723868,
            "unit": "iter/sec",
            "range": "stddev: 4.59705808636415e-8",
            "extra": "mean: 214.38588149218361 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 138.55992519112874,
            "unit": "iter/sec",
            "range": "stddev: 0.00015756946924856582",
            "extra": "mean: 7.217093965810142 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 102.59327637401658,
            "unit": "iter/sec",
            "range": "stddev: 0.0007420638523918938",
            "extra": "mean: 9.747227453331107 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 101.4920541665813,
            "unit": "iter/sec",
            "range": "stddev: 0.0008137598588888531",
            "extra": "mean: 9.852988080807553 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 653.5869071523605,
            "unit": "iter/sec",
            "range": "stddev: 0.00004429354716061818",
            "extra": "mean: 1.5300184092685407 msec\nrounds: 518"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14797034394454003,
            "unit": "iter/sec",
            "range": "stddev: 0.07081878467640403",
            "extra": "mean: 6.758110938599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.63840332592663,
            "unit": "iter/sec",
            "range": "stddev: 0.0007742292328881641",
            "extra": "mean: 12.556756015152876 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 434925.9931751725,
            "unit": "iter/sec",
            "range": "stddev: 6.144545829894015e-7",
            "extra": "mean: 2.299241746163551 usec\nrounds: 1787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1526.9666317095107,
            "unit": "iter/sec",
            "range": "stddev: 0.00002097171446870296",
            "extra": "mean: 654.8931582613912 usec\nrounds: 1150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6905.422246717225,
            "unit": "iter/sec",
            "range": "stddev: 0.00001965504232117052",
            "extra": "mean: 144.81373683924846 usec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.594420103543555,
            "unit": "iter/sec",
            "range": "stddev: 0.05615396899268428",
            "extra": "mean: 1.6823118767999858 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.69541677217056,
            "unit": "iter/sec",
            "range": "stddev: 0.0006406416598134833",
            "extra": "mean: 11.403104481480064 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5185286118857302,
            "unit": "iter/sec",
            "range": "stddev: 0.0037108506936922576",
            "extra": "mean: 658.5322082000062 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11934.252945795772,
            "unit": "iter/sec",
            "range": "stddev: 0.000002002024500430251",
            "extra": "mean: 83.79242542804343 usec\nrounds: 5317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 452.94963189705965,
            "unit": "iter/sec",
            "range": "stddev: 0.00005519310511125457",
            "extra": "mean: 2.207750993883723 msec\nrounds: 327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.56504886191283,
            "unit": "iter/sec",
            "range": "stddev: 0.00018747701929153793",
            "extra": "mean: 10.464076688172417 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4425.753815218228,
            "unit": "iter/sec",
            "range": "stddev: 0.00004120279518733172",
            "extra": "mean: 225.9502091059467 usec\nrounds: 1296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 548.2260951490811,
            "unit": "iter/sec",
            "range": "stddev: 0.011407533309670481",
            "extra": "mean: 1.8240649411773557 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1653686.6187398576,
            "unit": "iter/sec",
            "range": "stddev: 2.998917846120056e-7",
            "extra": "mean: 604.7094949356366 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7607337810013921,
            "unit": "iter/sec",
            "range": "stddev: 0.00525804932830375",
            "extra": "mean: 1.3145203026000103 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.89592270659419,
            "unit": "iter/sec",
            "range": "stddev: 0.000810065061824299",
            "extra": "mean: 11.00159358333301 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4870.028072443278,
            "unit": "iter/sec",
            "range": "stddev: 0.00007406680530666928",
            "extra": "mean: 205.33762539448836 usec\nrounds: 2536"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11148.746760978082,
            "unit": "iter/sec",
            "range": "stddev: 0.000006038509294152588",
            "extra": "mean: 89.69618033662016 usec\nrounds: 1902"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.6063555305353,
            "unit": "iter/sec",
            "range": "stddev: 0.0008078850531079016",
            "extra": "mean: 9.841904030299313 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 574.8390703422099,
            "unit": "iter/sec",
            "range": "stddev: 0.00009871831665585808",
            "extra": "mean: 1.7396173148159289 msec\nrounds: 486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.98341061312708,
            "unit": "iter/sec",
            "range": "stddev: 0.00045756958047510923",
            "extra": "mean: 21.746973238094824 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 130.33525151234122,
            "unit": "iter/sec",
            "range": "stddev: 0.004653993555844043",
            "extra": "mean: 7.6725213508742245 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7333199850909595,
            "unit": "iter/sec",
            "range": "stddev: 0.0034306483173460536",
            "extra": "mean: 1.3636611852000216 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.56371631214668,
            "unit": "iter/sec",
            "range": "stddev: 0.0008253936383066203",
            "extra": "mean: 11.420255353658188 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 200.147515175075,
            "unit": "iter/sec",
            "range": "stddev: 0.0014207337407608827",
            "extra": "mean: 4.99631483870919 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.0244671043319,
            "unit": "iter/sec",
            "range": "stddev: 0.0010342945304472073",
            "extra": "mean: 30.28057945161597 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.375336458567617,
            "unit": "iter/sec",
            "range": "stddev: 0.0007502946797688549",
            "extra": "mean: 32.921446034483075 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.92064047879287,
            "unit": "iter/sec",
            "range": "stddev: 0.0002921714873511488",
            "extra": "mean: 18.545773772722576 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 85.74307841501363,
            "unit": "iter/sec",
            "range": "stddev: 0.00016352569265962012",
            "extra": "mean: 11.662748976189079 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.97765601290877,
            "unit": "iter/sec",
            "range": "stddev: 0.000815994672359944",
            "extra": "mean: 9.806069673472546 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 179.38382159559748,
            "unit": "iter/sec",
            "range": "stddev: 0.00015098966359212998",
            "extra": "mean: 5.574638733332362 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.872983488425135,
            "unit": "iter/sec",
            "range": "stddev: 0.0008540207752279719",
            "extra": "mean: 19.277857812499615 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 83.14274142928193,
            "unit": "iter/sec",
            "range": "stddev: 0.00034131835038293313",
            "extra": "mean: 12.02750814814739 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 102.73796095169355,
            "unit": "iter/sec",
            "range": "stddev: 0.0008232790074434239",
            "extra": "mean: 9.733500555556 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.87261730090525,
            "unit": "iter/sec",
            "range": "stddev: 0.0008092269193186169",
            "extra": "mean: 10.217362400001443 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7665567266614348,
            "unit": "iter/sec",
            "range": "stddev: 0.020026736897529783",
            "extra": "mean: 1.3045348964000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 256.97406028190034,
            "unit": "iter/sec",
            "range": "stddev: 0.00026007962895351164",
            "extra": "mean: 3.8914433577575918 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 217.8150076870301,
            "unit": "iter/sec",
            "range": "stddev: 0.012640748446158753",
            "extra": "mean: 4.591051877549508 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4720.11762918189,
            "unit": "iter/sec",
            "range": "stddev: 0.00005705977252104652",
            "extra": "mean: 211.8591269458096 usec\nrounds: 2056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.70647592356946,
            "unit": "iter/sec",
            "range": "stddev: 0.0010259750337105777",
            "extra": "mean: 31.53929823076414 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 636260.7526899332,
            "unit": "iter/sec",
            "range": "stddev: 3.8640622636615715e-7",
            "extra": "mean: 1.5716826721941886 usec\nrounds: 4790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4331.63108698563,
            "unit": "iter/sec",
            "range": "stddev: 0.00012295891485442542",
            "extra": "mean: 230.85991856612546 usec\nrounds: 1842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 303.9180560347833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000642580277511616",
            "extra": "mean: 3.2903606091951 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.915728692065,
            "unit": "iter/sec",
            "range": "stddev: 0.0008609273984973061",
            "extra": "mean: 11.374528936711831 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 253.3027591322081,
            "unit": "iter/sec",
            "range": "stddev: 0.0001335169743664283",
            "extra": "mean: 3.947844877118227 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.927240091043596,
            "unit": "iter/sec",
            "range": "stddev: 0.0012187887572982685",
            "extra": "mean: 202.95337380001683 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.90036231447914,
            "unit": "iter/sec",
            "range": "stddev: 0.00085466111266131",
            "extra": "mean: 11.001056261364473 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1514198.9288726153,
            "unit": "iter/sec",
            "range": "stddev: 2.4699739560696025e-7",
            "extra": "mean: 660.4152076270071 nsec\nrounds: 92585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 113.76304857204826,
            "unit": "iter/sec",
            "range": "stddev: 0.0005065608677357452",
            "extra": "mean: 8.790200443395127 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4883.422518954466,
            "unit": "iter/sec",
            "range": "stddev: 0.00005900793774029348",
            "extra": "mean: 204.77441714670607 usec\nrounds: 1738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.89733953801354,
            "unit": "iter/sec",
            "range": "stddev: 0.00012125981304842076",
            "extra": "mean: 9.813798913041715 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.73790959343496,
            "unit": "iter/sec",
            "range": "stddev: 0.0008034532296674517",
            "extra": "mean: 11.143562453489087 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2268030.235797561,
            "unit": "iter/sec",
            "range": "stddev: 5.0104486980520416e-8",
            "extra": "mean: 440.91122958442924 nsec\nrounds: 113624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.8042170134239,
            "unit": "iter/sec",
            "range": "stddev: 0.0008746582483509695",
            "extra": "mean: 10.437953893614955 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5768157.396591597,
            "unit": "iter/sec",
            "range": "stddev: 2.9423054754786446e-8",
            "extra": "mean: 173.36558821899618 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.318870258018453,
            "unit": "iter/sec",
            "range": "stddev: 0.0011178628556208416",
            "extra": "mean: 46.90680077777011 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4821.280918017215,
            "unit": "iter/sec",
            "range": "stddev: 0.000060178795740878564",
            "extra": "mean: 207.4137593316709 usec\nrounds: 2036"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4524.752792374163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000544473278214079",
            "extra": "mean: 221.0065490617211 usec\nrounds: 1865"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.524755365890444,
            "unit": "iter/sec",
            "range": "stddev: 0.0005934093341499397",
            "extra": "mean: 73.93849078571942 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.56586467436854,
            "unit": "iter/sec",
            "range": "stddev: 0.0005485343263301396",
            "extra": "mean: 25.274311789470822 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8316841.355647181,
            "unit": "iter/sec",
            "range": "stddev: 1.3118304119498205e-8",
            "extra": "mean: 120.23795540129284 nsec\nrounds: 80001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 246.3180251167279,
            "unit": "iter/sec",
            "range": "stddev: 0.00006823334500038916",
            "extra": "mean: 4.059792211820913 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 244.40511189933306,
            "unit": "iter/sec",
            "range": "stddev: 0.00034678346188389656",
            "extra": "mean: 4.0915674481141195 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.01656011630196,
            "unit": "iter/sec",
            "range": "stddev: 0.0003928077843517671",
            "extra": "mean: 13.695523295087904 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 140.08593858633864,
            "unit": "iter/sec",
            "range": "stddev: 0.0002069473301280902",
            "extra": "mean: 7.138475210941131 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10512.005958951177,
            "unit": "iter/sec",
            "range": "stddev: 0.000014697964048004788",
            "extra": "mean: 95.12932202521066 usec\nrounds: 5925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 257.72102919508984,
            "unit": "iter/sec",
            "range": "stddev: 0.0002967498469440792",
            "extra": "mean: 3.880164545063256 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.241659073184809,
            "unit": "iter/sec",
            "range": "stddev: 0.005992307158221154",
            "extra": "mean: 446.09816539999656 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 269.72456907840666,
            "unit": "iter/sec",
            "range": "stddev: 0.00031061238335635",
            "extra": "mean: 3.7074857637804155 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.153573162962171,
            "unit": "iter/sec",
            "range": "stddev: 0.0006694851874129536",
            "extra": "mean: 109.2469554999866 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 265.66433070661265,
            "unit": "iter/sec",
            "range": "stddev: 0.0002666891058134605",
            "extra": "mean: 3.7641485303661395 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 65.59129954354839,
            "unit": "iter/sec",
            "range": "stddev: 0.0013308840775685003",
            "extra": "mean: 15.245924489361043 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4753.391711884162,
            "unit": "iter/sec",
            "range": "stddev: 0.00005784805927433619",
            "extra": "mean: 210.3760978713066 usec\nrounds: 2207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144556.90516933458,
            "unit": "iter/sec",
            "range": "stddev: 0.000001155313603100783",
            "extra": "mean: 6.917690987010242 usec\nrounds: 32154"
          }
        ]
      }
    ]
  }
}