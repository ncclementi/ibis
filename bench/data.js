window.BENCHMARK_DATA = {
  "lastUpdate": 1676898443322,
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
          "id": "6151f37ecc5f4b5799f1bc3f2fa99ac0e74ae0f3",
          "message": "fix(clickhouse): workaround sqlglot's insistence on uppercasing",
          "timestamp": "2023-02-20T07:55:14-05:00",
          "tree_id": "47a304c051ef034ef978a01493e60e66be022f5f",
          "url": "https://github.com/ibis-project/ibis/commit/6151f37ecc5f4b5799f1bc3f2fa99ac0e74ae0f3"
        },
        "date": 1676898353350,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.44395010438525834,
            "unit": "iter/sec",
            "range": "stddev: 0.02226383252937507",
            "extra": "mean: 2.2525053832000084 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0022070025338625,
            "unit": "iter/sec",
            "range": "stddev: 0.054869167113486786",
            "extra": "mean: 997.7978575999941 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 104.18082418461516,
            "unit": "iter/sec",
            "range": "stddev: 0.009973977906101427",
            "extra": "mean: 9.598695420454106 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.05336175121448,
            "unit": "iter/sec",
            "range": "stddev: 0.0020766618398084906",
            "extra": "mean: 36.96398285714373 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9782405.252939504,
            "unit": "iter/sec",
            "range": "stddev: 1.354030880999565e-7",
            "extra": "mean: 102.22434811724536 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 67.8739976199751,
            "unit": "iter/sec",
            "range": "stddev: 0.0009977174620810385",
            "extra": "mean: 14.733182589288115 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 108.61834787816156,
            "unit": "iter/sec",
            "range": "stddev: 0.0007476240049079022",
            "extra": "mean: 9.206547692308037 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 68.24741873816879,
            "unit": "iter/sec",
            "range": "stddev: 0.0016070003182977412",
            "extra": "mean: 14.652568822221687 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.03988015956207,
            "unit": "iter/sec",
            "range": "stddev: 0.0013665326282300098",
            "extra": "mean: 18.85373792308087 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6219.080847775274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000384426018785747",
            "extra": "mean: 160.79546551605387 usec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 247536.86769454362,
            "unit": "iter/sec",
            "range": "stddev: 0.000021933953172712286",
            "extra": "mean: 4.039802269914731 usec\nrounds: 1674"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4290449.9170809835,
            "unit": "iter/sec",
            "range": "stddev: 3.2123406138798893e-7",
            "extra": "mean: 233.0757890958 nsec\nrounds: 57804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 220.23467150862433,
            "unit": "iter/sec",
            "range": "stddev: 0.0005370500391719374",
            "extra": "mean: 4.540611126985246 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 61.47150016047446,
            "unit": "iter/sec",
            "range": "stddev: 0.0012893987368951555",
            "extra": "mean: 16.26770125000121 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2872.484103497097,
            "unit": "iter/sec",
            "range": "stddev: 0.00011861877755453917",
            "extra": "mean: 348.1307342249703 usec\nrounds: 523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5648312127906184,
            "unit": "iter/sec",
            "range": "stddev: 0.014432670938392273",
            "extra": "mean: 1.7704404029999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 215.11202929553505,
            "unit": "iter/sec",
            "range": "stddev: 0.0007458421108013852",
            "extra": "mean: 4.648740487804772 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12688.911367742752,
            "unit": "iter/sec",
            "range": "stddev: 0.00003296946356313291",
            "extra": "mean: 78.80896721701126 usec\nrounds: 4423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.599099098275505,
            "unit": "iter/sec",
            "range": "stddev: 0.009894600338508999",
            "extra": "mean: 277.8473092000013 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 116.35728621759596,
            "unit": "iter/sec",
            "range": "stddev: 0.00020953624291535962",
            "extra": "mean: 8.594219000002568 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3750.254234818974,
            "unit": "iter/sec",
            "range": "stddev: 0.00006848592839096692",
            "extra": "mean: 266.64858897180085 usec\nrounds: 399"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 69.49722491257698,
            "unit": "iter/sec",
            "range": "stddev: 0.001043414967241691",
            "extra": "mean: 14.389063754098606 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 198.80949248141164,
            "unit": "iter/sec",
            "range": "stddev: 0.0004885821060066648",
            "extra": "mean: 5.029940912371165 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3674.4036808903056,
            "unit": "iter/sec",
            "range": "stddev: 0.00008573425765149197",
            "extra": "mean: 272.15300409172806 usec\nrounds: 1955"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 124.50730550490962,
            "unit": "iter/sec",
            "range": "stddev: 0.0005182676934928603",
            "extra": "mean: 8.03165722641526 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 150.9210051188028,
            "unit": "iter/sec",
            "range": "stddev: 0.0007427685409758281",
            "extra": "mean: 6.625982905512818 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 64.69089399884712,
            "unit": "iter/sec",
            "range": "stddev: 0.0012238071127360966",
            "extra": "mean: 15.458126147055898 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 94838.46152559012,
            "unit": "iter/sec",
            "range": "stddev: 0.000030774429715882934",
            "extra": "mean: 10.54424527679808 usec\nrounds: 30488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 50.280170553185705,
            "unit": "iter/sec",
            "range": "stddev: 0.0009095008250371264",
            "extra": "mean: 19.88855624390162 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 176.41629430957022,
            "unit": "iter/sec",
            "range": "stddev: 0.0005376213526994652",
            "extra": "mean: 5.668410641509275 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3009.2938491796226,
            "unit": "iter/sec",
            "range": "stddev: 0.00008265180265698977",
            "extra": "mean: 332.3038726419537 usec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 476148.18474844494,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030839487278915742",
            "extra": "mean: 2.1001865218247393 usec\nrounds: 19231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 98.98389914041113,
            "unit": "iter/sec",
            "range": "stddev: 0.014432014741936611",
            "extra": "mean: 10.102653145452223 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 79.76421023803692,
            "unit": "iter/sec",
            "range": "stddev: 0.0007310154183620948",
            "extra": "mean: 12.536951058823783 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1129834.1428221904,
            "unit": "iter/sec",
            "range": "stddev: 0.000015708870443073257",
            "extra": "mean: 885.0856617787455 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08449533349904721,
            "unit": "iter/sec",
            "range": "stddev: 0.1252368826211068",
            "extra": "mean: 11.834973111400007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 27.91733103376695,
            "unit": "iter/sec",
            "range": "stddev: 0.0019333198852148688",
            "extra": "mean: 35.820043068961944 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 172.22729495196606,
            "unit": "iter/sec",
            "range": "stddev: 0.0005094116477284633",
            "extra": "mean: 5.806280591464312 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 113.92977141614689,
            "unit": "iter/sec",
            "range": "stddev: 0.0012517110996562342",
            "extra": "mean: 8.777337017093965 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3686209.962914989,
            "unit": "iter/sec",
            "range": "stddev: 6.197747458724938e-7",
            "extra": "mean: 271.28134589742655 nsec\nrounds: 59524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 58.398731919484625,
            "unit": "iter/sec",
            "range": "stddev: 0.0007152323885970468",
            "extra": "mean: 17.12365948936559 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.5629163731321256,
            "unit": "iter/sec",
            "range": "stddev: 0.01013293042975225",
            "extra": "mean: 639.829498999984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8274.49867403523,
            "unit": "iter/sec",
            "range": "stddev: 0.00009232043673454702",
            "extra": "mean: 120.85324312612758 usec\nrounds: 3455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.708271017348032,
            "unit": "iter/sec",
            "range": "stddev: 0.0025107315663725834",
            "extra": "mean: 33.66065966666501 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3026.9484899944,
            "unit": "iter/sec",
            "range": "stddev: 0.000056063085198578324",
            "extra": "mean: 330.365714284702 usec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 63.2102911269896,
            "unit": "iter/sec",
            "range": "stddev: 0.0013213123638983752",
            "extra": "mean: 15.82020873770377 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 10.412210602064128,
            "unit": "iter/sec",
            "range": "stddev: 0.0034099563628116453",
            "extra": "mean: 96.04108466666617 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 161.32069347796403,
            "unit": "iter/sec",
            "range": "stddev: 0.0005676307033744891",
            "extra": "mean: 6.198832762497375 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 117.48371826995377,
            "unit": "iter/sec",
            "range": "stddev: 0.0011620727160712755",
            "extra": "mean: 8.511817762715022 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8122.951631220904,
            "unit": "iter/sec",
            "range": "stddev: 0.00010152430737408028",
            "extra": "mean: 123.1079594462262 usec\nrounds: 4192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3546.7556174193687,
            "unit": "iter/sec",
            "range": "stddev: 0.00019942956040575188",
            "extra": "mean: 281.94781593878275 usec\nrounds: 1945"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3642010.0815779422,
            "unit": "iter/sec",
            "range": "stddev: 6.896573550750699e-7",
            "extra": "mean: 274.5736496060452 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 400.6132618292875,
            "unit": "iter/sec",
            "range": "stddev: 0.0003064571434095376",
            "extra": "mean: 2.4961729809786672 msec\nrounds: 368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.46100875324583,
            "unit": "iter/sec",
            "range": "stddev: 0.0023855888894596918",
            "extra": "mean: 24.7151524594596 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.396307096775168,
            "unit": "iter/sec",
            "range": "stddev: 0.003658392936687802",
            "extra": "mean: 35.215846785709864 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 93.43559084778252,
            "unit": "iter/sec",
            "range": "stddev: 0.0009813713266349248",
            "extra": "mean: 10.70255981608889 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.28087138945438,
            "unit": "iter/sec",
            "range": "stddev: 0.0008663231660287296",
            "extra": "mean: 11.327482208330983 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 102.22079476002337,
            "unit": "iter/sec",
            "range": "stddev: 0.0012923075718233644",
            "extra": "mean: 9.782745304882733 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1125.7015252242004,
            "unit": "iter/sec",
            "range": "stddev: 0.00013590033921913422",
            "extra": "mean: 888.3349427823108 usec\nrounds: 769"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1321862.0589076653,
            "unit": "iter/sec",
            "range": "stddev: 0.000005231120245976011",
            "extra": "mean: 756.5085882155969 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.737057362987937,
            "unit": "iter/sec",
            "range": "stddev: 0.0010976683727091092",
            "extra": "mean: 53.37017337500072 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 105.07760051697515,
            "unit": "iter/sec",
            "range": "stddev: 0.001224755469405957",
            "extra": "mean: 9.516776126215893 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3200.582680263063,
            "unit": "iter/sec",
            "range": "stddev: 0.00010315984865909953",
            "extra": "mean: 312.4431079898888 usec\nrounds: 1602"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.728728064640473,
            "unit": "iter/sec",
            "range": "stddev: 0.004479830066388549",
            "extra": "mean: 148.6164978571521 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 178.73760794015678,
            "unit": "iter/sec",
            "range": "stddev: 0.0005225366830219775",
            "extra": "mean: 5.594793460225844 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1463443.2514518548,
            "unit": "iter/sec",
            "range": "stddev: 8.454099422750008e-7",
            "extra": "mean: 683.3199709028133 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 172.06439550591486,
            "unit": "iter/sec",
            "range": "stddev: 0.0005805218243434493",
            "extra": "mean: 5.811777602564059 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 474.231591867839,
            "unit": "iter/sec",
            "range": "stddev: 0.00025358620466881893",
            "extra": "mean: 2.1086743632184772 msec\nrounds: 435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 64.84850021438793,
            "unit": "iter/sec",
            "range": "stddev: 0.0013547986716737172",
            "extra": "mean: 15.420557093749565 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 172.0948365281876,
            "unit": "iter/sec",
            "range": "stddev: 0.0005367104633118857",
            "extra": "mean: 5.810749585367186 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 118.85843578467686,
            "unit": "iter/sec",
            "range": "stddev: 0.0010415483454320116",
            "extra": "mean: 8.41337001785547 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 101.74996071595172,
            "unit": "iter/sec",
            "range": "stddev: 0.0014722999083718183",
            "extra": "mean: 9.828013622448763 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3326.1942650279616,
            "unit": "iter/sec",
            "range": "stddev: 0.00017549986924144794",
            "extra": "mean: 300.6438951910085 usec\nrounds: 2433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4885340429423933,
            "unit": "iter/sec",
            "range": "stddev: 0.02391820293164871",
            "extra": "mean: 2.046940258200016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 68.8268010958014,
            "unit": "iter/sec",
            "range": "stddev: 0.001335910998250711",
            "extra": "mean: 14.529223849995295 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 174.6194769250793,
            "unit": "iter/sec",
            "range": "stddev: 0.0007524807240010851",
            "extra": "mean: 5.726738034091416 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1280746.5485166283,
            "unit": "iter/sec",
            "range": "stddev: 0.000004359441510206693",
            "extra": "mean: 780.7946085493719 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 756.8370141039874,
            "unit": "iter/sec",
            "range": "stddev: 0.00018537913529154042",
            "extra": "mean: 1.3212884430393392 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5464966712246736,
            "unit": "iter/sec",
            "range": "stddev: 0.020681413147882",
            "extra": "mean: 1.829837312199993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 59.41245426443146,
            "unit": "iter/sec",
            "range": "stddev: 0.0015513689505631794",
            "extra": "mean: 16.83148781481447 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 296.77028215367284,
            "unit": "iter/sec",
            "range": "stddev: 0.0006655379624994879",
            "extra": "mean: 3.369609627833903 msec\nrounds: 309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 49637.57480633145,
            "unit": "iter/sec",
            "range": "stddev: 0.00000944776789013284",
            "extra": "mean: 20.146028566094376 usec\nrounds: 11062"
          }
        ]
      }
    ]
  }
}