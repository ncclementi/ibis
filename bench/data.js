window.BENCHMARK_DATA = {
  "lastUpdate": 1683111326965,
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
          "id": "bfd90a88459f542d523f8e578fbc56793f15580a",
          "message": "fix(snowflake): fix invalid attribute access when using pyarrow",
          "timestamp": "2023-05-03T03:48:58-07:00",
          "tree_id": "cee2f090b550ed8890e1a9d686d659d76a243b21",
          "url": "https://github.com/ibis-project/ibis/commit/bfd90a88459f542d523f8e578fbc56793f15580a"
        },
        "date": 1683111246146,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 98.41559682332664,
            "unit": "iter/sec",
            "range": "stddev: 0.0007894508181158379",
            "extra": "mean: 10.160991065218825 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2103.4012371230615,
            "unit": "iter/sec",
            "range": "stddev: 0.0002269168913148911",
            "extra": "mean: 475.4204677409791 usec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.88838409836883,
            "unit": "iter/sec",
            "range": "stddev: 0.0005882796014963966",
            "extra": "mean: 10.538697750014592 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 269.00740346725496,
            "unit": "iter/sec",
            "range": "stddev: 0.00036732485314611043",
            "extra": "mean: 3.717369808826564 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1909856.715873248,
            "unit": "iter/sec",
            "range": "stddev: 8.471458968388714e-8",
            "extra": "mean: 523.5994887411058 nsec\nrounds: 163908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6043246.736718505,
            "unit": "iter/sec",
            "range": "stddev: 1.016777953120895e-8",
            "extra": "mean: 165.4739651654546 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.005403083813455,
            "unit": "iter/sec",
            "range": "stddev: 0.0011791949427752725",
            "extra": "mean: 19.9978389999959 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.43958798792726,
            "unit": "iter/sec",
            "range": "stddev: 0.00015042405002001577",
            "extra": "mean: 19.44028012500212 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.98421401803813,
            "unit": "iter/sec",
            "range": "stddev: 0.0008511249159718846",
            "extra": "mean: 10.205725585714324 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10506.993371494846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022808917410293557",
            "extra": "mean: 95.17470551689597 usec\nrounds: 5474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6285616320845455,
            "unit": "iter/sec",
            "range": "stddev: 0.002067561318407981",
            "extra": "mean: 614.0387814000064 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 340.90504703537897,
            "unit": "iter/sec",
            "range": "stddev: 0.008088332267343425",
            "extra": "mean: 2.9333681290327758 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.851153094957035,
            "unit": "iter/sec",
            "range": "stddev: 0.023961860722505432",
            "extra": "mean: 1.1748767711999903 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7807648697962403,
            "unit": "iter/sec",
            "range": "stddev: 0.00359173512297459",
            "extra": "mean: 1.2807953311999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5990496.447278989,
            "unit": "iter/sec",
            "range": "stddev: 8.79822705725106e-9",
            "extra": "mean: 166.93107304207876 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.64776429587997,
            "unit": "iter/sec",
            "range": "stddev: 0.000223397880398605",
            "extra": "mean: 6.638000933329143 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1921084.3633335526,
            "unit": "iter/sec",
            "range": "stddev: 1.500935147516433e-7",
            "extra": "mean: 520.5393469887781 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 744.1858759668385,
            "unit": "iter/sec",
            "range": "stddev: 0.00007094525621561297",
            "extra": "mean: 1.343750307946668 msec\nrounds: 604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.76861358669115,
            "unit": "iter/sec",
            "range": "stddev: 0.00010252561825451822",
            "extra": "mean: 8.079592806455498 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4493.0544810822785,
            "unit": "iter/sec",
            "range": "stddev: 0.00002502827826197169",
            "extra": "mean: 222.56574101436712 usec\nrounds: 946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13976.50023076301,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016945238116465546",
            "extra": "mean: 71.54866980211166 usec\nrounds: 1914"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 130.19146623510863,
            "unit": "iter/sec",
            "range": "stddev: 0.000406143680513698",
            "extra": "mean: 7.680994990824758 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.516789932228537,
            "unit": "iter/sec",
            "range": "stddev: 0.002099780495406781",
            "extra": "mean: 42.522810421058026 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.68797541212354,
            "unit": "iter/sec",
            "range": "stddev: 0.0002845614879544299",
            "extra": "mean: 3.6404942680860586 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2197.7210989274413,
            "unit": "iter/sec",
            "range": "stddev: 0.00009710248196589689",
            "extra": "mean: 455.0167901141014 usec\nrounds: 1234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.92539945450764,
            "unit": "iter/sec",
            "range": "stddev: 0.00008219105354240017",
            "extra": "mean: 5.265225203538547 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2276.5249187282698,
            "unit": "iter/sec",
            "range": "stddev: 0.00008417668377589488",
            "extra": "mean: 439.2660022182528 usec\nrounds: 1352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.2998349685502,
            "unit": "iter/sec",
            "range": "stddev: 0.000027659521730138422",
            "extra": "mean: 1.8577007367249598 msec\nrounds: 452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.78590704657708,
            "unit": "iter/sec",
            "range": "stddev: 0.00007907277337444817",
            "extra": "mean: 6.143037921052191 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2151.256415401396,
            "unit": "iter/sec",
            "range": "stddev: 0.00009874858539104381",
            "extra": "mean: 464.84463350846676 usec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 280.4658233241849,
            "unit": "iter/sec",
            "range": "stddev: 0.00030334436296375865",
            "extra": "mean: 3.565496815788923 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.45185268335524,
            "unit": "iter/sec",
            "range": "stddev: 0.000829608359704929",
            "extra": "mean: 9.760682445545118 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.2953306801859,
            "unit": "iter/sec",
            "range": "stddev: 0.00003652877586424941",
            "extra": "mean: 9.149521702131503 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.805288108680937,
            "unit": "iter/sec",
            "range": "stddev: 0.00016533091016486174",
            "extra": "mean: 33.55109322727013 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.09584459671899,
            "unit": "iter/sec",
            "range": "stddev: 0.0005360128758203161",
            "extra": "mean: 19.961735510204267 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4530709.442368199,
            "unit": "iter/sec",
            "range": "stddev: 1.2074178545935747e-8",
            "extra": "mean: 220.71598559175587 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.6062428176307,
            "unit": "iter/sec",
            "range": "stddev: 0.0004954104274370875",
            "extra": "mean: 3.9744641818161095 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.07934032324584,
            "unit": "iter/sec",
            "range": "stddev: 0.0018805634279469693",
            "extra": "mean: 26.969196088234572 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.616227850920126,
            "unit": "iter/sec",
            "range": "stddev: 0.0010589563881563966",
            "extra": "mean: 22.413369488370517 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 79.61679362839148,
            "unit": "iter/sec",
            "range": "stddev: 0.01824281184515309",
            "extra": "mean: 12.560164186810438 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 312.76992937328316,
            "unit": "iter/sec",
            "range": "stddev: 0.00006073852683341425",
            "extra": "mean: 3.1972383086947107 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2106.9717659817147,
            "unit": "iter/sec",
            "range": "stddev: 0.00011119955019766136",
            "extra": "mean: 474.6148079179712 usec\nrounds: 1364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 41.73607888624244,
            "unit": "iter/sec",
            "range": "stddev: 0.0009580895596761231",
            "extra": "mean: 23.960085055561663 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1875873.0722320077,
            "unit": "iter/sec",
            "range": "stddev: 1.0279032818392321e-7",
            "extra": "mean: 533.0851083704454 nsec\nrounds: 138870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.68056969311497,
            "unit": "iter/sec",
            "range": "stddev: 0.00009053119225139261",
            "extra": "mean: 53.5315579999986 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4605245630995416,
            "unit": "iter/sec",
            "range": "stddev: 0.0026838429194942573",
            "extra": "mean: 406.4174018000017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.55303615970882,
            "unit": "iter/sec",
            "range": "stddev: 0.00009529773045900439",
            "extra": "mean: 5.761927432256323 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149737.4930922868,
            "unit": "iter/sec",
            "range": "stddev: 3.6114945536900234e-7",
            "extra": "mean: 6.678354093878651 usec\nrounds: 41842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1691601766887827,
            "unit": "iter/sec",
            "range": "stddev: 0.13512806641307593",
            "extra": "mean: 5.911556842600009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 159.007649965805,
            "unit": "iter/sec",
            "range": "stddev: 0.014338651955629556",
            "extra": "mean: 6.289005593221788 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.74790705052911,
            "unit": "iter/sec",
            "range": "stddev: 0.0009230113624009432",
            "extra": "mean: 9.82821198969124 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12295.494272189051,
            "unit": "iter/sec",
            "range": "stddev: 0.000031584833868493536",
            "extra": "mean: 81.33060598156524 usec\nrounds: 5383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5557796.326239542,
            "unit": "iter/sec",
            "range": "stddev: 9.72177724372163e-9",
            "extra": "mean: 179.92742830087238 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.19937855548727,
            "unit": "iter/sec",
            "range": "stddev: 0.0005435175236549656",
            "extra": "mean: 3.785020258062339 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7032254.557797219,
            "unit": "iter/sec",
            "range": "stddev: 5.973993967272116e-9",
            "extra": "mean: 142.20190577305823 nsec\nrounds: 60238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 97.8208116919383,
            "unit": "iter/sec",
            "range": "stddev: 0.0009816944835628482",
            "extra": "mean: 10.22277348453461 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.94360995830542,
            "unit": "iter/sec",
            "range": "stddev: 0.00034361220019157006",
            "extra": "mean: 10.532567704547478 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.45817243015559,
            "unit": "iter/sec",
            "range": "stddev: 0.0009324494998377743",
            "extra": "mean: 10.260812152173903 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2135.5755583568844,
            "unit": "iter/sec",
            "range": "stddev: 0.00009440221419099533",
            "extra": "mean: 468.25784088360786 usec\nrounds: 1766"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1725.3318556456013,
            "unit": "iter/sec",
            "range": "stddev: 0.000009840180396481702",
            "extra": "mean: 579.5986416919255 usec\nrounds: 1348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.490926237244523,
            "unit": "iter/sec",
            "range": "stddev: 0.0002137215273444861",
            "extra": "mean: 117.77278144445644 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 156.00234271383317,
            "unit": "iter/sec",
            "range": "stddev: 0.0035265104453755312",
            "extra": "mean: 6.410160146340719 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 223.7341153192536,
            "unit": "iter/sec",
            "range": "stddev: 0.003996221277569911",
            "extra": "mean: 4.469591052634359 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.4216349267039,
            "unit": "iter/sec",
            "range": "stddev: 0.0002839211671779164",
            "extra": "mean: 3.5533870743820013 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3326614061631008,
            "unit": "iter/sec",
            "range": "stddev: 0.0010713350111685573",
            "extra": "mean: 750.3781495999988 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8739193066444029,
            "unit": "iter/sec",
            "range": "stddev: 0.00883869653312932",
            "extra": "mean: 1.1442704061999849 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1045430.3147089033,
            "unit": "iter/sec",
            "range": "stddev: 1.7545364989770725e-7",
            "extra": "mean: 956.5439091733692 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.29126653467135,
            "unit": "iter/sec",
            "range": "stddev: 0.0009885083462521174",
            "extra": "mean: 10.173843875002456 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.364641201252056,
            "unit": "iter/sec",
            "range": "stddev: 0.041115018306299315",
            "extra": "mean: 29.971849358969685 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.0327239716065,
            "unit": "iter/sec",
            "range": "stddev: 0.00008217420793293125",
            "extra": "mean: 1.4576564135465178 msec\nrounds: 561"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10896858.06593424,
            "unit": "iter/sec",
            "range": "stddev: 3.6262506914100538e-9",
            "extra": "mean: 91.7695719216393 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2163.5229178051413,
            "unit": "iter/sec",
            "range": "stddev: 0.00008758433493654303",
            "extra": "mean: 462.2091089353857 usec\nrounds: 1276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 92.8620948704823,
            "unit": "iter/sec",
            "range": "stddev: 0.000991795297071867",
            "extra": "mean: 10.768656483517109 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8465.876698886308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000319319997242446",
            "extra": "mean: 118.12125732135345 usec\nrounds: 4473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 79.79094419503227,
            "unit": "iter/sec",
            "range": "stddev: 0.02380710052007703",
            "extra": "mean: 12.532750553191969 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.72778419613921,
            "unit": "iter/sec",
            "range": "stddev: 0.0001048393855117718",
            "extra": "mean: 9.640618545452552 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.28638656234156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000634502553638603",
            "extra": "mean: 9.067302240741473 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 97.27888621641847,
            "unit": "iter/sec",
            "range": "stddev: 0.0010452191727199408",
            "extra": "mean: 10.2797229583332 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 263.1213900130973,
            "unit": "iter/sec",
            "range": "stddev: 0.0003469158099518549",
            "extra": "mean: 3.8005272013431646 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2146.70435643616,
            "unit": "iter/sec",
            "range": "stddev: 0.00009965203805804765",
            "extra": "mean: 465.8303305724616 usec\nrounds: 1207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 97.98737968992592,
            "unit": "iter/sec",
            "range": "stddev: 0.0009890619817822534",
            "extra": "mean: 10.205395870003144 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 99.31257941639701,
            "unit": "iter/sec",
            "range": "stddev: 0.0009927901768844271",
            "extra": "mean: 10.069217876289446 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1751019.9610053697,
            "unit": "iter/sec",
            "range": "stddev: 1.0127877076292098e-7",
            "extra": "mean: 571.0957169362237 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 83.45745841890809,
            "unit": "iter/sec",
            "range": "stddev: 0.0003040245412763857",
            "extra": "mean: 11.982152571440404 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1139.313121287233,
            "unit": "iter/sec",
            "range": "stddev: 0.00005080711116816434",
            "extra": "mean: 877.7218319667621 usec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.5620316013475,
            "unit": "iter/sec",
            "range": "stddev: 0.0009788196497800055",
            "extra": "mean: 10.145894760415311 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 274.9718815405773,
            "unit": "iter/sec",
            "range": "stddev: 0.00034587270370663734",
            "extra": "mean: 3.6367354887246215 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 99.52482232689624,
            "unit": "iter/sec",
            "range": "stddev: 0.0009685827349319158",
            "extra": "mean: 10.047744639175843 msec\nrounds: 97"
          }
        ]
      }
    ]
  }
}