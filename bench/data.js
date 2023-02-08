window.BENCHMARK_DATA = {
  "lastUpdate": 1675854814677,
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
          "id": "b4fcef12aa3993cfaa3c9a385070a7e4faa9d39a",
          "message": "docs(api): improve `collect` method API documentation",
          "timestamp": "2023-02-08T06:03:06-05:00",
          "tree_id": "da54ba7f6be31655b11285794f91c2a4cbeef63a",
          "url": "https://github.com/ibis-project/ibis/commit/b4fcef12aa3993cfaa3c9a385070a7e4faa9d39a"
        },
        "date": 1675854734410,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5924840861630232,
            "unit": "iter/sec",
            "range": "stddev: 0.02093064378479808",
            "extra": "mean: 1.6878090455999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4985.150144103752,
            "unit": "iter/sec",
            "range": "stddev: 0.00009382900035631052",
            "extra": "mean: 200.59576363668052 usec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5296.139340453207,
            "unit": "iter/sec",
            "range": "stddev: 0.000046838926379163634",
            "extra": "mean: 188.8167844002433 usec\nrounds: 2718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6163.685829340891,
            "unit": "iter/sec",
            "range": "stddev: 0.00004903413175675587",
            "extra": "mean: 162.24058585849988 usec\nrounds: 495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.14519441275229,
            "unit": "iter/sec",
            "range": "stddev: 0.006247294945159817",
            "extra": "mean: 12.027153307691663 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 3165.323348943594,
            "unit": "iter/sec",
            "range": "stddev: 0.003364996941537397",
            "extra": "mean: 315.92349019689993 usec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10461.902870181335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027276229427165547",
            "extra": "mean: 95.58490576797595 usec\nrounds: 5253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1585369.3061399518,
            "unit": "iter/sec",
            "range": "stddev: 8.803537109455528e-8",
            "extra": "mean: 630.7678571340543 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10694.034389190121,
            "unit": "iter/sec",
            "range": "stddev: 0.000004144693174918715",
            "extra": "mean: 93.51007894745808 usec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.97898783942716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000557215279511711",
            "extra": "mean: 10.418947131147078 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 253.18074867493124,
            "unit": "iter/sec",
            "range": "stddev: 0.00014047029075976158",
            "extra": "mean: 3.9497473849559532 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 390727.677027806,
            "unit": "iter/sec",
            "range": "stddev: 3.5146339244389817e-7",
            "extra": "mean: 2.5593272726590994 usec\nrounds: 1980"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.75169311328324,
            "unit": "iter/sec",
            "range": "stddev: 0.01220707765107231",
            "extra": "mean: 28.775576393938838 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.255236473598474,
            "unit": "iter/sec",
            "range": "stddev: 0.0029683719365036433",
            "extra": "mean: 443.4124810000043 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5431265.280963923,
            "unit": "iter/sec",
            "range": "stddev: 2.821156304102247e-8",
            "extra": "mean: 184.11915976651025 nsec\nrounds: 55556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.760434685055053,
            "unit": "iter/sec",
            "range": "stddev: 0.00029934435040208837",
            "extra": "mean: 72.67212285714209 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 150.60425921982434,
            "unit": "iter/sec",
            "range": "stddev: 0.0005826863291623545",
            "extra": "mean: 6.63991845370312 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.14931106712805,
            "unit": "iter/sec",
            "range": "stddev: 0.00012793149502988944",
            "extra": "mean: 9.985091153844486 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 255.0992615734356,
            "unit": "iter/sec",
            "range": "stddev: 0.0001936934843964253",
            "extra": "mean: 3.920042707423241 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.02325864891916,
            "unit": "iter/sec",
            "range": "stddev: 0.00023065157754402366",
            "extra": "mean: 22.715265309524096 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1568729.2912227102,
            "unit": "iter/sec",
            "range": "stddev: 9.617207450299355e-8",
            "extra": "mean: 637.4586141759186 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.1586368129111,
            "unit": "iter/sec",
            "range": "stddev: 0.00012603528404986995",
            "extra": "mean: 14.890117600000963 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.281028487343962,
            "unit": "iter/sec",
            "range": "stddev: 0.00033902705577390176",
            "extra": "mean: 107.7466792999985 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 142.16117507812646,
            "unit": "iter/sec",
            "range": "stddev: 0.009476224134509326",
            "extra": "mean: 7.034269373831761 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5993.797778003087,
            "unit": "iter/sec",
            "range": "stddev: 0.00005177360139079451",
            "extra": "mean: 166.8391288858536 usec\nrounds: 2863"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.60298932794373,
            "unit": "iter/sec",
            "range": "stddev: 0.00020688575181481225",
            "extra": "mean: 6.963643338345254 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 162.95087301404345,
            "unit": "iter/sec",
            "range": "stddev: 0.0006206321385309079",
            "extra": "mean: 6.136818916667098 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.99134281815115,
            "unit": "iter/sec",
            "range": "stddev: 0.00011037327159676436",
            "extra": "mean: 17.243953173076072 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 217.75274867994426,
            "unit": "iter/sec",
            "range": "stddev: 0.00043648630125049605",
            "extra": "mean: 4.59236453299523 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.39260923239219,
            "unit": "iter/sec",
            "range": "stddev: 0.000368259003825223",
            "extra": "mean: 21.555157525000368 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7459912436165536,
            "unit": "iter/sec",
            "range": "stddev: 0.003140519015675232",
            "extra": "mean: 1.3404983081999944 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.78411780417034,
            "unit": "iter/sec",
            "range": "stddev: 0.0005883575012592062",
            "extra": "mean: 10.550290736113196 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.44837322745825,
            "unit": "iter/sec",
            "range": "stddev: 0.00020010383294060668",
            "extra": "mean: 9.66665756842052 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.08491336383696,
            "unit": "iter/sec",
            "range": "stddev: 0.00002882280443755005",
            "extra": "mean: 5.879416229356281 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.39386634643802,
            "unit": "iter/sec",
            "range": "stddev: 0.0005799166874970821",
            "extra": "mean: 11.991289573333384 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15444529982288596,
            "unit": "iter/sec",
            "range": "stddev: 0.06707435848376099",
            "extra": "mean: 6.474784283799994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57486.34410485415,
            "unit": "iter/sec",
            "range": "stddev: 6.219508846488238e-7",
            "extra": "mean: 17.395435656440707 usec\nrounds: 13832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8672144644212937,
            "unit": "iter/sec",
            "range": "stddev: 0.005533163632583083",
            "extra": "mean: 1.1531172980000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.30666646975604,
            "unit": "iter/sec",
            "range": "stddev: 0.00027952939629221854",
            "extra": "mean: 8.176169205357908 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 240.06320749936293,
            "unit": "iter/sec",
            "range": "stddev: 0.00019585529759449377",
            "extra": "mean: 4.165569603174838 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1989723.3252085652,
            "unit": "iter/sec",
            "range": "stddev: 1.758900487724079e-8",
            "extra": "mean: 502.58243813633334 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4502116.3949663155,
            "unit": "iter/sec",
            "range": "stddev: 8.84829478634325e-9",
            "extra": "mean: 222.117758021023 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.60599465065079,
            "unit": "iter/sec",
            "range": "stddev: 0.0002901248042216889",
            "extra": "mean: 6.963497606299044 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 93.10524391578049,
            "unit": "iter/sec",
            "range": "stddev: 0.0005972481734756977",
            "extra": "mean: 10.740533593409221 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.970496163665088,
            "unit": "iter/sec",
            "range": "stddev: 0.00006789737749410373",
            "extra": "mean: 201.18715860000407 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119663.54802443748,
            "unit": "iter/sec",
            "range": "stddev: 3.2407271198913575e-7",
            "extra": "mean: 8.35676374726731 usec\nrounds: 35843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 145.4712506188938,
            "unit": "iter/sec",
            "range": "stddev: 0.0006065725828897648",
            "extra": "mean: 6.874210510637625 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12054591.425517567,
            "unit": "iter/sec",
            "range": "stddev: 2.619174946250093e-9",
            "extra": "mean: 82.95594306760796 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.36037758660037,
            "unit": "iter/sec",
            "range": "stddev: 0.0006536968793956962",
            "extra": "mean: 28.28024099999839 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 248.09501429807565,
            "unit": "iter/sec",
            "range": "stddev: 0.00022116123331393343",
            "extra": "mean: 4.030713808696463 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 161.07812556559546,
            "unit": "iter/sec",
            "range": "stddev: 0.0006079017595859939",
            "extra": "mean: 6.208167598726944 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 80.4520607440084,
            "unit": "iter/sec",
            "range": "stddev: 0.014672157252810696",
            "extra": "mean: 12.429762404494706 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.51092459815398,
            "unit": "iter/sec",
            "range": "stddev: 0.0005676027566068946",
            "extra": "mean: 11.17182069662839 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19392.511446871613,
            "unit": "iter/sec",
            "range": "stddev: 0.00001340398572312316",
            "extra": "mean: 51.56629675014679 usec\nrounds: 7508"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4603.433046765361,
            "unit": "iter/sec",
            "range": "stddev: 0.000017327978476302446",
            "extra": "mean: 217.22918305560196 usec\nrounds: 2278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.591693358308473,
            "unit": "iter/sec",
            "range": "stddev: 0.0014987364147011112",
            "extra": "mean: 628.2617155999958 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 336.3141617308653,
            "unit": "iter/sec",
            "range": "stddev: 0.000030153712163037995",
            "extra": "mean: 2.973410322222018 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 421.1769385308858,
            "unit": "iter/sec",
            "range": "stddev: 0.00002311703256413296",
            "extra": "mean: 2.3742990380435276 msec\nrounds: 368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2044141.8929100765,
            "unit": "iter/sec",
            "range": "stddev: 1.7800270242339667e-8",
            "extra": "mean: 489.20283052184186 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 278.8841584898081,
            "unit": "iter/sec",
            "range": "stddev: 0.00011518957015832521",
            "extra": "mean: 3.585718190000904 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 593832.1941329009,
            "unit": "iter/sec",
            "range": "stddev: 1.618879954826834e-7",
            "extra": "mean: 1.6839774095780968 usec\nrounds: 24391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 254.62944719010264,
            "unit": "iter/sec",
            "range": "stddev: 0.00018190957014109645",
            "extra": "mean: 3.927275541125511 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 986.1376750573157,
            "unit": "iter/sec",
            "range": "stddev: 0.00001095341781411402",
            "extra": "mean: 1.0140571902821567 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4709.112161110597,
            "unit": "iter/sec",
            "range": "stddev: 0.002448894346972921",
            "extra": "mean: 212.35425400531548 usec\nrounds: 2559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.3729615868457,
            "unit": "iter/sec",
            "range": "stddev: 0.0005822364775003484",
            "extra": "mean: 10.485152011237583 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8691538908415145,
            "unit": "iter/sec",
            "range": "stddev: 0.0041665970795515764",
            "extra": "mean: 1.150544236799999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 160.0245596549766,
            "unit": "iter/sec",
            "range": "stddev: 0.000622930620235597",
            "extra": "mean: 6.249040785714801 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1468.344923134434,
            "unit": "iter/sec",
            "range": "stddev: 0.000004692145841712513",
            "extra": "mean: 681.038892323289 usec\nrounds: 1003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 89.29222699063311,
            "unit": "iter/sec",
            "range": "stddev: 0.00014828962086276286",
            "extra": "mean: 11.199183105881115 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 633.2928844317853,
            "unit": "iter/sec",
            "range": "stddev: 0.000008326905949545254",
            "extra": "mean: 1.5790482169987403 msec\nrounds: 553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 251.95821423348895,
            "unit": "iter/sec",
            "range": "stddev: 0.00019463378194582774",
            "extra": "mean: 3.9689120794978447 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.483790850586217,
            "unit": "iter/sec",
            "range": "stddev: 0.0004791434132728006",
            "extra": "mean: 37.75894491999679 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5836.080536675817,
            "unit": "iter/sec",
            "range": "stddev: 0.00005117554625132146",
            "extra": "mean: 171.34787529330288 usec\nrounds: 2558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 523.1347855119794,
            "unit": "iter/sec",
            "range": "stddev: 0.000018960865390172362",
            "extra": "mean: 1.9115532510829385 msec\nrounds: 462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 250.0326226191625,
            "unit": "iter/sec",
            "range": "stddev: 0.00020253109942336496",
            "extra": "mean: 3.9994781061955713 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4402405.254988191,
            "unit": "iter/sec",
            "range": "stddev: 9.726069859772234e-9",
            "extra": "mean: 227.14855677262287 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.05242632552124,
            "unit": "iter/sec",
            "range": "stddev: 0.00020925487693891916",
            "extra": "mean: 13.688799267857377 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5275.844227601349,
            "unit": "iter/sec",
            "range": "stddev: 0.000044839903049084515",
            "extra": "mean: 189.54312463744742 usec\nrounds: 2415"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.32904079872006,
            "unit": "iter/sec",
            "range": "stddev: 0.000044753771016497904",
            "extra": "mean: 6.880937178860174 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 162.03924560990214,
            "unit": "iter/sec",
            "range": "stddev: 0.0006179861703655349",
            "extra": "mean: 6.171344455697037 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 268.0013173867101,
            "unit": "iter/sec",
            "range": "stddev: 0.00001055964008813539",
            "extra": "mean: 3.7313249417989196 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.59099075931881,
            "unit": "iter/sec",
            "range": "stddev: 0.0000888030185974501",
            "extra": "mean: 14.579174158730742 msec\nrounds: 63"
          }
        ]
      }
    ]
  }
}