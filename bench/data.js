window.BENCHMARK_DATA = {
  "lastUpdate": 1683544666827,
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
          "id": "6e64cd0d811a1abb74170d46d695fd56cbb250e7",
          "message": "feat(oracle): support temporary tables",
          "timestamp": "2023-05-08T13:09:45+02:00",
          "tree_id": "81631eddfc090b7836483132eb0a4074fabe509b",
          "url": "https://github.com/ibis-project/ibis/commit/6e64cd0d811a1abb74170d46d695fd56cbb250e7"
        },
        "date": 1683544584967,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1199.8549072157339,
            "unit": "iter/sec",
            "range": "stddev: 0.005226593640127933",
            "extra": "mean: 833.4341043955909 usec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 188.78751712414632,
            "unit": "iter/sec",
            "range": "stddev: 0.00005273129810706091",
            "extra": "mean: 5.296960388235849 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1921012.408841717,
            "unit": "iter/sec",
            "range": "stddev: 1.047571807583831e-7",
            "extra": "mean: 520.5588445953633 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.56670826446336,
            "unit": "iter/sec",
            "range": "stddev: 0.0006561550155986831",
            "extra": "mean: 9.383793647058427 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 79.54758809316105,
            "unit": "iter/sec",
            "range": "stddev: 0.014528863433716047",
            "extra": "mean: 12.571091392851079 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.6559241919661,
            "unit": "iter/sec",
            "range": "stddev: 0.0004605789314839767",
            "extra": "mean: 21.433505333331166 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.12988666844069,
            "unit": "iter/sec",
            "range": "stddev: 0.0007391934083859546",
            "extra": "mean: 9.987028181818403 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 136843.08975184246,
            "unit": "iter/sec",
            "range": "stddev: 3.3430527767190036e-7",
            "extra": "mean: 7.307639734044634 usec\nrounds: 35335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8399405395408004,
            "unit": "iter/sec",
            "range": "stddev: 0.0061257691821331095",
            "extra": "mean: 1.1905604658000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.99197023916682,
            "unit": "iter/sec",
            "range": "stddev: 0.00004040847053842904",
            "extra": "mean: 5.1022498461529375 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1730.1234991843203,
            "unit": "iter/sec",
            "range": "stddev: 0.000007068216499032415",
            "extra": "mean: 577.9934209733915 usec\nrounds: 1335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2283.6604202152066,
            "unit": "iter/sec",
            "range": "stddev: 0.00008042158245351464",
            "extra": "mean: 437.8934762576314 usec\nrounds: 1411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1951778.5968300097,
            "unit": "iter/sec",
            "range": "stddev: 9.509783430961466e-8",
            "extra": "mean: 512.3531949905357 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1637877.6792352751,
            "unit": "iter/sec",
            "range": "stddev: 1.3191627355291292e-7",
            "extra": "mean: 610.546204199388 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 408.2002844898604,
            "unit": "iter/sec",
            "range": "stddev: 0.00031202549476832316",
            "extra": "mean: 2.4497778125013525 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7180900.02825247,
            "unit": "iter/sec",
            "range": "stddev: 4.053194772347401e-9",
            "extra": "mean: 139.2583096918196 nsec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.3279056483654,
            "unit": "iter/sec",
            "range": "stddev: 0.0007775923747520581",
            "extra": "mean: 10.490107730769674 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 283.09937575415324,
            "unit": "iter/sec",
            "range": "stddev: 0.0002627073431144428",
            "extra": "mean: 3.5323285236362074 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.0409174551659,
            "unit": "iter/sec",
            "range": "stddev: 0.00012879278814339077",
            "extra": "mean: 6.133429666666264 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.46686921374972,
            "unit": "iter/sec",
            "range": "stddev: 0.014612349610939192",
            "extra": "mean: 11.177321938145065 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10338.622796075282,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032448308929978244",
            "extra": "mean: 96.72468178059627 usec\nrounds: 6021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.7436991897935,
            "unit": "iter/sec",
            "range": "stddev: 0.00034961511173874337",
            "extra": "mean: 3.7630243089443955 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13981.627127821186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017883998389798438",
            "extra": "mean: 71.52243375237501 usec\nrounds: 717"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.734886711689654,
            "unit": "iter/sec",
            "range": "stddev: 0.0010268967270765056",
            "extra": "mean: 17.625839372548885 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.646193709458864,
            "unit": "iter/sec",
            "range": "stddev: 0.0013451089802479054",
            "extra": "mean: 607.4619251999934 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 322.8938052806701,
            "unit": "iter/sec",
            "range": "stddev: 0.00002573963230325119",
            "extra": "mean: 3.0969934500005865 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4257965735939404,
            "unit": "iter/sec",
            "range": "stddev: 0.0030827709431616446",
            "extra": "mean: 412.2357212000054 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.96787328375707,
            "unit": "iter/sec",
            "range": "stddev: 0.0008765224779078488",
            "extra": "mean: 10.003213704081883 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1129.6454149321278,
            "unit": "iter/sec",
            "range": "stddev: 0.000009570580492001898",
            "extra": "mean: 885.2335314972112 usec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 236.02623637045394,
            "unit": "iter/sec",
            "range": "stddev: 0.00027563513579992804",
            "extra": "mean: 4.236817124137227 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 277.4096048107068,
            "unit": "iter/sec",
            "range": "stddev: 0.0002711309357124104",
            "extra": "mean: 3.6047778543297366 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2777291048596697,
            "unit": "iter/sec",
            "range": "stddev: 0.07038372893276591",
            "extra": "mean: 782.6385077999987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.53642349162522,
            "unit": "iter/sec",
            "range": "stddev: 0.0006822380719736462",
            "extra": "mean: 27.36994769696649 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.68052046280842,
            "unit": "iter/sec",
            "range": "stddev: 0.00027704028808972606",
            "extra": "mean: 19.349650333332928 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.11502670819874,
            "unit": "iter/sec",
            "range": "stddev: 0.0008342590097027102",
            "extra": "mean: 9.792878014492167 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6258850.094752558,
            "unit": "iter/sec",
            "range": "stddev: 4.944444860728855e-9",
            "extra": "mean: 159.7737579365105 nsec\nrounds: 45046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 84.18432254606927,
            "unit": "iter/sec",
            "range": "stddev: 0.0006417285696578407",
            "extra": "mean: 11.878696291138498 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.587285921158458,
            "unit": "iter/sec",
            "range": "stddev: 0.0010335936185808178",
            "extra": "mean: 40.67142681817741 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4520720.892657806,
            "unit": "iter/sec",
            "range": "stddev: 1.3763263600871415e-8",
            "extra": "mean: 221.2036583865569 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 79.36256286344154,
            "unit": "iter/sec",
            "range": "stddev: 0.019414772817084903",
            "extra": "mean: 12.600399532468364 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2241.066582413384,
            "unit": "iter/sec",
            "range": "stddev: 0.00010460096096692842",
            "extra": "mean: 446.2161043529145 usec\nrounds: 1792"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.12588016807024,
            "unit": "iter/sec",
            "range": "stddev: 0.0002847487559952223",
            "extra": "mean: 3.6215366679549468 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 236.32873168419033,
            "unit": "iter/sec",
            "range": "stddev: 0.0034703465759514172",
            "extra": "mean: 4.231394096153807 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.97681789763224,
            "unit": "iter/sec",
            "range": "stddev: 0.00042998492307349395",
            "extra": "mean: 10.419182693331095 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 158.22653974217957,
            "unit": "iter/sec",
            "range": "stddev: 0.004231649799245211",
            "extra": "mean: 6.320052259434091 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.80598056873389,
            "unit": "iter/sec",
            "range": "stddev: 0.0009284010585452919",
            "extra": "mean: 10.120844854167052 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12362.530574326172,
            "unit": "iter/sec",
            "range": "stddev: 0.0000271634269922563",
            "extra": "mean: 80.88958761216296 usec\nrounds: 2454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2181.1123707552033,
            "unit": "iter/sec",
            "range": "stddev: 0.00008374651829910995",
            "extra": "mean: 458.4816506513844 usec\nrounds: 1228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11655844.643875413,
            "unit": "iter/sec",
            "range": "stddev: 5.7522520642236875e-9",
            "extra": "mean: 85.79386827409125 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 98.36836473709319,
            "unit": "iter/sec",
            "range": "stddev: 0.0009529653723775464",
            "extra": "mean: 10.165869918369351 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.169500189417292,
            "unit": "iter/sec",
            "range": "stddev: 0.12259657080329217",
            "extra": "mean: 5.899698421800008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2233.396590100189,
            "unit": "iter/sec",
            "range": "stddev: 0.00008643758722864815",
            "extra": "mean: 447.7485120343721 usec\nrounds: 1371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8306149341544947,
            "unit": "iter/sec",
            "range": "stddev: 0.006775431417293961",
            "extra": "mean: 1.2039273060000142 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2232.3006889419107,
            "unit": "iter/sec",
            "range": "stddev: 0.00008101699953552658",
            "extra": "mean: 447.9683247663157 usec\nrounds: 1284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.76847472591903,
            "unit": "iter/sec",
            "range": "stddev: 0.0009011307195085914",
            "extra": "mean: 10.124688092784508 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 674.5649719492178,
            "unit": "iter/sec",
            "range": "stddev: 0.00010082912643380346",
            "extra": "mean: 1.482436891305529 msec\nrounds: 506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7728799367150458,
            "unit": "iter/sec",
            "range": "stddev: 0.0037751351134124624",
            "extra": "mean: 1.2938620249999986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8311.303980191937,
            "unit": "iter/sec",
            "range": "stddev: 0.000016754483535740906",
            "extra": "mean: 120.31806349319768 usec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.69969471771925,
            "unit": "iter/sec",
            "range": "stddev: 0.0008501176592075555",
            "extra": "mean: 10.559696131870318 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.46582139944775,
            "unit": "iter/sec",
            "range": "stddev: 0.00031190901630380333",
            "extra": "mean: 3.683704986671425 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.580113141928763,
            "unit": "iter/sec",
            "range": "stddev: 0.00010403669943127901",
            "extra": "mean: 53.82098549999422 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.95997679958256,
            "unit": "iter/sec",
            "range": "stddev: 0.00007077563038328722",
            "extra": "mean: 5.74844868571171 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.70227613201507,
            "unit": "iter/sec",
            "range": "stddev: 0.0009314701989964874",
            "extra": "mean: 10.559408293481763 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.6990426838042,
            "unit": "iter/sec",
            "range": "stddev: 0.00002430378351110091",
            "extra": "mean: 1.8702109414311272 msec\nrounds: 461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6162076.424927044,
            "unit": "iter/sec",
            "range": "stddev: 7.729439578231497e-9",
            "extra": "mean: 162.282959677908 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2138.18369572566,
            "unit": "iter/sec",
            "range": "stddev: 0.00011753934119742807",
            "extra": "mean: 467.6866641528751 usec\nrounds: 1194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.8679132147989,
            "unit": "iter/sec",
            "range": "stddev: 0.0007160500522218895",
            "extra": "mean: 9.816633800001359 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1018245.9326360144,
            "unit": "iter/sec",
            "range": "stddev: 1.2678445355426475e-7",
            "extra": "mean: 982.0810159400494 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1937483.4794688213,
            "unit": "iter/sec",
            "range": "stddev: 8.613063984679647e-8",
            "extra": "mean: 516.1334331863098 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.46166751660218,
            "unit": "iter/sec",
            "range": "stddev: 0.00021517897191639874",
            "extra": "mean: 9.85593894202823 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.13811611942103,
            "unit": "iter/sec",
            "range": "stddev: 0.024164057667270106",
            "extra": "mean: 26.926513902439428 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 281.7954635525212,
            "unit": "iter/sec",
            "range": "stddev: 0.00009079090420557186",
            "extra": "mean: 3.548673166676508 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4545.679068938757,
            "unit": "iter/sec",
            "range": "stddev: 0.00003176839485377281",
            "extra": "mean: 219.98913360011178 usec\nrounds: 2253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.83512457841971,
            "unit": "iter/sec",
            "range": "stddev: 0.00007345631405860425",
            "extra": "mean: 7.946906742853073 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2161.4770156749883,
            "unit": "iter/sec",
            "range": "stddev: 0.00008232585498543485",
            "extra": "mean: 462.6466035715485 usec\nrounds: 1400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 252.77163558315198,
            "unit": "iter/sec",
            "range": "stddev: 0.00042236606878164713",
            "extra": "mean: 3.9561400854687236 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.811912814297195,
            "unit": "iter/sec",
            "range": "stddev: 0.0016297717635251972",
            "extra": "mean: 25.118109864866415 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2180.452768693765,
            "unit": "iter/sec",
            "range": "stddev: 0.00009820370212022005",
            "extra": "mean: 458.62034452553905 usec\nrounds: 1370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.349576948227735,
            "unit": "iter/sec",
            "range": "stddev: 0.00016994433837673578",
            "extra": "mean: 119.76654699999598 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 741.7328541094724,
            "unit": "iter/sec",
            "range": "stddev: 0.000015698112878384372",
            "extra": "mean: 1.3481942918661791 msec\nrounds: 627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.9362458697287,
            "unit": "iter/sec",
            "range": "stddev: 0.0002626497541941082",
            "extra": "mean: 3.5343651249986063 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.60811413115661,
            "unit": "iter/sec",
            "range": "stddev: 0.00010366042256434837",
            "extra": "mean: 9.123412148149946 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 96.97076408730935,
            "unit": "iter/sec",
            "range": "stddev: 0.0010829258904099994",
            "extra": "mean: 10.312386515791834 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.454373836221528,
            "unit": "iter/sec",
            "range": "stddev: 0.00014852054354155892",
            "extra": "mean: 33.95081510000561 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 97.72677103032466,
            "unit": "iter/sec",
            "range": "stddev: 0.0010227414736872365",
            "extra": "mean: 10.232610670106961 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 101.08364236635947,
            "unit": "iter/sec",
            "range": "stddev: 0.00047155419872809074",
            "extra": "mean: 9.892797455553492 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5505304.919347627,
            "unit": "iter/sec",
            "range": "stddev: 9.775147031016309e-9",
            "extra": "mean: 181.6429815696275 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.76567856734074,
            "unit": "iter/sec",
            "range": "stddev: 0.0008978740029391516",
            "extra": "mean: 9.730875268290236 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.25409696226416,
            "unit": "iter/sec",
            "range": "stddev: 0.00012831881935125342",
            "extra": "mean: 6.163172571430184 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.00942849199235,
            "unit": "iter/sec",
            "range": "stddev: 0.017653417889640265",
            "extra": "mean: 11.903425817202391 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 102.4483824384524,
            "unit": "iter/sec",
            "range": "stddev: 0.00008135720473526492",
            "extra": "mean: 9.761013070174798 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.93823507519681,
            "unit": "iter/sec",
            "range": "stddev: 0.0005213171489963102",
            "extra": "mean: 18.20225929411908 msec\nrounds: 51"
          }
        ]
      }
    ]
  }
}