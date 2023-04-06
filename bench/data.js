window.BENCHMARK_DATA = {
  "lastUpdate": 1680784372477,
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
      },
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
          "id": "954a6b7a88e2727d598d4d2e5c3ac4d7cccd5f7e",
          "message": "depr(api): deprecate `Table.set_column` in favor of `Table.mutate`",
          "timestamp": "2023-04-06T14:11:20+02:00",
          "tree_id": "647a3cd4a255ea42b773161f820aac9039a04e2e",
          "url": "https://github.com/ibis-project/ibis/commit/954a6b7a88e2727d598d4d2e5c3ac4d7cccd5f7e"
        },
        "date": 1680784113129,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 406911.5468496442,
            "unit": "iter/sec",
            "range": "stddev: 4.159544684516346e-7",
            "extra": "mean: 2.457536552457443 usec\nrounds: 1491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1629900.4747506287,
            "unit": "iter/sec",
            "range": "stddev: 9.429775423270327e-8",
            "extra": "mean: 613.5343939653726 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 65.72993310223065,
            "unit": "iter/sec",
            "range": "stddev: 0.0001231485705066426",
            "extra": "mean: 15.213768716981448 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4666.408107229333,
            "unit": "iter/sec",
            "range": "stddev: 0.000031360290661454694",
            "extra": "mean: 214.29758757078523 usec\nrounds: 531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 174.1445205835714,
            "unit": "iter/sec",
            "range": "stddev: 0.000026713092436488514",
            "extra": "mean: 5.742356961039743 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 72.14598785241543,
            "unit": "iter/sec",
            "range": "stddev: 0.01522764201908566",
            "extra": "mean: 13.860784636363118 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.50177908439854,
            "unit": "iter/sec",
            "range": "stddev: 0.0008954318582110123",
            "extra": "mean: 26.665401600000866 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 138.3807686007122,
            "unit": "iter/sec",
            "range": "stddev: 0.00020081684297307918",
            "extra": "mean: 7.22643767708379 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6844179639556978,
            "unit": "iter/sec",
            "range": "stddev: 0.0033368769316545455",
            "extra": "mean: 1.4610954893999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.05690048287016,
            "unit": "iter/sec",
            "range": "stddev: 0.00013009009526613878",
            "extra": "mean: 7.243390200000022 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1003.048334277773,
            "unit": "iter/sec",
            "range": "stddev: 0.000017460324676697673",
            "extra": "mean: 996.960929824017 usec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7443953356353805,
            "unit": "iter/sec",
            "range": "stddev: 0.006451165124269139",
            "extra": "mean: 1.3433722004000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.844460497181192,
            "unit": "iter/sec",
            "range": "stddev: 0.000977568259198692",
            "extra": "mean: 47.97437669999809 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 243.63120140778346,
            "unit": "iter/sec",
            "range": "stddev: 0.0002836085319537956",
            "extra": "mean: 4.104564580487483 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9734534.530966409,
            "unit": "iter/sec",
            "range": "stddev: 5.247810126844632e-9",
            "extra": "mean: 102.72704840885257 nsec\nrounds: 95230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 213.78172982260614,
            "unit": "iter/sec",
            "range": "stddev: 0.0006298697475300832",
            "extra": "mean: 4.677668203123764 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1806.686113766085,
            "unit": "iter/sec",
            "range": "stddev: 0.00014472801650405645",
            "extra": "mean: 553.4995771431893 usec\nrounds: 350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.61617344172265,
            "unit": "iter/sec",
            "range": "stddev: 0.025009795072236492",
            "extra": "mean: 30.65963583333166 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 142409.0390967813,
            "unit": "iter/sec",
            "range": "stddev: 5.246543285129868e-7",
            "extra": "mean: 7.022026174338549 usec\nrounds: 32360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 139.39873536327192,
            "unit": "iter/sec",
            "range": "stddev: 0.004740721058893253",
            "extra": "mean: 7.173666227272497 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 84.22136849603774,
            "unit": "iter/sec",
            "range": "stddev: 0.000750708957424841",
            "extra": "mean: 11.87347127999999 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1604171.0886252476,
            "unit": "iter/sec",
            "range": "stddev: 1.7865586424360031e-7",
            "extra": "mean: 623.3749050152662 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 85.28522758561401,
            "unit": "iter/sec",
            "range": "stddev: 0.0009165447722402581",
            "extra": "mean: 11.72536004545623 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.80752430663834,
            "unit": "iter/sec",
            "range": "stddev: 0.0005029307050298941",
            "extra": "mean: 22.827128805552377 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.58335543640878,
            "unit": "iter/sec",
            "range": "stddev: 0.00020472606588556194",
            "extra": "mean: 11.549563942857942 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.57753959671077,
            "unit": "iter/sec",
            "range": "stddev: 0.0930228851345354",
            "extra": "mean: 1.731483011200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 230.20169076961457,
            "unit": "iter/sec",
            "range": "stddev: 0.0004146644576836345",
            "extra": "mean: 4.344016747473841 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 83.75712292533404,
            "unit": "iter/sec",
            "range": "stddev: 0.0008977553303887932",
            "extra": "mean: 11.939283073171676 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.28290127396487,
            "unit": "iter/sec",
            "range": "stddev: 0.0009552180520829344",
            "extra": "mean: 12.302710463415787 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14649312116436244,
            "unit": "iter/sec",
            "range": "stddev: 0.1395242220492147",
            "extra": "mean: 6.826259090200006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 578.2039769646466,
            "unit": "iter/sec",
            "range": "stddev: 0.000023140457008878256",
            "extra": "mean: 1.7294934656963514 msec\nrounds: 481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 664194.5590665597,
            "unit": "iter/sec",
            "range": "stddev: 2.1077998867167396e-7",
            "extra": "mean: 1.5055829445597564 usec\nrounds: 22726"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1621038.0515297954,
            "unit": "iter/sec",
            "range": "stddev: 1.3933248959445875e-7",
            "extra": "mean: 616.8886652946156 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 85.99207920303351,
            "unit": "iter/sec",
            "range": "stddev: 0.0014560323831478228",
            "extra": "mean: 11.628978032254896 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1759.9718546856063,
            "unit": "iter/sec",
            "range": "stddev: 0.0001594127109094233",
            "extra": "mean: 568.1909044952515 usec\nrounds: 534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7161.221041592021,
            "unit": "iter/sec",
            "range": "stddev: 0.000019848782447279007",
            "extra": "mean: 139.6409905785688 usec\nrounds: 1486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5101461.655920608,
            "unit": "iter/sec",
            "range": "stddev: 9.619225621661861e-9",
            "extra": "mean: 196.02225155207236 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 61550.553528109485,
            "unit": "iter/sec",
            "range": "stddev: 6.577426011212033e-7",
            "extra": "mean: 16.246807586276386 usec\nrounds: 11600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 73.44314600765601,
            "unit": "iter/sec",
            "range": "stddev: 0.016625439196379724",
            "extra": "mean: 13.615974455883956 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1832.6324899240633,
            "unit": "iter/sec",
            "range": "stddev: 0.00009878784816368153",
            "extra": "mean: 545.663140590417 usec\nrounds: 1323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.06697330927263,
            "unit": "iter/sec",
            "range": "stddev: 0.0007219389383150067",
            "extra": "mean: 13.146309843750537 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10341.325358660022,
            "unit": "iter/sec",
            "range": "stddev: 0.000024291208478346862",
            "extra": "mean: 96.69940412063151 usec\nrounds: 4902"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2163993392509265,
            "unit": "iter/sec",
            "range": "stddev: 0.0017005979282945552",
            "extra": "mean: 451.1822316000007 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 639.1639060109643,
            "unit": "iter/sec",
            "range": "stddev: 0.000013011261521463557",
            "extra": "mean: 1.5645439152548861 msec\nrounds: 531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.16653302049585,
            "unit": "iter/sec",
            "range": "stddev: 0.0001757895110946986",
            "extra": "mean: 11.741701400001148 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1518.4054861151153,
            "unit": "iter/sec",
            "range": "stddev: 0.00000695604224566534",
            "extra": "mean: 658.5856078263582 usec\nrounds: 1150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 70.55365538733638,
            "unit": "iter/sec",
            "range": "stddev: 0.017323131354396424",
            "extra": "mean: 14.17361006329219 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.28762917449784,
            "unit": "iter/sec",
            "range": "stddev: 0.0010707258635452106",
            "extra": "mean: 11.86413723809616 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 230.78107987780413,
            "unit": "iter/sec",
            "range": "stddev: 0.00036314808388735733",
            "extra": "mean: 4.333110844829603 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 242.18979334063727,
            "unit": "iter/sec",
            "range": "stddev: 0.0003039224309615796",
            "extra": "mean: 4.128993159482618 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.59293894343658,
            "unit": "iter/sec",
            "range": "stddev: 0.0007970170844969073",
            "extra": "mean: 12.107572545455076 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5700630.699690708,
            "unit": "iter/sec",
            "range": "stddev: 1.0393769187590844e-8",
            "extra": "mean: 175.4191865216154 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 238.11786511719808,
            "unit": "iter/sec",
            "range": "stddev: 0.0004056928366777322",
            "extra": "mean: 4.199600897260753 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 94.36165454627141,
            "unit": "iter/sec",
            "range": "stddev: 0.0003081602242952743",
            "extra": "mean: 10.597525073170877 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7390982386735818,
            "unit": "iter/sec",
            "range": "stddev: 0.010023037450220316",
            "extra": "mean: 1.3530001124000024 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.867833671894703,
            "unit": "iter/sec",
            "range": "stddev: 0.0005772249682529248",
            "extra": "mean: 205.43019080000136 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1853.1884263061045,
            "unit": "iter/sec",
            "range": "stddev: 0.00009554844192644993",
            "extra": "mean: 539.6105359848727 usec\nrounds: 1056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.80521328517324,
            "unit": "iter/sec",
            "range": "stddev: 0.00007956190654557115",
            "extra": "mean: 7.204340358207692 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11974.907713337963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018282871321281259",
            "extra": "mean: 83.50795045260966 usec\nrounds: 6297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 452.9599256602894,
            "unit": "iter/sec",
            "range": "stddev: 0.00003777826111680345",
            "extra": "mean: 2.207700821529142 msec\nrounds: 353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4618629.11580065,
            "unit": "iter/sec",
            "range": "stddev: 1.059048769154757e-8",
            "extra": "mean: 216.51446239298653 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.66700861610395,
            "unit": "iter/sec",
            "range": "stddev: 0.00045133906071656186",
            "extra": "mean: 20.547800829268542 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 81.34469427244038,
            "unit": "iter/sec",
            "range": "stddev: 0.0009504406013909174",
            "extra": "mean: 12.293364784810564 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 85.07845133712422,
            "unit": "iter/sec",
            "range": "stddev: 0.0009219537679163491",
            "extra": "mean: 11.753857578313104 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 116.09214075894457,
            "unit": "iter/sec",
            "range": "stddev: 0.0005004481012411319",
            "extra": "mean: 8.613847530612901 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1791.7462088955413,
            "unit": "iter/sec",
            "range": "stddev: 0.00011184401033179493",
            "extra": "mean: 558.1147570092612 usec\nrounds: 1177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3972291444882001,
            "unit": "iter/sec",
            "range": "stddev: 0.0032267011637089485",
            "extra": "mean: 715.70221959999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 194.40664312601797,
            "unit": "iter/sec",
            "range": "stddev: 0.004048235281519395",
            "extra": "mean: 5.143857143563667 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.16107468372839,
            "unit": "iter/sec",
            "range": "stddev: 0.0010805360661846214",
            "extra": "mean: 12.47488265277694 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 81.37310699754,
            "unit": "iter/sec",
            "range": "stddev: 0.0009159896705630048",
            "extra": "mean: 12.289072359375819 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 234.5737573078492,
            "unit": "iter/sec",
            "range": "stddev: 0.00032538575052288183",
            "extra": "mean: 4.2630514661008005 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.287137716774383,
            "unit": "iter/sec",
            "range": "stddev: 0.00008645871825584303",
            "extra": "mean: 75.26075376922957 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.123772304970162,
            "unit": "iter/sec",
            "range": "stddev: 0.00021283745939394336",
            "extra": "mean: 109.60378740000465 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1893.1102889030685,
            "unit": "iter/sec",
            "range": "stddev: 0.00009665320594966269",
            "extra": "mean: 528.2312424488662 usec\nrounds: 1225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 236.3149172115642,
            "unit": "iter/sec",
            "range": "stddev: 0.0002957407061773734",
            "extra": "mean: 4.231641454545742 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.917061526133814,
            "unit": "iter/sec",
            "range": "stddev: 0.0006336096049996356",
            "extra": "mean: 18.209277266667335 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.13369220291237,
            "unit": "iter/sec",
            "range": "stddev: 0.0003810030512003099",
            "extra": "mean: 24.91672071794663 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10998.721872649006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019074642740934177",
            "extra": "mean: 90.91965517254718 usec\nrounds: 5394"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.29438622104945,
            "unit": "iter/sec",
            "range": "stddev: 0.0012913641679811478",
            "extra": "mean: 27.55247034374797 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 248.6372430637963,
            "unit": "iter/sec",
            "range": "stddev: 0.0004114137392044552",
            "extra": "mean: 4.02192361722502 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 251.21065003941993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000428340624194412",
            "extra": "mean: 3.9807229504126522 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 85.48996860039667,
            "unit": "iter/sec",
            "range": "stddev: 0.0009288003903325063",
            "extra": "mean: 11.697278831324311 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.52700981807011,
            "unit": "iter/sec",
            "range": "stddev: 0.0001237802590144781",
            "extra": "mean: 9.849595706521209 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.81633130245115,
            "unit": "iter/sec",
            "range": "stddev: 0.001010188084300099",
            "extra": "mean: 11.790182204816732 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 82.65939420248014,
            "unit": "iter/sec",
            "range": "stddev: 0.00022784622324426362",
            "extra": "mean: 12.097838481013154 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1521178.082616587,
            "unit": "iter/sec",
            "range": "stddev: 1.1550079507141791e-7",
            "extra": "mean: 657.3852275598754 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1794.4914056945381,
            "unit": "iter/sec",
            "range": "stddev: 0.00011214716540514788",
            "extra": "mean: 557.2609580779581 usec\nrounds: 1145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1783.7559632345349,
            "unit": "iter/sec",
            "range": "stddev: 0.00010638160541096786",
            "extra": "mean: 560.6148041611432 usec\nrounds: 1394"
          }
        ]
      },
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
          "id": "3b0cb7c97698ae2e80a259b6c0d815d6a10d9261",
          "message": "test(duckdb): regenerate SQL snapshot for pivot/distinct test case",
          "timestamp": "2023-04-06T14:13:43+02:00",
          "tree_id": "2a56d09dc417380c1053786c060e66d131bce573",
          "url": "https://github.com/ibis-project/ibis/commit/3b0cb7c97698ae2e80a259b6c0d815d6a10d9261"
        },
        "date": 1680784274035,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7788826383086345,
            "unit": "iter/sec",
            "range": "stddev: 0.014708234767390662",
            "extra": "mean: 1.2838904744000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.002132478399396,
            "unit": "iter/sec",
            "range": "stddev: 0.016831536853058347",
            "extra": "mean: 28.569687878792028 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5116061.567956871,
            "unit": "iter/sec",
            "range": "stddev: 2.9261851767079373e-8",
            "extra": "mean: 195.46285491619153 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 85.69397673149987,
            "unit": "iter/sec",
            "range": "stddev: 0.0008908699231787908",
            "extra": "mean: 11.669431599997324 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 86.54443780520133,
            "unit": "iter/sec",
            "range": "stddev: 0.0008903134116346606",
            "extra": "mean: 11.554757594599568 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.972483573721026,
            "unit": "iter/sec",
            "range": "stddev: 0.002439070447830719",
            "extra": "mean: 201.10674780000863 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 89.96248978001562,
            "unit": "iter/sec",
            "range": "stddev: 0.00037382290144176157",
            "extra": "mean: 11.115743933335883 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1708.8653384100828,
            "unit": "iter/sec",
            "range": "stddev: 0.00017158494431869327",
            "extra": "mean: 585.183617177462 usec\nrounds: 943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 77.80202869711049,
            "unit": "iter/sec",
            "range": "stddev: 0.00094019321813732",
            "extra": "mean: 12.853135281254424 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11584.289343918801,
            "unit": "iter/sec",
            "range": "stddev: 0.00002648982003972504",
            "extra": "mean: 86.32381066387576 usec\nrounds: 5889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1691.5253622403213,
            "unit": "iter/sec",
            "range": "stddev: 0.00018696187093616368",
            "extra": "mean: 591.182386219478 usec\nrounds: 1103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 944.8422852143617,
            "unit": "iter/sec",
            "range": "stddev: 0.00014000018365164618",
            "extra": "mean: 1.0583776950384098 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 200.19948761160737,
            "unit": "iter/sec",
            "range": "stddev: 0.008977306000750966",
            "extra": "mean: 4.9950177791664885 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1583.1114880926723,
            "unit": "iter/sec",
            "range": "stddev: 0.00028017637502339356",
            "extra": "mean: 631.6674520534222 usec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.79398581755699,
            "unit": "iter/sec",
            "range": "stddev: 0.002313128359773355",
            "extra": "mean: 27.937654249991322 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 218.2625464475456,
            "unit": "iter/sec",
            "range": "stddev: 0.0009352312060643368",
            "extra": "mean: 4.581638106381789 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1655.5399639917973,
            "unit": "iter/sec",
            "range": "stddev: 0.00015115254956671204",
            "extra": "mean: 604.03253424872 usec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7021.147084534944,
            "unit": "iter/sec",
            "range": "stddev: 0.000033855451053384584",
            "extra": "mean: 142.4268695641827 usec\nrounds: 1311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1774.5486225317095,
            "unit": "iter/sec",
            "range": "stddev: 0.00017936977206140322",
            "extra": "mean: 563.5235841401302 usec\nrounds: 1034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 137.31969352075004,
            "unit": "iter/sec",
            "range": "stddev: 0.0009553305435679623",
            "extra": "mean: 7.282276666666843 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8099282740430722,
            "unit": "iter/sec",
            "range": "stddev: 0.05309105380412919",
            "extra": "mean: 1.2346772326000064 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 228.31656113336004,
            "unit": "iter/sec",
            "range": "stddev: 0.0005191881321013374",
            "extra": "mean: 4.379883767677713 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9786550.963150248,
            "unit": "iter/sec",
            "range": "stddev: 1.7567315830683794e-8",
            "extra": "mean: 102.18104455444487 nsec\nrounds: 101000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.5164352993826,
            "unit": "iter/sec",
            "range": "stddev: 0.0011308509987556154",
            "extra": "mean: 19.795537711114424 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 89.11751666876464,
            "unit": "iter/sec",
            "range": "stddev: 0.0010588327089363508",
            "extra": "mean: 11.221138530114544 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 63306.59575300706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024153868710805936",
            "extra": "mean: 15.79614237830029 usec\nrounds: 11933"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4934857152021845,
            "unit": "iter/sec",
            "range": "stddev: 0.006675379058846965",
            "extra": "mean: 669.5745328000157 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.11824229036435,
            "unit": "iter/sec",
            "range": "stddev: 0.0009403919329795172",
            "extra": "mean: 11.348387961539594 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1573.6222720018459,
            "unit": "iter/sec",
            "range": "stddev: 0.0000631504342151592",
            "extra": "mean: 635.4765166915654 usec\nrounds: 1318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.87945701060682,
            "unit": "iter/sec",
            "range": "stddev: 0.03149392642222971",
            "extra": "mean: 30.414127571431695 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.41027186176643,
            "unit": "iter/sec",
            "range": "stddev: 0.0008505985246402951",
            "extra": "mean: 11.98893107143054 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 84.91299166333236,
            "unit": "iter/sec",
            "range": "stddev: 0.0004560922082122281",
            "extra": "mean: 11.7767608985543 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.263124930583192,
            "unit": "iter/sec",
            "range": "stddev: 0.0012847385649433492",
            "extra": "mean: 44.91732419047269 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1577028.7614772818,
            "unit": "iter/sec",
            "range": "stddev: 2.731573643006917e-7",
            "extra": "mean: 634.1038441576994 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1687339.6062843897,
            "unit": "iter/sec",
            "range": "stddev: 3.8438513712851507e-7",
            "extra": "mean: 592.6489227631256 nsec\nrounds: 99001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 449.66449026613844,
            "unit": "iter/sec",
            "range": "stddev: 0.00016114266463975813",
            "extra": "mean: 2.2238802966365876 msec\nrounds: 327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 583.5101686609435,
            "unit": "iter/sec",
            "range": "stddev: 0.0001529004694293957",
            "extra": "mean: 1.7137661924467056 msec\nrounds: 556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1709519.640236794,
            "unit": "iter/sec",
            "range": "stddev: 2.848558224517172e-7",
            "extra": "mean: 584.9596439041115 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 240.86576662700523,
            "unit": "iter/sec",
            "range": "stddev: 0.00037195241741557784",
            "extra": "mean: 4.15169002222121 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.287172678449048,
            "unit": "iter/sec",
            "range": "stddev: 0.0029876437736393786",
            "extra": "mean: 107.67539644444292 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4868.508987934141,
            "unit": "iter/sec",
            "range": "stddev: 0.00003195324483727254",
            "extra": "mean: 205.40169536060174 usec\nrounds: 1940"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.95488923351033,
            "unit": "iter/sec",
            "range": "stddev: 0.0005428441654054825",
            "extra": "mean: 11.369464605260461 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 86.5661152704913,
            "unit": "iter/sec",
            "range": "stddev: 0.0009068548136172341",
            "extra": "mean: 11.551864108436902 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.21636873841436,
            "unit": "iter/sec",
            "range": "stddev: 0.0005833104064450082",
            "extra": "mean: 8.318334770000888 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.23487782099677,
            "unit": "iter/sec",
            "range": "stddev: 0.0010331267324130843",
            "extra": "mean: 11.871567049993814 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 139.03661007626377,
            "unit": "iter/sec",
            "range": "stddev: 0.0003200053359610294",
            "extra": "mean: 7.192350269842485 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.01201425266511,
            "unit": "iter/sec",
            "range": "stddev: 0.001031427792465938",
            "extra": "mean: 13.15581503571244 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.83836011923654,
            "unit": "iter/sec",
            "range": "stddev: 0.0006590215088932822",
            "extra": "mean: 18.23541035555536 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.00991662137716,
            "unit": "iter/sec",
            "range": "stddev: 0.00036197890188759043",
            "extra": "mean: 9.707803217389214 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147099.23503329762,
            "unit": "iter/sec",
            "range": "stddev: 8.351384507885379e-7",
            "extra": "mean: 6.798131885414892 usec\nrounds: 33332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 646.9207610678261,
            "unit": "iter/sec",
            "range": "stddev: 0.00005679658295088008",
            "extra": "mean: 1.5457843683195005 msec\nrounds: 524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2111190838120556,
            "unit": "iter/sec",
            "range": "stddev: 0.0030625532451250517",
            "extra": "mean: 452.25967579998496 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 234.24942170799966,
            "unit": "iter/sec",
            "range": "stddev: 0.00037784670994415754",
            "extra": "mean: 4.268953975248383 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 83.6237445770261,
            "unit": "iter/sec",
            "range": "stddev: 0.001000621307849326",
            "extra": "mean: 11.958326012044305 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 239.15587048561147,
            "unit": "iter/sec",
            "range": "stddev: 0.00036810885011194733",
            "extra": "mean: 4.181373419642499 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.69517192477407,
            "unit": "iter/sec",
            "range": "stddev: 0.02000195036475099",
            "extra": "mean: 1.4384930754000151 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 85.18659908408198,
            "unit": "iter/sec",
            "range": "stddev: 0.0009578910825845551",
            "extra": "mean: 11.738935592592059 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1861.052111538764,
            "unit": "iter/sec",
            "range": "stddev: 0.00012476025723692508",
            "extra": "mean: 537.3304668901374 usec\nrounds: 1193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.16665409239172,
            "unit": "iter/sec",
            "range": "stddev: 0.0011881882050321633",
            "extra": "mean: 28.43602912499854 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11179.223895395544,
            "unit": "iter/sec",
            "range": "stddev: 0.000005918175288382081",
            "extra": "mean: 89.45164792807094 usec\nrounds: 4394"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 65.79541848079445,
            "unit": "iter/sec",
            "range": "stddev: 0.0005907205584436482",
            "extra": "mean: 15.19862663829546 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 140.53368137584528,
            "unit": "iter/sec",
            "range": "stddev: 0.00017172086983020232",
            "extra": "mean: 7.1157319029136215 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 97.49532346190892,
            "unit": "iter/sec",
            "range": "stddev: 0.0002706391692501183",
            "extra": "mean: 10.256902223527637 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 235.99273043426226,
            "unit": "iter/sec",
            "range": "stddev: 0.00030983572007444083",
            "extra": "mean: 4.237418661836951 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.78319325807846,
            "unit": "iter/sec",
            "range": "stddev: 0.0010168411733154582",
            "extra": "mean: 12.378812469139408 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10470.12781331562,
            "unit": "iter/sec",
            "range": "stddev: 0.000033016644501240304",
            "extra": "mean: 95.50981781981952 usec\nrounds: 4523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.49563744747228,
            "unit": "iter/sec",
            "range": "stddev: 0.0011837873595871287",
            "extra": "mean: 74.09801900000649 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 405491.6699232549,
            "unit": "iter/sec",
            "range": "stddev: 3.216124003529023e-7",
            "extra": "mean: 2.4661419066617674 usec\nrounds: 1804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.67750747636434,
            "unit": "iter/sec",
            "range": "stddev: 0.00038660812231781043",
            "extra": "mean: 12.095188044775995 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1882.4557948933839,
            "unit": "iter/sec",
            "range": "stddev: 0.00009702236446472846",
            "extra": "mean: 531.2209735350714 usec\nrounds: 1058"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14648443179132736,
            "unit": "iter/sec",
            "range": "stddev: 0.12835942779224815",
            "extra": "mean: 6.82666402000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 242.56243577014394,
            "unit": "iter/sec",
            "range": "stddev: 0.0003191070320510826",
            "extra": "mean: 4.122649893521089 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4631842.078062298,
            "unit": "iter/sec",
            "range": "stddev: 3.2877819649865055e-8",
            "extra": "mean: 215.89682531206444 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 681931.8585870308,
            "unit": "iter/sec",
            "range": "stddev: 5.669703714741813e-7",
            "extra": "mean: 1.4664221760690421 usec\nrounds: 20283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 116.2319496372165,
            "unit": "iter/sec",
            "range": "stddev: 0.0149175237630975",
            "extra": "mean: 8.603486417643367 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 252.76460508635043,
            "unit": "iter/sec",
            "range": "stddev: 0.000050203605610750113",
            "extra": "mean: 3.9562501231466967 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1844.2077161932418,
            "unit": "iter/sec",
            "range": "stddev: 0.00009641929325975699",
            "extra": "mean: 542.238269159924 usec\nrounds: 1096"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.70674940809178,
            "unit": "iter/sec",
            "range": "stddev: 0.0009681253620670629",
            "extra": "mean: 12.390537437501337 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.4331194435724,
            "unit": "iter/sec",
            "range": "stddev: 0.0009182431209970939",
            "extra": "mean: 11.843693642851978 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 83.056755807277,
            "unit": "iter/sec",
            "range": "stddev: 0.0008367696187889788",
            "extra": "mean: 12.039959787502141 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1686336.0425080885,
            "unit": "iter/sec",
            "range": "stddev: 2.2683533664726063e-7",
            "extra": "mean: 593.0016169924824 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 64.00861919648236,
            "unit": "iter/sec",
            "range": "stddev: 0.0275521341197082",
            "extra": "mean: 15.622895987341588 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5918429953636806,
            "unit": "iter/sec",
            "range": "stddev: 0.005653856149258175",
            "extra": "mean: 1.6896372988000166 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5689977.834293568,
            "unit": "iter/sec",
            "range": "stddev: 2.4005290306694284e-8",
            "extra": "mean: 175.74760906341686 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 243.3563203656121,
            "unit": "iter/sec",
            "range": "stddev: 0.0003348222150652647",
            "extra": "mean: 4.109200856166901 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.3003186657346,
            "unit": "iter/sec",
            "range": "stddev: 0.0003404646732747535",
            "extra": "mean: 22.57320105404749 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 132.22709921388008,
            "unit": "iter/sec",
            "range": "stddev: 0.01785940549989307",
            "extra": "mean: 7.562746259618682 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 190.37061918160364,
            "unit": "iter/sec",
            "range": "stddev: 0.004549879981709188",
            "extra": "mean: 5.2529114224609 msec\nrounds: 187"
          }
        ]
      }
    ]
  }
}