window.BENCHMARK_DATA = {
  "lastUpdate": 1683109153826,
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
          "id": "6d32edd3ec84a468718c96c90c0fa4637de730df",
          "message": "fix(clickhouse): clean up external tables per query to avoid leaking them across queries",
          "timestamp": "2023-05-03T12:13:45+02:00",
          "tree_id": "ce0552e1047e785c6d3007d0ab819135387b59cb",
          "url": "https://github.com/ibis-project/ibis/commit/6d32edd3ec84a468718c96c90c0fa4637de730df"
        },
        "date": 1683109066267,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9383669962687253,
            "unit": "iter/sec",
            "range": "stddev: 0.0030053648159553696",
            "extra": "mean: 1.0656811290000063 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1174.1774886685996,
            "unit": "iter/sec",
            "range": "stddev: 0.000032404424986955556",
            "extra": "mean: 851.6600000004262 usec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.042606618284914,
            "unit": "iter/sec",
            "range": "stddev: 0.00025151463973325014",
            "extra": "mean: 20.39043331818262 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.23801989801333,
            "unit": "iter/sec",
            "range": "stddev: 0.0006543683194543464",
            "extra": "mean: 10.390903730768084 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1048000.8906165429,
            "unit": "iter/sec",
            "range": "stddev: 1.2838694242785143e-7",
            "extra": "mean: 954.1976623814662 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.93178162581766,
            "unit": "iter/sec",
            "range": "stddev: 0.0006352365875121348",
            "extra": "mean: 9.907682039214166 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2423.795137168927,
            "unit": "iter/sec",
            "range": "stddev: 0.00008234593341348268",
            "extra": "mean: 412.5761227361951 usec\nrounds: 1491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.80857649136165,
            "unit": "iter/sec",
            "range": "stddev: 0.0006497622476109283",
            "extra": "mean: 10.019179064101262 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.82172194268138,
            "unit": "iter/sec",
            "range": "stddev: 0.0007146441484746187",
            "extra": "mean: 9.82108710126638 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 39.41953322600983,
            "unit": "iter/sec",
            "range": "stddev: 0.015612054906609604",
            "extra": "mean: 25.3681339722252 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13432.816028556965,
            "unit": "iter/sec",
            "range": "stddev: 0.00000171500763946988",
            "extra": "mean: 74.44455413325765 usec\nrounds: 1875"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.405224055199424,
            "unit": "iter/sec",
            "range": "stddev: 0.00014266203802313778",
            "extra": "mean: 118.97362800000622 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2323.8591049917104,
            "unit": "iter/sec",
            "range": "stddev: 0.00008031817752188827",
            "extra": "mean: 430.3186875021699 usec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1740.6332213747796,
            "unit": "iter/sec",
            "range": "stddev: 0.00000728305575470695",
            "extra": "mean: 574.5035701491347 usec\nrounds: 335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.80587401151078,
            "unit": "iter/sec",
            "range": "stddev: 0.000817458041665781",
            "extra": "mean: 9.920056839999347 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4641740.273175029,
            "unit": "iter/sec",
            "range": "stddev: 1.4250644825345466e-8",
            "extra": "mean: 215.43644003072004 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 732.2616647783815,
            "unit": "iter/sec",
            "range": "stddev: 0.000009501522846962158",
            "extra": "mean: 1.365632052174477 msec\nrounds: 345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.79877487087066,
            "unit": "iter/sec",
            "range": "stddev: 0.0002568699800803898",
            "extra": "mean: 17.60601355000091 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2339.166027345032,
            "unit": "iter/sec",
            "range": "stddev: 0.00008544155406012941",
            "extra": "mean: 427.5027887332162 usec\nrounds: 1278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 411.91691687353983,
            "unit": "iter/sec",
            "range": "stddev: 0.000029196083075658524",
            "extra": "mean: 2.427674026087654 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.29275501852659,
            "unit": "iter/sec",
            "range": "stddev: 0.011790018454459752",
            "extra": "mean: 10.835086673913493 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.90454491853045,
            "unit": "iter/sec",
            "range": "stddev: 0.01615523409313929",
            "extra": "mean: 25.059802136363437 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.65573839851221,
            "unit": "iter/sec",
            "range": "stddev: 0.00006643702497013906",
            "extra": "mean: 9.037036980392562 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 679.2182031628647,
            "unit": "iter/sec",
            "range": "stddev: 0.00003966518445520312",
            "extra": "mean: 1.4722809184785899 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11925.222672614222,
            "unit": "iter/sec",
            "range": "stddev: 0.000012223819469325267",
            "extra": "mean: 83.85587652769439 usec\nrounds: 6382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1811016.004162246,
            "unit": "iter/sec",
            "range": "stddev: 8.12261242183329e-8",
            "extra": "mean: 552.1762357161432 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2086.6123049464422,
            "unit": "iter/sec",
            "range": "stddev: 0.0002555187605512314",
            "extra": "mean: 479.24571211884387 usec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5048167751827473,
            "unit": "iter/sec",
            "range": "stddev: 0.00155388481181167",
            "extra": "mean: 399.2307980000021 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.9175063044641,
            "unit": "iter/sec",
            "range": "stddev: 0.000029467331032376286",
            "extra": "mean: 5.183562752577733 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.03424316680345,
            "unit": "iter/sec",
            "range": "stddev: 0.0006950360460316933",
            "extra": "mean: 9.612219684211558 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141178.16756346155,
            "unit": "iter/sec",
            "range": "stddev: 4.3235849738487995e-7",
            "extra": "mean: 7.083248190981697 usec\nrounds: 39526"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.3789398336923,
            "unit": "iter/sec",
            "range": "stddev: 0.0008485180548956859",
            "extra": "mean: 10.062494142858338 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 111.2535576940671,
            "unit": "iter/sec",
            "range": "stddev: 0.00033420235622524556",
            "extra": "mean: 8.98847660000115 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8043.7714547320575,
            "unit": "iter/sec",
            "range": "stddev: 0.00001436439062228694",
            "extra": "mean: 124.31979272754096 usec\nrounds: 3768"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.67219164831766,
            "unit": "iter/sec",
            "range": "stddev: 0.0007636255476502321",
            "extra": "mean: 14.99875698214329 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 256.8282608682312,
            "unit": "iter/sec",
            "range": "stddev: 0.00015343244419724813",
            "extra": "mean: 3.8936524999990634 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 245.55944683135183,
            "unit": "iter/sec",
            "range": "stddev: 0.006788902974869602",
            "extra": "mean: 4.07233365648845 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.18865383085205,
            "unit": "iter/sec",
            "range": "stddev: 0.00032430337258093276",
            "extra": "mean: 3.7426738959995873 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2281.5939684656455,
            "unit": "iter/sec",
            "range": "stddev: 0.00008196469084876013",
            "extra": "mean: 438.29007869988914 usec\nrounds: 1169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.39497438722458,
            "unit": "iter/sec",
            "range": "stddev: 0.000048844690176841136",
            "extra": "mean: 5.800633130719068 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 124.14223311484574,
            "unit": "iter/sec",
            "range": "stddev: 0.00006289128631312874",
            "extra": "mean: 8.055276394737364 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.27047740186583,
            "unit": "iter/sec",
            "range": "stddev: 0.0002263716292257916",
            "extra": "mean: 3.5936259186986788 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 84.49919669176353,
            "unit": "iter/sec",
            "range": "stddev: 0.014022357540291377",
            "extra": "mean: 11.834432031913908 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 421.252681517496,
            "unit": "iter/sec",
            "range": "stddev: 0.00009569138437826014",
            "extra": "mean: 2.37387212918778 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.64080845584989,
            "unit": "iter/sec",
            "range": "stddev: 0.000731178700688563",
            "extra": "mean: 9.936327175260024 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.7883947660406,
            "unit": "iter/sec",
            "range": "stddev: 0.0002666189306250823",
            "extra": "mean: 3.599862409090998 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.7009411182263,
            "unit": "iter/sec",
            "range": "stddev: 0.00040242824458143776",
            "extra": "mean: 21.41284471052604 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.64254324089146,
            "unit": "iter/sec",
            "range": "stddev: 0.00006945372870257484",
            "extra": "mean: 9.648547485714891 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4650.245565877098,
            "unit": "iter/sec",
            "range": "stddev: 0.00002322577378378739",
            "extra": "mean: 215.04240708014885 usec\nrounds: 1017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.53073680500623,
            "unit": "iter/sec",
            "range": "stddev: 0.0000674531993312942",
            "extra": "mean: 6.152682376624766 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17813081346041718,
            "unit": "iter/sec",
            "range": "stddev: 0.10432432186795411",
            "extra": "mean: 5.613851868599994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.48568928698134,
            "unit": "iter/sec",
            "range": "stddev: 0.00024386940927226467",
            "extra": "mean: 10.153759467388815 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2556136.0721143475,
            "unit": "iter/sec",
            "range": "stddev: 1.830731596634391e-8",
            "extra": "mean: 391.21547984439474 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13008658.342898369,
            "unit": "iter/sec",
            "range": "stddev: 3.43923062481852e-9",
            "extra": "mean: 76.87187822447653 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 226.33437505556867,
            "unit": "iter/sec",
            "range": "stddev: 0.00861388713709854",
            "extra": "mean: 4.418241814812638 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.0997727592706,
            "unit": "iter/sec",
            "range": "stddev: 0.00026739875055712634",
            "extra": "mean: 3.6088084448511846 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3378878081137855,
            "unit": "iter/sec",
            "range": "stddev: 0.0004879516926875993",
            "extra": "mean: 747.4468292000097 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7410379.076620872,
            "unit": "iter/sec",
            "range": "stddev: 5.280634861143823e-9",
            "extra": "mean: 134.94586304705783 nsec\nrounds: 61729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 273.14610923549304,
            "unit": "iter/sec",
            "range": "stddev: 0.0002490985897076195",
            "extra": "mean: 3.661044276994806 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2367.5917185064604,
            "unit": "iter/sec",
            "range": "stddev: 0.00008540738316568025",
            "extra": "mean: 422.3701207363685 usec\nrounds: 1847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.931456098768749,
            "unit": "iter/sec",
            "range": "stddev: 0.0023569377233447248",
            "extra": "mean: 1.073587903200007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.767794200897114,
            "unit": "iter/sec",
            "range": "stddev: 0.00023317711567141808",
            "extra": "mean: 17.931496382977137 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1882.655744143493,
            "unit": "iter/sec",
            "range": "stddev: 0.0035621809761990004",
            "extra": "mean: 531.164554704581 usec\nrounds: 1435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.889715486985,
            "unit": "iter/sec",
            "range": "stddev: 0.00002250906704524463",
            "extra": "mean: 1.8556672566970736 msec\nrounds: 448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.60780248864522,
            "unit": "iter/sec",
            "range": "stddev: 0.0007161726238604049",
            "extra": "mean: 10.141185329783116 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.5236890903994,
            "unit": "iter/sec",
            "range": "stddev: 0.00012243680802979134",
            "extra": "mean: 9.387583255320495 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.64700191065418,
            "unit": "iter/sec",
            "range": "stddev: 0.000037559717179822756",
            "extra": "mean: 6.263819476921001 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6426972.456962994,
            "unit": "iter/sec",
            "range": "stddev: 7.692712819969355e-9",
            "extra": "mean: 155.5942563458993 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 191.12042410700232,
            "unit": "iter/sec",
            "range": "stddev: 0.0038289318043601933",
            "extra": "mean: 5.232303165255281 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.816553060961358,
            "unit": "iter/sec",
            "range": "stddev: 0.00011965133984753946",
            "extra": "mean: 33.538417333333356 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.41351636333029,
            "unit": "iter/sec",
            "range": "stddev: 0.016492012201176597",
            "extra": "mean: 11.707748873682009 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2303.5371044368276,
            "unit": "iter/sec",
            "range": "stddev: 0.00008813094083345715",
            "extra": "mean: 434.11499561865384 usec\nrounds: 1826"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1617821.8480903343,
            "unit": "iter/sec",
            "range": "stddev: 8.158910147351708e-8",
            "extra": "mean: 618.115029896767 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5734203.107072298,
            "unit": "iter/sec",
            "range": "stddev: 8.693992635999096e-9",
            "extra": "mean: 174.3921485389864 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9883.552072292341,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016182645909898155",
            "extra": "mean: 101.17819916216266 usec\nrounds: 5011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.4254323626231,
            "unit": "iter/sec",
            "range": "stddev: 0.0007526405693948855",
            "extra": "mean: 9.957636989693317 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 187.08403089394497,
            "unit": "iter/sec",
            "range": "stddev: 0.00014646628184684254",
            "extra": "mean: 5.345191651161742 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.89805722933741,
            "unit": "iter/sec",
            "range": "stddev: 0.0008227543193037191",
            "extra": "mean: 10.010204679999788 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 101.89316124726412,
            "unit": "iter/sec",
            "range": "stddev: 0.0006598893477155005",
            "extra": "mean: 9.814201343437567 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.871815436858068,
            "unit": "iter/sec",
            "range": "stddev: 0.0004228594765689183",
            "extra": "mean: 35.87853838460721 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2511722.9234935236,
            "unit": "iter/sec",
            "range": "stddev: 1.4705804081311345e-8",
            "extra": "mean: 398.1330865145595 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.11118892976015,
            "unit": "iter/sec",
            "range": "stddev: 0.00028422843861832946",
            "extra": "mean: 7.512516476189528 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6924213932907801,
            "unit": "iter/sec",
            "range": "stddev: 0.002018486830368564",
            "extra": "mean: 590.8693921999998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 81.02772029684269,
            "unit": "iter/sec",
            "range": "stddev: 0.018595837867907986",
            "extra": "mean: 12.341455446809181 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.845823651617163,
            "unit": "iter/sec",
            "range": "stddev: 0.00008965986859189447",
            "extra": "mean: 53.06215416667075 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6299443.997357291,
            "unit": "iter/sec",
            "range": "stddev: 1.052164716473094e-8",
            "extra": "mean: 158.74416859959342 nsec\nrounds: 62894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8005467711391151,
            "unit": "iter/sec",
            "range": "stddev: 0.004008526186440846",
            "extra": "mean: 1.249146253599997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 267.47785293840036,
            "unit": "iter/sec",
            "range": "stddev: 0.004125739956903523",
            "extra": "mean: 3.7386272882573874 msec\nrounds: 281"
          }
        ]
      }
    ]
  }
}