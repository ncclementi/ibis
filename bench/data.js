window.BENCHMARK_DATA = {
  "lastUpdate": 1683911420409,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "30a4f7e3531df57aba0d7391b4cf2a1605a4ea18",
          "message": "refactor(datatypes): remove `Set()` in favor of `Array()` datatype\n\nBREAKING CHANGE: `dt.Set` is now an alias for `dt.Array`",
          "timestamp": "2023-05-12T12:04:45-05:00",
          "tree_id": "9794e563948b0104234be3b3f2bc5d3df79419b1",
          "url": "https://github.com/ibis-project/ibis/commit/30a4f7e3531df57aba0d7391b4cf2a1605a4ea18"
        },
        "date": 1683911331278,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139083.52072497972,
            "unit": "iter/sec",
            "range": "stddev: 3.494104418534007e-7",
            "extra": "mean: 7.189924405044181 usec\nrounds: 24155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.03043181096056,
            "unit": "iter/sec",
            "range": "stddev: 0.00009709642397304005",
            "extra": "mean: 9.006539771930196 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1784.5461727751033,
            "unit": "iter/sec",
            "range": "stddev: 0.0030615168413951456",
            "extra": "mean: 560.3665600004762 usec\nrounds: 450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 87.9356081246639,
            "unit": "iter/sec",
            "range": "stddev: 0.009839896181753507",
            "extra": "mean: 11.371957518987388 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7853832435131692,
            "unit": "iter/sec",
            "range": "stddev: 0.0016696382567933624",
            "extra": "mean: 1.2732637324000051 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2212.4980249620103,
            "unit": "iter/sec",
            "range": "stddev: 0.00012180579923049892",
            "extra": "mean: 451.97780459811736 usec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 188.7396089209659,
            "unit": "iter/sec",
            "range": "stddev: 0.00008273791872048012",
            "extra": "mean: 5.298304927709937 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.09275795491242,
            "unit": "iter/sec",
            "range": "stddev: 0.0001677977765088872",
            "extra": "mean: 18.151206022729774 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 111.71146537135829,
            "unit": "iter/sec",
            "range": "stddev: 0.00021683326149599878",
            "extra": "mean: 8.95163264286022 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 252.99958366369472,
            "unit": "iter/sec",
            "range": "stddev: 0.000394483813079198",
            "extra": "mean: 3.952575674311275 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 414.186118689559,
            "unit": "iter/sec",
            "range": "stddev: 0.00002982344508193348",
            "extra": "mean: 2.4143735264810275 msec\nrounds: 321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1028916.3108766342,
            "unit": "iter/sec",
            "range": "stddev: 1.1478097427064876e-7",
            "extra": "mean: 971.8963432001601 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 594.3320180032777,
            "unit": "iter/sec",
            "range": "stddev: 0.004883583991797421",
            "extra": "mean: 1.6825612110880508 msec\nrounds: 469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1607239.2889849301,
            "unit": "iter/sec",
            "range": "stddev: 9.745931000518808e-8",
            "extra": "mean: 622.1848898626422 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.73276634204435,
            "unit": "iter/sec",
            "range": "stddev: 0.0007847162267047834",
            "extra": "mean: 22.354977833331528 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1191.755779715046,
            "unit": "iter/sec",
            "range": "stddev: 0.000014491627424266675",
            "extra": "mean: 839.098091254153 usec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.6036518100134,
            "unit": "iter/sec",
            "range": "stddev: 0.0002524180915092897",
            "extra": "mean: 3.6283989469390168 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.6555265503856,
            "unit": "iter/sec",
            "range": "stddev: 0.00006446732443693368",
            "extra": "mean: 5.758526779220316 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.88500426937372,
            "unit": "iter/sec",
            "range": "stddev: 0.0007370666166407132",
            "extra": "mean: 9.912275934785049 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.88713850430136,
            "unit": "iter/sec",
            "range": "stddev: 0.0005260035203828695",
            "extra": "mean: 11.643186831168192 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.27669009947718,
            "unit": "iter/sec",
            "range": "stddev: 0.0006772990356555279",
            "extra": "mean: 9.68272704166632 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 144.50389422228534,
            "unit": "iter/sec",
            "range": "stddev: 0.015160661142446807",
            "extra": "mean: 6.9202287272738445 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.515802183718101,
            "unit": "iter/sec",
            "range": "stddev: 0.003017139101073492",
            "extra": "mean: 397.4875316000009 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2324.9278513394147,
            "unit": "iter/sec",
            "range": "stddev: 0.00007829321956930275",
            "extra": "mean: 430.12087425589993 usec\nrounds: 1344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.43804815005137,
            "unit": "iter/sec",
            "range": "stddev: 0.0008861897330298019",
            "extra": "mean: 10.056512759492287 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8936949437252698,
            "unit": "iter/sec",
            "range": "stddev: 0.002413047475268028",
            "extra": "mean: 1.11895004779999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12407632.742423667,
            "unit": "iter/sec",
            "range": "stddev: 3.6754179174891267e-9",
            "extra": "mean: 80.59555120288466 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17815742314469155,
            "unit": "iter/sec",
            "range": "stddev: 0.09513749320438189",
            "extra": "mean: 5.613013380799993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.38039281726978,
            "unit": "iter/sec",
            "range": "stddev: 0.00059284445629949",
            "extra": "mean: 23.05188899999769 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 84.40005161149688,
            "unit": "iter/sec",
            "range": "stddev: 0.016831392689789115",
            "extra": "mean: 11.848333986845349 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 283.4115299605845,
            "unit": "iter/sec",
            "range": "stddev: 0.0002542689935275567",
            "extra": "mean: 3.5284379578314087 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13443.158744055705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016584678209157604",
            "extra": "mean: 74.38727898993083 usec\nrounds: 2613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.85483943131331,
            "unit": "iter/sec",
            "range": "stddev: 0.0008610304729380912",
            "extra": "mean: 10.014537159091478 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.91266648677457,
            "unit": "iter/sec",
            "range": "stddev: 0.0007584212138663323",
            "extra": "mean: 9.531737525001915 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.28674030132355,
            "unit": "iter/sec",
            "range": "stddev: 0.0008691546534044084",
            "extra": "mean: 10.494639619717475 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2228.259837576808,
            "unit": "iter/sec",
            "range": "stddev: 0.000196891571379777",
            "extra": "mean: 448.7806956514918 usec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 243.37548993567665,
            "unit": "iter/sec",
            "range": "stddev: 0.004147070492963547",
            "extra": "mean: 4.108877193279803 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1904972.2008890542,
            "unit": "iter/sec",
            "range": "stddev: 9.121190494249773e-8",
            "extra": "mean: 524.9420435286657 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.6652119358854,
            "unit": "iter/sec",
            "range": "stddev: 0.0007507123806774197",
            "extra": "mean: 10.033591265960483 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.0467848232893,
            "unit": "iter/sec",
            "range": "stddev: 0.00010581171904135506",
            "extra": "mean: 6.408334533341531 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.20334824366228,
            "unit": "iter/sec",
            "range": "stddev: 0.00007280902555765061",
            "extra": "mean: 6.127325270968105 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.08979100516041,
            "unit": "iter/sec",
            "range": "stddev: 0.0008489097409178885",
            "extra": "mean: 27.708666970584893 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 426.374149940718,
            "unit": "iter/sec",
            "range": "stddev: 0.000057266100396194894",
            "extra": "mean: 2.3453579447511945 msec\nrounds: 362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.05579865595276,
            "unit": "iter/sec",
            "range": "stddev: 0.014904611767071195",
            "extra": "mean: 11.62036743157722 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2343.686815959332,
            "unit": "iter/sec",
            "range": "stddev: 0.0000876174113220385",
            "extra": "mean: 426.6781692803413 usec\nrounds: 1530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6402886.058133663,
            "unit": "iter/sec",
            "range": "stddev: 4.4386669445754036e-8",
            "extra": "mean: 156.17957135592738 nsec\nrounds: 52911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11835.13763097828,
            "unit": "iter/sec",
            "range": "stddev: 0.00001995077259636449",
            "extra": "mean: 84.49415893419915 usec\nrounds: 4354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 275.4613384394307,
            "unit": "iter/sec",
            "range": "stddev: 0.00026975865856483465",
            "extra": "mean: 3.6302735101241193 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.16372605392696,
            "unit": "iter/sec",
            "range": "stddev: 0.0008211675166781673",
            "extra": "mean: 9.69332960576926 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9997.651954276975,
            "unit": "iter/sec",
            "range": "stddev: 0.000001756925295315151",
            "extra": "mean: 100.02348597184383 usec\nrounds: 5774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.84975997353726,
            "unit": "iter/sec",
            "range": "stddev: 0.0007478230135513308",
            "extra": "mean: 9.915740010312346 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.511101124711,
            "unit": "iter/sec",
            "range": "stddev: 0.0005679190710620069",
            "extra": "mean: 117.49361044443656 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 764.8698739554017,
            "unit": "iter/sec",
            "range": "stddev: 0.000010551053342357996",
            "extra": "mean: 1.3074119324750766 msec\nrounds: 622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 270.25635221408953,
            "unit": "iter/sec",
            "range": "stddev: 0.000325251434699785",
            "extra": "mean: 3.7001905480017285 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4714442.216914303,
            "unit": "iter/sec",
            "range": "stddev: 1.0322566085071224e-8",
            "extra": "mean: 212.1141704557006 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8234.81318575964,
            "unit": "iter/sec",
            "range": "stddev: 0.000011139260349279661",
            "extra": "mean: 121.43566313432437 usec\nrounds: 3681"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.01257184616967,
            "unit": "iter/sec",
            "range": "stddev: 0.00010927855279416795",
            "extra": "mean: 33.31937046666743 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.46703784040777,
            "unit": "iter/sec",
            "range": "stddev: 0.0006926029602125633",
            "extra": "mean: 9.953513326316074 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2370.493139145915,
            "unit": "iter/sec",
            "range": "stddev: 0.00008340417725323199",
            "extra": "mean: 421.8531509271942 usec\nrounds: 1239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.004813633357244,
            "unit": "iter/sec",
            "range": "stddev: 0.00021197217531019634",
            "extra": "mean: 20.406158617024243 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1780.751532324882,
            "unit": "iter/sec",
            "range": "stddev: 0.000006094475926332711",
            "extra": "mean: 561.5606567494781 usec\nrounds: 1311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2548208.450445976,
            "unit": "iter/sec",
            "range": "stddev: 2.6968689420646665e-8",
            "extra": "mean: 392.4325734909596 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.99905382599954,
            "unit": "iter/sec",
            "range": "stddev: 0.0001707461034397269",
            "extra": "mean: 10.101106640449283 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.36997025469372,
            "unit": "iter/sec",
            "range": "stddev: 0.00033714541277717394",
            "extra": "mean: 17.132097132079434 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6205243789303425,
            "unit": "iter/sec",
            "range": "stddev: 0.002232539346414345",
            "extra": "mean: 617.0842062000133 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.82336639013634,
            "unit": "iter/sec",
            "range": "stddev: 0.00015840471840107423",
            "extra": "mean: 7.947649380953083 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.09381198435596,
            "unit": "iter/sec",
            "range": "stddev: 0.00008423726151400006",
            "extra": "mean: 52.372988736839204 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.08750924119523,
            "unit": "iter/sec",
            "range": "stddev: 0.0004240061006584451",
            "extra": "mean: 38.33252116000722 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.82986862856335,
            "unit": "iter/sec",
            "range": "stddev: 0.0008668243151097953",
            "extra": "mean: 10.545200731183906 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 172.29673772683657,
            "unit": "iter/sec",
            "range": "stddev: 0.004097120502138413",
            "extra": "mean: 5.803940418102543 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7086071.611253398,
            "unit": "iter/sec",
            "range": "stddev: 1.0767545381783239e-7",
            "extra": "mean: 141.1219156199385 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.76719482627584,
            "unit": "iter/sec",
            "range": "stddev: 0.00012226162356430398",
            "extra": "mean: 3.5872226666526785 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4735.570405562825,
            "unit": "iter/sec",
            "range": "stddev: 0.000021500491917675313",
            "extra": "mean: 211.16780331790875 usec\nrounds: 2049"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.22327082512362,
            "unit": "iter/sec",
            "range": "stddev: 0.00084728197233969",
            "extra": "mean: 10.07828094845264 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5851046.986837297,
            "unit": "iter/sec",
            "range": "stddev: 8.962130468932466e-9",
            "extra": "mean: 170.90958289210306 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.7237171530252,
            "unit": "iter/sec",
            "range": "stddev: 0.0002697529459700976",
            "extra": "mean: 1.8666338039209078 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8835257415613649,
            "unit": "iter/sec",
            "range": "stddev: 0.0055800760134089725",
            "extra": "mean: 1.131828935999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6342220.750840985,
            "unit": "iter/sec",
            "range": "stddev: 1.7264377469762728e-8",
            "extra": "mean: 157.67347736475554 nsec\nrounds: 196117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 285.48920323155977,
            "unit": "iter/sec",
            "range": "stddev: 0.00023825181860302966",
            "extra": "mean: 3.5027594342644957 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2405.1770949428355,
            "unit": "iter/sec",
            "range": "stddev: 0.00008190797657647366",
            "extra": "mean: 415.7698001126887 usec\nrounds: 1771"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2393.9790188631773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000835867908368502",
            "extra": "mean: 417.71460489861244 usec\nrounds: 1878"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2926912136167958,
            "unit": "iter/sec",
            "range": "stddev: 0.06539291492821465",
            "extra": "mean: 773.579946600023 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2342.3456126207407,
            "unit": "iter/sec",
            "range": "stddev: 0.0000830757947930367",
            "extra": "mean: 426.9224808721318 usec\nrounds: 1516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.82683527079111,
            "unit": "iter/sec",
            "range": "stddev: 0.00007894044788780277",
            "extra": "mean: 9.539542021055743 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.01749583706959,
            "unit": "iter/sec",
            "range": "stddev: 0.000057496164795389296",
            "extra": "mean: 9.432405397848916 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.21024356346602,
            "unit": "iter/sec",
            "range": "stddev: 0.000758924533173424",
            "extra": "mean: 9.783755180849989 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 267.11393786011206,
            "unit": "iter/sec",
            "range": "stddev: 0.0002880981029111496",
            "extra": "mean: 3.743720780769221 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.839216420916,
            "unit": "iter/sec",
            "range": "stddev: 0.0008253158027491487",
            "extra": "mean: 10.544161347367039 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2540164.017364606,
            "unit": "iter/sec",
            "range": "stddev: 1.7035570667074838e-8",
            "extra": "mean: 393.67536630075415 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.36991509834499,
            "unit": "iter/sec",
            "range": "stddev: 0.0007814930211221604",
            "extra": "mean: 10.06340801449125 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 229.59584037077556,
            "unit": "iter/sec",
            "range": "stddev: 0.0003057596248594752",
            "extra": "mean: 4.355479604443594 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.60512451040156,
            "unit": "iter/sec",
            "range": "stddev: 0.0006836114626126957",
            "extra": "mean: 15.72200365453992 msec\nrounds: 55"
          }
        ]
      }
    ]
  }
}