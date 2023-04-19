window.BENCHMARK_DATA = {
  "lastUpdate": 1681904225120,
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
          "id": "7f386e3d304f130cbaafcf3e8e14da0dba062292",
          "message": "chore(flake/poetry2nix): `4e91056f` -> `a28d8d41`",
          "timestamp": "2023-04-19T11:31:26Z",
          "tree_id": "76522dd9b7244adac0c8b2477718df02dd414260",
          "url": "https://github.com/ibis-project/ibis/commit/7f386e3d304f130cbaafcf3e8e14da0dba062292"
        },
        "date": 1681904132457,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3030840.1317030056,
            "unit": "iter/sec",
            "range": "stddev: 3.288134999498997e-7",
            "extra": "mean: 329.9415200227363 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1311.5701164476425,
            "unit": "iter/sec",
            "range": "stddev: 0.004273960344485228",
            "extra": "mean: 762.4449409601348 usec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 92.75785108084149,
            "unit": "iter/sec",
            "range": "stddev: 0.000951097068980249",
            "extra": "mean: 10.780758591835717 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4192.671611056932,
            "unit": "iter/sec",
            "range": "stddev: 0.00003787954582155667",
            "extra": "mean: 238.51140579739072 usec\nrounds: 1035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 245.58713326656311,
            "unit": "iter/sec",
            "range": "stddev: 0.0003870975708773741",
            "extra": "mean: 4.07187455913901 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 878.8791068835096,
            "unit": "iter/sec",
            "range": "stddev: 0.0007424884884329497",
            "extra": "mean: 1.1378129166660738 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 98.66142020187276,
            "unit": "iter/sec",
            "range": "stddev: 0.001036238363826959",
            "extra": "mean: 10.135674085715404 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 224.78324284119998,
            "unit": "iter/sec",
            "range": "stddev: 0.0007961239916755567",
            "extra": "mean: 4.448730196078087 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 209.74005446879872,
            "unit": "iter/sec",
            "range": "stddev: 0.0011121851559580313",
            "extra": "mean: 4.767806523807124 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 83.52062754187581,
            "unit": "iter/sec",
            "range": "stddev: 0.0015791830696497222",
            "extra": "mean: 11.973090114757783 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1913.39111041848,
            "unit": "iter/sec",
            "range": "stddev: 0.00014054021032027954",
            "extra": "mean: 522.6323016527912 usec\nrounds: 1452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 151.09791011754737,
            "unit": "iter/sec",
            "range": "stddev: 0.0003238839830934373",
            "extra": "mean: 6.618225223777385 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11162.583100176847,
            "unit": "iter/sec",
            "range": "stddev: 0.000016050270500438913",
            "extra": "mean: 89.58499937027632 usec\nrounds: 6357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8539561011921015,
            "unit": "iter/sec",
            "range": "stddev: 0.014048530629218728",
            "extra": "mean: 1.171020382200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7550.9554354753955,
            "unit": "iter/sec",
            "range": "stddev: 0.000024355683887012856",
            "extra": "mean: 132.43357195592316 usec\nrounds: 1626"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 612.8175912668326,
            "unit": "iter/sec",
            "range": "stddev: 0.00010664029747878089",
            "extra": "mean: 1.6318069426381412 msec\nrounds: 523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2057.087069526052,
            "unit": "iter/sec",
            "range": "stddev: 0.00009745752616915694",
            "extra": "mean: 486.12429430631624 usec\nrounds: 1247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 66172.28021868815,
            "unit": "iter/sec",
            "range": "stddev: 0.000005021292046473676",
            "extra": "mean: 15.112068024483513 usec\nrounds: 12422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 81.69267283466107,
            "unit": "iter/sec",
            "range": "stddev: 0.012324705550797106",
            "extra": "mean: 12.240999900002217 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 247.26644589151155,
            "unit": "iter/sec",
            "range": "stddev: 0.0003485313266403128",
            "extra": "mean: 4.044220380951935 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.851066024306244,
            "unit": "iter/sec",
            "range": "stddev: 0.013355797808828798",
            "extra": "mean: 1.1749969702000045 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2045.7503405286484,
            "unit": "iter/sec",
            "range": "stddev: 0.00009955220725502594",
            "extra": "mean: 488.8182004367097 usec\nrounds: 1372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 90.45025227144428,
            "unit": "iter/sec",
            "range": "stddev: 0.0009526950217715424",
            "extra": "mean: 11.055801115943446 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7183195410036183,
            "unit": "iter/sec",
            "range": "stddev: 0.016741181516611945",
            "extra": "mean: 1.3921380985999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 147.10570440585087,
            "unit": "iter/sec",
            "range": "stddev: 0.003832344348274921",
            "extra": "mean: 6.797832919117083 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1755.5802798408008,
            "unit": "iter/sec",
            "range": "stddev: 0.00022837171859611382",
            "extra": "mean: 569.6122310571191 usec\nrounds: 1069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 252.6938554810131,
            "unit": "iter/sec",
            "range": "stddev: 0.0005444517031358304",
            "extra": "mean: 3.9573578000005543 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 102.44714316483677,
            "unit": "iter/sec",
            "range": "stddev: 0.0014816863041795516",
            "extra": "mean: 9.76113114634155 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.44623841172098,
            "unit": "iter/sec",
            "range": "stddev: 0.00203944451928472",
            "extra": "mean: 29.898728451614385 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.62016875141039,
            "unit": "iter/sec",
            "range": "stddev: 0.002577721214133146",
            "extra": "mean: 19.372272973684876 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 59.32313496877987,
            "unit": "iter/sec",
            "range": "stddev: 0.03164850603582902",
            "extra": "mean: 16.856829979168708 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 80.66066747201013,
            "unit": "iter/sec",
            "range": "stddev: 0.0019439000557498597",
            "extra": "mean: 12.397616227847452 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.05600922038744,
            "unit": "iter/sec",
            "range": "stddev: 0.0012891864453579349",
            "extra": "mean: 11.35640836841913 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.317446923684,
            "unit": "iter/sec",
            "range": "stddev: 0.0005091559756144232",
            "extra": "mean: 6.9291691428605064 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 63.89146277082059,
            "unit": "iter/sec",
            "range": "stddev: 0.0015114055617338475",
            "extra": "mean: 15.651543361700943 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.99448925053068,
            "unit": "iter/sec",
            "range": "stddev: 0.0017679131469356135",
            "extra": "mean: 12.50086111392187 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1244713.693535793,
            "unit": "iter/sec",
            "range": "stddev: 0.00001597680139396614",
            "extra": "mean: 803.3976047611015 nsec\nrounds: 147038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.92534406837689,
            "unit": "iter/sec",
            "range": "stddev: 0.001678415600472191",
            "extra": "mean: 12.51167588524224 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.90044436025151,
            "unit": "iter/sec",
            "range": "stddev: 0.0018040263923950093",
            "extra": "mean: 27.854808424242975 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11651.570534315904,
            "unit": "iter/sec",
            "range": "stddev: 0.000028641970267438174",
            "extra": "mean: 85.82533977327999 usec\nrounds: 2381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9737572.313925838,
            "unit": "iter/sec",
            "range": "stddev: 1.2546769873727755e-7",
            "extra": "mean: 102.69500115239232 nsec\nrounds: 104156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 45.22282467461053,
            "unit": "iter/sec",
            "range": "stddev: 0.0006010260464133885",
            "extra": "mean: 22.1127275263155 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 69.21416091208862,
            "unit": "iter/sec",
            "range": "stddev: 0.02232804258587499",
            "extra": "mean: 14.447910468352505 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.89880108015113,
            "unit": "iter/sec",
            "range": "stddev: 0.0009719112065621948",
            "extra": "mean: 11.123618869048425 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 92.14990909368018,
            "unit": "iter/sec",
            "range": "stddev: 0.00040036285551612075",
            "extra": "mean: 10.85188265333386 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4722614.06736725,
            "unit": "iter/sec",
            "range": "stddev: 5.799195415892287e-8",
            "extra": "mean: 211.74713532284963 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.07136098617693,
            "unit": "iter/sec",
            "range": "stddev: 0.0010780997267813813",
            "extra": "mean: 10.980400305555804 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1897.542425832268,
            "unit": "iter/sec",
            "range": "stddev: 0.00012585255170910432",
            "extra": "mean: 526.9974396284694 usec\nrounds: 1615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5981982.9040934015,
            "unit": "iter/sec",
            "range": "stddev: 4.020973602419679e-8",
            "extra": "mean: 167.16864893014463 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 97.76742856099226,
            "unit": "iter/sec",
            "range": "stddev: 0.00039081261528483836",
            "extra": "mean: 10.228355340001087 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 258.3480673815216,
            "unit": "iter/sec",
            "range": "stddev: 0.00034511348648797943",
            "extra": "mean: 3.870746973784117 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1885.0193078587656,
            "unit": "iter/sec",
            "range": "stddev: 0.0001124066877345296",
            "extra": "mean: 530.4985449384717 usec\nrounds: 1057"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 252.40768896057415,
            "unit": "iter/sec",
            "range": "stddev: 0.00035856070626772134",
            "extra": "mean: 3.961844443479688 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 198.82357327624257,
            "unit": "iter/sec",
            "range": "stddev: 0.0047286818485764055",
            "extra": "mean: 5.029584689188814 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1679696.6820188586,
            "unit": "iter/sec",
            "range": "stddev: 3.8278156146978145e-7",
            "extra": "mean: 595.3455827501435 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 68.74620454760154,
            "unit": "iter/sec",
            "range": "stddev: 0.026053118858645065",
            "extra": "mean: 14.546257594593106 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9234.012747036488,
            "unit": "iter/sec",
            "range": "stddev: 0.00003645443866432975",
            "extra": "mean: 108.29528043709213 usec\nrounds: 5035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.41465601748837,
            "unit": "iter/sec",
            "range": "stddev: 0.0014987436267283381",
            "extra": "mean: 11.84628413095503 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 245.45934761654541,
            "unit": "iter/sec",
            "range": "stddev: 0.001008075186419949",
            "extra": "mean: 4.073994368966513 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 623.0851688286366,
            "unit": "iter/sec",
            "range": "stddev: 0.00033351596710161504",
            "extra": "mean: 1.6049170322573094 msec\nrounds: 558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.006526759532736,
            "unit": "iter/sec",
            "range": "stddev: 0.0033360835813800636",
            "extra": "mean: 43.465926450008396 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.237101270007166,
            "unit": "iter/sec",
            "range": "stddev: 0.0018871070595621253",
            "extra": "mean: 24.852684921053257 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 93.83970346491272,
            "unit": "iter/sec",
            "range": "stddev: 0.0012370894878001358",
            "extra": "mean: 10.656470162162295 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4723480913956069,
            "unit": "iter/sec",
            "range": "stddev: 0.017976914286160824",
            "extra": "mean: 679.1872151999883 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1771679.9393833529,
            "unit": "iter/sec",
            "range": "stddev: 4.2469191930061316e-7",
            "extra": "mean: 564.4360348450172 nsec\nrounds: 175408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 152603.07739907454,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014166243048133886",
            "extra": "mean: 6.552947797932576 usec\nrounds: 41665"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.3916834603303547,
            "unit": "iter/sec",
            "range": "stddev: 0.006445630197952492",
            "extra": "mean: 418.11553100002357 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2007.6407370425,
            "unit": "iter/sec",
            "range": "stddev: 0.0000988989150535652",
            "extra": "mean: 498.09708557374773 usec\nrounds: 1414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.6171276275093,
            "unit": "iter/sec",
            "range": "stddev: 0.0008768611038253058",
            "extra": "mean: 12.25233022857505 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.43319031487483,
            "unit": "iter/sec",
            "range": "stddev: 0.001798488112587052",
            "extra": "mean: 27.447500242429314 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.05760863914686,
            "unit": "iter/sec",
            "range": "stddev: 0.0006298253300082306",
            "extra": "mean: 19.97698306382866 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 85.87789072972483,
            "unit": "iter/sec",
            "range": "stddev: 0.001016260295150241",
            "extra": "mean: 11.644440629628448 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15458935316827233,
            "unit": "iter/sec",
            "range": "stddev: 0.08390418093359388",
            "extra": "mean: 6.468750787199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 175.71315805345745,
            "unit": "iter/sec",
            "range": "stddev: 0.0002345442773989792",
            "extra": "mean: 5.691093433627598 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.22530439679589,
            "unit": "iter/sec",
            "range": "stddev: 0.0014676879191932116",
            "extra": "mean: 70.29726550000858 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 686783.359418565,
            "unit": "iter/sec",
            "range": "stddev: 4.842970365525816e-7",
            "extra": "mean: 1.4560632349138543 usec\nrounds: 26109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 426805.9685865628,
            "unit": "iter/sec",
            "range": "stddev: 6.208174316867492e-7",
            "extra": "mean: 2.3429850414502456 usec\nrounds: 1805"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 473.7001949322266,
            "unit": "iter/sec",
            "range": "stddev: 0.0001144390544798781",
            "extra": "mean: 2.111039874372592 msec\nrounds: 398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1589.0543706867904,
            "unit": "iter/sec",
            "range": "stddev: 0.00004556770858030565",
            "extra": "mean: 629.3050876338481 usec\nrounds: 1221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6283182661017219,
            "unit": "iter/sec",
            "range": "stddev: 0.060530427681392024",
            "extra": "mean: 1.5915501011999935 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 89.88623386207524,
            "unit": "iter/sec",
            "range": "stddev: 0.001037443637115743",
            "extra": "mean: 11.1251740898883 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.389056450072536,
            "unit": "iter/sec",
            "range": "stddev: 0.0022738757749085152",
            "extra": "mean: 185.56124050000258 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1644069.5655182307,
            "unit": "iter/sec",
            "range": "stddev: 3.617288551657851e-7",
            "extra": "mean: 608.2467682471745 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.81728077622006,
            "unit": "iter/sec",
            "range": "stddev: 0.0009217644436474844",
            "extra": "mean: 11.13371493055442 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 145.45643582006755,
            "unit": "iter/sec",
            "range": "stddev: 0.00030729721598874923",
            "extra": "mean: 6.8749106518533125 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 271.6928821335957,
            "unit": "iter/sec",
            "range": "stddev: 0.0002158537195545455",
            "extra": "mean: 3.6806264196066945 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 256.8913114393438,
            "unit": "iter/sec",
            "range": "stddev: 0.0003524289862215169",
            "extra": "mean: 3.892696854545492 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.060032328369669,
            "unit": "iter/sec",
            "range": "stddev: 0.0028257716161632983",
            "extra": "mean: 99.40325909092383 msec\nrounds: 11"
          }
        ]
      }
    ]
  }
}