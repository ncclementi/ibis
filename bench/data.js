window.BENCHMARK_DATA = {
  "lastUpdate": 1680355153365,
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
          "id": "8b8bc5c3202715c1009c4d409755eb4c5df9c6a1",
          "message": "chore: bring back incorrectly removed snapshots",
          "timestamp": "2023-04-01T09:11:33-04:00",
          "tree_id": "d671eca0e16959c88637d3691be4db00bbcd474b",
          "url": "https://github.com/ibis-project/ibis/commit/8b8bc5c3202715c1009c4d409755eb4c5df9c6a1"
        },
        "date": 1680355059783,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7142.317943440462,
            "unit": "iter/sec",
            "range": "stddev: 0.00001814414124324151",
            "extra": "mean: 140.0105691064068 usec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.3898217719541,
            "unit": "iter/sec",
            "range": "stddev: 0.00012951853985378477",
            "extra": "mean: 7.072644886793107 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 63158.34803439461,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019685344812467313",
            "extra": "mean: 15.83321969497085 usec\nrounds: 11211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.4360785289366,
            "unit": "iter/sec",
            "range": "stddev: 0.00022122274246223409",
            "extra": "mean: 3.591488593300507 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 96.70094838735062,
            "unit": "iter/sec",
            "range": "stddev: 0.00028913823766461367",
            "extra": "mean: 10.34116021276591 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 142.44670626668534,
            "unit": "iter/sec",
            "range": "stddev: 0.0001179186036260646",
            "extra": "mean: 7.0201693405800745 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5154172.695907818,
            "unit": "iter/sec",
            "range": "stddev: 3.0863613820668177e-8",
            "extra": "mean: 194.01755800568287 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 80.85953743344682,
            "unit": "iter/sec",
            "range": "stddev: 0.01814538438174221",
            "extra": "mean: 12.367124914894195 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4271.653109726347,
            "unit": "iter/sec",
            "range": "stddev: 0.00016381454635089205",
            "extra": "mean: 234.10140625020523 usec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4600.200953546873,
            "unit": "iter/sec",
            "range": "stddev: 0.00005612734535050268",
            "extra": "mean: 217.38180790319046 usec\nrounds: 2733"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 175.98583556814552,
            "unit": "iter/sec",
            "range": "stddev: 0.00013674902710273567",
            "extra": "mean: 5.68227548979519 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 100.03074997217236,
            "unit": "iter/sec",
            "range": "stddev: 0.0006702821859780151",
            "extra": "mean: 9.996925948052883 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 98.67383157757114,
            "unit": "iter/sec",
            "range": "stddev: 0.0007746267257033891",
            "extra": "mean: 10.134399202020074 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.075328137672052,
            "unit": "iter/sec",
            "range": "stddev: 0.0007831152030455831",
            "extra": "mean: 45.299439888890134 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7480029486659217,
            "unit": "iter/sec",
            "range": "stddev: 0.0055185685100649",
            "extra": "mean: 1.3368931255999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.07907873011644,
            "unit": "iter/sec",
            "range": "stddev: 0.0005447856304383759",
            "extra": "mean: 19.968418456520492 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8088738.169154969,
            "unit": "iter/sec",
            "range": "stddev: 1.1168856625361074e-8",
            "extra": "mean: 123.62867719141501 nsec\nrounds: 78734"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.108170241017774,
            "unit": "iter/sec",
            "range": "stddev: 0.0006876107243442069",
            "extra": "mean: 109.7915358999984 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 250.26683902979394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000704394848976163",
            "extra": "mean: 3.9957351276608857 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 274.5715349211742,
            "unit": "iter/sec",
            "range": "stddev: 0.00022556765336029878",
            "extra": "mean: 3.642038131473048 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4827.245284072965,
            "unit": "iter/sec",
            "range": "stddev: 0.000060902627428032415",
            "extra": "mean: 207.1574865481571 usec\nrounds: 3085"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 90.4677248950829,
            "unit": "iter/sec",
            "range": "stddev: 0.014742561819542152",
            "extra": "mean: 11.053665836735904 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 630451.2656712923,
            "unit": "iter/sec",
            "range": "stddev: 0.000014544781760285411",
            "extra": "mean: 1.5861654253881454 usec\nrounds: 22421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1041.4556385314115,
            "unit": "iter/sec",
            "range": "stddev: 0.00004197202566517153",
            "extra": "mean: 960.1945229372714 usec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1695444.6930029967,
            "unit": "iter/sec",
            "range": "stddev: 3.39854876660534e-7",
            "extra": "mean: 589.8157599165239 nsec\nrounds: 136968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1523.2557954787405,
            "unit": "iter/sec",
            "range": "stddev: 0.000019083299583329684",
            "extra": "mean: 656.488557580516 usec\nrounds: 1207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4564.9144925916335,
            "unit": "iter/sec",
            "range": "stddev: 0.00009169310464745616",
            "extra": "mean: 219.0621536554283 usec\nrounds: 2024"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10480.894221153985,
            "unit": "iter/sec",
            "range": "stddev: 0.000016184194146218117",
            "extra": "mean: 95.41170618644945 usec\nrounds: 4833"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 103.61276092548584,
            "unit": "iter/sec",
            "range": "stddev: 0.0007611184730703017",
            "extra": "mean: 9.651320851484307 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7468284478872798,
            "unit": "iter/sec",
            "range": "stddev: 0.0050526336360044435",
            "extra": "mean: 1.3389955923999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.9129996152993325,
            "unit": "iter/sec",
            "range": "stddev: 0.0017920665281033398",
            "extra": "mean: 203.54164020000098 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 94.66540081096228,
            "unit": "iter/sec",
            "range": "stddev: 0.0007104508149370331",
            "extra": "mean: 10.563521534091468 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2298475.5138028865,
            "unit": "iter/sec",
            "range": "stddev: 5.987149452888307e-8",
            "extra": "mean: 435.0709824815074 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 460.5515883377519,
            "unit": "iter/sec",
            "range": "stddev: 0.000058145561937508576",
            "extra": "mean: 2.171309415323601 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7265218262272608,
            "unit": "iter/sec",
            "range": "stddev: 0.005089697322777807",
            "extra": "mean: 1.3764211396000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 268.32258185752846,
            "unit": "iter/sec",
            "range": "stddev: 0.0003108815677574983",
            "extra": "mean: 3.7268574008093402 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.460529962806376,
            "unit": "iter/sec",
            "range": "stddev: 0.00037449069945119705",
            "extra": "mean: 18.030841044444262 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 137.91248763095294,
            "unit": "iter/sec",
            "range": "stddev: 0.00010280198688250586",
            "extra": "mean: 7.2509750000010955 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 416315.1156261441,
            "unit": "iter/sec",
            "range": "stddev: 8.853890032198089e-7",
            "extra": "mean: 2.402026643918478 usec\nrounds: 1764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4734.149333938139,
            "unit": "iter/sec",
            "range": "stddev: 0.000059967028941337815",
            "extra": "mean: 211.23119053959843 usec\nrounds: 2262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12049.4194342298,
            "unit": "iter/sec",
            "range": "stddev: 0.000004126788608812197",
            "extra": "mean: 82.99155037787264 usec\nrounds: 6481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 119.11120965662455,
            "unit": "iter/sec",
            "range": "stddev: 0.0001391029314090324",
            "extra": "mean: 8.39551544210502 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1996255017043596,
            "unit": "iter/sec",
            "range": "stddev: 0.002038603279654411",
            "extra": "mean: 454.62284340000565 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 83.93608361739896,
            "unit": "iter/sec",
            "range": "stddev: 0.000181418825227705",
            "extra": "mean: 11.913827246911383 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.95340781309653,
            "unit": "iter/sec",
            "range": "stddev: 0.000758237125999502",
            "extra": "mean: 10.758077875000797 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.37165827783016,
            "unit": "iter/sec",
            "range": "stddev: 0.0006462801608253338",
            "extra": "mean: 26.758245314290107 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 244.6119329528968,
            "unit": "iter/sec",
            "range": "stddev: 0.00027279972139636463",
            "extra": "mean: 4.088107999999178 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1424901.0151226781,
            "unit": "iter/sec",
            "range": "stddev: 2.6663627630728513e-7",
            "extra": "mean: 701.8031353664971 nsec\nrounds: 93450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.808710818636875,
            "unit": "iter/sec",
            "range": "stddev: 0.0005065760630133631",
            "extra": "mean: 24.504572184213952 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 142.2947561131677,
            "unit": "iter/sec",
            "range": "stddev: 0.004470891737343645",
            "extra": "mean: 7.027665862856501 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 65.05747509557882,
            "unit": "iter/sec",
            "range": "stddev: 0.00015016460816344915",
            "extra": "mean: 15.371023829788284 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 643.1010504760757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000375237156258625",
            "extra": "mean: 1.5549655831843514 msec\nrounds: 559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 102.8304311058888,
            "unit": "iter/sec",
            "range": "stddev: 0.0008015985392157297",
            "extra": "mean: 9.724747715686012 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 102.12881885389473,
            "unit": "iter/sec",
            "range": "stddev: 0.0008198794618948763",
            "extra": "mean: 9.791555520000657 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 102.70259072638395,
            "unit": "iter/sec",
            "range": "stddev: 0.0009024724573865388",
            "extra": "mean: 9.736852721312156 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4782.35351894516,
            "unit": "iter/sec",
            "range": "stddev: 0.00008600924609283189",
            "extra": "mean: 209.10206575873738 usec\nrounds: 2570"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5921412.91303391,
            "unit": "iter/sec",
            "range": "stddev: 2.0824833362023254e-8",
            "extra": "mean: 168.8786130416313 nsec\nrounds: 61725"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4801.869887642073,
            "unit": "iter/sec",
            "range": "stddev: 0.00006537381119027229",
            "extra": "mean: 208.25220661925172 usec\nrounds: 2236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11157.988596699775,
            "unit": "iter/sec",
            "range": "stddev: 0.000006149134533922125",
            "extra": "mean: 89.62188761294955 usec\nrounds: 4529"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4944733152827232,
            "unit": "iter/sec",
            "range": "stddev: 0.004396351188286437",
            "extra": "mean: 669.1320545999986 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.79726041821896,
            "unit": "iter/sec",
            "range": "stddev: 0.0006754526221855983",
            "extra": "mean: 17.606483000000967 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.63581489339477,
            "unit": "iter/sec",
            "range": "stddev: 0.0008250740961676026",
            "extra": "mean: 11.033166096384672 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 104.85176715760912,
            "unit": "iter/sec",
            "range": "stddev: 0.00024208087565164393",
            "extra": "mean: 9.537273687498645 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144124.03891137964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012789294745097247",
            "extra": "mean: 6.938467777848562 usec\nrounds: 36900"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.08515011896432,
            "unit": "iter/sec",
            "range": "stddev: 0.0007316684616183941",
            "extra": "mean: 10.978738012660921 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4888.385916417262,
            "unit": "iter/sec",
            "range": "stddev: 0.00002792532313202454",
            "extra": "mean: 204.5665004969387 usec\nrounds: 2010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.04925689659075,
            "unit": "iter/sec",
            "range": "stddev: 0.0002895211147002947",
            "extra": "mean: 12.33817604615279 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5868422762288457,
            "unit": "iter/sec",
            "range": "stddev: 0.09213677048959094",
            "extra": "mean: 1.7040353779999975 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.68159663818913,
            "unit": "iter/sec",
            "range": "stddev: 0.00021063287043626746",
            "extra": "mean: 11.404901807689672 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 272.1576648456406,
            "unit": "iter/sec",
            "range": "stddev: 0.0002707375008635005",
            "extra": "mean: 3.6743407559995376 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.537317988609814,
            "unit": "iter/sec",
            "range": "stddev: 0.0013790220187192574",
            "extra": "mean: 26.64015581250201 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4534.933657320146,
            "unit": "iter/sec",
            "range": "stddev: 0.00006242508307140093",
            "extra": "mean: 220.51039233745607 usec\nrounds: 2062"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.34236747902877,
            "unit": "iter/sec",
            "range": "stddev: 0.000806744647390304",
            "extra": "mean: 10.829265344827801 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 265.0766703519896,
            "unit": "iter/sec",
            "range": "stddev: 0.00028639892432659236",
            "extra": "mean: 3.7724934400002894 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.36640045270325,
            "unit": "iter/sec",
            "range": "stddev: 0.0008680864328229731",
            "extra": "mean: 12.290085273973515 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.61560463616473,
            "unit": "iter/sec",
            "range": "stddev: 0.001028498991826819",
            "extra": "mean: 26.584711575753083 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4761026.311151149,
            "unit": "iter/sec",
            "range": "stddev: 4.2966796914806235e-8",
            "extra": "mean: 210.03874682611092 nsec\nrounds: 60603"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 269.386621845563,
            "unit": "iter/sec",
            "range": "stddev: 0.00029893728991977",
            "extra": "mean: 3.712136828284261 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 194.83215657031113,
            "unit": "iter/sec",
            "range": "stddev: 0.004170770361788036",
            "extra": "mean: 5.132622959183431 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 297.4134251823619,
            "unit": "iter/sec",
            "range": "stddev: 0.00011888066813013625",
            "extra": "mean: 3.3623230000019007 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1580094.6093756987,
            "unit": "iter/sec",
            "range": "stddev: 4.1864008580529867e-7",
            "extra": "mean: 632.8734963503887 nsec\nrounds: 140826"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.508528227680175,
            "unit": "iter/sec",
            "range": "stddev: 0.0006110411127971971",
            "extra": "mean: 74.02730950000246 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.99351304953716,
            "unit": "iter/sec",
            "range": "stddev: 0.0007877902586028526",
            "extra": "mean: 10.417370593406172 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.67942560079524,
            "unit": "iter/sec",
            "range": "stddev: 0.0002791987164995898",
            "extra": "mean: 3.778155395834422 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 90.44892715229534,
            "unit": "iter/sec",
            "range": "stddev: 0.0007828594814593763",
            "extra": "mean: 11.055963088608319 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 583.2154066893506,
            "unit": "iter/sec",
            "range": "stddev: 0.00005625311115842449",
            "extra": "mean: 1.7146323442937599 msec\nrounds: 517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14536138115278638,
            "unit": "iter/sec",
            "range": "stddev: 0.1587513877948002",
            "extra": "mean: 6.879406291200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 254.67641141412233,
            "unit": "iter/sec",
            "range": "stddev: 0.00007966830186338669",
            "extra": "mean: 3.9265513223127972 msec\nrounds: 242"
          }
        ]
      }
    ]
  }
}