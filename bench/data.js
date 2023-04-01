window.BENCHMARK_DATA = {
  "lastUpdate": 1680347032789,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
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
          "id": "13767a841c844eb23e6be57747791b8bf989baac",
          "message": "chore(deps): update dependency mkdocs-material to >=8.2.1,<9.1.6",
          "timestamp": "2023-04-01T06:57:11-04:00",
          "tree_id": "c4a34a76e4d01e8d04d9b3131c0c4c8315b34915",
          "url": "https://github.com/ibis-project/ibis/commit/13767a841c844eb23e6be57747791b8bf989baac"
        },
        "date": 1680346953790,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8988245504375381,
            "unit": "iter/sec",
            "range": "stddev: 0.0034754148626509724",
            "extra": "mean: 1.1125641812000027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8966026348803473,
            "unit": "iter/sec",
            "range": "stddev: 0.007376734219183242",
            "extra": "mean: 1.115321281799993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.33289016932778,
            "unit": "iter/sec",
            "range": "stddev: 0.0005701603405616611",
            "extra": "mean: 8.823563914287597 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 107.75022317553614,
            "unit": "iter/sec",
            "range": "stddev: 0.009758643073993413",
            "extra": "mean: 9.280723236840984 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 298.25719986244553,
            "unit": "iter/sec",
            "range": "stddev: 0.00022635240812710994",
            "extra": "mean: 3.3528109311734777 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12790.013930767898,
            "unit": "iter/sec",
            "range": "stddev: 0.000001634030082300626",
            "extra": "mean: 78.18599771767107 usec\nrounds: 5258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.143194544842345,
            "unit": "iter/sec",
            "range": "stddev: 0.020673308867898924",
            "extra": "mean: 26.21699655555511 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71428.145067319,
            "unit": "iter/sec",
            "range": "stddev: 7.705211714885426e-7",
            "extra": "mean: 14.000083567304296 usec\nrounds: 12469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148318.2756960496,
            "unit": "iter/sec",
            "range": "stddev: 3.079572992996453e-7",
            "extra": "mean: 6.742257454835249 usec\nrounds: 28572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.40845439042857,
            "unit": "iter/sec",
            "range": "stddev: 0.0007004695292519193",
            "extra": "mean: 10.70566905882203 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 153.4473613349273,
            "unit": "iter/sec",
            "range": "stddev: 0.00394738232184895",
            "extra": "mean: 6.516892772221183 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.35360808411546,
            "unit": "iter/sec",
            "range": "stddev: 0.0006465824957915924",
            "extra": "mean: 8.37846476576763 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 315.4575983656125,
            "unit": "iter/sec",
            "range": "stddev: 0.0002851681114499366",
            "extra": "mean: 3.1699981397848878 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5195.136735569635,
            "unit": "iter/sec",
            "range": "stddev: 0.000054877723151331903",
            "extra": "mean: 192.48771512658797 usec\nrounds: 3398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5612.519113402182,
            "unit": "iter/sec",
            "range": "stddev: 0.000050692464185740696",
            "extra": "mean: 178.17311260679568 usec\nrounds: 3046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 339.8677474313021,
            "unit": "iter/sec",
            "range": "stddev: 0.00008127978864012462",
            "extra": "mean: 2.942320969135594 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.3677530026212,
            "unit": "iter/sec",
            "range": "stddev: 0.00007195008011702672",
            "extra": "mean: 8.97925991176695 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 737.5477375068498,
            "unit": "iter/sec",
            "range": "stddev: 0.000025391790994515497",
            "extra": "mean: 1.3558444411751893 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.20502778654751,
            "unit": "iter/sec",
            "range": "stddev: 0.02699029200103251",
            "extra": "mean: 26.87808770731727 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1139.752284213586,
            "unit": "iter/sec",
            "range": "stddev: 0.00004319039398038915",
            "extra": "mean: 877.3836331374292 usec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5113625455704383,
            "unit": "iter/sec",
            "range": "stddev: 0.0036387945553104195",
            "extra": "mean: 398.1902181999999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.7487882565988,
            "unit": "iter/sec",
            "range": "stddev: 0.0007296721173606324",
            "extra": "mean: 9.828126871428822 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6028239.901735482,
            "unit": "iter/sec",
            "range": "stddev: 1.2585144226633256e-8",
            "extra": "mean: 165.8858997486545 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 512656.13581910107,
            "unit": "iter/sec",
            "range": "stddev: 3.310440183955458e-7",
            "extra": "mean: 1.950625243960537 usec\nrounds: 2052"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1957715.7569398521,
            "unit": "iter/sec",
            "range": "stddev: 1.3611014145144643e-7",
            "extra": "mean: 510.7993826249433 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 677.4677211795304,
            "unit": "iter/sec",
            "range": "stddev: 0.000020994026316675685",
            "extra": "mean: 1.4760850867682858 msec\nrounds: 461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 86.80780383021046,
            "unit": "iter/sec",
            "range": "stddev: 0.018577644822077514",
            "extra": "mean: 11.519701638298843 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.23137551725404,
            "unit": "iter/sec",
            "range": "stddev: 0.00017707998595761806",
            "extra": "mean: 6.164035759492439 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.2477003092451,
            "unit": "iter/sec",
            "range": "stddev: 0.000039476756722775166",
            "extra": "mean: 7.286096581194514 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1751.2342642095878,
            "unit": "iter/sec",
            "range": "stddev: 0.000006632220705260864",
            "extra": "mean: 571.0258304312849 usec\nrounds: 1321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 118.21036522985243,
            "unit": "iter/sec",
            "range": "stddev: 0.0007518914927503047",
            "extra": "mean: 8.459495054055239 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.242261134664863,
            "unit": "iter/sec",
            "range": "stddev: 0.0029260238570812274",
            "extra": "mean: 97.63469089999148 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5450.943958081152,
            "unit": "iter/sec",
            "range": "stddev: 0.000022672159237985373",
            "extra": "mean: 183.45446361037642 usec\nrounds: 2116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5522697.032540122,
            "unit": "iter/sec",
            "range": "stddev: 1.266466047359262e-8",
            "extra": "mean: 181.07095031795612 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5019.928507710177,
            "unit": "iter/sec",
            "range": "stddev: 0.00009853228492381143",
            "extra": "mean: 199.20602424199595 usec\nrounds: 1650"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1927909.422540054,
            "unit": "iter/sec",
            "range": "stddev: 1.0677964830289067e-7",
            "extra": "mean: 518.6965675402337 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.77076125637583,
            "unit": "iter/sec",
            "range": "stddev: 0.0003091130918398512",
            "extra": "mean: 10.551777644739806 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6956329.526548059,
            "unit": "iter/sec",
            "range": "stddev: 4.889953388748385e-9",
            "extra": "mean: 143.75397200257666 nsec\nrounds: 66221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1931577.3219498745,
            "unit": "iter/sec",
            "range": "stddev: 1.0212623352908692e-7",
            "extra": "mean: 517.7116073150659 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8484317024967664,
            "unit": "iter/sec",
            "range": "stddev: 0.0023393162990450263",
            "extra": "mean: 1.178645254599985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6685159648204566,
            "unit": "iter/sec",
            "range": "stddev: 0.07500364218730077",
            "extra": "mean: 1.4958505894000154 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.36454709066354,
            "unit": "iter/sec",
            "range": "stddev: 0.0006503883002140802",
            "extra": "mean: 9.314061551021625 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.34544803380808,
            "unit": "iter/sec",
            "range": "stddev: 0.0002876201866566979",
            "extra": "mean: 8.379037629627238 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.8600015445394,
            "unit": "iter/sec",
            "range": "stddev: 0.000022941515301336228",
            "extra": "mean: 1.8661590660203111 msec\nrounds: 515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5149.959180185062,
            "unit": "iter/sec",
            "range": "stddev: 0.00005036463786822174",
            "extra": "mean: 194.17629635737526 usec\nrounds: 2416"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.676071355174,
            "unit": "iter/sec",
            "range": "stddev: 0.017400459458623882",
            "extra": "mean: 10.13416916853739 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 283.4977876162561,
            "unit": "iter/sec",
            "range": "stddev: 0.00029330106016876476",
            "extra": "mean: 3.527364387596578 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11793538.347856956,
            "unit": "iter/sec",
            "range": "stddev: 3.1273922182444335e-9",
            "extra": "mean: 84.79219471748846 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.18504753552051,
            "unit": "iter/sec",
            "range": "stddev: 0.0008488713611346694",
            "extra": "mean: 9.417521800001877 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 309.2372937573398,
            "unit": "iter/sec",
            "range": "stddev: 0.00022711137407817748",
            "extra": "mean: 3.2337626159175534 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.54081073304673,
            "unit": "iter/sec",
            "range": "stddev: 0.0006770171117871227",
            "extra": "mean: 8.807405844152072 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7585009410286867,
            "unit": "iter/sec",
            "range": "stddev: 0.002739386490176964",
            "extra": "mean: 568.6661728000104 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1809406.5642420356,
            "unit": "iter/sec",
            "range": "stddev: 8.316551943471178e-8",
            "extra": "mean: 552.6673881714927 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 312.99545165605934,
            "unit": "iter/sec",
            "range": "stddev: 0.00026028874429812716",
            "extra": "mean: 3.1949346059471426 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5602.70183918405,
            "unit": "iter/sec",
            "range": "stddev: 0.000050616530754092556",
            "extra": "mean: 178.48531453275316 usec\nrounds: 3936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.84275831338314,
            "unit": "iter/sec",
            "range": "stddev: 0.0004609496913183574",
            "extra": "mean: 11.130557640626648 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.14694851042846,
            "unit": "iter/sec",
            "range": "stddev: 0.0003765918422424433",
            "extra": "mean: 10.188803780218867 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.21315482665622,
            "unit": "iter/sec",
            "range": "stddev: 0.0007259895355916707",
            "extra": "mean: 9.783476517243841 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.40233191350051,
            "unit": "iter/sec",
            "range": "stddev: 0.0005048675356531632",
            "extra": "mean: 16.025042163266555 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 228.21202488965264,
            "unit": "iter/sec",
            "range": "stddev: 0.0038018738132460108",
            "extra": "mean: 4.3818900449418905 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 752538.9714010982,
            "unit": "iter/sec",
            "range": "stddev: 2.680021989385566e-7",
            "extra": "mean: 1.3288348351423873 usec\nrounds: 19532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.86403542801953,
            "unit": "iter/sec",
            "range": "stddev: 0.0006454214785431479",
            "extra": "mean: 9.270930723404335 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.25301297613025,
            "unit": "iter/sec",
            "range": "stddev: 0.0004496921835054689",
            "extra": "mean: 21.162671690483478 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.20874052003698,
            "unit": "iter/sec",
            "range": "stddev: 0.000686853315268407",
            "extra": "mean: 8.388646634781924 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.300661113162029,
            "unit": "iter/sec",
            "range": "stddev: 0.0004923899792059809",
            "extra": "mean: 65.35665306251204 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.45992913536926,
            "unit": "iter/sec",
            "range": "stddev: 0.000579630034946964",
            "extra": "mean: 9.665577855669879 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.36982085657381,
            "unit": "iter/sec",
            "range": "stddev: 0.00018837964857289558",
            "extra": "mean: 15.535230433966237 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.84882677199643,
            "unit": "iter/sec",
            "range": "stddev: 0.00008170330829865421",
            "extra": "mean: 13.360262854168544 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 290.76511821683624,
            "unit": "iter/sec",
            "range": "stddev: 0.00003073070355099214",
            "extra": "mean: 3.439202082191497 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.61840521723576,
            "unit": "iter/sec",
            "range": "stddev: 0.00015528972266384115",
            "extra": "mean: 3.452819233811899 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.582668155006868,
            "unit": "iter/sec",
            "range": "stddev: 0.000675008333570717",
            "extra": "mean: 40.67906680000988 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.648893483117102,
            "unit": "iter/sec",
            "range": "stddev: 0.0001273704155094804",
            "extra": "mean: 177.02581983333707 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.32526587365405,
            "unit": "iter/sec",
            "range": "stddev: 0.00015585752345128353",
            "extra": "mean: 5.146011227640248 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.88556770743295,
            "unit": "iter/sec",
            "range": "stddev: 0.00007743998686641731",
            "extra": "mean: 6.21559791999789 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5490.465526192017,
            "unit": "iter/sec",
            "range": "stddev: 0.00004675335432535839",
            "extra": "mean: 182.13391837714767 usec\nrounds: 2095"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.60233495936411,
            "unit": "iter/sec",
            "range": "stddev: 0.000636568039317879",
            "extra": "mean: 8.291713426086991 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5591.266422388497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000505719541596992",
            "extra": "mean: 178.8503577643536 usec\nrounds: 3793"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.71953824082496,
            "unit": "iter/sec",
            "range": "stddev: 0.00010902311741979852",
            "extra": "mean: 6.18354473972618 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1646512439332505,
            "unit": "iter/sec",
            "range": "stddev: 0.024033912294977342",
            "extra": "mean: 6.073443334600006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14033.868039113138,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014461983604886849",
            "extra": "mean: 71.2561923208161 usec\nrounds: 5808"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 305.608244853239,
            "unit": "iter/sec",
            "range": "stddev: 0.00018527917143091",
            "extra": "mean: 3.2721630284556813 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.3071117345068,
            "unit": "iter/sec",
            "range": "stddev: 0.0002648662912577117",
            "extra": "mean: 3.1917564668860425 msec\nrounds: 302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 308.27080464423227,
            "unit": "iter/sec",
            "range": "stddev: 0.0002694433984559222",
            "extra": "mean: 3.2439010925931675 msec\nrounds: 324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8447.386244520081,
            "unit": "iter/sec",
            "range": "stddev: 0.000011805680842304306",
            "extra": "mean: 118.379812530617 usec\nrounds: 4134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.93500079757812,
            "unit": "iter/sec",
            "range": "stddev: 0.0006022301537489189",
            "extra": "mean: 17.877893729167482 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5376.683475993344,
            "unit": "iter/sec",
            "range": "stddev: 0.000050496199803665115",
            "extra": "mean: 185.98825920568993 usec\nrounds: 2037"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12167.266289725734,
            "unit": "iter/sec",
            "range": "stddev: 0.000012559109834422405",
            "extra": "mean: 82.18773027466479 usec\nrounds: 5209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.397730100981235,
            "unit": "iter/sec",
            "range": "stddev: 0.001554856174667479",
            "extra": "mean: 24.75386605881875 msec\nrounds: 34"
          }
        ]
      }
    ]
  }
}