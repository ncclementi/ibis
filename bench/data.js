window.BENCHMARK_DATA = {
  "lastUpdate": 1676294934737,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "chfanboy@exosfinancial.com",
            "name": "chfanboy"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "7ed5143d7f08e336a2f6e11336ae85d6bfbb47e8",
          "message": "feat(clickhouse): support asof_join",
          "timestamp": "2023-02-13T08:22:51-05:00",
          "tree_id": "f58270c48f5b198f2cc521ad6f7aacce8605594c",
          "url": "https://github.com/ibis-project/ibis/commit/7ed5143d7f08e336a2f6e11336ae85d6bfbb47e8"
        },
        "date": 1676294849918,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 243.76370099361225,
            "unit": "iter/sec",
            "range": "stddev: 0.003216518109155563",
            "extra": "mean: 4.102333513660447 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2001335.9149680554,
            "unit": "iter/sec",
            "range": "stddev: 2.0690644692739476e-8",
            "extra": "mean: 499.6662441927051 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.97239940584276,
            "unit": "iter/sec",
            "range": "stddev: 0.00014252782335154638",
            "extra": "mean: 6.897864725274715 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.57361769074473,
            "unit": "iter/sec",
            "range": "stddev: 0.0005493656782088429",
            "extra": "mean: 11.96549853448242 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 54974.59403488012,
            "unit": "iter/sec",
            "range": "stddev: 5.698932837323771e-7",
            "extra": "mean: 18.19022072933404 usec\nrounds: 4689"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10538.79930866074,
            "unit": "iter/sec",
            "range": "stddev: 0.00000463057906948059",
            "extra": "mean: 94.88746969289036 usec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6079.237825291066,
            "unit": "iter/sec",
            "range": "stddev: 0.00004532970535829492",
            "extra": "mean: 164.4943048353469 usec\nrounds: 2854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 245.77457469494533,
            "unit": "iter/sec",
            "range": "stddev: 0.00018316234493158346",
            "extra": "mean: 4.068769120000297 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.131479380153266,
            "unit": "iter/sec",
            "range": "stddev: 0.0002590648466121968",
            "extra": "mean: 23.184922343752135 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 77.70416154583067,
            "unit": "iter/sec",
            "range": "stddev: 0.011235022265993707",
            "extra": "mean: 12.86932360000037 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4955.719286723948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000915464085118118",
            "extra": "mean: 201.78705494456383 usec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 258.5013413457653,
            "unit": "iter/sec",
            "range": "stddev: 0.0001909159141378107",
            "extra": "mean: 3.8684518803421737 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 159.14069638759935,
            "unit": "iter/sec",
            "range": "stddev: 0.0006031071803289787",
            "extra": "mean: 6.283747794872177 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 160.96397034031813,
            "unit": "iter/sec",
            "range": "stddev: 0.000608610346395347",
            "extra": "mean: 6.212570414893157 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1571319.297373705,
            "unit": "iter/sec",
            "range": "stddev: 9.989209217844772e-8",
            "extra": "mean: 636.4078909177751 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 982.8318363882162,
            "unit": "iter/sec",
            "range": "stddev: 0.00002341869133806076",
            "extra": "mean: 1.0174680580910715 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 144.57740240979984,
            "unit": "iter/sec",
            "range": "stddev: 0.00010211343320415042",
            "extra": "mean: 6.916710241933474 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12003613.047440877,
            "unit": "iter/sec",
            "range": "stddev: 3.064414396480224e-9",
            "extra": "mean: 83.30825027818086 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10167.284382869546,
            "unit": "iter/sec",
            "range": "stddev: 0.000002239518035575146",
            "extra": "mean: 98.35467980858884 usec\nrounds: 837"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 567668.6256479505,
            "unit": "iter/sec",
            "range": "stddev: 3.8435371018000655e-7",
            "extra": "mean: 1.7615911023065196 usec\nrounds: 21646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 197.94342387521596,
            "unit": "iter/sec",
            "range": "stddev: 0.007122345014479702",
            "extra": "mean: 5.05194858420961 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8622396663745593,
            "unit": "iter/sec",
            "range": "stddev: 0.00370574489323074",
            "extra": "mean: 1.159770350399998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.65498254357444,
            "unit": "iter/sec",
            "range": "stddev: 0.00032476925123081364",
            "extra": "mean: 38.9787830999893 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5533194.8251667535,
            "unit": "iter/sec",
            "range": "stddev: 4.839683043373687e-9",
            "extra": "mean: 180.72741546203926 nsec\nrounds: 54946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.20845111682317,
            "unit": "iter/sec",
            "range": "stddev: 0.00007897554464243134",
            "extra": "mean: 14.879081177778946 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.29939640218504,
            "unit": "iter/sec",
            "range": "stddev: 0.0006244924296375067",
            "extra": "mean: 6.930035917910865 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 515.0494816477669,
            "unit": "iter/sec",
            "range": "stddev: 0.0001101507684887762",
            "extra": "mean: 1.94156102594407 msec\nrounds: 424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19562.00605814021,
            "unit": "iter/sec",
            "range": "stddev: 0.000012372110405841322",
            "extra": "mean: 51.11950160059768 usec\nrounds: 9059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.8159075605526,
            "unit": "iter/sec",
            "range": "stddev: 0.00003650034944451043",
            "extra": "mean: 5.820182858490986 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15362464362587652,
            "unit": "iter/sec",
            "range": "stddev: 0.06784604406341836",
            "extra": "mean: 6.509372301199988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.434166742973304,
            "unit": "iter/sec",
            "range": "stddev: 0.0005351619019548532",
            "extra": "mean: 26.713563757572032 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 626.5116985518796,
            "unit": "iter/sec",
            "range": "stddev: 0.00006596205216363398",
            "extra": "mean: 1.596139389434231 msec\nrounds: 511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.07396253900042,
            "unit": "iter/sec",
            "range": "stddev: 0.0006812621707343631",
            "extra": "mean: 28.511178310350655 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.1554512104435,
            "unit": "iter/sec",
            "range": "stddev: 0.00013580704290558495",
            "extra": "mean: 17.496143916667723 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.18206237534443,
            "unit": "iter/sec",
            "range": "stddev: 0.0000662117053948739",
            "extra": "mean: 6.935675516949764 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.81060946424735,
            "unit": "iter/sec",
            "range": "stddev: 0.00007613100594507636",
            "extra": "mean: 13.734262181818933 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 394131.87942706695,
            "unit": "iter/sec",
            "range": "stddev: 3.4919016203119095e-7",
            "extra": "mean: 2.537221808734828 usec\nrounds: 1880"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 413.46382655980455,
            "unit": "iter/sec",
            "range": "stddev: 0.000027768872958137308",
            "extra": "mean: 2.418591266666365 msec\nrounds: 360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 113512.06870955683,
            "unit": "iter/sec",
            "range": "stddev: 4.1898358455325825e-7",
            "extra": "mean: 8.809635938877113 usec\nrounds: 34247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.618374889854344,
            "unit": "iter/sec",
            "range": "stddev: 0.0007595380188821014",
            "extra": "mean: 22.926117777776273 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 149.56897462180842,
            "unit": "iter/sec",
            "range": "stddev: 0.0006193195552035616",
            "extra": "mean: 6.6858785555530025 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 247.80460133400007,
            "unit": "iter/sec",
            "range": "stddev: 0.00025144284723673844",
            "extra": "mean: 4.035437577093912 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5222.573236567846,
            "unit": "iter/sec",
            "range": "stddev: 0.00004617685634480569",
            "extra": "mean: 191.47649151152487 usec\nrounds: 2297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1454.8549880858234,
            "unit": "iter/sec",
            "range": "stddev: 0.00001220446237097162",
            "extra": "mean: 687.3537281648369 usec\nrounds: 1122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.98436661647465,
            "unit": "iter/sec",
            "range": "stddev: 0.00006864062307586484",
            "extra": "mean: 11.237929065787823 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8631561569799766,
            "unit": "iter/sec",
            "range": "stddev: 0.004469960513747406",
            "extra": "mean: 1.1585389178000127 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6077.193718364726,
            "unit": "iter/sec",
            "range": "stddev: 0.000044623604381964346",
            "extra": "mean: 164.54963365378515 usec\nrounds: 2080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.60851657704504,
            "unit": "iter/sec",
            "range": "stddev: 0.00016079879463832858",
            "extra": "mean: 9.939516395057963 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1523016.3386994482,
            "unit": "iter/sec",
            "range": "stddev: 1.447423946367523e-7",
            "extra": "mean: 656.5917742247806 nsec\nrounds: 114956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 142.0420145313775,
            "unit": "iter/sec",
            "range": "stddev: 0.010125482640438176",
            "extra": "mean: 7.04017049673072 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.81130242722972,
            "unit": "iter/sec",
            "range": "stddev: 0.0006049577179832482",
            "extra": "mean: 10.547265720429559 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 263.7431123468244,
            "unit": "iter/sec",
            "range": "stddev: 0.000011105830774685281",
            "extra": "mean: 3.791568208556634 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5242.772452146013,
            "unit": "iter/sec",
            "range": "stddev: 0.00004543888647538249",
            "extra": "mean: 190.73877592964618 usec\nrounds: 2285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 254.70464398968542,
            "unit": "iter/sec",
            "range": "stddev: 0.00019033746741674054",
            "extra": "mean: 3.926116086208842 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.70503106395562,
            "unit": "iter/sec",
            "range": "stddev: 0.00013721334245243302",
            "extra": "mean: 8.216587196584364 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 162.5867788302584,
            "unit": "iter/sec",
            "range": "stddev: 0.0006159457765669623",
            "extra": "mean: 6.150561608973176 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 80.34900220138643,
            "unit": "iter/sec",
            "range": "stddev: 0.01464755484607781",
            "extra": "mean: 12.445705268294482 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 334.5740854903472,
            "unit": "iter/sec",
            "range": "stddev: 0.00003536078505935318",
            "extra": "mean: 2.988874642022599 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.11504149501913,
            "unit": "iter/sec",
            "range": "stddev: 0.0005930742308021303",
            "extra": "mean: 11.221450197673898 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5776.248071854386,
            "unit": "iter/sec",
            "range": "stddev: 0.00004817274591158929",
            "extra": "mean: 173.12275850350792 usec\nrounds: 3528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.782674919694179,
            "unit": "iter/sec",
            "range": "stddev: 0.0001362814786495299",
            "extra": "mean: 72.55485642856537 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.947850580133551,
            "unit": "iter/sec",
            "range": "stddev: 0.00009326788841335138",
            "extra": "mean: 202.10796259999597 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.18738609961195,
            "unit": "iter/sec",
            "range": "stddev: 0.00019818232617089778",
            "extra": "mean: 108.84488679998299 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.22396422739052,
            "unit": "iter/sec",
            "range": "stddev: 0.00033303655930889096",
            "extra": "mean: 9.782441989586369 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 255.7811730059965,
            "unit": "iter/sec",
            "range": "stddev: 0.00011144735542361176",
            "extra": "mean: 3.909591891568017 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.63572932523157,
            "unit": "iter/sec",
            "range": "stddev: 0.00016990680242652643",
            "extra": "mean: 10.45634311627684 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.239612480676682,
            "unit": "iter/sec",
            "range": "stddev: 0.0018811660324081732",
            "extra": "mean: 446.5058167999928 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.47872297054812,
            "unit": "iter/sec",
            "range": "stddev: 0.00014754730997873887",
            "extra": "mean: 14.81948614286109 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 84.88666393967956,
            "unit": "iter/sec",
            "range": "stddev: 0.012319798268445608",
            "extra": "mean: 11.780413478265558 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 161.5238800916697,
            "unit": "iter/sec",
            "range": "stddev: 0.000643245833744123",
            "extra": "mean: 6.191035031058378 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5889249478879172,
            "unit": "iter/sec",
            "range": "stddev: 0.0014550532235798898",
            "extra": "mean: 1.6980092345999878 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7482142033789331,
            "unit": "iter/sec",
            "range": "stddev: 0.0020681278765937224",
            "extra": "mean: 1.3365156601999844 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4915086.002317845,
            "unit": "iter/sec",
            "range": "stddev: 5.0791333675941166e-9",
            "extra": "mean: 203.4552395478972 nsec\nrounds: 50762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 279.3395116706328,
            "unit": "iter/sec",
            "range": "stddev: 0.00009323276134076454",
            "extra": "mean: 3.579873087123789 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 79.61238322856214,
            "unit": "iter/sec",
            "range": "stddev: 0.013978684412885436",
            "extra": "mean: 12.560859999996017 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4440.9828883704895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000478723122484118",
            "extra": "mean: 225.17537786931794 usec\nrounds: 2178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2025724.466515823,
            "unit": "iter/sec",
            "range": "stddev: 1.9400597044096125e-8",
            "extra": "mean: 493.65055145928426 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9858.43126347483,
            "unit": "iter/sec",
            "range": "stddev: 0.00001238752556710801",
            "extra": "mean: 101.43601687470986 usec\nrounds: 4089"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5856656505126745,
            "unit": "iter/sec",
            "range": "stddev: 0.002416514417949481",
            "extra": "mean: 630.6499732000134 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4361644.0476265,
            "unit": "iter/sec",
            "range": "stddev: 1.2299525246346005e-8",
            "extra": "mean: 229.27134563959115 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 254.12579472571747,
            "unit": "iter/sec",
            "range": "stddev: 0.00021738965490978812",
            "extra": "mean: 3.9350590170483004 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6074.237554091727,
            "unit": "iter/sec",
            "range": "stddev: 0.00004744002500695422",
            "extra": "mean: 164.62971543257805 usec\nrounds: 3609"
          }
        ]
      }
    ]
  }
}