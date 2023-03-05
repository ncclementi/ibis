window.BENCHMARK_DATA = {
  "lastUpdate": 1677976128376,
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
          "id": "8207eea389cbc855771d72f5c8f36ac349facb46",
          "message": "chore(flake/nixpkgs): `dcc47fef` -> `e0737778`",
          "timestamp": "2023-03-05T00:18:59Z",
          "tree_id": "15a9ad2b6d14c1fd5f5b382c15afb39921dd966b",
          "url": "https://github.com/ibis-project/ibis/commit/8207eea389cbc855771d72f5c8f36ac349facb46"
        },
        "date": 1677976050593,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12763.34225022211,
            "unit": "iter/sec",
            "range": "stddev: 0.000007943521513081819",
            "extra": "mean: 78.34938375820784 usec\nrounds: 4039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.553498357653254,
            "unit": "iter/sec",
            "range": "stddev: 0.0008263010463830218",
            "extra": "mean: 26.62867758620427 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 142.13237044037226,
            "unit": "iter/sec",
            "range": "stddev: 0.0005717265357897445",
            "extra": "mean: 7.0356949433944935 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 170.52180423938992,
            "unit": "iter/sec",
            "range": "stddev: 0.00929882747349441",
            "extra": "mean: 5.864352681819699 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.26485967078582,
            "unit": "iter/sec",
            "range": "stddev: 0.0007671569676113607",
            "extra": "mean: 9.778530017243758 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7483637456212087,
            "unit": "iter/sec",
            "range": "stddev: 0.005050172604140376",
            "extra": "mean: 571.96335860001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6933773109538423,
            "unit": "iter/sec",
            "range": "stddev: 0.005031265580729517",
            "extra": "mean: 1.4422162135999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 131.6805152707692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005338084445936267",
            "extra": "mean: 7.594137962960893 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5408.7758036463265,
            "unit": "iter/sec",
            "range": "stddev: 0.000045734696491896634",
            "extra": "mean: 184.88472000001366 usec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5721.362441475662,
            "unit": "iter/sec",
            "range": "stddev: 0.00004807756052563764",
            "extra": "mean: 174.7835432956907 usec\nrounds: 2737"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.39282269208568,
            "unit": "iter/sec",
            "range": "stddev: 0.021236880114227422",
            "extra": "mean: 27.47794554054938 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.37161181780837,
            "unit": "iter/sec",
            "range": "stddev: 0.00009064378428755114",
            "extra": "mean: 6.196876815787271 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1977863.957259791,
            "unit": "iter/sec",
            "range": "stddev: 6.180850649217685e-8",
            "extra": "mean: 505.59594674319186 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.19668966684668,
            "unit": "iter/sec",
            "range": "stddev: 0.0008741067710546232",
            "extra": "mean: 32.05468306666906 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 135.3227916057937,
            "unit": "iter/sec",
            "range": "stddev: 0.0007533647321319704",
            "extra": "mean: 7.3897381818214445 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5218.860327836882,
            "unit": "iter/sec",
            "range": "stddev: 0.0000836453617435198",
            "extra": "mean: 191.6127156471499 usec\nrounds: 2307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.42725242378886,
            "unit": "iter/sec",
            "range": "stddev: 0.0005505105463020303",
            "extra": "mean: 13.435938684206679 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 673.8497778800288,
            "unit": "iter/sec",
            "range": "stddev: 0.00005089062632793314",
            "extra": "mean: 1.484010283636301 msec\nrounds: 550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 279.525401292375,
            "unit": "iter/sec",
            "range": "stddev: 0.00006729669689114164",
            "extra": "mean: 3.577492404541906 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 316.6614247850353,
            "unit": "iter/sec",
            "range": "stddev: 0.0001934129612132513",
            "extra": "mean: 3.157947011319257 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16552571045274211,
            "unit": "iter/sec",
            "range": "stddev: 0.11376145512740393",
            "extra": "mean: 6.0413575466 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.80599706923828,
            "unit": "iter/sec",
            "range": "stddev: 0.00024298279893942274",
            "extra": "mean: 15.92204640740891 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5593637.239359414,
            "unit": "iter/sec",
            "range": "stddev: 1.0227742308654372e-8",
            "extra": "mean: 178.77455351665466 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 138.671656067639,
            "unit": "iter/sec",
            "range": "stddev: 0.0008010721273098561",
            "extra": "mean: 7.211278990655713 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.496742572371327,
            "unit": "iter/sec",
            "range": "stddev: 0.004832141340749995",
            "extra": "mean: 400.5218684000056 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.635584924089244,
            "unit": "iter/sec",
            "range": "stddev: 0.0010766470743164404",
            "extra": "mean: 44.178226600001835 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11706082.66652165,
            "unit": "iter/sec",
            "range": "stddev: 3.4321488049154265e-9",
            "extra": "mean: 85.42567385584343 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 137.98733104122834,
            "unit": "iter/sec",
            "range": "stddev: 0.0007468766399942746",
            "extra": "mean: 7.2470421194045445 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8316091801962658,
            "unit": "iter/sec",
            "range": "stddev: 0.009222193719595496",
            "extra": "mean: 1.2024879280000165 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 526.8505229532934,
            "unit": "iter/sec",
            "range": "stddev: 0.00004833572612908681",
            "extra": "mean: 1.8980715714097383 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.626243427882587,
            "unit": "iter/sec",
            "range": "stddev: 0.00044331258793607744",
            "extra": "mean: 94.1066338999974 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.638911025109,
            "unit": "iter/sec",
            "range": "stddev: 0.014429813810244477",
            "extra": "mean: 11.542158000002885 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8373.16856278144,
            "unit": "iter/sec",
            "range": "stddev: 0.00003599810513293834",
            "extra": "mean: 119.42910171962609 usec\nrounds: 4129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.560641864371364,
            "unit": "iter/sec",
            "range": "stddev: 0.001998367254833656",
            "extra": "mean: 179.83535433333486 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.40334514788121,
            "unit": "iter/sec",
            "range": "stddev: 0.0007281368091465807",
            "extra": "mean: 10.060023619047342 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1752.4904096359521,
            "unit": "iter/sec",
            "range": "stddev: 0.000008504332579967562",
            "extra": "mean: 570.6165320515116 usec\nrounds: 1404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72815.85846935764,
            "unit": "iter/sec",
            "range": "stddev: 5.555657103722576e-7",
            "extra": "mean: 13.733272133580899 usec\nrounds: 3366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1795448.2807483897,
            "unit": "iter/sec",
            "range": "stddev: 1.4906777928346814e-7",
            "extra": "mean: 556.9639686770447 nsec\nrounds: 112347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.0224479988523,
            "unit": "iter/sec",
            "range": "stddev: 0.0002692851499262603",
            "extra": "mean: 3.448008962409549 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 140.00424624510742,
            "unit": "iter/sec",
            "range": "stddev: 0.0007220765572535852",
            "extra": "mean: 7.14264050426932 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5108.15616595934,
            "unit": "iter/sec",
            "range": "stddev: 0.00003273418366560285",
            "extra": "mean: 195.76535397722998 usec\nrounds: 1534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6194222.358812476,
            "unit": "iter/sec",
            "range": "stddev: 9.418303268843577e-9",
            "extra": "mean: 161.44076561560746 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 137.2082627797681,
            "unit": "iter/sec",
            "range": "stddev: 0.0007722356596788996",
            "extra": "mean: 7.2881908111109315 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8262229013196432,
            "unit": "iter/sec",
            "range": "stddev: 0.01620931418489975",
            "extra": "mean: 1.2103271386000074 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.3999692893849,
            "unit": "iter/sec",
            "range": "stddev: 0.00013840447356034503",
            "extra": "mean: 8.517889792075255 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 488045.0179256996,
            "unit": "iter/sec",
            "range": "stddev: 2.8186709600937747e-7",
            "extra": "mean: 2.0489913087325906 usec\nrounds: 2071"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.8033278221767,
            "unit": "iter/sec",
            "range": "stddev: 0.0007700329935450142",
            "extra": "mean: 9.92030741052579 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 218.95166983366028,
            "unit": "iter/sec",
            "range": "stddev: 0.012782333835452903",
            "extra": "mean: 4.567217965314947 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5319.481348349194,
            "unit": "iter/sec",
            "range": "stddev: 0.000057094694712948686",
            "extra": "mean: 187.98825195812222 usec\nrounds: 2298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8388300914356918,
            "unit": "iter/sec",
            "range": "stddev: 0.004748340336783694",
            "extra": "mean: 1.1921365365999919 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.39082145602292,
            "unit": "iter/sec",
            "range": "stddev: 0.0007942872481542062",
            "extra": "mean: 11.06307016455782 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.40909373754982,
            "unit": "iter/sec",
            "range": "stddev: 0.00016780229237109377",
            "extra": "mean: 6.738131571427987 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 221.99789427855285,
            "unit": "iter/sec",
            "range": "stddev: 0.003781603176936704",
            "extra": "mean: 4.504547231178894 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1997314.668059613,
            "unit": "iter/sec",
            "range": "stddev: 9.909972517606987e-8",
            "extra": "mean: 500.6722355729244 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13757.334997011709,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028781132945237283",
            "extra": "mean: 72.68849673408508 usec\nrounds: 5053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7045723.602319966,
            "unit": "iter/sec",
            "range": "stddev: 7.079863714580402e-9",
            "extra": "mean: 141.9300637440225 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.70701277700281,
            "unit": "iter/sec",
            "range": "stddev: 0.0002896396703772923",
            "extra": "mean: 20.961278893614786 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5139.886632485906,
            "unit": "iter/sec",
            "range": "stddev: 0.00007036679059288082",
            "extra": "mean: 194.5568203157722 usec\nrounds: 2087"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5208.596009429599,
            "unit": "iter/sec",
            "range": "stddev: 0.000053279903266103084",
            "extra": "mean: 191.99031719672794 usec\nrounds: 2582"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 102.99192812328498,
            "unit": "iter/sec",
            "range": "stddev: 0.0008837546791264329",
            "extra": "mean: 9.709498775505637 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 290.3523196054916,
            "unit": "iter/sec",
            "range": "stddev: 0.00031948532450728736",
            "extra": "mean: 3.4440916516827667 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.94332649825505,
            "unit": "iter/sec",
            "range": "stddev: 0.00029202918015938466",
            "extra": "mean: 13.523870879998867 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1983537.000343609,
            "unit": "iter/sec",
            "range": "stddev: 3.522086037140097e-7",
            "extra": "mean: 504.1499098966995 nsec\nrounds: 144907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.31777879747136,
            "unit": "iter/sec",
            "range": "stddev: 0.0005850964643409988",
            "extra": "mean: 11.322748529411964 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 303.29188370668675,
            "unit": "iter/sec",
            "range": "stddev: 0.00023684772089754342",
            "extra": "mean: 3.2971538432828584 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 303.0816382492904,
            "unit": "iter/sec",
            "range": "stddev: 0.00026142751454726894",
            "extra": "mean: 3.2994410541541317 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148450.76795651784,
            "unit": "iter/sec",
            "range": "stddev: 3.474028096418408e-7",
            "extra": "mean: 6.736239992324637 usec\nrounds: 35972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 100.56658047582434,
            "unit": "iter/sec",
            "range": "stddev: 0.0009783345523068335",
            "extra": "mean: 9.943661157300607 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5515.568989306782,
            "unit": "iter/sec",
            "range": "stddev: 0.00005595590420982896",
            "extra": "mean: 181.304957283416 usec\nrounds: 3137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 308.44197466983525,
            "unit": "iter/sec",
            "range": "stddev: 0.0003423876090411715",
            "extra": "mean: 3.2421008880857656 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 155.54644788386352,
            "unit": "iter/sec",
            "range": "stddev: 0.0039913882320337995",
            "extra": "mean: 6.428947839082994 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 787891.0187960484,
            "unit": "iter/sec",
            "range": "stddev: 2.3153099623371108e-7",
            "extra": "mean: 1.2692110661802805 usec\nrounds: 24272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.43778746552766,
            "unit": "iter/sec",
            "range": "stddev: 0.00009953549699278112",
            "extra": "mean: 7.438384838462316 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5483.785732335599,
            "unit": "iter/sec",
            "range": "stddev: 0.00005639485973853693",
            "extra": "mean: 182.35577551898442 usec\nrounds: 2410"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 98.13866727040043,
            "unit": "iter/sec",
            "range": "stddev: 0.00008088476831191606",
            "extra": "mean: 10.189663542553625 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 294.92718302362346,
            "unit": "iter/sec",
            "range": "stddev: 0.00022103203723954654",
            "extra": "mean: 3.390667451361717 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.22987278285154,
            "unit": "iter/sec",
            "range": "stddev: 0.00012030801945319814",
            "extra": "mean: 7.5058241752574375 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12065.942830970462,
            "unit": "iter/sec",
            "range": "stddev: 0.000013988125072865256",
            "extra": "mean: 82.87789972228553 usec\nrounds: 4318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.34769449733913,
            "unit": "iter/sec",
            "range": "stddev: 0.0007876037565796682",
            "extra": "mean: 9.492376693874947 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.60671695969578,
            "unit": "iter/sec",
            "range": "stddev: 0.00040253716841866314",
            "extra": "mean: 64.07497506249982 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 42.998551894782985,
            "unit": "iter/sec",
            "range": "stddev: 0.0006847607149537405",
            "extra": "mean: 23.25659716278329 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 128.58039748073838,
            "unit": "iter/sec",
            "range": "stddev: 0.0008286256850835461",
            "extra": "mean: 7.777235251973786 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.62204018350473,
            "unit": "iter/sec",
            "range": "stddev: 0.0006144847834536971",
            "extra": "mean: 24.025732414633318 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.33604362543028,
            "unit": "iter/sec",
            "range": "stddev: 0.0000603363015970166",
            "extra": "mean: 5.172341283332571 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 730.0525745621972,
            "unit": "iter/sec",
            "range": "stddev: 0.000019268761023752614",
            "extra": "mean: 1.3697643633401153 msec\nrounds: 611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 298.90013057187616,
            "unit": "iter/sec",
            "range": "stddev: 0.00027498630833192007",
            "extra": "mean: 3.3455990738001073 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 339.3044509688955,
            "unit": "iter/sec",
            "range": "stddev: 0.00001446107061866811",
            "extra": "mean: 2.947205664837186 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1127.0418744664078,
            "unit": "iter/sec",
            "range": "stddev: 0.0001326833918009433",
            "extra": "mean: 887.2784788705787 usec\nrounds: 213"
          }
        ]
      }
    ]
  }
}