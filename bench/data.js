window.BENCHMARK_DATA = {
  "lastUpdate": 1681409396355,
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
          "id": "e38eacb6f5da2dfc67cc9923cfa3324c3a741a66",
          "message": "docs: add platform comment in conda env creation",
          "timestamp": "2023-04-13T14:03:57-04:00",
          "tree_id": "bb7e760e253ee082802b41dd3bd7065c81e7bf94",
          "url": "https://github.com/ibis-project/ibis/commit/e38eacb6f5da2dfc67cc9923cfa3324c3a741a66"
        },
        "date": 1681409297068,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57946.32784592533,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011912919611103907",
            "extra": "mean: 17.25734894985788 usec\nrounds: 10331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 81.73895384088276,
            "unit": "iter/sec",
            "range": "stddev: 0.0008301536015976059",
            "extra": "mean: 12.234068984374957 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4869560.2753536515,
            "unit": "iter/sec",
            "range": "stddev: 4.442467148342435e-8",
            "extra": "mean: 205.35735127096663 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1758.2197321875483,
            "unit": "iter/sec",
            "range": "stddev: 0.00009162162147854047",
            "extra": "mean: 568.7571250015585 usec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 968.4628827875356,
            "unit": "iter/sec",
            "range": "stddev: 0.00003988163198199779",
            "extra": "mean: 1.032564094889926 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.286480146579834,
            "unit": "iter/sec",
            "range": "stddev: 0.00036399294606879844",
            "extra": "mean: 22.580254666665535 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4371421.506027272,
            "unit": "iter/sec",
            "range": "stddev: 1.3938031763630552e-8",
            "extra": "mean: 228.75853966963527 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 109.26676787694296,
            "unit": "iter/sec",
            "range": "stddev: 0.00006293087845263253",
            "extra": "mean: 9.151913426470227 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 78.64096009974637,
            "unit": "iter/sec",
            "range": "stddev: 0.001080286914438121",
            "extra": "mean: 12.716019727272188 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.912704852682452,
            "unit": "iter/sec",
            "range": "stddev: 0.000142988976349584",
            "extra": "mean: 77.44310827272277 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 67.09227681211203,
            "unit": "iter/sec",
            "range": "stddev: 0.0005636960113017628",
            "extra": "mean: 14.904845199998817 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1805.2560258209123,
            "unit": "iter/sec",
            "range": "stddev: 0.00010459239664493801",
            "extra": "mean: 553.9380485076988 usec\nrounds: 1072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 414178.67029655416,
            "unit": "iter/sec",
            "range": "stddev: 6.234224415415384e-7",
            "extra": "mean: 2.414416945430808 usec\nrounds: 1794"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.738559082727491,
            "unit": "iter/sec",
            "range": "stddev: 0.0075169742123179124",
            "extra": "mean: 1.3539878167999917 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 556.5772049622833,
            "unit": "iter/sec",
            "range": "stddev: 0.00007626444012332494",
            "extra": "mean: 1.7966959320006026 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1839.5645915136588,
            "unit": "iter/sec",
            "range": "stddev: 0.00010199227050020163",
            "extra": "mean: 543.6068973132195 usec\nrounds: 1042"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1459.3590111105627,
            "unit": "iter/sec",
            "range": "stddev: 0.000007894842335561275",
            "extra": "mean: 685.232346795191 usec\nrounds: 1139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8611.441660100181,
            "unit": "iter/sec",
            "range": "stddev: 0.000002432181808180936",
            "extra": "mean: 116.12457466133102 usec\nrounds: 3844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1858.474382168925,
            "unit": "iter/sec",
            "range": "stddev: 0.00010304462483227697",
            "extra": "mean: 538.075751591988 usec\nrounds: 314"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4535317773406384,
            "unit": "iter/sec",
            "range": "stddev: 0.0056162008414120754",
            "extra": "mean: 687.9794550000042 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11635.161404236864,
            "unit": "iter/sec",
            "range": "stddev: 0.000001855424092820242",
            "extra": "mean: 85.94637970693358 usec\nrounds: 5391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 212.9206917377551,
            "unit": "iter/sec",
            "range": "stddev: 0.0005125005296482569",
            "extra": "mean: 4.696584403509525 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.90702494292429,
            "unit": "iter/sec",
            "range": "stddev: 0.0005294622424292061",
            "extra": "mean: 26.38033455555207 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1795.0982443003654,
            "unit": "iter/sec",
            "range": "stddev: 0.00009887386846397746",
            "extra": "mean: 557.0725742588797 usec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 239.2232409569059,
            "unit": "iter/sec",
            "range": "stddev: 0.0003156006987115679",
            "extra": "mean: 4.180195853880861 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 124.02625792345037,
            "unit": "iter/sec",
            "range": "stddev: 0.00016404689502581786",
            "extra": "mean: 8.062808769230182 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 78.69776234758946,
            "unit": "iter/sec",
            "range": "stddev: 0.0002517123290123192",
            "extra": "mean: 12.706841594596245 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 79.18507272692652,
            "unit": "iter/sec",
            "range": "stddev: 0.0009005763516867114",
            "extra": "mean: 12.628642818180486 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.948326941442588,
            "unit": "iter/sec",
            "range": "stddev: 0.02994655825855647",
            "extra": "mean: 33.39084690624894 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 82.25222753324685,
            "unit": "iter/sec",
            "range": "stddev: 0.0010525880261061423",
            "extra": "mean: 12.157725449998225 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 82.32320240087226,
            "unit": "iter/sec",
            "range": "stddev: 0.001078194001935166",
            "extra": "mean: 12.147243679011742 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 65.75913795556512,
            "unit": "iter/sec",
            "range": "stddev: 0.020403855365877563",
            "extra": "mean: 15.207012000000999 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 79.0266133974617,
            "unit": "iter/sec",
            "range": "stddev: 0.0010020133327365481",
            "extra": "mean: 12.653964999999856 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 82.75743859783816,
            "unit": "iter/sec",
            "range": "stddev: 0.000996011625144336",
            "extra": "mean: 12.083505929412883 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 629718.5613718992,
            "unit": "iter/sec",
            "range": "stddev: 1.8235795630784337e-7",
            "extra": "mean: 1.5880109962479254 usec\nrounds: 22371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3631.393877790718,
            "unit": "iter/sec",
            "range": "stddev: 0.00007264593357724209",
            "extra": "mean: 275.3763523466598 usec\nrounds: 1683"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 136887.3249752132,
            "unit": "iter/sec",
            "range": "stddev: 4.016246621569612e-7",
            "extra": "mean: 7.305278265764009 usec\nrounds: 31646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1515863.2075974643,
            "unit": "iter/sec",
            "range": "stddev: 1.5297248079231154e-7",
            "extra": "mean: 659.6901323206657 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.356296056612633,
            "unit": "iter/sec",
            "range": "stddev: 0.0006331086077919893",
            "extra": "mean: 106.87990140000352 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.782248369040005,
            "unit": "iter/sec",
            "range": "stddev: 0.00043826920676682786",
            "extra": "mean: 209.1066633999901 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 224.95335184066965,
            "unit": "iter/sec",
            "range": "stddev: 0.00041100571466548254",
            "extra": "mean: 4.445366080645385 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 60.875041802863215,
            "unit": "iter/sec",
            "range": "stddev: 0.00012554744740526078",
            "extra": "mean: 16.427093442307346 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1530462.43796969,
            "unit": "iter/sec",
            "range": "stddev: 1.1057687283998911e-7",
            "extra": "mean: 653.397283847488 nsec\nrounds: 156251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 80.5131515084539,
            "unit": "iter/sec",
            "range": "stddev: 0.0009082351884021597",
            "extra": "mean: 12.420331104478002 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 69.40188793657777,
            "unit": "iter/sec",
            "range": "stddev: 0.021214058825970866",
            "extra": "mean: 14.40882992857255 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 133.61262252074678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000837995371624409",
            "extra": "mean: 7.484322821705894 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 361.4775573995563,
            "unit": "iter/sec",
            "range": "stddev: 0.0004788245343565593",
            "extra": "mean: 2.7664234736837563 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 224.50694472888034,
            "unit": "iter/sec",
            "range": "stddev: 0.0007154332276015524",
            "extra": "mean: 4.454205197115941 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 115.60989505846341,
            "unit": "iter/sec",
            "range": "stddev: 0.004595398636673304",
            "extra": "mean: 8.649778632653412 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 95.00626974015898,
            "unit": "iter/sec",
            "range": "stddev: 0.0006073498872764942",
            "extra": "mean: 10.525621127268634 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 91.2494224976194,
            "unit": "iter/sec",
            "range": "stddev: 0.00008025395813644321",
            "extra": "mean: 10.958973466665928 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5546252.542264261,
            "unit": "iter/sec",
            "range": "stddev: 9.472276712335848e-9",
            "extra": "mean: 180.30192321367522 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 173.48332713415672,
            "unit": "iter/sec",
            "range": "stddev: 0.00447406860655159",
            "extra": "mean: 5.764242688443992 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 124.34872079336597,
            "unit": "iter/sec",
            "range": "stddev: 0.0007533201150918456",
            "extra": "mean: 8.041900178946998 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.8224358581356,
            "unit": "iter/sec",
            "range": "stddev: 0.0007195511838817949",
            "extra": "mean: 20.071278787881827 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6911.03043003338,
            "unit": "iter/sec",
            "range": "stddev: 0.000018778305404053523",
            "extra": "mean: 144.69622296181527 usec\nrounds: 3005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13900260453731048,
            "unit": "iter/sec",
            "range": "stddev: 0.20077870731487987",
            "extra": "mean: 7.194109803400011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 59.961987098292184,
            "unit": "iter/sec",
            "range": "stddev: 0.022488026298015697",
            "extra": "mean: 16.677232499996347 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 244.68133348527462,
            "unit": "iter/sec",
            "range": "stddev: 0.00021208106099327782",
            "extra": "mean: 4.086948463766575 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 82.66143048660422,
            "unit": "iter/sec",
            "range": "stddev: 0.0010614157752249053",
            "extra": "mean: 12.09754046250211 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.31717897748108,
            "unit": "iter/sec",
            "range": "stddev: 0.0009899465743758704",
            "extra": "mean: 12.607609258063876 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1545326.0116659591,
            "unit": "iter/sec",
            "range": "stddev: 1.1407488176468186e-7",
            "extra": "mean: 647.1126431903756 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 227.07113084017038,
            "unit": "iter/sec",
            "range": "stddev: 0.00032840989888216065",
            "extra": "mean: 4.403906371981186 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 235.06584224468995,
            "unit": "iter/sec",
            "range": "stddev: 0.000028840478846247354",
            "extra": "mean: 4.254127228570529 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 160.45194991745396,
            "unit": "iter/sec",
            "range": "stddev: 0.00003079396375467951",
            "extra": "mean: 6.232395433738634 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7349149928347468,
            "unit": "iter/sec",
            "range": "stddev: 0.004939533530540443",
            "extra": "mean: 1.3607015910000086 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 232.41009651338734,
            "unit": "iter/sec",
            "range": "stddev: 0.0003060846867225243",
            "extra": "mean: 4.302739059111392 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5950849045855623,
            "unit": "iter/sec",
            "range": "stddev: 0.0039332326156223995",
            "extra": "mean: 1.680432476600015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8922631.161340043,
            "unit": "iter/sec",
            "range": "stddev: 4.521807605617928e-9",
            "extra": "mean: 112.07456432062803 nsec\nrounds: 89286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 82.13684261019351,
            "unit": "iter/sec",
            "range": "stddev: 0.0010646280507832075",
            "extra": "mean: 12.174804487504076 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 91.51939782680473,
            "unit": "iter/sec",
            "range": "stddev: 0.00007020947723426009",
            "extra": "mean: 10.926645320508372 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.103435154067894,
            "unit": "iter/sec",
            "range": "stddev: 0.0011874998371806094",
            "extra": "mean: 475.41280179998466 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 223.44548902433368,
            "unit": "iter/sec",
            "range": "stddev: 0.0004527913351043872",
            "extra": "mean: 4.4753644585373475 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 84.56080789100832,
            "unit": "iter/sec",
            "range": "stddev: 0.00015321730662021764",
            "extra": "mean: 11.825809437498691 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 62.67412304698236,
            "unit": "iter/sec",
            "range": "stddev: 0.00010829338394615552",
            "extra": "mean: 15.955548340905713 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 78.13217014865317,
            "unit": "iter/sec",
            "range": "stddev: 0.0010751658725993802",
            "extra": "mean: 12.798825350651517 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1313276.0793628928,
            "unit": "iter/sec",
            "range": "stddev: 1.4060887716965968e-7",
            "extra": "mean: 761.4545149448912 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1717.7895777738943,
            "unit": "iter/sec",
            "range": "stddev: 0.000174764250760836",
            "extra": "mean: 582.1434784206299 usec\nrounds: 1089"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1747.2176321748534,
            "unit": "iter/sec",
            "range": "stddev: 0.00011058664582175625",
            "extra": "mean: 572.3385464896251 usec\nrounds: 1495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 82.60443057869101,
            "unit": "iter/sec",
            "range": "stddev: 0.0010084222654465978",
            "extra": "mean: 12.10588818292713 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9935.83984182119,
            "unit": "iter/sec",
            "range": "stddev: 0.00001731458787820254",
            "extra": "mean: 100.64574468993304 usec\nrounds: 4473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6997454402780361,
            "unit": "iter/sec",
            "range": "stddev: 0.0037146120438185386",
            "extra": "mean: 1.4290911272000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 235.91680394801088,
            "unit": "iter/sec",
            "range": "stddev: 0.00030242233771763375",
            "extra": "mean: 4.2387824150939695 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.19223735891178,
            "unit": "iter/sec",
            "range": "stddev: 0.001076641368540717",
            "extra": "mean: 29.24640436667308 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1748.5503670113776,
            "unit": "iter/sec",
            "range": "stddev: 0.00012890358006462934",
            "extra": "mean: 571.9023134055899 usec\nrounds: 1104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 613.2961200516511,
            "unit": "iter/sec",
            "range": "stddev: 0.00001249203293320698",
            "extra": "mean: 1.6305337133321194 msec\nrounds: 450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.68689763359532,
            "unit": "iter/sec",
            "range": "stddev: 0.0011688162264271136",
            "extra": "mean: 30.59329799999766 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.992587148538608,
            "unit": "iter/sec",
            "range": "stddev: 0.00115107960117084",
            "extra": "mean: 50.018538999996146 msec\nrounds: 21"
          }
        ]
      }
    ]
  }
}