window.BENCHMARK_DATA = {
  "lastUpdate": 1678106991808,
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
          "id": "2430f5242409179bb2fd9987196340a2271de2f1",
          "message": "ci: load parquet instead of csv in druid",
          "timestamp": "2023-03-06T13:33:39+01:00",
          "tree_id": "6321978472c9266bd97e6d6793b34f4a95684a72",
          "url": "https://github.com/ibis-project/ibis/commit/2430f5242409179bb2fd9987196340a2271de2f1"
        },
        "date": 1678106275454,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6959977199560099,
            "unit": "iter/sec",
            "range": "stddev: 0.016678505241710433",
            "extra": "mean: 1.436786316000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 560990.7276883654,
            "unit": "iter/sec",
            "range": "stddev: 0.000033975863936833097",
            "extra": "mean: 1.7825606567877317 usec\nrounds: 20039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10471.08005508128,
            "unit": "iter/sec",
            "range": "stddev: 0.00011076390935222259",
            "extra": "mean: 95.50113214106621 usec\nrounds: 6039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 69.70405040338032,
            "unit": "iter/sec",
            "range": "stddev: 0.0024677329192790616",
            "extra": "mean: 14.346368600001824 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 92.04533014229094,
            "unit": "iter/sec",
            "range": "stddev: 0.01597207138858214",
            "extra": "mean: 10.864212214287472 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.59117974204435,
            "unit": "iter/sec",
            "range": "stddev: 0.0016334486155842839",
            "extra": "mean: 21.012296930234566 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 189.90485903847883,
            "unit": "iter/sec",
            "range": "stddev: 0.00491994521677562",
            "extra": "mean: 5.26579469879377 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 88.85246798380359,
            "unit": "iter/sec",
            "range": "stddev: 0.0010383416366478288",
            "extra": "mean: 11.25461141025688 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.79714153632317,
            "unit": "iter/sec",
            "range": "stddev: 0.0013393169552354989",
            "extra": "mean: 12.077711638889118 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.42962946005107,
            "unit": "iter/sec",
            "range": "stddev: 0.0011071114372165876",
            "extra": "mean: 11.437770080644418 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.63968453319194,
            "unit": "iter/sec",
            "range": "stddev: 0.0018571755835103724",
            "extra": "mean: 32.63741175000353 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 619.0173601136047,
            "unit": "iter/sec",
            "range": "stddev: 0.0002677900465437445",
            "extra": "mean: 1.6154635789478922 msec\nrounds: 513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4502493.006279784,
            "unit": "iter/sec",
            "range": "stddev: 5.285491379112814e-7",
            "extra": "mean: 222.0991789671481 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 113.79007901148788,
            "unit": "iter/sec",
            "range": "stddev: 0.0013582964411439401",
            "extra": "mean: 8.788112361702844 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4299.606291445563,
            "unit": "iter/sec",
            "range": "stddev: 0.0001046453751706435",
            "extra": "mean: 232.57943453789855 usec\nrounds: 2490"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 427.40226763257226,
            "unit": "iter/sec",
            "range": "stddev: 0.00023174056691829836",
            "extra": "mean: 2.3397161777804993 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 262.8540463958965,
            "unit": "iter/sec",
            "range": "stddev: 0.0007294375880732468",
            "extra": "mean: 3.804392641891669 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.476220086564443,
            "unit": "iter/sec",
            "range": "stddev: 0.006919001119862552",
            "extra": "mean: 677.4057670000047 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.919748756424741,
            "unit": "iter/sec",
            "range": "stddev: 0.03480549282642011",
            "extra": "mean: 126.26663177777824 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4677.490413500973,
            "unit": "iter/sec",
            "range": "stddev: 0.00008692289770938708",
            "extra": "mean: 213.78985558444523 usec\nrounds: 1925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.26771382436662,
            "unit": "iter/sec",
            "range": "stddev: 0.0018785340212046872",
            "extra": "mean: 27.572733281250983 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 82.09127698536855,
            "unit": "iter/sec",
            "range": "stddev: 0.0008797808513121336",
            "extra": "mean: 12.181562240507404 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 244.75486413613802,
            "unit": "iter/sec",
            "range": "stddev: 0.0002907215259294737",
            "extra": "mean: 4.0857206394222185 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1582619.47159954,
            "unit": "iter/sec",
            "range": "stddev: 4.1116111567946617e-7",
            "extra": "mean: 631.8638295213874 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.89742401650444,
            "unit": "iter/sec",
            "range": "stddev: 0.0007756712057105526",
            "extra": "mean: 17.57548812244868 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11939.901355625221,
            "unit": "iter/sec",
            "range": "stddev: 0.000005981724308677205",
            "extra": "mean: 83.75278574046779 usec\nrounds: 5456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.59030080927306,
            "unit": "iter/sec",
            "range": "stddev: 0.00041026482437902715",
            "extra": "mean: 3.602431342466395 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 262.4054117325802,
            "unit": "iter/sec",
            "range": "stddev: 0.000259611266556863",
            "extra": "mean: 3.810897013888987 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.60369405325025,
            "unit": "iter/sec",
            "range": "stddev: 0.00020906057581141939",
            "extra": "mean: 7.061962660550005 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7643951221923097,
            "unit": "iter/sec",
            "range": "stddev: 0.006982027317555491",
            "extra": "mean: 1.3082239420000064 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.87952606398914,
            "unit": "iter/sec",
            "range": "stddev: 0.0004907912606096422",
            "extra": "mean: 24.462123128205786 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1030.828038392022,
            "unit": "iter/sec",
            "range": "stddev: 0.00004598452008321948",
            "extra": "mean: 970.0939077674775 usec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150133.92986500706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013203259536414448",
            "extra": "mean: 6.660719538209318 usec\nrounds: 44441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.46106218072825,
            "unit": "iter/sec",
            "range": "stddev: 0.0006891876260294622",
            "extra": "mean: 10.933614547620133 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 105.01718405031303,
            "unit": "iter/sec",
            "range": "stddev: 0.013503207447246618",
            "extra": "mean: 9.522251134832436 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.53788367522609,
            "unit": "iter/sec",
            "range": "stddev: 0.000643644900618412",
            "extra": "mean: 18.005727511112784 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 106.12698871641965,
            "unit": "iter/sec",
            "range": "stddev: 0.0002519262097838397",
            "extra": "mean: 9.422673837209167 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1452701498505425,
            "unit": "iter/sec",
            "range": "stddev: 0.13829550042018632",
            "extra": "mean: 6.883726636400008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10383.205617328775,
            "unit": "iter/sec",
            "range": "stddev: 0.000020054001633634503",
            "extra": "mean: 96.30937081040528 usec\nrounds: 3700"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1656003.071517521,
            "unit": "iter/sec",
            "range": "stddev: 1.9835638157861542e-7",
            "extra": "mean: 603.8636142646911 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.544871184649391,
            "unit": "iter/sec",
            "range": "stddev: 0.0003269203771011273",
            "extra": "mean: 73.82868292858446 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.88784100251952,
            "unit": "iter/sec",
            "range": "stddev: 0.0007149941737619963",
            "extra": "mean: 8.937521638097223 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.13157557442936,
            "unit": "iter/sec",
            "range": "stddev: 0.00022960631327572005",
            "extra": "mean: 15.121369653056671 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 114.6786716150826,
            "unit": "iter/sec",
            "range": "stddev: 0.00013010265090754566",
            "extra": "mean: 8.72001729629801 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4861.023413330984,
            "unit": "iter/sec",
            "range": "stddev: 0.000058735589947116094",
            "extra": "mean: 205.7179970081149 usec\nrounds: 2005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 122.25651016558959,
            "unit": "iter/sec",
            "range": "stddev: 0.0007519263731147602",
            "extra": "mean: 8.179523516952644 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1916815604797817,
            "unit": "iter/sec",
            "range": "stddev: 0.0026422882788366218",
            "extra": "mean: 456.270663600003 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 75.161201125837,
            "unit": "iter/sec",
            "range": "stddev: 0.01843053475685175",
            "extra": "mean: 13.304736819276902 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 62709.89811290381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023181717514167553",
            "extra": "mean: 15.94644593744333 usec\nrounds: 12578"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.9763890444454475,
            "unit": "iter/sec",
            "range": "stddev: 0.0007334801854859536",
            "extra": "mean: 200.94891919999327 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4736.249077701088,
            "unit": "iter/sec",
            "range": "stddev: 0.000057778847551534125",
            "extra": "mean: 211.13754441423646 usec\nrounds: 2274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 94.76439090205321,
            "unit": "iter/sec",
            "range": "stddev: 0.0007268865044850087",
            "extra": "mean: 10.552486967742793 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.23417307714844,
            "unit": "iter/sec",
            "range": "stddev: 0.0007606456577243452",
            "extra": "mean: 11.08227588172188 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 256.3261787128022,
            "unit": "iter/sec",
            "range": "stddev: 0.000146230549199666",
            "extra": "mean: 3.901279241245346 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.23774161560004,
            "unit": "iter/sec",
            "range": "stddev: 0.00019796405639758074",
            "extra": "mean: 7.080260478262616 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4592.725658953201,
            "unit": "iter/sec",
            "range": "stddev: 0.0000591851222239586",
            "extra": "mean: 217.73562678418844 usec\nrounds: 2382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.00302962872203,
            "unit": "iter/sec",
            "range": "stddev: 0.0007385356040587866",
            "extra": "mean: 8.695423096490753 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.4870505445913,
            "unit": "iter/sec",
            "range": "stddev: 0.00026086992075135455",
            "extra": "mean: 3.6037717725472858 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.768233921212673,
            "unit": "iter/sec",
            "range": "stddev: 0.03224674910157139",
            "extra": "mean: 33.59285615151679 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 248.0030900977979,
            "unit": "iter/sec",
            "range": "stddev: 0.000040206454099043145",
            "extra": "mean: 4.0322078229172815 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.56700917119987,
            "unit": "iter/sec",
            "range": "stddev: 0.0007112911542973363",
            "extra": "mean: 10.802984874995047 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4884.540537647164,
            "unit": "iter/sec",
            "range": "stddev: 0.00006351373504420272",
            "extra": "mean: 204.72754648929384 usec\nrounds: 3162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.96729047602619,
            "unit": "iter/sec",
            "range": "stddev: 0.000685660077868945",
            "extra": "mean: 8.266697518517903 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 142.55035318004744,
            "unit": "iter/sec",
            "range": "stddev: 0.004537109347533505",
            "extra": "mean: 7.015065046783542 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7266.573900901405,
            "unit": "iter/sec",
            "range": "stddev: 0.00002044440465454141",
            "extra": "mean: 137.61643570100512 usec\nrounds: 2745"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10187848.127956768,
            "unit": "iter/sec",
            "range": "stddev: 2.1936185850365596e-8",
            "extra": "mean: 98.15615500353667 nsec\nrounds: 106372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 92.37733331712401,
            "unit": "iter/sec",
            "range": "stddev: 0.021163522979706827",
            "extra": "mean: 10.825166348622338 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 166.87481947029008,
            "unit": "iter/sec",
            "range": "stddev: 0.00022753802257889313",
            "extra": "mean: 5.99251584615519 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 586.6362557438792,
            "unit": "iter/sec",
            "range": "stddev: 0.00006840328663570492",
            "extra": "mean: 1.7046338173080664 msec\nrounds: 520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2279715.544681133,
            "unit": "iter/sec",
            "range": "stddev: 5.993620671840637e-8",
            "extra": "mean: 438.6512178385901 nsec\nrounds: 111099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 420852.55981576425,
            "unit": "iter/sec",
            "range": "stddev: 6.460720897137379e-7",
            "extra": "mean: 2.3761290662881267 usec\nrounds: 1906"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1549.4917975211315,
            "unit": "iter/sec",
            "range": "stddev: 0.00003760785229781179",
            "extra": "mean: 645.3728903888323 usec\nrounds: 1186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4538.6608836533,
            "unit": "iter/sec",
            "range": "stddev: 0.00004389260453194167",
            "extra": "mean: 220.3293054128933 usec\nrounds: 1958"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.198578215108263,
            "unit": "iter/sec",
            "range": "stddev: 0.0007983010565132887",
            "extra": "mean: 45.04793011110072 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.39139439306956,
            "unit": "iter/sec",
            "range": "stddev: 0.00022106379769291543",
            "extra": "mean: 3.782271364374683 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 173.64102480450182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000916550964194654",
            "extra": "mean: 5.759007706421196 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4715.080873294006,
            "unit": "iter/sec",
            "range": "stddev: 0.00006032349915448147",
            "extra": "mean: 212.08543965045277 usec\nrounds: 1947"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5095624.604202271,
            "unit": "iter/sec",
            "range": "stddev: 3.8750206832453114e-8",
            "extra": "mean: 196.2467955694413 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 266.8285508644779,
            "unit": "iter/sec",
            "range": "stddev: 0.00036177623049850647",
            "extra": "mean: 3.7477248846128894 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4564.738900655671,
            "unit": "iter/sec",
            "range": "stddev: 0.00006228560234973806",
            "extra": "mean: 219.0705803252759 usec\nrounds: 3324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 303.91411415001954,
            "unit": "iter/sec",
            "range": "stddev: 0.00012477681134742436",
            "extra": "mean: 3.290403286457355 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 123.15582721874807,
            "unit": "iter/sec",
            "range": "stddev: 0.0006999126130085087",
            "extra": "mean: 8.11979443103257 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6091874901297216,
            "unit": "iter/sec",
            "range": "stddev: 0.005107306213045621",
            "extra": "mean: 1.6415307539999844 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7563168297092928,
            "unit": "iter/sec",
            "range": "stddev: 0.009248694716602595",
            "extra": "mean: 1.3221972072000199 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5712881.475001826,
            "unit": "iter/sec",
            "range": "stddev: 4.120764636342344e-8",
            "extra": "mean: 175.04301539872037 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1687098.092804904,
            "unit": "iter/sec",
            "range": "stddev: 3.4971387011978833e-7",
            "extra": "mean: 592.7337623489566 nsec\nrounds: 101000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 272.4299895995342,
            "unit": "iter/sec",
            "range": "stddev: 0.00037306290337300516",
            "extra": "mean: 3.670667834587436 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.32424899123258,
            "unit": "iter/sec",
            "range": "stddev: 0.0007904247748433954",
            "extra": "mean: 12.296455391894344 msec\nrounds: 74"
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "8dc623af59a95b82929d756004ba6f21ec55db80",
          "message": "fix(pyspark): fix isnan and isinf to work on bool",
          "timestamp": "2023-03-06T13:38:07+01:00",
          "tree_id": "37b3d3419f5d13c1c14733db22d9d1516df71c39",
          "url": "https://github.com/ibis-project/ibis/commit/8dc623af59a95b82929d756004ba6f21ec55db80"
        },
        "date": 1678106903188,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 149.2424439292435,
            "unit": "iter/sec",
            "range": "stddev: 0.0032368746172869497",
            "extra": "mean: 6.700506730338082 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.294926930564806,
            "unit": "iter/sec",
            "range": "stddev: 0.0015352477975348294",
            "extra": "mean: 17.453552235294598 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4132.906451909605,
            "unit": "iter/sec",
            "range": "stddev: 0.00007843631108042905",
            "extra": "mean: 241.9604730075492 usec\nrounds: 389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 966.9838975342523,
            "unit": "iter/sec",
            "range": "stddev: 0.00018475674680189144",
            "extra": "mean: 1.0341433839280434 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.86585748478855,
            "unit": "iter/sec",
            "range": "stddev: 0.000861183141755194",
            "extra": "mean: 11.00523373333494 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.34305214551467,
            "unit": "iter/sec",
            "range": "stddev: 0.000300143324877906",
            "extra": "mean: 16.04027979999927 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3689.6483509595073,
            "unit": "iter/sec",
            "range": "stddev: 0.00005709954069684539",
            "extra": "mean: 271.02853846219415 usec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 254.22309914860347,
            "unit": "iter/sec",
            "range": "stddev: 0.00046174623722591764",
            "extra": "mean: 3.9335528649796703 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1465396.4608429924,
            "unit": "iter/sec",
            "range": "stddev: 0.00000706643883020136",
            "extra": "mean: 682.4091818979379 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.629994223712835,
            "unit": "iter/sec",
            "range": "stddev: 0.01804556675534307",
            "extra": "mean: 30.646649617647835 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.68660210854765,
            "unit": "iter/sec",
            "range": "stddev: 0.005918034134407572",
            "extra": "mean: 213.37420520000023 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 75.90926457645378,
            "unit": "iter/sec",
            "range": "stddev: 0.0017172582569982176",
            "extra": "mean: 13.173622555555477 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 216.96590875577596,
            "unit": "iter/sec",
            "range": "stddev: 0.0011193686305340108",
            "extra": "mean: 4.609019019322678 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5810630.481323661,
            "unit": "iter/sec",
            "range": "stddev: 1.4234771638432429e-7",
            "extra": "mean: 172.09836406115826 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 82.70458588611145,
            "unit": "iter/sec",
            "range": "stddev: 0.0008001255867895841",
            "extra": "mean: 12.091227944446182 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.994623132846172,
            "unit": "iter/sec",
            "range": "stddev: 0.002127528243147408",
            "extra": "mean: 45.46565739999551 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8728391972616623,
            "unit": "iter/sec",
            "range": "stddev: 0.022072681967838875",
            "extra": "mean: 533.9486707999981 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 122.22853168012044,
            "unit": "iter/sec",
            "range": "stddev: 0.0009924379886330108",
            "extra": "mean: 8.181395834951706 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.22804877198288,
            "unit": "iter/sec",
            "range": "stddev: 0.001050344861570153",
            "extra": "mean: 8.317526652175303 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11177.04224713743,
            "unit": "iter/sec",
            "range": "stddev: 0.00005339214257499258",
            "extra": "mean: 89.46910800628956 usec\nrounds: 4259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137735.97228872502,
            "unit": "iter/sec",
            "range": "stddev: 0.000003452676618174867",
            "extra": "mean: 7.260267476848962 usec\nrounds: 35461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1481321.1932636867,
            "unit": "iter/sec",
            "range": "stddev: 0.00002447910117863749",
            "extra": "mean: 675.0730392216783 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3734.2357988118247,
            "unit": "iter/sec",
            "range": "stddev: 0.0001386296733472715",
            "extra": "mean: 267.7924089095242 usec\nrounds: 1751"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 291.92470768272744,
            "unit": "iter/sec",
            "range": "stddev: 0.0004847059717800283",
            "extra": "mean: 3.425540811320534 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 192.15088025114537,
            "unit": "iter/sec",
            "range": "stddev: 0.004608132553546708",
            "extra": "mean: 5.204243658384382 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 64.95164804915193,
            "unit": "iter/sec",
            "range": "stddev: 0.020651832258522063",
            "extra": "mean: 15.396068152778101 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 83.25327547312872,
            "unit": "iter/sec",
            "range": "stddev: 0.0012928936024825175",
            "extra": "mean: 12.011539417722554 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5677198243042855,
            "unit": "iter/sec",
            "range": "stddev: 0.024891825825825588",
            "extra": "mean: 1.7614322367999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.268275869708155,
            "unit": "iter/sec",
            "range": "stddev: 0.03068305469710901",
            "extra": "mean: 36.67265230769072 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9204.322276984185,
            "unit": "iter/sec",
            "range": "stddev: 0.000043509593427404546",
            "extra": "mean: 108.64460955485492 usec\nrounds: 3642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 113.24948347118671,
            "unit": "iter/sec",
            "range": "stddev: 0.0016080603004794917",
            "extra": "mean: 8.830062348623631 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 235.64149186846655,
            "unit": "iter/sec",
            "range": "stddev: 0.0007686170893826278",
            "extra": "mean: 4.243734802689983 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 82.54783149032546,
            "unit": "iter/sec",
            "range": "stddev: 0.001750147417102532",
            "extra": "mean: 12.114188609754082 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.667506182135014,
            "unit": "iter/sec",
            "range": "stddev: 0.0022134068929525207",
            "extra": "mean: 22.387638923078157 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3751.9316330536385,
            "unit": "iter/sec",
            "range": "stddev: 0.00021954994996905335",
            "extra": "mean: 266.52937681226234 usec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1337.593380545136,
            "unit": "iter/sec",
            "range": "stddev: 0.00015182243894391664",
            "extra": "mean: 747.6113552479231 usec\nrounds: 867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 74.75351185809811,
            "unit": "iter/sec",
            "range": "stddev: 0.0010384732277752054",
            "extra": "mean: 13.37729793749709 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 232.7006125675643,
            "unit": "iter/sec",
            "range": "stddev: 0.0008046241253996867",
            "extra": "mean: 4.297367286515636 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5776850751543529,
            "unit": "iter/sec",
            "range": "stddev: 0.018809044062135592",
            "extra": "mean: 1.7310469718000037 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 239.79285438347753,
            "unit": "iter/sec",
            "range": "stddev: 0.000564201718371532",
            "extra": "mean: 4.170266051384487 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 237.68420183277237,
            "unit": "iter/sec",
            "range": "stddev: 0.0005744333642784616",
            "extra": "mean: 4.207263218543951 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 169.1033116908006,
            "unit": "iter/sec",
            "range": "stddev: 0.0003742438675573869",
            "extra": "mean: 5.913544743750876 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2252642.0422582794,
            "unit": "iter/sec",
            "range": "stddev: 7.448647547712379e-7",
            "extra": "mean: 443.9231716536505 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2222955.7369978954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010389722437300983",
            "extra": "mean: 449.8515122710797 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3737.246622388884,
            "unit": "iter/sec",
            "range": "stddev: 0.00009672607728923919",
            "extra": "mean: 267.5766683443519 usec\nrounds: 1788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4562996.701140144,
            "unit": "iter/sec",
            "range": "stddev: 8.678609617340037e-7",
            "extra": "mean: 219.15422374746456 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 88.01444643835374,
            "unit": "iter/sec",
            "range": "stddev: 0.0017808698206649544",
            "extra": "mean: 11.361771169013833 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 228.5162598913753,
            "unit": "iter/sec",
            "range": "stddev: 0.0008025896875459638",
            "extra": "mean: 4.376056217948551 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 89.27095213351468,
            "unit": "iter/sec",
            "range": "stddev: 0.0009736559468246157",
            "extra": "mean: 11.201852070586055 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 233.28315605233445,
            "unit": "iter/sec",
            "range": "stddev: 0.00049873370501076",
            "extra": "mean: 4.28663610747645 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2453329193674045,
            "unit": "iter/sec",
            "range": "stddev: 0.031077467382954395",
            "extra": "mean: 802.9981255999985 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 102.90602111381823,
            "unit": "iter/sec",
            "range": "stddev: 0.0012518005013498873",
            "extra": "mean: 9.717604365384602 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 111.8048806399799,
            "unit": "iter/sec",
            "range": "stddev: 0.0010501937677943932",
            "extra": "mean: 8.944153370370968 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60242.84279615369,
            "unit": "iter/sec",
            "range": "stddev: 0.000006869813052620772",
            "extra": "mean: 16.599482255240563 usec\nrounds: 11919"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3635.076513774121,
            "unit": "iter/sec",
            "range": "stddev: 0.00019815905660526496",
            "extra": "mean: 275.0973731118934 usec\nrounds: 1986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 95.02025271161465,
            "unit": "iter/sec",
            "range": "stddev: 0.00008627397817680409",
            "extra": "mean: 10.524072200007595 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6387.723738278455,
            "unit": "iter/sec",
            "range": "stddev: 0.000042888402403422385",
            "extra": "mean: 156.5502894258712 usec\nrounds: 1116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.99836177961798,
            "unit": "iter/sec",
            "range": "stddev: 0.0008174807653703549",
            "extra": "mean: 10.309452465517078 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 708202.0686528687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011374958216920957",
            "extra": "mean: 1.4120263753284215 usec\nrounds: 21232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 580.6665955080131,
            "unit": "iter/sec",
            "range": "stddev: 0.00017063167115375342",
            "extra": "mean: 1.7221586496208223 msec\nrounds: 528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1091824093455368,
            "unit": "iter/sec",
            "range": "stddev: 0.10982830064562338",
            "extra": "mean: 9.158984547 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 429.43343695555615,
            "unit": "iter/sec",
            "range": "stddev: 0.0005796079689696798",
            "extra": "mean: 2.3286495972214993 msec\nrounds: 360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 237.57158106616106,
            "unit": "iter/sec",
            "range": "stddev: 0.00048550410647590843",
            "extra": "mean: 4.209257670939653 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 157.8048277563202,
            "unit": "iter/sec",
            "range": "stddev: 0.0005623444016159857",
            "extra": "mean: 6.336941741378056 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.644429069105335,
            "unit": "iter/sec",
            "range": "stddev: 0.002703806570788379",
            "extra": "mean: 28.054874944448077 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 57.5559518314688,
            "unit": "iter/sec",
            "range": "stddev: 0.0012435389628041547",
            "extra": "mean: 17.374397750003823 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 125.75855358733926,
            "unit": "iter/sec",
            "range": "stddev: 0.0007540967936026833",
            "extra": "mean: 7.951745400009712 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3523.7863712525273,
            "unit": "iter/sec",
            "range": "stddev: 0.00031972265474866955",
            "extra": "mean: 283.7856483463697 usec\nrounds: 2056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 115.73368784707868,
            "unit": "iter/sec",
            "range": "stddev: 0.0005617554580919289",
            "extra": "mean: 8.640526527775739 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4005.6266556201667,
            "unit": "iter/sec",
            "range": "stddev: 0.00009068882434417713",
            "extra": "mean: 249.64882800470983 usec\nrounds: 2221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.52084983218279,
            "unit": "iter/sec",
            "range": "stddev: 0.0008331509039983614",
            "extra": "mean: 8.88724179999913 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.59084154043607,
            "unit": "iter/sec",
            "range": "stddev: 0.0012001167447108444",
            "extra": "mean: 8.361844327869202 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10522246.0654397,
            "unit": "iter/sec",
            "range": "stddev: 2.507952799968485e-7",
            "extra": "mean: 95.03674346532965 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 135.30393348683492,
            "unit": "iter/sec",
            "range": "stddev: 0.0005880412394389296",
            "extra": "mean: 7.390768133856953 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4076.958069263391,
            "unit": "iter/sec",
            "range": "stddev: 0.00008992518003925844",
            "extra": "mean: 245.28091361525242 usec\nrounds: 2130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 95.10926682464753,
            "unit": "iter/sec",
            "range": "stddev: 0.01780168098337382",
            "extra": "mean: 10.514222571431391 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6308616099583518,
            "unit": "iter/sec",
            "range": "stddev: 0.02120291397824225",
            "extra": "mean: 1.5851337032000061 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.20041477548075,
            "unit": "iter/sec",
            "range": "stddev: 0.0009033823185241312",
            "extra": "mean: 12.315208028986076 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6303010248058839,
            "unit": "iter/sec",
            "range": "stddev: 0.015065631901955923",
            "extra": "mean: 1.5865435095999942 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 228.29146908712542,
            "unit": "iter/sec",
            "range": "stddev: 0.0004885699854661555",
            "extra": "mean: 4.3803651708875675 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.27278118911955,
            "unit": "iter/sec",
            "range": "stddev: 0.003112188705553241",
            "extra": "mean: 30.054596107132983 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 108.64348389130407,
            "unit": "iter/sec",
            "range": "stddev: 0.001329621129916154",
            "extra": "mean: 9.204417643680156 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.542509913639192,
            "unit": "iter/sec",
            "range": "stddev: 0.0027495841247087926",
            "extra": "mean: 117.06161422222925 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5098443.735912466,
            "unit": "iter/sec",
            "range": "stddev: 6.342947807167451e-7",
            "extra": "mean: 196.13828293459392 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.093337972439613,
            "unit": "iter/sec",
            "range": "stddev: 0.004022034786833385",
            "extra": "mean: 76.37471835714597 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 425656.5775380452,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011868906199941564",
            "extra": "mean: 2.349311752173312 usec\nrounds: 1838"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 605.4273553684003,
            "unit": "iter/sec",
            "range": "stddev: 0.0004700760968422353",
            "extra": "mean: 1.6517258282647367 msec\nrounds: 559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10926.944470212242,
            "unit": "iter/sec",
            "range": "stddev: 0.000029998126790474316",
            "extra": "mean: 91.51689227725858 usec\nrounds: 4558"
          }
        ]
      }
    ]
  }
}