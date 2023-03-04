window.BENCHMARK_DATA = {
  "lastUpdate": 1677932503237,
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
          "id": "325140ff0293a83ef55272b0299c2865cb8e4aaa",
          "message": "feat(ux): accept selectors in `Table.drop`\n\nBREAKING CHANGE: Passing a sequence of column names to `Table.drop` is removed. Replace `drop(cols)` with `drop(*cols)`.",
          "timestamp": "2023-03-04T07:10:20-05:00",
          "tree_id": "f9ecb7852723f71c27e3dbdf7acb3b495c0eb173",
          "url": "https://github.com/ibis-project/ibis/commit/325140ff0293a83ef55272b0299c2865cb8e4aaa"
        },
        "date": 1677932405385,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 207.6594091933216,
            "unit": "iter/sec",
            "range": "stddev: 0.0005466526526567385",
            "extra": "mean: 4.815577603175423 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 500.59197258336013,
            "unit": "iter/sec",
            "range": "stddev: 0.0002437712961558344",
            "extra": "mean: 1.9976349098036663 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4521535.410358556,
            "unit": "iter/sec",
            "range": "stddev: 2.9003487256659077e-7",
            "extra": "mean: 221.1638103528102 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 115.62770012946733,
            "unit": "iter/sec",
            "range": "stddev: 0.000604562492095847",
            "extra": "mean: 8.648446686047622 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 213.2800181063406,
            "unit": "iter/sec",
            "range": "stddev: 0.0005392271125653453",
            "extra": "mean: 4.688671769998649 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1193060.7042078152,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055838261117513624",
            "extra": "mean: 838.180317625995 nsec\nrounds: 81301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 101.11824262967258,
            "unit": "iter/sec",
            "range": "stddev: 0.0011848961398081557",
            "extra": "mean: 9.889412374998651 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 47.16695740669982,
            "unit": "iter/sec",
            "range": "stddev: 0.001605736788361743",
            "extra": "mean: 21.201282740742467 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.48379325231753384,
            "unit": "iter/sec",
            "range": "stddev: 0.029882043528493444",
            "extra": "mean: 2.0669986511999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 196.57280510146182,
            "unit": "iter/sec",
            "range": "stddev: 0.0009529113622108732",
            "extra": "mean: 5.087173678392827 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3708.7890592456356,
            "unit": "iter/sec",
            "range": "stddev: 0.00015444549117342405",
            "extra": "mean: 269.6297859019782 usec\nrounds: 383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 75.00638330186814,
            "unit": "iter/sec",
            "range": "stddev: 0.0010961178666367836",
            "extra": "mean: 13.332198620688507 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 137.2783250119062,
            "unit": "iter/sec",
            "range": "stddev: 0.003934412051586935",
            "extra": "mean: 7.284471164062278 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9113717.906715361,
            "unit": "iter/sec",
            "range": "stddev: 1.8359784882504885e-7",
            "extra": "mean: 109.72470403786487 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 185.85275220975683,
            "unit": "iter/sec",
            "range": "stddev: 0.0009276349768154044",
            "extra": "mean: 5.380603666667157 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4048225.5076946313,
            "unit": "iter/sec",
            "range": "stddev: 5.657425044040182e-7",
            "extra": "mean: 247.02181192722992 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55690.684114180265,
            "unit": "iter/sec",
            "range": "stddev: 0.00001532116325315256",
            "extra": "mean: 17.95632457934512 usec\nrounds: 9329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 51.04130945493704,
            "unit": "iter/sec",
            "range": "stddev: 0.00140410236148002",
            "extra": "mean: 19.59197384782756 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 97.25717547051184,
            "unit": "iter/sec",
            "range": "stddev: 0.0012139781447509813",
            "extra": "mean: 10.282017703703493 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 823.4560971369458,
            "unit": "iter/sec",
            "range": "stddev: 0.00046939031376277583",
            "extra": "mean: 1.214393825580836 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 215.3201867998654,
            "unit": "iter/sec",
            "range": "stddev: 0.0006009697176816684",
            "extra": "mean: 4.644246388888165 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2720.8911123931216,
            "unit": "iter/sec",
            "range": "stddev: 0.0032683929597869944",
            "extra": "mean: 367.5266516345316 usec\nrounds: 1530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.53277164781856,
            "unit": "iter/sec",
            "range": "stddev: 0.001388534849479821",
            "extra": "mean: 10.148907650484622 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.41825992334915,
            "unit": "iter/sec",
            "range": "stddev: 0.0011045199311364665",
            "extra": "mean: 10.37147943548227 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5223.604572075034,
            "unit": "iter/sec",
            "range": "stddev: 0.00012939488859706322",
            "extra": "mean: 191.43868686881828 usec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 39.50064290216632,
            "unit": "iter/sec",
            "range": "stddev: 0.0013222835706933258",
            "extra": "mean: 25.316043652169455 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9954.892406420926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000369022331514998",
            "extra": "mean: 100.45311985039616 usec\nrounds: 1335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 73.84101255996862,
            "unit": "iter/sec",
            "range": "stddev: 0.0008940649546765778",
            "extra": "mean: 13.54260952458999 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1503021.2436263256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023099080217457277",
            "extra": "mean: 665.3265908519758 nsec\nrounds: 81968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 31.187364823372278,
            "unit": "iter/sec",
            "range": "stddev: 0.0016062795691641873",
            "extra": "mean: 32.06426723333114 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 424072.257330405,
            "unit": "iter/sec",
            "range": "stddev: 7.173106790501694e-7",
            "extra": "mean: 2.3580887047295707 usec\nrounds: 1691"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 64.35127809404128,
            "unit": "iter/sec",
            "range": "stddev: 0.0010046962480639032",
            "extra": "mean: 15.539706896553415 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.63931288982498,
            "unit": "iter/sec",
            "range": "stddev: 0.0013289357135112907",
            "extra": "mean: 9.838712714281929 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3260.251277404129,
            "unit": "iter/sec",
            "range": "stddev: 0.00012931807832600067",
            "extra": "mean: 306.72482422772583 usec\nrounds: 1263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 101.19795470836839,
            "unit": "iter/sec",
            "range": "stddev: 0.0006424686751062858",
            "extra": "mean: 9.881622636364474 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 23.2168003623433,
            "unit": "iter/sec",
            "range": "stddev: 0.0020827939491400737",
            "extra": "mean: 43.07225734782813 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 247.2884619226811,
            "unit": "iter/sec",
            "range": "stddev: 0.0004687785713429459",
            "extra": "mean: 4.043860325002413 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 71.68291264303151,
            "unit": "iter/sec",
            "range": "stddev: 0.001184524730278011",
            "extra": "mean: 13.950326000002633 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1514770.4200260653,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011111441650562195",
            "extra": "mean: 660.1660468011995 nsec\nrounds: 156251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 66.12436345533254,
            "unit": "iter/sec",
            "range": "stddev: 0.0009231375797997372",
            "extra": "mean: 15.12301892592897 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.29187478543942,
            "unit": "iter/sec",
            "range": "stddev: 0.0011741232021604112",
            "extra": "mean: 34.139159999997204 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4895668.530344715,
            "unit": "iter/sec",
            "range": "stddev: 4.7080985767065944e-7",
            "extra": "mean: 204.26219499934848 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3417.3791926691033,
            "unit": "iter/sec",
            "range": "stddev: 0.00012484975068377093",
            "extra": "mean: 292.621902229984 usec\nrounds: 1524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 135.608674083508,
            "unit": "iter/sec",
            "range": "stddev: 0.0007230487959763589",
            "extra": "mean: 7.374159556963138 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3636.8514319442106,
            "unit": "iter/sec",
            "range": "stddev: 0.00015548586524187556",
            "extra": "mean: 274.96311540705796 usec\nrounds: 1733"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 210.20628478809314,
            "unit": "iter/sec",
            "range": "stddev: 0.0006999687202391887",
            "extra": "mean: 4.757231692706476 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.49990790946446007,
            "unit": "iter/sec",
            "range": "stddev: 0.01796713255062245",
            "extra": "mean: 2.000368429999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 201.09534772097024,
            "unit": "iter/sec",
            "range": "stddev: 0.000565781104362344",
            "extra": "mean: 4.972765463413651 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3596.561978819759,
            "unit": "iter/sec",
            "range": "stddev: 0.00018032539566860477",
            "extra": "mean: 278.0433107754084 usec\nrounds: 1522"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.82312646706737,
            "unit": "iter/sec",
            "range": "stddev: 0.0016799138170556576",
            "extra": "mean: 10.11908887878839 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 74.03895478554378,
            "unit": "iter/sec",
            "range": "stddev: 0.0015823021129286485",
            "extra": "mean: 13.506403526313036 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3342.12934814998,
            "unit": "iter/sec",
            "range": "stddev: 0.00016784043776651457",
            "extra": "mean: 299.2104421552521 usec\nrounds: 2135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 370.20546171715347,
            "unit": "iter/sec",
            "range": "stddev: 0.0005094052696914685",
            "extra": "mean: 2.701202719596897 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 7831.889295694191,
            "unit": "iter/sec",
            "range": "stddev: 0.00011715669386439267",
            "extra": "mean: 127.68311224084579 usec\nrounds: 3439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.4846978045509596,
            "unit": "iter/sec",
            "range": "stddev: 0.00800858410326987",
            "extra": "mean: 673.5377373999995 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.177888699136975,
            "unit": "iter/sec",
            "range": "stddev: 0.0018804872670442827",
            "extra": "mean: 61.81276299999183 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 115107.48066162507,
            "unit": "iter/sec",
            "range": "stddev: 0.000019893984995385543",
            "extra": "mean: 8.687532680344583 usec\nrounds: 24097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 85.23139394854866,
            "unit": "iter/sec",
            "range": "stddev: 0.0007957424213308999",
            "extra": "mean: 11.732765987655517 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.45494547026537,
            "unit": "iter/sec",
            "range": "stddev: 0.001628021720745129",
            "extra": "mean: 10.587058147366166 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 68.87409915724118,
            "unit": "iter/sec",
            "range": "stddev: 0.0033483245791652598",
            "extra": "mean: 14.519246164178156 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09218664175383091,
            "unit": "iter/sec",
            "range": "stddev: 0.18538391662194909",
            "extra": "mean: 10.847558615600008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 196.03806214695794,
            "unit": "iter/sec",
            "range": "stddev: 0.0008738132313850709",
            "extra": "mean: 5.101050219780076 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 28.409361120862343,
            "unit": "iter/sec",
            "range": "stddev: 0.0018090333014989571",
            "extra": "mean: 35.19966519999116 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.9321557600521964,
            "unit": "iter/sec",
            "range": "stddev: 0.016050763302523124",
            "extra": "mean: 1.072782085200015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4396395553555925,
            "unit": "iter/sec",
            "range": "stddev: 0.04555363395531664",
            "extra": "mean: 2.2745905999999763 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 110.88161735129762,
            "unit": "iter/sec",
            "range": "stddev: 0.004697554763228154",
            "extra": "mean: 9.018627468535001 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 65.60570039182223,
            "unit": "iter/sec",
            "range": "stddev: 0.005214079985300348",
            "extra": "mean: 15.24257791666912 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3302.8906374975663,
            "unit": "iter/sec",
            "range": "stddev: 0.00017420837160024398",
            "extra": "mean: 302.76509571556676 usec\nrounds: 1494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 94.74860244687085,
            "unit": "iter/sec",
            "range": "stddev: 0.0016443709245787378",
            "extra": "mean: 10.554245383838122 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1348852.4918708273,
            "unit": "iter/sec",
            "range": "stddev: 0.000005131658173362883",
            "extra": "mean: 741.3709104788938 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 103.48103096393137,
            "unit": "iter/sec",
            "range": "stddev: 0.021777550685853516",
            "extra": "mean: 9.663606853207261 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 10.75063865333645,
            "unit": "iter/sec",
            "range": "stddev: 0.004151072550251718",
            "extra": "mean: 93.0177296666604 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 91.39524224616534,
            "unit": "iter/sec",
            "range": "stddev: 0.0014358227423763872",
            "extra": "mean: 10.941488587628934 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 498.8657728778613,
            "unit": "iter/sec",
            "range": "stddev: 0.0005196702015189076",
            "extra": "mean: 2.0045472236573603 msec\nrounds: 465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.8462235219721714,
            "unit": "iter/sec",
            "range": "stddev: 0.01037160415288178",
            "extra": "mean: 259.9952900000062 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 23.657195409908166,
            "unit": "iter/sec",
            "range": "stddev: 0.005989512779149934",
            "extra": "mean: 42.27043750000803 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 69.51668706410524,
            "unit": "iter/sec",
            "range": "stddev: 0.0015276666430035647",
            "extra": "mean: 14.38503533803105 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 59.25470000713318,
            "unit": "iter/sec",
            "range": "stddev: 0.0009842119154005887",
            "extra": "mean: 16.87629841817811 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5014792726351917,
            "unit": "iter/sec",
            "range": "stddev: 0.04031998701442098",
            "extra": "mean: 1.9941003638000097 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3376.411677854445,
            "unit": "iter/sec",
            "range": "stddev: 0.00010265595559494806",
            "extra": "mean: 296.17241480323696 usec\nrounds: 1878"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 197.88480879020412,
            "unit": "iter/sec",
            "range": "stddev: 0.0006342446884496671",
            "extra": "mean: 5.0534450123465104 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 208.73305713782145,
            "unit": "iter/sec",
            "range": "stddev: 0.0006228229249732741",
            "extra": "mean: 4.790807999998409 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 590832.0515431039,
            "unit": "iter/sec",
            "range": "stddev: 0.000009205625997310853",
            "extra": "mean: 1.6925283545268965 usec\nrounds: 20367"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.142426033531,
            "unit": "iter/sec",
            "range": "stddev: 0.0012626658903667621",
            "extra": "mean: 9.887047792075675 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 57.53957288263588,
            "unit": "iter/sec",
            "range": "stddev: 0.027208903123282082",
            "extra": "mean: 17.37934346575202 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9217.114463646527,
            "unit": "iter/sec",
            "range": "stddev: 0.00006772346710756908",
            "extra": "mean: 108.49382460683627 usec\nrounds: 5348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1262.700239003424,
            "unit": "iter/sec",
            "range": "stddev: 0.00021242161217320876",
            "extra": "mean: 791.9536000002993 usec\nrounds: 905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.198203642212245,
            "unit": "iter/sec",
            "range": "stddev: 0.0022542079264976293",
            "extra": "mean: 138.92354950000652 msec\nrounds: 8"
          }
        ]
      }
    ]
  }
}