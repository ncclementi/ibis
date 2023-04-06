window.BENCHMARK_DATA = {
  "lastUpdate": 1680776469391,
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
          "id": "41b29491d0e3b806583cdd2e7764416eb2ce7002",
          "message": "chore: remove unused comment step in `condalock_push` CI job",
          "timestamp": "2023-04-06T06:12:59-04:00",
          "tree_id": "8ef9e5a85b0a174aaa67801209908985e6dc6447",
          "url": "https://github.com/ibis-project/ibis/commit/41b29491d0e3b806583cdd2e7764416eb2ce7002"
        },
        "date": 1680776390205,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 90.77023285320962,
            "unit": "iter/sec",
            "range": "stddev: 0.009087988127706113",
            "extra": "mean: 11.016827527777354 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 230.15481264669748,
            "unit": "iter/sec",
            "range": "stddev: 0.0035682058178368357",
            "extra": "mean: 4.34490154040387 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 298.21510847382547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000480400459312241",
            "extra": "mean: 3.3532841616164144 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13796.301256049335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017569568993107591",
            "extra": "mean: 72.48319541888264 usec\nrounds: 5501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.44708417198746,
            "unit": "iter/sec",
            "range": "stddev: 0.000809875907936668",
            "extra": "mean: 13.615244379999467 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.70942422917547,
            "unit": "iter/sec",
            "range": "stddev: 0.0006949127117184387",
            "extra": "mean: 11.27275944680421 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1711363376785985,
            "unit": "iter/sec",
            "range": "stddev: 0.017990752772491726",
            "extra": "mean: 5.843294378999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1759.8957886332234,
            "unit": "iter/sec",
            "range": "stddev: 0.000005772673359213885",
            "extra": "mean: 568.2154627897733 usec\nrounds: 1290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148081.4451441139,
            "unit": "iter/sec",
            "range": "stddev: 3.122674614630244e-7",
            "extra": "mean: 6.753040524603153 usec\nrounds: 22727"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.4527040195593,
            "unit": "iter/sec",
            "range": "stddev: 0.00031070101578887355",
            "extra": "mean: 3.69750416667189 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2164.200653865315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000838612356516591",
            "extra": "mean: 462.06436460222653 usec\nrounds: 1599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.46493102536081,
            "unit": "iter/sec",
            "range": "stddev: 0.00019030999441014564",
            "extra": "mean: 9.855621936509802 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 85.6326461154875,
            "unit": "iter/sec",
            "range": "stddev: 0.013862768709409855",
            "extra": "mean: 11.677789317071452 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.37626477282139,
            "unit": "iter/sec",
            "range": "stddev: 0.0002879064795552517",
            "extra": "mean: 20.671294170727645 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.51900431840659,
            "unit": "iter/sec",
            "range": "stddev: 0.0008781813093161526",
            "extra": "mean: 10.469120853338913 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.1330466257168,
            "unit": "iter/sec",
            "range": "stddev: 0.0007631538568919177",
            "extra": "mean: 16.357764829265527 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7845.56207196107,
            "unit": "iter/sec",
            "range": "stddev: 0.000014720015159527054",
            "extra": "mean: 127.46059375068342 usec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.9931288060655,
            "unit": "iter/sec",
            "range": "stddev: 0.00022837392816623018",
            "extra": "mean: 3.5336547011545907 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.28093147485177,
            "unit": "iter/sec",
            "range": "stddev: 0.00013588393411897686",
            "extra": "mean: 8.986265542052806 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1167.1521239180001,
            "unit": "iter/sec",
            "range": "stddev: 0.000010642400414507494",
            "extra": "mean: 856.7863430202319 usec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 499160.6791601159,
            "unit": "iter/sec",
            "range": "stddev: 2.4313404855372063e-7",
            "extra": "mean: 2.003362928511502 usec\nrounds: 2185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.45958417629205,
            "unit": "iter/sec",
            "range": "stddev: 0.00021654521359852695",
            "extra": "mean: 6.1177202000067155 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 141.82672995797742,
            "unit": "iter/sec",
            "range": "stddev: 0.011605097760485203",
            "extra": "mean: 7.050857058442335 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70765.80378491699,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023409882025181863",
            "extra": "mean: 14.131119078917886 usec\nrounds: 13680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.76912363364898,
            "unit": "iter/sec",
            "range": "stddev: 0.0008426480220137156",
            "extra": "mean: 24.528366343755437 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.5573366674336,
            "unit": "iter/sec",
            "range": "stddev: 0.0008970063547843308",
            "extra": "mean: 10.146378076087267 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1758320.462871951,
            "unit": "iter/sec",
            "range": "stddev: 8.867149366306159e-8",
            "extra": "mean: 568.7245420363538 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.24485346413138,
            "unit": "iter/sec",
            "range": "stddev: 0.00006150809146936704",
            "extra": "mean: 6.163523702901781 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.61828647422793,
            "unit": "iter/sec",
            "range": "stddev: 0.00022022935726731708",
            "extra": "mean: 9.938551281691097 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6167208.0515832715,
            "unit": "iter/sec",
            "range": "stddev: 7.186924554254862e-9",
            "extra": "mean: 162.14792684707783 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.549694884770242,
            "unit": "iter/sec",
            "range": "stddev: 0.000677407215218173",
            "extra": "mean: 64.30994353332456 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1983911.6643092642,
            "unit": "iter/sec",
            "range": "stddev: 1.0931812968109318e-7",
            "extra": "mean: 504.05470061499364 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.59173418398721,
            "unit": "iter/sec",
            "range": "stddev: 0.0008521359148019129",
            "extra": "mean: 10.571748246574415 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.543095212637489,
            "unit": "iter/sec",
            "range": "stddev: 0.0020976927749848874",
            "extra": "mean: 393.2216123999865 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.30178337401881,
            "unit": "iter/sec",
            "range": "stddev: 0.0008325026895801576",
            "extra": "mean: 10.60425332608833 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.379245878040837,
            "unit": "iter/sec",
            "range": "stddev: 0.0007140495013762379",
            "extra": "mean: 39.402274000002535 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.19843047799716,
            "unit": "iter/sec",
            "range": "stddev: 0.0003787190383691103",
            "extra": "mean: 7.183989047621253 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6889338366409462,
            "unit": "iter/sec",
            "range": "stddev: 0.00514914494938326",
            "extra": "mean: 1.4515181964000021 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2127.959671151185,
            "unit": "iter/sec",
            "range": "stddev: 0.00007836774864879487",
            "extra": "mean: 469.9337179914784 usec\nrounds: 1195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.03371919734714,
            "unit": "iter/sec",
            "range": "stddev: 0.0007742011038779327",
            "extra": "mean: 9.996629216866303 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 675.3041797845518,
            "unit": "iter/sec",
            "range": "stddev: 0.00004705956941671202",
            "extra": "mean: 1.4808141722431494 msec\nrounds: 598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.5589008248648915,
            "unit": "iter/sec",
            "range": "stddev: 0.0020235006543307533",
            "extra": "mean: 179.89167850000362 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2726708.1616038494,
            "unit": "iter/sec",
            "range": "stddev: 1.4753219952847122e-8",
            "extra": "mean: 366.74258509977375 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.78904315053668,
            "unit": "iter/sec",
            "range": "stddev: 0.0006776818683127586",
            "extra": "mean: 9.921713400001408 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5575.3239872480535,
            "unit": "iter/sec",
            "range": "stddev: 0.00003660430514776914",
            "extra": "mean: 179.36177382466235 usec\nrounds: 2361"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.42351272457336,
            "unit": "iter/sec",
            "range": "stddev: 0.000341406502113546",
            "extra": "mean: 3.739386973911777 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.59464793180997,
            "unit": "iter/sec",
            "range": "stddev: 0.00030418171631980815",
            "extra": "mean: 16.78003033333179 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 155.2699272680317,
            "unit": "iter/sec",
            "range": "stddev: 0.004233757453745227",
            "extra": "mean: 6.440397168949333 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 737.6414445915798,
            "unit": "iter/sec",
            "range": "stddev: 0.000021524037718433675",
            "extra": "mean: 1.3556721999991255 msec\nrounds: 585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.41171668937868,
            "unit": "iter/sec",
            "range": "stddev: 0.0006755619612206357",
            "extra": "mean: 10.48089306741633 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11990.052782673956,
            "unit": "iter/sec",
            "range": "stddev: 0.000010961400456170083",
            "extra": "mean: 83.402468540008 usec\nrounds: 4021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2177.5890169911063,
            "unit": "iter/sec",
            "range": "stddev: 0.00008212553591960247",
            "extra": "mean: 459.2234770644437 usec\nrounds: 1417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 280.56638776225896,
            "unit": "iter/sec",
            "range": "stddev: 0.0002780793204283856",
            "extra": "mean: 3.564218821704905 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.6646810157431,
            "unit": "iter/sec",
            "range": "stddev: 0.000060876330306693744",
            "extra": "mean: 8.356684625001757 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7002634.044284081,
            "unit": "iter/sec",
            "range": "stddev: 7.797636151388984e-9",
            "extra": "mean: 142.80340707167193 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.71471880288308,
            "unit": "iter/sec",
            "range": "stddev: 0.0007442821472514454",
            "extra": "mean: 10.130201576087494 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.46653584528018,
            "unit": "iter/sec",
            "range": "stddev: 0.0008423082657629143",
            "extra": "mean: 10.05363252577225 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1944214.7600212023,
            "unit": "iter/sec",
            "range": "stddev: 9.208204224293434e-8",
            "extra": "mean: 514.3464706486925 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11736551.706989307,
            "unit": "iter/sec",
            "range": "stddev: 3.77952189536402e-9",
            "extra": "mean: 85.20390187555347 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.62904069738868,
            "unit": "iter/sec",
            "range": "stddev: 0.003249229380470284",
            "extra": "mean: 613.8582059999976 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.39172312716596,
            "unit": "iter/sec",
            "range": "stddev: 0.0005009993724331919",
            "extra": "mean: 10.374334720427582 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 77.7923663424157,
            "unit": "iter/sec",
            "range": "stddev: 0.02246079241649171",
            "extra": "mean: 12.854731730338914 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.820964345595,
            "unit": "iter/sec",
            "range": "stddev: 0.000022800661393800257",
            "extra": "mean: 1.8697845945953078 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.35706386206444,
            "unit": "iter/sec",
            "range": "stddev: 0.0008529372510884433",
            "extra": "mean: 10.064709655553845 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2049.1413408426047,
            "unit": "iter/sec",
            "range": "stddev: 0.00010084690136325867",
            "extra": "mean: 488.0092847030265 usec\nrounds: 1412"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.1841676942471,
            "unit": "iter/sec",
            "range": "stddev: 0.00041690404331083084",
            "extra": "mean: 3.981142638007527 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 271.34060601710706,
            "unit": "iter/sec",
            "range": "stddev: 0.00029852435735654533",
            "extra": "mean: 3.6854049037428385 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2083.411408406269,
            "unit": "iter/sec",
            "range": "stddev: 0.00008922069564676727",
            "extra": "mean: 479.9820121773079 usec\nrounds: 1314"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.55964739102109,
            "unit": "iter/sec",
            "range": "stddev: 0.035879211598333634",
            "extra": "mean: 28.121763666658374 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 727211.7225379316,
            "unit": "iter/sec",
            "range": "stddev: 0.000009181956007926328",
            "extra": "mean: 1.3751153467521828 usec\nrounds: 24214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9209998478900596,
            "unit": "iter/sec",
            "range": "stddev: 0.005580877856786792",
            "extra": "mean: 1.0857765094 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2093.379714301232,
            "unit": "iter/sec",
            "range": "stddev: 0.00008356864888188106",
            "extra": "mean: 477.69642228228 usec\nrounds: 1113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12799.874825460103,
            "unit": "iter/sec",
            "range": "stddev: 0.000001790396500660811",
            "extra": "mean: 78.12576401223158 usec\nrounds: 5513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7874913834208687,
            "unit": "iter/sec",
            "range": "stddev: 0.0037976840995834404",
            "extra": "mean: 1.2698551642000098 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.83345375394331,
            "unit": "iter/sec",
            "range": "stddev: 0.000812809681668747",
            "extra": "mean: 22.813625538463047 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.25971480714054,
            "unit": "iter/sec",
            "range": "stddev: 0.000287798471320936",
            "extra": "mean: 3.64617895378182 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.926332506986678,
            "unit": "iter/sec",
            "range": "stddev: 0.0038399214487991966",
            "extra": "mean: 1.0795259720000103 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.3559329255293,
            "unit": "iter/sec",
            "range": "stddev: 0.00010525338784557182",
            "extra": "mean: 3.4559512566046715 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 78.44045549234293,
            "unit": "iter/sec",
            "range": "stddev: 0.026213804148611512",
            "extra": "mean: 12.74852362500134 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.9542124892617,
            "unit": "iter/sec",
            "range": "stddev: 0.0003045585949909305",
            "extra": "mean: 3.584817705660189 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.3692739625082,
            "unit": "iter/sec",
            "range": "stddev: 0.00037526510509117183",
            "extra": "mean: 9.401211108693552 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2140.7697230067965,
            "unit": "iter/sec",
            "range": "stddev: 0.00008818070822237263",
            "extra": "mean: 467.12170358774506 usec\nrounds: 1282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5334648.892212139,
            "unit": "iter/sec",
            "range": "stddev: 1.0295573617430207e-8",
            "extra": "mean: 187.45376128860573 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.480806922279008,
            "unit": "iter/sec",
            "range": "stddev: 0.0008270731339070617",
            "extra": "mean: 95.41250090909546 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2104.1400864241673,
            "unit": "iter/sec",
            "range": "stddev: 0.00008630561537237103",
            "extra": "mean: 475.2535282474596 usec\nrounds: 1363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.1557918252903,
            "unit": "iter/sec",
            "range": "stddev: 0.0007218934379452863",
            "extra": "mean: 10.399789560434844 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.60405047560596,
            "unit": "iter/sec",
            "range": "stddev: 0.000019355463334714536",
            "extra": "mean: 5.009918373987166 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.18196513809258,
            "unit": "iter/sec",
            "range": "stddev: 0.0002429325307833246",
            "extra": "mean: 18.80336684444425 msec\nrounds: 45"
          }
        ]
      }
    ]
  }
}