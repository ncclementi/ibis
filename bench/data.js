window.BENCHMARK_DATA = {
  "lastUpdate": 1680088193924,
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
          "id": "c4bdff293e69cd79b91be84609308b1eb1f0d08f",
          "message": "chore(datatypes): make annotations more precise",
          "timestamp": "2023-03-29T07:00:41-04:00",
          "tree_id": "1e5a4294c0634df50cafbf0cca8bd617312c4c3a",
          "url": "https://github.com/ibis-project/ibis/commit/c4bdff293e69cd79b91be84609308b1eb1f0d08f"
        },
        "date": 1680088108424,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.0062705579716,
            "unit": "iter/sec",
            "range": "stddev: 0.0002509153164825721",
            "extra": "mean: 16.66492502702543 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 110.25738815450627,
            "unit": "iter/sec",
            "range": "stddev: 0.00017627601509576178",
            "extra": "mean: 9.069687000010163 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 321.3402187227458,
            "unit": "iter/sec",
            "range": "stddev: 0.00015815732051376204",
            "extra": "mean: 3.111966513170285 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1194.9588927680436,
            "unit": "iter/sec",
            "range": "stddev: 0.000013875139125619001",
            "extra": "mean: 836.8488707453073 usec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 63497.65464421795,
            "unit": "iter/sec",
            "range": "stddev: 5.057469756824283e-7",
            "extra": "mean: 15.748613166944102 usec\nrounds: 7975"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.14705888674841,
            "unit": "iter/sec",
            "range": "stddev: 0.0000736201584355718",
            "extra": "mean: 8.916863357155437 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 70.31092489048083,
            "unit": "iter/sec",
            "range": "stddev: 0.00008120478800723041",
            "extra": "mean: 14.222540829289912 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.619331969859472,
            "unit": "iter/sec",
            "range": "stddev: 0.001780544577847475",
            "extra": "mean: 381.7767322000236 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 113.54470281130132,
            "unit": "iter/sec",
            "range": "stddev: 0.006231969562775417",
            "extra": "mean: 8.807103944442824 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1729.433447573177,
            "unit": "iter/sec",
            "range": "stddev: 0.00000781199544008404",
            "extra": "mean: 578.2240429102649 usec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2412498.141618963,
            "unit": "iter/sec",
            "range": "stddev: 1.4798424632269678e-8",
            "extra": "mean: 414.50809132146213 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 311.9536555163857,
            "unit": "iter/sec",
            "range": "stddev: 0.00023060437693078227",
            "extra": "mean: 3.2056043656378117 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 317.12114466453056,
            "unit": "iter/sec",
            "range": "stddev: 0.00018269424897275204",
            "extra": "mean: 3.1533690415309867 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.50769513822173,
            "unit": "iter/sec",
            "range": "stddev: 0.0002853086052585645",
            "extra": "mean: 181.56415250007285 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5623.41659987653,
            "unit": "iter/sec",
            "range": "stddev: 0.000042226638604157224",
            "extra": "mean: 177.8278351317518 usec\nrounds: 370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.8815763027328,
            "unit": "iter/sec",
            "range": "stddev: 0.0000172561353298554",
            "extra": "mean: 1.3335438975984288 msec\nrounds: 625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.663101800381936,
            "unit": "iter/sec",
            "range": "stddev: 0.00010362880638711991",
            "extra": "mean: 63.84431466669109 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.01364846970851,
            "unit": "iter/sec",
            "range": "stddev: 0.0005269507819245911",
            "extra": "mean: 9.522571728268758 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.28944667744129,
            "unit": "iter/sec",
            "range": "stddev: 0.0004990186844512386",
            "extra": "mean: 9.776179581393102 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13045747.453506032,
            "unit": "iter/sec",
            "range": "stddev: 2.909574672940461e-9",
            "extra": "mean: 76.65333117651683 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8015.818249907357,
            "unit": "iter/sec",
            "range": "stddev: 0.000030135208394390115",
            "extra": "mean: 124.7533275859339 usec\nrounds: 3596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5798.2310912951125,
            "unit": "iter/sec",
            "range": "stddev: 0.000044318414150220017",
            "extra": "mean: 172.46639263848945 usec\nrounds: 2962"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 186.44526757029607,
            "unit": "iter/sec",
            "range": "stddev: 0.000033071283901539195",
            "extra": "mean: 5.3635043304221535 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.58742675061906,
            "unit": "iter/sec",
            "range": "stddev: 0.00005117188723555896",
            "extra": "mean: 10.685196021733605 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 133588.04976748573,
            "unit": "iter/sec",
            "range": "stddev: 3.8572992195639616e-7",
            "extra": "mean: 7.485699519833787 usec\nrounds: 36901"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.85963538576723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000944111956641323",
            "extra": "mean: 6.54194940002526 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.854060145057749,
            "unit": "iter/sec",
            "range": "stddev: 0.002558993557335435",
            "extra": "mean: 1.170877725399987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5385.8381077522035,
            "unit": "iter/sec",
            "range": "stddev: 0.000040418067813498643",
            "extra": "mean: 185.67212381683584 usec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.2596746777037,
            "unit": "iter/sec",
            "range": "stddev: 0.00007057883619611154",
            "extra": "mean: 6.279053388899077 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 182.89869887100093,
            "unit": "iter/sec",
            "range": "stddev: 0.003986344628692942",
            "extra": "mean: 5.467507457258093 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.34288316697037,
            "unit": "iter/sec",
            "range": "stddev: 0.0002086552536630317",
            "extra": "mean: 96.68483959999321 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.36007239210284,
            "unit": "iter/sec",
            "range": "stddev: 0.0005209277808152872",
            "extra": "mean: 9.31444975509869 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6298416.056867918,
            "unit": "iter/sec",
            "range": "stddev: 9.442282841427295e-9",
            "extra": "mean: 158.77007663066544 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 322.0136343378248,
            "unit": "iter/sec",
            "range": "stddev: 0.00002541353535640268",
            "extra": "mean: 3.105458568722898 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.1625512253564,
            "unit": "iter/sec",
            "range": "stddev: 0.00004993675740836993",
            "extra": "mean: 3.434507617107708 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11583.217307919693,
            "unit": "iter/sec",
            "range": "stddev: 0.000011643512388173793",
            "extra": "mean: 86.33180000139328 usec\nrounds: 4890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 100.90432899706195,
            "unit": "iter/sec",
            "range": "stddev: 0.01234910483211998",
            "extra": "mean: 9.910377581809371 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.44289200014948,
            "unit": "iter/sec",
            "range": "stddev: 0.0004390602146145886",
            "extra": "mean: 22.50078595237764 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.9338970669013,
            "unit": "iter/sec",
            "range": "stddev: 0.000046408263062553484",
            "extra": "mean: 1.4664177925472661 msec\nrounds: 564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.48648569579969,
            "unit": "iter/sec",
            "range": "stddev: 0.0005649936329123417",
            "extra": "mean: 9.853528705264724 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 48.52308217760233,
            "unit": "iter/sec",
            "range": "stddev: 0.00008221414355063875",
            "extra": "mean: 20.60874856093927 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.71506450345912,
            "unit": "iter/sec",
            "range": "stddev: 0.0005206865385074564",
            "extra": "mean: 8.21590987179389 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.99823794511882,
            "unit": "iter/sec",
            "range": "stddev: 0.000574757782316303",
            "extra": "mean: 8.196839699027885 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.458217910279078,
            "unit": "iter/sec",
            "range": "stddev: 0.00022632833221601973",
            "extra": "mean: 35.139234759981264 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5563478.086833621,
            "unit": "iter/sec",
            "range": "stddev: 7.607650164246857e-9",
            "extra": "mean: 179.74367551970045 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1651446.2823825171,
            "unit": "iter/sec",
            "range": "stddev: 1.1016804540551564e-7",
            "extra": "mean: 605.5298380988299 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.67793361987779,
            "unit": "iter/sec",
            "range": "stddev: 0.000600362472275828",
            "extra": "mean: 8.286519084341384 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6619067097417841,
            "unit": "iter/sec",
            "range": "stddev: 0.054870093634481996",
            "extra": "mean: 1.5107869209999536 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.90538105664352,
            "unit": "iter/sec",
            "range": "stddev: 0.00003618135028514591",
            "extra": "mean: 10.009470855559105 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2470282.4106705976,
            "unit": "iter/sec",
            "range": "stddev: 2.6960325147686166e-8",
            "extra": "mean: 404.8120148854784 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.63931837759662,
            "unit": "iter/sec",
            "range": "stddev: 0.00007357753214956671",
            "extra": "mean: 7.16130679824657 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 309.60074337823266,
            "unit": "iter/sec",
            "range": "stddev: 0.00019209299739826821",
            "extra": "mean: 3.229966404758664 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5570.262983289141,
            "unit": "iter/sec",
            "range": "stddev: 0.000046530100421526336",
            "extra": "mean: 179.52473752137246 usec\nrounds: 2945"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 266.3696788635203,
            "unit": "iter/sec",
            "range": "stddev: 0.00716860212970365",
            "extra": "mean: 3.75418104743209 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5697.080531037095,
            "unit": "iter/sec",
            "range": "stddev: 0.000043404114859454765",
            "extra": "mean: 175.52850000137883 usec\nrounds: 2666"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5831.574348946718,
            "unit": "iter/sec",
            "range": "stddev: 0.00004331035500861535",
            "extra": "mean: 171.4802796230519 usec\nrounds: 2979"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5844.668869761641,
            "unit": "iter/sec",
            "range": "stddev: 0.00004359622484985119",
            "extra": "mean: 171.09609154654854 usec\nrounds: 3146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 303.398923116187,
            "unit": "iter/sec",
            "range": "stddev: 0.00018960816735762257",
            "extra": "mean: 3.295990604479004 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 490717.43786005984,
            "unit": "iter/sec",
            "range": "stddev: 2.4987838487794025e-7",
            "extra": "mean: 2.0378326157734277 usec\nrounds: 2091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9226461423751202,
            "unit": "iter/sec",
            "range": "stddev: 0.0033958523139993157",
            "extra": "mean: 1.0838391384000716 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.57902227968815,
            "unit": "iter/sec",
            "range": "stddev: 0.0005554845289916441",
            "extra": "mean: 9.38270945454695 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.51431609819399,
            "unit": "iter/sec",
            "range": "stddev: 0.0005950747943738165",
            "extra": "mean: 8.656935640340379 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.89866852412476,
            "unit": "iter/sec",
            "range": "stddev: 0.0005948906084022458",
            "extra": "mean: 9.81367091919604 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7150584.74331753,
            "unit": "iter/sec",
            "range": "stddev: 3.6349162540073407e-9",
            "extra": "mean: 139.84870271411083 nsec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11856.834654127393,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015486851542771316",
            "extra": "mean: 84.33954163743842 usec\nrounds: 5308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 692283.6871021003,
            "unit": "iter/sec",
            "range": "stddev: 3.50175359736282e-7",
            "extra": "mean: 1.4444945311162831 usec\nrounds: 1189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18082787309866497,
            "unit": "iter/sec",
            "range": "stddev: 0.11263965320929699",
            "extra": "mean: 5.530120898200084 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.74697648210791,
            "unit": "iter/sec",
            "range": "stddev: 0.00005514526845870438",
            "extra": "mean: 8.421267047171295 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.5103319511669,
            "unit": "iter/sec",
            "range": "stddev: 0.00001773634294038927",
            "extra": "mean: 1.839891426553134 msec\nrounds: 497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 264.89330675555607,
            "unit": "iter/sec",
            "range": "stddev: 0.00416544023741119",
            "extra": "mean: 3.775104823327233 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.8074782196416,
            "unit": "iter/sec",
            "range": "stddev: 0.00023194022406520308",
            "extra": "mean: 3.5111437601677253 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.62150224715291,
            "unit": "iter/sec",
            "range": "stddev: 0.000718613305532614",
            "extra": "mean: 22.92447413512147 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.91457082056555,
            "unit": "iter/sec",
            "range": "stddev: 0.0029149585225812626",
            "extra": "mean: 1.0934090368000398 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.780389646421524,
            "unit": "iter/sec",
            "range": "stddev: 0.0008693374433584418",
            "extra": "mean: 561.6748007998922 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5364.447655368669,
            "unit": "iter/sec",
            "range": "stddev: 0.00004349299784829302",
            "extra": "mean: 186.41248162785465 usec\nrounds: 2531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.68989663063725,
            "unit": "iter/sec",
            "range": "stddev: 0.00008650944400054722",
            "extra": "mean: 13.75707005172052 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 360.58412226648676,
            "unit": "iter/sec",
            "range": "stddev: 0.00002883748135512809",
            "extra": "mean: 2.7732779627522204 msec\nrounds: 349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 314.0761586401304,
            "unit": "iter/sec",
            "range": "stddev: 0.0001850598524761008",
            "extra": "mean: 3.1839411317616237 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.25146887769125,
            "unit": "iter/sec",
            "range": "stddev: 0.0005643262186792513",
            "extra": "mean: 8.24732276859029 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.91929830043716,
            "unit": "iter/sec",
            "range": "stddev: 0.0005648373899185189",
            "extra": "mean: 9.441150159091194 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.92661671510984,
            "unit": "iter/sec",
            "range": "stddev: 0.0005573414896917054",
            "extra": "mean: 10.761179469879487 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.32984557590257,
            "unit": "iter/sec",
            "range": "stddev: 0.0001904140858987596",
            "extra": "mean: 20.271703434816672 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 72.64002929052363,
            "unit": "iter/sec",
            "range": "stddev: 0.00006921025336565639",
            "extra": "mean: 13.766514272736623 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5613.226880774039,
            "unit": "iter/sec",
            "range": "stddev: 0.000020272770499394716",
            "extra": "mean: 178.1506468988662 usec\nrounds: 2563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2472968.481651839,
            "unit": "iter/sec",
            "range": "stddev: 1.3286662864206441e-8",
            "extra": "mean: 404.3723191048144 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.35866541511483,
            "unit": "iter/sec",
            "range": "stddev: 0.0006007537164321794",
            "extra": "mean: 8.240037879284829 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13142.409420608781,
            "unit": "iter/sec",
            "range": "stddev: 0.000003193908623418584",
            "extra": "mean: 76.08954857485166 usec\nrounds: 7133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.17858835453353,
            "unit": "iter/sec",
            "range": "stddev: 0.00008486439531312972",
            "extra": "mean: 6.090928238708946 msec\nrounds: 155"
          }
        ]
      }
    ]
  }
}