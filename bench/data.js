window.BENCHMARK_DATA = {
  "lastUpdate": 1681235355194,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "semantic-release-bot@martynus.net",
            "name": "semantic-release-bot",
            "username": "semantic-release-bot"
          },
          "committer": {
            "email": "semantic-release-bot@martynus.net",
            "name": "semantic-release-bot",
            "username": "semantic-release-bot"
          },
          "distinct": true,
          "id": "374490ed643f750b2a0827c2951b45a7160fc0d1",
          "message": "chore(release): 5.1.0",
          "timestamp": "2023-04-11T17:44:00Z",
          "tree_id": "0817bb5000253de3fb4cc1defd3bb7105b5ad752",
          "url": "https://github.com/ibis-project/ibis/commit/374490ed643f750b2a0827c2951b45a7160fc0d1"
        },
        "date": 1681235268821,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.692974114227134,
            "unit": "iter/sec",
            "range": "stddev: 0.0001833972430015361",
            "extra": "mean: 20.536843727272338 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13105.73274040119,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066118311237041405",
            "extra": "mean: 76.30248684358476 usec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 115.05074034867455,
            "unit": "iter/sec",
            "range": "stddev: 0.00024762000695148734",
            "extra": "mean: 8.691817166663895 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7882.648552947159,
            "unit": "iter/sec",
            "range": "stddev: 0.000017535100933239713",
            "extra": "mean: 126.86091397873126 usec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.80474470248015,
            "unit": "iter/sec",
            "range": "stddev: 0.0006599786353796446",
            "extra": "mean: 9.822724892856964 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.63138139085752,
            "unit": "iter/sec",
            "range": "stddev: 0.01954461695438074",
            "extra": "mean: 27.298997800000535 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.77135681862805,
            "unit": "iter/sec",
            "range": "stddev: 0.0007621738045225044",
            "extra": "mean: 9.923454755103043 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.20928599328791,
            "unit": "iter/sec",
            "range": "stddev: 0.00038475786704433916",
            "extra": "mean: 97.95004280000086 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2270.188499360413,
            "unit": "iter/sec",
            "range": "stddev: 0.00007401279667254733",
            "extra": "mean: 440.49205618023916 usec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.97842538212787,
            "unit": "iter/sec",
            "range": "stddev: 0.0005734179848391719",
            "extra": "mean: 10.103211847827254 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.67697910444684,
            "unit": "iter/sec",
            "range": "stddev: 0.000646879803213959",
            "extra": "mean: 10.23782685714196 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11955.688755695704,
            "unit": "iter/sec",
            "range": "stddev: 0.000001854111859335929",
            "extra": "mean: 83.64219079587521 usec\nrounds: 6258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.77619520483753,
            "unit": "iter/sec",
            "range": "stddev: 0.00005937503784709624",
            "extra": "mean: 6.298173342105204 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 84.21065265890108,
            "unit": "iter/sec",
            "range": "stddev: 0.014241449948537164",
            "extra": "mean: 11.874982183673882 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 288.1585815557305,
            "unit": "iter/sec",
            "range": "stddev: 0.00006670862465814135",
            "extra": "mean: 3.4703113632817417 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.74880624440657,
            "unit": "iter/sec",
            "range": "stddev: 0.0007700061286988656",
            "extra": "mean: 9.925675918919572 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7949977084230783,
            "unit": "iter/sec",
            "range": "stddev: 0.00234749431750162",
            "extra": "mean: 1.2578652610000034 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.95218736019183,
            "unit": "iter/sec",
            "range": "stddev: 0.0002760466300393895",
            "extra": "mean: 3.7600743574470097 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17758358215284994,
            "unit": "iter/sec",
            "range": "stddev: 0.06772472728831827",
            "extra": "mean: 5.631151190199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.2487997749284,
            "unit": "iter/sec",
            "range": "stddev: 0.0008395066119226078",
            "extra": "mean: 10.498819957448138 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 263.3805566376524,
            "unit": "iter/sec",
            "range": "stddev: 0.00035112542661612837",
            "extra": "mean: 3.79678748031411 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 375.4787969242179,
            "unit": "iter/sec",
            "range": "stddev: 0.000028883501593547653",
            "extra": "mean: 2.6632662301883 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 98.101221428881,
            "unit": "iter/sec",
            "range": "stddev: 0.0007020621272501722",
            "extra": "mean: 10.193552999999651 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2510694.6425565146,
            "unit": "iter/sec",
            "range": "stddev: 6.351179137527737e-8",
            "extra": "mean: 398.2961460347742 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 491368.17595852754,
            "unit": "iter/sec",
            "range": "stddev: 2.2170037602966187e-7",
            "extra": "mean: 2.035133834317349 usec\nrounds: 1995"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1742.6614154485806,
            "unit": "iter/sec",
            "range": "stddev: 0.000004577823120852511",
            "extra": "mean: 573.8349349650281 usec\nrounds: 1307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.02610651540596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000939410164786355",
            "extra": "mean: 6.059647295300186 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1780835.1782764697,
            "unit": "iter/sec",
            "range": "stddev: 9.192610756834557e-8",
            "extra": "mean: 561.5342802065609 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.20845283256585,
            "unit": "iter/sec",
            "range": "stddev: 0.00031512466225584236",
            "extra": "mean: 3.607393604999487 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2309.574810035403,
            "unit": "iter/sec",
            "range": "stddev: 0.00008322658872269643",
            "extra": "mean: 432.9801293531909 usec\nrounds: 1809"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.097528545250036,
            "unit": "iter/sec",
            "range": "stddev: 0.0005395561043536543",
            "extra": "mean: 17.826097261902873 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2375.7152168989483,
            "unit": "iter/sec",
            "range": "stddev: 0.00007887973656681618",
            "extra": "mean: 420.92587229597024 usec\nrounds: 1433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.17933382618625,
            "unit": "iter/sec",
            "range": "stddev: 0.0007568863028475352",
            "extra": "mean: 9.982098720430963 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4726.779911467799,
            "unit": "iter/sec",
            "range": "stddev: 0.0000208127324959708",
            "extra": "mean: 211.56051661594537 usec\nrounds: 1986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.8031381209443,
            "unit": "iter/sec",
            "range": "stddev: 0.00001835467820540693",
            "extra": "mean: 1.4517936180256106 msec\nrounds: 466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 271.6795429793299,
            "unit": "iter/sec",
            "range": "stddev: 0.00025253864442271274",
            "extra": "mean: 3.6808071341465807 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1188.4937337444755,
            "unit": "iter/sec",
            "range": "stddev: 0.000015378417781803294",
            "extra": "mean: 841.4011547619978 usec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.048828393116,
            "unit": "iter/sec",
            "range": "stddev: 0.00025076321686015026",
            "extra": "mean: 3.6094720407229395 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.09254999306528,
            "unit": "iter/sec",
            "range": "stddev: 0.000260888241379546",
            "extra": "mean: 36.910516000006055 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.88833056843144,
            "unit": "iter/sec",
            "range": "stddev: 0.0006955184663409877",
            "extra": "mean: 11.50902535999838 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 736508.0464668887,
            "unit": "iter/sec",
            "range": "stddev: 1.3316099975597546e-7",
            "extra": "mean: 1.3577584179794255 usec\nrounds: 25511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1675305.8540275726,
            "unit": "iter/sec",
            "range": "stddev: 1.0801256486459633e-7",
            "extra": "mean: 596.905930696725 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 105.10483206807963,
            "unit": "iter/sec",
            "range": "stddev: 0.00021862232677343234",
            "extra": "mean: 9.51431043010724 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 736.591462118111,
            "unit": "iter/sec",
            "range": "stddev: 0.000014288620004990392",
            "extra": "mean: 1.3576046579802086 msec\nrounds: 614"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 83.7327196437061,
            "unit": "iter/sec",
            "range": "stddev: 0.013370085300779561",
            "extra": "mean: 11.942762688888328 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.83167924091741,
            "unit": "iter/sec",
            "range": "stddev: 0.00006645214379073527",
            "extra": "mean: 10.016860455555035 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.51469336141963,
            "unit": "iter/sec",
            "range": "stddev: 0.00006237402224830354",
            "extra": "mean: 8.437772327102289 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.15099850069163,
            "unit": "iter/sec",
            "range": "stddev: 0.00070357895564945",
            "extra": "mean: 21.668003564105202 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 189.8560835441671,
            "unit": "iter/sec",
            "range": "stddev: 0.000029540881842374996",
            "extra": "mean: 5.267147522124913 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.0352943562991,
            "unit": "iter/sec",
            "range": "stddev: 0.0003219814599027101",
            "extra": "mean: 14.91751486440714 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 248.04413268266066,
            "unit": "iter/sec",
            "range": "stddev: 0.0003913123214026838",
            "extra": "mean: 4.031540634260301 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 169.8635208555307,
            "unit": "iter/sec",
            "range": "stddev: 0.0041651303785107474",
            "extra": "mean: 5.887079197248608 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6709514023105229,
            "unit": "iter/sec",
            "range": "stddev: 0.003259358679067684",
            "extra": "mean: 1.4904209106000053 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12541925.918449191,
            "unit": "iter/sec",
            "range": "stddev: 3.5928524111601715e-9",
            "extra": "mean: 79.73257109801109 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11501.046376447928,
            "unit": "iter/sec",
            "range": "stddev: 0.000027986385971744155",
            "extra": "mean: 86.94861034973478 usec\nrounds: 4232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8935443312627304,
            "unit": "iter/sec",
            "range": "stddev: 0.00891749920290943",
            "extra": "mean: 1.1191386538000074 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.9191152994676,
            "unit": "iter/sec",
            "range": "stddev: 0.00005006257966488051",
            "extra": "mean: 7.303582102563356 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70132.68932677957,
            "unit": "iter/sec",
            "range": "stddev: 4.78644250964282e-7",
            "extra": "mean: 14.258686064932611 usec\nrounds: 13369"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.60086512984277,
            "unit": "iter/sec",
            "range": "stddev: 0.0008138290060222587",
            "extra": "mean: 10.460156387097797 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6362238.559508869,
            "unit": "iter/sec",
            "range": "stddev: 9.740098944638062e-9",
            "extra": "mean: 157.17738193020287 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2208.5729443339183,
            "unit": "iter/sec",
            "range": "stddev: 0.00014536707120126838",
            "extra": "mean: 452.78106053299916 usec\nrounds: 413"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.19412018891728,
            "unit": "iter/sec",
            "range": "stddev: 0.00007697618357982936",
            "extra": "mean: 6.321347460991523 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.16952594712146,
            "unit": "iter/sec",
            "range": "stddev: 0.0007844644347646169",
            "extra": "mean: 10.507565211112063 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 83.27070242358128,
            "unit": "iter/sec",
            "range": "stddev: 0.01524119405696823",
            "extra": "mean: 12.009025634408626 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 270.0659538767123,
            "unit": "iter/sec",
            "range": "stddev: 0.00024934055365978373",
            "extra": "mean: 3.7027992075465748 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.324438275268864,
            "unit": "iter/sec",
            "range": "stddev: 0.00009947191569221865",
            "extra": "mean: 65.2552466874976 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5818714.27215747,
            "unit": "iter/sec",
            "range": "stddev: 8.859740366127992e-9",
            "extra": "mean: 171.85927220810981 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 94.44839597405525,
            "unit": "iter/sec",
            "range": "stddev: 0.0007179552268545302",
            "extra": "mean: 10.587792303796219 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.524350499598475,
            "unit": "iter/sec",
            "range": "stddev: 0.0028458475545715474",
            "extra": "mean: 396.14150259999974 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.17850610161598,
            "unit": "iter/sec",
            "range": "stddev: 0.00008258673741547341",
            "extra": "mean: 13.665214736843572 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2321.4388367896813,
            "unit": "iter/sec",
            "range": "stddev: 0.00007772532925928884",
            "extra": "mean: 430.76732591537944 usec\nrounds: 1393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.67371439097511,
            "unit": "iter/sec",
            "range": "stddev: 0.0002697124838311471",
            "extra": "mean: 17.043407092594347 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.06633069529279,
            "unit": "iter/sec",
            "range": "stddev: 0.0000812072829836415",
            "extra": "mean: 10.630796296703442 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2530201.993434594,
            "unit": "iter/sec",
            "range": "stddev: 2.576517473387077e-8",
            "extra": "mean: 395.2253624789779 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.72799065887752,
            "unit": "iter/sec",
            "range": "stddev: 0.00013397163564505833",
            "extra": "mean: 8.950308638890245 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.736144590805964,
            "unit": "iter/sec",
            "range": "stddev: 0.0008132865002563144",
            "extra": "mean: 22.864383894739 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139173.54096214205,
            "unit": "iter/sec",
            "range": "stddev: 3.8058643308155485e-7",
            "extra": "mean: 7.18527381775836 usec\nrounds: 42017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2346.815077793108,
            "unit": "iter/sec",
            "range": "stddev: 0.00008612670207943488",
            "extra": "mean: 426.1094150376678 usec\nrounds: 1330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8973988845410459,
            "unit": "iter/sec",
            "range": "stddev: 0.0055116837840419675",
            "extra": "mean: 1.1143316726000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6696305820754702,
            "unit": "iter/sec",
            "range": "stddev: 0.0010551091945919782",
            "extra": "mean: 598.9348845999984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 274.7222297216057,
            "unit": "iter/sec",
            "range": "stddev: 0.0002549864587339303",
            "extra": "mean: 3.6400403455277957 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 546.1019872477963,
            "unit": "iter/sec",
            "range": "stddev: 0.00006630040397038145",
            "extra": "mean: 1.8311597894739862 msec\nrounds: 475"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7288765.496648695,
            "unit": "iter/sec",
            "range": "stddev: 4.541905838158086e-9",
            "extra": "mean: 137.19744454111182 nsec\nrounds: 53192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 246.15636275545506,
            "unit": "iter/sec",
            "range": "stddev: 0.0039160739405982746",
            "extra": "mean: 4.062458466667602 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2241.8939621843265,
            "unit": "iter/sec",
            "range": "stddev: 0.00008668337842872966",
            "extra": "mean: 446.05142654725654 usec\nrounds: 1341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2257.039127396998,
            "unit": "iter/sec",
            "range": "stddev: 0.00008449760729638889",
            "extra": "mean: 443.05833596836294 usec\nrounds: 1771"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.68208565780395,
            "unit": "iter/sec",
            "range": "stddev: 0.0006185772008097144",
            "extra": "mean: 10.561660033706463 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.489889990153196,
            "unit": "iter/sec",
            "range": "stddev: 0.0001087627823397575",
            "extra": "mean: 182.15301250000002 msec\nrounds: 6"
          }
        ]
      }
    ]
  }
}