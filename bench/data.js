window.BENCHMARK_DATA = {
  "lastUpdate": 1679741393084,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "982233857249645c8b93ec8bccd9f4ff870d208b",
          "message": "chore(deps): update dependency mkdocs-material to >=8.2.1,<9.1.5",
          "timestamp": "2023-03-25T06:43:12-04:00",
          "tree_id": "f6b3761f85bbcb300e31c8573e227ff85e200cef",
          "url": "https://github.com/ibis-project/ibis/commit/982233857249645c8b93ec8bccd9f4ff870d208b"
        },
        "date": 1679741308616,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.869285920509,
            "unit": "iter/sec",
            "range": "stddev: 0.0005096038403011427",
            "extra": "mean: 9.62748507547552 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 233.4135331525891,
            "unit": "iter/sec",
            "range": "stddev: 0.00436528341164918",
            "extra": "mean: 4.284241733945527 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.4025402723776,
            "unit": "iter/sec",
            "range": "stddev: 0.00011545992366764585",
            "extra": "mean: 6.1956893510624615 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 286.393053144669,
            "unit": "iter/sec",
            "range": "stddev: 0.004553449190268422",
            "extra": "mean: 3.4917048057546927 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1745.898268755264,
            "unit": "iter/sec",
            "range": "stddev: 0.000019619723973682886",
            "extra": "mean: 572.7710588274704 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.406394065687564,
            "unit": "iter/sec",
            "range": "stddev: 0.0006385289530149841",
            "extra": "mean: 23.038080483872598 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.07351248125296,
            "unit": "iter/sec",
            "range": "stddev: 0.0006092806880233124",
            "extra": "mean: 8.259444857146935 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71436.03049662033,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012770335791557238",
            "extra": "mean: 13.998538175316314 usec\nrounds: 13176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8314262510328795,
            "unit": "iter/sec",
            "range": "stddev: 0.0026060558116041336",
            "extra": "mean: 1.2027524975999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11637.576584063458,
            "unit": "iter/sec",
            "range": "stddev: 0.000011245832906383108",
            "extra": "mean: 85.9285430069181 usec\nrounds: 4569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.90478496940337,
            "unit": "iter/sec",
            "range": "stddev: 0.00007007476813541777",
            "extra": "mean: 9.01674350909099 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 39.689869183381376,
            "unit": "iter/sec",
            "range": "stddev: 0.014655756121245634",
            "extra": "mean: 25.195346333333646 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.51138967979955,
            "unit": "iter/sec",
            "range": "stddev: 0.00022794504519501438",
            "extra": "mean: 17.387860136359087 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.63771384491444,
            "unit": "iter/sec",
            "range": "stddev: 0.0001975679678860223",
            "extra": "mean: 20.56017688636819 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5763.173042598543,
            "unit": "iter/sec",
            "range": "stddev: 0.00004719707784446089",
            "extra": "mean: 173.51552566762984 usec\nrounds: 2357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11688911.455316523,
            "unit": "iter/sec",
            "range": "stddev: 3.947534856309972e-9",
            "extra": "mean: 85.5511656344061 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.72834205814682,
            "unit": "iter/sec",
            "range": "stddev: 0.0005284466545366853",
            "extra": "mean: 10.66913142856644 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.09791436289572,
            "unit": "iter/sec",
            "range": "stddev: 0.00006500407752203148",
            "extra": "mean: 6.13128625161314 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 480803.639452172,
            "unit": "iter/sec",
            "range": "stddev: 2.786691061525844e-7",
            "extra": "mean: 2.0798511449276895 usec\nrounds: 2096"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 287.307190774651,
            "unit": "iter/sec",
            "range": "stddev: 0.00004628723708057901",
            "extra": "mean: 3.4805950985903054 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.51578198488494,
            "unit": "iter/sec",
            "range": "stddev: 0.0002659977826252015",
            "extra": "mean: 3.552198718484961 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.3101764783685,
            "unit": "iter/sec",
            "range": "stddev: 0.0006445371338298786",
            "extra": "mean: 8.311848833334542 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5767.690074878701,
            "unit": "iter/sec",
            "range": "stddev: 0.000046370587149816205",
            "extra": "mean: 173.3796350042319 usec\nrounds: 2274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.347004433854483,
            "unit": "iter/sec",
            "range": "stddev: 0.0006565858768938258",
            "extra": "mean: 37.95497900000555 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.29351370162654,
            "unit": "iter/sec",
            "range": "stddev: 0.0005491605545828285",
            "extra": "mean: 8.74940289796838 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1799434476244816,
            "unit": "iter/sec",
            "range": "stddev: 0.06495323724728198",
            "extra": "mean: 5.5573015478 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.06430143718461,
            "unit": "iter/sec",
            "range": "stddev: 0.0004636836141735815",
            "extra": "mean: 15.609317163639183 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11796.779107773253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021600667180506035",
            "extra": "mean: 84.76890097408622 usec\nrounds: 4827"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.73809897741242,
            "unit": "iter/sec",
            "range": "stddev: 0.000024725649256276567",
            "extra": "mean: 5.1883877931015245 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5649.286242316359,
            "unit": "iter/sec",
            "range": "stddev: 0.000042118107152833114",
            "extra": "mean: 177.0135123459372 usec\nrounds: 2268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 91.3760598677304,
            "unit": "iter/sec",
            "range": "stddev: 0.011663055091869629",
            "extra": "mean: 10.943785510641739 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.37322455457287,
            "unit": "iter/sec",
            "range": "stddev: 0.00015428079110612174",
            "extra": "mean: 10.596225833331927 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 170.7644259803179,
            "unit": "iter/sec",
            "range": "stddev: 0.004100231171787186",
            "extra": "mean: 5.856020621738035 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.547468201606445,
            "unit": "iter/sec",
            "range": "stddev: 0.0006427023896924184",
            "extra": "mean: 392.5466074000042 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 305.49623497538425,
            "unit": "iter/sec",
            "range": "stddev: 0.0001813811634531281",
            "extra": "mean: 3.273362763637909 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5542.213028463885,
            "unit": "iter/sec",
            "range": "stddev: 0.00004456823195679148",
            "extra": "mean: 180.43333860755013 usec\nrounds: 2528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5807.134269059796,
            "unit": "iter/sec",
            "range": "stddev: 0.00004380270078277027",
            "extra": "mean: 172.20197668374303 usec\nrounds: 3088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.08969333528611,
            "unit": "iter/sec",
            "range": "stddev: 0.00006922575681879495",
            "extra": "mean: 8.397032287123217 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 307.099487837081,
            "unit": "iter/sec",
            "range": "stddev: 0.00019559146631244255",
            "extra": "mean: 3.2562737471268877 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1645024.4183250186,
            "unit": "iter/sec",
            "range": "stddev: 9.493235644329307e-8",
            "extra": "mean: 607.8937120083667 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8044.567958996898,
            "unit": "iter/sec",
            "range": "stddev: 0.000029911218383588955",
            "extra": "mean: 124.30748364573367 usec\nrounds: 3577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.38818979536774,
            "unit": "iter/sec",
            "range": "stddev: 0.00006292677003733468",
            "extra": "mean: 10.061557636364233 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.537299152030878,
            "unit": "iter/sec",
            "range": "stddev: 0.00006978184091473578",
            "extra": "mean: 180.59345766667434 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 318.61627066376826,
            "unit": "iter/sec",
            "range": "stddev: 0.0001913457482772575",
            "extra": "mean: 3.1385716677830535 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.92560421310027,
            "unit": "iter/sec",
            "range": "stddev: 0.00017441293323656987",
            "extra": "mean: 13.903254771933685 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1772756.452978634,
            "unit": "iter/sec",
            "range": "stddev: 1.0842945909879262e-7",
            "extra": "mean: 564.0932787579324 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.551991766964324,
            "unit": "iter/sec",
            "range": "stddev: 0.00043317628185601033",
            "extra": "mean: 64.30044556249115 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 309.646016638335,
            "unit": "iter/sec",
            "range": "stddev: 0.00020495403921616575",
            "extra": "mean: 3.2294941522467413 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.325143150694457,
            "unit": "iter/sec",
            "range": "stddev: 0.0004267925231064783",
            "extra": "mean: 96.85095745454544 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 317.2143554416476,
            "unit": "iter/sec",
            "range": "stddev: 0.00002484074906205724",
            "extra": "mean: 3.152442450492921 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.09857614334965,
            "unit": "iter/sec",
            "range": "stddev: 0.0006135322942838952",
            "extra": "mean: 9.794455885417719 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 356.36328123827496,
            "unit": "iter/sec",
            "range": "stddev: 0.000029003753803192426",
            "extra": "mean: 2.80612524535425 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 140.02755918778584,
            "unit": "iter/sec",
            "range": "stddev: 0.00006765327125035479",
            "extra": "mean: 7.141451338582119 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9200452402216645,
            "unit": "iter/sec",
            "range": "stddev: 0.0038191986983134134",
            "extra": "mean: 1.086903074199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7371377172799134,
            "unit": "iter/sec",
            "range": "stddev: 0.0013801988191142645",
            "extra": "mean: 575.6595980000043 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.71542347260323,
            "unit": "iter/sec",
            "range": "stddev: 0.0006237005095787911",
            "extra": "mean: 8.21588564102633 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.84981660113863,
            "unit": "iter/sec",
            "range": "stddev: 0.00006251026935185455",
            "extra": "mean: 6.585454117647592 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.69814260945921,
            "unit": "iter/sec",
            "range": "stddev: 0.0006215213903438595",
            "extra": "mean: 8.217052278349835 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 755.2254110879306,
            "unit": "iter/sec",
            "range": "stddev: 0.00010062717985403558",
            "extra": "mean: 1.32410798857981 msec\nrounds: 613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.50812820647322,
            "unit": "iter/sec",
            "range": "stddev: 0.0001780181902313679",
            "extra": "mean: 9.477942761367718 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.92490022828765,
            "unit": "iter/sec",
            "range": "stddev: 0.0006560033797854248",
            "extra": "mean: 9.530626169996594 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137523.8922109982,
            "unit": "iter/sec",
            "range": "stddev: 3.542571176808838e-7",
            "extra": "mean: 7.27146377202395 usec\nrounds: 46083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.91062245235722,
            "unit": "iter/sec",
            "range": "stddev: 0.0006257272768975885",
            "extra": "mean: 9.353607499999656 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 105.019666004951,
            "unit": "iter/sec",
            "range": "stddev: 0.013882048068149851",
            "extra": "mean: 9.522026093216258 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 313.76331073024033,
            "unit": "iter/sec",
            "range": "stddev: 0.00023829036354321666",
            "extra": "mean: 3.1871157837818562 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.07729323269717,
            "unit": "iter/sec",
            "range": "stddev: 0.0006146533030295283",
            "extra": "mean: 8.259186948275353 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5319.108204374178,
            "unit": "iter/sec",
            "range": "stddev: 0.00004472943427952865",
            "extra": "mean: 188.00143963562317 usec\nrounds: 2634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.55713107001066,
            "unit": "iter/sec",
            "range": "stddev: 0.0006403792105671137",
            "extra": "mean: 8.65372816666889 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6132193.986222915,
            "unit": "iter/sec",
            "range": "stddev: 1.4462590664176198e-8",
            "extra": "mean: 163.07377135314437 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1759911.511251597,
            "unit": "iter/sec",
            "range": "stddev: 1.1096459202710085e-7",
            "extra": "mean: 568.2103864920059 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.16140369059345,
            "unit": "iter/sec",
            "range": "stddev: 0.00048246643143015085",
            "extra": "mean: 22.644207756761226 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 679.967622584021,
            "unit": "iter/sec",
            "range": "stddev: 0.000027582611574450893",
            "extra": "mean: 1.4706582589914918 msec\nrounds: 556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5374.5610356640755,
            "unit": "iter/sec",
            "range": "stddev: 0.000047630024981882126",
            "extra": "mean: 186.06170687508828 usec\nrounds: 2371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1750245.7022867354,
            "unit": "iter/sec",
            "range": "stddev: 1.8916304147014484e-7",
            "extra": "mean: 571.3483533731735 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9175828921784832,
            "unit": "iter/sec",
            "range": "stddev: 0.0031676270661663737",
            "extra": "mean: 1.0898197955999875 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5681.968637728829,
            "unit": "iter/sec",
            "range": "stddev: 0.00003126167417740573",
            "extra": "mean: 175.9953396011203 usec\nrounds: 2553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.36008144476725,
            "unit": "iter/sec",
            "range": "stddev: 0.0005464593047633622",
            "extra": "mean: 9.31444896969888 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5642671.15643479,
            "unit": "iter/sec",
            "range": "stddev: 1.2595679336016315e-8",
            "extra": "mean: 177.22103101077383 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.36466715972873,
            "unit": "iter/sec",
            "range": "stddev: 0.0006453151500837571",
            "extra": "mean: 9.31405113483264 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5596.177070559465,
            "unit": "iter/sec",
            "range": "stddev: 0.00004380200768932615",
            "extra": "mean: 178.69341648619906 usec\nrounds: 461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13548.445502450544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016393100634879425",
            "extra": "mean: 73.80920562577657 usec\nrounds: 7003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7182903.601436935,
            "unit": "iter/sec",
            "range": "stddev: 5.427525005371613e-9",
            "extra": "mean: 139.21946548191437 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 313.97731376941124,
            "unit": "iter/sec",
            "range": "stddev: 0.00022017459482191181",
            "extra": "mean: 3.1849434852303125 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.6018675195404,
            "unit": "iter/sec",
            "range": "stddev: 0.000021864477482261682",
            "extra": "mean: 1.8463747264754793 msec\nrounds: 457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.04154691995777,
            "unit": "iter/sec",
            "range": "stddev: 0.0000758031781920586",
            "extra": "mean: 13.32595130357106 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 772676.2861067355,
            "unit": "iter/sec",
            "range": "stddev: 1.5840499924519647e-7",
            "extra": "mean: 1.2942030420509925 usec\nrounds: 26955"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1195.557366443103,
            "unit": "iter/sec",
            "range": "stddev: 0.000012812273392253479",
            "extra": "mean: 836.429959839648 usec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6623650018092445,
            "unit": "iter/sec",
            "range": "stddev: 0.06514252487508929",
            "extra": "mean: 1.5097416035999913 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}