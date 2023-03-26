window.BENCHMARK_DATA = {
  "lastUpdate": 1679811349853,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "c69fe349c0faae37610ada54d7484588da3205c8",
          "message": "chore(flake/poetry2nix): `4e45611b` -> `c56b6590`",
          "timestamp": "2023-03-26T06:10:49Z",
          "tree_id": "194be57a35932301890010afe0b251cf127b1fe3",
          "url": "https://github.com/ibis-project/ibis/commit/c69fe349c0faae37610ada54d7484588da3205c8"
        },
        "date": 1679811265856,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 109.44919800552404,
            "unit": "iter/sec",
            "range": "stddev: 0.005174743559631949",
            "extra": "mean: 9.136659000000426 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.76873502910675,
            "unit": "iter/sec",
            "range": "stddev: 0.00030661590160984043",
            "extra": "mean: 21.381805588234215 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 122.33136636438435,
            "unit": "iter/sec",
            "range": "stddev: 0.0005607091708118738",
            "extra": "mean: 8.174518357142627 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.76284138885352,
            "unit": "iter/sec",
            "range": "stddev: 0.00058683107273583",
            "extra": "mean: 8.212686141303717 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 247.31682366740634,
            "unit": "iter/sec",
            "range": "stddev: 0.004170711956483851",
            "extra": "mean: 4.043396584070674 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.13573010094576,
            "unit": "iter/sec",
            "range": "stddev: 0.00011347087461453246",
            "extra": "mean: 8.998006303568522 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.57185720919232,
            "unit": "iter/sec",
            "range": "stddev: 0.00010488130794334613",
            "extra": "mean: 64.2184157333323 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.00936532492274,
            "unit": "iter/sec",
            "range": "stddev: 0.00006431802393686863",
            "extra": "mean: 10.203106577466128 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.35677410472961,
            "unit": "iter/sec",
            "range": "stddev: 0.00024020099398468285",
            "extra": "mean: 96.55516185713964 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.91600099993049,
            "unit": "iter/sec",
            "range": "stddev: 0.0005140005826908847",
            "extra": "mean: 8.702008347824467 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1167.6206192005338,
            "unit": "iter/sec",
            "range": "stddev: 0.00006823004387992075",
            "extra": "mean: 856.4425666657863 usec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6040825561564933,
            "unit": "iter/sec",
            "range": "stddev: 0.0027327137565393515",
            "extra": "mean: 384.0124029999856 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6243449.560575669,
            "unit": "iter/sec",
            "range": "stddev: 8.859712899443469e-9",
            "extra": "mean: 160.16786718568525 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139332.47390510028,
            "unit": "iter/sec",
            "range": "stddev: 5.259656039909054e-7",
            "extra": "mean: 7.177077762080811 usec\nrounds: 34014"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 312.5341417697863,
            "unit": "iter/sec",
            "range": "stddev: 0.0001833588212064026",
            "extra": "mean: 3.1996504264695766 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2547891.8817860605,
            "unit": "iter/sec",
            "range": "stddev: 1.482066648783889e-8",
            "extra": "mean: 392.4813321745558 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5794019.115015862,
            "unit": "iter/sec",
            "range": "stddev: 9.421727790063176e-9",
            "extra": "mean: 172.59176750182328 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.9790670908979,
            "unit": "iter/sec",
            "range": "stddev: 0.0006285514196196865",
            "extra": "mean: 9.80593398749825 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.76383519364164,
            "unit": "iter/sec",
            "range": "stddev: 0.0005480214328305751",
            "extra": "mean: 9.366467570093018 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5825.661248564102,
            "unit": "iter/sec",
            "range": "stddev: 0.00004791144221842272",
            "extra": "mean: 171.6543337027154 usec\nrounds: 3608"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 189.97455432751977,
            "unit": "iter/sec",
            "range": "stddev: 0.00006657392996513977",
            "extra": "mean: 5.263862855422105 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.48846620063773,
            "unit": "iter/sec",
            "range": "stddev: 0.0005389957265410117",
            "extra": "mean: 9.30332374576266 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 110.95153844857448,
            "unit": "iter/sec",
            "range": "stddev: 0.00872571936740421",
            "extra": "mean: 9.012943975206754 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.90318031106082,
            "unit": "iter/sec",
            "range": "stddev: 0.00010526340355062067",
            "extra": "mean: 13.716822719300225 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 699016.8350477738,
            "unit": "iter/sec",
            "range": "stddev: 0.000014172829843892688",
            "extra": "mean: 1.430580709735919 usec\nrounds: 23981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.91340652112394,
            "unit": "iter/sec",
            "range": "stddev: 0.01741927994098431",
            "extra": "mean: 25.054238341464437 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 314.3363456709053,
            "unit": "iter/sec",
            "range": "stddev: 0.00019527891303249679",
            "extra": "mean: 3.1813056739132253 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5569.903015180181,
            "unit": "iter/sec",
            "range": "stddev: 0.00004682226147275213",
            "extra": "mean: 179.53633973062117 usec\nrounds: 3491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11582.990875031213,
            "unit": "iter/sec",
            "range": "stddev: 0.000014970872564061807",
            "extra": "mean: 86.33348767939052 usec\nrounds: 4667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6671104739174314,
            "unit": "iter/sec",
            "range": "stddev: 0.04789501297106708",
            "extra": "mean: 1.499002097999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8641874045722494,
            "unit": "iter/sec",
            "range": "stddev: 0.0018278195010946663",
            "extra": "mean: 1.1571564161999959 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5827.902731951515,
            "unit": "iter/sec",
            "range": "stddev: 0.00004245088006501629",
            "extra": "mean: 171.5883133253912 usec\nrounds: 2499"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 324.74516373652835,
            "unit": "iter/sec",
            "range": "stddev: 0.000043646653604015584",
            "extra": "mean: 3.079337621210329 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.96439695247523,
            "unit": "iter/sec",
            "range": "stddev: 0.00008876823761952367",
            "extra": "mean: 6.668249400001969 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.1745948641783,
            "unit": "iter/sec",
            "range": "stddev: 0.000043538735266877455",
            "extra": "mean: 3.3993418108103604 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.40654607603761,
            "unit": "iter/sec",
            "range": "stddev: 0.0006003874811766604",
            "extra": "mean: 10.705887777778978 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2527650.3664386566,
            "unit": "iter/sec",
            "range": "stddev: 1.9408588978118978e-8",
            "extra": "mean: 395.6243368457431 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5323.252680678161,
            "unit": "iter/sec",
            "range": "stddev: 0.00009607827381123201",
            "extra": "mean: 187.85506906889947 usec\nrounds: 666"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5295.47384694875,
            "unit": "iter/sec",
            "range": "stddev: 0.00004692788531524397",
            "extra": "mean: 188.8405134086725 usec\nrounds: 3095"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 737.4540231116828,
            "unit": "iter/sec",
            "range": "stddev: 0.000020940786201907145",
            "extra": "mean: 1.3560167395663612 msec\nrounds: 599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.53345252793174,
            "unit": "iter/sec",
            "range": "stddev: 0.0005716637793628105",
            "extra": "mean: 9.8489707096772 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 311.7222417668029,
            "unit": "iter/sec",
            "range": "stddev: 0.00021100609335479814",
            "extra": "mean: 3.207984115384659 msec\nrounds: 312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70971.15255234583,
            "unit": "iter/sec",
            "range": "stddev: 4.6439528595254466e-7",
            "extra": "mean: 14.09023193279037 usec\nrounds: 13948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5667.354778774919,
            "unit": "iter/sec",
            "range": "stddev: 0.000020363454570988342",
            "extra": "mean: 176.44916174034978 usec\nrounds: 2368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5540.564795089399,
            "unit": "iter/sec",
            "range": "stddev: 0.000046636777536685846",
            "extra": "mean: 180.48701476901772 usec\nrounds: 2099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 490648.44777215575,
            "unit": "iter/sec",
            "range": "stddev: 2.117894234301285e-7",
            "extra": "mean: 2.0381191554576645 usec\nrounds: 1989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17973605543784846,
            "unit": "iter/sec",
            "range": "stddev: 0.11501893437296201",
            "extra": "mean: 5.5637139558 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 122.08313099131755,
            "unit": "iter/sec",
            "range": "stddev: 0.000576496965019769",
            "extra": "mean: 8.191139855932423 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9220541967900051,
            "unit": "iter/sec",
            "range": "stddev: 0.007216734909384419",
            "extra": "mean: 1.084534947599991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1872803.4105903334,
            "unit": "iter/sec",
            "range": "stddev: 9.083933513446127e-8",
            "extra": "mean: 533.9588738172931 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.526186693629693,
            "unit": "iter/sec",
            "range": "stddev: 0.0004626339482929437",
            "extra": "mean: 36.3290422727325 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.57706229163313,
            "unit": "iter/sec",
            "range": "stddev: 0.00030619586836235077",
            "extra": "mean: 7.164500983052602 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 109.10700817053599,
            "unit": "iter/sec",
            "range": "stddev: 0.00006684781719286846",
            "extra": "mean: 9.165314096386771 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.02161075830399,
            "unit": "iter/sec",
            "range": "stddev: 0.0005360071727435577",
            "extra": "mean: 9.521849767676798 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.89559285664086,
            "unit": "iter/sec",
            "range": "stddev: 0.00008114404475108911",
            "extra": "mean: 6.254081067115962 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5851.0959660099625,
            "unit": "iter/sec",
            "range": "stddev: 0.00004327300977601969",
            "extra": "mean: 170.90815221783654 usec\nrounds: 2930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.75843162108382,
            "unit": "iter/sec",
            "range": "stddev: 0.000060703035618717466",
            "extra": "mean: 6.106555797468022 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 352.5268693403475,
            "unit": "iter/sec",
            "range": "stddev: 0.00003147012011544358",
            "extra": "mean: 2.8366632077470064 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1754.021004531526,
            "unit": "iter/sec",
            "range": "stddev: 0.000004801543792102801",
            "extra": "mean: 570.1186002998212 usec\nrounds: 1331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 298.83814324220117,
            "unit": "iter/sec",
            "range": "stddev: 0.00020670610183481139",
            "extra": "mean: 3.3462930439556504 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.5816026529993,
            "unit": "iter/sec",
            "range": "stddev: 0.00004159784634151922",
            "extra": "mean: 1.454372828100039 msec\nrounds: 605"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 306.76645336298304,
            "unit": "iter/sec",
            "range": "stddev: 0.0001872280236791194",
            "extra": "mean: 3.259808851448123 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 107.5474619294947,
            "unit": "iter/sec",
            "range": "stddev: 0.012177151967348594",
            "extra": "mean: 9.2982203583342 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.95834672163163,
            "unit": "iter/sec",
            "range": "stddev: 0.0005736481139909102",
            "extra": "mean: 9.71266567346598 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.024769614270134,
            "unit": "iter/sec",
            "range": "stddev: 0.00014351055185431245",
            "extra": "mean: 16.942039867924105 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.75223877956586,
            "unit": "iter/sec",
            "range": "stddev: 0.00019318033724072562",
            "extra": "mean: 10.553840340663895 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.70482380999259,
            "unit": "iter/sec",
            "range": "stddev: 0.00006855368994844177",
            "extra": "mean: 13.386016444445973 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.7056256774152,
            "unit": "iter/sec",
            "range": "stddev: 0.00024394781228164074",
            "extra": "mean: 3.512399860805866 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.77251396905008,
            "unit": "iter/sec",
            "range": "stddev: 0.021623030998061687",
            "extra": "mean: 25.791466624997383 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.5213056283468,
            "unit": "iter/sec",
            "range": "stddev: 0.00017386347705618892",
            "extra": "mean: 14.810140157896768 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2349564.425884335,
            "unit": "iter/sec",
            "range": "stddev: 1.879124104260887e-8",
            "extra": "mean: 425.6108021481802 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7966.850479442201,
            "unit": "iter/sec",
            "range": "stddev: 0.00004056508571692311",
            "extra": "mean: 125.52011646012654 usec\nrounds: 3469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12433428.932087908,
            "unit": "iter/sec",
            "range": "stddev: 3.1718040241588076e-9",
            "extra": "mean: 80.42833601740435 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.76167549862225,
            "unit": "iter/sec",
            "range": "stddev: 0.00012439525111195834",
            "extra": "mean: 8.564454010526765 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.091526342754,
            "unit": "iter/sec",
            "range": "stddev: 0.000020500007018259174",
            "extra": "mean: 1.8549725809717152 msec\nrounds: 494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.543777415451799,
            "unit": "iter/sec",
            "range": "stddev: 0.0001533518350750453",
            "extra": "mean: 180.3824225000028 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11972.550734282517,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015193058350811279",
            "extra": "mean: 83.52439026519 usec\nrounds: 5855"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 179.45771215190982,
            "unit": "iter/sec",
            "range": "stddev: 0.0038561657479235594",
            "extra": "mean: 5.572343411764362 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.77383317995671,
            "unit": "iter/sec",
            "range": "stddev: 0.0005212939665597914",
            "extra": "mean: 9.365590521739527 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9181034163583293,
            "unit": "iter/sec",
            "range": "stddev: 0.00485041420167475",
            "extra": "mean: 1.0892019157999813 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 104.28388689243984,
            "unit": "iter/sec",
            "range": "stddev: 0.01536276767652101",
            "extra": "mean: 9.58920912711488 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 311.05702213546397,
            "unit": "iter/sec",
            "range": "stddev: 0.00019148613270238268",
            "extra": "mean: 3.214844638885871 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7275542.242213577,
            "unit": "iter/sec",
            "range": "stddev: 4.53662142624416e-9",
            "extra": "mean: 137.44680007461304 nsec\nrounds: 54645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13107.208015009926,
            "unit": "iter/sec",
            "range": "stddev: 0.000002948706267074511",
            "extra": "mean: 76.29389865903053 usec\nrounds: 6266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.08850201778821,
            "unit": "iter/sec",
            "range": "stddev: 0.00018771538180533838",
            "extra": "mean: 20.371369239127116 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5677.528057720444,
            "unit": "iter/sec",
            "range": "stddev: 0.00004297751903605273",
            "extra": "mean: 176.1329913007079 usec\nrounds: 2644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7853989498270555,
            "unit": "iter/sec",
            "range": "stddev: 0.001491048088792062",
            "extra": "mean: 560.098906799999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.20328596694736,
            "unit": "iter/sec",
            "range": "stddev: 0.0002133133136510206",
            "extra": "mean: 3.3090308624551894 msec\nrounds: 269"
          }
        ]
      }
    ]
  }
}