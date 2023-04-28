window.BENCHMARK_DATA = {
  "lastUpdate": 1682684060478,
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
      }
    ]
  }
}