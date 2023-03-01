window.BENCHMARK_DATA = {
  "lastUpdate": 1677677227832,
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
          "id": "6071bb5f8238f3ebb159fc197efcd088cdc452a0",
          "message": "perf(duckdb): faster `to_parquet`/`to_csv` implementations",
          "timestamp": "2023-03-01T14:14:20+01:00",
          "tree_id": "419fa701974308ab7fbc574b716105858cad6f32",
          "url": "https://github.com/ibis-project/ibis/commit/6071bb5f8238f3ebb159fc197efcd088cdc452a0"
        },
        "date": 1677677143657,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.51876228037661,
            "unit": "iter/sec",
            "range": "stddev: 0.0018597413386381343",
            "extra": "mean: 397.0203968000021 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 743.5102814411924,
            "unit": "iter/sec",
            "range": "stddev: 0.00007012870561511123",
            "extra": "mean: 1.344971313727683 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 93.80518588398353,
            "unit": "iter/sec",
            "range": "stddev: 0.007268760488054437",
            "extra": "mean: 10.660391433334837 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.2659926894663,
            "unit": "iter/sec",
            "range": "stddev: 0.00020205131552297967",
            "extra": "mean: 9.4997441666654 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 126.92207772552945,
            "unit": "iter/sec",
            "range": "stddev: 0.006656390907864566",
            "extra": "mean: 7.878849904762135 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 772550.7468046795,
            "unit": "iter/sec",
            "range": "stddev: 1.8317594636831305e-7",
            "extra": "mean: 1.2944133497198282 usec\nrounds: 23641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7651.616089603648,
            "unit": "iter/sec",
            "range": "stddev: 0.000014575567498607653",
            "extra": "mean: 130.6913452386501 usec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 143.0047685655885,
            "unit": "iter/sec",
            "range": "stddev: 0.0005133887232354166",
            "extra": "mean: 6.992773807688479 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.5023059038106,
            "unit": "iter/sec",
            "range": "stddev: 0.00017164910818651398",
            "extra": "mean: 7.434816773439934 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5321.271783944022,
            "unit": "iter/sec",
            "range": "stddev: 0.000055755911612768336",
            "extra": "mean: 187.92500000043592 usec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5632.908523107192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000448088129594227",
            "extra": "mean: 177.5281803171172 usec\nrounds: 3028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12142184.08023803,
            "unit": "iter/sec",
            "range": "stddev: 3.4050888690383335e-9",
            "extra": "mean: 82.35750614472981 nsec\nrounds: 98049"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9323147275821702,
            "unit": "iter/sec",
            "range": "stddev: 0.003098337888479496",
            "extra": "mean: 1.072599166799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 143.42004025941858,
            "unit": "iter/sec",
            "range": "stddev: 0.0006004323381615636",
            "extra": "mean: 6.972526281481983 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.61176635064547,
            "unit": "iter/sec",
            "range": "stddev: 0.00015258640367114032",
            "extra": "mean: 5.164975346534078 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.799455827953544,
            "unit": "iter/sec",
            "range": "stddev: 0.00038170385270634087",
            "extra": "mean: 17.92132172548958 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1709191.729565136,
            "unit": "iter/sec",
            "range": "stddev: 1.0743683406486162e-7",
            "extra": "mean: 585.071869177852 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.05110420068207,
            "unit": "iter/sec",
            "range": "stddev: 0.001008639151108816",
            "extra": "mean: 22.700906552633395 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 316.73247008315076,
            "unit": "iter/sec",
            "range": "stddev: 0.00020146592761301522",
            "extra": "mean: 3.1572386618191475 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11854.794469609878,
            "unit": "iter/sec",
            "range": "stddev: 0.000004397666204592474",
            "extra": "mean: 84.35405629034987 usec\nrounds: 2647"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.71834912931028,
            "unit": "iter/sec",
            "range": "stddev: 0.0006951255419869918",
            "extra": "mean: 9.831067929825933 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5382.899647477293,
            "unit": "iter/sec",
            "range": "stddev: 0.000041004729479639626",
            "extra": "mean: 185.77347999951144 usec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.48849181829544,
            "unit": "iter/sec",
            "range": "stddev: 0.0005047357235541529",
            "extra": "mean: 10.583299413044223 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.99901991221499,
            "unit": "iter/sec",
            "range": "stddev: 0.0002591195592129189",
            "extra": "mean: 10.416773014083232 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5884.597293251257,
            "unit": "iter/sec",
            "range": "stddev: 0.00004178853401544743",
            "extra": "mean: 169.93516296295226 usec\nrounds: 2700"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7314328.365208935,
            "unit": "iter/sec",
            "range": "stddev: 5.382016541600719e-9",
            "extra": "mean: 136.71795277286876 nsec\nrounds: 59881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5563.878619033493,
            "unit": "iter/sec",
            "range": "stddev: 0.000049000678300854346",
            "extra": "mean: 179.73073614134864 usec\nrounds: 2255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.0000333033988,
            "unit": "iter/sec",
            "range": "stddev: 0.00025153689778915423",
            "extra": "mean: 3.521126347656778 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71251.24876213784,
            "unit": "iter/sec",
            "range": "stddev: 5.281138352677911e-7",
            "extra": "mean: 14.034841737838978 usec\nrounds: 12454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 141.5452637570282,
            "unit": "iter/sec",
            "range": "stddev: 0.0006465353504746755",
            "extra": "mean: 7.064877859258971 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.67303476900672,
            "unit": "iter/sec",
            "range": "stddev: 0.051505006398666724",
            "extra": "mean: 1.4858073402000058 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.858105197113778,
            "unit": "iter/sec",
            "range": "stddev: 0.00231286525446775",
            "extra": "mean: 1.165358284000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.5460158785677,
            "unit": "iter/sec",
            "range": "stddev: 0.0006449064822222808",
            "extra": "mean: 9.847752187499262 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 328.7397891376275,
            "unit": "iter/sec",
            "range": "stddev: 0.000055938789998850535",
            "extra": "mean: 3.041919576036925 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.568442586766283,
            "unit": "iter/sec",
            "range": "stddev: 0.0038447345175385726",
            "extra": "mean: 179.58342649999773 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 83.93476546238139,
            "unit": "iter/sec",
            "range": "stddev: 0.01765442648617938",
            "extra": "mean: 11.914014347823354 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 307.1862238322742,
            "unit": "iter/sec",
            "range": "stddev: 0.0002178909588595994",
            "extra": "mean: 3.2553543174058706 msec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6409574.6353188185,
            "unit": "iter/sec",
            "range": "stddev: 8.453391914055101e-9",
            "extra": "mean: 156.01659343970786 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 132.64736166148145,
            "unit": "iter/sec",
            "range": "stddev: 0.0007928239029643524",
            "extra": "mean: 7.53878544943863 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9222614814957494,
            "unit": "iter/sec",
            "range": "stddev: 0.004604446751694249",
            "extra": "mean: 1.084291190800002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138980.40767262172,
            "unit": "iter/sec",
            "range": "stddev: 3.322894476132084e-7",
            "extra": "mean: 7.195258790401389 usec\nrounds: 41153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5298.034228340542,
            "unit": "iter/sec",
            "range": "stddev: 0.00005611686410420323",
            "extra": "mean: 188.74925243984723 usec\nrounds: 1537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.54574547103804,
            "unit": "iter/sec",
            "range": "stddev: 0.0005606146089724003",
            "extra": "mean: 24.663500162163828 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1839902.2245458348,
            "unit": "iter/sec",
            "range": "stddev: 1.150108019016164e-7",
            "extra": "mean: 543.5071422052561 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 295.8793937910892,
            "unit": "iter/sec",
            "range": "stddev: 0.00024360715930902047",
            "extra": "mean: 3.379755471264982 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.35586203085356,
            "unit": "iter/sec",
            "range": "stddev: 0.00007586275861497803",
            "extra": "mean: 13.44883876922919 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13352.601157721274,
            "unit": "iter/sec",
            "range": "stddev: 0.000001707016696538601",
            "extra": "mean: 74.89177488250971 usec\nrounds: 6601"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.033354446719299,
            "unit": "iter/sec",
            "range": "stddev: 0.045572873044191727",
            "extra": "mean: 110.70084827272292 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 132.5635839002566,
            "unit": "iter/sec",
            "range": "stddev: 0.0005939158214691724",
            "extra": "mean: 7.543549824003094 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.27303670916591,
            "unit": "iter/sec",
            "range": "stddev: 0.00019051140561359093",
            "extra": "mean: 20.715498095236335 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 312.3866689442143,
            "unit": "iter/sec",
            "range": "stddev: 0.0002123320450329468",
            "extra": "mean: 3.201160931033773 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.44421448622103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006792542255946193",
            "extra": "mean: 6.232695913668361 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18059688471367127,
            "unit": "iter/sec",
            "range": "stddev: 0.11612411674006813",
            "extra": "mean: 5.5371940750000075 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.0894001958335,
            "unit": "iter/sec",
            "range": "stddev: 0.000018098967705730027",
            "extra": "mean: 1.455414680702367 msec\nrounds: 570"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.7597289124983,
            "unit": "iter/sec",
            "range": "stddev: 0.000024148082086433584",
            "extra": "mean: 1.839047555066219 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.96697804395954,
            "unit": "iter/sec",
            "range": "stddev: 0.00011068102127353387",
            "extra": "mean: 10.207521146067014 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.8426749297923,
            "unit": "iter/sec",
            "range": "stddev: 0.0002079953971067715",
            "extra": "mean: 3.3350823068602513 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 308.915251648501,
            "unit": "iter/sec",
            "range": "stddev: 0.00022430474824869766",
            "extra": "mean: 3.2371337920791596 msec\nrounds: 303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 140.29886808296746,
            "unit": "iter/sec",
            "range": "stddev: 0.0006765877650067425",
            "extra": "mean: 7.127641253731554 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.65446316800183,
            "unit": "iter/sec",
            "range": "stddev: 0.000719707069174487",
            "extra": "mean: 9.464815493973916 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.873266459612992,
            "unit": "iter/sec",
            "range": "stddev: 0.00013345940690268464",
            "extra": "mean: 62.999005437497146 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.25368679001932,
            "unit": "iter/sec",
            "range": "stddev: 0.00012072928902882033",
            "extra": "mean: 6.70000199999663 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.45312336189947,
            "unit": "iter/sec",
            "range": "stddev: 0.0001917101335636612",
            "extra": "mean: 13.995189474575497 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5852.765075170148,
            "unit": "iter/sec",
            "range": "stddev: 0.00004378547560987907",
            "extra": "mean: 170.85941211657615 usec\nrounds: 2674"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11670.916589506023,
            "unit": "iter/sec",
            "range": "stddev: 0.00001210318261557282",
            "extra": "mean: 85.68307316146497 usec\nrounds: 5522"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 196.68126820527067,
            "unit": "iter/sec",
            "range": "stddev: 0.000054416461772224986",
            "extra": "mean: 5.08436827322228 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 305.84748458734657,
            "unit": "iter/sec",
            "range": "stddev: 0.00022871989994681008",
            "extra": "mean: 3.269603480143749 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.62845448426702,
            "unit": "iter/sec",
            "range": "stddev: 0.00006457903994807904",
            "extra": "mean: 8.42968075701116 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.688750775240386,
            "unit": "iter/sec",
            "range": "stddev: 0.0004894745723999364",
            "extra": "mean: 37.46896992000529 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.83616661379332,
            "unit": "iter/sec",
            "range": "stddev: 0.0006162811246460609",
            "extra": "mean: 15.18921971666695 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.60988084508803,
            "unit": "iter/sec",
            "range": "stddev: 0.0006744319617332696",
            "extra": "mean: 9.651589132653736 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1742.9138108128616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048581987329688104",
            "extra": "mean: 573.7518366060908 usec\nrounds: 1426"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 356.86039769286515,
            "unit": "iter/sec",
            "range": "stddev: 0.00003420749083327401",
            "extra": "mean: 2.802216234878095 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1165.7935952110251,
            "unit": "iter/sec",
            "range": "stddev: 0.00001193738804244534",
            "extra": "mean: 857.7847777753367 usec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8007417839568334,
            "unit": "iter/sec",
            "range": "stddev: 0.002015081491617298",
            "extra": "mean: 555.326704200013 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5788.85454658017,
            "unit": "iter/sec",
            "range": "stddev: 0.00004641930800191818",
            "extra": "mean: 172.74574649500585 usec\nrounds: 2497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 141.72766604416154,
            "unit": "iter/sec",
            "range": "stddev: 0.0006536968162677335",
            "extra": "mean: 7.055785422222403 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.75758593269524,
            "unit": "iter/sec",
            "range": "stddev: 0.013648104134705975",
            "extra": "mean: 8.213040627733674 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 298.3642203015426,
            "unit": "iter/sec",
            "range": "stddev: 0.00006384555349363777",
            "extra": "mean: 3.3516083094325024 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.25739274742989,
            "unit": "iter/sec",
            "range": "stddev: 0.000639684854305694",
            "extra": "mean: 9.411109892155599 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2533634.598938411,
            "unit": "iter/sec",
            "range": "stddev: 1.7175309801636166e-8",
            "extra": "mean: 394.68990533159956 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5826606.048620066,
            "unit": "iter/sec",
            "range": "stddev: 9.426018776902668e-9",
            "extra": "mean: 171.62649948490665 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2546975.140684475,
            "unit": "iter/sec",
            "range": "stddev: 1.5989850540383847e-8",
            "extra": "mean: 392.6225992653578 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.940261589609605,
            "unit": "iter/sec",
            "range": "stddev: 0.0007727584324798393",
            "extra": "mean: 27.07073412499265 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 499339.70418602735,
            "unit": "iter/sec",
            "range": "stddev: 9.574238005684864e-8",
            "extra": "mean: 2.002644675792601 usec\nrounds: 1925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5236.868868707416,
            "unit": "iter/sec",
            "range": "stddev: 0.000053113970731387544",
            "extra": "mean: 190.95379797944486 usec\nrounds: 2475"
          }
        ]
      }
    ]
  }
}