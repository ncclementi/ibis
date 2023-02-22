window.BENCHMARK_DATA = {
  "lastUpdate": 1677025474283,
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
          "id": "ba0984d935d2547c3c1107b29b6daba4f35b4e65",
          "message": "chore(flake/nixpkgs): `a1970c01` -> `0663b90f`",
          "timestamp": "2023-02-22T00:19:11Z",
          "tree_id": "2ab5631fee0ee336a4923d3d2b0199a6ea94e6c7",
          "url": "https://github.com/ibis-project/ibis/commit/ba0984d935d2547c3c1107b29b6daba4f35b4e65"
        },
        "date": 1677025390174,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.76197087697471,
            "unit": "iter/sec",
            "range": "stddev: 0.00016464038475619234",
            "extra": "mean: 7.054078000000648 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.27536279739674,
            "unit": "iter/sec",
            "range": "stddev: 0.00019591630547766145",
            "extra": "mean: 10.07299265217314 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2337.2588548014533,
            "unit": "iter/sec",
            "range": "stddev: 0.003150709829281372",
            "extra": "mean: 427.8516253968576 usec\nrounds: 315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1453243.287580647,
            "unit": "iter/sec",
            "range": "stddev: 1.1468915037964128e-7",
            "extra": "mean: 688.1160288479953 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 83.81385354339176,
            "unit": "iter/sec",
            "range": "stddev: 0.00047394929761104",
            "extra": "mean: 11.93120179687579 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 256.78512977854143,
            "unit": "iter/sec",
            "range": "stddev: 0.00021156190239839432",
            "extra": "mean: 3.894306500000322 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 65.83693525097058,
            "unit": "iter/sec",
            "range": "stddev: 0.0005061385095118808",
            "extra": "mean: 15.189042384612788 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 69.72210199448645,
            "unit": "iter/sec",
            "range": "stddev: 0.0005446656186082583",
            "extra": "mean: 14.342654214284574 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 573059.817464726,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010771973927833203",
            "extra": "mean: 1.7450185295212288 usec\nrounds: 23530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.606388763296984,
            "unit": "iter/sec",
            "range": "stddev: 0.00020267694920280703",
            "extra": "mean: 22.93241949999971 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.11265445850165,
            "unit": "iter/sec",
            "range": "stddev: 0.00015684223495301855",
            "extra": "mean: 17.821291999998934 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57327.94266815564,
            "unit": "iter/sec",
            "range": "stddev: 5.941601562654347e-7",
            "extra": "mean: 17.44350055937865 usec\nrounds: 12516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 240.70598728457256,
            "unit": "iter/sec",
            "range": "stddev: 0.005112059358904082",
            "extra": "mean: 4.154445891774843 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5854923779102215,
            "unit": "iter/sec",
            "range": "stddev: 0.010432586974467051",
            "extra": "mean: 1.7079641643999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7325368134240267,
            "unit": "iter/sec",
            "range": "stddev: 0.009740687718386385",
            "extra": "mean: 1.3651191061999952 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4313.264761699483,
            "unit": "iter/sec",
            "range": "stddev: 0.00005371077691520796",
            "extra": "mean: 231.8429438599978 usec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.06369526056227,
            "unit": "iter/sec",
            "range": "stddev: 0.0001449883398978796",
            "extra": "mean: 8.470004244683656 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 87.9443763763189,
            "unit": "iter/sec",
            "range": "stddev: 0.0006122611142587882",
            "extra": "mean: 11.370823709306256 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 112.51495539245376,
            "unit": "iter/sec",
            "range": "stddev: 0.00025657106372132453",
            "extra": "mean: 8.887707385315897 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 267.96496115675404,
            "unit": "iter/sec",
            "range": "stddev: 0.000015833850040531127",
            "extra": "mean: 3.731831190477998 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5473426.570190119,
            "unit": "iter/sec",
            "range": "stddev: 4.265955348505702e-9",
            "extra": "mean: 182.70090722447026 nsec\nrounds: 54055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 274.04392559316983,
            "unit": "iter/sec",
            "range": "stddev: 0.00012379852285017857",
            "extra": "mean: 3.649050048584341 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 84.40359930243416,
            "unit": "iter/sec",
            "range": "stddev: 0.0003346681346531792",
            "extra": "mean: 11.847835972217366 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1527848220777553,
            "unit": "iter/sec",
            "range": "stddev: 0.03662048300998386",
            "extra": "mean: 6.5451527606000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 440.67490391514616,
            "unit": "iter/sec",
            "range": "stddev: 0.000024688572751017507",
            "extra": "mean: 2.269246537789123 msec\nrounds: 344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 69.3182007642593,
            "unit": "iter/sec",
            "range": "stddev: 0.0005411621715644402",
            "extra": "mean: 14.426225565214082 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 325.21560873434254,
            "unit": "iter/sec",
            "range": "stddev: 0.00007530229082009822",
            "extra": "mean: 3.0748831641007293 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 88.49951972443206,
            "unit": "iter/sec",
            "range": "stddev: 0.000521375169337596",
            "extra": "mean: 11.299496348836456 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8493060048856296,
            "unit": "iter/sec",
            "range": "stddev: 0.006569746542496762",
            "extra": "mean: 1.177431919999981 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4422.506210164327,
            "unit": "iter/sec",
            "range": "stddev: 0.000018975741840585028",
            "extra": "mean: 226.1161324548695 usec\nrounds: 1442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 990.5803252729228,
            "unit": "iter/sec",
            "range": "stddev: 0.000012722836107171035",
            "extra": "mean: 1.0095092487572697 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.03846172581653,
            "unit": "iter/sec",
            "range": "stddev: 0.00012744238968692733",
            "extra": "mean: 13.881473535707503 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4558489.338345216,
            "unit": "iter/sec",
            "range": "stddev: 1.1749294253864514e-8",
            "extra": "mean: 219.37092000795482 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 101.4164218876211,
            "unit": "iter/sec",
            "range": "stddev: 0.00007513029062037311",
            "extra": "mean: 9.86033604210661 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 626.1118122791621,
            "unit": "iter/sec",
            "range": "stddev: 0.000013661977834011404",
            "extra": "mean: 1.5971588147487847 msec\nrounds: 556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.156898315618323,
            "unit": "iter/sec",
            "range": "stddev: 0.001168874659612913",
            "extra": "mean: 109.20728455555364 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 256.98625091905444,
            "unit": "iter/sec",
            "range": "stddev: 0.00018995446876136075",
            "extra": "mean: 3.8912587596562904 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1454.0583074332458,
            "unit": "iter/sec",
            "range": "stddev: 0.000029195735362898786",
            "extra": "mean: 687.7303302680033 usec\nrounds: 1196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 72.81986667043884,
            "unit": "iter/sec",
            "range": "stddev: 0.0005294129607554383",
            "extra": "mean: 13.73251621739029 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.78736331250646,
            "unit": "iter/sec",
            "range": "stddev: 0.000442380837302634",
            "extra": "mean: 14.329241750000202 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9265.091851852736,
            "unit": "iter/sec",
            "range": "stddev: 0.000012967952564802188",
            "extra": "mean: 107.9320114673262 usec\nrounds: 3924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.69079929838408,
            "unit": "iter/sec",
            "range": "stddev: 0.00015041878437076022",
            "extra": "mean: 10.673406647062807 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4581.559660351431,
            "unit": "iter/sec",
            "range": "stddev: 0.0000476421379109222",
            "extra": "mean: 218.2662835658227 usec\nrounds: 1862"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 87.1974258810927,
            "unit": "iter/sec",
            "range": "stddev: 0.0005468286588920065",
            "extra": "mean: 11.468228447060536 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.476722731147355,
            "unit": "iter/sec",
            "range": "stddev: 0.000559590953567149",
            "extra": "mean: 27.414743571414743 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10153.335441607216,
            "unit": "iter/sec",
            "range": "stddev: 0.000002489971123290371",
            "extra": "mean: 98.48980226754979 usec\nrounds: 4410"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.50650484276003,
            "unit": "iter/sec",
            "range": "stddev: 0.000748802067923232",
            "extra": "mean: 29.844951142854775 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.79642790263787,
            "unit": "iter/sec",
            "range": "stddev: 0.0001457425246824433",
            "extra": "mean: 11.389985035711854 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.75198330687273,
            "unit": "iter/sec",
            "range": "stddev: 0.00032179930859670787",
            "extra": "mean: 38.83196055556305 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4077.386087748251,
            "unit": "iter/sec",
            "range": "stddev: 0.00004770812826466409",
            "extra": "mean: 245.2551655593285 usec\nrounds: 1806"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.944582895838096,
            "unit": "iter/sec",
            "range": "stddev: 0.0007157550064970882",
            "extra": "mean: 24.42325527027526 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.196796531387598,
            "unit": "iter/sec",
            "range": "stddev: 0.002274316800993203",
            "extra": "mean: 455.20829340000546 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3995.7870114055686,
            "unit": "iter/sec",
            "range": "stddev: 0.00004863369179829373",
            "extra": "mean: 250.2635894119485 usec\nrounds: 1851"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 387348.3565084158,
            "unit": "iter/sec",
            "range": "stddev: 4.092279553005826e-7",
            "extra": "mean: 2.5816554612857208 usec\nrounds: 1904"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.692127287546704,
            "unit": "iter/sec",
            "range": "stddev: 0.00027030604105469436",
            "extra": "mean: 73.0346701428581 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120011.07167697797,
            "unit": "iter/sec",
            "range": "stddev: 3.8369391649923427e-7",
            "extra": "mean: 8.332564537808661 usec\nrounds: 33004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.80298923852271,
            "unit": "iter/sec",
            "range": "stddev: 0.00013858294538483657",
            "extra": "mean: 14.534252233333214 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8456867015442253,
            "unit": "iter/sec",
            "range": "stddev: 0.01529377831129006",
            "extra": "mean: 1.182471000400028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12122694.062530823,
            "unit": "iter/sec",
            "range": "stddev: 3.792070784532614e-9",
            "extra": "mean: 82.48991476984821 nsec\nrounds: 120497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 78.75929740829326,
            "unit": "iter/sec",
            "range": "stddev: 0.00019362955537611642",
            "extra": "mean: 12.69691367123218 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 249.73129230886212,
            "unit": "iter/sec",
            "range": "stddev: 0.0002312932526886536",
            "extra": "mean: 4.004303949075082 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 82.28892676181283,
            "unit": "iter/sec",
            "range": "stddev: 0.0006085887570126295",
            "extra": "mean: 12.152303345680066 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4272194.429478894,
            "unit": "iter/sec",
            "range": "stddev: 1.2386220875413749e-8",
            "extra": "mean: 234.07174380935197 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 227.90869381377834,
            "unit": "iter/sec",
            "range": "stddev: 0.0004223517915474342",
            "extra": "mean: 4.3877220445881235 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10964.379736139845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019097801352707265",
            "extra": "mean: 91.2044296225792 usec\nrounds: 6117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1425733.8963661403,
            "unit": "iter/sec",
            "range": "stddev: 1.1073421192885575e-7",
            "extra": "mean: 701.39315797202 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.3313616930621,
            "unit": "iter/sec",
            "range": "stddev: 0.00027620356656358607",
            "extra": "mean: 5.905580572916236 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1554946.4386473408,
            "unit": "iter/sec",
            "range": "stddev: 8.841117409809435e-8",
            "extra": "mean: 643.1089683512874 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 557.2667301187253,
            "unit": "iter/sec",
            "range": "stddev: 0.00006053180615779961",
            "extra": "mean: 1.7944728187648142 msec\nrounds: 469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1428297.7982790812,
            "unit": "iter/sec",
            "range": "stddev: 8.784390929380574e-8",
            "extra": "mean: 700.1341045297934 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 72.24613815859588,
            "unit": "iter/sec",
            "range": "stddev: 0.0006250162565597842",
            "extra": "mean: 13.841570296875716 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4448.496641763686,
            "unit": "iter/sec",
            "range": "stddev: 0.000052666499331366904",
            "extra": "mean: 224.79504437785346 usec\nrounds: 2321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 70.31823127022375,
            "unit": "iter/sec",
            "range": "stddev: 0.0006654989254650732",
            "extra": "mean: 14.22106304348201 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.53171314842801,
            "unit": "iter/sec",
            "range": "stddev: 0.0006783527831760991",
            "extra": "mean: 11.556456744184622 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 210.9886088522084,
            "unit": "iter/sec",
            "range": "stddev: 0.00992600774139858",
            "extra": "mean: 4.7395923668110065 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6472.105951728018,
            "unit": "iter/sec",
            "range": "stddev: 0.000013425790632561075",
            "extra": "mean: 154.50921345516684 usec\nrounds: 3612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4515.771046716015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000480849443444475",
            "extra": "mean: 221.446125070319 usec\nrounds: 1767"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 87.5440428041639,
            "unit": "iter/sec",
            "range": "stddev: 0.0005325948160918132",
            "extra": "mean: 11.42282179310591 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5625047773583551,
            "unit": "iter/sec",
            "range": "stddev: 0.0010196112798549035",
            "extra": "mean: 639.9980432000007 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 253.83934781202626,
            "unit": "iter/sec",
            "range": "stddev: 0.0002489831392848319",
            "extra": "mean: 3.9394995638758203 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.897730537621125,
            "unit": "iter/sec",
            "range": "stddev: 0.0004240995113250903",
            "extra": "mean: 204.17619800000466 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.0211631283634,
            "unit": "iter/sec",
            "range": "stddev: 0.00032647771702171954",
            "extra": "mean: 15.619834928568618 msec\nrounds: 56"
          }
        ]
      }
    ]
  }
}