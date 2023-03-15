window.BENCHMARK_DATA = {
  "lastUpdate": 1678879804709,
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
          "id": "19fce80f67b352e295989a2209a63194f0433d90",
          "message": "chore(flake/poetry2nix): `bf239d53` -> `d45ca6fb`",
          "timestamp": "2023-03-15T07:21:26-04:00",
          "tree_id": "6ecec17d96d9da28cefdd72a788f33a9404d3e5d",
          "url": "https://github.com/ibis-project/ibis/commit/19fce80f67b352e295989a2209a63194f0433d90"
        },
        "date": 1678879699260,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 93.56015736847674,
            "unit": "iter/sec",
            "range": "stddev: 0.000882621128408231",
            "extra": "mean: 10.688310367645132 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 58.8977006720429,
            "unit": "iter/sec",
            "range": "stddev: 0.0007479306954435333",
            "extra": "mean: 16.978591500001837 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.00436443462304,
            "unit": "iter/sec",
            "range": "stddev: 0.001225147524708843",
            "extra": "mean: 10.637803957447819 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 590.1186245729908,
            "unit": "iter/sec",
            "range": "stddev: 0.0002730133672472928",
            "extra": "mean: 1.694574545454482 msec\nrounds: 517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4562169.826735414,
            "unit": "iter/sec",
            "range": "stddev: 4.2160584868891614e-7",
            "extra": "mean: 219.1939445436748 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.514241472324247,
            "unit": "iter/sec",
            "range": "stddev: 0.017350479038096136",
            "extra": "mean: 37.71558017391548 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3693.779747187048,
            "unit": "iter/sec",
            "range": "stddev: 0.00012771770661693669",
            "extra": "mean: 270.72540011665217 usec\nrounds: 1717"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.1016878867978,
            "unit": "iter/sec",
            "range": "stddev: 0.0008161047977418523",
            "extra": "mean: 10.40564450000027 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 98.16552319575997,
            "unit": "iter/sec",
            "range": "stddev: 0.0005517545592618617",
            "extra": "mean: 10.186875875003665 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 237.16276869061315,
            "unit": "iter/sec",
            "range": "stddev: 0.0005358946256709625",
            "extra": "mean: 4.216513433036084 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1615209.5410899613,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019414172052845533",
            "extra": "mean: 619.1147182830464 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 118.91056047063857,
            "unit": "iter/sec",
            "range": "stddev: 0.00040861717940227457",
            "extra": "mean: 8.40968200000134 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 239.789487849448,
            "unit": "iter/sec",
            "range": "stddev: 0.0004245241142759206",
            "extra": "mean: 4.170324600000192 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3772.3147285444416,
            "unit": "iter/sec",
            "range": "stddev: 0.00006011931064148963",
            "extra": "mean: 265.08922822191266 usec\nrounds: 1389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57668.54894699241,
            "unit": "iter/sec",
            "range": "stddev: 0.00001548288834301648",
            "extra": "mean: 17.340474457215436 usec\nrounds: 11236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 68.38448687657572,
            "unit": "iter/sec",
            "range": "stddev: 0.017392953332712534",
            "extra": "mean: 14.623199583333246 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.922851944012707,
            "unit": "iter/sec",
            "range": "stddev: 0.009744420609327873",
            "extra": "mean: 126.21717622221873 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 107.45737110505665,
            "unit": "iter/sec",
            "range": "stddev: 0.0007093396557253258",
            "extra": "mean: 9.306015862070003 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10475.20999859403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000503415490439398",
            "extra": "mean: 95.46347998123368 usec\nrounds: 6469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5258707000414254,
            "unit": "iter/sec",
            "range": "stddev: 0.04920192622169499",
            "extra": "mean: 1.9016081327999927 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 83.71218133621676,
            "unit": "iter/sec",
            "range": "stddev: 0.0014406995446457542",
            "extra": "mean: 11.945692777776964 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 429.32424096130376,
            "unit": "iter/sec",
            "range": "stddev: 0.017194979451006096",
            "extra": "mean: 2.3292418750007946 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3468.2202443403376,
            "unit": "iter/sec",
            "range": "stddev: 0.00017711037315616527",
            "extra": "mean: 288.33232307892314 usec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 75.4640573682759,
            "unit": "iter/sec",
            "range": "stddev: 0.0005522350283776564",
            "extra": "mean: 13.251341564101837 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.916253831867714,
            "unit": "iter/sec",
            "range": "stddev: 0.0021889490391908185",
            "extra": "mean: 31.33199796153773 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4914174.590798417,
            "unit": "iter/sec",
            "range": "stddev: 4.757684818005128e-7",
            "extra": "mean: 203.4929735453798 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 133.87223535840997,
            "unit": "iter/sec",
            "range": "stddev: 0.0003921796976045976",
            "extra": "mean: 7.4698087868836 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 436015.52305154485,
            "unit": "iter/sec",
            "range": "stddev: 0.000002832758589122783",
            "extra": "mean: 2.2934963255466068 usec\nrounds: 2041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 80.35793058663761,
            "unit": "iter/sec",
            "range": "stddev: 0.0010229356839777457",
            "extra": "mean: 12.444322454544217 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9885135337203186,
            "unit": "iter/sec",
            "range": "stddev: 0.0035377227098170073",
            "extra": "mean: 502.8882041999964 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9779.058985823825,
            "unit": "iter/sec",
            "range": "stddev: 0.00003910651015180946",
            "extra": "mean: 102.25932796290994 usec\nrounds: 5400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.0727193537029,
            "unit": "iter/sec",
            "range": "stddev: 0.0002896789977840651",
            "extra": "mean: 3.758371028901514 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 882.6263260494518,
            "unit": "iter/sec",
            "range": "stddev: 0.0003469513714056293",
            "extra": "mean: 1.1329822944165977 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 241.15643244332026,
            "unit": "iter/sec",
            "range": "stddev: 0.00048284211064272684",
            "extra": "mean: 4.146685990783319 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 231.525232457092,
            "unit": "iter/sec",
            "range": "stddev: 0.0003665986217368619",
            "extra": "mean: 4.319183656085207 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 89.81086052954278,
            "unit": "iter/sec",
            "range": "stddev: 0.0012079456334002437",
            "extra": "mean: 11.134510838709263 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3704.587635122776,
            "unit": "iter/sec",
            "range": "stddev: 0.00012697015793499525",
            "extra": "mean: 269.93557677489207 usec\nrounds: 2859"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4107.921802469374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000982547429832772",
            "extra": "mean: 243.43209245095053 usec\nrounds: 3537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3755.8768687753577,
            "unit": "iter/sec",
            "range": "stddev: 0.00012282879088612453",
            "extra": "mean: 266.24940990838724 usec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 61.988479806604104,
            "unit": "iter/sec",
            "range": "stddev: 0.027151113689041273",
            "extra": "mean: 16.132029743588944 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 137.66208785925423,
            "unit": "iter/sec",
            "range": "stddev: 0.004628326005745246",
            "extra": "mean: 7.264164125001507 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.308366347834074,
            "unit": "iter/sec",
            "range": "stddev: 0.0018839592952111144",
            "extra": "mean: 29.147409406252045 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 83.10914410851959,
            "unit": "iter/sec",
            "range": "stddev: 0.0012412603429172375",
            "extra": "mean: 12.03237033333242 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6064038093742042,
            "unit": "iter/sec",
            "range": "stddev: 0.0207862236286823",
            "extra": "mean: 1.6490661577999959 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 80.49870717589495,
            "unit": "iter/sec",
            "range": "stddev: 0.0010284309086112564",
            "extra": "mean: 12.422559753847159 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5618996792642241,
            "unit": "iter/sec",
            "range": "stddev: 0.010186046276538371",
            "extra": "mean: 1.7796771148000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9430212.135503037,
            "unit": "iter/sec",
            "range": "stddev: 1.5732161873745923e-7",
            "extra": "mean: 106.04215320191774 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 92.27604286143591,
            "unit": "iter/sec",
            "range": "stddev: 0.0011450303564261106",
            "extra": "mean: 10.837049021506328 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 38.447317470235056,
            "unit": "iter/sec",
            "range": "stddev: 0.0028159691370685325",
            "extra": "mean: 26.009616945946224 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 217.61568256288564,
            "unit": "iter/sec",
            "range": "stddev: 0.00075831082757658",
            "extra": "mean: 4.595257052354324 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 76.76282929343162,
            "unit": "iter/sec",
            "range": "stddev: 0.0014712599572725682",
            "extra": "mean: 13.027138384613544 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5888421751611074,
            "unit": "iter/sec",
            "range": "stddev: 0.005312332554166532",
            "extra": "mean: 1.6982479213999908 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1300536.5795251867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028767687432433445",
            "extra": "mean: 768.9133975494102 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5409973.405158334,
            "unit": "iter/sec",
            "range": "stddev: 1.3215922897385362e-7",
            "extra": "mean: 184.84379221656064 nsec\nrounds: 52911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 174.8507263650202,
            "unit": "iter/sec",
            "range": "stddev: 0.005735941868553497",
            "extra": "mean: 5.71916411666709 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.14618127331886,
            "unit": "iter/sec",
            "range": "stddev: 0.0021533962038634506",
            "extra": "mean: 49.63719855555837 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3653.3327449184785,
            "unit": "iter/sec",
            "range": "stddev: 0.00008193270787987357",
            "extra": "mean: 273.72267182367324 usec\nrounds: 1810"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.593423567032964,
            "unit": "iter/sec",
            "range": "stddev: 0.001771808533857567",
            "extra": "mean: 19.013784085104284 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 196.99555119289494,
            "unit": "iter/sec",
            "range": "stddev: 0.0008637737628871604",
            "extra": "mean: 5.07625676795521 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.245654363024469,
            "unit": "iter/sec",
            "range": "stddev: 0.010009473950310169",
            "extra": "mean: 235.5349527999806 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 75.02199396806782,
            "unit": "iter/sec",
            "range": "stddev: 0.025884093565830022",
            "extra": "mean: 13.329424440859805 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 552139.3133842418,
            "unit": "iter/sec",
            "range": "stddev: 0.00001126299233783109",
            "extra": "mean: 1.8111371093477735 usec\nrounds: 12005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 532.0950224898797,
            "unit": "iter/sec",
            "range": "stddev: 0.00036117528279412523",
            "extra": "mean: 1.8793635680345417 msec\nrounds: 463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 86.26658419031706,
            "unit": "iter/sec",
            "range": "stddev: 0.0013377240122136045",
            "extra": "mean: 11.591973988373638 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 238.91910947020529,
            "unit": "iter/sec",
            "range": "stddev: 0.0002578886989657422",
            "extra": "mean: 4.185517023805525 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3519.9887349933283,
            "unit": "iter/sec",
            "range": "stddev: 0.00015232270622278076",
            "extra": "mean: 284.0918182659739 usec\nrounds: 2157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1306665429988827,
            "unit": "iter/sec",
            "range": "stddev: 0.004591506098199172",
            "extra": "mean: 884.4340590000002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 401.7495957831169,
            "unit": "iter/sec",
            "range": "stddev: 0.0003374388418926011",
            "extra": "mean: 2.489112647520488 msec\nrounds: 383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2077890.9148140359,
            "unit": "iter/sec",
            "range": "stddev: 0.000001140895237078897",
            "extra": "mean: 481.2572175327878 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 28.8555132488026,
            "unit": "iter/sec",
            "range": "stddev: 0.001004324606271158",
            "extra": "mean: 34.655422392859236 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1562265.8650182302,
            "unit": "iter/sec",
            "range": "stddev: 0.000002436778956695746",
            "extra": "mean: 640.0959160612082 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 70.83145459006664,
            "unit": "iter/sec",
            "range": "stddev: 0.0013605589393981446",
            "extra": "mean: 14.11802151724044 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1098836326484444,
            "unit": "iter/sec",
            "range": "stddev: 0.20621561014893602",
            "extra": "mean: 9.100536411999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.920603724857616,
            "unit": "iter/sec",
            "range": "stddev: 0.0028462833466652974",
            "extra": "mean: 83.88836866665865 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 151.16332985857323,
            "unit": "iter/sec",
            "range": "stddev: 0.0006173495549364361",
            "extra": "mean: 6.615361020001274 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6018.342290406668,
            "unit": "iter/sec",
            "range": "stddev: 0.0001384371590441993",
            "extra": "mean: 166.15871144351755 usec\nrounds: 2866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 207.2057781212877,
            "unit": "iter/sec",
            "range": "stddev: 0.0008703526664439137",
            "extra": "mean: 4.826120241756246 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 92.00752704375844,
            "unit": "iter/sec",
            "range": "stddev: 0.001273789196249133",
            "extra": "mean: 10.868675989132973 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 223.18451730961235,
            "unit": "iter/sec",
            "range": "stddev: 0.0009880789455637667",
            "extra": "mean: 4.4805975434790195 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.59553307041232,
            "unit": "iter/sec",
            "range": "stddev: 0.0015618745173400846",
            "extra": "mean: 18.658271365380912 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 93.66766083843177,
            "unit": "iter/sec",
            "range": "stddev: 0.00131662997721253",
            "extra": "mean: 10.676043268817287 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 132.23036356822047,
            "unit": "iter/sec",
            "range": "stddev: 0.000335486837909606",
            "extra": "mean: 7.562559559053761 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 232.4636990884164,
            "unit": "iter/sec",
            "range": "stddev: 0.0006201187401184098",
            "extra": "mean: 4.301746913266036 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 92.36203177638608,
            "unit": "iter/sec",
            "range": "stddev: 0.0015296578769136307",
            "extra": "mean: 10.826959744898845 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 125167.02000516064,
            "unit": "iter/sec",
            "range": "stddev: 0.00002597345709749596",
            "extra": "mean: 7.989324983200607 usec\nrounds: 36765"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 77.1841966204938,
            "unit": "iter/sec",
            "range": "stddev: 0.001572819239811494",
            "extra": "mean: 12.956020063496807 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1407.3689377115327,
            "unit": "iter/sec",
            "range": "stddev: 0.00011881380095469984",
            "extra": "mean: 710.5457376557284 usec\nrounds: 972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8433.344582564403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000499227775206363",
            "extra": "mean: 118.57691692895598 usec\nrounds: 4129"
          }
        ]
      }
    ]
  }
}