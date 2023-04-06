window.BENCHMARK_DATA = {
  "lastUpdate": 1680783347691,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "73df8df279127021fa42f996225d1f38696e5c14",
          "message": "refactor(api): remove explicit use of `.projection` in favor of the shorter `.select`",
          "timestamp": "2023-04-06T14:10:34+02:00",
          "tree_id": "41a3cb4545d0f2e2e69b57c6032c6af14668b28e",
          "url": "https://github.com/ibis-project/ibis/commit/73df8df279127021fa42f996225d1f38696e5c14"
        },
        "date": 1680783266052,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.26030728670541,
            "unit": "iter/sec",
            "range": "stddev: 0.00012335601401936984",
            "extra": "mean: 13.287216542851509 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5638239.1071753185,
            "unit": "iter/sec",
            "range": "stddev: 8.395275407850507e-9",
            "extra": "mean: 177.36033910452423 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.22228522436853,
            "unit": "iter/sec",
            "range": "stddev: 0.0055281877620779645",
            "extra": "mean: 6.24132902985151 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2711786.7204936673,
            "unit": "iter/sec",
            "range": "stddev: 1.3581754919592555e-8",
            "extra": "mean: 368.7605638167673 nsec\nrounds: 103083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.56703278755947,
            "unit": "iter/sec",
            "range": "stddev: 0.0005474731007057253",
            "extra": "mean: 10.355500952379142 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6491488.10780495,
            "unit": "iter/sec",
            "range": "stddev: 5.189560402137579e-9",
            "extra": "mean: 154.0478829187835 nsec\nrounds: 57140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5486.6508073260675,
            "unit": "iter/sec",
            "range": "stddev: 0.000022386529854552542",
            "extra": "mean: 182.26055112979796 usec\nrounds: 1506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.19622503218864,
            "unit": "iter/sec",
            "range": "stddev: 0.00004982622461453175",
            "extra": "mean: 3.4459442051290634 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2607919.045281918,
            "unit": "iter/sec",
            "range": "stddev: 1.2696686837276526e-8",
            "extra": "mean: 383.4474853846496 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2147.3738263710275,
            "unit": "iter/sec",
            "range": "stddev: 0.00011211877963922796",
            "extra": "mean: 465.68510229537367 usec\nrounds: 479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 276.1509542066936,
            "unit": "iter/sec",
            "range": "stddev: 0.00021506109100365893",
            "extra": "mean: 3.6212078385632505 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6756.925679860354,
            "unit": "iter/sec",
            "range": "stddev: 0.000030277074348589888",
            "extra": "mean: 147.99630000084107 usec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.323139780766613,
            "unit": "iter/sec",
            "range": "stddev: 0.001069143421122767",
            "extra": "mean: 65.2607764666603 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12057.82635358945,
            "unit": "iter/sec",
            "range": "stddev: 0.000015001141133469024",
            "extra": "mean: 82.93368727293985 usec\nrounds: 4675"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 102.47211728562303,
            "unit": "iter/sec",
            "range": "stddev: 0.0005864141130627384",
            "extra": "mean: 9.758752200002618 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11287.195372304192,
            "unit": "iter/sec",
            "range": "stddev: 0.000002117752644692758",
            "extra": "mean: 88.59596799872331 usec\nrounds: 375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1866857.6842726886,
            "unit": "iter/sec",
            "range": "stddev: 4.1144736513748104e-7",
            "extra": "mean: 535.6594712197311 nsec\nrounds: 144907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.70430092300451,
            "unit": "iter/sec",
            "range": "stddev: 0.0007014934381021597",
            "extra": "mean: 14.991537069765272 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 61.2261075544499,
            "unit": "iter/sec",
            "range": "stddev: 0.00015052722697169203",
            "extra": "mean: 16.332901762710872 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2122.0846145148557,
            "unit": "iter/sec",
            "range": "stddev: 0.00008063363931692486",
            "extra": "mean: 471.2347439683111 usec\nrounds: 1285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17033354459440603,
            "unit": "iter/sec",
            "range": "stddev: 0.082341107835993",
            "extra": "mean: 5.8708342058000085 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 102.37484656486566,
            "unit": "iter/sec",
            "range": "stddev: 0.0006766165254970732",
            "extra": "mean: 9.768024407893892 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 299.45726989456074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000514322120361361",
            "extra": "mean: 3.3393745970906004 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2193.314418415443,
            "unit": "iter/sec",
            "range": "stddev: 0.0000827537942488179",
            "extra": "mean: 455.9309835397191 usec\nrounds: 1458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.97923868235225,
            "unit": "iter/sec",
            "range": "stddev: 0.00011384767514189813",
            "extra": "mean: 10.418919901100137 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.593995946994844,
            "unit": "iter/sec",
            "range": "stddev: 0.0005485443991613321",
            "extra": "mean: 178.76308983334374 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 108.95757948756507,
            "unit": "iter/sec",
            "range": "stddev: 0.00034059000965391264",
            "extra": "mean: 9.177883766352632 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.19200881066729,
            "unit": "iter/sec",
            "range": "stddev: 0.0006123544367329286",
            "extra": "mean: 9.98083591566368 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.08785557719213,
            "unit": "iter/sec",
            "range": "stddev: 0.0007155521126500383",
            "extra": "mean: 10.299949402064247 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 83.34907804728608,
            "unit": "iter/sec",
            "range": "stddev: 0.015544678071244697",
            "extra": "mean: 11.997733189474204 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.53137558030506,
            "unit": "iter/sec",
            "range": "stddev: 0.02367702436781024",
            "extra": "mean: 25.952875674418962 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 243.38983771131808,
            "unit": "iter/sec",
            "range": "stddev: 0.003731717218635631",
            "extra": "mean: 4.108634975902686 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.54176397948404,
            "unit": "iter/sec",
            "range": "stddev: 0.0011635470380768436",
            "extra": "mean: 22.96645584848558 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.66352159356472,
            "unit": "iter/sec",
            "range": "stddev: 0.00008794456384606443",
            "extra": "mean: 9.55442722329998 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.82132268718233,
            "unit": "iter/sec",
            "range": "stddev: 0.000733319008104087",
            "extra": "mean: 9.821125611108213 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.65385690970903,
            "unit": "iter/sec",
            "range": "stddev: 0.0008216701189113646",
            "extra": "mean: 10.454361510419119 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 491705.53927216993,
            "unit": "iter/sec",
            "range": "stddev: 2.713756399592162e-7",
            "extra": "mean: 2.0337375118454335 usec\nrounds: 2122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.79146381080167,
            "unit": "iter/sec",
            "range": "stddev: 0.00015939847055938727",
            "extra": "mean: 6.180795800014494 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 782434.1888989718,
            "unit": "iter/sec",
            "range": "stddev: 5.02937092829139e-7",
            "extra": "mean: 1.278062761300325 usec\nrounds: 24155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2116.2737391508026,
            "unit": "iter/sec",
            "range": "stddev: 0.00008570940152383092",
            "extra": "mean: 472.5286627623467 usec\nrounds: 1195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2180.7556988049546,
            "unit": "iter/sec",
            "range": "stddev: 0.00008404965778965956",
            "extra": "mean: 458.55663729229093 usec\nrounds: 1861"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.60277192097557,
            "unit": "iter/sec",
            "range": "stddev: 0.015572347146553256",
            "extra": "mean: 12.10613126829061 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 279.49483475480287,
            "unit": "iter/sec",
            "range": "stddev: 0.00024025432875088653",
            "extra": "mean: 3.577883651686396 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9329045381912835,
            "unit": "iter/sec",
            "range": "stddev: 0.003629605426658792",
            "extra": "mean: 1.0719210369999927 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13747.288536490845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014646928340129674",
            "extra": "mean: 72.74161718113335 usec\nrounds: 5995"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.08548547137167,
            "unit": "iter/sec",
            "range": "stddev: 0.000584331857602979",
            "extra": "mean: 11.352608147059668 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.1406153315316,
            "unit": "iter/sec",
            "range": "stddev: 0.00026424600000836564",
            "extra": "mean: 3.7715836132823366 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7865069990175583,
            "unit": "iter/sec",
            "range": "stddev: 0.003133153613623737",
            "extra": "mean: 1.2714445024000043 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 271.147268462272,
            "unit": "iter/sec",
            "range": "stddev: 0.0002644257800084208",
            "extra": "mean: 3.6880327272747064 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.07081744897623,
            "unit": "iter/sec",
            "range": "stddev: 0.0002472980475520873",
            "extra": "mean: 9.992923266664397 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 528.8669137032532,
            "unit": "iter/sec",
            "range": "stddev: 0.00006637542705189004",
            "extra": "mean: 1.8908348661816634 msec\nrounds: 411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2113.323457949651,
            "unit": "iter/sec",
            "range": "stddev: 0.00008166316886995351",
            "extra": "mean: 473.1883310329604 usec\nrounds: 1305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.6229763344705,
            "unit": "iter/sec",
            "range": "stddev: 0.017280760729784867",
            "extra": "mean: 11.679108141413852 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1158.3632376585147,
            "unit": "iter/sec",
            "range": "stddev: 0.00009633084553207486",
            "extra": "mean: 863.287065308956 usec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1962636.6630480445,
            "unit": "iter/sec",
            "range": "stddev: 1.1429400053363353e-7",
            "extra": "mean: 509.5186586634759 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11759667.291367184,
            "unit": "iter/sec",
            "range": "stddev: 2.920007960150276e-9",
            "extra": "mean: 85.03641941757122 nsec\nrounds: 116266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6687634483748442,
            "unit": "iter/sec",
            "range": "stddev: 0.06813457244403173",
            "extra": "mean: 1.4952970327999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.999398573246808,
            "unit": "iter/sec",
            "range": "stddev: 0.0004332483804061295",
            "extra": "mean: 38.462428166665084 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 659.841009534415,
            "unit": "iter/sec",
            "range": "stddev: 0.0000500594264924897",
            "extra": "mean: 1.5155165949833913 msec\nrounds: 558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.56579677550287,
            "unit": "iter/sec",
            "range": "stddev: 0.005106364584412484",
            "extra": "mean: 389.74248060001173 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.62243111724882,
            "unit": "iter/sec",
            "range": "stddev: 0.000056726376416895794",
            "extra": "mean: 8.430108796299915 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.27029339480866,
            "unit": "iter/sec",
            "range": "stddev: 0.00004165361468414939",
            "extra": "mean: 9.151618147366568 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9302546793362089,
            "unit": "iter/sec",
            "range": "stddev: 0.005241926473070719",
            "extra": "mean: 1.0749744367999938 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.4686807162833,
            "unit": "iter/sec",
            "range": "stddev: 0.00005345386848272271",
            "extra": "mean: 6.11737976729379 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.7093008521646,
            "unit": "iter/sec",
            "range": "stddev: 0.00023950426467475531",
            "extra": "mean: 3.5879678106990363 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1765.874987774429,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066229799957518556",
            "extra": "mean: 566.2915024694482 usec\nrounds: 1417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149819.5278443471,
            "unit": "iter/sec",
            "range": "stddev: 2.9066909737527165e-7",
            "extra": "mean: 6.674697313416553 usec\nrounds: 43289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.81423714093608,
            "unit": "iter/sec",
            "range": "stddev: 0.00029350638699267685",
            "extra": "mean: 18.934288444448715 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2146.7150418209576,
            "unit": "iter/sec",
            "range": "stddev: 0.00008627200941677405",
            "extra": "mean: 465.82801187797475 usec\nrounds: 1347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.465857266188706,
            "unit": "iter/sec",
            "range": "stddev: 0.0002498082182424609",
            "extra": "mean: 95.54879018182564 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.24711361420786,
            "unit": "iter/sec",
            "range": "stddev: 0.0006656656139547682",
            "extra": "mean: 9.975349553189245 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 81.46536324505514,
            "unit": "iter/sec",
            "range": "stddev: 0.018021236992163688",
            "extra": "mean: 12.275155479168612 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2146.9067854028626,
            "unit": "iter/sec",
            "range": "stddev: 0.00008357763380208807",
            "extra": "mean: 465.78640805420537 usec\nrounds: 1316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 262.6874171862321,
            "unit": "iter/sec",
            "range": "stddev: 0.0003776117975913141",
            "extra": "mean: 3.8068058634534845 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.30365153980285,
            "unit": "iter/sec",
            "range": "stddev: 0.0007715033866078985",
            "extra": "mean: 23.092740783784553 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.88226645569358,
            "unit": "iter/sec",
            "range": "stddev: 0.0001397686653445123",
            "extra": "mean: 7.200343323307022 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72272.85479085807,
            "unit": "iter/sec",
            "range": "stddev: 5.03979933591691e-7",
            "extra": "mean: 13.836453574357655 usec\nrounds: 13193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.21899513280948,
            "unit": "iter/sec",
            "range": "stddev: 0.00002996526657948112",
            "extra": "mean: 5.019601666665115 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6192140.90529071,
            "unit": "iter/sec",
            "range": "stddev: 8.255884679059737e-9",
            "extra": "mean: 161.49503302565356 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 94.37121528083807,
            "unit": "iter/sec",
            "range": "stddev: 0.0008961796635702333",
            "extra": "mean: 10.596451439394025 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 240.67590300204105,
            "unit": "iter/sec",
            "range": "stddev: 0.0005157719001635228",
            "extra": "mean: 4.154965193966758 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.50422970342762,
            "unit": "iter/sec",
            "range": "stddev: 0.0003119519823134318",
            "extra": "mean: 21.503420363638334 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.14996545600764,
            "unit": "iter/sec",
            "range": "stddev: 0.00005836314573706156",
            "extra": "mean: 6.323112351726493 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 743.5475283453786,
            "unit": "iter/sec",
            "range": "stddev: 0.00001537049388709829",
            "extra": "mean: 1.3449039393961901 msec\nrounds: 660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.26380066262492,
            "unit": "iter/sec",
            "range": "stddev: 0.001233941519324291",
            "extra": "mean: 10.28131733684416 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 94.94683560976944,
            "unit": "iter/sec",
            "range": "stddev: 0.0007289677983826274",
            "extra": "mean: 10.532209879115825 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 274.41834583196305,
            "unit": "iter/sec",
            "range": "stddev: 0.00026060036241969483",
            "extra": "mean: 3.6440712335331202 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6347781687518983,
            "unit": "iter/sec",
            "range": "stddev: 0.001153607624286059",
            "extra": "mean: 611.7037889999892 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}