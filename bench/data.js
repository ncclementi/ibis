window.BENCHMARK_DATA = {
  "lastUpdate": 1683833935030,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "f6d2d56b3859e59035e4e8b95e93a272f572445f",
          "message": "feat(api): support abstract type names in `selectors.of_type`",
          "timestamp": "2023-05-11T14:32:56-05:00",
          "tree_id": "481414ff0706cf53684eb84d0ea5374288b9bf43",
          "url": "https://github.com/ibis-project/ibis/commit/f6d2d56b3859e59035e4e8b95e93a272f572445f"
        },
        "date": 1683833835659,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 202.53726221236053,
            "unit": "iter/sec",
            "range": "stddev: 0.007238650792445302",
            "extra": "mean: 4.93736307619039 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 983.6119281699168,
            "unit": "iter/sec",
            "range": "stddev: 0.00003052319730053602",
            "extra": "mean: 1.0166611153857947 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4555416.093412223,
            "unit": "iter/sec",
            "range": "stddev: 1.4623811464707355e-8",
            "extra": "mean: 219.51891539502228 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1784.171707636156,
            "unit": "iter/sec",
            "range": "stddev: 0.000146327062132095",
            "extra": "mean: 560.4841707331504 usec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 81.36334405397932,
            "unit": "iter/sec",
            "range": "stddev: 0.001021019381937883",
            "extra": "mean: 12.290546948716424 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.56259416012997,
            "unit": "iter/sec",
            "range": "stddev: 0.01869656531746105",
            "extra": "mean: 30.710083941174812 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 237.09335737214016,
            "unit": "iter/sec",
            "range": "stddev: 0.000036624402554753814",
            "extra": "mean: 4.217747857146443 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 237.42534549299768,
            "unit": "iter/sec",
            "range": "stddev: 0.0003702161573818189",
            "extra": "mean: 4.211850246752585 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.7389922678308,
            "unit": "iter/sec",
            "range": "stddev: 0.00027405212537227164",
            "extra": "mean: 12.385589315788804 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7088.686792882044,
            "unit": "iter/sec",
            "range": "stddev: 0.000018982655456062858",
            "extra": "mean: 141.0698524590096 usec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 130.13962459746097,
            "unit": "iter/sec",
            "range": "stddev: 0.014757877897698083",
            "extra": "mean: 7.684054745763499 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.042252375236444,
            "unit": "iter/sec",
            "range": "stddev: 0.0003856287963742441",
            "extra": "mean: 22.705469090910256 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1530.8079870572337,
            "unit": "iter/sec",
            "range": "stddev: 0.0036956757805316474",
            "extra": "mean: 653.2497925637045 usec\nrounds: 1022"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 806475.224788033,
            "unit": "iter/sec",
            "range": "stddev: 0.000006385839756524223",
            "extra": "mean: 1.2399636954288724 usec\nrounds: 64923"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 60.14883784813804,
            "unit": "iter/sec",
            "range": "stddev: 0.024434688793407548",
            "extra": "mean: 16.62542512500025 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1513498.4219292277,
            "unit": "iter/sec",
            "range": "stddev: 0.000004860841799244567",
            "extra": "mean: 660.7208739110009 nsec\nrounds: 147016"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 77.15021384812434,
            "unit": "iter/sec",
            "range": "stddev: 0.0016849875873736332",
            "extra": "mean: 12.961726871795465 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4721380.971361984,
            "unit": "iter/sec",
            "range": "stddev: 9.101772764969726e-7",
            "extra": "mean: 211.80243790238939 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 249.83244337951336,
            "unit": "iter/sec",
            "range": "stddev: 0.0006686277796763439",
            "extra": "mean: 4.0026827039470145 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 604.7635887788585,
            "unit": "iter/sec",
            "range": "stddev: 0.0002898208685394282",
            "extra": "mean: 1.653538702651072 msec\nrounds: 528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 63.666044797231635,
            "unit": "iter/sec",
            "range": "stddev: 0.023498807932001514",
            "extra": "mean: 15.70695970175114 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 209.402838710953,
            "unit": "iter/sec",
            "range": "stddev: 0.0008112876687773561",
            "extra": "mean: 4.775484449761159 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.61155790644207,
            "unit": "iter/sec",
            "range": "stddev: 0.0023097202492639935",
            "extra": "mean: 68.43897183332597 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3534.7657160140816,
            "unit": "iter/sec",
            "range": "stddev: 0.00016336374148171574",
            "extra": "mean: 282.9041810238086 usec\nrounds: 801"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4683180.687019488,
            "unit": "iter/sec",
            "range": "stddev: 7.056285488252605e-7",
            "extra": "mean: 213.53009136938243 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 82.18241389388601,
            "unit": "iter/sec",
            "range": "stddev: 0.0011519303916234665",
            "extra": "mean: 12.16805339024479 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 573.3811277782567,
            "unit": "iter/sec",
            "range": "stddev: 0.000027096255903579627",
            "extra": "mean: 1.744040659089724 msec\nrounds: 396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.75398273090389,
            "unit": "iter/sec",
            "range": "stddev: 0.0009085407406991687",
            "extra": "mean: 11.798855555555734 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1829.5281231700976,
            "unit": "iter/sec",
            "range": "stddev: 0.00012047599855348233",
            "extra": "mean: 546.5890287968132 usec\nrounds: 1146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 120.25634359530638,
            "unit": "iter/sec",
            "range": "stddev: 0.005302623923029554",
            "extra": "mean: 8.31556964150896 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1496216237014334,
            "unit": "iter/sec",
            "range": "stddev: 0.0008856143143235257",
            "extra": "mean: 869.8514183999976 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11319.023419566474,
            "unit": "iter/sec",
            "range": "stddev: 0.00006534528514280884",
            "extra": "mean: 88.34684432858084 usec\nrounds: 4805"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 150.85857843875846,
            "unit": "iter/sec",
            "range": "stddev: 0.0007828797799266125",
            "extra": "mean: 6.628724798742243 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 75.71061987817579,
            "unit": "iter/sec",
            "range": "stddev: 0.0021024840407383406",
            "extra": "mean: 13.208186666666801 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3032576207156856,
            "unit": "iter/sec",
            "range": "stddev: 0.014188890750494088",
            "extra": "mean: 767.3080011999843 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.911555658806044,
            "unit": "iter/sec",
            "range": "stddev: 0.00032538015028833506",
            "extra": "mean: 25.699306621622842 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.800831615584027,
            "unit": "iter/sec",
            "range": "stddev: 0.00010180036211531363",
            "extra": "mean: 38.758440615378746 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.155667707253023,
            "unit": "iter/sec",
            "range": "stddev: 0.004197068418765895",
            "extra": "mean: 463.8933898000005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 243.21810965587585,
            "unit": "iter/sec",
            "range": "stddev: 0.000320316811207232",
            "extra": "mean: 4.111535943663401 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 449.28763234713546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000608786460818641",
            "extra": "mean: 2.225745664922654 msec\nrounds: 382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144560.95735712533,
            "unit": "iter/sec",
            "range": "stddev: 6.731795535457598e-7",
            "extra": "mean: 6.917497077233562 usec\nrounds: 36095"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7475599136079129,
            "unit": "iter/sec",
            "range": "stddev: 0.0268460534064261",
            "extra": "mean: 1.3376854239999942 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.52372074971125,
            "unit": "iter/sec",
            "range": "stddev: 0.00007107252797293714",
            "extra": "mean: 10.46860394624047 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.43737388730855,
            "unit": "iter/sec",
            "range": "stddev: 0.00007061908025757622",
            "extra": "mean: 7.17167838235527 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.22225472691468,
            "unit": "iter/sec",
            "range": "stddev: 0.00006191777508021119",
            "extra": "mean: 6.746625207141831 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 132.95257624559216,
            "unit": "iter/sec",
            "range": "stddev: 0.00012723455736139873",
            "extra": "mean: 7.5214789230769314 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 70.68411667303282,
            "unit": "iter/sec",
            "range": "stddev: 0.021980569406283925",
            "extra": "mean: 14.147449909089929 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 81.40673106650597,
            "unit": "iter/sec",
            "range": "stddev: 0.0010453027312339275",
            "extra": "mean: 12.28399650617393 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 107.9935621422993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000823941663723656",
            "extra": "mean: 9.25981123469504 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 364.1504014297848,
            "unit": "iter/sec",
            "range": "stddev: 0.000040160457490343204",
            "extra": "mean: 2.746118076689308 msec\nrounds: 326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6772969359038719,
            "unit": "iter/sec",
            "range": "stddev: 0.004478635315977762",
            "extra": "mean: 1.4764572922000183 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 90.82256163524512,
            "unit": "iter/sec",
            "range": "stddev: 0.00007606020543504875",
            "extra": "mean: 11.010480017246445 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7673882625745638,
            "unit": "iter/sec",
            "range": "stddev: 0.009465349166869015",
            "extra": "mean: 1.3031213126000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.30735371033455,
            "unit": "iter/sec",
            "range": "stddev: 0.0010388938737160838",
            "extra": "mean: 11.861361506326324 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3748302.803892479,
            "unit": "iter/sec",
            "range": "stddev: 2.4131850169849507e-8",
            "extra": "mean: 266.78741081449 nsec\nrounds: 166639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 87.11372846449346,
            "unit": "iter/sec",
            "range": "stddev: 0.001195627107784089",
            "extra": "mean: 11.479246929576528 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 195.65135058151768,
            "unit": "iter/sec",
            "range": "stddev: 0.013504687514343661",
            "extra": "mean: 5.11113261946716 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 83.82851561022358,
            "unit": "iter/sec",
            "range": "stddev: 0.0011806113031326319",
            "extra": "mean: 11.92911496428838 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.1759918918285,
            "unit": "iter/sec",
            "range": "stddev: 0.0010087195554500511",
            "extra": "mean: 33.1389272500035 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5728473.913648669,
            "unit": "iter/sec",
            "range": "stddev: 1.3837598112489516e-8",
            "extra": "mean: 174.56656259146266 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.367882530219339,
            "unit": "iter/sec",
            "range": "stddev: 0.0002449536204792347",
            "extra": "mean: 135.7242051428622 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 210.79109938848816,
            "unit": "iter/sec",
            "range": "stddev: 0.0005814436381698318",
            "extra": "mean: 4.744033324466889 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1837.106396250392,
            "unit": "iter/sec",
            "range": "stddev: 0.00011565737037016112",
            "extra": "mean: 544.3342868116077 usec\nrounds: 1562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 191.6726064453138,
            "unit": "iter/sec",
            "range": "stddev: 0.01562564111330875",
            "extra": "mean: 5.217229621622068 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10354.90341293067,
            "unit": "iter/sec",
            "range": "stddev: 0.000029236298704322032",
            "extra": "mean: 96.57260527908466 usec\nrounds: 4773"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1843.663800580481,
            "unit": "iter/sec",
            "range": "stddev: 0.00010207141974233887",
            "extra": "mean: 542.3982396818488 usec\nrounds: 1260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.85449738548135,
            "unit": "iter/sec",
            "range": "stddev: 0.0007712277544219359",
            "extra": "mean: 20.468944590906414 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9206921.040532392,
            "unit": "iter/sec",
            "range": "stddev: 5.055343102857055e-9",
            "extra": "mean: 108.61394331479472 nsec\nrounds: 91735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1463158.6547453376,
            "unit": "iter/sec",
            "range": "stddev: 1.374020587283381e-7",
            "extra": "mean: 683.4528824039588 nsec\nrounds: 106372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.267039252294566,
            "unit": "iter/sec",
            "range": "stddev: 0.0008228409512448592",
            "extra": "mean: 30.991377677420104 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1882.556561574119,
            "unit": "iter/sec",
            "range": "stddev: 0.00012369827095040745",
            "extra": "mean: 531.1925391308507 usec\nrounds: 1150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.30399621737949,
            "unit": "iter/sec",
            "range": "stddev: 0.0009940143379408323",
            "extra": "mean: 11.454229397587776 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 195.72296164810538,
            "unit": "iter/sec",
            "range": "stddev: 0.00048223843999590886",
            "extra": "mean: 5.109262559586248 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14228258092842427,
            "unit": "iter/sec",
            "range": "stddev: 0.017288379031670555",
            "extra": "mean: 7.028267223399984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 84.6543926431834,
            "unit": "iter/sec",
            "range": "stddev: 0.0009589967792228522",
            "extra": "mean: 11.812736100003463 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1865.1820289450725,
            "unit": "iter/sec",
            "range": "stddev: 0.00014068511639421684",
            "extra": "mean: 536.1407007366404 usec\nrounds: 1086"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1569795.7073281517,
            "unit": "iter/sec",
            "range": "stddev: 1.08935588805951e-7",
            "extra": "mean: 637.0255666592666 nsec\nrounds: 161265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1587435.3508961464,
            "unit": "iter/sec",
            "range": "stddev: 1.3285727926188937e-7",
            "extra": "mean: 629.9469137029582 nsec\nrounds: 185151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 68.54990572902133,
            "unit": "iter/sec",
            "range": "stddev: 0.0010618759795166502",
            "extra": "mean: 14.587912111112347 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.3976901971605,
            "unit": "iter/sec",
            "range": "stddev: 0.0003370732501626004",
            "extra": "mean: 13.08940096774244 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 88.24309890458021,
            "unit": "iter/sec",
            "range": "stddev: 0.000995046694871096",
            "extra": "mean: 11.332330940477608 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.10286598462833,
            "unit": "iter/sec",
            "range": "stddev: 0.0003108184923764992",
            "extra": "mean: 23.20031341666764 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 184.28873966818708,
            "unit": "iter/sec",
            "range": "stddev: 0.00503934019092511",
            "extra": "mean: 5.426267507176541 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.17562501801743,
            "unit": "iter/sec",
            "range": "stddev: 0.001741429565791178",
            "extra": "mean: 49.564759411763966 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 86.67250122833576,
            "unit": "iter/sec",
            "range": "stddev: 0.0015279745746735046",
            "extra": "mean: 11.53768479999826 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1386.5138360835754,
            "unit": "iter/sec",
            "range": "stddev: 0.0002931076033006758",
            "extra": "mean: 721.2333364264551 usec\nrounds: 1186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.89297312733824,
            "unit": "iter/sec",
            "range": "stddev: 0.0016579871616663744",
            "extra": "mean: 12.83812852239207 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8751.499940417994,
            "unit": "iter/sec",
            "range": "stddev: 0.00009179421181172748",
            "extra": "mean: 114.26612658495172 usec\nrounds: 4890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.41472203189922,
            "unit": "iter/sec",
            "range": "stddev: 0.0011607346108314942",
            "extra": "mean: 12.435533876537137 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1782.9154620655834,
            "unit": "iter/sec",
            "range": "stddev: 0.00015515843524219254",
            "extra": "mean: 560.8790889285673 usec\nrounds: 1102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1813.8927959086545,
            "unit": "iter/sec",
            "range": "stddev: 0.00011369878943966196",
            "extra": "mean: 551.3004970611057 usec\nrounds: 1531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.35075369881086,
            "unit": "iter/sec",
            "range": "stddev: 0.00103332702414951",
            "extra": "mean: 12.445433974999531 msec\nrounds: 80"
          }
        ]
      }
    ]
  }
}