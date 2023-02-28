window.BENCHMARK_DATA = {
  "lastUpdate": 1677590566558,
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
          "id": "43fcd0fa6ec8c3447372f3cbcf0548ffa3ad8c0c",
          "message": "chore: bump ruff and fix lints",
          "timestamp": "2023-02-28T08:15:27-05:00",
          "tree_id": "79f100dedd5c2e3743edb2406723d584fd0c5843",
          "url": "https://github.com/ibis-project/ibis/commit/43fcd0fa6ec8c3447372f3cbcf0548ffa3ad8c0c"
        },
        "date": 1677590475338,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 174.25074297224614,
            "unit": "iter/sec",
            "range": "stddev: 0.00022239032033850926",
            "extra": "mean: 5.738856448716981 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7936973161559878,
            "unit": "iter/sec",
            "range": "stddev: 0.014079775941979428",
            "extra": "mean: 1.2599261452000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4924.21529261648,
            "unit": "iter/sec",
            "range": "stddev: 0.00005723115656937513",
            "extra": "mean: 203.07804199776376 usec\nrounds: 881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 285.77198263266274,
            "unit": "iter/sec",
            "range": "stddev: 0.0002527623738215392",
            "extra": "mean: 3.499293355449127 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147149.00585679273,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013220286044966681",
            "extra": "mean: 6.795832524843645 usec\nrounds: 34841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 113.00500288249022,
            "unit": "iter/sec",
            "range": "stddev: 0.00799688659996117",
            "extra": "mean: 8.849165740386411 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.612054091070583,
            "unit": "iter/sec",
            "range": "stddev: 0.016826001446474",
            "extra": "mean: 1.633842522399999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1478.3244739414163,
            "unit": "iter/sec",
            "range": "stddev: 0.000023002663438988053",
            "extra": "mean: 676.4414833327237 usec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11169.652169866868,
            "unit": "iter/sec",
            "range": "stddev: 0.000013366067895967325",
            "extra": "mean: 89.52830265366438 usec\nrounds: 4824"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 272.0140466909611,
            "unit": "iter/sec",
            "range": "stddev: 0.00030230094873843523",
            "extra": "mean: 3.6762807368404538 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 125.22893954129839,
            "unit": "iter/sec",
            "range": "stddev: 0.0007532654207669764",
            "extra": "mean: 7.985374655913435 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.96577017449877,
            "unit": "iter/sec",
            "range": "stddev: 0.0005532254403757253",
            "extra": "mean: 8.405779229884375 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 117.08652735355723,
            "unit": "iter/sec",
            "range": "stddev: 0.0007686441740275382",
            "extra": "mean: 8.54069227777485 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7107.320540125219,
            "unit": "iter/sec",
            "range": "stddev: 0.000017598888381584896",
            "extra": "mean: 140.7000000006165 usec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4485.520341124971,
            "unit": "iter/sec",
            "range": "stddev: 0.00005973967618750928",
            "extra": "mean: 222.93957533346048 usec\nrounds: 1500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1596697.391738106,
            "unit": "iter/sec",
            "range": "stddev: 3.9004131307478005e-7",
            "extra": "mean: 626.2927497560679 nsec\nrounds: 120468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2965639794046844,
            "unit": "iter/sec",
            "range": "stddev: 0.0022773100080858617",
            "extra": "mean: 435.43311180001183 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14248347631734923,
            "unit": "iter/sec",
            "range": "stddev: 0.13044165532758917",
            "extra": "mean: 7.018357678000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.11154586557773,
            "unit": "iter/sec",
            "range": "stddev: 0.0014445175336082587",
            "extra": "mean: 26.238767735296666 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.72520474423149,
            "unit": "iter/sec",
            "range": "stddev: 0.0034965616071560316",
            "extra": "mean: 30.557486433336106 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 177.61584896047907,
            "unit": "iter/sec",
            "range": "stddev: 0.0002029230832029385",
            "extra": "mean: 5.6301282000037505 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 456073.1622115734,
            "unit": "iter/sec",
            "range": "stddev: 1.6171149343336318e-7",
            "extra": "mean: 2.1926306629200374 usec\nrounds: 574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 265.3203906342811,
            "unit": "iter/sec",
            "range": "stddev: 0.00014087281103322138",
            "extra": "mean: 3.769028070588079 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12399.788897004912,
            "unit": "iter/sec",
            "range": "stddev: 0.000006597396541886602",
            "extra": "mean: 80.64653425201001 usec\nrounds: 4715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 105.11365087649305,
            "unit": "iter/sec",
            "range": "stddev: 0.0002513680748444175",
            "extra": "mean: 9.513512199999454 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.751270460144003,
            "unit": "iter/sec",
            "range": "stddev: 0.028346832559758905",
            "extra": "mean: 32.51898165625633 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.91920592802504,
            "unit": "iter/sec",
            "range": "stddev: 0.000676918631436206",
            "extra": "mean: 8.269984840912963 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9176820.18753065,
            "unit": "iter/sec",
            "range": "stddev: 2.7250307552845558e-8",
            "extra": "mean: 108.97020749721521 nsec\nrounds: 95230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 587.3175386158617,
            "unit": "iter/sec",
            "range": "stddev: 0.00010384313782891151",
            "extra": "mean: 1.70265645796431 msec\nrounds: 452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 256.82005814447245,
            "unit": "iter/sec",
            "range": "stddev: 0.0003848412072571566",
            "extra": "mean: 3.893776861608903 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.06296493178909,
            "unit": "iter/sec",
            "range": "stddev: 0.001014675311735507",
            "extra": "mean: 45.324823888885625 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4963.468968686936,
            "unit": "iter/sec",
            "range": "stddev: 0.00006053321569740813",
            "extra": "mean: 201.47199595861392 usec\nrounds: 1732"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 279.4516228122244,
            "unit": "iter/sec",
            "range": "stddev: 0.0002555205116778646",
            "extra": "mean: 3.57843690416478 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.9229021662799,
            "unit": "iter/sec",
            "range": "stddev: 0.00026732603203146127",
            "extra": "mean: 3.6111133899627568 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 119.78656417387555,
            "unit": "iter/sec",
            "range": "stddev: 0.00029941878199705004",
            "extra": "mean: 8.348181675437784 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.21383480506806,
            "unit": "iter/sec",
            "range": "stddev: 0.0004128373435710734",
            "extra": "mean: 11.336090333333383 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7452773572967688,
            "unit": "iter/sec",
            "range": "stddev: 0.009093844817078783",
            "extra": "mean: 1.3417823447999921 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4457.5128286478985,
            "unit": "iter/sec",
            "range": "stddev: 0.000029850561941805965",
            "extra": "mean: 224.34035266777482 usec\nrounds: 1724"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 646.7150592034659,
            "unit": "iter/sec",
            "range": "stddev: 0.0000662409353336496",
            "extra": "mean: 1.5462760388348797 msec\nrounds: 515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.75811090597493,
            "unit": "iter/sec",
            "range": "stddev: 0.0008359682292538749",
            "extra": "mean: 11.266575975905353 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 61.58278664921423,
            "unit": "iter/sec",
            "range": "stddev: 0.03352505268131191",
            "extra": "mean: 16.238303824998468 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 268.3763154915976,
            "unit": "iter/sec",
            "range": "stddev: 0.00023996388227483692",
            "extra": "mean: 3.7261112187498835 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5486972032660644,
            "unit": "iter/sec",
            "range": "stddev: 0.0019035058934219412",
            "extra": "mean: 645.7040136000046 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.78608538423113,
            "unit": "iter/sec",
            "range": "stddev: 0.0007378562374112561",
            "extra": "mean: 8.279099341773618 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.113610310839675,
            "unit": "iter/sec",
            "range": "stddev: 0.000987646056037845",
            "extra": "mean: 18.47963930434127 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4433.531435985921,
            "unit": "iter/sec",
            "range": "stddev: 0.00008604479372795851",
            "extra": "mean: 225.55383094461396 usec\nrounds: 2023"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 260.6868425317459,
            "unit": "iter/sec",
            "range": "stddev: 0.00027039329565566137",
            "extra": "mean: 3.8360202236836023 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.25783238780972,
            "unit": "iter/sec",
            "range": "stddev: 0.0011187009238663992",
            "extra": "mean: 31.000223076920115 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 63.988004570354654,
            "unit": "iter/sec",
            "range": "stddev: 0.025290740181807356",
            "extra": "mean: 15.627929120691713 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.78981948879543,
            "unit": "iter/sec",
            "range": "stddev: 0.0008496014789993294",
            "extra": "mean: 8.866048412280156 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4780753.879537308,
            "unit": "iter/sec",
            "range": "stddev: 4.263094872974086e-8",
            "extra": "mean: 209.1720312731606 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.71229300062912,
            "unit": "iter/sec",
            "range": "stddev: 0.0009417193915275925",
            "extra": "mean: 8.216096955751471 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.3162612914485,
            "unit": "iter/sec",
            "range": "stddev: 0.0008731565983578012",
            "extra": "mean: 11.196169494118134 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.70794552565164,
            "unit": "iter/sec",
            "range": "stddev: 0.0008262176615185856",
            "extra": "mean: 10.44845330769304 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 253.8837686143641,
            "unit": "iter/sec",
            "range": "stddev: 0.00014645644198987292",
            "extra": "mean: 3.938810288888325 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 656368.9350812042,
            "unit": "iter/sec",
            "range": "stddev: 5.788831303495505e-7",
            "extra": "mean: 1.5235334071321989 usec\nrounds: 20789"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.29139475635992,
            "unit": "iter/sec",
            "range": "stddev: 0.00018681992570701662",
            "extra": "mean: 7.231107920791366 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1719157.298353818,
            "unit": "iter/sec",
            "range": "stddev: 3.3441087196968324e-7",
            "extra": "mean: 581.6803389413824 nsec\nrounds: 117634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.7747389492971,
            "unit": "iter/sec",
            "range": "stddev: 0.0004010843577133884",
            "extra": "mean: 12.228715283579582 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5019.358750644696,
            "unit": "iter/sec",
            "range": "stddev: 0.00005550201871146597",
            "extra": "mean: 199.2286365009391 usec\nrounds: 1989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8055525878908733,
            "unit": "iter/sec",
            "range": "stddev: 0.018827039437804057",
            "extra": "mean: 1.2413838835999969 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 995.8966474463281,
            "unit": "iter/sec",
            "range": "stddev: 0.000048123886317213686",
            "extra": "mean: 1.0041202594307288 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4733.489410805699,
            "unit": "iter/sec",
            "range": "stddev: 0.000056780757096171856",
            "extra": "mean: 211.2606395014175 usec\nrounds: 2086"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1686079.4199579216,
            "unit": "iter/sec",
            "range": "stddev: 2.766323541483832e-7",
            "extra": "mean: 593.0918722825977 nsec\nrounds: 151493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.043598921824539,
            "unit": "iter/sec",
            "range": "stddev: 0.001687184551503455",
            "extra": "mean: 198.27111860001878 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.313103423736187,
            "unit": "iter/sec",
            "range": "stddev: 0.0007295131755863805",
            "extra": "mean: 107.37559269999224 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.71344985835721,
            "unit": "iter/sec",
            "range": "stddev: 0.0007719133679804104",
            "extra": "mean: 11.146600666665206 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.41827708144474,
            "unit": "iter/sec",
            "range": "stddev: 0.00036067681845012076",
            "extra": "mean: 14.832772999997442 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.747413773219776,
            "unit": "iter/sec",
            "range": "stddev: 0.0003307026946496489",
            "extra": "mean: 18.265703000004716 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 303.8562185055578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000682535063958491",
            "extra": "mean: 3.291030227777646 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59897.16212288369,
            "unit": "iter/sec",
            "range": "stddev: 0.000001575957728251414",
            "extra": "mean: 16.69528178895057 usec\nrounds: 11136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 137.70665332380815,
            "unit": "iter/sec",
            "range": "stddev: 0.00011411789213117647",
            "extra": "mean: 7.261813252033405 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1683318.0354409246,
            "unit": "iter/sec",
            "range": "stddev: 3.8810330911693806e-7",
            "extra": "mean: 594.0648047165147 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.77500099076343,
            "unit": "iter/sec",
            "range": "stddev: 0.0008160592870703368",
            "extra": "mean: 20.502306093020294 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.82186952555539,
            "unit": "iter/sec",
            "range": "stddev: 0.0002913411022714178",
            "extra": "mean: 11.517835373329035 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.80061115015111,
            "unit": "iter/sec",
            "range": "stddev: 0.0008032200198410181",
            "extra": "mean: 11.013141732563502 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10600.774611336865,
            "unit": "iter/sec",
            "range": "stddev: 0.00003945154667515658",
            "extra": "mean: 94.33272913194122 usec\nrounds: 4792"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5272027.072786321,
            "unit": "iter/sec",
            "range": "stddev: 4.2348379538311e-8",
            "extra": "mean: 189.6803613096359 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6042889.71238098,
            "unit": "iter/sec",
            "range": "stddev: 2.0714527621578127e-8",
            "extra": "mean: 165.48374165276613 nsec\nrounds: 55863"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 458.8402406902688,
            "unit": "iter/sec",
            "range": "stddev: 0.0002384444269501616",
            "extra": "mean: 2.179407801058649 msec\nrounds: 377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.011044289730332,
            "unit": "iter/sec",
            "range": "stddev: 0.0007210850778655148",
            "extra": "mean: 71.37226742855773 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4512.235676598999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000594492552785024",
            "extra": "mean: 221.61962975163758 usec\nrounds: 1815"
          }
        ]
      }
    ]
  }
}