window.BENCHMARK_DATA = {
  "lastUpdate": 1677498340230,
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
          "id": "58443042aed5fc1e33a232f2025f9dbd4015464f",
          "message": "feat(api): more selectors",
          "timestamp": "2023-02-27T12:32:57+01:00",
          "tree_id": "514b58a2a88532c0fe13188b57541e9124aa8ab1",
          "url": "https://github.com/ibis-project/ibis/commit/58443042aed5fc1e33a232f2025f9dbd4015464f"
        },
        "date": 1677498257235,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5444366034702284,
            "unit": "iter/sec",
            "range": "stddev: 0.0010671670778405926",
            "extra": "mean: 647.4853015999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 975.4504363039019,
            "unit": "iter/sec",
            "range": "stddev: 0.00002062170086347471",
            "extra": "mean: 1.0251674126971733 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 384359.5466709066,
            "unit": "iter/sec",
            "range": "stddev: 3.918133110860762e-7",
            "extra": "mean: 2.6017306156732785 usec\nrounds: 1251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 568204.3537142858,
            "unit": "iter/sec",
            "range": "stddev: 1.7730921854355516e-7",
            "extra": "mean: 1.7599301967032044 usec\nrounds: 24039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5590776.750712569,
            "unit": "iter/sec",
            "range": "stddev: 6.3975127167896826e-9",
            "extra": "mean: 178.86602248477706 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4440183.357101623,
            "unit": "iter/sec",
            "range": "stddev: 1.0598371430076958e-8",
            "extra": "mean: 225.2159245637131 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 115702.82740762399,
            "unit": "iter/sec",
            "range": "stddev: 4.054703623506946e-7",
            "extra": "mean: 8.64283114255259 usec\nrounds: 30582"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 267.41525620082814,
            "unit": "iter/sec",
            "range": "stddev: 0.00001810303808248138",
            "extra": "mean: 3.739502428571251 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 261.51885157978256,
            "unit": "iter/sec",
            "range": "stddev: 0.00019591019261213467",
            "extra": "mean: 3.823816118643845 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.52891771725957,
            "unit": "iter/sec",
            "range": "stddev: 0.0006771757462578689",
            "extra": "mean: 10.57877339705768 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 247.6886520618379,
            "unit": "iter/sec",
            "range": "stddev: 0.00018438462230437242",
            "extra": "mean: 4.037326666666748 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.818368046091877,
            "unit": "iter/sec",
            "range": "stddev: 0.004955004255389623",
            "extra": "mean: 207.53914819999864 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 108.0327398388046,
            "unit": "iter/sec",
            "range": "stddev: 0.00009572340369162846",
            "extra": "mean: 9.25645319643006 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.205344941837459,
            "unit": "iter/sec",
            "range": "stddev: 0.003062352334573513",
            "extra": "mean: 453.44380419999766 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7302569633007617,
            "unit": "iter/sec",
            "range": "stddev: 0.003681068632751569",
            "extra": "mean: 1.369380985399988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 270.2157259184922,
            "unit": "iter/sec",
            "range": "stddev: 0.00004042803098561323",
            "extra": "mean: 3.7007468629033085 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.80562741494879,
            "unit": "iter/sec",
            "range": "stddev: 0.00008541655675304884",
            "extra": "mean: 14.748038446430403 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8497681685171476,
            "unit": "iter/sec",
            "range": "stddev: 0.003129477416238247",
            "extra": "mean: 1.176791549799998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4515.400046123469,
            "unit": "iter/sec",
            "range": "stddev: 0.00004778505514724388",
            "extra": "mean: 221.46431983551787 usec\nrounds: 1704"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4435.9998200822665,
            "unit": "iter/sec",
            "range": "stddev: 0.000020273986570532815",
            "extra": "mean: 225.42832293925903 usec\nrounds: 1443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.97939681747647,
            "unit": "iter/sec",
            "range": "stddev: 0.00011570723975022589",
            "extra": "mean: 10.41890273494524 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.72337168848064,
            "unit": "iter/sec",
            "range": "stddev: 0.000678354175506883",
            "extra": "mean: 29.65302548148185 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 537.8653133828816,
            "unit": "iter/sec",
            "range": "stddev: 0.00004928186082942976",
            "extra": "mean: 1.8592015047606278 msec\nrounds: 420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.63319195530319,
            "unit": "iter/sec",
            "range": "stddev: 0.0005657931949722369",
            "extra": "mean: 11.677714880953598 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1578365.1459275675,
            "unit": "iter/sec",
            "range": "stddev: 1.0970950406384917e-7",
            "extra": "mean: 633.5669553906197 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1415411.4143595104,
            "unit": "iter/sec",
            "range": "stddev: 1.0597548475543101e-7",
            "extra": "mean: 706.508362059883 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 227.68980244686958,
            "unit": "iter/sec",
            "range": "stddev: 0.0004290907754648855",
            "extra": "mean: 4.391940215387317 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 64.46301654108831,
            "unit": "iter/sec",
            "range": "stddev: 0.01653765172757899",
            "extra": "mean: 15.512770789474404 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1916045.2281595843,
            "unit": "iter/sec",
            "range": "stddev: 5.2616514584351696e-8",
            "extra": "mean: 521.9083481450839 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 254.06306027461665,
            "unit": "iter/sec",
            "range": "stddev: 0.0002653985668811786",
            "extra": "mean: 3.9360306804109984 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1439.6659039486585,
            "unit": "iter/sec",
            "range": "stddev: 0.000007769668512477288",
            "extra": "mean: 694.6056006864089 usec\nrounds: 1167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 131.38577626888983,
            "unit": "iter/sec",
            "range": "stddev: 0.000070151146111364",
            "extra": "mean: 7.611173967214173 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.585029196478846,
            "unit": "iter/sec",
            "range": "stddev: 0.0008110446351942015",
            "extra": "mean: 39.08535700000786 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.04219117890736,
            "unit": "iter/sec",
            "range": "stddev: 0.00009824826106485876",
            "extra": "mean: 6.942410357795458 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9312.287061884193,
            "unit": "iter/sec",
            "range": "stddev: 0.000013481754859645711",
            "extra": "mean: 107.38500578370979 usec\nrounds: 4150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 113.33531936728124,
            "unit": "iter/sec",
            "range": "stddev: 0.0005268432867923174",
            "extra": "mean: 8.82337479245406 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4030.1442771406437,
            "unit": "iter/sec",
            "range": "stddev: 0.00006427582633902146",
            "extra": "mean: 248.13007456633596 usec\nrounds: 2253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 98.39444337210871,
            "unit": "iter/sec",
            "range": "stddev: 0.00006830020221199467",
            "extra": "mean: 10.163175538462003 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8496037193456717,
            "unit": "iter/sec",
            "range": "stddev: 0.002233707582716817",
            "extra": "mean: 1.1770193294000137 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 99.43066521482963,
            "unit": "iter/sec",
            "range": "stddev: 0.012202383727490523",
            "extra": "mean: 10.057259476635327 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 112.7156339866226,
            "unit": "iter/sec",
            "range": "stddev: 0.0006743902728101818",
            "extra": "mean: 8.871883736365113 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.48421982366925,
            "unit": "iter/sec",
            "range": "stddev: 0.00032862905383325723",
            "extra": "mean: 14.187572800006944 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 258.4976205132277,
            "unit": "iter/sec",
            "range": "stddev: 0.00019303265903041508",
            "extra": "mean: 3.868507563104739 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.80148414853072,
            "unit": "iter/sec",
            "range": "stddev: 0.0014326939686214281",
            "extra": "mean: 25.124691236844622 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12914049.395356635,
            "unit": "iter/sec",
            "range": "stddev: 3.3677179381184623e-9",
            "extra": "mean: 77.43504530494181 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 251.1979503442411,
            "unit": "iter/sec",
            "range": "stddev: 0.0002615309054660741",
            "extra": "mean: 3.980924201927612 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.476113487290586,
            "unit": "iter/sec",
            "range": "stddev: 0.001083695639644827",
            "extra": "mean: 74.2053709285772 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 105.22947648694351,
            "unit": "iter/sec",
            "range": "stddev: 0.0006192045045442888",
            "extra": "mean: 9.503040720002787 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 116.47899694849357,
            "unit": "iter/sec",
            "range": "stddev: 0.00017083038810220236",
            "extra": "mean: 8.585238765768175 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5740198235902341,
            "unit": "iter/sec",
            "range": "stddev: 0.05853035768919838",
            "extra": "mean: 1.7421001137999952 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 112.97713090345968,
            "unit": "iter/sec",
            "range": "stddev: 0.0006297119954104172",
            "extra": "mean: 8.851348870370165 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.544429379748905,
            "unit": "iter/sec",
            "range": "stddev: 0.0002346177797003888",
            "extra": "mean: 17.377876725491017 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 167.85208453730237,
            "unit": "iter/sec",
            "range": "stddev: 0.00018388034536428942",
            "extra": "mean: 5.957626339622648 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 86.51033009692303,
            "unit": "iter/sec",
            "range": "stddev: 0.0006448014010794387",
            "extra": "mean: 11.559313192767112 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 54427.83446458005,
            "unit": "iter/sec",
            "range": "stddev: 5.368876334893034e-7",
            "extra": "mean: 18.37295218222891 usec\nrounds: 12485"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3953.0208057836116,
            "unit": "iter/sec",
            "range": "stddev: 0.00007039783789383302",
            "extra": "mean: 252.97109454544568 usec\nrounds: 1650"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4598984.598622472,
            "unit": "iter/sec",
            "range": "stddev: 1.0483302087405412e-8",
            "extra": "mean: 217.4393017752926 nsec\nrounds: 192345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 88.08408638424272,
            "unit": "iter/sec",
            "range": "stddev: 0.0005949985880553878",
            "extra": "mean: 11.35278846666779 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.60537966373103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006670300971273156",
            "extra": "mean: 14.791722270831068 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.43191770362331,
            "unit": "iter/sec",
            "range": "stddev: 0.013431188701671561",
            "extra": "mean: 10.057132790908243 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.87368365434945,
            "unit": "iter/sec",
            "range": "stddev: 0.00024009538141407752",
            "extra": "mean: 11.510965783133722 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.45712669747093,
            "unit": "iter/sec",
            "range": "stddev: 0.0006608526803165217",
            "extra": "mean: 11.982200197533329 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4495.123440850941,
            "unit": "iter/sec",
            "range": "stddev: 0.000052680754833006136",
            "extra": "mean: 222.46330121041058 usec\nrounds: 2563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6503.49395421865,
            "unit": "iter/sec",
            "range": "stddev: 0.00001414131301696112",
            "extra": "mean: 153.76350113331398 usec\nrounds: 3969"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4101.476121866659,
            "unit": "iter/sec",
            "range": "stddev: 0.000048519729101404936",
            "extra": "mean: 243.81465850028675 usec\nrounds: 2041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 332.1298912852529,
            "unit": "iter/sec",
            "range": "stddev: 0.0000331876413341647",
            "extra": "mean: 3.0108702234847646 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10850.143470291963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015641875853651855",
            "extra": "mean: 92.1646799176464 usec\nrounds: 6314"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10242.97527008025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020763163188463736",
            "extra": "mean: 97.62788385528977 usec\nrounds: 4658"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.12339120631839,
            "unit": "iter/sec",
            "range": "stddev: 0.0005597048340467615",
            "extra": "mean: 11.887300139237508 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.06080013688502,
            "unit": "iter/sec",
            "range": "stddev: 0.0005560011085232766",
            "extra": "mean: 11.228284480523598 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15156265747066447,
            "unit": "iter/sec",
            "range": "stddev: 0.09042922009210648",
            "extra": "mean: 6.597931289200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4394.212237730957,
            "unit": "iter/sec",
            "range": "stddev: 0.00004833514461086818",
            "extra": "mean: 227.57207569845804 usec\nrounds: 2008"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 619.9714125967456,
            "unit": "iter/sec",
            "range": "stddev: 0.00004229602645351567",
            "extra": "mean: 1.6129775981307064 msec\nrounds: 535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1455546.5406032687,
            "unit": "iter/sec",
            "range": "stddev: 8.591405601135359e-8",
            "extra": "mean: 687.0271558513945 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 260.8785255823682,
            "unit": "iter/sec",
            "range": "stddev: 0.00019182815083591261",
            "extra": "mean: 3.8332016702703506 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 107.95083889032668,
            "unit": "iter/sec",
            "range": "stddev: 0.0006008321425543645",
            "extra": "mean: 9.263475951455609 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4534.312199839269,
            "unit": "iter/sec",
            "range": "stddev: 0.000056719356260397204",
            "extra": "mean: 220.54061474537366 usec\nrounds: 2767"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.98563155010692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005500280555176426",
            "extra": "mean: 27.78886897142781 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 157.88617278606503,
            "unit": "iter/sec",
            "range": "stddev: 0.00007631228746434658",
            "extra": "mean: 6.333676865769588 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 425.2870629553212,
            "unit": "iter/sec",
            "range": "stddev: 0.000028140635763150707",
            "extra": "mean: 2.351352973332875 msec\nrounds: 375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.75682744489174,
            "unit": "iter/sec",
            "range": "stddev: 0.0001656214983698734",
            "extra": "mean: 22.342959880954066 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.133013361863966,
            "unit": "iter/sec",
            "range": "stddev: 0.0005163179059635729",
            "extra": "mean: 109.49288699999329 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}