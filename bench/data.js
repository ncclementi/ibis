window.BENCHMARK_DATA = {
  "lastUpdate": 1680009588322,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "71a1a84c818907582b60694bbc63c4c53ac9567d",
          "message": "refactor(backends): remove deprecated `Backend.load_data()`, `.exists_database()` and `.exists_table()` methods\n\nremoved from all the backends\n\nBREAKING CHANGE: `Backend.load_data()`, `Backend.exists_database()` and `Backend.exists_table()` are removed",
          "timestamp": "2023-03-28T15:05:59+02:00",
          "tree_id": "c2a496b2ea783001ba174f2fd1db77d9f8f6452e",
          "url": "https://github.com/ibis-project/ibis/commit/71a1a84c818907582b60694bbc63c4c53ac9567d"
        },
        "date": 1680009179726,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.463231184914996,
            "unit": "iter/sec",
            "range": "stddev: 0.01283791772251197",
            "extra": "mean: 29.01643187878776 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 65.96850840135068,
            "unit": "iter/sec",
            "range": "stddev: 0.0002808881858349663",
            "extra": "mean: 15.1587480789474 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 77.98238848853856,
            "unit": "iter/sec",
            "range": "stddev: 0.0004106508444598408",
            "extra": "mean: 12.82340820000627 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 573.3577417429924,
            "unit": "iter/sec",
            "range": "stddev: 0.00013277028124527817",
            "extra": "mean: 1.7441117947758522 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1679358.2929587814,
            "unit": "iter/sec",
            "range": "stddev: 5.785157978826571e-7",
            "extra": "mean: 595.4655443051093 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1493672.4355278863,
            "unit": "iter/sec",
            "range": "stddev: 3.831283423660627e-7",
            "extra": "mean: 669.4908309308024 nsec\nrounds: 126567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 102.37808616256798,
            "unit": "iter/sec",
            "range": "stddev: 0.0006810863243764723",
            "extra": "mean: 9.767715313725265 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1671108.4834695018,
            "unit": "iter/sec",
            "range": "stddev: 2.9231197193190714e-7",
            "extra": "mean: 598.4051962466447 nsec\nrounds: 181786"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9904971.575533604,
            "unit": "iter/sec",
            "range": "stddev: 8.237372239079034e-9",
            "extra": "mean: 100.95940128393732 nsec\nrounds: 93450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5686586.565536205,
            "unit": "iter/sec",
            "range": "stddev: 3.482579626550882e-8",
            "extra": "mean: 175.85241840165781 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 245.58000945790414,
            "unit": "iter/sec",
            "range": "stddev: 0.0006733118460246204",
            "extra": "mean: 4.071992676469923 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.59474776374411,
            "unit": "iter/sec",
            "range": "stddev: 0.0005935601691289227",
            "extra": "mean: 11.287350833332729 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.082646887841715,
            "unit": "iter/sec",
            "range": "stddev: 0.0005886425816568695",
            "extra": "mean: 47.432374374998254 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.23340221268275,
            "unit": "iter/sec",
            "range": "stddev: 0.0006133226200966207",
            "extra": "mean: 75.56635730769301 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.66759682634104,
            "unit": "iter/sec",
            "range": "stddev: 0.0008918102517546351",
            "extra": "mean: 9.835975583332665 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.45457175956877,
            "unit": "iter/sec",
            "range": "stddev: 0.0009992026370343498",
            "extra": "mean: 26.69901037500244 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5773095512511088,
            "unit": "iter/sec",
            "range": "stddev: 0.057994891326179535",
            "extra": "mean: 1.7321729699999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 260.6615274793246,
            "unit": "iter/sec",
            "range": "stddev: 0.0002340372184391065",
            "extra": "mean: 3.8363927721528404 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.13477269892772,
            "unit": "iter/sec",
            "range": "stddev: 0.00012596585656705122",
            "extra": "mean: 7.345661803921142 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4770.805532625333,
            "unit": "iter/sec",
            "range": "stddev: 0.00006315223177639673",
            "extra": "mean: 209.6082083332599 usec\nrounds: 480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 137.75138594798838,
            "unit": "iter/sec",
            "range": "stddev: 0.00011994329250356851",
            "extra": "mean: 7.259455090909764 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1517.047114326962,
            "unit": "iter/sec",
            "range": "stddev: 0.0000211097123075691",
            "extra": "mean: 659.1753087666298 usec\nrounds: 1289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4529.591244681988,
            "unit": "iter/sec",
            "range": "stddev: 0.00005939079717616093",
            "extra": "mean: 220.77047265005643 usec\nrounds: 1883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 198.67122515351937,
            "unit": "iter/sec",
            "range": "stddev: 0.004130868171575016",
            "extra": "mean: 5.033441552631838 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4576.156771938985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000806759090220469",
            "extra": "mean: 218.52398198680706 usec\nrounds: 1832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1552795.637684435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014930569986378791",
            "extra": "mean: 643.9997484094065 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 89.38880174877345,
            "unit": "iter/sec",
            "range": "stddev: 0.001115663870219594",
            "extra": "mean: 11.187083621620665 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4360.027504179024,
            "unit": "iter/sec",
            "range": "stddev: 0.00008739797504133469",
            "extra": "mean: 229.3563513169388 usec\nrounds: 2354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.45747225210052,
            "unit": "iter/sec",
            "range": "stddev: 0.0008441361111717991",
            "extra": "mean: 11.17849604761797 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.29331210085826,
            "unit": "iter/sec",
            "range": "stddev: 0.00020122089164044114",
            "extra": "mean: 12.151655760001555 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5095332.5925956415,
            "unit": "iter/sec",
            "range": "stddev: 2.4705482136984504e-8",
            "extra": "mean: 196.25804240039315 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 269.2975775464929,
            "unit": "iter/sec",
            "range": "stddev: 0.00023691265072801123",
            "extra": "mean: 3.7133642608699473 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 272.9693890352265,
            "unit": "iter/sec",
            "range": "stddev: 0.0002476469330377834",
            "extra": "mean: 3.663414434616149 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.2282147845203,
            "unit": "iter/sec",
            "range": "stddev: 0.0007986566218864091",
            "extra": "mean: 10.391962505375963 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.014469079246389,
            "unit": "iter/sec",
            "range": "stddev: 0.0008919451057033292",
            "extra": "mean: 110.93276722222673 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4527.110434969695,
            "unit": "iter/sec",
            "range": "stddev: 0.000060877630933814465",
            "extra": "mean: 220.89145258650933 usec\nrounds: 1856"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4842.302867966938,
            "unit": "iter/sec",
            "range": "stddev: 0.00005962337574133677",
            "extra": "mean: 206.5133113864591 usec\nrounds: 3144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.4881190089772,
            "unit": "iter/sec",
            "range": "stddev: 0.0006958408536719893",
            "extra": "mean: 18.695740634142783 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2067648378753035,
            "unit": "iter/sec",
            "range": "stddev: 0.0036977241723541144",
            "extra": "mean: 453.1520454000031 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.93688203128069,
            "unit": "iter/sec",
            "range": "stddev: 0.0008770561236621646",
            "extra": "mean: 25.039511076922505 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 245.43855646800898,
            "unit": "iter/sec",
            "range": "stddev: 0.000031803679149735426",
            "extra": "mean: 4.074339477833192 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 148.5728828146559,
            "unit": "iter/sec",
            "range": "stddev: 0.0042031806632523505",
            "extra": "mean: 6.730703349463146 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.08027383246383,
            "unit": "iter/sec",
            "range": "stddev: 0.0009002179027275802",
            "extra": "mean: 26.968517129032058 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4338.671913030842,
            "unit": "iter/sec",
            "range": "stddev: 0.00016816516076283836",
            "extra": "mean: 230.48527753310472 usec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4671.978424183868,
            "unit": "iter/sec",
            "range": "stddev: 0.00006177545986439119",
            "extra": "mean: 214.04208436058576 usec\nrounds: 2596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 650.5492278649605,
            "unit": "iter/sec",
            "range": "stddev: 0.00004083084600792938",
            "extra": "mean: 1.5371626883362897 msec\nrounds: 523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 62264.96385001749,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015797401983162703",
            "extra": "mean: 16.060396379716508 usec\nrounds: 11933"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10237.132803115952,
            "unit": "iter/sec",
            "range": "stddev: 0.00001835002497211016",
            "extra": "mean: 97.68360137866166 usec\nrounds: 3482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 173.40790944789796,
            "unit": "iter/sec",
            "range": "stddev: 0.00013438577814569116",
            "extra": "mean: 5.766749643564899 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 669719.3099553798,
            "unit": "iter/sec",
            "range": "stddev: 5.155172755690672e-7",
            "extra": "mean: 1.4931628596264086 usec\nrounds: 21276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.72878163446903,
            "unit": "iter/sec",
            "range": "stddev: 0.0007213842361020973",
            "extra": "mean: 9.734370291260863 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 102.40359321288794,
            "unit": "iter/sec",
            "range": "stddev: 0.000803258052668816",
            "extra": "mean: 9.76528233653959 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 94.08304897209014,
            "unit": "iter/sec",
            "range": "stddev: 0.000855427953536524",
            "extra": "mean: 10.628907235953326 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 247.76741777731385,
            "unit": "iter/sec",
            "range": "stddev: 0.0003444374823438239",
            "extra": "mean: 4.036043193131919 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12333.64029095056,
            "unit": "iter/sec",
            "range": "stddev: 0.000004863791209475844",
            "extra": "mean: 81.07906314842991 usec\nrounds: 5590"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 77.07857541833467,
            "unit": "iter/sec",
            "range": "stddev: 0.017728380105516466",
            "extra": "mean: 12.973773770112134 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4677.052837778994,
            "unit": "iter/sec",
            "range": "stddev: 0.00005683542023500053",
            "extra": "mean: 213.8098573363291 usec\nrounds: 2215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 406181.5226235946,
            "unit": "iter/sec",
            "range": "stddev: 5.053736354959878e-7",
            "extra": "mean: 2.4619534476625926 usec\nrounds: 1697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.46752736767561,
            "unit": "iter/sec",
            "range": "stddev: 0.00016495046612964657",
            "extra": "mean: 7.170127834587035 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 263.9043849754555,
            "unit": "iter/sec",
            "range": "stddev: 0.0002750397574740585",
            "extra": "mean: 3.789251171756791 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 116.7418687540227,
            "unit": "iter/sec",
            "range": "stddev: 0.00011506717037634803",
            "extra": "mean: 8.565907079207534 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.02564578384941,
            "unit": "iter/sec",
            "range": "stddev: 0.00009647684499291036",
            "extra": "mean: 10.635396243901873 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 102.0980418951964,
            "unit": "iter/sec",
            "range": "stddev: 0.0008165038973847155",
            "extra": "mean: 9.794507136841073 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.7628440400346,
            "unit": "iter/sec",
            "range": "stddev: 0.016317731054733445",
            "extra": "mean: 12.082716726315898 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 297.87812958282257,
            "unit": "iter/sec",
            "range": "stddev: 0.0000619701654093393",
            "extra": "mean: 3.3570776122453063 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.810102474288502,
            "unit": "iter/sec",
            "range": "stddev: 0.0011333175222734292",
            "extra": "mean: 207.89577879999683 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143211.78714175723,
            "unit": "iter/sec",
            "range": "stddev: 7.183109163054348e-7",
            "extra": "mean: 6.982665463214678 usec\nrounds: 40160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.3907791135308,
            "unit": "iter/sec",
            "range": "stddev: 0.0008343278338864258",
            "extra": "mean: 11.313397279998867 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.281147042083624,
            "unit": "iter/sec",
            "range": "stddev: 0.0002795973147636784",
            "extra": "mean: 21.150079102563396 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4649949.854329628,
            "unit": "iter/sec",
            "range": "stddev: 2.6830559530875255e-8",
            "extra": "mean: 215.05608260901494 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7305007267870074,
            "unit": "iter/sec",
            "range": "stddev: 0.013259983607852561",
            "extra": "mean: 1.3689240315999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.5902525339427,
            "unit": "iter/sec",
            "range": "stddev: 0.0003670256187077683",
            "extra": "mean: 17.988765195650313 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1006.1723795269517,
            "unit": "iter/sec",
            "range": "stddev: 0.000026967420495721513",
            "extra": "mean: 993.8654850276713 usec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 276.40367735706184,
            "unit": "iter/sec",
            "range": "stddev: 0.0002468247828450385",
            "extra": "mean: 3.6178968730151415 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14442833301135502,
            "unit": "iter/sec",
            "range": "stddev: 0.0997430291571093",
            "extra": "mean: 6.923849213999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4961782744291563,
            "unit": "iter/sec",
            "range": "stddev: 0.0025594197410432743",
            "extra": "mean: 668.3695500000056 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 104.39771548559841,
            "unit": "iter/sec",
            "range": "stddev: 0.00011472598315315197",
            "extra": "mean: 9.578753666673379 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 458.14596235907953,
            "unit": "iter/sec",
            "range": "stddev: 0.000054698659833539055",
            "extra": "mean: 2.18271049438221 msec\nrounds: 356"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11293.758091310072,
            "unit": "iter/sec",
            "range": "stddev: 0.000003842401746005009",
            "extra": "mean: 88.5444855392684 usec\nrounds: 4737"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.13921913458829,
            "unit": "iter/sec",
            "range": "stddev: 0.00019930533181760154",
            "extra": "mean: 9.695632838707857 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7246.717258871971,
            "unit": "iter/sec",
            "range": "stddev: 0.00001511824301022595",
            "extra": "mean: 137.99351682663283 usec\nrounds: 4487"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.28944974203519,
            "unit": "iter/sec",
            "range": "stddev: 0.0007549617824482857",
            "extra": "mean: 10.719325741176617 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7168362337855433,
            "unit": "iter/sec",
            "range": "stddev: 0.005656679547718939",
            "extra": "mean: 1.3950187683999957 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.62171491854447,
            "unit": "iter/sec",
            "range": "stddev: 0.0008520218847230728",
            "extra": "mean: 12.251641625000945 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.723284678319713,
            "unit": "iter/sec",
            "range": "stddev: 0.02869539806387257",
            "extra": "mean: 1.3825814786000081 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 83.33488041065135,
            "unit": "iter/sec",
            "range": "stddev: 0.00019765624547970735",
            "extra": "mean: 11.999777225002006 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 270.7756408358928,
            "unit": "iter/sec",
            "range": "stddev: 0.00024353327274865478",
            "extra": "mean: 3.6930943895579715 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.4890204421654,
            "unit": "iter/sec",
            "range": "stddev: 0.0002273996471187792",
            "extra": "mean: 3.7808752829445536 msec\nrounds: 258"
          }
        ]
      },
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
          "distinct": false,
          "id": "2b1b4b3efc82b6b35e01f844825bd14348649a14",
          "message": "test: allow local networking on macos in nix tests",
          "timestamp": "2023-03-28T07:52:06-04:00",
          "tree_id": "2412bb1190e1a589146f641b1ed8614ee630a4cd",
          "url": "https://github.com/ibis-project/ibis/commit/2b1b4b3efc82b6b35e01f844825bd14348649a14"
        },
        "date": 1680009508134,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1088.255145047754,
            "unit": "iter/sec",
            "range": "stddev: 0.0004010937795036606",
            "extra": "mean: 918.9021568614947 usec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.56729674911318,
            "unit": "iter/sec",
            "range": "stddev: 0.008462587445549792",
            "extra": "mean: 6.965374584906481 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8859419994674087,
            "unit": "iter/sec",
            "range": "stddev: 0.007907814362196699",
            "extra": "mean: 1.1287420628000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8335.639526934985,
            "unit": "iter/sec",
            "range": "stddev: 0.000012990786972043526",
            "extra": "mean: 119.96680000001153 usec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 116.4082472601814,
            "unit": "iter/sec",
            "range": "stddev: 0.00046018019601745013",
            "extra": "mean: 8.590456634613894 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 107.6165916054845,
            "unit": "iter/sec",
            "range": "stddev: 0.000492678220579993",
            "extra": "mean: 9.292247460000738 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6201866.427966285,
            "unit": "iter/sec",
            "range": "stddev: 2.2011683372819623e-8",
            "extra": "mean: 161.24178287534 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.81463359996468,
            "unit": "iter/sec",
            "range": "stddev: 0.00014759343890249956",
            "extra": "mean: 10.891509999996174 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.04516971024097,
            "unit": "iter/sec",
            "range": "stddev: 0.000044333680493735983",
            "extra": "mean: 6.133269705426847 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7058517.235549672,
            "unit": "iter/sec",
            "range": "stddev: 3.675161962651022e-9",
            "extra": "mean: 141.6728140811044 nsec\nrounds: 59881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 123.0440013325412,
            "unit": "iter/sec",
            "range": "stddev: 0.0005197561931460198",
            "extra": "mean: 8.127173931034475 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 116.10058812469285,
            "unit": "iter/sec",
            "range": "stddev: 0.0005451454409016288",
            "extra": "mean: 8.61322079545362 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 271.7286352075862,
            "unit": "iter/sec",
            "range": "stddev: 0.008374566760677422",
            "extra": "mean: 3.680142136054425 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1955902.0476439146,
            "unit": "iter/sec",
            "range": "stddev: 7.584356788993778e-8",
            "extra": "mean: 511.27304723904916 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.29945258387357,
            "unit": "iter/sec",
            "range": "stddev: 0.000417957629522559",
            "extra": "mean: 17.15281972092846 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5224.036280093241,
            "unit": "iter/sec",
            "range": "stddev: 0.000048824515107709076",
            "extra": "mean: 191.42286660806874 usec\nrounds: 2279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.303394655493044,
            "unit": "iter/sec",
            "range": "stddev: 0.0007566491991784872",
            "extra": "mean: 22.57163379411634 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5432.59876469418,
            "unit": "iter/sec",
            "range": "stddev: 0.00005145546990607789",
            "extra": "mean: 184.07396594404915 usec\nrounds: 323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.93101161739202,
            "unit": "iter/sec",
            "range": "stddev: 0.0005267362722971827",
            "extra": "mean: 15.400961344827502 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 317.47211191641713,
            "unit": "iter/sec",
            "range": "stddev: 0.00019096348281294533",
            "extra": "mean: 3.149882973857169 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5676.640602062669,
            "unit": "iter/sec",
            "range": "stddev: 0.000050722782988722897",
            "extra": "mean: 176.16052699137572 usec\nrounds: 3038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5694.035135563793,
            "unit": "iter/sec",
            "range": "stddev: 0.00004820328554027114",
            "extra": "mean: 175.62237959407767 usec\nrounds: 3646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.71805679317215,
            "unit": "iter/sec",
            "range": "stddev: 0.00008199006977012821",
            "extra": "mean: 8.35295883333309 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.5574897790008,
            "unit": "iter/sec",
            "range": "stddev: 0.00004478116607368344",
            "extra": "mean: 7.217220820000421 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 317.6816220808984,
            "unit": "iter/sec",
            "range": "stddev: 0.00018190554166776078",
            "extra": "mean: 3.147805634615362 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6711023378809214,
            "unit": "iter/sec",
            "range": "stddev: 0.07270750253463669",
            "extra": "mean: 1.4900857045999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.80080732197636,
            "unit": "iter/sec",
            "range": "stddev: 0.000598851317337053",
            "extra": "mean: 8.210126205128784 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 330.52201582511566,
            "unit": "iter/sec",
            "range": "stddev: 0.000018080321713967806",
            "extra": "mean: 3.025517067308205 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6696453980956938,
            "unit": "iter/sec",
            "range": "stddev: 0.0009775280665328741",
            "extra": "mean: 598.9295697999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.82922615341225,
            "unit": "iter/sec",
            "range": "stddev: 0.0007676519513236181",
            "extra": "mean: 22.815826054052902 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.20794011206932,
            "unit": "iter/sec",
            "range": "stddev: 0.00021632608452476235",
            "extra": "mean: 9.880647693181805 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4991884797615604,
            "unit": "iter/sec",
            "range": "stddev: 0.003038421109160827",
            "extra": "mean: 400.12988540000265 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 291.4585153714709,
            "unit": "iter/sec",
            "range": "stddev: 0.000033204711224368864",
            "extra": "mean: 3.431020015748985 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5778.666918331562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000448584420878928",
            "extra": "mean: 173.05029241739436 usec\nrounds: 2110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5636854.820703166,
            "unit": "iter/sec",
            "range": "stddev: 8.770849655382528e-9",
            "extra": "mean: 177.4038948681727 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4288.964494388432,
            "unit": "iter/sec",
            "range": "stddev: 0.00034297730419193814",
            "extra": "mean: 233.15651162614506 usec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5499.049125762647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000563535468773863",
            "extra": "mean: 181.8496211126888 usec\nrounds: 2283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.38763503538489,
            "unit": "iter/sec",
            "range": "stddev: 0.0001246314853101636",
            "extra": "mean: 13.091123969694467 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.96153810292302,
            "unit": "iter/sec",
            "range": "stddev: 0.0007075592326112001",
            "extra": "mean: 9.712364621052709 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 675.3401045007216,
            "unit": "iter/sec",
            "range": "stddev: 0.00005915162676377961",
            "extra": "mean: 1.480735400334768 msec\nrounds: 597"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1746324.4667458318,
            "unit": "iter/sec",
            "range": "stddev: 8.797478289490807e-8",
            "extra": "mean: 572.6312715892016 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12056284.62255943,
            "unit": "iter/sec",
            "range": "stddev: 2.9923512731704852e-9",
            "extra": "mean: 82.9442926494592 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.68347577294195,
            "unit": "iter/sec",
            "range": "stddev: 0.0006432959449712966",
            "extra": "mean: 8.218042701754943 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.129730288046897,
            "unit": "iter/sec",
            "range": "stddev: 0.0009084359210059578",
            "extra": "mean: 39.793503095242365 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 122.04436898000073,
            "unit": "iter/sec",
            "range": "stddev: 0.0005775363789283539",
            "extra": "mean: 8.193741410256042 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.897772800829,
            "unit": "iter/sec",
            "range": "stddev: 0.0006380412830986651",
            "extra": "mean: 10.649879865853125 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.62721945674834,
            "unit": "iter/sec",
            "range": "stddev: 0.0006534780376441396",
            "extra": "mean: 9.291329879630176 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147901.72467896793,
            "unit": "iter/sec",
            "range": "stddev: 2.9031049819710384e-7",
            "extra": "mean: 6.761246376068819 usec\nrounds: 36631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 795021.4580024969,
            "unit": "iter/sec",
            "range": "stddev: 1.6258083106225487e-7",
            "extra": "mean: 1.2578276849438943 usec\nrounds: 23753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.57014608202391,
            "unit": "iter/sec",
            "range": "stddev: 0.00028820242170078946",
            "extra": "mean: 10.355167104651875 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 122.16355888203402,
            "unit": "iter/sec",
            "range": "stddev: 0.0005738242412101282",
            "extra": "mean: 8.185747117646104 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.891040861712527,
            "unit": "iter/sec",
            "range": "stddev: 0.007001615914089782",
            "extra": "mean: 1.1222829872000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2008012.8791512058,
            "unit": "iter/sec",
            "range": "stddev: 6.698240807293271e-8",
            "extra": "mean: 498.0047739647485 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11922.316854276365,
            "unit": "iter/sec",
            "range": "stddev: 0.000043513037748099285",
            "extra": "mean: 83.87631466457077 usec\nrounds: 3696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5222.107970902483,
            "unit": "iter/sec",
            "range": "stddev: 0.000050263639034959345",
            "extra": "mean: 191.49355118124458 usec\nrounds: 2286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.87298452544792,
            "unit": "iter/sec",
            "range": "stddev: 0.000018987369095995503",
            "extra": "mean: 5.00317740476167 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.86305498673755,
            "unit": "iter/sec",
            "range": "stddev: 0.0006007576321056291",
            "extra": "mean: 9.628062645833898 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.9660306288978,
            "unit": "iter/sec",
            "range": "stddev: 0.0006020843232608258",
            "extra": "mean: 9.177171951923887 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8102703974215877,
            "unit": "iter/sec",
            "range": "stddev: 0.0024593755295149013",
            "extra": "mean: 1.2341559103999884 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1977436.5441779888,
            "unit": "iter/sec",
            "range": "stddev: 1.1527181232325789e-7",
            "extra": "mean: 505.70522879443155 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.579089638240984,
            "unit": "iter/sec",
            "range": "stddev: 0.0013829988469274532",
            "extra": "mean: 179.2407121666694 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.71744959630635,
            "unit": "iter/sec",
            "range": "stddev: 0.0006691477615808977",
            "extra": "mean: 9.641579154638341 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74109.1698369673,
            "unit": "iter/sec",
            "range": "stddev: 4.971379359504777e-7",
            "extra": "mean: 13.493606826252394 usec\nrounds: 14327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 303.48217627275574,
            "unit": "iter/sec",
            "range": "stddev: 0.00021092219187432965",
            "extra": "mean: 3.2950864274192044 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 248.48494147470322,
            "unit": "iter/sec",
            "range": "stddev: 0.0034626476116380476",
            "extra": "mean: 4.024388737865647 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.6474475216299,
            "unit": "iter/sec",
            "range": "stddev: 0.00002508723932023249",
            "extra": "mean: 1.8599548916481545 msec\nrounds: 443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.645272970850854,
            "unit": "iter/sec",
            "range": "stddev: 0.0005424721251545427",
            "extra": "mean: 22.911988674417614 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.18606279632918,
            "unit": "iter/sec",
            "range": "stddev: 0.0006158044175049904",
            "extra": "mean: 8.251773982298984 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1753.0076331155583,
            "unit": "iter/sec",
            "range": "stddev: 0.000011048403965443002",
            "extra": "mean: 570.4481721067782 usec\nrounds: 1348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 307.2980803987665,
            "unit": "iter/sec",
            "range": "stddev: 0.00021241469166078706",
            "extra": "mean: 3.2541693677433527 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 257.593642495276,
            "unit": "iter/sec",
            "range": "stddev: 0.013475999684387108",
            "extra": "mean: 3.8820833865041484 msec\nrounds: 326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.421310972372877,
            "unit": "iter/sec",
            "range": "stddev: 0.0002156965690804438",
            "extra": "mean: 64.84533006250182 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.74609227705997,
            "unit": "iter/sec",
            "range": "stddev: 0.00005581860972442016",
            "extra": "mean: 6.0699467051288885 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 283.80116230207267,
            "unit": "iter/sec",
            "range": "stddev: 0.0002667970541716097",
            "extra": "mean: 3.5235937439030596 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13851.4930666586,
            "unit": "iter/sec",
            "range": "stddev: 0.000002099385563078756",
            "extra": "mean: 72.19438331937384 usec\nrounds: 7242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.9033635553142,
            "unit": "iter/sec",
            "range": "stddev: 0.000017685682151291153",
            "extra": "mean: 1.3299581415244386 msec\nrounds: 643"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.27708378502596,
            "unit": "iter/sec",
            "range": "stddev: 0.0003820494071387697",
            "extra": "mean: 20.713761511629844 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12730.898938195556,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014697475517889213",
            "extra": "mean: 78.54904864571466 usec\nrounds: 5612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5399.651652316332,
            "unit": "iter/sec",
            "range": "stddev: 0.000048108991572062165",
            "extra": "mean: 185.19713203554937 usec\nrounds: 2363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 303.6781745514807,
            "unit": "iter/sec",
            "range": "stddev: 0.00019730086100304512",
            "extra": "mean: 3.292959731060541 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 166.57824359354942,
            "unit": "iter/sec",
            "range": "stddev: 0.004066699835308138",
            "extra": "mean: 6.003184920354893 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 481332.23157495,
            "unit": "iter/sec",
            "range": "stddev: 3.8783268187674425e-7",
            "extra": "mean: 2.0775670823620844 usec\nrounds: 2005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.54125014326877,
            "unit": "iter/sec",
            "range": "stddev: 0.00004678984612426961",
            "extra": "mean: 3.4537393186814906 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.06963389232679,
            "unit": "iter/sec",
            "range": "stddev: 0.00010011287671286136",
            "extra": "mean: 15.368151627450958 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.6755730032396,
            "unit": "iter/sec",
            "range": "stddev: 0.0006276799289309645",
            "extra": "mean: 9.287157449999484 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.166431714809604,
            "unit": "iter/sec",
            "range": "stddev: 0.19751394108563392",
            "extra": "mean: 6.0084702074000065 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.518248614876073,
            "unit": "iter/sec",
            "range": "stddev: 0.0004245375070968204",
            "extra": "mean: 95.07286209090827 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.27131914644195,
            "unit": "iter/sec",
            "range": "stddev: 0.00010848648744355723",
            "extra": "mean: 8.906994302753693 msec\nrounds: 109"
          }
        ]
      }
    ]
  }
}