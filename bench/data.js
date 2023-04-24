window.BENCHMARK_DATA = {
  "lastUpdate": 1682360229137,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "ed71d510612b098174d6bb9a8eb2d0dd42d5df3f",
          "message": "refactor(ir): remove `rlz.column_from`, `rlz.base_table_of` and `rlz.function_of` rules",
          "timestamp": "2023-04-24T14:11:38-04:00",
          "tree_id": "bee4d0e90d110d5264585a346eaa28d8e1ce51e9",
          "url": "https://github.com/ibis-project/ibis/commit/ed71d510612b098174d6bb9a8eb2d0dd42d5df3f"
        },
        "date": 1682360135711,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 202.23392651064142,
            "unit": "iter/sec",
            "range": "stddev: 0.007315634938165706",
            "extra": "mean: 4.944768750001897 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.78690473626464,
            "unit": "iter/sec",
            "range": "stddev: 0.01458573880823616",
            "extra": "mean: 27.94318221622142 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 249.60366615023457,
            "unit": "iter/sec",
            "range": "stddev: 0.0003080321307516446",
            "extra": "mean: 4.006351410712483 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 80.58608324273294,
            "unit": "iter/sec",
            "range": "stddev: 0.013480145195831893",
            "extra": "mean: 12.409090500004885 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.76973749233037,
            "unit": "iter/sec",
            "range": "stddev: 0.0006051489561449342",
            "extra": "mean: 19.69677310525915 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.53447402939764,
            "unit": "iter/sec",
            "range": "stddev: 0.0007984556718378939",
            "extra": "mean: 10.806783206897636 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9425.145864981298,
            "unit": "iter/sec",
            "range": "stddev: 0.000006720290264667534",
            "extra": "mean: 106.09915372402402 usec\nrounds: 5035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1690230.8735292882,
            "unit": "iter/sec",
            "range": "stddev: 3.0836114982499757e-7",
            "extra": "mean: 591.635152132767 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 472.64714547553126,
            "unit": "iter/sec",
            "range": "stddev: 0.00008373240651103344",
            "extra": "mean: 2.1157432337688147 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1874.3585147029205,
            "unit": "iter/sec",
            "range": "stddev: 0.00009651161754792351",
            "extra": "mean: 533.5158627102331 usec\nrounds: 1129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1546.467729060528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000319448850923666",
            "extra": "mean: 646.6348965506673 usec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.875037446671776,
            "unit": "iter/sec",
            "range": "stddev: 0.0010074621075364472",
            "extra": "mean: 26.402614159999303 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.01755103012478,
            "unit": "iter/sec",
            "range": "stddev: 0.0008363222278810616",
            "extra": "mean: 12.19251230303991 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 279.007744916258,
            "unit": "iter/sec",
            "range": "stddev: 0.00009261569491172805",
            "extra": "mean: 3.5841298968247 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148858.47081953028,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014830866097187103",
            "extra": "mean: 6.717790358147355 usec\nrounds: 38022"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.26723107691461,
            "unit": "iter/sec",
            "range": "stddev: 0.0035687560218574587",
            "extra": "mean: 441.0666429999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5249834.219799815,
            "unit": "iter/sec",
            "range": "stddev: 4.129845755566674e-8",
            "extra": "mean: 190.48220536717076 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 375.9606017162878,
            "unit": "iter/sec",
            "range": "stddev: 0.00020665211447137526",
            "extra": "mean: 2.659853174601079 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 84.81659732906625,
            "unit": "iter/sec",
            "range": "stddev: 0.0008785481448826567",
            "extra": "mean: 11.790145224999549 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3907.000035361813,
            "unit": "iter/sec",
            "range": "stddev: 0.00006356458326338063",
            "extra": "mean: 255.9508551187903 usec\nrounds: 918"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1955.9334450430879,
            "unit": "iter/sec",
            "range": "stddev: 0.00010785105801611404",
            "extra": "mean: 511.26484008660674 usec\nrounds: 913"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 79.12170724548405,
            "unit": "iter/sec",
            "range": "stddev: 0.014103059874359229",
            "extra": "mean: 12.638756604396654 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 84.01723888784935,
            "unit": "iter/sec",
            "range": "stddev: 0.0009516095063289029",
            "extra": "mean: 11.902319253014882 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 194.50886758447547,
            "unit": "iter/sec",
            "range": "stddev: 0.004379126821484541",
            "extra": "mean: 5.141153780897412 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 169.1959967574527,
            "unit": "iter/sec",
            "range": "stddev: 0.00014002984397499605",
            "extra": "mean: 5.910305321428666 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 95.41114075820397,
            "unit": "iter/sec",
            "range": "stddev: 0.0007386011249676099",
            "extra": "mean: 10.48095633333065 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 463123.7951322386,
            "unit": "iter/sec",
            "range": "stddev: 7.08062614086107e-7",
            "extra": "mean: 2.159249882020128 usec\nrounds: 2133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1484784.9038996631,
            "unit": "iter/sec",
            "range": "stddev: 3.326403933424861e-7",
            "extra": "mean: 673.4982268297473 nsec\nrounds: 169463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.28442441445819,
            "unit": "iter/sec",
            "range": "stddev: 0.0008607890350604869",
            "extra": "mean: 10.719903202243586 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1915.8609705353276,
            "unit": "iter/sec",
            "range": "stddev: 0.00009293278913765332",
            "extra": "mean: 521.9585425974732 usec\nrounds: 1209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6991633357068779,
            "unit": "iter/sec",
            "range": "stddev: 0.007828583437196494",
            "extra": "mean: 1.4302809499999967 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1658989.5357142887,
            "unit": "iter/sec",
            "range": "stddev: 2.259343928419437e-7",
            "extra": "mean: 602.7765567366545 nsec\nrounds: 129854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 626416.6652174464,
            "unit": "iter/sec",
            "range": "stddev: 0.000012251384440586175",
            "extra": "mean: 1.5963815388801519 usec\nrounds: 20703"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12114.287004874543,
            "unit": "iter/sec",
            "range": "stddev: 0.000003373601328646317",
            "extra": "mean: 82.54716101720393 usec\nrounds: 5074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7461.600141986559,
            "unit": "iter/sec",
            "range": "stddev: 0.000014953306961403736",
            "extra": "mean: 134.01951069087474 usec\nrounds: 3274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.03820272493103,
            "unit": "iter/sec",
            "range": "stddev: 0.0008628260760724525",
            "extra": "mean: 11.358705301202336 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 249.37316019198008,
            "unit": "iter/sec",
            "range": "stddev: 0.000340259067530087",
            "extra": "mean: 4.010054647541657 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.32893313342529,
            "unit": "iter/sec",
            "range": "stddev: 0.0005480103530527782",
            "extra": "mean: 23.62450281579018 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7869069092579236,
            "unit": "iter/sec",
            "range": "stddev: 0.008100376402062431",
            "extra": "mean: 1.2707983476000095 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 642.5740212749303,
            "unit": "iter/sec",
            "range": "stddev: 0.000027152708761693335",
            "extra": "mean: 1.5562409417297967 msec\nrounds: 532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.91578198188681,
            "unit": "iter/sec",
            "range": "stddev: 0.0009378229962721843",
            "extra": "mean: 27.842913193546057 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.65921512040393,
            "unit": "iter/sec",
            "range": "stddev: 0.00008236823939177502",
            "extra": "mean: 10.564211827955972 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 62112.579400254435,
            "unit": "iter/sec",
            "range": "stddev: 9.775414422074519e-7",
            "extra": "mean: 16.09979829618706 usec\nrounds: 10917"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.367396333107894,
            "unit": "iter/sec",
            "range": "stddev: 0.00041357845737415185",
            "extra": "mean: 135.73316200000818 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.82704862007354,
            "unit": "iter/sec",
            "range": "stddev: 0.000747265772390945",
            "extra": "mean: 11.38601394117031 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1002.3534569728515,
            "unit": "iter/sec",
            "range": "stddev: 0.0001330630114649926",
            "extra": "mean: 997.6520687822448 usec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9313709.190853704,
            "unit": "iter/sec",
            "range": "stddev: 9.001098208337227e-9",
            "extra": "mean: 107.36860895143457 nsec\nrounds: 89278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 239.03845612146142,
            "unit": "iter/sec",
            "range": "stddev: 0.0002946637708346281",
            "extra": "mean: 4.183427287080012 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 140.76882097241094,
            "unit": "iter/sec",
            "range": "stddev: 0.00015137732617703586",
            "extra": "mean: 7.103845816794816 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 251.74402405364583,
            "unit": "iter/sec",
            "range": "stddev: 0.00027491508569076425",
            "extra": "mean: 3.972288930230587 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5752552.955431457,
            "unit": "iter/sec",
            "range": "stddev: 2.4926436636711554e-8",
            "extra": "mean: 173.8358617030825 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 86.94766850898444,
            "unit": "iter/sec",
            "range": "stddev: 0.0009332977436613265",
            "extra": "mean: 11.501170958904648 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10621.397582009657,
            "unit": "iter/sec",
            "range": "stddev: 0.00002198842979113594",
            "extra": "mean: 94.14956857408134 usec\nrounds: 5155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1847.2577917574265,
            "unit": "iter/sec",
            "range": "stddev: 0.00009992259899470637",
            "extra": "mean: 541.342959527392 usec\nrounds: 1186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 111.75484930256644,
            "unit": "iter/sec",
            "range": "stddev: 0.00046997849700428416",
            "extra": "mean: 8.948157563101248 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.730676459333477,
            "unit": "iter/sec",
            "range": "stddev: 0.0004079024086795271",
            "extra": "mean: 37.4102017777718 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 597.4239561352381,
            "unit": "iter/sec",
            "range": "stddev: 0.00005529541916861957",
            "extra": "mean: 1.6738531987720147 msec\nrounds: 488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1936.3113111219805,
            "unit": "iter/sec",
            "range": "stddev: 0.00009471635891574073",
            "extra": "mean: 516.4458805028402 usec\nrounds: 954"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 97.0331752773517,
            "unit": "iter/sec",
            "range": "stddev: 0.00016008551919732204",
            "extra": "mean: 10.305753647056088 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 92.85819106425573,
            "unit": "iter/sec",
            "range": "stddev: 0.00018041664541195164",
            "extra": "mean: 10.769109203387591 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 73.84547703585444,
            "unit": "iter/sec",
            "range": "stddev: 0.019735177389991015",
            "extra": "mean: 13.541790779067846 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.652462491660625,
            "unit": "iter/sec",
            "range": "stddev: 0.0004373491120562185",
            "extra": "mean: 60.051178647049305 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1901.9594359066427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000965867376238776",
            "extra": "mean: 525.7735686267731 usec\nrounds: 1122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 109.90439282540859,
            "unit": "iter/sec",
            "range": "stddev: 0.00013356255762973822",
            "extra": "mean: 9.098817383838108 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.037630363895296,
            "unit": "iter/sec",
            "range": "stddev: 0.0008159127791165818",
            "extra": "mean: 18.169386897441726 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.76693553267523,
            "unit": "iter/sec",
            "range": "stddev: 0.0002578687933789062",
            "extra": "mean: 11.139959207318592 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8009616540412289,
            "unit": "iter/sec",
            "range": "stddev: 0.012641248123392334",
            "extra": "mean: 1.2484992196000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 174.54699817575158,
            "unit": "iter/sec",
            "range": "stddev: 0.00009875440238900067",
            "extra": "mean: 5.729115999996167 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.407446434627886,
            "unit": "iter/sec",
            "range": "stddev: 0.0006661107634583592",
            "extra": "mean: 44.62802144445277 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1917.646097886876,
            "unit": "iter/sec",
            "range": "stddev: 0.00009834309419840135",
            "extra": "mean: 521.4726539489932 usec\nrounds: 1127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.453302855026263,
            "unit": "iter/sec",
            "range": "stddev: 0.00297467534900958",
            "extra": "mean: 688.0878246000066 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 247.6758771683361,
            "unit": "iter/sec",
            "range": "stddev: 0.0002950024224301129",
            "extra": "mean: 4.037534908255668 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.26073103407252,
            "unit": "iter/sec",
            "range": "stddev: 0.0009318734657169717",
            "extra": "mean: 11.592760552945064 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 87.06901085144739,
            "unit": "iter/sec",
            "range": "stddev: 0.0008785730209064246",
            "extra": "mean: 11.485142534881303 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1310755189897272,
            "unit": "iter/sec",
            "range": "stddev: 0.0902872964622101",
            "extra": "mean: 884.1142639999816 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1660849.000538651,
            "unit": "iter/sec",
            "range": "stddev: 2.05940579080723e-7",
            "extra": "mean: 602.101695985413 nsec\nrounds: 161265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 45.488026546489415,
            "unit": "iter/sec",
            "range": "stddev: 0.000454640194529088",
            "extra": "mean: 21.983807078946054 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.2024684972955,
            "unit": "iter/sec",
            "range": "stddev: 0.00013325331134611887",
            "extra": "mean: 7.0322267297281025 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 251.3656406894708,
            "unit": "iter/sec",
            "range": "stddev: 0.0003212866217215011",
            "extra": "mean: 3.978268458875684 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4650027.7603245685,
            "unit": "iter/sec",
            "range": "stddev: 3.379764862683919e-8",
            "extra": "mean: 215.05247958553278 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 153.14953403663236,
            "unit": "iter/sec",
            "range": "stddev: 0.00038244492436476357",
            "extra": "mean: 6.529566062935631 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 88.61252964509374,
            "unit": "iter/sec",
            "range": "stddev: 0.0008911238219278678",
            "extra": "mean: 11.28508580000083 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.52175733053677,
            "unit": "iter/sec",
            "range": "stddev: 0.00022567572018403762",
            "extra": "mean: 11.557786513509274 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 145.2910195422879,
            "unit": "iter/sec",
            "range": "stddev: 0.004632147104330334",
            "extra": "mean: 6.882737853656147 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1895.9447858190401,
            "unit": "iter/sec",
            "range": "stddev: 0.00010281323722039915",
            "extra": "mean: 527.4415201748633 usec\nrounds: 1140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14766584958074339,
            "unit": "iter/sec",
            "range": "stddev: 0.09398660068246363",
            "extra": "mean: 6.772046501200009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 223.46256565522137,
            "unit": "iter/sec",
            "range": "stddev: 0.00048766092765256246",
            "extra": "mean: 4.475022458763371 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.53474685341138,
            "unit": "iter/sec",
            "range": "stddev: 0.001103607414978592",
            "extra": "mean: 12.417000600004258 msec\nrounds: 80"
          }
        ]
      }
    ]
  }
}