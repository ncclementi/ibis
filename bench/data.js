window.BENCHMARK_DATA = {
  "lastUpdate": 1682423815158,
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
          "id": "43b81529c947518aaa07ec3276502334796ce2f9",
          "message": "fix(snowflake): ensure that temp tables are only created once",
          "timestamp": "2023-04-25T07:46:05-04:00",
          "tree_id": "ba72f804a60f58f9553fd6c9af50582a8322becc",
          "url": "https://github.com/ibis-project/ibis/commit/43b81529c947518aaa07ec3276502334796ce2f9"
        },
        "date": 1682423719226,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 96.2069834562804,
            "unit": "iter/sec",
            "range": "stddev: 0.00010495689301121326",
            "extra": "mean: 10.394255843749978 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 162.71633569353574,
            "unit": "iter/sec",
            "range": "stddev: 0.005868150351014766",
            "extra": "mean: 6.14566445180665 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.95971798821938,
            "unit": "iter/sec",
            "range": "stddev: 0.00045441596044633033",
            "extra": "mean: 22.748098617647788 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 201.24732669404332,
            "unit": "iter/sec",
            "range": "stddev: 0.0009225982658696292",
            "extra": "mean: 4.969010105263668 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11923.257464560684,
            "unit": "iter/sec",
            "range": "stddev: 0.00004137721160183854",
            "extra": "mean: 83.86969777112377 usec\nrounds: 5294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 163.39869694696102,
            "unit": "iter/sec",
            "range": "stddev: 0.0001935564240996951",
            "extra": "mean: 6.119999845069747 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 398922.51516151533,
            "unit": "iter/sec",
            "range": "stddev: 3.072935596112751e-7",
            "extra": "mean: 2.506752469449164 usec\nrounds: 1721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 236.63771850273872,
            "unit": "iter/sec",
            "range": "stddev: 0.0003462756033497999",
            "extra": "mean: 4.225869004853622 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.5457534502894,
            "unit": "iter/sec",
            "range": "stddev: 0.00011547844397690966",
            "extra": "mean: 6.731932598360332 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.79606993868104,
            "unit": "iter/sec",
            "range": "stddev: 0.0002410429991522806",
            "extra": "mean: 11.655545536231505 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 124.20890481144501,
            "unit": "iter/sec",
            "range": "stddev: 0.004957035918482564",
            "extra": "mean: 8.050952558659521 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 871.6986166074909,
            "unit": "iter/sec",
            "range": "stddev: 0.0006176605626421785",
            "extra": "mean: 1.147185484694053 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 134888.78895420724,
            "unit": "iter/sec",
            "range": "stddev: 0.00001609936368763327",
            "extra": "mean: 7.413514553381344 usec\nrounds: 39063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1530112.8438905915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015476486210912749",
            "extra": "mean: 653.5465694525622 nsec\nrounds: 89286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4924634.09421389,
            "unit": "iter/sec",
            "range": "stddev: 5.70362852961759e-7",
            "extra": "mean: 203.06077179932927 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 239.76419879070482,
            "unit": "iter/sec",
            "range": "stddev: 0.000329580043681892",
            "extra": "mean: 4.170764463767674 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5676178.684087403,
            "unit": "iter/sec",
            "range": "stddev: 3.4023401414709473e-8",
            "extra": "mean: 176.1748626420351 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.14265475915947,
            "unit": "iter/sec",
            "range": "stddev: 0.0008422064757771452",
            "extra": "mean: 12.323974400000992 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1782192560425044,
            "unit": "iter/sec",
            "range": "stddev: 0.0026869179456023686",
            "extra": "mean: 459.09060680000096 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1939.8703232743014,
            "unit": "iter/sec",
            "range": "stddev: 0.00010203959042958964",
            "extra": "mean: 515.4983753306267 usec\nrounds: 1135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 365.85974189862515,
            "unit": "iter/sec",
            "range": "stddev: 0.00004444911608265393",
            "extra": "mean: 2.73328788461532 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 88.28641954479227,
            "unit": "iter/sec",
            "range": "stddev: 0.0008958479605224309",
            "extra": "mean: 11.32677035897518 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1833.223666890094,
            "unit": "iter/sec",
            "range": "stddev: 0.00016522000413866128",
            "extra": "mean: 545.4871754391071 usec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 92.8239709746616,
            "unit": "iter/sec",
            "range": "stddev: 0.0006138432372187672",
            "extra": "mean: 10.773079297296734 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.97686779042392,
            "unit": "iter/sec",
            "range": "stddev: 0.0016691848729988657",
            "extra": "mean: 21.287072702702556 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.403404900503077,
            "unit": "iter/sec",
            "range": "stddev: 0.0002062158044970596",
            "extra": "mean: 135.07298512499943 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1565581.7323068464,
            "unit": "iter/sec",
            "range": "stddev: 1.507952695553412e-7",
            "extra": "mean: 638.7402071474892 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 106.75991270030887,
            "unit": "iter/sec",
            "range": "stddev: 0.00041867366169975385",
            "extra": "mean: 9.366811705880187 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 241.6886403200503,
            "unit": "iter/sec",
            "range": "stddev: 0.0002932726922868609",
            "extra": "mean: 4.1375548253975625 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 72.87054864502859,
            "unit": "iter/sec",
            "range": "stddev: 0.016997987950508952",
            "extra": "mean: 13.722965156626723 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7225021441902049,
            "unit": "iter/sec",
            "range": "stddev: 0.02428927703717847",
            "extra": "mean: 1.3840789373999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.33859982907769,
            "unit": "iter/sec",
            "range": "stddev: 0.001069788369084836",
            "extra": "mean: 32.9613102000034 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 83.30791739049425,
            "unit": "iter/sec",
            "range": "stddev: 0.0011131867504097091",
            "extra": "mean: 12.003661012345795 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 266.87812595943285,
            "unit": "iter/sec",
            "range": "stddev: 0.0002484673142086989",
            "extra": "mean: 3.7470287098464046 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.66913397377952,
            "unit": "iter/sec",
            "range": "stddev: 0.0005238172867501188",
            "extra": "mean: 13.392414600002667 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 79.09412548947353,
            "unit": "iter/sec",
            "range": "stddev: 0.0011818940074772896",
            "extra": "mean: 12.643164000000077 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 228.7288174509778,
            "unit": "iter/sec",
            "range": "stddev: 0.0004917154685507849",
            "extra": "mean: 4.3719895514010805 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 68.27600920908326,
            "unit": "iter/sec",
            "range": "stddev: 0.022865722167294194",
            "extra": "mean: 14.646433082192546 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.314387891215084,
            "unit": "iter/sec",
            "range": "stddev: 0.0006975703988989133",
            "extra": "mean: 27.537294666666067 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3825.636971472375,
            "unit": "iter/sec",
            "range": "stddev: 0.00003792729407098509",
            "extra": "mean: 261.39437888564987 usec\nrounds: 2027"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 67.66604499210393,
            "unit": "iter/sec",
            "range": "stddev: 0.026076759410488565",
            "extra": "mean: 14.778460897436693 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.81855259562288,
            "unit": "iter/sec",
            "range": "stddev: 0.0010986400231611806",
            "extra": "mean: 12.074589191176615 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 644208.2148335255,
            "unit": "iter/sec",
            "range": "stddev: 1.5716701445274358e-7",
            "extra": "mean: 1.5522931514594502 usec\nrounds: 21552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 111.92012710154485,
            "unit": "iter/sec",
            "range": "stddev: 0.00008108736541461522",
            "extra": "mean: 8.934943391305325 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.728723383716174,
            "unit": "iter/sec",
            "range": "stddev: 0.010858959872434234",
            "extra": "mean: 1.3722628123999983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.1909639642413,
            "unit": "iter/sec",
            "range": "stddev: 0.001104632182695729",
            "extra": "mean: 49.52710538095283 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 453.4757554484087,
            "unit": "iter/sec",
            "range": "stddev: 0.000031994310224076156",
            "extra": "mean: 2.2051895564100747 msec\nrounds: 390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.70345303383279,
            "unit": "iter/sec",
            "range": "stddev: 0.0010049665336955194",
            "extra": "mean: 11.668141301205615 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 83.25772519733506,
            "unit": "iter/sec",
            "range": "stddev: 0.0011758903473782474",
            "extra": "mean: 12.010897458822335 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.361058377039647,
            "unit": "iter/sec",
            "range": "stddev: 0.0002480245915659141",
            "extra": "mean: 61.120740294121426 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 21.329620570506297,
            "unit": "iter/sec",
            "range": "stddev: 0.04148542155881405",
            "extra": "mean: 46.883159346151615 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 185.04901453652926,
            "unit": "iter/sec",
            "range": "stddev: 0.004376409035518541",
            "extra": "mean: 5.403973658031002 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1855.6475843664962,
            "unit": "iter/sec",
            "range": "stddev: 0.0001046682359943552",
            "extra": "mean: 538.8954284341615 usec\nrounds: 1041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.12685557585036,
            "unit": "iter/sec",
            "range": "stddev: 0.0010491872825393407",
            "extra": "mean: 12.029806650000552 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4166753446295433,
            "unit": "iter/sec",
            "range": "stddev: 0.0023400538413943803",
            "extra": "mean: 705.8780290000016 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 234.10153607906025,
            "unit": "iter/sec",
            "range": "stddev: 0.0004609191516715747",
            "extra": "mean: 4.2716507407379085 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14629070600735397,
            "unit": "iter/sec",
            "range": "stddev: 0.18562942026634613",
            "extra": "mean: 6.835704244599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1502.3205886445717,
            "unit": "iter/sec",
            "range": "stddev: 0.000008342884591259415",
            "extra": "mean: 665.636887065645 usec\nrounds: 1036"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57288.39654401399,
            "unit": "iter/sec",
            "range": "stddev: 9.902591116258073e-7",
            "extra": "mean: 17.455541790765814 usec\nrounds: 11737"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1895.7070048880719,
            "unit": "iter/sec",
            "range": "stddev: 0.00010130231017497406",
            "extra": "mean: 527.5076778328637 usec\nrounds: 1015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1572445016702972,
            "unit": "iter/sec",
            "range": "stddev: 0.0015487207734940713",
            "extra": "mean: 864.1216256000007 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 230.37344398042356,
            "unit": "iter/sec",
            "range": "stddev: 0.0003425990066604303",
            "extra": "mean: 4.3407780980388395 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7194.0808130991245,
            "unit": "iter/sec",
            "range": "stddev: 0.00001543406578375443",
            "extra": "mean: 139.00316468216207 usec\nrounds: 504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.03933760571636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000798392465165898",
            "extra": "mean: 7.19220917777795 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4564497.844248442,
            "unit": "iter/sec",
            "range": "stddev: 1.5724821408895655e-8",
            "extra": "mean: 219.08214969615594 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1798.9980293978656,
            "unit": "iter/sec",
            "range": "stddev: 0.00015381724593645221",
            "extra": "mean: 555.8649779814964 usec\nrounds: 1090"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9713393.305894328,
            "unit": "iter/sec",
            "range": "stddev: 5.090235348888785e-9",
            "extra": "mean: 102.95063408918416 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 79.54551943364393,
            "unit": "iter/sec",
            "range": "stddev: 0.0011611938848897873",
            "extra": "mean: 12.571418316454515 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9161.3211336378,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021326763230277608",
            "extra": "mean: 109.1545624711572 usec\nrounds: 4322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6748694710424517,
            "unit": "iter/sec",
            "range": "stddev: 0.004439079800416682",
            "extra": "mean: 1.4817680202000076 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 73.03461759177016,
            "unit": "iter/sec",
            "range": "stddev: 0.022158604813162487",
            "extra": "mean: 13.69213713953483 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 238.73561336142765,
            "unit": "iter/sec",
            "range": "stddev: 0.00037978086141624647",
            "extra": "mean: 4.188734080851505 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.46486378135279,
            "unit": "iter/sec",
            "range": "stddev: 0.0011267355408539866",
            "extra": "mean: 28.196922062500462 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10596.541630087897,
            "unit": "iter/sec",
            "range": "stddev: 0.00005220124573961891",
            "extra": "mean: 94.37041205600447 usec\nrounds: 3633"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1876.4476052883147,
            "unit": "iter/sec",
            "range": "stddev: 0.00010841619151386087",
            "extra": "mean: 532.9218877104489 usec\nrounds: 1131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 130.21057524018622,
            "unit": "iter/sec",
            "range": "stddev: 0.00017189771077663214",
            "extra": "mean: 7.679867769229968 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 89.76699811710945,
            "unit": "iter/sec",
            "range": "stddev: 0.0001303681619478427",
            "extra": "mean: 11.139951440677635 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.18227487351816,
            "unit": "iter/sec",
            "range": "stddev: 0.0005879280830120477",
            "extra": "mean: 26.894535189190822 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1357615.1467948975,
            "unit": "iter/sec",
            "range": "stddev: 1.6067678688170806e-7",
            "extra": "mean: 736.5857712775471 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 575.8064609592592,
            "unit": "iter/sec",
            "range": "stddev: 0.00006942011054164086",
            "extra": "mean: 1.7366946496815263 msec\nrounds: 471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1878.670293873095,
            "unit": "iter/sec",
            "range": "stddev: 0.00011319058235430334",
            "extra": "mean: 532.2913782483806 usec\nrounds: 1039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 60.659771088425515,
            "unit": "iter/sec",
            "range": "stddev: 0.027302454367445234",
            "extra": "mean: 16.485390268655497 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 83.24391623655194,
            "unit": "iter/sec",
            "range": "stddev: 0.0011683585740023626",
            "extra": "mean: 12.012889892858087 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 629.1883390191051,
            "unit": "iter/sec",
            "range": "stddev: 0.00015503900991173952",
            "extra": "mean: 1.589349226590856 msec\nrounds: 534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1910.9572674223054,
            "unit": "iter/sec",
            "range": "stddev: 0.00010436688681832182",
            "extra": "mean: 523.2979392306885 usec\nrounds: 1300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1565153.2104938452,
            "unit": "iter/sec",
            "range": "stddev: 1.1357087282347307e-7",
            "extra": "mean: 638.9150872229786 nsec\nrounds: 98030"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.98616362678675,
            "unit": "iter/sec",
            "range": "stddev: 0.00035077594600969235",
            "extra": "mean: 23.26329952777763 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.76610704732698,
            "unit": "iter/sec",
            "range": "stddev: 0.0009850319340469517",
            "extra": "mean: 11.938002555556395 msec\nrounds: 81"
          }
        ]
      }
    ]
  }
}