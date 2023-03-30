window.BENCHMARK_DATA = {
  "lastUpdate": 1680172171983,
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
          "id": "86187899803a34921f53063ec114caf693cfdff4",
          "message": "fix(ux): use guaranteed length-1 characters for `NULL` values",
          "timestamp": "2023-03-30T06:18:13-04:00",
          "tree_id": "0b36f09d3692a393952d9b246b4a9feb0266efbd",
          "url": "https://github.com/ibis-project/ibis/commit/86187899803a34921f53063ec114caf693cfdff4"
        },
        "date": 1680172090433,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 88.08249268961679,
            "unit": "iter/sec",
            "range": "stddev: 0.000963568938958294",
            "extra": "mean: 11.35299387500055 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 622399.9369191637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021701246263832917",
            "extra": "mean: 1.6066839674662088 usec\nrounds: 22523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 149.36344999229127,
            "unit": "iter/sec",
            "range": "stddev: 0.0006524924874273404",
            "extra": "mean: 6.695078347826128 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 108.89879482661253,
            "unit": "iter/sec",
            "range": "stddev: 0.0009909467161680046",
            "extra": "mean: 9.182838080000693 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4188.23067615653,
            "unit": "iter/sec",
            "range": "stddev: 0.00010459467120878457",
            "extra": "mean: 238.76430820608084 usec\nrounds: 3144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 261.15225685828034,
            "unit": "iter/sec",
            "range": "stddev: 0.00040556000608590116",
            "extra": "mean: 3.8291838333324097 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.3449657601904,
            "unit": "iter/sec",
            "range": "stddev: 0.00030916700312074515",
            "extra": "mean: 7.074889399999051 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6174787.735875101,
            "unit": "iter/sec",
            "range": "stddev: 3.776514944055501e-7",
            "extra": "mean: 161.94888679178857 nsec\nrounds: 64103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 6897.136850882077,
            "unit": "iter/sec",
            "range": "stddev: 0.0022242285203642473",
            "extra": "mean: 144.9876987538836 usec\nrounds: 3210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6436925507834135,
            "unit": "iter/sec",
            "range": "stddev: 0.02692955087324378",
            "extra": "mean: 1.5535366981999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11614225.167946864,
            "unit": "iter/sec",
            "range": "stddev: 2.173351440904702e-7",
            "extra": "mean: 86.10130986263205 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.502421860450067,
            "unit": "iter/sec",
            "range": "stddev: 0.004430806735116472",
            "extra": "mean: 74.06078778571563 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74203.10252413762,
            "unit": "iter/sec",
            "range": "stddev: 0.000006307096712599567",
            "extra": "mean: 13.476525454912196 usec\nrounds: 15773"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 42.985441021658254,
            "unit": "iter/sec",
            "range": "stddev: 0.0013393945335584804",
            "extra": "mean: 23.26369059459339 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 77.31226792054068,
            "unit": "iter/sec",
            "range": "stddev: 0.01877403625825916",
            "extra": "mean: 12.934557824998372 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.18283589911549,
            "unit": "iter/sec",
            "range": "stddev: 0.0005903073663900966",
            "extra": "mean: 9.2436105199954 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 130.3152902865727,
            "unit": "iter/sec",
            "range": "stddev: 0.000660325249503727",
            "extra": "mean: 7.6736965999993405 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 222.4150845335235,
            "unit": "iter/sec",
            "range": "stddev: 0.0005215501466683506",
            "extra": "mean: 4.496097924730798 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4458.326106324941,
            "unit": "iter/sec",
            "range": "stddev: 0.00014555921588599402",
            "extra": "mean: 224.29942901245363 usec\nrounds: 648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5622480118195955,
            "unit": "iter/sec",
            "range": "stddev: 0.027854445286993705",
            "extra": "mean: 1.7785745418000034 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 219.33160993565795,
            "unit": "iter/sec",
            "range": "stddev: 0.008483655414369408",
            "extra": "mean: 4.559306341176062 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.217822558073513,
            "unit": "iter/sec",
            "range": "stddev: 0.013572934548466285",
            "extra": "mean: 450.8926994000092 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1061244691783285,
            "unit": "iter/sec",
            "range": "stddev: 0.1294730409366571",
            "extra": "mean: 9.422897544199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4354.043121906046,
            "unit": "iter/sec",
            "range": "stddev: 0.00010203176409656376",
            "extra": "mean: 229.6715884527656 usec\nrounds: 2165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 270.30254029704645,
            "unit": "iter/sec",
            "range": "stddev: 0.0006193755003644552",
            "extra": "mean: 3.699558276074873 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.67028455902276,
            "unit": "iter/sec",
            "range": "stddev: 0.022204853091599915",
            "extra": "mean: 28.034539459457466 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.641071002334485,
            "unit": "iter/sec",
            "range": "stddev: 0.0022911987553616005",
            "extra": "mean: 25.8791998787918 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.450091126561304,
            "unit": "iter/sec",
            "range": "stddev: 0.0021324708772046085",
            "extra": "mean: 20.63979606122516 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11389.175533822017,
            "unit": "iter/sec",
            "range": "stddev: 0.000033727503740473126",
            "extra": "mean: 87.80266815893184 usec\nrounds: 3128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1864865.1483572149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019877107392048902",
            "extra": "mean: 536.2318025412795 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 103.8665259362235,
            "unit": "iter/sec",
            "range": "stddev: 0.0005633158733158823",
            "extra": "mean: 9.627740900990794 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.03576304417398,
            "unit": "iter/sec",
            "range": "stddev: 0.0013645472384910672",
            "extra": "mean: 16.11973402000274 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3105144409629004,
            "unit": "iter/sec",
            "range": "stddev: 0.009508842039243874",
            "extra": "mean: 763.0591230000107 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 85.43414085477761,
            "unit": "iter/sec",
            "range": "stddev: 0.0008965709925725537",
            "extra": "mean: 11.704922528568723 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1681.5459790195382,
            "unit": "iter/sec",
            "range": "stddev: 0.00010717284291611668",
            "extra": "mean: 594.6908454939019 usec\nrounds: 1398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 105.04790752072344,
            "unit": "iter/sec",
            "range": "stddev: 0.0006651542181765162",
            "extra": "mean: 9.519466152171796 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.867017182114125,
            "unit": "iter/sec",
            "range": "stddev: 0.0012956614109805615",
            "extra": "mean: 16.16370152542447 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 146.51306493721108,
            "unit": "iter/sec",
            "range": "stddev: 0.0007124606827572778",
            "extra": "mean: 6.825329880502841 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.84110036260803,
            "unit": "iter/sec",
            "range": "stddev: 0.001316606758532827",
            "extra": "mean: 15.422316931818614 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4068.296846736907,
            "unit": "iter/sec",
            "range": "stddev: 0.00008500644937900813",
            "extra": "mean: 245.80310573995564 usec\nrounds: 1986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 92.4178530927467,
            "unit": "iter/sec",
            "range": "stddev: 0.001147788703870201",
            "extra": "mean: 10.820420151899025 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 216.17886820875881,
            "unit": "iter/sec",
            "range": "stddev: 0.0009138477433676549",
            "extra": "mean: 4.625799035242999 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 93.44513886061212,
            "unit": "iter/sec",
            "range": "stddev: 0.016333732476041325",
            "extra": "mean: 10.701466252745954 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7353.51288666305,
            "unit": "iter/sec",
            "range": "stddev: 0.000059879355014456404",
            "extra": "mean: 135.98942647039948 usec\nrounds: 2924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 239.6483074814745,
            "unit": "iter/sec",
            "range": "stddev: 0.0006376856174810352",
            "extra": "mean: 4.172781399999259 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145958.72671951636,
            "unit": "iter/sec",
            "range": "stddev: 0.000012406923048952014",
            "extra": "mean: 6.851251874248424 usec\nrounds: 42017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 93.9033035989901,
            "unit": "iter/sec",
            "range": "stddev: 0.0010992645504062756",
            "extra": "mean: 10.649252599998565 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 257.94975896939184,
            "unit": "iter/sec",
            "range": "stddev: 0.0003476063742363418",
            "extra": "mean: 3.876723917073555 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 241.71016099053452,
            "unit": "iter/sec",
            "range": "stddev: 0.0006370281826263228",
            "extra": "mean: 4.137186438095834 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4395.4592765643465,
            "unit": "iter/sec",
            "range": "stddev: 0.00009709594470080613",
            "extra": "mean: 227.50751106529125 usec\nrounds: 1943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 257.03361134439297,
            "unit": "iter/sec",
            "range": "stddev: 0.0005011161240269046",
            "extra": "mean: 3.8905417652173306 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4448.998987367744,
            "unit": "iter/sec",
            "range": "stddev: 0.00010663572647606752",
            "extra": "mean: 224.76966230816146 usec\nrounds: 2218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 178.34744529725089,
            "unit": "iter/sec",
            "range": "stddev: 0.00047961404572135943",
            "extra": "mean: 5.607032936935567 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3889.6352707239257,
            "unit": "iter/sec",
            "range": "stddev: 0.00008344261079587227",
            "extra": "mean: 257.0935140183165 usec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 107.80332891362984,
            "unit": "iter/sec",
            "range": "stddev: 0.001066276933918128",
            "extra": "mean: 9.27615139604068 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.07441187092912,
            "unit": "iter/sec",
            "range": "stddev: 0.002703035382498275",
            "extra": "mean: 43.33804933333427 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 95.29270927462457,
            "unit": "iter/sec",
            "range": "stddev: 0.0014959583522200677",
            "extra": "mean: 10.493982253333721 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.144200412636481,
            "unit": "iter/sec",
            "range": "stddev: 0.003215378798334015",
            "extra": "mean: 194.3936704999961 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 707.0518535635671,
            "unit": "iter/sec",
            "range": "stddev: 0.0002286757945472313",
            "extra": "mean: 1.4143234261532072 msec\nrounds: 650"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.65137999413045,
            "unit": "iter/sec",
            "range": "stddev: 0.0014133710232193616",
            "extra": "mean: 10.79314738823481 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11678.01433679227,
            "unit": "iter/sec",
            "range": "stddev: 0.000026133158819314567",
            "extra": "mean: 85.63099608890195 usec\nrounds: 5625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 607.066016528145,
            "unit": "iter/sec",
            "range": "stddev: 0.00020957742402403465",
            "extra": "mean: 1.6472673033471272 msec\nrounds: 478"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 143.295344244,
            "unit": "iter/sec",
            "range": "stddev: 0.004102993594981011",
            "extra": "mean: 6.978593793649171 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 66.6030142294077,
            "unit": "iter/sec",
            "range": "stddev: 0.02586323999934631",
            "extra": "mean: 15.01433548571234 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 208.93846120137704,
            "unit": "iter/sec",
            "range": "stddev: 0.0038511747103858727",
            "extra": "mean: 4.786098233183549 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 518971.06919546955,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022600960758297467",
            "extra": "mean: 1.9268896849110326 usec\nrounds: 2094"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.707512085528549,
            "unit": "iter/sec",
            "range": "stddev: 0.005836793657867893",
            "extra": "mean: 114.84336629999632 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 259.58572168486523,
            "unit": "iter/sec",
            "range": "stddev: 0.0005727149662952795",
            "extra": "mean: 3.852292004003175 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1799600.9892585708,
            "unit": "iter/sec",
            "range": "stddev: 0.000001016545499305067",
            "extra": "mean: 555.6787343243217 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 456.6112955926883,
            "unit": "iter/sec",
            "range": "stddev: 0.0003605925748238731",
            "extra": "mean: 2.1900465661980286 msec\nrounds: 355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 108.7324119400388,
            "unit": "iter/sec",
            "range": "stddev: 0.0010419605986394201",
            "extra": "mean: 9.196889705265221 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 313.0132606692585,
            "unit": "iter/sec",
            "range": "stddev: 0.0004394660046520566",
            "extra": "mean: 3.1947528288797877 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5020187.075676168,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013528306339668934",
            "extra": "mean: 199.1957640074941 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.26466546366957,
            "unit": "iter/sec",
            "range": "stddev: 0.0012990301700661257",
            "extra": "mean: 11.202640986841503 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5114225647322638,
            "unit": "iter/sec",
            "range": "stddev: 0.06752432817976786",
            "extra": "mean: 1.9553302278000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1760211.6473239902,
            "unit": "iter/sec",
            "range": "stddev: 0.000003446667945871716",
            "extra": "mean: 568.1135001692991 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3940.2908181285825,
            "unit": "iter/sec",
            "range": "stddev: 0.00014608671524819126",
            "extra": "mean: 253.7883740456863 usec\nrounds: 1703"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5017353.498893749,
            "unit": "iter/sec",
            "range": "stddev: 4.52315199376467e-7",
            "extra": "mean: 199.3082608631859 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.78645998811815,
            "unit": "iter/sec",
            "range": "stddev: 0.0010144768899139657",
            "extra": "mean: 11.794336031250019 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.08614250918008,
            "unit": "iter/sec",
            "range": "stddev: 0.0010932132819236233",
            "extra": "mean: 11.352523467533874 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1032.2111414851383,
            "unit": "iter/sec",
            "range": "stddev: 0.00023051048058510731",
            "extra": "mean: 968.7940381666554 usec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.380123947863694,
            "unit": "iter/sec",
            "range": "stddev: 0.0013550628838732886",
            "extra": "mean: 29.086573437503205 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 103.38025083709698,
            "unit": "iter/sec",
            "range": "stddev: 0.0010845524718762771",
            "extra": "mean: 9.673027410000827 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 103.12752627732158,
            "unit": "iter/sec",
            "range": "stddev: 0.0012524174372452966",
            "extra": "mean: 9.696732153846947 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5781631872376662,
            "unit": "iter/sec",
            "range": "stddev: 0.06599555763789834",
            "extra": "mean: 1.729615482400004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4388.446332454292,
            "unit": "iter/sec",
            "range": "stddev: 0.00007732728162691433",
            "extra": "mean: 227.87107879264818 usec\nrounds: 2221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.99880308060615,
            "unit": "iter/sec",
            "range": "stddev: 0.0010221763150399291",
            "extra": "mean: 10.526448413792156 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2529446.3814620874,
            "unit": "iter/sec",
            "range": "stddev: 7.979985654315323e-7",
            "extra": "mean: 395.34342666008706 nsec\nrounds: 133334"
          }
        ]
      }
    ]
  }
}