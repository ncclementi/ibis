window.BENCHMARK_DATA = {
  "lastUpdate": 1678447468482,
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
          "id": "d60a27eb7c83f662bb9bbda8eb3bdb8b10514e98",
          "message": "chore: remove unused zip argument",
          "timestamp": "2023-03-10T06:15:32-05:00",
          "tree_id": "14734184b62812753f21a09204300e14ab651f35",
          "url": "https://github.com/ibis-project/ibis/commit/d60a27eb7c83f662bb9bbda8eb3bdb8b10514e98"
        },
        "date": 1678447390990,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1796526.9184843677,
            "unit": "iter/sec",
            "range": "stddev: 1.1377576166807502e-7",
            "extra": "mean: 556.6295665882067 nsec\nrounds: 93450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.77140938821462,
            "unit": "iter/sec",
            "range": "stddev: 0.00008669186881022522",
            "extra": "mean: 8.212108285713763 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 693.5642018007538,
            "unit": "iter/sec",
            "range": "stddev: 0.00002720497284615039",
            "extra": "mean: 1.4418275877036666 msec\nrounds: 553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12650.853364532883,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019033047967624915",
            "extra": "mean: 79.04605098052402 usec\nrounds: 1785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 318.38082079248915,
            "unit": "iter/sec",
            "range": "stddev: 0.00018217404118960894",
            "extra": "mean: 3.1408927130436957 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 288.05652475583275,
            "unit": "iter/sec",
            "range": "stddev: 0.0002844671741345548",
            "extra": "mean: 3.4715408749988796 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.820879647392466,
            "unit": "iter/sec",
            "range": "stddev: 0.0001818890436161806",
            "extra": "mean: 15.668853289471343 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.19666344685632,
            "unit": "iter/sec",
            "range": "stddev: 0.000046050844769223244",
            "extra": "mean: 5.123038387755317 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.39332503807579,
            "unit": "iter/sec",
            "range": "stddev: 0.019283713942472046",
            "extra": "mean: 29.94610446428376 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1982969.613504505,
            "unit": "iter/sec",
            "range": "stddev: 1.2362780912797736e-7",
            "extra": "mean: 504.294162245229 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.63772920103038,
            "unit": "iter/sec",
            "range": "stddev: 0.0007911180964077204",
            "extra": "mean: 10.79473783116952 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6925235897437154,
            "unit": "iter/sec",
            "range": "stddev: 0.003492760373883733",
            "extra": "mean: 1.4439941321999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.2726195327466,
            "unit": "iter/sec",
            "range": "stddev: 0.003638846776172404",
            "extra": "mean: 6.239368913513527 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.07935406847129,
            "unit": "iter/sec",
            "range": "stddev: 0.0006811982862293839",
            "extra": "mean: 8.327826275862403 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.24304031107009,
            "unit": "iter/sec",
            "range": "stddev: 0.00031110908034793166",
            "extra": "mean: 9.153901220182952 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.57854495142494,
            "unit": "iter/sec",
            "range": "stddev: 0.0006470385865870654",
            "extra": "mean: 9.209922645835533 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5663.737009768046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000627598514524546",
            "extra": "mean: 176.56187041794763 usec\nrounds: 3110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.2359583867219,
            "unit": "iter/sec",
            "range": "stddev: 0.000057210804203431166",
            "extra": "mean: 10.284261260868647 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72600.7876238893,
            "unit": "iter/sec",
            "range": "stddev: 4.873102871300402e-7",
            "extra": "mean: 13.773955252118366 usec\nrounds: 13699"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.21339142034806,
            "unit": "iter/sec",
            "range": "stddev: 0.00024770623820777733",
            "extra": "mean: 13.29550471153814 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146350.98977416585,
            "unit": "iter/sec",
            "range": "stddev: 4.192604725421431e-7",
            "extra": "mean: 6.832888534222417 usec\nrounds: 35715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5480.791813527363,
            "unit": "iter/sec",
            "range": "stddev: 0.00005568333883073274",
            "extra": "mean: 182.45538856846557 usec\nrounds: 2257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.46204086331667,
            "unit": "iter/sec",
            "range": "stddev: 0.000657771372231914",
            "extra": "mean: 9.759711904762758 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.55776463221656,
            "unit": "iter/sec",
            "range": "stddev: 0.0002379355545573675",
            "extra": "mean: 3.2200128732387916 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5169.676987997259,
            "unit": "iter/sec",
            "range": "stddev: 0.000024565567622248557",
            "extra": "mean: 193.43568318132031 usec\nrounds: 2301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7009979.916292575,
            "unit": "iter/sec",
            "range": "stddev: 5.541102446305833e-9",
            "extra": "mean: 142.6537610579699 nsec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.31551190291759,
            "unit": "iter/sec",
            "range": "stddev: 0.0006934867828541564",
            "extra": "mean: 8.31148024210626 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 288.42513653710967,
            "unit": "iter/sec",
            "range": "stddev: 0.00004256108396001983",
            "extra": "mean: 3.4671041921179326 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.9559406517534,
            "unit": "iter/sec",
            "range": "stddev: 0.00004920944778727573",
            "extra": "mean: 1.8623501935488542 msec\nrounds: 465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.6082418513549,
            "unit": "iter/sec",
            "range": "stddev: 0.0007534452218224317",
            "extra": "mean: 8.431117301723805 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12035644.811010538,
            "unit": "iter/sec",
            "range": "stddev: 4.0728188426430114e-9",
            "extra": "mean: 83.0865330193061 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.85711927587813,
            "unit": "iter/sec",
            "range": "stddev: 0.0007198962347186101",
            "extra": "mean: 9.271525205880838 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5721.195844065102,
            "unit": "iter/sec",
            "range": "stddev: 0.000054156285846612555",
            "extra": "mean: 174.78863287600137 usec\nrounds: 3206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5596179.124759278,
            "unit": "iter/sec",
            "range": "stddev: 9.15839454166735e-9",
            "extra": "mean: 178.6933508926682 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 508492.0115582327,
            "unit": "iter/sec",
            "range": "stddev: 3.6335689141550846e-7",
            "extra": "mean: 1.9665992331631343 usec\nrounds: 2086"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8944773750553738,
            "unit": "iter/sec",
            "range": "stddev: 0.009960911908358244",
            "extra": "mean: 1.117971262200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 306.2567874452913,
            "unit": "iter/sec",
            "range": "stddev: 0.00023492669761048958",
            "extra": "mean: 3.265233754790289 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.6054241937679,
            "unit": "iter/sec",
            "range": "stddev: 0.00013802437508634278",
            "extra": "mean: 3.452973999999822 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1162.6983255000966,
            "unit": "iter/sec",
            "range": "stddev: 0.000009125329799765005",
            "extra": "mean: 860.0683238877829 usec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.6874532998768,
            "unit": "iter/sec",
            "range": "stddev: 0.000060366492271992325",
            "extra": "mean: 6.184771790210156 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8386.069839685102,
            "unit": "iter/sec",
            "range": "stddev: 0.000014193676335999902",
            "extra": "mean: 119.24536989517249 usec\nrounds: 5142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5217.072198465533,
            "unit": "iter/sec",
            "range": "stddev: 0.00005159149445641922",
            "extra": "mean: 191.67839009284253 usec\nrounds: 323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5265.097667563492,
            "unit": "iter/sec",
            "range": "stddev: 0.00007549440037075446",
            "extra": "mean: 189.92999999993657 usec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.139626996717965,
            "unit": "iter/sec",
            "range": "stddev: 0.0006861801796821445",
            "extra": "mean: 39.77783759999909 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.16520502288728,
            "unit": "iter/sec",
            "range": "stddev: 0.0014619315197936466",
            "extra": "mean: 25.532867743590824 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 114.98686470545084,
            "unit": "iter/sec",
            "range": "stddev: 0.014687675146299106",
            "extra": "mean: 8.696645504350341 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6074258.331380916,
            "unit": "iter/sec",
            "range": "stddev: 9.217377454706133e-9",
            "extra": "mean: 164.62915230840406 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.89484450189674,
            "unit": "iter/sec",
            "range": "stddev: 0.0008117606842970988",
            "extra": "mean: 8.93696223853324 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.2285643934895,
            "unit": "iter/sec",
            "range": "stddev: 0.0005403555734745419",
            "extra": "mean: 11.872456893938175 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 314.6845451661077,
            "unit": "iter/sec",
            "range": "stddev: 0.000246060594735244",
            "extra": "mean: 3.177785548610738 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 772153.3458867118,
            "unit": "iter/sec",
            "range": "stddev: 2.718944877796096e-7",
            "extra": "mean: 1.2950795399994512 usec\nrounds: 24692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 118.89196598835238,
            "unit": "iter/sec",
            "range": "stddev: 0.000811667709061826",
            "extra": "mean: 8.410997258620217 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5208.814752342918,
            "unit": "iter/sec",
            "range": "stddev: 0.00006109800824243944",
            "extra": "mean: 191.98225460988056 usec\nrounds: 2549"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 118.77423073018794,
            "unit": "iter/sec",
            "range": "stddev: 0.0008475502790513538",
            "extra": "mean: 8.419334681035636 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.684490672975418,
            "unit": "iter/sec",
            "range": "stddev: 0.00040815643174082713",
            "extra": "mean: 175.91725583333093 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.663662714172627,
            "unit": "iter/sec",
            "range": "stddev: 0.0002673574727258464",
            "extra": "mean: 93.77640936363657 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.17626491814939,
            "unit": "iter/sec",
            "range": "stddev: 0.0007486088616903915",
            "extra": "mean: 9.507848570000306 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 297.5855909986017,
            "unit": "iter/sec",
            "range": "stddev: 0.00027565459385567423",
            "extra": "mean: 3.3603777543271542 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 312.01507517165555,
            "unit": "iter/sec",
            "range": "stddev: 0.0002563388653480843",
            "extra": "mean: 3.204973347681513 msec\nrounds: 302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 736.3400556949149,
            "unit": "iter/sec",
            "range": "stddev: 0.000011930834854554328",
            "extra": "mean: 1.3580681809524244 msec\nrounds: 630"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.594536685657726,
            "unit": "iter/sec",
            "range": "stddev: 0.002241533750466406",
            "extra": "mean: 385.425269000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5082.652291780159,
            "unit": "iter/sec",
            "range": "stddev: 0.00005552921544052044",
            "extra": "mean: 196.7476708208497 usec\nrounds: 2327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1753.5734182244516,
            "unit": "iter/sec",
            "range": "stddev: 0.000006104681753655898",
            "extra": "mean: 570.2641187458986 usec\nrounds: 1339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 339.14730357402277,
            "unit": "iter/sec",
            "range": "stddev: 0.00006511920085740918",
            "extra": "mean: 2.948571282925558 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.81146178562026,
            "unit": "iter/sec",
            "range": "stddev: 0.0006952862184161865",
            "extra": "mean: 27.924020694445378 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.709118741079166,
            "unit": "iter/sec",
            "range": "stddev: 0.000469506077544924",
            "extra": "mean: 63.657294625000915 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.90845046210107,
            "unit": "iter/sec",
            "range": "stddev: 0.0007020289715517278",
            "extra": "mean: 8.778979925924933 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8466363228720406,
            "unit": "iter/sec",
            "range": "stddev: 0.0030156992350732644",
            "extra": "mean: 1.1811446934000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 87.35977816055532,
            "unit": "iter/sec",
            "range": "stddev: 0.02114355127997726",
            "extra": "mean: 11.446915514850975 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.95219287630207,
            "unit": "iter/sec",
            "range": "stddev: 0.0004090446699634591",
            "extra": "mean: 18.19763593876972 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14042.540849427303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016541512130587787",
            "extra": "mean: 71.21218380082426 usec\nrounds: 6235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7580668776494839,
            "unit": "iter/sec",
            "range": "stddev: 0.0009279702290199833",
            "extra": "mean: 568.8065754000149 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.91774917040517,
            "unit": "iter/sec",
            "range": "stddev: 0.0007399689048310989",
            "extra": "mean: 9.716496989690851 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.47562516600024,
            "unit": "iter/sec",
            "range": "stddev: 0.000500023639018182",
            "extra": "mean: 21.516655159091027 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.77805464387973,
            "unit": "iter/sec",
            "range": "stddev: 0.0007638225341933481",
            "extra": "mean: 16.72854705556035 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.03007719914099,
            "unit": "iter/sec",
            "range": "stddev: 0.0001391055473103634",
            "extra": "mean: 9.898042520831632 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.6180018549486,
            "unit": "iter/sec",
            "range": "stddev: 0.00012269615145553395",
            "extra": "mean: 6.225952187495665 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5738.800272600529,
            "unit": "iter/sec",
            "range": "stddev: 0.000049523986780586334",
            "extra": "mean: 174.2524486824232 usec\nrounds: 2543"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16719047148241456,
            "unit": "iter/sec",
            "range": "stddev: 0.15881467685146156",
            "extra": "mean: 5.981202105200009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.5278716270711,
            "unit": "iter/sec",
            "range": "stddev: 0.00021559973027814286",
            "extra": "mean: 3.3054805648872883 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2714223.730291049,
            "unit": "iter/sec",
            "range": "stddev: 1.6086518849191398e-8",
            "extra": "mean: 368.4294661636379 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12079.905075730974,
            "unit": "iter/sec",
            "range": "stddev: 0.00003581719487391999",
            "extra": "mean: 82.78210745290053 usec\nrounds: 4039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1966490.7459175666,
            "unit": "iter/sec",
            "range": "stddev: 1.0342188803718147e-7",
            "extra": "mean: 508.52006401555633 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 234.1064369362948,
            "unit": "iter/sec",
            "range": "stddev: 0.0038028124682091117",
            "extra": "mean: 4.271561316667771 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8946135590644791,
            "unit": "iter/sec",
            "range": "stddev: 0.009103266594409248",
            "extra": "mean: 1.1178010771999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.31903726685128,
            "unit": "iter/sec",
            "range": "stddev: 0.018367712074958548",
            "extra": "mean: 11.58492994898155 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 118.9146364756485,
            "unit": "iter/sec",
            "range": "stddev: 0.0007816570975387293",
            "extra": "mean: 8.409393743593382 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.2438560582435,
            "unit": "iter/sec",
            "range": "stddev: 0.00005880795220518869",
            "extra": "mean: 6.0516622151901975 msec\nrounds: 158"
          }
        ]
      }
    ]
  }
}