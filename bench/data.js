window.BENCHMARK_DATA = {
  "lastUpdate": 1683419318428,
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
          "id": "888590d7eb7a48276f142498cb2b811947a71ac7",
          "message": "chore(flake/nixpkgs): `7091454b` -> `e700696f`",
          "timestamp": "2023-05-07T00:21:58Z",
          "tree_id": "db787c0a8bef68296aaa5fcb4218fe1fb3cd61e4",
          "url": "https://github.com/ibis-project/ibis/commit/888590d7eb7a48276f142498cb2b811947a71ac7"
        },
        "date": 1683419230168,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.05764979285192,
            "unit": "iter/sec",
            "range": "stddev: 0.0007176254564786052",
            "extra": "mean: 9.895341936506549 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12388466.379224982,
            "unit": "iter/sec",
            "range": "stddev: 5.990347936562497e-9",
            "extra": "mean: 80.72024166570682 nsec\nrounds: 120497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11935.100944490681,
            "unit": "iter/sec",
            "range": "stddev: 0.000012397580262410378",
            "extra": "mean: 83.78647190760515 usec\nrounds: 4236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.14863271185092,
            "unit": "iter/sec",
            "range": "stddev: 0.0007224290651080635",
            "extra": "mean: 9.886441103447922 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 414.11049497708143,
            "unit": "iter/sec",
            "range": "stddev: 0.00003872109693936183",
            "extra": "mean: 2.4148144326922796 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 113.6828314937066,
            "unit": "iter/sec",
            "range": "stddev: 0.00025950832106566834",
            "extra": "mean: 8.796403000002329 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.92840761995315,
            "unit": "iter/sec",
            "range": "stddev: 0.0007601980357527968",
            "extra": "mean: 9.908013250001023 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.507836329259273,
            "unit": "iter/sec",
            "range": "stddev: 0.0002795514089611136",
            "extra": "mean: 36.353277227272486 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.02921747289889,
            "unit": "iter/sec",
            "range": "stddev: 0.0007445751076304738",
            "extra": "mean: 9.898126749999326 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.17571807830107,
            "unit": "iter/sec",
            "range": "stddev: 0.0006965250867971317",
            "extra": "mean: 9.787061141411922 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9274314590757714,
            "unit": "iter/sec",
            "range": "stddev: 0.002355897613453608",
            "extra": "mean: 1.0782467967999991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.3772888446028,
            "unit": "iter/sec",
            "range": "stddev: 0.00002766659823970854",
            "extra": "mean: 1.8437350172427873 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2258.1592274136297,
            "unit": "iter/sec",
            "range": "stddev: 0.00009193255874309861",
            "extra": "mean: 442.8385686271311 usec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141764.91344617005,
            "unit": "iter/sec",
            "range": "stddev: 3.1561390150144575e-7",
            "extra": "mean: 7.053931580748382 usec\nrounds: 34844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.70094792504392,
            "unit": "iter/sec",
            "range": "stddev: 0.014834092691411884",
            "extra": "mean: 25.188315449999266 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2340.887782961711,
            "unit": "iter/sec",
            "range": "stddev: 0.00008195560260637189",
            "extra": "mean: 427.18835446900044 usec\nrounds: 1309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.26279485270506,
            "unit": "iter/sec",
            "range": "stddev: 0.00007301279455869268",
            "extra": "mean: 9.06924227102944 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 239.0035644703501,
            "unit": "iter/sec",
            "range": "stddev: 0.004254309682609976",
            "extra": "mean: 4.184038017240769 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.20082201779991,
            "unit": "iter/sec",
            "range": "stddev: 0.00008916903164644432",
            "extra": "mean: 9.979958046874682 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 281.08425170891434,
            "unit": "iter/sec",
            "range": "stddev: 0.00024051596274364146",
            "extra": "mean: 3.557652176955049 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13555.990187902184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018352542012603917",
            "extra": "mean: 73.76812657274077 usec\nrounds: 6676"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.33392199966589,
            "unit": "iter/sec",
            "range": "stddev: 0.0007115189102654089",
            "extra": "mean: 9.77193075824129 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.29992284124327,
            "unit": "iter/sec",
            "range": "stddev: 0.00005804082506950076",
            "extra": "mean: 5.77034301922962 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2325.0515148259346,
            "unit": "iter/sec",
            "range": "stddev: 0.00008687621696654071",
            "extra": "mean: 430.09799723722045 usec\nrounds: 362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.29110923261383,
            "unit": "iter/sec",
            "range": "stddev: 0.0008042716012199634",
            "extra": "mean: 9.970973575340697 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.23758342904622,
            "unit": "iter/sec",
            "range": "stddev: 0.0008473207540349747",
            "extra": "mean: 23.675596916662457 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7914390352335554,
            "unit": "iter/sec",
            "range": "stddev: 0.0019519795897676349",
            "extra": "mean: 1.2635212005999903 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2398.5590162127974,
            "unit": "iter/sec",
            "range": "stddev: 0.00008154279332881655",
            "extra": "mean: 416.9169877583205 usec\nrounds: 1307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1878058.0903678103,
            "unit": "iter/sec",
            "range": "stddev: 1.032579732615854e-7",
            "extra": "mean: 532.4648929278613 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1769782706718514,
            "unit": "iter/sec",
            "range": "stddev: 0.060801632728976276",
            "extra": "mean: 5.650411184400002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 430.6998520243319,
            "unit": "iter/sec",
            "range": "stddev: 0.00003986445294971777",
            "extra": "mean: 2.321802515835334 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.40707373702077,
            "unit": "iter/sec",
            "range": "stddev: 0.0007139464823766575",
            "extra": "mean: 10.372682846155046 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.3660850075507,
            "unit": "iter/sec",
            "range": "stddev: 0.00006227175205074354",
            "extra": "mean: 51.63666273333547 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.89179189899036,
            "unit": "iter/sec",
            "range": "stddev: 0.00005743395968221696",
            "extra": "mean: 6.064583254772205 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1620749.2878282468,
            "unit": "iter/sec",
            "range": "stddev: 9.434795661767264e-8",
            "extra": "mean: 616.9985743692465 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.20075927266954,
            "unit": "iter/sec",
            "range": "stddev: 0.00019706439545848505",
            "extra": "mean: 7.987172009253885 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6500703.497322128,
            "unit": "iter/sec",
            "range": "stddev: 9.636676935749327e-9",
            "extra": "mean: 153.82950482393133 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9174177862408388,
            "unit": "iter/sec",
            "range": "stddev: 0.0035063752275854977",
            "extra": "mean: 1.090015928400021 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6624053764178994,
            "unit": "iter/sec",
            "range": "stddev: 0.0015046360297805682",
            "extra": "mean: 601.5379968000161 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4629209.956869524,
            "unit": "iter/sec",
            "range": "stddev: 1.1093989511592933e-8",
            "extra": "mean: 216.01958202734392 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1078173.9292262774,
            "unit": "iter/sec",
            "range": "stddev: 1.6689799602927373e-7",
            "extra": "mean: 927.4941388330759 nsec\nrounds: 163962"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.75628654225994,
            "unit": "iter/sec",
            "range": "stddev: 0.0003263731144074528",
            "extra": "mean: 3.6528841497330484 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.2303285334859,
            "unit": "iter/sec",
            "range": "stddev: 0.0006141112340828932",
            "extra": "mean: 9.502963774191628 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4949477657036248,
            "unit": "iter/sec",
            "range": "stddev: 0.0018326339417850076",
            "extra": "mean: 400.80999440001506 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4507.911367649809,
            "unit": "iter/sec",
            "range": "stddev: 0.00005545789001556663",
            "extra": "mean: 221.83222305041636 usec\nrounds: 1744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.77698418319046,
            "unit": "iter/sec",
            "range": "stddev: 0.0007215928384802976",
            "extra": "mean: 9.922900631578925 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2323.324190665562,
            "unit": "iter/sec",
            "range": "stddev: 0.00011329860032232151",
            "extra": "mean: 430.4177626255121 usec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.204964850480085,
            "unit": "iter/sec",
            "range": "stddev: 0.0001414348401746821",
            "extra": "mean: 33.10714000000254 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 74.28398907190838,
            "unit": "iter/sec",
            "range": "stddev: 0.01722999738126919",
            "extra": "mean: 13.461851099999222 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7367534.83217202,
            "unit": "iter/sec",
            "range": "stddev: 4.146194082856009e-9",
            "extra": "mean: 135.7306104117523 nsec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.58631753905075,
            "unit": "iter/sec",
            "range": "stddev: 0.0002459967033721266",
            "extra": "mean: 3.602483036143597 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.08268056622009,
            "unit": "iter/sec",
            "range": "stddev: 0.0008202850146478759",
            "extra": "mean: 10.517162474227392 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.07984897194588,
            "unit": "iter/sec",
            "range": "stddev: 0.0006789427967467392",
            "extra": "mean: 9.516572490192475 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2251.164221629871,
            "unit": "iter/sec",
            "range": "stddev: 0.00008439944567891247",
            "extra": "mean: 444.2145936718857 usec\nrounds: 1612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 231.44125281233846,
            "unit": "iter/sec",
            "range": "stddev: 0.0002665858071478046",
            "extra": "mean: 4.3207508940112715 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 84.7760320804617,
            "unit": "iter/sec",
            "range": "stddev: 0.017325306037670324",
            "extra": "mean: 11.795786797981899 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.9379505307087,
            "unit": "iter/sec",
            "range": "stddev: 0.00020772954751194147",
            "extra": "mean: 5.1562883760682885 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2255.731753706413,
            "unit": "iter/sec",
            "range": "stddev: 0.00008438901894267412",
            "extra": "mean: 443.31512306677905 usec\nrounds: 1422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.459386470983812,
            "unit": "iter/sec",
            "range": "stddev: 0.00044415712010156767",
            "extra": "mean: 118.21188255555626 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.70434045373768,
            "unit": "iter/sec",
            "range": "stddev: 0.0003102363087450319",
            "extra": "mean: 20.53205095652328 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.74903112682663,
            "unit": "iter/sec",
            "range": "stddev: 0.0007411233571988377",
            "extra": "mean: 27.2116017575768 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.24719306951903,
            "unit": "iter/sec",
            "range": "stddev: 0.00006873754048112348",
            "extra": "mean: 9.592584419353457 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 188.9657387745883,
            "unit": "iter/sec",
            "range": "stddev: 0.00004827505509338441",
            "extra": "mean: 5.291964598899438 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6378907.982702263,
            "unit": "iter/sec",
            "range": "stddev: 4.95037553127985e-9",
            "extra": "mean: 156.76664449649462 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.14282147952228,
            "unit": "iter/sec",
            "range": "stddev: 0.0006335813625344292",
            "extra": "mean: 9.985738220931644 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2582773.496049107,
            "unit": "iter/sec",
            "range": "stddev: 1.7981965131795836e-8",
            "extra": "mean: 387.18068058603603 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.444450862507495,
            "unit": "iter/sec",
            "range": "stddev: 0.0002459468206497377",
            "extra": "mean: 17.408121846155105 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 170.8938903515029,
            "unit": "iter/sec",
            "range": "stddev: 0.004068250808209277",
            "extra": "mean: 5.851584266372257 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5878599.598440445,
            "unit": "iter/sec",
            "range": "stddev: 1.4074212262995365e-8",
            "extra": "mean: 170.10854086190216 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 684.8514480331764,
            "unit": "iter/sec",
            "range": "stddev: 0.00010920310163090991",
            "extra": "mean: 1.4601706733217812 msec\nrounds: 551"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9852.257294345078,
            "unit": "iter/sec",
            "range": "stddev: 0.000001646554123285443",
            "extra": "mean: 101.49958229105246 usec\nrounds: 5195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 272.635337704627,
            "unit": "iter/sec",
            "range": "stddev: 0.0002296655055272529",
            "extra": "mean: 3.6679030987663075 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1193.7938841271798,
            "unit": "iter/sec",
            "range": "stddev: 0.00001577166571487013",
            "extra": "mean: 837.6655411760058 usec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2384.4010076978875,
            "unit": "iter/sec",
            "range": "stddev: 0.00007925374069921695",
            "extra": "mean: 419.3925420982307 usec\nrounds: 1354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.00687584115761,
            "unit": "iter/sec",
            "range": "stddev: 0.0007089854327992284",
            "extra": "mean: 9.99931246315818 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8089.2690814267235,
            "unit": "iter/sec",
            "range": "stddev: 0.00003888258887816313",
            "extra": "mean: 123.6205632343272 usec\nrounds: 4515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.02953888677595,
            "unit": "iter/sec",
            "range": "stddev: 0.0006763344453335581",
            "extra": "mean: 10.097997135413669 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.4825916042679,
            "unit": "iter/sec",
            "range": "stddev: 0.00018990951707275152",
            "extra": "mean: 18.023671409088912 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1755.9611084581707,
            "unit": "iter/sec",
            "range": "stddev: 0.000005574584252535247",
            "extra": "mean: 569.4886949279045 usec\nrounds: 1321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 741.5960875297856,
            "unit": "iter/sec",
            "range": "stddev: 0.000016853293930975936",
            "extra": "mean: 1.3484429284557624 msec\nrounds: 629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2294.0474408221157,
            "unit": "iter/sec",
            "range": "stddev: 0.00007905130126013899",
            "extra": "mean: 435.91077595223175 usec\nrounds: 1339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 258.0408400374567,
            "unit": "iter/sec",
            "range": "stddev: 0.00018387960278030155",
            "extra": "mean: 3.875355543931891 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2606791.1759351324,
            "unit": "iter/sec",
            "range": "stddev: 1.7703334302577798e-8",
            "extra": "mean: 383.61338999132664 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.33938359032135,
            "unit": "iter/sec",
            "range": "stddev: 0.00008689469618763366",
            "extra": "mean: 9.403853645160838 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 270.5558919125857,
            "unit": "iter/sec",
            "range": "stddev: 0.00031216352885549115",
            "extra": "mean: 3.696093967612029 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 96.82770278318587,
            "unit": "iter/sec",
            "range": "stddev: 0.0006793712207570175",
            "extra": "mean: 10.327622893617281 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 279.94984149071064,
            "unit": "iter/sec",
            "range": "stddev: 0.00025378161657468027",
            "extra": "mean: 3.5720684629613637 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.17644952845534,
            "unit": "iter/sec",
            "range": "stddev: 0.01681938013288966",
            "extra": "mean: 12.168936547370897 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.21827999704422,
            "unit": "iter/sec",
            "range": "stddev: 0.00022954646276248332",
            "extra": "mean: 14.876905509096227 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.353681321544676,
            "unit": "iter/sec",
            "range": "stddev: 0.0005733127616860329",
            "extra": "mean: 738.7263043999951 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.23467348350022,
            "unit": "iter/sec",
            "range": "stddev: 0.00005578894538150622",
            "extra": "mean: 6.359920352459264 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 279.1896828131089,
            "unit": "iter/sec",
            "range": "stddev: 0.00024779914693984635",
            "extra": "mean: 3.5817942479966405 msec\nrounds: 250"
          }
        ]
      }
    ]
  }
}