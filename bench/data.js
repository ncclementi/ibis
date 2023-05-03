window.BENCHMARK_DATA = {
  "lastUpdate": 1683121476931,
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
          "id": "e8a065c4c5c46ab0cba7d73f7210f616536e3eae",
          "message": "chore(deps): relock",
          "timestamp": "2023-05-03T06:37:55-07:00",
          "tree_id": "660ba799d3b1590c7b6ffa01935ab40dc9327386",
          "url": "https://github.com/ibis-project/ibis/commit/e8a065c4c5c46ab0cba7d73f7210f616536e3eae"
        },
        "date": 1683121390798,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 189.43005009521823,
            "unit": "iter/sec",
            "range": "stddev: 0.003053119757052977",
            "extra": "mean: 5.278993483332468 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1627180.8405471335,
            "unit": "iter/sec",
            "range": "stddev: 1.3341962430237406e-7",
            "extra": "mean: 614.5598418327944 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 41.287739589210936,
            "unit": "iter/sec",
            "range": "stddev: 0.00841674533961705",
            "extra": "mean: 24.22026514285887 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.40310903155302,
            "unit": "iter/sec",
            "range": "stddev: 0.00013016575193827682",
            "extra": "mean: 7.440304076338263 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8026714690346527,
            "unit": "iter/sec",
            "range": "stddev: 0.0037620107278919265",
            "extra": "mean: 1.245839722200003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.3226236664701,
            "unit": "iter/sec",
            "range": "stddev: 0.0006618735185117935",
            "extra": "mean: 9.585648489795469 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 180.19583068687533,
            "unit": "iter/sec",
            "range": "stddev: 0.004254677441984843",
            "extra": "mean: 5.549517967137048 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 282.9573366459429,
            "unit": "iter/sec",
            "range": "stddev: 0.00024129703023707244",
            "extra": "mean: 3.53410168420999 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 249.77358838685205,
            "unit": "iter/sec",
            "range": "stddev: 0.00584372029062213",
            "extra": "mean: 4.003625869566278 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.356698773332948,
            "unit": "iter/sec",
            "range": "stddev: 0.0005816847003273455",
            "extra": "mean: 737.0832934000077 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2267.088352454009,
            "unit": "iter/sec",
            "range": "stddev: 0.00008122472562286599",
            "extra": "mean: 441.0944103336556 usec\nrounds: 1316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 92.94589811241285,
            "unit": "iter/sec",
            "range": "stddev: 0.007034478172330416",
            "extra": "mean: 10.758947089741993 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2233.841153545881,
            "unit": "iter/sec",
            "range": "stddev: 0.00006265920829994515",
            "extra": "mean: 447.6594042564992 usec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4718.596723399949,
            "unit": "iter/sec",
            "range": "stddev: 0.00002962712001281909",
            "extra": "mean: 211.9274137247011 usec\nrounds: 1020"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 192.17594091747296,
            "unit": "iter/sec",
            "range": "stddev: 0.00009970205190895871",
            "extra": "mean: 5.203564999998802 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13541.67593204336,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018145029772329968",
            "extra": "mean: 73.84610331973185 usec\nrounds: 1868"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 269.61564798166575,
            "unit": "iter/sec",
            "range": "stddev: 0.003744252452045654",
            "extra": "mean: 3.708983538180994 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1192.1454693766502,
            "unit": "iter/sec",
            "range": "stddev: 0.000029564486888655116",
            "extra": "mean: 838.8238060602458 usec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9871.722497357492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017755719669334372",
            "extra": "mean: 101.29944396914364 usec\nrounds: 4676"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.26993815654558,
            "unit": "iter/sec",
            "range": "stddev: 0.00008061706298747396",
            "extra": "mean: 7.919541377776163 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10159.936298169152,
            "unit": "iter/sec",
            "range": "stddev: 0.001055923672955279",
            "extra": "mean: 98.4258139669835 usec\nrounds: 5069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17718486518793297,
            "unit": "iter/sec",
            "range": "stddev: 0.062245318161470914",
            "extra": "mean: 5.64382290179999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.97769095506406,
            "unit": "iter/sec",
            "range": "stddev: 0.00009642478979195178",
            "extra": "mean: 10.002231402298136 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 280.2823903851571,
            "unit": "iter/sec",
            "range": "stddev: 0.0002405342467559818",
            "extra": "mean: 3.5678302822586354 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6435183.358892565,
            "unit": "iter/sec",
            "range": "stddev: 4.164221238277284e-9",
            "extra": "mean: 155.3957275542169 nsec\nrounds: 49262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.6399402336778,
            "unit": "iter/sec",
            "range": "stddev: 0.0001254322479488991",
            "extra": "mean: 8.957367747661474 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.507639386364275,
            "unit": "iter/sec",
            "range": "stddev: 0.00032209044300220396",
            "extra": "mean: 17.091785115382024 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.33431574383434,
            "unit": "iter/sec",
            "range": "stddev: 0.00013082430330806435",
            "extra": "mean: 51.7215097368469 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 411.9659660659447,
            "unit": "iter/sec",
            "range": "stddev: 0.00003402479637683536",
            "extra": "mean: 2.4273849841273702 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.4705745906788,
            "unit": "iter/sec",
            "range": "stddev: 0.00024354984544405786",
            "extra": "mean: 3.656700548118441 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.05377347174513,
            "unit": "iter/sec",
            "range": "stddev: 0.0002210497223813388",
            "extra": "mean: 18.16405919047898 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.96357150435749,
            "unit": "iter/sec",
            "range": "stddev: 0.0007920295030310897",
            "extra": "mean: 10.00364417708314 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.79518618209246,
            "unit": "iter/sec",
            "range": "stddev: 0.0006767479022414869",
            "extra": "mean: 9.634358169998904 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2507498.1748916674,
            "unit": "iter/sec",
            "range": "stddev: 1.535548381668472e-8",
            "extra": "mean: 398.80387950550346 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9194063595846835,
            "unit": "iter/sec",
            "range": "stddev: 0.001855988145396197",
            "extra": "mean: 1.0876583456000048 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.28576981616035,
            "unit": "iter/sec",
            "range": "stddev: 0.00022743111505664444",
            "extra": "mean: 14.644339555550305 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2303.4515278324393,
            "unit": "iter/sec",
            "range": "stddev: 0.00007580513813790469",
            "extra": "mean: 434.13112362776985 usec\nrounds: 1367"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5821327.384274287,
            "unit": "iter/sec",
            "range": "stddev: 8.769564466321562e-9",
            "extra": "mean: 171.782126994508 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.185258746805996,
            "unit": "iter/sec",
            "range": "stddev: 0.00039093281016724165",
            "extra": "mean: 33.12875362069949 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143086.30073486117,
            "unit": "iter/sec",
            "range": "stddev: 3.3507258642430766e-7",
            "extra": "mean: 6.988789247218009 usec\nrounds: 38315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.43266723335043,
            "unit": "iter/sec",
            "range": "stddev: 0.00007776500718953294",
            "extra": "mean: 6.081516628206702 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.48660408604451,
            "unit": "iter/sec",
            "range": "stddev: 0.000728865542688558",
            "extra": "mean: 9.853517210529175 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2296.950956344253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000818645817566024",
            "extra": "mean: 435.35975256152847 usec\nrounds: 1366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.56510109858861,
            "unit": "iter/sec",
            "range": "stddev: 0.0007434774296145783",
            "extra": "mean: 10.46407096842143 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 423.1323385338434,
            "unit": "iter/sec",
            "range": "stddev: 0.000052228313115773485",
            "extra": "mean: 2.363326810389882 msec\nrounds: 385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9191697641534143,
            "unit": "iter/sec",
            "range": "stddev: 0.004161290424731906",
            "extra": "mean: 1.087938310200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7328765.110862822,
            "unit": "iter/sec",
            "range": "stddev: 4.230227510310281e-9",
            "extra": "mean: 136.4486355986726 nsec\nrounds: 72464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.53837008204661,
            "unit": "iter/sec",
            "range": "stddev: 0.0005735303595490855",
            "extra": "mean: 9.84849371909323 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 150.65966039350843,
            "unit": "iter/sec",
            "range": "stddev: 0.011227685603775357",
            "extra": "mean: 6.637476796297674 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.46985040774052,
            "unit": "iter/sec",
            "range": "stddev: 0.0007631225629689101",
            "extra": "mean: 10.365932939393904 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 268.6698018974299,
            "unit": "iter/sec",
            "range": "stddev: 0.0003146725466254408",
            "extra": "mean: 3.7220409325413133 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1090634.4430527245,
            "unit": "iter/sec",
            "range": "stddev: 1.6863193747686653e-7",
            "extra": "mean: 916.8975052731367 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.500609893751957,
            "unit": "iter/sec",
            "range": "stddev: 0.002162033312954669",
            "extra": "mean: 399.90244079998547 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1778.24170483739,
            "unit": "iter/sec",
            "range": "stddev: 0.000005230564671860021",
            "extra": "mean: 562.3532488748172 usec\nrounds: 1334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.78107098699792,
            "unit": "iter/sec",
            "range": "stddev: 0.000509988657801354",
            "extra": "mean: 22.84092137209205 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.61875921773739,
            "unit": "iter/sec",
            "range": "stddev: 0.015496443542446982",
            "extra": "mean: 11.284292499999774 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.5013333654016,
            "unit": "iter/sec",
            "range": "stddev: 0.00007017284688311723",
            "extra": "mean: 1.325378704818941 msec\nrounds: 664"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2232.2379128623807,
            "unit": "iter/sec",
            "range": "stddev: 0.00007896490768592276",
            "extra": "mean: 447.9809227492728 usec\nrounds: 1411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8206.24196561048,
            "unit": "iter/sec",
            "range": "stddev: 0.000011749770322907025",
            "extra": "mean: 121.8584589865439 usec\nrounds: 3767"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2565311.0257854233,
            "unit": "iter/sec",
            "range": "stddev: 1.4933469525158296e-8",
            "extra": "mean: 389.81627956543764 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.941156195165455,
            "unit": "iter/sec",
            "range": "stddev: 0.00009879615723673876",
            "extra": "mean: 20.023565255319514 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6430814.955931275,
            "unit": "iter/sec",
            "range": "stddev: 7.90371305510893e-9",
            "extra": "mean: 155.50128667248916 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.67290689993161,
            "unit": "iter/sec",
            "range": "stddev: 0.00250515977810164",
            "extra": "mean: 597.761895799988 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.52115986546281,
            "unit": "iter/sec",
            "range": "stddev: 0.0004345861579759038",
            "extra": "mean: 36.335677888886224 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.77118308487063,
            "unit": "iter/sec",
            "range": "stddev: 0.014386554840286442",
            "extra": "mean: 11.524563391303575 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.536243500867858,
            "unit": "iter/sec",
            "range": "stddev: 0.00038937230685274186",
            "extra": "mean: 117.14754855555991 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.77435720538314,
            "unit": "iter/sec",
            "range": "stddev: 0.0007045380562739499",
            "extra": "mean: 10.02261530927755 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4683106.18238506,
            "unit": "iter/sec",
            "range": "stddev: 1.1703409235999093e-8",
            "extra": "mean: 213.53348846999384 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12068708.643270005,
            "unit": "iter/sec",
            "range": "stddev: 3.0193597358145375e-9",
            "extra": "mean: 82.85890641307016 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.0840124806546,
            "unit": "iter/sec",
            "range": "stddev: 0.000019546892828687527",
            "extra": "mean: 1.848141835526425 msec\nrounds: 304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2562541.37268313,
            "unit": "iter/sec",
            "range": "stddev: 1.4448005085244783e-8",
            "extra": "mean: 390.23760188211094 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.99215449789536,
            "unit": "iter/sec",
            "range": "stddev: 0.0006659773736597948",
            "extra": "mean: 10.000784611767198 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.76529149904428,
            "unit": "iter/sec",
            "range": "stddev: 0.00035170935859079775",
            "extra": "mean: 3.940649227846694 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 91.04801461485876,
            "unit": "iter/sec",
            "range": "stddev: 0.015874640561073596",
            "extra": "mean: 10.98321588043506 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2355.324698598582,
            "unit": "iter/sec",
            "range": "stddev: 0.00007666561874497936",
            "extra": "mean: 424.5699119934503 usec\nrounds: 1409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 106.1599469260611,
            "unit": "iter/sec",
            "range": "stddev: 0.00005910970503043813",
            "extra": "mean: 9.419748492305539 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.4216558796793,
            "unit": "iter/sec",
            "range": "stddev: 0.0007971826355600033",
            "extra": "mean: 9.958011459183215 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 267.6311850046409,
            "unit": "iter/sec",
            "range": "stddev: 0.0002775938998797155",
            "extra": "mean: 3.7364853426279874 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.68079986286182,
            "unit": "iter/sec",
            "range": "stddev: 0.000677002713847838",
            "extra": "mean: 10.3433153368452 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.6709961911273,
            "unit": "iter/sec",
            "range": "stddev: 0.0002689410365310764",
            "extra": "mean: 3.627512555969737 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.08019986497838,
            "unit": "iter/sec",
            "range": "stddev: 0.01617873894684369",
            "extra": "mean: 11.353289405938446 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 680.3066954758234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000972221605632693",
            "extra": "mean: 1.4699252655459685 msec\nrounds: 595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.1631763497973,
            "unit": "iter/sec",
            "range": "stddev: 0.0000393190627559224",
            "extra": "mean: 6.282860287999483 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2305.7950300260754,
            "unit": "iter/sec",
            "range": "stddev: 0.00007938428855309958",
            "extra": "mean: 433.68989306421196 usec\nrounds: 1384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.73366927561055,
            "unit": "iter/sec",
            "range": "stddev: 0.0007598221554490583",
            "extra": "mean: 9.927167422681366 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 116.77311020097525,
            "unit": "iter/sec",
            "range": "stddev: 0.00008644702413708909",
            "extra": "mean: 8.563615358697952 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2282.0227831886305,
            "unit": "iter/sec",
            "range": "stddev: 0.00008899407246473889",
            "extra": "mean: 438.20771964542683 usec\nrounds: 1466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.01204678691176,
            "unit": "iter/sec",
            "range": "stddev: 0.0005333122150668939",
            "extra": "mean: 21.733438736840814 msec\nrounds: 38"
          }
        ]
      }
    ]
  }
}