window.BENCHMARK_DATA = {
  "lastUpdate": 1680172633830,
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
      },
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
          "id": "0ae639d6ca8f91cd098f069b4bb118b9c6d05059",
          "message": "feat(ux): move `ibis.expr.selectors` to `ibis.selectors` and deprecate for removal in 6.0",
          "timestamp": "2023-03-30T06:24:07-04:00",
          "tree_id": "2ade3b4b8d3844169913bfea681bb42451ad1131",
          "url": "https://github.com/ibis-project/ibis/commit/0ae639d6ca8f91cd098f069b4bb118b9c6d05059"
        },
        "date": 1680172554691,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12740.985727858231,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020689987457407087",
            "extra": "mean: 78.48686289738909 usec\nrounds: 4369"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1755.4146725568455,
            "unit": "iter/sec",
            "range": "stddev: 0.000015841645488454076",
            "extra": "mean: 569.6659687499662 usec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.24615976147514,
            "unit": "iter/sec",
            "range": "stddev: 0.0003483784541563581",
            "extra": "mean: 16.065248102565057 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 225.85647144778028,
            "unit": "iter/sec",
            "range": "stddev: 0.0038687140305665854",
            "extra": "mean: 4.427590644579815 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 526.1299517601173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000581034928817652",
            "extra": "mean: 1.9006711111097099 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.584646188253622,
            "unit": "iter/sec",
            "range": "stddev: 0.0036049026840052913",
            "extra": "mean: 386.90015080001103 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 730711.2493176004,
            "unit": "iter/sec",
            "range": "stddev: 1.5188015069855754e-7",
            "extra": "mean: 1.3685296359319554 usec\nrounds: 22574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6103207.994194463,
            "unit": "iter/sec",
            "range": "stddev: 3.0005624061903436e-7",
            "extra": "mean: 163.8482583182465 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74524.9029782636,
            "unit": "iter/sec",
            "range": "stddev: 7.523920732107957e-7",
            "extra": "mean: 13.418333470245056 usec\nrounds: 12166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.2711154536433,
            "unit": "iter/sec",
            "range": "stddev: 0.01186410466492121",
            "extra": "mean: 11.07774059259883 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 316.35392882223675,
            "unit": "iter/sec",
            "range": "stddev: 0.00022319579063470818",
            "extra": "mean: 3.1610165352550834 msec\nrounds: 312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.25386915803323,
            "unit": "iter/sec",
            "range": "stddev: 0.010883532233334528",
            "extra": "mean: 11.593682808220615 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 110.10655644840834,
            "unit": "iter/sec",
            "range": "stddev: 0.0005668612640014791",
            "extra": "mean: 9.082111295239365 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 140.97292109059464,
            "unit": "iter/sec",
            "range": "stddev: 0.00008062908491195921",
            "extra": "mean: 7.093560892856589 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8442.87151753897,
            "unit": "iter/sec",
            "range": "stddev: 0.000013595702916915452",
            "extra": "mean: 118.44311475339047 usec\nrounds: 4026"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 110.24952354569866,
            "unit": "iter/sec",
            "range": "stddev: 0.0005893651989700704",
            "extra": "mean: 9.070333982763179 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 105.11024376743305,
            "unit": "iter/sec",
            "range": "stddev: 0.0006156031695544932",
            "extra": "mean: 9.513820576923028 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8374050380802691,
            "unit": "iter/sec",
            "range": "stddev: 0.0024924912357791483",
            "extra": "mean: 1.194165253999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 106.74635721774519,
            "unit": "iter/sec",
            "range": "stddev: 0.01120260633867534",
            "extra": "mean: 9.368001176472587 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.53209087278096,
            "unit": "iter/sec",
            "range": "stddev: 0.000607195292965194",
            "extra": "mean: 8.655603758622854 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.2440841931559,
            "unit": "iter/sec",
            "range": "stddev: 0.0003032625309954018",
            "extra": "mean: 10.840803600001436 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 157.7271167710915,
            "unit": "iter/sec",
            "range": "stddev: 0.0036553998787784885",
            "extra": "mean: 6.340063905760064 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.39456695859633,
            "unit": "iter/sec",
            "range": "stddev: 0.0005735777601328108",
            "extra": "mean: 8.23760094915176 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5435.388689645765,
            "unit": "iter/sec",
            "range": "stddev: 0.000051186033993008306",
            "extra": "mean: 183.9794828114072 usec\nrounds: 3956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5119.4288613309245,
            "unit": "iter/sec",
            "range": "stddev: 0.00005378244632036914",
            "extra": "mean: 195.33428964183804 usec\nrounds: 3128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5442.675407382092,
            "unit": "iter/sec",
            "range": "stddev: 0.000046721789301036404",
            "extra": "mean: 183.7331689197678 usec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 736.7616708310034,
            "unit": "iter/sec",
            "range": "stddev: 0.00005052462122106727",
            "extra": "mean: 1.357291020408386 msec\nrounds: 637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 286.3756534511188,
            "unit": "iter/sec",
            "range": "stddev: 0.00027476844585717935",
            "extra": "mean: 3.4919169557501823 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.6207790944396,
            "unit": "iter/sec",
            "range": "stddev: 0.00008449883291878204",
            "extra": "mean: 3.4527909327732305 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14077.706765599885,
            "unit": "iter/sec",
            "range": "stddev: 0.000004685583287022152",
            "extra": "mean: 71.03429675375736 usec\nrounds: 6716"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1979866.192155978,
            "unit": "iter/sec",
            "range": "stddev: 3.13760881560381e-7",
            "extra": "mean: 505.08463852855056 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5246.4355716844,
            "unit": "iter/sec",
            "range": "stddev: 0.00004242332088082301",
            "extra": "mean: 190.6055999995715 usec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5785.780686276145,
            "unit": "iter/sec",
            "range": "stddev: 0.00004470869200618914",
            "extra": "mean: 172.8375225787588 usec\nrounds: 3211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1815807.3540934534,
            "unit": "iter/sec",
            "range": "stddev: 8.751353288929453e-8",
            "extra": "mean: 550.7192146488759 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.4586362181911,
            "unit": "iter/sec",
            "range": "stddev: 0.000027671921481996258",
            "extra": "mean: 5.038833376344336 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 315.1784508330372,
            "unit": "iter/sec",
            "range": "stddev: 0.0001897201860718092",
            "extra": "mean: 3.172805746576058 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 109.17684638578623,
            "unit": "iter/sec",
            "range": "stddev: 0.0005983213142206502",
            "extra": "mean: 9.159451230771127 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.92910150804377,
            "unit": "iter/sec",
            "range": "stddev: 0.00006376515096216493",
            "extra": "mean: 13.17018086792535 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.51677663821776,
            "unit": "iter/sec",
            "range": "stddev: 0.0005997614129571157",
            "extra": "mean: 8.809270573168561 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 104.37017977707455,
            "unit": "iter/sec",
            "range": "stddev: 0.000613635563513041",
            "extra": "mean: 9.581280803922263 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.84746117313432,
            "unit": "iter/sec",
            "range": "stddev: 0.0000726144976676281",
            "extra": "mean: 8.940748314814671 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.52795216995528,
            "unit": "iter/sec",
            "range": "stddev: 0.00011630241819968102",
            "extra": "mean: 15.260663074078215 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5246.243231568035,
            "unit": "iter/sec",
            "range": "stddev: 0.00005278383366539925",
            "extra": "mean: 190.6125880673498 usec\nrounds: 2112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.287575682784064,
            "unit": "iter/sec",
            "range": "stddev: 0.0044997172691655886",
            "extra": "mean: 97.20463118181173 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11078528.30298498,
            "unit": "iter/sec",
            "range": "stddev: 3.017711725874492e-9",
            "extra": "mean: 90.26469695723185 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8805611363724987,
            "unit": "iter/sec",
            "range": "stddev: 0.02066862989259024",
            "extra": "mean: 1.1356394902000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.59119014752196,
            "unit": "iter/sec",
            "range": "stddev: 0.00860981246152827",
            "extra": "mean: 3.765185130743804 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5472.325297001624,
            "unit": "iter/sec",
            "range": "stddev: 0.000025922340399272195",
            "extra": "mean: 182.73767470437406 usec\nrounds: 2530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1981180.2165881996,
            "unit": "iter/sec",
            "range": "stddev: 9.320852991396164e-8",
            "extra": "mean: 504.749639445777 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5512.028307921714,
            "unit": "iter/sec",
            "range": "stddev: 0.00007472966829173321",
            "extra": "mean: 181.42141950955354 usec\nrounds: 2081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5539.326582393301,
            "unit": "iter/sec",
            "range": "stddev: 0.00005514782256611206",
            "extra": "mean: 180.52735926032793 usec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.665380118957358,
            "unit": "iter/sec",
            "range": "stddev: 0.00014637005520429897",
            "extra": "mean: 176.5106628333418 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 321.47058292846344,
            "unit": "iter/sec",
            "range": "stddev: 0.0001821542458183979",
            "extra": "mean: 3.1107045344255626 msec\nrounds: 305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.13980635322815,
            "unit": "iter/sec",
            "range": "stddev: 0.0001155965998733457",
            "extra": "mean: 9.695577637360001 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 164.76256090583954,
            "unit": "iter/sec",
            "range": "stddev: 0.00005046481058625793",
            "extra": "mean: 6.069339991452863 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 104.02361252787611,
            "unit": "iter/sec",
            "range": "stddev: 0.014066454067278716",
            "extra": "mean: 9.613201999998044 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 324.88729010671085,
            "unit": "iter/sec",
            "range": "stddev: 0.00019268896258913315",
            "extra": "mean: 3.0779905230258313 msec\nrounds: 304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6955517.911681711,
            "unit": "iter/sec",
            "range": "stddev: 5.1350209812955035e-9",
            "extra": "mean: 143.77074614681945 nsec\nrounds: 59881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.47102628548285,
            "unit": "iter/sec",
            "range": "stddev: 0.0006908127743446073",
            "extra": "mean: 8.370230264955143 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.63222456217994,
            "unit": "iter/sec",
            "range": "stddev: 0.0006070456694689262",
            "extra": "mean: 8.289658949997639 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.683425126080984,
            "unit": "iter/sec",
            "range": "stddev: 0.0004383516177190044",
            "extra": "mean: 37.476448217383364 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2703429.870153445,
            "unit": "iter/sec",
            "range": "stddev: 1.782124335817173e-8",
            "extra": "mean: 369.9004775528369 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.671934226317407,
            "unit": "iter/sec",
            "range": "stddev: 0.07210156178342174",
            "extra": "mean: 1.4882409034000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12143.23277267716,
            "unit": "iter/sec",
            "range": "stddev: 0.000011389624483634736",
            "extra": "mean: 82.35039373123494 usec\nrounds: 4658"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7496415619560033,
            "unit": "iter/sec",
            "range": "stddev: 0.0005310363872467607",
            "extra": "mean: 571.5456363999806 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.97073006751587,
            "unit": "iter/sec",
            "range": "stddev: 0.0005055063800730135",
            "extra": "mean: 22.742401558139402 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 308.41011415534433,
            "unit": "iter/sec",
            "range": "stddev: 0.00021941775085871192",
            "extra": "mean: 3.242435815500869 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.41755068368234,
            "unit": "iter/sec",
            "range": "stddev: 0.02031364449135796",
            "extra": "mean: 11.439350475723904 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.396976023646644,
            "unit": "iter/sec",
            "range": "stddev: 0.0005969262657118969",
            "extra": "mean: 22.524056581407294 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.2237327805059,
            "unit": "iter/sec",
            "range": "stddev: 0.0007405120769356388",
            "extra": "mean: 8.38759177118726 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.4243931689175,
            "unit": "iter/sec",
            "range": "stddev: 0.00011349354892246378",
            "extra": "mean: 3.4196873563224086 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.659280673322284,
            "unit": "iter/sec",
            "range": "stddev: 0.00016095072318200688",
            "extra": "mean: 63.85989375001344 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.6890345807164,
            "unit": "iter/sec",
            "range": "stddev: 0.00011118508894121395",
            "extra": "mean: 6.223199999983109 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 322.9950891003302,
            "unit": "iter/sec",
            "range": "stddev: 0.00020136884554188006",
            "extra": "mean: 3.0960223041947725 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5558904.127259303,
            "unit": "iter/sec",
            "range": "stddev: 7.68839319200429e-9",
            "extra": "mean: 179.89157163130753 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 337.7533095113894,
            "unit": "iter/sec",
            "range": "stddev: 0.000012352344120922738",
            "extra": "mean: 2.9607407887332013 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8762773282993594,
            "unit": "iter/sec",
            "range": "stddev: 0.002661148057403806",
            "extra": "mean: 1.1411912276000067 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.866494397615675,
            "unit": "iter/sec",
            "range": "stddev: 0.00026052169791439196",
            "extra": "mean: 16.987592181818524 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1176.872663320655,
            "unit": "iter/sec",
            "range": "stddev: 0.00006771408032815293",
            "extra": "mean: 849.7095999990412 usec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.64772740246337,
            "unit": "iter/sec",
            "range": "stddev: 0.00005597662059732377",
            "extra": "mean: 6.073573050635611 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.25581259113631,
            "unit": "iter/sec",
            "range": "stddev: 0.02920936430665442",
            "extra": "mean: 27.581784230771216 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.28917331865489,
            "unit": "iter/sec",
            "range": "stddev: 0.00020112169710932",
            "extra": "mean: 8.313300128440707 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.77101578744028,
            "unit": "iter/sec",
            "range": "stddev: 0.0009338434334369918",
            "extra": "mean: 23.38031916215678 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148074.89755187134,
            "unit": "iter/sec",
            "range": "stddev: 3.1817758307356823e-7",
            "extra": "mean: 6.753339131298032 usec\nrounds: 44844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17203505012190845,
            "unit": "iter/sec",
            "range": "stddev: 0.09749898121621323",
            "extra": "mean: 5.812768963600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 691.968356708889,
            "unit": "iter/sec",
            "range": "stddev: 0.000019265680570608413",
            "extra": "mean: 1.44515278813638 msec\nrounds: 590"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.61327986047951,
            "unit": "iter/sec",
            "range": "stddev: 0.000675928200766574",
            "extra": "mean: 10.458798207311963 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 487364.4766635625,
            "unit": "iter/sec",
            "range": "stddev: 3.084788073082578e-7",
            "extra": "mean: 2.0518524592639116 usec\nrounds: 2135"
          }
        ]
      }
    ]
  }
}