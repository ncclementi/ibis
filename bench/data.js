window.BENCHMARK_DATA = {
  "lastUpdate": 1679835924654,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "togurg14@freeuni.edu.ge",
            "name": "tokoko",
            "username": "tokoko"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "e2c159cb497eb5268dc253dc50348b86020bd21c",
          "message": "feat(pyspark): add ArrayMap operation",
          "timestamp": "2023-03-26T08:59:43-04:00",
          "tree_id": "ec9c2e1554673c6f9803a4f2e3a0b55c9d1009f1",
          "url": "https://github.com/ibis-project/ibis/commit/e2c159cb497eb5268dc253dc50348b86020bd21c"
        },
        "date": 1679835845943,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.4567170651126,
            "unit": "iter/sec",
            "range": "stddev: 0.0005728133197864122",
            "extra": "mean: 9.220268020833089 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12010.213001577376,
            "unit": "iter/sec",
            "range": "stddev: 0.000016310122099322235",
            "extra": "mean: 83.26247002186088 usec\nrounds: 4153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.536774073822125,
            "unit": "iter/sec",
            "range": "stddev: 0.0002938476493922908",
            "extra": "mean: 94.90570766667854 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5643992.228093487,
            "unit": "iter/sec",
            "range": "stddev: 1.2600474743304427e-8",
            "extra": "mean: 177.1795494369824 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.12064240739187,
            "unit": "iter/sec",
            "range": "stddev: 0.00019812895161048247",
            "extra": "mean: 5.047429625953454 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13812.347721647906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015777672065210062",
            "extra": "mean: 72.39898822071454 usec\nrounds: 6452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 106.12221646842177,
            "unit": "iter/sec",
            "range": "stddev: 0.011663225612177263",
            "extra": "mean: 9.423097568807043 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.06568207388273,
            "unit": "iter/sec",
            "range": "stddev: 0.00013204089588839409",
            "extra": "mean: 9.003681257139208 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5568.234014659536,
            "unit": "iter/sec",
            "range": "stddev: 0.000048780167652792796",
            "extra": "mean: 179.5901532455877 usec\nrounds: 770"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2006136.0992625917,
            "unit": "iter/sec",
            "range": "stddev: 7.385946823593373e-8",
            "extra": "mean: 498.4706672531222 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5154.14645348585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000674706256408836",
            "extra": "mean: 194.01854584936765 usec\nrounds: 2072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1854405.5292592843,
            "unit": "iter/sec",
            "range": "stddev: 1.1210640260764734e-7",
            "extra": "mean: 539.2563731189023 nsec\nrounds: 99991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 103.91786626079275,
            "unit": "iter/sec",
            "range": "stddev: 0.012769888724560186",
            "extra": "mean: 9.622984343138796 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.29401700803571,
            "unit": "iter/sec",
            "range": "stddev: 0.0007150949008857835",
            "extra": "mean: 9.497215781250734 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 305.02954867649447,
            "unit": "iter/sec",
            "range": "stddev: 0.00030142989232282975",
            "extra": "mean: 3.2783709130441365 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.577256666408639,
            "unit": "iter/sec",
            "range": "stddev: 0.0004274606740824285",
            "extra": "mean: 179.29961983333462 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 104.59993642200001,
            "unit": "iter/sec",
            "range": "stddev: 0.01322596181538807",
            "extra": "mean: 9.560235256411442 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16794072550821929,
            "unit": "iter/sec",
            "range": "stddev: 0.07321573781328088",
            "extra": "mean: 5.954481838600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146921.74120143914,
            "unit": "iter/sec",
            "range": "stddev: 3.7894068465241863e-7",
            "extra": "mean: 6.8063446010276705 usec\nrounds: 33784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 104.79493157290113,
            "unit": "iter/sec",
            "range": "stddev: 0.012520868803219794",
            "extra": "mean: 9.542446232758353 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 487654.3986668264,
            "unit": "iter/sec",
            "range": "stddev: 4.221629730970481e-7",
            "extra": "mean: 2.050632584744133 usec\nrounds: 2093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.8664800121538,
            "unit": "iter/sec",
            "range": "stddev: 0.0002491719451666101",
            "extra": "mean: 10.11465159755934 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 527.4696415192886,
            "unit": "iter/sec",
            "range": "stddev: 0.00006468193490550636",
            "extra": "mean: 1.8958437060371214 msec\nrounds: 381"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 61.11718283440952,
            "unit": "iter/sec",
            "range": "stddev: 0.0004769076178666111",
            "extra": "mean: 16.36201070833702 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.92613108637639,
            "unit": "iter/sec",
            "range": "stddev: 0.00005665599186802864",
            "extra": "mean: 10.424688129030798 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 724.366315079466,
            "unit": "iter/sec",
            "range": "stddev: 0.000031444084817709604",
            "extra": "mean: 1.380516983165204 msec\nrounds: 594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.28591183707698,
            "unit": "iter/sec",
            "range": "stddev: 0.0007397491674213786",
            "extra": "mean: 8.749984874999939 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2022410.0014083544,
            "unit": "iter/sec",
            "range": "stddev: 8.934988682461288e-8",
            "extra": "mean: 494.45958005727107 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.66966203526209,
            "unit": "iter/sec",
            "range": "stddev: 0.0007650218671460643",
            "extra": "mean: 9.374736742574727 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72026.27000842284,
            "unit": "iter/sec",
            "range": "stddev: 4.991248556524519e-7",
            "extra": "mean: 13.883823220098149 usec\nrounds: 13316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5141.418385170663,
            "unit": "iter/sec",
            "range": "stddev: 0.0000428603038697915",
            "extra": "mean: 194.49885714111286 usec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.1906398439412,
            "unit": "iter/sec",
            "range": "stddev: 0.0007742195387735242",
            "extra": "mean: 22.629226540540937 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.687665680354913,
            "unit": "iter/sec",
            "range": "stddev: 0.001955601530499432",
            "extra": "mean: 592.534416999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4993.688436978111,
            "unit": "iter/sec",
            "range": "stddev: 0.00004722939726467887",
            "extra": "mean: 200.25278161028837 usec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4885947367255676,
            "unit": "iter/sec",
            "range": "stddev: 0.0021711682503189685",
            "extra": "mean: 401.8332053999984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4984.99941774265,
            "unit": "iter/sec",
            "range": "stddev: 0.000054581788352085454",
            "extra": "mean: 200.60182884691864 usec\nrounds: 1969"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.97252741975268,
            "unit": "iter/sec",
            "range": "stddev: 0.0001747977625838071",
            "extra": "mean: 6.580136666661929 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8629963944128073,
            "unit": "iter/sec",
            "range": "stddev: 0.005922766977176485",
            "extra": "mean: 1.1587533927999913 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.775284992897554,
            "unit": "iter/sec",
            "range": "stddev: 0.0005374932029301036",
            "extra": "mean: 18.9482633800003 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.76611811474932,
            "unit": "iter/sec",
            "range": "stddev: 0.00033832964797007555",
            "extra": "mean: 11.26555966666566 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.3425298255857,
            "unit": "iter/sec",
            "range": "stddev: 0.000686084140257744",
            "extra": "mean: 13.634653759259171 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 749397.6697050004,
            "unit": "iter/sec",
            "range": "stddev: 2.3075976238334138e-7",
            "extra": "mean: 1.3344050034124726 usec\nrounds: 27101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.1918481730451,
            "unit": "iter/sec",
            "range": "stddev: 0.003247363044052733",
            "extra": "mean: 6.16553798026325 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5016.045498582863,
            "unit": "iter/sec",
            "range": "stddev: 0.0008056166837719248",
            "extra": "mean: 199.3602331323591 usec\nrounds: 1986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12584.174161723737,
            "unit": "iter/sec",
            "range": "stddev: 0.000003272127188710524",
            "extra": "mean: 79.4648887681179 usec\nrounds: 4594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6955843.102236194,
            "unit": "iter/sec",
            "range": "stddev: 6.035494913941649e-9",
            "extra": "mean: 143.7640247634014 nsec\nrounds: 62108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8171862462994153,
            "unit": "iter/sec",
            "range": "stddev: 0.0038732360759505037",
            "extra": "mean: 1.2237112464000064 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.17424033229554,
            "unit": "iter/sec",
            "range": "stddev: 0.00016789737323308603",
            "extra": "mean: 6.166207394904374 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 223.4723101963738,
            "unit": "iter/sec",
            "range": "stddev: 0.004059234822512309",
            "extra": "mean: 4.474827324786956 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1749.4186917843253,
            "unit": "iter/sec",
            "range": "stddev: 0.000009720098554993424",
            "extra": "mean: 571.6184494290767 usec\nrounds: 1226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 318.4072131842422,
            "unit": "iter/sec",
            "range": "stddev: 0.0002122340625115565",
            "extra": "mean: 3.1406323682163664 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 671.1762389090961,
            "unit": "iter/sec",
            "range": "stddev: 0.000047021482330133606",
            "extra": "mean: 1.4899216361195404 msec\nrounds: 371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5595.790690288606,
            "unit": "iter/sec",
            "range": "stddev: 0.00004963353192707318",
            "extra": "mean: 178.70575497676887 usec\nrounds: 2763"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.89587071489733,
            "unit": "iter/sec",
            "range": "stddev: 0.00007745476235831268",
            "extra": "mean: 8.41072102830147 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.37481500053931,
            "unit": "iter/sec",
            "range": "stddev: 0.0008371632282174944",
            "extra": "mean: 8.447742874997896 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 338.15648999231854,
            "unit": "iter/sec",
            "range": "stddev: 0.000020730739705962413",
            "extra": "mean: 2.9572107281534525 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.53172976535357,
            "unit": "iter/sec",
            "range": "stddev: 0.0007955571668556166",
            "extra": "mean: 8.436559577588284 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 279.7622393546903,
            "unit": "iter/sec",
            "range": "stddev: 0.0003361114790184778",
            "extra": "mean: 3.5744638100790023 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 298.6177142293954,
            "unit": "iter/sec",
            "range": "stddev: 0.000220460977103729",
            "extra": "mean: 3.34876315887881 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.75710535536659,
            "unit": "iter/sec",
            "range": "stddev: 0.0006276036158567806",
            "extra": "mean: 9.28013049999953 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 315.7652964523894,
            "unit": "iter/sec",
            "range": "stddev: 0.00024100621521010006",
            "extra": "mean: 3.1669091291378764 msec\nrounds: 302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 141.02630541238446,
            "unit": "iter/sec",
            "range": "stddev: 0.00003455312496782462",
            "extra": "mean: 7.090875685042113 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8631043350608065,
            "unit": "iter/sec",
            "range": "stddev: 0.006228010420880327",
            "extra": "mean: 1.1586084779999966 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6186565.007864456,
            "unit": "iter/sec",
            "range": "stddev: 9.21702636985583e-9",
            "extra": "mean: 161.6405870992788 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.696739128347584,
            "unit": "iter/sec",
            "range": "stddev: 0.0012569574942656394",
            "extra": "mean: 42.19989909091479 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.13368785705735,
            "unit": "iter/sec",
            "range": "stddev: 0.000525036969114015",
            "extra": "mean: 22.658428256411646 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8247.751511774848,
            "unit": "iter/sec",
            "range": "stddev: 0.00002986935890869662",
            "extra": "mean: 121.2451658579137 usec\nrounds: 3503"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5405.226908216886,
            "unit": "iter/sec",
            "range": "stddev: 0.00002311026905099036",
            "extra": "mean: 185.00610926801718 usec\nrounds: 2352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.83232846550344,
            "unit": "iter/sec",
            "range": "stddev: 0.0007150564533268147",
            "extra": "mean: 8.86270817592613 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.759589972507584,
            "unit": "iter/sec",
            "range": "stddev: 0.0014581166152376347",
            "extra": "mean: 25.151164805559272 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6673097902139146,
            "unit": "iter/sec",
            "range": "stddev: 0.0972795740481888",
            "extra": "mean: 1.4985543666000125 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1966314.6096461785,
            "unit": "iter/sec",
            "range": "stddev: 8.357760955215964e-8",
            "extra": "mean: 508.5656156417113 nsec\nrounds: 147038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 304.17872964114093,
            "unit": "iter/sec",
            "range": "stddev: 0.00020935467697927836",
            "extra": "mean: 3.287540851984502 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11963315.471521787,
            "unit": "iter/sec",
            "range": "stddev: 3.286529216762758e-9",
            "extra": "mean: 83.58886818457098 nsec\nrounds: 117634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 287.74556590485435,
            "unit": "iter/sec",
            "range": "stddev: 0.000232468301111721",
            "extra": "mean: 3.4752924753344727 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.01246166008826,
            "unit": "iter/sec",
            "range": "stddev: 0.0006129331440037665",
            "extra": "mean: 10.524935177214426 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5365.049020338345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000511403377682683",
            "extra": "mean: 186.39158677005625 usec\nrounds: 3492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.658949412128244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005458334952135932",
            "extra": "mean: 15.959412173074838 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.8513100132427,
            "unit": "iter/sec",
            "range": "stddev: 0.00022358382084264783",
            "extra": "mean: 3.2378039774450778 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.71940211014976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000542529332345972",
            "extra": "mean: 6.222024141893245 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.98794701567103,
            "unit": "iter/sec",
            "range": "stddev: 0.0002319870246725406",
            "extra": "mean: 20.838565977274214 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.58389214310957,
            "unit": "iter/sec",
            "range": "stddev: 0.0006334296096539932",
            "extra": "mean: 9.65401067009935 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.701814210480741,
            "unit": "iter/sec",
            "range": "stddev: 0.00007275755441980623",
            "extra": "mean: 63.68690818749556 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.62040598166146,
            "unit": "iter/sec",
            "range": "stddev: 0.00003716742724559941",
            "extra": "mean: 3.417396666665379 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1153.9115075050827,
            "unit": "iter/sec",
            "range": "stddev: 0.000010931884458614069",
            "extra": "mean: 866.6175815874643 usec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 313.31392524740664,
            "unit": "iter/sec",
            "range": "stddev: 0.00020831496200472588",
            "extra": "mean: 3.1916870570318743 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.62928734340338,
            "unit": "iter/sec",
            "range": "stddev: 0.0007833482691460607",
            "extra": "mean: 9.74380730769321 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.38936375771324,
            "unit": "iter/sec",
            "range": "stddev: 0.020524348937652048",
            "extra": "mean: 11.711060441174324 msec\nrounds: 102"
          }
        ]
      }
    ]
  }
}