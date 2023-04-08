window.BENCHMARK_DATA = {
  "lastUpdate": 1680913995907,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "149c64ad2379cd6390d24dafcaa94af1155c4520",
          "message": "chore(flake/flake-utils): `93a2b84f` -> `411e8764`",
          "timestamp": "2023-04-08T00:27:42Z",
          "tree_id": "331a0c6ce844f97fa5b2b54d9b88b66ba1abee4e",
          "url": "https://github.com/ibis-project/ibis/commit/149c64ad2379cd6390d24dafcaa94af1155c4520"
        },
        "date": 1680913903892,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 703.934274925708,
            "unit": "iter/sec",
            "range": "stddev: 0.00021631445479103174",
            "extra": "mean: 1.4205871707348505 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 80.0578786439539,
            "unit": "iter/sec",
            "range": "stddev: 0.001190629052991364",
            "extra": "mean: 12.490962999998523 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11014.718325747654,
            "unit": "iter/sec",
            "range": "stddev: 0.000020059253824870328",
            "extra": "mean: 90.7876143925017 usec\nrounds: 931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.54919833006749,
            "unit": "iter/sec",
            "range": "stddev: 0.0008866598269893039",
            "extra": "mean: 17.376436666669154 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11994.127796672721,
            "unit": "iter/sec",
            "range": "stddev: 0.000013190434257413697",
            "extra": "mean: 83.37413248818385 usec\nrounds: 4808"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 249.25294292899423,
            "unit": "iter/sec",
            "range": "stddev: 0.0003400043234539686",
            "extra": "mean: 4.0119887382227395 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 61381.78184012014,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027768733737768303",
            "extra": "mean: 16.291478839840124 usec\nrounds: 12240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1939.2673995119485,
            "unit": "iter/sec",
            "range": "stddev: 0.00010213914346229115",
            "extra": "mean: 515.6586452449353 usec\nrounds: 389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 123.65429699759889,
            "unit": "iter/sec",
            "range": "stddev: 0.0005281529630561387",
            "extra": "mean: 8.087062271838542 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4825400.879267499,
            "unit": "iter/sec",
            "range": "stddev: 4.603904765548357e-8",
            "extra": "mean: 207.23666800337529 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 76.99214095985225,
            "unit": "iter/sec",
            "range": "stddev: 0.010365010853138706",
            "extra": "mean: 12.98833864772578 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5070785.988951794,
            "unit": "iter/sec",
            "range": "stddev: 1.801976387619535e-8",
            "extra": "mean: 197.20808611842548 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7232257679513641,
            "unit": "iter/sec",
            "range": "stddev: 0.025669916808865524",
            "extra": "mean: 1.382694096800003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.964418064572705,
            "unit": "iter/sec",
            "range": "stddev: 0.001484198564869346",
            "extra": "mean: 30.335739524997507 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 88.78036168109617,
            "unit": "iter/sec",
            "range": "stddev: 0.0008762596035350234",
            "extra": "mean: 11.263752265304502 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.28030226167191,
            "unit": "iter/sec",
            "range": "stddev: 0.007799645510213651",
            "extra": "mean: 438.5383537999928 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 92.280426429646,
            "unit": "iter/sec",
            "range": "stddev: 0.0009251122393084017",
            "extra": "mean: 10.836534232558988 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8390725950578041,
            "unit": "iter/sec",
            "range": "stddev: 0.027156301160570034",
            "extra": "mean: 1.1917919926000082 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 264.812530705584,
            "unit": "iter/sec",
            "range": "stddev: 0.00020416434819551022",
            "extra": "mean: 3.7762563475962936 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1679787.5537700537,
            "unit": "iter/sec",
            "range": "stddev: 4.1229374523149995e-7",
            "extra": "mean: 595.3133762395349 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.854343753001935,
            "unit": "iter/sec",
            "range": "stddev: 0.024784514485570317",
            "extra": "mean: 29.538307027774774 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 87.08158992540102,
            "unit": "iter/sec",
            "range": "stddev: 0.001040871702858033",
            "extra": "mean: 11.483483487803293 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 45.31725677233159,
            "unit": "iter/sec",
            "range": "stddev: 0.0006634447356787085",
            "extra": "mean: 22.066649025643343 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1868.6813309024442,
            "unit": "iter/sec",
            "range": "stddev: 0.00010158326008570077",
            "extra": "mean: 535.1367209930164 usec\nrounds: 1129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6062201963563213,
            "unit": "iter/sec",
            "range": "stddev: 0.03952936392778695",
            "extra": "mean: 1.6495656298000085 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 233.01438416709615,
            "unit": "iter/sec",
            "range": "stddev: 0.0004189445292376524",
            "extra": "mean: 4.291580554455786 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.37348132661546,
            "unit": "iter/sec",
            "range": "stddev: 0.0002945043675003412",
            "extra": "mean: 6.926479785700427 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 243.31514757678397,
            "unit": "iter/sec",
            "range": "stddev: 0.0003549500124371943",
            "extra": "mean: 4.109896198239881 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 181.48681724772158,
            "unit": "iter/sec",
            "range": "stddev: 0.00030370436855118167",
            "extra": "mean: 5.5100420799988115 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 139.25793493967996,
            "unit": "iter/sec",
            "range": "stddev: 0.00018435370400738985",
            "extra": "mean: 7.18091935251771 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 83.441977858849,
            "unit": "iter/sec",
            "range": "stddev: 0.001024065944875322",
            "extra": "mean: 11.984375558446214 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 96.8966015190628,
            "unit": "iter/sec",
            "range": "stddev: 0.000446946305250509",
            "extra": "mean: 10.320279393940009 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1980.0210332219685,
            "unit": "iter/sec",
            "range": "stddev: 0.0001029540191949754",
            "extra": "mean: 505.04514003710375 usec\nrounds: 557"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 243.06058584072218,
            "unit": "iter/sec",
            "range": "stddev: 0.00032987104077741793",
            "extra": "mean: 4.1142005666657155 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 77.277812995835,
            "unit": "iter/sec",
            "range": "stddev: 0.01619617060020089",
            "extra": "mean: 12.940324800003028 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1049.5378075721862,
            "unit": "iter/sec",
            "range": "stddev: 0.00008942592968355649",
            "extra": "mean: 952.800359153542 usec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1838747.3268896067,
            "unit": "iter/sec",
            "range": "stddev: 3.908433075995584e-7",
            "extra": "mean: 543.8485132655952 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7543.939285312481,
            "unit": "iter/sec",
            "range": "stddev: 0.000056592369000459064",
            "extra": "mean: 132.55674020957855 usec\nrounds: 1532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.917623963674359,
            "unit": "iter/sec",
            "range": "stddev: 0.002771495072181064",
            "extra": "mean: 71.85134492856297 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1687351.5542518045,
            "unit": "iter/sec",
            "range": "stddev: 2.660437443702207e-7",
            "extra": "mean: 592.6447262754407 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.37920631066417,
            "unit": "iter/sec",
            "range": "stddev: 0.0009868389974615796",
            "extra": "mean: 12.59775760526413 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5257772749931116,
            "unit": "iter/sec",
            "range": "stddev: 0.006515153929858282",
            "extra": "mean: 655.4036531999827 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5705062.691747886,
            "unit": "iter/sec",
            "range": "stddev: 3.393868506849445e-8",
            "extra": "mean: 175.28291169301542 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8746649.803728927,
            "unit": "iter/sec",
            "range": "stddev: 6.220152620665712e-9",
            "extra": "mean: 114.32948871164729 nsec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.76085766726554,
            "unit": "iter/sec",
            "range": "stddev: 0.00010520941724536483",
            "extra": "mean: 15.44142613332724 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 186.40295545783684,
            "unit": "iter/sec",
            "range": "stddev: 0.004360870048239727",
            "extra": "mean: 5.364721806818099 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1683367.5050961957,
            "unit": "iter/sec",
            "range": "stddev: 1.6166754329764603e-7",
            "extra": "mean: 594.0473467455076 nsec\nrounds: 88496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 136.8899381824278,
            "unit": "iter/sec",
            "range": "stddev: 0.00016149449651295267",
            "extra": "mean: 7.305138809160242 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.90013343162374,
            "unit": "iter/sec",
            "range": "stddev: 0.00014509510653441658",
            "extra": "mean: 9.813529838712258 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.116102027263569,
            "unit": "iter/sec",
            "range": "stddev: 0.000549743023862153",
            "extra": "mean: 109.69600790000982 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 231.2491726779535,
            "unit": "iter/sec",
            "range": "stddev: 0.0003061439982458797",
            "extra": "mean: 4.324339795120645 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.3453733404405,
            "unit": "iter/sec",
            "range": "stddev: 0.0008316414974348648",
            "extra": "mean: 12.929021566660975 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1900.2020695685064,
            "unit": "iter/sec",
            "range": "stddev: 0.00010700348879954818",
            "extra": "mean: 526.259820476397 usec\nrounds: 1426"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.55910958523705,
            "unit": "iter/sec",
            "range": "stddev: 0.000971164119032986",
            "extra": "mean: 11.552799061724098 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 208.04137863439615,
            "unit": "iter/sec",
            "range": "stddev: 0.0007612246623831372",
            "extra": "mean: 4.806736076083023 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1838.3268691890548,
            "unit": "iter/sec",
            "range": "stddev: 0.0001384572403361807",
            "extra": "mean: 543.9729009896548 usec\nrounds: 1515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 87.03222578617348,
            "unit": "iter/sec",
            "range": "stddev: 0.00045750403980861405",
            "extra": "mean: 11.489996848487662 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 246.5160264537677,
            "unit": "iter/sec",
            "range": "stddev: 0.0003159330478228774",
            "extra": "mean: 4.056531392240102 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 703519.9487687085,
            "unit": "iter/sec",
            "range": "stddev: 7.557300745812888e-7",
            "extra": "mean: 1.421423801485924 usec\nrounds: 20965"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7812306955453686,
            "unit": "iter/sec",
            "range": "stddev: 0.0125160164092129",
            "extra": "mean: 1.2800316292000162 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.494218146971846,
            "unit": "iter/sec",
            "range": "stddev: 0.0014782980319927891",
            "extra": "mean: 42.56366369565225 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 600.3512446518805,
            "unit": "iter/sec",
            "range": "stddev: 0.00013404819059648676",
            "extra": "mean: 1.6656915579143337 msec\nrounds: 518"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 462.20366525633847,
            "unit": "iter/sec",
            "range": "stddev: 0.00013162755415264035",
            "extra": "mean: 2.1635483990491493 msec\nrounds: 421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 79.90939818470268,
            "unit": "iter/sec",
            "range": "stddev: 0.0010416798235327734",
            "extra": "mean: 12.514172584413647 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11971.611297304353,
            "unit": "iter/sec",
            "range": "stddev: 0.000004258534534839959",
            "extra": "mean: 83.53094459600187 usec\nrounds: 5866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 82.49685768458788,
            "unit": "iter/sec",
            "range": "stddev: 0.0009634961627936426",
            "extra": "mean: 12.121673819666231 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 248.06771087348145,
            "unit": "iter/sec",
            "range": "stddev: 0.00009413967753224265",
            "extra": "mean: 4.031157446806998 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1476729100287886,
            "unit": "iter/sec",
            "range": "stddev: 0.16995592594924894",
            "extra": "mean: 6.771722720200012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 82.18065660769545,
            "unit": "iter/sec",
            "range": "stddev: 0.0009166403338003408",
            "extra": "mean: 12.168313582278671 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.63799961151877,
            "unit": "iter/sec",
            "range": "stddev: 0.0010525532607676875",
            "extra": "mean: 11.41057537178843 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 85.3130558576133,
            "unit": "iter/sec",
            "range": "stddev: 0.0010181836467344427",
            "extra": "mean: 11.721535349395884 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1887.707130854908,
            "unit": "iter/sec",
            "range": "stddev: 0.00011175055982643252",
            "extra": "mean: 529.7431914383448 usec\nrounds: 1238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150839.3999481858,
            "unit": "iter/sec",
            "range": "stddev: 0.000001533142952068208",
            "extra": "mean: 6.629567608618873 usec\nrounds: 34966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 142.51296274164838,
            "unit": "iter/sec",
            "range": "stddev: 0.00479302053898465",
            "extra": "mean: 7.0169055555516655 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 83.7873657761388,
            "unit": "iter/sec",
            "range": "stddev: 0.0009861286441948144",
            "extra": "mean: 11.934973617284706 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1570.3146727768055,
            "unit": "iter/sec",
            "range": "stddev: 0.000047285887540816874",
            "extra": "mean: 636.815039263238 usec\nrounds: 1248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 98.64536128018504,
            "unit": "iter/sec",
            "range": "stddev: 0.00034083002168398287",
            "extra": "mean: 10.137324117650838 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1898.8502838061597,
            "unit": "iter/sec",
            "range": "stddev: 0.00010478483829392777",
            "extra": "mean: 526.6344632477001 usec\nrounds: 1170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 241.57997485095564,
            "unit": "iter/sec",
            "range": "stddev: 0.000324676719961759",
            "extra": "mean: 4.139415945452252 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.03709495456267,
            "unit": "iter/sec",
            "range": "stddev: 0.0008320365031234759",
            "extra": "mean: 21.259816342101683 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1787.3322125335599,
            "unit": "iter/sec",
            "range": "stddev: 0.00011617212382919966",
            "extra": "mean: 559.4930774410934 usec\nrounds: 1188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 413678.4847417794,
            "unit": "iter/sec",
            "range": "stddev: 5.227348029477774e-7",
            "extra": "mean: 2.417336257224511 usec\nrounds: 1710"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 66.96352260292167,
            "unit": "iter/sec",
            "range": "stddev: 0.021871199899836623",
            "extra": "mean: 14.933503512498447 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.79095513339803,
            "unit": "iter/sec",
            "range": "stddev: 0.0016999246011229552",
            "extra": "mean: 12.854964928572647 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.26477583302502,
            "unit": "iter/sec",
            "range": "stddev: 0.0006656082568297258",
            "extra": "mean: 24.233743666666914 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.8712782170328115,
            "unit": "iter/sec",
            "range": "stddev: 0.0023656815509052794",
            "extra": "mean: 205.28492839998762 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.58494623283892,
            "unit": "iter/sec",
            "range": "stddev: 0.031066599024568382",
            "extra": "mean: 31.660652281253476 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3970.7999320452404,
            "unit": "iter/sec",
            "range": "stddev: 0.00005810438223613605",
            "extra": "mean: 251.83842477929377 usec\nrounds: 2260"
          }
        ]
      }
    ]
  }
}