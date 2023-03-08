window.BENCHMARK_DATA = {
  "lastUpdate": 1678306054487,
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
          "id": "11c5736de56ab486756d1a75bd18035d89faa7d9",
          "message": "feat(tables): implement `pivot_longer` API",
          "timestamp": "2023-03-08T15:02:18-05:00",
          "tree_id": "3dacbaf2905a4e6080028f732158ac988a6592d7",
          "url": "https://github.com/ibis-project/ibis/commit/11c5736de56ab486756d1a75bd18035d89faa7d9"
        },
        "date": 1678305968527,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 96.12053894939486,
            "unit": "iter/sec",
            "range": "stddev: 0.0077545383198079545",
            "extra": "mean: 10.403603755556093 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.64571007365869,
            "unit": "iter/sec",
            "range": "stddev: 0.0006198111276264356",
            "extra": "mean: 9.376842250000625 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.09317375792452,
            "unit": "iter/sec",
            "range": "stddev: 0.0002077306155580606",
            "extra": "mean: 6.892123000000083 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8492876384383395,
            "unit": "iter/sec",
            "range": "stddev: 0.0038953810911213703",
            "extra": "mean: 1.1774573828000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13378.408781771897,
            "unit": "iter/sec",
            "range": "stddev: 0.000005022281127706864",
            "extra": "mean: 74.74730487847714 usec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.35197769687517,
            "unit": "iter/sec",
            "range": "stddev: 0.0005655886228882333",
            "extra": "mean: 9.402740049180881 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.816525443347395,
            "unit": "iter/sec",
            "range": "stddev: 0.0007365644952711203",
            "extra": "mean: 16.176904037035595 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 77.59308306561194,
            "unit": "iter/sec",
            "range": "stddev: 0.0657009399161527",
            "extra": "mean: 12.887746697143223 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.1755643330444,
            "unit": "iter/sec",
            "range": "stddev: 0.0006799438508878224",
            "extra": "mean: 8.321159176991127 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.34041581796542,
            "unit": "iter/sec",
            "range": "stddev: 0.00044989036958081413",
            "extra": "mean: 18.402509162791336 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.580112655248456,
            "unit": "iter/sec",
            "range": "stddev: 0.00015842591286879842",
            "extra": "mean: 21.017184369564372 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 309.6291112347049,
            "unit": "iter/sec",
            "range": "stddev: 0.00022349654105495217",
            "extra": "mean: 3.229670479020238 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 747805.4891077491,
            "unit": "iter/sec",
            "range": "stddev: 2.845627108407127e-7",
            "extra": "mean: 1.3372461349450095 usec\nrounds: 24450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5658.504604258982,
            "unit": "iter/sec",
            "range": "stddev: 0.00005231065355999963",
            "extra": "mean: 176.72513675209007 usec\nrounds: 2340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5798.302819835382,
            "unit": "iter/sec",
            "range": "stddev: 0.000044091378729414314",
            "extra": "mean: 172.46425912408463 usec\nrounds: 548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12007.187843470048,
            "unit": "iter/sec",
            "range": "stddev: 0.000002858966338563292",
            "extra": "mean: 83.28344763456306 usec\nrounds: 5538"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 311.10751516912825,
            "unit": "iter/sec",
            "range": "stddev: 0.00020318670335458343",
            "extra": "mean: 3.2143228666667443 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7402769.851997135,
            "unit": "iter/sec",
            "range": "stddev: 7.448304461892691e-9",
            "extra": "mean: 135.08457239566587 nsec\nrounds: 54057"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5621.928181915053,
            "unit": "iter/sec",
            "range": "stddev: 0.000055030983050114185",
            "extra": "mean: 177.87491544571103 usec\nrounds: 2389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1175.6296182387682,
            "unit": "iter/sec",
            "range": "stddev: 0.00006176628133411206",
            "extra": "mean: 850.6080354611327 usec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 222.8493712206442,
            "unit": "iter/sec",
            "range": "stddev: 0.003925318962016457",
            "extra": "mean: 4.487335972825767 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5333.148796310671,
            "unit": "iter/sec",
            "range": "stddev: 0.00003123457169372289",
            "extra": "mean: 187.5064878541872 usec\nrounds: 1482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.45583809505975,
            "unit": "iter/sec",
            "range": "stddev: 0.00008081736873746357",
            "extra": "mean: 10.367438817072678 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.960696721202,
            "unit": "iter/sec",
            "range": "stddev: 0.00005803605834549916",
            "extra": "mean: 6.1364489727902285 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.95173508052528,
            "unit": "iter/sec",
            "range": "stddev: 0.0005831381603586794",
            "extra": "mean: 8.19996533333204 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 106.90216534551215,
            "unit": "iter/sec",
            "range": "stddev: 0.011550290882927692",
            "extra": "mean: 9.354347470586394 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.83410844569234,
            "unit": "iter/sec",
            "range": "stddev: 0.00020089597626498908",
            "extra": "mean: 13.543875873242733 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12306946.273499595,
            "unit": "iter/sec",
            "range": "stddev: 7.669471735358663e-9",
            "extra": "mean: 81.25492528980496 nsec\nrounds: 125016"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1663720.941060957,
            "unit": "iter/sec",
            "range": "stddev: 1.0852271647178103e-7",
            "extra": "mean: 601.0623388332774 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.47737490876973,
            "unit": "iter/sec",
            "range": "stddev: 0.0007649462853638114",
            "extra": "mean: 26.682765333331798 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.69595888692595,
            "unit": "iter/sec",
            "range": "stddev: 0.0001914089377398028",
            "extra": "mean: 3.303645029412357 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 353.29130119923843,
            "unit": "iter/sec",
            "range": "stddev: 0.00003636645217897159",
            "extra": "mean: 2.830525395348046 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.4931431974944,
            "unit": "iter/sec",
            "range": "stddev: 0.00004792064784904199",
            "extra": "mean: 1.8433412708332615 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 109.11104618709066,
            "unit": "iter/sec",
            "range": "stddev: 0.009509115571803372",
            "extra": "mean: 9.164974903506275 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 307.1853135717863,
            "unit": "iter/sec",
            "range": "stddev: 0.00023893257695811992",
            "extra": "mean: 3.255363963766808 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.67254969634367,
            "unit": "iter/sec",
            "range": "stddev: 0.0001635702551556432",
            "extra": "mean: 10.452318906247537 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.74646815092615,
            "unit": "iter/sec",
            "range": "stddev: 0.0007886998426821843",
            "extra": "mean: 23.39374557142995 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.550569206847922,
            "unit": "iter/sec",
            "range": "stddev: 0.0002054713116828614",
            "extra": "mean: 180.16170283333585 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.502238184567304,
            "unit": "iter/sec",
            "range": "stddev: 0.00017536099564740136",
            "extra": "mean: 64.50681431249805 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.8909891958952,
            "unit": "iter/sec",
            "range": "stddev: 0.00040927766210799933",
            "extra": "mean: 3.3124539512211353 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.49293476325488,
            "unit": "iter/sec",
            "range": "stddev: 0.0006311534058265877",
            "extra": "mean: 8.230931304348132 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7848498421391836,
            "unit": "iter/sec",
            "range": "stddev: 0.0021056295296884896",
            "extra": "mean: 560.2712207999957 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 104.97002049259419,
            "unit": "iter/sec",
            "range": "stddev: 0.0001951127182513118",
            "extra": "mean: 9.526529530120001 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5779596.798212264,
            "unit": "iter/sec",
            "range": "stddev: 1.4050083737200845e-8",
            "extra": "mean: 173.02245033931095 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 101.82423230663653,
            "unit": "iter/sec",
            "range": "stddev: 0.0113843991884897",
            "extra": "mean: 9.82084497321394 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2447162.1648876634,
            "unit": "iter/sec",
            "range": "stddev: 1.6786216921585474e-8",
            "extra": "mean: 408.636589085844 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2461694.5505132466,
            "unit": "iter/sec",
            "range": "stddev: 6.551675337252396e-7",
            "extra": "mean: 406.2242408554501 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 67766.98035370736,
            "unit": "iter/sec",
            "range": "stddev: 0.00001511538555451243",
            "extra": "mean: 14.75644915533399 usec\nrounds: 12548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5510.3605409481925,
            "unit": "iter/sec",
            "range": "stddev: 0.00004781403563742491",
            "extra": "mean: 181.47632855760935 usec\nrounds: 2094"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9207680705086753,
            "unit": "iter/sec",
            "range": "stddev: 0.012014669642062601",
            "extra": "mean: 1.086049823000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.35624089170378,
            "unit": "iter/sec",
            "range": "stddev: 0.00002839987352238128",
            "extra": "mean: 5.171801000000235 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 486900.2658036477,
            "unit": "iter/sec",
            "range": "stddev: 2.729687391056101e-7",
            "extra": "mean: 2.053808696015931 usec\nrounds: 2070"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.72361144369256,
            "unit": "iter/sec",
            "range": "stddev: 0.00016695198048652688",
            "extra": "mean: 8.494472669811884 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1780966520920809,
            "unit": "iter/sec",
            "range": "stddev: 0.14252428227502809",
            "extra": "mean: 5.614928681999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5281.73371284675,
            "unit": "iter/sec",
            "range": "stddev: 0.000047652964424660626",
            "extra": "mean: 189.33177141583306 usec\nrounds: 2253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.78323369901034,
            "unit": "iter/sec",
            "range": "stddev: 0.00006396842121839015",
            "extra": "mean: 6.297894158621312 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 307.1153360821113,
            "unit": "iter/sec",
            "range": "stddev: 0.00022007058018807938",
            "extra": "mean: 3.2561057118054078 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.390022761885787,
            "unit": "iter/sec",
            "range": "stddev: 0.0005247394031891798",
            "extra": "mean: 96.24617990909005 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.61126484151345,
            "unit": "iter/sec",
            "range": "stddev: 0.00025961070350851546",
            "extra": "mean: 3.5509943132522945 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.5944756137667,
            "unit": "iter/sec",
            "range": "stddev: 0.00003632746748050774",
            "extra": "mean: 1.4671480415088656 msec\nrounds: 530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.98157990145336,
            "unit": "iter/sec",
            "range": "stddev: 0.000019548076741865334",
            "extra": "mean: 3.0582762499997185 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.85434623606409,
            "unit": "iter/sec",
            "range": "stddev: 0.0005740072719548433",
            "extra": "mean: 27.89062149999963 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.95896047986062,
            "unit": "iter/sec",
            "range": "stddev: 0.00036684815035005594",
            "extra": "mean: 7.301457286885927 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 265.93756874461445,
            "unit": "iter/sec",
            "range": "stddev: 0.009442572986090313",
            "extra": "mean: 3.760281049122177 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1862034.267007595,
            "unit": "iter/sec",
            "range": "stddev: 9.349700563091539e-8",
            "extra": "mean: 537.0470445783269 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9253410711276564,
            "unit": "iter/sec",
            "range": "stddev: 0.0021750548006109964",
            "extra": "mean: 1.0806826058000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6832239153034225,
            "unit": "iter/sec",
            "range": "stddev: 0.0036534573394377354",
            "extra": "mean: 1.463648999399993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5596.089484965714,
            "unit": "iter/sec",
            "range": "stddev: 0.000045072632150039344",
            "extra": "mean: 178.69621325509 usec\nrounds: 2565"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11700.379058530223,
            "unit": "iter/sec",
            "range": "stddev: 0.00001238200838130463",
            "extra": "mean: 85.46731648586588 usec\nrounds: 5441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1736.8549054436612,
            "unit": "iter/sec",
            "range": "stddev: 0.000004797940180924833",
            "extra": "mean: 575.7533325701496 usec\nrounds: 1311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.22361935885112,
            "unit": "iter/sec",
            "range": "stddev: 0.0002798444368001189",
            "extra": "mean: 38.13356144000295 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.7776367259468,
            "unit": "iter/sec",
            "range": "stddev: 0.0006832375777248384",
            "extra": "mean: 8.348803894737182 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.2990796143965,
            "unit": "iter/sec",
            "range": "stddev: 0.000011387157031964143",
            "extra": "mean: 1.3257340848290677 msec\nrounds: 613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5509.229714642099,
            "unit": "iter/sec",
            "range": "stddev: 0.00004341539848441531",
            "extra": "mean: 181.5135784485915 usec\nrounds: 2218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.91091605423215,
            "unit": "iter/sec",
            "range": "stddev: 0.014038083918621682",
            "extra": "mean: 11.247212877550822 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5125736459142085,
            "unit": "iter/sec",
            "range": "stddev: 0.0013086104523464062",
            "extra": "mean: 397.9982842000027 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.64002130186913,
            "unit": "iter/sec",
            "range": "stddev: 0.000658392124794855",
            "extra": "mean: 9.648782270000993 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.30995435355706,
            "unit": "iter/sec",
            "range": "stddev: 0.0006697505602533313",
            "extra": "mean: 9.870698357144107 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 288.7497021043609,
            "unit": "iter/sec",
            "range": "stddev: 0.00030891518445293333",
            "extra": "mean: 3.46320703610138 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.27827446632163,
            "unit": "iter/sec",
            "range": "stddev: 0.000159008493074207",
            "extra": "mean: 9.067969233644424 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.29484440390776,
            "unit": "iter/sec",
            "range": "stddev: 0.0006820602424150327",
            "extra": "mean: 10.834841387496397 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138563.96351115662,
            "unit": "iter/sec",
            "range": "stddev: 4.4353012276977933e-7",
            "extra": "mean: 7.216883630205079 usec\nrounds: 42554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.55289522175207,
            "unit": "iter/sec",
            "range": "stddev: 0.000689238533504943",
            "extra": "mean: 8.884711477477296 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6219451.948117862,
            "unit": "iter/sec",
            "range": "stddev: 1.301479847732445e-8",
            "extra": "mean: 160.7858712216533 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7971.314608574852,
            "unit": "iter/sec",
            "range": "stddev: 0.00006687469827944044",
            "extra": "mean: 125.44982215659714 usec\nrounds: 3728"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.10899368689212,
            "unit": "iter/sec",
            "range": "stddev: 0.0001250517369497494",
            "extra": "mean: 14.062918741379054 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5869.441762158359,
            "unit": "iter/sec",
            "range": "stddev: 0.00004351194334421773",
            "extra": "mean: 170.37395386512392 usec\nrounds: 2471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.46488091265256,
            "unit": "iter/sec",
            "range": "stddev: 0.0006693266522155549",
            "extra": "mean: 9.855626804124116 msec\nrounds: 97"
          }
        ]
      }
    ]
  }
}