window.BENCHMARK_DATA = {
  "lastUpdate": 1680727300689,
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
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "f3bf1fa24d9348a47b4455b97040e7dcafcee75b",
          "message": "feat(api): replace `suffixes` in `join` with `lname`/`rname`\n\nBREAKING CHANGE: the `suffixes` argument in all join methods has been removed in favor of `lname`/`rname` args. The default renaming scheme for duplicate columns has also changed. To get the exact same behavior as before, pass in `lname=\"{name}_x\", rname=\"{name}_y\"`.",
          "timestamp": "2023-04-05T15:33:32-05:00",
          "tree_id": "c8cc18ae491ca413916d4a442483f5b4b11977ad",
          "url": "https://github.com/ibis-project/ibis/commit/f3bf1fa24d9348a47b4455b97040e7dcafcee75b"
        },
        "date": 1680727203478,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.4327333617054,
            "unit": "iter/sec",
            "range": "stddev: 0.00028527553803295937",
            "extra": "mean: 11.843747799991888 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.6258438066882,
            "unit": "iter/sec",
            "range": "stddev: 0.0006008494473378343",
            "extra": "mean: 7.060858195944429 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 112.37066665455893,
            "unit": "iter/sec",
            "range": "stddev: 0.0007480636518066993",
            "extra": "mean: 8.89911958139504 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 233.08412593681294,
            "unit": "iter/sec",
            "range": "stddev: 0.0003835854733023493",
            "extra": "mean: 4.290296458331492 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 166.39752891280634,
            "unit": "iter/sec",
            "range": "stddev: 0.0004004761771307355",
            "extra": "mean: 6.0097046304335935 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 223.19770487776483,
            "unit": "iter/sec",
            "range": "stddev: 0.006577351827974018",
            "extra": "mean: 4.480332808743057 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5111316.079942184,
            "unit": "iter/sec",
            "range": "stddev: 1.7118788321443752e-7",
            "extra": "mean: 195.64432806728217 nsec\nrounds: 54946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4076.552215199194,
            "unit": "iter/sec",
            "range": "stddev: 0.00008270452560095482",
            "extra": "mean: 245.30533333328998 usec\nrounds: 1521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 250.85098944856767,
            "unit": "iter/sec",
            "range": "stddev: 0.0005478553565610935",
            "extra": "mean: 3.9864303593071186 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0840536647736227,
            "unit": "iter/sec",
            "range": "stddev: 0.01953161884306751",
            "extra": "mean: 479.83409300001085 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 90.29453492755795,
            "unit": "iter/sec",
            "range": "stddev: 0.0009653964246898908",
            "extra": "mean: 11.074867385964014 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.18122254056837,
            "unit": "iter/sec",
            "range": "stddev: 0.0006883776779313226",
            "extra": "mean: 11.340282785713743 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4015.545377718846,
            "unit": "iter/sec",
            "range": "stddev: 0.00014626425111061034",
            "extra": "mean: 249.0321751931193 usec\nrounds: 2072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9172.821490614117,
            "unit": "iter/sec",
            "range": "stddev: 0.000026774294121387254",
            "extra": "mean: 109.01771074725782 usec\nrounds: 4643"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 67.63988072422653,
            "unit": "iter/sec",
            "range": "stddev: 0.0006253461256206841",
            "extra": "mean: 14.784177459997068 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.8028233515654,
            "unit": "iter/sec",
            "range": "stddev: 0.0007069696915822321",
            "extra": "mean: 6.905942694032349 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 261.7817804088637,
            "unit": "iter/sec",
            "range": "stddev: 0.0002900056029872503",
            "extra": "mean: 3.81997554771822 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 110.31983873685242,
            "unit": "iter/sec",
            "range": "stddev: 0.0010237699313413976",
            "extra": "mean: 9.064552771739589 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3882.983395443413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000750591583908132",
            "extra": "mean: 257.53393670791274 usec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 105.52568703546223,
            "unit": "iter/sec",
            "range": "stddev: 0.0005381787089016487",
            "extra": "mean: 9.476365689653809 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4301.3629907401255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000642973985135224",
            "extra": "mean: 232.48444787216908 usec\nrounds: 940"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2534041.558167799,
            "unit": "iter/sec",
            "range": "stddev: 2.6574808102895776e-7",
            "extra": "mean: 394.6265193547102 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 211.7530970924591,
            "unit": "iter/sec",
            "range": "stddev: 0.0005449114981781287",
            "extra": "mean: 4.72248110526272 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.35302999031258,
            "unit": "iter/sec",
            "range": "stddev: 0.0015534458569628022",
            "extra": "mean: 11.71604570000032 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 871.0465818694101,
            "unit": "iter/sec",
            "range": "stddev: 0.0003632432509598846",
            "extra": "mean: 1.148044227271789 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 239.49367702055753,
            "unit": "iter/sec",
            "range": "stddev: 0.0006932282630735523",
            "extra": "mean: 4.175475580151382 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 107.21768051163079,
            "unit": "iter/sec",
            "range": "stddev: 0.001063251157165616",
            "extra": "mean: 9.326819935183373 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 788421.5727576385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020412651129236737",
            "extra": "mean: 1.2683569736712428 usec\nrounds: 16892"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.79352504527621,
            "unit": "iter/sec",
            "range": "stddev: 0.0021787328932636853",
            "extra": "mean: 28.740979785713503 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 131190.51120344782,
            "unit": "iter/sec",
            "range": "stddev: 0.000009510237964927234",
            "extra": "mean: 7.622502502861799 usec\nrounds: 20577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.613387268893444,
            "unit": "iter/sec",
            "range": "stddev: 0.032901640819434905",
            "extra": "mean: 34.94867596773951 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58775.351884648415,
            "unit": "iter/sec",
            "range": "stddev: 0.000012812700208929428",
            "extra": "mean: 17.013934718121032 usec\nrounds: 12469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1569.0773253869536,
            "unit": "iter/sec",
            "range": "stddev: 0.00015286477705218188",
            "extra": "mean: 637.3172206496502 usec\nrounds: 1201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.829122940842602,
            "unit": "iter/sec",
            "range": "stddev: 0.0038576764590761425",
            "extra": "mean: 72.31116566666884 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4617.592202487362,
            "unit": "iter/sec",
            "range": "stddev: 0.00007367871669307432",
            "extra": "mean: 216.5630822620779 usec\nrounds: 2334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 258.8080709822941,
            "unit": "iter/sec",
            "range": "stddev: 0.0004243283318040442",
            "extra": "mean: 3.8638671359998398 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.588808575387134,
            "unit": "iter/sec",
            "range": "stddev: 0.0013402107842302234",
            "extra": "mean: 21.01334389189139 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4474.224411538891,
            "unit": "iter/sec",
            "range": "stddev: 0.00007401638550397098",
            "extra": "mean: 223.5024236649887 usec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11667858.555858152,
            "unit": "iter/sec",
            "range": "stddev: 9.013956391477846e-8",
            "extra": "mean: 85.7055298718461 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4039.752607402418,
            "unit": "iter/sec",
            "range": "stddev: 0.0001541783587324659",
            "extra": "mean: 247.53991077760705 usec\nrounds: 2264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.477830722461253,
            "unit": "iter/sec",
            "range": "stddev: 0.0034920411812011287",
            "extra": "mean: 44.48827879999726 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10007398041055131,
            "unit": "iter/sec",
            "range": "stddev: 0.16992744328684",
            "extra": "mean: 9.992607427999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4207.018677078614,
            "unit": "iter/sec",
            "range": "stddev: 0.00009101194968617071",
            "extra": "mean: 237.6980177074963 usec\nrounds: 2033"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5596738937646132,
            "unit": "iter/sec",
            "range": "stddev: 0.03789715454539848",
            "extra": "mean: 1.7867547711999918 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 105.95417921566427,
            "unit": "iter/sec",
            "range": "stddev: 0.0010247634575988689",
            "extra": "mean: 9.438042061224895 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 110.87938833511562,
            "unit": "iter/sec",
            "range": "stddev: 0.0012503270092119806",
            "extra": "mean: 9.018808770640547 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6681195.005520412,
            "unit": "iter/sec",
            "range": "stddev: 9.347427333278549e-8",
            "extra": "mean: 149.67382319694065 nsec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6069636227750287,
            "unit": "iter/sec",
            "range": "stddev: 0.09874375027833836",
            "extra": "mean: 1.6475451945999908 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 41.98382260874323,
            "unit": "iter/sec",
            "range": "stddev: 0.0012105040938922163",
            "extra": "mean: 23.8186982000002 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 267.02476752976213,
            "unit": "iter/sec",
            "range": "stddev: 0.0007839132502489995",
            "extra": "mean: 3.744970960001085 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 481.71069741148204,
            "unit": "iter/sec",
            "range": "stddev: 0.00027761434243187623",
            "extra": "mean: 2.0759347994005415 msec\nrounds: 334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2443242.006196671,
            "unit": "iter/sec",
            "range": "stddev: 5.554336873630569e-7",
            "extra": "mean: 409.29224262841757 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.291492985373,
            "unit": "iter/sec",
            "range": "stddev: 0.00121816484333667",
            "extra": "mean: 10.835234837499996 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 321.1073887014257,
            "unit": "iter/sec",
            "range": "stddev: 0.0002884147329282188",
            "extra": "mean: 3.114222952153328 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 258.75629834147645,
            "unit": "iter/sec",
            "range": "stddev: 0.000492815120415536",
            "extra": "mean: 3.86464022870012 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 92.26299689654152,
            "unit": "iter/sec",
            "range": "stddev: 0.0012673818499413486",
            "extra": "mean: 10.838581377552076 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9676.222461528723,
            "unit": "iter/sec",
            "range": "stddev: 0.000045257458560134746",
            "extra": "mean: 103.34611507495379 usec\nrounds: 5718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 601.6914659395034,
            "unit": "iter/sec",
            "range": "stddev: 0.00023895623367422122",
            "extra": "mean: 1.6619813585664922 msec\nrounds: 502"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 99.90222083888263,
            "unit": "iter/sec",
            "range": "stddev: 0.0015169186105452757",
            "extra": "mean: 10.009787486233673 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1927465.2357969505,
            "unit": "iter/sec",
            "range": "stddev: 9.561547735216408e-7",
            "extra": "mean: 518.8161018045699 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 143.83378192607086,
            "unit": "iter/sec",
            "range": "stddev: 0.004067585258664394",
            "extra": "mean: 6.952469625765595 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 61.59416704470029,
            "unit": "iter/sec",
            "range": "stddev: 0.001203919007968436",
            "extra": "mean: 16.23530356818166 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.75148516687246,
            "unit": "iter/sec",
            "range": "stddev: 0.0005892469661992511",
            "extra": "mean: 9.19527672165177 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.43926865393013,
            "unit": "iter/sec",
            "range": "stddev: 0.0011271142272375977",
            "extra": "mean: 11.43650919540317 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.75500145733169,
            "unit": "iter/sec",
            "range": "stddev: 0.0011952772552551183",
            "extra": "mean: 10.024560025972544 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 154.65938725452384,
            "unit": "iter/sec",
            "range": "stddev: 0.0004989702615741356",
            "extra": "mean: 6.465821556335887 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 263.97217460113495,
            "unit": "iter/sec",
            "range": "stddev: 0.000496952402449369",
            "extra": "mean: 3.78827806950112 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 127.97595386811601,
            "unit": "iter/sec",
            "range": "stddev: 0.0006301915310878451",
            "extra": "mean: 7.813967935183646 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 715.7834543920571,
            "unit": "iter/sec",
            "range": "stddev: 0.0001712833728796654",
            "extra": "mean: 1.397070571922257 msec\nrounds: 577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 109.9989804840258,
            "unit": "iter/sec",
            "range": "stddev: 0.0010887074339494972",
            "extra": "mean: 9.090993349208555 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5853051.026382795,
            "unit": "iter/sec",
            "range": "stddev: 1.7523558082258126e-7",
            "extra": "mean: 170.85106476781425 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.635929195044129,
            "unit": "iter/sec",
            "range": "stddev: 0.04616488659424408",
            "extra": "mean: 1.5725021083999877 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.483100928750524,
            "unit": "iter/sec",
            "range": "stddev: 0.0038491310544857818",
            "extra": "mean: 105.45073889999799 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2470758.6343819425,
            "unit": "iter/sec",
            "range": "stddev: 4.307538330089261e-7",
            "extra": "mean: 404.7339898298226 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 89.80810452840186,
            "unit": "iter/sec",
            "range": "stddev: 0.0012847900449034653",
            "extra": "mean: 11.134852530862062 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4458.1425262413395,
            "unit": "iter/sec",
            "range": "stddev: 0.0001334639629686951",
            "extra": "mean: 224.30866534971463 usec\nrounds: 3544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.125470790295235,
            "unit": "iter/sec",
            "range": "stddev: 0.007512437690561428",
            "extra": "mean: 195.1040286666815 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.56558934751497,
            "unit": "iter/sec",
            "range": "stddev: 0.0019448462791022063",
            "extra": "mean: 28.117065352942664 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 111.06709205683626,
            "unit": "iter/sec",
            "range": "stddev: 0.001027106014131368",
            "extra": "mean: 9.003566956522738 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 503918.7842364725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016034143448032188",
            "extra": "mean: 1.9844467626170745 usec\nrounds: 2301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7115.160009479923,
            "unit": "iter/sec",
            "range": "stddev: 0.000044350517456709914",
            "extra": "mean: 140.5449770163488 usec\nrounds: 4525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12248.670338285801,
            "unit": "iter/sec",
            "range": "stddev: 0.00008432916534758747",
            "extra": "mean: 81.64151474256673 usec\nrounds: 7190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.344333652100678,
            "unit": "iter/sec",
            "range": "stddev: 0.017896432126483865",
            "extra": "mean: 743.8629527999865 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.25557210865034,
            "unit": "iter/sec",
            "range": "stddev: 0.0009761524183605044",
            "extra": "mean: 12.778642760564017 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.942812650801,
            "unit": "iter/sec",
            "range": "stddev: 0.0010090299874222599",
            "extra": "mean: 11.118175766666935 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.955798212273315,
            "unit": "iter/sec",
            "range": "stddev: 0.0016459340191508664",
            "extra": "mean: 16.961860076924914 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 191.92816819601254,
            "unit": "iter/sec",
            "range": "stddev: 0.0037413482302708543",
            "extra": "mean: 5.210282625001241 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5626693261410948,
            "unit": "iter/sec",
            "range": "stddev: 0.03523111895291504",
            "extra": "mean: 1.7772427845999914 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}