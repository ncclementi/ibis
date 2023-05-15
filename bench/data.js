window.BENCHMARK_DATA = {
  "lastUpdate": 1684166339379,
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
      },
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "9079bc4fec31721d5cca7f1091aee26624d1e692",
          "message": "fix(pandas): fix first and last over windows\n\nfixes #5417",
          "timestamp": "2023-05-15T11:53:23-04:00",
          "tree_id": "11b4ddd9c28a9d47ee383d51ccf4cdffc06b7c5e",
          "url": "https://github.com/ibis-project/ibis/commit/9079bc4fec31721d5cca7f1091aee26624d1e692"
        },
        "date": 1684166247375,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1610952.4476208754,
            "unit": "iter/sec",
            "range": "stddev: 1.0109242735573887e-7",
            "extra": "mean: 620.7507871984945 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1417.2639110564862,
            "unit": "iter/sec",
            "range": "stddev: 0.003966868961333095",
            "extra": "mean: 705.5848894469905 usec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.604584230687145,
            "unit": "iter/sec",
            "range": "stddev: 0.0003823230166238699",
            "extra": "mean: 116.2171202222216 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.52215677225585,
            "unit": "iter/sec",
            "range": "stddev: 0.0007931410368284619",
            "extra": "mean: 9.948055554215887 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 88.69260691512363,
            "unit": "iter/sec",
            "range": "stddev: 0.007391091589377874",
            "extra": "mean: 11.274896913978097 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.15577310058646,
            "unit": "iter/sec",
            "range": "stddev: 0.00015023730845439436",
            "extra": "mean: 6.65975059999937 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2393.2636299261953,
            "unit": "iter/sec",
            "range": "stddev: 0.0000800154406593935",
            "extra": "mean: 417.83946720104484 usec\nrounds: 1372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.45310935496354,
            "unit": "iter/sec",
            "range": "stddev: 0.00007914152858437632",
            "extra": "mean: 9.482887760416059 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9783.070265479844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016996681116350831",
            "extra": "mean: 102.21739932999975 usec\nrounds: 5374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.74365182303708,
            "unit": "iter/sec",
            "range": "stddev: 0.010003607411549667",
            "extra": "mean: 10.899936727272255 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141632.96753913007,
            "unit": "iter/sec",
            "range": "stddev: 3.425293972938672e-7",
            "extra": "mean: 7.06050305500887 usec\nrounds: 35843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 113.12884205492205,
            "unit": "iter/sec",
            "range": "stddev: 0.00016011299145098578",
            "extra": "mean: 8.839478791045327 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1777.496378132458,
            "unit": "iter/sec",
            "range": "stddev: 0.000006161141428328878",
            "extra": "mean: 562.5890507021222 usec\nrounds: 1282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 93.05754382179946,
            "unit": "iter/sec",
            "range": "stddev: 0.009204792325313065",
            "extra": "mean: 10.746039052083193 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.62868490880059,
            "unit": "iter/sec",
            "range": "stddev: 0.0005562757175284051",
            "extra": "mean: 15.967124352941346 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.2017557782788,
            "unit": "iter/sec",
            "range": "stddev: 0.0000803158671142986",
            "extra": "mean: 5.0453639831458625 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.3230737459561,
            "unit": "iter/sec",
            "range": "stddev: 0.00007411310094666486",
            "extra": "mean: 7.979376583334622 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17586276709412924,
            "unit": "iter/sec",
            "range": "stddev: 0.015686600608358407",
            "extra": "mean: 5.686251936800002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 177.94570239951926,
            "unit": "iter/sec",
            "range": "stddev: 0.0035702881825795414",
            "extra": "mean: 5.619691774038042 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.57218214747802,
            "unit": "iter/sec",
            "range": "stddev: 0.01912990943830906",
            "extra": "mean: 30.701044083330704 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.04520965464143,
            "unit": "iter/sec",
            "range": "stddev: 0.01746986596842082",
            "extra": "mean: 25.611336418605365 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.05142606416507,
            "unit": "iter/sec",
            "range": "stddev: 0.000800586343899679",
            "extra": "mean: 10.095765803030481 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.45896379290183,
            "unit": "iter/sec",
            "range": "stddev: 0.02700876015453707",
            "extra": "mean: 39.2788963500081 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.67721383859833,
            "unit": "iter/sec",
            "range": "stddev: 0.0002477913786229512",
            "extra": "mean: 3.6274307407411386 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.33349486287544,
            "unit": "iter/sec",
            "range": "stddev: 0.0002955840033985654",
            "extra": "mean: 18.072236399998726 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1069701.5015474018,
            "unit": "iter/sec",
            "range": "stddev: 1.1359187180392746e-7",
            "extra": "mean: 934.8402321146848 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.01353006784294,
            "unit": "iter/sec",
            "range": "stddev: 0.000663074262828466",
            "extra": "mean: 24.3821977368405 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.546181454494295,
            "unit": "iter/sec",
            "range": "stddev: 0.00041702861276475084",
            "extra": "mean: 21.032183224999557 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11629.528691342519,
            "unit": "iter/sec",
            "range": "stddev: 0.000018234864367235395",
            "extra": "mean: 85.98800747139818 usec\nrounds: 4417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7296671.736468104,
            "unit": "iter/sec",
            "range": "stddev: 5.447254882333496e-9",
            "extra": "mean: 137.04878554450025 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2283.9631106035017,
            "unit": "iter/sec",
            "range": "stddev: 0.00008891784467985253",
            "extra": "mean: 437.8354428569407 usec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.56997499889542,
            "unit": "iter/sec",
            "range": "stddev: 0.00014347090006890133",
            "extra": "mean: 10.249054588886807 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5949237445856592,
            "unit": "iter/sec",
            "range": "stddev: 0.0029517842527888036",
            "extra": "mean: 626.989223400011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 431.68659911845793,
            "unit": "iter/sec",
            "range": "stddev: 0.00003742601871529351",
            "extra": "mean: 2.316495351122986 msec\nrounds: 356"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 269.1789816704663,
            "unit": "iter/sec",
            "range": "stddev: 0.000306243146213411",
            "extra": "mean: 3.715000308695044 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.17837270375408,
            "unit": "iter/sec",
            "range": "stddev: 0.0007948528181151652",
            "extra": "mean: 9.982194489794562 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.10098182780801,
            "unit": "iter/sec",
            "range": "stddev: 0.0007108224616062595",
            "extra": "mean: 10.090717382977504 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4620874.672382543,
            "unit": "iter/sec",
            "range": "stddev: 1.2258007919659048e-8",
            "extra": "mean: 216.40924519700238 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1881293.3089152805,
            "unit": "iter/sec",
            "range": "stddev: 1.0320474823058997e-7",
            "extra": "mean: 531.5492248131058 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 194.62965007046586,
            "unit": "iter/sec",
            "range": "stddev: 0.00005259564054612339",
            "extra": "mean: 5.137963304347252 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.75702929080813,
            "unit": "iter/sec",
            "range": "stddev: 0.015009399775691424",
            "extra": "mean: 11.395098581632848 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.00858361524234,
            "unit": "iter/sec",
            "range": "stddev: 0.00026645104919918733",
            "extra": "mean: 3.6230757279418753 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.77239897551044,
            "unit": "iter/sec",
            "range": "stddev: 0.00026037882718913736",
            "extra": "mean: 3.5743340074355725 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.83667289768175,
            "unit": "iter/sec",
            "range": "stddev: 0.0007608750442371658",
            "extra": "mean: 9.724157460782095 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 96.07373886316196,
            "unit": "iter/sec",
            "range": "stddev: 0.0007158316317496356",
            "extra": "mean: 10.40867162903176 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.8343851272065,
            "unit": "iter/sec",
            "range": "stddev: 0.0003064778503938732",
            "extra": "mean: 3.612268033613296 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.906281359675,
            "unit": "iter/sec",
            "range": "stddev: 0.00005163983294597111",
            "extra": "mean: 1.3370659197861328 msec\nrounds: 561"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 269.88995272802657,
            "unit": "iter/sec",
            "range": "stddev: 0.0002447303066821042",
            "extra": "mean: 3.7052138840000453 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8180.2890447252375,
            "unit": "iter/sec",
            "range": "stddev: 0.000011455191398778526",
            "extra": "mean: 122.24506915740511 usec\nrounds: 3774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.44086561397197,
            "unit": "iter/sec",
            "range": "stddev: 0.0000724227714034474",
            "extra": "mean: 51.438038812495535 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13774.309378758797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015430380466779174",
            "extra": "mean: 72.59892111484648 usec\nrounds: 6744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.29417019728224,
            "unit": "iter/sec",
            "range": "stddev: 0.0006837060628254288",
            "extra": "mean: 10.071084717392308 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.0263476390598,
            "unit": "iter/sec",
            "range": "stddev: 0.000020930422256393328",
            "extra": "mean: 1.8483388181810687 msec\nrounds: 462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2439.7769044457928,
            "unit": "iter/sec",
            "range": "stddev: 0.00007675998710678162",
            "extra": "mean: 409.87354137904464 usec\nrounds: 1450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.96675290996863,
            "unit": "iter/sec",
            "range": "stddev: 0.00004215970304171736",
            "extra": "mean: 9.34869922471776 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 410.67294549939027,
            "unit": "iter/sec",
            "range": "stddev: 0.00003130592907635646",
            "extra": "mean: 2.4350277050365974 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2431.9135057894036,
            "unit": "iter/sec",
            "range": "stddev: 0.00007823856169320133",
            "extra": "mean: 411.1988348349578 usec\nrounds: 1332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 82.57877951457174,
            "unit": "iter/sec",
            "range": "stddev: 0.015511304715579115",
            "extra": "mean: 12.109648578949287 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 230.92188179019388,
            "unit": "iter/sec",
            "range": "stddev: 0.00031672751825407853",
            "extra": "mean: 4.3304687812502705 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.888368559973224,
            "unit": "iter/sec",
            "range": "stddev: 0.003950519410375972",
            "extra": "mean: 1.1256589270000064 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2321.217541172559,
            "unit": "iter/sec",
            "range": "stddev: 0.00009210603792306981",
            "extra": "mean: 430.80839355317454 usec\nrounds: 1334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 248.97513116632683,
            "unit": "iter/sec",
            "range": "stddev: 0.0004530769287917858",
            "extra": "mean: 4.016465400843404 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.2830025670779,
            "unit": "iter/sec",
            "range": "stddev: 0.000053599789642749476",
            "extra": "mean: 1.4656674667806722 msec\nrounds: 587"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.17022299318118,
            "unit": "iter/sec",
            "range": "stddev: 0.0007609163869475714",
            "extra": "mean: 9.884331282608713 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.99168519140383,
            "unit": "iter/sec",
            "range": "stddev: 0.0008556686241041499",
            "extra": "mean: 10.000831550001408 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4702.328658652997,
            "unit": "iter/sec",
            "range": "stddev: 0.000022957216541448906",
            "extra": "mean: 212.6605927809509 usec\nrounds: 2161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.731826821321214,
            "unit": "iter/sec",
            "range": "stddev: 0.00019558397987045652",
            "extra": "mean: 18.270904847825072 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.294838152436725,
            "unit": "iter/sec",
            "range": "stddev: 0.07427205973766637",
            "extra": "mean: 772.2972929999969 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.711900385086416,
            "unit": "iter/sec",
            "range": "stddev: 0.00024220613392179191",
            "extra": "mean: 37.436497799996005 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2342.548155411099,
            "unit": "iter/sec",
            "range": "stddev: 0.00007697783032403673",
            "extra": "mean: 426.8855680469492 usec\nrounds: 1352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1912614.7345323435,
            "unit": "iter/sec",
            "range": "stddev: 1.1086155811851458e-7",
            "extra": "mean: 522.8444505550208 nsec\nrounds: 54645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8865326658369523,
            "unit": "iter/sec",
            "range": "stddev: 0.002057461871306887",
            "extra": "mean: 1.1279900206000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 86.64716847172596,
            "unit": "iter/sec",
            "range": "stddev: 0.000539833468422662",
            "extra": "mean: 11.541058036147048 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5758887.916419688,
            "unit": "iter/sec",
            "range": "stddev: 8.768113571247714e-9",
            "extra": "mean: 173.6446366927884 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.5375723314232,
            "unit": "iter/sec",
            "range": "stddev: 0.00023685736073033933",
            "extra": "mean: 3.5393522771087476 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.44438989849709,
            "unit": "iter/sec",
            "range": "stddev: 0.0007331958890550855",
            "extra": "mean: 10.0558714375009 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 253.49226596427047,
            "unit": "iter/sec",
            "range": "stddev: 0.003991775822245842",
            "extra": "mean: 3.9448935303649435 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.3701704226530635,
            "unit": "iter/sec",
            "range": "stddev: 0.001833754582423393",
            "extra": "mean: 421.9105893999995 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2411.087896938542,
            "unit": "iter/sec",
            "range": "stddev: 0.00007644265153662311",
            "extra": "mean: 414.750536996076 usec\nrounds: 1365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.67486145904914,
            "unit": "iter/sec",
            "range": "stddev: 0.00008030873941893017",
            "extra": "mean: 6.0725722866247995 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1915.1114327386003,
            "unit": "iter/sec",
            "range": "stddev: 0.004518804476898475",
            "extra": "mean: 522.1628271363849 usec\nrounds: 1533"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.14283363436843,
            "unit": "iter/sec",
            "range": "stddev: 0.00006347181210650569",
            "extra": "mean: 5.775578341935502 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.55418122842057,
            "unit": "iter/sec",
            "range": "stddev: 0.0008237300930145123",
            "extra": "mean: 10.465266795699057 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1189.422653014148,
            "unit": "iter/sec",
            "range": "stddev: 0.000014025091335920539",
            "extra": "mean: 840.7440344825055 usec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12290473.459411422,
            "unit": "iter/sec",
            "range": "stddev: 4.6024331554460955e-9",
            "extra": "mean: 81.36383055549673 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6279810.228597076,
            "unit": "iter/sec",
            "range": "stddev: 8.925689094151018e-9",
            "extra": "mean: 159.24048077815553 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.5775168348794,
            "unit": "iter/sec",
            "range": "stddev: 0.00041777472084604273",
            "extra": "mean: 9.043429700933297 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7563010004366434,
            "unit": "iter/sec",
            "range": "stddev: 0.0039000941294259923",
            "extra": "mean: 1.322224880599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.68343203635706,
            "unit": "iter/sec",
            "range": "stddev: 0.0008233134478297535",
            "extra": "mean: 10.031757329896855 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6429387.072393313,
            "unit": "iter/sec",
            "range": "stddev: 4.561374354236923e-9",
            "extra": "mean: 155.53582149289244 nsec\nrounds: 63695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.86086612086714,
            "unit": "iter/sec",
            "range": "stddev: 0.017010800080070568",
            "extra": "mean: 11.78399473999832 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2571542.780230353,
            "unit": "iter/sec",
            "range": "stddev: 1.7251850700861173e-8",
            "extra": "mean: 388.87161733714896 nsec\nrounds: 120482"
          }
        ]
      }
    ]
  }
}