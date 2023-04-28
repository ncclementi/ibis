window.BENCHMARK_DATA = {
  "lastUpdate": 1682684382126,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "anja@voltrondata.com",
            "name": "anjakefala",
            "username": "anjakefala"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "f050a611a31331ca1247407b7a018a571246dbb8",
          "message": "docs: clarify map refers to Python Mapping container",
          "timestamp": "2023-04-28T08:03:01-04:00",
          "tree_id": "ac36935035703d0ac0c9cabb2131785d63e2d3f1",
          "url": "https://github.com/ibis-project/ibis/commit/f050a611a31331ca1247407b7a018a571246dbb8"
        },
        "date": 1682683964965,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.583846543588294,
            "unit": "iter/sec",
            "range": "stddev: 0.0010277864163704589",
            "extra": "mean: 28.102639178568115 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1878.3551784029141,
            "unit": "iter/sec",
            "range": "stddev: 0.00012428261380465012",
            "extra": "mean: 532.3806761883329 usec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 639.279336973239,
            "unit": "iter/sec",
            "range": "stddev: 0.000047573319065910194",
            "extra": "mean: 1.5642614146339306 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 125.75771538664888,
            "unit": "iter/sec",
            "range": "stddev: 0.0002167930282758018",
            "extra": "mean: 7.9517984000062825 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.01316428363686,
            "unit": "iter/sec",
            "range": "stddev: 0.0003662320671408135",
            "extra": "mean: 26.306676090905167 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 74.14365812265274,
            "unit": "iter/sec",
            "range": "stddev: 0.013853968892328353",
            "extra": "mean: 13.48733020895384 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 75.08706204055783,
            "unit": "iter/sec",
            "range": "stddev: 0.00017038579243782145",
            "extra": "mean: 13.317873583332585 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1009789963344483,
            "unit": "iter/sec",
            "range": "stddev: 0.002194522969081739",
            "extra": "mean: 475.9685849999869 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5104348.912778727,
            "unit": "iter/sec",
            "range": "stddev: 1.4993865729631774e-8",
            "extra": "mean: 195.91137226051364 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.88099984323857,
            "unit": "iter/sec",
            "range": "stddev: 0.0010203033166122865",
            "extra": "mean: 13.00711491836753 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.33680570565565,
            "unit": "iter/sec",
            "range": "stddev: 0.00007893189205194026",
            "extra": "mean: 6.741415222222713 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1859.7566117143476,
            "unit": "iter/sec",
            "range": "stddev: 0.00010294050266975265",
            "extra": "mean: 537.7047693774225 usec\nrounds: 1045"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1874.5347932663435,
            "unit": "iter/sec",
            "range": "stddev: 0.00010071676792113447",
            "extra": "mean: 533.4656916436945 usec\nrounds: 347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6676.340481778441,
            "unit": "iter/sec",
            "range": "stddev: 0.00002787386957210638",
            "extra": "mean: 149.78265454394867 usec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 239.36356625166638,
            "unit": "iter/sec",
            "range": "stddev: 0.00042480758460393587",
            "extra": "mean: 4.177745241932944 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 88.77886949443179,
            "unit": "iter/sec",
            "range": "stddev: 0.00009678547647081368",
            "extra": "mean: 11.263941585364748 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4818442.497924455,
            "unit": "iter/sec",
            "range": "stddev: 1.4171512077267867e-8",
            "extra": "mean: 207.5359414231645 nsec\nrounds: 45044"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1731.9677575931198,
            "unit": "iter/sec",
            "range": "stddev: 0.00021398071538320854",
            "extra": "mean: 577.3779538423277 usec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4543353.916194576,
            "unit": "iter/sec",
            "range": "stddev: 1.7377341902547007e-8",
            "extra": "mean: 220.1017174636994 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7574766930523105,
            "unit": "iter/sec",
            "range": "stddev: 0.009701568510841177",
            "extra": "mean: 1.3201726325999856 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 234.42927243034384,
            "unit": "iter/sec",
            "range": "stddev: 0.00043795503573059016",
            "extra": "mean: 4.265678895954134 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 47.93251901112037,
            "unit": "iter/sec",
            "range": "stddev: 0.0009123065160653808",
            "extra": "mean: 20.86266319047408 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1588251.7977920696,
            "unit": "iter/sec",
            "range": "stddev: 1.5983206480251143e-7",
            "extra": "mean: 629.6230870886869 nsec\nrounds: 136968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 72.65745555031673,
            "unit": "iter/sec",
            "range": "stddev: 0.020204790023940652",
            "extra": "mean: 13.763212493829766 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 568.7422268788062,
            "unit": "iter/sec",
            "range": "stddev: 0.0001013422200076019",
            "extra": "mean: 1.7582657885064878 msec\nrounds: 435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 215.81962262848464,
            "unit": "iter/sec",
            "range": "stddev: 0.0005826801630439619",
            "extra": "mean: 4.633498973915899 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 130.45580745899346,
            "unit": "iter/sec",
            "range": "stddev: 0.004957305991473564",
            "extra": "mean: 7.66543107185422 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1644178.7081071984,
            "unit": "iter/sec",
            "range": "stddev: 3.339021504003151e-7",
            "extra": "mean: 608.2063920844797 nsec\nrounds: 72464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 82.94712200783127,
            "unit": "iter/sec",
            "range": "stddev: 0.0011455364849004017",
            "extra": "mean: 12.055873378049055 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1858.4750851897256,
            "unit": "iter/sec",
            "range": "stddev: 0.00010549104841198388",
            "extra": "mean: 538.075548049606 usec\nrounds: 1051"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 83.3649777347895,
            "unit": "iter/sec",
            "range": "stddev: 0.0010348648727462632",
            "extra": "mean: 11.995444935897636 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.154897258255954,
            "unit": "iter/sec",
            "range": "stddev: 0.0004206819363624155",
            "extra": "mean: 61.90073412500041 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6508842713237903,
            "unit": "iter/sec",
            "range": "stddev: 0.005108075806070884",
            "extra": "mean: 1.5363714319999873 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 83.49651622841901,
            "unit": "iter/sec",
            "range": "stddev: 0.0011139216874403162",
            "extra": "mean: 11.976547587498487 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14115185979500489,
            "unit": "iter/sec",
            "range": "stddev: 0.08920220437737565",
            "extra": "mean: 7.084568361000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1909.7178672139082,
            "unit": "iter/sec",
            "range": "stddev: 0.0001001345638068368",
            "extra": "mean: 523.6375577607713 usec\nrounds: 1108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 107.98189690368953,
            "unit": "iter/sec",
            "range": "stddev: 0.0004956421083096936",
            "extra": "mean: 9.260811568182703 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 231.9732141304666,
            "unit": "iter/sec",
            "range": "stddev: 0.00041571271032662726",
            "extra": "mean: 4.310842541663362 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 863715.8786595432,
            "unit": "iter/sec",
            "range": "stddev: 1.628542501146635e-7",
            "extra": "mean: 1.1577881392570495 usec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 42.88441933888967,
            "unit": "iter/sec",
            "range": "stddev: 0.0006284597694046986",
            "extra": "mean: 23.318492250008187 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12079.33663195207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019324381582120213",
            "extra": "mean: 82.78600311169536 usec\nrounds: 5142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3579941349140943,
            "unit": "iter/sec",
            "range": "stddev: 0.001327997332319897",
            "extra": "mean: 736.3802053999734 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.76158846609516,
            "unit": "iter/sec",
            "range": "stddev: 0.00007522877674540747",
            "extra": "mean: 7.155041746270583 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.6499284865383,
            "unit": "iter/sec",
            "range": "stddev: 0.0009961909281725556",
            "extra": "mean: 11.95458284415544 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9285347.330646982,
            "unit": "iter/sec",
            "range": "stddev: 3.858635710266966e-9",
            "extra": "mean: 107.69656367075325 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.43615170210111,
            "unit": "iter/sec",
            "range": "stddev: 0.000848468228920051",
            "extra": "mean: 23.564813487800023 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 240.56708288890675,
            "unit": "iter/sec",
            "range": "stddev: 0.00035235782840405084",
            "extra": "mean: 4.156844685446003 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 263.4487924831356,
            "unit": "iter/sec",
            "range": "stddev: 0.00012931146568979454",
            "extra": "mean: 3.795804074767258 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1625290.9153840612,
            "unit": "iter/sec",
            "range": "stddev: 9.44135648561544e-8",
            "extra": "mean: 615.274465964573 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 78.48761909131434,
            "unit": "iter/sec",
            "range": "stddev: 0.0012209410166734234",
            "extra": "mean: 12.740862974026216 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 88.67996018591042,
            "unit": "iter/sec",
            "range": "stddev: 0.0009566569831697981",
            "extra": "mean: 11.276504837209899 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.56594104389454,
            "unit": "iter/sec",
            "range": "stddev: 0.00014099002160059598",
            "extra": "mean: 39.11453907693385 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 194.8820453376175,
            "unit": "iter/sec",
            "range": "stddev: 0.004443734818986551",
            "extra": "mean: 5.131309034998992 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1481.9452315676756,
            "unit": "iter/sec",
            "range": "stddev: 0.000009736897660318525",
            "extra": "mean: 674.7887699885846 usec\nrounds: 1013"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.228060317505952,
            "unit": "iter/sec",
            "range": "stddev: 0.00027707541833100373",
            "extra": "mean: 138.34970324999318 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10579.484087428038,
            "unit": "iter/sec",
            "range": "stddev: 0.00001685979314711674",
            "extra": "mean: 94.52256761634852 usec\nrounds: 3823"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.6751399779548,
            "unit": "iter/sec",
            "range": "stddev: 0.0010400279956153237",
            "extra": "mean: 12.395392189877315 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 236.23474652830515,
            "unit": "iter/sec",
            "range": "stddev: 0.0004183186065141249",
            "extra": "mean: 4.233077541284478 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 64.57007471333664,
            "unit": "iter/sec",
            "range": "stddev: 0.03181402911907783",
            "extra": "mean: 15.487050378051595 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.79267285998074,
            "unit": "iter/sec",
            "range": "stddev: 0.00022541480237577328",
            "extra": "mean: 5.889535650485038 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.56275707214363,
            "unit": "iter/sec",
            "range": "stddev: 0.0002589382694947346",
            "extra": "mean: 12.11199862337684 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3670285.2289829548,
            "unit": "iter/sec",
            "range": "stddev: 1.000804650748719e-7",
            "extra": "mean: 272.45838882048366 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1493070532518816,
            "unit": "iter/sec",
            "range": "stddev: 0.0029562619769516766",
            "extra": "mean: 870.089500600011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 88.28076032822348,
            "unit": "iter/sec",
            "range": "stddev: 0.000958381797755151",
            "extra": "mean: 11.327496458821262 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5677542.138339951,
            "unit": "iter/sec",
            "range": "stddev: 3.3404529519636747e-7",
            "extra": "mean: 176.13255448141814 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 106.66701598032265,
            "unit": "iter/sec",
            "range": "stddev: 0.00008498288236012884",
            "extra": "mean: 9.374969298704997 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 83.2112122329429,
            "unit": "iter/sec",
            "range": "stddev: 0.0010768283510953509",
            "extra": "mean: 12.017611246914452 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.49199476543947,
            "unit": "iter/sec",
            "range": "stddev: 0.0006971101028970626",
            "extra": "mean: 28.175367617650945 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1923.6411068208095,
            "unit": "iter/sec",
            "range": "stddev: 0.00009641346191336811",
            "extra": "mean: 519.8474894585166 usec\nrounds: 1091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 84.09539124009238,
            "unit": "iter/sec",
            "range": "stddev: 0.00100986718844626",
            "extra": "mean: 11.891258073168357 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.183007330482564,
            "unit": "iter/sec",
            "range": "stddev: 0.0005607282039557125",
            "extra": "mean: 33.131224766661184 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3813.5478260465748,
            "unit": "iter/sec",
            "range": "stddev: 0.00004644182621094972",
            "extra": "mean: 262.22301269437054 usec\nrounds: 1733"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 450.365922497347,
            "unit": "iter/sec",
            "range": "stddev: 0.0000293763673939877",
            "extra": "mean: 2.22041666575226 msec\nrounds: 365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 239.4596636948164,
            "unit": "iter/sec",
            "range": "stddev: 0.0003192440140293205",
            "extra": "mean: 4.176068672987312 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.7462133996417,
            "unit": "iter/sec",
            "range": "stddev: 0.001035385031052052",
            "extra": "mean: 11.940838390243904 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.832365924961145,
            "unit": "iter/sec",
            "range": "stddev: 0.0009033004806576018",
            "extra": "mean: 50.42262752632017 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 79.51147481577834,
            "unit": "iter/sec",
            "range": "stddev: 0.0010936319786364918",
            "extra": "mean: 12.57680105062721 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 162.80815473051155,
            "unit": "iter/sec",
            "range": "stddev: 0.00015759305842117047",
            "extra": "mean: 6.1421984768223155 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 241.06433659439995,
            "unit": "iter/sec",
            "range": "stddev: 0.00039980442609337794",
            "extra": "mean: 4.148270184330661 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 94.46390002474625,
            "unit": "iter/sec",
            "range": "stddev: 0.00005530058828494399",
            "extra": "mean: 10.586054564103692 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.759061655614456,
            "unit": "iter/sec",
            "range": "stddev: 0.006942177046127525",
            "extra": "mean: 1.3174160393999954 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144776.1479826721,
            "unit": "iter/sec",
            "range": "stddev: 5.770271335147729e-7",
            "extra": "mean: 6.9072151313190595 usec\nrounds: 38609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 360.65938858719653,
            "unit": "iter/sec",
            "range": "stddev: 0.00007545227700613752",
            "extra": "mean: 2.7726992049680974 msec\nrounds: 322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1837.7007279509826,
            "unit": "iter/sec",
            "range": "stddev: 0.00010390464643543472",
            "extra": "mean: 544.1582433909082 usec\nrounds: 1097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1385053.8590320493,
            "unit": "iter/sec",
            "range": "stddev: 1.2715387237133547e-7",
            "extra": "mean: 721.9935842053494 nsec\nrounds: 113624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 977.194198233047,
            "unit": "iter/sec",
            "range": "stddev: 0.0001775447955171675",
            "extra": "mean: 1.023338044585396 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9097.903117909342,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031655285750608098",
            "extra": "mean: 109.91543733099189 usec\nrounds: 4077"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 93.78959370387481,
            "unit": "iter/sec",
            "range": "stddev: 0.0005637111062836732",
            "extra": "mean: 10.662163684782932 msec\nrounds: 92"
          }
        ]
      },
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
          "id": "9a227ade134915c55f24054045d9a7ed61782341",
          "message": "chore(deps): update clickhouse/clickhouse-server docker tag to v23.4.1.1943",
          "timestamp": "2023-04-28T08:03:39-04:00",
          "tree_id": "7c31d2cc70f9fb4ecefc0c69509a00200840776b",
          "url": "https://github.com/ibis-project/ibis/commit/9a227ade134915c55f24054045d9a7ed61782341"
        },
        "date": 1682684301306,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5592485.996978067,
            "unit": "iter/sec",
            "range": "stddev: 1.034404564965184e-8",
            "extra": "mean: 178.81135518970595 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.8362090217856,
            "unit": "iter/sec",
            "range": "stddev: 0.03489733842131899",
            "extra": "mean: 127.61272666666754 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.12470597504472,
            "unit": "iter/sec",
            "range": "stddev: 0.0001825604426802839",
            "extra": "mean: 6.245132466665382 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.037408467267,
            "unit": "iter/sec",
            "range": "stddev: 0.000025452338205494514",
            "extra": "mean: 5.024181171271914 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5964307.590332278,
            "unit": "iter/sec",
            "range": "stddev: 1.2442124590696058e-8",
            "extra": "mean: 167.6640556937049 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 286.3410009258608,
            "unit": "iter/sec",
            "range": "stddev: 0.00026869793639201377",
            "extra": "mean: 3.4923395418978767 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4519.391866657046,
            "unit": "iter/sec",
            "range": "stddev: 0.000050813204385408476",
            "extra": "mean: 221.26870815911147 usec\nrounds: 956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6356525018221246,
            "unit": "iter/sec",
            "range": "stddev: 0.003560394294858163",
            "extra": "mean: 611.3768045999961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.982901750108915,
            "unit": "iter/sec",
            "range": "stddev: 0.0002897103753177526",
            "extra": "mean: 19.237094627906274 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1975458.5855188007,
            "unit": "iter/sec",
            "range": "stddev: 1.0620330394726387e-7",
            "extra": "mean: 506.21157402668456 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.4327638955631,
            "unit": "iter/sec",
            "range": "stddev: 0.0008165368867912512",
            "extra": "mean: 10.936998482756424 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 76.80532832609154,
            "unit": "iter/sec",
            "range": "stddev: 0.020596330646066176",
            "extra": "mean: 13.019930020405758 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2047.4988509060604,
            "unit": "iter/sec",
            "range": "stddev: 0.00012409129287365447",
            "extra": "mean: 488.4007624998077 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9498124252958869,
            "unit": "iter/sec",
            "range": "stddev: 0.011457893293974949",
            "extra": "mean: 1.0528394590000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3539759359974535,
            "unit": "iter/sec",
            "range": "stddev: 0.0011551783267455787",
            "extra": "mean: 738.5655633999988 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.86324726929476,
            "unit": "iter/sec",
            "range": "stddev: 0.0004721727024401194",
            "extra": "mean: 10.013693999989451 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 163.85230757167002,
            "unit": "iter/sec",
            "range": "stddev: 0.003709775987903694",
            "extra": "mean: 6.103057166665741 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9327.399201008358,
            "unit": "iter/sec",
            "range": "stddev: 0.000014252099719130389",
            "extra": "mean: 107.21102189899761 usec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 303.33451734900524,
            "unit": "iter/sec",
            "range": "stddev: 0.00014111300614709317",
            "extra": "mean: 3.2966904285720893 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2475.559800926534,
            "unit": "iter/sec",
            "range": "stddev: 0.00008045709697257859",
            "extra": "mean: 403.9490379613239 usec\nrounds: 1923"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 113.27755901333943,
            "unit": "iter/sec",
            "range": "stddev: 0.0007450184179625901",
            "extra": "mean: 8.827873841121887 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2377.3015291104716,
            "unit": "iter/sec",
            "range": "stddev: 0.00008523528522446275",
            "extra": "mean: 420.64499927957206 usec\nrounds: 1388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 8045821.423112064,
            "unit": "iter/sec",
            "range": "stddev: 1.4124225583977667e-8",
            "extra": "mean: 124.28811769634532 nsec\nrounds: 66663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2426.1077396329115,
            "unit": "iter/sec",
            "range": "stddev: 0.00007810985048049359",
            "extra": "mean: 412.1828489576096 usec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.9102157940610787,
            "unit": "iter/sec",
            "range": "stddev: 0.0014050211900988807",
            "extra": "mean: 343.6171303999913 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 160.35728478415518,
            "unit": "iter/sec",
            "range": "stddev: 0.01164678527014469",
            "extra": "mean: 6.23607465882217 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 115.05393317787174,
            "unit": "iter/sec",
            "range": "stddev: 0.0005994460947002769",
            "extra": "mean: 8.691575962501119 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 305.39944064181253,
            "unit": "iter/sec",
            "range": "stddev: 0.00031184237281438434",
            "extra": "mean: 3.2744002343240997 msec\nrounds: 303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 469.49255457121586,
            "unit": "iter/sec",
            "range": "stddev: 0.00006177607367462914",
            "extra": "mean: 2.1299592299462398 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 119.22806599425141,
            "unit": "iter/sec",
            "range": "stddev: 0.000695331367543836",
            "extra": "mean: 8.387286933331747 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1129790.7984874034,
            "unit": "iter/sec",
            "range": "stddev: 1.2377317035271449e-7",
            "extra": "mean: 885.119618020282 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 21.70117317337826,
            "unit": "iter/sec",
            "range": "stddev: 0.0004915800306085619",
            "extra": "mean: 46.080458047620304 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 148.84604571347035,
            "unit": "iter/sec",
            "range": "stddev: 0.0002955546868622746",
            "extra": "mean: 6.718351133929395 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6972995.5667969985,
            "unit": "iter/sec",
            "range": "stddev: 1.861747643542572e-8",
            "extra": "mean: 143.41038803488107 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 142.87860390378978,
            "unit": "iter/sec",
            "range": "stddev: 0.00030330975603153683",
            "extra": "mean: 6.99894856666832 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 5136756.575238077,
            "unit": "iter/sec",
            "range": "stddev: 2.580753213047984e-8",
            "extra": "mean: 194.6753725532845 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 113.07962685538189,
            "unit": "iter/sec",
            "range": "stddev: 0.0008210095937543409",
            "extra": "mean: 8.843325962499904 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 125.74784109277999,
            "unit": "iter/sec",
            "range": "stddev: 0.00010879784801964247",
            "extra": "mean: 7.952422811475342 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 241.65980654885482,
            "unit": "iter/sec",
            "range": "stddev: 0.0102002692645019",
            "extra": "mean: 4.138048500000915 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 63.75485393520352,
            "unit": "iter/sec",
            "range": "stddev: 0.00032687774577097584",
            "extra": "mean: 15.685080245283565 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 113.70688245998974,
            "unit": "iter/sec",
            "range": "stddev: 0.0007366755475462854",
            "extra": "mean: 8.794542409091832 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1888605.3334386002,
            "unit": "iter/sec",
            "range": "stddev: 2.629327296680336e-7",
            "extra": "mean: 529.491250657061 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.46955404057708,
            "unit": "iter/sec",
            "range": "stddev: 0.00030213829859304284",
            "extra": "mean: 9.48140919999787 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2273143.8812949117,
            "unit": "iter/sec",
            "range": "stddev: 2.1639663144448127e-7",
            "extra": "mean: 439.91935936336034 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2494.2593890449175,
            "unit": "iter/sec",
            "range": "stddev: 0.00010497933565050969",
            "extra": "mean: 400.92061170226253 usec\nrounds: 1128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 34.61872101420376,
            "unit": "iter/sec",
            "range": "stddev: 0.00015663963961639086",
            "extra": "mean: 28.886104705881788 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 117.67301235361195,
            "unit": "iter/sec",
            "range": "stddev: 0.0006111907837811185",
            "extra": "mean: 8.498125271026133 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 319.61382020948776,
            "unit": "iter/sec",
            "range": "stddev: 0.0002330811835820431",
            "extra": "mean: 3.1287758437496844 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2470.7044290283884,
            "unit": "iter/sec",
            "range": "stddev: 0.00007703061382647942",
            "extra": "mean: 404.7428693820948 usec\nrounds: 1424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 107.36714209649136,
            "unit": "iter/sec",
            "range": "stddev: 0.0007858975162728001",
            "extra": "mean: 9.313836435185127 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.48633649866449,
            "unit": "iter/sec",
            "range": "stddev: 0.03437021675787622",
            "extra": "mean: 25.325215977780623 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2272462.0276518343,
            "unit": "iter/sec",
            "range": "stddev: 2.9443993804049937e-7",
            "extra": "mean: 440.05135744042053 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8934558482592397,
            "unit": "iter/sec",
            "range": "stddev: 0.0029250421267737765",
            "extra": "mean: 1.1192494872000054 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 217.80772330822373,
            "unit": "iter/sec",
            "range": "stddev: 0.0002268747925471692",
            "extra": "mean: 4.591205421053328 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 120.29072988481084,
            "unit": "iter/sec",
            "range": "stddev: 0.00005910576111342926",
            "extra": "mean: 8.313192554052915 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 2002.9466528690862,
            "unit": "iter/sec",
            "range": "stddev: 0.000011054783083091779",
            "extra": "mean: 499.2644205314042 usec\nrounds: 1617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11971.294958403118,
            "unit": "iter/sec",
            "range": "stddev: 0.000003682048825222844",
            "extra": "mean: 83.53315188329405 usec\nrounds: 4859"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 109.51679174894618,
            "unit": "iter/sec",
            "range": "stddev: 0.0007260519415670728",
            "extra": "mean: 9.131019855771317 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 356.8090243209037,
            "unit": "iter/sec",
            "range": "stddev: 0.000033956943357875436",
            "extra": "mean: 2.8026196980394444 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 169018.1791694453,
            "unit": "iter/sec",
            "range": "stddev: 8.535929215499627e-7",
            "extra": "mean: 5.9165233285200225 usec\nrounds: 42373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 319.8134081601992,
            "unit": "iter/sec",
            "range": "stddev: 0.00022944866268634475",
            "extra": "mean: 3.1268232490711756 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 87.54852754320342,
            "unit": "iter/sec",
            "range": "stddev: 0.021266568914051372",
            "extra": "mean: 11.422236650485301 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2380.2916871931234,
            "unit": "iter/sec",
            "range": "stddev: 0.00008872113828469586",
            "extra": "mean: 420.1165787287252 usec\nrounds: 1683"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 52.8357277979229,
            "unit": "iter/sec",
            "range": "stddev: 0.0002848478551039894",
            "extra": "mean: 18.926587021279047 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 313.91362637097427,
            "unit": "iter/sec",
            "range": "stddev: 0.00021391718912883712",
            "extra": "mean: 3.1855896526716183 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 200.10690326489794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000675704343493927",
            "extra": "mean: 4.997328846152888 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 112.64794484157552,
            "unit": "iter/sec",
            "range": "stddev: 0.0008115561159035107",
            "extra": "mean: 8.877214772150243 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.44714503962304,
            "unit": "iter/sec",
            "range": "stddev: 0.0011465627204882793",
            "extra": "mean: 23.016472062503013 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 1.010727519865663,
            "unit": "iter/sec",
            "range": "stddev: 0.0036020991328670217",
            "extra": "mean: 989.3863383999985 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 118.15007776015973,
            "unit": "iter/sec",
            "range": "stddev: 0.0007194060309945369",
            "extra": "mean: 8.463811611110092 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18507092348688634,
            "unit": "iter/sec",
            "range": "stddev: 0.11626802823354107",
            "extra": "mean: 5.403333928200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 14034.513176703967,
            "unit": "iter/sec",
            "range": "stddev: 0.00001152815536170028",
            "extra": "mean: 71.25291682079221 usec\nrounds: 4316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 48.40216200288365,
            "unit": "iter/sec",
            "range": "stddev: 0.0007277026866809944",
            "extra": "mean: 20.6602341428555 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 70.78771507517988,
            "unit": "iter/sec",
            "range": "stddev: 0.0005981246086925088",
            "extra": "mean: 14.126745000003927 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 245.26285054664996,
            "unit": "iter/sec",
            "range": "stddev: 0.0038138927165630152",
            "extra": "mean: 4.077258328243218 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.07689903179266,
            "unit": "iter/sec",
            "range": "stddev: 0.02543928119093402",
            "extra": "mean: 11.484102111110891 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 114.36485233458025,
            "unit": "iter/sec",
            "range": "stddev: 0.0007709350358500211",
            "extra": "mean: 8.743945185837767 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 117.0915646535222,
            "unit": "iter/sec",
            "range": "stddev: 0.00025750707979259644",
            "extra": "mean: 8.540324855671996 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.7844799714473,
            "unit": "iter/sec",
            "range": "stddev: 0.00026125577720794254",
            "extra": "mean: 3.3026791865101552 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2473.577156387931,
            "unit": "iter/sec",
            "range": "stddev: 0.00008480675141046366",
            "extra": "mean: 404.2728149463756 usec\nrounds: 1967"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1303.2543023133032,
            "unit": "iter/sec",
            "range": "stddev: 0.000012668523972219284",
            "extra": "mean: 767.3099549527512 usec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 123.57976892127793,
            "unit": "iter/sec",
            "range": "stddev: 0.00006303247320201748",
            "extra": "mean: 8.091939390475913 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.878753914258183,
            "unit": "iter/sec",
            "range": "stddev: 0.0009278857418604175",
            "extra": "mean: 37.204105636367956 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 842.3920196770775,
            "unit": "iter/sec",
            "range": "stddev: 0.00001784071196122425",
            "extra": "mean: 1.1870957661533164 msec\nrounds: 650"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 15686.14283438386,
            "unit": "iter/sec",
            "range": "stddev: 0.000002874099204915902",
            "extra": "mean: 63.75053514162899 usec\nrounds: 8039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13298314.819357522,
            "unit": "iter/sec",
            "range": "stddev: 1.1695020082410282e-8",
            "extra": "mean: 75.19749784717268 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 766.2725144704997,
            "unit": "iter/sec",
            "range": "stddev: 0.00011586777828991131",
            "extra": "mean: 1.3050187513133078 msec\nrounds: 571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 605.8390266863265,
            "unit": "iter/sec",
            "range": "stddev: 0.00003653189962017472",
            "extra": "mean: 1.6506034704788843 msec\nrounds: 542"
          }
        ]
      }
    ]
  }
}