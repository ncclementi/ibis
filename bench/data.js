window.BENCHMARK_DATA = {
  "lastUpdate": 1675793593717,
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
          "id": "ef4dc8611c776ca597ffee420f42628cbe1d24a7",
          "message": "feat(bigquery): enable subqueries in select statements",
          "timestamp": "2023-02-07T13:08:18-05:00",
          "tree_id": "f937e9c0c415c47eed391ca820316e26afb7dec2",
          "url": "https://github.com/ibis-project/ibis/commit/ef4dc8611c776ca597ffee420f42628cbe1d24a7"
        },
        "date": 1675793518772,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13583148534031564,
            "unit": "iter/sec",
            "range": "stddev: 0.07470571274866088",
            "extra": "mean: 7.36206335 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.939570446082412,
            "unit": "iter/sec",
            "range": "stddev: 0.0001967600358422633",
            "extra": "mean: 202.44675340000526 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 61.4346381868621,
            "unit": "iter/sec",
            "range": "stddev: 0.01016226899566243",
            "extra": "mean: 16.277462186044932 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 125549.20954284215,
            "unit": "iter/sec",
            "range": "stddev: 4.5816379039590183e-7",
            "extra": "mean: 7.965004348822779 usec\nrounds: 33112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 275.60446889085586,
            "unit": "iter/sec",
            "range": "stddev: 0.000022539990943145468",
            "extra": "mean: 3.6283881898737183 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 140.9891247235789,
            "unit": "iter/sec",
            "range": "stddev: 0.00718932269922669",
            "extra": "mean: 7.092745642336489 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.42358923845391,
            "unit": "iter/sec",
            "range": "stddev: 0.0006044782400226335",
            "extra": "mean: 12.751265399998601 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 244.1685791026819,
            "unit": "iter/sec",
            "range": "stddev: 0.00011053615446458014",
            "extra": "mean: 4.095531061674659 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8508005291080929,
            "unit": "iter/sec",
            "range": "stddev: 0.0036315299794638265",
            "extra": "mean: 1.1753636319999885 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.25552841758521,
            "unit": "iter/sec",
            "range": "stddev: 0.0006475963428327364",
            "extra": "mean: 11.07965370689871 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8573.435763841491,
            "unit": "iter/sec",
            "range": "stddev: 0.000018384459684885655",
            "extra": "mean: 116.63935294383438 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 139.41188079313912,
            "unit": "iter/sec",
            "range": "stddev: 0.00010653546351134726",
            "extra": "mean: 7.172989807689425 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 153.85609027211606,
            "unit": "iter/sec",
            "range": "stddev: 0.0006212336004110711",
            "extra": "mean: 6.499580213115775 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.76037081205678,
            "unit": "iter/sec",
            "range": "stddev: 0.0007154182074594602",
            "extra": "mean: 10.897950729168215 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 945.0620399006946,
            "unit": "iter/sec",
            "range": "stddev: 0.00010016413784105403",
            "extra": "mean: 1.058131591133507 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.7526647881354,
            "unit": "iter/sec",
            "range": "stddev: 0.0006837683656781448",
            "extra": "mean: 11.018960185186048 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.50694252722394,
            "unit": "iter/sec",
            "range": "stddev: 0.00023364073994287736",
            "extra": "mean: 10.58123322222531 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 268.2775481471853,
            "unit": "iter/sec",
            "range": "stddev: 0.0001224092668438071",
            "extra": "mean: 3.7274829999988266 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 245.1702408675818,
            "unit": "iter/sec",
            "range": "stddev: 0.00021794402115934782",
            "extra": "mean: 4.078798456375899 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4634.126064611093,
            "unit": "iter/sec",
            "range": "stddev: 0.00005295773351956054",
            "extra": "mean: 215.79041788193612 usec\nrounds: 1577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1422925.8642113677,
            "unit": "iter/sec",
            "range": "stddev: 1.2235719490083143e-7",
            "extra": "mean: 702.7773021430269 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.399652646495145,
            "unit": "iter/sec",
            "range": "stddev: 0.03405197216363756",
            "extra": "mean: 36.49681303999728 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.322853370062205,
            "unit": "iter/sec",
            "range": "stddev: 0.0014440541942529824",
            "extra": "mean: 28.310283700001072 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.63202831209892,
            "unit": "iter/sec",
            "range": "stddev: 0.0000595727742611743",
            "extra": "mean: 11.282603129409514 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.00534953359158,
            "unit": "iter/sec",
            "range": "stddev: 0.0008035293383089747",
            "extra": "mean: 11.493546148147058 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7292203794446505,
            "unit": "iter/sec",
            "range": "stddev: 0.002561032481662583",
            "extra": "mean: 1.3713275549999935 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10289541.301387686,
            "unit": "iter/sec",
            "range": "stddev: 3.776896288260738e-9",
            "extra": "mean: 97.18606211002626 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4706.176653726885,
            "unit": "iter/sec",
            "range": "stddev: 0.00008938488000225853",
            "extra": "mean: 212.48671131120557 usec\nrounds: 1777"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 205.23418871653277,
            "unit": "iter/sec",
            "range": "stddev: 0.011313816692200005",
            "extra": "mean: 4.872482534482542 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1683387.3579695043,
            "unit": "iter/sec",
            "range": "stddev: 9.110787591623158e-8",
            "extra": "mean: 594.0403409029971 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4924.472772333803,
            "unit": "iter/sec",
            "range": "stddev: 0.00016599756005257168",
            "extra": "mean: 203.06742391146994 usec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 387692.9414605581,
            "unit": "iter/sec",
            "range": "stddev: 4.076000919488447e-7",
            "extra": "mean: 2.57936086283308 usec\nrounds: 1901"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.25322116103018,
            "unit": "iter/sec",
            "range": "stddev: 0.00008253524667077413",
            "extra": "mean: 7.02971779365195 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 242.9328978252866,
            "unit": "iter/sec",
            "range": "stddev: 0.0002196235925123478",
            "extra": "mean: 4.116363032557179 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58982.29309127151,
            "unit": "iter/sec",
            "range": "stddev: 4.5238351459273054e-7",
            "extra": "mean: 16.954240799905165 usec\nrounds: 12500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 88.76475122984269,
            "unit": "iter/sec",
            "range": "stddev: 0.0009807858825382689",
            "extra": "mean: 11.265733144575076 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 138.2005236787887,
            "unit": "iter/sec",
            "range": "stddev: 0.0005771149371655572",
            "extra": "mean: 7.2358625957470375 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 568072.2231144694,
            "unit": "iter/sec",
            "range": "stddev: 7.221450938755365e-7",
            "extra": "mean: 1.7603395471749634 usec\nrounds: 20492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 151.7378480415362,
            "unit": "iter/sec",
            "range": "stddev: 0.0007189661784607284",
            "extra": "mean: 6.590313576387767 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1447.2645371208964,
            "unit": "iter/sec",
            "range": "stddev: 0.000026576904053019476",
            "extra": "mean: 690.9586840214724 usec\nrounds: 1114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 155.18891805502375,
            "unit": "iter/sec",
            "range": "stddev: 0.0007267984043025553",
            "extra": "mean: 6.443759081079747 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 243.73554856474365,
            "unit": "iter/sec",
            "range": "stddev: 0.0002631827366111082",
            "extra": "mean: 4.102807349558078 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 115.29351469306631,
            "unit": "iter/sec",
            "range": "stddev: 0.00042300364754483495",
            "extra": "mean: 8.673514747661166 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18979.046760862584,
            "unit": "iter/sec",
            "range": "stddev: 0.000024023019000648314",
            "extra": "mean: 52.68968524078554 usec\nrounds: 4343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4044.8765900700705,
            "unit": "iter/sec",
            "range": "stddev: 0.000022297787235996586",
            "extra": "mean: 247.22633131872058 usec\nrounds: 1820"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1488677.1094189314,
            "unit": "iter/sec",
            "range": "stddev: 1.186525411397064e-7",
            "extra": "mean: 671.7373389252457 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5456.731625909116,
            "unit": "iter/sec",
            "range": "stddev: 0.00007688242448149896",
            "extra": "mean: 183.25988312342474 usec\nrounds: 1908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4347101.639855083,
            "unit": "iter/sec",
            "range": "stddev: 1.1573752461277434e-8",
            "extra": "mean: 230.03832963825528 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 246.99069889222278,
            "unit": "iter/sec",
            "range": "stddev: 0.00031465535154805873",
            "extra": "mean: 4.048735456375875 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5417549005544593,
            "unit": "iter/sec",
            "range": "stddev: 0.001462475601564655",
            "extra": "mean: 648.6115267999935 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.614444473587024,
            "unit": "iter/sec",
            "range": "stddev: 0.00011568195661414458",
            "extra": "mean: 73.45139949999943 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 117.36075942425798,
            "unit": "iter/sec",
            "range": "stddev: 0.017416153438353472",
            "extra": "mean: 8.520735592592835 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 614.0326293414126,
            "unit": "iter/sec",
            "range": "stddev: 0.00009518969754833231",
            "extra": "mean: 1.6285779488177377 msec\nrounds: 508"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.324341371899735,
            "unit": "iter/sec",
            "range": "stddev: 0.0005929919330508587",
            "extra": "mean: 19.111564021272898 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5426.412836138038,
            "unit": "iter/sec",
            "range": "stddev: 0.00005055245890585215",
            "extra": "mean: 184.28380408883467 usec\nrounds: 2006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.072213493962701,
            "unit": "iter/sec",
            "range": "stddev: 0.00027290107851174727",
            "extra": "mean: 110.22668289998592 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 173.12949488047536,
            "unit": "iter/sec",
            "range": "stddev: 0.00003643980058043209",
            "extra": "mean: 5.776023321100642 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 232.12501665784484,
            "unit": "iter/sec",
            "range": "stddev: 0.00023178704011888465",
            "extra": "mean: 4.308023384976263 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 213.1491523314465,
            "unit": "iter/sec",
            "range": "stddev: 0.0004979711462537979",
            "extra": "mean: 4.691550442785726 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 268.2365484125369,
            "unit": "iter/sec",
            "range": "stddev: 0.00001241778470989352",
            "extra": "mean: 3.728052742693515 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5758825683117716,
            "unit": "iter/sec",
            "range": "stddev: 0.01828687842141503",
            "extra": "mean: 1.7364651320000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5431.481184231961,
            "unit": "iter/sec",
            "range": "stddev: 0.00005213885122336223",
            "extra": "mean: 184.1118409657908 usec\nrounds: 2031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3538.033388780543,
            "unit": "iter/sec",
            "range": "stddev: 0.0036433971462455717",
            "extra": "mean: 282.6428951097804 usec\nrounds: 2822"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 153.1251850736179,
            "unit": "iter/sec",
            "range": "stddev: 0.0007704629211815738",
            "extra": "mean: 6.530604351721963 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.44559154163922,
            "unit": "iter/sec",
            "range": "stddev: 0.0002691982804020352",
            "extra": "mean: 9.955638516852728 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.495939743782955,
            "unit": "iter/sec",
            "range": "stddev: 0.0010830215890701264",
            "extra": "mean: 17.39253248935948 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.49402399358354,
            "unit": "iter/sec",
            "range": "stddev: 0.0007425673564792777",
            "extra": "mean: 12.579561956515327 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.76726405112186,
            "unit": "iter/sec",
            "range": "stddev: 0.00022809154150109156",
            "extra": "mean: 15.931871734691718 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.02400794939294,
            "unit": "iter/sec",
            "range": "stddev: 0.0011446971205256414",
            "extra": "mean: 43.432924545457624 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.859448430566765,
            "unit": "iter/sec",
            "range": "stddev: 0.0004865962148560007",
            "extra": "mean: 25.088154487183928 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10801.763353642591,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018800783047766715",
            "extra": "mean: 92.57747714522722 usec\nrounds: 4988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1498339.0783555678,
            "unit": "iter/sec",
            "range": "stddev: 1.1054767212828717e-7",
            "extra": "mean: 667.4056723512167 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5421558.039350399,
            "unit": "iter/sec",
            "range": "stddev: 7.0124820650590795e-9",
            "extra": "mean: 184.44882315046013 nsec\nrounds: 52632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2210160693386256,
            "unit": "iter/sec",
            "range": "stddev: 0.004076333934636301",
            "extra": "mean: 450.24437860000717 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.834492708194794,
            "unit": "iter/sec",
            "range": "stddev: 0.0005255628923253754",
            "extra": "mean: 27.148466735297916 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 381.28085141516726,
            "unit": "iter/sec",
            "range": "stddev: 0.00015065099865864043",
            "extra": "mean: 2.6227385830900927 msec\nrounds: 343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8485784656566221,
            "unit": "iter/sec",
            "range": "stddev: 0.0041256855150729665",
            "extra": "mean: 1.178441405800004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 509.5946826970476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000746264444912592",
            "extra": "mean: 1.9623438665165527 msec\nrounds: 442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10184.997283301596,
            "unit": "iter/sec",
            "range": "stddev: 0.000004888921938144318",
            "extra": "mean: 98.18362952727634 usec\nrounds: 4335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4507432.311616355,
            "unit": "iter/sec",
            "range": "stddev: 1.3672731879716587e-8",
            "extra": "mean: 221.85579968045366 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 149.7016223028131,
            "unit": "iter/sec",
            "range": "stddev: 0.00009088481407444686",
            "extra": "mean: 6.679954329267203 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 68.67849660123854,
            "unit": "iter/sec",
            "range": "stddev: 0.025209835776576168",
            "extra": "mean: 14.560598287499005 msec\nrounds: 80"
          }
        ]
      }
    ]
  }
}