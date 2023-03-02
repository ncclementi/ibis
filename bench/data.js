window.BENCHMARK_DATA = {
  "lastUpdate": 1677794938842,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "82429de7b77acf531157cd4b149c889a32ce7df1",
          "message": "ci: cut down the druid RAM requirements even more",
          "timestamp": "2023-03-02T17:02:28-05:00",
          "tree_id": "87c02fe10187b38e3af1167c9ef0c3639869ce16",
          "url": "https://github.com/ibis-project/ibis/commit/82429de7b77acf531157cd4b149c889a32ce7df1"
        },
        "date": 1677794841648,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5101558546215627,
            "unit": "iter/sec",
            "range": "stddev: 0.007970879136870007",
            "extra": "mean: 1.960185286399991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 208.205222057692,
            "unit": "iter/sec",
            "range": "stddev: 0.0004361277709391857",
            "extra": "mean: 4.802953499998708 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8444557.69315681,
            "unit": "iter/sec",
            "range": "stddev: 3.867725829614106e-7",
            "extra": "mean: 118.41946450432302 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 113.17995005418169,
            "unit": "iter/sec",
            "range": "stddev: 0.0003416819649567112",
            "extra": "mean: 8.835487199996805 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 565.9813818002999,
            "unit": "iter/sec",
            "range": "stddev: 0.00016993464771526912",
            "extra": "mean: 1.7668425714272677 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 114.84825166466378,
            "unit": "iter/sec",
            "range": "stddev: 0.014208488493101194",
            "extra": "mean: 8.707141689190184 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5662.496521119539,
            "unit": "iter/sec",
            "range": "stddev: 0.000025074961566752763",
            "extra": "mean: 176.60054999950603 usec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 68.4352504787932,
            "unit": "iter/sec",
            "range": "stddev: 0.0017405154475134237",
            "extra": "mean: 14.6123524499977 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 129.39130806785118,
            "unit": "iter/sec",
            "range": "stddev: 0.0038393447270345243",
            "extra": "mean: 7.728494401460201 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5144007934739253,
            "unit": "iter/sec",
            "range": "stddev: 0.01635929762036997",
            "extra": "mean: 1.944009442999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.37178854955214,
            "unit": "iter/sec",
            "range": "stddev: 0.0012639996243443915",
            "extra": "mean: 21.564835674419072 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 86.70914690131116,
            "unit": "iter/sec",
            "range": "stddev: 0.0007473689020113911",
            "extra": "mean: 11.532808656717146 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2017767.7588069434,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011695716902761323",
            "extra": "mean: 495.59717446929784 nsec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 104.05650767840683,
            "unit": "iter/sec",
            "range": "stddev: 0.0011875970893440774",
            "extra": "mean: 9.610162999997682 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 144.56249660640515,
            "unit": "iter/sec",
            "range": "stddev: 0.00037312935109709366",
            "extra": "mean: 6.917423422221755 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 65.35726302913508,
            "unit": "iter/sec",
            "range": "stddev: 0.01647983930268162",
            "extra": "mean: 15.30051831506803 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4042730.4573974526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014586308554609711",
            "extra": "mean: 247.35757442613956 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1477053.9865812864,
            "unit": "iter/sec",
            "range": "stddev: 0.000002026456012806604",
            "extra": "mean: 677.0233241877291 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 68.4021888706676,
            "unit": "iter/sec",
            "range": "stddev: 0.0011157566900918674",
            "extra": "mean: 14.619415204545046 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 118.79903918891289,
            "unit": "iter/sec",
            "range": "stddev: 0.000797987803009382",
            "extra": "mean: 8.41757649579818 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 211.18985207416077,
            "unit": "iter/sec",
            "range": "stddev: 0.0009600053659768025",
            "extra": "mean: 4.735076000000431 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5532944030765797,
            "unit": "iter/sec",
            "range": "stddev: 0.014118973369196463",
            "extra": "mean: 1.807356073799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 33.315874545893315,
            "unit": "iter/sec",
            "range": "stddev: 0.001768368341533769",
            "extra": "mean: 30.01572114285876 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.63383891952792,
            "unit": "iter/sec",
            "range": "stddev: 0.0018678697878307103",
            "extra": "mean: 32.64363968965501 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.340679408140077,
            "unit": "iter/sec",
            "range": "stddev: 0.002310371486358492",
            "extra": "mean: 136.22717250001415 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 103.25465966198372,
            "unit": "iter/sec",
            "range": "stddev: 0.001017186142528387",
            "extra": "mean: 9.68479295049364 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1546154.5706096117,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012401963777196183",
            "extra": "mean: 646.7658661098314 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6675939873339438,
            "unit": "iter/sec",
            "range": "stddev: 0.01001500822577164",
            "extra": "mean: 599.6663501999933 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 83.65965505427884,
            "unit": "iter/sec",
            "range": "stddev: 0.0006480238704134835",
            "extra": "mean: 11.953192962022069 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3811.6856367949867,
            "unit": "iter/sec",
            "range": "stddev: 0.00010932269860339587",
            "extra": "mean: 262.3511210753568 usec\nrounds: 2007"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.235307918509932,
            "unit": "iter/sec",
            "range": "stddev: 0.0033933719080768807",
            "extra": "mean: 89.00512627273181 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 98.06488462865775,
            "unit": "iter/sec",
            "range": "stddev: 0.0010569994792866135",
            "extra": "mean: 10.197330102275647 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 225.4739551401148,
            "unit": "iter/sec",
            "range": "stddev: 0.00021263161730817855",
            "extra": "mean: 4.435102047057171 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59007.680980579746,
            "unit": "iter/sec",
            "range": "stddev: 0.000009126947150374519",
            "extra": "mean: 16.946946285333837 usec\nrounds: 10835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 207.52492529107863,
            "unit": "iter/sec",
            "range": "stddev: 0.0004872344472082455",
            "extra": "mean: 4.818698277314785 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 212.93667654083214,
            "unit": "iter/sec",
            "range": "stddev: 0.0004593391184631023",
            "extra": "mean: 4.696231838709302 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.572965847009904,
            "unit": "iter/sec",
            "range": "stddev: 0.0006581473073236426",
            "extra": "mean: 19.390003727272124 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 102.0875381467848,
            "unit": "iter/sec",
            "range": "stddev: 0.0012128090534222187",
            "extra": "mean: 9.795514889997321 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 71.60778847880847,
            "unit": "iter/sec",
            "range": "stddev: 0.001469971768294057",
            "extra": "mean: 13.964961371428737 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.047313722319162,
            "unit": "iter/sec",
            "range": "stddev: 0.004515736914409844",
            "extra": "mean: 247.07746139999927 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3411.4481352698335,
            "unit": "iter/sec",
            "range": "stddev: 0.00011715253508281186",
            "extra": "mean: 293.13064726423096 usec\nrounds: 1718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3463.7510355950812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000941135923503806",
            "extra": "mean: 288.7043525136608 usec\nrounds: 1929"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4544935.50665935,
            "unit": "iter/sec",
            "range": "stddev: 4.1271643088427553e-7",
            "extra": "mean: 220.02512434660593 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 61.01590657965307,
            "unit": "iter/sec",
            "range": "stddev: 0.023869934358926682",
            "extra": "mean: 16.389168924246867 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 214.1945742057914,
            "unit": "iter/sec",
            "range": "stddev: 0.0005672610852955527",
            "extra": "mean: 4.668652339621038 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 191.1532054617319,
            "unit": "iter/sec",
            "range": "stddev: 0.000555107084874423",
            "extra": "mean: 5.231405864131304 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 600003.663109625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019173999227051473",
            "extra": "mean: 1.6666564914242747 usec\nrounds: 20081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.22928169107607,
            "unit": "iter/sec",
            "range": "stddev: 0.001522621871125511",
            "extra": "mean: 9.878564613860691 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 252.06418354739492,
            "unit": "iter/sec",
            "range": "stddev: 0.0003825644290367702",
            "extra": "mean: 3.9672435247508013 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3460.7677732424027,
            "unit": "iter/sec",
            "range": "stddev: 0.00011098335977528311",
            "extra": "mean: 288.9532223836843 usec\nrounds: 2073"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 64.82790739216176,
            "unit": "iter/sec",
            "range": "stddev: 0.0013728011165189736",
            "extra": "mean: 15.425455490190764 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 204.710368144328,
            "unit": "iter/sec",
            "range": "stddev: 0.0006191579885338913",
            "extra": "mean: 4.8849504256421685 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 198.94563785560393,
            "unit": "iter/sec",
            "range": "stddev: 0.0004144467355359077",
            "extra": "mean: 5.0264987500042935 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2002780.155051825,
            "unit": "iter/sec",
            "range": "stddev: 8.003766306264581e-7",
            "extra": "mean: 499.30592605375244 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.6707607209814,
            "unit": "iter/sec",
            "range": "stddev: 0.001175973567720009",
            "extra": "mean: 13.392122838237194 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 54.473326908502656,
            "unit": "iter/sec",
            "range": "stddev: 0.0006849619641204206",
            "extra": "mean: 18.357608333334817 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9364.947904225466,
            "unit": "iter/sec",
            "range": "stddev: 0.00005230063965659611",
            "extra": "mean: 106.7811599409752 usec\nrounds: 3395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3582.714186396535,
            "unit": "iter/sec",
            "range": "stddev: 0.0001615839230626022",
            "extra": "mean: 279.117994898106 usec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 417986.99182785774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017656791670102286",
            "extra": "mean: 2.392418949754868 usec\nrounds: 1752"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 176.44748160449373,
            "unit": "iter/sec",
            "range": "stddev: 0.004937588781192971",
            "extra": "mean: 5.667408743421432 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1226717939716142,
            "unit": "iter/sec",
            "range": "stddev: 0.027684217356512494",
            "extra": "mean: 890.732274000004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.427666002135908,
            "unit": "iter/sec",
            "range": "stddev: 0.002106647462434808",
            "extra": "mean: 36.45953687499789 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 875.7807286093988,
            "unit": "iter/sec",
            "range": "stddev: 0.00009910084490525296",
            "extra": "mean: 1.1418383247457864 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3469.239919112258,
            "unit": "iter/sec",
            "range": "stddev: 0.0001244208455026215",
            "extra": "mean: 288.2475767936769 usec\nrounds: 2077"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 384.1733773435043,
            "unit": "iter/sec",
            "range": "stddev: 0.00020861626825011243",
            "extra": "mean: 2.602991406939324 msec\nrounds: 317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8439.115299436706,
            "unit": "iter/sec",
            "range": "stddev: 0.00012832717571997754",
            "extra": "mean: 118.49583333299736 usec\nrounds: 3708"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 72.47223858471638,
            "unit": "iter/sec",
            "range": "stddev: 0.001575980209683322",
            "extra": "mean: 13.798387072465696 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 24.53262792411459,
            "unit": "iter/sec",
            "range": "stddev: 0.04637030553323839",
            "extra": "mean: 40.76204159999672 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5033876.082717121,
            "unit": "iter/sec",
            "range": "stddev: 1.2957075218233985e-7",
            "extra": "mean: 198.6540756204479 nsec\nrounds: 51283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3508.551384058212,
            "unit": "iter/sec",
            "range": "stddev: 0.0002329287600374144",
            "extra": "mean: 285.017914955926 usec\nrounds: 1705"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.74969783469274,
            "unit": "iter/sec",
            "range": "stddev: 0.0013684359298309096",
            "extra": "mean: 56.33898724999398 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09767863912119035,
            "unit": "iter/sec",
            "range": "stddev: 0.044966137899149175",
            "extra": "mean: 10.237652868600014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4743388073775359,
            "unit": "iter/sec",
            "range": "stddev: 0.07413341890405395",
            "extra": "mean: 2.108197736400007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 97.13818156229374,
            "unit": "iter/sec",
            "range": "stddev: 0.0010902484274408436",
            "extra": "mean: 10.294613136840637 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 116174.62523984512,
            "unit": "iter/sec",
            "range": "stddev: 0.000005518764662765657",
            "extra": "mean: 8.607731662017223 usec\nrounds: 32787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3393.0314697875256,
            "unit": "iter/sec",
            "range": "stddev: 0.00022008587295666566",
            "extra": "mean: 294.7216991366782 usec\nrounds: 1622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3351.0659790248737,
            "unit": "iter/sec",
            "range": "stddev: 0.00011218808177796761",
            "extra": "mean: 298.41250702291154 usec\nrounds: 2278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 71.09826164414514,
            "unit": "iter/sec",
            "range": "stddev: 0.0022752534807554997",
            "extra": "mean: 14.06504149152216 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.18653100482712,
            "unit": "iter/sec",
            "range": "stddev: 0.0015680424640717033",
            "extra": "mean: 10.505688036359762 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 25.262232850734787,
            "unit": "iter/sec",
            "range": "stddev: 0.0030176645911319045",
            "extra": "mean: 39.58478278260798 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 97.74999402488761,
            "unit": "iter/sec",
            "range": "stddev: 0.0008489757006525283",
            "extra": "mean: 10.230179653467756 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 213.0992369803489,
            "unit": "iter/sec",
            "range": "stddev: 0.0006688691048827089",
            "extra": "mean: 4.692649369233619 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 82.33207510221257,
            "unit": "iter/sec",
            "range": "stddev: 0.022248001654092724",
            "extra": "mean: 12.145934603962464 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1284.7704168933499,
            "unit": "iter/sec",
            "range": "stddev: 0.0001644695782226644",
            "extra": "mean: 778.3491796285742 usec\nrounds: 1080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.97537544496008,
            "unit": "iter/sec",
            "range": "stddev: 0.0010622345812271964",
            "extra": "mean: 9.71105951960812 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 496.24799298765845,
            "unit": "iter/sec",
            "range": "stddev: 0.00016429385141687573",
            "extra": "mean: 2.015121499997421 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 74.57835031479031,
            "unit": "iter/sec",
            "range": "stddev: 0.0014115407447240786",
            "extra": "mean: 13.408717084503287 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8243.598048341237,
            "unit": "iter/sec",
            "range": "stddev: 0.00007539529273519767",
            "extra": "mean: 121.30625415454581 usec\nrounds: 4934"
          }
        ]
      }
    ]
  }
}