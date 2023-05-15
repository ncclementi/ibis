window.BENCHMARK_DATA = {
  "lastUpdate": 1684165940265,
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
          "id": "04ad0cd31709d01995eff0cb2a2ebc9d7cf68de7",
          "message": "chore(deps): drop invalid `|` constraint on shapely in `pyproject.toml`",
          "timestamp": "2023-05-15T10:44:25-05:00",
          "tree_id": "cecb7e965d192ec32af803ffafbdc57c4b20b866",
          "url": "https://github.com/ibis-project/ibis/commit/04ad0cd31709d01995eff0cb2a2ebc9d7cf68de7"
        },
        "date": 1684165858046,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 68.84632861764423,
            "unit": "iter/sec",
            "range": "stddev: 0.021319475047929217",
            "extra": "mean: 14.52510279166456 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1641.392551614978,
            "unit": "iter/sec",
            "range": "stddev: 0.004071839455680353",
            "extra": "mean: 609.2387826520187 usec\nrounds: 1003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 42.20030131177166,
            "unit": "iter/sec",
            "range": "stddev: 0.0006510657613859421",
            "extra": "mean: 23.696513269232337 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 81.19874041305283,
            "unit": "iter/sec",
            "range": "stddev: 0.013500574499989402",
            "extra": "mean: 12.31546197530976 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 419.9577673666378,
            "unit": "iter/sec",
            "range": "stddev: 0.00004237267615520674",
            "extra": "mean: 2.38119181905014 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.50921760481251,
            "unit": "iter/sec",
            "range": "stddev: 0.000919330253074548",
            "extra": "mean: 20.614638812496366 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 281.5115378520437,
            "unit": "iter/sec",
            "range": "stddev: 0.0002759044967078878",
            "extra": "mean: 3.552252272251726 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5968999.78305661,
            "unit": "iter/sec",
            "range": "stddev: 1.1029982219427011e-8",
            "extra": "mean: 167.53225604703013 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8384.433437826294,
            "unit": "iter/sec",
            "range": "stddev: 0.002270002036429",
            "extra": "mean: 119.26864318446484 usec\nrounds: 3719"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2047.8268144098415,
            "unit": "iter/sec",
            "range": "stddev: 0.00008898883571696705",
            "extra": "mean: 488.32254415429543 usec\nrounds: 1189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4509.143541201568,
            "unit": "iter/sec",
            "range": "stddev: 0.00002603875576757469",
            "extra": "mean: 221.77160493177078 usec\nrounds: 1906"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.75136794906504,
            "unit": "iter/sec",
            "range": "stddev: 0.0002782063909330591",
            "extra": "mean: 10.443715023809897 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1791.080494960359,
            "unit": "iter/sec",
            "range": "stddev: 0.000008497879038397399",
            "extra": "mean: 558.3221987028185 usec\nrounds: 1233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2103.7547683601692,
            "unit": "iter/sec",
            "range": "stddev: 0.00009526520243889534",
            "extra": "mean: 475.34057440519933 usec\nrounds: 336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.49030216693466,
            "unit": "iter/sec",
            "range": "stddev: 0.0007866439918757574",
            "extra": "mean: 401.5576957999883 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 122.67450540387206,
            "unit": "iter/sec",
            "range": "stddev: 0.00018600216617588116",
            "extra": "mean: 8.151653000008233 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 100.42572162912325,
            "unit": "iter/sec",
            "range": "stddev: 0.000865796962809776",
            "extra": "mean: 9.957608307690787 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.88204195746714,
            "unit": "iter/sec",
            "range": "stddev: 0.0009258876902307715",
            "extra": "mean: 9.912566999997976 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 673.3773704090971,
            "unit": "iter/sec",
            "range": "stddev: 0.000027233653470729956",
            "extra": "mean: 1.4850513901179507 msec\nrounds: 587"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 231.17662648650284,
            "unit": "iter/sec",
            "range": "stddev: 0.00038495386185938697",
            "extra": "mean: 4.3256968284308135 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8361.46070211621,
            "unit": "iter/sec",
            "range": "stddev: 0.000012968506691494575",
            "extra": "mean: 119.59632839593556 usec\nrounds: 405"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 281.4367360137884,
            "unit": "iter/sec",
            "range": "stddev: 0.0003200976969039577",
            "extra": "mean: 3.55319640983545 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 280.9179670716434,
            "unit": "iter/sec",
            "range": "stddev: 0.0003343642421830607",
            "extra": "mean: 3.559758068963126 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.019656658924934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000598258440071123",
            "extra": "mean: 52.577184642854846 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 146.234773377373,
            "unit": "iter/sec",
            "range": "stddev: 0.00018547709028764308",
            "extra": "mean: 6.838318799998433 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3397229335827938,
            "unit": "iter/sec",
            "range": "stddev: 0.00037376365283726986",
            "extra": "mean: 746.4229916000022 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.31389882997794,
            "unit": "iter/sec",
            "range": "stddev: 0.00005950495045126482",
            "extra": "mean: 5.254476978023434 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 93.09507343682631,
            "unit": "iter/sec",
            "range": "stddev: 0.0013713254757821882",
            "extra": "mean: 10.741706978496486 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1894.6588351344162,
            "unit": "iter/sec",
            "range": "stddev: 0.00015095543061517775",
            "extra": "mean: 527.7995074659734 usec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2038.1739850414326,
            "unit": "iter/sec",
            "range": "stddev: 0.0001316499278480633",
            "extra": "mean: 490.6352486780816 usec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.815577153102446,
            "unit": "iter/sec",
            "range": "stddev: 0.00016604582123840353",
            "extra": "mean: 33.53951509524764 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.305572029537405,
            "unit": "iter/sec",
            "range": "stddev: 0.007740757580027483",
            "extra": "mean: 38.01475971999935 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 271.19462313868314,
            "unit": "iter/sec",
            "range": "stddev: 0.0003101370048404733",
            "extra": "mean: 3.6873887410688866 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.613672794778,
            "unit": "iter/sec",
            "range": "stddev: 0.0002834153689255393",
            "extra": "mean: 12.72043353845727 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6132734.425695446,
            "unit": "iter/sec",
            "range": "stddev: 9.194112238690133e-9",
            "extra": "mean: 163.0594006824601 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 75.5063049684822,
            "unit": "iter/sec",
            "range": "stddev: 0.025197926376054825",
            "extra": "mean: 13.24392711863492 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.0862678174568,
            "unit": "iter/sec",
            "range": "stddev: 0.00033910360951147064",
            "extra": "mean: 3.7866414193532614 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2040.3074656985846,
            "unit": "iter/sec",
            "range": "stddev: 0.00010404695172250697",
            "extra": "mean: 490.12220795732287 usec\nrounds: 1106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7775891423931637,
            "unit": "iter/sec",
            "range": "stddev: 0.0031199748665954718",
            "extra": "mean: 1.2860261872000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7257155.330078448,
            "unit": "iter/sec",
            "range": "stddev: 4.696398461205264e-9",
            "extra": "mean: 137.7950387606123 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2008.815663696426,
            "unit": "iter/sec",
            "range": "stddev: 0.00011170106075887378",
            "extra": "mean: 497.805755934767 usec\nrounds: 1053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10468.492822057213,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053057245038021516",
            "extra": "mean: 95.52473474433594 usec\nrounds: 4392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.16139190409402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000568888971965037",
            "extra": "mean: 9.245443151163341 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 91.39100835178662,
            "unit": "iter/sec",
            "range": "stddev: 0.0009891106346895488",
            "extra": "mean: 10.941995476740473 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.79738808614309,
            "unit": "iter/sec",
            "range": "stddev: 0.0009909766741476303",
            "extra": "mean: 10.020302326317601 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1948075.9348042812,
            "unit": "iter/sec",
            "range": "stddev: 1.1020203138472188e-7",
            "extra": "mean: 513.3270126354022 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 133.27625021657292,
            "unit": "iter/sec",
            "range": "stddev: 0.004103358418546652",
            "extra": "mean: 7.503212300578741 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 258.99720131229424,
            "unit": "iter/sec",
            "range": "stddev: 0.000491740300545491",
            "extra": "mean: 3.861045582474143 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.14294883317763,
            "unit": "iter/sec",
            "range": "stddev: 0.00013593689255904495",
            "extra": "mean: 5.098322452827577 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 73.10852069516434,
            "unit": "iter/sec",
            "range": "stddev: 0.029922277011859344",
            "extra": "mean: 13.678296188889288 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 93.00763278866926,
            "unit": "iter/sec",
            "range": "stddev: 0.0012461138806106535",
            "extra": "mean: 10.751805739128821 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 48.47241263208588,
            "unit": "iter/sec",
            "range": "stddev: 0.00014819282164665076",
            "extra": "mean: 20.630291452380874 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 262.21301468972536,
            "unit": "iter/sec",
            "range": "stddev: 0.0003862962499652638",
            "extra": "mean: 3.813693234042148 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5579728.147814349,
            "unit": "iter/sec",
            "range": "stddev: 1.300318448941434e-8",
            "extra": "mean: 179.22020096841035 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148252.48996354555,
            "unit": "iter/sec",
            "range": "stddev: 3.6482678570660055e-7",
            "extra": "mean: 6.745249272008142 usec\nrounds: 30212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 166.84450524775832,
            "unit": "iter/sec",
            "range": "stddev: 0.0005125262253026278",
            "extra": "mean: 5.993604635136378 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.856422176755553,
            "unit": "iter/sec",
            "range": "stddev: 0.027621622397376918",
            "extra": "mean: 1.167648418199974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1986195.6164502255,
            "unit": "iter/sec",
            "range": "stddev: 9.625959680202574e-8",
            "extra": "mean: 503.47508156685143 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.53767916336436,
            "unit": "iter/sec",
            "range": "stddev: 0.00016103936312159844",
            "extra": "mean: 22.45289873170078 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13897.847789097537,
            "unit": "iter/sec",
            "range": "stddev: 0.000002036913311306936",
            "extra": "mean: 71.95358699959797 usec\nrounds: 5000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.429854030193539,
            "unit": "iter/sec",
            "range": "stddev: 0.0009589236578380466",
            "extra": "mean: 118.62601611110473 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.38093545118107,
            "unit": "iter/sec",
            "range": "stddev: 0.00006785624732664908",
            "extra": "mean: 6.120665163523956 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 944766.3361969645,
            "unit": "iter/sec",
            "range": "stddev: 3.155421973536126e-7",
            "extra": "mean: 1.0584627771829502 usec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4484591.846712499,
            "unit": "iter/sec",
            "range": "stddev: 1.5395635166044286e-8",
            "extra": "mean: 222.98573296786662 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 70.824441054258,
            "unit": "iter/sec",
            "range": "stddev: 0.030318429614761257",
            "extra": "mean: 14.119419583331528 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 94.71279841397127,
            "unit": "iter/sec",
            "range": "stddev: 0.0010157662569674037",
            "extra": "mean: 10.558235177776018 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.51608102415288,
            "unit": "iter/sec",
            "range": "stddev: 0.00008320346277399181",
            "extra": "mean: 9.131079113207658 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2042.3794344359633,
            "unit": "iter/sec",
            "range": "stddev: 0.00010299993709000493",
            "extra": "mean: 489.62498502447295 usec\nrounds: 1202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 304.40391296432455,
            "unit": "iter/sec",
            "range": "stddev: 0.00005417591361912995",
            "extra": "mean: 3.2851088879307464 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 95.49896849408388,
            "unit": "iter/sec",
            "range": "stddev: 0.001066462620121965",
            "extra": "mean: 10.471317290321826 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 245.8476795336384,
            "unit": "iter/sec",
            "range": "stddev: 0.000584867264401449",
            "extra": "mean: 4.0675592378864565 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.02216044097447,
            "unit": "iter/sec",
            "range": "stddev: 0.0009593372712097667",
            "extra": "mean: 43.43641000000226 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1169.5158672150499,
            "unit": "iter/sec",
            "range": "stddev: 0.000012151330946507287",
            "extra": "mean: 855.054666664151 usec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.9633597957167,
            "unit": "iter/sec",
            "range": "stddev: 0.0008728384676591789",
            "extra": "mean: 10.207898157896006 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 526.7560691464902,
            "unit": "iter/sec",
            "range": "stddev: 0.000056341809307485084",
            "extra": "mean: 1.8984119188608748 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1701002.2779833863,
            "unit": "iter/sec",
            "range": "stddev: 9.111818112043274e-8",
            "extra": "mean: 587.8886894763859 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16407421486228105,
            "unit": "iter/sec",
            "range": "stddev: 0.12020887187086769",
            "extra": "mean: 6.094802896599992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.8673218075439,
            "unit": "iter/sec",
            "range": "stddev: 0.000020497854090138542",
            "extra": "mean: 1.3247361107187436 msec\nrounds: 569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6060379461694823,
            "unit": "iter/sec",
            "range": "stddev: 0.0015097803858968302",
            "extra": "mean: 622.6502944000003 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 89.40286487536791,
            "unit": "iter/sec",
            "range": "stddev: 0.0011925875142183061",
            "extra": "mean: 11.18532388636595 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 93.2506550499117,
            "unit": "iter/sec",
            "range": "stddev: 0.0011867053652959735",
            "extra": "mean: 10.723785258824805 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 92.11664076197385,
            "unit": "iter/sec",
            "range": "stddev: 0.0013436533976453817",
            "extra": "mean: 10.855801858688753 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8659251678217853,
            "unit": "iter/sec",
            "range": "stddev: 0.011175867033946798",
            "extra": "mean: 1.154834201799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.73825378727673,
            "unit": "iter/sec",
            "range": "stddev: 0.0004852748218379654",
            "extra": "mean: 24.54695297500251 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2020.9183267273834,
            "unit": "iter/sec",
            "range": "stddev: 0.00010955921477997607",
            "extra": "mean: 494.8245492035154 usec\nrounds: 1067"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 216.82997120287834,
            "unit": "iter/sec",
            "range": "stddev: 0.0036551307693085326",
            "extra": "mean: 4.6119085588234645 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 79.96080461007053,
            "unit": "iter/sec",
            "range": "stddev: 0.0007825415870302847",
            "extra": "mean: 12.506127281691418 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.61136239325444,
            "unit": "iter/sec",
            "range": "stddev: 0.06684822949172327",
            "extra": "mean: 40.63163932257903 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.82186735311407,
            "unit": "iter/sec",
            "range": "stddev: 0.00009184220711226758",
            "extra": "mean: 9.631882237282891 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10811816.681847282,
            "unit": "iter/sec",
            "range": "stddev: 2.431608154835361e-7",
            "extra": "mean: 92.49139431679683 nsec\nrounds: 108684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1940003.4514467842,
            "unit": "iter/sec",
            "range": "stddev: 1.474222959748411e-7",
            "extra": "mean: 515.4630004674663 nsec\nrounds: 144907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 90.23857213883049,
            "unit": "iter/sec",
            "range": "stddev: 0.0012594510614619466",
            "extra": "mean: 11.081735629210947 msec\nrounds: 89"
          }
        ]
      }
    ]
  }
}