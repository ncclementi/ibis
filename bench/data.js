window.BENCHMARK_DATA = {
  "lastUpdate": 1677494781586,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "7d4aa0fa65f0c078b2686f05ebd23e54b4b75985",
          "message": "feat(common): add abstract mapping collection with support for set operations",
          "timestamp": "2023-02-27T05:39:02-05:00",
          "tree_id": "35ad6106bdb6d1a277f9d69186610b30ccd0e6df",
          "url": "https://github.com/ibis-project/ibis/commit/7d4aa0fa65f0c078b2686f05ebd23e54b4b75985"
        },
        "date": 1677494706998,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.82479867779633,
            "unit": "iter/sec",
            "range": "stddev: 0.00431574849617353",
            "extra": "mean: 207.26253400001724 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 245.51167718712827,
            "unit": "iter/sec",
            "range": "stddev: 0.00018171149443738717",
            "extra": "mean: 4.073126017699773 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1405857.7016983575,
            "unit": "iter/sec",
            "range": "stddev: 1.0833295751116245e-7",
            "extra": "mean: 711.3095434850499 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.123092706741053,
            "unit": "iter/sec",
            "range": "stddev: 0.0024002630374102677",
            "extra": "mean: 76.20154961538307 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.97094484685452,
            "unit": "iter/sec",
            "range": "stddev: 0.00021346273727024058",
            "extra": "mean: 11.631836799995199 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9302.290996697793,
            "unit": "iter/sec",
            "range": "stddev: 0.000017053028863369046",
            "extra": "mean: 107.50039967089704 usec\nrounds: 2427"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56209.3245429979,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012239886037190773",
            "extra": "mean: 17.790642533607386 usec\nrounds: 12804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4367095.228954681,
            "unit": "iter/sec",
            "range": "stddev: 1.4483219730598424e-8",
            "extra": "mean: 228.98516006014165 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13453146409505382,
            "unit": "iter/sec",
            "range": "stddev: 0.07192728591260894",
            "extra": "mean: 7.433205359999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.33684874835695,
            "unit": "iter/sec",
            "range": "stddev: 0.020520555970393897",
            "extra": "mean: 34.086824000004654 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 251.92976988289342,
            "unit": "iter/sec",
            "range": "stddev: 0.00017804999856125964",
            "extra": "mean: 3.9693601929809175 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 110.34248127944343,
            "unit": "iter/sec",
            "range": "stddev: 0.0005809390636826689",
            "extra": "mean: 9.062692703705746 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.44282527679682,
            "unit": "iter/sec",
            "range": "stddev: 0.0005554034188191349",
            "extra": "mean: 13.081672431376452 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.82994403736222,
            "unit": "iter/sec",
            "range": "stddev: 0.00014701126113747645",
            "extra": "mean: 4.507957680553589 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6275.222060976709,
            "unit": "iter/sec",
            "range": "stddev: 0.000017865339989595494",
            "extra": "mean: 159.35691044602726 usec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 103.0915050356807,
            "unit": "iter/sec",
            "range": "stddev: 0.0005015574144529571",
            "extra": "mean: 9.70012029268457 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 167.25290146649547,
            "unit": "iter/sec",
            "range": "stddev: 0.00007818803547858759",
            "extra": "mean: 5.978969520001556 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.824855745731117,
            "unit": "iter/sec",
            "range": "stddev: 0.02200841358097371",
            "extra": "mean: 32.44135214285596 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4159175.0553064127,
            "unit": "iter/sec",
            "range": "stddev: 1.0947244622204667e-8",
            "extra": "mean: 240.4322940736801 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5530687155259832,
            "unit": "iter/sec",
            "range": "stddev: 0.005992970027571319",
            "extra": "mean: 643.8865131999819 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 208.58348089857725,
            "unit": "iter/sec",
            "range": "stddev: 0.00841393471729078",
            "extra": "mean: 4.794243511959825 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 573370.889666578,
            "unit": "iter/sec",
            "range": "stddev: 4.100944160678857e-7",
            "extra": "mean: 1.7440718006829956 usec\nrounds: 22075"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 111.42831551612574,
            "unit": "iter/sec",
            "range": "stddev: 0.0005626887621463172",
            "extra": "mean: 8.974379585369228 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 262.6788043315744,
            "unit": "iter/sec",
            "range": "stddev: 0.000014878979533578958",
            "extra": "mean: 3.806930683062343 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 99.55846265390772,
            "unit": "iter/sec",
            "range": "stddev: 0.00034263678577203143",
            "extra": "mean: 10.044349554454971 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1617129.071146786,
            "unit": "iter/sec",
            "range": "stddev: 1.1684961673491167e-7",
            "extra": "mean: 618.3798299358076 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3922.445393170133,
            "unit": "iter/sec",
            "range": "stddev: 0.00007460550568863911",
            "extra": "mean: 254.94300105266646 usec\nrounds: 1898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3967.13594212004,
            "unit": "iter/sec",
            "range": "stddev: 0.000053776077947488214",
            "extra": "mean: 252.07101914072533 usec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 257.0811312533549,
            "unit": "iter/sec",
            "range": "stddev: 0.00018122083024111588",
            "extra": "mean: 3.889822621849654 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 221.5659990236908,
            "unit": "iter/sec",
            "range": "stddev: 0.008998072518299231",
            "extra": "mean: 4.513327877049743 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.39593185421627,
            "unit": "iter/sec",
            "range": "stddev: 0.00009042797240454928",
            "extra": "mean: 10.37388176829229 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.66834062754594,
            "unit": "iter/sec",
            "range": "stddev: 0.000045702577786625595",
            "extra": "mean: 11.406626301374224 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3693.4042780039954,
            "unit": "iter/sec",
            "range": "stddev: 0.00005043945862179429",
            "extra": "mean: 270.75292189254304 usec\nrounds: 1754"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 88.41841626674767,
            "unit": "iter/sec",
            "range": "stddev: 0.0005319210059836097",
            "extra": "mean: 11.309861024688804 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 82.66609128916126,
            "unit": "iter/sec",
            "range": "stddev: 0.0005878990966203816",
            "extra": "mean: 12.096858390244401 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4027.2490759170446,
            "unit": "iter/sec",
            "range": "stddev: 0.00006294425684441852",
            "extra": "mean: 248.30845600784946 usec\nrounds: 2796"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1356.1591475996313,
            "unit": "iter/sec",
            "range": "stddev: 0.00003778679582022787",
            "extra": "mean: 737.3765842821439 usec\nrounds: 878"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3457.0224029160663,
            "unit": "iter/sec",
            "range": "stddev: 0.000053771041050508896",
            "extra": "mean: 289.2662770008318 usec\nrounds: 1574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 75.54906945607408,
            "unit": "iter/sec",
            "range": "stddev: 0.01665362531848993",
            "extra": "mean: 13.236430404763919 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 104.5309219150576,
            "unit": "iter/sec",
            "range": "stddev: 0.0006152418654538191",
            "extra": "mean: 9.56654721568997 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 533.2831913819282,
            "unit": "iter/sec",
            "range": "stddev: 0.00009141545015706152",
            "extra": "mean: 1.8751762968726635 msec\nrounds: 448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.0903120158229,
            "unit": "iter/sec",
            "range": "stddev: 0.0006358814227160127",
            "extra": "mean: 11.891976329114279 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3933.32585695775,
            "unit": "iter/sec",
            "range": "stddev: 0.000026835818033533957",
            "extra": "mean: 254.2377713839999 usec\nrounds: 1929"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 96.09350095320235,
            "unit": "iter/sec",
            "range": "stddev: 0.00006518203881558885",
            "extra": "mean: 10.406531035714904 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 109.09027999091374,
            "unit": "iter/sec",
            "range": "stddev: 0.0006254046179769322",
            "extra": "mean: 9.16671952884612 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5645299375893224,
            "unit": "iter/sec",
            "range": "stddev: 0.07478043223899902",
            "extra": "mean: 1.7713852417999987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 256.70376973652196,
            "unit": "iter/sec",
            "range": "stddev: 0.00019244495306994507",
            "extra": "mean: 3.8955407668005395 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 153.71607172839597,
            "unit": "iter/sec",
            "range": "stddev: 0.0001270515640234314",
            "extra": "mean: 6.505500620435579 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.86726472462375,
            "unit": "iter/sec",
            "range": "stddev: 0.00017985062729563244",
            "extra": "mean: 24.46946245946013 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7295791551414349,
            "unit": "iter/sec",
            "range": "stddev: 0.0022159023307877657",
            "extra": "mean: 1.3706531949999885 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.20261117907765,
            "unit": "iter/sec",
            "range": "stddev: 0.0001798100956639911",
            "extra": "mean: 17.481719442306833 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.11294541160387,
            "unit": "iter/sec",
            "range": "stddev: 0.0008815361744458404",
            "extra": "mean: 16.635351888895556 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5375809.779594009,
            "unit": "iter/sec",
            "range": "stddev: 4.642387502822085e-9",
            "extra": "mean: 186.018486702364 nsec\nrounds: 51814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10701496.079276714,
            "unit": "iter/sec",
            "range": "stddev: 3.5088580496117008e-9",
            "extra": "mean: 93.44487841629488 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 124192.34717199665,
            "unit": "iter/sec",
            "range": "stddev: 2.9204142782870856e-7",
            "extra": "mean: 8.052025932121875 usec\nrounds: 26955"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10476.521513012647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016731028455220459",
            "extra": "mean: 95.45152928459345 usec\nrounds: 3688"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 602.120964051732,
            "unit": "iter/sec",
            "range": "stddev: 0.00006265188512408459",
            "extra": "mean: 1.6607958528314646 msec\nrounds: 530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.862421213581188,
            "unit": "iter/sec",
            "range": "stddev: 0.006265050624978074",
            "extra": "mean: 1.1595262085999933 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 346339.76224682626,
            "unit": "iter/sec",
            "range": "stddev: 4.1353183138622505e-7",
            "extra": "mean: 2.8873381257544697 usec\nrounds: 2017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3885.1241641017787,
            "unit": "iter/sec",
            "range": "stddev: 0.00005371954881429829",
            "extra": "mean: 257.3920311839493 usec\nrounds: 1892"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 147.531411366528,
            "unit": "iter/sec",
            "range": "stddev: 0.00008686721248369283",
            "extra": "mean: 6.778217538471136 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 111.1171198587483,
            "unit": "iter/sec",
            "range": "stddev: 0.0006288994323061134",
            "extra": "mean: 8.999513317760544 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1345795.6233571658,
            "unit": "iter/sec",
            "range": "stddev: 1.0929686204772238e-7",
            "extra": "mean: 743.0548759739919 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 960.7189747473536,
            "unit": "iter/sec",
            "range": "stddev: 0.000013115582566250317",
            "extra": "mean: 1.0408871129697177 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 108.02248114963302,
            "unit": "iter/sec",
            "range": "stddev: 0.000639708380055603",
            "extra": "mean: 9.257332264149696 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 86.1448062901677,
            "unit": "iter/sec",
            "range": "stddev: 0.0006185018072641956",
            "extra": "mean: 11.608360887499458 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 111.5680859502079,
            "unit": "iter/sec",
            "range": "stddev: 0.0006026399831440578",
            "extra": "mean: 8.963136648649627 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10660.605023078431,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016380019964118764",
            "extra": "mean: 93.80330645729458 usec\nrounds: 5606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.7070839394,
            "unit": "iter/sec",
            "range": "stddev: 0.0003830168697040441",
            "extra": "mean: 15.45425846938997 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 260.1070413391187,
            "unit": "iter/sec",
            "range": "stddev: 0.00017391454424534695",
            "extra": "mean: 3.844571046026524 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8635379622530737,
            "unit": "iter/sec",
            "range": "stddev: 0.004590553821236739",
            "extra": "mean: 1.1580266805999826 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 264.4548653075807,
            "unit": "iter/sec",
            "range": "stddev: 0.00003342894202222667",
            "extra": "mean: 3.781363594263715 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.960587696647345,
            "unit": "iter/sec",
            "range": "stddev: 0.0009958473118766653",
            "extra": "mean: 24.41371221052697 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.842720426440174,
            "unit": "iter/sec",
            "range": "stddev: 0.0007292191658132867",
            "extra": "mean: 40.2532405000097 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 131.1525090819436,
            "unit": "iter/sec",
            "range": "stddev: 0.0001799737112587083",
            "extra": "mean: 7.624711162599289 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3437.5794417954203,
            "unit": "iter/sec",
            "range": "stddev: 0.00005305286693853722",
            "extra": "mean: 290.90236805631696 usec\nrounds: 1872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.0097025369357,
            "unit": "iter/sec",
            "range": "stddev: 0.0006162126412779225",
            "extra": "mean: 12.046784525640767 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1421557.7246942911,
            "unit": "iter/sec",
            "range": "stddev: 9.403030910060844e-8",
            "extra": "mean: 703.4536710178631 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.39820983167041,
            "unit": "iter/sec",
            "range": "stddev: 0.0000951041564976924",
            "extra": "mean: 14.83718933333004 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.996567017985415,
            "unit": "iter/sec",
            "range": "stddev: 0.00024085880234180632",
            "extra": "mean: 111.15350977776946 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1925386872717185,
            "unit": "iter/sec",
            "range": "stddev: 0.0018199589884870125",
            "extra": "mean: 456.0922941999934 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 425.7292203991537,
            "unit": "iter/sec",
            "range": "stddev: 0.000025288250664977645",
            "extra": "mean: 2.3489108853332255 msec\nrounds: 375"
          }
        ]
      }
    ]
  }
}