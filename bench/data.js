window.BENCHMARK_DATA = {
  "lastUpdate": 1681459018755,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "1b88b67026993ab0533aa7aa8921bb0fd45d6f89",
          "message": "test(docs): explicitly set column width for doctests",
          "timestamp": "2023-04-14T09:51:14+02:00",
          "tree_id": "6bbd44a4bafc1e7f428dbcdc3835f9c16bf45b74",
          "url": "https://github.com/ibis-project/ibis/commit/1b88b67026993ab0533aa7aa8921bb0fd45d6f89"
        },
        "date": 1681458940692,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.3844432448746,
            "unit": "iter/sec",
            "range": "stddev: 0.007618613743651266",
            "extra": "mean: 10.594966348485647 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 165.85912872507575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000624582912756112",
            "extra": "mean: 6.02921290909213 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 103.08682173592697,
            "unit": "iter/sec",
            "range": "stddev: 0.0006643326360148469",
            "extra": "mean: 9.700560975307363 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2176.212585204957,
            "unit": "iter/sec",
            "range": "stddev: 0.00008256257723134272",
            "extra": "mean: 459.5139311290305 usec\nrounds: 363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13935.724965440826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014572131924914271",
            "extra": "mean: 71.75801779095796 usec\nrounds: 7813"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 102.47887424674148,
            "unit": "iter/sec",
            "range": "stddev: 0.0006300636578836149",
            "extra": "mean: 9.758108755100782 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.30723328564673,
            "unit": "iter/sec",
            "range": "stddev: 0.00006925708195413188",
            "extra": "mean: 9.774479945205357 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.01304316689986,
            "unit": "iter/sec",
            "range": "stddev: 0.0005367258326025605",
            "extra": "mean: 11.109501076925326 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2716912.9749638825,
            "unit": "iter/sec",
            "range": "stddev: 1.8225489918107425e-8",
            "extra": "mean: 368.06478868273524 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2241.7319601007207,
            "unit": "iter/sec",
            "range": "stddev: 0.00009387169940275131",
            "extra": "mean: 446.08366111489534 usec\nrounds: 1381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149318.11220013702,
            "unit": "iter/sec",
            "range": "stddev: 3.331207355614198e-7",
            "extra": "mean: 6.697111189429318 usec\nrounds: 38313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 763704.0626823925,
            "unit": "iter/sec",
            "range": "stddev: 2.9361121416656697e-7",
            "extra": "mean: 1.3094077259294057 usec\nrounds: 25446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 289.3313426447568,
            "unit": "iter/sec",
            "range": "stddev: 0.00025369198220009644",
            "extra": "mean: 3.456244978020952 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1690266.205382689,
            "unit": "iter/sec",
            "range": "stddev: 8.799158240155745e-8",
            "extra": "mean: 591.6227851065581 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1785.5159071957746,
            "unit": "iter/sec",
            "range": "stddev: 0.00003984766762172729",
            "extra": "mean: 560.0622184153715 usec\nrounds: 1401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.70757116264159,
            "unit": "iter/sec",
            "range": "stddev: 0.00014383457702969035",
            "extra": "mean: 6.0713663187501155 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12002.832331527665,
            "unit": "iter/sec",
            "range": "stddev: 0.000013088769315838583",
            "extra": "mean: 83.3136690057158 usec\nrounds: 6840"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 272.8833145296917,
            "unit": "iter/sec",
            "range": "stddev: 0.0003202550611439319",
            "extra": "mean: 3.6645699709543536 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.28009963584742,
            "unit": "iter/sec",
            "range": "stddev: 0.0007810327473542806",
            "extra": "mean: 9.873607980200452 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.7096298380434,
            "unit": "iter/sec",
            "range": "stddev: 0.00009280645621201388",
            "extra": "mean: 8.951779729731445 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9525144705979317,
            "unit": "iter/sec",
            "range": "stddev: 0.003691396362883907",
            "extra": "mean: 1.0498528168000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10178.138997193846,
            "unit": "iter/sec",
            "range": "stddev: 0.000002016533713596971",
            "extra": "mean: 98.24978812685738 usec\nrounds: 4767"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 173.14661620386104,
            "unit": "iter/sec",
            "range": "stddev: 0.0034602321880207714",
            "extra": "mean: 5.7754521683670115 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 289.3279780623168,
            "unit": "iter/sec",
            "range": "stddev: 0.00023852408627111617",
            "extra": "mean: 3.456285170543083 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11480427.870350046,
            "unit": "iter/sec",
            "range": "stddev: 2.848496665541496e-9",
            "extra": "mean: 87.10476746108534 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 280.69329501229714,
            "unit": "iter/sec",
            "range": "stddev: 0.0002797962152810079",
            "extra": "mean: 3.562607364583433 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 111.15156183614558,
            "unit": "iter/sec",
            "range": "stddev: 0.014523509146758167",
            "extra": "mean: 8.99672468367249 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.720329469317698,
            "unit": "iter/sec",
            "range": "stddev: 0.002702395555408678",
            "extra": "mean: 1.388253629199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1848.8391547668725,
            "unit": "iter/sec",
            "range": "stddev: 0.0028280407891659084",
            "extra": "mean: 540.8799339962562 usec\nrounds: 1409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 98.20941955229698,
            "unit": "iter/sec",
            "range": "stddev: 0.0006353950392548222",
            "extra": "mean: 10.182322679012426 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2702910.4423424974,
            "unit": "iter/sec",
            "range": "stddev: 1.4034802913234759e-8",
            "extra": "mean: 369.97156262899796 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8480.523062371669,
            "unit": "iter/sec",
            "range": "stddev: 0.00001291585894934123",
            "extra": "mean: 117.91725494351044 usec\nrounds: 3742"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 100.25516109901305,
            "unit": "iter/sec",
            "range": "stddev: 0.000631638264761041",
            "extra": "mean: 9.974548831579748 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.84630865904785,
            "unit": "iter/sec",
            "range": "stddev: 0.00022159905627209978",
            "extra": "mean: 8.274973485713742 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.0703605307865,
            "unit": "iter/sec",
            "range": "stddev: 0.00039582474073716147",
            "extra": "mean: 3.9514702468618323 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 274.50972905539965,
            "unit": "iter/sec",
            "range": "stddev: 0.00029213291985465226",
            "extra": "mean: 3.642858136362034 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.93962123353144,
            "unit": "iter/sec",
            "range": "stddev: 0.0007241074525477821",
            "extra": "mean: 10.210372343747961 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 296.68726907025103,
            "unit": "iter/sec",
            "range": "stddev: 0.00020970021843612948",
            "extra": "mean: 3.3705524444434967 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.23696907468239,
            "unit": "iter/sec",
            "range": "stddev: 0.00009693025808506061",
            "extra": "mean: 13.291338185186207 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.2831994946534,
            "unit": "iter/sec",
            "range": "stddev: 0.00023570952059410373",
            "extra": "mean: 10.836208600005648 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.37024088331378,
            "unit": "iter/sec",
            "range": "stddev: 0.0007029667682288096",
            "extra": "mean: 23.05728489473848 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2128.6963112751905,
            "unit": "iter/sec",
            "range": "stddev: 0.00009673711609584068",
            "extra": "mean: 469.771096376332 usec\nrounds: 1297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.8408147786314295,
            "unit": "iter/sec",
            "range": "stddev: 0.00032201022223330426",
            "extra": "mean: 171.20899016666158 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4582.013791711176,
            "unit": "iter/sec",
            "range": "stddev: 0.000022718118575701787",
            "extra": "mean: 218.24465081466832 usec\nrounds: 2271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.54203819994776,
            "unit": "iter/sec",
            "range": "stddev: 0.00038374780357493027",
            "extra": "mean: 21.957734864864857 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.24960445846665,
            "unit": "iter/sec",
            "range": "stddev: 0.000031925264054368116",
            "extra": "mean: 5.1216493000000884 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73397.6398555004,
            "unit": "iter/sec",
            "range": "stddev: 4.0625420750307483e-7",
            "extra": "mean: 13.624416288707957 usec\nrounds: 14771"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 101.68385736284685,
            "unit": "iter/sec",
            "range": "stddev: 0.000497827391334401",
            "extra": "mean: 9.834402686275148 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.64820816468917,
            "unit": "iter/sec",
            "range": "stddev: 0.0007721214957341353",
            "extra": "mean: 10.346803308510319 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2113.440626899781,
            "unit": "iter/sec",
            "range": "stddev: 0.00008913961389635803",
            "extra": "mean: 473.1620975162695 usec\nrounds: 1651"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17498232530741867,
            "unit": "iter/sec",
            "range": "stddev: 0.17461293676515519",
            "extra": "mean: 5.714862905399985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.82760786942474,
            "unit": "iter/sec",
            "range": "stddev: 0.0004542553617910945",
            "extra": "mean: 15.191194581817317 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2711500.202050794,
            "unit": "iter/sec",
            "range": "stddev: 1.4753841068528785e-8",
            "extra": "mean: 368.7995299587313 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2211.3323037251184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000976462028361576",
            "extra": "mean: 452.2160682568791 usec\nrounds: 1216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.6963674964783,
            "unit": "iter/sec",
            "range": "stddev: 0.0007327738144111725",
            "extra": "mean: 10.341650114585951 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8620501227364891,
            "unit": "iter/sec",
            "range": "stddev: 0.004107599952464602",
            "extra": "mean: 1.160025355399989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 510328.158616789,
            "unit": "iter/sec",
            "range": "stddev: 3.0698022539023547e-7",
            "extra": "mean: 1.9595234617475048 usec\nrounds: 2323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.4945140365422,
            "unit": "iter/sec",
            "range": "stddev: 0.0000974112104712958",
            "extra": "mean: 6.269808125004772 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.66997154968715,
            "unit": "iter/sec",
            "range": "stddev: 0.0005461854012525348",
            "extra": "mean: 22.38640333333733 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7075984.518651399,
            "unit": "iter/sec",
            "range": "stddev: 4.092595653419572e-9",
            "extra": "mean: 141.323090428481 nsec\nrounds: 64936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.384428297007206,
            "unit": "iter/sec",
            "range": "stddev: 0.000698330500086848",
            "extra": "mean: 87.83928133333536 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.731556490197,
            "unit": "iter/sec",
            "range": "stddev: 0.000026891313610984082",
            "extra": "mean: 9.030849305261318 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.34336869723983,
            "unit": "iter/sec",
            "range": "stddev: 0.0002646786637238651",
            "extra": "mean: 16.851082470593074 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 750.4042724605292,
            "unit": "iter/sec",
            "range": "stddev: 0.000009444754543907252",
            "extra": "mean: 1.332615013932506 msec\nrounds: 646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.562836011859715,
            "unit": "iter/sec",
            "range": "stddev: 0.001702584738939767",
            "extra": "mean: 390.1927378000096 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.898249945667125,
            "unit": "iter/sec",
            "range": "stddev: 0.0007206763889600949",
            "extra": "mean: 37.1771398518469 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5491461.252501131,
            "unit": "iter/sec",
            "range": "stddev: 9.274512621078223e-9",
            "extra": "mean: 182.1008933723187 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2278.0174972609793,
            "unit": "iter/sec",
            "range": "stddev: 0.00007643542726229897",
            "extra": "mean: 438.97819099386646 usec\nrounds: 1288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2213.089251746276,
            "unit": "iter/sec",
            "range": "stddev: 0.00007925040173344762",
            "extra": "mean: 451.8570587295261 usec\nrounds: 1873"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.5371056961087,
            "unit": "iter/sec",
            "range": "stddev: 0.00002897740871526271",
            "extra": "mean: 1.450248277778278 msec\nrounds: 594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.88941588688843,
            "unit": "iter/sec",
            "range": "stddev: 0.0007183184242027353",
            "extra": "mean: 10.215609021056002 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.3898051438616,
            "unit": "iter/sec",
            "range": "stddev: 0.00009913271727821822",
            "extra": "mean: 1.843692470832418 msec\nrounds: 480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.865816947453926,
            "unit": "iter/sec",
            "range": "stddev: 0.0013153318654467296",
            "extra": "mean: 63.02858550000323 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 287.21221732589606,
            "unit": "iter/sec",
            "range": "stddev: 0.00021054204642561347",
            "extra": "mean: 3.48174603890653 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 282.46872476239776,
            "unit": "iter/sec",
            "range": "stddev: 0.000223312752062173",
            "extra": "mean: 3.5402149418175872 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 210.54239662224566,
            "unit": "iter/sec",
            "range": "stddev: 0.011052556739591286",
            "extra": "mean: 4.749637203922382 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.23135831859429,
            "unit": "iter/sec",
            "range": "stddev: 0.0005893788655515292",
            "extra": "mean: 10.18004858241596 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1175.2614476973818,
            "unit": "iter/sec",
            "range": "stddev: 0.000013243089513744012",
            "extra": "mean: 850.8745028259365 usec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 102.27069026141217,
            "unit": "iter/sec",
            "range": "stddev: 0.0007079801741675049",
            "extra": "mean: 9.777972529997783 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6050570.321867897,
            "unit": "iter/sec",
            "range": "stddev: 9.073620484967498e-9",
            "extra": "mean: 165.27367616644005 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 292.66593792832487,
            "unit": "iter/sec",
            "range": "stddev: 0.0001280097995567706",
            "extra": "mean: 3.4168650000018257 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.43494025875896,
            "unit": "iter/sec",
            "range": "stddev: 0.0010879801990886643",
            "extra": "mean: 10.056827081081417 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8171907600067232,
            "unit": "iter/sec",
            "range": "stddev: 0.001386248853146191",
            "extra": "mean: 550.2999585999987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 102.20858161712495,
            "unit": "iter/sec",
            "range": "stddev: 0.0007666607652202032",
            "extra": "mean: 9.783914268040785 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9469985960308372,
            "unit": "iter/sec",
            "range": "stddev: 0.0008297468422507726",
            "extra": "mean: 1.055967774599992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 78.23352512375166,
            "unit": "iter/sec",
            "range": "stddev: 0.00003539245004721187",
            "extra": "mean: 12.782243909093653 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.05198604207478,
            "unit": "iter/sec",
            "range": "stddev: 0.0006044776411525283",
            "extra": "mean: 20.386534382975665 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.76880876393518,
            "unit": "iter/sec",
            "range": "stddev: 0.0006523247228946325",
            "extra": "mean: 10.2282109462387 msec\nrounds: 93"
          }
        ]
      }
    ]
  }
}