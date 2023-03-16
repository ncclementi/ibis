window.BENCHMARK_DATA = {
  "lastUpdate": 1678977847621,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "679bb52daa72793ab5ea598e1f0399780c2a0801",
          "message": "feat(duckdb): support sqlalchemy 2",
          "timestamp": "2023-03-16T10:36:54-04:00",
          "tree_id": "d207f3527d469234c92654dc9d0428c174f7d76e",
          "url": "https://github.com/ibis-project/ibis/commit/679bb52daa72793ab5ea598e1f0399780c2a0801"
        },
        "date": 1678977768607,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 182.72822330938405,
            "unit": "iter/sec",
            "range": "stddev: 0.00448184820857266",
            "extra": "mean: 5.472608346368379 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.66652414068761,
            "unit": "iter/sec",
            "range": "stddev: 0.00907021998222221",
            "extra": "mean: 10.34484283871228 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5634264.294878262,
            "unit": "iter/sec",
            "range": "stddev: 1.006588960069568e-8",
            "extra": "mean: 177.48546175054727 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.86971190257728,
            "unit": "iter/sec",
            "range": "stddev: 0.0005778380866970314",
            "extra": "mean: 8.273371254545674 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 488205.3556748238,
            "unit": "iter/sec",
            "range": "stddev: 7.572785108188019e-8",
            "extra": "mean: 2.048318373356937 usec\nrounds: 2139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 109.18374420008391,
            "unit": "iter/sec",
            "range": "stddev: 0.000562452095695027",
            "extra": "mean: 9.15887257142837 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.624717366822575,
            "unit": "iter/sec",
            "range": "stddev: 0.00045447441962146644",
            "extra": "mean: 94.12015072727152 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.37502325078033,
            "unit": "iter/sec",
            "range": "stddev: 0.0007381996267852694",
            "extra": "mean: 26.058616133337864 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.28908605300194,
            "unit": "iter/sec",
            "range": "stddev: 0.00003242400624521159",
            "extra": "mean: 3.4567498333372506 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5170.17238043016,
            "unit": "iter/sec",
            "range": "stddev: 0.00005261341835019425",
            "extra": "mean: 193.4171486786674 usec\nrounds: 2307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.77263054331348,
            "unit": "iter/sec",
            "range": "stddev: 0.0003796343051632907",
            "extra": "mean: 7.258335680000073 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 762.6220919285846,
            "unit": "iter/sec",
            "range": "stddev: 0.000013432070732587625",
            "extra": "mean: 1.311265449275294 msec\nrounds: 621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147963.2748055809,
            "unit": "iter/sec",
            "range": "stddev: 2.948805031991929e-7",
            "extra": "mean: 6.7584338161882975 usec\nrounds: 42193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.65490065469288,
            "unit": "iter/sec",
            "range": "stddev: 0.00398785305034114",
            "extra": "mean: 6.186017225274696 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 86.06257255297328,
            "unit": "iter/sec",
            "range": "stddev: 0.01775735503025075",
            "extra": "mean: 11.619452804347434 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.62525596082435,
            "unit": "iter/sec",
            "range": "stddev: 0.00008896589687233932",
            "extra": "mean: 3.429058284767817 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.36151436095288,
            "unit": "iter/sec",
            "range": "stddev: 0.0002727029298490882",
            "extra": "mean: 17.742603465119057 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.0884915075847,
            "unit": "iter/sec",
            "range": "stddev: 0.00032002262267236386",
            "extra": "mean: 9.251678749997438 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5706.396585338173,
            "unit": "iter/sec",
            "range": "stddev: 0.00004728456603770457",
            "extra": "mean: 175.24193859385218 usec\nrounds: 3257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.98635562118614,
            "unit": "iter/sec",
            "range": "stddev: 0.0005601932799456988",
            "extra": "mean: 8.265394844448792 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.4451549822437,
            "unit": "iter/sec",
            "range": "stddev: 0.0006380025298452084",
            "extra": "mean: 9.66695830434639 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5367.5107506392915,
            "unit": "iter/sec",
            "range": "stddev: 0.00006608121302606369",
            "extra": "mean: 186.3061009949344 usec\nrounds: 2713"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11473283.435935566,
            "unit": "iter/sec",
            "range": "stddev: 3.761071634919496e-9",
            "extra": "mean: 87.15900775782363 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6628921774344883,
            "unit": "iter/sec",
            "range": "stddev: 0.022687286476943798",
            "extra": "mean: 1.5085409574000095 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8339882154906572,
            "unit": "iter/sec",
            "range": "stddev: 0.0034160417302042546",
            "extra": "mean: 1.1990577101999862 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5635322820257755,
            "unit": "iter/sec",
            "range": "stddev: 0.0021824061275707977",
            "extra": "mean: 390.08675919999405 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.202591587848655,
            "unit": "iter/sec",
            "range": "stddev: 0.0005202111705594008",
            "extra": "mean: 41.31788930000653 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.3552223947495,
            "unit": "iter/sec",
            "range": "stddev: 0.00011771643418229634",
            "extra": "mean: 6.395692991151287 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5454.62143616403,
            "unit": "iter/sec",
            "range": "stddev: 0.00004954288260810017",
            "extra": "mean: 183.33077954228324 usec\nrounds: 2268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.96160804628347,
            "unit": "iter/sec",
            "range": "stddev: 0.0006820904860741551",
            "extra": "mean: 25.666291771429833 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.34297472751298,
            "unit": "iter/sec",
            "range": "stddev: 0.0001730735743665801",
            "extra": "mean: 10.272955010870037 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 332.65493956746855,
            "unit": "iter/sec",
            "range": "stddev: 0.000011375865345259679",
            "extra": "mean: 3.0061179951220343 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 103.81708017576081,
            "unit": "iter/sec",
            "range": "stddev: 0.013588018802369433",
            "extra": "mean: 9.63232637931075 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7180464067369923,
            "unit": "iter/sec",
            "range": "stddev: 0.0031184762091152145",
            "extra": "mean: 582.0564544000035 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.801020378376,
            "unit": "iter/sec",
            "range": "stddev: 0.00002470023618367712",
            "extra": "mean: 1.859423768471913 msec\nrounds: 406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.864062425018001,
            "unit": "iter/sec",
            "range": "stddev: 0.021711587787440107",
            "extra": "mean: 1.157323789400016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.01985668152098,
            "unit": "iter/sec",
            "range": "stddev: 0.0004272447179985122",
            "extra": "mean: 10.41451252439174 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.43879500623729,
            "unit": "iter/sec",
            "range": "stddev: 0.0006746768872878148",
            "extra": "mean: 9.761926621053206 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 783702.3264003557,
            "unit": "iter/sec",
            "range": "stddev: 1.5725659564668954e-7",
            "extra": "mean: 1.2759946810329466 usec\nrounds: 25381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.87546030952885,
            "unit": "iter/sec",
            "range": "stddev: 0.0006589862484456794",
            "extra": "mean: 8.341990908046677 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13906.54709282523,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015986384522519508",
            "extra": "mean: 71.90857610628072 usec\nrounds: 6780"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.26270532821954,
            "unit": "iter/sec",
            "range": "stddev: 0.00008739821538638499",
            "extra": "mean: 13.286793181815813 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.7486372989542,
            "unit": "iter/sec",
            "range": "stddev: 0.00018151620634327778",
            "extra": "mean: 3.303070193549817 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16802878779500047,
            "unit": "iter/sec",
            "range": "stddev: 0.026823224633096682",
            "extra": "mean: 5.951361151399999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5238.895819781516,
            "unit": "iter/sec",
            "range": "stddev: 0.00005038253847171528",
            "extra": "mean: 190.87991714286545 usec\nrounds: 2100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.649063010066978,
            "unit": "iter/sec",
            "range": "stddev: 0.0002738589099758277",
            "extra": "mean: 177.02050733332916 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.88211102793703,
            "unit": "iter/sec",
            "range": "stddev: 0.0005972414189586894",
            "extra": "mean: 8.272522637935156 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11969.174905979768,
            "unit": "iter/sec",
            "range": "stddev: 0.00001742109145829904",
            "extra": "mean: 83.54794777878989 usec\nrounds: 2566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 303.0063284125868,
            "unit": "iter/sec",
            "range": "stddev: 0.00019393768480627937",
            "extra": "mean: 3.3002611042445156 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 314.09332221710804,
            "unit": "iter/sec",
            "range": "stddev: 0.0002055091994772582",
            "extra": "mean: 3.183767145831832 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.14406494013336,
            "unit": "iter/sec",
            "range": "stddev: 0.0003070833578377569",
            "extra": "mean: 21.21157777272422 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.03312450662128,
            "unit": "iter/sec",
            "range": "stddev: 0.0006398393771965708",
            "extra": "mean: 8.33103365517106 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.586958308204832,
            "unit": "iter/sec",
            "range": "stddev: 0.00011609285161227211",
            "extra": "mean: 64.15619906249503 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.69480660996132,
            "unit": "iter/sec",
            "range": "stddev: 0.029955960934336716",
            "extra": "mean: 32.578801121212216 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.35417832664518,
            "unit": "iter/sec",
            "range": "stddev: 0.00025739946177330303",
            "extra": "mean: 10.82788042857276 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.50229092881934,
            "unit": "iter/sec",
            "range": "stddev: 0.000303223160101949",
            "extra": "mean: 15.747463365076305 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1932478.185332615,
            "unit": "iter/sec",
            "range": "stddev: 8.925199683896067e-8",
            "extra": "mean: 517.4702656878279 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.886805662727492,
            "unit": "iter/sec",
            "range": "stddev: 0.006940328677906317",
            "extra": "mean: 1.1276427768000077 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.97855307841108,
            "unit": "iter/sec",
            "range": "stddev: 0.0005869158836258794",
            "extra": "mean: 9.710759863158776 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6083877.693084098,
            "unit": "iter/sec",
            "range": "stddev: 8.385895943558456e-9",
            "extra": "mean: 164.3688532948908 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.2145054614369,
            "unit": "iter/sec",
            "range": "stddev: 0.0007586980482994015",
            "extra": "mean: 9.504392912501203 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 227.44511024162952,
            "unit": "iter/sec",
            "range": "stddev: 0.0034236549574246764",
            "extra": "mean: 4.396665195121741 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1988341.0993869952,
            "unit": "iter/sec",
            "range": "stddev: 9.867475399112526e-8",
            "extra": "mean: 502.9318160291007 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12709.721767602377,
            "unit": "iter/sec",
            "range": "stddev: 0.00000166919886437636",
            "extra": "mean: 78.67992850551951 usec\nrounds: 4322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 246.39632136209974,
            "unit": "iter/sec",
            "range": "stddev: 0.014404255873851643",
            "extra": "mean: 4.058502149999299 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6963299.049363855,
            "unit": "iter/sec",
            "range": "stddev: 1.1837288537626269e-8",
            "extra": "mean: 143.61008954388979 nsec\nrounds: 59524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1805560.1006085135,
            "unit": "iter/sec",
            "range": "stddev: 1.0911809563127964e-7",
            "extra": "mean: 553.8447596748389 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.06108349816064,
            "unit": "iter/sec",
            "range": "stddev: 0.0006626803546864857",
            "extra": "mean: 8.844776372731904 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.0776893274796,
            "unit": "iter/sec",
            "range": "stddev: 0.0002698377715594391",
            "extra": "mean: 3.5078157198449222 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.32769611668907,
            "unit": "iter/sec",
            "range": "stddev: 0.0006352433234844824",
            "extra": "mean: 10.601340233762727 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.25892861862803,
            "unit": "iter/sec",
            "range": "stddev: 0.00023335298670568256",
            "extra": "mean: 3.244026067569905 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 680.5814989217337,
            "unit": "iter/sec",
            "range": "stddev: 0.000022182200648319607",
            "extra": "mean: 1.4693317429056343 msec\nrounds: 599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.97388133361994,
            "unit": "iter/sec",
            "range": "stddev: 0.00021592242181987616",
            "extra": "mean: 3.215704147600669 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5278.666614205399,
            "unit": "iter/sec",
            "range": "stddev: 0.000021099826554981752",
            "extra": "mean: 189.44178010956477 usec\nrounds: 2192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.6713968518332,
            "unit": "iter/sec",
            "range": "stddev: 0.00005638745453790823",
            "extra": "mean: 6.072700050633399 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5768.499650436769,
            "unit": "iter/sec",
            "range": "stddev: 0.00004839711263864161",
            "extra": "mean: 173.35530217537308 usec\nrounds: 2482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 319.2987235836944,
            "unit": "iter/sec",
            "range": "stddev: 0.00020562005361205663",
            "extra": "mean: 3.1318634436629074 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1757.8936852154359,
            "unit": "iter/sec",
            "range": "stddev: 0.000017784601513672995",
            "extra": "mean: 568.8626157602054 usec\nrounds: 1434"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8444.046691113583,
            "unit": "iter/sec",
            "range": "stddev: 0.000013894509402976255",
            "extra": "mean: 118.42663080633938 usec\nrounds: 3681"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.85859076034396,
            "unit": "iter/sec",
            "range": "stddev: 0.0001927107448396203",
            "extra": "mean: 15.418157999995016 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5526.607814769079,
            "unit": "iter/sec",
            "range": "stddev: 0.000051469554237178705",
            "extra": "mean: 180.9428194502315 usec\nrounds: 2293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.0304734260043,
            "unit": "iter/sec",
            "range": "stddev: 0.0003171955128982639",
            "extra": "mean: 8.618425577981688 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5828.482830632182,
            "unit": "iter/sec",
            "range": "stddev: 0.00004552006104884591",
            "extra": "mean: 171.57123544130533 usec\nrounds: 2404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.2736847971936,
            "unit": "iter/sec",
            "range": "stddev: 0.0001574090292232182",
            "extra": "mean: 6.2006396223756495 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1168.6384441380198,
            "unit": "iter/sec",
            "range": "stddev: 0.000010098778649939682",
            "extra": "mean: 855.6966485366597 usec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.93384573150247,
            "unit": "iter/sec",
            "range": "stddev: 0.0006600677825676273",
            "extra": "mean: 8.777023136361157 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72763.78548476397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012320976053797165",
            "extra": "mean: 13.743100270798724 usec\nrounds: 13643"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1954892.1888014968,
            "unit": "iter/sec",
            "range": "stddev: 8.899724700130732e-8",
            "extra": "mean: 511.5371608360045 nsec\nrounds: 81968"
          }
        ]
      }
    ]
  }
}