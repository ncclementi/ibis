window.BENCHMARK_DATA = {
  "lastUpdate": 1683915733558,
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
          "id": "012557a737959c31d9c1717e1a431ac96bb5f3b4",
          "message": "feat(clickhouse): move to clickhouse supported Python client\n\nBREAKING CHANGE: `external_tables` can no longer be passed in `ibis.clickhouse.connect`. Pass `external_tables` directly in `raw_sql`/`execute`/`to_pyarrow`/`to_pyarrow_batches()`.",
          "timestamp": "2023-05-12T20:12:59+02:00",
          "tree_id": "6ff0b550a62736e382153f6c2d9e667eb51d2941",
          "url": "https://github.com/ibis-project/ibis/commit/012557a737959c31d9c1717e1a431ac96bb5f3b4"
        },
        "date": 1683915640289,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 590.6860769502431,
            "unit": "iter/sec",
            "range": "stddev: 0.00010903944346378373",
            "extra": "mean: 1.6929466243102862 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.53010476619357,
            "unit": "iter/sec",
            "range": "stddev: 0.0015261866706389657",
            "extra": "mean: 25.297175555558034 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1930.0195474748193,
            "unit": "iter/sec",
            "range": "stddev: 0.00010256752490002786",
            "extra": "mean: 518.12946729393 usec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 891.1049832021122,
            "unit": "iter/sec",
            "range": "stddev: 0.006769315555277599",
            "extra": "mean: 1.1222022307703663 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4370664558086,
            "unit": "iter/sec",
            "range": "stddev: 0.011808600265688536",
            "extra": "mean: 410.32939319999286 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1927.8675503594618,
            "unit": "iter/sec",
            "range": "stddev: 0.00011366631982332552",
            "extra": "mean: 518.7078333330235 usec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1924.3063894273357,
            "unit": "iter/sec",
            "range": "stddev: 0.00012843823665433594",
            "extra": "mean: 519.667764704349 usec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4957460.878908248,
            "unit": "iter/sec",
            "range": "stddev: 5.0840569164220865e-8",
            "extra": "mean: 201.71616567946722 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8560515911421371,
            "unit": "iter/sec",
            "range": "stddev: 0.03052236573512904",
            "extra": "mean: 1.1681538943999954 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7183029464461407,
            "unit": "iter/sec",
            "range": "stddev: 0.03629353206710918",
            "extra": "mean: 1.3921702603999848 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 245.73863927536695,
            "unit": "iter/sec",
            "range": "stddev: 0.00039338179058681107",
            "extra": "mean: 4.069364113632254 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.245174622045415,
            "unit": "iter/sec",
            "range": "stddev: 0.0014057593216676978",
            "extra": "mean: 34.19367512499605 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.24870571265632,
            "unit": "iter/sec",
            "range": "stddev: 0.00041198139723280195",
            "extra": "mean: 6.201600165287469 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1753412.7150980611,
            "unit": "iter/sec",
            "range": "stddev: 3.952916777183009e-7",
            "extra": "mean: 570.316384379632 nsec\nrounds: 188644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 254.44339221202765,
            "unit": "iter/sec",
            "range": "stddev: 0.0004288181065798346",
            "extra": "mean: 3.9301472571419738 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 45.64129493831344,
            "unit": "iter/sec",
            "range": "stddev: 0.0009509417433783409",
            "extra": "mean: 21.909983083336076 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 258.19075255781775,
            "unit": "iter/sec",
            "range": "stddev: 0.0003970434152933283",
            "extra": "mean: 3.8731054078943656 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5429113774792718,
            "unit": "iter/sec",
            "range": "stddev: 0.00933794504550689",
            "extra": "mean: 648.1253652000078 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 75.01598446367598,
            "unit": "iter/sec",
            "range": "stddev: 0.0006781404362781843",
            "extra": "mean: 13.330492256409926 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.03747863671602,
            "unit": "iter/sec",
            "range": "stddev: 0.0006266907797037166",
            "extra": "mean: 12.339969318183174 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 88.43800610424542,
            "unit": "iter/sec",
            "range": "stddev: 0.0009063811739359822",
            "extra": "mean: 11.307355785715702 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 269.2246707043661,
            "unit": "iter/sec",
            "range": "stddev: 0.00023400532388292202",
            "extra": "mean: 3.71436985096397 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1836.8285596428182,
            "unit": "iter/sec",
            "range": "stddev: 0.00011315280928865259",
            "extra": "mean: 544.416622199328 usec\nrounds: 1027"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.71303668270797,
            "unit": "iter/sec",
            "range": "stddev: 0.02334356763884049",
            "extra": "mean: 28.000979275005022 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1935.622666499739,
            "unit": "iter/sec",
            "range": "stddev: 0.0001136710136721069",
            "extra": "mean: 516.6296186272393 usec\nrounds: 1020"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.622252212066368,
            "unit": "iter/sec",
            "range": "stddev: 0.0012383330125546354",
            "extra": "mean: 31.623300999997134 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11311.901662003958,
            "unit": "iter/sec",
            "range": "stddev: 0.000019495129101615244",
            "extra": "mean: 88.40246581694957 usec\nrounds: 4081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.43782965109864,
            "unit": "iter/sec",
            "range": "stddev: 0.0002845847399440681",
            "extra": "mean: 6.736827144067574 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.25212423535959,
            "unit": "iter/sec",
            "range": "stddev: 0.0004982306118225579",
            "extra": "mean: 10.958649000003296 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5309804.274926378,
            "unit": "iter/sec",
            "range": "stddev: 4.2400259330897314e-8",
            "extra": "mean: 188.33085895891708 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 99.87808115682338,
            "unit": "iter/sec",
            "range": "stddev: 0.00030277259622682294",
            "extra": "mean: 10.01220676666637 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1389127.209063296,
            "unit": "iter/sec",
            "range": "stddev: 1.399009303722141e-7",
            "extra": "mean: 719.8764760171326 nsec\nrounds: 99001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5085094.354229162,
            "unit": "iter/sec",
            "range": "stddev: 3.0486436260879046e-8",
            "extra": "mean: 196.65318484572086 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1890.0737746205407,
            "unit": "iter/sec",
            "range": "stddev: 0.00009549114830964047",
            "extra": "mean: 529.0798768956859 usec\nrounds: 1121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 87.92286490699868,
            "unit": "iter/sec",
            "range": "stddev: 0.0009622668767434036",
            "extra": "mean: 11.373605728814232 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1497107212686962,
            "unit": "iter/sec",
            "range": "stddev: 0.18155780591878556",
            "extra": "mean: 6.679548341799989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4272.452384840153,
            "unit": "iter/sec",
            "range": "stddev: 0.000039587594932341366",
            "extra": "mean: 234.05761139627384 usec\nrounds: 1755"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 80.29934266357316,
            "unit": "iter/sec",
            "range": "stddev: 0.013749782082274342",
            "extra": "mean: 12.453402068179546 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 17.98400829386693,
            "unit": "iter/sec",
            "range": "stddev: 0.0018600623629524598",
            "extra": "mean: 55.60495656249387 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 194.01145135305896,
            "unit": "iter/sec",
            "range": "stddev: 0.004616913751241389",
            "extra": "mean: 5.154334927273008 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 145.38064716982592,
            "unit": "iter/sec",
            "range": "stddev: 0.0003546911484455828",
            "extra": "mean: 6.878494624059923 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6222485.87758284,
            "unit": "iter/sec",
            "range": "stddev: 3.8734242748418743e-8",
            "extra": "mean: 160.70747602688996 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.4453545201756,
            "unit": "iter/sec",
            "range": "stddev: 0.0009862740189792417",
            "extra": "mean: 10.477199283581855 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13051.214037693991,
            "unit": "iter/sec",
            "range": "stddev: 0.000010384233642829531",
            "extra": "mean: 76.62122444025822 usec\nrounds: 6211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 84.52667233366722,
            "unit": "iter/sec",
            "range": "stddev: 0.0011246598932749623",
            "extra": "mean: 11.830585215191265 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.1951129362252,
            "unit": "iter/sec",
            "range": "stddev: 0.02019629972808702",
            "extra": "mean: 13.124201296702498 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.41783417628797,
            "unit": "iter/sec",
            "range": "stddev: 0.0008827260482777789",
            "extra": "mean: 10.704594136842317 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.91205122196481,
            "unit": "iter/sec",
            "range": "stddev: 0.00135239862690984",
            "extra": "mean: 20.444859191489652 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 265.65704871306514,
            "unit": "iter/sec",
            "range": "stddev: 0.0003898065223743885",
            "extra": "mean: 3.7642517104076356 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1101.9406842137616,
            "unit": "iter/sec",
            "range": "stddev: 0.00011241098947463417",
            "extra": "mean: 907.4898624997255 usec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 81.85510897478291,
            "unit": "iter/sec",
            "range": "stddev: 0.016338258780656735",
            "extra": "mean: 12.216708431822743 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 85.71560791158875,
            "unit": "iter/sec",
            "range": "stddev: 0.0010661803301935465",
            "extra": "mean: 11.666486703698686 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8106.08111162084,
            "unit": "iter/sec",
            "range": "stddev: 0.000023297679868629748",
            "extra": "mean: 123.36417391215154 usec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 76.35299429395216,
            "unit": "iter/sec",
            "range": "stddev: 0.016036390951643123",
            "extra": "mean: 13.097063307695437 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.20418509181085,
            "unit": "iter/sec",
            "range": "stddev: 0.0010928419094199961",
            "extra": "mean: 18.795513891893428 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 92.97633490022757,
            "unit": "iter/sec",
            "range": "stddev: 0.0010491814380627778",
            "extra": "mean: 10.75542503447888 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 263.1639447879605,
            "unit": "iter/sec",
            "range": "stddev: 0.0004032602510792618",
            "extra": "mean: 3.799912639270291 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 258.5658916503722,
            "unit": "iter/sec",
            "range": "stddev: 0.00044136350527536263",
            "extra": "mean: 3.867486131357885 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 92.36193927476833,
            "unit": "iter/sec",
            "range": "stddev: 0.0008539928231676",
            "extra": "mean: 10.826970588232143 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 205.25619080349435,
            "unit": "iter/sec",
            "range": "stddev: 0.0004175772227215361",
            "extra": "mean: 4.871960237035519 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 781331.4370335849,
            "unit": "iter/sec",
            "range": "stddev: 5.629448055634633e-7",
            "extra": "mean: 1.279866587471017 usec\nrounds: 111099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 98.77648191574401,
            "unit": "iter/sec",
            "range": "stddev: 0.0006183443469608872",
            "extra": "mean: 10.123867347826746 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 672.8898800101981,
            "unit": "iter/sec",
            "range": "stddev: 0.0001419654862862224",
            "extra": "mean: 1.486127269420138 msec\nrounds: 605"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 186.6032189720247,
            "unit": "iter/sec",
            "range": "stddev: 0.0003545267457002686",
            "extra": "mean: 5.3589643603625 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1698716.7289835461,
            "unit": "iter/sec",
            "range": "stddev: 3.627804444365382e-7",
            "extra": "mean: 588.6796679740511 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.93343062040355,
            "unit": "iter/sec",
            "range": "stddev: 0.0007230565430864789",
            "extra": "mean: 47.77047862500439 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2120994292987277,
            "unit": "iter/sec",
            "range": "stddev: 0.09701083942810058",
            "extra": "mean: 825.0148261999925 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.37641487395206,
            "unit": "iter/sec",
            "range": "stddev: 0.0009667330316335661",
            "extra": "mean: 10.825273976745075 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10553785.03396414,
            "unit": "iter/sec",
            "range": "stddev: 1.9437087327564067e-8",
            "extra": "mean: 94.7527353249854 nsec\nrounds: 97078"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 256.5241883285269,
            "unit": "iter/sec",
            "range": "stddev: 0.0004835420865003168",
            "extra": "mean: 3.8982678651703364 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150254.08850368467,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010734030804620126",
            "extra": "mean: 6.655392941107736 usec\nrounds: 34962"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 227.21746481967298,
            "unit": "iter/sec",
            "range": "stddev: 0.000535095193067453",
            "extra": "mean: 4.401070141301117 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10073.782403929281,
            "unit": "iter/sec",
            "range": "stddev: 0.000013291873938151934",
            "extra": "mean: 99.26757993203722 usec\nrounds: 2033"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 373.26253162179785,
            "unit": "iter/sec",
            "range": "stddev: 0.00017808726433889317",
            "extra": "mean: 2.679079509146216 msec\nrounds: 328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 451.77810340749437,
            "unit": "iter/sec",
            "range": "stddev: 0.0001682372014411265",
            "extra": "mean: 2.213476023865683 msec\nrounds: 419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.91006007511032,
            "unit": "iter/sec",
            "range": "stddev: 0.000883035156212158",
            "extra": "mean: 11.640080325001634 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.194538373568676,
            "unit": "iter/sec",
            "range": "stddev: 0.0004849520759146215",
            "extra": "mean: 23.699749743592783 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1805.721677129386,
            "unit": "iter/sec",
            "range": "stddev: 0.00010260997216056561",
            "extra": "mean: 553.7952014785203 usec\nrounds: 1082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 69.7988982151476,
            "unit": "iter/sec",
            "range": "stddev: 0.025166467336805567",
            "extra": "mean: 14.326873712499122 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 170.87985144332902,
            "unit": "iter/sec",
            "range": "stddev: 0.00023999434092022534",
            "extra": "mean: 5.852065012659741 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1934570.2225031422,
            "unit": "iter/sec",
            "range": "stddev: 2.396202309627838e-7",
            "extra": "mean: 516.910675233127 nsec\nrounds: 54940"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 145.13927624096954,
            "unit": "iter/sec",
            "range": "stddev: 0.00413608216793395",
            "extra": "mean: 6.8899337649978065 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2067.6953721757786,
            "unit": "iter/sec",
            "range": "stddev: 0.00010177557012630055",
            "extra": "mean: 483.63023560270756 usec\nrounds: 1146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 92.93114960839596,
            "unit": "iter/sec",
            "range": "stddev: 0.0009383116393998531",
            "extra": "mean: 10.760654572916787 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 85.4512167779011,
            "unit": "iter/sec",
            "range": "stddev: 0.001024382246984179",
            "extra": "mean: 11.702583505617373 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 109.84462708169215,
            "unit": "iter/sec",
            "range": "stddev: 0.0004265675508571794",
            "extra": "mean: 9.103767990912234 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3847131.7926502647,
            "unit": "iter/sec",
            "range": "stddev: 5.404100211534389e-8",
            "extra": "mean: 259.9339076217913 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.478205433953608,
            "unit": "iter/sec",
            "range": "stddev: 0.002013409707532088",
            "extra": "mean: 133.72192149999762 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 72.04906898959331,
            "unit": "iter/sec",
            "range": "stddev: 0.028681023856115467",
            "extra": "mean: 13.87942986667099 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.766855138486,
            "unit": "iter/sec",
            "range": "stddev: 0.0003141135544917679",
            "extra": "mean: 10.4420260909051 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1450.4900927925307,
            "unit": "iter/sec",
            "range": "stddev: 0.00003174544129129552",
            "extra": "mean: 689.4221511535922 usec\nrounds: 1257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8161539253166272,
            "unit": "iter/sec",
            "range": "stddev: 0.01609754191940511",
            "extra": "mean: 1.2252590706000093 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}