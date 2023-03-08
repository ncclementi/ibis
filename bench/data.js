window.BENCHMARK_DATA = {
  "lastUpdate": 1678235216425,
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
          "id": "95513590d7199e93e405b9899e86690c82404728",
          "message": "chore(flake/nixpkgs): `ef29425c` -> `7eeb3262`",
          "timestamp": "2023-03-08T00:19:44Z",
          "tree_id": "6ef3017e2e929e824b6e8702a1739b28385ee311",
          "url": "https://github.com/ibis-project/ibis/commit/95513590d7199e93e405b9899e86690c82404728"
        },
        "date": 1678235131511,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3780.28290125046,
            "unit": "iter/sec",
            "range": "stddev: 0.0018304011091311721",
            "extra": "mean: 264.5304666667183 usec\nrounds: 585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 305.7927999724877,
            "unit": "iter/sec",
            "range": "stddev: 0.0001740834612039058",
            "extra": "mean: 3.270188180002833 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5896.523917778668,
            "unit": "iter/sec",
            "range": "stddev: 0.000042282326120058665",
            "extra": "mean: 169.5914430169426 usec\nrounds: 2957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.66618590813532,
            "unit": "iter/sec",
            "range": "stddev: 0.00016335752179180252",
            "extra": "mean: 9.036183833335562 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11823.296125433237,
            "unit": "iter/sec",
            "range": "stddev: 0.000002187484770375231",
            "extra": "mean: 84.57878322516915 usec\nrounds: 5222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1685319.9277368335,
            "unit": "iter/sec",
            "range": "stddev: 9.229563388312871e-8",
            "extra": "mean: 593.3591501186784 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 320.3566750053865,
            "unit": "iter/sec",
            "range": "stddev: 0.00020482027747645905",
            "extra": "mean: 3.1215207236845806 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 243.92031511123022,
            "unit": "iter/sec",
            "range": "stddev: 0.004019608794010662",
            "extra": "mean: 4.09969952500262 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17835862334332012,
            "unit": "iter/sec",
            "range": "stddev: 0.05614461190326223",
            "extra": "mean: 5.606681534400013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.0337863736875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000644924791446129",
            "extra": "mean: 6.059365309208206 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 122.48689980575737,
            "unit": "iter/sec",
            "range": "stddev: 0.0004947774187633074",
            "extra": "mean: 8.164138382029618 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 122.04655639465774,
            "unit": "iter/sec",
            "range": "stddev: 0.0005402583381358181",
            "extra": "mean: 8.193594555559065 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.108335823188,
            "unit": "iter/sec",
            "range": "stddev: 0.0001810885861525292",
            "extra": "mean: 3.224679521579072 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 309.270764320725,
            "unit": "iter/sec",
            "range": "stddev: 0.00021695758875545323",
            "extra": "mean: 3.233412644730181 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.4173836405647,
            "unit": "iter/sec",
            "range": "stddev: 0.0005308055174587795",
            "extra": "mean: 9.309480142861753 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141021.59824287388,
            "unit": "iter/sec",
            "range": "stddev: 3.2408793580759426e-7",
            "extra": "mean: 7.09111237186345 usec\nrounds: 38168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 553.3260773303736,
            "unit": "iter/sec",
            "range": "stddev: 0.00003642077329972474",
            "extra": "mean: 1.80725261463311 msec\nrounds: 410"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5319.101084670294,
            "unit": "iter/sec",
            "range": "stddev: 0.000053921971367230244",
            "extra": "mean: 188.00169127862802 usec\nrounds: 2614"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70846.23767603457,
            "unit": "iter/sec",
            "range": "stddev: 7.44385179651807e-7",
            "extra": "mean: 14.115075589091923 usec\nrounds: 3228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 488534.7085327271,
            "unit": "iter/sec",
            "range": "stddev: 2.8658556657915437e-7",
            "extra": "mean: 2.0469374694039977 usec\nrounds: 2111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.696814134628232,
            "unit": "iter/sec",
            "range": "stddev: 0.000511062283001357",
            "extra": "mean: 63.7071950666685 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.24357372850933,
            "unit": "iter/sec",
            "range": "stddev: 0.0005589126818533216",
            "extra": "mean: 9.324568039214482 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5776.275440473325,
            "unit": "iter/sec",
            "range": "stddev: 0.00005502610032030359",
            "extra": "mean: 173.12193822911897 usec\nrounds: 3513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2537690.6103513953,
            "unit": "iter/sec",
            "range": "stddev: 1.6821394884845956e-8",
            "extra": "mean: 394.05906926596913 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 309.3848598029462,
            "unit": "iter/sec",
            "range": "stddev: 0.00022425910625749226",
            "extra": "mean: 3.2322202212381086 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5088541539982634,
            "unit": "iter/sec",
            "range": "stddev: 0.0014467359880823611",
            "extra": "mean: 398.58833499999946 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 360.6847894428885,
            "unit": "iter/sec",
            "range": "stddev: 0.00003277724929079803",
            "extra": "mean: 2.772503940475543 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.528631564504412,
            "unit": "iter/sec",
            "range": "stddev: 0.00033385525975448006",
            "extra": "mean: 94.97910472727901 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9185027828921386,
            "unit": "iter/sec",
            "range": "stddev: 0.004803064803152196",
            "extra": "mean: 1.0887283289999914 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.57511819357559,
            "unit": "iter/sec",
            "range": "stddev: 0.00006492319874035782",
            "extra": "mean: 8.362943855770547 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.9736583729166,
            "unit": "iter/sec",
            "range": "stddev: 0.00023217304828633987",
            "extra": "mean: 3.509096264228744 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5547.248367141754,
            "unit": "iter/sec",
            "range": "stddev: 0.00005748562161805841",
            "extra": "mean: 180.26955597000872 usec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.94790358539397,
            "unit": "iter/sec",
            "range": "stddev: 0.0005967136651646102",
            "extra": "mean: 9.438601106382444 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 297.46673749682026,
            "unit": "iter/sec",
            "range": "stddev: 0.00012132019972471433",
            "extra": "mean: 3.361720400791666 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8080004554599118,
            "unit": "iter/sec",
            "range": "stddev: 0.0016691789305972248",
            "extra": "mean: 553.0972057999975 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.143023819442366,
            "unit": "iter/sec",
            "range": "stddev: 0.03893102302137422",
            "extra": "mean: 194.43814283333913 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.4169106935198,
            "unit": "iter/sec",
            "range": "stddev: 0.00019599579328001107",
            "extra": "mean: 3.1704070583953787 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.9552242153933,
            "unit": "iter/sec",
            "range": "stddev: 0.0005443384397277523",
            "extra": "mean: 9.527872552087166 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.50075682224556,
            "unit": "iter/sec",
            "range": "stddev: 0.00010206720966482317",
            "extra": "mean: 10.471121206518688 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5802.929395774403,
            "unit": "iter/sec",
            "range": "stddev: 0.00004524248269592132",
            "extra": "mean: 172.32675633244537 usec\nrounds: 2487"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13446.429798366016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016444477074328476",
            "extra": "mean: 74.36918312112245 usec\nrounds: 6979"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12475795.180288933,
            "unit": "iter/sec",
            "range": "stddev: 2.879344918635e-9",
            "extra": "mean: 80.1552113951311 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.53195300255345,
            "unit": "iter/sec",
            "range": "stddev: 0.0005862362314111753",
            "extra": "mean: 10.691533405409588 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2544976.554262186,
            "unit": "iter/sec",
            "range": "stddev: 1.4808368928808645e-8",
            "extra": "mean: 392.93092831243695 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 744.9027229888691,
            "unit": "iter/sec",
            "range": "stddev: 0.000051533233303073545",
            "extra": "mean: 1.3424571680817212 msec\nrounds: 589"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.6566320199621,
            "unit": "iter/sec",
            "range": "stddev: 0.0005806722835025477",
            "extra": "mean: 9.741211846941804 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8078.403082500109,
            "unit": "iter/sec",
            "range": "stddev: 0.000014201223006186058",
            "extra": "mean: 123.78684125904243 usec\nrounds: 4416"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6281573.988676605,
            "unit": "iter/sec",
            "range": "stddev: 7.119647309558237e-9",
            "extra": "mean: 159.19576873614105 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.45844688733496,
            "unit": "iter/sec",
            "range": "stddev: 0.0005825376589485283",
            "extra": "mean: 8.736795118182334 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.50951434567452,
            "unit": "iter/sec",
            "range": "stddev: 0.00004003813159419453",
            "extra": "mean: 7.167969902914403 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.2863306971486,
            "unit": "iter/sec",
            "range": "stddev: 0.000018920147051630375",
            "extra": "mean: 1.450775904678965 msec\nrounds: 577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.21428916489576,
            "unit": "iter/sec",
            "range": "stddev: 0.00035374886305215977",
            "extra": "mean: 35.443033639996884 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5794571.797992368,
            "unit": "iter/sec",
            "range": "stddev: 8.803729680782337e-9",
            "extra": "mean: 172.57530579641278 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2549469.556986936,
            "unit": "iter/sec",
            "range": "stddev: 1.4971865721514933e-8",
            "extra": "mean: 392.2384549598624 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.59919989520226,
            "unit": "iter/sec",
            "range": "stddev: 0.0006361916348145917",
            "extra": "mean: 9.746664701298144 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.66993328072111,
            "unit": "iter/sec",
            "range": "stddev: 0.00005370379828191887",
            "extra": "mean: 10.033115976745892 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.54155592821746,
            "unit": "iter/sec",
            "range": "stddev: 0.00015604323964172841",
            "extra": "mean: 13.597754186436868 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 110.34384298222521,
            "unit": "iter/sec",
            "range": "stddev: 0.00008625740322566466",
            "extra": "mean: 9.062580865169663 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 102.4132461561114,
            "unit": "iter/sec",
            "range": "stddev: 0.011685571761623756",
            "extra": "mean: 9.764361911501876 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6826722519407685,
            "unit": "iter/sec",
            "range": "stddev: 0.0006019780533240963",
            "extra": "mean: 1.4648317654000151 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9137271969388787,
            "unit": "iter/sec",
            "range": "stddev: 0.00445378296321566",
            "extra": "mean: 1.0944185565999873 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1175.2156696769664,
            "unit": "iter/sec",
            "range": "stddev: 0.000012330045839387672",
            "extra": "mean: 850.907646827813 usec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11572.260230193886,
            "unit": "iter/sec",
            "range": "stddev: 0.000013379105621263397",
            "extra": "mean: 86.41354239432322 usec\nrounds: 4753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.280868415860425,
            "unit": "iter/sec",
            "range": "stddev: 0.00012770877101068626",
            "extra": "mean: 16.868848698114768 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.42407388172264,
            "unit": "iter/sec",
            "range": "stddev: 0.022836929735108473",
            "extra": "mean: 31.822735771431457 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8569221235523824,
            "unit": "iter/sec",
            "range": "stddev: 0.0030464982475926195",
            "extra": "mean: 1.1669671870000116 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.82890223981379,
            "unit": "iter/sec",
            "range": "stddev: 0.0006063533791377618",
            "extra": "mean: 8.276165565216022 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5685.543594358423,
            "unit": "iter/sec",
            "range": "stddev: 0.000045610295004997785",
            "extra": "mean: 175.88467723513136 usec\nrounds: 3501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 179.17873329850218,
            "unit": "iter/sec",
            "range": "stddev: 0.0036907121843929463",
            "extra": "mean: 5.5810194747501285 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.71206064655211,
            "unit": "iter/sec",
            "range": "stddev: 0.0002458369326446697",
            "extra": "mean: 20.95906121950875 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5523.311335437974,
            "unit": "iter/sec",
            "range": "stddev: 0.00004822891018562946",
            "extra": "mean: 181.05081159990493 usec\nrounds: 2569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 253.6538315813542,
            "unit": "iter/sec",
            "range": "stddev: 0.010833728796136591",
            "extra": "mean: 3.9423808178480866 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.43248886428553,
            "unit": "iter/sec",
            "range": "stddev: 0.0005449411025517329",
            "extra": "mean: 21.082595999995135 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.501818944074955,
            "unit": "iter/sec",
            "range": "stddev: 0.0007648920852160255",
            "extra": "mean: 26.66537325806149 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.26840727475168,
            "unit": "iter/sec",
            "range": "stddev: 0.0001606087300642213",
            "extra": "mean: 13.285786642856781 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.41554794020905,
            "unit": "iter/sec",
            "range": "stddev: 0.0008425722701613466",
            "extra": "mean: 15.524202338978887 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 733564.1486334827,
            "unit": "iter/sec",
            "range": "stddev: 2.0860093267668077e-7",
            "extra": "mean: 1.3632072966799784 usec\nrounds: 22832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.24375065871794,
            "unit": "iter/sec",
            "range": "stddev: 0.000049376203287996005",
            "extra": "mean: 5.148170773107538 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7140775.24187203,
            "unit": "iter/sec",
            "range": "stddev: 8.294706005311105e-9",
            "extra": "mean: 140.04081715650867 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 316.51021857606037,
            "unit": "iter/sec",
            "range": "stddev: 0.0002050032624567468",
            "extra": "mean: 3.159455655172443 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.14237180306668,
            "unit": "iter/sec",
            "range": "stddev: 0.0007054603922827195",
            "extra": "mean: 9.98578306060629 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1744.1171476783973,
            "unit": "iter/sec",
            "range": "stddev: 0.000008240118058209675",
            "extra": "mean: 573.3559820400279 usec\nrounds: 1392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.39832154615758,
            "unit": "iter/sec",
            "range": "stddev: 0.0006018128560845702",
            "extra": "mean: 8.237346177968234 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.32321754120375,
            "unit": "iter/sec",
            "range": "stddev: 0.00004738371450593516",
            "extra": "mean: 6.522169414630645 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5423.219896304601,
            "unit": "iter/sec",
            "range": "stddev: 0.00004897319769973985",
            "extra": "mean: 184.392301828182 usec\nrounds: 2571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.78999921188745,
            "unit": "iter/sec",
            "range": "stddev: 0.00006722834316870079",
            "extra": "mean: 6.258213936617917 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.30069706439822,
            "unit": "iter/sec",
            "range": "stddev: 0.0006945473742897217",
            "extra": "mean: 8.312503787610554 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.82552935707008,
            "unit": "iter/sec",
            "range": "stddev: 0.0006532079319707223",
            "extra": "mean: 8.345466991596451 msec\nrounds: 119"
          }
        ]
      }
    ]
  }
}