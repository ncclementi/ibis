window.BENCHMARK_DATA = {
  "lastUpdate": 1680009272706,
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
      }
    ]
  }
}