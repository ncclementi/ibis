window.BENCHMARK_DATA = {
  "lastUpdate": 1678879025398,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "eeabdee8dfc6c0d188480e12f3871a5e6cd937e5",
          "message": "feat(snowflake): support binary variance reduction with filters",
          "timestamp": "2023-03-15T07:12:05-04:00",
          "tree_id": "726f31d0fa8bdaef77ea2cd1a819c75c560cc9ae",
          "url": "https://github.com/ibis-project/ibis/commit/eeabdee8dfc6c0d188480e12f3871a5e6cd937e5"
        },
        "date": 1678878947723,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.9520362460887,
            "unit": "iter/sec",
            "range": "stddev: 0.000025897152707842254",
            "extra": "mean: 1.3298720553936147 msec\nrounds: 686"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.648434697162869,
            "unit": "iter/sec",
            "range": "stddev: 0.0013510747466577951",
            "extra": "mean: 177.04019849999972 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146708.5139063112,
            "unit": "iter/sec",
            "range": "stddev: 3.135735312851922e-7",
            "extra": "mean: 6.816236995206735 usec\nrounds: 37313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 306.354499487832,
            "unit": "iter/sec",
            "range": "stddev: 0.00019480226947628042",
            "extra": "mean: 3.2641923055539084 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5237.7396871571755,
            "unit": "iter/sec",
            "range": "stddev: 0.00002177212400181586",
            "extra": "mean: 190.9220502981426 usec\nrounds: 1511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 321.59038809523685,
            "unit": "iter/sec",
            "range": "stddev: 0.00015906031161477992",
            "extra": "mean: 3.1095456736843037 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5492933672603355,
            "unit": "iter/sec",
            "range": "stddev: 0.0016329248606969785",
            "extra": "mean: 392.26556380000943 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 122.00386521504812,
            "unit": "iter/sec",
            "range": "stddev: 0.0005169948382354662",
            "extra": "mean: 8.196461630435778 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17222402016827618,
            "unit": "iter/sec",
            "range": "stddev: 0.09451437897353195",
            "extra": "mean: 5.806390995999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.85673140113937,
            "unit": "iter/sec",
            "range": "stddev: 0.0005565699225270563",
            "extra": "mean: 8.20635830701963 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.51507401656247,
            "unit": "iter/sec",
            "range": "stddev: 0.0006765399481132516",
            "extra": "mean: 9.301021360464786 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 306.37624088614587,
            "unit": "iter/sec",
            "range": "stddev: 0.00020610498929305265",
            "extra": "mean: 3.2639606684501863 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 493616.510705275,
            "unit": "iter/sec",
            "range": "stddev: 1.352438860977362e-7",
            "extra": "mean: 2.025864164412184 usec\nrounds: 2238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.021664493487,
            "unit": "iter/sec",
            "range": "stddev: 0.00006137058838322013",
            "extra": "mean: 13.154145027772616 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.82009998831303,
            "unit": "iter/sec",
            "range": "stddev: 0.000613450679724779",
            "extra": "mean: 8.208825966289112 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.61548299570836,
            "unit": "iter/sec",
            "range": "stddev: 0.00007142093645162886",
            "extra": "mean: 8.29080956410531 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74568.8374456238,
            "unit": "iter/sec",
            "range": "stddev: 4.799031802254167e-7",
            "extra": "mean: 13.410427656582526 usec\nrounds: 5308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.95915732299937,
            "unit": "iter/sec",
            "range": "stddev: 0.0001449006837452464",
            "extra": "mean: 15.394288368422862 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.0739306916653,
            "unit": "iter/sec",
            "range": "stddev: 0.0005695444244593934",
            "extra": "mean: 8.259416327588013 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1873175.830809938,
            "unit": "iter/sec",
            "range": "stddev: 8.84664670506125e-8",
            "extra": "mean: 533.8527134249924 nsec\nrounds: 172385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 298.9856683402975,
            "unit": "iter/sec",
            "range": "stddev: 0.00037361397974170017",
            "extra": "mean: 3.3446419206348934 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8676542790086185,
            "unit": "iter/sec",
            "range": "stddev: 0.049967867093106036",
            "extra": "mean: 1.1525327819999915 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1893911.863291208,
            "unit": "iter/sec",
            "range": "stddev: 7.052944757728694e-8",
            "extra": "mean: 528.0076752157922 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.058306743950894,
            "unit": "iter/sec",
            "range": "stddev: 0.0007430146296844968",
            "extra": "mean: 26.27547270370727 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.14870213863793,
            "unit": "iter/sec",
            "range": "stddev: 0.00022768874639386756",
            "extra": "mean: 3.519284066664833 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5629.934353475625,
            "unit": "iter/sec",
            "range": "stddev: 0.00004997742563243677",
            "extra": "mean: 177.6219645230237 usec\nrounds: 3608"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 122.13294869484206,
            "unit": "iter/sec",
            "range": "stddev: 0.0005457619804064177",
            "extra": "mean: 8.187798711865804 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5209.04349855118,
            "unit": "iter/sec",
            "range": "stddev: 0.00006390421731467205",
            "extra": "mean: 191.9738240385467 usec\nrounds: 2887"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.3797250733642,
            "unit": "iter/sec",
            "range": "stddev: 0.00004359445471817809",
            "extra": "mean: 1.8574250727286055 msec\nrounds: 440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.13942867647413,
            "unit": "iter/sec",
            "range": "stddev: 0.00004052554586837658",
            "extra": "mean: 6.129726014813531 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5334.629430119471,
            "unit": "iter/sec",
            "range": "stddev: 0.00005021397805493782",
            "extra": "mean: 187.45444516801322 usec\nrounds: 2608"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.34793032397187,
            "unit": "iter/sec",
            "range": "stddev: 0.000046645764013430935",
            "extra": "mean: 3.444143717105868 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 109.59850108315374,
            "unit": "iter/sec",
            "range": "stddev: 0.0005680000292505184",
            "extra": "mean: 9.124212376237589 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5202.996262713021,
            "unit": "iter/sec",
            "range": "stddev: 0.000058976199900639816",
            "extra": "mean: 192.19694758699782 usec\nrounds: 3377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5311.074667767786,
            "unit": "iter/sec",
            "range": "stddev: 0.00005156322851850307",
            "extra": "mean: 188.2858107924689 usec\nrounds: 2965"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 316.28762926984865,
            "unit": "iter/sec",
            "range": "stddev: 0.00019490814890659705",
            "extra": "mean: 3.1616791409404925 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.46871187504628,
            "unit": "iter/sec",
            "range": "stddev: 0.000058162002446263986",
            "extra": "mean: 8.89136172477025 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1722744.1672708932,
            "unit": "iter/sec",
            "range": "stddev: 1.916121821102912e-7",
            "extra": "mean: 580.46924145688 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7595516529506767,
            "unit": "iter/sec",
            "range": "stddev: 0.0026288384564298294",
            "extra": "mean: 568.3265952000056 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5563.868371892264,
            "unit": "iter/sec",
            "range": "stddev: 0.000046624620136114734",
            "extra": "mean: 179.7310671567705 usec\nrounds: 2040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 93.41903454814651,
            "unit": "iter/sec",
            "range": "stddev: 0.013633167777749177",
            "extra": "mean: 10.704456589996312 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.70989798077025,
            "unit": "iter/sec",
            "range": "stddev: 0.00024007967293525117",
            "extra": "mean: 6.222392102567666 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 174.48784312701645,
            "unit": "iter/sec",
            "range": "stddev: 0.003389991099965269",
            "extra": "mean: 5.731058290817781 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.582393808207696,
            "unit": "iter/sec",
            "range": "stddev: 0.0002621088653027331",
            "extra": "mean: 94.49657781818712 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 104.35070901833843,
            "unit": "iter/sec",
            "range": "stddev: 0.0005872799018202436",
            "extra": "mean: 9.583068571429271 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.996191812236,
            "unit": "iter/sec",
            "range": "stddev: 0.0003167308569375798",
            "extra": "mean: 7.29947297637717 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.63002312569067,
            "unit": "iter/sec",
            "range": "stddev: 0.00010149010473395815",
            "extra": "mean: 20.149093976189512 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12796.034371267413,
            "unit": "iter/sec",
            "range": "stddev: 0.000001818264116450713",
            "extra": "mean: 78.14921177809813 usec\nrounds: 6266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.76574509485506,
            "unit": "iter/sec",
            "range": "stddev: 0.00058817897773923",
            "extra": "mean: 9.194071158413854 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.7030871494014,
            "unit": "iter/sec",
            "range": "stddev: 0.00022203743807623223",
            "extra": "mean: 3.239358599339291 msec\nrounds: 302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7016551.151237397,
            "unit": "iter/sec",
            "range": "stddev: 3.88513111579745e-9",
            "extra": "mean: 142.52016103718378 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 748655.2978885428,
            "unit": "iter/sec",
            "range": "stddev: 2.833420757837921e-7",
            "extra": "mean: 1.3357282087234712 usec\nrounds: 22727"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6908298888097975,
            "unit": "iter/sec",
            "range": "stddev: 0.007293846713991437",
            "extra": "mean: 1.447534358600001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8875459436737693,
            "unit": "iter/sec",
            "range": "stddev: 0.004427538493597669",
            "extra": "mean: 1.126702236799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.85491671332564,
            "unit": "iter/sec",
            "range": "stddev: 0.00008610767835179568",
            "extra": "mean: 9.628817119562427 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6168500.95415173,
            "unit": "iter/sec",
            "range": "stddev: 8.35602871258497e-9",
            "extra": "mean: 162.11394104200883 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12142.150424707033,
            "unit": "iter/sec",
            "range": "stddev: 0.000042504952658113296",
            "extra": "mean: 82.35773442282388 usec\nrounds: 3916"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.30042576571299,
            "unit": "iter/sec",
            "range": "stddev: 0.0005823050980144961",
            "extra": "mean: 22.074847710523738 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 292.4982359800122,
            "unit": "iter/sec",
            "range": "stddev: 0.000019444895273033868",
            "extra": "mean: 3.4188240371758503 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10996069.40064863,
            "unit": "iter/sec",
            "range": "stddev: 2.998734683544083e-9",
            "extra": "mean: 90.94158681301413 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1158.8753525129205,
            "unit": "iter/sec",
            "range": "stddev: 0.00011213392903737579",
            "extra": "mean: 862.9055729173866 usec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.816636871612,
            "unit": "iter/sec",
            "range": "stddev: 0.00012928150823319443",
            "extra": "mean: 10.659090256757969 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.838543079759361,
            "unit": "iter/sec",
            "range": "stddev: 0.0023414913863171113",
            "extra": "mean: 1.1925445742000194 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.095532644664814,
            "unit": "iter/sec",
            "range": "stddev: 0.028084613788015723",
            "extra": "mean: 32.158960305559326 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5578788.347412324,
            "unit": "iter/sec",
            "range": "stddev: 7.80973785492631e-9",
            "extra": "mean: 179.25039233009554 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.790978942050884,
            "unit": "iter/sec",
            "range": "stddev: 0.00038873635391689773",
            "extra": "mean: 17.0094122941154 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.565023166340303,
            "unit": "iter/sec",
            "range": "stddev: 0.0005210936672526045",
            "extra": "mean: 37.64348307691552 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.6022603911263,
            "unit": "iter/sec",
            "range": "stddev: 0.0011082338651527957",
            "extra": "mean: 64.09327718749935 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.1047360130437,
            "unit": "iter/sec",
            "range": "stddev: 0.00003501247212845785",
            "extra": "mean: 1.4575034211409215 msec\nrounds: 596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5758.2550415262685,
            "unit": "iter/sec",
            "range": "stddev: 0.000048113518488204483",
            "extra": "mean: 173.66372152473164 usec\nrounds: 2151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.16951779559726,
            "unit": "iter/sec",
            "range": "stddev: 0.0006114527777127251",
            "extra": "mean: 10.507566111113176 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 319.8672397889207,
            "unit": "iter/sec",
            "range": "stddev: 0.00019386887329351742",
            "extra": "mean: 3.1262970245402326 msec\nrounds: 326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.15003901917869,
            "unit": "iter/sec",
            "range": "stddev: 0.0003028439812256272",
            "extra": "mean: 14.892024109090842 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.6599104268546,
            "unit": "iter/sec",
            "range": "stddev: 0.00007105495123563148",
            "extra": "mean: 5.163691327729392 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1837120.8175294248,
            "unit": "iter/sec",
            "range": "stddev: 1.0851098690540657e-7",
            "extra": "mean: 544.3300138228296 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 336.6862477482444,
            "unit": "iter/sec",
            "range": "stddev: 0.000013094749396328606",
            "extra": "mean: 2.9701242824380083 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13878.14689734544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031463590586997225",
            "extra": "mean: 72.0557295867272 usec\nrounds: 7189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.327012139346,
            "unit": "iter/sec",
            "range": "stddev: 0.0005859614328059534",
            "extra": "mean: 8.746839275228876 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1705.392455202291,
            "unit": "iter/sec",
            "range": "stddev: 0.00002207968035734061",
            "extra": "mean: 586.3752926486247 usec\nrounds: 1401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.36663048146015,
            "unit": "iter/sec",
            "range": "stddev: 0.0006351135319745064",
            "extra": "mean: 9.674301999999509 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5612.813105914515,
            "unit": "iter/sec",
            "range": "stddev: 0.00005031730856806293",
            "extra": "mean: 178.16378010987887 usec\nrounds: 3861"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.22078559397282,
            "unit": "iter/sec",
            "range": "stddev: 0.0005555171594977675",
            "extra": "mean: 9.595014989580264 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.85908526918972,
            "unit": "iter/sec",
            "range": "stddev: 0.01668540864789091",
            "extra": "mean: 10.218775264955836 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.58712398059018,
            "unit": "iter/sec",
            "range": "stddev: 0.00006929692000668025",
            "extra": "mean: 6.075809430377618 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8473.083006534813,
            "unit": "iter/sec",
            "range": "stddev: 0.00001341736368014768",
            "extra": "mean: 118.02079588135229 usec\nrounds: 4953"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 251.14100322605228,
            "unit": "iter/sec",
            "range": "stddev: 0.0036910702923383313",
            "extra": "mean: 3.9818268906885708 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.6333432997231,
            "unit": "iter/sec",
            "range": "stddev: 0.0001012429740365357",
            "extra": "mean: 10.242402505157644 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.70057137053543,
            "unit": "iter/sec",
            "range": "stddev: 0.0008207665067099599",
            "extra": "mean: 8.284964923075028 msec\nrounds: 117"
          }
        ]
      }
    ]
  }
}