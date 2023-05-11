window.BENCHMARK_DATA = {
  "lastUpdate": 1683829098410,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "6f7173566017267b5925738f6a62ccd98d4a027f",
          "message": "fix(duckdb): fix read_csv problem with kwargs\n\nfixes #6190",
          "timestamp": "2023-05-11T14:13:18-04:00",
          "tree_id": "413adee5a5076084cb6c145ce8ec7ccfb0f51791",
          "url": "https://github.com/ibis-project/ibis/commit/6f7173566017267b5925738f6a62ccd98d4a027f"
        },
        "date": 1683829016898,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 92.53982821666271,
            "unit": "iter/sec",
            "range": "stddev: 0.007971558298975029",
            "extra": "mean: 10.80615794594635 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 944.3052942564599,
            "unit": "iter/sec",
            "range": "stddev: 0.006931423034180278",
            "extra": "mean: 1.058979554686701 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1986066.9155627606,
            "unit": "iter/sec",
            "range": "stddev: 8.739764788456767e-8",
            "extra": "mean: 503.50770770311425 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 86.39625433003872,
            "unit": "iter/sec",
            "range": "stddev: 0.011812584635581838",
            "extra": "mean: 11.574575862744487 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 98.57634320066002,
            "unit": "iter/sec",
            "range": "stddev: 0.014231192613101937",
            "extra": "mean: 10.144421749997562 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 318.53564539695475,
            "unit": "iter/sec",
            "range": "stddev: 0.00008463155870826448",
            "extra": "mean: 3.139366078649734 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.97600058932395,
            "unit": "iter/sec",
            "range": "stddev: 0.0000827291715479836",
            "extra": "mean: 8.851437427273368 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.89012621877967,
            "unit": "iter/sec",
            "range": "stddev: 0.0008971955091465377",
            "extra": "mean: 10.428602395604672 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6036624.374768875,
            "unit": "iter/sec",
            "range": "stddev: 9.929056356010372e-9",
            "extra": "mean: 165.65549517698057 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11448536.201481564,
            "unit": "iter/sec",
            "range": "stddev: 4.4860770056542445e-9",
            "extra": "mean: 87.34741126741129 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1172.0856737812337,
            "unit": "iter/sec",
            "range": "stddev: 0.000010345571094271088",
            "extra": "mean: 853.1799529414322 usec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.72963295718247,
            "unit": "iter/sec",
            "range": "stddev: 0.0009833433939578765",
            "extra": "mean: 24.552148580647962 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1902948.8554547306,
            "unit": "iter/sec",
            "range": "stddev: 8.802560301197789e-8",
            "extra": "mean: 525.5001978290368 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.470253513196607,
            "unit": "iter/sec",
            "range": "stddev: 0.00008482863561859975",
            "extra": "mean: 118.06022080000389 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2311.3650951221207,
            "unit": "iter/sec",
            "range": "stddev: 0.00008154467431623782",
            "extra": "mean: 432.64476136218764 usec\nrounds: 352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.70861701552171,
            "unit": "iter/sec",
            "range": "stddev: 0.020204416729676253",
            "extra": "mean: 25.834041024999976 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.08153585799876,
            "unit": "iter/sec",
            "range": "stddev: 0.0008210180929238067",
            "extra": "mean: 9.701058406595362 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7956333913277708,
            "unit": "iter/sec",
            "range": "stddev: 0.0028291574197977843",
            "extra": "mean: 1.256860271200003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 243.133530813479,
            "unit": "iter/sec",
            "range": "stddev: 0.0035028899078421785",
            "extra": "mean: 4.112966223351376 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7159775.397998279,
            "unit": "iter/sec",
            "range": "stddev: 2.8182783316641938e-8",
            "extra": "mean: 139.66918575124348 nsec\nrounds: 64931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 98.36696264571806,
            "unit": "iter/sec",
            "range": "stddev: 0.0007835032533755505",
            "extra": "mean: 10.166014819443348 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6152660.514079364,
            "unit": "iter/sec",
            "range": "stddev: 1.1512859421890521e-8",
            "extra": "mean: 162.5313143329663 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150772.87868056912,
            "unit": "iter/sec",
            "range": "stddev: 3.5381713275077565e-7",
            "extra": "mean: 6.632492585875626 usec\nrounds: 32573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 97.8595733101672,
            "unit": "iter/sec",
            "range": "stddev: 0.0006106286504660331",
            "extra": "mean: 10.218724302327447 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 98.82148681539213,
            "unit": "iter/sec",
            "range": "stddev: 0.0006786449666685952",
            "extra": "mean: 10.119256775281011 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.1871292296747,
            "unit": "iter/sec",
            "range": "stddev: 0.000009101374060734662",
            "extra": "mean: 1.338352818029624 msec\nrounds: 599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 227.14545103970184,
            "unit": "iter/sec",
            "range": "stddev: 0.011156594867457272",
            "extra": "mean: 4.402465448560597 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 101.16883113719418,
            "unit": "iter/sec",
            "range": "stddev: 0.0008513443583436348",
            "extra": "mean: 9.884467268816309 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9264168438187447,
            "unit": "iter/sec",
            "range": "stddev: 0.010826577864615978",
            "extra": "mean: 1.0794276968000076 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.40734756730961,
            "unit": "iter/sec",
            "range": "stddev: 0.0007557569558140527",
            "extra": "mean: 9.861218382980041 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3017847822147888,
            "unit": "iter/sec",
            "range": "stddev: 0.06201097542380651",
            "extra": "mean: 768.1761329999972 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5611416.544803513,
            "unit": "iter/sec",
            "range": "stddev: 9.747827282668761e-9",
            "extra": "mean: 178.20812124972596 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.3295114590908,
            "unit": "iter/sec",
            "range": "stddev: 0.0003064931512592815",
            "extra": "mean: 3.618867904190701 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14054.308262577755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016171008414466387",
            "extra": "mean: 71.15255915246206 usec\nrounds: 6703"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2226.159897131956,
            "unit": "iter/sec",
            "range": "stddev: 0.00009339635715576739",
            "extra": "mean: 449.204031250557 usec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1904.3507422860018,
            "unit": "iter/sec",
            "range": "stddev: 0.0031522587103216117",
            "extra": "mean: 525.1133511254286 usec\nrounds: 1911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.96093701013372,
            "unit": "iter/sec",
            "range": "stddev: 0.000832663041160026",
            "extra": "mean: 9.807677619720303 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 690.4896150442207,
            "unit": "iter/sec",
            "range": "stddev: 0.000051590538457917854",
            "extra": "mean: 1.4482477045450677 msec\nrounds: 572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.70424158129255,
            "unit": "iter/sec",
            "range": "stddev: 0.000708120044918349",
            "extra": "mean: 15.69754187755154 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.76289616848123,
            "unit": "iter/sec",
            "range": "stddev: 0.0006870373838884892",
            "extra": "mean: 9.826764347826488 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8657.489594997798,
            "unit": "iter/sec",
            "range": "stddev: 0.000038211433260494177",
            "extra": "mean: 115.50692484548743 usec\nrounds: 4697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.40207354962034,
            "unit": "iter/sec",
            "range": "stddev: 0.0007977220334905862",
            "extra": "mean: 9.5783538200007 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 172.18646032428688,
            "unit": "iter/sec",
            "range": "stddev: 0.0033025957375302484",
            "extra": "mean: 5.807657571429559 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.47069485812499,
            "unit": "iter/sec",
            "range": "stddev: 0.0005420051329065356",
            "extra": "mean: 21.06562802564163 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12485.030276628768,
            "unit": "iter/sec",
            "range": "stddev: 0.000013437563553340131",
            "extra": "mean: 80.09592110256555 usec\nrounds: 4753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 271.1049054486739,
            "unit": "iter/sec",
            "range": "stddev: 0.00024195922155532994",
            "extra": "mean: 3.6886090214598566 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.29591490097586,
            "unit": "iter/sec",
            "range": "stddev: 0.0008797389538652188",
            "extra": "mean: 39.53207480000742 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.99142987861109,
            "unit": "iter/sec",
            "range": "stddev: 0.0009264166745214475",
            "extra": "mean: 9.901830295916914 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1664450.2624378533,
            "unit": "iter/sec",
            "range": "stddev: 9.101604525067723e-8",
            "extra": "mean: 600.7989680240371 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 424.49194575345945,
            "unit": "iter/sec",
            "range": "stddev: 0.00011361029892188359",
            "extra": "mean: 2.3557573000001977 msec\nrounds: 370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.2916992778049,
            "unit": "iter/sec",
            "range": "stddev: 0.00002183090786258809",
            "extra": "mean: 5.017770452175425 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.18113234178852,
            "unit": "iter/sec",
            "range": "stddev: 0.00037867690746989767",
            "extra": "mean: 17.79957003921372 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.96052356415538,
            "unit": "iter/sec",
            "range": "stddev: 0.0008061256280868629",
            "extra": "mean: 9.807717389473606 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.80131691481742,
            "unit": "iter/sec",
            "range": "stddev: 0.0008410160876429028",
            "extra": "mean: 9.823055637254214 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17167556673073991,
            "unit": "iter/sec",
            "range": "stddev: 0.09166906883739809",
            "extra": "mean: 5.82494072419999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.81305311026802,
            "unit": "iter/sec",
            "range": "stddev: 0.00007171919158241243",
            "extra": "mean: 6.104519640000035 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1042952.3581679852,
            "unit": "iter/sec",
            "range": "stddev: 2.09446162635663e-7",
            "extra": "mean: 958.8165673804757 nsec\nrounds: 33222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 106.74865101082369,
            "unit": "iter/sec",
            "range": "stddev: 0.00006638921880558815",
            "extra": "mean: 9.367799878788219 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4553.994923288309,
            "unit": "iter/sec",
            "range": "stddev: 0.000022427375115833913",
            "extra": "mean: 219.58742090075253 usec\nrounds: 2086"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1940757.8257929431,
            "unit": "iter/sec",
            "range": "stddev: 1.7759874865173895e-7",
            "extra": "mean: 515.2626395266117 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.527278769729743,
            "unit": "iter/sec",
            "range": "stddev: 0.0011438152303200528",
            "extra": "mean: 395.6825072000015 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 192.75286793016653,
            "unit": "iter/sec",
            "range": "stddev: 0.000046404371058006876",
            "extra": "mean: 5.187990252691314 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1746.0314954230419,
            "unit": "iter/sec",
            "range": "stddev: 0.00000635412034432582",
            "extra": "mean: 572.7273549310818 usec\nrounds: 1389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1689.2545044721285,
            "unit": "iter/sec",
            "range": "stddev: 0.004511183626076958",
            "extra": "mean: 591.9771102297506 usec\nrounds: 1134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9243934129453695,
            "unit": "iter/sec",
            "range": "stddev: 0.005743194860461367",
            "extra": "mean: 1.0817904865999934 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10626.239410164255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015075113929088428",
            "extra": "mean: 94.10666948115961 usec\nrounds: 4738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.12968403445138,
            "unit": "iter/sec",
            "range": "stddev: 0.00023266366267078834",
            "extra": "mean: 18.821869886362595 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2304.364019979949,
            "unit": "iter/sec",
            "range": "stddev: 0.00008040816879391889",
            "extra": "mean: 433.9592144858699 usec\nrounds: 1422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.5085411686314,
            "unit": "iter/sec",
            "range": "stddev: 0.0002523893790255907",
            "extra": "mean: 3.5397159882790685 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2200.429361471038,
            "unit": "iter/sec",
            "range": "stddev: 0.00008436246573062513",
            "extra": "mean: 454.4567608075711 usec\nrounds: 1388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4516174.418517987,
            "unit": "iter/sec",
            "range": "stddev: 1.2420719136262763e-8",
            "extra": "mean: 221.4263461352145 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.91135740811478,
            "unit": "iter/sec",
            "range": "stddev: 0.00031699763541595614",
            "extra": "mean: 10.213319746265933 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.9846449047745,
            "unit": "iter/sec",
            "range": "stddev: 0.00003640766151497622",
            "extra": "mean: 9.092178284212375 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 279.30726572503033,
            "unit": "iter/sec",
            "range": "stddev: 0.00030064675646166507",
            "extra": "mean: 3.5802863824690836 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 84.98349626272625,
            "unit": "iter/sec",
            "range": "stddev: 0.0005709398790677304",
            "extra": "mean: 11.76699058024752 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.71589808304017,
            "unit": "iter/sec",
            "range": "stddev: 0.00016234330877472778",
            "extra": "mean: 5.691004689441464 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.883925270117132,
            "unit": "iter/sec",
            "range": "stddev: 0.00012663712724780992",
            "extra": "mean: 52.9550919999906 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 166.38587202026275,
            "unit": "iter/sec",
            "range": "stddev: 0.00006244767268779259",
            "extra": "mean: 6.010125666668492 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6491772235700708,
            "unit": "iter/sec",
            "range": "stddev: 0.0019024335145106722",
            "extra": "mean: 606.3629704000164 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 276.29984161042916,
            "unit": "iter/sec",
            "range": "stddev: 0.0002374614517424299",
            "extra": "mean: 3.6192565083332795 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.4792944357547,
            "unit": "iter/sec",
            "range": "stddev: 0.000060484764554420654",
            "extra": "mean: 1.853639259771605 msec\nrounds: 435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 249.409513718788,
            "unit": "iter/sec",
            "range": "stddev: 0.0004538885139081158",
            "extra": "mean: 4.009470148470403 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.684929941879,
            "unit": "iter/sec",
            "range": "stddev: 0.0008728200439343002",
            "extra": "mean: 27.259149781240666 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 281.5292977434135,
            "unit": "iter/sec",
            "range": "stddev: 0.000272741023795978",
            "extra": "mean: 3.5520281832671015 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 105.35164290058589,
            "unit": "iter/sec",
            "range": "stddev: 0.00011963234068657302",
            "extra": "mean: 9.492020935484042 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.93338275943479,
            "unit": "iter/sec",
            "range": "stddev: 0.0007227968456144332",
            "extra": "mean: 9.907524870967674 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 87.25669940837165,
            "unit": "iter/sec",
            "range": "stddev: 0.021728817447491527",
            "extra": "mean: 11.460438072724731 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2232.8527583391433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000949584189461659",
            "extra": "mean: 447.8575652896285 usec\nrounds: 1792"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 230.41934102561638,
            "unit": "iter/sec",
            "range": "stddev: 0.0003397095778087205",
            "extra": "mean: 4.339913461903475 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2200.138166264787,
            "unit": "iter/sec",
            "range": "stddev: 0.00009264432711087544",
            "extra": "mean: 454.51690958923615 usec\nrounds: 1825"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.40325608252303,
            "unit": "iter/sec",
            "range": "stddev: 0.0007477555284621515",
            "extra": "mean: 9.670875346535801 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.05695883870512,
            "unit": "iter/sec",
            "range": "stddev: 0.00014279611067026838",
            "extra": "mean: 33.27016566666998 msec\nrounds: 30"
          }
        ]
      }
    ]
  }
}