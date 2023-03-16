window.BENCHMARK_DATA = {
  "lastUpdate": 1678963870214,
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
          "id": "a8a92ddcfa912eb2e16ecf03888382f12a1dd4bf",
          "message": "test(mssql): add back cumulative xfails",
          "timestamp": "2023-03-16T06:45:52-04:00",
          "tree_id": "0f8ea63d333212cbaac46cd8c20f1c795ef509c9",
          "url": "https://github.com/ibis-project/ibis/commit/a8a92ddcfa912eb2e16ecf03888382f12a1dd4bf"
        },
        "date": 1678963784067,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 181.48339553074788,
            "unit": "iter/sec",
            "range": "stddev: 0.0036809279136537486",
            "extra": "mean: 5.510145967213703 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.44640578240823,
            "unit": "iter/sec",
            "range": "stddev: 0.0002825309287727262",
            "extra": "mean: 95.72670455555175 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.4549106244869,
            "unit": "iter/sec",
            "range": "stddev: 0.0005465509958534899",
            "extra": "mean: 8.233508178947085 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 773136.1304513232,
            "unit": "iter/sec",
            "range": "stddev: 2.1464720782729992e-7",
            "extra": "mean: 1.2934332785821865 usec\nrounds: 23096"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.529587003807865,
            "unit": "iter/sec",
            "range": "stddev: 0.000523549238939792",
            "extra": "mean: 36.324555099997724 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9259765809603475,
            "unit": "iter/sec",
            "range": "stddev: 0.0028033295361984964",
            "extra": "mean: 1.0799409192000098 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 242.58436794432652,
            "unit": "iter/sec",
            "range": "stddev: 0.004258357261655945",
            "extra": "mean: 4.1222771626797545 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1879728.406450451,
            "unit": "iter/sec",
            "range": "stddev: 1.0390319147171718e-7",
            "extra": "mean: 531.9917476207804 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.8563833206061,
            "unit": "iter/sec",
            "range": "stddev: 0.0005476364861313843",
            "extra": "mean: 9.35835528888952 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 306.16142742773667,
            "unit": "iter/sec",
            "range": "stddev: 0.0002268679144756021",
            "extra": "mean: 3.266250776270731 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5193.131477769513,
            "unit": "iter/sec",
            "range": "stddev: 0.000042760962729277",
            "extra": "mean: 192.56204166614074 usec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 354.10589915746334,
            "unit": "iter/sec",
            "range": "stddev: 0.00003602615654005905",
            "extra": "mean: 2.8240139528297474 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.926081282749475,
            "unit": "iter/sec",
            "range": "stddev: 0.0044090073396409555",
            "extra": "mean: 1.0798188221999965 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5351.17383926796,
            "unit": "iter/sec",
            "range": "stddev: 0.000026829557463330204",
            "extra": "mean: 186.87488577960306 usec\nrounds: 1322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.15688416798176,
            "unit": "iter/sec",
            "range": "stddev: 0.0005991547717339403",
            "extra": "mean: 10.734579724637273 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 272.56882767232025,
            "unit": "iter/sec",
            "range": "stddev: 0.005007034177026279",
            "extra": "mean: 3.6687981107002843 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.21639727396165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000804985978012996",
            "extra": "mean: 10.181599282354373 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.48268254209768,
            "unit": "iter/sec",
            "range": "stddev: 0.0005916692082500246",
            "extra": "mean: 8.299948000000676 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5751235.9014625205,
            "unit": "iter/sec",
            "range": "stddev: 9.568779571410173e-9",
            "extra": "mean: 173.87567074856332 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7243564.437302094,
            "unit": "iter/sec",
            "range": "stddev: 5.32570765885911e-9",
            "extra": "mean: 138.05357965063922 nsec\nrounds: 54645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5421.762927522443,
            "unit": "iter/sec",
            "range": "stddev: 0.00010854674815680733",
            "extra": "mean: 184.44185283788593 usec\nrounds: 564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 311.79695646620735,
            "unit": "iter/sec",
            "range": "stddev: 0.0002009300803128536",
            "extra": "mean: 3.2072153985517824 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.26184702132434,
            "unit": "iter/sec",
            "range": "stddev: 0.000588259530168577",
            "extra": "mean: 9.87538771428309 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 108.85387680542271,
            "unit": "iter/sec",
            "range": "stddev: 0.009206654508759397",
            "extra": "mean: 9.186627333333375 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.658649321099908,
            "unit": "iter/sec",
            "range": "stddev: 0.00012063198152961746",
            "extra": "mean: 63.86246856250288 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5792.922246942949,
            "unit": "iter/sec",
            "range": "stddev: 0.00004434068858075502",
            "extra": "mean: 172.62444710486523 usec\nrounds: 2798"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.771579946146,
            "unit": "iter/sec",
            "range": "stddev: 0.000022089490037554427",
            "extra": "mean: 1.3337395371425351 msec\nrounds: 525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.36558811526548,
            "unit": "iter/sec",
            "range": "stddev: 0.0006162157675328662",
            "extra": "mean: 9.768907876287313 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.6052027996744,
            "unit": "iter/sec",
            "range": "stddev: 0.0001404639833259833",
            "extra": "mean: 3.394373183151079 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2531300.854592292,
            "unit": "iter/sec",
            "range": "stddev: 1.571048566994529e-8",
            "extra": "mean: 395.05379148666657 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.72472739914878,
            "unit": "iter/sec",
            "range": "stddev: 0.0005946905683327704",
            "extra": "mean: 8.283307169489214 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 309.13669276561916,
            "unit": "iter/sec",
            "range": "stddev: 0.00021161028240850008",
            "extra": "mean: 3.2348149650361266 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7811840489220188,
            "unit": "iter/sec",
            "range": "stddev: 0.0009294352195173231",
            "extra": "mean: 561.4242955999998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.608559027647306,
            "unit": "iter/sec",
            "range": "stddev: 0.0019311404435252487",
            "extra": "mean: 383.3534105999945 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.5993823520422,
            "unit": "iter/sec",
            "range": "stddev: 0.000054576697520838236",
            "extra": "mean: 1.4628450899989502 msec\nrounds: 500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11640.54679995435,
            "unit": "iter/sec",
            "range": "stddev: 0.000012116798901147412",
            "extra": "mean: 85.90661737676459 usec\nrounds: 6641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.37476961850852,
            "unit": "iter/sec",
            "range": "stddev: 0.0002537350946434142",
            "extra": "mean: 17.42926388461541 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.06447456280623,
            "unit": "iter/sec",
            "range": "stddev: 0.000650045865925255",
            "extra": "mean: 8.328858337500122 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.36372759960183,
            "unit": "iter/sec",
            "range": "stddev: 0.0003245082751271217",
            "extra": "mean: 13.630714151517939 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5762.317613428796,
            "unit": "iter/sec",
            "range": "stddev: 0.00004620166491054784",
            "extra": "mean: 173.54128444248707 usec\nrounds: 2584"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.23078755727147,
            "unit": "iter/sec",
            "range": "stddev: 0.00022631421881340324",
            "extra": "mean: 3.3419021089486134 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1801334274675993,
            "unit": "iter/sec",
            "range": "stddev: 0.10567394820420305",
            "extra": "mean: 5.551440474199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.88029497402839,
            "unit": "iter/sec",
            "range": "stddev: 0.000642995009219952",
            "extra": "mean: 8.781150419640735 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.7432467448972,
            "unit": "iter/sec",
            "range": "stddev: 0.000023359509555842387",
            "extra": "mean: 3.0699024768520853 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 104.95778744729449,
            "unit": "iter/sec",
            "range": "stddev: 0.00015984878231675015",
            "extra": "mean: 9.52763986666696 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.04432160715135,
            "unit": "iter/sec",
            "range": "stddev: 0.00004679416018813605",
            "extra": "mean: 6.2094707222237995 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5782.869849236489,
            "unit": "iter/sec",
            "range": "stddev: 0.00004249726155565233",
            "extra": "mean: 172.92452122747144 usec\nrounds: 2379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140537.97524894428,
            "unit": "iter/sec",
            "range": "stddev: 4.159924044799194e-7",
            "extra": "mean: 7.115514495129402 usec\nrounds: 39841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1881675.2110057462,
            "unit": "iter/sec",
            "range": "stddev: 8.513350951355264e-8",
            "extra": "mean: 531.4413423480797 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.87085331135474,
            "unit": "iter/sec",
            "range": "stddev: 0.0004007744189387579",
            "extra": "mean: 20.46209411628297 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.72220744670794,
            "unit": "iter/sec",
            "range": "stddev: 0.00013704886543085477",
            "extra": "mean: 13.75095772130978 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.95897011008368,
            "unit": "iter/sec",
            "range": "stddev: 0.0007170390308585987",
            "extra": "mean: 21.75853805263129 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.7469438179205,
            "unit": "iter/sec",
            "range": "stddev: 0.0006103768474882158",
            "extra": "mean: 9.45653806999701 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.12228971004919,
            "unit": "iter/sec",
            "range": "stddev: 0.0006160881824756147",
            "extra": "mean: 8.324849637929788 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.74536568723235,
            "unit": "iter/sec",
            "range": "stddev: 0.00012911968916349054",
            "extra": "mean: 9.029723219517875 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6301847.126907197,
            "unit": "iter/sec",
            "range": "stddev: 8.403610323864073e-9",
            "extra": "mean: 158.68363352238202 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.18485540124072,
            "unit": "iter/sec",
            "range": "stddev: 0.0006026623289588165",
            "extra": "mean: 9.598324018867824 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.54597788283417,
            "unit": "iter/sec",
            "range": "stddev: 0.00033927996545661835",
            "extra": "mean: 180.31085250000464 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6785999328029205,
            "unit": "iter/sec",
            "range": "stddev: 0.0015661594076278901",
            "extra": "mean: 1.4736223091999932 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8093.456781886209,
            "unit": "iter/sec",
            "range": "stddev: 0.000012537645102242147",
            "extra": "mean: 123.55659972609955 usec\nrounds: 3645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 283.1751689563458,
            "unit": "iter/sec",
            "range": "stddev: 0.00027349397176068454",
            "extra": "mean: 3.531383078839655 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 303.4102481683508,
            "unit": "iter/sec",
            "range": "stddev: 0.00020143076932549388",
            "extra": "mean: 3.2958675787547493 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.855021651955253,
            "unit": "iter/sec",
            "range": "stddev: 0.0034951150202316016",
            "extra": "mean: 1.1695610254000144 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13062800.98394817,
            "unit": "iter/sec",
            "range": "stddev: 3.7495766645053734e-9",
            "extra": "mean: 76.55325999589859 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.93460341770293,
            "unit": "iter/sec",
            "range": "stddev: 0.00016107863348327147",
            "extra": "mean: 10.533566939760608 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.37290402808588,
            "unit": "iter/sec",
            "range": "stddev: 0.00005845644680859557",
            "extra": "mean: 8.447879252525002 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13665.31696110144,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017060700671711257",
            "extra": "mean: 73.17795868522605 usec\nrounds: 6511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1178.8361326712086,
            "unit": "iter/sec",
            "range": "stddev: 0.000013261444021031886",
            "extra": "mean: 848.2943237700298 usec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.05532836125306,
            "unit": "iter/sec",
            "range": "stddev: 0.0003458640815704402",
            "extra": "mean: 7.296323404254528 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.92807793194083,
            "unit": "iter/sec",
            "range": "stddev: 0.00006906972507343354",
            "extra": "mean: 6.1002362293003705 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.19711122723993,
            "unit": "iter/sec",
            "range": "stddev: 0.0006513703662924048",
            "extra": "mean: 9.881705000002242 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69519.91154042185,
            "unit": "iter/sec",
            "range": "stddev: 4.4233992326883054e-7",
            "extra": "mean: 14.384368130539942 usec\nrounds: 14685"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.474882941826987,
            "unit": "iter/sec",
            "range": "stddev: 0.02230684834636287",
            "extra": "mean: 31.771365181825647 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.40538877820612,
            "unit": "iter/sec",
            "range": "stddev: 0.0006184846588454531",
            "extra": "mean: 8.896370635514286 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 485590.6560985558,
            "unit": "iter/sec",
            "range": "stddev: 2.696892280017223e-7",
            "extra": "mean: 2.059347698397721 usec\nrounds: 2042"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.97011656263423,
            "unit": "iter/sec",
            "range": "stddev: 0.025521397515757688",
            "extra": "mean: 31.279210322578923 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.57378710446795,
            "unit": "iter/sec",
            "range": "stddev: 0.0011068911829204434",
            "extra": "mean: 15.486160016946078 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5595.402074145005,
            "unit": "iter/sec",
            "range": "stddev: 0.000055704657591708294",
            "extra": "mean: 178.718166585518 usec\nrounds: 2059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.69295680254325,
            "unit": "iter/sec",
            "range": "stddev: 0.000033848521455139145",
            "extra": "mean: 5.110045943089373 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5522.7364699414165,
            "unit": "iter/sec",
            "range": "stddev: 0.00004589361921239535",
            "extra": "mean: 181.0696573053408 usec\nrounds: 2457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1754.182339208218,
            "unit": "iter/sec",
            "range": "stddev: 0.000005757078471842312",
            "extra": "mean: 570.0661656708778 usec\nrounds: 1340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 545.2592036490836,
            "unit": "iter/sec",
            "range": "stddev: 0.000023061142718002995",
            "extra": "mean: 1.8339901340639768 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.4359612379195,
            "unit": "iter/sec",
            "range": "stddev: 0.012300918059566124",
            "extra": "mean: 10.702517389997865 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 303.16935262368025,
            "unit": "iter/sec",
            "range": "stddev: 0.00023907210239267128",
            "extra": "mean: 3.298486444443761 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5195.4418316723,
            "unit": "iter/sec",
            "range": "stddev: 0.00005395090748196594",
            "extra": "mean: 192.4764115159233 usec\nrounds: 3300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11690.670036510659,
            "unit": "iter/sec",
            "range": "stddev: 0.000004108245309454173",
            "extra": "mean: 85.53829651140101 usec\nrounds: 5676"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.54341129267297,
            "unit": "iter/sec",
            "range": "stddev: 0.00006741413800565172",
            "extra": "mean: 6.598769233646975 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2353481.2558721113,
            "unit": "iter/sec",
            "range": "stddev: 2.2353848324356617e-8",
            "extra": "mean: 424.90247054423384 nsec\nrounds: 107527"
          }
        ]
      }
    ]
  }
}