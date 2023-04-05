window.BENCHMARK_DATA = {
  "lastUpdate": 1680654698206,
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
          "id": "984d86bc125bad6648a09075567fdbcf95f6e55e",
          "message": "chore(flake/nixpkgs): `45c67117` -> `e3350689`",
          "timestamp": "2023-04-05T00:25:04Z",
          "tree_id": "8da1f9c59801cbedcc9dae24f516817b5fe5c9c6",
          "url": "https://github.com/ibis-project/ibis/commit/984d86bc125bad6648a09075567fdbcf95f6e55e"
        },
        "date": 1680654619912,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5089.671827305018,
            "unit": "iter/sec",
            "range": "stddev: 0.00008711104694869003",
            "extra": "mean: 196.47632183969316 usec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.95597816888284,
            "unit": "iter/sec",
            "range": "stddev: 0.000044510481747180145",
            "extra": "mean: 7.1451038611106314 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.17938682857921,
            "unit": "iter/sec",
            "range": "stddev: 0.0002345405788277115",
            "extra": "mean: 15.581326800004547 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.62764956690192,
            "unit": "iter/sec",
            "range": "stddev: 0.000663986457745285",
            "extra": "mean: 8.723898673472794 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.9398067705978,
            "unit": "iter/sec",
            "range": "stddev: 0.00020280823131374581",
            "extra": "mean: 3.2160565428593406 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.29950633645147,
            "unit": "iter/sec",
            "range": "stddev: 0.0006161457511402294",
            "extra": "mean: 9.233652431372347 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 212.22914919513454,
            "unit": "iter/sec",
            "range": "stddev: 0.003853607457447217",
            "extra": "mean: 4.711888087910808 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.8399277659535,
            "unit": "iter/sec",
            "range": "stddev: 0.00003495282356453654",
            "extra": "mean: 1.8524009591849753 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1963345.917567573,
            "unit": "iter/sec",
            "range": "stddev: 7.844880604216432e-8",
            "extra": "mean: 509.33459613623216 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8297.763101788541,
            "unit": "iter/sec",
            "range": "stddev: 0.0000650697529775058",
            "extra": "mean: 120.51440704356274 usec\nrounds: 1221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1744348.2192346873,
            "unit": "iter/sec",
            "range": "stddev: 9.115892119054609e-8",
            "extra": "mean: 573.2800303134076 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.75202346501835,
            "unit": "iter/sec",
            "range": "stddev: 0.0006184670487694433",
            "extra": "mean: 8.350589585587398 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.08952950683586,
            "unit": "iter/sec",
            "range": "stddev: 0.00023609972811997233",
            "extra": "mean: 8.39704383870791 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.242701490255996,
            "unit": "iter/sec",
            "range": "stddev: 0.022236412292661403",
            "extra": "mean: 26.148780317070273 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.301013225179865,
            "unit": "iter/sec",
            "range": "stddev: 0.029112990190014263",
            "extra": "mean: 27.547440447374594 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.144347007595917,
            "unit": "iter/sec",
            "range": "stddev: 0.0036393270670226825",
            "extra": "mean: 98.57706950000988 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2684780.9184884564,
            "unit": "iter/sec",
            "range": "stddev: 1.4391548362430015e-8",
            "extra": "mean: 372.46987011643927 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6997049.481083339,
            "unit": "iter/sec",
            "range": "stddev: 1.0221322868686545e-8",
            "extra": "mean: 142.91738292026463 nsec\nrounds: 59169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2006426.3359659372,
            "unit": "iter/sec",
            "range": "stddev: 9.314622928049299e-8",
            "extra": "mean: 498.39856169879187 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.02991836296195,
            "unit": "iter/sec",
            "range": "stddev: 0.01519086768807464",
            "extra": "mean: 9.801046752214315 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.38154733796412,
            "unit": "iter/sec",
            "range": "stddev: 0.00010236386064434241",
            "extra": "mean: 6.046623798702633 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.164217875656874,
            "unit": "iter/sec",
            "range": "stddev: 0.000822110414665738",
            "extra": "mean: 22.14142183870279 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 316.89301673684486,
            "unit": "iter/sec",
            "range": "stddev: 0.0001952061754281463",
            "extra": "mean: 3.1556391185181045 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8525326098258772,
            "unit": "iter/sec",
            "range": "stddev: 0.007229980384881052",
            "extra": "mean: 1.1729756591999945 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1739.0765746865707,
            "unit": "iter/sec",
            "range": "stddev: 0.000016773557736529805",
            "extra": "mean: 575.0178080457598 usec\nrounds: 1193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 676.8012619683626,
            "unit": "iter/sec",
            "range": "stddev: 0.00005412637312004751",
            "extra": "mean: 1.4775386161244264 msec\nrounds: 521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5518.2284134244455,
            "unit": "iter/sec",
            "range": "stddev: 0.000051485997289215205",
            "extra": "mean: 181.21758018701334 usec\nrounds: 2251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 285.05073844777735,
            "unit": "iter/sec",
            "range": "stddev: 0.00003522106920189899",
            "extra": "mean: 3.5081473756055703 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5618895.411196123,
            "unit": "iter/sec",
            "range": "stddev: 1.0371197146854298e-8",
            "extra": "mean: 177.97092254233542 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 490994.43758094206,
            "unit": "iter/sec",
            "range": "stddev: 8.011711672030882e-8",
            "extra": "mean: 2.0366829508840345 usec\nrounds: 2047"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 97.97294250223901,
            "unit": "iter/sec",
            "range": "stddev: 0.017189309415916454",
            "extra": "mean: 10.206899726188652 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.29359230097774,
            "unit": "iter/sec",
            "range": "stddev: 0.0007434274923640654",
            "extra": "mean: 8.453543260869715 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.88343191628184,
            "unit": "iter/sec",
            "range": "stddev: 0.0008201700751442166",
            "extra": "mean: 9.62617408333107 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5030.911295190901,
            "unit": "iter/sec",
            "range": "stddev: 0.000054529950842039727",
            "extra": "mean: 198.7711452904984 usec\nrounds: 2994"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5163094331699236,
            "unit": "iter/sec",
            "range": "stddev: 0.0015957541838148355",
            "extra": "mean: 397.407404199987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.455349735138421,
            "unit": "iter/sec",
            "range": "stddev: 0.00012260883458754275",
            "extra": "mean: 64.70251512500269 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.40630899019506,
            "unit": "iter/sec",
            "range": "stddev: 0.00006598384519813668",
            "extra": "mean: 8.896297805554914 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.251678051402,
            "unit": "iter/sec",
            "range": "stddev: 0.0006682918646892884",
            "extra": "mean: 10.72366761538363 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143942.09710213376,
            "unit": "iter/sec",
            "range": "stddev: 5.150084109371543e-7",
            "extra": "mean: 6.947237952844694 usec\nrounds: 33784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.44045109108789,
            "unit": "iter/sec",
            "range": "stddev: 0.0017080526157337537",
            "extra": "mean: 26.014262882358373 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.63667160266708,
            "unit": "iter/sec",
            "range": "stddev: 0.0006660875459065684",
            "extra": "mean: 18.302725452829108 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.9823452948577,
            "unit": "iter/sec",
            "range": "stddev: 0.0001511642605620037",
            "extra": "mean: 3.448485799999953 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 758815.9778964798,
            "unit": "iter/sec",
            "range": "stddev: 1.5009852660677078e-7",
            "extra": "mean: 1.317842572018724 usec\nrounds: 25707"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.76556366739662,
            "unit": "iter/sec",
            "range": "stddev: 0.00011401408867221011",
            "extra": "mean: 13.198608333330716 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1172.153870213863,
            "unit": "iter/sec",
            "range": "stddev: 0.000012607871115866715",
            "extra": "mean: 853.130314552941 usec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 340.8740133270416,
            "unit": "iter/sec",
            "range": "stddev: 0.000015448649365738663",
            "extra": "mean: 2.933635187498377 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.6063600862077,
            "unit": "iter/sec",
            "range": "stddev: 0.0007133932904491243",
            "extra": "mean: 9.380303381443149 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.934452724559,
            "unit": "iter/sec",
            "range": "stddev: 0.00028911625364793264",
            "extra": "mean: 6.213709886667402 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.8331256370716,
            "unit": "iter/sec",
            "range": "stddev: 0.0003070267998858369",
            "extra": "mean: 10.221486776469431 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.83597624982644,
            "unit": "iter/sec",
            "range": "stddev: 0.0002824083793987685",
            "extra": "mean: 5.185754336133116 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6822759608595363,
            "unit": "iter/sec",
            "range": "stddev: 0.0037110553074691335",
            "extra": "mean: 1.465682593800011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16188312738140356,
            "unit": "iter/sec",
            "range": "stddev: 0.1065728578769494",
            "extra": "mean: 6.177296029400009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.1829998547077,
            "unit": "iter/sec",
            "range": "stddev: 0.00027124245454821796",
            "extra": "mean: 10.396847691489992 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5659.842598880374,
            "unit": "iter/sec",
            "range": "stddev: 0.00004684008783004978",
            "extra": "mean: 176.68335868524318 usec\nrounds: 2038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5646.53970469048,
            "unit": "iter/sec",
            "range": "stddev: 0.00004808074457035653",
            "extra": "mean: 177.09961362165183 usec\nrounds: 3142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 117.72757412663125,
            "unit": "iter/sec",
            "range": "stddev: 0.0007961723147161722",
            "extra": "mean: 8.49418674782486 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72901.98397901589,
            "unit": "iter/sec",
            "range": "stddev: 0.000001145418042877677",
            "extra": "mean: 13.717047814334382 usec\nrounds: 12423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.28655185511734,
            "unit": "iter/sec",
            "range": "stddev: 0.0005260464943281028",
            "extra": "mean: 9.776456258066446 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.9613319603822,
            "unit": "iter/sec",
            "range": "stddev: 0.0006183198574212601",
            "extra": "mean: 8.267104733333497 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13943.950461769498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014250161975357753",
            "extra": "mean: 71.71568794236086 usec\nrounds: 6079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5517.508014797534,
            "unit": "iter/sec",
            "range": "stddev: 0.000022007061383427934",
            "extra": "mean: 181.24124103092853 usec\nrounds: 1979"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 150.49253668611675,
            "unit": "iter/sec",
            "range": "stddev: 0.003678302467502577",
            "extra": "mean: 6.644847791260947 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 81.92211573374435,
            "unit": "iter/sec",
            "range": "stddev: 0.023605746856214697",
            "extra": "mean: 12.206715989246508 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8384359955527905,
            "unit": "iter/sec",
            "range": "stddev: 0.0028361890125189575",
            "extra": "mean: 1.1926968848000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12188.009855447608,
            "unit": "iter/sec",
            "range": "stddev: 0.000012687923823640664",
            "extra": "mean: 82.04784963748905 usec\nrounds: 3864"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.617842457904061,
            "unit": "iter/sec",
            "range": "stddev: 0.00014170840667533291",
            "extra": "mean: 178.00427966666157 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 279.72589001844506,
            "unit": "iter/sec",
            "range": "stddev: 0.0003116351702529667",
            "extra": "mean: 3.5749282983211175 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.57999589668657,
            "unit": "iter/sec",
            "range": "stddev: 0.00021183636081839165",
            "extra": "mean: 3.1687686577173806 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4915.546694682411,
            "unit": "iter/sec",
            "range": "stddev: 0.00005749054914271358",
            "extra": "mean: 203.43617141950662 usec\nrounds: 3156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12695.330629117438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015405677524936214",
            "extra": "mean: 78.76911828561953 usec\nrounds: 5064"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10535559.914179329,
            "unit": "iter/sec",
            "range": "stddev: 3.3437308828865367e-9",
            "extra": "mean: 94.91664497625682 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.25912024397178,
            "unit": "iter/sec",
            "range": "stddev: 0.0002448264669392371",
            "extra": "mean: 6.611171600013677 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 314.94829412441527,
            "unit": "iter/sec",
            "range": "stddev: 0.0002102089813322372",
            "extra": "mean: 3.175124357412668 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.2050504733499,
            "unit": "iter/sec",
            "range": "stddev: 0.00025364920296971796",
            "extra": "mean: 11.085853782604325 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7518875016387048,
            "unit": "iter/sec",
            "range": "stddev: 0.0012361049245372356",
            "extra": "mean: 570.8129084000007 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.71328293785471,
            "unit": "iter/sec",
            "range": "stddev: 0.0007480848315887002",
            "extra": "mean: 9.370904656567989 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.51749579135074,
            "unit": "iter/sec",
            "range": "stddev: 0.02185468428772279",
            "extra": "mean: 11.973539083334947 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5316.068706046465,
            "unit": "iter/sec",
            "range": "stddev: 0.00005235938758647212",
            "extra": "mean: 188.10893073345832 usec\nrounds: 3436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 290.5992530746749,
            "unit": "iter/sec",
            "range": "stddev: 0.0002494531511905417",
            "extra": "mean: 3.4411650732737136 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.73296072862224,
            "unit": "iter/sec",
            "range": "stddev: 0.0005957073459679296",
            "extra": "mean: 16.198801874998264 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.3997453298399,
            "unit": "iter/sec",
            "range": "stddev: 0.00001754450865882853",
            "extra": "mean: 1.3308495327757035 msec\nrounds: 595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5239.43170243075,
            "unit": "iter/sec",
            "range": "stddev: 0.00005027586983939934",
            "extra": "mean: 190.8603941790225 usec\nrounds: 1890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.2585179628226,
            "unit": "iter/sec",
            "range": "stddev: 0.00023113984568890519",
            "extra": "mean: 3.308426199995458 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6096351.542909379,
            "unit": "iter/sec",
            "range": "stddev: 9.001514738272745e-9",
            "extra": "mean: 164.03253535496495 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 110.20559522226831,
            "unit": "iter/sec",
            "range": "stddev: 0.0008884430412321349",
            "extra": "mean: 9.073949448602391 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.513676663762038,
            "unit": "iter/sec",
            "range": "stddev: 0.0008755023277311386",
            "extra": "mean: 42.5284405454611 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 306.78218375645855,
            "unit": "iter/sec",
            "range": "stddev: 0.00024401811749222264",
            "extra": "mean: 3.259641703293493 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8575439368124106,
            "unit": "iter/sec",
            "range": "stddev: 0.006048728519988088",
            "extra": "mean: 1.1661210080000273 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}