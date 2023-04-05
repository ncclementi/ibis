window.BENCHMARK_DATA = {
  "lastUpdate": 1680701555283,
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
          "id": "6fda28cdb8954cf506fec4b9befef4c3ca0d227e",
          "message": "ci(pyspark): be more specific with tested versions\n\nOtherwise we can end up with solve that incorrectly passes tests",
          "timestamp": "2023-04-05T15:26:38+02:00",
          "tree_id": "191e952caf9bc8ec7bd1bea1f7767c72096d1ce4",
          "url": "https://github.com/ibis-project/ibis/commit/6fda28cdb8954cf506fec4b9befef4c3ca0d227e"
        },
        "date": 1680701456773,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1482.815865001777,
            "unit": "iter/sec",
            "range": "stddev: 0.000021670642146290458",
            "extra": "mean: 674.3925686273943 usec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 84.30425897904537,
            "unit": "iter/sec",
            "range": "stddev: 0.0004294800379083728",
            "extra": "mean: 11.861796925924697 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 126.32277959771201,
            "unit": "iter/sec",
            "range": "stddev: 0.009541542152897941",
            "extra": "mean: 7.9162285945939725 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 242.20669540070566,
            "unit": "iter/sec",
            "range": "stddev: 0.00034657875901509215",
            "extra": "mean: 4.128705023391713 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.82084833543216,
            "unit": "iter/sec",
            "range": "stddev: 0.00019230334716835223",
            "extra": "mean: 14.74472856862751 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6887590720657091,
            "unit": "iter/sec",
            "range": "stddev: 0.016153122224105584",
            "extra": "mean: 1.4518865022 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.778806842693157,
            "unit": "iter/sec",
            "range": "stddev: 0.03175767204825232",
            "extra": "mean: 32.48988841935562 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 586.4136240196348,
            "unit": "iter/sec",
            "range": "stddev: 0.00011618395444760315",
            "extra": "mean: 1.7052809809318437 msec\nrounds: 472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 307.32862511500673,
            "unit": "iter/sec",
            "range": "stddev: 0.00016749911401351748",
            "extra": "mean: 3.253845943005751 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 87.9602595547325,
            "unit": "iter/sec",
            "range": "stddev: 0.000810872539380357",
            "extra": "mean: 11.36877045454554 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 652913.8593343548,
            "unit": "iter/sec",
            "range": "stddev: 5.117028393988558e-7",
            "extra": "mean: 1.531595608982017 usec\nrounds: 22728"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1701465.7757538618,
            "unit": "iter/sec",
            "range": "stddev: 3.397493456491188e-7",
            "extra": "mean: 587.7285422076351 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.27540418810458,
            "unit": "iter/sec",
            "range": "stddev: 0.0008996464006066869",
            "extra": "mean: 107.81201333333475 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1706660.8275191435,
            "unit": "iter/sec",
            "range": "stddev: 3.239658424509516e-7",
            "extra": "mean: 585.939504719067 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 257.9015326605967,
            "unit": "iter/sec",
            "range": "stddev: 0.0001929443511318771",
            "extra": "mean: 3.8774488452382285 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 177.17221726088263,
            "unit": "iter/sec",
            "range": "stddev: 0.00011094115849146573",
            "extra": "mean: 5.644225801653311 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 141.52313793996478,
            "unit": "iter/sec",
            "range": "stddev: 0.004449394802871401",
            "extra": "mean: 7.065982386740235 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4228343818796054,
            "unit": "iter/sec",
            "range": "stddev: 0.00291918023848519",
            "extra": "mean: 702.8224878000003 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 86.12873333406965,
            "unit": "iter/sec",
            "range": "stddev: 0.0010392318064073329",
            "extra": "mean: 11.61052718749822 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.60751075649989,
            "unit": "iter/sec",
            "range": "stddev: 0.0016552716217311636",
            "extra": "mean: 30.66778103571315 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 242.3717493898733,
            "unit": "iter/sec",
            "range": "stddev: 0.00037652748323997964",
            "extra": "mean: 4.125893395238173 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 229.34169964021922,
            "unit": "iter/sec",
            "range": "stddev: 0.0005311197078069743",
            "extra": "mean: 4.360306048000666 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 432390.7423614718,
            "unit": "iter/sec",
            "range": "stddev: 5.797546564580892e-7",
            "extra": "mean: 2.312722965664274 usec\nrounds: 1794"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.421071615503735,
            "unit": "iter/sec",
            "range": "stddev: 0.0005943179939840414",
            "extra": "mean: 24.739571714284885 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 85.47629391650372,
            "unit": "iter/sec",
            "range": "stddev: 0.0001691447510598212",
            "extra": "mean: 11.699150187499185 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2279619671563444,
            "unit": "iter/sec",
            "range": "stddev: 0.004210708884705926",
            "extra": "mean: 448.8406960000077 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 67.2727867483629,
            "unit": "iter/sec",
            "range": "stddev: 0.028447337109129462",
            "extra": "mean: 14.864851722889794 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.27330110730016,
            "unit": "iter/sec",
            "range": "stddev: 0.00024202932482484454",
            "extra": "mean: 9.777722916666676 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.40346706448133,
            "unit": "iter/sec",
            "range": "stddev: 0.0009253770711117103",
            "extra": "mean: 12.2844890526331 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.958622290353125,
            "unit": "iter/sec",
            "range": "stddev: 0.0011069451009712416",
            "extra": "mean: 201.66891960000157 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 248.87658574683735,
            "unit": "iter/sec",
            "range": "stddev: 0.00008969349612918656",
            "extra": "mean: 4.018055764463202 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10404.48951959055,
            "unit": "iter/sec",
            "range": "stddev: 0.000015848806639083976",
            "extra": "mean: 96.11235593222581 usec\nrounds: 3304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1809.1996987578957,
            "unit": "iter/sec",
            "range": "stddev: 0.00009358784177734178",
            "extra": "mean: 552.7305806465416 usec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 69.82968752108647,
            "unit": "iter/sec",
            "range": "stddev: 0.022677355944405928",
            "extra": "mean: 14.320556707317786 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5839530.865313415,
            "unit": "iter/sec",
            "range": "stddev: 1.7779208199111704e-8",
            "extra": "mean: 171.24663317391853 nsec\nrounds: 62501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1466298.2689225732,
            "unit": "iter/sec",
            "range": "stddev: 3.425768087042271e-7",
            "extra": "mean: 681.9894841278056 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1785.6824534420934,
            "unit": "iter/sec",
            "range": "stddev: 0.00010113354243193991",
            "extra": "mean: 560.0099827785132 usec\nrounds: 871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.10757084063307,
            "unit": "iter/sec",
            "range": "stddev: 0.0005813154091249031",
            "extra": "mean: 8.32586982653132 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.54459440967804,
            "unit": "iter/sec",
            "range": "stddev: 0.0372638830176553",
            "extra": "mean: 32.73901714285493 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 238.74091691748472,
            "unit": "iter/sec",
            "range": "stddev: 0.0004040741409243925",
            "extra": "mean: 4.188641029411924 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 96.11172930243225,
            "unit": "iter/sec",
            "range": "stddev: 0.00020017104478667886",
            "extra": "mean: 10.404557354839868 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 218.10925435365053,
            "unit": "iter/sec",
            "range": "stddev: 0.0004889932173918737",
            "extra": "mean: 4.584858184781845 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1826.4298062130797,
            "unit": "iter/sec",
            "range": "stddev: 0.00010172256915868965",
            "extra": "mean: 547.5162508836846 usec\nrounds: 1415"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5172112.494816218,
            "unit": "iter/sec",
            "range": "stddev: 3.39249215696328e-8",
            "extra": "mean: 193.34459584960874 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 85.90425250628789,
            "unit": "iter/sec",
            "range": "stddev: 0.0009790526359574146",
            "extra": "mean: 11.640867254235214 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144462.19319838414,
            "unit": "iter/sec",
            "range": "stddev: 8.647833042226622e-7",
            "extra": "mean: 6.922226347669664 usec\nrounds: 31646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10000033.11106369,
            "unit": "iter/sec",
            "range": "stddev: 1.2242028181208972e-8",
            "extra": "mean: 99.99966889043665 nsec\nrounds: 90091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14230128288627375,
            "unit": "iter/sec",
            "range": "stddev: 0.13166316227602934",
            "extra": "mean: 7.027343532800006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1797.1082764142968,
            "unit": "iter/sec",
            "range": "stddev: 0.00009764334361968246",
            "extra": "mean: 556.4494989668974 usec\nrounds: 968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1778.7474100518598,
            "unit": "iter/sec",
            "range": "stddev: 0.00010280064838868613",
            "extra": "mean: 562.1933695301037 usec\nrounds: 1234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7773946859687396,
            "unit": "iter/sec",
            "range": "stddev: 0.011944435335351113",
            "extra": "mean: 1.2863478720000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.92575359577004,
            "unit": "iter/sec",
            "range": "stddev: 0.0008598621944885364",
            "extra": "mean: 21.31025979069501 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 65.8913475186632,
            "unit": "iter/sec",
            "range": "stddev: 0.025797981308202655",
            "extra": "mean: 15.176499459458741 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7786671514469763,
            "unit": "iter/sec",
            "range": "stddev: 0.012209721264545045",
            "extra": "mean: 1.2842457758000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4806.332212297045,
            "unit": "iter/sec",
            "range": "stddev: 0.000027960964672163263",
            "extra": "mean: 208.05885981861405 usec\nrounds: 1655"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 466.36366121786693,
            "unit": "iter/sec",
            "range": "stddev: 0.00007324186021841547",
            "extra": "mean: 2.1442493983956417 msec\nrounds: 374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.31236433378626,
            "unit": "iter/sec",
            "range": "stddev: 0.0007894342070136563",
            "extra": "mean: 13.10403640000004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12446.067687463186,
            "unit": "iter/sec",
            "range": "stddev: 0.000004956408540692068",
            "extra": "mean: 80.34666250508111 usec\nrounds: 4886"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 81.50785527932382,
            "unit": "iter/sec",
            "range": "stddev: 0.0011568812416612023",
            "extra": "mean: 12.268756141025232 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 233.27117283644452,
            "unit": "iter/sec",
            "range": "stddev: 0.00037083189239300456",
            "extra": "mean: 4.286856313365128 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 84.95427369018796,
            "unit": "iter/sec",
            "range": "stddev: 0.0009749573629200596",
            "extra": "mean: 11.771038189871522 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 47.64533315529165,
            "unit": "iter/sec",
            "range": "stddev: 0.001144630959386597",
            "extra": "mean: 20.988414473683594 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7118.297693129167,
            "unit": "iter/sec",
            "range": "stddev: 0.00007826015347932591",
            "extra": "mean: 140.4830260141038 usec\nrounds: 2614"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1650547.6031343888,
            "unit": "iter/sec",
            "range": "stddev: 2.673165571604186e-7",
            "extra": "mean: 605.8595329822664 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.20102778733042,
            "unit": "iter/sec",
            "range": "stddev: 0.00014431453652020444",
            "extra": "mean: 7.032297976745681 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 137.71128480566156,
            "unit": "iter/sec",
            "range": "stddev: 0.0002622874917589689",
            "extra": "mean: 7.261569023999755 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 226.77784222061254,
            "unit": "iter/sec",
            "range": "stddev: 0.000334760493009205",
            "extra": "mean: 4.409601882653009 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1773.8536372357448,
            "unit": "iter/sec",
            "range": "stddev: 0.00011481925577770097",
            "extra": "mean: 563.7443693259459 usec\nrounds: 1454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 73.18499450002257,
            "unit": "iter/sec",
            "range": "stddev: 0.0010965661303941748",
            "extra": "mean: 13.66400321311347 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11192.925969739987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030485203190062602",
            "extra": "mean: 89.34214366319357 usec\nrounds: 5673"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1009.6493685955256,
            "unit": "iter/sec",
            "range": "stddev: 0.000034376756077512675",
            "extra": "mean: 990.4428518496986 usec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 61320.021413897455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014477513529038312",
            "extra": "mean: 16.307887325253965 usec\nrounds: 10730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 62.65759095205423,
            "unit": "iter/sec",
            "range": "stddev: 0.034351675584072545",
            "extra": "mean: 15.95975818421112 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 644.1973729277419,
            "unit": "iter/sec",
            "range": "stddev: 0.000028412684441132166",
            "extra": "mean: 1.5523192767074008 msec\nrounds: 571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5931024637486763,
            "unit": "iter/sec",
            "range": "stddev: 0.00951505327726268",
            "extra": "mean: 1.6860493104000056 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 67.11219829926969,
            "unit": "iter/sec",
            "range": "stddev: 0.030764654006701215",
            "extra": "mean: 14.90042086746668 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.36974010480414,
            "unit": "iter/sec",
            "range": "stddev: 0.0009073449485904048",
            "extra": "mean: 11.994759714290815 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.11724271433174,
            "unit": "iter/sec",
            "range": "stddev: 0.0011582095095516338",
            "extra": "mean: 11.748500869044522 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1847.38918371491,
            "unit": "iter/sec",
            "range": "stddev: 0.00009900757172204679",
            "extra": "mean: 541.3044575637834 usec\nrounds: 1084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 82.82102265464395,
            "unit": "iter/sec",
            "range": "stddev: 0.0009654716209563928",
            "extra": "mean: 12.07422907792274 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1792.1954281660264,
            "unit": "iter/sec",
            "range": "stddev: 0.00013165344246631608",
            "extra": "mean: 557.9748638368702 usec\nrounds: 1131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4768963.923502718,
            "unit": "iter/sec",
            "range": "stddev: 3.4711904215897895e-8",
            "extra": "mean: 209.68915178248403 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 212.38735632962033,
            "unit": "iter/sec",
            "range": "stddev: 0.004139187245565604",
            "extra": "mean: 4.708378207071907 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.623228420292468,
            "unit": "iter/sec",
            "range": "stddev: 0.0003218957164861751",
            "extra": "mean: 73.40403971429055 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.78653689001366,
            "unit": "iter/sec",
            "range": "stddev: 0.0012576341536084874",
            "extra": "mean: 48.108061736845805 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 84.74458135926128,
            "unit": "iter/sec",
            "range": "stddev: 0.0011316391830601394",
            "extra": "mean: 11.800164493829499 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 235.11055936000537,
            "unit": "iter/sec",
            "range": "stddev: 0.00041770840431182266",
            "extra": "mean: 4.253318110092974 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.05546238153165,
            "unit": "iter/sec",
            "range": "stddev: 0.0004354938120412422",
            "extra": "mean: 22.698660868424046 msec\nrounds: 38"
          }
        ]
      }
    ]
  }
}