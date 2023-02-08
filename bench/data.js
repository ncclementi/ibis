window.BENCHMARK_DATA = {
  "lastUpdate": 1675880140382,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "5a164312eb3d6267a00e09f1c8e35fb8b10bf9d8",
          "message": "fix: don't expose backend methods on `ibis.<backend>` directly\n\nPreviously all methods on a backend were also exposed via the backend's\npseudomodule (i.e. `ibis.<backend>.<method>` instead of\n`ibis.<backend>.connect().<method>`). This was an implementation detail\nof how backends were registered, most of these methods didn't work\nwithout an explicit `connect` call beforehand, and should not (and could\nnot) work properly when called on the `ibis.<backend>` directly. We now\nexpose only `connect`, `compile`, `add_operation`, and `has_operation`\non the backend module namespace, all other methods require a connected\nbackend to work.\n\nBREAKING CHANGE: some methods have been removed from the top-level `ibis.<backend>` namespaces, access them on a connected backend instance instead.",
          "timestamp": "2023-02-08T13:10:45-05:00",
          "tree_id": "6db51ff335ad3e4cc18dd98246e64378e4a8fd62",
          "url": "https://github.com/ibis-project/ibis/commit/5a164312eb3d6267a00e09f1c8e35fb8b10bf9d8"
        },
        "date": 1675880063947,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 249.92544730455094,
            "unit": "iter/sec",
            "range": "stddev: 0.00018808773627109596",
            "extra": "mean: 4.001193198951977 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 223.66146671966226,
            "unit": "iter/sec",
            "range": "stddev: 0.00028106115195797906",
            "extra": "mean: 4.471042842857693 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1481063.6369917952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017559956246615882",
            "extra": "mean: 675.1904341066067 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.96067972232058,
            "unit": "iter/sec",
            "range": "stddev: 0.016082308414220762",
            "extra": "mean: 32.29903248148221 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.35927077204194,
            "unit": "iter/sec",
            "range": "stddev: 0.0007739819911347783",
            "extra": "mean: 10.711309029413151 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4106.54460051372,
            "unit": "iter/sec",
            "range": "stddev: 0.00004706880831306254",
            "extra": "mean: 243.513731684517 usec\nrounds: 2143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4267045.532030588,
            "unit": "iter/sec",
            "range": "stddev: 2.183288521987152e-8",
            "extra": "mean: 234.35419015210368 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5663394994877435,
            "unit": "iter/sec",
            "range": "stddev: 0.0022598516413529918",
            "extra": "mean: 638.4311959999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 82.16284895474953,
            "unit": "iter/sec",
            "range": "stddev: 0.011851421500059764",
            "extra": "mean: 12.170950894737611 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2096792.3270533953,
            "unit": "iter/sec",
            "range": "stddev: 2.2149762234746665e-8",
            "extra": "mean: 476.91895239118867 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.301205857405996,
            "unit": "iter/sec",
            "range": "stddev: 0.0008826238249486306",
            "extra": "mean: 16.863063499999846 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10717.504711929967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023987067706276525",
            "extra": "mean: 93.30530070930324 usec\nrounds: 4792"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5753985676466058,
            "unit": "iter/sec",
            "range": "stddev: 0.007717646465751341",
            "extra": "mean: 1.7379257721999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4513.3434343551135,
            "unit": "iter/sec",
            "range": "stddev: 0.00004037356374873297",
            "extra": "mean: 221.56523529499245 usec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10564.13453709112,
            "unit": "iter/sec",
            "range": "stddev: 0.000027736375814082104",
            "extra": "mean: 94.65990767998628 usec\nrounds: 2513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5195.947265583427,
            "unit": "iter/sec",
            "range": "stddev: 0.00006260021362953334",
            "extra": "mean: 192.45768844186202 usec\nrounds: 398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19272.312874028055,
            "unit": "iter/sec",
            "range": "stddev: 0.000013736624053909638",
            "extra": "mean: 51.887908137254755 usec\nrounds: 3527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.897259530394196,
            "unit": "iter/sec",
            "range": "stddev: 0.0003202629399347434",
            "extra": "mean: 204.19583519999946 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 141.01925496305554,
            "unit": "iter/sec",
            "range": "stddev: 0.0006593921167951488",
            "extra": "mean: 7.09123020301009 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4680.359265658531,
            "unit": "iter/sec",
            "range": "stddev: 0.00005303647179814935",
            "extra": "mean: 213.65881190731608 usec\nrounds: 2637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.53523196576408,
            "unit": "iter/sec",
            "range": "stddev: 0.0010061842396037772",
            "extra": "mean: 24.669897062501 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5458135.915764005,
            "unit": "iter/sec",
            "range": "stddev: 4.682835788633389e-9",
            "extra": "mean: 183.2127333275017 nsec\nrounds: 54055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10568135.843919883,
            "unit": "iter/sec",
            "range": "stddev: 4.71518293225224e-9",
            "extra": "mean: 94.62406755263261 nsec\nrounds: 104156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 508.1432875264534,
            "unit": "iter/sec",
            "range": "stddev: 0.0001077013425341459",
            "extra": "mean: 1.9679488533004406 msec\nrounds: 409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.83207433832422,
            "unit": "iter/sec",
            "range": "stddev: 0.000035112467997711695",
            "extra": "mean: 5.853701676767976 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8481097625771623,
            "unit": "iter/sec",
            "range": "stddev: 0.0030592274403846097",
            "extra": "mean: 1.1790926647999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.58926664162643,
            "unit": "iter/sec",
            "range": "stddev: 0.0005433797357006582",
            "extra": "mean: 24.637055131576272 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 128.82787780893926,
            "unit": "iter/sec",
            "range": "stddev: 0.010579665540651245",
            "extra": "mean: 7.762295063829816 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 155.6158850047704,
            "unit": "iter/sec",
            "range": "stddev: 0.0007077945563630636",
            "extra": "mean: 6.426079188312588 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2094145.761283084,
            "unit": "iter/sec",
            "range": "stddev: 2.020153026247685e-8",
            "extra": "mean: 477.52167900067377 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 140.21910658366096,
            "unit": "iter/sec",
            "range": "stddev: 0.00031753315328584425",
            "extra": "mean: 7.131695703704655 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.84423468816617,
            "unit": "iter/sec",
            "range": "stddev: 0.00006999822697408802",
            "extra": "mean: 14.960153327584377 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.309582548061952,
            "unit": "iter/sec",
            "range": "stddev: 0.0007354315162832629",
            "extra": "mean: 75.13383657142673 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.22751968744057,
            "unit": "iter/sec",
            "range": "stddev: 0.028881669021299634",
            "extra": "mean: 32.02303641176443 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 262.4932128684263,
            "unit": "iter/sec",
            "range": "stddev: 0.00002124889266107789",
            "extra": "mean: 3.8096223101252 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.069071327785236,
            "unit": "iter/sec",
            "range": "stddev: 0.00040156807251499237",
            "extra": "mean: 110.26487320000058 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.59894132601069,
            "unit": "iter/sec",
            "range": "stddev: 0.0007341169424277074",
            "extra": "mean: 12.40711085714078 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.68045139554407,
            "unit": "iter/sec",
            "range": "stddev: 0.0006509350970983401",
            "extra": "mean: 10.907450659090046 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 236.12638366565054,
            "unit": "iter/sec",
            "range": "stddev: 0.0002473491422681769",
            "extra": "mean: 4.235020180616398 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 590.5000523758799,
            "unit": "iter/sec",
            "range": "stddev: 0.00008916318824658649",
            "extra": "mean: 1.6934799514013503 msec\nrounds: 535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.6153657840806,
            "unit": "iter/sec",
            "range": "stddev: 0.0002704729400592971",
            "extra": "mean: 8.430610936363275 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5475.603624904967,
            "unit": "iter/sec",
            "range": "stddev: 0.00005252498292541525",
            "extra": "mean: 182.62826685475355 usec\nrounds: 2121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.12524038591106,
            "unit": "iter/sec",
            "range": "stddev: 0.00014646043605030256",
            "extra": "mean: 9.888728038458357 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5526.245774665224,
            "unit": "iter/sec",
            "range": "stddev: 0.000050319602210872366",
            "extra": "mean: 180.95467352980322 usec\nrounds: 2380"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4791.525457675515,
            "unit": "iter/sec",
            "range": "stddev: 0.00005039697107625326",
            "extra": "mean: 208.70180255394575 usec\nrounds: 3054"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 242.99035264795873,
            "unit": "iter/sec",
            "range": "stddev: 0.00009271480378900601",
            "extra": "mean: 4.115389722689061 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5393.705060339901,
            "unit": "iter/sec",
            "range": "stddev: 0.00005089586610100581",
            "extra": "mean: 185.4013129774252 usec\nrounds: 2620"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9690.716046046864,
            "unit": "iter/sec",
            "range": "stddev: 0.000015489005239105943",
            "extra": "mean: 103.19154902985011 usec\nrounds: 1805"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 156.3380816487024,
            "unit": "iter/sec",
            "range": "stddev: 0.0006830218170161633",
            "extra": "mean: 6.396394208335228 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 250.3033216841198,
            "unit": "iter/sec",
            "range": "stddev: 0.00026027476104681553",
            "extra": "mean: 3.9951527341774145 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 267.4192984132768,
            "unit": "iter/sec",
            "range": "stddev: 0.00006346312629376048",
            "extra": "mean: 3.7394459036182712 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 153.21346361080268,
            "unit": "iter/sec",
            "range": "stddev: 0.0007534436314978944",
            "extra": "mean: 6.526841547947962 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1710894.788789124,
            "unit": "iter/sec",
            "range": "stddev: 1.2864325621479646e-7",
            "extra": "mean: 584.4894768238462 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2327977137862303,
            "unit": "iter/sec",
            "range": "stddev: 0.003589235138756732",
            "extra": "mean: 447.8686062000065 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.36723615560504,
            "unit": "iter/sec",
            "range": "stddev: 0.0007566283152611777",
            "extra": "mean: 11.578464757148563 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 246.77291529614462,
            "unit": "iter/sec",
            "range": "stddev: 0.0002257679882459528",
            "extra": "mean: 4.052308572032432 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.22751352780271,
            "unit": "iter/sec",
            "range": "stddev: 0.0001789058419426681",
            "extra": "mean: 10.285154517646333 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 93.12769040916986,
            "unit": "iter/sec",
            "range": "stddev: 0.0006749236121389028",
            "extra": "mean: 10.737944811112104 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.81376423392294,
            "unit": "iter/sec",
            "range": "stddev: 0.0004901072372283808",
            "extra": "mean: 18.243592899995065 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1475.2189463868003,
            "unit": "iter/sec",
            "range": "stddev: 0.000006434131147045379",
            "extra": "mean: 677.8654805439311 usec\nrounds: 1105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 247.34122242112747,
            "unit": "iter/sec",
            "range": "stddev: 0.00026286174073899675",
            "extra": "mean: 4.042997726830114 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 84.49817416164655,
            "unit": "iter/sec",
            "range": "stddev: 0.0006934862810281749",
            "extra": "mean: 11.834575242856513 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 950.0040064923818,
            "unit": "iter/sec",
            "range": "stddev: 0.000029480557460291926",
            "extra": "mean: 1.0526271396393516 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.11078052003928,
            "unit": "iter/sec",
            "range": "stddev: 0.00013334888604322597",
            "extra": "mean: 15.358439754722767 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 594064.9879021221,
            "unit": "iter/sec",
            "range": "stddev: 4.0482679576906375e-7",
            "extra": "mean: 1.6833175163737468 usec\nrounds: 22676"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 251.84122646133466,
            "unit": "iter/sec",
            "range": "stddev: 0.00019921043509876584",
            "extra": "mean: 3.9707557577096324 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.129915001136503,
            "unit": "iter/sec",
            "range": "stddev: 0.0003343557549054308",
            "extra": "mean: 39.793210599987106 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 137.86979602595605,
            "unit": "iter/sec",
            "range": "stddev: 0.00009666163922925761",
            "extra": "mean: 7.253220276120051 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.54789352056994,
            "unit": "iter/sec",
            "range": "stddev: 0.0008117097229148212",
            "extra": "mean: 11.293323423528953 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13535115312456858,
            "unit": "iter/sec",
            "range": "stddev: 0.10793495587655545",
            "extra": "mean: 7.388189734000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8437522327002343,
            "unit": "iter/sec",
            "range": "stddev: 0.003008405002660615",
            "extra": "mean: 1.1851820490000136 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.27365483898153,
            "unit": "iter/sec",
            "range": "stddev: 0.0002662462442981578",
            "extra": "mean: 11.591023955880493 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 387086.6306884306,
            "unit": "iter/sec",
            "range": "stddev: 4.180135126572944e-7",
            "extra": "mean: 2.583401028915692 usec\nrounds: 1945"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122210.064623628,
            "unit": "iter/sec",
            "range": "stddev: 3.135217770117273e-7",
            "extra": "mean: 8.182632118555157 usec\nrounds: 37175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 157.5363003567668,
            "unit": "iter/sec",
            "range": "stddev: 0.0006942186217054956",
            "extra": "mean: 6.347743331126451 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 158.01597986019,
            "unit": "iter/sec",
            "range": "stddev: 0.0007108235837480339",
            "extra": "mean: 6.328473872609492 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57374.297137069894,
            "unit": "iter/sec",
            "range": "stddev: 4.983543178932377e-7",
            "extra": "mean: 17.42940741584952 usec\nrounds: 4396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.64967939281485,
            "unit": "iter/sec",
            "range": "stddev: 0.00005697987026816829",
            "extra": "mean: 6.594145164064091 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 262.1288149489861,
            "unit": "iter/sec",
            "range": "stddev: 0.00018511035156728217",
            "extra": "mean: 3.814918250000917 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7394488117086607,
            "unit": "iter/sec",
            "range": "stddev: 0.002969406100843045",
            "extra": "mean: 1.3523586543999955 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 401.20149402735933,
            "unit": "iter/sec",
            "range": "stddev: 0.00010027744962383227",
            "extra": "mean: 2.492513150840377 msec\nrounds: 358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4538854.999323443,
            "unit": "iter/sec",
            "range": "stddev: 1.1359465438553906e-8",
            "extra": "mean: 220.31988246997145 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}