window.BENCHMARK_DATA = {
  "lastUpdate": 1683116519706,
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
          "id": "87e7dffb7c24c7d05ff7e244d38e83aecdcd1c00",
          "message": "test: clean up data loading; remove service spec where possible",
          "timestamp": "2023-05-03T14:08:56+02:00",
          "tree_id": "5cc1a09fa05529042109f0f48c815be7c8424051",
          "url": "https://github.com/ibis-project/ibis/commit/87e7dffb7c24c7d05ff7e244d38e83aecdcd1c00"
        },
        "date": 1683116417918,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 199.00711286561378,
            "unit": "iter/sec",
            "range": "stddev: 0.0077387174373655075",
            "extra": "mean: 5.024946021277558 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1887.123478323032,
            "unit": "iter/sec",
            "range": "stddev: 0.00009375060714572217",
            "extra": "mean: 529.9070312498243 usec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 81.24488657081582,
            "unit": "iter/sec",
            "range": "stddev: 0.0009804405077620281",
            "extra": "mean: 12.308466935065086 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.27313192013985,
            "unit": "iter/sec",
            "range": "stddev: 0.00013623378981125612",
            "extra": "mean: 10.607476166667663 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.18684601119876,
            "unit": "iter/sec",
            "range": "stddev: 0.01753748525935771",
            "extra": "mean: 30.132420527776404 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.81100251033762,
            "unit": "iter/sec",
            "range": "stddev: 0.0008413275835076632",
            "extra": "mean: 19.300919718750364 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1777.379353126797,
            "unit": "iter/sec",
            "range": "stddev: 0.00018145791932039744",
            "extra": "mean: 562.6260923087591 usec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.5590635196725,
            "unit": "iter/sec",
            "range": "stddev: 0.00019912012807937664",
            "extra": "mean: 22.44212335294047 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 583.3500504512953,
            "unit": "iter/sec",
            "range": "stddev: 0.00003152088859462415",
            "extra": "mean: 1.7142365878367085 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 241.2763884448646,
            "unit": "iter/sec",
            "range": "stddev: 0.00031007840991920647",
            "extra": "mean: 4.144624372262251 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.50380963839369,
            "unit": "iter/sec",
            "range": "stddev: 0.00013376049399343217",
            "extra": "mean: 9.216266261365936 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.69847833405082,
            "unit": "iter/sec",
            "range": "stddev: 0.001312236899606782",
            "extra": "mean: 28.819707607139225 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1858.7483436486489,
            "unit": "iter/sec",
            "range": "stddev: 0.00009048657959993752",
            "extra": "mean: 537.9964444444587 usec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 134.51161058530883,
            "unit": "iter/sec",
            "range": "stddev: 0.004798322567560244",
            "extra": "mean: 7.4343024787870515 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 234.48656229659085,
            "unit": "iter/sec",
            "range": "stddev: 0.0003893696734693714",
            "extra": "mean: 4.264636703297086 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.06290224102878,
            "unit": "iter/sec",
            "range": "stddev: 0.0008756161555379079",
            "extra": "mean: 11.485948369048804 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 135.99687751167005,
            "unit": "iter/sec",
            "range": "stddev: 0.00017014438874533042",
            "extra": "mean: 7.353110000001204 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.280265464760568,
            "unit": "iter/sec",
            "range": "stddev: 0.0009278844907520084",
            "extra": "mean: 137.35762862500067 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 976.0701056179765,
            "unit": "iter/sec",
            "range": "stddev: 0.000016011484328380034",
            "extra": "mean: 1.0245165733939499 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3751.4821748172176,
            "unit": "iter/sec",
            "range": "stddev: 0.00003283302337644355",
            "extra": "mean: 266.5613092107315 usec\nrounds: 1672"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3751554.8174863695,
            "unit": "iter/sec",
            "range": "stddev: 2.2354702819473514e-8",
            "extra": "mean: 266.55614769105773 nsec\nrounds: 120468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9571692.436221069,
            "unit": "iter/sec",
            "range": "stddev: 7.048014821803872e-9",
            "extra": "mean: 104.47473178464602 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 242.79129149455477,
            "unit": "iter/sec",
            "range": "stddev: 0.00031413734637040933",
            "extra": "mean: 4.118763872642556 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 230.00960074004865,
            "unit": "iter/sec",
            "range": "stddev: 0.000312429646267888",
            "extra": "mean: 4.347644606062231 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138026.80786207234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010597294520470534",
            "extra": "mean: 7.244969404778829 usec\nrounds: 34842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.53886074105803,
            "unit": "iter/sec",
            "range": "stddev: 0.0007895710953858479",
            "extra": "mean: 11.044981037037887 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.9845534045688,
            "unit": "iter/sec",
            "range": "stddev: 0.0007546414440401612",
            "extra": "mean: 12.050435400004744 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.80737602853517,
            "unit": "iter/sec",
            "range": "stddev: 0.0009035449761499198",
            "extra": "mean: 11.26032594047914 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 165.013123531713,
            "unit": "iter/sec",
            "range": "stddev: 0.00010784507258314905",
            "extra": "mean: 6.060124059210449 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 270.1379767351397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000608264385085083",
            "extra": "mean: 3.7018119854375864 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.87823414994841,
            "unit": "iter/sec",
            "range": "stddev: 0.00039234484133937234",
            "extra": "mean: 12.065894142854665 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4626513.99449364,
            "unit": "iter/sec",
            "range": "stddev: 2.9333203361250784e-8",
            "extra": "mean: 216.14546096479785 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.1724794026107,
            "unit": "iter/sec",
            "range": "stddev: 0.00091608005987648",
            "extra": "mean: 11.34140728235426 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.97103572656767,
            "unit": "iter/sec",
            "range": "stddev: 0.0003568839422700483",
            "extra": "mean: 21.752827279070374 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.49261617270585,
            "unit": "iter/sec",
            "range": "stddev: 0.0001273085226007221",
            "extra": "mean: 6.7343415839407115 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7744873713474077,
            "unit": "iter/sec",
            "range": "stddev: 0.008931523060163142",
            "extra": "mean: 1.291176637599989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 85.23694762847404,
            "unit": "iter/sec",
            "range": "stddev: 0.0010315619022059322",
            "extra": "mean: 11.732001530119815 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 94.51744144753035,
            "unit": "iter/sec",
            "range": "stddev: 0.00010842041675704489",
            "extra": "mean: 10.58005786746917 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 89.48517539601791,
            "unit": "iter/sec",
            "range": "stddev: 0.00013104409043938458",
            "extra": "mean: 11.175035368422602 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.06809223966144,
            "unit": "iter/sec",
            "range": "stddev: 0.00023732499664304285",
            "extra": "mean: 11.354850259259397 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.207307315235772,
            "unit": "iter/sec",
            "range": "stddev: 0.0015483268478901915",
            "extra": "mean: 453.04067679999775 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6733892178937518,
            "unit": "iter/sec",
            "range": "stddev: 0.0052572049199972465",
            "extra": "mean: 1.4850252624000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6019144.682074963,
            "unit": "iter/sec",
            "range": "stddev: 1.663560118378534e-8",
            "extra": "mean: 166.13656139180372 nsec\nrounds: 50503"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.47299345838522,
            "unit": "iter/sec",
            "range": "stddev: 0.0010334406975021527",
            "extra": "mean: 11.69960193902506 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5228233.937392429,
            "unit": "iter/sec",
            "range": "stddev: 1.3665590700208024e-8",
            "extra": "mean: 191.2691765469383 nsec\nrounds: 52632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1572232.0159899073,
            "unit": "iter/sec",
            "range": "stddev: 1.5736984606732738e-7",
            "extra": "mean: 636.038440783424 nsec\nrounds: 107516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12164.615582512071,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043385851563105615",
            "extra": "mean: 82.20563923430562 usec\nrounds: 5225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.53646561343932,
            "unit": "iter/sec",
            "range": "stddev: 0.0010742462253133511",
            "extra": "mean: 12.264451156626713 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9236.385945625114,
            "unit": "iter/sec",
            "range": "stddev: 0.00000405923327134638",
            "extra": "mean: 108.26745502916731 usec\nrounds: 4136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 355.80101584108877,
            "unit": "iter/sec",
            "range": "stddev: 0.00008400030405740398",
            "extra": "mean: 2.810559710280955 msec\nrounds: 321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 239.3120701265966,
            "unit": "iter/sec",
            "range": "stddev: 0.0003240297213668163",
            "extra": "mean: 4.178644225805233 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1807.4162533099677,
            "unit": "iter/sec",
            "range": "stddev: 0.0001133172782142104",
            "extra": "mean: 553.2759806539718 usec\nrounds: 1499"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 85.41004537152145,
            "unit": "iter/sec",
            "range": "stddev: 0.0010380684360576935",
            "extra": "mean: 11.708224666667059 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10618.795164508767,
            "unit": "iter/sec",
            "range": "stddev: 0.000016258214173215115",
            "extra": "mean: 94.1726424239073 usec\nrounds: 5115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.45694339805155,
            "unit": "iter/sec",
            "range": "stddev: 0.0008745862706121231",
            "extra": "mean: 11.434197916666259 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.16640933077133,
            "unit": "iter/sec",
            "range": "stddev: 0.0001644098666441597",
            "extra": "mean: 7.185642029630841 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1916.0105135395634,
            "unit": "iter/sec",
            "range": "stddev: 0.00010084583872418398",
            "extra": "mean: 521.9178041735476 usec\nrounds: 1246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2268664.3385323826,
            "unit": "iter/sec",
            "range": "stddev: 4.662790157915533e-8",
            "extra": "mean: 440.7879927477341 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1901.9622157717426,
            "unit": "iter/sec",
            "range": "stddev: 0.00011898702514934463",
            "extra": "mean: 525.7728001679774 usec\nrounds: 1191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3974205715733377,
            "unit": "iter/sec",
            "range": "stddev: 0.0029121454518888155",
            "extra": "mean: 715.6041784000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 110.10131773058374,
            "unit": "iter/sec",
            "range": "stddev: 0.00046160031424902003",
            "extra": "mean: 9.082543430106668 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 648.1434168309876,
            "unit": "iter/sec",
            "range": "stddev: 0.00001957222076890099",
            "extra": "mean: 1.5428684054053485 msec\nrounds: 555"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.09166338784931,
            "unit": "iter/sec",
            "range": "stddev: 0.0008741436355822944",
            "extra": "mean: 11.482155249999693 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.19085996011643,
            "unit": "iter/sec",
            "range": "stddev: 0.0002554682529217112",
            "extra": "mean: 61.76324188235453 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1872.3224027317815,
            "unit": "iter/sec",
            "range": "stddev: 0.00009716365950762956",
            "extra": "mean: 534.0960501999903 usec\nrounds: 1255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.24964776810891,
            "unit": "iter/sec",
            "range": "stddev: 0.0008513104032716087",
            "extra": "mean: 47.05960357144282 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.303934519359863,
            "unit": "iter/sec",
            "range": "stddev: 0.00027681627268287014",
            "extra": "mean: 38.01712626922766 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 239.00659963919932,
            "unit": "iter/sec",
            "range": "stddev: 0.0003074512802950002",
            "extra": "mean: 4.183984883721139 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2279759.702986021,
            "unit": "iter/sec",
            "range": "stddev: 5.165349730533985e-8",
            "extra": "mean: 438.6427212879896 nsec\nrounds: 101000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.569887029209,
            "unit": "iter/sec",
            "range": "stddev: 0.00021984688994467353",
            "extra": "mean: 5.794753750002403 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7375.242659484243,
            "unit": "iter/sec",
            "range": "stddev: 0.00001615576722519966",
            "extra": "mean: 135.58875906463138 usec\nrounds: 3420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.25404691155321,
            "unit": "iter/sec",
            "range": "stddev: 0.001027186820564944",
            "extra": "mean: 27.583127545447248 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 69.82319366588189,
            "unit": "iter/sec",
            "range": "stddev: 0.02211720721670196",
            "extra": "mean: 14.321888580250317 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.94189751237312,
            "unit": "iter/sec",
            "range": "stddev: 0.0009919810930405276",
            "extra": "mean: 11.7727532500005 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 200.87596492019827,
            "unit": "iter/sec",
            "range": "stddev: 0.004178172128489343",
            "extra": "mean: 4.97819637305672 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14637762284317268,
            "unit": "iter/sec",
            "range": "stddev: 0.10489874388305293",
            "extra": "mean: 6.8316453060000075 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 454.4254854605335,
            "unit": "iter/sec",
            "range": "stddev: 0.00003905034923375935",
            "extra": "mean: 2.200580803663683 msec\nrounds: 382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7757482869682754,
            "unit": "iter/sec",
            "range": "stddev: 0.0120582509936396",
            "extra": "mean: 1.2890779351999981 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1434120.1364527256,
            "unit": "iter/sec",
            "range": "stddev: 2.183242024362248e-7",
            "extra": "mean: 697.2916526180888 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1503.0794319219085,
            "unit": "iter/sec",
            "range": "stddev: 0.000047576013928961466",
            "extra": "mean: 665.3008342488944 usec\nrounds: 1092"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1878.667999540414,
            "unit": "iter/sec",
            "range": "stddev: 0.00011364333183206521",
            "extra": "mean: 532.2920283118859 usec\nrounds: 989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.23624865872903,
            "unit": "iter/sec",
            "range": "stddev: 0.0005239618235721623",
            "extra": "mean: 24.853211552639504 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4951056.574575423,
            "unit": "iter/sec",
            "range": "stddev: 2.9753681783801247e-8",
            "extra": "mean: 201.97709012953408 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1665257242290057,
            "unit": "iter/sec",
            "range": "stddev: 0.004516961097154939",
            "extra": "mean: 857.2464191999984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 865125.535392056,
            "unit": "iter/sec",
            "range": "stddev: 4.1186939781701916e-7",
            "extra": "mean: 1.1559016109110938 usec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 75.14226396955839,
            "unit": "iter/sec",
            "range": "stddev: 0.02030525855245161",
            "extra": "mean: 13.308089844153747 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 85.83328576992541,
            "unit": "iter/sec",
            "range": "stddev: 0.0010095515652388083",
            "extra": "mean: 11.650491892859398 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 214.3655142012236,
            "unit": "iter/sec",
            "range": "stddev: 0.0005847122762578769",
            "extra": "mean: 4.664929448779276 msec\nrounds: 205"
          }
        ]
      }
    ]
  }
}